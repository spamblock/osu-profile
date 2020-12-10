var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function c(t){t.forEach(e)}function l(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function o(t,e,n,c){if(t){const l=a(t,e,n,c);return t[0](l)}}function a(t,e,n,c){return t[1]&&c?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](c(e))):n.ctx}function r(t,e,n,c,l,s,o){const r=function(t,e,n,c){if(t[2]&&c){const l=t[2](c(n));if(void 0===e.dirty)return l;if("object"==typeof l){const t=[],n=Math.max(e.dirty.length,l.length);for(let c=0;c<n;c+=1)t[c]=e.dirty[c]|l[c];return t}return e.dirty|l}return e.dirty}(e,c,l,s);if(r){const l=a(e,n,c,o);t.p(l,r)}}function u(e){return e&&l(e.destroy)?e.destroy:t}function i(t,e){t.appendChild(e)}function d(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function $(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function h(){return m(" ")}function v(t,e,n,c){return t.addEventListener(e,n,c),()=>t.removeEventListener(e,n,c)}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let b;function x(t){b=t}const q=[],k=[],w=[],E=[],_=Promise.resolve();let C=!1;function L(t){w.push(t)}function M(t){E.push(t)}let T=!1;const H=new Set;function A(){if(!T){T=!0;do{for(let t=0;t<q.length;t+=1){const e=q[t];x(e),j(e.$$)}for(x(null),q.length=0;k.length;)k.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];H.has(e)||(H.add(e),e())}w.length=0}while(q.length);for(;E.length;)E.pop()();C=!1,T=!1,H.clear()}}function j(t){if(null!==t.fragment){t.update(),c(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}const N=new Set;let S;function B(){S={r:0,c:[],p:S}}function P(){S.r||c(S.c),S=S.p}function R(t,e){t&&t.i&&(N.delete(t),t.i(e))}function D(t,e,n,c){if(t&&t.o){if(N.has(t))return;N.add(t),S.c.push((()=>{N.delete(t),c&&(n&&t.d(1),c())})),t.o(e)}}function O(t,e,n){const c=t.$$.props[e];void 0!==c&&(t.$$.bound[c]=n,n(t.$$.ctx[c]))}function F(t){t&&t.c()}function G(t,n,s){const{fragment:o,on_mount:a,on_destroy:r,after_update:u}=t.$$;o&&o.m(n,s),L((()=>{const n=a.map(e).filter(l);r?r.push(...n):c(n),t.$$.on_mount=[]})),u.forEach(L)}function z(t,e){const n=t.$$;null!==n.fragment&&(c(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function I(t,e){-1===t.$$.dirty[0]&&(q.push(t),C||(C=!0,_.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function J(e,l,s,o,a,r,u=[-1]){const i=b;x(e);const d=l.props||{},f=e.$$={fragment:null,ctx:null,props:r,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(i?i.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let $=!1;if(f.ctx=s?s(e,d,((t,n,...c)=>{const l=c.length?c[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=l)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](l),$&&I(e,t)),n})):[],f.update(),$=!0,c(f.before_update),f.fragment=!!o&&o(f.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);f.fragment&&f.fragment.l(t),t.forEach(p)}else f.fragment&&f.fragment.c();l.intro&&R(e.$$.fragment),G(e,l.target,l.anchor),A()}x(i)}class K{$destroy(){z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Q(t){const e={};return[...t.elements].forEach((function(t,n){switch(!0){case!t.name:case t.disabled:case/(file|reset|submit|button)/i.test(t.type):break;case/(select-multiple)/i.test(t.type):e[t.name]=[],[...t.options].forEach((function(n,c){n.selected&&e[t.name].push(n.value)}));break;case/(radio)/i.test(t.type):t.checked&&(e[t.name]=t.value);break;case/(checkbox)/i.test(t.type):t.checked&&(e[t.name]=[...e[t.name]||[],t.value]);break;default:t.value&&(e[t.name]=t.value)}})),e}function U(t){let e=0;function n(){t.dispatchEvent(new CustomEvent("update",{detail:{...Q(t)}}))}return[...t.getElementsByTagName("input")].forEach((e=>{e.oninput=t.onchange})),t.addEventListener("input",n),n(),{update(n){2===e?function(t,e){[...t.elements].forEach((function(t,n){switch(!0){case!t.name:case t.disabled:case/(file|reset|submit|button)/i.test(t.type):break;case/(select-multiple)/i.test(t.type):[...t.options].forEach((function(n,c){n.selected=e[t.name]&&e[t.name].includes(n.value)}));break;case/(radio)/i.test(t.type):t.checked=e[t.name]&&e[t.name]===t.value;break;case/(checkbox)/i.test(t.type):t.checked=e[t.name]&&e[t.name].includes(t.value);break;default:t.value=e[t.name]||""}}))}(t,n):e+=1},destroy(){t.removeEventListener("input",n)}}}function V(t,e=[]){let n=[];return e.forEach((([e,c])=>{const{destroy:l=(()=>{})}=e(t,c)||{destroy:()=>{}};n.push(l)})),{destroy(){n.forEach((t=>t()))}}}function W(t){let e,n,s,a,i,f;const m=t[3].default,h=o(m,t,t[2],null);return{c(){e=$("form"),h&&h.c()},m(c,l){d(c,e,l),h&&h.m(e,null),a=!0,i||(f=[v(e,"update",t[5]),u(n=U.call(null,e,t[0])),u(s=V.call(null,e,t[1])),v(e,"submit",t[4])],i=!0)},p(t,[e]){h&&h.p&&4&e&&r(h,m,t,t[2],e,null,null),n&&l(n.update)&&1&e&&n.update.call(null,t[0]),s&&l(s.update)&&2&e&&s.update.call(null,t[1])},i(t){a||(R(h,t),a=!0)},o(t){D(h,t),a=!1},d(t){t&&p(e),h&&h.d(t),i=!1,c(f)}}}function X(t,e,n){let{$$slots:c={},$$scope:l}=e,{values:s}=e,{actions:o=[]}=e;return t.$$set=t=>{"values"in t&&n(0,s=t.values),"actions"in t&&n(1,o=t.actions),"$$scope"in t&&n(2,l=t.$$scope)},[s,o,l,c,function(e){!function(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t(e)))}(t,e)},({detail:t})=>n(0,s=t)]}class Y extends K{constructor(t){super(),J(this,t,X,W,s,{values:0,actions:1})}}function Z(t){let e,n,c,l,s,a,u,f,v,b,x,q,k;const w=t[4].default,E=o(w,t,t[3],null);return{c(){e=$("div"),n=$("div"),c=$("div"),l=m(t[0]),s=h(),a=$("div"),u=m(t[1]),f=h(),v=$("span"),b=m(t[2]),x=h(),q=$("div"),E&&E.c(),g(c,"class","title svelte-pf9sd5"),g(v,"class","period svelte-pf9sd5"),g(a,"class","description svelte-pf9sd5"),g(n,"class","left svelte-pf9sd5"),g(q,"class","right svelte-pf9sd5"),g(e,"class","osu-row svelte-pf9sd5")},m(t,o){d(t,e,o),i(e,n),i(n,c),i(c,l),i(n,s),i(n,a),i(a,u),i(a,f),i(a,v),i(v,b),i(e,x),i(e,q),E&&E.m(q,null),k=!0},p(t,[e]){(!k||1&e)&&y(l,t[0]),(!k||2&e)&&y(u,t[1]),(!k||4&e)&&y(b,t[2]),E&&E.p&&8&e&&r(E,w,t,t[3],e,null,null)},i(t){k||(R(E,t),k=!0)},o(t){D(E,t),k=!1},d(t){t&&p(e),E&&E.d(t)}}}function tt(t,e,n){let{$$slots:c={},$$scope:l}=e,{title:s}=e,{description:o}=e,{date:a}=e;return t.$$set=t=>{"title"in t&&n(0,s=t.title),"description"in t&&n(1,o=t.description),"date"in t&&n(2,a=t.date),"$$scope"in t&&n(3,l=t.$$scope)},[s,o,a,l,c]}class et extends K{constructor(t){super(),J(this,t,tt,Z,s,{title:0,description:1,date:2})}}function nt(t){let e,n,c,l,s,o,a,r,u=t[0].placement+"",f=t[0].participants+"";return{c(){e=$("div"),n=$("div"),c=$("b"),l=m(u),s=h(),o=$("div"),a=m("/ "),r=m(f),g(n,"class","placement"),g(o,"class","participants"),g(e,"class","content svelte-6h9mka")},m(t,u){d(t,e,u),i(e,n),i(n,c),i(c,l),i(e,s),i(e,o),i(o,a),i(o,r)},p(t,e){1&e&&u!==(u=t[0].placement+"")&&y(l,u),1&e&&f!==(f=t[0].participants+"")&&y(r,f)},d(t){t&&p(e)}}}function ct(t){let e,n;return e=new et({props:{title:t[1],description:t[2],date:t[3],$$slots:{default:[nt]},$$scope:{ctx:t}}}),{c(){F(e.$$.fragment)},m(t,c){G(e,t,c),n=!0},p(t,[n]){const c={};2&n&&(c.title=t[1]),4&n&&(c.description=t[2]),8&n&&(c.date=t[3]),17&n&&(c.$$scope={dirty:n,ctx:t}),e.$set(c)},i(t){n||(R(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function lt(t,e,n){let c,l,s,{tournament:o}=e;return t.$$set=t=>{"tournament"in t&&n(0,o=t.tournament)},t.$$.update=()=>{1&t.$$.dirty&&n(1,c=o.name+(o.short?` (${o.short})`:"")),1&t.$$.dirty&&n(2,l=o.description),1&t.$$.dirty&&n(3,s=o.period)},[o,c,l,s]}class st extends K{constructor(t){super(),J(this,t,lt,ct,s,{tournament:0})}}function ot(t){let e;return{c(){e=m("📺")},m(t,n){d(t,e,n)},d(t){t&&p(e)}}}function at(t){let e;return{c(){e=m("🎙️")},m(t,n){d(t,e,n)},d(t){t&&p(e)}}}function rt(t){let e;return{c(){e=m("👮")},m(t,n){d(t,e,n)},d(t){t&&p(e)}}}function ut(t){let e;return{c(){e=m("🎶")},m(t,n){d(t,e,n)},d(t){t&&p(e)}}}function it(t){let e;return{c(){e=m("🎼")},m(t,n){d(t,e,n)},d(t){t&&p(e)}}}function dt(t){let e;return{c(){e=m("👑")},m(t,n){d(t,e,n)},d(t){t&&p(e)}}}function pt(t){let e,n=t[0].extra+"";return{c(){e=m(n)},m(t,n){d(t,e,n)},p(t,c){1&c&&n!==(n=t[0].extra+"")&&y(e,n)},d(t){t&&p(e)}}}function ft(t){let e,n,c,l,s,o,a,r=t[0].stream&&ot(),u=t[0].commentary&&at(),f=t[0].referee&&rt(),m=t[0].mappool&&ut(),v=t[0].mapper&&it(),y=t[0].host&&dt(),b=t[0].extra&&pt(t);return{c(){e=$("div"),r&&r.c(),n=h(),u&&u.c(),c=h(),f&&f.c(),l=h(),m&&m.c(),s=h(),v&&v.c(),o=h(),y&&y.c(),a=h(),b&&b.c(),g(e,"class","content svelte-1o80a37")},m(t,p){d(t,e,p),r&&r.m(e,null),i(e,n),u&&u.m(e,null),i(e,c),f&&f.m(e,null),i(e,l),m&&m.m(e,null),i(e,s),v&&v.m(e,null),i(e,o),y&&y.m(e,null),i(e,a),b&&b.m(e,null)},p(t,i){t[0].stream?r||(r=ot(),r.c(),r.m(e,n)):r&&(r.d(1),r=null),t[0].commentary?u||(u=at(),u.c(),u.m(e,c)):u&&(u.d(1),u=null),t[0].referee?f||(f=rt(),f.c(),f.m(e,l)):f&&(f.d(1),f=null),t[0].mappool?m||(m=ut(),m.c(),m.m(e,s)):m&&(m.d(1),m=null),t[0].mapper?v||(v=it(),v.c(),v.m(e,o)):v&&(v.d(1),v=null),t[0].host?y||(y=dt(),y.c(),y.m(e,a)):y&&(y.d(1),y=null),t[0].extra?b?b.p(t,i):(b=pt(t),b.c(),b.m(e,null)):b&&(b.d(1),b=null)},d(t){t&&p(e),r&&r.d(),u&&u.d(),f&&f.d(),m&&m.d(),v&&v.d(),y&&y.d(),b&&b.d()}}}function $t(t){let e,n;return e=new et({props:{title:t[1],description:t[2],date:t[3],$$slots:{default:[ft]},$$scope:{ctx:t}}}),{c(){F(e.$$.fragment)},m(t,c){G(e,t,c),n=!0},p(t,[n]){const c={};2&n&&(c.title=t[1]),4&n&&(c.description=t[2]),8&n&&(c.date=t[3]),17&n&&(c.$$scope={dirty:n,ctx:t}),e.$set(c)},i(t){n||(R(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function mt(t,e,n){let c,l,s,{staff:o}=e;return t.$$set=t=>{"staff"in t&&n(0,o=t.staff)},t.$$.update=()=>{1&t.$$.dirty&&n(1,c=o.name+(o.short?` (${o.short})`:"")),1&t.$$.dirty&&n(2,l=o.description),1&t.$$.dirty&&n(3,s=o.period)},[o,c,l,s]}class ht extends K{constructor(t){super(),J(this,t,mt,$t,s,{staff:0})}}function vt(t){let e;return{c(){e=$("div"),e.textContent="(v2)",g(e,"class","v2")},m(t,n){d(t,e,n)},d(t){t&&p(e)}}}function gt(t){let e,n,c,l,s=(t[0].percent||"clear!")+"",o=t[0].v2&&vt();return{c(){e=$("div"),n=m(s),c=h(),o&&o.c(),l=m(""),g(e,"class","percent svelte-u84hv4")},m(t,s){d(t,e,s),i(e,n),d(t,c,s),o&&o.m(t,s),d(t,l,s)},p(t,e){1&e&&s!==(s=(t[0].percent||"clear!")+"")&&y(n,s),t[0].v2?o||(o=vt(),o.c(),o.m(l.parentNode,l)):o&&(o.d(1),o=null)},d(t){t&&p(e),t&&p(c),o&&o.d(t),t&&p(l)}}}function yt(t){let e,n;return e=new et({props:{title:t[1],description:t[2],date:t[3],$$slots:{default:[gt]},$$scope:{ctx:t}}}),{c(){F(e.$$.fragment)},m(t,c){G(e,t,c),n=!0},p(t,[n]){const c={};2&n&&(c.title=t[1]),4&n&&(c.description=t[2]),8&n&&(c.date=t[3]),17&n&&(c.$$scope={dirty:n,ctx:t}),e.$set(c)},i(t){n||(R(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function bt(t,e,n){let c,l,s,{dan:o}=e;return t.$$set=t=>{"dan"in t&&n(0,o=t.dan)},t.$$.update=()=>{1&t.$$.dirty&&n(1,c=o.name),1&t.$$.dirty&&n(2,l=o.grade),1&t.$$.dirty&&n(3,s=o.date)},[o,c,l,s]}class xt extends K{constructor(t){super(),J(this,t,bt,yt,s,{dan:0})}}function qt(t,e,n){const c=t.slice();return c[5]=e[n],c}function kt(t,e,n){const c=t.slice();return c[4]=e[n],c}function wt(t,e,n){const c=t.slice();return c[3]=e[n],c}function Et(t){let e,n,c,l,s,o,a,r,u,i,f,m,v,y,b;return{c(){e=$("input"),n=h(),c=$("input"),l=h(),s=$("br"),o=h(),a=$("input"),r=h(),u=$("input"),i=h(),f=$("br"),m=h(),v=$("input"),y=h(),b=$("input"),g(e,"type","text"),g(e,"placeholder","Full name"),g(e,"name","name"),g(e,"class","svelte-oq9uca"),g(c,"type","text"),g(c,"placeholder","Shorthand"),g(c,"name","short"),g(c,"class","svelte-oq9uca"),g(a,"type","text"),g(a,"placeholder","Description"),g(a,"name","description"),g(a,"class","svelte-oq9uca"),g(u,"type","text"),g(u,"placeholder","Placement"),g(u,"name","placement"),g(u,"class","svelte-oq9uca"),g(v,"type","text"),g(v,"placeholder","Total participants"),g(v,"name","participants"),g(v,"class","svelte-oq9uca"),g(b,"type","text"),g(b,"placeholder","Period/date"),g(b,"name","period"),g(b,"class","svelte-oq9uca")},m(t,p){d(t,e,p),d(t,n,p),d(t,c,p),d(t,l,p),d(t,s,p),d(t,o,p),d(t,a,p),d(t,r,p),d(t,u,p),d(t,i,p),d(t,f,p),d(t,m,p),d(t,v,p),d(t,y,p),d(t,b,p)},d(t){t&&p(e),t&&p(n),t&&p(c),t&&p(l),t&&p(s),t&&p(o),t&&p(a),t&&p(r),t&&p(u),t&&p(i),t&&p(f),t&&p(m),t&&p(v),t&&p(y),t&&p(b)}}}function _t(t){let e,n;return e=new st({props:{tournament:t[3]}}),{c(){F(e.$$.fragment)},m(t,c){G(e,t,c),n=!0},p(t,n){const c={};1&n&&(c.tournament=t[3]),e.$set(c)},i(t){n||(R(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function Ct(t){let e,n,c,l,s,o,a,r,u,i,f,m,v,y,b,x,q,k,w,E,_,C,L,M,T,H,A;return{c(){e=$("input"),n=h(),c=$("input"),l=h(),s=$("br"),o=h(),a=$("input"),r=h(),u=$("input"),i=h(),f=$("br"),m=h(),v=$("label"),v.innerHTML='<input type="checkbox" name="stream" class="svelte-oq9uca"/> 📺 Stream',y=h(),b=$("label"),b.innerHTML='<input type="checkbox" name="commentary" class="svelte-oq9uca"/> 🎙️ Commentary',x=h(),q=$("label"),q.innerHTML='<input type="checkbox" name="referee" class="svelte-oq9uca"/> 👮 Referee',k=h(),w=$("label"),w.innerHTML='<input type="checkbox" name="mappool" class="svelte-oq9uca"/> 🎶 Mappool',E=h(),_=$("label"),_.innerHTML='<input type="checkbox" name="mapper" class="svelte-oq9uca"/> 🎼 Mapper',C=h(),L=$("label"),L.innerHTML='<input type="checkbox" name="host" class="svelte-oq9uca"/> 👑 Host',M=h(),T=$("br"),H=h(),A=$("input"),g(e,"type","text"),g(e,"placeholder","Full name"),g(e,"name","name"),g(e,"class","svelte-oq9uca"),g(c,"type","text"),g(c,"placeholder","Shorthand"),g(c,"name","short"),g(c,"class","svelte-oq9uca"),g(a,"type","text"),g(a,"placeholder","Description"),g(a,"name","description"),g(a,"class","svelte-oq9uca"),g(u,"type","text"),g(u,"placeholder","Period/date"),g(u,"name","period"),g(u,"class","svelte-oq9uca"),g(v,"class","svelte-oq9uca"),g(b,"class","svelte-oq9uca"),g(q,"class","svelte-oq9uca"),g(w,"class","svelte-oq9uca"),g(_,"class","svelte-oq9uca"),g(L,"class","svelte-oq9uca"),g(A,"type","text"),g(A,"placeholder","Custom emojis"),g(A,"name","extra"),g(A,"class","svelte-oq9uca")},m(t,p){d(t,e,p),d(t,n,p),d(t,c,p),d(t,l,p),d(t,s,p),d(t,o,p),d(t,a,p),d(t,r,p),d(t,u,p),d(t,i,p),d(t,f,p),d(t,m,p),d(t,v,p),d(t,y,p),d(t,b,p),d(t,x,p),d(t,q,p),d(t,k,p),d(t,w,p),d(t,E,p),d(t,_,p),d(t,C,p),d(t,L,p),d(t,M,p),d(t,T,p),d(t,H,p),d(t,A,p)},d(t){t&&p(e),t&&p(n),t&&p(c),t&&p(l),t&&p(s),t&&p(o),t&&p(a),t&&p(r),t&&p(u),t&&p(i),t&&p(f),t&&p(m),t&&p(v),t&&p(y),t&&p(b),t&&p(x),t&&p(q),t&&p(k),t&&p(w),t&&p(E),t&&p(_),t&&p(C),t&&p(L),t&&p(M),t&&p(T),t&&p(H),t&&p(A)}}}function Lt(t){let e,n;return e=new ht({props:{staff:t[4]}}),{c(){F(e.$$.fragment)},m(t,c){G(e,t,c),n=!0},p(t,n){const c={};2&n&&(c.staff=t[4]),e.$set(c)},i(t){n||(R(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function Mt(t){let e,n,c,l,s,o,a,r,u,i,f,m,v;return{c(){e=$("input"),n=h(),c=$("input"),l=h(),s=$("br"),o=h(),a=$("input"),r=h(),u=$("input"),i=h(),f=$("br"),m=h(),v=$("label"),v.innerHTML='<input type="checkbox" name="v2" class="svelte-oq9uca"/> Score v2',g(e,"type","text"),g(e,"placeholder","Name"),g(e,"name","name"),g(e,"class","svelte-oq9uca"),g(c,"type","text"),g(c,"placeholder","Grade"),g(c,"name","grade"),g(c,"class","svelte-oq9uca"),g(a,"type","text"),g(a,"placeholder","Percent"),g(a,"name","percent"),g(a,"class","svelte-oq9uca"),g(u,"type","text"),g(u,"placeholder","Date"),g(u,"name","date"),g(u,"class","svelte-oq9uca"),g(v,"class","svelte-oq9uca")},m(t,p){d(t,e,p),d(t,n,p),d(t,c,p),d(t,l,p),d(t,s,p),d(t,o,p),d(t,a,p),d(t,r,p),d(t,u,p),d(t,i,p),d(t,f,p),d(t,m,p),d(t,v,p)},d(t){t&&p(e),t&&p(n),t&&p(c),t&&p(l),t&&p(s),t&&p(o),t&&p(a),t&&p(r),t&&p(u),t&&p(i),t&&p(f),t&&p(m),t&&p(v)}}}function Tt(t){let e,n;return e=new xt({props:{dan:t[5]}}),{c(){F(e.$$.fragment)},m(t,c){G(e,t,c),n=!0},p(t,n){const c={};4&n&&(c.dan=t[5]),e.$set(c)},i(t){n||(R(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function Ht(t){let e,n,l,s,o,a,r,u,y,b,x,q,w,E,_,C,L,T,H,A,j,N,S,I,J,K,Q,U,V,W,X,Z,tt,et,nt,ct,lt,ot,at,rt,ut,it,dt;function pt(e){t[12].call(null,e)}let ft={$$slots:{default:[Et]},$$scope:{ctx:t}};void 0!==t[3]&&(ft.values=t[3]),l=new Y({props:ft}),k.push((()=>O(l,"values",pt)));let $t=t[0],mt=[];for(let e=0;e<$t.length;e+=1)mt[e]=_t(wt(t,$t,e));const vt=t=>D(mt[t],1,1,(()=>{mt[t]=null}));function gt(e){t[13].call(null,e)}q=new st({props:{tournament:t[3]}});let yt={$$slots:{default:[Ct]},$$scope:{ctx:t}};void 0!==t[4]&&(yt.values=t[4]),C=new Y({props:yt}),k.push((()=>O(C,"values",gt)));let bt=t[1],Ht=[];for(let e=0;e<bt.length;e+=1)Ht[e]=Lt(kt(t,bt,e));const At=t=>D(Ht[t],1,1,(()=>{Ht[t]=null}));function jt(e){t[14].call(null,e)}J=new ht({props:{staff:t[4]}});let Nt={$$slots:{default:[Mt]},$$scope:{ctx:t}};void 0!==t[5]&&(Nt.values=t[5]),V=new Y({props:Nt}),k.push((()=>O(V,"values",jt)));let St=t[2],Bt=[];for(let e=0;e<St.length;e+=1)Bt[e]=Tt(qt(t,St,e));const Pt=t=>D(Bt[t],1,1,(()=>{Bt[t]=null}));return ot=new xt({props:{dan:t[5]}}),{c(){e=$("main"),n=$("div"),F(l.$$.fragment),o=h(),a=$("button"),a.textContent="Add tournament",r=h(),u=$("button"),u.textContent="Remove last tournament",y=h(),b=$("div");for(let t=0;t<mt.length;t+=1)mt[t].c();x=h(),F(q.$$.fragment),w=h(),E=$("br"),_=h(),F(C.$$.fragment),T=h(),H=$("button"),H.textContent="Add staff",A=h(),j=$("button"),j.textContent="Remove last staff",N=h(),S=$("div");for(let t=0;t<Ht.length;t+=1)Ht[t].c();I=h(),F(J.$$.fragment),K=h(),Q=$("br"),U=m("\n\n\t\t(you can probably use that last one for anything else, just ignore the field names)\n\t\t"),F(V.$$.fragment),X=h(),Z=$("button"),Z.textContent="Add dan",tt=h(),et=$("button"),et.textContent="Remove last dan",nt=h(),ct=$("div");for(let t=0;t<Bt.length;t+=1)Bt[t].c();lt=h(),F(ot.$$.fragment),at=h(),rt=$("br"),g(a,"class","svelte-oq9uca"),g(u,"class","svelte-oq9uca"),g(b,"id","tournaments"),g(H,"class","svelte-oq9uca"),g(j,"class","svelte-oq9uca"),g(S,"id","staffs"),g(Z,"class","svelte-oq9uca"),g(et,"class","svelte-oq9uca"),g(ct,"id","dans"),g(n,"class","content svelte-oq9uca"),g(e,"class","svelte-oq9uca")},m(c,s){d(c,e,s),i(e,n),G(l,n,null),i(n,o),i(n,a),i(n,r),i(n,u),i(n,y),i(n,b);for(let t=0;t<mt.length;t+=1)mt[t].m(b,null);i(b,x),G(q,b,null),i(n,w),i(n,E),i(n,_),G(C,n,null),i(n,T),i(n,H),i(n,A),i(n,j),i(n,N),i(n,S);for(let t=0;t<Ht.length;t+=1)Ht[t].m(S,null);i(S,I),G(J,S,null),i(n,K),i(n,Q),i(n,U),G(V,n,null),i(n,X),i(n,Z),i(n,tt),i(n,et),i(n,nt),i(n,ct);for(let t=0;t<Bt.length;t+=1)Bt[t].m(ct,null);i(ct,lt),G(ot,ct,null),i(n,at),i(n,rt),ut=!0,it||(dt=[v(a,"click",t[6]),v(u,"click",t[9]),v(H,"click",t[7]),v(j,"click",t[10]),v(Z,"click",t[8]),v(et,"click",t[11])],it=!0)},p(t,[e]){const n={};if(2097152&e&&(n.$$scope={dirty:e,ctx:t}),!s&&8&e&&(s=!0,n.values=t[3],M((()=>s=!1))),l.$set(n),1&e){let n;for($t=t[0],n=0;n<$t.length;n+=1){const c=wt(t,$t,n);mt[n]?(mt[n].p(c,e),R(mt[n],1)):(mt[n]=_t(c),mt[n].c(),R(mt[n],1),mt[n].m(b,x))}for(B(),n=$t.length;n<mt.length;n+=1)vt(n);P()}const c={};8&e&&(c.tournament=t[3]),q.$set(c);const o={};if(2097152&e&&(o.$$scope={dirty:e,ctx:t}),!L&&16&e&&(L=!0,o.values=t[4],M((()=>L=!1))),C.$set(o),2&e){let n;for(bt=t[1],n=0;n<bt.length;n+=1){const c=kt(t,bt,n);Ht[n]?(Ht[n].p(c,e),R(Ht[n],1)):(Ht[n]=Lt(c),Ht[n].c(),R(Ht[n],1),Ht[n].m(S,I))}for(B(),n=bt.length;n<Ht.length;n+=1)At(n);P()}const a={};16&e&&(a.staff=t[4]),J.$set(a);const r={};if(2097152&e&&(r.$$scope={dirty:e,ctx:t}),!W&&32&e&&(W=!0,r.values=t[5],M((()=>W=!1))),V.$set(r),4&e){let n;for(St=t[2],n=0;n<St.length;n+=1){const c=qt(t,St,n);Bt[n]?(Bt[n].p(c,e),R(Bt[n],1)):(Bt[n]=Tt(c),Bt[n].c(),R(Bt[n],1),Bt[n].m(ct,lt))}for(B(),n=St.length;n<Bt.length;n+=1)Pt(n);P()}const u={};32&e&&(u.dan=t[5]),ot.$set(u)},i(t){if(!ut){R(l.$$.fragment,t);for(let t=0;t<$t.length;t+=1)R(mt[t]);R(q.$$.fragment,t),R(C.$$.fragment,t);for(let t=0;t<bt.length;t+=1)R(Ht[t]);R(J.$$.fragment,t),R(V.$$.fragment,t);for(let t=0;t<St.length;t+=1)R(Bt[t]);R(ot.$$.fragment,t),ut=!0}},o(t){D(l.$$.fragment,t),mt=mt.filter(Boolean);for(let t=0;t<mt.length;t+=1)D(mt[t]);D(q.$$.fragment,t),D(C.$$.fragment,t),Ht=Ht.filter(Boolean);for(let t=0;t<Ht.length;t+=1)D(Ht[t]);D(J.$$.fragment,t),D(V.$$.fragment,t),Bt=Bt.filter(Boolean);for(let t=0;t<Bt.length;t+=1)D(Bt[t]);D(ot.$$.fragment,t),ut=!1},d(t){t&&p(e),z(l),f(mt,t),z(q),z(C),f(Ht,t),z(J),z(V),f(Bt,t),z(ot),it=!1,c(dt)}}}function At(t,e,n){let c=[],l=[],s=[],o={},a={},r={};return[c,l,s,o,a,r,()=>{n(0,c=[...c,o]),n(3,o={})},()=>{n(1,l=[...l,a]),n(4,a={})},()=>{n(2,s=[...s,r]),n(5,r={})},()=>{n(0,c=c.slice(0,-1))},()=>{n(1,l=l.slice(0,-1))},()=>{n(2,s=s.slice(0,-1))},function(t){o=t,n(3,o)},function(t){a=t,n(4,a)},function(t){r=t,n(5,r)}]}return new class extends K{constructor(t){super(),J(this,t,At,Ht,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map