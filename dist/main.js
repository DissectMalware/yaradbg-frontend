var main;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ui-layout-pane { /* all 'panes' */\r\n  padding: 10px;\r\n  background: #FFF;\r\n  border-top: 1px solid #BBB;\r\n  border-bottom: 1px solid #BBB;\r\n}\r\n.ui-layout-pane-north ,\r\n.ui-layout-pane-south {\r\n    border: 1px solid #BBB;\r\n}\r\n.ui-layout-pane-west {\r\n    border-left: 1px solid #BBB;\r\n}\r\n.ui-layout-pane-east {\r\n    border-right: 1px solid #BBB;\r\n}\r\n.ui-layout-pane-center {\r\n    border-left: 0;\r\n    border-right: 0;\r\n}\r\n.inner-center {\r\n    border: 1px solid #BBB;\r\n}\r\n\r\n.outer-west ,\r\n.outer-east {\r\n    background-color: white;\r\n}\r\n.middle-west ,\r\n.middle-east {\r\n    background-color: #F8F8F8;\r\n}\r\n\r\n.ui-layout-resizer { /* all 'resizer-bars' */\r\n    background: #DDD;\r\n}\r\n.ui-layout-resizer:hover { /* all 'resizer-bars' */\r\n    background: #FED;\r\n}\r\n.ui-layout-resizer-west {\r\n    border-left: 1px solid #BBB;\r\n}\r\n.ui-layout-resizer-east {\r\n    border-right: 1px solid #BBB;\r\n}\r\n\r\n.ui-layout-toggler { /* all 'toggler-buttons' */\r\n    background: #AAA;\r\n}\r\n.ui-layout-toggler:hover { /* all 'toggler-buttons' */\r\n    background: #FC3;\r\n}\r\n\r\n.editor_layout\r\n{\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.outer-center ,\r\n.middle-center {\r\n    /* center pane that are 'containers' for a nested layout */\r\n    padding: 0;\r\n    border: 0;\r\n}\r\n\r\n#panels{\r\n    height: calc(100% - 45px);\r\n    background-color: #e9e9e9;\r\n    display: flex;\r\n}\r\n\r\n.hexeditor_panel{\r\n    width: 100%;\r\n    padding-left: 4px !important;\r\n    padding-right: 4px !important;\r\n}\r\n\r\n.editor_layout,.editor_layout div.ui-layout-resizer-south, .editor_layout div.outer-center{\r\n     width: 100% !important;\r\n\r\n}\r\n\r\n.editor_layout div.outer-south{\r\n    width: calc(100% - 23px) !important;\r\n    overflow-y: auto;\r\n\r\n}\r\n\r\n.editor_layout .ui-layout-toggler-south{\r\n    left: calc(100% / 2) !important;\r\n}\r\n\r\n.editor_layout div.outer-center\r\n{\r\n    background-color: #e9e9e9;\r\n}\r\n\r\n#panels div.tableWrapper{\r\n    background-color: lightgray;\r\n    height: calc(100% - 97px);\r\n    margin-top: 0px;\r\n}\r\n\r\n\r\n\r\n.offset, .hex, .text {\r\n    contain: content;\r\n    display: inline-block;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    vertical-align: top;\r\n}\r\n.clusterize-content div{\r\n    padding-inline-start: 10px;\r\n    padding-inline-end: 10px;\r\n    text-align: right;\r\n    font-family: \"Courier New\", Consolas, Menlo, \"PT Mono\", \"Liberation Mono\", monospace;\r\n    font-size: 14.5px;\r\n    font-variant: normal;\r\n    line-height: 20px;\r\n    width: 100px;\r\n    height: 20px;\r\n}\r\n.hex{\r\n    background-color: blue;\r\n    width: 200px;\r\n}\r\n\r\nspan{\r\n    font-family: \"Courier New\", Consolas, Menlo, \"PT Mono\", \"Liberation Mono\", monospace;\r\n}\r\n\r\n.td_offset span,  .hex_byte, th span{\r\n    padding-top: 1px;\r\n    padding-bottom: 1px;\r\n    padding-inline-start: 4px;\r\n    padding-inline-end: 5px;\r\n}\r\n\r\n.text_byte{\r\n    padding: 1px 0;\r\n}\r\n.text{\r\n    background-color: green;\r\n    width: 300px;\r\n}\r\n\r\n\r\n\r\ntd.noselect {\r\n    user-select: none; /* supported by Chrome and Opera */\r\n    -webkit-user-select: none; /* Safari */\r\n    -khtml-user-select: none; /* Konqueror HTML */\r\n    -moz-user-select: none; /* Firefox */\r\n    -ms-user-select: none; /* Internet Explorer/Edge */\r\n}\r\n\r\nspan.selected_cell{\r\n    background-color: #003eff;\r\n    color: white;\r\n}\r\n\r\n\r\n\r\nspan.hex_byte.active, td.td_offset.active span, span.text_byte.active, th span.active\r\n{\r\n    background-color: rgba(26, 13, 3, 0.26)\r\n}\r\n\r\nth span{\r\n    text-decoration-style: unset !important;\r\n    font-weight: normal;\r\n}\r\n\r\nspan.text_byte{\r\n    display: inline-block;\r\n    width: 10px;\r\n}\r\n\r\n.tableWrapper{\r\n    height: 100%\r\n}\r\n\r\n/* css spinner */\r\n.lds-facebook {\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 80px;\r\n    height: 80px;\r\n    margin:0 auto;\r\n}\r\n.lds-facebook div {\r\n    display: inline-block;\r\n    position: absolute;\r\n    left: 8px;\r\n    width: 16px;\r\n    background: #fff;\r\n    animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\r\n}\r\n.lds-facebook div:nth-child(1) {\r\n    left: 8px;\r\n    animation-delay: -0.24s;\r\n}\r\n.lds-facebook div:nth-child(2) {\r\n    left: 32px;\r\n    animation-delay: -0.12s;\r\n}\r\n.lds-facebook div:nth-child(3) {\r\n    left: 56px;\r\n    animation-delay: initial;\r\n}\r\n@keyframes lds-facebook {\r\n    0% {\r\n        top: 8px;\r\n        height: 64px;\r\n    }\r\n    50%, 100% {\r\n        top: 24px;\r\n        height: 32px;\r\n    }\r\n}\r\n\r\n#yara_panel{\r\n    padding: 10px;\r\n    background: #e9e9e9;\r\n    height: calc(100% - 20px);\r\n    word-wrap: break-word;\r\n    width: calc(100% - 20px);\r\n    overflow-y:auto;\r\n\r\n}\r\n\r\n\r\n#yara_panel ul{\r\n    list-style-type: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n#yara_panel ul li{\r\n    display: flex;\r\n    flex-direction: row;\r\n    padding: 4px 12px;\r\n    font-family: Helvetica, Arial;\r\n}\r\n\r\n#yara_panel li span.name{\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n    width: calc(100% - 30px);\r\n}\r\n\r\n#yara_panel li:hover{\r\n    background-color: lightsteelblue;\r\n}\r\n\r\n/* toggle switch */\r\n/* The switch - the box around the slider */\r\n.yara_rules span.toggle{\r\n    margin-left: 10px;\r\n}\r\n.switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 42px;\r\n    height: 20px;\r\n}\r\n\r\n/* Hide default HTML checkbox */\r\n.switch input {\r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n\r\n/* The slider */\r\n.slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: #ccc;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n}\r\n\r\n.slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 15px;\r\n    width: 15px;\r\n    left: 3px;\r\n    bottom: 3px;\r\n    background-color: white;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n}\r\n\r\ninput:checked + .slider {\r\n    background-color: #2196F3;\r\n}\r\n\r\ninput:focus + .slider {\r\n    box-shadow: 0 0 1px #2196F3;\r\n}\r\n\r\ninput:checked + .slider:before {\r\n    -webkit-transform: translateX(20px);\r\n    -ms-transform: translateX(20px);\r\n    transform: translateX(20px);\r\n}\r\n\r\n/* Rounded sliders */\r\n.slider.round {\r\n    border-radius: 34px;\r\n}\r\n\r\n.slider.round:before {\r\n    border-radius: 50%;\r\n}\r\n\r\n\r\n/* debug window */\r\ntable.debugWin{\r\n    border-collapse: collapse;\r\n}\r\n\r\n\r\ntable.debugWin tr:hover {\r\n    background-color:lightsteelblue;\r\n}\r\n\r\ntable.debugWin .rule_name{\r\n    width: 400px;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\ntable.debugWin .str_name{\r\n    width: 150px;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\ntable.debugWin .start_addr, table.debugWin .end_addr{\r\n    width: 75px;\r\n    text-overflow: ellipsis;\r\n\r\n}\r\n\r\ntable.debugWin .start_addr:hover, table.debugWin .end_addr:hover{\r\n    cursor: pointer;\r\n    background-color: purple;\r\n    color: whitesmoke;\r\n}\r\n\r\ntable.debugWin tr:nth-child(2n) {\r\n    background-color: #e9e9e9;\r\n}\r\n\r\n.hex_byte.colored, .text_byte.colored {\r\n    background-color: #2196F3;\r\n    color:whitesmoke;\r\n}\r\ntable.debugWin td {\r\n    font-family: Arial,Helvetica,sans-serif;\r\n    font-size: 14px;\r\n    color: #333333;\r\n    line-height: 1.4;\r\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/external/jquery.layout_and_plugins.min.js":
/*!**********************************************************!*\
  !*** ./src/js/external/jquery.layout_and_plugins.min.js ***!
  \**********************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(factory){if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}else{}})(function(jQuery){(function($){var min=Math.min,max=Math.max,round=Math.floor,isStr=function(v){return typeof v==="string"},runPluginCallbacks=function(Instance,a_fn){if(Array.isArray(a_fn))for(var i=0,c=a_fn.length;i<c;i++){var fn=a_fn[i];try{if(isStr(fn))fn=eval(fn);if(typeof fn==="function")g(fn)(Instance)}catch(ex){}}function g(f){return f}};$.layout={version:"1.8.4",revision:1.8004,browser:{},effects:{slide:{all:{duration:"fast"},north:{direction:"up"},south:{direction:"down"},east:{direction:"right"},west:{direction:"left"}},drop:{all:{duration:"slow"},north:{direction:"up"},south:{direction:"down"},east:{direction:"right"},west:{direction:"left"}},scale:{all:{duration:"fast"}},blind:{},clip:{},explode:{},fade:{},fold:{},puff:{},size:{all:{easing:"swing"}}},config:{optionRootKeys:"effects,panes,north,south,west,east,center".split(","),allPanes:"north,south,west,east,center".split(","),borderPanes:"north,south,west,east".split(","),oppositeEdge:{north:"south",south:"north",east:"west",west:"east"},offscreenCSS:{left:"-99999px",right:"auto"},offscreenReset:"offscreenReset",hidden:{visibility:"hidden"},visible:{visibility:"visible"},resizers:{cssReq:{position:"absolute",padding:0,margin:0,fontSize:"1px",textAlign:"left",overflow:"hidden"},cssDemo:{background:"#DDD",border:"none"}},togglers:{cssReq:{position:"absolute",display:"block",padding:0,margin:0,overflow:"hidden",textAlign:"center",fontSize:"1px",cursor:"pointer",zIndex:1},cssDemo:{background:"#AAA"}},content:{cssReq:{position:"relative"},cssDemo:{overflow:"auto",padding:"10px"},cssDemoPane:{overflow:"hidden",padding:0}},panes:{cssReq:{position:"absolute",margin:0},cssDemo:{padding:"10px",background:"#FFF",border:"1px solid #BBB",overflow:"auto"}},north:{side:"top",sizeType:"Height",dir:"horz",cssReq:{top:0,bottom:"auto",left:0,right:0,width:"auto"}},south:{side:"bottom",sizeType:"Height",dir:"horz",cssReq:{top:"auto",bottom:0,left:0,right:0,width:"auto"}},east:{side:"right",sizeType:"Width",dir:"vert",cssReq:{left:"auto",right:0,top:"auto",bottom:"auto",height:"auto"}},west:{side:"left",sizeType:"Width",dir:"vert",cssReq:{left:0,right:"auto",top:"auto",bottom:"auto",height:"auto"}},center:{dir:"center",cssReq:{left:"auto",right:"auto",top:"auto",bottom:"auto",height:"auto",width:"auto"}}},callbacks:{},getParentPaneElem:function(el){var $el=$(el),layout=$el.data("layout")||$el.data("parentLayout");if(layout){var $cont=layout.container;if($cont.data("layoutPane"))return $cont;var $pane=$cont.closest("."+$.layout.defaults.panes.paneClass);if($pane.data("layoutPane"))return $pane}return null},getParentPaneInstance:function(el){var $pane=$.layout.getParentPaneElem(el);return $pane?$pane.data("layoutPane"):null},getParentLayoutInstance:function(el){var $pane=$.layout.getParentPaneElem(el);return $pane?$pane.data("parentLayout"):null},getEventObject:function(evt){return typeof evt==="object"&&evt.stopPropagation?evt:null},parsePaneName:function(evt_or_pane){var evt=$.layout.getEventObject(evt_or_pane),pane=evt_or_pane;if(evt){evt.stopPropagation();pane=$(this).data("layoutEdge")}if(pane&&!/^(west|east|north|south|center)$/.test(pane)){$.layout.msg('LAYOUT ERROR - Invalid pane-name: "'+pane+'"');pane="error"}return pane},plugins:{draggable:!!$.fn.draggable,effects:{core:!!$.effects,slide:$.effects&&($.effects.slide||$.effects.effect&&$.effects.effect.slide)}},onCreate:[],onLoad:[],onReady:[],onDestroy:[],onUnload:[],afterOpen:[],afterClose:[],scrollbarWidth:function(){return window.scrollbarWidth||$.layout.getScrollbarSize("width")},scrollbarHeight:function(){return window.scrollbarHeight||$.layout.getScrollbarSize("height")},getScrollbarSize:function(dim){var $c=$('<div style="position: absolute; top: -10000px; left: -10000px; width: 100px; height: 100px; border: 0; overflow: scroll;"></div>').appendTo("body"),d={width:$c.outerWidth-$c[0].clientWidth,height:100-$c[0].clientHeight};$c.remove();window.scrollbarWidth=d.width;window.scrollbarHeight=d.height;return dim.match(/^(width|height)$/)?d[dim]:d},disableTextSelection:function(){var $d=$(document),s="textSelectionDisabled",x="textSelectionInitialized";if($.fn.disableSelection){if(!$d.data(x))$d.on("mouseup",$.layout.enableTextSelection).data(x,true);if(!$d.data(s))$d.disableSelection().data(s,true)}},enableTextSelection:function(){var $d=$(document),s="textSelectionDisabled";if($.fn.enableSelection&&$d.data(s))$d.enableSelection().data(s,false)},showInvisibly:function($E,force){if($E&&$E.length&&(force||$E.css("display")==="none")){var s=$E[0].style,CSS={display:s.display||"",visibility:s.visibility||""};$E.css({display:"block",visibility:"hidden"});return CSS}return{}},getElementDimensions:function($E,inset){var d={css:{},inset:{}},x=d.css,i={bottom:0},N=$.layout.cssNum,R=Math.round,off=$E.offset(),b,p,ei;d.offsetLeft=off.left;d.offsetTop=off.top;if(!inset)inset={};$.each("Left,Right,Top,Bottom".split(","),function(idx,e){b=x["border"+e]=$.layout.borderWidth($E,e);p=x["padding"+e]=$.layout.cssNum($E,"padding"+e);ei=e.toLowerCase();d.inset[ei]=inset[ei]>=0?inset[ei]:p;i[ei]=d.inset[ei]+b});x.width=R($E.width());x.height=R($E.height());x.top=N($E,"top",true);x.bottom=N($E,"bottom",true);x.left=N($E,"left",true);x.right=N($E,"right",true);d.outerWidth=R($E.outerWidth());d.outerHeight=R($E.outerHeight());d.innerWidth=max(0,d.outerWidth-i.left-i.right);d.innerHeight=max(0,d.outerHeight-i.top-i.bottom);d.layoutWidth=R($E.innerWidth());d.layoutHeight=R($E.innerHeight());return d},getElementStyles:function($E,list){var CSS={},style=$E[0].style,props=list.split(","),sides="Top,Bottom,Left,Right".split(","),attrs="Color,Style,Width".split(","),p,s,a,i,j,k;for(i=0;i<props.length;i++){p=props[i];if(p.match(/(border|padding|margin)$/))for(j=0;j<4;j++){s=sides[j];if(p==="border")for(k=0;k<3;k++){a=attrs[k];CSS[p+s+a]=style[p+s+a]}else CSS[p+s]=style[p+s]}else CSS[p]=style[p]}return CSS},cssWidth:function($E,outerWidth){if(outerWidth<=0)return 0;var lb=$.layout.browser,bs=!lb.boxModel?"border-box":lb.boxSizing?$E.css("boxSizing"):"content-box",b=$.layout.borderWidth,n=$.layout.cssNum,W=outerWidth;if(bs!=="border-box")W-=b($E,"Left")+b($E,"Right");if(bs==="content-box")W-=n($E,"paddingLeft")+n($E,"paddingRight");return max(0,W)},cssHeight:function($E,outerHeight){if(outerHeight<=0)return 0;var lb=$.layout.browser,bs=!lb.boxModel?"border-box":lb.boxSizing?$E.css("boxSizing"):"content-box",b=$.layout.borderWidth,n=$.layout.cssNum,H=outerHeight;if(bs!=="border-box")H-=b($E,"Top")+b($E,"Bottom");if(bs==="content-box")H-=n($E,"paddingTop")+n($E,"paddingBottom");return max(0,H)},cssNum:function($E,prop,allowAuto){if(!$E.jquery)$E=$($E);var CSS=$.layout.showInvisibly($E),p=$.css($E[0],prop,true),v=allowAuto&&p=="auto"?p:Math.round(parseFloat(p)||0);$E.css(CSS);return v},borderWidth:function(el,side){if(el.jquery)el=el[0];var b="border"+side.substr(0,1).toUpperCase()+side.substr(1);return $.css(el,b+"Style",true)==="none"?0:Math.round(parseFloat($.css(el,b+"Width",true))||0)},isMouseOverElem:function(evt,el){var $E=$(el||this),d=$E.offset(),T=d.top,L=d.left,R=L+$E.outerWidth(),B=T+$E.outerHeight(),x=evt.pageX,y=evt.pageY;return $.layout.browser.msie&&x<0&&y<0||x>=L&&x<=R&&(y>=T&&y<=B)},msg:function(info,popup,debugTitle,debugOpts){if($.isPlainObject(info)&&window.debugData){if(typeof popup==="string"){debugOpts=debugTitle;debugTitle=popup}else if(typeof debugTitle==="object"){debugOpts=debugTitle;debugTitle=null}var t=debugTitle||"log( <object> )",o=$.extend({sort:false,returnHTML:false,display:false},debugOpts);if(popup===true||o.display)debugData(info,t,o);else if(window.console)console.log(debugData(info,t,o))}else if(popup)alert(info);else if(window.console)console.log(info);else{var id="#layoutLogger",$l=$(id);if(!$l.length)$l=createLog();$l.children("ul").append('<li style="padding: 4px 10px; margin: 0; border-top: 1px solid #CCC;">'+info.replace(/\</g,"&lt;").replace(/\>/g,"&gt;")+"</li>")}function createLog(){var pos=$.support.fixedPosition?"fixed":"absolute",$e=$('<div id="layoutLogger" style="position: '+pos+'; top: 5px; z-index: 999999; max-width: 25%; overflow: hidden; border: 1px solid #000; border-radius: 5px; background: #FBFBFB; box-shadow: 0 2px 10px rgba(0,0,0,0.3);">'+'<div style="font-size: 13px; font-weight: bold; padding: 5px 10px; background: #F6F6F6; border-radius: 5px 5px 0 0; cursor: move;">'+'<span style="float: right; padding-left: 7px; cursor: pointer;" title="Remove Console" onclick="$(this).closest(\'#layoutLogger\').remove()">X</span>Layout console.log</div>'+'<ul style="font-size: 13px; font-weight: none; list-style: none; margin: 0; padding: 0 0 2px;"></ul>'+"</div>").appendTo("body");$e.css("left",$(window).width()-$e.outerWidth()-5);if($.ui.draggable)$e.draggable({handle:":first-child"});return $e}}};(function(){var u=navigator.userAgent.toLowerCase(),m=/(chrome)[ \/]([\w.]+)/.exec(u)||/(webkit)[ \/]([\w.]+)/.exec(u)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(u)||/(msie) ([\w.]+)/.exec(u)||u.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(u)||[],b=m[1]||"",v=m[2]||0,ie=b==="msie",cm=document.compatMode,$s=$.support,bs=$s.boxSizing!==undefined?$s.boxSizing:$s.boxSizingReliable,bm=!ie||!cm||cm==="CSS1Compat"||$s.boxModel||false,lb=$.layout.browser={version:v,safari:b==="webkit",webkit:b==="chrome",msie:ie,isIE6:ie&&v==6,boxModel:bm,boxSizing:!!(typeof bs==="function"?bs():bs)};if(b)lb[b]=true;if(!bm&&!cm)$(function(){lb.boxModel=$s.boxModel})})();$.layout.defaults={name:"",containerClass:"ui-layout-container",inset:null,scrollToBookmarkOnLoad:true,resizeWithWindow:true,resizeWithWindowDelay:200,resizeWithWindowMaxDelay:0,maskPanesEarly:false,onresizeall_start:null,onresizeall_end:null,onload_start:null,onload_end:null,onunload_start:null,onunload_end:null,initPanes:true,showErrorMessages:true,showDebugMessages:false,zIndex:null,zIndexes:{pane_normal:0,content_mask:1,resizer_normal:2,pane_sliding:100,pane_animate:1e3,resizer_drag:1e4},errors:{pane:"pane",selector:"selector",addButtonError:"Error Adding Button\nInvalid ",containerMissing:"UI Layout Initialization Error\nThe specified layout-container does not exist.",centerPaneMissing:"UI Layout Initialization Error\nThe center-pane element does not exist.\nThe center-pane is a required element.",noContainerHeight:"UI Layout Initialization Warning\nThe layout-container \"CONTAINER\" has no height.\nTherefore the layout is 0-height and hence 'invisible'!",callbackError:"UI Layout Callback Error\nThe EVENT callback is not a valid function."},panes:{applyDemoStyles:false,responsive:{enabled:false,when:"md",sizes:{xl:1140,lg:992,md:768,sm:576,xs:0}},closable:true,resizable:true,slidable:true,initClosed:false,initHidden:false,contentSelector:".ui-layout-content",contentIgnoreSelector:".ui-layout-ignore",findNestedContent:false,paneClass:"ui-layout-pane",resizerClass:"ui-layout-resizer",togglerClass:"ui-layout-toggler",buttonClass:"ui-layout-button",minSize:0,maxSize:0,spacing_open:6,spacing_closed:6,togglerLength_open:50,togglerLength_closed:50,togglerAlign_open:"center",togglerAlign_closed:"center",togglerContent_open:"",togglerContent_closed:"",resizerDblClickToggle:true,autoResize:true,autoReopen:true,resizerDragOpacity:1,draggableIframeFix:false,maskContents:false,maskObjects:false,maskZindex:null,resizingGrid:false,livePaneResizing:false,liveContentResizing:false,liveResizingTolerance:1,sliderCursor:"pointer",slideTrigger_open:"click",slideTrigger_close:"mouseleave",slideDelay_open:300,slideDelay_close:300,hideTogglerOnSlide:false,preventQuickSlideClose:$.layout.browser.webkit,preventPrematureSlideClose:false,tips:{Open:"Open",Close:"Close",Resize:"Resize",Slide:"Slide Open",Pin:"Pin",Unpin:"Un-Pin",noRoomToOpen:"Not enough room to show this panel.",minSizeWarning:"Panel has reached its minimum size",maxSizeWarning:"Panel has reached its maximum size"},showOverflowOnHover:false,enableCursorHotkey:true,customHotkeyModifier:"SHIFT",fxName:"slide",fxSpeed:null,fxSettings:{},fxOpacityFix:true,animatePaneSizing:false,children:null,containerSelector:"",initChildren:true,destroyChildren:true,resizeChildren:true,triggerEventsOnLoad:false,triggerEventsDuringLiveResize:true,onshow_start:null,onshow_end:null,onhide_start:null,onhide_end:null,onopen_start:null,onopen_end:null,onclose_start:null,onclose_end:null,onresize_start:null,onresize_end:function(){},onsizecontent_start:null,onsizecontent_end:null,onswap_start:null,onswap_end:null,ondrag_start:null,ondrag_end:null},north:{paneSelector:".ui-layout-north",size:"auto",resizerCursor:"n-resize",customHotkey:""},south:{paneSelector:".ui-layout-south",size:"auto",resizerCursor:"s-resize",customHotkey:""},east:{paneSelector:".ui-layout-east",size:200,resizerCursor:"e-resize",customHotkey:""},west:{paneSelector:".ui-layout-west",size:200,resizerCursor:"w-resize",customHotkey:""},center:{paneSelector:".ui-layout-center",minWidth:0,minHeight:0}};$.layout.optionsMap={layout:("name,instanceKey,stateManagement,effects,inset,zIndexes,errors,"+"zIndex,scrollToBookmarkOnLoad,showErrorMessages,maskPanesEarly,"+"outset,resizeWithWindow,resizeWithWindowDelay,resizeWithWindowMaxDelay,"+"onresizeall,onresizeall_start,onresizeall_end,onload,onload_start,onload_end,onunload,onunload_start,onunload_end").split(","),center:("paneClass,contentSelector,contentIgnoreSelector,findNestedContent,applyDemoStyles,triggerEventsOnLoad,"+"showOverflowOnHover,maskContents,maskObjects,liveContentResizing,"+"containerSelector,children,initChildren,resizeChildren,destroyChildren,"+"onresize,onresize_start,onresize_end,onsizecontent,onsizecontent_start,onsizecontent_end").split(","),noDefault:"paneSelector,resizerCursor,customHotkey".split(",")};$.layout.transformData=function(hash,addKeys){var json=addKeys?{panes:{},center:{}}:{},branch,optKey,keys,key,val,i,c;if(typeof hash!=="object")return json;for(optKey in hash){branch=json;val=hash[optKey];keys=optKey.split("__");c=keys.length-1;for(i=0;i<=c;i++){key=keys[i];if(i===c){if($.isPlainObject(val))branch[key]=$.layout.transformData(val);else branch[key]=val}else{if(!branch[key])branch[key]={};branch=branch[key]}}}return json};$.layout.backwardCompatibility={map:{applyDefaultStyles:"applyDemoStyles",childOptions:"children",initChildLayout:"initChildren",destroyChildLayout:"destroyChildren",resizeChildLayout:"resizeChildren",resizeNestedLayout:"resizeChildren",resizeWhileDragging:"livePaneResizing",resizeContentWhileDragging:"liveContentResizing",triggerEventsWhileDragging:"triggerEventsDuringLiveResize",maskIframesOnResize:"maskContents",useStateCookie:"stateManagement.enabled","cookie.autoLoad":"stateManagement.autoLoad","cookie.autoSave":"stateManagement.autoSave","cookie.keys":"stateManagement.stateKeys","cookie.name":"stateManagement.cookie.name","cookie.domain":"stateManagement.cookie.domain","cookie.path":"stateManagement.cookie.path","cookie.expires":"stateManagement.cookie.expires","cookie.secure":"stateManagement.cookie.secure",noRoomToOpenTip:"tips.noRoomToOpen",togglerTip_open:"tips.Close",togglerTip_closed:"tips.Open",resizerTip:"tips.Resize",sliderTip:"tips.Slide"},renameOptions:function(opts){var map=$.layout.backwardCompatibility.map,oldData,newData,value;for(var itemPath in map){oldData=getBranch(itemPath);value=oldData.branch[oldData.key];if(value!==undefined){newData=getBranch(map[itemPath],true);newData.branch[newData.key]=value;delete oldData.branch[oldData.key]}}function getBranch(path,create){var a=path.split("."),c=a.length-1,D={branch:opts,key:a[c]},i=0,k,undef;for(;i<c;i++){k=a[i];if(D.branch[k]===undefined){if(create){D.branch=D.branch[k]={}}else D.branch={}}else D.branch=D.branch[k]}return D}},renameAllOptions:function(opts){var ren=$.layout.backwardCompatibility.renameOptions;ren(opts);if(opts.defaults){if(typeof opts.panes!=="object")opts.panes={};$.extend(true,opts.panes,opts.defaults);delete opts.defaults}if(opts.panes)ren(opts.panes);$.each($.layout.config.allPanes,function(i,pane){if(opts[pane])ren(opts[pane])});return opts}};$.fn.layout=function(opts){var browser=$.layout.browser,_c=$.layout.config,cssW=$.layout.cssWidth,cssH=$.layout.cssHeight,elDims=$.layout.getElementDimensions,styles=$.layout.getElementStyles,evtObj=$.layout.getEventObject,evtPane=$.layout.parsePaneName,options=$.extend(true,{},$.layout.defaults),effects=options.effects=$.extend(true,{},$.layout.effects),state={id:"layout"+$.now(),initialized:false,paneResizing:false,panesSliding:{},container:{innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0,layoutWidth:0,layoutHeight:0},north:{childIdx:0},south:{childIdx:0},east:{childIdx:0},west:{childIdx:0},center:{childIdx:0}},children={north:null,south:null,east:null,west:null,center:null},timer={data:{},set:function(s,fn,ms){timer.clear(s);timer.data[s]=setTimeout(fn,ms)},clear:function(s){var t=timer.data;if(t[s]){clearTimeout(t[s]);delete t[s]}}},_log=function(msg,popup,debug){var o=options;if(o.showErrorMessages&&!debug||debug&&o.showDebugMessages)$.layout.msg(o.name+" / "+msg,popup!==false);return false},_runCallbacks=function(evtName,pane,skipBoundEvents){var hasPane=pane&&isStr(pane),s=hasPane?state[pane]:state,o=hasPane?options[pane]:options,lName=options.name,lng=evtName+(evtName.match(/_/)?"":"_end"),shrt=lng.match(/_end$/)?lng.substr(0,lng.length-4):"",fn=o[lng]||o[shrt],retVal="NC",args=[],$P=hasPane?$Ps[pane]:0;if(hasPane&&!$P)return retVal;if(!hasPane&&typeof pane==="boolean"){skipBoundEvents=pane;pane=""}if(fn){try{if(isStr(fn)){if(fn.match(/,/)){args=fn.split(","),fn=eval(args[0])}else fn=eval(fn)}if(typeof fn==="function"){if(args.length)retVal=g(fn)(args[1]);else if(hasPane)retVal=g(fn)(pane,$Ps[pane],s,o,lName);else retVal=g(fn)(Instance,s,o,lName)}}catch(ex){_log(options.errors.callbackError.replace(/EVENT/,String.prototype.trim((pane||"")+" "+lng)),false);if(typeof ex==="string"&&string.length)_log("Exception:  "+ex,false)}}if(!skipBoundEvents&&retVal!==false){if(hasPane){o=options[pane];s=state[pane];$P.triggerHandler("layoutpane"+lng,[pane,$P,s,o,lName]);if(shrt)$P.triggerHandler("layoutpane"+shrt,[pane,$P,s,o,lName])}else{$N.triggerHandler("layout"+lng,[Instance,s,o,lName]);if(shrt)$N.triggerHandler("layout"+shrt,[Instance,s,o,lName])}}if(hasPane&&evtName==="onresize_end")resizeChildren(pane+"",true);return retVal;function g(f){return f}},_fixIframe=function(pane){if(browser.mozilla)return;var $P=$Ps[pane];if(state[pane].tagName==="IFRAME")$P.css(_c.hidden).css(_c.visible);else $P.find("IFRAME").css(_c.hidden).css(_c.visible)},cssSize=function(pane,outerSize){var fn=_c[pane].dir=="horz"?cssH:cssW;return fn($Ps[pane],outerSize)},cssMinDims=function(pane){var $P=$Ps[pane],dir=_c[pane].dir,d={minWidth:1001-cssW($P,1e3),minHeight:1001-cssH($P,1e3)};if(dir==="horz")d.minSize=d.minHeight;if(dir==="vert")d.minSize=d.minWidth;return d},setOuterWidth=function(el,outerWidth,autoHide){var $E=el,w;if(isStr(el))$E=$Ps[el];else if(!el.jquery)$E=$(el);w=cssW($E,outerWidth);$E.css({width:w});if(w>0){if(autoHide&&$E.data("autoHidden")&&$E.innerHeight()>0){$E.show().data("autoHidden",false);if(!browser.mozilla)$E.css(_c.hidden).css(_c.visible)}}else if(autoHide&&!$E.data("autoHidden"))$E.hide().data("autoHidden",true)},setOuterHeight=function(el,outerHeight,autoHide){var $E=el,h;if(isStr(el))$E=$Ps[el];else if(!el.jquery)$E=$(el);h=cssH($E,outerHeight);$E.css({height:h,visibility:"visible"});if(h>0&&$E.innerWidth()>0){if(autoHide&&$E.data("autoHidden")){$E.show().data("autoHidden",false);if(!browser.mozilla)$E.css(_c.hidden).css(_c.visible)}}else if(autoHide&&!$E.data("autoHidden"))$E.hide().data("autoHidden",true)},_parseSize=function(pane,size,dir){if(!dir)dir=_c[pane].dir;if(isStr(size)&&size.match(/%/))size=size==="100%"?-1:parseInt(size,10)/100;if(size===0)return 0;else if(size>=1)return parseInt(size,10);var o=options,avail=0;if(dir=="horz")avail=sC.innerHeight-($Ps.north?o.north.spacing_open:0)-($Ps.south?o.south.spacing_open:0);else if(dir=="vert")avail=sC.innerWidth-($Ps.west?o.west.spacing_open:0)-($Ps.east?o.east.spacing_open:0);if(size===-1)return avail;else if(size>0)return round(avail*size);else if(pane=="center")return 0;else{var dim=dir==="horz"?"height":"width",$P=$Ps[pane],$C=dim==="height"?$Cs[pane]:false,vis=$.layout.showInvisibly($P),szP=$P.css(dim),szC=$C?$C.css(dim):0;$P.css(dim,"auto");if($C)$C.css(dim,"auto");size=dim==="height"?$P.outerHeight():$P.outerWidth();$P.css(dim,szP).css(vis);if($C)$C.css(dim,szC);return size}},getPaneSize=function(pane,inclSpace){var $P=$Ps[pane],o=options[pane],s=state[pane],oSp=inclSpace?o.spacing_open:0,cSp=inclSpace?o.spacing_closed:0;if(!$P||s.isHidden)return 0;else if(s.isClosed||s.isSliding&&inclSpace)return cSp;else if(_c[pane].dir==="horz")return $P.outerHeight()+oSp;else return $P.outerWidth()+oSp},setSizeLimits=function(pane,slide){if(!isInitialized())return;var o=options[pane],s=state[pane],c=_c[pane],dir=c.dir,type=c.sizeType.toLowerCase(),isSliding=slide!=undefined?slide:s.isSliding,$P=$Ps[pane],paneSpacing=o.spacing_open,altPane=_c.oppositeEdge[pane],altS=state[altPane],$altP=$Ps[altPane],altPaneSize=!$altP||altS.isVisible===false||altS.isSliding?0:dir=="horz"?$altP.outerHeight():$altP.outerWidth(),altPaneSpacing=(!$altP||altS.isHidden?0:options[altPane][altS.isClosed!==false?"spacing_closed":"spacing_open"])||0,containerSize=dir=="horz"?sC.innerHeight:sC.innerWidth,minCenterDims=cssMinDims("center"),minCenterSize=dir=="horz"?max(options.center.minHeight,minCenterDims.minHeight):max(options.center.minWidth,minCenterDims.minWidth),limitSize=containerSize-paneSpacing-(isSliding?0:_parseSize("center",minCenterSize,dir)+altPaneSize+altPaneSpacing),minSize=s.minSize=max(_parseSize(pane,o.minSize),cssMinDims(pane).minSize),maxSize=s.maxSize=min(o.maxSize?_parseSize(pane,o.maxSize):1e5,limitSize),r=s.resizerPosition={},top=sC.inset.top,left=sC.inset.left,W=sC.innerWidth,H=sC.innerHeight,rW=o.spacing_open;switch(pane){case"north":r.min=top+minSize;r.max=top+maxSize;break;case"west":r.min=left+minSize;r.max=left+maxSize;break;case"south":r.min=top+H-maxSize-rW;r.max=top+H-minSize-rW;break;case"east":r.min=left+W-maxSize-rW;r.max=left+W-minSize-rW;break}},calcNewCenterPaneDims=function(){var d={top:getPaneSize("north",true),bottom:getPaneSize("south",true),left:getPaneSize("west",true),right:getPaneSize("east",true),width:0,height:0};d.width=sC.innerWidth-d.left-d.right;d.height=sC.innerHeight-d.bottom-d.top;d.top+=sC.inset.top;d.bottom+=sC.inset.bottom;d.left+=sC.inset.left;d.right+=sC.inset.right;return d},getHoverClasses=function(el,allStates){var $El=$(el),type=$El.data("layoutRole"),pane=$El.data("layoutEdge"),o=options[pane],root=o[type+"Class"],_pane="-"+pane,_open="-open",_closed="-closed",_slide="-sliding",_hover="-hover ",_state=$El.hasClass(root+_closed)?_closed:_open,_alt=_state===_closed?_open:_closed,classes=root+_hover+(root+_pane+_hover)+(root+_state+_hover)+(root+_pane+_state+_hover);if(allStates)classes+=root+_alt+_hover+(root+_pane+_alt+_hover);if(type=="resizer"&&$El.hasClass(root+_slide))classes+=root+_slide+_hover+(root+_pane+_slide+_hover);return String.prototype.trim.call(classes)},addHover=function(evt,el){var $E=$(el||this);if(evt&&$E.data("layoutRole")==="toggler")evt.stopPropagation();$E.addClass(getHoverClasses($E))},removeHover=function(evt,el){var $E=$(el||this);$E.removeClass(getHoverClasses($E,true))},onResizerEnter=function(evt){var pane=$(this).data("layoutEdge"),s=state[pane],$d=$(document);if(s.isResizing||state.paneResizing)return;if(options.maskPanesEarly)showMasks(pane,{resizing:true})},onResizerLeave=function(evt,el){var e=el||this,pane=$(e).data("layoutEdge"),name=pane+"ResizerLeave",$d=$(document);timer.clear(pane+"_openSlider");timer.clear(name);if(!el)timer.set(name,function(){onResizerLeave(evt,e)},200);else if(options.maskPanesEarly&&!state.paneResizing)hideMasks()},_create=function(){initOptions();var o=options,s=state;s.creatingLayout=true;runPluginCallbacks(Instance,$.layout.onCreate);if(false===_runCallbacks("onload_start"))return"cancel";_initContainer();initHotkeys();$(window).on("unload."+sID,unload);runPluginCallbacks(Instance,$.layout.onLoad);if(o.initPanes)_initLayoutElements();delete s.creatingLayout;resizeAll();$.each(["south","north","east","west"],function(i,pane){if(!$Ps[pane])return;o=options[pane];s=state[pane];var $P=$Ps[pane];if(o.initHidden){hide(pane)}else if(o.initClosed){close(pane)}});return state.initialized},isInitialized=function(){if(state.initialized||state.creatingLayout)return true;else return _initLayoutElements()},_initLayoutElements=function(retry){var o=options;if(!$N.is(":visible")){if(!retry&&browser.webkit&&$N[0].tagName==="BODY")setTimeout(function(){_initLayoutElements(true)},50);return false}if(!getPane("center").length){return _log(o.errors.centerPaneMissing)}state.creatingLayout=true;$.extend(sC,elDims($N,o.inset));initPanes();if(o.scrollToBookmarkOnLoad){var l=self.location;if(l.hash)l.replace(l.hash)}if(Instance.hasParentLayout)o.resizeWithWindow=false;else if(o.resizeWithWindow)$(window).on("resize."+sID,windowResize);delete state.creatingLayout;state.initialized=true;runPluginCallbacks(Instance,$.layout.onReady);_runCallbacks("onload_end");return true},createChildren=function(evt_or_pane,opts){var pane=evtPane.call(this,evt_or_pane),$P=$Ps[pane];if(!$P)return;var $C=$Cs[pane],s=state[pane],o=options[pane],sm=options.stateManagement||{},cos=opts?o.children=opts:o.children;if($.isPlainObject(cos))cos=[cos];else if(!cos||!Array.isArray(cos))return;$.each(cos,function(idx,co){if(!$.isPlainObject(co))return;var $containers=co.containerSelector?$P.find(co.containerSelector):$C||$P;$containers.each(function(){var $cont=$(this),child=$cont.data("layout");if(!child){setInstanceKey({container:$cont,options:co},s);if(sm.includeChildren&&state.stateData[pane]){var paneChildren=state.stateData[pane].children||{},childState=paneChildren[co.instanceKey],co_sm=co.stateManagement||(co.stateManagement={autoLoad:true});if(co_sm.autoLoad===true&&childState){co_sm.autoSave=false;co_sm.includeChildren=true;co_sm.autoLoad=$.extend(true,{},childState)}}child=$cont.layout(co);if(child){refreshChildren(pane,child)}}})})},setInstanceKey=function(child,parentPaneState){var $c=child.container,o=child.options,sm=o.stateManagement,key=o.instanceKey||$c.data("layoutInstanceKey");if(!key)key=(sm&&sm.cookie?sm.cookie.name:"")||o.name;if(!key)key="layout"+ ++parentPaneState.childIdx;else key=key.replace(/[^\w-]/gi,"_").replace(/_{2,}/g,"_");o.instanceKey=key;$c.data("layoutInstanceKey",key);return key},refreshChildren=function(pane,newChild){var $P=$Ps[pane],pC=children[pane],s=state[pane],o;if($.isPlainObject(pC)){$.each(pC,function(key,child){if(child.destroyed)delete pC[key]});if($.isEmptyObject(pC))pC=children[pane]=null}if(!newChild&&!pC){newChild=$P.data("layout")}if(newChild){newChild.hasParentLayout=true;o=newChild.options;setInstanceKey(newChild,s);if(!pC)pC=children[pane]={};pC[o.instanceKey]=newChild.container.data("layout")}Instance[pane].children=children[pane];if(!newChild){createChildren(pane)}},windowResize=function(){var o=options,delay=Number(o.resizeWithWindowDelay);if(delay<10)delay=100;timer.clear("winResize");timer.set("winResize",function(){timer.clear("winResize");timer.clear("winResizeRepeater");var dims=elDims($N,o.inset);if(dims.innerWidth!==sC.innerWidth||dims.innerHeight!==sC.innerHeight)resizeAll()},delay);if(!timer.data["winResizeRepeater"])setWindowResizeRepeater()},setWindowResizeRepeater=function(){var delay=Number(options.resizeWithWindowMaxDelay);if(delay>0)timer.set("winResizeRepeater",function(){setWindowResizeRepeater();resizeAll()},delay)},unload=function(){var o=options;_runCallbacks("onunload_start");runPluginCallbacks(Instance,$.layout.onUnload);_runCallbacks("onunload_end")},_initContainer=function(){var N=$N[0],$H=$("html"),tag=sC.tagName=N.tagName,id=sC.id=N.id,cls=sC.className=N.className,o=options,name=o.name,props="position,margin,padding,border",css="layoutCSS",CSS={},hid="hidden",parent=$N.data("parentLayout"),pane=$N.data("layoutEdge"),isChild=parent&&pane,num=$.layout.cssNum,$parent,n;sC.ref=(o.name?o.name+" layout / ":"")+tag+(id?"#"+id:cls?".["+cls+"]":"");sC.isBody=tag==="BODY";if(!isChild&&!sC.isBody){$parent=$N.closest("."+$.layout.defaults.panes.paneClass);parent=$parent.data("parentLayout");pane=$parent.data("layoutEdge");isChild=parent&&pane}$N.data({layout:Instance,layoutContainer:sID}).addClass(o.containerClass);var layoutMethods={destroy:"",initPanes:"",resizeAll:"resizeAll",resize:"resizeAll"};for(name in layoutMethods){$N.on("layout"+name.toLowerCase()+"."+sID,Instance[layoutMethods[name]||name])}if(isChild){Instance.hasParentLayout=true;parent.refreshChildren(pane,Instance)}if(!$N.data(css)){if(sC.isBody){$N.data(css,$.extend(styles($N,props),{height:$N.css("height"),overflow:$N.css("overflow"),overflowX:$N.css("overflowX"),overflowY:$N.css("overflowY")}));$H.data(css,$.extend(styles($H,"padding"),{height:"auto",overflow:$H.css("overflow"),overflowX:$H.css("overflowX"),overflowY:$H.css("overflowY")}))}else $N.data(css,styles($N,props+",top,bottom,left,right,width,height,overflow,overflowX,overflowY"))}try{CSS={overflow:hid,overflowX:hid,overflowY:hid};$N.css(CSS);if(o.inset&&!$.isPlainObject(o.inset)){n=parseInt(o.inset,10)||0;o.inset={top:n,bottom:n,left:n,right:n}}if(sC.isBody){if(!o.outset){o.outset={top:num($H,"paddingTop"),bottom:num($H,"paddingBottom"),left:num($H,"paddingLeft"),right:num($H,"paddingRight")}}else if(!$.isPlainObject(o.outset)){n=parseInt(o.outset,10)||0;o.outset={top:n,bottom:n,left:n,right:n}}$H.css(CSS).css({height:"100%",border:"none",padding:0,margin:0});if(browser.isIE6){$N.css({width:"100%",height:"100%",border:"none",padding:0,margin:0,position:"relative"});if(!o.inset)o.inset=elDims($N).inset}else{$N.css({width:"auto",height:"auto",margin:0,position:"absolute"});$N.css(o.outset)}$.extend(sC,elDims($N,o.inset))}else{var p=$N.css("position");if(!p||!p.match(/(fixed|absolute|relative)/))$N.css("position","relative");if($N.is(":visible")){$.extend(sC,elDims($N,o.inset));if(sC.innerHeight<1)_log(o.errors.noContainerHeight.replace(/CONTAINER/,sC.ref))}}if(num($N,"minWidth"))$N.parent().css("overflowX","auto");if(num($N,"minHeight"))$N.parent().css("overflowY","auto")}catch(ex){}},initHotkeys=function(panes){panes=panes?panes.split(","):_c.borderPanes;$.each(panes,function(i,pane){var o=options[pane];if(o.enableCursorHotkey||o.customHotkey){$(document).on("keydown."+sID,keyDown);return false}})},initOptions=function(){var data,d,pane,key,val,i,c,o;opts=$.layout.transformData(opts,true);opts=$.layout.backwardCompatibility.renameAllOptions(opts);if(!$.isEmptyObject(opts.panes)){data=$.layout.optionsMap.noDefault;for(i=0,c=data.length;i<c;i++){key=data[i];delete opts.panes[key]}data=$.layout.optionsMap.layout;for(i=0,c=data.length;i<c;i++){key=data[i];delete opts.panes[key]}}data=$.layout.optionsMap.layout;var rootKeys=$.layout.config.optionRootKeys;for(key in opts){val=opts[key];if($.inArray(key,rootKeys)<0&&$.inArray(key,data)<0){if(!opts.panes[key])opts.panes[key]=$.isPlainObject(val)?$.extend(true,{},val):val;delete opts[key]}}$.extend(true,options,opts);$.each(_c.allPanes,function(i,pane){_c[pane]=$.extend(true,{},_c.panes,_c[pane]);d=options.panes;o=options[pane];if(pane==="center"){data=$.layout.optionsMap.center;for(i=0,c=data.length;i<c;i++){key=data[i];if(!opts.center[key]&&(opts.panes[key]||!o[key]))o[key]=d[key]}}else{o=options[pane]=$.extend(true,{},d,o);createFxOptions(pane);if(!o.resizerClass)o.resizerClass="ui-layout-resizer";if(!o.togglerClass)o.togglerClass="ui-layout-toggler"}if(!o.paneClass)o.paneClass="ui-layout-pane"});var zo=opts.zIndex,z=options.zIndexes;if(zo>0){z.pane_normal=zo;z.content_mask=max(zo+1,z.content_mask);z.resizer_normal=max(zo+2,z.resizer_normal)}delete options.panes;function createFxOptions(pane){var o=options[pane],d=options.panes;if(!o.fxSettings)o.fxSettings={};if(!d.fxSettings)d.fxSettings={};$.each(["_open","_close","_size"],function(i,n){var sName="fxName"+n,sSpeed="fxSpeed"+n,sSettings="fxSettings"+n,fxName=o[sName]=o[sName]||d[sName]||o.fxName||d.fxName||"none",fxExists=$.effects&&($.effects[fxName]||$.effects.effect&&$.effects.effect[fxName]);if(fxName==="none"||!options.effects[fxName]||!fxExists)fxName=o[sName]="none";var fx=options.effects[fxName]||{},fx_all=fx.all||null,fx_pane=fx[pane]||null;o[sSpeed]=o[sSpeed]||d[sSpeed]||o.fxSpeed||d.fxSpeed||null;o[sSettings]=$.extend(true,{},fx_all,fx_pane,d.fxSettings,o.fxSettings,d[sSettings],o[sSettings])});delete o.fxName;delete o.fxSpeed;delete o.fxSettings}},getPane=function(pane){var sel=options[pane].paneSelector;if(sel.substr(0,1)==="#")return $N.find(sel).eq(0);else{var $P=$N.children(sel).eq(0);return $P.length?$P:$N.children("form:first").children(sel).eq(0)}},initPanes=function(evt){evtPane(evt);$.each(_c.allPanes,function(idx,pane){addPane(pane,true)});initHandles();$.each(_c.borderPanes,function(i,pane){if($Ps[pane]&&state[pane].isVisible){setSizeLimits(pane);makePaneFit(pane)}});sizeMidPanes("center");$.each(_c.allPanes,function(idx,pane){afterInitPane(pane)})},addPane=function(pane,force){if(!force&&!isInitialized())return;var o=options[pane],s=state[pane],c=_c[pane],dir=c.dir,fx=s.fx,spacing=o.spacing_open||0,isCenter=pane==="center",CSS={},$P=$Ps[pane],size,minSize,maxSize,child;if($P)removePane(pane,false,true,false);else $Cs[pane]=false;$P=$Ps[pane]=getPane(pane);if(!$P.length){$Ps[pane]=false;return}if(!$P.data("layoutCSS")){var props="position,top,left,bottom,right,width,height,overflow,zIndex,display,backgroundColor,padding,margin,border";$P.data("layoutCSS",styles($P,props))}Instance[pane]={name:pane,pane:$Ps[pane],content:$Cs[pane],options:options[pane],state:state[pane],children:children[pane]};$P.data({parentLayout:Instance,layoutPane:Instance[pane],layoutEdge:pane,layoutRole:"pane"}).css(c.cssReq).css("zIndex",new String(options.zIndexes.pane_normal)).css(o.applyDemoStyles?c.cssDemo:{}).addClass(o.paneClass+" "+o.paneClass+"-"+pane).on("mouseenter."+sID,addHover).on("mouseleave."+sID,removeHover);var paneMethods={hide:"",show:"",toggle:"",close:"",open:"",slideOpen:"",slideClose:"",slideToggle:"",size:"sizePane",sizePane:"sizePane",sizeContent:"",sizeHandles:"",enableClosable:"",disableClosable:"",enableSlideable:"",disableSlideable:"",enableResizable:"",disableResizable:"",swapPanes:"swapPanes",swap:"swapPanes",move:"swapPanes",removePane:"removePane",remove:"removePane",createChildren:"",resizeChildren:"",resizeAll:"resizeAll",resizeLayout:"resizeAll"},name;for(name in paneMethods){$P.on("layoutpane"+name.toLowerCase()+"."+sID,Instance[paneMethods[name]||name])}initContent(pane,false);if(!isCenter){size=s.size=_parseSize(pane,o.size);minSize=_parseSize(pane,o.minSize)||1;maxSize=_parseSize(pane,o.maxSize)||1e5;if(size>0)size=max(min(size,maxSize),minSize);s.autoResize=o.autoResize;s.isClosed=false;s.isSliding=false;s.isResizing=false;s.isHidden=false;if(!s.pins)s.pins=[]}s.tagName=$P[0].tagName;s.edge=pane;s.noRoom=false;s.isVisible=true;setPanePosition(pane);if(dir==="horz")CSS.height=cssH($P,size);else if(dir==="vert")CSS.width=cssW($P,size);$P.css(CSS);if(dir!="horz")sizeMidPanes(pane,true);if(state.initialized){initHandles(pane);initHotkeys(pane)}if(o.initClosed&&o.closable&&!o.initHidden)close(pane,true,true);else if(o.initHidden||o.initClosed)hide(pane);else if(!s.noRoom)$P.css("display","block");$P.css("visibility","visible");if(o.showOverflowOnHover)$P.on("hover",allowOverflow,resetOverflow);if(state.initialized){afterInitPane(pane)}},afterInitPane=function(pane){var $P=$Ps[pane],s=state[pane],o=options[pane];if(!$P)return;if($P.data("layout"))refreshChildren(pane,$P.data("layout"));if(s.isVisible){if(state.initialized)resizeAll();else sizeContent(pane);if(o.triggerEventsOnLoad)_runCallbacks("onresize_end",pane);else resizeChildren(pane,true)}if(o.initChildren&&o.children)createChildren(pane)},setPanePosition=function(panes){panes=panes?panes.split(","):_c.borderPanes;$.each(panes,function(i,pane){var $P=$Ps[pane],$R=$Rs[pane],o=options[pane],s=state[pane],side=_c[pane].side,CSS={};if(!$P)return;switch(pane){case"north":CSS.top=sC.inset.top;CSS.left=sC.inset.left;CSS.right=sC.inset.right;break;case"south":CSS.bottom=sC.inset.bottom;CSS.left=sC.inset.left;CSS.right=sC.inset.right;break;case"west":CSS.left=sC.inset.left;break;case"east":CSS.right=sC.inset.right;break;case"center":}$P.css(CSS);if($R&&s.isClosed)$R.css(side,sC.inset[side]);else if($R&&!s.isHidden)$R.css(side,sC.inset[side]+getPaneSize(pane))})},initHandles=function(panes){panes=panes?panes.split(","):_c.borderPanes;$.each(panes,function(i,pane){var $P=$Ps[pane];$Rs[pane]=false;$Ts[pane]=false;if(!$P)return;var o=options[pane],s=state[pane],c=_c[pane],paneId=o.paneSelector.substr(0,1)==="#"?o.paneSelector.substr(1):"",rClass=o.resizerClass,tClass=o.togglerClass,spacing=s.isVisible?o.spacing_open:o.spacing_closed,_pane="-"+pane,_state=s.isVisible?"-open":"-closed",I=Instance[pane],$R=I.resizer=$Rs[pane]=$("<div></div>"),$T=I.toggler=o.closable?$Ts[pane]=$("<div></div>"):false;if(!s.isVisible&&o.slidable)$R.attr("title",o.tips.Slide).css("cursor",o.sliderCursor);$R.attr("id",paneId?paneId+"-resizer":"").data({parentLayout:Instance,layoutPane:Instance[pane],layoutEdge:pane,layoutRole:"resizer"}).css(_c.resizers.cssReq).css("zIndex",new String(options.zIndexes.resizer_normal)).css(o.applyDemoStyles?_c.resizers.cssDemo:{}).addClass(rClass+" "+rClass+_pane).on("hover",addHover,removeHover).on("hover",onResizerEnter,onResizerLeave).on("mousedown",$.layout.disableTextSelection).on("mouseup",$.layout.enableTextSelection).appendTo($N);if($.fn.disableSelection)$R.disableSelection();if(o.resizerDblClickToggle)$R.on("dblclick."+sID,toggle);if($T){$T.attr("id",paneId?paneId+"-toggler":"").data({parentLayout:Instance,layoutPane:Instance[pane],layoutEdge:pane,layoutRole:"toggler"}).css(_c.togglers.cssReq).css(o.applyDemoStyles?_c.togglers.cssDemo:{}).addClass(tClass+" "+tClass+_pane).on("hover",addHover,removeHover).on("mouseenter",onResizerEnter).appendTo($R);if(o.togglerContent_open)$("<span>"+o.togglerContent_open+"</span>").data({layoutEdge:pane,layoutRole:"togglerContent"}).data("layoutRole","togglerContent").data("layoutEdge",pane).addClass("content content-open").css("display","none").appendTo($T);if(o.togglerContent_closed)$("<span>"+o.togglerContent_closed+"</span>").data({layoutEdge:pane,layoutRole:"togglerContent"}).addClass("content content-closed").css("display","none").appendTo($T);enableClosable(pane)}initResizable(pane);if(s.isVisible)setAsOpen(pane);else{setAsClosed(pane);bindStartSlidingEvents(pane,true)}});sizeHandles()},initContent=function(pane,resize){if(!isInitialized())return;var o=options[pane],sel=o.contentSelector,I=Instance[pane],$P=$Ps[pane],$C;if(sel)$C=I.content=$Cs[pane]=o.findNestedContent?$P.find(sel).eq(0):$P.children(sel).eq(0);if($C&&$C.length){$C.data("layoutRole","content");if(!$C.data("layoutCSS"))$C.data("layoutCSS",styles($C,"height"));$C.css(_c.content.cssReq);if(o.applyDemoStyles){$C.css(_c.content.cssDemo);$P.css(_c.content.cssDemoPane)}if($P.css("overflowX").match(/(scroll|auto)/)){$P.css("overflow","hidden")}state[pane].content={};if(resize!==false)sizeContent(pane)}else I.content=$Cs[pane]=false},initResizable=function(panes){var draggingAvailable=$.layout.plugins.draggable,side;panes=panes?panes.split(","):_c.borderPanes;$.each(panes,function(idx,pane){var o=options[pane];if(!draggingAvailable||!$Ps[pane]||!o.resizable){o.resizable=false;return true}var s=state[pane],z=options.zIndexes,c=_c[pane],side=c.dir=="horz"?"top":"left",$P=$Ps[pane],$R=$Rs[pane],base=o.resizerClass,lastPos=0,r,live,resizerClass=base+"-drag",resizerPaneClass=base+"-"+pane+"-drag",helperClass=base+"-dragging",helperPaneClass=base+"-"+pane+"-dragging",helperLimitClass=base+"-dragging-limit",helperPaneLimitClass=base+"-"+pane+"-dragging-limit",helperClassesSet=false;if(!s.isClosed)$R.attr("title",o.tips.Resize).css("cursor",o.resizerCursor);$R.draggable({containment:$N[0],axis:c.dir=="horz"?"y":"x",delay:0,distance:1,grid:o.resizingGrid,helper:"clone",opacity:o.resizerDragOpacity,addClasses:false,iframeFix:o.draggableIframeFix,zIndex:z.resizer_drag,start:function(e,ui){o=options[pane];s=state[pane];live=o.livePaneResizing;if(false===_runCallbacks("ondrag_start",pane))return false;s.isResizing=true;state.paneResizing=pane;timer.clear(pane+"_closeSlider");setSizeLimits(pane);r=s.resizerPosition;lastPos=ui.position[side];$R.addClass(resizerClass+" "+resizerPaneClass);helperClassesSet=false;showMasks(pane,{resizing:true})},drag:function(e,ui){if(!helperClassesSet){ui.helper.addClass(helperClass+" "+helperPaneClass).css({right:"auto",bottom:"auto"}).children().css("visibility","hidden");helperClassesSet=true;if(s.isSliding)$Ps[pane].css("zIndex",z.pane_sliding)}var limit=0;if(ui.position[side]<r.min){ui.position[side]=r.min;limit=-1}else if(ui.position[side]>r.max){ui.position[side]=r.max;limit=1}if(limit){ui.helper.addClass(helperLimitClass+" "+helperPaneLimitClass);window.defaultStatus=limit>0&&pane.match(/(north|west)/)||limit<0&&pane.match(/(south|east)/)?o.tips.maxSizeWarning:o.tips.minSizeWarning}else{ui.helper.removeClass(helperLimitClass+" "+helperPaneLimitClass);window.defaultStatus=""}if(live&&Math.abs(ui.position[side]-lastPos)>=o.liveResizingTolerance){lastPos=ui.position[side];resizePanes(e,ui,pane)}},stop:function(e,ui){$("body").enableSelection();window.defaultStatus="";$R.removeClass(resizerClass+" "+resizerPaneClass);s.isResizing=false;state.paneResizing=false;resizePanes(e,ui,pane,true)}})});var resizePanes=function(evt,ui,pane,resizingDone){var dragPos=ui.position,c=_c[pane],o=options[pane],s=state[pane],resizerPos;switch(pane){case"north":resizerPos=dragPos.top;break;case"west":resizerPos=dragPos.left;break;case"south":resizerPos=sC.layoutHeight-dragPos.top-o.spacing_open;break;case"east":resizerPos=sC.layoutWidth-dragPos.left-o.spacing_open;break}var newSize=resizerPos-sC.inset[c.side];if(!resizingDone){if(Math.abs(newSize-s.size)<o.liveResizingTolerance)return;manualSizePane(pane,newSize,false,true);sizeMasks()}else{if(false!==_runCallbacks("ondrag_end",pane))manualSizePane(pane,newSize,false,true);hideMasks(true);if(s.isSliding)showMasks(pane,{resizing:true})}}},sizeMask=function(){var $M=$(this),pane=$M.data("layoutMask"),s=state[pane];if(s.tagName=="IFRAME"&&s.isVisible)$M.css({top:s.offsetTop,left:s.offsetLeft,width:s.outerWidth,height:s.outerHeight})},sizeMasks=function(){$Ms.each(sizeMask)},showMasks=function(pane,args){var c=_c[pane],panes=["center"],z=options.zIndexes,a=$.extend({objectsOnly:false,animation:false,resizing:true,sliding:state[pane].isSliding},args),o,s;if(a.resizing)panes.push(pane);if(a.sliding)panes.push(_c.oppositeEdge[pane]);if(c.dir==="horz"){panes.push("west");panes.push("east")}$.each(panes,function(i,p){s=state[p];o=options[p];if(s.isVisible&&(o.maskObjects||!a.objectsOnly&&o.maskContents)){getMasks(p).each(function(){sizeMask.call(this);this.style.zIndex=s.isSliding?z.pane_sliding+1:z.pane_normal+1;this.style.display="block"})}})},hideMasks=function(force){if(force||!state.paneResizing){$Ms.hide()}else if(!force&&!$.isEmptyObject(state.panesSliding)){var i=$Ms.length-1,p,$M;for(;i>=0;i--){$M=$Ms.eq(i);p=$M.data("layoutMask");if(!options[p].maskObjects){$M.hide()}}}},getMasks=function(pane){var $Masks=$([]),$M,i=0,c=$Ms.length;for(;i<c;i++){$M=$Ms.eq(i);if($M.data("layoutMask")===pane)$Masks=$Masks.add($M)}if($Masks.length)return $Masks;else return createMasks(pane)},createMasks=function(pane){var $P=$Ps[pane],s=state[pane],o=options[pane],z=options.zIndexes,isIframe,el,$M,css,i;if(!o.maskContents&&!o.maskObjects)return $([]);for(i=0;i<(o.maskObjects?2:1);i++){isIframe=o.maskObjects&&i==0;el=document.createElement(isIframe?"iframe":"div");$M=$(el).data("layoutMask",pane);el.className="ui-layout-mask ui-layout-mask-"+pane;css=el.style;css.background="#FFF";css.position="absolute";css.display="block";if(isIframe){el.src="about:blank";el.frameborder=0;css.border=0;css.opacity=0;css.filter="Alpha(Opacity='0')"}else{css.opacity=.001;css.filter="Alpha(Opacity='1')"}if(s.tagName=="IFRAME"){css.zIndex=z.pane_normal+1;$N.append(el)}else{$M.addClass("ui-layout-mask-inside-pane");css.zIndex=o.maskZindex||z.content_mask;css.top=0;css.left=0;css.width="100%";css.height="100%";$P.append(el)}$Ms=$Ms.add(el)}return $Ms},destroy=function(evt_or_destroyChildren,destroyChildren){$(window).off("."+sID);$(document).off("."+sID);if(typeof evt_or_destroyChildren==="object")evtPane(evt_or_destroyChildren);else destroyChildren=evt_or_destroyChildren;$N.clearQueue().removeData("layout").removeData("layoutContainer").removeClass(options.containerClass).off("."+sID);$Ms.remove();$.each(_c.allPanes,function(i,pane){removePane(pane,false,true,destroyChildren)});var css="layoutCSS";if($N.data(css)&&!$N.data("layoutRole"))$N.css($N.data(css)).removeData(css);if(sC.tagName==="BODY"&&($N=$("html")).data(css))$N.css($N.data(css)).removeData(css);runPluginCallbacks(Instance,$.layout.onDestroy);unload();for(var n in Instance)if(!n.match(/^(container|options)$/))delete Instance[n];Instance.destroyed=true;return Instance},removePane=function(evt_or_pane,remove,skipResize,destroyChild){if(!isInitialized())return;var pane=evtPane.call(this,evt_or_pane),$P=$Ps[pane],$C=$Cs[pane],$R=$Rs[pane],$T=$Ts[pane];if($P&&$.isEmptyObject($P.data()))$P=false;if($C&&$.isEmptyObject($C.data()))$C=false;if($R&&$.isEmptyObject($R.data()))$R=false;if($T&&$.isEmptyObject($T.data()))$T=false;if($P)$P.stop(true,true);var o=options[pane],s=state[pane],d="layout",css="layoutCSS",pC=children[pane],hasChildren=$.isPlainObject(pC)&&!$.isEmptyObject(pC),destroy=destroyChild!==undefined?destroyChild:o.destroyChildren;if(hasChildren&&destroy){$.each(pC,function(key,child){if(!child.destroyed)child.destroy(true);if(child.destroyed)delete pC[key]});if($.isEmptyObject(pC)){pC=children[pane]=null;hasChildren=false}}if($P&&remove&&!hasChildren)$P.remove();else if($P&&$P[0]){var root=o.paneClass,pRoot=root+"-"+pane,_open="-open",_sliding="-sliding",_closed="-closed",classes=[root,root+_open,root+_closed,root+_sliding,pRoot,pRoot+_open,pRoot+_closed,pRoot+_sliding];$.merge(classes,getHoverClasses($P,true));$P.removeClass(classes.join(" ")).removeData("parentLayout").removeData("layoutPane").removeData("layoutRole").removeData("layoutEdge").removeData("autoHidden").off("."+sID);if(hasChildren&&$C){$C.width($C.width());$.each(pC,function(key,child){child.resizeAll()})}else if($C)$C.css($C.data(css)).removeData(css).removeData("layoutRole");if(!$P.data(d))$P.css($P.data(css)).removeData(css)}if($T)$T.remove();if($R)$R.remove();Instance[pane]=$Ps[pane]=$Cs[pane]=$Rs[pane]=$Ts[pane]=false;s={removed:true};if(!skipResize)resizeAll()},_hidePane=function(pane){var $P=$Ps[pane],o=options[pane],s=$P[0].style;if(o.useOffscreenClose){if(!$P.data(_c.offscreenReset))$P.data(_c.offscreenReset,{left:s.left,right:s.right});$P.css(_c.offscreenCSS)}else $P.hide().removeData(_c.offscreenReset)},_showPane=function(pane){var $P=$Ps[pane],o=options[pane],off=_c.offscreenCSS,old=$P.data(_c.offscreenReset),s=$P[0].style;$P.show().removeData(_c.offscreenReset);if(o.useOffscreenClose&&old){if(s.left==off.left)s.left=old.left;if(s.right==off.right)s.right=old.right}},hide=function(evt_or_pane,noAnimation){if(!isInitialized())return;var pane=evtPane.call(this,evt_or_pane),o=options[pane],s=state[pane],$P=$Ps[pane],$R=$Rs[pane];if(pane==="center"||!$P||s.isHidden)return;if(state.initialized&&false===_runCallbacks("onhide_start",pane))return;s.isSliding=false;delete state.panesSliding[pane];if($R)$R.hide();if(!state.initialized||s.isClosed){s.isClosed=true;s.isHidden=true;s.isVisible=false;if(!state.initialized)_hidePane(pane);sizeMidPanes(_c[pane].dir==="horz"?"":"center");if(state.initialized||o.triggerEventsOnLoad)_runCallbacks("onhide_end",pane)}else{s.isHiding=true;close(pane,false,noAnimation)}},show=function(evt_or_pane,openPane,noAnimation,noAlert){if(!isInitialized())return;var pane=evtPane.call(this,evt_or_pane),o=options[pane],s=state[pane],$P=$Ps[pane],$R=$Rs[pane];if(pane==="center"||!$P||!s.isHidden)return;if(false===_runCallbacks("onshow_start",pane))return;s.isShowing=true;s.isSliding=false;delete state.panesSliding[pane];if(openPane===false)close(pane,true);else open(pane,false,noAnimation,noAlert)},toggle=function(evt_or_pane,slide){if(!isInitialized())return;var evt=evtObj(evt_or_pane),pane=evtPane.call(this,evt_or_pane),s=state[pane];if(evt)evt.stopImmediatePropagation();if(s.isHidden)show(pane);else if(s.isClosed)open(pane,!!slide);else close(pane)},_closePane=function(pane,setHandles){var $P=$Ps[pane],s=state[pane];_hidePane(pane);s.isClosed=true;s.isVisible=false;if(setHandles)setAsClosed(pane)},close=function(evt_or_pane,force,noAnimation,skipCallback){var pane=evtPane.call(this,evt_or_pane);if(pane==="center")return;if(!state.initialized&&$Ps[pane]){_closePane(pane,true);return}if(!isInitialized())return;var $P=$Ps[pane],$R=$Rs[pane],$T=$Ts[pane],o=options[pane],s=state[pane],c=_c[pane],doFX,isShowing,isHiding,wasSliding;$N.queue(function(queueNext){if(!$P||!o.closable&&!s.isShowing&&!s.isHiding||!force&&s.isClosed&&!s.isShowing)return queueNext();var abort=!s.isShowing&&false===_runCallbacks("onclose_start",pane);isShowing=s.isShowing;isHiding=s.isHiding;wasSliding=s.isSliding;delete s.isShowing;delete s.isHiding;if(abort)return queueNext();doFX=!noAnimation&&!s.isClosed&&o.fxName_close!="none";s.isMoving=true;s.isClosed=true;s.isVisible=false;if(isHiding)s.isHidden=true;else if(isShowing)s.isHidden=false;if(s.isSliding)bindStopSlidingEvents(pane,false);else sizeMidPanes(_c[pane].dir==="horz"?"":"center",false);setAsClosed(pane);if(doFX){lockPaneForFX(pane,true);$P.hide(o.fxName_close,o.fxSettings_close,o.fxSpeed_close,function(){lockPaneForFX(pane,false);if(s.isClosed)close_2();queueNext()})}else{_hidePane(pane);close_2();queueNext()}});function close_2(){s.isMoving=false;bindStartSlidingEvents(pane,true);var altPane=_c.oppositeEdge[pane];if(state[altPane].noRoom){setSizeLimits(altPane);makePaneFit(altPane)}if(!skipCallback&&(state.initialized||o.triggerEventsOnLoad)){if(!isShowing)_runCallbacks("onclose_end",pane);if(isShowing)_runCallbacks("onshow_end",pane);if(isHiding)_runCallbacks("onhide_end",pane)}}},setAsClosed=function(pane){if(!$Rs[pane])return;var $P=$Ps[pane],$R=$Rs[pane],$T=$Ts[pane],o=options[pane],s=state[pane],side=_c[pane].side,rClass=o.resizerClass,tClass=o.togglerClass,_pane="-"+pane,_open="-open",_sliding="-sliding",_closed="-closed";$R.css(side,sC.inset[side]).removeClass(rClass+_open+" "+rClass+_pane+_open).removeClass(rClass+_sliding+" "+rClass+_pane+_sliding).addClass(rClass+_closed+" "+rClass+_pane+_closed);if(s.isHidden)$R.hide();if(o.resizable&&$.layout.plugins.draggable)$R.draggable("disable").removeClass("ui-state-disabled").css("cursor","default").attr("title","");if($T){$T.removeClass(tClass+_open+" "+tClass+_pane+_open).addClass(tClass+_closed+" "+tClass+_pane+_closed).attr("title",o.tips.Open);$T.children(".content-open").hide();$T.children(".content-closed").css("display","block")}syncPinBtns(pane,false);if(state.initialized){sizeHandles()}},open=function(evt_or_pane,slide,noAnimation,noAlert){if(!isInitialized())return;var pane=evtPane.call(this,evt_or_pane),$P=$Ps[pane],$R=$Rs[pane],$T=$Ts[pane],o=options[pane],s=state[pane],c=_c[pane],doFX,isShowing;if(pane==="center")return;$N.queue(function(queueNext){if(!$P||!o.resizable&&!o.closable&&!s.isShowing||s.isVisible&&!s.isSliding)return queueNext();if(s.isHidden&&!s.isShowing){queueNext();show(pane,true);return}if(s.autoResize&&s.size!=o.size)sizePane(pane,o.size,true,true,true);else setSizeLimits(pane,slide);var cbReturn=_runCallbacks("onopen_start",pane);if(cbReturn==="abort")return queueNext();if(cbReturn!=="NC")setSizeLimits(pane,slide);if(s.minSize>s.maxSize){syncPinBtns(pane,false);if(!noAlert&&o.tips.noRoomToOpen)alert(o.tips.noRoomToOpen);return queueNext()}if(slide)bindStopSlidingEvents(pane,true);else if(s.isSliding)bindStopSlidingEvents(pane,false);else if(o.slidable)bindStartSlidingEvents(pane,false);s.noRoom=false;makePaneFit(pane);isShowing=s.isShowing;delete s.isShowing;doFX=!noAnimation&&s.isClosed&&o.fxName_open!="none";s.isMoving=true;s.isVisible=true;s.isClosed=false;if(isShowing)s.isHidden=false;if(doFX){lockPaneForFX(pane,true);$P.show(o.fxName_open,o.fxSettings_open,o.fxSpeed_open,function(){lockPaneForFX(pane,false);if(s.isVisible)open_2();queueNext()})}else{_showPane(pane);open_2();queueNext()}});function open_2(){s.isMoving=false;_fixIframe(pane);if(!s.isSliding){sizeMidPanes(_c[pane].dir=="vert"?"center":"",false)}setAsOpen(pane)}},setAsOpen=function(pane,skipCallback){var $P=$Ps[pane],$R=$Rs[pane],$T=$Ts[pane],o=options[pane],s=state[pane],side=_c[pane].side,rClass=o.resizerClass,tClass=o.togglerClass,_pane="-"+pane,_open="-open",_closed="-closed",_sliding="-sliding";$R.css(side,sC.inset[side]+getPaneSize(pane)).removeClass(rClass+_closed+" "+rClass+_pane+_closed).addClass(rClass+_open+" "+rClass+_pane+_open);if(s.isSliding)$R.addClass(rClass+_sliding+" "+rClass+_pane+_sliding);else $R.removeClass(rClass+_sliding+" "+rClass+_pane+_sliding);removeHover(0,$R);if(o.resizable&&$.layout.plugins.draggable)$R.draggable("enable").css("cursor",o.resizerCursor).attr("title",o.tips.Resize);else if(!s.isSliding)$R.css("cursor","default");if($T){$T.removeClass(tClass+_closed+" "+tClass+_pane+_closed).addClass(tClass+_open+" "+tClass+_pane+_open).attr("title",o.tips.Close);removeHover(0,$T);$T.children(".content-closed").hide();$T.children(".content-open").css("display","block")}syncPinBtns(pane,!s.isSliding);$.extend(s,elDims($P));if(state.initialized){sizeHandles();sizeContent(pane,true)}if(!skipCallback&&(state.initialized||o.triggerEventsOnLoad)&&$P.is(":visible")){_runCallbacks("onopen_end",pane);if(s.isShowing)_runCallbacks("onshow_end",pane);if(state.initialized)_runCallbacks("onresize_end",pane)}},slideOpen=function(evt_or_pane){if(!isInitialized())return;var evt=evtObj(evt_or_pane),pane=evtPane.call(this,evt_or_pane),s=state[pane],delay=options[pane].slideDelay_open;if(pane==="center")return;if(evt)evt.stopImmediatePropagation();if(s.isClosed&&evt&&evt.type==="mouseenter"&&delay>0)timer.set(pane+"_openSlider",open_NOW,delay);else open_NOW();function open_NOW(){if(!s.isClosed)bindStopSlidingEvents(pane,true);else if(!s.isMoving)open(pane,true)}},slideClose=function(evt_or_pane){if(!isInitialized())return;var evt=evtObj(evt_or_pane),pane=evtPane.call(this,evt_or_pane),o=options[pane],s=state[pane],delay=s.isMoving?1e3:300;if(pane==="center")return;if(s.isClosed||s.isResizing){}else if(o.slideTrigger_close==="click")close_NOW();else if(o.preventQuickSlideClose&&s.isMoving){}else if(o.preventPrematureSlideClose&&evt&&$.layout.isMouseOverElem(evt,$Ps[pane])){}else if(evt)timer.set(pane+"_closeSlider",close_NOW,max(o.slideDelay_close,delay));else close_NOW();function close_NOW(){if(s.isClosed)bindStopSlidingEvents(pane,false);else if(!s.isMoving)close(pane)}},slideToggle=function(evt_or_pane){var pane=evtPane.call(this,evt_or_pane);toggle(pane,true)},lockPaneForFX=function(pane,doLock){var $P=$Ps[pane],s=state[pane],o=options[pane],z=options.zIndexes;if(doLock){showMasks(pane,{animation:true,objectsOnly:true});$P.css({zIndex:z.pane_animate});if(pane=="south")$P.css({top:sC.inset.top+sC.innerHeight-$P.outerHeight()});else if(pane=="east")$P.css({left:sC.inset.left+sC.innerWidth-$P.outerWidth()})}else{hideMasks();$P.css({zIndex:s.isSliding?z.pane_sliding:z.pane_normal});if(pane=="south")$P.css({top:"auto"});else if(pane=="east"&&!$P.css("left").match(/\-99999/))$P.css({left:"auto"});if(browser.msie&&o.fxOpacityFix&&o.fxName_open!="slide"&&$P.css("filter")&&$P.css("opacity")==1)$P[0].style.removeAttribute("filter")}},bindStartSlidingEvents=function(pane,enable){var o=options[pane],$P=$Ps[pane],$R=$Rs[pane],evtName=o.slideTrigger_open.toLowerCase();if(!$R||enable&&!o.slidable)return;if(evtName.match(/mouseover/))evtName=o.slideTrigger_open="mouseenter";else if(!evtName.match(/(click|dblclick|mouseenter)/))evtName=o.slideTrigger_open="click";if(o.resizerDblClickToggle&&evtName.match(/click/)){$R[enable?"off":"on"]("dblclick."+sID,toggle)}$R[enable?"on":"off"](evtName+"."+sID,slideOpen).css("cursor",enable?o.sliderCursor:"default").attr("title",enable?o.tips.Slide:"")},bindStopSlidingEvents=function(pane,enable){var o=options[pane],s=state[pane],c=_c[pane],z=options.zIndexes,evtName=o.slideTrigger_close.toLowerCase(),action=enable?"on":"off",$P=$Ps[pane],$R=$Rs[pane];timer.clear(pane+"_closeSlider");if(enable){s.isSliding=true;state.panesSliding[pane]=true;bindStartSlidingEvents(pane,false)}else{s.isSliding=false;delete state.panesSliding[pane]}$P.css("zIndex",enable?z.pane_sliding:z.pane_normal);$R.css("zIndex",enable?z.pane_sliding+2:z.resizer_normal);if(!evtName.match(/(click|mouseleave)/))evtName=o.slideTrigger_close="mouseleave";$R[action](evtName,slideClose);if(evtName==="mouseleave"){$P[action]("mouseleave."+sID,slideClose);$R[action]("mouseenter."+sID,cancelMouseOut);$P[action]("mouseenter."+sID,cancelMouseOut)}if(!enable)timer.clear(pane+"_closeSlider");else if(evtName==="click"&&!o.resizable){$R.css("cursor",enable?o.sliderCursor:"default");$R.attr("title",enable?o.tips.Close:"")}function cancelMouseOut(evt){timer.clear(pane+"_closeSlider");evt.stopPropagation()}},makePaneFit=function(pane,isOpening,skipCallback,force){var o=options[pane],s=state[pane],c=_c[pane],$P=$Ps[pane],$R=$Rs[pane],isSidePane=c.dir==="vert",hasRoom=false;if(pane==="center"||isSidePane&&s.noVerticalRoom){hasRoom=s.maxHeight>=0;if(hasRoom&&s.noRoom){_showPane(pane);if($R)$R.show();s.isVisible=true;s.noRoom=false;if(isSidePane)s.noVerticalRoom=false;_fixIframe(pane)}else if(!hasRoom&&!s.noRoom){_hidePane(pane);if($R)$R.hide();s.isVisible=false;s.noRoom=true}}if(pane==="center"){}else if(s.minSize<=s.maxSize){hasRoom=true;if(s.size>s.maxSize)sizePane(pane,s.maxSize,skipCallback,true,force);else if(s.size<s.minSize)sizePane(pane,s.minSize,skipCallback,true,force);else if($R&&s.isVisible&&$P.is(":visible")){var pos=s.size+sC.inset[c.side];if($.layout.cssNum($R,c.side)!=pos)$R.css(c.side,pos)}if(s.noRoom){if(s.wasOpen&&o.closable){if(o.autoReopen)open(pane,false,true,true);else s.noRoom=false}else show(pane,s.wasOpen,true,true)}}else{if(!s.noRoom){s.noRoom=true;s.wasOpen=!s.isClosed&&!s.isSliding;if(s.isClosed){}else if(o.closable)close(pane,true,true);else hide(pane,true)}}},manualSizePane=function(evt_or_pane,size,skipCallback,noAnimation,force){if(!isInitialized())return;var pane=evtPane.call(this,evt_or_pane),o=options[pane],s=state[pane],forceResize=force||o.livePaneResizing&&!s.isResizing;if(pane==="center")return;s.autoResize=false;sizePane(pane,size,skipCallback,noAnimation,forceResize)},sizePane=function(evt_or_pane,size,skipCallback,noAnimation,force){if(!isInitialized())return;var pane=evtPane.call(this,evt_or_pane),o=options[pane],s=state[pane],$P=$Ps[pane],$R=$Rs[pane],side=_c[pane].side,dimName=_c[pane].sizeType.toLowerCase(),skipResizeWhileDragging=s.isResizing&&!o.triggerEventsDuringLiveResize,doFX=noAnimation!==true&&o.animatePaneSizing,oldSize,newSize;if(pane==="center")return;$N.queue(function(queueNext){setSizeLimits(pane);oldSize=s.size;size=_parseSize(pane,size);size=max(size,_parseSize(pane,o.minSize));size=min(size,s.maxSize);if(size<s.minSize){queueNext();makePaneFit(pane,false,skipCallback);return}if(!force&&size===oldSize)return queueNext();s.newSize=size;if(!skipCallback&&state.initialized&&s.isVisible)_runCallbacks("onresize_start",pane);newSize=cssSize(pane,size);if(doFX&&$P.is(":visible")){var fx=$.layout.effects.size[pane]||$.layout.effects.size.all,easing=o.fxSettings_size.easing||fx.easing,z=options.zIndexes,props={};props[dimName]=newSize+"px";s.isMoving=true;$P.css({zIndex:z.pane_animate}).show().animate(props,o.fxSpeed_size,easing,function(){$P.css({zIndex:s.isSliding?z.pane_sliding:z.pane_normal});s.isMoving=false;delete s.newSize;sizePane_2();queueNext()})}else{$P.css(dimName,newSize);delete s.newSize;if($P.is(":visible"))sizePane_2();else{s.size=size}queueNext()}});function sizePane_2(){var actual=dimName==="width"?$P.outerWidth():$P.outerHeight(),tries=[{pane:pane,count:1,target:size,actual:actual,correct:size===actual,attempt:size,cssSize:newSize}],lastTry=tries[0],thisTry={},msg="Inaccurate size after resizing the "+pane+"-pane.";while(!lastTry.correct){thisTry={pane:pane,count:lastTry.count+1,target:size};if(lastTry.actual>size)thisTry.attempt=max(0,lastTry.attempt-(lastTry.actual-size));else thisTry.attempt=max(0,lastTry.attempt+(size-lastTry.actual));thisTry.cssSize=cssSize(pane,thisTry.attempt);$P.css(dimName,thisTry.cssSize);thisTry.actual=dimName=="width"?$P.outerWidth():$P.outerHeight();thisTry.correct=size===thisTry.actual;if(tries.length===1){_log(msg,false,true);_log(lastTry,false,true)}_log(thisTry,false,true);if(tries.length>3)break;tries.push(thisTry);lastTry=tries[tries.length-1]}s.size=size;$.extend(s,elDims($P));if(s.isVisible&&$P.is(":visible")){if($R)$R.css(side,size+sC.inset[side]);sizeContent(pane)}if(!skipCallback&&!skipResizeWhileDragging&&state.initialized&&s.isVisible)_runCallbacks("onresize_end",pane);if(!skipCallback){if(!s.isSliding)sizeMidPanes(_c[pane].dir=="horz"?"":"center",skipResizeWhileDragging,force);sizeHandles()}var altPane=_c.oppositeEdge[pane];if(size<oldSize&&state[altPane].noRoom){setSizeLimits(altPane);makePaneFit(altPane,false,skipCallback)}if(tries.length>1)_log(msg+"\nSee the Error Console for details.",true,true)}},sizeMidPanes=function(panes,skipCallback,force){panes=(panes?panes:"east,west,center").split(",");$.each(panes,function(i,pane){if(!$Ps[pane])return;var o=options[pane],s=state[pane],$P=$Ps[pane],$R=$Rs[pane],isCenter=pane=="center",hasRoom=true,CSS={},visCSS=$.layout.showInvisibly($P),newCenter=calcNewCenterPaneDims();$.extend(s,elDims($P));if(pane==="center"){if(!force&&s.isVisible&&newCenter.width===s.outerWidth&&newCenter.height===s.outerHeight){$P.css(visCSS);return true}$.extend(s,cssMinDims(pane),{maxWidth:newCenter.width,maxHeight:newCenter.height});CSS=newCenter;s.newWidth=CSS.width;s.newHeight=CSS.height;CSS.width=cssW($P,CSS.width);CSS.height=cssH($P,CSS.height);hasRoom=CSS.width>=0&&CSS.height>=0;if(!state.initialized&&o.minWidth>newCenter.width){var reqPx=o.minWidth-s.outerWidth,minE=options.east.minSize||0,minW=options.west.minSize||0,sizeE=state.east.size,sizeW=state.west.size,newE=sizeE,newW=sizeW;if(reqPx>0&&state.east.isVisible&&sizeE>minE){newE=max(sizeE-minE,sizeE-reqPx);reqPx-=sizeE-newE}if(reqPx>0&&state.west.isVisible&&sizeW>minW){newW=max(sizeW-minW,sizeW-reqPx);reqPx-=sizeW-newW}if(reqPx===0){if(sizeE&&sizeE!=minE)sizePane("east",newE,true,true,force);if(sizeW&&sizeW!=minW)sizePane("west",newW,true,true,force);sizeMidPanes("center",skipCallback,force);$P.css(visCSS);return}}}else{if(s.isVisible&&!s.noVerticalRoom)$.extend(s,elDims($P),cssMinDims(pane));if(!force&&!s.noVerticalRoom&&newCenter.height===s.outerHeight){$P.css(visCSS);return true}CSS.top=newCenter.top;CSS.bottom=newCenter.bottom;s.newSize=newCenter.height;CSS.height=cssH($P,newCenter.height);s.maxHeight=CSS.height;hasRoom=s.maxHeight>=0;if(!hasRoom)s.noVerticalRoom=true}if(hasRoom){if(!skipCallback&&state.initialized)_runCallbacks("onresize_start",pane);$P.css(CSS);if(pane!=="center")sizeHandles(pane);if(s.noRoom&&!s.isClosed&&!s.isHidden)makePaneFit(pane);if(s.isVisible){$.extend(s,elDims($P));if(state.initialized)sizeContent(pane)}}else if(!s.noRoom&&s.isVisible)makePaneFit(pane);$P.css(visCSS);delete s.newSize;delete s.newWidth;delete s.newHeight;if(!s.isVisible)return true;if(pane==="center"){var fix=browser.isIE6||!browser.boxModel;if($Ps.north&&(fix||state.north.tagName=="IFRAME"))$Ps.north.css("width",cssW($Ps.north,sC.innerWidth));if($Ps.south&&(fix||state.south.tagName=="IFRAME"))$Ps.south.css("width",cssW($Ps.south,sC.innerWidth))}if(!skipCallback&&state.initialized)_runCallbacks("onresize_end",pane)})},resizeAll=function(evt_or_refresh){var oldW=sC.innerWidth,oldH=sC.innerHeight;evtPane(evt_or_refresh);if(!$N.is(":visible"))return;if(!state.initialized){_initLayoutElements();return}if(evt_or_refresh===true&&$.isPlainObject(options.outset)){$N.css(options.outset)}$.extend(sC,elDims($N,options.inset));if(!sC.outerHeight)return;if(evt_or_refresh===true){setPanePosition()}if(false===_runCallbacks("onresizeall_start"))return false;var shrunkH=sC.innerHeight<oldH,shrunkW=sC.innerWidth<oldW,$P,o,s;var shrunk=shrunkH||shrunkW;$.each(["south","north","east","west"],function(i,pane){if(!$Ps[pane])return;o=options[pane];s=state[pane];var paneResponsive=false;var paneRespondedState=false;var windowWidth=$(window).width();if(o!==null&&o!=="undefined"&&o.responsive&&o.responsive.enabled){if(windowWidth>=o.responsive.sizes.lg)if(o.responsive.when==="lg"||o.responsive.when==="md"||o.responsive.when==="sm"||o.responsive.when==="xs"){paneResponsive=false}else{paneResponsive=true}if(windowWidth>=o.responsive.sizes.md&&windowWidth<o.responsive.sizes.lg)if(o.responsive.when==="md"||o.responsive.when==="sm"||o.responsive.when==="xs"){paneResponsive=false}else{paneResponsive=true}if(windowWidth>=o.responsive.sizes.sm&&windowWidth<o.responsive.sizes.md)if(o.responsive.when==="sm"||o.responsive.when==="xs"){paneResponsive=false}else{paneResponsive=true}if(windowWidth>=o.responsive.sizes.xs&&windowWidth<o.responsive.sizes.sm)if(o.responsive.when==="xs"){paneResponsive=false}else{paneResponsive=true}}if(s.autoResize&&s.size!==o.size){if(paneResponsive&&s.isVisible){if(o.closable){close(pane,true,!o.responsiveAnimate)}else{hide(pane,!o.responsiveAnimate)}s.responded=true}else{if(s.responded){if(o.closable){open(pane,false,!o.responsiveAnimate)}else{show(pane,true,!o.responsiveAnimate)}s.responded=false}}sizePane(pane,o.size,true,true,true)}else{setSizeLimits(pane);if(paneResponsive){if(o.closable){close(pane,true,!o.responsiveAnimate)}else{hide(pane,!o.responsiveAnimate)}s.responded=true}else{if(s.responded){if(o.closable){open(pane,false,!o.responsiveAnimate)}else{show(pane,true,!o.responsiveAnimate)}s.responded=false}}makePaneFit(pane,false,true,true)}});sizeMidPanes("",true,true);sizeHandles();$.each(_c.allPanes,function(i,pane){$P=$Ps[pane];if(!$P)return;if(state[pane].isVisible)_runCallbacks("onresize_end",pane)});_runCallbacks("onresizeall_end")},resizeChildren=function(evt_or_pane,skipRefresh){var pane=evtPane.call(this,evt_or_pane);if(!options[pane].resizeChildren)return;if(!skipRefresh)refreshChildren(pane);var pC=children[pane];if($.isPlainObject(pC)){$.each(pC,function(key,child){if(!child.destroyed)child.resizeAll()})}},sizeContent=function(evt_or_panes,remeasure){if(!isInitialized())return;var panes=evtPane.call(this,evt_or_panes);panes=panes?panes.split(","):_c.allPanes;$.each(panes,function(idx,pane){var $P=$Ps[pane],$C=$Cs[pane],o=options[pane],s=state[pane],m=s.content;if(!$P||!$C||!$P.is(":visible"))return true;if(!$C.length){initContent(pane,false);if(!$C)return}if(false===_runCallbacks("onsizecontent_start",pane))return;if(!s.isMoving&&!s.isResizing||o.liveContentResizing||remeasure||m.top==undefined){_measure();if(m.hiddenFooters>0&&$P.css("overflow")==="hidden"){$P.css("overflow","visible");_measure();$P.css("overflow","hidden")}}var newH=s.innerHeight-(m.spaceAbove-s.css.paddingTop)-(m.spaceBelow-s.css.paddingBottom);if(!$C.is(":visible")||m.height!=newH){setOuterHeight($C,newH,true);m.height=newH}if(state.initialized)_runCallbacks("onsizecontent_end",pane);function _below($E){return max(s.css.paddingBottom,parseInt($E.css("marginBottom"),10)||0)}function _measure(){var ignore=options[pane].contentIgnoreSelector,$Fs=$C.nextAll().not(".ui-layout-mask").not(ignore||":lt(0)"),$Fs_vis=$Fs.filter(":visible"),$F=$Fs_vis.filter(":last");m={top:$C[0].offsetTop,height:$C.outerHeight(),numFooters:$Fs.length,hiddenFooters:$Fs.length-$Fs_vis.length,spaceBelow:0};m.spaceAbove=m.top;m.bottom=m.top+m.height;if($F.length)m.spaceBelow=$F[0].offsetTop+$F.outerHeight()-m.bottom+_below($F);else m.spaceBelow=_below($C)}})},sizeHandles=function(evt_or_panes){var panes=evtPane.call(this,evt_or_panes);panes=panes?panes.split(","):_c.borderPanes;$.each(panes,function(i,pane){var o=options[pane],s=state[pane],$P=$Ps[pane],$R=$Rs[pane],$T=$Ts[pane],$TC;if(!$P||!$R)return;var dir=_c[pane].dir,_state=s.isClosed?"_closed":"_open",spacing=o["spacing"+_state],togAlign=o["togglerAlign"+_state],togLen=o["togglerLength"+_state],paneLen,left,offset,CSS={};if(spacing===0){$R.hide();return}else if(!s.noRoom&&!s.isHidden)$R.show();if(dir==="horz"){paneLen=sC.innerWidth;s.resizerLength=paneLen;left=$.layout.cssNum($P,"left");$R.css({width:cssW($R,paneLen),height:cssH($R,spacing),left:left>-9999?left:sC.inset.left})}else{paneLen=$P.outerHeight();s.resizerLength=paneLen;$R.css({height:cssH($R,paneLen),width:cssW($R,spacing),top:sC.inset.top+getPaneSize("north",true)})}removeHover(o,$R);if($T){if(togLen===0||s.isSliding&&o.hideTogglerOnSlide){$T.hide();return}else $T.show();if(!(togLen>0)||togLen==="100%"||togLen>paneLen){togLen=paneLen;offset=0}else{if(isStr(togAlign)){switch(togAlign){case"top":case"left":offset=0;break;case"bottom":case"right":offset=paneLen-togLen;break;case"middle":case"center":default:offset=round((paneLen-togLen)/2)}}else{var x=parseInt(togAlign,10);if(togAlign>=0)offset=x;else offset=paneLen-togLen+x}}if(dir==="horz"){var width=cssW($T,togLen);$T.css({width:width,height:cssH($T,spacing),left:offset,top:0});$T.children(".content").each(function(){$TC=$(this);$TC.css("marginLeft",round((width-$TC.outerWidth())/2))})}else{var height=cssH($T,togLen);$T.css({height:height,width:cssW($T,spacing),top:offset,left:0});$T.children(".content").each(function(){$TC=$(this);$TC.css("marginTop",round((height-$TC.outerHeight())/2))})}removeHover(0,$T)}if(!state.initialized&&(o.initHidden||s.isHidden)){$R.hide();if($T)$T.hide()}})},enableClosable=function(evt_or_pane){if(!isInitialized())return;var pane=evtPane.call(this,evt_or_pane),$T=$Ts[pane],o=options[pane];if(!$T)return;o.closable=true;$T.on("click."+sID,function(evt){evt.stopPropagation();toggle(pane)}).css("visibility","visible").css("cursor","pointer").attr("title",state[pane].isClosed?o.tips.Open:o.tips.Close).show()},disableClosable=function(evt_or_pane,hide){if(!isInitialized())return;var pane=evtPane.call(this,evt_or_pane),$T=$Ts[pane];if(!$T)return;options[pane].closable=false;if(state[pane].isClosed)open(pane,false,true);$T.off("."+sID).css("visibility",hide?"hidden":"visible").css("cursor","default").attr("title","")},enableSlidable=function(evt_or_pane){if(!isInitialized())return;var pane=evtPane.call(this,evt_or_pane),$R=$Rs[pane];if(!$R||!$R.data("draggable"))return;options[pane].slidable=true;if(state[pane].isClosed)bindStartSlidingEvents(pane,true)},disableSlidable=function(evt_or_pane){if(!isInitialized())return;var pane=evtPane.call(this,evt_or_pane),$R=$Rs[pane];if(!$R)return;options[pane].slidable=false;if(state[pane].isSliding)close(pane,false,true);else{bindStartSlidingEvents(pane,false);$R.css("cursor","default").attr("title","");removeHover(null,$R[0])}},enableResizable=function(evt_or_pane){if(!isInitialized())return;var pane=evtPane.call(this,evt_or_pane),$R=$Rs[pane],o=options[pane];if(!$R||!$R.data("draggable"))return;o.resizable=true;$R.draggable("enable");if(!state[pane].isClosed)$R.css("cursor",o.resizerCursor).attr("title",o.tips.Resize)},disableResizable=function(evt_or_pane){if(!isInitialized())return;var pane=evtPane.call(this,evt_or_pane),$R=$Rs[pane];if(!$R||!$R.data("draggable"))return;options[pane].resizable=false;$R.draggable("disable").css("cursor","default").attr("title","");removeHover(null,$R[0])},swapPanes=function(evt_or_pane1,pane2){if(!isInitialized())return;var pane1=evtPane.call(this,evt_or_pane1);state[pane1].edge=pane2;state[pane2].edge=pane1;if(false===_runCallbacks("onswap_start",pane1)||false===_runCallbacks("onswap_start",pane2)){state[pane1].edge=pane1;state[pane2].edge=pane2;return}var oPane1=copy(pane1),oPane2=copy(pane2),sizes={};sizes[pane1]=oPane1?oPane1.state.size:0;sizes[pane2]=oPane2?oPane2.state.size:0;$Ps[pane1]=false;$Ps[pane2]=false;state[pane1]={};state[pane2]={};if($Ts[pane1])$Ts[pane1].remove();if($Ts[pane2])$Ts[pane2].remove();if($Rs[pane1])$Rs[pane1].remove();if($Rs[pane2])$Rs[pane2].remove();$Rs[pane1]=$Rs[pane2]=$Ts[pane1]=$Ts[pane2]=false;move(oPane1,pane2);move(oPane2,pane1);oPane1=oPane2=sizes=null;if($Ps[pane1])$Ps[pane1].css(_c.visible);if($Ps[pane2])$Ps[pane2].css(_c.visible);resizeAll();_runCallbacks("onswap_end",pane1);_runCallbacks("onswap_end",pane2);function copy(n){var $P=$Ps[n],$C=$Cs[n];return!$P?false:{pane:n,P:$P?$P[0]:false,C:$C?$C[0]:false,state:$.extend(true,{},state[n]),options:$.extend(true,{},options[n])}}function move(oPane,pane){if(!oPane)return;var P=oPane.P,C=oPane.C,oldPane=oPane.pane,c=_c[pane],s=$.extend(true,{},state[pane]),o=options[pane],fx={resizerCursor:o.resizerCursor},re,size,pos;$.each("fxName,fxSpeed,fxSettings".split(","),function(i,k){fx[k+"_open"]=o[k+"_open"];fx[k+"_close"]=o[k+"_close"];fx[k+"_size"]=o[k+"_size"]});$Ps[pane]=$(P).data({layoutPane:Instance[pane],layoutEdge:pane}).css(_c.hidden).css(c.cssReq);$Cs[pane]=C?$(C):false;options[pane]=$.extend(true,{},oPane.options,fx);state[pane]=$.extend(true,{},oPane.state);re=new RegExp(o.paneClass+"-"+oldPane,"g");P.className=P.className.replace(re,o.paneClass+"-"+pane);initHandles(pane);if(c.dir!=_c[oldPane].dir){size=sizes[pane]||0;setSizeLimits(pane);size=max(size,state[pane].minSize);manualSizePane(pane,size,true,true)}else $Rs[pane].css(c.side,sC.inset[c.side]+(state[pane].isVisible?getPaneSize(pane):0));if(oPane.state.isVisible&&!s.isVisible)setAsOpen(pane,true);else{setAsClosed(pane);bindStartSlidingEvents(pane,true)}oPane=null}},syncPinBtns=function(pane,doPin){if($.layout.plugins.buttons)$.each(state[pane].pins,function(i,selector){$.layout.buttons.setPinState(Instance,$(selector),pane,doPin)})};function keyDown(evt){if(!evt)return true;var code=evt.keyCode;if(code<33)return true;var PANE={38:"north",40:"south",37:"west",39:"east"},ALT=evt.altKey,SHIFT=evt.shiftKey,CTRL=evt.ctrlKey,CURSOR=CTRL&&code>=37&&code<=40,o,k,m,pane;if(CURSOR&&options[PANE[code]].enableCursorHotkey)pane=PANE[code];else if(CTRL||SHIFT)$.each(_c.borderPanes,function(i,p){o=options[p];k=o.customHotkey;m=o.customHotkeyModifier;if(SHIFT&&m=="SHIFT"||CTRL&&m=="CTRL"||CTRL&&SHIFT){if(k&&code===(isNaN(k)||k<=9?k.toUpperCase().charCodeAt(0):k)){pane=p;return false}}});if(!pane||!$Ps[pane]||!options[pane].closable||state[pane].isHidden)return true;toggle(pane);evt.stopPropagation();evt.returnValue=false;return false}function allowOverflow(el){if(!isInitialized())return;if(this&&this.tagName)el=this;var $P;if(isStr(el))$P=$Ps[el];else if($(el).data("layoutRole"))$P=$(el);else $(el).parents().each(function(){if($(this).data("layoutRole")){$P=$(this);return false}});if(!$P||!$P.length)return;var pane=$P.data("layoutEdge"),s=state[pane];if(s.cssSaved)resetOverflow(pane);if(s.isSliding||s.isResizing||s.isClosed){s.cssSaved=false;return}var newCSS={zIndex:options.zIndexes.resizer_normal+1},curCSS={},of=$P.css("overflow"),ofX=$P.css("overflowX"),ofY=$P.css("overflowY");if(of!="visible"){curCSS.overflow=of;newCSS.overflow="visible"}if(ofX&&!ofX.match(/(visible|auto)/)){curCSS.overflowX=ofX;newCSS.overflowX="visible"}if(ofY&&!ofY.match(/(visible|auto)/)){curCSS.overflowY=ofX;newCSS.overflowY="visible"}s.cssSaved=curCSS;$P.css(newCSS);$.each(_c.allPanes,function(i,p){if(p!=pane)resetOverflow(p)})}function resetOverflow(el){if(!isInitialized())return;if(this&&this.tagName)el=this;var $P;if(isStr(el))$P=$Ps[el];else if($(el).data("layoutRole"))$P=$(el);else $(el).parents().each(function(){if($(this).data("layoutRole")){$P=$(this);return false}});if(!$P||!$P.length)return;var pane=$P.data("layoutEdge"),s=state[pane],CSS=s.cssSaved||{};if(!s.isSliding&&!s.isResizing)$P.css("zIndex",options.zIndexes.pane_normal);$P.css(CSS);s.cssSaved=false}var $N=$(this).eq(0);if(!$N.length){return _log(options.errors.containerMissing)}if($N.data("layoutContainer")&&$N.data("layout"))return $N.data("layout");var $Ps={},$Cs={},$Rs={},$Ts={},$Ms=$([]),sC=state.container,sID=state.id;var Instance={options:options,state:state,container:$N,panes:$Ps,contents:$Cs,resizers:$Rs,togglers:$Ts,hide:hide,show:show,toggle:toggle,open:open,close:close,slideOpen:slideOpen,slideClose:slideClose,slideToggle:slideToggle,setSizeLimits:setSizeLimits,_sizePane:sizePane,sizePane:manualSizePane,sizeContent:sizeContent,swapPanes:swapPanes,showMasks:showMasks,hideMasks:hideMasks,initContent:initContent,addPane:addPane,removePane:removePane,createChildren:createChildren,refreshChildren:refreshChildren,enableClosable:enableClosable,disableClosable:disableClosable,enableSlidable:enableSlidable,disableSlidable:disableSlidable,enableResizable:enableResizable,disableResizable:disableResizable,allowOverflow:allowOverflow,resetOverflow:resetOverflow,destroy:destroy,initPanes:isInitialized,resizeAll:resizeAll,runCallbacks:_runCallbacks,hasParentLayout:false,children:children,north:false,south:false,west:false,east:false,center:false};if(_create()==="cancel")return null;else return Instance}})(jQuery);(function($){if(!$.layout)return;(function(){if(window.google&&google.gears){return}var a=null;if(typeof GearsFactory!="undefined"){a=new GearsFactory}else{try{a=new ActiveXObject("Gears.Factory");if(a.getBuildInfo().indexOf("ie_mobile")!=-1){a.privateSetGlobalObject(this)}}catch(b){if(typeof navigator.mimeTypes!="undefined"&&navigator.mimeTypes["application/x-googlegears"]){a=document.createElement("object");a.style.display="none";a.width=0;a.height=0;a.type="application/x-googlegears";document.documentElement.appendChild(a)}}}if(!a){return}if(!window.google){google={}}if(!google.gears){google.gears={factory:a}}})();Persist=function(){var i="0.3.1",d,b,g,h,e,f;f=function(){var q="Thu, 01-Jan-1970 00:00:01 GMT",k=1e3*60*60*24,r=["expires","path","domain"],m=escape,l=unescape,p=document,n;var s=function(){var t=new Date;t.setTime(t.getTime());return t};var j=function(x,A){var w,v,z,y=[],u=arguments.length>2?arguments[2]:{};y.push(m(x)+"="+m(A));for(var t=0;t<r.length;t++){v=r[t];z=u[v];if(z){y.push(v+"="+z)}}if(u.secure){y.push("secure")}return y.join("; ")};var o=function(){return navigator.cookieEnabled};n={set:function(B,x){var u=arguments.length>2?arguments[2]:{},v=s(),A,z={};if(u.expires){if(u.expires==-1){z.expires=-1}else{var w=u.expires*k;z.expires=new Date(v.getTime()+w);z.expires=z.expires.toGMTString()}}var C=["path","domain","secure"];for(var y=0;y<C.length;y++){if(u[C[y]]){z[C[y]]=u[C[y]]}}var t=j(B,x,z);p.cookie=t;return x},has:function(u){u=m(u);var x=p.cookie,w=x.indexOf(u+"="),t=w+u.length+1,v=x.substring(0,u.length);return!w&&u!=v||w<0?false:true},get:function(v){v=m(v);var y=p.cookie,x=y.indexOf(v+"="),t=x+v.length+1,w=y.substring(0,v.length),u;if(!x&&v!=w||x<0){return null}u=y.indexOf(";",t);if(u<0){u=y.length}return l(y.substring(t,u))},remove:function(t){var v=n.get(t),u={expires:q};p.cookie=j(t,"",u);return v},keys:function(){var y=p.cookie,x=y.split("; "),u,w,v=[];for(var t=0;t<x.length;t++){w=x[t].split("=");v.push(l(w[0]))}return v},all:function(){var y=p.cookie,x=y.split("; "),u,w,v=[];for(var t=0;t<x.length;t++){w=x[t].split("=");v.push([l(w[0]),l(w[1])])}return v},version:"0.2.1",enabled:false};n.enabled=o.call(n);return n}();var c=function(){if(Array.prototype.indexOf){return function(j,k){return Array.prototype.indexOf.call(j,k)}}else{return function(o,p){var n,m;for(var k=0,j=o.length;k<j;k++){if(o[k]==p){return k}}return-1}}}();e=function(){};g=function(j){return"PS"+j.replace(/_/g,"__").replace(/ /g,"_s")};var a={search_order:["localstorage","globalstorage","gears","cookie","ie","flash"],name_re:/^[a-z][a-z0-9_ \-]+$/i,methods:["init","get","set","remove","load","save","iterate"],sql:{version:"1",create:"CREATE TABLE IF NOT EXISTS persist_data (k TEXT UNIQUE NOT NULL PRIMARY KEY, v TEXT NOT NULL)",get:"SELECT v FROM persist_data WHERE k = ?",set:"INSERT INTO persist_data(k, v) VALUES (?, ?)",remove:"DELETE FROM persist_data WHERE k = ?",keys:"SELECT * FROM persist_data"},flash:{div_id:"_persist_flash_wrap",id:"_persist_flash",path:"persist.swf",size:{w:1,h:1},params:{autostart:true}}};b={gears:{size:-1,test:function(){return window.google&&window.google.gears?true:false},methods:{init:function(){var j;j=this.db=google.gears.factory.create("beta.database");j.open(g(this.name));j.execute(a.sql.create).close()},get:function(l){var m,n=a.sql.get;var j=this.db;var k;j.execute("BEGIN").close();m=j.execute(n,[l]);k=m.isValidRow()?m.field(0):null;m.close();j.execute("COMMIT").close();return k},set:function(m,p){var k=a.sql.remove,o=a.sql.set,n;var j=this.db;var l;j.execute("BEGIN").close();j.execute(k,[m]).close();j.execute(o,[m,p]).close();j.execute("COMMIT").close();return p},remove:function(l){var n=a.sql.get,p=a.sql.remove,m,o=null,j=false;var k=this.db;k.execute("BEGIN").close();k.execute(p,[l]).close();k.execute("COMMIT").close();return true},iterate:function(m,l){var k=a.sql.keys;var n;var j=this.db;n=j.execute(k);while(n.isValidRow()){m.call(l||this,n.field(0),n.field(1));n.next()}n.close()}}},globalstorage:{size:5*1024*1024,test:function(){if(window.globalStorage){var j="127.0.0.1";if(this.o&&this.o.domain){j=this.o.domain}try{var l=globalStorage[j];return true}catch(k){if(window.console&&window.console.warn){console.warn("globalStorage exists, but couldn't use it because your browser is running on domain:",j)}return false}}else{return false}},methods:{key:function(j){return g(this.name)+g(j)},init:function(){this.store=globalStorage[this.o.domain]},get:function(j){j=this.key(j);return this.store.getItem(j)},set:function(j,k){j=this.key(j);this.store.setItem(j,k);return k},remove:function(j){var k;j=this.key(j);k=this.store.getItem[j];this.store.removeItem(j);return k}}},localstorage:{size:-1,test:function(){try{if(window.localStorage&&window.localStorage.setItem("persistjs_test_local_storage",null)==undefined){window.localStorage.removeItem("persistjs_test_local_storage");if(/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)){var k=RegExp.$1;if(k>=9){return true}if(window.location.protocol=="file:"){return false}}else{return true}}else{return false}return window.localStorage?true:false}catch(j){return false}},methods:{key:function(j){return this.name+">"+j},init:function(){this.store=localStorage},get:function(j){j=this.key(j);return this.store.getItem(j)},set:function(j,k){j=this.key(j);this.store.setItem(j,k);return k},remove:function(j){var k;j=this.key(j);k=this.store.getItem(j);this.store.removeItem(j);return k},iterate:function(o,n){var j=this.store,m,p;for(var k=0;k<j.length;k++){m=j.key(k);p=m.split(">");if(p.length==2&&p[0]==this.name){o.call(n||this,p[1],j.getItem(m))}}}}},ie:{prefix:"_persist_data-",size:64*1024,test:function(){return window.ActiveXObject?true:false},make_userdata:function(k){var j=document.createElement("div");j.id=k;j.style.display="none";j.addBehavior("#default#userdata");document.body.appendChild(j);return j},methods:{init:function(){var j=b.ie.prefix+g(this.name);this.el=b.ie.make_userdata(j);if(this.o.defer){this.load()}},get:function(j){var k;j=g(j);if(!this.o.defer){this.load()}k=this.el.getAttribute(j);return k},set:function(j,k){j=g(j);this.el.setAttribute(j,k);if(!this.o.defer){this.save()}return k},remove:function(j){var k;j=g(j);if(!this.o.defer){this.load()}k=this.el.getAttribute(j);this.el.removeAttribute(j);if(!this.o.defer){this.save()}return k},load:function(){this.el.load(g(this.name))},save:function(){this.el.save(g(this.name))}}},cookie:{delim:":",size:4e3,test:function(){return d.Cookie.enabled?true:false},methods:{key:function(j){return this.name+b.cookie.delim+j},get:function(j,k){var l;j=this.key(j);l=f.get(j);return l},set:function(j,l,k){j=this.key(j);f.set(j,l,this.o);return l},remove:function(j,k){var k;j=this.key(j);k=f.remove(j);return k}}},flash:{test:function(){try{if(!swfobject){return false}}catch(k){return false}var j=swfobject.getFlashPlayerVersion().major;return j>=8?true:false},methods:{init:function(){if(!b.flash.el){var l,m,k,j=a.flash;m=document.createElement("div");m.id=j.div_id;k=document.createElement("div");k.id=j.id;m.appendChild(k);document.body.appendChild(m);b.flash.el=swfobject.createSWF({id:j.id,data:this.o.swf_path||j.path,width:j.size.w,height:j.size.h},j.params,j.id)}this.el=b.flash.el},get:function(j){var k;j=g(j);k=this.el.get(this.name,j);return k},set:function(k,l){var j;k=g(k);j=this.el.set(this.name,k,l);return j},remove:function(j){var k;j=g(j);k=this.el.remove(this.name,j);return k}}}};h=function(){var n,j,p,r,s=a.methods,t=a.search_order;for(var q=0,o=s.length;q<o;q++){d.Store.prototype[s[q]]=e}d.type=null;d.size=-1;for(var m=0,k=t.length;!d.type&&m<k;m++){p=b[t[m]];if(p.test()){d.type=t[m];d.size=p.size;for(r in p.methods){d.Store.prototype[r]=p.methods[r]}}}d._init=true};d={VERSION:i,type:null,size:0,add:function(j){b[j.id]=j;a.search_order=[j.id].concat(a.search_order);h()},remove:function(k){var j=c(a.search_order,k);if(j<0){return}a.search_order.splice(j,1);delete b[k];h()},Cookie:f,Store:function(j,k){if(!a.name_re.exec(j)){throw new Error("Invalid name")}if(!d.type){throw new Error("No suitable storage found")}k=k||{};this.name=j;k.domain=k.domain||location.hostname||"localhost";k.domain=k.domain.replace(/:\d+$/,"");k.domain=k.domain=="localhost"?"":k.domain;this.o=k;k.expires=k.expires||365*2;k.path=k.path||"/";if(this.o.search_order){a.search_order=this.o.search_order;h()}this.init()}};h();return d}();var layoutStore=new Persist.Store("LayoutProperties");$.layout.plugins.stateManagement=true;$.layout.defaults.stateManagement={enabled:false,autoSave:true,autoLoad:true,stateKeys:"north.size,south.size,east.size,west.size,"+"north.isClosed,south.isClosed,east.isClosed,west.isClosed,"+"north.isHidden,south.isHidden,east.isHidden,west.isHidden",storeLocation:"localstorage",cookie:{name:""}};$.layout.optionsMap.layout.push("stateManagement");$.layout.state={config:{allPanes:"north,south,west,east,center"},saveCookie:function(inst,keys,cookieOpts){var o=inst.options,oS=o.stateManagement,oC=$.extend({},oS.cookie,cookieOpts||{}),data=inst.state.stateData=inst.readState(keys||oS.stateKeys);var storeName=oC.name||o.name||"Layout";layoutStore.set(storeName,JSON.stringify(data));layoutStore.save();return $.extend({},data)},deleteCookie:function(inst){var o=inst.options;layoutStore.remove(o.stateManagement.cookie.name||o.name||"Layout")},readCookie:function(inst){var o=inst.options;var c=layoutStore.get(o.stateManagement.cookie.name||o.name||"Layout");return c?JSON.parse(c):{}},loadCookie:function(inst){var c=$.layout.state.readCookie(inst);if(c&&!$.isEmptyObject(c)){inst.state.stateData=$.extend({},c);inst.loadState(c)}return c},loadState:function(inst,stateData,animate){stateData=$.layout.transformData(stateData);$.extend(true,inst.options,stateData);if(inst.state.initialized){var pane,o,s,h,c,noAnimate=animate===false;$.each($.layout.state.config.allPanes.split(","),function(idx,pane){o=stateData[pane];if(typeof o!="object")return;s=o.size;c=o.initClosed;h=o.initHidden;if(s>0||s=="auto")inst.sizePane(pane,s,false,null,noAnimate);if(h===true)inst.hide(pane,a);else if(c===false)inst.open(pane,false,noAnimate);else if(c===true)inst.close(pane,false,noAnimate);else if(h===false)inst.show(pane,false,noAnimate)})}},readState:function(inst,keys){var data={},alt={isClosed:"initClosed",isHidden:"initHidden"},state=inst.state,pair,pane,key,val;if(!keys)keys=inst.options.stateManagement.stateKeys;if(Array.isArray(keys))keys=keys.join(",");keys=keys.replace(/__/g,".").split(",");for(var i=0,n=keys.length;i<n;i++){pair=keys[i].split(".");pane=pair[0];key=pair[1];if($.layout.state.config.allPanes.indexOf(pane)<0)continue;val=state[pane][key];if(val==undefined)continue;if(key=="isClosed"&&state[pane]["isSliding"])val=true;(data[pane]||(data[pane]={}))[alt[key]?alt[key]:key]=val}return data},_create:function(inst){$.extend(inst,{readCookie:function(){return $.layout.state.readCookie(inst)},deleteCookie:function(){$.layout.state.deleteCookie(inst)},saveCookie:function(keys,cookieOpts){return $.layout.state.saveCookie(inst,keys,cookieOpts)},loadCookie:function(){return $.layout.state.loadCookie(inst)},loadState:function(stateData,animate){$.layout.state.loadState(inst,stateData,animate)},readState:function(keys){return $.layout.state.readState(inst,keys)}});inst.state.stateData={};var oS=inst.options.stateManagement;if(oS.enabled){if(oS.autoLoad)inst.loadCookie();else inst.state.stateData=inst.readCookie()}},_unload:function(inst){var oS=inst.options.stateManagement;if(oS.enabled){if(oS.autoSave)inst.saveCookie();else inst.state.stateData=inst.readState()}}};$.layout.onCreate.push($.layout.state._create);$.layout.onUnload.push($.layout.state._unload)})(jQuery);(function($){if(!$.layout)return;$.layout.plugins.buttons=true;$.layout.defaults.autoBindCustomButtons=false;$.layout.optionsMap.layout.push("autoBindCustomButtons");$.layout.buttons={config:{borderPanes:"north,south,west,east"},init:function(inst){var pre="ui-layout-button-",layout=inst.options.name||"",name;$.each("toggle,open,close,pin,toggle-slide,open-slide".split(","),function(i,action){$.each($.layout.buttons.config.borderPanes.split(","),function(ii,pane){$("."+pre+action+"-"+pane).each(function(){name=$(this).data("layoutName")||$(this).attr("layoutName");if(name==undefined||name===layout)inst.onButton(this,action,pane)})})})},get:function(inst,selector,pane,action){var $E=$(selector),o=inst.options;if($E.length&&$.layout.buttons.config.borderPanes.indexOf(pane)>=0){var btn=o[pane].buttonClass+"-"+action;$E.addClass(btn+" "+btn+"-"+pane).data("layoutName",o.name)}return $E},bind:function(inst,sel,action,pane){var _=$.layout.buttons;switch(action.toLowerCase()){case"toggle":_.addToggle(inst,sel,pane);break;case"open":_.addOpen(inst,sel,pane);break;case"close":_.addClose(inst,sel,pane);break;case"pin":_.addPin(inst,sel,pane);break;case"toggle-slide":_.addToggle(inst,sel,pane,true);break;case"open-slide":_.addOpen(inst,sel,pane,true);break}return inst},addToggle:function(inst,selector,pane,slide){$.layout.buttons.get(inst,selector,pane,"toggle").on("click",function(evt){inst.toggle(pane,!!slide);evt.stopPropagation()});return inst},addSlideToggle:function(inst,selector,pane,slide){$.layout.buttons.get(inst,selector,pane,"slideToggle").on("click",function(evt){inst.slideToggle(pane,!!slide);evt.stopPropagation()});return inst},addOpen:function(inst,selector,pane,slide){$.layout.buttons.get(inst,selector,pane,"open").attr("title",inst.options[pane].tips.Open).on("click",function(evt){inst.open(pane,!!slide);evt.stopPropagation()});return inst},addClose:function(inst,selector,pane){$.layout.buttons.get(inst,selector,pane,"close").attr("title",inst.options[pane].tips.Close).on("click",function(evt){inst.close(pane);evt.stopPropagation()});return inst},addPin:function(inst,selector,pane){var $E=$.layout.buttons.get(inst,selector,pane,"pin");if($E.length){var s=inst.state[pane];$E.on("click",function(evt){$.layout.buttons.setPinState(inst,$(this),pane,s.isSliding||s.isClosed);if(s.isSliding||s.isClosed)inst.open(pane);else inst.close(pane);evt.stopPropagation()});$.layout.buttons.setPinState(inst,$E,pane,!s.isClosed&&!s.isSliding);s.pins.push(selector)}return inst},setPinState:function(inst,$Pin,pane,doPin){var updown=$Pin.attr("pin");if(updown&&doPin===(updown=="down"))return;var po=inst.options[pane],lang=po.tips,pin=po.buttonClass+"-pin",side=pin+"-"+pane,UP=pin+"-up "+side+"-up",DN=pin+"-down "+side+"-down";$Pin.attr("pin",doPin?"down":"up").attr("title",doPin?lang.Unpin:lang.Pin).removeClass(doPin?UP:DN).addClass(doPin?DN:UP)},syncPinBtns:function(inst,pane,doPin){$.each(state[pane].pins,function(i,selector){$.layout.buttons.setPinState(inst,$(selector),pane,doPin)})},_load:function(inst){$.extend(inst,{bindButton:function(selector,action,pane){return $.layout.buttons.on(inst,selector,action,pane)},addToggleBtn:function(selector,pane,slide){return $.layout.buttons.addToggle(inst,selector,pane,slide)},addSlideToggleBtn:function(selector,pane,slide){return $.layout.buttons.addSlideToggle(inst,selector,pane,slide)},addOpenBtn:function(selector,pane,slide){return $.layout.buttons.addOpen(inst,selector,pane,slide)},addCloseBtn:function(selector,pane){return $.layout.buttons.addClose(inst,selector,pane)},addPinBtn:function(selector,pane){return $.layout.buttons.addPin(inst,selector,pane)}});for(var i=0;i<4;i++){var pane=$.layout.buttons.config.borderPanes[i];inst.state[pane].pins=[]}if(inst.options.autoBindCustomButtons)$.layout.buttons.init(inst)},_unload:function(inst){}};$.layout.onLoad.push($.layout.buttons._load)})(jQuery);(function($){$.layout.plugins.browserZoom=true;$.layout.defaults.browserZoomCheckInterval=1e3;$.layout.optionsMap.layout.push("browserZoomCheckInterval");$.layout.browserZoom={_init:function(inst){if($.layout.browserZoom.ratio()!==false)$.layout.browserZoom._setTimer(inst)},_setTimer:function(inst){if(inst.destroyed)return;var o=inst.options,s=inst.state,ms=inst.hasParentLayout?5e3:Math.max(o.browserZoomCheckInterval,100);setTimeout(function(){if(inst.destroyed||!o.resizeWithWindow)return;var d=$.layout.browserZoom.ratio();if(d!==s.browserZoom){s.browserZoom=d;inst.resizeAll()}$.layout.browserZoom._setTimer(inst)},ms)},ratio:function(){var w=window,s=screen,d=document,dE=d.documentElement||d.body,b=$.layout.browser,v=b.version,r,sW,cW;if(!b.msie||v>8)return false;if(s.deviceXDPI&&s.systemXDPI)return calc(s.deviceXDPI,s.systemXDPI);if(b.webkit&&(r=d.body.getBoundingClientRect))return calc(r.left-r.right,d.body.offsetWidth);if(b.webkit&&(sW=w.outerWidth))return calc(sW,w.innerWidth);if((sW=s.width)&&(cW=dE.clientWidth))return calc(sW,cW);return false;function calc(x,y){return(parseInt(x,10)/parseInt(y,10)*100).toFixed()}}};$.layout.onReady.push($.layout.browserZoom._init)})(jQuery);(function($){if($.effects){$.layout.defaults.panes.useOffscreenClose=false;if($.layout.plugins)$.layout.plugins.effects.slideOffscreen=true;$.layout.effects.slideOffscreen=$.extend(true,{},$.layout.effects.slide);$.effects.slideOffscreen=function(o){return this.queue(function(){var fx=$.effects,opt=o.options,$el=$(this),pane=$el.data("layoutEdge"),state=$el.data("parentLayout").state,dist=state[pane].size,s=this.style,props=["top","bottom","left","right"],mode=fx.setMode($el,opt.mode||"show"),show=mode=="show",dir=opt.direction||"left",ref=dir=="up"||dir=="down"?"top":"left",pos=dir=="up"||dir=="left",offscrn=$.layout.config.offscreenCSS||{},keyLR=$.layout.config.offscreenReset,keyTB="offscreenResetTop",animation={};animation[ref]=(show?pos?"+=":"-=":pos?"-=":"+=")+dist;if(show){$el.data(keyTB,{top:s.top,bottom:s.bottom});if(pos){$el.css(ref,isNaN(dist)?"-"+dist:-dist)}else{if(dir==="right")$el.css({left:state.container.layoutWidth,right:"auto"});else $el.css({top:state.container.layoutHeight,bottom:"auto"})}if(ref==="top")$el.css($el.data(keyLR)||{})}else{$el.data(keyTB,{top:s.top,bottom:s.bottom});$el.data(keyLR,{left:s.left,right:s.right})}$el.show().animate(animation,{queue:false,duration:o.duration,easing:opt.easing,complete:function(){if($el.data(keyTB))$el.css($el.data(keyTB)).removeData(keyTB);if(show)$el.css($el.data(keyLR)||{}).removeData(keyLR);else $el.css(offscrn);if(o.callback)o.callback.apply(this,arguments);$el.dequeue()}})})}}})(jQuery);(function($){var _=$.layout;if(!_.callbacks)_.callbacks={};_.callbacks.resizePaneAccordions=function(x,ui){var $P=ui.jquery?ui:$(ui.newPanel||ui.panel);$P.find(".ui-accordion:visible").each(function(){var $E=$(this);if($E.data("accordion"))$E.accordion("resize");if($E.data("ui-accordion"))$E.accordion("refresh")})}})(jQuery);(function($){$.layout.callbacks.resizeDataTables=function(x,ui){var oPane=ui.jquery?ui[0]:ui.panel;if(!$(oPane).is(":visible"))return;$($.fn.dataTable.fnTables(true)).each(function(i,table){if($.contains(oPane,table)){$(table).dataTable().fnAdjustColumnSizing()}})}})(jQuery);(function($){var _=$.layout;if(!_.callbacks)_.callbacks={};_.callbacks.resizeTabLayout=function(x,ui){var $P=ui.jquery?ui:$(ui.newPanel||ui.panel);$P.filter(":visible").find(".ui-layout-container:visible").addBack().each(function(){var layout=$(this).data("layout");if(layout){layout.options.resizeWithWindow=false;layout.resizeAll()}})}})(jQuery);return jQuery});

/***/ }),

