export function eval_condition(file, condition_tasks, rules, evaluated_rule) {
    debugger;
    let result = null
    let task = null
    let evaluated_task = new Map()
    for (let i = 0; i < condition_tasks.length; i++) {
        task = condition_tasks[i]
        result = null
        if ('op' in task) {
            for (let j = 0; j < task.args.length; j++) {
                task.args[j] = get_arg(task.args[j], evaluated_task)
            }
            switch (task.op) {
                case 'of':
                    result = of_operator(task.args[0], task.args[1], evaluated_rule.strings)
                    break
                case '+':
                    result = add_operator(task.args[0], task.args[1])
                    break
                case '==':
                    result = eq_operator(task.args[0], task.args[1])
                    break
                case 'and':
                    result = and_operator(task.args[0], task.args[1])
                    break
                case 'or':
                    result = or_operator(task.args[0], task.args[1])
                    break
                case  'uint8':
                case  'uint8be':
                    result = integer_operator(task.args[1], file, 1)
                    break
                case  'uint16':
                    result = integer_operator(task.args[1], file, 2)
                    break
                case  'uint32':
                    result = integer_operator(task.args[1], file, 4)
                    break
                case  'uint16be':
                    result = integer_operator(task.args[1], file, 2, false, false)
                    break
                case  'uint32be':
                    result = integer_operator(task.args[1], file, 4, false, false)
                    break
                case  'int8':
                case  'int8be':
                    result = integer_operator(task.args[1], file, 1, true)
                    break
                case  'int16':
                    result = integer_operator(task.args[1], file, 2, true)
                    break
                case  'int32':
                    result = integer_operator(task.args[1], file, 4, true)
                    break
                case  'int16be':
                    result = integer_operator(task.args[1], file, 2, true, false)
                    break
                case  'int32be':
                    result = integer_operator(task.args[1], file, 4, true, false)
                    break
                case 'identifier':
                    result = is_identifier_matched(task.args[0], rules)
                    break

            }
            if (result !== null) {
                evaluated_task.set(task.id, result)
                task.result = result
            }
        } else {
            // token
        }
    }

    evaluated_rule.condition = condition_tasks
    debugger;
}


function get_arg(arg, evaluated_tasks) {
    if (arg.name === 'Task') {
        return evaluated_tasks.get(arg.val)
    } else {
        return arg
    }
}

function is_identifier_matched(arg, rules){

    let identifier_matched = false
    if (rules.hasOwnProperty(arg.val)){
        identifier_matched = rules[arg.val].condition[rules[arg.val].condition.length -1].result.val
    }
    return {
        name: 'identifier_res',
        val:identifier_matched,
        start_pos: arg.start_pos,
        end_pos: arg.end_pos
    }
}

function of_operator(arg_left, arg_right, strings) {
    let string_set = []

    let args = 0
    if (arg_left.name === 'ALL') {
        args = strings.size
    } else {
        args = get_number(arg_left.val)
    }

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

function eq_operator(arg_left, arg_right) {
    let arg_left_val = get_number(arg_left.val)
    if (isNaN(arg_left_val)) {
        arg_left_val = arg_left.val
    }

    let arg_right_val = get_number(arg_right.val)
    if (isNaN(arg_right_val)) {
        arg_right_val = arg_right.val
    }
    return {
        name: 'eq_res',
        val: arg_left_val === arg_right_val,
        start_pos: arg_left.start_pos,
        end_pos: arg_left.end_pos
    }
}

function integer_operator(arg_left, file, byte_count, signed = false, little_endian = true) {

    let val = NaN

    let offset = parseInt(arg_left.val)
    if(offset+byte_count < file.buffer.byteLength) {
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
    return string.startsWith('0x') ? parseInt(string, 16) : parseInt(string)
}

function get_boolean(string) {
    if (typeof string == 'boolean')
        return string
    return parseBool(string)
}

