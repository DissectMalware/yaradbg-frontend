var worker;(()=>{if("function"==typeof importScripts){function e(e,t){let r=0,i=[],s=null,o=function(e){let t=[],r=e,n=!1,i=!1,s=null;for(let e=0;e<r.length;e++){if(s=r[e].split(/[ ,]/),"chr"==s[0])n=s[1].startsWith("?")?0:15,i=s[1].endsWith("?")?0:240,s[1]=parseInt(s[1].replace("?","0"),16),s.push(i|n);else if("chrc"==s[0])for(let e=1;e<s.length;e++)s[e]=parseInt(s[e],16);else"jmp"==s[0]?s[1]=l(e,s[1]):s[0].startsWith("split")?(s[1]=l(e,s[1]),s[2]=l(e,s[2])):"ignore"==s[0]&&(s[1]=parseInt(s[1]),s[2]=parseInt(s[2]));t.push(s)}return t}(t);"chr"==o[0][0]&&o[0][1];let p=[];for(let e=0;e<10;e++)p.push({pc:0,priority:0});let a=performance.now();for(;r<e.length&&(s=n(e,o,r,p),null!=s);)r=s.start+1,i.push(s);return(performance.now()-a).toString(),i}function t(e,t,r){let n=null;return 0!=e.length?(n=e.pop(),n.pc=t,n.priority=r):n={pc:t,priority:r},n}function r(e,t){e.push(...t),t.length=0}function n(e,n,l,s){let o=[];o.push(t(s,0,0));let p=[],a=0,c=null,u=null,h=!1,f=null,g=[],d=null,y=!1;for(let _=l;_<e.length;_++){y=!1;for(let r=0;r<o.length&&0==y;r++)switch(a=o[r].pc,u=n[a],c=u[0],c){case"chr":if(h=0==u[2]||u[1]==(e[_]&u[2]),!1===h){if(0==g.length)break;d=g.pop(),_=d.end,a=d.ignore_loc,d.end-=1,d.start<=d.end&&g.push(d)}i(p,t(s,a+1,o[r].priority));break;case"chrc":let n=1+(e[_]>>3),c=1<<(7&e[_]);if(h=0!=(u[n]&c),!1===h){if(0==g.length)break;d=g.pop(),_=d.end,a=d.ignore_loc,d.end-=1,d.start<=d.end&&g.push(d)}p.push(t(s,a+1,o[r].priority));break;case"ignore":-1==u[2]&&(u[2]=e.length),g.push({start:_+u[1]-1,end:_+u[2]-1,ignore_loc:a}),_=_+u[1]-1,i(p,t(s,a+1,o[r].priority));break;case"splitjmp":i(o,t(s,u[1],o[r].priority)),i(o,t(s,u[2],o[r].priority+1));break;case"splitstay":case"split":i(o,t(s,u[1],o[r].priority+1)),i(o,t(s,u[2],o[r].priority));break;case"jmp":i(o,t(s,u[1],o[r].priority));break;case"match":(null==f||f.end<_-1)&&(f={start:l,end:_-1,match:!0}),y=!0}if(0==p.length){if(null!=f)return f;r(s,o),l=_+1,o.push(t(s,0,0))}else r(s,o),o=p,p=[]}return f}function i(e,t){e.push(t);let r=e.length-1;for(let t=e.length-2;t>=0&&e[r].priority<e[t].priority;t--){let n=e[r];e[r]=e[t],e[t]=n,r=t}}function l(e,t){let r=t;return t.startsWith("[")?(r=t.substr(1,t.length-2),r=parseInt(r)+e):r=parseInt(r),r}self.importScripts("operators.js"),self.onmessage=function(t){let r=t.data,n=1;r.rules.forEach((function(t,i){let l=function(t,r,n){let i={strings:new Map,condition:[]},l=r.get(n);return"undefiend"!=typeof l.string&&function(t,r,n){let i=null;for(let e=0;e<t.length;e++)n.set(t[e].str_name.slice(1),[]);for(const l in t){let s=t[l];if("hex_exp_bytecode"==s.type||"regex_expression_bytecode"==s.type){if(i=e(r,s.val),null!=i)for(let e=0;e<i.length;e++)n.get(s.str_name.slice(1)).push({string:s,start:i[e].start,end:i[e].end})}else if("literal_string"==s.type){let t=!1,l=!1,o=!1;for(let e=0;e<s.modifiers.length;e++)switch(s.modifiers[e].modifier){case"nocase":t=!0;break;case"ascii":l=!0;break;case"wide":o=!0}0==o&&(l=!0);let p=[];s.val=s.val.substr(1,s.val.length-2);for(let e=0;e<s.val.length;e++)p.push(`chr ${s.val.charCodeAt(e).toString(16)}`);if(p.push("match"),i=e(r,p),null!=i)for(let e=0;e<i.length;e++)n.get(s.str_name.slice(1)).push({string:s,start:i[e].start,end:i[e].end})}}}(l.string,t,i.strings),"undefiend"!=typeof l.condition&&operators.eval_condition(t,l.condition,r,i),i}(r.file,r.rules,i);l.rule_name=i,l.hex_editor_id=r.hex_editor_id,l.completed_rules_count=n,l.active_rules_count=r.rules.size,self.postMessage(l),n+=1}))}}worker={}})();