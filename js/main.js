var outerLayout, middleLayout, innerLayout;

$(document).ready(function () {

    outerLayout = $('body').layout({
        center__paneSelector: ".outer-center"
        , west__paneSelector: ".outer-west"
        , east__paneSelector: ".outer-east"
        , west__size: 400
        , east__size: 125
        , spacing_open: 8 // ALL panes
        , spacing_closed: 12 // ALL panes
        , north__spacing_open: 0
        , south__spacing_open: 0
        , center__onresize: "middleLayout.resizeAll"
    });

    middleLayout = $('div.outer-center').layout({
        center__paneSelector: ".middle-center"
        , west__paneSelector: ".middle-west"
        , east__paneSelector: ".middle-east"
        , west__size: 100
        , east__size: 100
        , spacing_open: 8  // ALL panes
        , spacing_closed: 12 // ALL panes
        , center__onresize: "innerLayout.resizeAll"
    });

    innerLayout = $('div.middle-center').layout({
        center__paneSelector: ".inner-center"
        , west__paneSelector: ".inner-west"
        , east__paneSelector: ".inner-east"
        , west__size: 75
        , east__size: 75
        , spacing_open: 8  // ALL panes
        , spacing_closed: 8  // ALL panes
        , west__spacing_closed: 12
        , east__spacing_closed: 12
    });

    $('#tabpanel').data('hex_editor_tab_counter', 0)

    innerLayout.center.pane
        .tabs({
            closable: true,
            activate: function (event, ui) {
                if (ui.newPanel.hasClass('hexeditor_panel')) {
                    debugger;
                    var file = ui.newPanel.data('attached_file')
                    if (file != undefined) {
                        var reader = new FileReader();
                        var startTime = performance.now()
                        reader.onloadend = (evt) => {
                            if (evt.target.readyState == FileReader.DONE) {

                                let arrayBuffer = evt.target.result,
                                    array = new Uint8Array(arrayBuffer);

                                ui.newPanel.data('file_content', array)

                                let fileByteArray = new Proxy(array, {
                                    get: (original, key) => {
                                        if (!isNaN(key)) {
                                            let index = parseInt(key) * 16
                                            let tmp = []
                                            tmp.push(index, original.slice(index, Math.min(index + 16, original.length)))
                                            return tmp;
                                        } else if (key == 'length') {
                                            return (Math.ceil(original.length / 16)) + 1
                                        } else {
                                            return original[key]
                                        }
                                    }
                                });

                                var endTime = performance.now()
                                // alert(`Read file ${endTime - startTime} milliseconds`)

                                load_hex_editor(ui.newPanel.find('div.tableWrapper')[0].id, fileByteArray)
                            }

                        }
                        reader.readAsArrayBuffer(file);
                    } else if (ui.newPanel.hasClass("hexeditor_demo")) {
                        load_hex_editor(ui.newPanel.children('div')[0].id, [])
                    }
                }
            }
        })
        .bind('dragover drop dragleave', function (event) {
                event.stopPropagation();
                event.preventDefault();
                if (event.type == 'drop') {
                    for (let i = 0; i < event.originalEvent.dataTransfer.files.length; i++) {
                        file = event.originalEvent.dataTransfer.files[i]
                        create_new_hexeditor_tab(file)
                    }
                    $('#tabpanel').css({'backgroundColor': 'white'})
                } else if (event.type == 'dragover') {
                    $('#tabpanel').css({'backgroundColor': 'purple'})
                } else if (event.type == 'dragleave') {
                    $('#tabpanel').css({'backgroundColor': 'white'})
                }
            }
        )
        .find(".ui-tabs-nav").sortable({axis: 'x', zIndex: 2}).end()


    $("#yara_panel").bind('dragover drop dragleave', (event) => {
        event.stopPropagation();
        event.preventDefault();
        if (event.type == 'drop') {

            $('#sidebar_yara').css({'backgroundColor': 'white'})
            let files = new FormData()
            let file = event.originalEvent.dataTransfer.files[0]
            files.append('yarafile', file);
            $.ajax({
                type: "POST",
                processData: false,
                contentType: false,
                url: "http://localhost:7071/api/YaraDBGHttpTrigger",
                data: files,
                cache: false
            }).done(function (html) {
                $('#yara_panel .spinner').removeClass('lds-facebook')
                add_yara_rules(html)
            }).error(function (response) {
                $('#yara_panel .spinner').removeClass('lds-facebook')
                if (response.status == 422) {
                    alert(response.responseText)
                } else {
                    alert('Unknown error')
                }
            });
            $('#yara_panel').html('<div class="spinner lds-facebook"><div></div><div></div><div></div></div>')
        } else if (event.type == 'dragover') {
            $('#sidebar_yara').css({'backgroundColor': 'purple'})
        } else if (event.type == 'dragleave') {
            $('#sidebar_yara').css({'backgroundColor': 'white'})
        }

    });


    $(".ui-closable-tab").click(close_tab_event_handler);


    $('#tabpanel').on("mouseenter mouseleave", "span.hex_byte", function (e) {
        debugger;
        $(this).toggleClass("active");

        let td = $(this).closest('td')
        let text_td = td.next()
        let text_span = text_td.children()[$(this).index()]

        let header_offset = $(this).closest('div.ui-tabs-panel').find('table:nth-of-type(1) th:nth-child(2)')
        let header_offset_span = header_offset.children()[$(this).index()]

        if ($(this).hasClass("active")) {
            td.prev().addClass("active");
            $(text_span).addClass("active")
            $(header_offset_span).addClass("active")
        } else {
            td.prev().removeClass("active");
            $(text_span).removeClass("active")
            $(header_offset_span).removeClass("active")
        }
    })

    /*
    $('#tabpanel').on("click", "span", function (e) {
        debugger;
        $('span.selected_cell').removeClass('selected_cell')
        $(this).addClass('selected_cell')

    })*/


});