/***/ "./src/js/external/jquery.lazytable.js":
/*!*********************************************!*\
  !*** ./src/js/external/jquery.lazytable.js ***!
  \*********************************************/
/***/ (() => {

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_170__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_170__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_170__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_170__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_170__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_170__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_170__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_170__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_170__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_170__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_170__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_170__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_170__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_170__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_170__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_170__(__nested_webpack_require_170__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/core-js/es6/symbol.js":
/*!********************************************!*\
  !*** ./node_modules/core-js/es6/symbol.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/es6.symbol */ \"./node_modules/core-js/modules/es6.symbol.js\");\n__webpack_require__(/*! ../modules/es6.object.to-string */ \"./node_modules/core-js/modules/es6.object.to-string.js\");\nmodule.exports = __webpack_require__(/*! ../modules/_core */ \"./node_modules/core-js/modules/_core.js\").Symbol;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/es6/symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/promise.js":
/*!********************************************!*\
  !*** ./node_modules/core-js/fn/promise.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/es6.object.to-string */ \"./node_modules/core-js/modules/es6.object.to-string.js\");\n__webpack_require__(/*! ../modules/es6.string.iterator */ \"./node_modules/core-js/modules/es6.string.iterator.js\");\n__webpack_require__(/*! ../modules/web.dom.iterable */ \"./node_modules/core-js/modules/web.dom.iterable.js\");\n__webpack_require__(/*! ../modules/es6.promise */ \"./node_modules/core-js/modules/es6.promise.js\");\n__webpack_require__(/*! ../modules/es7.promise.finally */ \"./node_modules/core-js/modules/es7.promise.finally.js\");\n__webpack_require__(/*! ../modules/es7.promise.try */ \"./node_modules/core-js/modules/es7.promise.try.js\");\nmodule.exports = __webpack_require__(/*! ../modules/_core */ \"./node_modules/core-js/modules/_core.js\").Promise;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/fn/promise.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_a-function.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 22.1.3.31 Array.prototype[@@unscopables]\nvar UNSCOPABLES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('unscopables');\nvar ArrayProto = Array.prototype;\nif (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\")(ArrayProto, UNSCOPABLES, {});\nmodule.exports = function (key) {\n  ArrayProto[UNSCOPABLES][key] = true;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_add-to-unscopables.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it, Constructor, name, forbiddenField) {\n  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {\n    throw TypeError(name + ': incorrect invocation!');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_an-instance.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// false -> Array#indexOf\n// true  -> Array#includes\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nmodule.exports = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {\n      if (O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// getting tag from 19.1.3.6 Object.prototype.toString()\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('toStringTag');\n// ES3 wrong here\nvar ARG = cof(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (e) { /* empty */ }\n};\n\nmodule.exports = function (it) {\n  var O, T, B;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T\n    // builtinTag case\n    : ARG ? cof(O)\n    // ES3 arguments fallback\n    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_classof.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_cof.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var core = module.exports = { version: '2.6.12' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_core.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_ctx.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on  \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_defined.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").document;\n// typeof document.createElement is 'object' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_dom-create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// IE 8- don't enum bug keys\nmodule.exports = (\n  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'\n).split(',');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// all enumerable object keys, includes symbols\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/modules/_object-gops.js\");\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\");\nmodule.exports = function (it) {\n  var result = getKeys(it);\n  var getSymbols = gOPS.f;\n  if (getSymbols) {\n    var symbols = getSymbols(it);\n    var isEnum = pIE.f;\n    var i = 0;\n    var key;\n    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);\n  } return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_enum-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar PROTOTYPE = 'prototype';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});\n  var key, own, out, exp;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    // export native or passed\n    out = (own ? target : source)[key];\n    // bind timers to global for call from export context\n    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // extend global\n    if (target) redefine(target, key, out, type & $export.U);\n    // export\n    if (exports[key] != out) hide(exports, key, exp);\n    if (IS_PROTO && expProto[key] != out) expProto[key] = out;\n  }\n};\nglobal.core = core;\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_export.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_fails.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar call = __webpack_require__(/*! ./_iter-call */ \"./node_modules/core-js/modules/_iter-call.js\");\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/core-js/modules/_is-array-iter.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/modules/core.get-iterator-method.js\");\nvar BREAK = {};\nvar RETURN = {};\nvar exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {\n  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);\n  var f = ctx(fn, that, entries ? 2 : 1);\n  var index = 0;\n  var length, step, iterator, result;\n  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');\n  // fast case for arrays with default iterator\n  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {\n    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);\n    if (result === BREAK || result === RETURN) return result;\n  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {\n    result = call(iterator, f, step.value, entries);\n    if (result === BREAK || result === RETURN) return result;\n  }\n};\nexports.BREAK = BREAK;\nexports.RETURN = RETURN;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_for-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\")('native-function-to-string', Function.toString);\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_function-to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_global.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_has.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_hide.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").document;\nmodule.exports = document && document.documentElement;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_html.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/modules/_dom-create.js\")('div'), 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// fast apply, http://jsperf.lnkit.com/fast-apply/5\nmodule.exports = function (fn, args, that) {\n  var un = that === undefined;\n  switch (args.length) {\n    case 0: return un ? fn()\n                      : fn.call(that);\n    case 1: return un ? fn(args[0])\n                      : fn.call(that, args[0]);\n    case 2: return un ? fn(args[0], args[1])\n                      : fn.call(that, args[0], args[1]);\n    case 3: return un ? fn(args[0], args[1], args[2])\n                      : fn.call(that, args[0], args[1], args[2]);\n    case 4: return un ? fn(args[0], args[1], args[2], args[3])\n                      : fn.call(that, args[0], args[1], args[2], args[3]);\n  } return fn.apply(that, args);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_invoke.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\n// eslint-disable-next-line no-prototype-builtins\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// check on default Array iterator\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar ArrayProto = Array.prototype;\n\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_is-array-iter.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.2.2 IsArray(argument)\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nmodule.exports = Array.isArray || function isArray(arg) {\n  return cof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_is-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// call something on iterator step with safe closing on error\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nmodule.exports = function (iterator, fn, value, entries) {\n  try {\n    return entries ? fn(anObject(value)[0], value[1]) : fn(value);\n  // 7.4.6 IteratorClose(iterator, completion)\n  } catch (e) {\n    var ret = iterator['return'];\n    if (ret !== undefined) anObject(ret.call(iterator));\n    throw e;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_iter-call.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\nvar descriptor = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\n__webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\")(IteratorPrototype, __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator'), function () { return this; });\n\nmodule.exports = function (Constructor, NAME, next) {\n  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });\n  setToStringTag(Constructor, NAME + ' Iterator');\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_iter-create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar $iterCreate = __webpack_require__(/*! ./_iter-create */ \"./node_modules/core-js/modules/_iter-create.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`\nvar FF_ITERATOR = '@@iterator';\nvar KEYS = 'keys';\nvar VALUES = 'values';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {\n  $iterCreate(Constructor, NAME, next);\n  var getMethod = function (kind) {\n    if (!BUGGY && kind in proto) return proto[kind];\n    switch (kind) {\n      case KEYS: return function keys() { return new Constructor(this, kind); };\n      case VALUES: return function values() { return new Constructor(this, kind); };\n    } return function entries() { return new Constructor(this, kind); };\n  };\n  var TAG = NAME + ' Iterator';\n  var DEF_VALUES = DEFAULT == VALUES;\n  var VALUES_BUG = false;\n  var proto = Base.prototype;\n  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];\n  var $default = $native || getMethod(DEFAULT);\n  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;\n  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;\n  var methods, key, IteratorPrototype;\n  // Fix native\n  if ($anyNative) {\n    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));\n    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {\n      // Set @@toStringTag to native iterators\n      setToStringTag(IteratorPrototype, TAG, true);\n      // fix for some old engines\n      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);\n    }\n  }\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEF_VALUES && $native && $native.name !== VALUES) {\n    VALUES_BUG = true;\n    $default = function values() { return $native.call(this); };\n  }\n  // Define iterator\n  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {\n    hide(proto, ITERATOR, $default);\n  }\n  // Plug for library\n  Iterators[NAME] = $default;\n  Iterators[TAG] = returnThis;\n  if (DEFAULT) {\n    methods = {\n      values: DEF_VALUES ? $default : getMethod(VALUES),\n      keys: IS_SET ? $default : getMethod(KEYS),\n      entries: $entries\n    };\n    if (FORCED) for (key in methods) {\n      if (!(key in proto)) redefine(proto, key, methods[key]);\n    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);\n  }\n  return methods;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_iter-define.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var riter = [7][ITERATOR]();\n  riter['return'] = function () { SAFE_CLOSING = true; };\n  // eslint-disable-next-line no-throw-literal\n  Array.from(riter, function () { throw 2; });\n} catch (e) { /* empty */ }\n\nmodule.exports = function (exec, skipClosing) {\n  if (!skipClosing && !SAFE_CLOSING) return false;\n  var safe = false;\n  try {\n    var arr = [7];\n    var iter = arr[ITERATOR]();\n    iter.next = function () { return { done: safe = true }; };\n    arr[ITERATOR] = function () { return iter; };\n    exec(arr);\n  } catch (e) { /* empty */ }\n  return safe;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_iter-detect.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (done, value) {\n  return { value: value, done: !!done };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_iter-step.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_iterators.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = false;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_library.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var META = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\")('meta');\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar setDesc = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar id = 0;\nvar isExtensible = Object.isExtensible || function () {\n  return true;\n};\nvar FREEZE = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return isExtensible(Object.preventExtensions({}));\n});\nvar setMeta = function (it) {\n  setDesc(it, META, { value: {\n    i: 'O' + ++id, // object ID\n    w: {}          // weak collections IDs\n  } });\n};\nvar fastKey = function (it, create) {\n  // return primitive with prefix\n  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return 'F';\n    // not necessary to add metadata\n    if (!create) return 'E';\n    // add missing metadata\n    setMeta(it);\n  // return object ID\n  } return it[META].i;\n};\nvar getWeak = function (it, create) {\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return true;\n    // not necessary to add metadata\n    if (!create) return false;\n    // add missing metadata\n    setMeta(it);\n  // return hash weak collections IDs\n  } return it[META].w;\n};\n// add metadata on freeze-family methods calling\nvar onFreeze = function (it) {\n  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);\n  return it;\n};\nvar meta = module.exports = {\n  KEY: META,\n  NEED: false,\n  fastKey: fastKey,\n  getWeak: getWeak,\n  onFreeze: onFreeze\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_meta.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_microtask.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar macrotask = __webpack_require__(/*! ./_task */ \"./node_modules/core-js/modules/_task.js\").set;\nvar Observer = global.MutationObserver || global.WebKitMutationObserver;\nvar process = global.process;\nvar Promise = global.Promise;\nvar isNode = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\")(process) == 'process';\n\nmodule.exports = function () {\n  var head, last, notify;\n\n  var flush = function () {\n    var parent, fn;\n    if (isNode && (parent = process.domain)) parent.exit();\n    while (head) {\n      fn = head.fn;\n      head = head.next;\n      try {\n        fn();\n      } catch (e) {\n        if (head) notify();\n        else last = undefined;\n        throw e;\n      }\n    } last = undefined;\n    if (parent) parent.enter();\n  };\n\n  // Node.js\n  if (isNode) {\n    notify = function () {\n      process.nextTick(flush);\n    };\n  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339\n  } else if (Observer && !(global.navigator && global.navigator.standalone)) {\n    var toggle = true;\n    var node = document.createTextNode('');\n    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new\n    notify = function () {\n      node.data = toggle = !toggle;\n    };\n  // environments with maybe non-completely correct, but existent Promise\n  } else if (Promise && Promise.resolve) {\n    // Promise.resolve without an argument throws an error in LG WebOS 2\n    var promise = Promise.resolve(undefined);\n    notify = function () {\n      promise.then(flush);\n    };\n  // for other environments - macrotask based on:\n  // - setImmediate\n  // - MessageChannel\n  // - window.postMessag\n  // - onreadystatechange\n  // - setTimeout\n  } else {\n    notify = function () {\n      // strange IE + webpack dev server bug - use .call(global)\n      macrotask.call(global, flush);\n    };\n  }\n\n  return function (fn) {\n    var task = { fn: fn, next: undefined };\n    if (last) last.next = task;\n    if (!head) {\n      head = task;\n      notify();\n    } last = task;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_microtask.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_new-promise-capability.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 25.4.1.5 NewPromiseCapability(C)\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\n\nfunction PromiseCapability(C) {\n  var resolve, reject;\n  this.promise = new C(function ($$resolve, $$reject) {\n    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');\n    resolve = $$resolve;\n    reject = $$reject;\n  });\n  this.resolve = aFunction(resolve);\n  this.reject = aFunction(reject);\n}\n\nmodule.exports.f = function (C) {\n  return new PromiseCapability(C);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_new-promise-capability.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar dPs = __webpack_require__(/*! ./_object-dps */ \"./node_modules/core-js/modules/_object-dps.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/modules/_enum-bug-keys.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\nvar Empty = function () { /* empty */ };\nvar PROTOTYPE = 'prototype';\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar createDict = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = __webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/modules/_dom-create.js\")('iframe');\n  var i = enumBugKeys.length;\n  var lt = '<';\n  var gt = '>';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  __webpack_require__(/*! ./_html */ \"./node_modules/core-js/modules/_html.js\").appendChild(iframe);\n  iframe.src = 'javascript:'; // eslint-disable-line no-script-url\n  // createDict = iframe.contentWindow.Object;\n  // html.removeChild(iframe);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);\n  iframeDocument.close();\n  createDict = iframeDocument.F;\n  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];\n  return createDict();\n};\n\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = createDict();\n  return Properties === undefined ? result : dPs(result, Properties);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/modules/_ie8-dom-define.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-dp.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\n\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = getKeys(Properties);\n  var length = keys.length;\n  var i = 0;\n  var P;\n  while (length > i) dP.f(O, P = keys[i++], Properties[P]);\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-dps.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/modules/_ie8-dom-define.js\");\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? gOPD : function getOwnPropertyDescriptor(O, P) {\n  O = toIObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return gOPD(O, P);\n  } catch (e) { /* empty */ }\n  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-gopd.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f;\nvar toString = {}.toString;\n\nvar windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames\n  ? Object.getOwnPropertyNames(window) : [];\n\nvar getWindowNames = function (it) {\n  try {\n    return gOPN(it);\n  } catch (e) {\n    return windowNames.slice();\n  }\n};\n\nmodule.exports.f = function getOwnPropertyNames(it) {\n  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-gopn-ext.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/modules/_object-keys-internal.js\");\nvar hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/modules/_enum-bug-keys.js\").concat('length', 'prototype');\n\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return $keys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-gopn.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-gops.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\nvar ObjectProto = Object.prototype;\n\nmodule.exports = Object.getPrototypeOf || function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectProto : null;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-gpo.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar arrayIndexOf = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/modules/_array-includes.js\")(false);\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\n\nmodule.exports = function (object, names) {\n  var O = toIObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~arrayIndexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.14 / 15.2.3.14 Object.keys(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/modules/_object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/modules/_enum-bug-keys.js\");\n\nmodule.exports = Object.keys || function keys(O) {\n  return $keys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = {}.propertyIsEnumerable;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-pie.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_perform.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return { e: false, v: exec() };\n  } catch (e) {\n    return { e: true, v: e };\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_perform.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_promise-resolve.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/core-js/modules/_new-promise-capability.js\");\n\nmodule.exports = function (C, x) {\n  anObject(C);\n  if (isObject(x) && x.constructor === C) return x;\n  var promiseCapability = newPromiseCapability.f(C);\n  var resolve = promiseCapability.resolve;\n  resolve(x);\n  return promiseCapability.promise;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_promise-resolve.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_property-desc.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nmodule.exports = function (target, src, safe) {\n  for (var key in src) redefine(target, key, src[key], safe);\n  return target;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_redefine-all.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar SRC = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\")('src');\nvar $toString = __webpack_require__(/*! ./_function-to-string */ \"./node_modules/core-js/modules/_function-to-string.js\");\nvar TO_STRING = 'toString';\nvar TPL = ('' + $toString).split(TO_STRING);\n\n__webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\").inspectSource = function (it) {\n  return $toString.call(it);\n};\n\n(module.exports = function (O, key, val, safe) {\n  var isFunction = typeof val == 'function';\n  if (isFunction) has(val, 'name') || hide(val, 'name', key);\n  if (O[key] === val) return;\n  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));\n  if (O === global) {\n    O[key] = val;\n  } else if (!safe) {\n    delete O[key];\n    hide(O, key, val);\n  } else if (O[key]) {\n    O[key] = val;\n  } else {\n    hide(O, key, val);\n  }\n// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n})(Function.prototype, TO_STRING, function toString() {\n  return typeof this == 'function' && this[SRC] || $toString.call(this);\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_redefine.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('species');\n\nmodule.exports = function (KEY) {\n  var C = global[KEY];\n  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {\n    configurable: true,\n    get: function () { return this; }\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_set-species.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var def = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('toStringTag');\n\nmodule.exports = function (it, tag, stat) {\n  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_set-to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\")('keys');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\nmodule.exports = function (key) {\n  return shared[key] || (shared[key] = uid(key));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || (global[SHARED] = {});\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: core.version,\n  mode: __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\") ? 'pure' : 'global',\n  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_shared.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.3.20 SpeciesConstructor(O, defaultConstructor)\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('species');\nmodule.exports = function (O, D) {\n  var C = anObject(O).constructor;\n  var S;\n  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_species-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\n// true  -> String#at\n// false -> String#codePointAt\nmodule.exports = function (TO_STRING) {\n  return function (that, pos) {\n    var s = String(defined(that));\n    var i = toInteger(pos);\n    var l = s.length;\n    var a, b;\n    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;\n    a = s.charCodeAt(i);\n    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff\n      ? TO_STRING ? s.charAt(i) : a\n      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_string-at.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_task.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar invoke = __webpack_require__(/*! ./_invoke */ \"./node_modules/core-js/modules/_invoke.js\");\nvar html = __webpack_require__(/*! ./_html */ \"./node_modules/core-js/modules/_html.js\");\nvar cel = __webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/modules/_dom-create.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar process = global.process;\nvar setTask = global.setImmediate;\nvar clearTask = global.clearImmediate;\nvar MessageChannel = global.MessageChannel;\nvar Dispatch = global.Dispatch;\nvar counter = 0;\nvar queue = {};\nvar ONREADYSTATECHANGE = 'onreadystatechange';\nvar defer, channel, port;\nvar run = function () {\n  var id = +this;\n  // eslint-disable-next-line no-prototype-builtins\n  if (queue.hasOwnProperty(id)) {\n    var fn = queue[id];\n    delete queue[id];\n    fn();\n  }\n};\nvar listener = function (event) {\n  run.call(event.data);\n};\n// Node.js 0.9+ & IE10+ has setImmediate, otherwise:\nif (!setTask || !clearTask) {\n  setTask = function setImmediate(fn) {\n    var args = [];\n    var i = 1;\n    while (arguments.length > i) args.push(arguments[i++]);\n    queue[++counter] = function () {\n      // eslint-disable-next-line no-new-func\n      invoke(typeof fn == 'function' ? fn : Function(fn), args);\n    };\n    defer(counter);\n    return counter;\n  };\n  clearTask = function clearImmediate(id) {\n    delete queue[id];\n  };\n  // Node.js 0.8-\n  if (__webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\")(process) == 'process') {\n    defer = function (id) {\n      process.nextTick(ctx(run, id, 1));\n    };\n  // Sphere (JS game engine) Dispatch API\n  } else if (Dispatch && Dispatch.now) {\n    defer = function (id) {\n      Dispatch.now(ctx(run, id, 1));\n    };\n  // Browsers with MessageChannel, includes WebWorkers\n  } else if (MessageChannel) {\n    channel = new MessageChannel();\n    port = channel.port2;\n    channel.port1.onmessage = listener;\n    defer = ctx(port.postMessage, port, 1);\n  // Browsers with postMessage, skip WebWorkers\n  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'\n  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {\n    defer = function (id) {\n      global.postMessage(id + '', '*');\n    };\n    global.addEventListener('message', listener, false);\n  // IE8-\n  } else if (ONREADYSTATECHANGE in cel('script')) {\n    defer = function (id) {\n      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {\n        html.removeChild(this);\n        run.call(id);\n      };\n    };\n  // Rest old browsers\n  } else {\n    defer = function (id) {\n      setTimeout(ctx(run, id, 1), 0);\n    };\n  }\n}\nmodule.exports = {\n  set: setTask,\n  clear: clearTask\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_task.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar max = Math.max;\nvar min = Math.min;\nmodule.exports = function (index, length) {\n  index = toInteger(index);\n  return index < 0 ? max(index + length, 0) : min(index, length);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.1.4 ToInteger\nvar ceil = Math.ceil;\nvar floor = Math.floor;\nmodule.exports = function (it) {\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_to-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// to indexed object, toObject with fallback for non-array-like ES3 strings\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/modules/_iobject.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nmodule.exports = function (it) {\n  return IObject(defined(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_to-iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.15 ToLength\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar min = Math.min;\nmodule.exports = function (it) {\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.13 ToObject(argument)\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nmodule.exports = function (it) {\n  return Object(defined(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_to-object.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var id = 0;\nvar px = Math.random();\nmodule.exports = function (key) {\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_uid.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_user-agent.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_user-agent.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar navigator = global.navigator;\n\nmodule.exports = navigator && navigator.userAgent || '';\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_user-agent.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/core-js/modules/_wks-ext.js\");\nvar defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nmodule.exports = function (name) {\n  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});\n  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_wks-define.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.f = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_wks-ext.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var store = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\")('wks');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\nvar Symbol = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").Symbol;\nvar USE_SYMBOL = typeof Symbol == 'function';\n\nvar $exports = module.exports = function (name) {\n  return store[name] || (store[name] =\n    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));\n};\n\n$exports.store = store;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_wks.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nmodule.exports = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\").getIteratorMethod = function (it) {\n  if (it != undefined) return it[ITERATOR]\n    || it['@@iterator']\n    || Iterators[classof(it)];\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/core.get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"./node_modules/core-js/modules/_iter-step.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\n\n// 22.1.3.4 Array.prototype.entries()\n// 22.1.3.13 Array.prototype.keys()\n// 22.1.3.29 Array.prototype.values()\n// 22.1.3.30 Array.prototype[@@iterator]()\nmodule.exports = __webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/modules/_iter-define.js\")(Array, 'Array', function (iterated, kind) {\n  this._t = toIObject(iterated); // target\n  this._i = 0;                   // next index\n  this._k = kind;                // kind\n// 22.1.5.2.1 %ArrayIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var kind = this._k;\n  var index = this._i++;\n  if (!O || index >= O.length) {\n    this._t = undefined;\n    return step(1);\n  }\n  if (kind == 'keys') return step(0, index);\n  if (kind == 'values') return step(0, O[index]);\n  return step(0, [index, O[index]]);\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)\nIterators.Arguments = Iterators.Array;\n\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 19.1.3.6 Object.prototype.toString()\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\nvar test = {};\ntest[__webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('toStringTag')] = 'z';\nif (test + '' != '[object z]') {\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(Object.prototype, 'toString', function toString() {\n    return '[object ' + classof(this) + ']';\n  }, true);\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.object.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.promise.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/modules/_for-of.js\");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/modules/_species-constructor.js\");\nvar task = __webpack_require__(/*! ./_task */ \"./node_modules/core-js/modules/_task.js\").set;\nvar microtask = __webpack_require__(/*! ./_microtask */ \"./node_modules/core-js/modules/_microtask.js\")();\nvar newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/core-js/modules/_new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ./_perform */ \"./node_modules/core-js/modules/_perform.js\");\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./node_modules/core-js/modules/_user-agent.js\");\nvar promiseResolve = __webpack_require__(/*! ./_promise-resolve */ \"./node_modules/core-js/modules/_promise-resolve.js\");\nvar PROMISE = 'Promise';\nvar TypeError = global.TypeError;\nvar process = global.process;\nvar versions = process && process.versions;\nvar v8 = versions && versions.v8 || '';\nvar $Promise = global[PROMISE];\nvar isNode = classof(process) == 'process';\nvar empty = function () { /* empty */ };\nvar Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;\nvar newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;\n\nvar USE_NATIVE = !!function () {\n  try {\n    // correct subclassing with @@species support\n    var promise = $Promise.resolve(1);\n    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('species')] = function (exec) {\n      exec(empty, empty);\n    };\n    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test\n    return (isNode || typeof PromiseRejectionEvent == 'function')\n      && promise.then(empty) instanceof FakePromise\n      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables\n      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565\n      // we can't detect it synchronously, so just check versions\n      && v8.indexOf('6.6') !== 0\n      && userAgent.indexOf('Chrome/66') === -1;\n  } catch (e) { /* empty */ }\n}();\n\n// helpers\nvar isThenable = function (it) {\n  var then;\n  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;\n};\nvar notify = function (promise, isReject) {\n  if (promise._n) return;\n  promise._n = true;\n  var chain = promise._c;\n  microtask(function () {\n    var value = promise._v;\n    var ok = promise._s == 1;\n    var i = 0;\n    var run = function (reaction) {\n      var handler = ok ? reaction.ok : reaction.fail;\n      var resolve = reaction.resolve;\n      var reject = reaction.reject;\n      var domain = reaction.domain;\n      var result, then, exited;\n      try {\n        if (handler) {\n          if (!ok) {\n            if (promise._h == 2) onHandleUnhandled(promise);\n            promise._h = 1;\n          }\n          if (handler === true) result = value;\n          else {\n            if (domain) domain.enter();\n            result = handler(value); // may throw\n            if (domain) {\n              domain.exit();\n              exited = true;\n            }\n          }\n          if (result === reaction.promise) {\n            reject(TypeError('Promise-chain cycle'));\n          } else if (then = isThenable(result)) {\n            then.call(result, resolve, reject);\n          } else resolve(result);\n        } else reject(value);\n      } catch (e) {\n        if (domain && !exited) domain.exit();\n        reject(e);\n      }\n    };\n    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach\n    promise._c = [];\n    promise._n = false;\n    if (isReject && !promise._h) onUnhandled(promise);\n  });\n};\nvar onUnhandled = function (promise) {\n  task.call(global, function () {\n    var value = promise._v;\n    var unhandled = isUnhandled(promise);\n    var result, handler, console;\n    if (unhandled) {\n      result = perform(function () {\n        if (isNode) {\n          process.emit('unhandledRejection', value, promise);\n        } else if (handler = global.onunhandledrejection) {\n          handler({ promise: promise, reason: value });\n        } else if ((console = global.console) && console.error) {\n          console.error('Unhandled promise rejection', value);\n        }\n      });\n      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should\n      promise._h = isNode || isUnhandled(promise) ? 2 : 1;\n    } promise._a = undefined;\n    if (unhandled && result.e) throw result.v;\n  });\n};\nvar isUnhandled = function (promise) {\n  return promise._h !== 1 && (promise._a || promise._c).length === 0;\n};\nvar onHandleUnhandled = function (promise) {\n  task.call(global, function () {\n    var handler;\n    if (isNode) {\n      process.emit('rejectionHandled', promise);\n    } else if (handler = global.onrejectionhandled) {\n      handler({ promise: promise, reason: promise._v });\n    }\n  });\n};\nvar $reject = function (value) {\n  var promise = this;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  promise._v = value;\n  promise._s = 2;\n  if (!promise._a) promise._a = promise._c.slice();\n  notify(promise, true);\n};\nvar $resolve = function (value) {\n  var promise = this;\n  var then;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  try {\n    if (promise === value) throw TypeError(\"Promise can't be resolved itself\");\n    if (then = isThenable(value)) {\n      microtask(function () {\n        var wrapper = { _w: promise, _d: false }; // wrap\n        try {\n          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));\n        } catch (e) {\n          $reject.call(wrapper, e);\n        }\n      });\n    } else {\n      promise._v = value;\n      promise._s = 1;\n      notify(promise, false);\n    }\n  } catch (e) {\n    $reject.call({ _w: promise, _d: false }, e); // wrap\n  }\n};\n\n// constructor polyfill\nif (!USE_NATIVE) {\n  // 25.4.3.1 Promise(executor)\n  $Promise = function Promise(executor) {\n    anInstance(this, $Promise, PROMISE, '_h');\n    aFunction(executor);\n    Internal.call(this);\n    try {\n      executor(ctx($resolve, this, 1), ctx($reject, this, 1));\n    } catch (err) {\n      $reject.call(this, err);\n    }\n  };\n  // eslint-disable-next-line no-unused-vars\n  Internal = function Promise(executor) {\n    this._c = [];             // <- awaiting reactions\n    this._a = undefined;      // <- checked in isUnhandled reactions\n    this._s = 0;              // <- state\n    this._d = false;          // <- done\n    this._v = undefined;      // <- value\n    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled\n    this._n = false;          // <- notify\n  };\n  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\")($Promise.prototype, {\n    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)\n    then: function then(onFulfilled, onRejected) {\n      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));\n      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;\n      reaction.fail = typeof onRejected == 'function' && onRejected;\n      reaction.domain = isNode ? process.domain : undefined;\n      this._c.push(reaction);\n      if (this._a) this._a.push(reaction);\n      if (this._s) notify(this, false);\n      return reaction.promise;\n    },\n    // 25.4.5.1 Promise.prototype.catch(onRejected)\n    'catch': function (onRejected) {\n      return this.then(undefined, onRejected);\n    }\n  });\n  OwnPromiseCapability = function () {\n    var promise = new Internal();\n    this.promise = promise;\n    this.resolve = ctx($resolve, promise, 1);\n    this.reject = ctx($reject, promise, 1);\n  };\n  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {\n    return C === $Promise || C === Wrapper\n      ? new OwnPromiseCapability(C)\n      : newGenericPromiseCapability(C);\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });\n__webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\")($Promise, PROMISE);\n__webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\")(PROMISE);\nWrapper = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\")[PROMISE];\n\n// statics\n$export($export.S + $export.F * !USE_NATIVE, PROMISE, {\n  // 25.4.4.5 Promise.reject(r)\n  reject: function reject(r) {\n    var capability = newPromiseCapability(this);\n    var $$reject = capability.reject;\n    $$reject(r);\n    return capability.promise;\n  }\n});\n$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {\n  // 25.4.4.6 Promise.resolve(x)\n  resolve: function resolve(x) {\n    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);\n  }\n});\n$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/modules/_iter-detect.js\")(function (iter) {\n  $Promise.all(iter)['catch'](empty);\n})), PROMISE, {\n  // 25.4.4.1 Promise.all(iterable)\n  all: function all(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var resolve = capability.resolve;\n    var reject = capability.reject;\n    var result = perform(function () {\n      var values = [];\n      var index = 0;\n      var remaining = 1;\n      forOf(iterable, false, function (promise) {\n        var $index = index++;\n        var alreadyCalled = false;\n        values.push(undefined);\n        remaining++;\n        C.resolve(promise).then(function (value) {\n          if (alreadyCalled) return;\n          alreadyCalled = true;\n          values[$index] = value;\n          --remaining || resolve(values);\n        }, reject);\n      });\n      --remaining || resolve(values);\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  },\n  // 25.4.4.4 Promise.race(iterable)\n  race: function race(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var reject = capability.reject;\n    var result = perform(function () {\n      forOf(iterable, false, function (promise) {\n        C.resolve(promise).then(capability.resolve, reject);\n      });\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.promise.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $at = __webpack_require__(/*! ./_string-at */ \"./node_modules/core-js/modules/_string-at.js\")(true);\n\n// 21.1.3.27 String.prototype[@@iterator]()\n__webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/modules/_iter-define.js\")(String, 'String', function (iterated) {\n  this._t = String(iterated); // target\n  this._i = 0;                // next index\n// 21.1.5.2.1 %StringIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var index = this._i;\n  var point;\n  if (index >= O.length) return { value: undefined, done: true };\n  point = $at(O, index);\n  this._i += point.length;\n  return { value: point, done: false };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// ECMAScript 6 symbols shim\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar META = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").KEY;\nvar $fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/core-js/modules/_wks-ext.js\");\nvar wksDefine = __webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/modules/_wks-define.js\");\nvar enumKeys = __webpack_require__(/*! ./_enum-keys */ \"./node_modules/core-js/modules/_enum-keys.js\");\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/modules/_is-array.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nvar _create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\nvar gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ \"./node_modules/core-js/modules/_object-gopn-ext.js\");\nvar $GOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\nvar $GOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/modules/_object-gops.js\");\nvar $DP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar $keys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar gOPD = $GOPD.f;\nvar dP = $DP.f;\nvar gOPN = gOPNExt.f;\nvar $Symbol = global.Symbol;\nvar $JSON = global.JSON;\nvar _stringify = $JSON && $JSON.stringify;\nvar PROTOTYPE = 'prototype';\nvar HIDDEN = wks('_hidden');\nvar TO_PRIMITIVE = wks('toPrimitive');\nvar isEnum = {}.propertyIsEnumerable;\nvar SymbolRegistry = shared('symbol-registry');\nvar AllSymbols = shared('symbols');\nvar OPSymbols = shared('op-symbols');\nvar ObjectProto = Object[PROTOTYPE];\nvar USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;\nvar QObject = global.QObject;\n// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173\nvar setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;\n\n// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687\nvar setSymbolDesc = DESCRIPTORS && $fails(function () {\n  return _create(dP({}, 'a', {\n    get: function () { return dP(this, 'a', { value: 7 }).a; }\n  })).a != 7;\n}) ? function (it, key, D) {\n  var protoDesc = gOPD(ObjectProto, key);\n  if (protoDesc) delete ObjectProto[key];\n  dP(it, key, D);\n  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);\n} : dP;\n\nvar wrap = function (tag) {\n  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);\n  sym._k = tag;\n  return sym;\n};\n\nvar isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {\n  return typeof it == 'symbol';\n} : function (it) {\n  return it instanceof $Symbol;\n};\n\nvar $defineProperty = function defineProperty(it, key, D) {\n  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);\n  anObject(it);\n  key = toPrimitive(key, true);\n  anObject(D);\n  if (has(AllSymbols, key)) {\n    if (!D.enumerable) {\n      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));\n      it[HIDDEN][key] = true;\n    } else {\n      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;\n      D = _create(D, { enumerable: createDesc(0, false) });\n    } return setSymbolDesc(it, key, D);\n  } return dP(it, key, D);\n};\nvar $defineProperties = function defineProperties(it, P) {\n  anObject(it);\n  var keys = enumKeys(P = toIObject(P));\n  var i = 0;\n  var l = keys.length;\n  var key;\n  while (l > i) $defineProperty(it, key = keys[i++], P[key]);\n  return it;\n};\nvar $create = function create(it, P) {\n  return P === undefined ? _create(it) : $defineProperties(_create(it), P);\n};\nvar $propertyIsEnumerable = function propertyIsEnumerable(key) {\n  var E = isEnum.call(this, key = toPrimitive(key, true));\n  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;\n  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;\n};\nvar $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {\n  it = toIObject(it);\n  key = toPrimitive(key, true);\n  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;\n  var D = gOPD(it, key);\n  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;\n  return D;\n};\nvar $getOwnPropertyNames = function getOwnPropertyNames(it) {\n  var names = gOPN(toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);\n  } return result;\n};\nvar $getOwnPropertySymbols = function getOwnPropertySymbols(it) {\n  var IS_OP = it === ObjectProto;\n  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);\n  } return result;\n};\n\n// 19.4.1.1 Symbol([description])\nif (!USE_NATIVE) {\n  $Symbol = function Symbol() {\n    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');\n    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);\n    var $set = function (value) {\n      if (this === ObjectProto) $set.call(OPSymbols, value);\n      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;\n      setSymbolDesc(this, tag, createDesc(1, value));\n    };\n    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });\n    return wrap(tag);\n  };\n  redefine($Symbol[PROTOTYPE], 'toString', function toString() {\n    return this._k;\n  });\n\n  $GOPD.f = $getOwnPropertyDescriptor;\n  $DP.f = $defineProperty;\n  __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f = gOPNExt.f = $getOwnPropertyNames;\n  __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\").f = $propertyIsEnumerable;\n  $GOPS.f = $getOwnPropertySymbols;\n\n  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\")) {\n    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);\n  }\n\n  wksExt.f = function (name) {\n    return wrap(wks(name));\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });\n\nfor (var es6Symbols = (\n  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14\n  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'\n).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);\n\nfor (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);\n\n$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {\n  // 19.4.2.1 Symbol.for(key)\n  'for': function (key) {\n    return has(SymbolRegistry, key += '')\n      ? SymbolRegistry[key]\n      : SymbolRegistry[key] = $Symbol(key);\n  },\n  // 19.4.2.5 Symbol.keyFor(sym)\n  keyFor: function keyFor(sym) {\n    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');\n    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;\n  },\n  useSetter: function () { setter = true; },\n  useSimple: function () { setter = false; }\n});\n\n$export($export.S + $export.F * !USE_NATIVE, 'Object', {\n  // 19.1.2.2 Object.create(O [, Properties])\n  create: $create,\n  // 19.1.2.4 Object.defineProperty(O, P, Attributes)\n  defineProperty: $defineProperty,\n  // 19.1.2.3 Object.defineProperties(O, Properties)\n  defineProperties: $defineProperties,\n  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\n  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,\n  // 19.1.2.7 Object.getOwnPropertyNames(O)\n  getOwnPropertyNames: $getOwnPropertyNames,\n  // 19.1.2.8 Object.getOwnPropertySymbols(O)\n  getOwnPropertySymbols: $getOwnPropertySymbols\n});\n\n// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives\n// https://bugs.chromium.org/p/v8/issues/detail?id=3443\nvar FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });\n\n$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {\n  getOwnPropertySymbols: function getOwnPropertySymbols(it) {\n    return $GOPS.f(toObject(it));\n  }\n});\n\n// 24.3.2 JSON.stringify(value [, replacer [, space]])\n$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {\n  var S = $Symbol();\n  // MS Edge converts symbol values to JSON as {}\n  // WebKit converts symbol values to JSON as null\n  // V8 throws on boxed symbols\n  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';\n})), 'JSON', {\n  stringify: function stringify(it) {\n    var args = [it];\n    var i = 1;\n    var replacer, $replacer;\n    while (arguments.length > i) args.push(arguments[i++]);\n    $replacer = replacer = args[1];\n    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined\n    if (!isArray(replacer)) replacer = function (key, value) {\n      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);\n      if (!isSymbol(value)) return value;\n    };\n    args[1] = replacer;\n    return _stringify.apply($JSON, args);\n  }\n});\n\n// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)\n$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);\n// 19.4.3.5 Symbol.prototype[@@toStringTag]\nsetToStringTag($Symbol, 'Symbol');\n// 20.2.1.9 Math[@@toStringTag]\nsetToStringTag(Math, 'Math', true);\n// 24.3.3 JSON[@@toStringTag]\nsetToStringTag(global.JSON, 'JSON', true);\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.finally.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.finally.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// https://github.com/tc39/proposal-promise-finally\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/modules/_species-constructor.js\");\nvar promiseResolve = __webpack_require__(/*! ./_promise-resolve */ \"./node_modules/core-js/modules/_promise-resolve.js\");\n\n$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {\n  var C = speciesConstructor(this, core.Promise || global.Promise);\n  var isFunction = typeof onFinally == 'function';\n  return this.then(\n    isFunction ? function (x) {\n      return promiseResolve(C, onFinally()).then(function () { return x; });\n    } : onFinally,\n    isFunction ? function (e) {\n      return promiseResolve(C, onFinally()).then(function () { throw e; });\n    } : onFinally\n  );\n} });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.promise.finally.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.try.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.try.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/tc39/proposal-promise-try\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/core-js/modules/_new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ./_perform */ \"./node_modules/core-js/modules/_perform.js\");\n\n$export($export.S, 'Promise', { 'try': function (callbackfn) {\n  var promiseCapability = newPromiseCapability.f(this);\n  var result = perform(callbackfn);\n  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);\n  return promiseCapability.promise;\n} });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.promise.try.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $iterators = __webpack_require__(/*! ./es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\nvar ITERATOR = wks('iterator');\nvar TO_STRING_TAG = wks('toStringTag');\nvar ArrayValues = Iterators.Array;\n\nvar DOMIterables = {\n  CSSRuleList: true, // TODO: Not spec compliant, should be false.\n  CSSStyleDeclaration: false,\n  CSSValueList: false,\n  ClientRectList: false,\n  DOMRectList: false,\n  DOMStringList: false,\n  DOMTokenList: true,\n  DataTransferItemList: false,\n  FileList: false,\n  HTMLAllCollection: false,\n  HTMLCollection: false,\n  HTMLFormElement: false,\n  HTMLSelectElement: false,\n  MediaList: true, // TODO: Not spec compliant, should be false.\n  MimeTypeArray: false,\n  NamedNodeMap: false,\n  NodeList: true,\n  PaintRequestList: false,\n  Plugin: false,\n  PluginArray: false,\n  SVGLengthList: false,\n  SVGNumberList: false,\n  SVGPathSegList: false,\n  SVGPointList: false,\n  SVGStringList: false,\n  SVGTransformList: false,\n  SourceBufferList: false,\n  StyleSheetList: true, // TODO: Not spec compliant, should be false.\n  TextTrackCueList: false,\n  TextTrackList: false,\n  TouchList: false\n};\n\nfor (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {\n  var NAME = collections[i];\n  var explicit = DOMIterables[NAME];\n  var Collection = global[NAME];\n  var proto = Collection && Collection.prototype;\n  var key;\n  if (proto) {\n    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);\n    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);\n    Iterators[NAME] = ArrayValues;\n    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/web.dom.iterable.js?");

/***/ }),

