self.onmessage = function (e) {
    data = e.data
    res = match_rule(data.file, data.rule)
    self.postMessage(res);
}

function match_rule(file, rule) {
    let rule_result = []
    Object.keys(rule).forEach(function (key) {

        if (key == 'string') {
            let matches = match_strings(rule[key])
        }
        else if(key == 'condition')
        {
            let eval_step_res = eval_condition(rule[key])
        }
    });

    return rule_result
}

function eval_condition(condition)
{
    debugger;
}

function match_strings(strings) {

    let matches = null
    for (const index in strings) {
        let string = strings[index]
        debugger
        if (string.type == 'hex_exp_bytecode') {
            matches = find_all_hex_expression(file, string.val)
            if (matches != null) {
                for (let i = 0; i < matches.length; i++) {
                    rule_result.push({string: string, start: matches[i].start, end: matches[i].end})
                }
            }
        } else if (string.type == 'literal_string') {
            debugger;
            let nocase = false,
                ascii = false,
                wide = false;
            for (let i = 0; i < string.modifiers.length; i++) {
                switch (string.modifiers[i].modifier) {
                    case 'nocase':
                        nocase = true;
                        break
                    case 'ascii':
                        ascii = true;
                        break
                    case 'wide':
                        wide = true;
                }
            }
            if (wide == false)
                ascii = true

            let bytecode = ''
            string.val = string.val.substr(1, string.val.length - 2)


            for (let i = 0; i < string.val.length; i++) {
                bytecode += `b ${string.val.charCodeAt(i).toString(16)};`
            }
            bytecode += 'match;'

            matches = find_all_hex_expression(file, bytecode)
            if (matches != null) {
                for (let i = 0; i < matches.length; i++) {
                    rule_result.push({string: string, start: matches[i].start, end: matches[i].end})
                }
            }
        }
    }

    return matches
}

function find_all_hex_expression(file_content, hex_bytecode) {
    let index = 0
    let matches = []
    let match = null

    let instructions = get_instructions(hex_bytecode)
    let parts = []
    let has_start_mask, has_end_mask;
    var lookahead = null

    if (instructions[0][0] == 'b')
        lookahead = instructions[0][1]

    let start = performance.now()
    while (index < file_content.length) {
        match = find_hex_expression(file_content, instructions, index)
        if (match != null) {
            index = match.start + 1
            matches.push(match)
        } else {
            break
        }
    }
    let end = performance.now()
    let diff = (end - start).toString()

    return matches
}

function get_instructions(bytecode) {
    let instructions = []
    let lines = bytecode.split(';')
    let has_start_mask = false
    let has_end_mask = false
    let parts = null

    for (let i = 0; i < lines.length; i++) {
        parts = lines[i].split(/[ ,]/)
        if (parts[0] == 'b' || parts[0] == 'nb') {
            has_start_mask = parts[1].startsWith('?')
            has_end_mask = parts[1].endsWith('?')
            parts[1] = parseInt(parts[1].replace('?', '0'), 16)
            if (has_start_mask === false && has_end_mask === false) {
                parts.push(0xff)
            } else if (has_start_mask === true && has_end_mask === false) {
                parts.push(0x0f)
            } else if (has_start_mask === false && has_end_mask === true) {
                parts.push(0xf0)
            } else {
                parts.push(0)
            }
            if (parts[0] == 'nb') {
                parts[2] = parseInt(parts[2])
            }
        } else if (parts[0] == 'jmp') {
            parts[1] = get_jmp_loc(i, parts[1])
        } else if (parts[0] == 'split') {
            parts[1] = get_jmp_loc(i, parts[1])
            parts[2] = get_jmp_loc(i, parts[2])
        } else if (parts[0] == 'ignore') {
            parts[1] = parseInt(parts[1])
            parts[2] = parseInt(parts[2])
        }
        instructions.push(parts)
    }
    return instructions
}

function find_hex_expression(file_content, instructions, start_index) {

    let current_state = [0]
    let next_state = []

    let c_thread = null
    let c_prgcounter = 0
    let op = null
    let instruction = null
    let is_match = false

    let found_match = null

    let ignore_stack = []
    let ignore = null
    for (let i = start_index; i < file_content.length; i++) {
        for (let t = 0; t < current_state.length; t++) {
            c_prgcounter = current_state[t]
            instruction = instructions[c_prgcounter]
            op = instruction[0]
            switch (op) {
                case 'b':
                    is_match = instruction[2] == 0 ? true : instruction[1] == (file_content[i] & instruction[2])
                    if (is_match == false) {
                        if (ignore_stack.length == 0) {
                            break;
                        } else {
                            ignore = ignore_stack.pop()
                            i = ignore.end
                            c_prgcounter = ignore.ignore_loc
                            ignore.end -= 1
                            if (ignore.start <= ignore.end) {
                                ignore_stack.push(ignore)
                            }
                        }
                    }
                    next_state.push(c_prgcounter + 1)
                    break;
                case 'ignore':
                    if (instruction[2] == -1)
                        instruction[2] = file_content.length
                    ignore_stack.push({
                        start: i + instruction[1] - 1,
                        end: i + instruction[2] - 1,
                        ignore_loc: c_prgcounter
                    })
                    i = i + instruction[1] - 1
                    next_state.push(c_prgcounter + 1)
                    break

                case 'jmp':
                    current_state.push(instruction[1])
                    break;
                case 'split':
                    current_state.push(instruction[1])
                    current_state.push(instruction[2])
                    break
                case 'match':
                    if (found_match == null)
                        found_match = {
                            start: start_index,
                            end: i - 1,
                            match: true
                        }
                    else {
                        if (found_match.end < (i - 1)) {
                            found_match = {
                                start: start_index,
                                end: i - 1,
                                match: true
                            }
                        }
                    }

            }
        }

        if (next_state.length == 0) {
            if (found_match != null) {
                return found_match
            }
            current_state = [0]
            start_index = i + 1
        } else {
            current_state = next_state
            next_state = []
        }
    }
    return null
}


function get_jmp_loc(current_loc, jump_addr) {
    let final_add = jump_addr
    if (jump_addr.startsWith('[')) {
        final_add = jump_addr.substr(1, jump_addr.length - 2)
        final_add = parseInt(final_add) + current_loc
    } else
        final_add = parseInt(final_add)
    return final_add
}