function add_yara_rules(rule_json) {
    let rule_file = JSON.parse(rule_json)
    let rules_html = ''
    Object.keys(rule_file.rules).forEach(function (key) {
        rules_html += `
            <li>
                <span></span><span class="name">${key}</span>
                <span class="toggle">
                    <label class="switch">
                      <input type="checkbox" checked>
                      <span class="slider round"></span>
                    </label>
                </span>
           </li>`
    });
    rules_html = `<ul class="yara_rules">
                    ${rules_html}
                  </ul>`
    $('#yara_panel').html(rules_html)
    $('#yara_panel').data('rules', rule_file)
}


function match_rules(e) {

    let result = []
    let rule_file = $('#yara_panel').data('rules')
    if (typeof rule_file == 'undefined') {
        alert('Please drop a yara file on the left panel first!')
        return null;
    }
    let hex_editor = e.target.closest('div.hexeditor_panel')
    let dbgWin = $(this).closest('div.editor_layout').find('table.debugWin')

    var file = $(hex_editor).data('file_content')

    if (typeof file != 'undefined') {
        Object.keys(rule_file.rules).forEach(function (key) {
            var rule = rule_file.rules[key]
            result.push({rule_name:key, result:match_rule(file, rule, dbgWin)})

        });
    }

    for(let i = 0; i< result.length; i++){
        for(let j=0; j< result[i].result.length; j++)
        {
            dbgWin.append(`<tr >
                                    <td>${result[i]['rule_name']}</td>
                                    <td>${result[i].result[j].string.str_name}</td>
                                    <td>${result[i].result[j].start.toString(16)}</td>
                                    <td>${result[i].result[j].end.toString(16)}</td>
                                </tr>`)
        }
    }
    return result
}