/***/ "./src/lib/lazyTable.js":
/*!******************************!*\
  !*** ./src/lib/lazyTable.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LazyTable; });\n/* harmony import */ var _tableRowIterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tableRowIterator.js */ \"./src/lib/tableRowIterator.js\");\n/* harmony import */ var _tableStateMachine_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tableStateMachine.js */ \"./src/lib/tableStateMachine.js\");\n\r\n\r\n\r\nfunction LazyTable(options) {\r\n\t/*\r\n\t * Relevant DOM objects.\r\n\t */\r\n\tconst that = this;\r\n\tconst table = this.find('table');\r\n\tconst tableBody = this.find('table tbody');\r\n\r\n\t\r\n\t/*\r\n\t * Init settings.\r\n\t */\r\n\tconst defaults = {\r\n\t\t\tdebug: false,         // output console logs\r\n\t\t\ttrHeight: 0,          // height of a single row - set to 0 for automatic determination\r\n\t\t\tdata: [],             // raw data\r\n\t\t\tgenerator: function(row) { return '<tr><td>' + row.join('</td><td>') + '</td></tr>'; }, // function to turn array into html code for table row\r\n\t\t\tstartIndex: 0,        // initially centered element\r\n\t\t\tkeepExisting: true,   // if true, rows will not be deleted when getting out of visible area \r\n\t\t\tprefetch: 0,          // number of rows by which to extend visible area\r\n\t\t\tanimationCalcTime: 3, // milliseconds\r\n\t\t\tappendFn: function(rows) {\r\n\t\t\t\ttableBody.append(rows.join()); \r\n\t\t\t},\r\n\t\t\tprependFn: function(rows) { \r\n\t\t\t\ttableBody.prepend(rows.join()); \r\n\t\t\t},\r\n\t\t\tdeleteFn: function(startIndex, endIndex) { \r\n\t\t\t\ttableBody.children().slice(startIndex, endIndex).remove();\r\n\t\t\t},\r\n\t\t\tonInit: null,         // callback function - will be called after initialization has finished\r\n\t\t\tonRedraw: null        // callback function - will be called after rows have been added or removed\r\n\t};\r\n\tconst settings = $.extend({}, defaults, options);\r\n\t\r\n\t\r\n\t/*\r\n\t * Init plugin-global variables.\r\n\t */\r\n\t/* Seekable Iterators over data */\r\n\tconst nextIter = new _tableRowIterator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](settings.generator, settings.data);\r\n\tnextIter.setCurrent(settings.startIndex);\r\n\tconst prevIter = nextIter.clone();\r\n\t\r\n\t/* State machine for handling table states and transitions. */\r\n\tconst stateMachine = new _tableStateMachine_js__WEBPACK_IMPORTED_MODULE_1__[\"TableStateMachine\"]();\r\n\t\r\n\t/* Flag to indicate that a resize event is being worked on already. */\r\n\tvar resizeAnimationWorking = false;\r\n\t\r\n\t/* The currently focused index - to be refocused on resize. */\r\n\tvar focusedIndex = false;\r\n\t\r\n\t\r\n\t/* \r\n\t * *********************************\r\n\t * *****    Helper function    *****\r\n\t * *********************************\r\n\t */\r\n\t\r\n\t/*\r\n\t * Wait until at least one row is being drawn.\r\n\t */\r\n\tconst waitForRow = function() {\r\n\t\treturn new Promise((resolve, reject) => {\r\n\t\t\tvar tries = 1;\r\n\t\t\tconst wait = function() {\r\n\t\t\t\tconst rows = tableBody.children();\r\n\t\t\t\tif(rows.length > 0) {\r\n\t\t\t\t\t// wait one frame before resolving\r\n\t\t\t\t\twindow.setTimeout(function() { resolve(rows.get(0)); }, 16);\r\n\t\t\t\t} else if(tries++ < 10){\r\n\t\t\t\t\t// retry\r\n\t\t\t\t\twindow.setTimeout(wait, 100);\r\n\t\t\t\t} else {\r\n\t\t\t\t\treject();\r\n\t\t\t\t}\r\n\t\t\t};\r\n\t\t\twait();\r\n\t\t});\r\n\t};\r\n\r\n\t\r\n\t/*\r\n\t * Create a build animation promise. This animation turns data rows into\r\n\t * DOM Table rows that are appended.\r\n\t */\r\n\tconst build = function(getFn, testFn, appendFn) {\r\n\t\treturn new Promise((resolve, reject) => {\r\n\t\t\t/*\r\n\t\t\t * Only draw a small number of rows to prevent the user interface\r\n\t\t\t * from hanging. If the total animation covers a large number of rows\r\n\t\t\t * it is spread across several animation frames.\r\n\t\t\t */\r\n\t\t\tconst anim = function(taskStartTime) {\r\n\t\t\t\t// targetWindow is calculated once per frame\r\n\t\t\t\tconst targetWindow = calcTargetWindow();\r\n\t\t\t\tvar html = [];\r\n\t\t\t\t\r\n\t\t\t\t// spend settings.animationCalcTime for generating rows\r\n\t\t\t\twhile((stateMachine.getState() != _tableStateMachine_js__WEBPACK_IMPORTED_MODULE_1__[\"TableState\"].RESETTING) \r\n\t\t\t\t\t\t&& testFn(targetWindow) \r\n\t\t\t\t\t\t&& (window.performance.now() - taskStartTime < settings.animationCalcTime)) {\r\n\t\t\t\t\thtml.push(getFn());\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t// append generated rows - this will require additional time \r\n\t\t\t\t// for rendering and painting (so keep animationCalcTime below\r\n\t\t\t\t// 16ms)\r\n\t\t\t\tif(html.length > 0) {\r\n\t\t\t\t\tappendFn(html);\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\tif(testFn(targetWindow)) {\r\n\t\t\t\t\t// continue animation in next frame\r\n\t\t\t\t\twindow.requestAnimationFrame(anim);\r\n\t\t\t\t} else {\r\n\t\t\t\t\t// animation done\r\n\t\t\t\t\tresolve(html);\r\n\t\t\t\t}\r\n\t\t\t};\r\n\t\t\t\r\n\t\t\twindow.requestAnimationFrame(anim);\t\t\t\r\n\t\t});\r\n\t};\r\n\r\n\t\r\n\t/*\r\n\t * Free any rendered rows that are no longer needed. Only relevant\r\n\t * if settings.keepExisting = false\r\n\t */\r\n\tconst free = function() {\r\n\t\tconst currentWindow = calcCurrentWindow();\r\n\t\tconst targetWindow = calcTargetWindow();\r\n\t\t\r\n\t\tif(targetWindow.bottom < currentWindow.bottom) {\r\n\t\t\tnextIter.setCurrent(targetWindow.bottom);\r\n\t\t\tsettings.deleteFn(targetWindow.bottom - currentWindow.bottom); // index will be negative - so removed from the end of the list\r\n\t\t\ttable.css({'margin-bottom': (settings.data.length - targetWindow.bottom) * settings.trHeight});\r\n\t\t\tif(settings.debug) {\r\n\t\t\t\tconsole.log('[jQuery.Lazytable] bot -' + (currentWindow.bottom - targetWindow.bottom) + ' rows');\t\t\t\t\t\r\n\t\t\t}\t\t\t\r\n\t\t}\r\n\t\tif(targetWindow.top > currentWindow.top) {\r\n\t\t\tprevIter.setCurrent(targetWindow.top);\r\n\t\t\tsettings.deleteFn(0, targetWindow.top - currentWindow.top);\r\n\t\t\ttable.css({'margin-top': targetWindow.top * settings.trHeight});\r\n\t\t\tif(settings.debug) {\r\n\t\t\t\tconsole.log('[jQuery.Lazytable] top -' + (targetWindow.top - currentWindow.top) + ' rows');\t\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t// no Promise - return immediately: deleted rows have been out of \r\n\t\t// visible area anyway\r\n\t};\r\n\r\n\t\r\n\t/*\r\n\t * Get the desired window based on current scroll position.\r\n\t */\r\n\tconst calcTargetWindow = function() {\r\n\t\tconst scrollTop = that.scrollTop();\r\n\t\tconst w = {\r\n\t\t\ttop: Math.max(Math.floor(scrollTop / settings.trHeight) - settings.prefetch, 0),\r\n\t\t\tbottom: Math.min(Math.ceil((scrollTop + that.innerHeight()) / settings.trHeight) + settings.prefetch, settings.data.length - 1)\r\n\t\t};\r\n\t\tw.center = Math.min(Math.floor((w.bottom + w.top) / 2), settings.data.length - 1);\r\n\t\t\r\n\t\treturn w;\r\n\t};\r\n\t\r\n\t\r\n\t/* \r\n\t * Get the currently drawn window.\r\n\t */\r\n\tconst calcCurrentWindow = function() {\r\n\t\tconst w = {\r\n\t\t\ttop: prevIter.getCurrent(),\r\n\t\t\tbottom: nextIter.getCurrent()\r\n\t\t};\r\n\t\tw.center = Math.min(Math.floor((w.bottom + w.top) / 2), settings.data.length - 1);\r\n\t\t\r\n\t\treturn w;\r\n\t};\r\n\t\r\n\t\r\n\t/* \r\n\t * Move a certain index to center of window, if possible. \r\n\t */\r\n\tconst center = function(index) {\r\n\t\treturn new Promise((resolve, reject) => {\r\n\t\t\tconst top = Math.min(\r\n\t\t\t\t\tMath.max(index * settings.trHeight - (that.innerHeight() - settings.trHeight)/2, 0),\r\n\t\t\t\t\tthat.prop('scrollHeight')\r\n\t\t\t);\r\n\t\t\tthat.scrollTop(top);\r\n\t\t\twindow.setTimeout(resolve, 16);\t\t\t\r\n\t\t});\r\n\t};\r\n\t\r\n\t\r\n\t/*\r\n\t * Scroll the visible window until the specified index is visible.\r\n\t */\r\n\tfunction scrollTo(index) {\r\n\t\treturn new Promise((resolve, reject) => {\r\n\t\t\t/*\r\n\t\t\t * If the desired index is within the currently active area,\r\n\t\t\t * the table window will scroll until the desired index reaches\r\n\t\t\t * the window's visible area.\r\n\t\t\t */\r\n\t\t\tconst offset = index * settings.trHeight;\r\n\t\t\tconst windowTop = that.scrollTop();\r\n\t\t\tconst windowHeight = that.innerHeight();\r\n\r\n\t\t\t// Do not center index, as it is already within current viewport.\r\n\t\t\t// Only adjust position, if it is only partly visible.\r\n\t\t\tvar scrollTop = -1;\r\n\t\t\tif(offset + settings.trHeight > windowTop + windowHeight) {\r\n\t\t\t\tscrollTop = Math.max(0, offset - (windowHeight - settings.trHeight));\r\n\t\t\t} else if(offset < windowTop ) {\r\n\t\t\t\tscrollTop = offset;\r\n\t\t\t}\r\n\t\t\tif(scrollTop >= 0) {\r\n\t\t\t\tthat.scrollTop(scrollTop);\t\r\n\t\t\t}\r\n\t\t\twindow.setTimeout(resolve, 16);\t\t\t\r\n\t\t});\r\n\t};\r\n\t\r\n\t\r\n\t/*\r\n\t * Restart table drawing at a given index.\r\n\t * The index will be centered.\r\n\t */\r\n\tconst restart = function(index) {\r\n\t\treturn start(index, false).then(function() {\r\n\t\t\treturn center(index);\r\n\t\t}).then(onUpdate);\r\n\t};\r\n\t\r\n\r\n\t\r\n\t/*\r\n\t * ******************************************\r\n\t * *****    Event- (State-) Handlers    *****\r\n\t * ******************************************\r\n\t */\r\n\t\r\n\t/*\r\n\t * Update the set of rendered rows based on the current scroll position.\r\n\t * This function should be called every time the scroll position changes.\r\n\t */\r\n\tconst onUpdate = function() {\r\n\t\tconst targetWindow = calcTargetWindow();\r\n\t\tconst currentWindow = calcCurrentWindow();\r\n\r\n\t\tif(targetWindow.top > currentWindow.bottom || targetWindow.bottom < currentWindow.top) {\r\n\t\t\t// targetWindow does not intersect with currentWindow\r\n\t\t\t// -> restart at targetWindow's center\r\n\t\t\treturn stateMachine.trigger(_tableStateMachine_js__WEBPACK_IMPORTED_MODULE_1__[\"TableAction\"].RESET).then(restart(targetWindow.center));\r\n\t\t}\r\n\t\t\r\n\t\t// else:\r\n\t\tvar animations = [];\r\n\t\tif(targetWindow.bottom >= currentWindow.bottom) {\r\n\t\t\t// more rows at the bottom of the table are needed\r\n\t\t\tanimations.push(build(\r\n\t\t\t\t\t() => nextIter.next(),\r\n\t\t\t\t\t(targetWindow) => (stateMachine.getState() != _tableStateMachine_js__WEBPACK_IMPORTED_MODULE_1__[\"TableState\"].RESETING) && nextIter.hasNext() && nextIter.getCurrent() <= targetWindow.bottom,\r\n\t\t\t\t\thtml => {\r\n\t\t\t\t\t\tsettings.appendFn(html);\r\n\t\t\t\t\t\ttable.css({'margin-bottom': (settings.data.length - nextIter.getCurrent()) * settings.trHeight});\r\n\t\t\t\t\t\tif(settings.debug) {\r\n\t\t\t\t\t\t\tconsole.log('[jQuery.Lazytable] bot +' + html.length + ' rows');\r\n\t\t\t\t\t\t}\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t})\r\n\t\t\t);\r\n\t\t}\r\n\t\tif(targetWindow.top < currentWindow.top) {\r\n\t\t\t// more rows at the top of the table are needed\r\n\t\t\tanimations.push(build(\r\n\t\t\t\t\t() => prevIter.prev(),\r\n\t\t\t\t\t(targetWindow) => (stateMachine.getState() != _tableStateMachine_js__WEBPACK_IMPORTED_MODULE_1__[\"TableState\"].RESETING) && prevIter.hasPrev() && prevIter.getCurrent() > targetWindow.top,\r\n\t\t\t\t\thtml => {\r\n\t\t\t\t\t\tsettings.prependFn(html.reverse());\r\n\t\t\t\t\t\ttable.css({'margin-top': prevIter.getCurrent() * settings.trHeight});\r\n\t\t\t\t\t\tif(settings.debug) {\r\n\t\t\t\t\t\t\tconsole.log('[jQuery.Lazytable] top +' + html.length + ' rows');\r\n\t\t\t\t\t\t}\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t})\r\n\t\t\t);\t\t\t\t\r\n\t\t}\r\n\t\t\r\n\t\tif(animations.length > 0) {\r\n\t\t\treturn stateMachine.trigger(_tableStateMachine_js__WEBPACK_IMPORTED_MODULE_1__[\"TableAction\"].SCROLL, () => {\r\n\t\t\t\treturn Promise.all(animations).then(() => {\r\n\t\t\t\t\tif(!settings.keepExisting) {\r\n\t\t\t\t\t\tfree();\r\n\t\t\t\t\t}\r\n\t\t\t\t\tif(typeof(settings.onRedraw) === 'function') {\r\n\t\t\t\t\t\tsettings.onRedraw();\r\n\t\t\t\t\t}\t\t\t\r\n\t\t\t\t});\t\t\t\t\t\r\n\t\t\t}).then(() => {\r\n\t\t\t\tstateMachine.trigger(_tableStateMachine_js__WEBPACK_IMPORTED_MODULE_1__[\"TableAction\"].SCROLL_COMPLETE);\r\n\t\t\t});\t\t\t\t\r\n\t\t}\r\n\t};\r\n\t\r\n\t\r\n\t/*\r\n\t * Focus an index - move it to the visible part of the window.\r\n\t * If index is outside the current window, the table will be\r\n\t * rebuilt with index being centered.\r\n\t */\r\n\tconst onFocus = function(index) {\r\n\t\tconst currentWindow = calcCurrentWindow();\r\n\t\tfocusedIndex = index;\r\n\t\t\r\n\t\tif(currentWindow.top <= index && index < currentWindow.bottom) {\r\n\t\t\treturn stateMachine.trigger(_tableStateMachine_js__WEBPACK_IMPORTED_MODULE_1__[\"TableAction\"].SCROLL, () => {\r\n\t\t\t\treturn scrollTo(index);\r\n\t\t\t});\r\n\t\t}\r\n\r\n\t\t/*\r\n\t\t * Else: If desired index is not within currently active area,\r\n\t\t * the table will be rebuilt from scratch. \r\n\t\t */\r\n\t\treturn stateMachine.trigger(_tableStateMachine_js__WEBPACK_IMPORTED_MODULE_1__[\"TableAction\"].RESET).then(() => {\r\n\t\t\treturn restart(index);\r\n\t\t});\r\n\t};\r\n\t\r\n\t\r\n\t/*\r\n\t * Draw the first row in the table. settings.trHeight will be calculated \r\n\t * if desired and necessary.\r\n\t */\r\n\tconst start = function(index, calcTrHeight) {\r\n\t\treturn stateMachine.trigger(_tableStateMachine_js__WEBPACK_IMPORTED_MODULE_1__[\"TableAction\"].START, () => {\r\n\t\t\treturn new Promise((resolve, reject) => {\r\n\t\t\t\tconst finalize = function() {\r\n\t\t\t\t\tconst paddingTop = index * settings.trHeight;\r\n\t\t\t\t\tconst height = settings.trHeight * settings.data.length;\r\n\t\t\t\t\tconst paddingBottom = height - paddingTop - settings.trHeight;\r\n\t\t\t\t\r\n\t\t\t\t\ttable.css({\r\n\t\t\t\t\t\t'margin-bottom': paddingBottom,\r\n\t\t\t\t\t\t'margin-top': paddingTop,\r\n\t\t\t\t\t});\r\n\t\t\t\t\t\r\n\t\t\t\t\tresolve();\r\n\t\t\t\t};\r\n\t\t\t\t\r\n\t\t\t\t// remove all table elements\r\n\t\t\t\tsettings.deleteFn(0);\r\n\t\t\t\t\r\n\t\t\t\t// start at element to be focused\r\n\t\t\t\tnextIter.setCurrent(index);\r\n\t\t\t\tprevIter.setCurrent(index);\r\n\t\t\t\t\r\n\t\t\t\t// insert new row\r\n\t\t\t\tif(nextIter.hasNext()) {\r\n\t\t\t\t\tsettings.appendFn([nextIter.next()]);\r\n\t\t\t\t\tif(calcTrHeight) {\r\n\t\t\t\t\t\t/*\r\n\t\t\t\t\t\t * Height calculation: After insterting the first row,\r\n\t\t\t\t\t\t * we wait for it to get drawn. When it is ready, we\r\n\t\t\t\t\t\t * use the first row's height to calculate margins.\r\n\t\t\t\t\t\t */\r\n\t\t\t\t\r\n\t\t\t\t\t\twaitForRow().then(\r\n\t\t\t\t\t\t\t(row) => {\r\n\t\t\t\t\t\t\t\tconst cs = window.getComputedStyle(row);\r\n\t\t\t\t\t\t\t\tconst cssHeight = cs.getPropertyValue('height');\r\n\t\t\t\t\t\t\t\tconst matches = cssHeight.match(/([\\.\\d]+)px/);\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\tif(matches) {\r\n\t\t\t\t\t\t\t\t\tsettings.trHeight = parseFloat(matches[1]);\r\n\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\tsettings.trHeight = row.offsetHeight;\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\t\t() => {\r\n\t\t\t\t\t\t\t\tif(settings.debug) {\r\n\t\t\t\t\t\t\t\t\tconsole.log('[jQuery.Lazytable] start table draw failed due to rejected row promise');\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}).then(finalize);\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tfinalize();\r\n\t\t\t\t\t}\r\n\t\t\t\t} else {\r\n\t\t\t\t\tfinalize();\r\n\t\t\t\t}\t\t\t\r\n\t\t\t});\t\t\t\r\n\t\t});\r\n\t};\r\n\t\r\n\t\r\n\t/*\r\n\t * Restore table after table window div has been resized.\r\n\t */\r\n\tconst onResize = function() {\r\n\t\treturn waitForRow().then(\r\n\t\t\t(row) => {\r\n\t\t\t\tconst cssHeight = window.getComputedStyle(row).getPropertyValue('height');\r\n\t\t\t\tvar matches;\r\n\t\t\t\tconst height = (matches = cssHeight.match(/([\\.\\d]+)px/)) ? parseFloat(matches[1]) : row.offsetHeight;\r\n\t\t\t\r\n\t\t\t\tif((height > 0) && (height != settings.trHeight)) {\r\n\t\t\t\t\t// height has changed\r\n\t\t\t\t\tsettings.trHeight = height;\r\n\t\t\t\t\r\n\t\t\t\t\tconst startIndex = focusedIndex ? focusedIndex : Math.min(Math.floor((prevIter.getCurrent() + nextIter.getCurrent()) / 2), settings.data.length -1);\r\n\t\t\t\t\r\n\t\t\t\t\treturn restart(startIndex);\r\n\t\t\t\t}\r\n\t\t\t\r\n\t\t\t\tif(focusedIndex) {\r\n\t\t\t\t\t// height has not changed, but focuse row \r\n\t\t\t\t\t// might have gone out of visible area\r\n\t\t\t\t\treturn onFocus(focusedIndex);\r\n\t\t\t\t}\t\t\t\r\n\t\t\t},\r\n\t\t\t() => {\r\n\t\t\t\tif(settings.debug) {\r\n\t\t\t\t\tconsole.log('[jQuery.Lazytable] Resize failed due to rejected row promise');\t\t\t\t\t\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t);\r\n\t};\r\n\r\n\r\n\tconst onRefresh = function() {\r\n\t\treturn waitForRow().then(\r\n\t\t\t(row) => {\r\n\t\t\t\treturn stateMachine.trigger(_tableStateMachine_js__WEBPACK_IMPORTED_MODULE_1__[\"TableAction\"].RESET).then(() => {\r\n\t\t\t\t\t\tif(focusedIndex)\r\n\t\t\t\t\t\t\treturn restart(focusedIndex);\r\n\t\t\t\t\t\telse\r\n\t\t\t\t\t\t\treturn restart(1)\r\n\t\t\t\t});\r\n\t\t\t},\r\n\t\t\t() => {\r\n\t\t\t\tif(settings.debug) {\r\n\t\t\t\t\tconsole.log('[jQuery.Lazytable] Resize failed due to rejected row promise');\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t);\r\n\t};\r\n\t\r\n\t\r\n\t/*\r\n\t * Start all up.\r\n\t */\r\n\tconst init = function() {\r\n\t\tif(settings.debug) {\r\n\t\t\tstateMachine.onStateChange((oldState, newState) => {\r\n\t\t\t\tconsole.log('[jQuery.Lazytable] State change: ' + oldState + ' -> ' + newState);\r\n\t\t\t});\r\n\t\t\tstateMachine.onStateEnter(_tableStateMachine_js__WEBPACK_IMPORTED_MODULE_1__[\"TableState\"].IDLE, () => {\r\n\t\t\t\tconst n = nextIter.getCurrent() - prevIter.getCurrent();\r\n\t\t\t\tconst marginTopStr = table.css('margin-top');\r\n\t\t\t\tconst marginTop = parseInt(marginTopStr.substr(0, marginTopStr.length - 2));\r\n\t\t\t\tconst marginBotStr = table.css('margin-bottom');\r\n\t\t\t\tconst marginBot = parseInt(marginBotStr.substr(0, marginBotStr.length - 2));\r\n\t\t\t\tconsole.log('[jQuery.Lazytable] nVisible: ' + n);\r\n\t\t\t\tconsole.assert(((marginTop + marginBot) == (settings.data.length - n) * settings.trHeight), {\r\n\t\t\t\t\t\"message\": \"margin claculation wrong\",\r\n\t\t\t\t\t\"nTotal\": settings.data.length, \r\n\t\t\t\t\t\"nVisible\": n,\r\n\t\t\t\t\t\"top\": marginTop,\r\n\t\t\t\t\t\"bottom\": marginBot,\r\n\t\t\t\t\t\"trHeight\": settings.trHeight\r\n\t\t\t\t});\r\n\t\t\t});\r\n\t\t}\r\n\t\t\r\n\t\t\r\n\t\t// Add descriptive classes to the table's DOM element based on the\r\n\t\t// current state (the state machine's state):\r\n\t\t//  - class \"empty\" is set in state \"empty\"\r\n\t\t//  - class \"loading\" is set in any state other than \"empty\" or \"idle\"\r\n\t\ttable.addClass('empty'); // no rows added yet -> inital state is \"EMPTY\"\r\n\t\tstateMachine.onStateLeave(_tableStateMachine_js__WEBPACK_IMPORTED_MODULE_1__[\"TableState\"].EMPTY, () => {\r\n\t\t\ttable.removeClass('empty');\r\n\t\t\ttable.addClass('loading');\r\n\t\t});\r\n\t\tstateMachine.onStateEnter(_tableStateMachine_js__WEBPACK_IMPORTED_MODULE_1__[\"TableState\"].IDLE, () => {\r\n\t\t\ttable.removeClass('loading');\r\n\t\t});\r\n\t\tstateMachine.onStateLeave(_tableStateMachine_js__WEBPACK_IMPORTED_MODULE_1__[\"TableState\"].IDLE, () => {\r\n\t\t\ttable.addClass('loading');\r\n\t\t});\r\n\t\t\r\n\t\t\r\n\t\t// remove old event handlers\r\n\t\tthat.off('scroll');\r\n\t\tthat.off('lazytable:focus');\r\n\t\tthat.off('lazytable:resize');\r\n\r\n\t\t\r\n\t\t// Temporarily setting the overflow property to 'hidden'\r\n\t\t// during initialisation fixes a bug related to scrollTop \r\n\t\t// being unchangeable.\r\n\t\t// See: https://code.google.com/p/android/issues/detail?id=19625#c25\r\n\t\tthat.css({'overflow-y': 'hidden'});\r\n\r\n\t\tconst finalize = () => {\r\n\t\t\t// reset overflow to 'scroll'\r\n\t\t\tthat.css({'overflow-y': 'scroll'});\r\n\r\n\t\t\tif(typeof(settings.onInit) == 'function') {\r\n\t\t\t\tsettings.onInit();\r\n\t\t\t}\r\n\r\n\t\t\t// add event handlers\r\n\t\t\tthat.on('scroll', function() {\r\n\t\t\t\t// use an animationFrame to prevent from scroll-linked effects\r\n\t\t\t\twindow.requestAnimationFrame(onUpdate);\r\n\t\t\t});\r\n\t\t\tthat.on('lazytable:focus', function(event, index, callback) {\r\n\t\t\t\tonFocus(index).then(function() {\r\n\t\t\t\t\tif(typeof(callback) === 'function') {\r\n\t\t\t\t\t\tcallback();\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\t\t\t});\r\n\t\t\tthat.on('lazytable:resize', function() {\r\n\t\t\t\tif(!resizeAnimationWorking && settings.data.length > 0) {\r\n\t\t\t\t\tresizeAnimationWorking = true;\r\n\t\t\t\t\tonResize().then(onUpdate).finally(function() {\r\n\t\t\t\t\t\tresizeAnimationWorking = false;\r\n\t\t\t\t\t});\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t\tthat.on('lazytable:refresh', function() {\r\n\t\t\t\tif(!resizeAnimationWorking && settings.data.length > 0) {\r\n\t\t\t\t\tresizeAnimationWorking = true;\r\n\t\t\t\t\tonRefresh().then(onUpdate).finally(function() {\r\n\t\t\t\t\t\tresizeAnimationWorking = false;\r\n\t\t\t\t\t});\r\n\t\t\t\t}\r\n\t\t\t});\r\n\r\n\t\t};\r\n\t\t\r\n\t\tif(settings.data.length > 0) {\r\n\t\t\tstart(settings.startIndex, true).then(function() {\r\n\t\t\t\treturn center(settings.startIndex);\r\n\t\t\t}).then(onUpdate).then(finalize);\t\t\t\r\n\t\t} else {\r\n\t\t\t// stay in empty state\r\n\t\t\tfinalize();\r\n\t\t}\r\n\t};\r\n\tinit();\r\n\t\r\n\treturn this;\r\n}\n\n//# sourceURL=webpack:///./src/lib/lazyTable.js?");

