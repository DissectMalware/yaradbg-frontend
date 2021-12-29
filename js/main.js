var outerLayout, middleLayout, innerLayout;

$(document).ready(function () {

    outerLayout = $('body').layout({
        center__paneSelector: ".outer-center"
        , west__paneSelector: ".outer-west"
        , east__paneSelector: ".outer-east"
        , west__size: 250
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

    var table_wrapper_template = '<div class="tableWrapper" id="hexeditor{{}}" style="height:100%;">\n' +
        '                        <table>\n' +
        '                            <tbody></tbody>\n' +
        '                        </table>\n' +
        '                     </div>' +
        '                     <div class="file_name" id="filename{{}}" style="display:none;"></div>'

    var tab_counter = 1
    var file_object = null
    innerLayout.center.pane
        .tabs({
            closable: true,
            activate: function (event, ui) {
                if (ui.newPanel.hasClass('hexeditor_panel')) {
                    if (file_object != null) {
                        var reader = new FileReader();
                        var startTime = performance.now()
                        reader.onloadend = (evt) => {
                            if (evt.target.readyState == FileReader.DONE) {
                                let arrayBuffer = evt.target.result,
                                    array = new Uint8Array(arrayBuffer);

                                let fileByteArray = new Proxy(array, {
                                    get: (original, key) => {
                                        if(!isNaN(key))
                                        {
                                            let index = parseInt(key)* 16
                                            let tmp = []
                                            tmp.push(index, original.slice(index, Math.min(index+16, original.length)))
                                            return tmp;
                                        }
                                        else if(key == 'length')
                                        {
                                            return (Math.ceil(original.length / 16))+1
                                        }
                                        else
                                        {
                                            return original[key]
                                        }


                                    }
                                });

                                var endTime = performance.now()
                                // alert(`Read file ${endTime - startTime} milliseconds`)

                                load_hex_editor(ui.newPanel.children('div')[0].id, fileByteArray)
                            }

                        }
                        reader.readAsArrayBuffer(file);
                        file_object = null
                    } else {
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
                        var num_tabs = tab_counter;
                        tab_counter += 1
                        var file_name = file.name;
                        if (file_name.length > 12) {
                            file_name = file_name.slice(0, 8) + '~' + file_name.slice(-4)
                        }
                        const number_of_tabs = $('div#tabpanel ul li').size();
                        $('div#tabpanel ul').append('<li class="hex_editor_tab tab1">\n' +
                            `                       <a href="#tab${num_tabs}" title="${file.name}">${file_name}</a>\n` +
                            '                       <span class="ui-icon ui-icon-circle-close ui-closable-tab"></span>\n' +
                            '                       </li>')
                        table_wrapper = table_wrapper_template.replace('{{}}', num_tabs)
                        $("div#panels").append(
                            `<div id="tab${num_tabs}" class="hexeditor_panel">${table_wrapper}</div>`
                        );
                        file_object = file
                        $('#tabpanel').tabs('refresh')
                        $('#tabpanel').tabs("option", "active", number_of_tabs)

                        $(".ui-closable-tab").click(close_tab_event_handler);
                        console.log(event.originalEvent.dataTransfer.files);
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
    $("#accordion").accordion();

    $("#yara_panel").bind('dragover drop dragleave', (event) => {
        if (event.type == 'drop') {
            $(this).css({'backgroundColor': 'white'})
        } else if (event.type == 'dragover') {
            $(this).css({'backgroundColor': 'purple'})
        } else if (event.type == 'dragleave') {
            $(this).css({'backgroundColor': 'white'})
        }
    });


    $(".ui-closable-tab").click(close_tab_event_handler);


});

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
            data[i] = [i*16, [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]
        }
    } else {
        data = file_content

    }

    var table = $('#' + table_wrapper_id).LazyTable({
        data: data,
        startIndex: 0,
        keepExisting: false,
        generator: function(data) {
            debugger;
            offset = '<span>' + (data[0]).toString(16).padStart(8, '0') + '</span>'
            var hex = ""
            var text = ""
            for (let i = 0; i< data[1].length; i++) {
                hex += `<span class='hex_byte'>${data[1][i].toString(16).padStart(2, '0')}</span>`
                text += "<span class='text_byte'>.</span>"
            }
            row_html = `<td>${offset}</td><td>${hex}</td><td>${text}</td>`
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

