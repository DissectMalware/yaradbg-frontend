import style from '../css/main.css'
var outerLayout, middleLayout, innerLayout;
var worker = new Worker('/yaradbg-frontend/dist/worker.js');
const COL_COUNT = 16

$(document).ready(function () {
    $('html').show();

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

                                var table = load_hex_editor(ui.newPanel.find('div.tableWrapper')[0].id, fileByteArray)

                                ui.newPanel.data('hexEditorTable', table)
                            }

                        }
                        reader.readAsArrayBuffer(file);
                    } else if (ui.newPanel.hasClass("hexeditor_demo")) {
                        load_hex_editor(ui.newPanel.children('div')[0].id, [])
                    }
                }
            }
        })
        .on('dragover drop dragleave', function (event) {
                event.stopPropagation();
                event.preventDefault();
                if (event.type == 'drop') {
                    for (let i = 0; i < event.originalEvent.dataTransfer.files.length; i++) {
                        let file = event.originalEvent.dataTransfer.files[i]
                        if (file.size > 20 * 1024 * 1024) {
                            alert(`${file.name} is too big (>20MB)`)
                            continue;
                        }
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


    $("#yara_panel").on('dragover drop dragleave', (event) => {
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
                url: "http://localhost:7071/api/yaraparser",
                data: files,
                cache: false
            }).done(function (html) {
                $('#yara_panel .spinner').removeClass('lds-facebook')
                add_yara_rules(html)
            }).fail(function (response) {
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


    $(".ui-closable-tab").on('click', close_tab_event_handler);


    $('#tabpanel').on("mouseenter mouseleave", "span.hex_byte", function (e) {
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
    let dbgWinWrapper = $(this).closest('div.editor_layout').find('div.debugWinWrapper')
    var tableWrapper = $(this).closest('.outer-center').find('.tableWrapper')

    var file = $(hex_editor).data('file_content')

    if (typeof file != 'undefined') {

        let markers = $(hex_editor).data('markers')
        if (typeof markers === 'undefined') {
            $(hex_editor).data('markers', new Map())
        }


        Object.keys(rule_file.rules).forEach(function (key) {
            var rule = rule_file.rules[key]
            worker.postMessage({file: file, rule_name: key, rule: rule, hex_editor_id: $(hex_editor).attr('id')})
            worker.onmessage = function (event) {
                // dbgWin.html("")
                result = event.data;

                let matched_entity = null

                let table = $(`#${result.hex_editor_id}`).data('table')

                let count = 1;

                let rows = []
                for (let entry of result.strings) {
                    let matched_string = entry[1]
                    count = 1
                    for (let j = 0; j < matched_string.length; j++) {
                        if (matched_string[j].string.type === 'hex_exp_bytecode') {
                            matched_entity = []
                            for (let i = matched_string[j].start; i <= matched_string[j].end; i++) {
                                matched_entity.push(file[i].toString(16))
                            }
                            matched_entity = matched_entity.join(' ')
                        } else if (matched_string[j].string.type === 'literal_string' ||
                            matched_string[j].string.type === 'regex_expression_bytecode') {
                            matched_entity = String.fromCharCode(...file.slice(matched_string[j].start,
                                matched_string[j].end + 1))
                        }
                        if(count >100)
                            break

                        rows.push({rule_name: result.rule_name,
                            string: matched_string[j].string.str_name,
                            match_no:`${count}/${matched_string.length}`,
                            start_offset:matched_string[j].start.toString(16),
                            end_offset:matched_string[j].end.toString(16),
                            match:matched_entity})



                        count += 1



                        add_hex_marker(hex_editor, matched_string[j].start, matched_string[j].end)

                    }

                }
                table.addRow(rows, false)


                tableWrapper.trigger('lazytable:refresh');

                $(dbgWin).find('td.start_addr, td.end_addr').on('click', function (e) {
                    tableWrapper.trigger('lazytable:focus', Math.floor(parseInt($(e.target).html(), 16)/COL_COUNT)+1);
                })


            };


        });
    }

    return result
}


function get_row_id(offset) {
    if (typeof offset != "number") {
        offset = parseInt(offset)
    }
    return Math.floor(offset / COL_COUNT)
}

function add_hex_marker(hex_editor, start_offset, end_offset) {

    let markers = $(hex_editor).data('markers')
    if (typeof markers === 'undefined') {
        $(hex_editor).data('markers', new Map())
        markers = $(hex_editor).data('markers')
    }

    let row_id_start = get_row_id(start_offset)
    let row_id_end = get_row_id(end_offset)
    let row_markers = null

    for (let row_id = row_id_start; row_id <= row_id_end; row_id++) {
        row_markers = markers.get(row_id)
        if (typeof row_markers === 'undefined') {
            markers.set(row_id, [])
            row_markers = markers.get(row_id)
        }
        if (row_id_start === row_id_end) {
            row_markers.push({
                start: start_offset % COL_COUNT,
                end: end_offset % COL_COUNT
            })
        } else if (row_id === row_id_start) {
            row_markers.push({
                start: start_offset % COL_COUNT,
                end: COL_COUNT - 1
            })
        } else if (row_id === row_id_end) {
            row_markers.push({
                start: 0,
                end: end_offset % COL_COUNT
            })
        } else {
            row_markers.push({
                start: 0,
                end: COL_COUNT - 1
            })
        }
    }
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
                <div class="debugWinWrapper" id="debugWinWrapper${id}" style="height: 100%" >
                </div>
            </div>
        </div>`

    const num_tabs = $('#tabpanel').data('hex_editor_tab_counter');
    $('#tabpanel').data('hex_editor_tab_counter', num_tabs + 1)
    let file_name = file.name
    let tab_name = file_name
    if (file_name.length > 12) {
        tab_name = file_name.slice(0, 8) + '~' + file_name.slice(-4)
    }

    const number_of_tabs = $('div#tabpanel ul li').length;
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

    // refresh and switch to new tab;
    $('#tabpanel').tabs('refresh').tabs("option", "active", number_of_tabs)

    $(`#hexEdtTab${num_tabs} .ui-closable-tab`).on('click', close_tab_event_handler);

    $(`#run${num_tabs}`).button({
        "icon": "ui-icon-play",
        "showLabel": false
    }).on("click", match_rules);

    $(`#clear${num_tabs}`).button({
        "icon": "ui-icon-trash",
        "showLabel": false
    });

    let table = new Tabulator(`#debugWinWrapper${num_tabs}`, {
        height: '95%', // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
        data: [], //assign data to table
        layout: "fitColumns", //fit columns to width of table (optional)
        selectable:true,
        clipboard:"copy",
        columns: [ //Define Table Columns
            {title: "Rule Name", field: "rule_name", width: 300},
            {title: "String Name", field: "string",},
            {title: "Match No", field: "match_no", width: 100},
            {title: "Start Offset", field: "start_offset", width: 100},
            {title: "End Offset", field: "end_offset", width: 100},
            {title: "Match", field: "match"},
            // {title:"Date Of Birth", field:"dob", sorter:"date", hozAlign:"center"},
        ],
    });
    $(`#hexEdtPanel${num_tabs}`).data('table', table)


}


function close_tab_event_handler() {
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
    let data = []
    if (file_content.length === 0) {
        for (let i = 0; i < 100; i++) {
            data[i] = [i * 16, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
        }
    } else {
        data = file_content
    }

    let table = $('#' + table_wrapper_id).LazyTable({
        data: data,
        startIndex: 0,
        keepExisting: false,
        prefetch: 20,
        trHeight: 23,
        generator: function (data) {
            let markers = $('#' + table_wrapper_id).closest('div.hexeditor_panel').data('markers')
            let offset = '<span>' + (data[0]).toString(16).padStart(8, '0') + '</span>'
            let hex = "",
                text = "",
                row_marker = [],
                color_class = ""

            if(typeof markers !=='undefined')
                row_marker = markers.get(get_row_id(data[0]))

            for (let i = 0; i < data[1].length; i++) {
                color_class = ""
                if(typeof row_marker !=='undefined' && row_marker.length>0) {
                    for (let j = 0; j < row_marker.length; j++) {
                        if (i >= row_marker[j]['start'] && i <= row_marker[j]['end']) {
                            color_class = "colored"
                            break
                        }
                    }
                }
                hex += `<span class='hex_byte ${color_class}'>${data[1][i].toString(16).padStart(2, '0')}</span>`
                if (data[1][i] > 0x20) {
                    text += `<span class='text_byte ${color_class}'>${String.fromCharCode(data[1][i])}</span>`
                } else if (data[1][i] < 0x20) {
                    text += `<span class='text_byte ${color_class}'>.</span>`
                } else {
                    text += `<span class='text_byte ${color_class}'>&nbsp;</span>`
                }
            }
            let row_html = `<td class="td_offset noselect">${offset}</td><td>${hex}</td><td class="noselect">${text}</td>`
            return `<tr>${row_html}</tr>`;
        }
    }).on('copy',(e) => {
        let text = "",
            range = null,
            spans = null,
            nodes = null
        const selection = document.getSelection();

        for(let range_index=0; range_index< selection.rangeCount; range_index++){
            range = selection.getRangeAt(range_index)
            spans = range.cloneContents()

            for(let i = 0; i< spans.childNodes.length; i++){
                if( spans.childNodes[i].tagName !== 'SPAN') {
                    nodes = $(spans.childNodes[i]).find('span')
                    for (let j = 0; j < nodes.length; j++) {
                        text += `0x${$(nodes[j]).html()} `
                    }
                }
                else{
                    text += `0x${$(spans.childNodes[i]).html()} `
                }
            }
        }

        let clipboardData = e.clipboardData || window.clipboardData || e.originalEvent.clipboardData;
        clipboardData.setData('text/plain', text);
        e.preventDefault();
    });

    return table
}