/***/ }),

/***/ "./src/lib/tableRowIterator.js":
/*!*************************************!*\
  !*** ./src/lib/tableRowIterator.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TableRowIterator; });\n/**\r\n * This object will act as a seekable iterator over a dataset.\r\n * It uses a generatorFunction that processes each row before it\r\n * is delivered to the caller.\r\n */\r\nfunction TableRowIterator(generatorFunction, rows) {\r\n\tthis.generatorFunction = generatorFunction;\r\n\tthis.rows = rows;\r\n\tthis.current = 0;\r\n}\r\nTableRowIterator.prototype.clone = function() {\r\n\tvar newIt = new TableRowIterator(this.generatorFunction);\r\n\tnewIt.rows = this.rows;\r\n\tnewIt.current = this.current;\r\n\treturn newIt;\r\n};\r\nTableRowIterator.prototype.getCurrent = function() {\r\n\treturn this.current;\r\n};\r\n\r\nTableRowIterator.prototype.setCurrent = function(index) {\r\n\tif(index >= 0 && index < this.rows.length) {\r\n\t\tthis.current = index;\r\n\t}\r\n};\r\n\r\nTableRowIterator.prototype.next = function() {\r\n\treturn this.generatorFunction(this.rows[this.current++]);\r\n};\r\n\r\nTableRowIterator.prototype.hasNext = function() {\r\n\treturn this.current < this.rows.length;\r\n};\r\n\r\nTableRowIterator.prototype.prev = function() {\r\n\treturn this.generatorFunction(this.rows[--this.current]);\r\n};\r\n\r\nTableRowIterator.prototype.hasPrev = function() {\r\n\treturn this.current > 0;\r\n};\r\n\t\r\n\n\n//# sourceURL=webpack:///./src/lib/tableRowIterator.js?");

