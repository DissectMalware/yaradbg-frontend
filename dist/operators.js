var operators;(()=>{"use strict";var e={d:(t,a)=>{for(var r in a)e.o(a,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:a[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function a(e,t,a,c){let _=null,f=null,v=new Map;for(let h=0;h<t.length;h++)if(f=t[h],_=null,"op"in f){for(let t=0;t<f.args.length;t++)f.args[t]=s(f.args[t],c,v,e);switch(f.op){case"at":_=r(f.args[0],f.args[1],c.strings);break;case"of":_=l(f.args[0],f.args[1],c.strings);break;case"+":d=f.args[0],b=f.args[1],_={name:"add_res",val:p(d.val)+p(b.val),start_pos:d.start_pos,end_pos:d.end_pos};break;case"and":_=i(f.args[0],f.args[1]);break;case"or":_=u(f.args[0],f.args[1]);break;case"uint8":case"uint8be":_=g(f.args[1],e,1);break;case"uint16":_=g(f.args[1],e,2);break;case"uint32":_=g(f.args[1],e,4);break;case"uint16be":_=g(f.args[1],e,2,!1,!1);break;case"uint32be":_=g(f.args[1],e,4,!1,!1);break;case"int8":case"int8be":_=g(f.args[1],e,1,!0);break;case"int16":_=g(f.args[1],e,2,!0);break;case"int32":_=g(f.args[1],e,4,!0);break;case"int16be":_=g(f.args[1],e,2,!0,!1);break;case"int32be":_=g(f.args[1],e,4,!0,!1);break;case"identifier":_=o(f.args[0],a);break;case"<":case"<=":case">":case">=":case"==":case"!=":_=n(f.op,f.args[0],f.args[1]);break;default:console.log(`"${f.op}" is not supported yet`),_={name:`${f.op}_unsupported`,val:!1,start_pos:f.args[0].start_pos,end_pos:f.args[f.args.length-1].end_pos}}null!==_&&(v.set(f.id,_),f.result=_)}var d,b;c.condition=t}function r(e,t,a){let r=a.get(e.val_str.slice(1)),n=!1;for(let e=0;e<r.length;e++)if(r[e].start==parseInt(t.val)){n=!0;break}return{name:"at_res",val:n,start_pos:e.start_pos,end_pos:t.end_pos}}function n(e,t,a){let r="NUMBER"==t.name?p(t.val):parseInt(t.val),n="NUMBER"==a.name?p(a.val):parseInt(a.val);return{name:"logical_comp_res",val:{"<":function(e,t){return e<t},"<=":function(e,t){return e<=t},">":function(e,t){return e>t},">=":function(e,t){return e>=t},"==":function(e,t){return e==t},"!=":function(e,t){return e!=t}}[e](r,n),start_pos:t.start_pos,end_pos:a.end_pos}}function s(e,t,a,r){if("Task"===e.name)return a.get(e.val);if("STRING_IDENTIFIER"==e.name){let a=e.val.slice(1);return e.val_str=e.val,e.val=t.strings.get(a).length>=1,e}if("STRING_COUNT"==e.name){let a=e.val.slice(1);return e.val=t.strings.get(a).length,e}return"FILESIZE"===e.name?(e.val=r.length,e):e}function o(e,t){let a=!1;return t.has(e.val)&&(a=t.get(e.val).condition[t[e.val].condition.length-1].result.val),{name:"identifier_res",val:a,start_pos:e.start_pos,end_pos:e.end_pos}}function l(e,t,a){let r=[];if("THEM"===t.name)for(let e of a.keys())r.push(e);else if("STRING_IDENTIFIER_WITH_WILDCARD"===t.name){let e=(n=t.val,n.length>1&&("$"===n[0]||"#"===n[0]||"@"===n[0])?n.slice(1):n).slice(0,-1);for(let t of a.keys())t.startsWith(e)&&r.push(t)}var n;let s=0;s="ALL"===e.name?r.length:"ANY"===e.name?1:p(e.val);let o=!1;if(s>0){for(let e=0;e<r.length;e++)if(a.get(r[e]).length>0&&(s-=1,0===s)){o=!0;break}}else o=!0;return{name:"of_res",val:o,start_pos:e.start_pos,end_pos:e.end_pos}}function i(e,t){return{name:"and_res",val:c(e.val)&&c(t.val),start_pos:e.start_pos,end_pos:e.end_pos}}function u(e,t){return{name:"or_res",val:c(e.val)||c(t.val),start_pos:e.start_pos,end_pos:e.end_pos}}function g(e,t,a,r=!1,n=!0){let s=NaN,o=parseInt(e.val);if(o+a<t.buffer.byteLength){let e=new DataView(t.buffer,o,a);switch(a){case 1:o<t.length&&(s=r?e.getInt8(0):e.getUint8(0));break;case 2:o<t.length-1&&(s=r?e.getInt16(0,n):e.getUint16(0,n));break;case 4:o<t.length-3&&(s=r?e.getInt32(0,n):e.getUint32(0,n))}}return{name:`${r?"":"u"}int${8*a}${n?"":"be"}_res`,val:s,start_pos:e.start_pos,end_pos:e.end_pos}}function p(e){if("number"==typeof e)return e;let t=0;return e.startsWith("0x")?t=parseInt(e,16):(t=parseInt(e),e.endsWith("KB")?t*=1e3:e.endsWith("MB")&&(t*=1e6)),t}function c(e){return"boolean"==typeof e?e:function(e){let t=!1;return"true"===e&&(t=!0),t}(e)}e.r(t),e.d(t,{eval_condition:()=>a}),operators=t})();