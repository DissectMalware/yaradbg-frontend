var worker;(()=>{if("function"==typeof importScripts){function e(e,t=!1){let r=[];e=(e=(e=(e=e.replaceAll("\\\\","\\")).replaceAll("\\n","\n")).replaceAll("\\r","\r")).replaceAll("\\t","\t");for(let n=0;n<e.length;n++)r.push(`chr ${e.charCodeAt(n).toString(16)}`),t&&r.push("chr 0");return r.push("match"),r}function t(e){let t={no_case:!1,ascii:!1,wide:!1};for(let r=0;r<e.length;r++)switch(e[r].modifier){case"nocase":t.no_case=!0;break;case"ascii":t.ascii=!0;break;case"wide":t.wide=!0}return 0==t.wide&&(t.ascii=!0),t}function r(e,t,r=!1){let n=0,l=[],s=null,c=function(e){let t=[],r=e,n=!1,l=!1,i=null;for(let e=0;e<r.length;e++){if(i=r[e].split(/[ ,]/),"chr"==i[0])n=i[1].startsWith("?")?0:240,l=i[1].endsWith("?")?0:15,i[1]=parseInt(i[1].replace("?","0"),16),i.push(l|n);else if("chrc"==i[0])for(let e=1;e<i.length;e++)i[e]=parseInt(i[e],16);else"jmp"==i[0]?i[1]=o(e,i[1]):i[0].startsWith("split")?(i[1]=o(e,i[1]),i[2]=o(e,i[2])):"ignore"==i[0]&&(i[1]=parseInt(i[1]),i[2]=parseInt(i[2]));t.push(i)}return t}(t);"chr"==c[0][0]&&c[0][1];let a=[];for(let e=0;e<10;e++)a.push({pc:0,priority:0});let p=performance.now();for(;n<e.length-1;)s=i(e,c,n,a,r),null!=s?(n=s.start+1,l.push(s)):n+=1;return(performance.now()-p).toString(),l}function n(e,t,r){let n=null;return 0!=e.length?(n=e.pop(),n.pc=t,n.priority=r):n={pc:t,priority:r},n}function l(e,t){e.push(...t),t.length=0}function i(e,t,r,i,o=!1){let c=[];c.push(n(i,0,0));let a=[],p=0,u=null,h=null,f=!1,g=null,d=[],y=null,_=!1,m=o?2:1;for(let b=r;b<e.length-1;b+=m){_=!1;for(let l=0;l<c.length&&0==_;l++)switch(p=c[l].pc,h=t[p],u=h[0],u){case"chr":if(f=0==h[2]||h[1]==(e[b]&h[2]),f&&o&&0!=e[b+1]&&(f=!1),!1===f){if(0==d.length)break;y=d.pop(),b=y.end,p=y.ignore_loc,y.end-=1,y.start<=y.end&&d.push(y)}s(a,n(i,p+1,c[l].priority));break;case"chrc":let t=1+(e[b]>>3),u=1<<(7&e[b]);if(f=0!=(h[t]&u),!1===f){if(0==d.length)break;y=d.pop(),b=y.end,p=y.ignore_loc,y.end-=1,y.start<=y.end&&d.push(y)}a.push(n(i,p+1,c[l].priority));break;case"ignore":-1==h[2]&&(h[2]=e.length),d.push({start:b+h[1]-1,end:b+h[2]-1,ignore_loc:p}),b=b+h[1]-1,s(a,n(i,p+1,c[l].priority));break;case"splitjmp":s(c,n(i,h[1],c[l].priority)),s(c,n(i,h[2],c[l].priority+1));break;case"splitstay":case"split":s(c,n(i,h[1],c[l].priority+1)),s(c,n(i,h[2],c[l].priority));break;case"jmp":s(c,n(i,h[1],c[l].priority));break;case"match":(null==g||g.end<b-1)&&(g={start:r,end:b-1,match:!0}),_=!0}if(0==a.length){if(null!=g)return g;l(i,c);break}l(i,c),c=a,a=[]}return g}function s(e,t){e.push(t);let r=e.length-1;for(let t=e.length-2;t>=0&&e[r].priority<e[t].priority;t--){let n=e[r];e[r]=e[t],e[t]=n,r=t}}function o(e,t){let r=t;return t.startsWith("[")?(r=t.substr(1,t.length-2),r=parseInt(r)+e):r=parseInt(r),r}self.importScripts("operators.js"),self.onmessage=function(n){let l=n.data,i=1,s=new Uint8Array(1);s[0]=255;let o=(a=s,(p=new(c=l.file).constructor(c.length+a.length)).set(c,0),p.set(a,c.length),p);var c,a,p;l.rules.forEach((function(n,s){try{let n=function(n,l,i){let s={strings:new Map,condition:[]},o=l.get(i);return"undefiend"!=typeof o.string&&function(n,l,i){let s=null;for(let e=0;e<n.length;e++)i.set(n[e].str_name.slice(1),[]);for(const o in n){let c=n[o],a=t(c.modifiers),p=null;"hex_exp_bytecode"==c.type||"regex_expression_bytecode"==c.type?p=c.val:"literal_string"==c.type&&(c.val=c.val.substr(1,c.val.length-2),p=e(c.val)),a.ascii&&(s=r(l,p));let u=null;if(a.wide&&(u=r(l,p,!0)),null==s?s=u:null!=u&&s.push(...u),null!=s)for(let e=0;e<s.length;e++)i.get(c.str_name.slice(1)).push({string:c,start:s[e].start,end:s[e].end})}}(o.string,n,s.strings),"undefiend"!=typeof o.condition&&operators.eval_condition(n,o.condition,l,s),s}(o,l.rules,s);n.rule_name=s,n.hex_editor_id=l.hex_editor_id,n.completed_rules_count=i,n.active_rules_count=l.rules.size,self.postMessage(n)}catch(e){console.log(`Error processing: ${s}`)}i+=1}))}}worker={}})();