/***/ }),

/***/ "./src/lib/tableStateMachine.js":
/*!**************************************!*\
  !*** ./src/lib/tableStateMachine.js ***!
  \**************************************/
/*! exports provided: TableState, TableAction, TableStateMachine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TableState\", function() { return TableState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TableAction\", function() { return TableAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TableStateMachine\", function() { return TableStateMachine; });\n/* harmony import */ var _util_stateMachine_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/stateMachine.js */ \"./src/util/stateMachine.js\");\n/* ******************************************************************\r\n * \r\n *                                     scroll\r\n *                                     +----+\r\n *                                     |    |\r\n *          start             scroll   v    |  scroll-complete\r\n * (EMPTY) ------> (STARTING) -----> (UPDATING) -------------> (IDLE)\r\n *                   ^    |            |    ^                   |  |\r\n *                   |    |            |    |       scroll      |  |\r\n *                   |    |       reset|    +-------------------+  |\r\n *                   |    |            |                           |\r\n *                   |    |  reset     v               reset       |\r\n *                   |    +--------> (RESETTING) <-----------------+\r\n *                   |                 |  |   ^\r\n *                   +-----------------+  |   |\r\n *                         start          +---+\r\n *                                        scroll\r\n *\r\n * ******************************************************************\r\n */\r\n\r\n\r\n\r\nconst TableState = {\r\n\tEMPTY:     1, /* Empty table */\r\n\tIDLE:      2, /* Table drawn - no drawings pending */\r\n\tSTARTING:  3, /* First row is being drawn - other rows pending */\r\n\tUPDATING:  4, /* Performing pending draws */\r\n\tRESETTING: 5  /* Cancel all drawing operations */\r\n};\r\n\r\nconst TableAction = {\r\n\tSTART:           1,\r\n\tRESET:           2,\r\n\tSCROLL:          3,\r\n\tSCROLL_COMPLETE: 4\r\n};\r\n\r\nclass TableStateMachine extends _util_stateMachine_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\tconstructor() {\r\n\t\tsuper(TableState.EMPTY);\r\n\t\tthis.addTransition(TableState.EMPTY, TableAction.START, TableState.STARTING);\r\n\t\t\r\n\t\tthis.addTransition(TableState.STARTING, TableAction.SCROLL, TableState.UPDATING);\r\n\t\tthis.addTransition(TableState.STARTING, TableAction.RESET, TableState.RESETTING);\r\n\t\t\r\n\t\tthis.addTransition(TableState.UPDATING, TableAction.SCROLL_COMPLETE, TableState.IDLE);\r\n\t\tthis.addTransition(TableState.UPDATING, TableAction.SCROLL, TableState.UPDATING);\r\n\t\tthis.addTransition(TableState.UPDATING, TableAction.RESET, TableState.RESETTING);\r\n\t\t\r\n\t\tthis.addTransition(TableState.IDLE, TableAction.SCROLL, TableState.UPDATING);\r\n\t\tthis.addTransition(TableState.IDLE, TableAction.RESET, TableState.RESETTING);\r\n\t\t\r\n\t\tthis.addTransition(TableState.RESETTING, TableAction.RESET, TableState.RESETTING);\r\n\t\tthis.addTransition(TableState.RESETTING, TableAction.START, TableState.STARTING);\r\n\t\tthis.addTransition(TableState.RESETTING, TableAction.SCROLL, TableState.RESETTING);\r\n\t}\r\n};\r\n\n\n//# sourceURL=webpack:///./src/lib/tableStateMachine.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _polyfills_requestAnimationFrame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills/requestAnimationFrame.js */ \"./src/polyfills/requestAnimationFrame.js\");\n/* harmony import */ var _polyfills_requestAnimationFrame_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polyfills_requestAnimationFrame_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _polyfills_performance_now_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polyfills/performance.now.js */ \"./src/polyfills/performance.now.js\");\n/* harmony import */ var _polyfills_performance_now_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_polyfills_performance_now_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_lazyTable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/lazyTable.js */ \"./src/lib/lazyTable.js\");\n\r\n\r\n\r\n\r\n(function($) {\r\n\t$.fn.LazyTable = _lib_lazyTable_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\r\n}(jQuery));\r\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/polyfills/performance.now.js":
/*!******************************************!*\
  !*** ./src/polyfills/performance.now.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// window.performance.now polyfill -- available at: https://gist.github.com/paulirish/5438650\r\n\r\n// @license http://opensource.org/licenses/MIT\r\n// copyright Paul Irish 2015\r\n\r\n\r\n// Date.now() is supported everywhere except IE8. For IE8 we use the Date.now polyfill\r\n//   github.com/Financial-Times/polyfill-service/blob/master/polyfills/Date.now/polyfill.js\r\n// as Safari 6 doesn't have support for NavigationTiming, we use a Date.now() timestamp for relative values\r\n\r\n// if you want values similar to what you'd get with real perf.now, place this towards the head of the page\r\n// but in reality, you're just getting the delta between now() calls, so it's not terribly important where it's placed\r\n\r\n(function(global){\r\n  if (\"performance\" in window == false) {\r\n      window.performance = {};\r\n  }\r\n  \r\n  Date.now = (Date.now || function () {  // thanks IE8\r\n\t  return new Date().getTime();\r\n  });\r\n\r\n  if (\"now\" in window.performance == false){\r\n    var nowOffset = Date.now();\r\n    \r\n    if (performance.timing && performance.timing.navigationStart){\r\n      nowOffset = performance.timing.navigationStart\r\n    }\r\n\r\n    window.performance.now = function now(){\r\n      return Date.now() - nowOffset;\r\n    }\r\n  }\r\n})();\n\n//# sourceURL=webpack:///./src/polyfills/performance.now.js?");

/***/ }),

