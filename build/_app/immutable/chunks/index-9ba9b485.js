function x(){}const X=t=>t;function pt(t,e){for(const n in e)t[n]=e[n];return t}function Y(t){return t()}function J(){return Object.create(null)}function b(t){t.forEach(Y)}function B(t){return typeof t=="function"}function qt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let T;function Bt(t,e){return T||(T=document.createElement("a")),T.href=e,t===T.href}function gt(t){return Object.keys(t).length===0}function Z(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function zt(t){let e;return Z(t,n=>e=n)(),e}function Ft(t,e,n){t.$$.on_destroy.push(Z(e,n))}function Gt(t,e,n,i){if(t){const r=tt(t,e,n,i);return t[0](r)}}function tt(t,e,n,i){return t[1]&&i?pt(n.ctx.slice(),t[1](i(e))):n.ctx}function It(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const c=[],s=Math.max(e.dirty.length,r.length);for(let a=0;a<s;a+=1)c[a]=e.dirty[a]|r[a];return c}return e.dirty|r}return e.dirty}function Wt(t,e,n,i,r,c){if(r){const s=tt(e,n,i,c);t.p(s,r)}}function Jt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const et=typeof window<"u";let nt=et?()=>window.performance.now():()=>Date.now(),z=et?t=>requestAnimationFrame(t):x;const y=new Set;function it(t){y.forEach(e=>{e.c(t)||(y.delete(e),e.f())}),y.size!==0&&z(it)}function rt(t){let e;return y.size===0&&z(it),{promise:new Promise(n=>{y.add(e={c:t,f:n})}),abort(){y.delete(e)}}}let L=!1;function yt(){L=!0}function xt(){L=!1}function bt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function vt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let o=0;o<e.length;o++){const f=e[o];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const o=e[l].claim_order,f=(r>0&&e[n[r]].claim_order<=o?r+1:bt(1,r,_=>e[n[_]].claim_order,o))-1;i[l]=n[f]+1;const u=f+1;n[u]=l,r=Math.max(u,r)}const c=[],s=[];let a=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(c.push(e[l-1]);a>=l;a--)s.push(e[a]);a--}for(;a>=0;a--)s.push(e[a]);c.reverse(),s.sort((l,o)=>l.claim_order-o.claim_order);for(let l=0,o=0;l<s.length;l++){for(;o<c.length&&s[l].claim_order>=c[o].claim_order;)o++;const f=o<c.length?c[o]:null;t.insertBefore(s[l],f)}}function $t(t,e){t.appendChild(e)}function wt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Et(t,e){return $t(t.head||t,e),e.sheet}function Nt(t,e){if(L){for(vt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function kt(t,e,n){t.insertBefore(e,n||null)}function At(t,e,n){L&&!n?Nt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function E(t){t.parentNode.removeChild(t)}function Kt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function F(t){return document.createElement(t)}function st(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function G(t){return document.createTextNode(t)}function Qt(){return G(" ")}function Ut(){return G("")}function Vt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Xt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Tt(t){return Array.from(t.childNodes)}function lt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ct(t,e,n,i,r=!1){lt(t);const c=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const a=t[s];if(e(a)){const l=n(a);return l===void 0?t.splice(s,1):t[s]=l,r||(t.claim_info.last_index=s),a}}for(let s=t.claim_info.last_index-1;s>=0;s--){const a=t[s];if(e(a)){const l=n(a);return l===void 0?t.splice(s,1):t[s]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,a}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function ot(t,e,n,i){return ct(t,r=>r.nodeName===e,r=>{const c=[];for(let s=0;s<r.attributes.length;s++){const a=r.attributes[s];n[a.name]||c.push(a.name)}c.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Yt(t,e,n){return ot(t,e,n,F)}function Zt(t,e,n){return ot(t,e,n,st)}function St(t,e){return ct(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>G(e),!0)}function te(t){return St(t," ")}function K(t,e,n){for(let i=n;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===e)return i}return t.length}function ee(t,e){const n=K(t,"HTML_TAG_START",0),i=K(t,"HTML_TAG_END",n);if(n===i)return new Q(void 0,e);lt(t);const r=t.splice(n,i-n+1);E(r[0]),E(r[r.length-1]);const c=r.slice(1,r.length-1);for(const s of c)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new Q(c,e)}function ne(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ie(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function at(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}class Ct{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=st(n.nodeName):this.e=F(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)kt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(E)}}class Q extends Ct{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)At(this.t,this.n[n],e)}}const j=new Map;let H=0;function Mt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function jt(t){const e={style_element:F("style"),rules:{}};return j.set(t,e),e}function ut(t,e,n,i,r,c,s,a=0){const l=16.666/i;let o=`{
`;for(let d=0;d<=1;d+=l){const A=e+(n-e)*c(d);o+=d*100+`%{${s(A,1-A)}}
`}const f=o+`100% {${s(n,1-n)}}
}`,u=`__svelte_${Mt(f)}_${a}`,_=wt(t),{style_element:h,rules:m}=j.get(_)||jt(_);if(!m[u]){const d=Et(_,h);m[u]=!0,d.insertRule(`@keyframes ${u} ${f}`,d.cssRules.length)}const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${u} ${i}ms linear ${r}ms 1 both`,H+=1,u}function R(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),H-=r,H||Ht())}function Ht(){z(()=>{H||(j.forEach(t=>{const{style_element:e}=t;E(e)}),j.clear())})}let N;function w(t){N=t}function I(){if(!N)throw new Error("Function called outside component initialization");return N}function re(t){I().$$.on_mount.push(t)}function se(t){I().$$.after_update.push(t)}function le(){const t=I();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const c=at(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,c)}),!c.defaultPrevented}return!0}}const $=[],U=[],C=[],V=[],ft=Promise.resolve();let q=!1;function _t(){q||(q=!0,ft.then(dt))}function ce(){return _t(),ft}function k(t){C.push(t)}const O=new Set;let S=0;function dt(){const t=N;do{for(;S<$.length;){const e=$[S];S++,w(e),Dt(e.$$)}for(w(null),$.length=0,S=0;U.length;)U.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];O.has(n)||(O.add(n),n())}C.length=0}while($.length);for(;V.length;)V.pop()();q=!1,O.clear(),w(t)}function Dt(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}let v;function ht(){return v||(v=Promise.resolve(),v.then(()=>{v=null})),v}function D(t,e,n){t.dispatchEvent(at(`${e?"intro":"outro"}${n}`))}const M=new Set;let g;function oe(){g={r:0,c:[],p:g}}function ae(){g.r||b(g.c),g=g.p}function Lt(t,e){t&&t.i&&(M.delete(t),t.i(e))}function ue(t,e,n,i){if(t&&t.o){if(M.has(t))return;M.add(t),g.c.push(()=>{M.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const mt={duration:0};function fe(t,e,n){let i=e(t,n),r=!1,c,s,a=0;function l(){c&&R(t,c)}function o(){const{delay:u=0,duration:_=300,easing:h=X,tick:m=x,css:p}=i||mt;p&&(c=ut(t,0,1,_,u,h,p,a++)),m(0,1);const d=nt()+u,A=d+_;s&&s.abort(),r=!0,k(()=>D(t,!0,"start")),s=rt(P=>{if(r){if(P>=A)return m(1,0),D(t,!0,"end"),l(),r=!1;if(P>=d){const W=h((P-d)/_);m(W,1-W)}}return r})}let f=!1;return{start(){f||(f=!0,R(t),B(i)?(i=i(),ht().then(o)):o())},invalidate(){f=!1},end(){r&&(l(),r=!1)}}}function _e(t,e,n){let i=e(t,n),r=!0,c;const s=g;s.r+=1;function a(){const{delay:l=0,duration:o=300,easing:f=X,tick:u=x,css:_}=i||mt;_&&(c=ut(t,1,0,o,l,f,_));const h=nt()+l,m=h+o;k(()=>D(t,!1,"start")),rt(p=>{if(r){if(p>=m)return u(0,1),D(t,!1,"end"),--s.r||b(s.c),!1;if(p>=h){const d=f((p-h)/o);u(1-d,d)}}return r})}return B(i)?ht().then(()=>{i=i(),a()}):a(),{end(l){l&&i.tick&&i.tick(1,0),r&&(c&&R(t,c),r=!1)}}}function de(t){t&&t.c()}function he(t,e){t&&t.l(e)}function Pt(t,e,n,i){const{fragment:r,on_mount:c,on_destroy:s,after_update:a}=t.$$;r&&r.m(e,n),i||k(()=>{const l=c.map(Y).filter(B);s?s.push(...l):b(l),t.$$.on_mount=[]}),a.forEach(k)}function Ot(t,e){const n=t.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Rt(t,e){t.$$.dirty[0]===-1&&($.push(t),_t(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function me(t,e,n,i,r,c,s,a=[-1]){const l=N;w(t);const o=t.$$={fragment:null,ctx:null,props:c,update:x,not_equal:r,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:J(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};s&&s(o.root);let f=!1;if(o.ctx=n?n(t,e.props||{},(u,_,...h)=>{const m=h.length?h[0]:_;return o.ctx&&r(o.ctx[u],o.ctx[u]=m)&&(!o.skip_bound&&o.bound[u]&&o.bound[u](m),f&&Rt(t,u)),_}):[],o.update(),f=!0,b(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){yt();const u=Tt(e.target);o.fragment&&o.fragment.l(u),u.forEach(E)}else o.fragment&&o.fragment.c();e.intro&&Lt(t.$$.fragment),Pt(t,e.target,e.anchor,e.customElement),xt(),dt()}w(l)}class pe{$destroy(){Ot(this,1),this.$destroy=x}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!gt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{x as A,zt as B,st as C,Zt as D,Nt as E,Vt as F,Gt as G,Wt as H,Jt as I,It as J,Ft as K,Kt as L,Q as M,ee as N,Bt as O,X as P,b as Q,le as R,pe as S,k as T,fe as U,_e as V,U as W,Qt as a,At as b,te as c,ae as d,Ut as e,Lt as f,oe as g,E as h,me as i,se as j,F as k,Yt as l,Tt as m,Xt as n,re as o,ie as p,G as q,St as r,qt as s,ue as t,ne as u,de as v,he as w,Pt as x,Ot as y,ce as z};