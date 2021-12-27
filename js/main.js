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

    var tab_counter = 1
    innerLayout.center.pane
        .tabs({
            closable: true,
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
                        $('div#tabpanel ul').append('<li class="tab1">\n' +
                            `                       <a href="#tab${num_tabs}" title="${file.name}">${file_name}</a>\n` +
                            '                       <span class="ui-icon ui-icon-circle-close ui-closable-tab"></span>\n' +
                            '                       </li>')

                        $("div#panels").append(
                            `<div id="tab${num_tabs}">#tab${num_tabs}</div>`
                        );
                        $('#tabpanel').tabs('refresh')

                        $(".ui-closable-tab").click(close_tab_event_handler);
                        console.log(event.originalEvent.dataTransfer.files);
                    }
                    $('#tabpanel').css({'backgroundColor': 'white'})
                }
                else if(event.type == 'dragover')
                {
                    $('#tabpanel').css({'backgroundColor': 'purple'})
                }
                else if(event.type == 'dragleave')
                {
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