/***/ "./src/polyfills/requestAnimationFrame.js":
/*!************************************************!*\
  !*** ./src/polyfills/requestAnimationFrame.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// requestAnimationFrame polyfill -- available at: https://gist.github.com/paulirish/1579671\r\n// copyright Paul Irish\r\n\r\n// http://paulirish.com/2011/requestanimationframe-for-smart-animating/\r\n// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating\r\n\r\n// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel\r\n\r\n// MIT license\r\n\r\n(function(global) {\r\n    var lastTime = 0;\r\n    var vendors = ['ms', 'moz', 'webkit', 'o'];\r\n    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {\r\n        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];\r\n        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] \r\n                                   || window[vendors[x]+'CancelRequestAnimationFrame'];\r\n    }\r\n \r\n    if (!window.requestAnimationFrame)\r\n        window.requestAnimationFrame = function(callback, element) {\r\n            var currTime = new Date().getTime();\r\n            var timeToCall = Math.max(0, 16 - (currTime - lastTime));\r\n            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, \r\n              timeToCall);\r\n            lastTime = currTime + timeToCall;\r\n            return id;\r\n        };\r\n \r\n    if (!window.cancelAnimationFrame)\r\n        window.cancelAnimationFrame = function(id) {\r\n            clearTimeout(id);\r\n        };\r\n})();\r\n\n\n//# sourceURL=webpack:///./src/polyfills/requestAnimationFrame.js?");

/***/ }),

