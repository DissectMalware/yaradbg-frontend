export function eval_condition(file, condition_tasks, rules, evaluated_rule) {
    //debugger;
    let result = null
    let task = null
    let evaluated_tasks = new Map()
    for (let i = 0; i < condition_tasks.length; i++) {
        task = condition_tasks[i]
        result = null
        if ('op' in task) {
            for (let j = 0; j < task.args.length; j++) {
                task.args[j] = get_arg(task.args[j], evaluated_rule, evaluated_tasks, file)
            }
            switch (task.op) {
                case 'at':
                    result = at_operator(task.args[0], task.args[1], evaluated_rule.strings)
                    break;
                case 'of':
                    result = of_operator(task.args[0], task.args[1], evaluated_rule.strings)
                    break
                case '+':
                    result = add_operator(task.args[0], task.args[1])
                    break
                case '-':
                    result = minus_operator(task.args[0], task.args[1])
                    break
                case 'and':
                    result = and_operator(task.args[0], task.args[1])
                    break
                case 'or':
                    result = or_operator(task.args[0], task.args[1])
                    break
                case 'not':
                    result = not_operator(task.args[0])
                    break
                case 'uint8':
                case 'uint8be':
                    result = integer_operator(task.args[1], file, 1)
                    break
                case 'uint16':
                    result = integer_operator(task.args[1], file, 2)
                    break
                case 'uint32':
                    result = integer_operator(task.args[1], file, 4)
                    break
                case 'uint16be':
                    result = integer_operator(task.args[1], file, 2, false, false)
                    break
                case 'uint32be':
                    result = integer_operator(task.args[1], file, 4, false, false)
                    break
                case 'int8':
                case 'int8be':
                    result = integer_operator(task.args[1], file, 1, true)
                    break
                case 'int16':
                    result = integer_operator(task.args[1], file, 2, true)
                    break
                case 'int32':
                    result = integer_operator(task.args[1], file, 4, true)
                    break
                case 'int16be':
                    result = integer_operator(task.args[1], file, 2, true, false)
                    break
                case 'int32be':
                    result = integer_operator(task.args[1], file, 4, true, false)
                    break
                case 'identifier':
                    result = is_identifier_matched(task.args[0], rules)
                    break
                case 'STRING_IDENTIFIER':
                    result = task.args[0]
                    break
                case '<':
                case '<=':
                case '>':
                case '>=':
                case '==':
                case '!=':
                    result = logical_comparison(task.op, task.args[0], task.args[1])
                    break
                case 'in':
                    result = in_operator(task.args[0], task.args[1], evaluated_rule.strings)
                    break
                case '..':
                    result = {
                        name: `range`,
                        val: [get_number(task.args[0].val), get_number(task.args[1].val)],
                        start_pos: task.args[0].start_pos,
                        end_pos: task.args[1].end_pos
                    }
                    break
                default:
                    console.log(`"${task.op}" is not supported yet`)
                    result = {
                        name: `${task.op}_unsupported`,
                        val: false,
                        start_pos: task.args[0].start_pos,
                        end_pos: task.args[task.args.length - 1].end_pos
                    }


            }
            if (result !== null) {
                evaluated_tasks.set(task.id, result)
                task.result = result
            }
        } else {
            // token
        }
    }

    evaluated_rule.condition = condition_tasks
    //debugger;
}

function in_operator(arg_left, range, strings) {
    let target = strings.get(arg_left.val_str.slice(1))
    let result = false;
    for (let i = 0; i < target.length; i++) {
        if (target[i].start >= range.val[0] && target[i].end <= range.val[1]) {
            result = true;
            break;
        }
    }
    return {
        name: 'in_res',
        val: result,
        start_pos: arg_left.start_pos,
        end_pos: range.end_pos
    }

}

function at_operator(arg_left, arg_right, strings) {
    let target = strings.get(arg_left.val_str.slice(1))
    let result = false;
    for (let i = 0; i < target.length; i++) {
        if (target[i].start == parseInt(arg_right.val)) {
            result = true;
            break;
        }
    }
    return {
        name: 'at_res',
        val: result,
        start_pos: arg_left.start_pos,
        end_pos: arg_right.end_pos
    }

}

function logical_comparison(op, arg_a, arg_b) {
    const ops = {
        '<': function (x, y) { return x < y },
        '<=': function (x, y) { return x <= y },
        '>': function (x, y) { return x > y },
        '>=': function (x, y) { return x >= y },
        '==': function (x, y) { return x == y },
        '!=': function (x, y) { return x != y }
    }

    let val_a = arg_a.name == "NUMBER" ? get_number(arg_a.val) : parseInt(arg_a.val)
    let val_b = arg_b.name == "NUMBER" ? get_number(arg_b.val) : parseInt(arg_b.val)

    return {
        name: 'logical_comp_res',
        val: ops[op](val_a, val_b),
        start_pos: arg_a.start_pos,
        end_pos: arg_b.end_pos
    }

}


