import style from '../css/main.css'
var outerLayout, middleLayout, innerLayout;
var worker = new Worker('/yaradbg-frontend/dist/worker.js');
const zip = require('./external/zip-no-worker-inflate.min');

zip.configure({
    useWebWorkers: false
});

const yaraLanguage = {
    keyword: /\b(?:all|and|any|ascii|at|base64|base64wide|condition|contains|endswith|entrypoint|false|filesize|for|fullword|global|import|icontains|iendswith|iequals|in|include|int16|int16be|int32|int32be|int8|int8be|istartswith|matches|meta|nocase|none|not|of|or|private|rule|startswith|strings|them|true|uint16|uint16be|uint32|uint32be|uint8|uint8be|wide|xor|defined)\b/g,
    operator: /==|!=|<|>|<=|>=|&&|\|\||&|\||\^|<<|>>/g,
    punctuation: /[{}[\];(),.:]/g,
    string: /(["'])(?:\\.|(?!\1).)*\1/g,
    comment: /\/\/.*|\/\*[\s\S]*?\*\//g,
    hexnumber: /0x[a-f\d]+/gi,
    number: /\b\d+\b/g
  };

Prism.languages.yara = {
    'keyword': { pattern: yaraLanguage.keyword, alias: 'yara_keyword' },
    'operator': { pattern: yaraLanguage.operator, alias: 'yara_operator' },
    'punctuation': { pattern: yaraLanguage.punctuation, alias: 'yara_punctuation' },
    'string': { pattern: yaraLanguage.string, greedy:true, alias: 'yara_string' },
    'comment': [{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0, alias:'yara_comment'},
                {pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0, alias:'yara_comment'}],
    'hexnumber': { pattern: yaraLanguage.hexnumber, alias: 'yara_number' },
    'number': { pattern: yaraLanguage.number, alias: 'yara_number' }
};

const COL_COUNT = 16

$(document).ready(function () {
    $('html').show();

    $( "#yara_rule_dialog" ).dialog({
        autoOpen: false,
        show: {
            effect: "drop",
            duration: 500
        },
        hide: {
            effect: "drop",
            duration: 500
        },
        width: ($(window).width() > 1200) ? $(window).width() / 2 : $(window).width(),
        open: function () {
            $(this).dialog('option', 'maxHeight', $(window).height());
        }
    }).css("white-space","pre-wrap");

    $( "#yara_rule_eval_dialog" ).dialog({
        autoOpen: false,
        show: {
            effect: "drop",
            duration: 500
        },
        hide: {
            effect: "drop",
            duration: 500
        },
        width: ($(window).width() > 1200) ? $(window).width() / 3 : $(window).width(),
        open: function() {
            $(this).dialog('option', 'maxHeight', $(window).height());
        }
    }).css("white-space","pre-wrap");


    $( "#yara_rule_dependency_dialog" ).dialog({
        autoOpen: false,
        show: {
            effect: "drop",
            duration: 500
        },
        hide: {
            effect: "drop",
            duration: 500
        },
        width: ($(window).width() > 1200) ? $(window).width() / 3 : $(window).width(),
        open: function () {
            $(this).dialog('option', 'maxHeight', $(window).height());
        }
    });


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
                $(`li[rule_key]`).removeClass('matched not_matched')

                if (ui.newPanel.hasClass('hexeditor_panel')) {

                    let evaluation_result = $(ui.newPanel).data('evaluation_result')

                    if(typeof evaluation_result !== 'undefined'){
                        Object.keys(evaluation_result).forEach(function (key){
                            $(`li[rule_key=${key}]`).addClass(`${evaluation_result[key].eval_res?'matched': 'not_matched'}`)
                        })

                    }

                    var file = ui.newPanel.data('attached_file')
                    var file_content = ui.newPanel.data('file_content')
                    if (typeof file != 'undefined' && typeof file_content === 'undefined') {
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
                    }
                }
            }
        })
        .on('dragover drop dragleave', function (event) {
                event.stopPropagation();
                event.preventDefault();
                if (event.type == 'drop') {
                    let tab_index = null
                    let file_count = event.originalEvent.dataTransfer.files.length
                    for (let i = 0; i <file_count ; i++) {
                        let file = event.originalEvent.dataTransfer.files[i]

                        const unwrap_encrypted_zip = async (file, password) => {
                            let reader;
                            try {
                                reader = new zip.ZipReader(new zip.BlobReader(file), { password });
                                const entries = await reader.getEntries();
                                for (const entry of entries) {
                                    try {
                                        let content = new zip.BlobWriter()
                                        await entry.getData(content);
                                        let entry_blob = content.blob
                                        entry_blob.name = entry.filename
                                        if (entry_blob.size > 20 * 1024 * 1024) {
                                            alert(`${entry_blob.name} is too big (>20MB)`)
                                        }
                                        else {
                                            tab_index = create_new_hexeditor_tab(entry_blob)
                                            if(i == file_count - 1 ){
                                                // refresh and switch to new tab;
                                                $('#tabpanel').tabs('refresh').tabs("option", "active", tab_index)

                                                $('#tabpanel').css({'backgroundColor': 'white'})
                                            }
                                            break
                                        }
                                    } catch (error) {
                                        if (error.message === zip.ERR_ENCRYPTED ||
                                            error.message === zip.ERR_INVALID_PASSWORD) {
                                            return false;
                                        } else {
                                            throw error;
                                        }
                                    }
                                }
                            } catch {
                                if (file.size > 20 * 1024 * 1024) {
                                    alert(`${file.name} is too big (>20MB)`)
                                }
                                else {
                                    tab_index = create_new_hexeditor_tab(file)
                                    if(i == file_count - 1 ){
                                        // refresh and switch to new tab;
                                        $('#tabpanel').tabs('refresh').tabs("option", "active", tab_index)

                                        $('#tabpanel').css({'backgroundColor': 'white'})
                                    }
                                }
                            }
                            finally {
                                await reader.close();
                            }
 
                            return true;
                        };

                        unwrap_encrypted_zip(file, 'infected')

                    }

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

            var reader = new FileReader();
            var startTime = performance.now()
            let file = event.originalEvent.dataTransfer.files[0]
            var file_name = file.name
            reader.onloadend = (evt) => {
                if (evt.target.readyState == FileReader.DONE) {
                    let text = evt.target.result;
                    parse_yara(text, file_name)
                }

            }
            reader.readAsText(file);

        } else if (event.type == 'dragover') {
            $('#sidebar_yara').css({'backgroundColor': 'purple'})
        } else if (event.type == 'dragleave') {
            $('#sidebar_yara').css({'backgroundColor': 'white'})
        }

    }).on('paste', function(e){
        let paste = (event.clipboardData || window.clipboardData).getData('text');
        if(is_valid_web_link(paste)){
            if(paste.startsWith("https://github.com")){
                paste = paste.replace("https://github.com", "https://raw.githubusercontent.com")
                paste = paste.replace('blob/', '')
            }
        }
        $.get(paste).success(function(data){
            parse_yara(data, "web_content");
        });

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

function is_valid_web_link(string) {
    let url;
    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
}

function parse_yara(text, file_name){
    var files = new FormData()
    const blob = new Blob([text], {type : 'text/plain'})
    files.append('yarafile', blob, file_name);
    $.ajax({
        type: "POST",
        processData: false,
        contentType: false,
        url: "http://localhost:7071/api/yaraparser",
        data: files,
        cache: false
    }).done(function (html) {
        $('#yara_panel .spinner').removeClass('lds-facebook')
        add_yara_rules(html, text)
    }).fail(function (response) {
        $('#yara_panel .spinner').removeClass('lds-facebook')
        if (response.status == 422) {
            alert(response.responseText)
        } else {
            alert('Unknown error')
        }
    });
    $('#yara_panel').html(`
                                <div class="yara_rule_header">
                                    <img src="img/yara-icon.png"/>
                                </div>
                                <div><input id="filter_yara_rules" type="text" placeholder="Filter Yara Rules" /></div>
                                <div class="spinner lds-facebook">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div id="yara_rules"></div>
                                    <div id="credit">
                                    <span>Developed by <a href="https://github.com/DissectMalware">@DissectMalware</a>
                                    </span>
                                </div>
                    `)

    $('#filter_yara_rules').on('input propertychange', filter_yara_rules_change_handler)

}

function filter_yara_rules_change_handler(e){
    let text = $(this).val()
    let rule_name = null
    let index = null
    $(`#yara_rules li`).each(function(item){
        if(text.length == 0)
            $(this).css({'display':''})
        else {
            text = text.toLowerCase()
            rule_name = $(this).attr('rule_key').toLowerCase()
            index = rule_name.search(text)
            if (index >= 0) {
                $(this).css({'display':''})
            } else {
                $(this).css({'display':'None'})
            }
        }
    })
}

function add_yara_rules(rule_json, yara_file_content) {
    let rule_file = JSON.parse(rule_json)
    if('error' in rule_file){
        alert(rule_file.error)
        return
    }
    let rules_html = ''
    let rule_id = 0
    $('#yara_rules').addClass("yara_sig_panel")
    let impact_on = {}
    let impacted_by = {}
    Object.keys(rule_file.rules).forEach(function (rule_name) {
        rules_html += `
            <li id="rule_${rule_id}"  rule_key="${rule_name}">
                <span></span>
                <span class="rule_name" title="${rule_name}">${rule_name}</span>
                <img class="yara_dependency_graph" src="img/dependencies.png" title="Rule Dependencies"/>
                <img class="rule_eval_details" src="./img/debug.png" title="Eval Steps"/>
                <span class="toggle">
                    <label class="switch">
                      <input type="checkbox" checked>
                      <span class="slider round"></span>
                    </label>
                </span>
           </li>`

        rule_file.rules[rule_name].rule_id = `rule_${rule_id}`
        rule_file.rules[rule_name].rule_name = rule_name
        rule_id += 1

        impacted_by[rule_name] = []
        for( let i=0; i< rule_file.rules[rule_name].depends_on.length; i++) {
            let impacted_by_rule_name = rule_file.rules[rule_name].depends_on[i]
            impacted_by[rule_name].push(rule_file.rules[impacted_by_rule_name])
        }

        if(!(rule_name in impact_on)) {
            impact_on[rule_name] = []
        }
        for( let i=0; i< rule_file.rules[rule_name].depends_on.length; i++) {
            let impact_on_rule_name = rule_file.rules[rule_name].depends_on[i]
            if((impact_on_rule_name in impact_on) == false){
                impact_on[impact_on_rule_name] = []
            }
            impact_on[impact_on_rule_name].push(rule_file.rules[rule_name])
        }
    });

    let sorted_rules = topological_sort(rule_file.rules, impact_on)
    rule_file.sorted_rules = sorted_rules

    rules_html = `<ul class="yara_rules">
                    ${rules_html}
                  </ul>`
    $('#yara_rules').html(rules_html)

    $('span.toggle input').on('change', function(e){
        let check_box = $(e.target)
        let rule_name = check_box.closest('li').find('span.rule_name').html()
        let rule_file = $('#yara_panel').data('rules')
        let impact_on = $('#yara_panel').data('impact_on')
        let impacted_by = $('#yara_panel').data('impacted_by')

        if(check_box.is(':checked')) {
            enable_rules(rule_file, impacted_by, rule_name)
        }
        else{
            disable_rules(rule_file, impact_on, rule_name)
            check_box.closest('li').removeClass('not_matched matched')
        }

    });

    $('.yara_rule_header').html(` <img src="img/yara-icon.png"/>`)

    $('#yara_panel').data('rules', rule_file)
    $('#yara_panel').data('impact_on', impact_on)
    $('#yara_panel').data('impacted_by', impacted_by)
    $('#yara_panel').data('rules_content', yara_file_content)
    $(`li .rule_name`).on('click', rule_name_click_handler)
    $(`li .rule_eval_details`).on('click', rule_eval_detail_click_handler)
    $(`li .yara_dependency_graph`).on('click', yara_dependency_graph_click_handler)

}

function topological_sort(rules, impact_on){
    let stack = []
    var result = []
    let visited = new Set()
    Object.entries(rules).forEach(entry => {
        var [rule_name, rule] = entry;
        rule.color = 0 // white
    });

    Object.entries(rules).forEach(entry => {
        var [rule_name, rule] = entry;
        if(rule.color == 0 ) {
            dfs(rule, rules, impact_on, result)
        }
        else if(rule.color == 1 ) {
            alert('Error: Cycle detected in dependencies. Check ${rule_name}')
        }
    });


    return result.reverse()
}

function dfs(rule, rules, impact_on, result) {
    rule.color = 1 // grey
    let rule_name = rule.rule_name
    for (let i = 0; i<impact_on[rule_name].length; i++) {
        if (impact_on[rule_name][i].color == 0) {
            dfs(impact_on[rule_name][i], rules, impact_on, result)
        } else if (impact_on[rule_name][i].color == 1) {
            alert(`Error: Cycle detected in dependencies. Check ${rule_name}`)
        }
    }
    rule.color = 2
    result.push(rule)
}

function is_rule_active(rule_record){
    return $(rule_record).find('span.toggle input').is(':checked');
}
function get_rule_record(rule_name){
    return $(`#yara_rules li[rule_key=${rule_name}]`)
}

function disable_rules(rule_file, impact_on,  rule_name){
    let rule = rule_file.rules[rule_name]
    let will_be_impacted = null;
    let rule_li = null;
    for(let i=0; i<impact_on[rule_name].length; i++) {
        will_be_impacted = impact_on[rule_name][i]
        rule_li = get_rule_record(will_be_impacted.rule_name)
        rule_li.find('input').prop('checked', false)
        disable_rules(rule_file, impact_on, will_be_impacted.rule_name)
        rule_li.removeClass('not_matched matched')
    }
}

function enable_rules(rule_file, impacted_by,  rule_name){
    let rule = rule_file.rules[rule_name]
    let has_impact = null;
    let rule_li = null;
    for(let i=0; i<impacted_by[rule_name].length; i++) {
        has_impact = impacted_by[rule_name][i]
        rule_li = get_rule_record(has_impact.rule_name)
        rule_li.find('input').prop('checked', true)
        enable_rules(rule_file, impacted_by, has_impact.rule_name)
    }
}

function rule_name_click_handler(e) {
    let rule = get_rule_text(e.target.title)
    let highlighted_text = Prism.highlight(rule.rule_text, Prism.languages.yara, 'yara')
    $( "#yara_rule_dialog" ).html(`<p>${highlighted_text}</p>`)
    $( "#yara_rule_dialog" ).dialog("option","title",e.target.title).dialog( "open" );
}

function get_rule_text(rule_name){
    let rules = $('#yara_panel').data('rules')
    let rules_content = $('#yara_panel').data('rules_content')
    let rule_object = rules.rules[rule_name]
    let rule_text = rules_content.slice(rule_object.start_pos, rule_object.end_pos)
    return {start_pos: rule_object.start_pos, rule_text: rule_text}
}
function rule_eval_detail_click_handler(e){
    debugger;
    let active_tab = $('.hex_editor_tab.ui-tabs-active a')
    let active_tab_panel_id = active_tab.attr('href')
    let evaluation_result = $(active_tab_panel_id).data('evaluation_result')

    if( typeof evaluation_result === 'undefined'){
        alert("You should run the rule against the current file to see the evaluation details")
        return
    }

    let yara_rule_li = e.target.closest('li')
    let rule_name = $(yara_rule_li).attr('rule_key')
    let rule = get_rule_text(rule_name)
    let rule_eval_object = evaluation_result[$(yara_rule_li).attr('rule_key')]
    if( typeof rule_eval_object === 'undefined'){
        alert("You should run the rule against the current file to see the evaluation details")
        return
    }

    let condition_html = ''
    let condition_text = ''
    let condition_start = 0
    let condition_end = 0
    let condition_val = 0
    for(let i=0; i<rule_eval_object.eval_details.condition.length; i++){
        condition_start = rule_eval_object.eval_details.condition[i].start_pos - rule.start_pos
        condition_end = rule_eval_object.eval_details.condition[i].end_pos - rule.start_pos
        condition_text = rule.rule_text.slice(condition_start, condition_end)
        condition_text = condition_text.replace(/^[ \t]+/gm,'').trim()

        // temporary fix for handling missing paranthesis at the end of a condition
        // if the number of openning paranthesis is more than the closing ones,
        // then we need to add a closing paranthesis at the end
        let open_paranthesis_count = (condition_text.match(/\(/g) || []).length
        let close_paranthesis_count = (condition_text.match(/\)/g) || []).length
        if(open_paranthesis_count>close_paranthesis_count ){
            condition_text += ')'
        }

        if('result' in rule_eval_object.eval_details.condition[i] && !rule_eval_object.eval_details.condition[i].result.name.endsWith('_unsupported'))
            condition_val = rule_eval_object.eval_details.condition[i].result.val
        else
            condition_val = "false (unsupported)"
        if(Number.isInteger(condition_val)){
            condition_val = `0x${condition_val.toString(16)}`
        }
        condition_html += `<tr><td class="condition">${condition_text}</td>
                            <td class="condition_res">${condition_val}</td></tr>`
    }

    $( "#yara_rule_eval_dialog" ).html(`<table>${condition_html}</table>`)
    $( "#yara_rule_eval_dialog" ).dialog("option","title",$(yara_rule_li).attr('rule_key')).dialog( "open" );

}

function yara_dependency_graph_click_handler(e) {
    let yara_rule_li = e.target.closest('li')
    let rule_name = $(yara_rule_li).attr('rule_key')
    show_rule_dependency(rule_name)
}

function show_rule_dependency(rule_name){
    let impact_on = $('#yara_panel').data('impact_on')
    let impacted_by = $('#yara_panel').data('impacted_by')

    let impact_on_rules = new Set()
    let impacted_by_rules = new Set()

    get_related_rule_names(impact_on, rule_name, impact_on_rules)
    get_related_rule_names(impacted_by, rule_name, impacted_by_rules)


    $("#yara_rule_dependency_dialog").html(`<div>
                                                <b>Rules depend on ${rule_name}:</b><br />
                                                ${get_rule_names_html(impact_on_rules, '<div class="rule">{{rule_name}}</div>' ) }
                                            </div>
                                            <br />
                                            <div>
                                                <b>${rule_name} depends on:</b><br />
                                                ${get_rule_names_html(impacted_by_rules, '<div class="rule">{{rule_name}}</div>')}
                                            </div>`)

    $("#yara_rule_dependency_dialog div.rule").on('click', function(e){
        show_rule_dependency($(this).text())
    })
    $("#yara_rule_dependency_dialog").dialog("option", "title", ` Dependencies of ${rule_name}`).dialog("open")
}

function get_related_rule_names(relationships, rule_name, result){
    if(rule_name in relationships){
        for(let i=0; i< relationships[rule_name].length; i++){
            result.add(relationships[rule_name][i].rule_name)
            get_related_rule_names(relationships,relationships[rule_name][i].rule_name, result )
        }
    }
}

function get_rule_names_html(rule_names, rule_name_template) {
    var result = ''
    if (rule_names.size == 0) {
        result = '(None)'
        return result
    }

    rule_names.forEach(function (item) {
        result += rule_name_template.replace('{{rule_name}}', item)
    });
    return result
}

function match_rules(e) {

    let result = []
    let rule_file = $('#yara_panel').data('rules')
    let rule_file_content = $('#yara_panel').data('rules_content')
    if (typeof rule_file == 'undefined') {
        alert('Please drop a yara file on the left panel first!')
        return null;
    }
    let hex_editor = e.target.closest('div.hexeditor_panel')
    let dbgWin = $(this).closest('div.editor_layout').find('table.debugWin')
    var tableWrapper = $(this).closest('.outer-center').find('.tableWrapper')

    var file = $(hex_editor).data('file_content')

    if (typeof file != 'undefined') {

        $(hex_editor).data('markers', new Map())
        let markers = $(hex_editor).data('markers')

        tableWrapper.trigger('lazytable:refresh');

        let table = $(hex_editor).data('table')
        if(table !== 'undefined')
        {
            table.clearData();
        }

        let active_rules = new Map()

        Object.keys(rule_file.sorted_rules).forEach(function (key) {
            let rule_name = rule_file.sorted_rules[key].rule_name
            let rule_li = get_rule_record(rule_name)
            if(is_rule_active(rule_li) === true) {
                active_rules.set(rule_name, rule_file.sorted_rules[key])
            }
        });

        let process_status = $(hex_editor).find(".process_status")
        process_status.fadeIn(100)
        process_status.html(`Processing (0 out ${active_rules.size} is finished)`)
        worker.postMessage({file: file, rules: active_rules, hex_editor_id: $(hex_editor).attr('id')})
        worker.onmessage = function (event) {
            let rule_file = $('#yara_panel').data('rules')

            let result = event.data;

            let final_condition = result.condition[result.condition.length -1]

            let final_condition_eval = final_condition.result.val

            let rule_name= result.rule_name

            let hex_editor = $(`#${result.hex_editor_id}`)

            let process_status = $(hex_editor).find(".process_status")

            process_status.html(`Processing (${result.completed_rules_count} out ${result.active_rules_count} is finished)`)
            if(result.completed_rules_count >= result.active_rules_count) {
                process_status.fadeOut(1000)
            }

            let evaluation_result = $(`#${result.hex_editor_id}`).data('evaluation_result')
''
            if(typeof evaluation_result === 'undefined'){
                evaluation_result = {}
                $(`#${result.hex_editor_id}`).data('evaluation_result', evaluation_result)
            }

            evaluation_result[rule_name] = {eval_res :final_condition_eval, eval_details: result}

            $(`li[rule_key=${rule_name}]`).removeClass('matched not_matched')
            $(`li[rule_key=${rule_name}]`).addClass(`${final_condition_eval?'matched': 'not_matched'}`)

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
                    if (count > 100)
                        break

                    rows.push({
                        rule_name: result.rule_name,
                        string: matched_string[j].string.str_name,
                        match_no: `${count}/${matched_string.length}`,
                        start_offset: matched_string[j].start.toString(16),
                        end_offset: matched_string[j].end.toString(16),
                        match: matched_entity
                    })


                    count += 1


                    add_hex_marker(hex_editor, matched_string[j].start, matched_string[j].end)

                }

            }
            if (rows.length > 0) {
                table.addRow(rows, false)
                tableWrapper.trigger('lazytable:refresh');
            }
        };

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
                     <span class="process_status"></span>
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
        // selectable:true,
        clipboard:"copy",
        columns: [ //Define Table Columns
            {title: "Rule Name", field: "rule_name", width: 300},
            {title: "String Name", field: "string",},
            {title: "Match No", field: "match_no", width: 100},
            {title: "Start Offset", field: "start_offset", width: 100, cellClick: winDBG_cell_click_handler},
            {title: "End Offset", field: "end_offset", width: 100, cellClick: winDBG_cell_click_handler},
            {title: "Match", field: "match"},
            // {title:"Date Of Birth", field:"dob", sorter:"date", hozAlign:"center"},
        ],
    });
    $(`#hexEdtPanel${num_tabs}`).data('table', table)

    return number_of_tabs

}

function winDBG_cell_click_handler(e, cell) {
    debugger;
    let tableWrapper = $(e.target.closest('.hexeditor_panel ')).find('.tableWrapper')
    jump_to_addr(tableWrapper, parseInt($(e.target).text(), 16))
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

function jump_to_addr(scroll_obj, address) {
    const height = 22.5
    const number_of_bytes_per_row = 16
    var scroll_position = (Math.floor(address / number_of_bytes_per_row) ) * height

    scroll_position -= height

    scroll_position = Math.max(scroll_position, 0)
    scroll_position = Math.min(scroll_position, scroll_obj[0].scrollHeight)
    scroll_obj.scrollTop(scroll_position)
}