/***/ "./src/util/stateMachine.js":
/*!**********************************!*\
  !*** ./src/util/stateMachine.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StateMachine; });\n/**\r\n * This class is a generic implementation of a finite state machine.\r\n * \r\n * You should initialize it with a start state and add some transitions to\r\n * the machine. You can then trigger state transitions using the \"trigger\"\r\n * method by providing the appropriate action definition and a callback or \r\n * promise that should be performed during that transition.\r\n */\r\nclass StateMachine {\r\n\t\r\n\t/**\r\n\t * Create a new StateMachine with a given initial state. The machine does \r\n\t * not have any transitions yet. You must add transitions before calling \r\n\t * the \"trigger\" method for the first time. Triggering an undefined \r\n\t * (state,action)-pair will raise an exception.\r\n\t */\r\n\tconstructor(initialState) {\r\n\t\tthis.state = initialState;\r\n\t\tthis.callbacks = [];\r\n\t\tthis.transitions = {};\r\n\t}\r\n\t\r\n\t/**\r\n\t * Add a transition from oldState when receiving a given action.\r\n\t * The new state will be newState.\r\n\t */\r\n\taddTransition(oldState, action, newState) {\r\n\t\tif(!this.transitions[oldState]) {\r\n\t\t\tthis.transitions[oldState] = {};\r\n\t\t}\r\n\t\tthis.transitions[oldState][action] = newState;\r\n\t}\r\n\t\r\n\t_transitState(newState) {\r\n\t\tconst oldState = this.state;\r\n\t\tthis.state = newState;\r\n\t\tfor(let cb of this.callbacks) {\r\n\t\t\tcb(oldState, newState);\r\n\t\t}\r\n\t}\r\n\t\r\n\t/**\r\n\t * Trigger an action. The state transition will be done \r\n\t * - immediately, if \"promise\" is a function or\r\n\t * - or when \"promise\" is resolved, in case it is a Promise.\r\n\t * \r\n\t * This method may throw an exception when no appropriate \r\n\t * transition has been defined.\r\n\t */\r\n\ttrigger(action, promise) {\r\n\t\tconst that = this;\r\n\t\tif(this.transitions[this.state] && this.transitions[this.state][action]) {\r\n\t\t\treturn new Promise((resolve, reject) => {\r\n\t\t\t\tconst finalize = () => {\r\n\t\t\t\t\tthat._transitState(that.transitions[that.state][action]);\r\n\t\t\t\t\tresolve();\r\n\t\t\t\t};\r\n\t\t\t\tif(typeof promise == 'function') {\r\n\t\t\t\t\tpromise().then(finalize);\r\n\t\t\t\t} else {\r\n\t\t\t\t\tfinalize();\r\n\t\t\t\t}\t\t\t\r\n\t\t\t});\r\n\t\t}\r\n\t\t\r\n\t\tthrow 'Undefined state transition: {state: ' + this.state + ', action: ' + action + '}';\r\n\t}\r\n\t\r\n\t\r\n\t/**\r\n\t * Get the current state.\r\n\t */\r\n\tgetState() {\r\n\t\treturn this.state;\r\n\t}\r\n\t\r\n\t\r\n\t/**\r\n\t * Callback function that will be executed when a given state is entered.\r\n\t */\r\n\tonStateEnter(state, callback) {\r\n\t\tif(typeof callback == 'function') {\r\n\t\t\tthis.onStateChange(function(oldState, newState) {\r\n\t\t\t\tif(newState == state) {\r\n\t\t\t\t\tcallback();\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t}\r\n\t}\r\n\t\r\n\t\r\n\t/**\r\n\t * Callback function that will be executed when a given state is left.\r\n\t */\r\n\tonStateLeave(state, callback) {\r\n\t\tif(typeof callback == 'function') {\r\n\t\t\tthis.onStateChange(function(oldState, newState) {\r\n\t\t\t\tif(oldState == state) {\r\n\t\t\t\t\tcallback();\r\n\t\t\t\t}\r\n\t\t\t})\r\n\t\t}\r\n\t}\r\n\t\r\n\t\r\n\t/**\r\n\t * Callback function that will be executed on any state change.\r\n\t */\r\n\tonStateChange(callback) {\r\n\t\tif(typeof callback == 'function') {\r\n\t\t\tthis.callbacks.push(callback);\r\n\t\t}\r\n\t}\r\n};\r\n\n\n//# sourceURL=webpack:///./src/util/stateMachine.js?");

/***/ }),

/***/ 0:
/*!*****************************************************************!*\
  !*** multi core-js/es6/symbol core-js/fn/promise ./src/main.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! core-js/es6/symbol */\"./node_modules/core-js/es6/symbol.js\");\n__webpack_require__(/*! core-js/fn/promise */\"./node_modules/core-js/fn/promise.js\");\nmodule.exports = __webpack_require__(/*! ./src/main.js */\"./src/main.js\");\n\n\n//# sourceURL=webpack:///multi_core-js/es6/symbol_core-js/fn/promise_./src/main.js?");

/***/ })

/******/ });

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");

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
    var tableWrapper = $(this).closest('.outer-center').find('.tableWrapper')

    var file = $(hex_editor).data('file_content')

    if (typeof file != 'undefined') {

        let markers = $(hex_editor).data('markers')
        if (typeof markers === 'undefined') {
            $(hex_editor).data('markers', new Map())
        }

        clear_hex_markers(hex_editor)

        let table = $(hex_editor).data('table')
        if(table !== 'undefined')
        {
            table.clearData();
        }

        Object.keys(rule_file.rules).forEach(function (key) {
            var rule = rule_file.rules[key]
            worker.postMessage({file: file, rule_name: key, rule: rule, hex_editor_id: $(hex_editor).attr('id')})
            worker.onmessage = function (event) {
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

function clear_hex_markers(hex_editor)
{
    $(hex_editor).data('markers', new Map())
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




/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = jQuery;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	__webpack_require__("./src/js/external/jquery.layout_and_plugins.min.js");
/******/ 	__webpack_require__("./src/js/external/jquery.lazytable.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	main = __webpack_exports__;
/******/ 	
/******/ })()
;