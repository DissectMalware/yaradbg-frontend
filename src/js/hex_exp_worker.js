if ('function' === typeof importScripts) {

    self.importScripts("operators.js")

    self.onmessage = function (e) {
        let data = e.data
        let count = 1
        let extra_byte = new Uint8Array(1);
        extra_byte[0] = 255

        let file_content = concat_typed_array(data.file, extra_byte)
        data.rules.forEach(function (value, key) {
            try {
                let res = match_rule(file_content, data.rules, key)
                res.rule_name = key;
                res.hex_editor_id = data.hex_editor_id;
                res.completed_rules_count = count;
                res.active_rules_count = data.rules.size
                self.postMessage(res);
            } catch (e) {
                console.log(`Error processing: ${key}`)
            }
            count += 1;
        });
    }

    function concat_typed_array(a, b) { // a, b TypedArray of same type
        var c = new (a.constructor)(a.length + b.length);
        c.set(a, 0);
        c.set(b, a.length);
        return c;
    }

    function match_rule(file, rules, rule_name) {
        debugger;
        let evaluated_rule = {strings: new Map(), condition: []}
        let rule = rules.get(rule_name)

        if (typeof rule.string !== 'undefiend') {
            match_strings(rule.string, file, evaluated_rule.strings)
        }
        if (typeof rule.condition !== 'undefiend') {
            operators.eval_condition(file, rule.condition, rules, evaluated_rule)
        }
        return evaluated_rule
    }


    function match_strings(strings, file, rule_result) {

        let matches = null
        for (let i = 0; i < strings.length; i++) {
            rule_result.set(strings[i].str_name.slice(1), [])
        }
        for (const index in strings) {
            matches = null
            let string = strings[index]

            let modifiers = get_string_modifiers(string.modifiers)
            let bytecode = null

            if (string.type == 'hex_exp_bytecode' ||
                string.type == 'regex_expression_bytecode') {
                bytecode = string.val
            } else if (string.type == 'literal_string') {
                string.val = string.val.substr(1, string.val.length - 2)
                bytecode = convert_to_bytecode(string.val)
            }

            if(modifiers.no_case){
                convert_bytecode_to_lowercase(bytecode)
            }

            if (modifiers.ascii) {
                matches = find_all(file, bytecode, modifiers.no_case)
            }

            let wide_matches = null;
            if (modifiers.wide) {
                wide_matches = find_all(file, bytecode, modifiers.no_case, true)
            }

            if (matches == null)
                matches = wide_matches
            else if (wide_matches != null)
                matches.push(...wide_matches)

            if (matches != null) {
                for (let i = 0; i < matches.length; i++) {
                    rule_result.get(string.str_name.slice(1)).push({
                        string: string,
                        start: matches[i].start,
                        end: matches[i].end
                    })
                }
            }

        }

        return matches
    }

    function convert_bytecode_to_lowercase(bytecode){
        let parts = null
        let ascii_code = 0
        for(let i=0; i<bytecode.length; i++){
            if( bytecode[i].startsWith('chr ')) {
                parts = bytecode[i].split(' ')
                ascii_code = parseInt(parts[1], 16)
                if(ascii_code >= 65 && ascii_code <= 90){
                    ascii_code = ascii_code | 32
                }
                parts[1] = ascii_code.toString(16)
                bytecode[i] = parts.join(' ')
            }
            else if( bytecode[i].startsWith('chrc ')) {
                parts = bytecode[i].split(' ')
                let char_bitmap = parts[1].split(',')
                char_bitmap[12] = (parseInt(char_bitmap[12],16) | (parseInt(char_bitmap[8],16)  & 0b11111110)).toString(16)
                char_bitmap[13] = (parseInt(char_bitmap[13],16) | (parseInt(char_bitmap[9],16)  & 0xff)).toString(16)
                char_bitmap[14] = (parseInt(char_bitmap[14],16) | (parseInt(char_bitmap[10],16) & 0xff)).toString(16)
                char_bitmap[15] = (parseInt(char_bitmap[15],16) | (parseInt(char_bitmap[11],16) & 0b00000111)).toString(16)

                parts[1] =char_bitmap.join(',')+';'
                bytecode[i] = parts.join(' ')
            }
        }
    }



    function convert_to_bytecode(string) {
        let bytecode = []

        string = string.replaceAll('\\\\', '\\')
        string = string.replaceAll('\\n', '\n')
        string = string.replaceAll('\\r', '\r')
        string = string.replaceAll('\\t', '\t')
        string = string.replaceAll('\\"', '"')

        for (let i = 0; i < string.length; i++) {
            bytecode.push(`chr ${string.charCodeAt(i).toString(16)}`)
        }
        bytecode.push('match')
        return bytecode
    }

    function get_string_modifiers(modifiers) {
        let result = {
            no_case: false,
            ascii: false,
            wide: false
        }

        for (let i = 0; i < modifiers.length; i++) {
            switch (modifiers[i].modifier) {
                case 'nocase':
                    result.no_case = true;
                    break
                case 'ascii':
                    result.ascii = true;
                    break
                case 'wide':
                    result.wide = true;
            }
        }

        if (result.wide == false)
            result.ascii = true

        return result
    }

    function find_all(file_content, regex_bytecode, no_case, is_wide = false) {
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
        for (let i = 0; i < 10; i++) {
            thread_pool.push({pc: 0, priority: 0})
        }

        let start = performance.now()
        while (index < file_content.length - 1) {
            match = find(file_content, instructions, index, thread_pool, no_case, is_wide)
            if (match != null) {
                index = match.start + 1
                matches.push(match)
            } else {
                index += 1
            }
        }
        let end = performance.now()
        let diff = (end - start).toString()

        return matches
    }

    function get_instructions(bytecode) {
        let instructions = []
        let lines = bytecode
        let has_start_mask = false
        let has_end_mask = false
        let parts = null

        for (let i = 0; i < lines.length; i++) {
            parts = lines[i].split(/[ ,]/)
            if (parts[0] == 'chr') {
                has_start_mask = parts[1].startsWith('?') ? 0 : 0xf0
                has_end_mask = parts[1].endsWith('?') ? 0 : 0x0f
                parts[1] = parseInt(parts[1].replace('?', '0'), 16)
                parts.push(has_end_mask | has_start_mask)
            } else if (parts[0] == 'chrc') {
                for (let i = 1; i < parts.length; i++) {
                    parts[i] = parseInt(parts[i], 16)
                }
            } else if (parts[0] == 'jmp') {
                parts[1] = get_jmp_loc(i, parts[1])
            } else if (parts[0].startsWith('split')) {
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

    function add_thread(instructions, pc, queue, content) {
        let instruction = instructions[pc]
        let operator = instruction[0]

        switch (operator) {
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
                if (is_match) {
                    queue.push(pc)
                }
                break
            case 'chrc':
                let bitmap_index = (content >> 3) + 1
                let bit_index = (content & 0x07)
                let mask = 1 << bit_index
                is_match = ((instruction[bitmap_index] & mask) != 0)
                if (is_match)
                    queue.push(pc)
                break
            default:
                queue.push(pc)
        }

    }

    function get_thread(thread_pool, pc, priority) {
        let new_thread = null
        if (thread_pool.length != 0) {
            new_thread = thread_pool.pop()
            new_thread.pc = pc
            new_thread.priority = priority
        } else
            new_thread = {pc: pc, priority: priority}
        return new_thread

    }

    function clear_thread_array(thread_pool, thread_array) {
        thread_pool.push(...thread_array)
        thread_array.length = 0
    }


    function find(file_content, instructions, start_index, thread_pool, no_case, is_wide = false) {

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
        let step = is_wide ? 2 : 1
        let current_char = null
        for (let i = start_index; i < file_content.length - 1; i += step) {
            skip = false;
            current_char = file_content[i]
            if(no_case && current_char >= 65 && current_char <= 90){
                current_char = current_char | 32
            }

            for (let t = 0; t < current_state.length && skip == false; t++) {
                c_prgcounter = current_state[t].pc
                instruction = instructions[c_prgcounter]
                op = instruction[0]
                switch (op) {
                    case 'chr':

                        is_match = instruction[2] == 0 ? true : instruction[1] == (current_char & instruction[2])

                        if (is_match && is_wide && file_content[i + 1] != 0)
                            is_match = false

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
                        add_priority_queue(next_state, get_thread(thread_pool, c_prgcounter + 1, current_state[t].priority))
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
                        add_priority_queue(next_state, get_thread(thread_pool, c_prgcounter + 1, current_state[t].priority))
                        break
                    case 'splitjmp':
                        add_priority_queue(current_state, get_thread(thread_pool, instruction[1], current_state[t].priority))
                        add_priority_queue(current_state, get_thread(thread_pool, instruction[2], current_state[t].priority + 1))
                        break
                    case 'splitstay':
                        add_priority_queue(current_state, get_thread(thread_pool, instruction[1], current_state[t].priority + 1))
                        add_priority_queue(current_state, get_thread(thread_pool, instruction[2], current_state[t].priority))
                        break
                    case 'split':
                        add_priority_queue(current_state, get_thread(thread_pool, instruction[1], current_state[t].priority + 1))
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
                //start_index = i + 1
                //current_state.push(get_thread(thread_pool, 0, 0))
                break;

            } else {
                clear_thread_array(thread_pool, current_state)
                current_state = next_state
                next_state = []

            }
        }
        return found_match
    }

    function add_priority_queue(queue, state) {
        queue.push(state)
        let state_loc = queue.length - 1
        for (let i = queue.length - 2; i >= 0; i--) {
            if (queue[state_loc].priority < queue[i].priority) {
                let tmp = queue[state_loc];
                queue[state_loc] = queue[i];
                queue[i] = tmp;
                state_loc = i
            } else {
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

}