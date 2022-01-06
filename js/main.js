var outerLayout, middleLayout, innerLayout;
var worker = new Worker('/js/hex_exp_worker.js');

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
                        if(file.size > 20*1024*1024) {
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
                url: "https://yaradbg.azurewebsites.net/api/yaraparser",
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
    var scroll = $(this).closest('.outer-center').find('.tableWrapper')

    var file = $(hex_editor).data('file_content')

    if (typeof file != 'undefined') {
        Object.keys(rule_file.rules).forEach(function (key) {
            var rule = rule_file.rules[key]
            worker.postMessage({file:file, rule:rule})
            worker.onmessage = function(event) {
                dbgWin.html("")
                result = event.data;

                let matched_entity = null
                debugger;
                for(let entry of result.strings) {
                    let matched_string = entry[1]
                    for(let j = 0; j<matched_string.length; j++) {
                        if (matched_string[j].string.type == 'hex_exp_bytecode') {
                            matched_entity = []
                            for (let i = matched_string[j].start; i <= matched_string[j].end; i++) {
                                matched_entity.push(file[i].toString(16))
                            }
                            matched_entity = matched_entity.join(' ')
                        } else if (matched_string[j].string.type == 'literal_string') {
                            matched_entity = String.fromCharCode(...file.slice(matched_string[j].start,
                                                                                matched_string[j].end + 1))
                        }
                        dbgWin.append(`
                        <tr >
                            <td class="rule_name">${key}</td>
                            <td class="str_name">${matched_string[j].string.str_name}</td>
                            <td class="start_addr">${matched_string[j].start.toString(16)}</td>
                            <td class="end_addr">${matched_string[j].end.toString(16)}</td>
                            <td class="match">${matched_entity}</td>
                        </tr>`)
                    }


                }
                $(dbgWin).find('td.start_addr, td.end_addr').bind('click', function (e){
                    debugger;
                    jump_to_addr(scroll,parseInt($(e.target).html(), 16))
                })

            };

        });
    }

    return result
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
                    <table id="debugWin${id}" class="debugWin">
                        
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

    // refresh and switch to new tab;
    $('#tabpanel').tabs('refresh').tabs("option", "active", number_of_tabs)

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
        trHeight: 23,
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
    const height = 22.5
    const number_of_bytes_per_row = 16
    var scroll_position = (Math.floor(address / number_of_bytes_per_row)+1)* height

    scroll_position = Math.max(scroll_position, 0)
    scroll_position = Math.min(scroll_position, scroll_obj[0].scrollHeight)
    scroll_obj.scrollTop(scroll_position)
}

