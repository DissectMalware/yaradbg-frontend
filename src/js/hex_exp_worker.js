self.importScripts("/yaradbg-frontend/src/js/operators.js")

self.onmessage = function (e) {
    data = e.data
    res = match_rule(data.file, data.rule)
    self.postMessage(res);
}

function match_rule(file, rule) {
    let evaluated_rule = {strings:new Map(), condition: []}

    Object.keys(rule).forEach(function (key) {

        if (key == 'string') {
            match_strings(rule[key], file, evaluated_rule.strings)
        }
        else if(key == 'condition')
        {
            eval_condition(file, rule[key], evaluated_rule)
        }
    });

    return evaluated_rule
}



function match_strings(strings, file, rule_result) {

    let matches = null
    for(let i=0; i<strings.length; i++){
        rule_result.set(strings[i].str_name.slice(1), [])
    }
    for (const index in strings) {
        let string = strings[index]

        if (string.type == 'hex_exp_bytecode' ||
            string.type == 'regex_expression_bytecode') {
            matches = find_all(file, string.val)
            if (matches != null) {
                for (let i = 0; i < matches.length; i++) {
                    rule_result.get(string.str_name.slice(1)).push({string: string, start: matches[i].start, end: matches[i].end})
                }
            }
        } else if (string.type == 'literal_string') {

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

            let bytecode = []
            string.val = string.val.substr(1, string.val.length - 2)

            for (let i = 0; i < string.val.length; i++) {
                bytecode.push(`chr ${string.val.charCodeAt(i).toString(16)}`)
            }
            bytecode.push('match')

            matches = find_all(file, bytecode)
            if (matches != null) {
                for (let i = 0; i < matches.length; i++) {
                    rule_result.get(string.str_name.slice(1)).push({string: string, start: matches[i].start, end: matches[i].end})
                }
            }
        }

    }

    return matches
}