function get_arg(arg, evaluated_rule, evaluated_tasks, file) {
    if (arg.name === 'Task') {
        return evaluated_tasks.get(arg.val)
    } else if (arg.name == 'STRING_IDENTIFIER') {
        let string_name = arg.val.slice(1)
        arg.val_str = arg.val
        arg.val = evaluated_rule.strings.get(string_name).length >= 1
        return arg
    } else if (arg.name == 'STRING_COUNT') {
        let string_name = arg.val.slice(1)
        arg.val = evaluated_rule.strings.get(string_name).length
        return arg
    } else if (arg.name === 'FILESIZE') {
        arg.val = file.length
        return arg
    } else {
        return arg
    }
}

function is_identifier_matched(arg, rules) {
    let identifier_matched = false
    if (rules.has(arg.val)) {
        identifier_matched = rules.get(arg.val).condition[rules.get(arg.val).condition.length - 1].result.val
    }
    return {
        name: 'identifier_res',
        val: identifier_matched,
        start_pos: arg.start_pos,
        end_pos: arg.end_pos
    }
}

function of_operator(arg_left, arg_right, strings) {
    let string_set = []

    if (arg_right.name === 'THEM') {
        for (let str_name of strings.keys()) {
            string_set.push(str_name)
        }
    } else if (arg_right.name === 'STRING_IDENTIFIER_WITH_WILDCARD') {
        let prefix = get_string_name(arg_right.val).slice(0, -1)
        for (let str_name of strings.keys()) {
            if (str_name.startsWith(prefix)) {
                string_set.push(str_name)
            }
        }
    }

    let args = 0
    if (arg_left.name === 'ALL') {
        args = string_set.length
    } else if (arg_left.name === 'ANY') {
        args = 1
    } else {
        args = get_number(arg_left.val)
    }


    let res = false
    if (args > 0) {
        for (let i = 0; i < string_set.length; i++) {
            if (strings.get(string_set[i]).length > 0) {
                args -= 1
                if (args === 0) {
                    res = true
                    break
                }
            }
        }
    } else {
        res = true
    }

    return {
        name: 'of_res',
        val: res,
        start_pos: arg_left.start_pos,
        end_pos: arg_left.end_pos
    }
}

function add_operator(arg_left, arg_right) {
    return {
        name: 'add_res',
        val: get_number(arg_left.val) + get_number(arg_right.val),
        start_pos: arg_left.start_pos,
        end_pos: arg_left.end_pos
    }
}

function minus_operator(arg_left, arg_right) {
    return {
        name: 'minus_res',
        val: get_number(arg_left.val) - get_number(arg_right.val),
        start_pos: arg_left.start_pos,
        end_pos: arg_left.end_pos
    }
}

function and_operator(arg_left, arg_right) {
    return {
        name: 'and_res',
        val: get_boolean(arg_left.val) && get_boolean(arg_right.val),
        start_pos: arg_left.start_pos,
        end_pos: arg_left.end_pos
    }
}

function or_operator(arg_left, arg_right) {
    return {
        name: 'or_res',
        val: get_boolean(arg_left.val) || get_boolean(arg_right.val),
        start_pos: arg_left.start_pos,
        end_pos: arg_left.end_pos
    }
}

function not_operator(arg) {
    return {
        name: 'or_res',
        val: !get_boolean(arg.val),
        start_pos: arg.start_pos,
        end_pos: arg.end_pos
    }
}

function integer_operator(arg_left, file, byte_count, signed = false, little_endian = true) {

    let val = NaN

    let offset = parseInt(arg_left.val)
    if (offset + byte_count < file.buffer.byteLength) {
        let data_view = new DataView(file.buffer, offset, byte_count)
        switch (byte_count) {
            case 1:
                if (offset < file.length)
                    val = signed ? data_view.getInt8(0) : data_view.getUint8(0)
                break
            case 2:
                if (offset < file.length - 1)
                    val = signed ? data_view.getInt16(0, little_endian) :
                        data_view.getUint16(0, little_endian)
                break
            case 4:
                if (offset < file.length - 3)
                    val = signed ? data_view.getInt32(0, little_endian) :
                        data_view.getUint32(0, little_endian)
                break
        }
    }
    return {
        name: `${signed ? "" : "u"}int${byte_count * 8}${little_endian ? "" : "be"}_res`,
        val: val,
        start_pos: arg_left.start_pos,
        end_pos: arg_left.end_pos
    }
}

function parseBool(arg) {
    let res = false
    if (arg === 'true')
        res = true
    return res
}

function get_string_name(string) {
    if (string.length > 1 && (string[0] === '$' || string[0] === '#' || string[0] === '@'))
        return string.slice(1)
    else
        return string
}

function get_number(string) {
    if (typeof string == 'number')
        return string

    let number = 0
    if (string.startsWith('0x')) {
        number = parseInt(string, 16)
    } else {
        number = parseInt(string)
        if (string.endsWith('KB')) {
            number *= 1000;
        } else if (string.endsWith('MB')) {
            number *= 1000_000;
        }
    }
    return number
}

function get_boolean(string) {
    if (typeof string == 'boolean')
        return string
    return parseBool(string)
}