function match_rule(file, rule, dbgWin) {

    let rule_result = []
    Object.keys(rule).forEach(function (key) {

        if (key == 'string') {
            let matches = null
            let strings = rule[key]
            for (const index in strings) {
                let string = strings[index]
                if (string.type == 'hex_exp_bytecode') {
                    matches = find_all_hex_expression(file, string.val)
                    if (matches != null) {
                        for(let i=0; i<matches.length; i++) {
                            rule_result.push({string:string, start: matches[i].start, end: matches[i].end})
                        }
                    }
                }
            }

        }
    });

    return rule_result
}

function find_all_hex_expression(file_content, hex_bytecode) {
    let index = 0
    let matches = []
    let match = null
    start = performance.now()


    let instructions = get_instructions(hex_bytecode)
    let parts = []
    let has_start_mask, has_end_mask;


    while (index < file_content.length) {
        match = find_hex_expression(file_content, instructions, index)
        if (match != null) {
            index = match.start + 1
            matches.push(match)
        } else {
            break
        }
    }
    end = performance.now()
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
        }
        instructions.push(parts)
    }
    return instructions
}

function find_hex_expression(file_content, instructions, start_index) {

    let current_state = [{pc: 0}]
    let next_state = []

    let c_thread = null
    let c_prgcounter = 0
    let op = null
    let instruction = null
    let is_match = false

    for (let i = start_index; i < file_content.length; i++) {
        for (let t = 0; t < current_state.length; t++) {
            c_thread = current_state[t]
            c_prgcounter = c_thread.pc
            instruction = instructions[c_prgcounter]
            op = instruction[0]
            switch (op) {
                case 'b':
                    is_match = instruction[2] == 0 ? true : instruction[1] == (file_content[i] & instruction[2])
                    if (is_match == false)
                        break;
                    next_state.push({pc: c_prgcounter + 1})
                    break;
                case 'nb':
                    is_match = instruction[3] == 0 ? true : instruction[1]  == (file_content[i] & instruction[3])
                    if (is_match == false)
                        break;

                    if (typeof c_thread.count == 'undefined') {
                        c_thread.count = 1
                    } else {
                        c_thread.count += 1
                    }

                    if (c_thread.count == instruction[2]) {
                        next_state.push({pc: c_prgcounter + 1})
                    } else {
                        next_state.push(c_thread)
                    }
                    break;
                case 'jmp':
                    current_state.push({pc: instruction[1]})
                    break;
                case 'split':
                    current_state.push({pc: instruction[1]})
                    current_state.push({pc: instruction[2]})
                    break
                case 'match':
                    return {
                        start: start_index,
                        end: i - 1,
                        match: true
                    }
            }
        }

        if (next_state.length == 0) {
            current_state = [{pc: 0}]
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


function create_new_hexeditor_tab(file) {

    const table_wrapper_template = ({id}) =>
        `
        <div id="editorLayout${id}" class="editor_layout" style="width: 100% !important;">
            <div class="outer-center" >
                <div id="toolbar${id}" class="toolbar">
                     <button id="run${id}" class="run_button">Run</button>
                     <button id="clear${id}" class="clear_button">Clear</button>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th style="width:86px;"></th>
                        <th><span>00</span><span>01</span><span>02</span><span>03</span><span>04</span><span>05</span><span>06</span><span>07</span><span>08</span><span>09</span><span>0a</span><span>0b</span><span>0c</span><span>0d</span><span>0e</span><span>0f</span></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody></tbody>
                </table>
                <div class="tableWrapper" id="hexeditor${id}" >
                    <table class="hexEdtTable">
                        <tbody></tbody>
                    </table>
                </div>
            </div>
            <div class="outer-south ui-layout-south">
                    <table class="debugWin">
                        
                    </table>
            </div>
        </div>`


    const num_tabs = $('#tabpanel').data('hex_editor_tab_counter');
    $('#tabpanel').data('hex_editor_tab_counter', num_tabs + 1)
    let file_name = file.name
    let tab_name = file_name
    if (file_name.length > 12) {
        tab_name = file_name.slice(0, 8) + '~' + file_name.slice(-4)
    }

    const number_of_tabs = $('div#tabpanel ul li').size();
    $('div#tabpanel ul').append(`<li id="hexEdtTab${num_tabs}" class="hex_editor_tab tab1">
                                    <a href="#hexEdtPanel${num_tabs}" title="${file_name}">${tab_name}</a>
                                    <span class="ui-icon ui-icon-circle-close ui-closable-tab"></span>
                                 </li>`)

    let table_wrapper = [{'id': num_tabs}].map(table_wrapper_template).join('')
    $("div#panels").append(
        `<div id="hexEdtPanel${num_tabs}" class="hexeditor_panel">${table_wrapper}</div>`
    );

    let editorLayout = $(`div#editorLayout${num_tabs}`).layout({
        center__paneSelector: ".outer-center"
        , south__size: 150
        , spacing_open: 8  // ALL panes
        , spacing_closed: 8  // ALL panes
    });

    $(`div#hexEdtPanel${num_tabs}`).data('attached_file', file)

    $('#tabpanel').tabs('refresh')
    // switch to new tab;
    $('#tabpanel').tabs("option", "active", number_of_tabs)

    $(`#hexEdtTab${num_tabs} .ui-closable-tab`).click(close_tab_event_handler);

    $(`#run${num_tabs}`).button({
        "icon": "ui-icon-play",
        "showLabel": false
    }).bind("click", match_rules);

    $(`#clear${num_tabs}`).button({
        "icon": "ui-icon-trash",
        "showLabel": false
    });


}


function close_tab_event_handler() {
    debugger;
    const tabContainerDiv = $(this).closest(".ui-tabs").attr("id");
    const active_index_before_deletion = $("#" + tabContainerDiv).tabs("option", "active")
    const panelId = $(this).closest("li").remove().attr("aria-controls");
    $("#" + panelId).remove();
    $("#" + tabContainerDiv).tabs("refresh")
    const active_index_after_deletion = $("#" + tabContainerDiv).tabs("option", "active")
    // if the active tab is closed, activate the home tab
    if (active_index_after_deletion != active_index_before_deletion) {
        $("#" + tabContainerDiv).tabs("option", "active", "0")
    }
}

function load_hex_editor(table_wrapper_id, file_content) {
    var data = []
    if (file_content.length == 0) {
        hex = ""
        text = ""

        for (let i = 0; i < 100; i++) {
            data[i] = [i * 16, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
        }
    } else {
        data = file_content

    }

    var table = $('#' + table_wrapper_id).LazyTable({
        data: data,
        startIndex: 0,
        keepExisting: false,
        prefetch: 20,
        generator: function (data) {
            offset = '<span>' + (data[0]).toString(16).padStart(8, '0') + '</span>'
            var hex = ""
            var text = ""
            for (let i = 0; i < data[1].length; i++) {
                hex += `<span class='hex_byte'>${data[1][i].toString(16).padStart(2, '0')}</span>`
                debugger;
                if (data[1][i] > 0x20) {
                    text += `<span class='text_byte'>${String.fromCharCode(data[1][i])}</span>`
                } else if (data[1][i] < 0x20) {
                    text += "<span class='text_byte'>.</span>"
                } else {
                    text += "<span class='text_byte'>&nbsp;</span>"
                }
            }
            row_html = `<td class="td_offset">${offset}</td><td>${hex}</td><td>${text}</td>`
            return `<tr>${row_html}</tr>`;
        }
    });

}

function jump_to_addr(scroll_obj, address) {
    const height = 20
    const number_of_bytes_per_row = 16
    var scroll_position = parseInt(address / number_of_bytes_per_row) * height - 23

    scroll_position = Math.max(scroll_position, 0)
    scroll_position = Math.min(scroll_position, scroll_obj[0].scrollHeight)
    scroll_obj.scrollTop(scroll_position)
}

