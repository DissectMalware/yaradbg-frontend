function eval_condition(condition_tasks, evaluated_rule) {
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
                case 'and':
                    result = and_operator(task.args[0], task.args[1])
                    break
                case 'or':
                    result = or_operator(task.args[0], task.args[1])
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
    debugger;
}

function get_arg(arg, evaluated_tasks) {
    if (arg.name === 'Task') {
        return evaluated_tasks.get(arg.val)
    } else {
        return arg
    }
}

function of_operator(arg_left, arg_right, strings) {
    let string_set = []

    if (arg_left.name === 'ALL') {
        arg_left = strings.size
    } else {
        arg_left = parseInt(arg_left.val)
    }

    if (arg_right.name === 'THEM') {
        for (let str_name of strings.keys()) {
            string_set.push(str_name)
        }
    } else if (arg_right.name == 'STRING_IDENTIFIER_WITH_WILDCARD') {
        let prefix = get_string_name(arg_right.val).slice(0, -1)
        for (let str_name of strings.keys()) {
            if (str_name.startsWith(prefix)) {
                string_set.push(str_name)
            }
        }
    }

    let res = false
    if (arg_left > 0) {
        for (let i = 0; i < string_set.length; i++) {
            if (strings.get(string_set[i]).length > 0) {
                arg_left -= 1
                if (arg_left === 0) {
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
        value: res,
        line: arg_left.line,
        col: arg_left.col
    }
}

function add_operator(arg_left, arg_right) {
    return {
        name: 'add_res',
        val: (parseInt(arg_left.val) + parseInt(arg_right.val)).toString(),
        line: arg_left.line,
        col: arg_left.col
    }
}

function and_operator(arg_left, arg_right) {
    return {
        name: 'and_res',
        val: (parseBool(arg_left.val) && parseBool(arg_right.val)).toString(),
        line: arg_left.line,
        col: arg_left.col
    }
}

function or_operator(arg_left, arg_right) {
    return {
        name: 'or_res',
        val: (parseBool(arg_left.val) || parseBool(arg_right.val)).toString(),
        line: arg_left.line,
        col: arg_left.col
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