function find_all(file_content, regex_bytecode) {
    let index = 0
    let matches = []
    let match = null

    let instructions = get_instructions(regex_bytecode)
    let parts = []
    let has_start_mask, has_end_mask;
    var lookahead = null

    if (instructions[0][0] == 'chr')
        lookahead = instructions[0][1]

    let thread_pool = []
    for(let i = 0 ; i< 10; i++)
    {
        thread_pool.push({pc: 0, priority: 0})
    }

    let start = performance.now()
    while (index < file_content.length) {
        match = find(file_content, instructions, index, thread_pool)
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
    debugger;
    let instructions = []
    let lines = bytecode
    let has_start_mask = false
    let has_end_mask = false
    let parts = null

    for (let i = 0; i < lines.length; i++) {
        parts = lines[i].split(/[ ,]/)
        if (parts[0] == 'chr') {
            has_start_mask =  parts[1].startsWith('?')? 0 : 0x0f
            has_end_mask = parts[1].endsWith('?')? 0 : 0xf0
            parts[1] = parseInt(parts[1].replace('?', '0'), 16)
            parts.push(has_end_mask | has_start_mask)
        } else if (parts[0] == 'chrc') {
            for(let i=1; i<parts.length; i++){
                parts[i] = parseInt(parts[i], 16)
            }
        } else if (parts[0] == 'jmp') {
            parts[1] = get_jmp_loc(i, parts[1])
        } else if (parts[0].startsWith('split'))  {
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

function add_thread(instructions, pc, queue, content){
    let instruction = instructions[pc]
    let operator = instruction[0]

    switch(operator){
        case 'splitjmp':
            add_thread(instructions, instruction[2], queue, content)
            add_thread(instructions, instruction[1], queue, content)
            break
        case 'splitstay':
            add_thread(instructions, instruction[1], queue, content)
            add_thread(instructions, instruction[2], queue, content)
            break
        case 'split':
            add_thread(instructions, instruction[1], queue, content)
            add_thread(instructions, instruction[2], queue, content)
            break
        case 'jmp':
            add_thread(instructions, instruction[1], queue, content)
            break
        case 'chr':
            is_match = instruction[2] == 0 ? true : instruction[1] == (content & instruction[2])
            if(is_match) {
                queue.push(pc)
            }
            break
        case 'chrc':
            let bitmap_index = (content >> 3) + 1
            let bit_index = (content& 0x07)
            let mask = 1 << bit_index
            is_match = ((instruction[bitmap_index] & mask) != 0)
            if (is_match )
                queue.push(pc)
            break
        default:
            queue.push(pc)
    }

}

function get_thread(thread_pool, pc, priority)
{
    let new_thread = null
    if(thread_pool.length != 0) {
        new_thread = thread_pool.pop()
        new_thread.pc = pc
        new_thread.priority = priority
    }
    else
        new_thread = { pc:pc , priority:priority}
    return new_thread

}

function clear_thread_array(thread_pool, thread_array){
    thread_pool.push(...thread_array)
    thread_array.length = 0
}


function find(file_content, instructions, start_index, thread_pool) {

    debugger;
    let current_state = []
    current_state.push(get_thread(thread_pool, 0, 0))
    // add_thread(instructions, 0, current_state, file_content[start_index])
    let next_state = []

    let c_thread = null
    let c_prgcounter = 0
    let op = null
    let instruction = null
    let is_match = false

    let found_match = null

    let ignore_stack = []
    let ignore = null

    let skip = false
    for (let i = start_index; i < file_content.length; i++) {
        skip = false;
        for (let t = 0; t < current_state.length & skip == false; t++) {
            c_prgcounter = current_state[t].pc
            instruction = instructions[c_prgcounter]
            op = instruction[0]
            switch (op) {
                case 'chr':
                    is_match = instruction[2] == 0 ? true : instruction[1] == (file_content[i] & instruction[2])
                    if (is_match === false) {
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
                    add_priority_queue(next_state,get_thread(thread_pool, c_prgcounter + 1, current_state[t].priority))
                    // add_thread(instructions, c_prgcounter + 1, next_state, file_content[i+1] )
                    break;
                case 'chrc':
                    let bitmap_index = (file_content[i] >> 3) + 1
                    let bit_index = (file_content[i] & 0x07)
                    let mask = 1 << bit_index
                    is_match = ((instruction[bitmap_index] & mask) != 0)
                    if (is_match === false) {
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
                    // next_state.push(c_prgcounter + 1)
                    next_state.push(get_thread(thread_pool, c_prgcounter + 1, current_state[t].priority))
                    //add_thread(instructions, c_prgcounter + 1, next_state,  file_content[i+1])
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
                    // next_state.push(c_prgcounter + 1)
                    add_priority_queue(next_state,get_thread(thread_pool, c_prgcounter + 1, current_state[t].priority))
                    break
                case 'splitjmp':
                    add_priority_queue(current_state, get_thread(thread_pool, instruction[1], current_state[t].priority))
                    add_priority_queue(current_state, get_thread(thread_pool, instruction[2], current_state[t].priority+1))
                    break
                case 'splitstay':
                    add_priority_queue(current_state, get_thread(thread_pool, instruction[1], current_state[t].priority+1))
                    add_priority_queue(current_state, get_thread(thread_pool, instruction[2], current_state[t].priority))
                    break
                case 'split':
                    add_priority_queue(current_state, get_thread(thread_pool, instruction[1], current_state[t].priority+1))
                    add_priority_queue(current_state, get_thread(thread_pool, instruction[2], current_state[t].priority))
                    break
                case 'jmp':
                    add_priority_queue(current_state, get_thread(thread_pool, instruction[1], current_state[t].priority))
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
                    skip = true
                    break;

            }
        }

        if (next_state.length == 0) {
            if (found_match != null) {
                return found_match
            }
            // current_state = []
            clear_thread_array(thread_pool, current_state)
            start_index = i + 1
            // add_thread(instructions, 0, current_state, file_content[start_index])
            current_state.push(get_thread(thread_pool, 0, 0))

        } else {
            clear_thread_array(thread_pool, current_state)
            current_state = next_state
            next_state = []

        }
    }
    return found_match
}

function add_priority_queue(queue, state){
    queue.push(state)
    let state_loc = queue.length -1
    for(let i=queue.length -2; i>=0; i--)
    {
        if(queue[state_loc].priority < queue[i].priority)
        {
            let tmp = queue[state_loc];
            queue[state_loc] = queue[i];
            queue[i]= tmp;
            state_loc = i
        }
        else{
            break
        }
    }
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