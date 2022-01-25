var operators;(()=>{"use strict";var e={d:(a,r)=>{for(var t in r)e.o(r,t)&&!e.o(a,t)&&Object.defineProperty(a,t,{enumerable:!0,get:r[t]})},o:(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},a={};function r(e,a,r){let c=null,g=null,u=new Map;for(let p=0;p<a.length;p++)if(g=a[p],c=null,"op"in g){for(let e=0;e<g.args.length;e++)g.args[e]=(b=g.args[e],f=u,"Task"===b.name?f.get(b.val):b);switch(g.op){case"of":c=t(g.args[0],g.args[1],r.strings);break;case"+":v=g.args[0],k=g.args[1],c={name:"add_res",val:o(v.val)+o(k.val),line:v.line,col:v.col};break;case"==":c=s(g.args[0],g.args[1]);break;case"and":c=n(g.args[0],g.args[1]);break;case"or":c=l(g.args[0],g.args[1]);break;case"uint8":case"uint8be":c=i(g.args[0],e,1);break;case"uint16":c=i(g.args[0],e,2);break;case"uint32":c=i(g.args[0],e,4);break;case"uint16be":c=i(g.args[0],e,2,!1,!1);break;case"uint32be":c=i(g.args[0],e,4,!1,!1);break;case"int8":case"int8be":c=i(g.args[0],e,1,!0);break;case"int16":c=i(g.args[0],e,2,!0);break;case"int32":c=i(g.args[0],e,4,!0);break;case"int16be":c=i(g.args[0],e,2,!0,!1);break;case"int32be":c=i(g.args[0],e,4,!0,!1)}null!==c&&(u.set(g.id,c),g.result=c)}var b,f,v,k}function t(e,a,r){let t=[];if(e="ALL"===e.name?r.size:o(e.val),"THEM"===a.name)for(let e of r.keys())t.push(e);else if("STRING_IDENTIFIER_WITH_WILDCARD"===a.name){let e=(n=a.val,n.length>1&&("$"===n[0]||"#"===n[0]||"@"===n[0])?n.slice(1):n).slice(0,-1);for(let a of r.keys())a.startsWith(e)&&t.push(a)}var n;let l=!1;if(e>0){for(let a=0;a<t.length;a++)if(r.get(t[a]).length>0&&0==(e-=1)){l=!0;break}}else l=!0;return{name:"of_res",value:l,line:e.line,col:e.col}}function n(e,a){return{name:"and_res",val:c(e.val)&&c(a.val),line:e.line,col:e.col}}function l(e,a){return{name:"or_res",val:c(e.val)||c(a.val),line:e.line,col:e.col}}function s(e,a){let r=o(e.val);isNaN(r)&&(r=e.val);let t=o(a.val);return isNaN(t)&&(t=a.val),{name:"eq_res",val:r===t,line:e.line,col:e.col}}function i(e,a,r,t=!1,n=!0){let l,s=parseInt(e.val),i=new DataView(a.buffer,s,r);switch(r){case 1:s<a.length&&(l=t?i.getInt8(0):i.getUint8(0));break;case 2:s<a.length-1&&(l=t?i.getInt16(0,n):i.getUint16(0,n));break;case 4:s<a.length-3&&(l=t?i.getInt32(0,n):i.getUint32(0,n))}return{name:`${t?"":"u"}int${8*r}${n?"":"be"}_res`,val:l,line:e.line,col:e.col}}function o(e){return"number"==typeof e?e:e.startsWith("0x")?parseInt(e,16):parseInt(e)}function c(e){return"boolean"==typeof e?e:function(e){let a=!1;return"true"===e&&(a=!0),a}(e)}e.r(a),e.d(a,{eval_condition:()=>r}),operators=a})();