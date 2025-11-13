(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function $l(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Oe={},vs=[],un=()=>{},Mp=()=>!1,Sa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),jl=t=>t.startsWith("onUpdate:"),rt=Object.assign,ql=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},vv=Object.prototype.hasOwnProperty,Se=(t,e)=>vv.call(t,e),le=Array.isArray,Es=t=>Ca(t)==="[object Map]",Lp=t=>Ca(t)==="[object Set]",he=t=>typeof t=="function",We=t=>typeof t=="string",wr=t=>typeof t=="symbol",Ue=t=>t!==null&&typeof t=="object",Fp=t=>(Ue(t)||he(t))&&he(t.then)&&he(t.catch),Up=Object.prototype.toString,Ca=t=>Up.call(t),Ev=t=>Ca(t).slice(8,-1),Bp=t=>Ca(t)==="[object Object]",Hl=t=>We(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,gi=$l(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pa=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Tv=/-(\w)/g,Ht=Pa(t=>t.replace(Tv,(e,n)=>n?n.toUpperCase():"")),Iv=/\B([A-Z])/g,Qr=Pa(t=>t.replace(Iv,"-$1").toLowerCase()),ka=Pa(t=>t.charAt(0).toUpperCase()+t.slice(1)),wc=Pa(t=>t?`on${ka(t)}`:""),or=(t,e)=>!Object.is(t,e),Mo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},$p=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Zc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},wv=t=>{const e=We(t)?Number(t):NaN;return isNaN(e)?t:e};let Yh;const Va=()=>Yh||(Yh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function zl(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=We(r)?Sv(r):zl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(We(t)||Ue(t))return t}const Av=/;(?![^(]*\))/g,bv=/:([^]+)/,Rv=/\/\*[^]*?\*\//g;function Sv(t){const e={};return t.replace(Rv,"").split(Av).forEach(n=>{if(n){const r=n.split(bv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Da(t){let e="";if(We(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=Da(t[n]);r&&(e+=r+" ")}else if(Ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Cv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Pv=$l(Cv);function jp(t){return!!t||t===""}const qp=t=>!!(t&&t.__v_isRef===!0),$e=t=>We(t)?t:t==null?"":le(t)||Ue(t)&&(t.toString===Up||!he(t.toString))?qp(t)?$e(t.value):JSON.stringify(t,Hp,2):String(t),Hp=(t,e)=>qp(e)?Hp(t,e.value):Es(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ac(r,i)+" =>"]=s,n),{})}:Lp(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ac(n))}:wr(e)?Ac(e):Ue(e)&&!le(e)&&!Bp(e)?String(e):e,Ac=(t,e="")=>{var n;return wr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gt;class zp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=gt,!e&&gt&&(this.index=(gt.scopes||(gt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=gt;try{return gt=this,e()}finally{gt=n}}}on(){++this._on===1&&(this.prevScope=gt,gt=this)}off(){this._on>0&&--this._on===0&&(gt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Wp(t){return new zp(t)}function Kp(){return gt}function kv(t,e=!1){gt&&gt.cleanups.push(t)}let xe;const bc=new WeakSet;class Gp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,gt&&gt.active&&gt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,bc.has(this)&&(bc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Yp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Xh(this),Xp(this);const e=xe,n=Xt;xe=this,Xt=!0;try{return this.fn()}finally{Jp(this),xe=e,Xt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Gl(e);this.deps=this.depsTail=void 0,Xh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?bc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){el(this)&&this.run()}get dirty(){return el(this)}}let Qp=0,_i,yi;function Yp(t,e=!1){if(t.flags|=8,e){t.next=yi,yi=t;return}t.next=_i,_i=t}function Wl(){Qp++}function Kl(){if(--Qp>0)return;if(yi){let e=yi;for(yi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;_i;){let e=_i;for(_i=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Xp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Jp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Gl(r),Vv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function el(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Zp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Zp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Oi)||(t.globalVersion=Oi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!el(t))))return;t.flags|=2;const e=t.dep,n=xe,r=Xt;xe=t,Xt=!0;try{Xp(t);const s=t.fn(t._value);(e.version===0||or(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{xe=n,Xt=r,Jp(t),t.flags&=-3}}function Gl(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Gl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Vv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Xt=!0;const em=[];function Nn(){em.push(Xt),Xt=!1}function On(){const t=em.pop();Xt=t===void 0?!0:t}function Xh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=xe;xe=void 0;try{e()}finally{xe=n}}}let Oi=0;class Dv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ql{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!xe||!Xt||xe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==xe)n=this.activeLink=new Dv(xe,this),xe.deps?(n.prevDep=xe.depsTail,xe.depsTail.nextDep=n,xe.depsTail=n):xe.deps=xe.depsTail=n,tm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=xe.depsTail,n.nextDep=void 0,xe.depsTail.nextDep=n,xe.depsTail=n,xe.deps===n&&(xe.deps=r)}return n}trigger(e){this.version++,Oi++,this.notify(e)}notify(e){Wl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Kl()}}}function tm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)tm(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Xo=new WeakMap,Br=Symbol(""),tl=Symbol(""),xi=Symbol("");function yt(t,e,n){if(Xt&&xe){let r=Xo.get(t);r||Xo.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Ql),s.map=r,s.key=n),s.track()}}function Cn(t,e,n,r,s,i){const o=Xo.get(t);if(!o){Oi++;return}const c=l=>{l&&l.trigger()};if(Wl(),e==="clear")o.forEach(c);else{const l=le(t),u=l&&Hl(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===xi||!wr(m)&&m>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(xi)),e){case"add":l?u&&c(o.get("length")):(c(o.get(Br)),Es(t)&&c(o.get(tl)));break;case"delete":l||(c(o.get(Br)),Es(t)&&c(o.get(tl)));break;case"set":Es(t)&&c(o.get(Br));break}}Kl()}function Nv(t,e){const n=Xo.get(t);return n&&n.get(e)}function cs(t){const e=be(t);return e===t?e:(yt(e,"iterate",xi),jt(t)?e:e.map(at))}function Na(t){return yt(t=be(t),"iterate",xi),t}const Ov={__proto__:null,[Symbol.iterator](){return Rc(this,Symbol.iterator,at)},concat(...t){return cs(this).concat(...t.map(e=>le(e)?cs(e):e))},entries(){return Rc(this,"entries",t=>(t[1]=at(t[1]),t))},every(t,e){return wn(this,"every",t,e,void 0,arguments)},filter(t,e){return wn(this,"filter",t,e,n=>n.map(at),arguments)},find(t,e){return wn(this,"find",t,e,at,arguments)},findIndex(t,e){return wn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return wn(this,"findLast",t,e,at,arguments)},findLastIndex(t,e){return wn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return wn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Sc(this,"includes",t)},indexOf(...t){return Sc(this,"indexOf",t)},join(t){return cs(this).join(t)},lastIndexOf(...t){return Sc(this,"lastIndexOf",t)},map(t,e){return wn(this,"map",t,e,void 0,arguments)},pop(){return ii(this,"pop")},push(...t){return ii(this,"push",t)},reduce(t,...e){return Jh(this,"reduce",t,e)},reduceRight(t,...e){return Jh(this,"reduceRight",t,e)},shift(){return ii(this,"shift")},some(t,e){return wn(this,"some",t,e,void 0,arguments)},splice(...t){return ii(this,"splice",t)},toReversed(){return cs(this).toReversed()},toSorted(t){return cs(this).toSorted(t)},toSpliced(...t){return cs(this).toSpliced(...t)},unshift(...t){return ii(this,"unshift",t)},values(){return Rc(this,"values",at)}};function Rc(t,e,n){const r=Na(t),s=r[e]();return r!==t&&!jt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const xv=Array.prototype;function wn(t,e,n,r,s,i){const o=Na(t),c=o!==t&&!jt(t),l=o[e];if(l!==xv[e]){const p=l.apply(t,i);return c?at(p):p}let u=n;o!==t&&(c?u=function(p,m){return n.call(this,at(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=l.call(o,u,r);return c&&s?s(f):f}function Jh(t,e,n,r){const s=Na(t);let i=n;return s!==t&&(jt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,at(c),l,t)}),s[e](i,...r)}function Sc(t,e,n){const r=be(t);yt(r,"iterate",xi);const s=r[e](...n);return(s===-1||s===!1)&&Jl(n[0])?(n[0]=be(n[0]),r[e](...n)):s}function ii(t,e,n=[]){Nn(),Wl();const r=be(t)[e].apply(t,n);return Kl(),On(),r}const Mv=$l("__proto__,__v_isRef,__isVue"),nm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(wr));function Lv(t){wr(t)||(t=String(t));const e=be(this);return yt(e,"has",t),e.hasOwnProperty(t)}class rm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Kv:am:i?om:im).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=le(e);if(!s){let l;if(o&&(l=Ov[n]))return l;if(n==="hasOwnProperty")return Lv}const c=Reflect.get(e,n,ze(e)?e:r);return(wr(n)?nm.has(n):Mv(n))||(s||yt(e,"get",n),i)?c:ze(c)?o&&Hl(n)?c:c.value:Ue(c)?s?lm(c):to(c):c}}class sm extends rm{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=pr(i);if(!jt(r)&&!pr(r)&&(i=be(i),r=be(r)),!le(e)&&ze(i)&&!ze(r))return l||(i.value=r),!0}const o=le(e)&&Hl(n)?Number(n)<e.length:Se(e,n),c=Reflect.set(e,n,r,ze(e)?e:s);return e===be(s)&&(o?or(r,i)&&Cn(e,"set",n,r):Cn(e,"add",n,r)),c}deleteProperty(e,n){const r=Se(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Cn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!wr(n)||!nm.has(n))&&yt(e,"has",n),r}ownKeys(e){return yt(e,"iterate",le(e)?"length":Br),Reflect.ownKeys(e)}}class Fv extends rm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Uv=new sm,Bv=new Fv,$v=new sm(!0);const nl=t=>t,bo=t=>Reflect.getPrototypeOf(t);function jv(t,e,n){return function(...r){const s=this.__v_raw,i=be(s),o=Es(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),f=n?nl:e?Jo:at;return!e&&yt(i,"iterate",l?tl:Br),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:c?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function Ro(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function qv(t,e){const n={get(s){const i=this.__v_raw,o=be(i),c=be(s);t||(or(s,c)&&yt(o,"get",s),yt(o,"get",c));const{has:l}=bo(o),u=e?nl:t?Jo:at;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&yt(be(s),"iterate",Br),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=be(i),c=be(s);return t||(or(s,c)&&yt(o,"has",s),yt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=be(c),u=e?nl:t?Jo:at;return!t&&yt(l,"iterate",Br),c.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return rt(n,t?{add:Ro("add"),set:Ro("set"),delete:Ro("delete"),clear:Ro("clear")}:{add(s){!e&&!jt(s)&&!pr(s)&&(s=be(s));const i=be(this);return bo(i).has.call(i,s)||(i.add(s),Cn(i,"add",s,s)),this},set(s,i){!e&&!jt(i)&&!pr(i)&&(i=be(i));const o=be(this),{has:c,get:l}=bo(o);let u=c.call(o,s);u||(s=be(s),u=c.call(o,s));const f=l.call(o,s);return o.set(s,i),u?or(i,f)&&Cn(o,"set",s,i):Cn(o,"add",s,i),this},delete(s){const i=be(this),{has:o,get:c}=bo(i);let l=o.call(i,s);l||(s=be(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&Cn(i,"delete",s,void 0),u},clear(){const s=be(this),i=s.size!==0,o=s.clear();return i&&Cn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=jv(s,t,e)}),n}function Yl(t,e){const n=qv(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Se(n,s)&&s in r?n:r,s,i)}const Hv={get:Yl(!1,!1)},zv={get:Yl(!1,!0)},Wv={get:Yl(!0,!1)};const im=new WeakMap,om=new WeakMap,am=new WeakMap,Kv=new WeakMap;function Gv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qv(t){return t.__v_skip||!Object.isExtensible(t)?0:Gv(Ev(t))}function to(t){return pr(t)?t:Xl(t,!1,Uv,Hv,im)}function cm(t){return Xl(t,!1,$v,zv,om)}function lm(t){return Xl(t,!0,Bv,Wv,am)}function Xl(t,e,n,r,s){if(!Ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Qv(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function ar(t){return pr(t)?ar(t.__v_raw):!!(t&&t.__v_isReactive)}function pr(t){return!!(t&&t.__v_isReadonly)}function jt(t){return!!(t&&t.__v_isShallow)}function Jl(t){return t?!!t.__v_raw:!1}function be(t){const e=t&&t.__v_raw;return e?be(e):t}function Zl(t){return!Se(t,"__v_skip")&&Object.isExtensible(t)&&$p(t,"__v_skip",!0),t}const at=t=>Ue(t)?to(t):t,Jo=t=>Ue(t)?lm(t):t;function ze(t){return t?t.__v_isRef===!0:!1}function Je(t){return um(t,!1)}function Yv(t){return um(t,!0)}function um(t,e){return ze(t)?t:new Xv(t,e)}class Xv{constructor(e,n){this.dep=new Ql,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:be(e),this._value=n?e:at(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||jt(e)||pr(e);e=r?e:be(e),or(e,n)&&(this._rawValue=e,this._value=r?e:at(e),this.dep.trigger())}}function ct(t){return ze(t)?t.value:t}const Jv={get:(t,e,n)=>e==="__v_raw"?t:ct(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ze(s)&&!ze(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function hm(t){return ar(t)?t:new Proxy(t,Jv)}function Zv(t){const e=le(t)?new Array(t.length):{};for(const n in t)e[n]=t0(t,n);return e}class e0{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Nv(be(this._object),this._key)}}function t0(t,e,n){const r=t[e];return ze(r)?r:new e0(t,e,n)}class n0{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ql(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Oi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&xe!==this)return Yp(this,!0),!0}get value(){const e=this.dep.track();return Zp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function r0(t,e,n=!1){let r,s;return he(t)?r=t:(r=t.get,s=t.set),new n0(r,s,n)}const So={},Zo=new WeakMap;let Or;function s0(t,e=!1,n=Or){if(n){let r=Zo.get(n);r||Zo.set(n,r=[]),r.push(t)}}function i0(t,e,n=Oe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=z=>s?z:jt(z)||s===!1||s===0?Pn(z,1):Pn(z);let f,p,m,v,P=!1,V=!1;if(ze(t)?(p=()=>t.value,P=jt(t)):ar(t)?(p=()=>u(t),P=!0):le(t)?(V=!0,P=t.some(z=>ar(z)||jt(z)),p=()=>t.map(z=>{if(ze(z))return z.value;if(ar(z))return u(z);if(he(z))return l?l(z,2):z()})):he(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){Nn();try{m()}finally{On()}}const z=Or;Or=f;try{return l?l(t,3,[v]):t(v)}finally{Or=z}}:p=un,e&&s){const z=p,ee=s===!0?1/0:s;p=()=>Pn(z(),ee)}const D=Kp(),B=()=>{f.stop(),D&&D.active&&ql(D.effects,f)};if(i&&e){const z=e;e=(...ee)=>{z(...ee),B()}}let U=V?new Array(t.length).fill(So):So;const q=z=>{if(!(!(f.flags&1)||!f.dirty&&!z))if(e){const ee=f.run();if(s||P||(V?ee.some((ie,R)=>or(ie,U[R])):or(ee,U))){m&&m();const ie=Or;Or=f;try{const R=[ee,U===So?void 0:V&&U[0]===So?[]:U,v];U=ee,l?l(e,3,R):e(...R)}finally{Or=ie}}}else f.run()};return c&&c(q),f=new Gp(p),f.scheduler=o?()=>o(q,!1):q,v=z=>s0(z,!1,f),m=f.onStop=()=>{const z=Zo.get(f);if(z){if(l)l(z,4);else for(const ee of z)ee();Zo.delete(f)}},e?r?q(!0):U=f.run():o?o(q.bind(null,!0),!0):f.run(),B.pause=f.pause.bind(f),B.resume=f.resume.bind(f),B.stop=B,B}function Pn(t,e=1/0,n){if(e<=0||!Ue(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ze(t))Pn(t.value,e,n);else if(le(t))for(let r=0;r<t.length;r++)Pn(t[r],e,n);else if(Lp(t)||Es(t))t.forEach(r=>{Pn(r,e,n)});else if(Bp(t)){for(const r in t)Pn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Pn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function no(t,e,n,r){try{return r?t(...r):t()}catch(s){Oa(s,e,n)}}function Jt(t,e,n,r){if(he(t)){const s=no(t,e,n,r);return s&&Fp(s)&&s.catch(i=>{Oa(i,e,n)}),s}if(le(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Jt(t[i],e,n,r));return s}}function Oa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Oe;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,u)===!1)return}c=c.parent}if(i){Nn(),no(i,null,10,[t,l,u]),On();return}}o0(t,n,s,r,o)}function o0(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const bt=[];let an=-1;const Ts=[];let Jn=null,us=0;const fm=Promise.resolve();let ea=null;function eu(t){const e=ea||fm;return t?e.then(this?t.bind(this):t):e}function a0(t){let e=an+1,n=bt.length;for(;e<n;){const r=e+n>>>1,s=bt[r],i=Mi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function tu(t){if(!(t.flags&1)){const e=Mi(t),n=bt[bt.length-1];!n||!(t.flags&2)&&e>=Mi(n)?bt.push(t):bt.splice(a0(e),0,t),t.flags|=1,dm()}}function dm(){ea||(ea=fm.then(mm))}function c0(t){le(t)?Ts.push(...t):Jn&&t.id===-1?Jn.splice(us+1,0,t):t.flags&1||(Ts.push(t),t.flags|=1),dm()}function Zh(t,e,n=an+1){for(;n<bt.length;n++){const r=bt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;bt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function pm(t){if(Ts.length){const e=[...new Set(Ts)].sort((n,r)=>Mi(n)-Mi(r));if(Ts.length=0,Jn){Jn.push(...e);return}for(Jn=e,us=0;us<Jn.length;us++){const n=Jn[us];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Jn=null,us=0}}const Mi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function mm(t){try{for(an=0;an<bt.length;an++){const e=bt[an];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),no(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;an<bt.length;an++){const e=bt[an];e&&(e.flags&=-2)}an=-1,bt.length=0,pm(),ea=null,(bt.length||Ts.length)&&mm()}}let Mt=null,gm=null;function ta(t){const e=Mt;return Mt=t,gm=t&&t.type.__scopeId||null,e}function Lr(t,e=Mt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&hf(-1);const i=ta(e);let o;try{o=t(...s)}finally{ta(i),r._d&&hf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Fr(t,e){if(Mt===null)return t;const n=Ua(Mt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Oe]=e[s];i&&(he(i)&&(i={mounted:i,updated:i}),i.deep&&Pn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function kr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Nn(),Jt(l,n,8,[t.el,c,t,e]),On())}}const l0=Symbol("_vte"),_m=t=>t.__isTeleport,Sn=Symbol("_leaveCb"),Co=Symbol("_enterCb");function u0(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Bn(()=>{t.isMounted=!0}),Rm(()=>{t.isUnmounting=!0}),t}const Ft=[Function,Array],ym={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ft,onEnter:Ft,onAfterEnter:Ft,onEnterCancelled:Ft,onBeforeLeave:Ft,onLeave:Ft,onAfterLeave:Ft,onLeaveCancelled:Ft,onBeforeAppear:Ft,onAppear:Ft,onAfterAppear:Ft,onAppearCancelled:Ft},vm=t=>{const e=t.subTree;return e.component?vm(e.component):e},h0={name:"BaseTransition",props:ym,setup(t,{slots:e}){const n=au(),r=u0();return()=>{const s=e.default&&Im(e.default(),!0);if(!s||!s.length)return;const i=Em(s),o=be(t),{mode:c}=o;if(r.isLeaving)return Cc(i);const l=ef(i);if(!l)return Cc(i);let u=rl(l,o,r,n,p=>u=p);l.type!==Rt&&Li(l,u);let f=n.subTree&&ef(n.subTree);if(f&&f.type!==Rt&&!Mr(l,f)&&vm(n).type!==Rt){let p=rl(f,o,r,n);if(Li(f,p),c==="out-in"&&l.type!==Rt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,f=void 0},Cc(i);c==="in-out"&&l.type!==Rt?p.delayLeave=(m,v,P)=>{const V=Tm(r,f);V[String(f.key)]=f,m[Sn]=()=>{v(),m[Sn]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{P(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function Em(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Rt){e=n;break}}return e}const f0=h0;function Tm(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function rl(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:m,onLeave:v,onAfterLeave:P,onLeaveCancelled:V,onBeforeAppear:D,onAppear:B,onAfterAppear:U,onAppearCancelled:q}=e,z=String(t.key),ee=Tm(n,t),ie=(_,A)=>{_&&Jt(_,r,9,A)},R=(_,A)=>{const w=A[1];ie(_,A),le(_)?_.every(I=>I.length<=1)&&w():_.length<=1&&w()},y={mode:o,persisted:c,beforeEnter(_){let A=l;if(!n.isMounted)if(i)A=D||l;else return;_[Sn]&&_[Sn](!0);const w=ee[z];w&&Mr(t,w)&&w.el[Sn]&&w.el[Sn](),ie(A,[_])},enter(_){let A=u,w=f,I=p;if(!n.isMounted)if(i)A=B||u,w=U||f,I=q||p;else return;let E=!1;const Ee=_[Co]=Be=>{E||(E=!0,Be?ie(I,[_]):ie(w,[_]),y.delayedLeave&&y.delayedLeave(),_[Co]=void 0)};A?R(A,[_,Ee]):Ee()},leave(_,A){const w=String(t.key);if(_[Co]&&_[Co](!0),n.isUnmounting)return A();ie(m,[_]);let I=!1;const E=_[Sn]=Ee=>{I||(I=!0,A(),Ee?ie(V,[_]):ie(P,[_]),_[Sn]=void 0,ee[w]===t&&delete ee[w])};ee[w]=t,v?R(v,[_,E]):E()},clone(_){const A=rl(_,e,n,r,s);return s&&s(A),A}};return y}function Cc(t){if(xa(t))return t=mr(t),t.children=null,t}function ef(t){if(!xa(t))return _m(t.type)&&t.children?Em(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&he(n.default))return n.default()}}function Li(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Li(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Im(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===vt?(o.patchFlag&128&&s++,r=r.concat(Im(o.children,e,c))):(e||o.type!==Rt)&&r.push(c!=null?mr(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function wm(t,e){return he(t)?rt({name:t.name},e,{setup:t}):t}function Am(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function vi(t,e,n,r,s=!1){if(le(t)){t.forEach((P,V)=>vi(P,e&&(le(e)?e[V]:e),n,r,s));return}if(Ei(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&vi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ua(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,f=c.refs===Oe?c.refs={}:c.refs,p=c.setupState,m=be(p),v=p===Oe?Mp:P=>Se(m,P);if(u!=null&&u!==l){if(We(u))f[u]=null,v(u)&&(p[u]=null);else if(ze(u)){u.value=null;const P=e;P.k&&(f[P.k]=null)}}if(he(l))no(l,c,12,[o,f]);else{const P=We(l),V=ze(l);if(P||V){const D=()=>{if(t.f){const B=P?v(l)?p[l]:f[l]:l.value;if(s)le(B)&&ql(B,i);else if(le(B))B.includes(i)||B.push(i);else if(P)f[l]=[i],v(l)&&(p[l]=f[l]);else{const U=[i];l.value=U,t.k&&(f[t.k]=U)}}else P?(f[l]=o,v(l)&&(p[l]=o)):V&&(l.value=o,t.k&&(f[t.k]=o))};o?(D.id=-1,xt(D,n)):D()}}}Va().requestIdleCallback;Va().cancelIdleCallback;const Ei=t=>!!t.type.__asyncLoader,xa=t=>t.type.__isKeepAlive;function d0(t,e){bm(t,"a",e)}function p0(t,e){bm(t,"da",e)}function bm(t,e,n=Tt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ma(e,r,n),n){let s=n.parent;for(;s&&s.parent;)xa(s.parent.vnode)&&m0(r,e,n,s),s=s.parent}}function m0(t,e,n,r){const s=Ma(e,t,r,!0);nu(()=>{ql(r[e],s)},n)}function Ma(t,e,n=Tt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Nn();const c=ro(n),l=Jt(e,n,t,o);return c(),On(),l});return r?s.unshift(i):s.push(i),i}}const Un=t=>(e,n=Tt)=>{(!Ui||t==="sp")&&Ma(t,(...r)=>e(...r),n)},g0=Un("bm"),Bn=Un("m"),_0=Un("bu"),y0=Un("u"),Rm=Un("bum"),nu=Un("um"),v0=Un("sp"),E0=Un("rtg"),T0=Un("rtc");function I0(t,e=Tt){Ma("ec",t,e)}const w0="components";function na(t,e){return b0(w0,t,!0,e)||t}const A0=Symbol.for("v-ndc");function b0(t,e,n=!0,r=!1){const s=Mt||Tt;if(s){const i=s.type;{const c=fE(i,!1);if(c&&(c===e||c===Ht(e)||c===ka(Ht(e))))return i}const o=tf(s[t]||i[t],e)||tf(s.appContext[t],e);return!o&&r?i:o}}function tf(t,e){return t&&(t[e]||t[Ht(e)]||t[ka(Ht(e))])}function Ti(t,e,n,r){let s;const i=n,o=le(t);if(o||We(t)){const c=o&&ar(t);let l=!1,u=!1;c&&(l=!jt(t),u=pr(t),t=Na(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?u?Jo(at(t[f])):at(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Ue(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const sl=t=>t?Km(t)?Ua(t):sl(t.parent):null,Ii=rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>sl(t.parent),$root:t=>sl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Cm(t),$forceUpdate:t=>t.f||(t.f=()=>{tu(t.update)}),$nextTick:t=>t.n||(t.n=eu.bind(t.proxy)),$watch:t=>K0.bind(t)}),Pc=(t,e)=>t!==Oe&&!t.__isScriptSetup&&Se(t,e),R0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Pc(r,e))return o[e]=1,r[e];if(s!==Oe&&Se(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Se(u,e))return o[e]=3,i[e];if(n!==Oe&&Se(n,e))return o[e]=4,n[e];il&&(o[e]=0)}}const f=Ii[e];let p,m;if(f)return e==="$attrs"&&yt(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Oe&&Se(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,Se(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Pc(s,e)?(s[e]=n,!0):r!==Oe&&Se(r,e)?(r[e]=n,!0):Se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:o}},c){let l,u;return!!(n[c]||t!==Oe&&c[0]!=="$"&&Se(t,c)||Pc(e,c)||(l=i[0])&&Se(l,c)||Se(r,c)||Se(Ii,c)||Se(s.config.globalProperties,c)||(u=o.__cssModules)&&u[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function nf(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let il=!0;function S0(t){const e=Cm(t),n=t.proxy,r=t.ctx;il=!1,e.beforeCreate&&rf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:v,updated:P,activated:V,deactivated:D,beforeDestroy:B,beforeUnmount:U,destroyed:q,unmounted:z,render:ee,renderTracked:ie,renderTriggered:R,errorCaptured:y,serverPrefetch:_,expose:A,inheritAttrs:w,components:I,directives:E,filters:Ee}=e;if(u&&C0(u,r,null),o)for(const de in o){const Te=o[de];he(Te)&&(r[de]=Te.bind(n))}if(s){const de=s.call(n,n);Ue(de)&&(t.data=to(de))}if(il=!0,i)for(const de in i){const Te=i[de],Ct=he(Te)?Te.bind(n,n):he(Te.get)?Te.get.bind(n,n):un,nn=!he(Te)&&he(Te.set)?Te.set.bind(n):un,Vt=kt({get:Ct,set:nn});Object.defineProperty(r,de,{enumerable:!0,configurable:!0,get:()=>Vt.value,set:st=>Vt.value=st})}if(c)for(const de in c)Sm(c[de],r,n,de);if(l){const de=he(l)?l.call(n):l;Reflect.ownKeys(de).forEach(Te=>{Lo(Te,de[Te])})}f&&rf(f,t,"c");function ke(de,Te){le(Te)?Te.forEach(Ct=>de(Ct.bind(n))):Te&&de(Te.bind(n))}if(ke(g0,p),ke(Bn,m),ke(_0,v),ke(y0,P),ke(d0,V),ke(p0,D),ke(I0,y),ke(T0,ie),ke(E0,R),ke(Rm,U),ke(nu,z),ke(v0,_),le(A))if(A.length){const de=t.exposed||(t.exposed={});A.forEach(Te=>{Object.defineProperty(de,Te,{get:()=>n[Te],set:Ct=>n[Te]=Ct,enumerable:!0})})}else t.exposed||(t.exposed={});ee&&t.render===un&&(t.render=ee),w!=null&&(t.inheritAttrs=w),I&&(t.components=I),E&&(t.directives=E),_&&Am(t)}function C0(t,e,n=un){le(t)&&(t=ol(t));for(const r in t){const s=t[r];let i;Ue(s)?"default"in s?i=qt(s.from||r,s.default,!0):i=qt(s.from||r):i=qt(s),ze(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function rf(t,e,n){Jt(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Sm(t,e,n,r){let s=r.includes(".")?$m(n,r):()=>n[r];if(We(t)){const i=e[t];he(i)&&wi(s,i)}else if(he(t))wi(s,t.bind(n));else if(Ue(t))if(le(t))t.forEach(i=>Sm(i,e,n,r));else{const i=he(t.handler)?t.handler.bind(n):e[t.handler];he(i)&&wi(s,i,t)}}function Cm(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>ra(l,u,o,!0)),ra(l,e,o)),Ue(e)&&i.set(e,l),l}function ra(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ra(t,i,n,!0),s&&s.forEach(o=>ra(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=P0[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const P0={data:sf,props:of,emits:of,methods:li,computed:li,beforeCreate:At,created:At,beforeMount:At,mounted:At,beforeUpdate:At,updated:At,beforeDestroy:At,beforeUnmount:At,destroyed:At,unmounted:At,activated:At,deactivated:At,errorCaptured:At,serverPrefetch:At,components:li,directives:li,watch:V0,provide:sf,inject:k0};function sf(t,e){return e?t?function(){return rt(he(t)?t.call(this,this):t,he(e)?e.call(this,this):e)}:e:t}function k0(t,e){return li(ol(t),ol(e))}function ol(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function At(t,e){return t?[...new Set([].concat(t,e))]:e}function li(t,e){return t?rt(Object.create(null),t,e):e}function of(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:rt(Object.create(null),nf(t),nf(e??{})):e}function V0(t,e){if(!t)return e;if(!e)return t;const n=rt(Object.create(null),t);for(const r in e)n[r]=At(t[r],e[r]);return n}function Pm(){return{app:null,config:{isNativeTag:Mp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let D0=0;function N0(t,e){return function(r,s=null){he(r)||(r=rt({},r)),s!=null&&!Ue(s)&&(s=null);const i=Pm(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:D0++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:pE,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&he(f.install)?(o.add(f),f.install(u,...p)):he(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!l){const v=u._ceVNode||Ce(r,s);return v.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(v,f,m),l=!0,u._container=f,f.__vue_app__=u,Ua(v.component)}},onUnmount(f){c.push(f)},unmount(){l&&(Jt(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=$r;$r=u;try{return f()}finally{$r=p}}};return u}}let $r=null;function Lo(t,e){if(Tt){let n=Tt.provides;const r=Tt.parent&&Tt.parent.provides;r===n&&(n=Tt.provides=Object.create(r)),n[t]=e}}function qt(t,e,n=!1){const r=au();if(r||$r){let s=$r?$r._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&he(e)?e.call(r&&r.proxy):e}}function O0(){return!!(au()||$r)}const km={},Vm=()=>Object.create(km),Dm=t=>Object.getPrototypeOf(t)===km;function x0(t,e,n,r=!1){const s={},i=Vm();t.propsDefaults=Object.create(null),Nm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:cm(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function M0(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=be(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(La(t.emitsOptions,m))continue;const v=e[m];if(l)if(Se(i,m))v!==i[m]&&(i[m]=v,u=!0);else{const P=Ht(m);s[P]=al(l,c,P,v,t,!1)}else v!==i[m]&&(i[m]=v,u=!0)}}}else{Nm(t,e,s,i)&&(u=!0);let f;for(const p in c)(!e||!Se(e,p)&&((f=Qr(p))===p||!Se(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=al(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Se(e,p))&&(delete i[p],u=!0)}u&&Cn(t.attrs,"set","")}function Nm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(gi(l))continue;const u=e[l];let f;s&&Se(s,f=Ht(l))?!i||!i.includes(f)?n[f]=u:(c||(c={}))[f]=u:La(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=be(n),u=c||Oe;for(let f=0;f<i.length;f++){const p=i[f];n[p]=al(s,l,p,u[p],t,!Se(u,p))}}return o}function al(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Se(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&he(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=ro(s);r=u[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Qr(n))&&(r=!0))}return r}const L0=new WeakMap;function Om(t,e,n=!1){const r=n?L0:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!he(t)){const f=p=>{l=!0;const[m,v]=Om(p,e,!0);rt(o,m),v&&c.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Ue(t)&&r.set(t,vs),vs;if(le(i))for(let f=0;f<i.length;f++){const p=Ht(i[f]);af(p)&&(o[p]=Oe)}else if(i)for(const f in i){const p=Ht(f);if(af(p)){const m=i[f],v=o[p]=le(m)||he(m)?{type:m}:rt({},m),P=v.type;let V=!1,D=!0;if(le(P))for(let B=0;B<P.length;++B){const U=P[B],q=he(U)&&U.name;if(q==="Boolean"){V=!0;break}else q==="String"&&(D=!1)}else V=he(P)&&P.name==="Boolean";v[0]=V,v[1]=D,(V||Se(v,"default"))&&c.push(p)}}const u=[o,c];return Ue(t)&&r.set(t,u),u}function af(t){return t[0]!=="$"&&!gi(t)}const ru=t=>t==="_"||t==="_ctx"||t==="$stable",su=t=>le(t)?t.map(ln):[ln(t)],F0=(t,e,n)=>{if(e._n)return e;const r=Lr((...s)=>su(e(...s)),n);return r._c=!1,r},xm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ru(s))continue;const i=t[s];if(he(i))e[s]=F0(s,i,r);else if(i!=null){const o=su(i);e[s]=()=>o}}},Mm=(t,e)=>{const n=su(e);t.slots.default=()=>n},Lm=(t,e,n)=>{for(const r in e)(n||!ru(r))&&(t[r]=e[r])},U0=(t,e,n)=>{const r=t.slots=Vm();if(t.vnode.shapeFlag&32){const s=e._;s?(Lm(r,e,n),n&&$p(r,"_",s,!0)):xm(e,r)}else e&&Mm(t,e)},B0=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Oe;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Lm(s,e,n):(i=!e.$stable,xm(e,s)),o=e}else e&&(Mm(t,e),o={default:1});if(i)for(const c in s)!ru(c)&&o[c]==null&&delete s[c]},xt=eE;function $0(t){return j0(t)}function j0(t,e){const n=Va();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:v=un,insertStaticContent:P}=t,V=(T,b,S,M=null,F=null,N=null,G=void 0,H=null,$=!!b.dynamicChildren)=>{if(T===b)return;T&&!Mr(T,b)&&(M=O(T),st(T,F,N,!0),T=null),b.patchFlag===-2&&($=!1,b.dynamicChildren=null);const{type:j,ref:se,shapeFlag:Y}=b;switch(j){case Fa:D(T,b,S,M);break;case Rt:B(T,b,S,M);break;case Fo:T==null&&U(b,S,M,G);break;case vt:I(T,b,S,M,F,N,G,H,$);break;default:Y&1?ee(T,b,S,M,F,N,G,H,$):Y&6?E(T,b,S,M,F,N,G,H,$):(Y&64||Y&128)&&j.process(T,b,S,M,F,N,G,H,$,te)}se!=null&&F?vi(se,T&&T.ref,N,b||T,!b):se==null&&T&&T.ref!=null&&vi(T.ref,null,N,T,!0)},D=(T,b,S,M)=>{if(T==null)r(b.el=c(b.children),S,M);else{const F=b.el=T.el;b.children!==T.children&&u(F,b.children)}},B=(T,b,S,M)=>{T==null?r(b.el=l(b.children||""),S,M):b.el=T.el},U=(T,b,S,M)=>{[T.el,T.anchor]=P(T.children,b,S,M,T.el,T.anchor)},q=({el:T,anchor:b},S,M)=>{let F;for(;T&&T!==b;)F=m(T),r(T,S,M),T=F;r(b,S,M)},z=({el:T,anchor:b})=>{let S;for(;T&&T!==b;)S=m(T),s(T),T=S;s(b)},ee=(T,b,S,M,F,N,G,H,$)=>{b.type==="svg"?G="svg":b.type==="math"&&(G="mathml"),T==null?ie(b,S,M,F,N,G,H,$):_(T,b,F,N,G,H,$)},ie=(T,b,S,M,F,N,G,H)=>{let $,j;const{props:se,shapeFlag:Y,transition:re,dirs:oe}=T;if($=T.el=o(T.type,N,se&&se.is,se),Y&8?f($,T.children):Y&16&&y(T.children,$,null,M,F,kc(T,N),G,H),oe&&kr(T,null,M,"created"),R($,T,T.scopeId,G,M),se){for(const De in se)De!=="value"&&!gi(De)&&i($,De,null,se[De],N,M);"value"in se&&i($,"value",null,se.value,N),(j=se.onVnodeBeforeMount)&&on(j,M,T)}oe&&kr(T,null,M,"beforeMount");const ge=q0(F,re);ge&&re.beforeEnter($),r($,b,S),((j=se&&se.onVnodeMounted)||ge||oe)&&xt(()=>{j&&on(j,M,T),ge&&re.enter($),oe&&kr(T,null,M,"mounted")},F)},R=(T,b,S,M,F)=>{if(S&&v(T,S),M)for(let N=0;N<M.length;N++)v(T,M[N]);if(F){let N=F.subTree;if(b===N||qm(N.type)&&(N.ssContent===b||N.ssFallback===b)){const G=F.vnode;R(T,G,G.scopeId,G.slotScopeIds,F.parent)}}},y=(T,b,S,M,F,N,G,H,$=0)=>{for(let j=$;j<T.length;j++){const se=T[j]=H?Zn(T[j]):ln(T[j]);V(null,se,b,S,M,F,N,G,H)}},_=(T,b,S,M,F,N,G)=>{const H=b.el=T.el;let{patchFlag:$,dynamicChildren:j,dirs:se}=b;$|=T.patchFlag&16;const Y=T.props||Oe,re=b.props||Oe;let oe;if(S&&Vr(S,!1),(oe=re.onVnodeBeforeUpdate)&&on(oe,S,b,T),se&&kr(b,T,S,"beforeUpdate"),S&&Vr(S,!0),(Y.innerHTML&&re.innerHTML==null||Y.textContent&&re.textContent==null)&&f(H,""),j?A(T.dynamicChildren,j,H,S,M,kc(b,F),N):G||Te(T,b,H,null,S,M,kc(b,F),N,!1),$>0){if($&16)w(H,Y,re,S,F);else if($&2&&Y.class!==re.class&&i(H,"class",null,re.class,F),$&4&&i(H,"style",Y.style,re.style,F),$&8){const ge=b.dynamicProps;for(let De=0;De<ge.length;De++){const Ae=ge[De],dt=Y[Ae],pt=re[Ae];(pt!==dt||Ae==="value")&&i(H,Ae,dt,pt,F,S)}}$&1&&T.children!==b.children&&f(H,b.children)}else!G&&j==null&&w(H,Y,re,S,F);((oe=re.onVnodeUpdated)||se)&&xt(()=>{oe&&on(oe,S,b,T),se&&kr(b,T,S,"updated")},M)},A=(T,b,S,M,F,N,G)=>{for(let H=0;H<b.length;H++){const $=T[H],j=b[H],se=$.el&&($.type===vt||!Mr($,j)||$.shapeFlag&198)?p($.el):S;V($,j,se,null,M,F,N,G,!0)}},w=(T,b,S,M,F)=>{if(b!==S){if(b!==Oe)for(const N in b)!gi(N)&&!(N in S)&&i(T,N,b[N],null,F,M);for(const N in S){if(gi(N))continue;const G=S[N],H=b[N];G!==H&&N!=="value"&&i(T,N,H,G,F,M)}"value"in S&&i(T,"value",b.value,S.value,F)}},I=(T,b,S,M,F,N,G,H,$)=>{const j=b.el=T?T.el:c(""),se=b.anchor=T?T.anchor:c("");let{patchFlag:Y,dynamicChildren:re,slotScopeIds:oe}=b;oe&&(H=H?H.concat(oe):oe),T==null?(r(j,S,M),r(se,S,M),y(b.children||[],S,se,F,N,G,H,$)):Y>0&&Y&64&&re&&T.dynamicChildren?(A(T.dynamicChildren,re,S,F,N,G,H),(b.key!=null||F&&b===F.subTree)&&Fm(T,b,!0)):Te(T,b,S,se,F,N,G,H,$)},E=(T,b,S,M,F,N,G,H,$)=>{b.slotScopeIds=H,T==null?b.shapeFlag&512?F.ctx.activate(b,S,M,G,$):Ee(b,S,M,F,N,G,$):Be(T,b,$)},Ee=(T,b,S,M,F,N,G)=>{const H=T.component=aE(T,M,F);if(xa(T)&&(H.ctx.renderer=te),cE(H,!1,G),H.asyncDep){if(F&&F.registerDep(H,ke,G),!T.el){const $=H.subTree=Ce(Rt);B(null,$,b,S),T.placeholder=$.el}}else ke(H,T,b,S,F,N,G)},Be=(T,b,S)=>{const M=b.component=T.component;if(J0(T,b,S))if(M.asyncDep&&!M.asyncResolved){de(M,b,S);return}else M.next=b,M.update();else b.el=T.el,M.vnode=b},ke=(T,b,S,M,F,N,G)=>{const H=()=>{if(T.isMounted){let{next:Y,bu:re,u:oe,parent:ge,vnode:De}=T;{const Nt=Um(T);if(Nt){Y&&(Y.el=De.el,de(T,Y,G)),Nt.asyncDep.then(()=>{T.isUnmounted||H()});return}}let Ae=Y,dt;Vr(T,!1),Y?(Y.el=De.el,de(T,Y,G)):Y=De,re&&Mo(re),(dt=Y.props&&Y.props.onVnodeBeforeUpdate)&&on(dt,ge,Y,De),Vr(T,!0);const pt=lf(T),Dt=T.subTree;T.subTree=pt,V(Dt,pt,p(Dt.el),O(Dt),T,F,N),Y.el=pt.el,Ae===null&&Z0(T,pt.el),oe&&xt(oe,F),(dt=Y.props&&Y.props.onVnodeUpdated)&&xt(()=>on(dt,ge,Y,De),F)}else{let Y;const{el:re,props:oe}=b,{bm:ge,m:De,parent:Ae,root:dt,type:pt}=T,Dt=Ei(b);Vr(T,!1),ge&&Mo(ge),!Dt&&(Y=oe&&oe.onVnodeBeforeMount)&&on(Y,Ae,b),Vr(T,!0);{dt.ce&&dt.ce._def.shadowRoot!==!1&&dt.ce._injectChildStyle(pt);const Nt=T.subTree=lf(T);V(null,Nt,S,M,T,F,N),b.el=Nt.el}if(De&&xt(De,F),!Dt&&(Y=oe&&oe.onVnodeMounted)){const Nt=b;xt(()=>on(Y,Ae,Nt),F)}(b.shapeFlag&256||Ae&&Ei(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&T.a&&xt(T.a,F),T.isMounted=!0,b=S=M=null}};T.scope.on();const $=T.effect=new Gp(H);T.scope.off();const j=T.update=$.run.bind($),se=T.job=$.runIfDirty.bind($);se.i=T,se.id=T.uid,$.scheduler=()=>tu(se),Vr(T,!0),j()},de=(T,b,S)=>{b.component=T;const M=T.vnode.props;T.vnode=b,T.next=null,M0(T,b.props,M,S),B0(T,b.children,S),Nn(),Zh(T),On()},Te=(T,b,S,M,F,N,G,H,$=!1)=>{const j=T&&T.children,se=T?T.shapeFlag:0,Y=b.children,{patchFlag:re,shapeFlag:oe}=b;if(re>0){if(re&128){nn(j,Y,S,M,F,N,G,H,$);return}else if(re&256){Ct(j,Y,S,M,F,N,G,H,$);return}}oe&8?(se&16&&ft(j,F,N),Y!==j&&f(S,Y)):se&16?oe&16?nn(j,Y,S,M,F,N,G,H,$):ft(j,F,N,!0):(se&8&&f(S,""),oe&16&&y(Y,S,M,F,N,G,H,$))},Ct=(T,b,S,M,F,N,G,H,$)=>{T=T||vs,b=b||vs;const j=T.length,se=b.length,Y=Math.min(j,se);let re;for(re=0;re<Y;re++){const oe=b[re]=$?Zn(b[re]):ln(b[re]);V(T[re],oe,S,null,F,N,G,H,$)}j>se?ft(T,F,N,!0,!1,Y):y(b,S,M,F,N,G,H,$,Y)},nn=(T,b,S,M,F,N,G,H,$)=>{let j=0;const se=b.length;let Y=T.length-1,re=se-1;for(;j<=Y&&j<=re;){const oe=T[j],ge=b[j]=$?Zn(b[j]):ln(b[j]);if(Mr(oe,ge))V(oe,ge,S,null,F,N,G,H,$);else break;j++}for(;j<=Y&&j<=re;){const oe=T[Y],ge=b[re]=$?Zn(b[re]):ln(b[re]);if(Mr(oe,ge))V(oe,ge,S,null,F,N,G,H,$);else break;Y--,re--}if(j>Y){if(j<=re){const oe=re+1,ge=oe<se?b[oe].el:M;for(;j<=re;)V(null,b[j]=$?Zn(b[j]):ln(b[j]),S,ge,F,N,G,H,$),j++}}else if(j>re)for(;j<=Y;)st(T[j],F,N,!0),j++;else{const oe=j,ge=j,De=new Map;for(j=ge;j<=re;j++){const it=b[j]=$?Zn(b[j]):ln(b[j]);it.key!=null&&De.set(it.key,j)}let Ae,dt=0;const pt=re-ge+1;let Dt=!1,Nt=0;const Wt=new Array(pt);for(j=0;j<pt;j++)Wt[j]=0;for(j=oe;j<=Y;j++){const it=T[j];if(dt>=pt){st(it,F,N,!0);continue}let et;if(it.key!=null)et=De.get(it.key);else for(Ae=ge;Ae<=re;Ae++)if(Wt[Ae-ge]===0&&Mr(it,b[Ae])){et=Ae;break}et===void 0?st(it,F,N,!0):(Wt[et-ge]=j+1,et>=Nt?Nt=et:Dt=!0,V(it,b[et],S,null,F,N,G,H,$),dt++)}const ss=Dt?H0(Wt):vs;for(Ae=ss.length-1,j=pt-1;j>=0;j--){const it=ge+j,et=b[it],Hs=b[it+1],br=it+1<se?Hs.el||Hs.placeholder:M;Wt[j]===0?V(null,et,S,br,F,N,G,H,$):Dt&&(Ae<0||j!==ss[Ae]?Vt(et,S,br,2):Ae--)}}},Vt=(T,b,S,M,F=null)=>{const{el:N,type:G,transition:H,children:$,shapeFlag:j}=T;if(j&6){Vt(T.component.subTree,b,S,M);return}if(j&128){T.suspense.move(b,S,M);return}if(j&64){G.move(T,b,S,te);return}if(G===vt){r(N,b,S);for(let Y=0;Y<$.length;Y++)Vt($[Y],b,S,M);r(T.anchor,b,S);return}if(G===Fo){q(T,b,S);return}if(M!==2&&j&1&&H)if(M===0)H.beforeEnter(N),r(N,b,S),xt(()=>H.enter(N),F);else{const{leave:Y,delayLeave:re,afterLeave:oe}=H,ge=()=>{T.ctx.isUnmounted?s(N):r(N,b,S)},De=()=>{N._isLeaving&&N[Sn](!0),Y(N,()=>{ge(),oe&&oe()})};re?re(N,ge,De):De()}else r(N,b,S)},st=(T,b,S,M=!1,F=!1)=>{const{type:N,props:G,ref:H,children:$,dynamicChildren:j,shapeFlag:se,patchFlag:Y,dirs:re,cacheIndex:oe}=T;if(Y===-2&&(F=!1),H!=null&&(Nn(),vi(H,null,S,T,!0),On()),oe!=null&&(b.renderCache[oe]=void 0),se&256){b.ctx.deactivate(T);return}const ge=se&1&&re,De=!Ei(T);let Ae;if(De&&(Ae=G&&G.onVnodeBeforeUnmount)&&on(Ae,b,T),se&6)$n(T.component,S,M);else{if(se&128){T.suspense.unmount(S,M);return}ge&&kr(T,null,b,"beforeUnmount"),se&64?T.type.remove(T,b,S,te,M):j&&!j.hasOnce&&(N!==vt||Y>0&&Y&64)?ft(j,b,S,!1,!0):(N===vt&&Y&384||!F&&se&16)&&ft($,b,S),M&&In(T)}(De&&(Ae=G&&G.onVnodeUnmounted)||ge)&&xt(()=>{Ae&&on(Ae,b,T),ge&&kr(T,null,b,"unmounted")},S)},In=T=>{const{type:b,el:S,anchor:M,transition:F}=T;if(b===vt){zt(S,M);return}if(b===Fo){z(T);return}const N=()=>{s(S),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(T.shapeFlag&1&&F&&!F.persisted){const{leave:G,delayLeave:H}=F,$=()=>G(S,N);H?H(T.el,N,$):$()}else N()},zt=(T,b)=>{let S;for(;T!==b;)S=m(T),s(T),T=S;s(b)},$n=(T,b,S)=>{const{bum:M,scope:F,job:N,subTree:G,um:H,m:$,a:j}=T;cf($),cf(j),M&&Mo(M),F.stop(),N&&(N.flags|=8,st(G,T,b,S)),H&&xt(H,b),xt(()=>{T.isUnmounted=!0},b)},ft=(T,b,S,M=!1,F=!1,N=0)=>{for(let G=N;G<T.length;G++)st(T[G],b,S,M,F)},O=T=>{if(T.shapeFlag&6)return O(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const b=m(T.anchor||T.el),S=b&&b[l0];return S?m(S):b};let J=!1;const Q=(T,b,S)=>{T==null?b._vnode&&st(b._vnode,null,null,!0):V(b._vnode||null,T,b,null,null,null,S),b._vnode=T,J||(J=!0,Zh(),pm(),J=!1)},te={p:V,um:st,m:Vt,r:In,mt:Ee,mc:y,pc:Te,pbc:A,n:O,o:t};return{render:Q,hydrate:void 0,createApp:N0(Q)}}function kc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Vr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function q0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Fm(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Zn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Fm(o,c)),c.type===Fa&&c.patchFlag!==-1&&(c.el=o.el),c.type===Rt&&!c.el&&(c.el=o.el)}}function H0(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Um(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Um(e)}function cf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const z0=Symbol.for("v-scx"),W0=()=>qt(z0);function wi(t,e,n){return Bm(t,e,n)}function Bm(t,e,n=Oe){const{immediate:r,deep:s,flush:i,once:o}=n,c=rt({},n),l=e&&r||!e&&i!=="post";let u;if(Ui){if(i==="sync"){const v=W0();u=v.__watcherHandles||(v.__watcherHandles=[])}else if(!l){const v=()=>{};return v.stop=un,v.resume=un,v.pause=un,v}}const f=Tt;c.call=(v,P,V)=>Jt(v,f,P,V);let p=!1;i==="post"?c.scheduler=v=>{xt(v,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(v,P)=>{P?v():tu(v)}),c.augmentJob=v=>{e&&(v.flags|=4),p&&(v.flags|=2,f&&(v.id=f.uid,v.i=f))};const m=i0(t,e,c);return Ui&&(u?u.push(m):l&&m()),m}function K0(t,e,n){const r=this.proxy,s=We(t)?t.includes(".")?$m(r,t):()=>r[t]:t.bind(r,r);let i;he(e)?i=e:(i=e.handler,n=e);const o=ro(this),c=Bm(s,i.bind(r),n);return o(),c}function $m(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const G0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ht(e)}Modifiers`]||t[`${Qr(e)}Modifiers`];function Q0(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Oe;let s=n;const i=e.startsWith("update:"),o=i&&G0(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>We(f)?f.trim():f)),o.number&&(s=n.map(Zc)));let c,l=r[c=wc(e)]||r[c=wc(Ht(e))];!l&&i&&(l=r[c=wc(Qr(e))]),l&&Jt(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Jt(u,t,6,s)}}function jm(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!he(t)){const l=u=>{const f=jm(u,e,!0);f&&(c=!0,rt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Ue(t)&&r.set(t,null),null):(le(i)?i.forEach(l=>o[l]=null):rt(o,i),Ue(t)&&r.set(t,o),o)}function La(t,e){return!t||!Sa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Se(t,e[0].toLowerCase()+e.slice(1))||Se(t,Qr(e))||Se(t,e))}function lf(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:f,props:p,data:m,setupState:v,ctx:P,inheritAttrs:V}=t,D=ta(t);let B,U;try{if(n.shapeFlag&4){const z=s||r,ee=z;B=ln(u.call(ee,z,f,p,v,m,P)),U=c}else{const z=e;B=ln(z.length>1?z(p,{attrs:c,slots:o,emit:l}):z(p,null)),U=e.props?c:Y0(c)}}catch(z){Ai.length=0,Oa(z,t,1),B=Ce(Rt)}let q=B;if(U&&V!==!1){const z=Object.keys(U),{shapeFlag:ee}=q;z.length&&ee&7&&(i&&z.some(jl)&&(U=X0(U,i)),q=mr(q,U,!1,!0))}return n.dirs&&(q=mr(q,null,!1,!0),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&Li(q,n.transition),B=q,ta(D),B}const Y0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Sa(n))&&((e||(e={}))[n]=t[n]);return e},X0=(t,e)=>{const n={};for(const r in t)(!jl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function J0(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?uf(r,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==r[m]&&!La(u,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?uf(r,o,u):!0:!!o;return!1}function uf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!La(n,i))return!0}return!1}function Z0({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const qm=t=>t.__isSuspense;function eE(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):c0(t)}const vt=Symbol.for("v-fgt"),Fa=Symbol.for("v-txt"),Rt=Symbol.for("v-cmt"),Fo=Symbol.for("v-stc"),Ai=[];let Lt=null;function me(t=!1){Ai.push(Lt=t?null:[])}function tE(){Ai.pop(),Lt=Ai[Ai.length-1]||null}let Fi=1;function hf(t,e=!1){Fi+=t,t<0&&Lt&&e&&(Lt.hasOnce=!0)}function Hm(t){return t.dynamicChildren=Fi>0?Lt||vs:null,tE(),Fi>0&&Lt&&Lt.push(t),t}function Ie(t,e,n,r,s,i){return Hm(K(t,e,n,r,s,i,!0))}function iu(t,e,n,r,s){return Hm(Ce(t,e,n,r,s,!0))}function sa(t){return t?t.__v_isVNode===!0:!1}function Mr(t,e){return t.type===e.type&&t.key===e.key}const zm=({key:t})=>t??null,Uo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?We(t)||ze(t)||he(t)?{i:Mt,r:t,k:e,f:!!n}:t:null);function K(t,e=null,n=null,r=0,s=null,i=t===vt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&zm(e),ref:e&&Uo(e),scopeId:gm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Mt};return c?(ou(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=We(n)?8:16),Fi>0&&!o&&Lt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Lt.push(l),l}const Ce=nE;function nE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===A0)&&(t=Rt),sa(t)){const c=mr(t,e,!0);return n&&ou(c,n),Fi>0&&!i&&Lt&&(c.shapeFlag&6?Lt[Lt.indexOf(t)]=c:Lt.push(c)),c.patchFlag=-2,c}if(dE(t)&&(t=t.__vccOpts),e){e=rE(e);let{class:c,style:l}=e;c&&!We(c)&&(e.class=Da(c)),Ue(l)&&(Jl(l)&&!le(l)&&(l=rt({},l)),e.style=zl(l))}const o=We(t)?1:qm(t)?128:_m(t)?64:Ue(t)?4:he(t)?2:0;return K(t,e,n,r,s,o,i,!0)}function rE(t){return t?Jl(t)||Dm(t)?rt({},t):t:null}function mr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?sE(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&zm(u),ref:e&&e.ref?n&&i?le(i)?i.concat(Uo(e)):[i,Uo(e)]:Uo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==vt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&mr(t.ssContent),ssFallback:t.ssFallback&&mr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Li(f,l.clone(f)),f}function Kt(t=" ",e=0){return Ce(Fa,null,t,e)}function Wm(t,e){const n=Ce(Fo,null,t);return n.staticCount=e,n}function Ss(t="",e=!1){return e?(me(),iu(Rt,null,t)):Ce(Rt,null,t)}function ln(t){return t==null||typeof t=="boolean"?Ce(Rt):le(t)?Ce(vt,null,t.slice()):sa(t)?Zn(t):Ce(Fa,null,String(t))}function Zn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:mr(t)}function ou(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ou(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Dm(e)?e._ctx=Mt:s===3&&Mt&&(Mt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else he(e)?(e={default:e,_ctx:Mt},n=32):(e=String(e),r&64?(n=16,e=[Kt(e)]):n=8);t.children=e,t.shapeFlag|=n}function sE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Da([e.class,r.class]));else if(s==="style")e.style=zl([e.style,r.style]);else if(Sa(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function on(t,e,n,r=null){Jt(t,e,7,[n,r])}const iE=Pm();let oE=0;function aE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||iE,i={uid:oE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new zp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Om(r,s),emitsOptions:jm(r,s),emit:null,emitted:null,propsDefaults:Oe,inheritAttrs:r.inheritAttrs,ctx:Oe,data:Oe,props:Oe,attrs:Oe,slots:Oe,refs:Oe,setupState:Oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Q0.bind(null,i),t.ce&&t.ce(i),i}let Tt=null;const au=()=>Tt||Mt;let ia,cl;{const t=Va(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ia=e("__VUE_INSTANCE_SETTERS__",n=>Tt=n),cl=e("__VUE_SSR_SETTERS__",n=>Ui=n)}const ro=t=>{const e=Tt;return ia(t),t.scope.on(),()=>{t.scope.off(),ia(e)}},ff=()=>{Tt&&Tt.scope.off(),ia(null)};function Km(t){return t.vnode.shapeFlag&4}let Ui=!1;function cE(t,e=!1,n=!1){e&&cl(e);const{props:r,children:s}=t.vnode,i=Km(t);x0(t,r,i,e),U0(t,s,n||e);const o=i?lE(t,e):void 0;return e&&cl(!1),o}function lE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,R0);const{setup:r}=n;if(r){Nn();const s=t.setupContext=r.length>1?hE(t):null,i=ro(t),o=no(r,t,0,[t.props,s]),c=Fp(o);if(On(),i(),(c||t.sp)&&!Ei(t)&&Am(t),c){if(o.then(ff,ff),e)return o.then(l=>{df(t,l)}).catch(l=>{Oa(l,t,0)});t.asyncDep=o}else df(t,o)}else Gm(t)}function df(t,e,n){he(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ue(e)&&(t.setupState=hm(e)),Gm(t)}function Gm(t,e,n){const r=t.type;t.render||(t.render=r.render||un);{const s=ro(t);Nn();try{S0(t)}finally{On(),s()}}}const uE={get(t,e){return yt(t,"get",""),t[e]}};function hE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,uE),slots:t.slots,emit:t.emit,expose:e}}function Ua(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(hm(Zl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ii)return Ii[n](t)},has(e,n){return n in e||n in Ii}})):t.proxy}function fE(t,e=!0){return he(t)?t.displayName||t.name:t.name||e&&t.__name}function dE(t){return he(t)&&"__vccOpts"in t}const kt=(t,e)=>r0(t,e,Ui);function cu(t,e,n){const r=arguments.length;return r===2?Ue(e)&&!le(e)?sa(e)?Ce(t,null,[e]):Ce(t,e):Ce(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&sa(n)&&(n=[n]),Ce(t,e,n))}const pE="3.5.19";/**
* @vue/runtime-dom v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ll;const pf=typeof window<"u"&&window.trustedTypes;if(pf)try{ll=pf.createPolicy("vue",{createHTML:t=>t})}catch{}const Qm=ll?t=>ll.createHTML(t):t=>t,mE="http://www.w3.org/2000/svg",gE="http://www.w3.org/1998/Math/MathML",Rn=typeof document<"u"?document:null,mf=Rn&&Rn.createElement("template"),_E={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Rn.createElementNS(mE,t):e==="mathml"?Rn.createElementNS(gE,t):n?Rn.createElement(t,{is:n}):Rn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Rn.createTextNode(t),createComment:t=>Rn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Rn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{mf.innerHTML=Qm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=mf.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Gn="transition",oi="animation",Bi=Symbol("_vtc"),Ym={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},yE=rt({},ym,Ym),vE=t=>(t.displayName="Transition",t.props=yE,t),EE=vE((t,{slots:e})=>cu(f0,TE(t),e)),Dr=(t,e=[])=>{le(t)?t.forEach(n=>n(...e)):t&&t(...e)},gf=t=>t?le(t)?t.some(e=>e.length>1):t.length>1:!1;function TE(t){const e={};for(const I in t)I in Ym||(e[I]=t[I]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:f=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=t,P=IE(s),V=P&&P[0],D=P&&P[1],{onBeforeEnter:B,onEnter:U,onEnterCancelled:q,onLeave:z,onLeaveCancelled:ee,onBeforeAppear:ie=B,onAppear:R=U,onAppearCancelled:y=q}=e,_=(I,E,Ee,Be)=>{I._enterCancelled=Be,Nr(I,E?f:c),Nr(I,E?u:o),Ee&&Ee()},A=(I,E)=>{I._isLeaving=!1,Nr(I,p),Nr(I,v),Nr(I,m),E&&E()},w=I=>(E,Ee)=>{const Be=I?R:U,ke=()=>_(E,I,Ee);Dr(Be,[E,ke]),_f(()=>{Nr(E,I?l:i),An(E,I?f:c),gf(Be)||yf(E,r,V,ke)})};return rt(e,{onBeforeEnter(I){Dr(B,[I]),An(I,i),An(I,o)},onBeforeAppear(I){Dr(ie,[I]),An(I,l),An(I,u)},onEnter:w(!1),onAppear:w(!0),onLeave(I,E){I._isLeaving=!0;const Ee=()=>A(I,E);An(I,p),I._enterCancelled?(An(I,m),Tf()):(Tf(),An(I,m)),_f(()=>{I._isLeaving&&(Nr(I,p),An(I,v),gf(z)||yf(I,r,D,Ee))}),Dr(z,[I,Ee])},onEnterCancelled(I){_(I,!1,void 0,!0),Dr(q,[I])},onAppearCancelled(I){_(I,!0,void 0,!0),Dr(y,[I])},onLeaveCancelled(I){A(I),Dr(ee,[I])}})}function IE(t){if(t==null)return null;if(Ue(t))return[Vc(t.enter),Vc(t.leave)];{const e=Vc(t);return[e,e]}}function Vc(t){return wv(t)}function An(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Bi]||(t[Bi]=new Set)).add(e)}function Nr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Bi];n&&(n.delete(e),n.size||(t[Bi]=void 0))}function _f(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let wE=0;function yf(t,e,n,r){const s=t._endId=++wE,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=AE(t,e);if(!o)return r();const u=o+"end";let f=0;const p=()=>{t.removeEventListener(u,m),i()},m=v=>{v.target===t&&++f>=l&&p()};setTimeout(()=>{f<l&&p()},c+1),t.addEventListener(u,m)}function AE(t,e){const n=window.getComputedStyle(t),r=P=>(n[P]||"").split(", "),s=r(`${Gn}Delay`),i=r(`${Gn}Duration`),o=vf(s,i),c=r(`${oi}Delay`),l=r(`${oi}Duration`),u=vf(c,l);let f=null,p=0,m=0;e===Gn?o>0&&(f=Gn,p=o,m=i.length):e===oi?u>0&&(f=oi,p=u,m=l.length):(p=Math.max(o,u),f=p>0?o>u?Gn:oi:null,m=f?f===Gn?i.length:l.length:0);const v=f===Gn&&/\b(transform|all)(,|$)/.test(r(`${Gn}Property`).toString());return{type:f,timeout:p,propCount:m,hasTransform:v}}function vf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Ef(n)+Ef(t[r])))}function Ef(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Tf(){return document.body.offsetHeight}function bE(t,e,n){const r=t[Bi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const oa=Symbol("_vod"),Xm=Symbol("_vsh"),RE={beforeMount(t,{value:e},{transition:n}){t[oa]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ai(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),ai(t,!0),r.enter(t)):r.leave(t,()=>{ai(t,!1)}):ai(t,e))},beforeUnmount(t,{value:e}){ai(t,e)}};function ai(t,e){t.style.display=e?t[oa]:"none",t[Xm]=!e}const SE=Symbol(""),CE=/(^|;)\s*display\s*:/;function PE(t,e,n){const r=t.style,s=We(n);let i=!1;if(n&&!s){if(e)if(We(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Bo(r,c,"")}else for(const o in e)n[o]==null&&Bo(r,o,"");for(const o in n)o==="display"&&(i=!0),Bo(r,o,n[o])}else if(s){if(e!==n){const o=r[SE];o&&(n+=";"+o),r.cssText=n,i=CE.test(n)}}else e&&t.removeAttribute("style");oa in t&&(t[oa]=i?r.display:"",t[Xm]&&(r.display="none"))}const If=/\s*!important$/;function Bo(t,e,n){if(le(n))n.forEach(r=>Bo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=kE(t,e);If.test(n)?t.setProperty(Qr(r),n.replace(If,""),"important"):t[r]=n}}const wf=["Webkit","Moz","ms"],Dc={};function kE(t,e){const n=Dc[e];if(n)return n;let r=Ht(e);if(r!=="filter"&&r in t)return Dc[e]=r;r=ka(r);for(let s=0;s<wf.length;s++){const i=wf[s]+r;if(i in t)return Dc[e]=i}return e}const Af="http://www.w3.org/1999/xlink";function bf(t,e,n,r,s,i=Pv(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Af,e.slice(6,e.length)):t.setAttributeNS(Af,e,n):n==null||i&&!jp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":wr(n)?String(n):n)}function Rf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Qm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=jp(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function hs(t,e,n,r){t.addEventListener(e,n,r)}function VE(t,e,n,r){t.removeEventListener(e,n,r)}const Sf=Symbol("_vei");function DE(t,e,n,r,s=null){const i=t[Sf]||(t[Sf]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=NE(e);if(r){const u=i[e]=ME(r,s);hs(t,c,u,l)}else o&&(VE(t,c,o,l),i[e]=void 0)}}const Cf=/(?:Once|Passive|Capture)$/;function NE(t){let e;if(Cf.test(t)){e={};let r;for(;r=t.match(Cf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Qr(t.slice(2)),e]}let Nc=0;const OE=Promise.resolve(),xE=()=>Nc||(OE.then(()=>Nc=0),Nc=Date.now());function ME(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Jt(LE(r,n.value),e,5,[r])};return n.value=t,n.attached=xE(),n}function LE(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Pf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,FE=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?bE(t,r,o):e==="style"?PE(t,n,r):Sa(e)?jl(e)||DE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):UE(t,e,r,o))?(Rf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&bf(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!We(r))?Rf(t,Ht(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),bf(t,e,r,o))};function UE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Pf(e)&&he(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Pf(e)&&We(n)?!1:e in t}const kf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>Mo(e,n):e};function BE(t){t.target.composing=!0}function Vf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Oc=Symbol("_assign"),_s={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Oc]=kf(s);const i=r||s.props&&s.props.type==="number";hs(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Zc(c)),t[Oc](c)}),n&&hs(t,"change",()=>{t.value=t.value.trim()}),e||(hs(t,"compositionstart",BE),hs(t,"compositionend",Vf),hs(t,"change",Vf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Oc]=kf(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Zc(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},$E=rt({patchProp:FE},_E);let Df;function jE(){return Df||(Df=$0($E))}const qE=((...t)=>{const e=jE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=zE(r);if(!s)return;const i=e._component;!he(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,HE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function HE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function zE(t){return We(t)?document.querySelector(t):t}const Jm="/accounting-site/assets/logo-DMpoolbu.png",St=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},WE={class:"navbar"},KE={class:"nav-links"},GE={class:"main"},QE={__name:"App",setup(t){const e=Je(!1),n=Je(window.innerWidth>=769),r=()=>{n.value=window.innerWidth>=769,n.value&&(e.value=!1)},s=()=>{e.value=!e.value};Bn(()=>{window.addEventListener("resize",r),localStorage.getItem("theme")==="dark"&&(i.value=!0,document.documentElement.classList.add("dark"))}),nu(()=>{window.removeEventListener("resize",r)});const i=Je(!1);return(o,c)=>{const l=na("router-link"),u=na("router-view");return me(),Ie(vt,null,[K("header",WE,[Ce(l,{to:"/",class:"logo"},{default:Lr(()=>[...c[3]||(c[3]=[K("img",{class:"img",src:Jm},null,-1)])]),_:1}),K("button",{class:"hamburger",onClick:s},[...c[4]||(c[4]=[K("span",null,null,-1),K("span",null,null,-1),K("span",null,null,-1)])]),ct(e)?(me(),Ie("div",{key:0,class:"overlay",onClick:c[0]||(c[0]=f=>e.value=!1)})):Ss("",!0),Ce(EE,{name:"slide"},{default:Lr(()=>[Fr(K("nav",KE,[Ce(l,{to:"/",onClick:c[1]||(c[1]=f=>e.value=!1)},{default:Lr(()=>[...c[5]||(c[5]=[Kt("首頁",-1)])]),_:1}),Ce(l,{to:"/news",onClick:c[2]||(c[2]=f=>e.value=!1)},{default:Lr(()=>[...c[6]||(c[6]=[Kt("最新消息",-1)])]),_:1})],512),[[RE,ct(e)||ct(n)]])]),_:1})]),K("main",GE,[Ce(u)])],64)}}},YE=St(QE,[["__scopeId","data-v-cee2fb09"]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const fs=typeof document<"u";function Zm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function XE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Zm(t.default)}const Re=Object.assign;function xc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Zt(s)?s.map(t):t(s)}return n}const bi=()=>{},Zt=Array.isArray,eg=/#/g,JE=/&/g,ZE=/\//g,eT=/=/g,tT=/\?/g,tg=/\+/g,nT=/%5B/g,rT=/%5D/g,ng=/%5E/g,sT=/%60/g,rg=/%7B/g,iT=/%7C/g,sg=/%7D/g,oT=/%20/g;function lu(t){return encodeURI(""+t).replace(iT,"|").replace(nT,"[").replace(rT,"]")}function aT(t){return lu(t).replace(rg,"{").replace(sg,"}").replace(ng,"^")}function ul(t){return lu(t).replace(tg,"%2B").replace(oT,"+").replace(eg,"%23").replace(JE,"%26").replace(sT,"`").replace(rg,"{").replace(sg,"}").replace(ng,"^")}function cT(t){return ul(t).replace(eT,"%3D")}function lT(t){return lu(t).replace(eg,"%23").replace(tT,"%3F")}function uT(t){return t==null?"":lT(t).replace(ZE,"%2F")}function $i(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const hT=/\/$/,fT=t=>t.replace(hT,"");function Mc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=gT(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:$i(o)}}function dT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Nf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function pT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Cs(e.matched[r],n.matched[s])&&ig(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Cs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ig(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!mT(t[n],e[n]))return!1;return!0}function mT(t,e){return Zt(t)?Of(t,e):Zt(e)?Of(e,t):t===e}function Of(t,e){return Zt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function gT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Qn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ji;(function(t){t.pop="pop",t.push="push"})(ji||(ji={}));var Ri;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ri||(Ri={}));function _T(t){if(!t)if(fs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),fT(t)}const yT=/^[^#]+#/;function vT(t,e){return t.replace(yT,"#")+e}function ET(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ba=()=>({left:window.scrollX,top:window.scrollY});function TT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=ET(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function xf(t,e){return(history.state?history.state.position-e:-1)+t}const hl=new Map;function IT(t,e){hl.set(t,e)}function wT(t){const e=hl.get(t);return hl.delete(t),e}let AT=()=>location.protocol+"//"+location.host;function og(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Nf(l,"")}return Nf(n,t)+r+s}function bT(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const v=og(t,location),P=n.value,V=e.value;let D=0;if(m){if(n.value=v,e.value=m,o&&o===P){o=null;return}D=V?m.position-V.position:0}else r(v);s.forEach(B=>{B(n.value,P,{delta:D,type:ji.pop,direction:D?D>0?Ri.forward:Ri.back:Ri.unknown})})};function l(){o=n.value}function u(m){s.push(m);const v=()=>{const P=s.indexOf(m);P>-1&&s.splice(P,1)};return i.push(v),v}function f(){const{history:m}=window;m.state&&m.replaceState(Re({},m.state,{scroll:Ba()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:u,destroy:p}}function Mf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ba():null}}function RT(t){const{history:e,location:n}=window,r={value:og(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:AT()+t+l;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(v){console.error(v),n[f?"replace":"assign"](m)}}function o(l,u){const f=Re({},e.state,Mf(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,f,!0),r.value=l}function c(l,u){const f=Re({},s.value,e.state,{forward:l,scroll:Ba()});i(f.current,f,!0);const p=Re({},Mf(r.value,l,null),{position:f.position+1},u);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function ST(t){t=_T(t);const e=RT(t),n=bT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Re({location:"",base:t,go:r,createHref:vT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function CT(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),ST(t)}function PT(t){return typeof t=="string"||t&&typeof t=="object"}function ag(t){return typeof t=="string"||typeof t=="symbol"}const cg=Symbol("");var Lf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Lf||(Lf={}));function Ps(t,e){return Re(new Error,{type:t,[cg]:!0},e)}function bn(t,e){return t instanceof Error&&cg in t&&(e==null||!!(t.type&e))}const Ff="[^/]+?",kT={sensitive:!1,strict:!1,start:!0,end:!0},VT=/[.+*?^${}()[\]/\\]/g;function DT(t,e){const n=Re({},kT,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let v=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(VT,"\\$&"),v+=40;else if(m.type===1){const{value:P,repeatable:V,optional:D,regexp:B}=m;i.push({name:P,repeatable:V,optional:D});const U=B||Ff;if(U!==Ff){v+=10;try{new RegExp(`(${U})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${P}" (${U}): `+z.message)}}let q=V?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;p||(q=D&&u.length<2?`(?:/${q})`:"/"+q),D&&(q+="?"),s+=q,v+=20,D&&(v+=-8),V&&(v+=-20),U===".*"&&(v+=-50)}f.push(v)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const v=f[m]||"",P=i[m-1];p[P.name]=v&&P.repeatable?v.split("/"):v}return p}function l(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const v of m)if(v.type===0)f+=v.value;else if(v.type===1){const{value:P,repeatable:V,optional:D}=v,B=P in u?u[P]:"";if(Zt(B)&&!V)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const U=Zt(B)?B.join("/"):B;if(!U)if(D)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${P}"`);f+=U}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function NT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function lg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=NT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Uf(r))return 1;if(Uf(s))return-1}return s.length-r.length}function Uf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const OT={type:0,value:""},xT=/[a-zA-Z0-9_]/;function MT(t){if(!t)return[[]];if(t==="/")return[[OT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",f="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&p(),o()):l===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:xT.test(l)?m():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function LT(t,e,n){const r=DT(MT(t.path),n),s=Re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function FT(t,e){const n=[],r=new Map;e=qf({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,v){const P=!v,V=$f(p);V.aliasOf=v&&v.record;const D=qf(e,p),B=[V];if("alias"in p){const z=typeof p.alias=="string"?[p.alias]:p.alias;for(const ee of z)B.push($f(Re({},V,{components:v?v.record.components:V.components,path:ee,aliasOf:v?v.record:V})))}let U,q;for(const z of B){const{path:ee}=z;if(m&&ee[0]!=="/"){const ie=m.record.path,R=ie[ie.length-1]==="/"?"":"/";z.path=m.record.path+(ee&&R+ee)}if(U=LT(z,m,D),v?v.alias.push(U):(q=q||U,q!==U&&q.alias.push(U),P&&p.name&&!jf(U)&&o(p.name)),ug(U)&&l(U),V.children){const ie=V.children;for(let R=0;R<ie.length;R++)i(ie[R],U,v&&v.children[R])}v=v||U}return q?()=>{o(q)}:bi}function o(p){if(ag(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=$T(p,n);n.splice(m,0,p),p.record.name&&!jf(p)&&r.set(p.record.name,p)}function u(p,m){let v,P={},V,D;if("name"in p&&p.name){if(v=r.get(p.name),!v)throw Ps(1,{location:p});D=v.record.name,P=Re(Bf(m.params,v.keys.filter(q=>!q.optional).concat(v.parent?v.parent.keys.filter(q=>q.optional):[]).map(q=>q.name)),p.params&&Bf(p.params,v.keys.map(q=>q.name))),V=v.stringify(P)}else if(p.path!=null)V=p.path,v=n.find(q=>q.re.test(V)),v&&(P=v.parse(V),D=v.record.name);else{if(v=m.name?r.get(m.name):n.find(q=>q.re.test(m.path)),!v)throw Ps(1,{location:p,currentLocation:m});D=v.record.name,P=Re({},m.params,p.params),V=v.stringify(P)}const B=[];let U=v;for(;U;)B.unshift(U.record),U=U.parent;return{name:D,path:V,params:P,matched:B,meta:BT(B)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function Bf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function $f(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:UT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function UT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function jf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function BT(t){return t.reduce((e,n)=>Re(e,n.meta),{})}function qf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function $T(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;lg(t,e[i])<0?r=i:n=i+1}const s=jT(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function jT(t){let e=t;for(;e=e.parent;)if(ug(e)&&lg(t,e)===0)return e}function ug({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function qT(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(tg," "),o=i.indexOf("="),c=$i(o<0?i:i.slice(0,o)),l=o<0?null:$i(i.slice(o+1));if(c in e){let u=e[c];Zt(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function Hf(t){let e="";for(let n in t){const r=t[n];if(n=cT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Zt(r)?r.map(i=>i&&ul(i)):[r&&ul(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function HT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Zt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const zT=Symbol(""),zf=Symbol(""),$a=Symbol(""),uu=Symbol(""),fl=Symbol("");function ci(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function er(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=m=>{m===!1?l(Ps(4,{from:n,to:e})):m instanceof Error?l(m):PT(m)?l(Ps(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>l(m))})}function Lc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(Zm(l)){const f=(l.__vccOpts||l)[e];f&&i.push(er(f,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=XE(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const v=(p.__vccOpts||p)[e];return v&&er(v,n,r,o,c,s)()}))}}return i}function Wf(t){const e=qt($a),n=qt(uu),r=kt(()=>{const l=ct(t.to);return e.resolve(l)}),s=kt(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(Cs.bind(null,f));if(m>-1)return m;const v=Kf(l[u-2]);return u>1&&Kf(f)===v&&p[p.length-1].path!==v?p.findIndex(Cs.bind(null,l[u-2])):m}),i=kt(()=>s.value>-1&&YT(n.params,r.value.params)),o=kt(()=>s.value>-1&&s.value===n.matched.length-1&&ig(n.params,r.value.params));function c(l={}){if(QT(l)){const u=e[ct(t.replace)?"replace":"push"](ct(t.to)).catch(bi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:kt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function WT(t){return t.length===1?t[0]:t}const KT=wm({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Wf,setup(t,{slots:e}){const n=to(Wf(t)),{options:r}=qt($a),s=kt(()=>({[Gf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Gf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&WT(e.default(n));return t.custom?i:cu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),GT=KT;function QT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function YT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Zt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Kf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Gf=(t,e,n)=>t??e??n,XT=wm({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=qt(fl),s=kt(()=>t.route||r.value),i=qt(zf,0),o=kt(()=>{let u=ct(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),c=kt(()=>s.value.matched[o.value]);Lo(zf,kt(()=>o.value+1)),Lo(zT,c),Lo(fl,s);const l=Je();return wi(()=>[l.value,c.value,t.name],([u,f,p],[m,v,P])=>{f&&(f.instances[p]=u,v&&v!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=v.leaveGuards),f.updateGuards.size||(f.updateGuards=v.updateGuards))),u&&f&&(!v||!Cs(f,v)||!m)&&(f.enterCallbacks[p]||[]).forEach(V=>V(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=c.value,m=p&&p.components[f];if(!m)return Qf(n.default,{Component:m,route:u});const v=p.props[f],P=v?v===!0?u.params:typeof v=="function"?v(u):v:null,D=cu(m,Re({},P,e,{onVnodeUnmounted:B=>{B.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return Qf(n.default,{Component:D,route:u})||D}}});function Qf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const JT=XT;function ZT(t){const e=FT(t.routes,t),n=t.parseQuery||qT,r=t.stringifyQuery||Hf,s=t.history,i=ci(),o=ci(),c=ci(),l=Yv(Qn);let u=Qn;fs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=xc.bind(null,O=>""+O),p=xc.bind(null,uT),m=xc.bind(null,$i);function v(O,J){let Q,te;return ag(O)?(Q=e.getRecordMatcher(O),te=J):te=O,e.addRoute(te,Q)}function P(O){const J=e.getRecordMatcher(O);J&&e.removeRoute(J)}function V(){return e.getRoutes().map(O=>O.record)}function D(O){return!!e.getRecordMatcher(O)}function B(O,J){if(J=Re({},J||l.value),typeof O=="string"){const S=Mc(n,O,J.path),M=e.resolve({path:S.path},J),F=s.createHref(S.fullPath);return Re(S,M,{params:m(M.params),hash:$i(S.hash),redirectedFrom:void 0,href:F})}let Q;if(O.path!=null)Q=Re({},O,{path:Mc(n,O.path,J.path).path});else{const S=Re({},O.params);for(const M in S)S[M]==null&&delete S[M];Q=Re({},O,{params:p(S)}),J.params=p(J.params)}const te=e.resolve(Q,J),Ve=O.hash||"";te.params=f(m(te.params));const T=dT(r,Re({},O,{hash:aT(Ve),path:te.path})),b=s.createHref(T);return Re({fullPath:T,hash:Ve,query:r===Hf?HT(O.query):O.query||{}},te,{redirectedFrom:void 0,href:b})}function U(O){return typeof O=="string"?Mc(n,O,l.value.path):Re({},O)}function q(O,J){if(u!==O)return Ps(8,{from:J,to:O})}function z(O){return R(O)}function ee(O){return z(Re(U(O),{replace:!0}))}function ie(O){const J=O.matched[O.matched.length-1];if(J&&J.redirect){const{redirect:Q}=J;let te=typeof Q=="function"?Q(O):Q;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=U(te):{path:te},te.params={}),Re({query:O.query,hash:O.hash,params:te.path!=null?{}:O.params},te)}}function R(O,J){const Q=u=B(O),te=l.value,Ve=O.state,T=O.force,b=O.replace===!0,S=ie(Q);if(S)return R(Re(U(S),{state:typeof S=="object"?Re({},Ve,S.state):Ve,force:T,replace:b}),J||Q);const M=Q;M.redirectedFrom=J;let F;return!T&&pT(r,te,Q)&&(F=Ps(16,{to:M,from:te}),Vt(te,te,!0,!1)),(F?Promise.resolve(F):A(M,te)).catch(N=>bn(N)?bn(N,2)?N:nn(N):Te(N,M,te)).then(N=>{if(N){if(bn(N,2))return R(Re({replace:b},U(N.to),{state:typeof N.to=="object"?Re({},Ve,N.to.state):Ve,force:T}),J||M)}else N=I(M,te,!0,b,Ve);return w(M,te,N),N})}function y(O,J){const Q=q(O,J);return Q?Promise.reject(Q):Promise.resolve()}function _(O){const J=zt.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(O):O()}function A(O,J){let Q;const[te,Ve,T]=eI(O,J);Q=Lc(te.reverse(),"beforeRouteLeave",O,J);for(const S of te)S.leaveGuards.forEach(M=>{Q.push(er(M,O,J))});const b=y.bind(null,O,J);return Q.push(b),ft(Q).then(()=>{Q=[];for(const S of i.list())Q.push(er(S,O,J));return Q.push(b),ft(Q)}).then(()=>{Q=Lc(Ve,"beforeRouteUpdate",O,J);for(const S of Ve)S.updateGuards.forEach(M=>{Q.push(er(M,O,J))});return Q.push(b),ft(Q)}).then(()=>{Q=[];for(const S of T)if(S.beforeEnter)if(Zt(S.beforeEnter))for(const M of S.beforeEnter)Q.push(er(M,O,J));else Q.push(er(S.beforeEnter,O,J));return Q.push(b),ft(Q)}).then(()=>(O.matched.forEach(S=>S.enterCallbacks={}),Q=Lc(T,"beforeRouteEnter",O,J,_),Q.push(b),ft(Q))).then(()=>{Q=[];for(const S of o.list())Q.push(er(S,O,J));return Q.push(b),ft(Q)}).catch(S=>bn(S,8)?S:Promise.reject(S))}function w(O,J,Q){c.list().forEach(te=>_(()=>te(O,J,Q)))}function I(O,J,Q,te,Ve){const T=q(O,J);if(T)return T;const b=J===Qn,S=fs?history.state:{};Q&&(te||b?s.replace(O.fullPath,Re({scroll:b&&S&&S.scroll},Ve)):s.push(O.fullPath,Ve)),l.value=O,Vt(O,J,Q,b),nn()}let E;function Ee(){E||(E=s.listen((O,J,Q)=>{if(!$n.listening)return;const te=B(O),Ve=ie(te);if(Ve){R(Re(Ve,{replace:!0,force:!0}),te).catch(bi);return}u=te;const T=l.value;fs&&IT(xf(T.fullPath,Q.delta),Ba()),A(te,T).catch(b=>bn(b,12)?b:bn(b,2)?(R(Re(U(b.to),{force:!0}),te).then(S=>{bn(S,20)&&!Q.delta&&Q.type===ji.pop&&s.go(-1,!1)}).catch(bi),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),Te(b,te,T))).then(b=>{b=b||I(te,T,!1),b&&(Q.delta&&!bn(b,8)?s.go(-Q.delta,!1):Q.type===ji.pop&&bn(b,20)&&s.go(-1,!1)),w(te,T,b)}).catch(bi)}))}let Be=ci(),ke=ci(),de;function Te(O,J,Q){nn(O);const te=ke.list();return te.length?te.forEach(Ve=>Ve(O,J,Q)):console.error(O),Promise.reject(O)}function Ct(){return de&&l.value!==Qn?Promise.resolve():new Promise((O,J)=>{Be.add([O,J])})}function nn(O){return de||(de=!O,Ee(),Be.list().forEach(([J,Q])=>O?Q(O):J()),Be.reset()),O}function Vt(O,J,Q,te){const{scrollBehavior:Ve}=t;if(!fs||!Ve)return Promise.resolve();const T=!Q&&wT(xf(O.fullPath,0))||(te||!Q)&&history.state&&history.state.scroll||null;return eu().then(()=>Ve(O,J,T)).then(b=>b&&TT(b)).catch(b=>Te(b,O,J))}const st=O=>s.go(O);let In;const zt=new Set,$n={currentRoute:l,listening:!0,addRoute:v,removeRoute:P,clearRoutes:e.clearRoutes,hasRoute:D,getRoutes:V,resolve:B,options:t,push:z,replace:ee,go:st,back:()=>st(-1),forward:()=>st(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:ke.add,isReady:Ct,install(O){const J=this;O.component("RouterLink",GT),O.component("RouterView",JT),O.config.globalProperties.$router=J,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>ct(l)}),fs&&!In&&l.value===Qn&&(In=!0,z(s.location).catch(Ve=>{}));const Q={};for(const Ve in Qn)Object.defineProperty(Q,Ve,{get:()=>l.value[Ve],enumerable:!0});O.provide($a,J),O.provide(uu,cm(Q)),O.provide(fl,l);const te=O.unmount;zt.add(O),O.unmount=function(){zt.delete(O),zt.size<1&&(u=Qn,E&&E(),E=null,l.value=Qn,In=!1,de=!1),te()}}};function ft(O){return O.reduce((J,Q)=>J.then(()=>_(Q)),Promise.resolve())}return $n}function eI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>Cs(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>Cs(u,l))||s.push(l))}return[n,r,s]}function hu(){return qt($a)}function hg(t){return qt(uu)}const tI="/accounting-site/assets/logo-name-DKMeXibA.png",nI={class:"title"},rI={__name:"Title",props:{title:{type:String,required:!0}},setup(t){return(e,n)=>(me(),Ie("div",nI,[K("h3",null,$e(t.title),1)]))}},fg=St(rI,[["__scopeId","data-v-201c176b"]]),sI={class:"service-target"},iI={__name:"ServiceTarget",props:{target:{type:String,required:!0}},setup(t){return(e,n)=>(me(),Ie("div",sI,$e(t.target),1))}},oI=St(iI,[["__scopeId","data-v-d5757030"]]),aI={class:"info-section"},cI={class:"container"},lI={class:"card-inside"},uI={__name:"InfoSection",props:{title:{type:String,required:!0},infoList:{type:Array,required:!0},twoCol:{type:Boolean}},setup(t){return(e,n)=>(me(),Ie("section",aI,[K("div",cI,[Ce(fg,{title:t.title},null,8,["title"]),(me(!0),Ie(vt,null,Ti(t.infoList,(r,s)=>(me(),Ie("div",{key:s,class:"card-container"},[r.target?(me(),iu(oI,{key:0,target:r.target},null,8,["target"])):Ss("",!0),K("div",lI,[(me(!0),Ie(vt,null,Ti(r.categories,(i,o)=>(me(),Ie("div",{key:o,class:Da([{twoCard:t.twoCol},"card"])},[K("h3",null,$e(i.name||i.title),1),K("p",null,$e(i.desc),1),K("ul",null,[(me(!0),Ie(vt,null,Ti(i.items,(c,l)=>(me(),Ie("li",{key:l},$e(c),1))),128))])],2))),128))])]))),128))])]))}},Yf=St(uI,[["__scopeId","data-v-da89fcd3"]]),hI="/accounting-site/assets/james-CDFwbDAa.png",fI={},dI={class:"about-us"};function pI(t,e){return me(),Ie("section",dI,[...e[0]||(e[0]=[Wm('<div class="img-inside" data-v-3743b053><img src="'+hI+'" alt="" data-v-3743b053></div><div class="introduce" data-v-3743b053><h4 class="title" data-v-3743b053>James</h4><p class="title-desc" data-v-3743b053>因興趣使然而加入會計師行業～～</p><h5 class="sub-title" data-v-3743b053>學歷</h5><ul data-v-3743b053><li data-v-3743b053>德明商專(五專部)會計統計科</li><li data-v-3743b053>東吳大學會計學系學士</li><li data-v-3743b053>政治大學經營管理學程會計組碩士</li><li data-v-3743b053>安永會計師事務所 (DY致遠)</li></ul><h5 class="sub-title" data-v-3743b053>經歷</h5><ul data-v-3743b053><li data-v-3743b053>儒鴻企業股份有限公司</li><li data-v-3743b053>集盛實業股份有限公司</li><li data-v-3743b053>多年中國、越南派駐工作經驗</li><li data-v-3743b053>新北市都更推動師</li><li data-v-3743b053>和得會計師事務所 會計師</li></ul></div>',2)])])}const mI=St(fI,[["render",pI],["__scopeId","data-v-3743b053"]]),gI="/accounting-site/assets/line-Bf_xZ2G0.jpg",_I="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20x='0px'%20y='0px'%20width='100'%20height='100'%20viewBox='0%200%2048%2048'%3e%3cpath%20fill='%2300c300'%20d='M12.5,42h23c3.59,0,6.5-2.91,6.5-6.5v-23C42,8.91,39.09,6,35.5,6h-23C8.91,6,6,8.91,6,12.5v23C6,39.09,8.91,42,12.5,42z'%3e%3c/path%3e%3cpath%20fill='%23fff'%20d='M37.113,22.417c0-5.865-5.88-10.637-13.107-10.637s-13.108,4.772-13.108,10.637c0,5.258,4.663,9.662,10.962,10.495c0.427,0.092,1.008,0.282,1.155,0.646c0.132,0.331,0.086,0.85,0.042,1.185c0,0-0.153,0.925-0.187,1.122c-0.057,0.331-0.263,1.296,1.135,0.707c1.399-0.589,7.548-4.445,10.298-7.611h-0.001C36.203,26.879,37.113,24.764,37.113,22.417z%20M18.875,25.907h-2.604c-0.379,0-0.687-0.308-0.687-0.688V20.01c0-0.379,0.308-0.687,0.687-0.687c0.379,0,0.687,0.308,0.687,0.687v4.521h1.917c0.379,0,0.687,0.308,0.687,0.687C19.562,25.598,19.254,25.907,18.875,25.907z%20M21.568,25.219c0,0.379-0.308,0.688-0.687,0.688s-0.687-0.308-0.687-0.688V20.01c0-0.379,0.308-0.687,0.687-0.687s0.687,0.308,0.687,0.687V25.219z%20M27.838,25.219c0,0.297-0.188,0.559-0.47,0.652c-0.071,0.024-0.145,0.036-0.218,0.036c-0.215,0-0.42-0.103-0.549-0.275l-2.669-3.635v3.222c0,0.379-0.308,0.688-0.688,0.688c-0.379,0-0.688-0.308-0.688-0.688V20.01c0-0.296,0.189-0.558,0.47-0.652c0.071-0.024,0.144-0.035,0.218-0.035c0.214,0,0.42,0.103,0.549,0.275l2.67,3.635V20.01c0-0.379,0.309-0.687,0.688-0.687c0.379,0,0.687,0.308,0.687,0.687V25.219z%20M32.052,21.927c0.379,0,0.688,0.308,0.688,0.688c0,0.379-0.308,0.687-0.688,0.687h-1.917v1.23h1.917c0.379,0,0.688,0.308,0.688,0.687c0,0.379-0.309,0.688-0.688,0.688h-2.604c-0.378,0-0.687-0.308-0.687-0.688v-2.603c0-0.001,0-0.001,0-0.001c0,0,0-0.001,0-0.001v-2.601c0-0.001,0-0.001,0-0.002c0-0.379,0.308-0.687,0.687-0.687h2.604c0.379,0,0.688,0.308,0.688,0.687s-0.308,0.687-0.688,0.687h-1.917v1.23H32.052z'%3e%3c/path%3e%3c/svg%3e",yI="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20x='0px'%20y='0px'%20width='100'%20height='100'%20viewBox='0%200%2048%2048'%3e%3clinearGradient%20id='Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1'%20x1='9.993'%20x2='40.615'%20y1='9.993'%20y2='40.615'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%232aa4f4'%3e%3c/stop%3e%3cstop%20offset='1'%20stop-color='%23007ad9'%3e%3c/stop%3e%3c/linearGradient%3e%3cpath%20fill='url(%23Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)'%20d='M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z'%3e%3c/path%3e%3cpath%20fill='%23fff'%20d='M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46%20c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452%20C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z'%3e%3c/path%3e%3c/svg%3e",vI="/accounting-site/assets/instagram-DG-fKQy-.svg",EI="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20x='0px'%20y='0px'%20width='100'%20height='100'%20viewBox='0%200%2048%2048'%3e%3cpath%20fill='%238BC34A'%20d='M18,6C9.2,6,2,12,2,19.5c0,4.3,2.3,8,6,10.5l-2,6l6.3-3.9C14,32.7,16,33,18,33c8.8,0,16-6,16-13.5C34,12,26.8,6,18,6z'%3e%3c/path%3e%3cpath%20fill='%237CB342'%20d='M20,29c0-6.1,5.8-11,13-11c0.3,0,0.6,0,0.9,0c-0.1-0.7-0.3-1.4-0.5-2c-0.1,0-0.3,0-0.4,0c-8.3,0-15,5.8-15,13c0,1.4,0.3,2.7,0.7,4c0.7,0,1.4-0.1,2.1-0.2C20.3,31.6,20,30.3,20,29z'%3e%3c/path%3e%3cpath%20fill='%23CFD8DC'%20d='M46,29c0-6.1-5.8-11-13-11c-7.2,0-13,4.9-13,11s5.8,11,13,11c1.8,0,3.5-0.3,5-0.8l5,2.8l-1.4-4.8C44.3,35.2,46,32.3,46,29z'%3e%3c/path%3e%3cpath%20fill='%2333691E'%20d='M14,15c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2S14,13.9,14,15z%20M24,13c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S25.1,13,24,13z'%3e%3c/path%3e%3cpath%20fill='%23546E7A'%20d='M30,26.5c0,0.8-0.7,1.5-1.5,1.5S27,27.3,27,26.5s0.7-1.5,1.5-1.5S30,25.7,30,26.5z%20M37.5,25c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S38.3,25,37.5,25z'%3e%3c/path%3e%3c/svg%3e",TI="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20x='0px'%20y='0px'%20width='100'%20height='100'%20viewBox='0%200%2048%2048'%3e%3cpath%20fill='%230288D1'%20d='M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z'%3e%3c/path%3e%3cpath%20fill='%23FFF'%20d='M12%2019H17V36H12zM14.485%2017h-.028C12.965%2017%2012%2015.888%2012%2014.499%2012%2013.08%2012.995%2012%2014.514%2012c1.521%200%202.458%201.08%202.486%202.499C17%2015.887%2016.035%2017%2014.485%2017zM36%2036h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501%200-2.313%201.012-2.707%201.99C24.957%2025.543%2025%2026.511%2025%2027v9h-5V19h5v2.616C25.721%2020.5%2026.85%2019%2029.738%2019c3.578%200%206.261%202.25%206.261%207.274L36%2036%2036%2036z'%3e%3c/path%3e%3c/svg%3e",II="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20x='0px'%20y='0px'%20width='100'%20height='100'%20viewBox='0%200%2050%2050'%3e%3cpath%20d='M46,9v32c0,2.757-2.243,5-5,5H9c-2.757,0-5-2.243-5-5V9c0-2.757,2.243-5,5-5h32C43.757,4,46,6.243,46,9z%20M33.544,35.913%20c2.711-2.708,2.635-6.093,1.746-8.17c-0.54-1.255-1.508-2.33-2.798-3.108l-0.223-0.138c-0.33-0.208-0.609-0.375-1.046-0.542%20c-0.008-0.278-0.025-0.556-0.058-0.807c-0.59-4.561-3.551-5.535-5.938-5.55c-2.154,0-3.946,0.92-5.044,2.592l1.672,1.098%20c0.736-1.121,1.871-1.689,3.366-1.689c2.367,0.015,3.625,1.223,3.96,3.801c-1.141-0.231-2.426-0.314-3.807-0.233%20c-3.924,0.226-5.561,2.591-5.442,4.836c0.134,2.486,2.278,4.222,5.216,4.222c0.13,0,0.259-0.003,0.384-0.011%20c2.297-0.126,5.105-1.29,5.61-6.063c0.021,0.013,0.041,0.026,0.062,0.039l0.253,0.157c0.932,0.562,1.621,1.317,1.994,2.185%20c0.643,1.501,0.682,3.964-1.322,5.966c-1.732,1.73-3.812,2.479-6.936,2.502c-3.47-0.026-6.099-1.145-7.812-3.325%20c-1.596-2.028-2.42-4.953-2.451-8.677c0.031-3.728,0.855-6.646,2.451-8.673c1.714-2.181,4.349-3.299,7.814-3.325%20c3.492,0.026,6.165,1.149,7.944,3.338c0.864,1.063,1.525,2.409,1.965,3.998l1.928-0.532c-0.514-1.858-1.301-3.449-2.341-4.728%20c-2.174-2.674-5.363-4.045-9.496-4.076c-4.12,0.031-7.278,1.406-9.387,4.089c-1.875,2.383-2.844,5.712-2.879,9.91%20c0.035,4.193,1.004,7.529,2.879,9.913c2.109,2.682,5.262,4.058,9.385,4.088C28.857,38.973,31.433,38.021,33.544,35.913z%20M28.993,25.405c0.07,0.016,0.138,0.031,0.202,0.046c-0.005,0.078-0.01,0.146-0.015,0.198c-0.314,3.928-2.295,4.489-3.761,4.569%20c-0.091,0.005-0.181,0.008-0.271,0.008c-1.851,0-3.144-0.936-3.218-2.329c-0.065-1.218,0.836-2.576,3.561-2.732%20c0.297-0.018,0.589-0.027,0.875-0.027C27.325,25.137,28.209,25.227,28.993,25.405z'%3e%3c/path%3e%3c/svg%3e",wI="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20x='0px'%20y='0px'%20width='100'%20height='100'%20viewBox='0%200%2050%2050'%3e%3cpath%20d='M35,22v2h1v-2H35z%20M35,22v2h1v-2H35z%20M44,4H6C4.91,4,4,4.91,4,6v38c0,1.09,0.91,2,2,2h38c1.09,0,2-0.91,2-2V6%20C46,4.91,45.09,4,44,4z%20M12,24c0,1.38-0.19,5.89-2.61,6.24l-0.28-1.98C9.5,28.07,10,26.12,10,24v-2h2V24z%20M15,30h-2V19h2V30z%20M17.29,29.71c-1.2-1.2-1.29-4.73-1.29-5.78V22h2v1.93c0,1.91,0.34,3.99,0.71,4.36L17.29,29.71z%20M22,31h-3l1-2h3L22,31z%20M31,31h-7%20l1-2h2v-7h-2l-2.1,4.38h1.72l-1,2H21c-0.8,0-1.28-0.91-0.82-1.57L22,24h-2c-0.78,0-1.26-0.85-0.86-1.51l3-5l1.72,1.02L21.77,22H25%20v-2h6v2h-2v7h2V31z%20M40,28.5c0,1.38-1.12,2.5-2.5,2.5c-1.21,0-1.22-0.86-1.45-2H38v-3h-3v5h-2v-5h-2v-2h2v-2h-1v-2h1v-1h2v1h1%20c1.1,0,2,0.9,2,2v2c1.1,0,2,0.9,2,2V28.5z%20M40,22h-1v-1c0-0.55,0.45-1,1-1s1,0.45,1,1S40.55,22,40,22z%20M35,24h1v-2h-1V24z%20M35,22%20v2h1v-2H35z'%3e%3c/path%3e%3c/svg%3e",AI="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20x='0px'%20y='0px'%20width='100'%20height='100'%20viewBox='0%200%2050%2050'%3e%3cpath%20d='M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z%20M37.006,22.323%20c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527%20s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053%20c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016%20c0.378,3.591,3.277,6.425,6.901,6.685V22.323z'%3e%3c/path%3e%3c/svg%3e",bI={class:"contact"},RI={__name:"Contact",props:{title:{type:String,required:!0}},setup(t){return(e,n)=>(me(),Ie("section",bI,[Ce(fg,{title:"聯絡我們"}),n[0]||(n[0]=Wm('<div class="contact-phone" data-v-35d3f4aa><div class="img-inside" data-v-35d3f4aa><img class="img" src="'+Jm+'" data-v-35d3f4aa></div><div class="img-inside" data-v-35d3f4aa><img class="img" src="'+gI+'" width="275" height="275" data-v-35d3f4aa></div><div class="phone" data-v-35d3f4aa><div data-v-35d3f4aa><h3 data-v-35d3f4aa>和得會計師事務所</h3><p data-v-35d3f4aa>電話：02-29730059</p><p data-v-35d3f4aa>行動電話：0916973296</p><p data-v-35d3f4aa>電子郵件：hedecpa@gmail.com</p></div></div></div><div class="social-media" data-v-35d3f4aa><div data-v-35d3f4aa><a href="https://line.me/ti/p/U_4YvEWa63" target="_blank" aria-label="Line" data-v-35d3f4aa><img src="'+_I+'" data-v-35d3f4aa></a><a href="https://www.facebook.com/share/1CJqK21w1v/" target="_blank" aria-label="Facebook" data-v-35d3f4aa><img src="'+yI+'" data-v-35d3f4aa></a><a href="https://www.instagram.com/cpa__james?igsh=dzl0OHY1ZzRxa2Zr" target="_blank" aria-label="Instagram" data-v-35d3f4aa><img src="'+vI+'" data-v-35d3f4aa></a><a href="" target="_blank" aria-label="Wechat" data-v-35d3f4aa><img src="'+EI+'" data-v-35d3f4aa></a></div><div data-v-35d3f4aa><a href="https://www.linkedin.com/in/james-%E5%92%8C%E5%BE%97%E6%9C%83%E8%A8%88%E5%B8%AB%E4%BA%8B%E5%8B%99%E6%89%80-81bb8b380?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=android_app" target="_blank" aria-label="Linkedin" data-v-35d3f4aa><img src="'+TI+'" data-v-35d3f4aa></a><a href="https://www.threads.com/@cpa__james" target="_blank" aria-label="Threads" data-v-35d3f4aa><img src="'+II+'" data-v-35d3f4aa></a><a href="https://www.xiaohongshu.com/user/profile/68b56b10000000001901070c?xsec_token=YBHIv8tlNZgFU5imoeubB_mxqexQACEO2sAACXE77OM1o%3D&amp;xsec_source=app_share&amp;xhsshare=CopyLink&amp;appuid=68b56b10000000001901070c&amp;apptime=1757127950&amp;share_id=1e16c269fcb6448aad85c918189465ba&amp;share_channel=copy_link" target="_blank" aria-label="小紅書" data-v-35d3f4aa><img src="'+wI+'" data-v-35d3f4aa></a><a href="https://www.tiktok.com/@user731550344?_t=ZS-8zUSJmLjIwB&amp;_r=1" target="_blank" aria-label="Tiktok" data-v-35d3f4aa><img src="'+AI+'" data-v-35d3f4aa></a></div></div>',2)),n[1]||(n[1]=K("div",{class:"map"},[K("div",null,[K("p",null,"地址：新北市三重區福德北路63號2樓"),K("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.0715399841774!2d121.49964077557456!3d25.06556427779594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a93408f1c6cb%3A0x5bd6d9fafbbf6c8a!2z5ZKM5b6X5pyD6KiI5bir5LqL5YuZ5omA!5e0!3m2!1szh-TW!2stw!4v1756027824509!5m2!1szh-TW!2stw",width:"600",height:"450",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})]),K("div",null,[K("p",null,"地址：桃園市桃園區春日路潤泰大家"),K("iframe",{src:"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1379.626138302121!2d121.3100801219292!3d25.010171883055904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z5qGD5ZyS5biC5qGD5ZyS5Y2A5pil5pel6Lev5r2k5rOw5aSn5a62!5e0!3m2!1szh-TW!2stw!4v1757162027599!5m2!1szh-TW!2stw",width:"600",height:"450",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})])],-1))]))}},SI=St(RI,[["__scopeId","data-v-35d3f4aa"]]),Xf="https://script.google.com/macros/s/AKfycbxJkvyjL1rGUgZAndedtQv-d4JxmlPqg0GBWglJTAGY3KxeU3X0G1HtdFrM81dSjj0Y/exec",CI={__name:"VisitCount",setup(t){const e=Je(0),n=localStorage.getItem("visitCount");n&&(e.value=Number(n));function r(){const o=localStorage.getItem("lastVisitDate"),c=new Date().toISOString().split("T")[0];return o===c}function s(){const o=new Date().toISOString().split("T")[0];localStorage.setItem("lastVisitDate",o)}async function i(){try{let o;r()?o=await(await fetch(Xf)).json():(o=await(await fetch(Xf,{method:"POST"})).json(),s()),e.value=o.visitCount,localStorage.setItem("visitCount",o.visitCount)}catch(o){console.error("更新失敗",o)}}return Bn(()=>{i()}),(o,c)=>(me(),Ie("div",null,[K("p",null,"網站瀏覽人次："+$e(ct(e)),1)]))}},PI={class:"home"},kI={__name:"Home",setup(t){const e=[{categories:[{title:"專業可靠",desc:"以專業知識與經驗，提供精準建議與服務。"},{title:"誠信正直",desc:"堅守職業道德，建立客戶信任基礎。"},{title:"高效迅速",desc:"迅速回應客戶需求，提供有效解決方案。"},{title:"貼心服務",desc:"心懷同理，矢志為中小企業提供貼心服務。"}]}],n=[{target:"公司、商號、執行業務者、非營利組織、寺廟、宗親會歡迎醫師、護理機構、藥師、各項補習班、幼兒園、托幼機構、老人照顧中心、非營利組織、寺廟等洽詢",categories:[{name:"財務及稅務簽證",items:["銀行融資簽證","簽務申報簽證","決算晝表簽證","專案查核報告","協議程序之執行"]},{name:"工商登記代辦",items:["公司及商號設立登記","資本額查核報告","各項變更登記"]},{name:"代客帳務處理及制度設計",items:["合規帳務處理","內部制度設計規劃","執行業務專門人士稅務服務","非營利組織會計稅務"]}]},{target:"個人及家族服務",categories:[{name:"個人財產信託及遺贈稅申報",items:["一般財產信託","遺囑信託","遺產稅代理申報","贈與稅代理申報"]},{name:"家族傳承規劃",items:["家族辦公室規劃","閉鎖型公司規劃"]},{name:"都市更新及危老諮詢",items:["都市更新評估","整建維護法規諮詢","公寓大廈管理法規諮詢","都更危老條例社區輔導"]}]},{target:"其他",categories:[{name:"陸資來臺投資諮詢",items:["大陸地區人民來臺投資業別項目—製造業","大陸地區人民來臺投資業別項目—服務業"]},{name:"其他",items:["財稅教育訓練","其他簽證及認證","其他諮詢服務"]}]}];return(r,s)=>(me(),Ie("div",PI,[s[0]||(s[0]=K("section",{class:"home-header"},[K("div",{class:"logo"},[K("img",{class:"img",src:tI})]),K("div",{class:"logo-desc"},[K("p",null,[K("b",null,"It is our moments of struggle that define us. How we handle them is what matters."),Kt(),K("br"),Kt("— President Allan Trumbull"),K("span",null,"《Angel has Fallen》")]),K("p",null,[Kt("正是這種艱困的時刻定義了我們，而我們的處置更加重要。"),K("br"),Kt("艾倫特倫布爾總統，"),K("span",null,"《全面攻佔3：天使救援》")])])],-1)),Ce(mI),Ce(Yf,{title:"核心價值",infoList:e,twoCol:!0}),Ce(Yf,{title:"服務項目",infoList:n}),Ce(SI,{title:"聯絡我們"}),Ce(CI)]))}},VI=St(kI,[["__scopeId","data-v-bdceb86e"]]),DI={class:"btn"},NI={__name:"BackBtn",setup(t){const e=hu(),n=()=>{e.back()};return(r,s)=>(me(),Ie("div",DI,[K("button",{class:"back-btn",onClick:n}," ← 返回 ")]))}},dg=St(NI,[["__scopeId","data-v-df4cee60"]]),OI={class:"post-card"},xI={class:"date"},MI={__name:"PostCard",props:{post:Object},setup(t){return(e,n)=>{const r=na("router-link");return me(),Ie("div",OI,[K("h2",null,[Ce(r,{to:`/news/${t.post.id}`,class:"title"},{default:Lr(()=>[Kt($e(t.post.title),1)]),_:1},8,["to"])]),K("p",xI,$e(t.post.date),1),K("p",null,$e(t.post.summary),1)])}}},LI=St(MI,[["__scopeId","data-v-d1950569"]]);/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let pg;const ja=t=>pg=t,mg=Symbol();function dl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Si;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Si||(Si={}));function FI(){const t=Wp(!0),e=t.run(()=>Je({}));let n=[],r=[];const s=Zl({install(i){ja(s),s._a=i,i.provide(mg,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const gg=()=>{};function Jf(t,e,n,r=gg){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Kp()&&kv(s),s}function ls(t,...e){t.slice().forEach(n=>{n(...e)})}const UI=t=>t(),Zf=Symbol(),Fc=Symbol();function pl(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];dl(s)&&dl(r)&&t.hasOwnProperty(n)&&!ze(r)&&!ar(r)?t[n]=pl(s,r):t[n]=r}return t}const BI=Symbol();function $I(t){return!dl(t)||!Object.prototype.hasOwnProperty.call(t,BI)}const{assign:Xn}=Object;function jI(t){return!!(ze(t)&&t.effect)}function qI(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let l;function u(){c||(n.state.value[t]=s?s():{});const f=Zv(n.state.value[t]);return Xn(f,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=Zl(kt(()=>{ja(n);const v=n._s.get(t);return o[m].call(v,v)})),p),{}))}return l=_g(t,u,e,n,r,!0),l}function _g(t,e,n={},r,s,i){let o;const c=Xn({actions:{}},n),l={deep:!0};let u,f,p=[],m=[],v;const P=r.state.value[t];!i&&!P&&(r.state.value[t]={}),Je({});let V;function D(y){let _;u=f=!1,typeof y=="function"?(y(r.state.value[t]),_={type:Si.patchFunction,storeId:t,events:v}):(pl(r.state.value[t],y),_={type:Si.patchObject,payload:y,storeId:t,events:v});const A=V=Symbol();eu().then(()=>{V===A&&(u=!0)}),f=!0,ls(p,_,r.state.value[t])}const B=i?function(){const{state:_}=n,A=_?_():{};this.$patch(w=>{Xn(w,A)})}:gg;function U(){o.stop(),p=[],m=[],r._s.delete(t)}const q=(y,_="")=>{if(Zf in y)return y[Fc]=_,y;const A=function(){ja(r);const w=Array.from(arguments),I=[],E=[];function Ee(de){I.push(de)}function Be(de){E.push(de)}ls(m,{args:w,name:A[Fc],store:ee,after:Ee,onError:Be});let ke;try{ke=y.apply(this&&this.$id===t?this:ee,w)}catch(de){throw ls(E,de),de}return ke instanceof Promise?ke.then(de=>(ls(I,de),de)).catch(de=>(ls(E,de),Promise.reject(de))):(ls(I,ke),ke)};return A[Zf]=!0,A[Fc]=_,A},z={_p:r,$id:t,$onAction:Jf.bind(null,m),$patch:D,$reset:B,$subscribe(y,_={}){const A=Jf(p,y,_.detached,()=>w()),w=o.run(()=>wi(()=>r.state.value[t],I=>{(_.flush==="sync"?f:u)&&y({storeId:t,type:Si.direct,events:v},I)},Xn({},l,_)));return A},$dispose:U},ee=to(z);r._s.set(t,ee);const R=(r._a&&r._a.runWithContext||UI)(()=>r._e.run(()=>(o=Wp()).run(()=>e({action:q}))));for(const y in R){const _=R[y];if(ze(_)&&!jI(_)||ar(_))i||(P&&$I(_)&&(ze(_)?_.value=P[y]:pl(_,P[y])),r.state.value[t][y]=_);else if(typeof _=="function"){const A=q(_,y);R[y]=A,c.actions[y]=_}}return Xn(ee,R),Xn(be(ee),R),Object.defineProperty(ee,"$state",{get:()=>r.state.value[t],set:y=>{D(_=>{Xn(_,y)})}}),r._p.forEach(y=>{Xn(ee,o.run(()=>y({store:ee,app:r._a,pinia:r,options:c})))}),P&&i&&n.hydrate&&n.hydrate(ee.$state,P),u=!0,f=!0,ee}/*! #__NO_SIDE_EFFECTS__ */function HI(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,c){const l=O0();return o=o||(l?qt(mg,null):null),o&&ja(o),o=pg,o._s.has(t)||(s?_g(t,e,r,o):qI(t,r,o)),o._s.get(t)}return i.$id=t,i}const yg=HI("posts",{state:()=>({posts:[],loaded:!1}),actions:{async fetchPosts(){if(this.loaded)return;const i=await(await fetch("https://sheets.googleapis.com/v4/spreadsheets/1DNYhoy2vsUD8Q8ASWpyD4VcHCAcvq5SeLs0SPYu44es/values/sheet1?key=AIzaSyDiTcvxQ6OQcpfP8RuWnJBSfO1DXpZn93c")).json();this.posts=i.values.slice(1).reverse().map((o,c)=>({id:c+1,title:o[0],summary:o[1],content:o[2],date:o[3],img:o[4]})),this.loaded=!0}}}),zI={class:"container"},WI={__name:"News",setup(t){const e=yg();return Bn(()=>{e.fetchPosts()}),(n,r)=>(me(),Ie("div",null,[Ce(dg),K("div",zI,[r[0]||(r[0]=K("h1",null,"最新消息",-1)),(me(!0),Ie(vt,null,Ti(ct(e).posts,s=>(me(),iu(LI,{key:s.id,post:s},null,8,["post"]))),128))])]))}},KI=St(WI,[["__scopeId","data-v-d97a21f6"]]),GI="/accounting-site/assets/article-img-001-BSNCPfqR.jpg",QI="/accounting-site/assets/gpt-img-WYr3Xaz-.png",YI={key:0,class:"post"},XI={class:"container"},JI={class:"date"},ZI={key:0,class:"img-inside"},ew=["src"],tw={__name:"Post",setup(t){const e=hg(),n=yg();Bn(()=>{n.fetchPosts()});const r=kt(()=>n.posts.find(i=>i.id===Number(e.params.id)));function s(i){return new URL(Object.assign({"../assets/article-images/article-img-001.jpg":GI,"../assets/article-images/gpt-img.png":QI})[`../assets/article-images/${i}`],import.meta.url).href}return(i,o)=>(me(),Ie("div",null,[Ce(dg),ct(r)?(me(),Ie("div",YI,[K("div",XI,[K("h2",null,$e(ct(r).title),1),K("p",JI,$e(ct(r).date),1),K("pre",null,$e(ct(r).content),1),ct(r).img?(me(),Ie("div",ZI,[K("img",{src:s(ct(r).img),class:"img"},null,8,ew)])):Ss("",!0)])])):Ss("",!0)]))}},nw=St(tw,[["__scopeId","data-v-f8001e87"]]),rw=()=>{};var ed={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},sw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Eg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,v=u&63;l||(v=64,o||(m=64)),r.push(n[f],n[p],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new iw;const m=i<<2|c>>4;if(r.push(m),u!==64){const v=c<<4&240|u>>2;if(r.push(v),p!==64){const P=u<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class iw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ow=function(t){const e=vg(t);return Eg.encodeByteArray(e,!0)},aa=function(t){return ow(t).replace(/\./g,"")},Tg=function(t){try{return Eg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw=()=>aw().__FIREBASE_DEFAULTS__,lw=()=>{if(typeof process>"u"||typeof ed>"u")return;const t=ed.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},uw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Tg(t[1]);return e&&JSON.parse(e)},qa=()=>{try{return rw()||cw()||lw()||uw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ig=t=>qa()?.emulatorHosts?.[t],wg=t=>{const e=Ig(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ag=()=>qa()?.config,bg=t=>qa()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function fu(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[aa(JSON.stringify(n)),aa(JSON.stringify(o)),""].join(".")}const Ci={};function fw(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ci))Ci[e]?t.emulator.push(e):t.prod.push(e);return t}function dw(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let td=!1;function du(t,e){if(typeof window>"u"||typeof document>"u"||!Yr(window.location.host)||Ci[t]===e||Ci[t]||td)return;Ci[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=fw().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,v){m.setAttribute("width","24"),m.setAttribute("id",v),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{td=!0,o()},m}function f(m,v){m.setAttribute("id",v),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=dw(r),v=n("text"),P=document.getElementById(v)||document.createElement("span"),V=n("learnmore"),D=document.getElementById(V)||document.createElement("a"),B=n("preprendIcon"),U=document.getElementById(B)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const q=m.element;c(q),f(D,V);const z=u();l(U,B),q.append(U,P,D,z),document.body.appendChild(q)}i?(P.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(U.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function mw(){const t=qa()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _w(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function yw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vw(){const t=It();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ew(){return!mw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Tw(){try{return typeof indexedDB=="object"}catch{return!1}}function Iw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww="FirebaseError";class En extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ww,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,so.prototype.create)}}class so{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Aw(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new En(s,c,r)}}function Aw(t,e){return t.replace(bw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const bw=/\{\$([^}]+)}/g;function Rw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(nd(i)&&nd(o)){if(!Hr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function nd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ui(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function hi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Sw(t,e){const n=new Cw(t,e);return n.subscribe.bind(n)}class Cw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Pw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Uc),s.error===void 0&&(s.error=Uc),s.complete===void 0&&(s.complete=Uc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Pw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Uc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t){return t&&t._delegate?t._delegate:t}class gr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dw(e))try{this.getOrInitializeService({instanceIdentifier:xr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=xr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xr){return this.instances.has(e)}getOptions(e=xr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Vw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xr){return this.component?this.component.multipleInstances?e:xr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vw(t){return t===xr?void 0:t}function Dw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const Ow={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},xw=_e.INFO,Mw={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},Lw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Mw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pu{constructor(e){this.name=e,this._logLevel=xw,this._logHandler=Lw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ow[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const Fw=(t,e)=>e.some(n=>t instanceof n);let rd,sd;function Uw(){return rd||(rd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bw(){return sd||(sd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sg=new WeakMap,ml=new WeakMap,Cg=new WeakMap,Bc=new WeakMap,mu=new WeakMap;function $w(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(cr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Sg.set(n,t)}).catch(()=>{}),mu.set(e,t),e}function jw(t){if(ml.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ml.set(t,e)}let gl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ml.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Cg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qw(t){gl=t(gl)}function Hw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call($c(this),e,...n);return Cg.set(r,e.sort?e.sort():[e]),cr(r)}:Bw().includes(t)?function(...e){return t.apply($c(this),e),cr(Sg.get(this))}:function(...e){return cr(t.apply($c(this),e))}}function zw(t){return typeof t=="function"?Hw(t):(t instanceof IDBTransaction&&jw(t),Fw(t,Uw())?new Proxy(t,gl):t)}function cr(t){if(t instanceof IDBRequest)return $w(t);if(Bc.has(t))return Bc.get(t);const e=zw(t);return e!==t&&(Bc.set(t,e),mu.set(e,t)),e}const $c=t=>mu.get(t);function Ww(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=cr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(cr(o.result),l.oldVersion,l.newVersion,cr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const Kw=["get","getKey","getAll","getAllKeys","count"],Gw=["put","add","delete","clear"],jc=new Map;function id(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(jc.get(e))return jc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Gw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Kw.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return jc.set(e,i),i}qw(t=>({...t,get:(e,n,r)=>id(e,n)||t.get(e,n,r),has:(e,n)=>!!id(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Yw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Yw(t){return t.getComponent()?.type==="VERSION"}const _l="@firebase/app",od="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=new pu("@firebase/app"),Xw="@firebase/app-compat",Jw="@firebase/analytics-compat",Zw="@firebase/analytics",eA="@firebase/app-check-compat",tA="@firebase/app-check",nA="@firebase/auth",rA="@firebase/auth-compat",sA="@firebase/database",iA="@firebase/data-connect",oA="@firebase/database-compat",aA="@firebase/functions",cA="@firebase/functions-compat",lA="@firebase/installations",uA="@firebase/installations-compat",hA="@firebase/messaging",fA="@firebase/messaging-compat",dA="@firebase/performance",pA="@firebase/performance-compat",mA="@firebase/remote-config",gA="@firebase/remote-config-compat",_A="@firebase/storage",yA="@firebase/storage-compat",vA="@firebase/firestore",EA="@firebase/ai",TA="@firebase/firestore-compat",IA="firebase",wA="12.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl="[DEFAULT]",AA={[_l]:"fire-core",[Xw]:"fire-core-compat",[Zw]:"fire-analytics",[Jw]:"fire-analytics-compat",[tA]:"fire-app-check",[eA]:"fire-app-check-compat",[nA]:"fire-auth",[rA]:"fire-auth-compat",[sA]:"fire-rtdb",[iA]:"fire-data-connect",[oA]:"fire-rtdb-compat",[aA]:"fire-fn",[cA]:"fire-fn-compat",[lA]:"fire-iid",[uA]:"fire-iid-compat",[hA]:"fire-fcm",[fA]:"fire-fcm-compat",[dA]:"fire-perf",[pA]:"fire-perf-compat",[mA]:"fire-rc",[gA]:"fire-rc-compat",[_A]:"fire-gcs",[yA]:"fire-gcs-compat",[vA]:"fire-fst",[TA]:"fire-fst-compat",[EA]:"fire-vertex","fire-js":"fire-js",[IA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca=new Map,bA=new Map,vl=new Map;function ad(t,e){try{t.container.addComponent(e)}catch(n){xn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zr(t){const e=t.name;if(vl.has(e))return xn.debug(`There were multiple attempts to register component ${e}.`),!1;vl.set(e,t);for(const n of ca.values())ad(n,t);for(const n of bA.values())ad(n,t);return!0}function Ha(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ut(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},lr=new so("app","Firebase",RA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw lr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=wA;function Pg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:yl,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw lr.create("bad-app-name",{appName:String(s)});if(n||(n=Ag()),!n)throw lr.create("no-options");const i=ca.get(s);if(i){if(Hr(n,i.options)&&Hr(r,i.config))return i;throw lr.create("duplicate-app",{appName:s})}const o=new Nw(s);for(const l of vl.values())o.addComponent(l);const c=new SA(n,r,o);return ca.set(s,c),c}function gu(t=yl){const e=ca.get(t);if(!e&&t===yl&&Ag())return Pg();if(!e)throw lr.create("no-app",{appName:t});return e}function hn(t,e,n){let r=AA[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xn.warn(o.join(" "));return}zr(new gr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA="firebase-heartbeat-database",PA=1,qi="firebase-heartbeat-store";let qc=null;function kg(){return qc||(qc=Ww(CA,PA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(qi)}catch(n){console.warn(n)}}}}).catch(t=>{throw lr.create("idb-open",{originalErrorMessage:t.message})})),qc}async function kA(t){try{const n=(await kg()).transaction(qi),r=await n.objectStore(qi).get(Vg(t));return await n.done,r}catch(e){if(e instanceof En)xn.warn(e.message);else{const n=lr.create("idb-get",{originalErrorMessage:e?.message});xn.warn(n.message)}}}async function cd(t,e){try{const r=(await kg()).transaction(qi,"readwrite");await r.objectStore(qi).put(e,Vg(t)),await r.done}catch(n){if(n instanceof En)xn.warn(n.message);else{const r=lr.create("idb-set",{originalErrorMessage:n?.message});xn.warn(r.message)}}}function Vg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA=1024,DA=30;class NA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ld();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>DA){const s=MA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){xn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ld(),{heartbeatsToSend:n,unsentEntries:r}=OA(this._heartbeatsCache.heartbeats),s=aa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return xn.warn(e),""}}}function ld(){return new Date().toISOString().substring(0,10)}function OA(t,e=VA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ud(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ud(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Tw()?Iw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await kA(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return cd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return cd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ud(t){return aa(JSON.stringify({version:2,heartbeats:t})).length}function MA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LA(t){zr(new gr("platform-logger",e=>new Qw(e),"PRIVATE")),zr(new gr("heartbeat",e=>new NA(e),"PRIVATE")),hn(_l,od,t),hn(_l,od,"esm2020"),hn("fire-js","")}LA("");var FA="firebase",UA="12.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hn(FA,UA,"app");function Dg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const BA=Dg,Ng=new so("auth","Firebase",Dg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=new pu("@firebase/auth");function $A(t,...e){la.logLevel<=_e.WARN&&la.warn(`Auth (${Xr}): ${t}`,...e)}function $o(t,...e){la.logLevel<=_e.ERROR&&la.error(`Auth (${Xr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(t,...e){throw _u(t,...e)}function fn(t,...e){return _u(t,...e)}function Og(t,e,n){const r={...BA(),[e]:n};return new so("auth","Firebase",r).create(e,{appName:t.name})}function ur(t){return Og(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _u(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ng.create(t,...e)}function ae(t,e,...n){if(!t)throw _u(e,...n)}function kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $o(e),new Error(e)}function Mn(t,e){t||kn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(){return typeof self<"u"&&self.location?.href||""}function jA(){return hd()==="http:"||hd()==="https:"}function hd(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jA()||_w()||"connection"in navigator)?navigator.onLine:!0}function HA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mn(n>e,"Short delay should be less than long delay!"),this.isMobile=pw()||yw()}get(){return qA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(t,e){Mn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],KA=new oo(3e4,6e4);function Jr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ar(t,e,n,r,s={}){return Mg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=io({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...i};return gw()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Yr(t.emulatorConfig.host)&&(u.credentials="include"),xg.fetch()(await Lg(t,t.config.apiHost,n,c),u)})}async function Mg(t,e,n){t._canInitEmulator=!1;const r={...zA,...e};try{const s=new QA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Po(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Po(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Po(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Po(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Og(t,f,u);en(t,f)}}catch(s){if(s instanceof En)throw s;en(t,"network-request-failed",{message:String(s)})}}async function za(t,e,n,r,s={}){const i=await Ar(t,e,n,r,s);return"mfaPendingCredential"in i&&en(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Lg(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?yu(t.config,s):`${t.config.apiScheme}://${s}`;return WA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function GA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class QA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(fn(this.auth,"network-request-failed")),KA.get())})}}function Po(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=fn(t,e,r);return s.customData._tokenResponse=n,s}function fd(t){return t!==void 0&&t.enterprise!==void 0}class YA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return GA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function XA(t,e){return Ar(t,"GET","/v2/recaptchaConfig",Jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JA(t,e){return Ar(t,"POST","/v1/accounts:delete",e)}async function ua(t,e){return Ar(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ZA(t,e=!1){const n=ut(t),r=await n.getIdToken(e),s=vu(r);ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Pi(Hc(s.auth_time)),issuedAtTime:Pi(Hc(s.iat)),expirationTime:Pi(Hc(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Hc(t){return Number(t)*1e3}function vu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return $o("JWT malformed, contained fewer than 3 sections"),null;try{const s=Tg(n);return s?JSON.parse(s):($o("Failed to decode base64 JWT payload"),null)}catch(s){return $o("Caught error parsing JWT payload as JSON",s?.toString()),null}}function dd(t){const e=vu(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof En&&e1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function e1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pi(this.lastLoginAt),this.creationTime=Pi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ha(t){const e=t.auth,n=await t.getIdToken(),r=await Hi(t,ua(e,{idToken:n}));ae(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?Fg(s.providerUserInfo):[],o=r1(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!o?.length,u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Tl(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function n1(t){const e=ut(t);await ha(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function r1(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Fg(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s1(t,e){const n=await Mg(t,{},async()=>{const r=io({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Lg(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&Yr(t.emulatorConfig.host)&&(l.credentials="include"),xg.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function i1(t,e){return Ar(t,"POST","/v2/accounts:revokeToken",Jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=dd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await s1(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Is;return r&&(ae(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ae(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ae(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Is,this.toJSON())}_performRefresh(){return kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Gt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new t1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Tl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Hi(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ZA(this,e)}reload(){return n1(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Gt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ha(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ut(this.auth.app))return Promise.reject(ur(this.auth));const e=await this.getIdToken();return await Hi(this,JA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:v,providerData:P,stsTokenManager:V}=n;ae(p&&V,e,"internal-error");const D=Is.fromJSON(this.name,V);ae(typeof p=="string",e,"internal-error"),Yn(r,e.name),Yn(s,e.name),ae(typeof m=="boolean",e,"internal-error"),ae(typeof v=="boolean",e,"internal-error"),Yn(i,e.name),Yn(o,e.name),Yn(c,e.name),Yn(l,e.name),Yn(u,e.name),Yn(f,e.name);const B=new Gt({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:v,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:D,createdAt:u,lastLoginAt:f});return P&&Array.isArray(P)&&(B.providerData=P.map(U=>({...U}))),l&&(B._redirectEventId=l),B}static async _fromIdTokenResponse(e,n,r=!1){const s=new Is;s.updateFromServerResponse(n);const i=new Gt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ha(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ae(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Fg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,c=new Is;c.updateFromIdToken(r);const l=new Gt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Tl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd=new Map;function Vn(t){Mn(t instanceof Function,"Expected a class definition");let e=pd.get(t);return e?(Mn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ug.type="NONE";const md=Ug;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(t,e,n){return`firebase:${t}:${e}:${n}`}class ws{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=jo(this.userKey,s.apiKey,i),this.fullPersistenceKey=jo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ua(this.auth,{idToken:e}).catch(()=>{});return n?Gt._fromGetAccountInfoResponse(this.auth,n,e):null}return Gt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ws(Vn(md),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Vn(md);const o=jo(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await ua(e,{idToken:f}).catch(()=>{});if(!m)break;p=await Gt._fromGetAccountInfoResponse(e,m,f)}else p=Gt._fromJSON(e,f);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ws(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ws(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zg(e))return"Blackberry";if(Wg(e))return"Webos";if($g(e))return"Safari";if((e.includes("chrome/")||jg(e))&&!e.includes("edge/"))return"Chrome";if(Hg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function Bg(t=It()){return/firefox\//i.test(t)}function $g(t=It()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jg(t=It()){return/crios\//i.test(t)}function qg(t=It()){return/iemobile/i.test(t)}function Hg(t=It()){return/android/i.test(t)}function zg(t=It()){return/blackberry/i.test(t)}function Wg(t=It()){return/webos/i.test(t)}function Eu(t=It()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function o1(t=It()){return Eu(t)&&!!window.navigator?.standalone}function a1(){return vw()&&document.documentMode===10}function Kg(t=It()){return Eu(t)||Hg(t)||Wg(t)||zg(t)||/windows phone/i.test(t)||qg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(t,e=[]){let n;switch(t){case"Browser":n=gd(It());break;case"Worker":n=`${gd(It())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l1(t,e={}){return Ar(t,"GET","/v2/passwordPolicy",Jr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1=6;class h1{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??u1,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _d(this),this.idTokenSubscription=new _d(this),this.beforeStateQueue=new c1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ng,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await ws.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ua(this,{idToken:e}),r=await Gt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Ut(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===o)&&c?.user&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ha(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=HA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ut(this.app))return Promise.reject(ur(this));const n=e?ut(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ut(this.app)?Promise.reject(ur(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ut(this.app)?Promise.reject(ur(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await l1(this),n=new h1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new so("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await i1(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vn(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await ws.create(this,[Vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Ut(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&$A(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ls(t){return ut(t)}class _d{constructor(e){this.auth=e,this.observer=null,this.addObserver=Sw(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function d1(t){Wa=t}function Qg(t){return Wa.loadJS(t)}function p1(){return Wa.recaptchaEnterpriseScript}function m1(){return Wa.gapiScript}function g1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class _1{constructor(){this.enterprise=new y1}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class y1{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const v1="recaptcha-enterprise",Yg="NO_RECAPTCHA";class E1{constructor(e){this.type=v1,this.auth=Ls(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{XA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new YA(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;fd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Yg)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new _1().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&fd(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=p1();l.length!==0&&(l+=c),Qg(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function yd(t,e,n,r=!1,s=!1){const i=new E1(t);let o;if(s)o=Yg;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function vd(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await yd(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await yd(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T1(t,e){const n=Ha(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Hr(i,e??{}))return s;en(s,"already-initialized")}return n.initialize({options:e})}function I1(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Vn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function w1(t,e,n){const r=Ls(t);ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Xg(e),{host:o,port:c}=A1(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ae(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ae(Hr(u,r.config.emulator)&&Hr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Yr(o)?(fu(`${i}//${o}${l}`),du("Auth",!0)):b1()}function Xg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function A1(t){const e=Xg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ed(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ed(o)}}}function Ed(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function b1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kn("not implemented")}_getIdTokenResponse(e){return kn("not implemented")}_linkToIdToken(e,n){return kn("not implemented")}_getReauthenticationResolver(e){return kn("not implemented")}}async function R1(t,e){return Ar(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S1(t,e){return za(t,"POST","/v1/accounts:signInWithPassword",Jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C1(t,e){return za(t,"POST","/v1/accounts:signInWithEmailLink",Jr(t,e))}async function P1(t,e){return za(t,"POST","/v1/accounts:signInWithEmailLink",Jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi extends Tu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new zi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new zi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vd(e,n,"signInWithPassword",S1);case"emailLink":return C1(e,{email:this._email,oobCode:this._password});default:en(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vd(e,r,"signUpPassword",R1);case"emailLink":return P1(e,{idToken:n,email:this._email,oobCode:this._password});default:en(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function As(t,e){return za(t,"POST","/v1/accounts:signInWithIdp",Jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1="http://localhost";class Wr extends Tu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):en("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Wr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return As(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,As(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,As(e,n)}buildRequest(){const e={requestUri:k1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=io(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V1(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function D1(t){const e=ui(hi(t)).link,n=e?ui(hi(e)).deep_link_id:null,r=ui(hi(t)).deep_link_id;return(r?ui(hi(r)).link:null)||r||n||e||t}class Iu{constructor(e){const n=ui(hi(e)),r=n.apiKey??null,s=n.oobCode??null,i=V1(n.mode??null);ae(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=D1(e);try{return new Iu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(){this.providerId=Fs.PROVIDER_ID}static credential(e,n){return zi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Iu.parseLink(n);return ae(r,"argument-error"),zi._fromEmailAndCode(e,r.code,r.tenantId)}}Fs.PROVIDER_ID="password";Fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao extends Jg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends ao{constructor(){super("facebook.com")}static credential(e){return Wr._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.FACEBOOK_SIGN_IN_METHOD="facebook.com";tr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends ao{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wr._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return nr.credential(n,r)}catch{return null}}}nr.GOOGLE_SIGN_IN_METHOD="google.com";nr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends ao{constructor(){super("github.com")}static credential(e){return Wr._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rr.credential(e.oauthAccessToken)}catch{return null}}}rr.GITHUB_SIGN_IN_METHOD="github.com";rr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends ao{constructor(){super("twitter.com")}static credential(e,n){return Wr._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return sr.credential(n,r)}catch{return null}}}sr.TWITTER_SIGN_IN_METHOD="twitter.com";sr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Gt._fromIdTokenResponse(e,r,s),o=Td(r);return new ks({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Td(r);return new ks({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Td(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa extends En{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,fa.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new fa(e,n,r,s)}}function Zg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?fa._fromErrorAndOperation(t,i,e,r):i})}async function N1(t,e,n=!1){const r=await Hi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ks._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O1(t,e,n=!1){const{auth:r}=t;if(Ut(r.app))return Promise.reject(ur(r));const s="reauthenticate";try{const i=await Hi(t,Zg(r,s,e,t),n);ae(i.idToken,r,"internal-error");const o=vu(i.idToken);ae(o,r,"internal-error");const{sub:c}=o;return ae(t.uid===c,r,"user-mismatch"),ks._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&en(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e_(t,e,n=!1){if(Ut(t.app))return Promise.reject(ur(t));const r="signIn",s=await Zg(t,r,e),i=await ks._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function x1(t,e){return e_(Ls(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M1(t){const e=Ls(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function L1(t,e,n){return Ut(t.app)?Promise.reject(ur(t)):x1(ut(t),Fs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&M1(t),r})}function F1(t,e,n,r){return ut(t).onIdTokenChanged(e,n,r)}function U1(t,e,n){return ut(t).beforeAuthStateChanged(e,n)}function B1(t,e,n,r){return ut(t).onAuthStateChanged(e,n,r)}function $1(t){return ut(t).signOut()}const da="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(da,"1"),this.storage.removeItem(da),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1=1e3,q1=10;class n_ extends t_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Kg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);a1()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,q1):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},j1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}n_.type="LOCAL";const H1=n_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_ extends t_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}r_.type="SESSION";const s_=r_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ka(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await z1(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ka.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=wu("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(){return window}function K1(t){dn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(){return typeof dn().WorkerGlobalScope<"u"&&typeof dn().importScripts=="function"}async function G1(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Q1(){return navigator?.serviceWorker?.controller||null}function Y1(){return i_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_="firebaseLocalStorageDb",X1=1,pa="firebaseLocalStorage",a_="fbase_key";class co{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ga(t,e){return t.transaction([pa],e?"readwrite":"readonly").objectStore(pa)}function J1(){const t=indexedDB.deleteDatabase(o_);return new co(t).toPromise()}function Il(){const t=indexedDB.open(o_,X1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(pa,{keyPath:a_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(pa)?e(r):(r.close(),await J1(),e(await Il()))})})}async function Id(t,e,n){const r=Ga(t,!0).put({[a_]:e,value:n});return new co(r).toPromise()}async function Z1(t,e){const n=Ga(t,!1).get(e),r=await new co(n).toPromise();return r===void 0?null:r.value}function wd(t,e){const n=Ga(t,!0).delete(e);return new co(n).toPromise()}const eb=800,tb=3;class c_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Il(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>tb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return i_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ka._getInstance(Y1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await G1(),!this.activeServiceWorker)return;this.sender=new W1(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Q1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Il();return await Id(e,da,"1"),await wd(e,da),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Id(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Z1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ga(s,!1).getAll();return new co(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}c_.type="LOCAL";const nb=c_;new oo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rb(t,e){return e?Vn(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au extends Tu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return As(e,this._buildIdpRequest())}_linkToIdToken(e,n){return As(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return As(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function sb(t){return e_(t.auth,new Au(t),t.bypassAuthState)}function ib(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),O1(n,new Au(t),t.bypassAuthState)}async function ob(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),N1(n,new Au(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sb;case"linkViaPopup":case"linkViaRedirect":return ob;case"reauthViaPopup":case"reauthViaRedirect":return ib;default:en(this.auth,"internal-error")}}resolve(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab=new oo(2e3,1e4);class ys extends l_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ys.currentPopupAction&&ys.currentPopupAction.cancel(),ys.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){Mn(this.filter.length===1,"Popup operations only handle one event");const e=wu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ys.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ab.get())};e()}}ys.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb="pendingRedirect",qo=new Map;class lb extends l_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=qo.get(this.auth._key());if(!e){try{const r=await ub(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}qo.set(this.auth._key(),e)}return this.bypassAuthState||qo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ub(t,e){const n=db(e),r=fb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function hb(t,e){qo.set(t._key(),e)}function fb(t){return Vn(t._redirectPersistence)}function db(t){return jo(cb,t.config.apiKey,t.name)}async function pb(t,e,n=!1){if(Ut(t.app))return Promise.reject(ur(t));const r=Ls(t),s=rb(r,e),o=await new lb(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb=600*1e3;class gb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_b(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!u_(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(fn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ad(e))}saveEventToCache(e){this.cachedEventUids.add(Ad(e)),this.lastProcessedEventTime=Date.now()}}function Ad(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function u_({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function _b(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return u_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yb(t,e={}){return Ar(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Eb=/^https?/;async function Tb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await yb(t);for(const n of e)try{if(Ib(n))return}catch{}en(t,"unauthorized-domain")}function Ib(t){const e=El(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Eb.test(n))return!1;if(vb.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb=new oo(3e4,6e4);function bd(){const t=dn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ab(t){return new Promise((e,n)=>{function r(){bd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bd(),n(fn(t,"network-request-failed"))},timeout:wb.get()})}if(dn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(dn().gapi?.load)r();else{const s=g1("iframefcb");return dn()[s]=()=>{gapi.load?r():n(fn(t,"network-request-failed"))},Qg(`${m1()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw Ho=null,e})}let Ho=null;function bb(t){return Ho=Ho||Ab(t),Ho}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb=new oo(5e3,15e3),Sb="__/auth/iframe",Cb="emulator/auth/iframe",Pb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vb(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?yu(e,Cb):`https://${t.config.authDomain}/${Sb}`,r={apiKey:e.apiKey,appName:t.name,v:Xr},s=kb.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${io(r).slice(1)}`}async function Db(t){const e=await bb(t),n=dn().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:Vb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Pb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=fn(t,"network-request-failed"),c=dn().setTimeout(()=>{i(o)},Rb.get());function l(){dn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ob=500,xb=600,Mb="_blank",Lb="http://localhost";class Rd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Fb(t,e,n,r=Ob,s=xb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...Nb,width:r.toString(),height:s.toString(),top:i,left:o},u=It().toLowerCase();n&&(c=jg(u)?Mb:n),Bg(u)&&(e=e||Lb,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[v,P])=>`${m}${v}=${P},`,"");if(o1(u)&&c!=="_self")return Ub(e||"",c),new Rd(null);const p=window.open(e||"",c,f);ae(p,t,"popup-blocked");try{p.focus()}catch{}return new Rd(p)}function Ub(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb="__/auth/handler",$b="emulator/auth/handler",jb=encodeURIComponent("fac");async function Sd(t,e,n,r,s,i){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Xr,eventId:s};if(e instanceof Jg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Rw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof ao){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),u=l?`#${jb}=${encodeURIComponent(l)}`:"";return`${qb(t)}?${io(c).slice(1)}${u}`}function qb({config:t}){return t.emulator?yu(t,$b):`https://${t.authDomain}/${Bb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc="webStorageSupport";class Hb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=s_,this._completeRedirectFn=pb,this._overrideRedirectResult=hb}async _openPopup(e,n,r,s){Mn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Sd(e,n,r,El(),s);return Fb(e,i,wu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Sd(e,n,r,El(),s);return K1(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Mn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Db(e),r=new gb(e);return n.register("authEvent",s=>(ae(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zc,{type:zc},s=>{const i=s?.[0]?.[zc];i!==void 0&&n(!!i),en(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Tb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Kg()||$g()||Eu()}}const zb=Hb;var Cd="@firebase/auth",Pd="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Gb(t){zr(new gr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gg(t)},u=new f1(r,s,i,l);return I1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),zr(new gr("auth-internal",e=>{const n=Ls(e.getProvider("auth").getImmediate());return(r=>new Wb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hn(Cd,Pd,Kb(t)),hn(Cd,Pd,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb=300,Yb=bg("authIdTokenMaxAge")||Qb;let kd=null;const Xb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Yb)return;const s=n?.token;kd!==s&&(kd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function h_(t=gu()){const e=Ha(t,"auth");if(e.isInitialized())return e.getImmediate();const n=T1(t,{popupRedirectResolver:zb,persistence:[nb,H1,s_]}),r=bg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Xb(i.toString());U1(n,o,()=>o(n.currentUser)),F1(n,c=>o(c))}}const s=Ig("auth");return s&&w1(n,`http://${s}`),n}function Jb(){return document.getElementsByTagName("head")?.[0]??document}d1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=fn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Jb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Gb("Browser");var Vd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hr,f_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,y){function _(){}_.prototype=y.prototype,R.F=y.prototype,R.prototype=new _,R.prototype.constructor=R,R.D=function(A,w,I){for(var E=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)E[Ee-2]=arguments[Ee];return y.prototype[w].apply(A,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,y,_){_||(_=0);const A=Array(16);if(typeof y=="string")for(var w=0;w<16;++w)A[w]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(w=0;w<16;++w)A[w]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=R.g[0],_=R.g[1],w=R.g[2];let I=R.g[3],E;E=y+(I^_&(w^I))+A[0]+3614090360&4294967295,y=_+(E<<7&4294967295|E>>>25),E=I+(w^y&(_^w))+A[1]+3905402710&4294967295,I=y+(E<<12&4294967295|E>>>20),E=w+(_^I&(y^_))+A[2]+606105819&4294967295,w=I+(E<<17&4294967295|E>>>15),E=_+(y^w&(I^y))+A[3]+3250441966&4294967295,_=w+(E<<22&4294967295|E>>>10),E=y+(I^_&(w^I))+A[4]+4118548399&4294967295,y=_+(E<<7&4294967295|E>>>25),E=I+(w^y&(_^w))+A[5]+1200080426&4294967295,I=y+(E<<12&4294967295|E>>>20),E=w+(_^I&(y^_))+A[6]+2821735955&4294967295,w=I+(E<<17&4294967295|E>>>15),E=_+(y^w&(I^y))+A[7]+4249261313&4294967295,_=w+(E<<22&4294967295|E>>>10),E=y+(I^_&(w^I))+A[8]+1770035416&4294967295,y=_+(E<<7&4294967295|E>>>25),E=I+(w^y&(_^w))+A[9]+2336552879&4294967295,I=y+(E<<12&4294967295|E>>>20),E=w+(_^I&(y^_))+A[10]+4294925233&4294967295,w=I+(E<<17&4294967295|E>>>15),E=_+(y^w&(I^y))+A[11]+2304563134&4294967295,_=w+(E<<22&4294967295|E>>>10),E=y+(I^_&(w^I))+A[12]+1804603682&4294967295,y=_+(E<<7&4294967295|E>>>25),E=I+(w^y&(_^w))+A[13]+4254626195&4294967295,I=y+(E<<12&4294967295|E>>>20),E=w+(_^I&(y^_))+A[14]+2792965006&4294967295,w=I+(E<<17&4294967295|E>>>15),E=_+(y^w&(I^y))+A[15]+1236535329&4294967295,_=w+(E<<22&4294967295|E>>>10),E=y+(w^I&(_^w))+A[1]+4129170786&4294967295,y=_+(E<<5&4294967295|E>>>27),E=I+(_^w&(y^_))+A[6]+3225465664&4294967295,I=y+(E<<9&4294967295|E>>>23),E=w+(y^_&(I^y))+A[11]+643717713&4294967295,w=I+(E<<14&4294967295|E>>>18),E=_+(I^y&(w^I))+A[0]+3921069994&4294967295,_=w+(E<<20&4294967295|E>>>12),E=y+(w^I&(_^w))+A[5]+3593408605&4294967295,y=_+(E<<5&4294967295|E>>>27),E=I+(_^w&(y^_))+A[10]+38016083&4294967295,I=y+(E<<9&4294967295|E>>>23),E=w+(y^_&(I^y))+A[15]+3634488961&4294967295,w=I+(E<<14&4294967295|E>>>18),E=_+(I^y&(w^I))+A[4]+3889429448&4294967295,_=w+(E<<20&4294967295|E>>>12),E=y+(w^I&(_^w))+A[9]+568446438&4294967295,y=_+(E<<5&4294967295|E>>>27),E=I+(_^w&(y^_))+A[14]+3275163606&4294967295,I=y+(E<<9&4294967295|E>>>23),E=w+(y^_&(I^y))+A[3]+4107603335&4294967295,w=I+(E<<14&4294967295|E>>>18),E=_+(I^y&(w^I))+A[8]+1163531501&4294967295,_=w+(E<<20&4294967295|E>>>12),E=y+(w^I&(_^w))+A[13]+2850285829&4294967295,y=_+(E<<5&4294967295|E>>>27),E=I+(_^w&(y^_))+A[2]+4243563512&4294967295,I=y+(E<<9&4294967295|E>>>23),E=w+(y^_&(I^y))+A[7]+1735328473&4294967295,w=I+(E<<14&4294967295|E>>>18),E=_+(I^y&(w^I))+A[12]+2368359562&4294967295,_=w+(E<<20&4294967295|E>>>12),E=y+(_^w^I)+A[5]+4294588738&4294967295,y=_+(E<<4&4294967295|E>>>28),E=I+(y^_^w)+A[8]+2272392833&4294967295,I=y+(E<<11&4294967295|E>>>21),E=w+(I^y^_)+A[11]+1839030562&4294967295,w=I+(E<<16&4294967295|E>>>16),E=_+(w^I^y)+A[14]+4259657740&4294967295,_=w+(E<<23&4294967295|E>>>9),E=y+(_^w^I)+A[1]+2763975236&4294967295,y=_+(E<<4&4294967295|E>>>28),E=I+(y^_^w)+A[4]+1272893353&4294967295,I=y+(E<<11&4294967295|E>>>21),E=w+(I^y^_)+A[7]+4139469664&4294967295,w=I+(E<<16&4294967295|E>>>16),E=_+(w^I^y)+A[10]+3200236656&4294967295,_=w+(E<<23&4294967295|E>>>9),E=y+(_^w^I)+A[13]+681279174&4294967295,y=_+(E<<4&4294967295|E>>>28),E=I+(y^_^w)+A[0]+3936430074&4294967295,I=y+(E<<11&4294967295|E>>>21),E=w+(I^y^_)+A[3]+3572445317&4294967295,w=I+(E<<16&4294967295|E>>>16),E=_+(w^I^y)+A[6]+76029189&4294967295,_=w+(E<<23&4294967295|E>>>9),E=y+(_^w^I)+A[9]+3654602809&4294967295,y=_+(E<<4&4294967295|E>>>28),E=I+(y^_^w)+A[12]+3873151461&4294967295,I=y+(E<<11&4294967295|E>>>21),E=w+(I^y^_)+A[15]+530742520&4294967295,w=I+(E<<16&4294967295|E>>>16),E=_+(w^I^y)+A[2]+3299628645&4294967295,_=w+(E<<23&4294967295|E>>>9),E=y+(w^(_|~I))+A[0]+4096336452&4294967295,y=_+(E<<6&4294967295|E>>>26),E=I+(_^(y|~w))+A[7]+1126891415&4294967295,I=y+(E<<10&4294967295|E>>>22),E=w+(y^(I|~_))+A[14]+2878612391&4294967295,w=I+(E<<15&4294967295|E>>>17),E=_+(I^(w|~y))+A[5]+4237533241&4294967295,_=w+(E<<21&4294967295|E>>>11),E=y+(w^(_|~I))+A[12]+1700485571&4294967295,y=_+(E<<6&4294967295|E>>>26),E=I+(_^(y|~w))+A[3]+2399980690&4294967295,I=y+(E<<10&4294967295|E>>>22),E=w+(y^(I|~_))+A[10]+4293915773&4294967295,w=I+(E<<15&4294967295|E>>>17),E=_+(I^(w|~y))+A[1]+2240044497&4294967295,_=w+(E<<21&4294967295|E>>>11),E=y+(w^(_|~I))+A[8]+1873313359&4294967295,y=_+(E<<6&4294967295|E>>>26),E=I+(_^(y|~w))+A[15]+4264355552&4294967295,I=y+(E<<10&4294967295|E>>>22),E=w+(y^(I|~_))+A[6]+2734768916&4294967295,w=I+(E<<15&4294967295|E>>>17),E=_+(I^(w|~y))+A[13]+1309151649&4294967295,_=w+(E<<21&4294967295|E>>>11),E=y+(w^(_|~I))+A[4]+4149444226&4294967295,y=_+(E<<6&4294967295|E>>>26),E=I+(_^(y|~w))+A[11]+3174756917&4294967295,I=y+(E<<10&4294967295|E>>>22),E=w+(y^(I|~_))+A[2]+718787259&4294967295,w=I+(E<<15&4294967295|E>>>17),E=_+(I^(w|~y))+A[9]+3951481745&4294967295,R.g[0]=R.g[0]+y&4294967295,R.g[1]=R.g[1]+(w+(E<<21&4294967295|E>>>11))&4294967295,R.g[2]=R.g[2]+w&4294967295,R.g[3]=R.g[3]+I&4294967295}r.prototype.v=function(R,y){y===void 0&&(y=R.length);const _=y-this.blockSize,A=this.C;let w=this.h,I=0;for(;I<y;){if(w==0)for(;I<=_;)s(this,R,I),I+=this.blockSize;if(typeof R=="string"){for(;I<y;)if(A[w++]=R.charCodeAt(I++),w==this.blockSize){s(this,A),w=0;break}}else for(;I<y;)if(A[w++]=R[I++],w==this.blockSize){s(this,A),w=0;break}}this.h=w,this.o+=y},r.prototype.A=function(){var R=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);R[0]=128;for(var y=1;y<R.length-8;++y)R[y]=0;y=this.o*8;for(var _=R.length-8;_<R.length;++_)R[_]=y&255,y/=256;for(this.v(R),R=Array(16),y=0,_=0;_<4;++_)for(let A=0;A<32;A+=8)R[y++]=this.g[_]>>>A&255;return R};function i(R,y){var _=c;return Object.prototype.hasOwnProperty.call(_,R)?_[R]:_[R]=y(R)}function o(R,y){this.h=y;const _=[];let A=!0;for(let w=R.length-1;w>=0;w--){const I=R[w]|0;A&&I==y||(_[w]=I,A=!1)}this.g=_}var c={};function l(R){return-128<=R&&R<128?i(R,function(y){return new o([y|0],y<0?-1:0)}):new o([R|0],R<0?-1:0)}function u(R){if(isNaN(R)||!isFinite(R))return p;if(R<0)return D(u(-R));const y=[];let _=1;for(let A=0;R>=_;A++)y[A]=R/_|0,_*=4294967296;return new o(y,0)}function f(R,y){if(R.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(R.charAt(0)=="-")return D(f(R.substring(1),y));if(R.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=u(Math.pow(y,8));let A=p;for(let I=0;I<R.length;I+=8){var w=Math.min(8,R.length-I);const E=parseInt(R.substring(I,I+w),y);w<8?(w=u(Math.pow(y,w)),A=A.j(w).add(u(E))):(A=A.j(_),A=A.add(u(E)))}return A}var p=l(0),m=l(1),v=l(16777216);t=o.prototype,t.m=function(){if(V(this))return-D(this).m();let R=0,y=1;for(let _=0;_<this.g.length;_++){const A=this.i(_);R+=(A>=0?A:4294967296+A)*y,y*=4294967296}return R},t.toString=function(R){if(R=R||10,R<2||36<R)throw Error("radix out of range: "+R);if(P(this))return"0";if(V(this))return"-"+D(this).toString(R);const y=u(Math.pow(R,6));var _=this;let A="";for(;;){const w=z(_,y).g;_=B(_,w.j(y));let I=((_.g.length>0?_.g[0]:_.h)>>>0).toString(R);if(_=w,P(_))return I+A;for(;I.length<6;)I="0"+I;A=I+A}},t.i=function(R){return R<0?0:R<this.g.length?this.g[R]:this.h};function P(R){if(R.h!=0)return!1;for(let y=0;y<R.g.length;y++)if(R.g[y]!=0)return!1;return!0}function V(R){return R.h==-1}t.l=function(R){return R=B(this,R),V(R)?-1:P(R)?0:1};function D(R){const y=R.g.length,_=[];for(let A=0;A<y;A++)_[A]=~R.g[A];return new o(_,~R.h).add(m)}t.abs=function(){return V(this)?D(this):this},t.add=function(R){const y=Math.max(this.g.length,R.g.length),_=[];let A=0;for(let w=0;w<=y;w++){let I=A+(this.i(w)&65535)+(R.i(w)&65535),E=(I>>>16)+(this.i(w)>>>16)+(R.i(w)>>>16);A=E>>>16,I&=65535,E&=65535,_[w]=E<<16|I}return new o(_,_[_.length-1]&-2147483648?-1:0)};function B(R,y){return R.add(D(y))}t.j=function(R){if(P(this)||P(R))return p;if(V(this))return V(R)?D(this).j(D(R)):D(D(this).j(R));if(V(R))return D(this.j(D(R)));if(this.l(v)<0&&R.l(v)<0)return u(this.m()*R.m());const y=this.g.length+R.g.length,_=[];for(var A=0;A<2*y;A++)_[A]=0;for(A=0;A<this.g.length;A++)for(let w=0;w<R.g.length;w++){const I=this.i(A)>>>16,E=this.i(A)&65535,Ee=R.i(w)>>>16,Be=R.i(w)&65535;_[2*A+2*w]+=E*Be,U(_,2*A+2*w),_[2*A+2*w+1]+=I*Be,U(_,2*A+2*w+1),_[2*A+2*w+1]+=E*Ee,U(_,2*A+2*w+1),_[2*A+2*w+2]+=I*Ee,U(_,2*A+2*w+2)}for(R=0;R<y;R++)_[R]=_[2*R+1]<<16|_[2*R];for(R=y;R<2*y;R++)_[R]=0;return new o(_,0)};function U(R,y){for(;(R[y]&65535)!=R[y];)R[y+1]+=R[y]>>>16,R[y]&=65535,y++}function q(R,y){this.g=R,this.h=y}function z(R,y){if(P(y))throw Error("division by zero");if(P(R))return new q(p,p);if(V(R))return y=z(D(R),y),new q(D(y.g),D(y.h));if(V(y))return y=z(R,D(y)),new q(D(y.g),y.h);if(R.g.length>30){if(V(R)||V(y))throw Error("slowDivide_ only works with positive integers.");for(var _=m,A=y;A.l(R)<=0;)_=ee(_),A=ee(A);var w=ie(_,1),I=ie(A,1);for(A=ie(A,2),_=ie(_,2);!P(A);){var E=I.add(A);E.l(R)<=0&&(w=w.add(_),I=E),A=ie(A,1),_=ie(_,1)}return y=B(R,w.j(y)),new q(w,y)}for(w=p;R.l(y)>=0;){for(_=Math.max(1,Math.floor(R.m()/y.m())),A=Math.ceil(Math.log(_)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),I=u(_),E=I.j(y);V(E)||E.l(R)>0;)_-=A,I=u(_),E=I.j(y);P(I)&&(I=m),w=w.add(I),R=B(R,E)}return new q(w,R)}t.B=function(R){return z(this,R).h},t.and=function(R){const y=Math.max(this.g.length,R.g.length),_=[];for(let A=0;A<y;A++)_[A]=this.i(A)&R.i(A);return new o(_,this.h&R.h)},t.or=function(R){const y=Math.max(this.g.length,R.g.length),_=[];for(let A=0;A<y;A++)_[A]=this.i(A)|R.i(A);return new o(_,this.h|R.h)},t.xor=function(R){const y=Math.max(this.g.length,R.g.length),_=[];for(let A=0;A<y;A++)_[A]=this.i(A)^R.i(A);return new o(_,this.h^R.h)};function ee(R){const y=R.g.length+1,_=[];for(let A=0;A<y;A++)_[A]=R.i(A)<<1|R.i(A-1)>>>31;return new o(_,R.h)}function ie(R,y){const _=y>>5;y%=32;const A=R.g.length-_,w=[];for(let I=0;I<A;I++)w[I]=y>0?R.i(I+_)>>>y|R.i(I+_+1)<<32-y:R.i(I+_);return new o(w,R.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,f_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,hr=o}).apply(typeof Vd<"u"?Vd:typeof self<"u"?self:typeof window<"u"?window:{});var ko=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var d_,fi,p_,zo,wl,m_,g_,__;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ko=="object"&&ko];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in d))break e;d=d[C]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var d=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&d.push([g,h[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function l(a,h,d){return a.call.apply(a.bind,arguments)}function u(a,h,d){return u=l,u.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,C,k){for(var W=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)W[pe-2]=arguments[pe];return h.prototype[C].apply(g,W)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function v(a){const h=a.length;if(h>0){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function P(a,h){for(let g=1;g<arguments.length;g++){const C=arguments[g];var d=typeof C;if(d=d!="object"?d:C?Array.isArray(C)?"array":d:"null",d=="array"||d=="object"&&typeof C.length=="number"){d=a.length||0;const k=C.length||0;a.length=d+k;for(let W=0;W<k;W++)a[d+W]=C[W]}else a.push(C)}}class V{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function D(a){o.setTimeout(()=>{throw a},0)}function B(){var a=R;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class U{constructor(){this.h=this.g=null}add(h,d){const g=q.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var q=new V(()=>new z,a=>a.reset());class z{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ee,ie=!1,R=new U,y=()=>{const a=Promise.resolve(void 0);ee=()=>{a.then(_)}};function _(){for(var a;a=B();){try{a.h.call(a.g)}catch(d){D(d)}var h=q;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}ie=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function w(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var I=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a})();function E(a){return/^[\s\xa0]*$/.test(a)}function Ee(a,h){w.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(Ee,w),Ee.prototype.init=function(a,h){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Ee.Z.h.call(this)},Ee.prototype.h=function(){Ee.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Be="closure_listenable_"+(Math.random()*1e6|0),ke=0;function de(a,h,d,g,C){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=C,this.key=++ke,this.da=this.fa=!1}function Te(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ct(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function nn(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function Vt(a){const h={};for(const d in a)h[d]=a[d];return h}const st="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function In(a,h){let d,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(d in g)a[d]=g[d];for(let k=0;k<st.length;k++)d=st[k],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function zt(a){this.src=a,this.g={},this.h=0}zt.prototype.add=function(a,h,d,g,C){const k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);const W=ft(a,h,g,C);return W>-1?(h=a[W],d||(h.fa=!1)):(h=new de(h,this.src,k,!!g,C),h.fa=d,a.push(h)),h};function $n(a,h){const d=h.type;if(d in a.g){var g=a.g[d],C=Array.prototype.indexOf.call(g,h,void 0),k;(k=C>=0)&&Array.prototype.splice.call(g,C,1),k&&(Te(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function ft(a,h,d,g){for(let C=0;C<a.length;++C){const k=a[C];if(!k.da&&k.listener==h&&k.capture==!!d&&k.ha==g)return C}return-1}var O="closure_lm_"+(Math.random()*1e6|0),J={};function Q(a,h,d,g,C){if(Array.isArray(h)){for(let k=0;k<h.length;k++)Q(a,h[k],d,g,C);return null}return d=G(d),a&&a[Be]?a.J(h,d,c(g)?!!g.capture:!1,C):te(a,h,d,!1,g,C)}function te(a,h,d,g,C,k){if(!h)throw Error("Invalid event type");const W=c(C)?!!C.capture:!!C;let pe=F(a);if(pe||(a[O]=pe=new zt(a)),d=pe.add(h,d,g,W,k),d.proxy)return d;if(g=Ve(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)I||(C=W),C===void 0&&(C=!1),a.addEventListener(h.toString(),g,C);else if(a.attachEvent)a.attachEvent(S(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Ve(){function a(d){return h.call(a.src,a.listener,d)}const h=M;return a}function T(a,h,d,g,C){if(Array.isArray(h))for(var k=0;k<h.length;k++)T(a,h[k],d,g,C);else g=c(g)?!!g.capture:!!g,d=G(d),a&&a[Be]?(a=a.i,k=String(h).toString(),k in a.g&&(h=a.g[k],d=ft(h,d,g,C),d>-1&&(Te(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[k],a.h--)))):a&&(a=F(a))&&(h=a.g[h.toString()],a=-1,h&&(a=ft(h,d,g,C)),(d=a>-1?h[a]:null)&&b(d))}function b(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Be])$n(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(S(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=F(h))?($n(d,a),d.h==0&&(d.src=null,h[O]=null)):Te(a)}}}function S(a){return a in J?J[a]:J[a]="on"+a}function M(a,h){if(a.da)a=!0;else{h=new Ee(h,this);const d=a.listener,g=a.ha||a.src;a.fa&&b(a),a=d.call(g,h)}return a}function F(a){return a=a[O],a instanceof zt?a:null}var N="__closure_events_fn_"+(Math.random()*1e9>>>0);function G(a){return typeof a=="function"?a:(a[N]||(a[N]=function(h){return a.handleEvent(h)}),a[N])}function H(){A.call(this),this.i=new zt(this),this.M=this,this.G=null}p(H,A),H.prototype[Be]=!0,H.prototype.removeEventListener=function(a,h,d,g){T(this,a,h,d,g)};function $(a,h){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new w(h,a);else if(h instanceof w)h.target=h.target||a;else{var C=h;h=new w(g,a),In(h,C)}C=!0;let k,W;if(d)for(W=d.length-1;W>=0;W--)k=h.g=d[W],C=j(k,g,!0,h)&&C;if(k=h.g=a,C=j(k,g,!0,h)&&C,C=j(k,g,!1,h)&&C,d)for(W=0;W<d.length;W++)k=h.g=d[W],C=j(k,g,!1,h)&&C}H.prototype.N=function(){if(H.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let g=0;g<d.length;g++)Te(d[g]);delete a.g[h],a.h--}}this.G=null},H.prototype.J=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},H.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function j(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let C=!0;for(let k=0;k<h.length;++k){const W=h[k];if(W&&!W.da&&W.capture==d){const pe=W.listener,Xe=W.ha||W.src;W.fa&&$n(a.i,W),C=pe.call(Xe,g)!==!1&&C}}return C&&!g.defaultPrevented}function se(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Y(a){a.g=se(()=>{a.g=null,a.i&&(a.i=!1,Y(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class re extends A{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Y(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oe(a){A.call(this),this.h=a,this.g={}}p(oe,A);var ge=[];function De(a){Ct(a.g,function(h,d){this.g.hasOwnProperty(d)&&b(h)},a),a.g={}}oe.prototype.N=function(){oe.Z.N.call(this),De(this)},oe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ae=o.JSON.stringify,dt=o.JSON.parse,pt=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Dt(){}function Nt(){}var Wt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ss(){w.call(this,"d")}p(ss,w);function it(){w.call(this,"c")}p(it,w);var et={},Hs=null;function br(){return Hs=Hs||new H}et.Ia="serverreachability";function ch(a){w.call(this,et.Ia,a)}p(ch,w);function zs(a){const h=br();$(h,new ch(h))}et.STAT_EVENT="statevent";function lh(a,h){w.call(this,et.STAT_EVENT,a),this.stat=h}p(lh,w);function wt(a){const h=br();$(h,new lh(h,a))}et.Ja="timingevent";function uh(a,h){w.call(this,et.Ja,a),this.size=h}p(uh,w);function Ws(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Ks(){this.g=!0}Ks.prototype.ua=function(){this.g=!1};function Xy(a,h,d,g,C,k){a.info(function(){if(a.g)if(k){var W="",pe=k.split("&");for(let Ne=0;Ne<pe.length;Ne++){var Xe=pe[Ne].split("=");if(Xe.length>1){const tt=Xe[0];Xe=Xe[1];const sn=tt.split("_");W=sn.length>=2&&sn[1]=="type"?W+(tt+"="+Xe+"&"):W+(tt+"=redacted&")}}}else W=null;else W=k;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+h+`
`+d+`
`+W})}function Jy(a,h,d,g,C,k,W){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+h+`
`+d+`
`+k+" "+W})}function is(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+ev(a,d)+(g?" "+g:"")})}function Zy(a,h){a.info(function(){return"TIMEOUT: "+h})}Ks.prototype.info=function(){};function ev(a,h){if(!a.g)return h;if(!h)return null;try{const k=JSON.parse(h);if(k){for(a=0;a<k.length;a++)if(Array.isArray(k[a])){var d=k[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var C=g[0];if(C!="noop"&&C!="stop"&&C!="close")for(let W=1;W<g.length;W++)g[W]=""}}}}return Ae(k)}catch{return h}}var mo={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},hh={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},fh;function lc(){}p(lc,Dt),lc.prototype.g=function(){return new XMLHttpRequest},fh=new lc;function Gs(a){return encodeURIComponent(String(a))}function tv(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function jn(a,h,d,g){this.j=a,this.i=h,this.l=d,this.S=g||1,this.V=new oe(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new dh}function dh(){this.i=null,this.g="",this.h=!1}var ph={},uc={};function hc(a,h,d){a.M=1,a.A=_o(rn(h)),a.u=d,a.R=!0,mh(a,null)}function mh(a,h){a.F=Date.now(),go(a),a.B=rn(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),Ch(d.i,"t",g),a.C=0,d=a.j.L,a.h=new dh,a.g=Wh(a.j,d?h:null,!a.u),a.P>0&&(a.O=new re(u(a.Y,a,a.g),a.P)),h=a.V,d=a.g,g=a.ba;var C="readystatechange";Array.isArray(C)||(C&&(ge[0]=C.toString()),C=ge);for(let k=0;k<C.length;k++){const W=Q(d,C[k],g||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=a.J?Vt(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),zs(),Xy(a.i,a.v,a.B,a.l,a.S,a.u)}jn.prototype.ba=function(a){a=a.target;const h=this.O;h&&zn(a)==3?h.j():this.Y(a)},jn.prototype.Y=function(a){try{if(a==this.g)e:{const pe=zn(this.g),Xe=this.g.ya(),Ne=this.g.ca();if(!(pe<3)&&(pe!=3||this.g&&(this.h.h||this.g.la()||xh(this.g)))){this.K||pe!=4||Xe==7||(Xe==8||Ne<=0?zs(3):zs(2)),fc(this);var h=this.g.ca();this.X=h;var d=nv(this);if(this.o=h==200,Jy(this.i,this.v,this.B,this.l,this.S,pe,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,C=this.g;if((g=C.g?C.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(g)){var k=g;break t}}k=null}if(a=k)is(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,dc(this,a);else{this.o=!1,this.m=3,wt(12),Rr(this),Qs(this);break e}}if(this.R){a=!0;let tt;for(;!this.K&&this.C<d.length;)if(tt=rv(this,d),tt==uc){pe==4&&(this.m=4,wt(14),a=!1),is(this.i,this.l,null,"[Incomplete Response]");break}else if(tt==ph){this.m=4,wt(15),is(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else is(this.i,this.l,tt,null),dc(this,tt);if(gh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pe!=4||d.length!=0||this.h.h||(this.m=1,wt(16),a=!1),this.o=this.o&&a,!a)is(this.i,this.l,d,"[Invalid Chunked Response]"),Rr(this),Qs(this);else if(d.length>0&&!this.W){this.W=!0;var W=this.j;W.g==this&&W.aa&&!W.P&&(W.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Tc(W),W.P=!0,wt(11))}}else is(this.i,this.l,d,null),dc(this,d);pe==4&&Rr(this),this.o&&!this.K&&(pe==4?jh(this.j,this):(this.o=!1,go(this)))}else _v(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,wt(12)):(this.m=0,wt(13)),Rr(this),Qs(this)}}}catch{}finally{}};function nv(a){if(!gh(a))return a.g.la();const h=xh(a.g);if(h==="")return"";let d="";const g=h.length,C=zn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Rr(a),Qs(a),"";a.h.i=new o.TextDecoder}for(let k=0;k<g;k++)a.h.h=!0,d+=a.h.i.decode(h[k],{stream:!(C&&k==g-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function gh(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function rv(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?uc:(d=Number(h.substring(d,g)),isNaN(d)?ph:(g+=1,g+d>h.length?uc:(h=h.slice(g,g+d),a.C=g+d,h)))}jn.prototype.cancel=function(){this.K=!0,Rr(this)};function go(a){a.T=Date.now()+a.H,_h(a,a.H)}function _h(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Ws(u(a.aa,a),h)}function fc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}jn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Zy(this.i,this.B),this.M!=2&&(zs(),wt(17)),Rr(this),this.m=2,Qs(this)):_h(this,this.T-a)};function Qs(a){a.j.I==0||a.K||jh(a.j,a)}function Rr(a){fc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,De(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function dc(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||pc(d.h,a))){if(!a.L&&pc(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Io(d),Eo(d);else break e;Ec(d),wt(18)}}else d.xa=C[1],0<d.xa-d.K&&C[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Ws(u(d.Va,d),6e3));Eh(d.h)<=1&&d.ta&&(d.ta=void 0)}else Cr(d,11)}else if((a.L||d.g==a)&&Io(d),!E(h))for(C=d.Ba.g.parse(h),h=0;h<C.length;h++){let Ne=C[h];const tt=Ne[0];if(!(tt<=d.K))if(d.K=tt,Ne=Ne[1],d.I==2)if(Ne[0]=="c"){d.M=Ne[1],d.ba=Ne[2];const sn=Ne[3];sn!=null&&(d.ka=sn,d.j.info("VER="+d.ka));const Pr=Ne[4];Pr!=null&&(d.za=Pr,d.j.info("SVER="+d.za));const Wn=Ne[5];Wn!=null&&typeof Wn=="number"&&Wn>0&&(g=1.5*Wn,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Kn=a.g;if(Kn){const Ao=Kn.g?Kn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ao){var k=g.h;k.g||Ao.indexOf("spdy")==-1&&Ao.indexOf("quic")==-1&&Ao.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(mc(k,k.h),k.h=null))}if(g.G){const Ic=Kn.g?Kn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ic&&(g.wa=Ic,Le(g.J,g.G,Ic))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var W=a;if(g.na=zh(g,g.L?g.ba:null,g.W),W.L){Th(g.h,W);var pe=W,Xe=g.O;Xe&&(pe.H=Xe),pe.D&&(fc(pe),go(pe)),g.g=W}else Bh(g);d.i.length>0&&To(d)}else Ne[0]!="stop"&&Ne[0]!="close"||Cr(d,7);else d.I==3&&(Ne[0]=="stop"||Ne[0]=="close"?Ne[0]=="stop"?Cr(d,7):vc(d):Ne[0]!="noop"&&d.l&&d.l.qa(Ne),d.A=0)}}zs(4)}catch{}}var sv=class{constructor(a,h){this.g=a,this.map=h}};function yh(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function vh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Eh(a){return a.h?1:a.g?a.g.size:0}function pc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function mc(a,h){a.g?a.g.add(h):a.h=h}function Th(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}yh.prototype.cancel=function(){if(this.i=Ih(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ih(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return v(a.i)}var wh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function iv(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let C,k=null;g>=0?(C=a[d].substring(0,g),k=a[d].substring(g+1)):C=a[d],h(C,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function qn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof qn?(this.l=a.l,Ys(this,a.j),this.o=a.o,this.g=a.g,Xs(this,a.u),this.h=a.h,gc(this,Ph(a.i)),this.m=a.m):a&&(h=String(a).match(wh))?(this.l=!1,Ys(this,h[1]||"",!0),this.o=Js(h[2]||""),this.g=Js(h[3]||"",!0),Xs(this,h[4]),this.h=Js(h[5]||"",!0),gc(this,h[6]||"",!0),this.m=Js(h[7]||"")):(this.l=!1,this.i=new ei(null,this.l))}qn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Zs(h,Ah,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Zs(h,Ah,!0),"@"),a.push(Gs(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Zs(d,d.charAt(0)=="/"?cv:av,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Zs(d,uv)),a.join("")},qn.prototype.resolve=function(a){const h=rn(this);let d=!!a.j;d?Ys(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var g=a.h;if(d)Xs(h,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var C=h.h.lastIndexOf("/");C!=-1&&(g=h.h.slice(0,C+1)+g)}if(C=g,C==".."||C==".")g="";else if(C.indexOf("./")!=-1||C.indexOf("/.")!=-1){g=C.lastIndexOf("/",0)==0,C=C.split("/");const k=[];for(let W=0;W<C.length;){const pe=C[W++];pe=="."?g&&W==C.length&&k.push(""):pe==".."?((k.length>1||k.length==1&&k[0]!="")&&k.pop(),g&&W==C.length&&k.push("")):(k.push(pe),g=!0)}g=k.join("/")}else g=C}return d?h.h=g:d=a.i.toString()!=="",d?gc(h,Ph(a.i)):d=!!a.m,d&&(h.m=a.m),h};function rn(a){return new qn(a)}function Ys(a,h,d){a.j=d?Js(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Xs(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function gc(a,h,d){h instanceof ei?(a.i=h,hv(a.i,a.l)):(d||(h=Zs(h,lv)),a.i=new ei(h,a.l))}function Le(a,h,d){a.i.set(h,d)}function _o(a){return Le(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Js(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Zs(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,ov),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ov(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ah=/[#\/\?@]/g,av=/[#\?:]/g,cv=/[#\?]/g,lv=/[#\?@]/g,uv=/#/g;function ei(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Sr(a){a.g||(a.g=new Map,a.h=0,a.i&&iv(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=ei.prototype,t.add=function(a,h){Sr(this),this.i=null,a=os(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function bh(a,h){Sr(a),h=os(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Rh(a,h){return Sr(a),h=os(a,h),a.g.has(h)}t.forEach=function(a,h){Sr(this),this.g.forEach(function(d,g){d.forEach(function(C){a.call(h,C,g,this)},this)},this)};function Sh(a,h){Sr(a);let d=[];if(typeof h=="string")Rh(a,h)&&(d=d.concat(a.g.get(os(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return Sr(this),this.i=null,a=os(this,a),Rh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Sh(this,a),a.length>0?String(a[0]):h):h};function Ch(a,h,d){bh(a,h),d.length>0&&(a.i=null,a.g.set(os(a,h),v(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var d=h[g];const C=Gs(d);d=Sh(this,d);for(let k=0;k<d.length;k++){let W=C;d[k]!==""&&(W+="="+Gs(d[k])),a.push(W)}}return this.i=a.join("&")};function Ph(a){const h=new ei;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function os(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function hv(a,h){h&&!a.j&&(Sr(a),a.i=null,a.g.forEach(function(d,g){const C=g.toLowerCase();g!=C&&(bh(this,g),Ch(this,C,d))},a)),a.j=h}function fv(a,h){const d=new Ks;if(o.Image){const g=new Image;g.onload=f(Hn,d,"TestLoadImage: loaded",!0,h,g),g.onerror=f(Hn,d,"TestLoadImage: error",!1,h,g),g.onabort=f(Hn,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=f(Hn,d,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function dv(a,h){const d=new Ks,g=new AbortController,C=setTimeout(()=>{g.abort(),Hn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(k=>{clearTimeout(C),k.ok?Hn(d,"TestPingServer: ok",!0,h):Hn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),Hn(d,"TestPingServer: error",!1,h)})}function Hn(a,h,d,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(d)}catch{}}function pv(){this.g=new pt}function _c(a){this.i=a.Sb||null,this.h=a.ab||!1}p(_c,Dt),_c.prototype.g=function(){return new yo(this.i,this.h)};function yo(a,h){H.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(yo,H),t=yo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,ni(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ti(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ni(this)),this.g&&(this.readyState=3,ni(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;kh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function kh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ti(this):ni(this),this.readyState==3&&kh(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,ti(this))},t.Na=function(a){this.g&&(this.response=a,ti(this))},t.ga=function(){this.g&&ti(this)};function ti(a){a.readyState=4,a.l=null,a.j=null,a.B=null,ni(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function ni(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(yo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Vh(a){let h="";return Ct(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function yc(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Vh(d),typeof a=="string"?d!=null&&Gs(d):Le(a,h,d))}function qe(a){H.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(qe,H);var mv=/^https?$/i,gv=["POST","PUT"];t=qe.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():fh.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(k){Dh(this,k);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)d.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const k of g.keys())d.set(k,g.get(k));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(k=>k.toLowerCase()=="content-type"),C=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(gv,h,void 0)>=0)||g||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,W]of d)this.g.setRequestHeader(k,W);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(k){Dh(this,k)}};function Dh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Nh(a),vo(a)}function Nh(a){a.A||(a.A=!0,$(a,"complete"),$(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,$(this,"complete"),$(this,"abort"),vo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),vo(this,!0)),qe.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Oh(this):this.Xa())},t.Xa=function(){Oh(this)};function Oh(a){if(a.h&&typeof i<"u"){if(a.v&&zn(a)==4)setTimeout(a.Ca.bind(a),0);else if($(a,"readystatechange"),zn(a)==4){a.h=!1;try{const k=a.ca();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=k===0){let W=String(a.D).match(wh)[1]||null;!W&&o.self&&o.self.location&&(W=o.self.location.protocol.slice(0,-1)),g=!mv.test(W?W.toLowerCase():"")}d=g}if(d)$(a,"complete"),$(a,"success");else{a.o=6;try{var C=zn(a)>2?a.g.statusText:""}catch{C=""}a.l=C+" ["+a.ca()+"]",Nh(a)}}finally{vo(a)}}}}function vo(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||$(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function zn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return zn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),dt(h)}};function xh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function _v(a){const h={};a=(a.g&&zn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(E(a[g]))continue;var d=tv(a[g]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const k=h[C]||[];h[C]=k,k.push(d)}nn(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ri(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Mh(a){this.za=0,this.i=[],this.j=new Ks,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ri("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ri("baseRetryDelayMs",5e3,a),this.Za=ri("retryDelaySeedMs",1e4,a),this.Ta=ri("forwardChannelMaxRetries",2,a),this.va=ri("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new yh(a&&a.concurrentRequestLimit),this.Ba=new pv,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Mh.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,g){wt(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=zh(this,null,this.W),To(this)};function vc(a){if(Lh(a),a.I==3){var h=a.V++,d=rn(a.J);if(Le(d,"SID",a.M),Le(d,"RID",h),Le(d,"TYPE","terminate"),si(a,d),h=new jn(a,a.j,h),h.M=2,h.A=_o(rn(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=Wh(h.j,null),h.g.ea(h.A)),h.F=Date.now(),go(h)}Hh(a)}function Eo(a){a.g&&(Tc(a),a.g.cancel(),a.g=null)}function Lh(a){Eo(a),a.v&&(o.clearTimeout(a.v),a.v=null),Io(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function To(a){if(!vh(a.h)&&!a.m){a.m=!0;var h=a.Ea;ee||y(),ie||(ee(),ie=!0),R.add(h,a),a.D=0}}function yv(a,h){return Eh(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Ws(u(a.Ea,a,h),qh(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const C=new jn(this,this.j,a);let k=this.o;if(this.U&&(k?(k=Vt(k),In(k,this.U)):k=this.U),this.u!==null||this.R||(C.J=k,k=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Uh(this,C,h),d=rn(this.J),Le(d,"RID",a),Le(d,"CVER",22),this.G&&Le(d,"X-HTTP-Session-Id",this.G),si(this,d),k&&(this.R?h="headers="+Gs(Vh(k))+"&"+h:this.u&&yc(d,this.u,k)),mc(this.h,C),this.Ra&&Le(d,"TYPE","init"),this.S?(Le(d,"$req",h),Le(d,"SID","null"),C.U=!0,hc(C,d,null)):hc(C,d,h),this.I=2}}else this.I==3&&(a?Fh(this,a):this.i.length==0||vh(this.h)||Fh(this))};function Fh(a,h){var d;h?d=h.l:d=a.V++;const g=rn(a.J);Le(g,"SID",a.M),Le(g,"RID",d),Le(g,"AID",a.K),si(a,g),a.u&&a.o&&yc(g,a.u,a.o),d=new jn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Uh(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),mc(a.h,d),hc(d,g,h)}function si(a,h){a.H&&Ct(a.H,function(d,g){Le(h,g,d)}),a.l&&Ct({},function(d,g){Le(h,g,d)})}function Uh(a,h,d){d=Math.min(a.i.length,d);const g=a.l?u(a.l.Ka,a.l,a):null;e:{var C=a.i;let pe=-1;for(;;){const Xe=["count="+d];pe==-1?d>0?(pe=C[0].g,Xe.push("ofs="+pe)):pe=0:Xe.push("ofs="+pe);let Ne=!0;for(let tt=0;tt<d;tt++){var k=C[tt].g;const sn=C[tt].map;if(k-=pe,k<0)pe=Math.max(0,C[tt].g-100),Ne=!1;else try{k="req"+k+"_"||"";try{var W=sn instanceof Map?sn:Object.entries(sn);for(const[Pr,Wn]of W){let Kn=Wn;c(Wn)&&(Kn=Ae(Wn)),Xe.push(k+Pr+"="+encodeURIComponent(Kn))}}catch(Pr){throw Xe.push(k+"type="+encodeURIComponent("_badmap")),Pr}}catch{g&&g(sn)}}if(Ne){W=Xe.join("&");break e}}W=void 0}return a=a.i.splice(0,d),h.G=a,W}function Bh(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;ee||y(),ie||(ee(),ie=!0),R.add(h,a),a.A=0}}function Ec(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Ws(u(a.Da,a),qh(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,$h(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Ws(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,wt(10),Eo(this),$h(this))};function Tc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function $h(a){a.g=new jn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=rn(a.na);Le(h,"RID","rpc"),Le(h,"SID",a.M),Le(h,"AID",a.K),Le(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Le(h,"TO",a.ia),Le(h,"TYPE","xmlhttp"),si(a,h),a.u&&a.o&&yc(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=_o(rn(h)),d.u=null,d.R=!0,mh(d,a)}t.Va=function(){this.C!=null&&(this.C=null,Eo(this),Ec(this),wt(19))};function Io(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function jh(a,h){var d=null;if(a.g==h){Io(a),Tc(a),a.g=null;var g=2}else if(pc(a.h,h))d=h.G,Th(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var C=a.D;g=br(),$(g,new uh(g,d)),To(a)}else Bh(a);else if(C=h.m,C==3||C==0&&h.X>0||!(g==1&&yv(a,h)||g==2&&Ec(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),C){case 1:Cr(a,5);break;case 4:Cr(a,10);break;case 3:Cr(a,6);break;default:Cr(a,2)}}}function qh(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function Cr(a,h){if(a.j.info("Error code "+h),h==2){var d=u(a.bb,a),g=a.Ua;const C=!g;g=new qn(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ys(g,"https"),_o(g),C?fv(g.toString(),d):dv(g.toString(),d)}else wt(2);a.I=0,a.l&&a.l.pa(h),Hh(a),Lh(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),wt(2)):(this.j.info("Failed to ping google.com"),wt(1))};function Hh(a){if(a.I=0,a.ja=[],a.l){const h=Ih(a.h);(h.length!=0||a.i.length!=0)&&(P(a.ja,h),P(a.ja,a.i),a.h.i.length=0,v(a.i),a.i.length=0),a.l.oa()}}function zh(a,h,d){var g=d instanceof qn?rn(d):new qn(d);if(g.g!="")h&&(g.g=h+"."+g.g),Xs(g,g.u);else{var C=o.location;g=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;const k=new qn(null);g&&Ys(k,g),h&&(k.g=h),C&&Xs(k,C),d&&(k.h=d),g=k}return d=a.G,h=a.wa,d&&h&&Le(g,d,h),Le(g,"VER",a.ka),si(a,g),g}function Wh(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new qe(new _c({ab:d})):new qe(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Kh(){}t=Kh.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function wo(){}wo.prototype.g=function(a,h){return new Ot(a,h)};function Ot(a,h){H.call(this),this.g=new Mh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!E(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!E(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new as(this)}p(Ot,H),Ot.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ot.prototype.close=function(){vc(this.g)},Ot.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Ae(a),a=d);h.i.push(new sv(h.Ya++,a)),h.I==3&&To(h)},Ot.prototype.N=function(){this.g.l=null,delete this.j,vc(this.g),delete this.g,Ot.Z.N.call(this)};function Gh(a){ss.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Gh,ss);function Qh(){it.call(this),this.status=1}p(Qh,it);function as(a){this.g=a}p(as,Kh),as.prototype.ra=function(){$(this.g,"a")},as.prototype.qa=function(a){$(this.g,new Gh(a))},as.prototype.pa=function(a){$(this.g,new Qh)},as.prototype.oa=function(){$(this.g,"b")},wo.prototype.createWebChannel=wo.prototype.g,Ot.prototype.send=Ot.prototype.o,Ot.prototype.open=Ot.prototype.m,Ot.prototype.close=Ot.prototype.close,__=function(){return new wo},g_=function(){return br()},m_=et,wl={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},mo.NO_ERROR=0,mo.TIMEOUT=8,mo.HTTP_ERROR=6,zo=mo,hh.COMPLETE="complete",p_=hh,Nt.EventType=Wt,Wt.OPEN="a",Wt.CLOSE="b",Wt.ERROR="c",Wt.MESSAGE="d",H.prototype.listen=H.prototype.J,fi=Nt,qe.prototype.listenOnce=qe.prototype.K,qe.prototype.getLastError=qe.prototype.Ha,qe.prototype.getLastErrorCode=qe.prototype.ya,qe.prototype.getStatus=qe.prototype.ca,qe.prototype.getResponseJson=qe.prototype.La,qe.prototype.getResponseText=qe.prototype.la,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Fa,d_=qe}).apply(typeof ko<"u"?ko:typeof self<"u"?self:typeof window<"u"?window:{});const Dd="@firebase/firestore",Nd="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Us="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=new pu("@firebase/firestore");function ds(){return Kr.logLevel}function Z(t,...e){if(Kr.logLevel<=_e.DEBUG){const n=e.map(bu);Kr.debug(`Firestore (${Us}): ${t}`,...n)}}function Ln(t,...e){if(Kr.logLevel<=_e.ERROR){const n=e.map(bu);Kr.error(`Firestore (${Us}): ${t}`,...n)}}function Vs(t,...e){if(Kr.logLevel<=_e.WARN){const n=e.map(bu);Kr.warn(`Firestore (${Us}): ${t}`,...n)}}function bu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,y_(t,r,n)}function y_(t,e,n){let r=`FIRESTORE (${Us}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Ln(r),new Error(r)}function Pe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||y_(e,s,r)}function fe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends En{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Zb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(_t.UNAUTHENTICATED)))}shutdown(){}}class eR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class tR{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Pe(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new fr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new fr,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new fr)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Pe(typeof r.accessToken=="string",31837,{l:r}),new v_(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string",2055,{h:e}),new _t(e)}}class nR{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class rR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new nR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(_t.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Od{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ut(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Pe(this.o===void 0,3512);const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Od(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Pe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Od(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=iR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ye(t,e){return t<e?-1:t>e?1:0}function Al(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Wc(s)===Wc(i)?ye(s,i):Wc(s)?1:-1}return ye(t.length,e.length)}const oR=55296,aR=57343;function Wc(t){const e=t.charCodeAt(0);return e>=oR&&e<=aR}function Ds(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd="__name__";class cn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ce(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ce(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return cn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof cn?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=cn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ye(e.length,n.length)}static compareSegments(e,n){const r=cn.isNumericId(e),s=cn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?cn.extractNumericId(e).compare(cn.extractNumericId(n)):Al(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return hr.fromString(e.substring(4,e.length-2))}}class Me extends cn{construct(e,n,r){return new Me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Me(n)}static emptyPath(){return new Me([])}}const cR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends cn{construct(e,n,r){return new lt(e,n,r)}static isValidIdentifier(e){return cR.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===xd}static keyField(){return new lt([xd])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new X(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new X(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new X(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new X(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new lt(n)}static emptyPath(){return new lt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(Me.fromString(e))}static fromName(e){return new ne(Me.fromString(e).popFirst(5))}static empty(){return new ne(Me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new Me(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E_(t,e,n){if(!n)throw new X(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function lR(t,e,n,r){if(e===!0&&r===!0)throw new X(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Md(t){if(!ne.isDocumentKey(t))throw new X(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ld(t){if(ne.isDocumentKey(t))throw new X(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function T_(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Qa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ce(12329,{type:typeof t})}function jr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qa(t);throw new X(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t,e){const n={typeString:t};return e&&(n.value=e),n}function lo(t,e){if(!T_(t))throw new X(x.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new X(x.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd=-62135596800,Ud=1e6;class Fe{static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Ud);return new Fe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Fd)throw new X(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ud}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Fe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(lo(e,Fe._jsonSchema))return new Fe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Fd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Fe._jsonSchemaVersion="firestore/timestamp/1.0",Fe._jsonSchema={type:Qe("string",Fe._jsonSchemaVersion),seconds:Qe("number"),nanoseconds:Qe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{static fromTimestamp(e){return new ue(e)}static min(){return new ue(new Fe(0,0))}static max(){return new ue(new Fe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi=-1;function uR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ue.fromTimestamp(r===1e9?new Fe(n+1,0):new Fe(n,r));return new _r(s,ne.empty(),e)}function hR(t){return new _r(t.readTime,t.key,Wi)}class _r{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new _r(ue.min(),ne.empty(),Wi)}static max(){return new _r(ue.max(),ne.empty(),Wi)}}function fR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bs(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==dR)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ce(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):L.reject(n)}static resolve(e){return new L(((n,r)=>{n(e)}))}static reject(e){return new L(((n,r)=>{r(e)}))}static waitFor(e){return new L(((n,r)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&n()}),(l=>r(l)))})),o=!0,i===s&&n()}))}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next((s=>s?L.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new L(((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next((f=>{o[u]=f,++c,c===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new L(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function mR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function $s(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ya.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su=-1;function Xa(t){return t==null}function ma(t){return t===0&&1/t==-1/0}function gR(t){return typeof t=="number"&&Number.isInteger(t)&&!ma(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_="";function _R(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Bd(e)),e=yR(t.get(n),e);return Bd(e)}function yR(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case I_:n+="";break;default:n+=i}}return n}function Bd(t){return t+I_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Zr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function w_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n){this.comparator=e,this.root=n||ot.EMPTY}insert(e,n){return new je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vo(this.root,e,this.comparator,!0)}}class Vo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ot.RED,this.left=s??ot.EMPTY,this.right=i??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ot(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ot.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ce(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ce(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ce(27949);return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw ce(57766)}get value(){throw ce(16141)}get color(){throw ce(16727)}get left(){throw ce(29726)}get right(){throw ce(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new ot(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new jd(this.data.getIterator())}getIteratorFrom(e){return new jd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Ze(this.comparator);return n.data=e,n}}class jd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.fields=e,e.sort(lt.comparator)}static empty(){return new Qt([])}unionWith(e){let n=new Ze(lt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ds(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new A_("Invalid base64 string: "+i):i}})(e);return new ht(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const vR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yr(t){if(Pe(!!t,39018),typeof t=="string"){let e=0;const n=vR.exec(t);if(Pe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function vr(t){return typeof t=="string"?ht.fromBase64String(t):ht.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_="server_timestamp",R_="__type__",S_="__previous_value__",C_="__local_write_time__";function Cu(t){return(t?.mapValue?.fields||{})[R_]?.stringValue===b_}function Ja(t){const e=t.mapValue.fields[S_];return Cu(e)?Ja(e):e}function Ki(t){const e=yr(t.mapValue.fields[C_].timestampValue);return new Fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e,n,r,s,i,o,c,l,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=f}}const ga="(default)";class Gi{constructor(e,n){this.projectId=e,this.database=n||ga}static empty(){return new Gi("","")}get isDefaultDatabase(){return this.database===ga}isEqual(e){return e instanceof Gi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_="__type__",TR="__max__",Do={mapValue:{}},k_="__vector__",_a="value";function Er(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Cu(t)?4:wR(t)?9007199254740991:IR(t)?10:11:ce(28295,{value:t})}function yn(t,e){if(t===e)return!0;const n=Er(t);if(n!==Er(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ki(t).isEqual(Ki(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=yr(s.timestampValue),c=yr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return vr(s.bytesValue).isEqual(vr(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return He(s.geoPointValue.latitude)===He(i.geoPointValue.latitude)&&He(s.geoPointValue.longitude)===He(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return He(s.integerValue)===He(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=He(s.doubleValue),c=He(i.doubleValue);return o===c?ma(o)===ma(c):isNaN(o)&&isNaN(c)}return!1})(t,e);case 9:return Ds(t.arrayValue.values||[],e.arrayValue.values||[],yn);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if($d(o)!==$d(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!yn(o[l],c[l])))return!1;return!0})(t,e);default:return ce(52216,{left:t})}}function Qi(t,e){return(t.values||[]).find((n=>yn(n,e)))!==void 0}function Ns(t,e){if(t===e)return 0;const n=Er(t),r=Er(e);if(n!==r)return ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=He(i.integerValue||i.doubleValue),l=He(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(t,e);case 3:return qd(t.timestampValue,e.timestampValue);case 4:return qd(Ki(t),Ki(e));case 5:return Al(t.stringValue,e.stringValue);case 6:return(function(i,o){const c=vr(i),l=vr(o);return c.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=ye(c[u],l[u]);if(f!==0)return f}return ye(c.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=ye(He(i.latitude),He(o.latitude));return c!==0?c:ye(He(i.longitude),He(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return Hd(t.arrayValue,e.arrayValue);case 10:return(function(i,o){const c=i.fields||{},l=o.fields||{},u=c[_a]?.arrayValue,f=l[_a]?.arrayValue,p=ye(u?.values?.length||0,f?.values?.length||0);return p!==0?p:Hd(u,f)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Do.mapValue&&o===Do.mapValue)return 0;if(i===Do.mapValue)return 1;if(o===Do.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=Al(l[p],f[p]);if(m!==0)return m;const v=Ns(c[l[p]],u[f[p]]);if(v!==0)return v}return ye(l.length,f.length)})(t.mapValue,e.mapValue);default:throw ce(23264,{he:n})}}function qd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=yr(t),r=yr(e),s=ye(n.seconds,r.seconds);return s!==0?s:ye(n.nanos,r.nanos)}function Hd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ns(n[s],r[s]);if(i)return i}return ye(n.length,r.length)}function Os(t){return bl(t)}function bl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=yr(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return vr(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return ne.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=bl(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${bl(n.fields[o])}`;return s+"}"})(t.mapValue):ce(61005,{value:t})}function Wo(t){switch(Er(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ja(t);return e?16+Wo(e):16;case 5:return 2*t.stringValue.length;case 6:return vr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Wo(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return Zr(r.fields,((i,o)=>{s+=i.length+Wo(o)})),s})(t.mapValue);default:throw ce(13486,{value:t})}}function zd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Rl(t){return!!t&&"integerValue"in t}function Pu(t){return!!t&&"arrayValue"in t}function Wd(t){return!!t&&"nullValue"in t}function Kd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ko(t){return!!t&&"mapValue"in t}function IR(t){return(t?.mapValue?.fields||{})[P_]?.stringValue===k_}function ki(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Zr(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=ki(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ki(t.arrayValue.values[n]);return e}return{...t}}function wR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===TR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.value=e}static empty(){return new Bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ko(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ki(n)}setAll(e){let n=lt.emptyPath(),r={},s=[];e.forEach(((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=ki(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ko(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return yn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ko(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Zr(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Bt(ki(this.value))}}function V_(t){const e=[];return Zr(t.fields,((n,r)=>{const s=new lt([n]);if(Ko(r)){const i=V_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new Qt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Et(e,0,ue.min(),ue.min(),ue.min(),Bt.empty(),0)}static newFoundDocument(e,n,r,s){return new Et(e,1,n,ue.min(),r,s,0)}static newNoDocument(e,n){return new Et(e,2,n,ue.min(),ue.min(),Bt.empty(),0)}static newUnknownDocument(e,n){return new Et(e,3,n,ue.min(),ue.min(),Bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,n){this.position=e,this.inclusive=n}}function Gd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ne.comparator(ne.fromName(o.referenceValue),n.key):r=Ns(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Qd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!yn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,n="asc"){this.field=e,this.dir=n}}function AR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{}class Ge extends D_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new RR(e,n,r):n==="array-contains"?new PR(e,r):n==="in"?new kR(e,r):n==="not-in"?new VR(e,r):n==="array-contains-any"?new DR(e,r):new Ge(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new SR(e,r):new CR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ns(n,this.value)):n!==null&&Er(this.value)===Er(n)&&this.matchesComparison(Ns(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tn extends D_{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new tn(e,n)}matches(e){return N_(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function N_(t){return t.op==="and"}function O_(t){return bR(t)&&N_(t)}function bR(t){for(const e of t.filters)if(e instanceof tn)return!1;return!0}function Sl(t){if(t instanceof Ge)return t.field.canonicalString()+t.op.toString()+Os(t.value);if(O_(t))return t.filters.map((e=>Sl(e))).join(",");{const e=t.filters.map((n=>Sl(n))).join(",");return`${t.op}(${e})`}}function x_(t,e){return t instanceof Ge?(function(r,s){return s instanceof Ge&&r.op===s.op&&r.field.isEqual(s.field)&&yn(r.value,s.value)})(t,e):t instanceof tn?(function(r,s){return s instanceof tn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&x_(o,s.filters[c])),!0):!1})(t,e):void ce(19439)}function M_(t){return t instanceof Ge?(function(n){return`${n.field.canonicalString()} ${n.op} ${Os(n.value)}`})(t):t instanceof tn?(function(n){return n.op.toString()+" {"+n.getFilters().map(M_).join(" ,")+"}"})(t):"Filter"}class RR extends Ge{constructor(e,n,r){super(e,n,r),this.key=ne.fromName(r.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.matchesComparison(n)}}class SR extends Ge{constructor(e,n){super(e,"in",n),this.keys=L_("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class CR extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=L_("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function L_(t,e){return(e.arrayValue?.values||[]).map((n=>ne.fromName(n.referenceValue)))}class PR extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Pu(n)&&Qi(n.arrayValue,this.value)}}class kR extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Qi(this.value.arrayValue,n)}}class VR extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(Qi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Qi(this.value.arrayValue,n)}}class DR extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Pu(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Qi(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function Yd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new NR(t,e,n,r,s,i,o)}function ku(t){const e=fe(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>Sl(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Xa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>Os(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>Os(r))).join(",")),e.Te=n}return e.Te}function Vu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!AR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!x_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Qd(t.startAt,e.startAt)&&Qd(t.endAt,e.endAt)}function Cl(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function OR(t,e,n,r,s,i,o,c){return new js(t,e,n,r,s,i,o,c)}function Za(t){return new js(t)}function Xd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function F_(t){return t.collectionGroup!==null}function Vi(t){const e=fe(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Ze(lt.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(c=c.add(u.field))}))})),c})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Yi(i,r))})),n.has(lt.keyField().canonicalString())||e.Ie.push(new Yi(lt.keyField(),r))}return e.Ie}function pn(t){const e=fe(t);return e.Ee||(e.Ee=xR(e,Vi(t))),e.Ee}function xR(t,e){if(t.limitType==="F")return Yd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Yi(s.field,i)}));const n=t.endAt?new ya(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ya(t.startAt.position,t.startAt.inclusive):null;return Yd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Pl(t,e){const n=t.filters.concat([e]);return new js(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function kl(t,e,n){return new js(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ec(t,e){return Vu(pn(t),pn(e))&&t.limitType===e.limitType}function U_(t){return`${ku(pn(t))}|lt:${t.limitType}`}function ps(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>M_(s))).join(", ")}]`),Xa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>Os(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>Os(s))).join(",")),`Target(${r})`})(pn(t))}; limitType=${t.limitType})`}function tc(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ne.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of Vi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,c,l){const u=Gd(o,c,l);return o.inclusive?u<=0:u<0})(r.startAt,Vi(r),s)||r.endAt&&!(function(o,c,l){const u=Gd(o,c,l);return o.inclusive?u>=0:u>0})(r.endAt,Vi(r),s))})(t,e)}function MR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function B_(t){return(e,n)=>{let r=!1;for(const s of Vi(t)){const i=LR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function LR(t,e,n){const r=t.field.isKeyField()?ne.comparator(e.key,n.key):(function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Ns(l,u):ce(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ce(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Zr(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return w_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR=new je(ne.comparator);function Fn(){return FR}const $_=new je(ne.comparator);function di(...t){let e=$_;for(const n of t)e=e.insert(n.key,n);return e}function j_(t){let e=$_;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function Ur(){return Di()}function q_(){return Di()}function Di(){return new es((t=>t.toString()),((t,e)=>t.isEqual(e)))}const UR=new je(ne.comparator),BR=new Ze(ne.comparator);function ve(...t){let e=BR;for(const n of t)e=e.add(n);return e}const $R=new Ze(ye);function jR(){return $R}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ma(e)?"-0":e}}function H_(t){return{integerValue:""+t}}function qR(t,e){return gR(e)?H_(e):Du(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(){this._=void 0}}function HR(t,e,n){return t instanceof Xi?(function(s,i){const o={fields:{[R_]:{stringValue:b_},[C_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Cu(i)&&(i=Ja(i)),i&&(o.fields[S_]=i),{mapValue:o}})(n,e):t instanceof Ji?W_(t,e):t instanceof Zi?K_(t,e):(function(s,i){const o=z_(s,i),c=Jd(o)+Jd(s.Ae);return Rl(o)&&Rl(s.Ae)?H_(c):Du(s.serializer,c)})(t,e)}function zR(t,e,n){return t instanceof Ji?W_(t,e):t instanceof Zi?K_(t,e):n}function z_(t,e){return t instanceof va?(function(r){return Rl(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Xi extends nc{}class Ji extends nc{constructor(e){super(),this.elements=e}}function W_(t,e){const n=G_(e);for(const r of t.elements)n.some((s=>yn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class Zi extends nc{constructor(e){super(),this.elements=e}}function K_(t,e){let n=G_(e);for(const r of t.elements)n=n.filter((s=>!yn(s,r)));return{arrayValue:{values:n}}}class va extends nc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Jd(t){return He(t.integerValue||t.doubleValue)}function G_(t){return Pu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e,n){this.field=e,this.transform=n}}function KR(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof Ji&&s instanceof Ji||r instanceof Zi&&s instanceof Zi?Ds(r.elements,s.elements,yn):r instanceof va&&s instanceof va?yn(r.Ae,s.Ae):r instanceof Xi&&s instanceof Xi})(t.transform,e.transform)}class GR{constructor(e,n){this.version=e,this.transformResults=n}}class Dn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Dn}static exists(e){return new Dn(void 0,e)}static updateTime(e){return new Dn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Go(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class rc{}function Q_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new X_(t.key,Dn.none()):new uo(t.key,t.data,Dn.none());{const n=t.data,r=Bt.empty();let s=new Ze(lt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ts(t.key,r,new Qt(s.toArray()),Dn.none())}}function QR(t,e,n){t instanceof uo?(function(s,i,o){const c=s.value.clone(),l=ep(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):t instanceof ts?(function(s,i,o){if(!Go(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=ep(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Y_(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function Ni(t,e,n,r){return t instanceof uo?(function(i,o,c,l){if(!Go(i.precondition,o))return c;const u=i.value.clone(),f=tp(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof ts?(function(i,o,c,l){if(!Go(i.precondition,o))return c;const u=tp(i.fieldTransforms,l,o),f=o.data;return f.setAll(Y_(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,c){return Go(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(t,e,n)}function YR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=z_(r.transform,s||null);i!=null&&(n===null&&(n=Bt.empty()),n.set(r.field,i))}return n||null}function Zd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ds(r,s,((i,o)=>KR(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class uo extends rc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ts extends rc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Y_(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function ep(t,e,n){const r=new Map;Pe(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,zR(o,c,n[s]))}return r}function tp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,HR(i,o,e))}return r}class X_ extends rc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class XR extends rc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&QR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ni(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ni(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=q_();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Q_(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ue.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),ve())}isEqual(e){return this.batchId===e.batchId&&Ds(this.mutations,e.mutations,((n,r)=>Zd(n,r)))&&Ds(this.baseMutations,e.baseMutations,((n,r)=>Zd(n,r)))}}class Nu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Pe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return UR})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Nu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke,we;function tS(t){switch(t){case x.OK:return ce(64938);case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0;default:return ce(15467,{code:t})}}function J_(t){if(t===void 0)return Ln("GRPC error has no .code"),x.UNKNOWN;switch(t){case Ke.OK:return x.OK;case Ke.CANCELLED:return x.CANCELLED;case Ke.UNKNOWN:return x.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return x.INTERNAL;case Ke.UNAVAILABLE:return x.UNAVAILABLE;case Ke.UNAUTHENTICATED:return x.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case Ke.NOT_FOUND:return x.NOT_FOUND;case Ke.ALREADY_EXISTS:return x.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return x.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case Ke.ABORTED:return x.ABORTED;case Ke.OUT_OF_RANGE:return x.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return x.UNIMPLEMENTED;case Ke.DATA_LOSS:return x.DATA_LOSS;default:return ce(39323,{code:t})}}(we=Ke||(Ke={}))[we.OK=0]="OK",we[we.CANCELLED=1]="CANCELLED",we[we.UNKNOWN=2]="UNKNOWN",we[we.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",we[we.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",we[we.NOT_FOUND=5]="NOT_FOUND",we[we.ALREADY_EXISTS=6]="ALREADY_EXISTS",we[we.PERMISSION_DENIED=7]="PERMISSION_DENIED",we[we.UNAUTHENTICATED=16]="UNAUTHENTICATED",we[we.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",we[we.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",we[we.ABORTED=10]="ABORTED",we[we.OUT_OF_RANGE=11]="OUT_OF_RANGE",we[we.UNIMPLEMENTED=12]="UNIMPLEMENTED",we[we.INTERNAL=13]="INTERNAL",we[we.UNAVAILABLE=14]="UNAVAILABLE",we[we.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=new hr([4294967295,4294967295],0);function np(t){const e=nS().encode(t),n=new f_;return n.update(e),new Uint8Array(n.digest())}function rp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new hr([n,r],0),new hr([s,i],0)]}class Ou{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new pi(`Invalid padding: ${n}`);if(r<0)throw new pi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new pi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new pi(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=hr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(hr.fromNumber(r)));return s.compare(rS)===1&&(s=new hr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=np(e),[r,s]=rp(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ou(i,s,n);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const n=np(e),[r,s]=rp(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class pi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ho.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new sc(ue.min(),s,new je(ye),Fn(),ve())}}class ho{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ho(r,n,ve(),ve(),ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class Z_{constructor(e,n){this.targetId=e,this.Ce=n}}class ey{constructor(e,n,r=ht.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class sp{constructor(){this.ve=0,this.Fe=ip(),this.Me=ht.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ve(),n=ve(),r=ve();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ce(38017,{changeType:i})}})),new ho(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=ip()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Pe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class sS{constructor(e){this.Ge=e,this.ze=new Map,this.je=Fn(),this.Je=No(),this.He=No(),this.Ye=new je(ye)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ce(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Cl(i))if(r===0){const o=new ne(i.path);this.et(n,o,Et.newNoDocument(o,ue.min()))}else Pe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=vr(r).toUint8Array()}catch(l){if(l instanceof A_)return Vs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Ou(o,s,i)}catch(l){return Vs(l instanceof pi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((i,o)=>{const c=this.ot(o);if(c){if(i.current&&Cl(c.target)){const l=new ne(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,Et.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}}));let r=ve();this.He.forEach(((i,o)=>{let c=!0;o.forEachWhile((l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new sc(e,n,this.Ye,this.je,r);return this.je=Fn(),this.Je=No(),this.He=No(),this.Ye=new je(ye),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new sp,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Ze(ye),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Ze(ye),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new sp),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function No(){return new je(ne.comparator)}function ip(){return new je(ne.comparator)}const iS={asc:"ASCENDING",desc:"DESCENDING"},oS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},aS={and:"AND",or:"OR"};class cS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Vl(t,e){return t.useProto3Json||Xa(e)?e:{value:e}}function Ea(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ty(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function lS(t,e){return Ea(t,e.toTimestamp())}function mn(t){return Pe(!!t,49232),ue.fromTimestamp((function(n){const r=yr(n);return new Fe(r.seconds,r.nanos)})(t))}function xu(t,e){return Dl(t,e).canonicalString()}function Dl(t,e){const n=(function(s){return new Me(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function ny(t){const e=Me.fromString(t);return Pe(ay(e),10190,{key:e.toString()}),e}function Nl(t,e){return xu(t.databaseId,e.path)}function Kc(t,e){const n=ny(e);if(n.get(1)!==t.databaseId.projectId)throw new X(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ne(sy(n))}function ry(t,e){return xu(t.databaseId,e)}function uS(t){const e=ny(t);return e.length===4?Me.emptyPath():sy(e)}function Ol(t){return new Me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function sy(t){return Pe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function op(t,e,n){return{name:Nl(t,e),fields:n.value.mapValue.fields}}function hS(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ce(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(Pe(f===void 0||typeof f=="string",58123),ht.fromBase64String(f||"")):(Pe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ht.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(u){const f=u.code===void 0?x.UNKNOWN:J_(u.code);return new X(f,u.message||"")})(o);n=new ey(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Kc(t,r.document.name),i=mn(r.document.updateTime),o=r.document.createTime?mn(r.document.createTime):ue.min(),c=new Bt({mapValue:{fields:r.document.fields}}),l=Et.newFoundDocument(s,i,o,c),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Qo(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Kc(t,r.document),i=r.readTime?mn(r.readTime):ue.min(),o=Et.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Qo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Kc(t,r.document),i=r.removedTargetIds||[];n=new Qo([],i,s,null)}else{if(!("filter"in e))return ce(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new eS(s,i),c=r.targetId;n=new Z_(c,o)}}return n}function fS(t,e){let n;if(e instanceof uo)n={update:op(t,e.key,e.value)};else if(e instanceof X_)n={delete:Nl(t,e.key)};else if(e instanceof ts)n={update:op(t,e.key,e.data),updateMask:TS(e.fieldMask)};else{if(!(e instanceof XR))return ce(16599,{Vt:e.type});n={verify:Nl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof Xi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ji)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Zi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof va)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw ce(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:lS(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ce(27497)})(t,e.precondition)),n}function dS(t,e){return t&&t.length>0?(Pe(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?mn(s.updateTime):mn(i);return o.isEqual(ue.min())&&(o=mn(i)),new GR(o,s.transformResults||[])})(n,e)))):[]}function pS(t,e){return{documents:[ry(t,e.path)]}}function mS(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ry(t,s);const i=(function(u){if(u.length!==0)return oy(tn.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:ms(m.field),direction:yS(m.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Vl(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:n,parent:s}}function gS(t){let e=uS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Pe(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const m=iy(p);return m instanceof tn&&O_(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(P){return new Yi(gs(P.field),(function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(P.direction))})(m)))})(n.orderBy));let c=null;n.limit&&(c=(function(p){let m;return m=typeof p=="object"?p.value:p,Xa(m)?null:m})(n.limit));let l=null;n.startAt&&(l=(function(p){const m=!!p.before,v=p.values||[];return new ya(v,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const m=!p.before,v=p.values||[];return new ya(v,m)})(n.endAt)),OR(e,s,o,i,c,"F",l,u)}function _S(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function iy(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=gs(n.unaryFilter.field);return Ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=gs(n.unaryFilter.field);return Ge.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=gs(n.unaryFilter.field);return Ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=gs(n.unaryFilter.field);return Ge.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ce(61313);default:return ce(60726)}})(t):t.fieldFilter!==void 0?(function(n){return Ge.create(gs(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ce(58110);default:return ce(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return tn.create(n.compositeFilter.filters.map((r=>iy(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ce(1026)}})(n.compositeFilter.op))})(t):ce(30097,{filter:t})}function yS(t){return iS[t]}function vS(t){return oS[t]}function ES(t){return aS[t]}function ms(t){return{fieldPath:t.canonicalString()}}function gs(t){return lt.fromServerFormat(t.fieldPath)}function oy(t){return t instanceof Ge?(function(n){if(n.op==="=="){if(Kd(n.value))return{unaryFilter:{field:ms(n.field),op:"IS_NAN"}};if(Wd(n.value))return{unaryFilter:{field:ms(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Kd(n.value))return{unaryFilter:{field:ms(n.field),op:"IS_NOT_NAN"}};if(Wd(n.value))return{unaryFilter:{field:ms(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ms(n.field),op:vS(n.op),value:n.value}}})(t):t instanceof tn?(function(n){const r=n.getFilters().map((s=>oy(s)));return r.length===1?r[0]:{compositeFilter:{op:ES(n.op),filters:r}}})(t):ce(54877,{filter:t})}function TS(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function ay(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,n,r,s,i=ue.min(),o=ue.min(),c=ht.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new ir(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e){this.yt=e}}function wS(t){const e=gS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?kl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(){this.Cn=new bS}addToCollectionParentIndex(e,n){return this.Cn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(_r.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(_r.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class bS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ze(Me.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ze(Me.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},cy=41943040;class Pt{static withCacheSize(e){return new Pt(e,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pt.DEFAULT_COLLECTION_PERCENTILE=10,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Pt.DEFAULT=new Pt(cy,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Pt.DISABLED=new Pt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new xs(0)}static cr(){return new xs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp="LruGarbageCollector",RS=1048576;function lp([t,e],[n,r]){const s=ye(t,n);return s===0?ye(e,r):s}class SS{constructor(e){this.Ir=e,this.buffer=new Ze(lp),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();lp(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class CS{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){Z(cp,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){$s(n)?Z(cp,"Ignoring IndexedDB error during garbage collection: ",n):await Bs(n)}await this.Vr(3e5)}))}}class PS{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return L.resolve(Ya.ce);const r=new SS(n);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(ap)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ap):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),ds()<=_e.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function kS(t,e){return new PS(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(){this.changes=new es((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&Ni(r.mutation,s,Qt.empty(),Fe.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,ve()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=ve()){const s=Ur();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=di();return i.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=Ur();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,ve())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{n.set(o,c)}))}))}computeViews(e,n,r,s){let i=Fn();const o=Di(),c=(function(){return Di()})();return n.forEach(((l,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof ts)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Ni(f.mutation,u,f.mutation.getFieldMask(),Fe.now())):o.set(u.key,Qt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>c.set(u,new DS(f,o.get(u)??null)))),c)))}recalculateAndSaveOverlays(e,n){const r=Di();let s=new je(((o,c)=>o-c)),i=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const c of o)c.keys().forEach((l=>{const u=n.get(l);if(u===null)return;let f=r.get(l)||Qt.empty();f=c.applyToLocalView(u,f),r.set(l,f);const p=(s.get(c.batchId)||ve()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=q_();f.forEach((m=>{if(!i.has(m)){const v=Q_(n.get(m),r.get(m));v!==null&&p.set(m,v),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return L.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return ne.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):F_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve(Ur());let c=Wi,l=i;return o.next((u=>L.forEach(u,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{l=l.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,ve()))).next((f=>({batchId:c,changes:j_(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next((r=>{let s=di();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=di();return this.indexManager.getCollectionParents(e,i).next((c=>L.forEach(c,(l=>{const u=(function(p,m){return new js(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,Et.newInvalidDocument(f)))}));let c=di();return o.forEach(((l,u)=>{const f=i.get(l);f!==void 0&&Ni(f.mutation,u,Qt.empty(),Fe.now()),tc(n,u)&&(c=c.insert(l,u))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return L.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:mn(s.createTime)}})(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(s){return{name:s.name,query:wS(s.bundledQuery),readTime:mn(s.readTime)}})(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(){this.overlays=new je(ne.comparator),this.qr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ur();return L.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.St(e,n,i)})),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=Ur(),i=n.length+1,o=new ne(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new je(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Ur(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=Ur(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,f)=>c.set(u,f))),!(c.size()>=s)););return L.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ZR(n,r));let i=this.qr.get(n);i===void 0&&(i=ve(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(){this.Qr=new Ze(nt.$r),this.Ur=new Ze(nt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new nt(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Gr(new nt(e,n))}zr(e,n){e.forEach((r=>this.removeReference(r,n)))}jr(e){const n=new ne(new Me([])),r=new nt(n,e),s=new nt(n,e+1),i=[];return this.Ur.forEachInRange([r,s],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ne(new Me([])),r=new nt(n,e),s=new nt(n,e+1);let i=ve();return this.Ur.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new nt(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ne.comparator(e.key,n.key)||ye(e.Yr,n.Yr)}static Kr(e,n){return ye(e.Yr,n.Yr)||ne.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Ze(nt.$r)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new JR(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new nt(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?Su:this.tr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new nt(n,0),s=new nt(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(o=>{const c=this.Xr(o.Yr);i.push(c)})),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ze(ye);return n.forEach((s=>{const i=new nt(s,0),o=new nt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(c=>{r=r.add(c.Yr)}))})),L.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ne.isDocumentKey(i)||(i=i.child(""));const o=new nt(new ne(i),0);let c=new Ze(ye);return this.Zr.forEachWhile((l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Yr)),!0)}),o),L.resolve(this.ti(c))}ti(e){const n=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Pe(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return L.forEach(n.mutations,(s=>{const i=new nt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,n){const r=new nt(n,0),s=this.Zr.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e){this.ri=e,this.docs=(function(){return new je(ne.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(n))}getEntries(e,n){let r=Fn();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Et.newInvalidDocument(s))})),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Fn();const o=n.path,c=new ne(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||fR(hR(f),r)<=0||(s.has(f.key)||tc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ce(9500)}ii(e,n){return L.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new US(this)}getSize(e){return L.resolve(this.size)}}class US extends VS{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),L.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(e){this.persistence=e,this.si=new es((n=>ku(n)),Vu),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.oi=0,this._i=new Mu,this.targetCount=0,this.ai=xs.ur()}forEachTarget(e,n){return this.si.forEach(((r,s)=>n(s))),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),L.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new xs(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Pr(n),L.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach(((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),L.waitFor(i).next((()=>s))}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,n){this.ui={},this.overlays={},this.ci=new Ya(0),this.li=!1,this.li=!0,this.hi=new MS,this.referenceDelegate=e(this),this.Pi=new BS(this),this.indexManager=new AS,this.remoteDocumentCache=(function(s){return new FS(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new IS(n),this.Ii=new OS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new xS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new LS(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new $S(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,n){return L.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,n))))}}class $S extends pR{constructor(e){super(),this.currentSequenceNumber=e}}class Lu{constructor(e){this.persistence=e,this.Ri=new Mu,this.Vi=null}static mi(e){return new Lu(e)}get fi(){if(this.Vi)return this.Vi;throw ce(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.fi,(r=>{const s=ne.fromPath(r);return this.gi(e,s).next((i=>{i||n.removeEntry(s,ue.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Ta{constructor(e,n){this.persistence=e,this.pi=new es((r=>_R(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=kS(this,n)}static mi(e,n){return new Ta(e,n)}Ei(){}di(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}wr(e){let n=0;return this.pr(e,(r=>{n++})).next((()=>n))}pr(e,n){return L.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?L.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(o=>this.br(e,o,n).next((c=>{c||(r++,i.removeEntry(o,ue.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),L.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Wo(e.data.value)),n}br(e,n,r){return L.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=ve(),s=ve();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Fu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Ew()?8:mR(It())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new jS;return this.Ss(e,n,o).next((c=>{if(i.result=c,this.Vs)return this.bs(e,n,o,c.size)}))})).next((()=>i.result))}bs(e,n,r,s){return r.documentReadCount<this.fs?(ds()<=_e.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",ps(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),L.resolve()):(ds()<=_e.DEBUG&&Z("QueryEngine","Query:",ps(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(ds()<=_e.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",ps(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pn(n))):L.resolve())}ys(e,n){if(Xd(n))return L.resolve(null);let r=pn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=kl(n,null,"F"),r=pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=ve(...i);return this.ps.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const u=this.Ds(n,c);return this.Cs(n,u,o,l.readTime)?this.ys(e,kl(n,null,"F")):this.vs(e,u,n,l)}))))})))))}ws(e,n,r,s){return Xd(n)||s.isEqual(ue.min())?L.resolve(null):this.ps.getDocuments(e,r).next((i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?L.resolve(null):(ds()<=_e.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ps(n)),this.vs(e,o,n,uR(s,Wi)).next((c=>c)))}))}Ds(e,n){let r=new Ze(B_(e));return n.forEach(((s,i)=>{tc(e,i)&&(r=r.add(i))})),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return ds()<=_e.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",ps(n)),this.ps.getDocumentsMatchingQuery(e,n,_r.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu="LocalStore",HS=3e8;class zS{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new je(ye),this.xs=new es((i=>ku(i)),Vu),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new NS(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function WS(t,e,n,r){return new zS(t,e,n,r)}async function uy(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let l=ve();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:c})))}))}))}function KS(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,l,u,f){const p=u.batch,m=p.keys();let v=L.resolve();return m.forEach((P=>{v=v.next((()=>f.getEntry(l,P))).next((V=>{const D=u.docVersions.get(P);Pe(D!==null,48541),V.version.compareTo(D)<0&&(p.applyToRemoteDocument(V,u),V.isValidDocument()&&(V.setReadTime(u.commitVersion),f.addEntry(V)))}))})),v.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=ve();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function hy(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function GS(t,e){const n=fe(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const c=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;c.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p))));let v=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(ht.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,r)),s=s.insert(p,v),(function(V,D,B){return V.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=HS?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0})(m,v,f)&&c.push(n.Pi.updateTargetData(i,v))}));let l=Fn(),u=ve();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(QS(i,o,e.documentUpdates).next((f=>{l=f.ks,u=f.qs}))),!r.isEqual(ue.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next((p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return L.waitFor(c).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(n.Ms=s,i)))}function QS(t,e,n){let r=ve(),s=ve();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=Fn();return n.forEach(((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ue.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):Z(Uu,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)})),{ks:o,qs:s}}))}function YS(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Su),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function XS(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.Pi.getTargetData(r,e).next((i=>i?(s=i,L.resolve(s)):n.Pi.allocateTargetId(r).next((o=>(s=new ir(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r}))}async function xl(t,e,n){const r=fe(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!$s(o))throw o;Z(Uu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function up(t,e,n){const r=fe(t);let s=ue.min(),i=ve();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,f){const p=fe(l),m=p.xs.get(f);return m!==void 0?L.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,f)})(r,o,pn(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,c.targetId).next((l=>{i=l}))})).next((()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:ue.min(),n?i:ve()))).next((c=>(JS(r,MR(e),c),{documents:c,Qs:i})))))}function JS(t,e,n){let r=t.Os.get(e)||ue.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.Os.set(e,r)}class hp{constructor(){this.activeTargetIds=jR()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ZS{constructor(){this.Mo=new hp,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new hp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp="ConnectivityMonitor";class dp{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){Z(fp,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){Z(fp,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oo=null;function Ml(){return Oo===null?Oo=(function(){return 268435456+Math.round(2147483648*Math.random())})():Oo++,"0x"+Oo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc="RestConnection",tC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class nC{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===ga?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=Ml(),c=this.zo(e,n.toUriEncodedString());Z(Gc,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:u}=new URL(c),f=Yr(u);return this.Jo(e,c,l,r,f).then((p=>(Z(Gc,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Vs(Gc,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p}))}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Us})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,n){const r=tC[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class sC extends nC{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Ml();return new Promise(((c,l)=>{const u=new d_;u.setWithCredentials(!0),u.listenOnce(p_.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case zo.NO_ERROR:const p=u.getResponseJson();Z(mt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case zo.TIMEOUT:Z(mt,`RPC '${e}' ${o} timed out`),l(new X(x.DEADLINE_EXCEEDED,"Request time out"));break;case zo.HTTP_ERROR:const m=u.getStatus();if(Z(mt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const P=v?.error;if(P&&P.status&&P.message){const V=(function(B){const U=B.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(U)>=0?U:x.UNKNOWN})(P.status);l(new X(V,P.message))}else l(new X(x.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new X(x.UNAVAILABLE,"Connection failed."));break;default:ce(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{Z(mt,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);Z(mt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)}))}T_(e,n,r){const s=Ml(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=__(),c=g_(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");Z(mt,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);this.I_(p);let m=!1,v=!1;const P=new rC({Yo:D=>{v?Z(mt,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(m||(Z(mt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),Z(mt,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},Zo:()=>p.close()}),V=(D,B,U)=>{D.listen(B,(q=>{try{U(q)}catch(z){setTimeout((()=>{throw z}),0)}}))};return V(p,fi.EventType.OPEN,(()=>{v||(Z(mt,`RPC '${e}' stream ${s} transport opened.`),P.o_())})),V(p,fi.EventType.CLOSE,(()=>{v||(v=!0,Z(mt,`RPC '${e}' stream ${s} transport closed`),P.a_(),this.E_(p))})),V(p,fi.EventType.ERROR,(D=>{v||(v=!0,Vs(mt,`RPC '${e}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),P.a_(new X(x.UNAVAILABLE,"The operation could not be completed")))})),V(p,fi.EventType.MESSAGE,(D=>{if(!v){const B=D.data[0];Pe(!!B,16349);const U=B,q=U?.error||U[0]?.error;if(q){Z(mt,`RPC '${e}' stream ${s} received error:`,q);const z=q.status;let ee=(function(y){const _=Ke[y];if(_!==void 0)return J_(_)})(z),ie=q.message;ee===void 0&&(ee=x.INTERNAL,ie="Unknown error status: "+z+" with message "+q.message),v=!0,P.a_(new X(ee,ie)),p.close()}else Z(mt,`RPC '${e}' stream ${s} received:`,B),P.u_(B)}})),V(c,m_.STAT_EVENT,(D=>{D.stat===wl.PROXY?Z(mt,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===wl.NOPROXY&&Z(mt,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{P.__()}),0),P}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function Qc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(t){return new cS(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp="PersistentStream";class dy{constructor(e,n,r,s,i,o,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new fy(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(Ln(n.toString()),Ln("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{e((()=>{const s=new X(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return Z(pp,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(Z(pp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class iC extends dy{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=hS(this.serializer,e),r=(function(i){if(!("targetChange"in i))return ue.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ue.min():o.readTime?mn(o.readTime):ue.min()})(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Ol(this.serializer),n.addTarget=(function(i,o){let c;const l=o.target;if(c=Cl(l)?{documents:pS(i,l)}:{query:mS(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=ty(i,o.resumeToken);const u=Vl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(ue.min())>0){c.readTime=Ea(i,o.snapshotVersion.toTimestamp());const u=Vl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c})(this.serializer,e);const r=_S(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Ol(this.serializer),n.removeTarget=e,this.q_(n)}}class oC extends dy{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Pe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Pe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Pe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=dS(e.writeResults,e.commitTime),r=mn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Ol(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>fS(this.serializer,r)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{}class cC extends aC{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new X(x.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(e,Dl(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(x.UNKNOWN,i.toString())}))}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.Ho(e,Dl(n,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new X(x.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class lC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ln(n),this.aa=!1):Z("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr="RemoteStore";class uC{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{r.enqueueAndForget((async()=>{ns(this)&&(Z(Gr,"Restarting streams for network reachability change."),await(async function(l){const u=fe(l);u.Ea.add(4),await fo(u),u.Ra.set("Unknown"),u.Ea.delete(4),await oc(u)})(this))}))})),this.Ra=new lC(r,s)}}async function oc(t){if(ns(t))for(const e of t.da)await e(!0)}async function fo(t){for(const e of t.da)await e(!1)}function py(t,e){const n=fe(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),qu(n)?ju(n):qs(n).O_()&&$u(n,e))}function Bu(t,e){const n=fe(t),r=qs(n);n.Ia.delete(e),r.O_()&&my(n,e),n.Ia.size===0&&(r.O_()?r.L_():ns(n)&&n.Ra.set("Unknown"))}function $u(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}qs(t).Y_(e)}function my(t,e){t.Va.Ue(e),qs(t).Z_(e)}function ju(t){t.Va=new sS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),qs(t).start(),t.Ra.ua()}function qu(t){return ns(t)&&!qs(t).x_()&&t.Ia.size>0}function ns(t){return fe(t).Ea.size===0}function gy(t){t.Va=void 0}async function hC(t){t.Ra.set("Online")}async function fC(t){t.Ia.forEach(((e,n)=>{$u(t,e)}))}async function dC(t,e){gy(t),qu(t)?(t.Ra.ha(e),ju(t)):t.Ra.set("Unknown")}async function pC(t,e,n){if(t.Ra.set("Online"),e instanceof ey&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))})(t,e)}catch(r){Z(Gr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ia(t,r)}else if(e instanceof Qo?t.Va.Ze(e):e instanceof Z_?t.Va.st(e):t.Va.tt(e),!n.isEqual(ue.min()))try{const r=await hy(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,u)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(ht.EMPTY_BYTE_STRING,f.snapshotVersion)),my(i,l);const p=new ir(f.target,l,u,f.sequenceNumber);$u(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(t,n)}catch(r){Z(Gr,"Failed to raise snapshot:",r),await Ia(t,r)}}async function Ia(t,e,n){if(!$s(e))throw e;t.Ea.add(1),await fo(t),t.Ra.set("Offline"),n||(n=()=>hy(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Z(Gr,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await oc(t)}))}function _y(t,e){return e().catch((n=>Ia(t,n,e)))}async function ac(t){const e=fe(t),n=Tr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Su;for(;mC(e);)try{const s=await YS(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,gC(e,s)}catch(s){await Ia(e,s)}yy(e)&&vy(e)}function mC(t){return ns(t)&&t.Ta.length<10}function gC(t,e){t.Ta.push(e);const n=Tr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function yy(t){return ns(t)&&!Tr(t).x_()&&t.Ta.length>0}function vy(t){Tr(t).start()}async function _C(t){Tr(t).ra()}async function yC(t){const e=Tr(t);for(const n of t.Ta)e.ea(n.mutations)}async function vC(t,e,n){const r=t.Ta.shift(),s=Nu.from(r,e,n);await _y(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await ac(t)}async function EC(t,e){e&&Tr(t).X_&&await(async function(r,s){if((function(o){return tS(o)&&o!==x.ABORTED})(s.code)){const i=r.Ta.shift();Tr(r).B_(),await _y(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await ac(r)}})(t,e),yy(t)&&vy(t)}async function mp(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),Z(Gr,"RemoteStore received new credentials");const r=ns(n);n.Ea.add(3),await fo(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await oc(n)}async function TC(t,e){const n=fe(t);e?(n.Ea.delete(2),await oc(n)):e||(n.Ea.add(2),await fo(n),n.Ra.set("Unknown"))}function qs(t){return t.ma||(t.ma=(function(n,r,s){const i=fe(n);return i.sa(),new iC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:hC.bind(null,t),t_:fC.bind(null,t),r_:dC.bind(null,t),H_:pC.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),qu(t)?ju(t):t.Ra.set("Unknown")):(await t.ma.stop(),gy(t))}))),t.ma}function Tr(t){return t.fa||(t.fa=(function(n,r,s){const i=fe(n);return i.sa(),new oC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:_C.bind(null,t),r_:EC.bind(null,t),ta:yC.bind(null,t),na:vC.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await ac(t)):(await t.fa.stop(),t.Ta.length>0&&(Z(Gr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new fr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Hu(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zu(t,e){if(Ln("AsyncQueue",`${e}: ${t}`),$s(t))return new X(x.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{static emptySet(e){return new bs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ne.comparator(n.key,r.key):(n,r)=>ne.comparator(n.key,r.key),this.keyedMap=di(),this.sortedSet=new je(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof bs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new bs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(){this.ga=new je(ne.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ce(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,r)=>{e.push(r)})),e}}class Ms{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((c=>{o.push({type:0,doc:c})})),new Ms(e,n,bs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ec(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class wC{constructor(){this.queries=_p(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=fe(n),i=s.queries;s.queries=_p(),i.forEach(((o,c)=>{for(const l of c.Sa)l.onError(r)}))})(this,new X(x.ABORTED,"Firestore shutting down"))}}function _p(){return new es((t=>U_(t)),ec)}async function Ey(t,e){const n=fe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new IC,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=zu(o,`Initialization of query '${ps(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Wu(n)}async function Ty(t,e){const n=fe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function AC(t,e){const n=fe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&Wu(n)}function bC(t,e,n){const r=fe(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Wu(t){t.Ca.forEach((e=>{e.next()}))}var Ll,yp;(yp=Ll||(Ll={})).Ma="default",yp.Cache="cache";class Iy{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ms(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ms.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ll.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e){this.key=e}}class Ay{constructor(e){this.key=e}}class RC{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ve(),this.mutatedKeys=ve(),this.eu=B_(e),this.tu=new bs(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new gp,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),v=tc(this.query,p)?p:null,P=!!m&&this.mutatedKeys.has(m.key),V=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let D=!1;m&&v?m.data.isEqual(v.data)?P!==V&&(r.track({type:3,doc:v}),D=!0):this.su(m,v)||(r.track({type:2,doc:v}),D=!0,(l&&this.eu(v,l)>0||u&&this.eu(v,u)<0)&&(c=!0)):!m&&v?(r.track({type:0,doc:v}),D=!0):m&&!v&&(r.track({type:1,doc:m}),D=!0,(l||u)&&(c=!0)),D&&(v?(o=o.add(v),i=V?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,p)=>(function(v,P){const V=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce(20277,{Rt:D})}};return V(v)-V(P)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new Ms(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new gp,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ve(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const n=[];return e.forEach((r=>{this.Xa.has(r)||n.push(new Ay(r))})),this.Xa.forEach((r=>{e.has(r)||n.push(new wy(r))})),n}cu(e){this.Ya=e.Qs,this.Xa=ve();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ms.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Ku="SyncEngine";class SC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class CC{constructor(e){this.key=e,this.hu=!1}}class PC{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new es((c=>U_(c)),ec),this.Iu=new Map,this.Eu=new Set,this.du=new je(ne.comparator),this.Au=new Map,this.Ru=new Mu,this.Vu={},this.mu=new Map,this.fu=xs.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function kC(t,e,n=!0){const r=ky(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await by(r,e,n,!0),s}async function VC(t,e){const n=ky(t);await by(n,e,!0,!1)}async function by(t,e,n,r){const s=await XS(t.localStore,pn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await DC(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&py(t.remoteStore,s),c}async function DC(t,e,n,r,s){t.pu=(p,m,v)=>(async function(V,D,B,U){let q=D.view.ru(B);q.Cs&&(q=await up(V.localStore,D.query,!1).then((({documents:R})=>D.view.ru(R,q))));const z=U&&U.targetChanges.get(D.targetId),ee=U&&U.targetMismatches.get(D.targetId)!=null,ie=D.view.applyChanges(q,V.isPrimaryClient,z,ee);return Ep(V,D.targetId,ie.au),ie.snapshot})(t,p,m,v);const i=await up(t.localStore,e,!0),o=new RC(e,i.Qs),c=o.ru(i.documents),l=ho.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);Ep(t,n,u.au);const f=new SC(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function NC(t,e,n){const r=fe(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((o=>!ec(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await xl(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Bu(r.remoteStore,s.targetId),Fl(r,s.targetId)})).catch(Bs)):(Fl(r,s.targetId),await xl(r.localStore,s.targetId,!0))}async function OC(t,e){const n=fe(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Bu(n.remoteStore,r.targetId))}async function xC(t,e,n){const r=jC(t);try{const s=await(function(o,c){const l=fe(o),u=Fe.now(),f=c.reduce(((v,P)=>v.add(P.key)),ve());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(v=>{let P=Fn(),V=ve();return l.Ns.getEntries(v,f).next((D=>{P=D,P.forEach(((B,U)=>{U.isValidDocument()||(V=V.add(B))}))})).next((()=>l.localDocuments.getOverlayedDocuments(v,P))).next((D=>{p=D;const B=[];for(const U of c){const q=YR(U,p.get(U.key).overlayedDocument);q!=null&&B.push(new ts(U.key,q,V_(q.value.mapValue),Dn.exists(!0)))}return l.mutationQueue.addMutationBatch(v,u,B,c)})).next((D=>{m=D;const B=D.applyToLocalDocumentSet(p,V);return l.documentOverlayCache.saveOverlays(v,D.batchId,B)}))})).then((()=>({batchId:m.batchId,changes:j_(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new je(ye)),u=u.insert(c,l),o.Vu[o.currentUser.toKey()]=u})(r,s.batchId,n),await po(r,s.changes),await ac(r.remoteStore)}catch(s){const i=zu(s,"Failed to persist write");n.reject(i)}}async function Ry(t,e){const n=fe(t);try{const r=await GS(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Au.get(i);o&&(Pe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Pe(o.hu,14607):s.removedDocuments.size>0&&(Pe(o.hu,42227),o.hu=!1))})),await po(n,r,e)}catch(r){await Bs(r)}}function vp(t,e,n){const r=fe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=fe(o);l.onlineState=c;let u=!1;l.queries.forEach(((f,p)=>{for(const m of p.Sa)m.va(c)&&(u=!0)})),u&&Wu(l)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function MC(t,e,n){const r=fe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new je(ne.comparator);o=o.insert(i,Et.newNoDocument(i,ue.min()));const c=ve().add(i),l=new sc(ue.min(),new Map,new je(ye),o,c);await Ry(r,l),r.du=r.du.remove(i),r.Au.delete(e),Gu(r)}else await xl(r.localStore,e,!1).then((()=>Fl(r,e,n))).catch(Bs)}async function LC(t,e){const n=fe(t),r=e.batch.batchId;try{const s=await KS(n.localStore,e);Cy(n,r,null),Sy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await po(n,s)}catch(s){await Bs(s)}}async function FC(t,e,n){const r=fe(t);try{const s=await(function(o,c){const l=fe(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next((p=>(Pe(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(u,p)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>l.localDocuments.getDocuments(u,f)))}))})(r.localStore,e);Cy(r,e,n),Sy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await po(r,s)}catch(s){await Bs(s)}}function Sy(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function Cy(t,e,n){const r=fe(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Fl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((r=>{t.Ru.containsKey(r)||Py(t,r)}))}function Py(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Bu(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Gu(t))}function Ep(t,e,n){for(const r of n)r instanceof wy?(t.Ru.addReference(r.key,e),UC(t,r)):r instanceof Ay?(Z(Ku,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||Py(t,r.key)):ce(19791,{wu:r})}function UC(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(Z(Ku,"New document in limbo: "+n),t.Eu.add(r),Gu(t))}function Gu(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new ne(Me.fromString(e)),r=t.fu.next();t.Au.set(r,new CC(n)),t.du=t.du.insert(n,r),py(t.remoteStore,new ir(pn(Za(n.path)),r,"TargetPurposeLimboResolution",Ya.ce))}}async function po(t,e,n){const r=fe(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,l)=>{o.push(r.pu(l,e,n).then((u=>{if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:n?.targetChanges.get(l.targetId)?.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){s.push(u);const f=Fu.As(l.targetId,u);i.push(f)}})))})),await Promise.all(o),r.Pu.H_(s),await(async function(l,u){const f=fe(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>L.forEach(u,(m=>L.forEach(m.Es,(v=>f.persistence.referenceDelegate.addReference(p,m.targetId,v))).next((()=>L.forEach(m.ds,(v=>f.persistence.referenceDelegate.removeReference(p,m.targetId,v)))))))))}catch(p){if(!$s(p))throw p;Z(Uu,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const v=f.Ms.get(m),P=v.snapshotVersion,V=v.withLastLimboFreeSnapshotVersion(P);f.Ms=f.Ms.insert(m,V)}}})(r.localStore,i))}async function BC(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){Z(Ku,"User change. New user:",e.toKey());const r=await uy(n.localStore,e);n.currentUser=e,(function(i,o){i.mu.forEach((c=>{c.forEach((l=>{l.reject(new X(x.CANCELLED,o))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await po(n,r.Ls)}}function $C(t,e){const n=fe(t),r=n.Au.get(e);if(r&&r.hu)return ve().add(r.key);{let s=ve();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function ky(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ry.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$C.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=MC.bind(null,e),e.Pu.H_=AC.bind(null,e.eventManager),e.Pu.yu=bC.bind(null,e.eventManager),e}function jC(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=LC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=FC.bind(null,e),e}class wa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ic(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return WS(this.persistence,new qS,e.initialUser,this.serializer)}Cu(e){return new ly(Lu.mi,this.serializer)}Du(e){return new ZS}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}wa.provider={build:()=>new wa};class qC extends wa{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Pe(this.persistence.referenceDelegate instanceof Ta,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new CS(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Pt.withCacheSize(this.cacheSizeBytes):Pt.DEFAULT;return new ly((r=>Ta.mi(r,n)),this.serializer)}}class Ul{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=BC.bind(null,this.syncEngine),await TC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new wC})()}createDatastore(e){const n=ic(e.databaseInfo.databaseId),r=(function(i){return new sC(i)})(e.databaseInfo);return(function(i,o,c,l){return new cC(i,o,c,l)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,c){return new uC(r,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(n=>vp(this.syncEngine,n,0)),(function(){return dp.v()?new dp:new eC})())}createSyncEngine(e,n){return(function(s,i,o,c,l,u,f){const p=new PC(s,i,o,c,l,u);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const r=fe(n);Z(Gr,"RemoteStore shutting down."),r.Ea.add(5),await fo(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Ul.provider={build:()=>new Ul};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ln("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="FirestoreClient";class HC{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=_t.UNAUTHENTICATED,this.clientId=Ru.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{Z(Ir,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(Z(Ir,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=zu(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Yc(t,e){t.asyncQueue.verifyOperationInProgress(),Z(Ir,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await uy(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Tp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zC(t);Z(Ir,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>mp(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>mp(e.remoteStore,s))),t._onlineComponents=e}async function zC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z(Ir,"Using user provided OfflineComponentProvider");try{await Yc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===x.FAILED_PRECONDITION||s.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Vs("Error using user provided cache. Falling back to memory cache: "+n),await Yc(t,new wa)}}else Z(Ir,"Using default OfflineComponentProvider"),await Yc(t,new qC(void 0));return t._offlineComponents}async function Dy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z(Ir,"Using user provided OnlineComponentProvider"),await Tp(t,t._uninitializedComponentsProvider._online)):(Z(Ir,"Using default OnlineComponentProvider"),await Tp(t,new Ul))),t._onlineComponents}function WC(t){return Dy(t).then((e=>e.syncEngine))}async function Bl(t){const e=await Dy(t),n=e.eventManager;return n.onListen=kC.bind(null,e.syncEngine),n.onUnlisten=NC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=VC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=OC.bind(null,e.syncEngine),n}function KC(t,e,n={}){const r=new fr;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const f=new Vy({next:m=>{f.Nu(),o.enqueueAndForget((()=>Ty(i,p)));const v=m.docs.has(c);!v&&m.fromCache?u.reject(new X(x.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&m.fromCache&&l&&l.source==="server"?u.reject(new X(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Iy(Za(c.path),f,{includeMetadataChanges:!0,qa:!0});return Ey(i,p)})(await Bl(t),t.asyncQueue,e,n,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy="firestore.googleapis.com",wp=!0;class Ap{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new X(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Oy,this.ssl=wp}else this.host=e.host,this.ssl=e.ssl??wp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=cy;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<RS)throw new X(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ny(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new X(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new X(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new X(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ap({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new X(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ap(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Zb;switch(r.type){case"firstParty":return new rR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=Ip.get(n);r&&(Z("ComponentProvider","Removing Datastore"),Ip.delete(n),r.terminate())})(this),Promise.resolve()}}function GC(t,e,n,r={}){t=jr(t,cc);const s=Yr(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(fu(`https://${c}`),du("Firestore",!0)),i.host!==Oy&&i.host!==c&&Vs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!Hr(l,o)&&(t._setSettings(l),r.mockUserToken)){let u,f;if(typeof r.mockUserToken=="string")u=r.mockUserToken,f=_t.MOCK_USER;else{u=Rg(r.mockUserToken,t._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new X(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new _t(p)}t._authCredentials=new eR(new v_(u,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new rs(this.firestore,e,this._query)}}class Ye{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ye(this.firestore,e,this._key)}toJSON(){return{type:Ye._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(lo(n,Ye._jsonSchema))return new Ye(e,r||null,new ne(Me.fromString(n.referencePath)))}}Ye._jsonSchemaVersion="firestore/documentReference/1.0",Ye._jsonSchema={type:Qe("string",Ye._jsonSchemaVersion),referencePath:Qe("string")};class dr extends rs{constructor(e,n,r){super(e,n,Za(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ye(this.firestore,null,new ne(e))}withConverter(e){return new dr(this.firestore,e,this._path)}}function xy(t,e,...n){if(t=ut(t),E_("collection","path",e),t instanceof cc){const r=Me.fromString(e,...n);return Ld(r),new dr(t,null,r)}{if(!(t instanceof Ye||t instanceof dr))throw new X(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Me.fromString(e,...n));return Ld(r),new dr(t.firestore,null,r)}}function My(t,e,...n){if(t=ut(t),arguments.length===1&&(e=Ru.newId()),E_("doc","path",e),t instanceof cc){const r=Me.fromString(e,...n);return Md(r),new Ye(t,null,new ne(r))}{if(!(t instanceof Ye||t instanceof dr))throw new X(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Me.fromString(e,...n));return Md(r),new Ye(t.firestore,t instanceof dr?t.converter:null,new ne(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp="AsyncQueue";class Rp{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new fy(this,"async_queue_retry"),this._c=()=>{const r=Qc();r&&Z(bp,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Qc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Qc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new fr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!$s(e))throw e;Z(bp,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Ln("INTERNAL UNHANDLED ERROR: ",Sp(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Hu.createAndSchedule(this,e,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&ce(47125,{Pc:Sp(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Sp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(t){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(t,["next","error","complete"])}class eo extends cc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Rp,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Rp(e),this._firestoreClient=void 0,await e}}}function QC(t,e){const n=typeof t=="object"?t:gu(),r=typeof t=="string"?t:ga,s=Ha(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=wg("firestore");i&&GC(s,...i)}return s}function Qu(t){if(t._terminated)throw new X(x.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||YC(t),t._firestoreClient}function YC(t){const e=t._freezeSettings(),n=(function(s,i,o,c){return new ER(s,i,o,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Ny(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new HC(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $t(ht.fromBase64String(e))}catch(n){throw new X(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new $t(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:$t._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(lo(e,$t._jsonSchema))return $t.fromBase64String(e.bytes)}}$t._jsonSchemaVersion="firestore/bytes/1.0",$t._jsonSchema={type:Qe("string",$t._jsonSchemaVersion),bytes:Qe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:gn._jsonSchemaVersion}}static fromJSON(e){if(lo(e,gn._jsonSchema))return new gn(e.latitude,e.longitude)}}gn._jsonSchemaVersion="firestore/geoPoint/1.0",gn._jsonSchema={type:Qe("string",gn._jsonSchemaVersion),latitude:Qe("number"),longitude:Qe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:_n._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(lo(e,_n._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new _n(e.vectorValues);throw new X(x.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}_n._jsonSchemaVersion="firestore/vectorValue/1.0",_n._jsonSchema={type:Qe("string",_n._jsonSchemaVersion),vectorValues:Qe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC=/^__.*__$/;class JC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ts(e,this.data,this.fieldMask,n,this.fieldTransforms):new uo(e,this.data,n,this.fieldTransforms)}}function Ly(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce(40011,{Ac:t})}}class Ju{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Ju({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Aa(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Ly(this.Ac)&&XC.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class ZC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ic(e)}Cc(e,n,r,s=!1){return new Ju({Ac:e,methodName:n,Dc:r,path:lt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Fy(t){const e=t._freezeSettings(),n=ic(t._databaseId);return new ZC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function eP(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);$y("Data must be an object, but it was:",o,r);const c=Uy(r,o);let l,u;if(i.merge)l=new Qt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=nP(e,p,n);if(!o.contains(m))throw new X(x.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);sP(f,m)||f.push(m)}l=new Qt(f),u=o.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,u=o.fieldTransforms;return new JC(new Bt(c),l,u)}class Zu extends Xu{_toFieldTransform(e){return new WR(e.path,new Xi)}isEqual(e){return e instanceof Zu}}function tP(t,e,n,r=!1){return eh(n,t.Cc(r?4:3,e))}function eh(t,e){if(By(t=ut(t)))return $y("Unsupported field value:",e,t),Uy(t,e);if(t instanceof Xu)return(function(r,s){if(!Ly(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const c of r){let l=eh(c,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=ut(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return qR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Fe.fromDate(r);return{timestampValue:Ea(s.serializer,i)}}if(r instanceof Fe){const i=new Fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ea(s.serializer,i)}}if(r instanceof gn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof $t)return{bytesValue:ty(s.serializer,r._byteString)};if(r instanceof Ye){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:xu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof _n)return(function(o,c){return{mapValue:{fields:{[P_]:{stringValue:k_},[_a]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw c.Sc("VectorValues must only contain numeric values.");return Du(c.serializer,u)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${Qa(r)}`)})(t,e)}function Uy(t,e){const n={};return w_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zr(t,((r,s)=>{const i=eh(s,e.mc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function By(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof gn||t instanceof $t||t instanceof Ye||t instanceof Xu||t instanceof _n)}function $y(t,e,n){if(!By(n)||!T_(n)){const r=Qa(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function nP(t,e,n){if((e=ut(e))instanceof Yu)return e._internalPath;if(typeof e=="string")return jy(t,e);throw Aa("Field path arguments must be of type string or ",t,!1,void 0,n)}const rP=new RegExp("[~\\*/\\[\\]]");function jy(t,e,n){if(e.search(rP)>=0)throw Aa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Yu(...e.split("."))._internalPath}catch{throw Aa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Aa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new X(x.INVALID_ARGUMENT,c+t+l)}function sP(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ye(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new iP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(th("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class iP extends qy{data(){return super.data()}}function th(t,e){return typeof e=="string"?jy(t,e):e instanceof Yu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class nh{}class Hy extends nh{}function aP(t,e,...n){let r=[];e instanceof nh&&r.push(e),r=r.concat(n),(function(i){const o=i.filter((l=>l instanceof sh)).length,c=i.filter((l=>l instanceof rh)).length;if(o>1||o>0&&c>0)throw new X(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class rh extends Hy{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new rh(e,n,r)}_apply(e){const n=this._parse(e);return zy(e._query,n),new rs(e.firestore,e.converter,Pl(e._query,n))}_parse(e){const n=Fy(e.firestore);return(function(i,o,c,l,u,f,p){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new X(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){kp(p,f);const P=[];for(const V of p)P.push(Pp(l,i,V));m={arrayValue:{values:P}}}else m=Pp(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||kp(p,f),m=tP(c,o,p,f==="in"||f==="not-in");return Ge.create(u,f,m)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class sh extends nh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new sh(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:tn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)zy(o,l),o=Pl(o,l)})(e._query,n),new rs(e.firestore,e.converter,Pl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ih extends Hy{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new ih(e,n)}_apply(e){const n=(function(s,i,o){if(s.startAt!==null)throw new X(x.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new X(x.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Yi(i,o)})(e._query,this._field,this._direction);return new rs(e.firestore,e.converter,(function(s,i){const o=s.explicitOrderBy.concat([i]);return new js(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,n))}}function cP(t,e="asc"){const n=e,r=th("orderBy",t);return ih._create(r,n)}function Pp(t,e,n){if(typeof(n=ut(n))=="string"){if(n==="")throw new X(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!F_(e)&&n.indexOf("/")!==-1)throw new X(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Me.fromString(n));if(!ne.isDocumentKey(r))throw new X(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return zd(t,new ne(r))}if(n instanceof Ye)return zd(t,n._key);throw new X(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qa(n)}.`)}function kp(t,e){if(!Array.isArray(t)||t.length===0)throw new X(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function zy(t,e){const n=(function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new X(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new X(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class lP{convertValue(e,n="none"){switch(Er(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(vr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ce(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Zr(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){const n=e.fields?.[_a].arrayValue?.values?.map((r=>He(r.doubleValue)));return new _n(n)}convertGeoPoint(e){return new gn(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ja(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ki(e));default:return null}}convertTimestamp(e){const n=yr(e);return new Fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Me.fromString(e);Pe(ay(r),9688,{name:e});const s=new Gi(r.get(1),r.get(3)),i=new ne(r.popFirst(5));return s.isEqual(n)||Ln(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uP(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class mi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class qr extends qy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Yo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(th("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new X(x.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=qr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}qr._jsonSchemaVersion="firestore/documentSnapshot/1.0",qr._jsonSchema={type:Qe("string",qr._jsonSchemaVersion),bundleSource:Qe("string","DocumentSnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class Yo extends qr{data(e={}){return super.data(e)}}class Rs{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new mi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new Yo(this._firestore,this._userDataWriter,r.key,r,new mi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new Yo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new mi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new Yo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new mi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:hP(c.type),doc:l,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new X(x.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Rs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ru.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function hP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fP(t){t=jr(t,Ye);const e=jr(t.firestore,eo);return KC(Qu(e),t._key).then((n=>Ky(e,t,n)))}Rs._jsonSchemaVersion="firestore/querySnapshot/1.0",Rs._jsonSchema={type:Qe("string",Rs._jsonSchemaVersion),bundleSource:Qe("string","QuerySnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class Wy extends lP{constructor(e){super(),this.firestore=e}convertBytes(e){return new $t(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ye(this.firestore,null,n)}}function dP(t,e){const n=jr(t.firestore,eo),r=My(t),s=uP(t.converter,e);return mP(n,[eP(Fy(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Dn.exists(!1))]).then((()=>r))}function pP(t,...e){t=ut(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Cp(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Cp(e[r])){const l=e[r];e[r]=l.next?.bind(l),e[r+1]=l.error?.bind(l),e[r+2]=l.complete?.bind(l)}let i,o,c;if(t instanceof Ye)o=jr(t.firestore,eo),c=Za(t._key.path),i={next:l=>{e[r]&&e[r](Ky(o,t,l))},error:e[r+1],complete:e[r+2]};else{const l=jr(t,rs);o=jr(l.firestore,eo),c=l._query;const u=new Wy(o);i={next:f=>{e[r]&&e[r](new Rs(o,u,l,f))},error:e[r+1],complete:e[r+2]},oP(t._query)}return(function(u,f,p,m){const v=new Vy(m),P=new Iy(f,v,p);return u.asyncQueue.enqueueAndForget((async()=>Ey(await Bl(u),P))),()=>{v.Nu(),u.asyncQueue.enqueueAndForget((async()=>Ty(await Bl(u),P)))}})(Qu(o),c,s,i)}function mP(t,e){return(function(r,s){const i=new fr;return r.asyncQueue.enqueueAndForget((async()=>xC(await WC(r),s,i))),i.promise})(Qu(t),e)}function Ky(t,e,n){const r=n.docs.get(e._key),s=new Wy(t);return new qr(t,s,e._key,r,new mi(n.hasPendingWrites,n.fromCache),e.converter)}function gP(){return new Zu("serverTimestamp")}(function(e,n=!0){(function(s){Us=s})(Xr),zr(new gr("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new eo(new tR(r.getProvider("auth-internal")),new sR(o,r.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new X(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gi(u.options.projectId,f)})(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),hn(Dd,Nd,e),hn(Dd,Nd,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy="firebasestorage.googleapis.com",_P="storageBucket",yP=120*1e3,vP=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends En{constructor(e,n,r=0){super(Xc(e),`Firebase Storage: ${n} (${Xc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Tn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Xc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var vn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(vn||(vn={}));function Xc(t){return"storage/"+t}function EP(){const t="An unknown error occurred, please check the error payload for server response.";return new Tn(vn.UNKNOWN,t)}function TP(){return new Tn(vn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function IP(){return new Tn(vn.CANCELED,"User canceled the upload/download.")}function wP(t){return new Tn(vn.INVALID_URL,"Invalid URL '"+t+"'.")}function AP(t){return new Tn(vn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Vp(t){return new Tn(vn.INVALID_ARGUMENT,t)}function Qy(){return new Tn(vn.APP_DELETED,"The Firebase app was deleted.")}function bP(t){return new Tn(vn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Yt.makeFromUrl(e,n)}catch{return new Yt(e,"")}if(r.path==="")return r;throw AP(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(z){z.path.charAt(z.path.length-1)==="/"&&(z.path_=z.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(z){z.path_=decodeURIComponent(z.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",v=new RegExp(`^https?://${p}/${f}/b/${s}/o${m}`,"i"),P={bucket:1,path:3},V=n===Gy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,D="([^?#]*)",B=new RegExp(`^https?://${V}/${s}/${D}`,"i"),q=[{regex:c,indices:l,postModify:i},{regex:v,indices:P,postModify:u},{regex:B,indices:{bucket:1,path:2},postModify:u}];for(let z=0;z<q.length;z++){const ee=q[z],ie=ee.regex.exec(e);if(ie){const R=ie[ee.indices.bucket];let y=ie[ee.indices.path];y||(y=""),r=new Yt(R,y),ee.postModify(r);break}}if(r==null)throw wP(e);return r}}class RP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(t,e,n){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let u=!1;function f(...D){u||(u=!0,e.apply(null,D))}function p(D){s=setTimeout(()=>{s=null,t(v,l())},D)}function m(){i&&clearTimeout(i)}function v(D,...B){if(u){m();return}if(D){m(),f.call(null,D,...B);return}if(l()||o){m(),f.call(null,D,...B);return}r<64&&(r*=2);let q;c===1?(c=2,q=0):q=(r+Math.random())*1e3,p(q)}let P=!1;function V(D){P||(P=!0,m(),!u&&(s!==null?(D||(c=2),clearTimeout(s),p(0)):D||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,V(!0)},n),V}function CP(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PP(t){return t!==void 0}function Dp(t,e,n,r){if(r<e)throw Vp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Vp(`Invalid value for '${t}'. Expected ${n} or less.`)}function kP(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var ba;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ba||(ba={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VP(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{constructor(e,n,r,s,i,o,c,l,u,f,p,m=!0,v=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=p,this.retry=m,this.isUsingEmulator=v,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((P,V)=>{this.resolve_=P,this.reject_=V,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new xo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===ba.NO_ERROR,l=i.getStatus();if(!c||VP(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===ba.ABORT;r(!1,new xo(!1,null,f));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new xo(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());PP(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=EP();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Qy():IP();o(l)}else{const l=TP();o(l)}};this.canceled_?n(!1,new xo(!1,null,!0)):this.backoffId_=SP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&CP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class xo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function NP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function OP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function xP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function MP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function LP(t,e,n,r,s,i,o=!0,c=!1){const l=kP(t.urlParams),u=t.url+l,f=Object.assign({},t.headers);return xP(f,e),NP(f,n),OP(f,i),MP(f,r),new DP(u,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function UP(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,n){this._service=e,n instanceof Yt?this._location=n:this._location=Yt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ra(e,n)}get root(){const e=new Yt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return UP(this._location.path)}get storage(){return this._service}get parent(){const e=FP(this._location.path);if(e===null)return null;const n=new Yt(this._location.bucket,e);return new Ra(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw bP(e)}}function Np(t,e){const n=e?.[_P];return n==null?null:Yt.makeFromBucketSpec(n,t)}function BP(t,e,n,r={}){t.host=`${e}:${n}`;const s=Yr(e);s&&(fu(`https://${t.host}/b`),du("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Rg(i,t.app.options.projectId))}class $P{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=Gy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=yP,this._maxUploadRetryTime=vP,this._requests=new Set,s!=null?this._bucket=Yt.makeFromBucketSpec(s,this._host):this._bucket=Np(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Yt.makeFromBucketSpec(this._url,e):this._bucket=Np(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Dp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Dp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Ut(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ra(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new RP(Qy());{const o=LP(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Op="@firebase/storage",xp="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy="storage";function jP(t=gu(),e){t=ut(t);const r=Ha(t,Yy).getImmediate({identifier:e}),s=wg("storage");return s&&qP(r,...s),r}function qP(t,e,n,r={}){BP(t,e,n,r)}function HP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new $P(n,r,s,e,Xr)}function zP(){zr(new gr(Yy,HP,"PUBLIC").setMultipleInstances(!0)),hn(Op,xp,""),hn(Op,xp,"esm2020")}zP();const WP={apiKey:"AIzaSyB8uWskczwYPUG4fWBQ7XBcdHdKDM0wKVg",authDomain:"accounting-site-5c946.firebaseapp.com",projectId:"accounting-site-5c946",storageBucket:"accounting-site-5c946.firebasestorage.app",messagingSenderId:"1030715238547",appId:"1:1030715238547:web:84e73751e15b0e26e84566",measurementId:"G-7WC5XS8LJD"},oh=Pg(WP);h_(oh);const ah=QC(oh);jP(oh);const KP={class:"container"},GP={class:"form-card"},QP={key:0,class:"msg"},YP={__name:"Test",setup(t){const e=Je(""),n=Je(""),r=Je(""),s=Je(""),i=Je(""),o=async()=>{if(!e.value){i.value="標題或內容不可空白";return}try{await dP(xy(ah,"articles"),{title:e.value,subTitle:n.value,content:s.value,imgUrl:r.value,createdAt:gP(),createdAtClient:new Date}),i.value="文章上傳成功！",e.value="",n.value="",s.value="",r.value=""}catch(c){i.value=c.message}};return(c,l)=>(me(),Ie("div",KP,[l[4]||(l[4]=K("h2",{class:"form-title"},"上傳文章",-1)),K("div",GP,[Fr(K("input",{"onUpdate:modelValue":l[0]||(l[0]=u=>e.value=u),placeholder:"標題"},null,512),[[_s,e.value]]),Fr(K("input",{"onUpdate:modelValue":l[1]||(l[1]=u=>n.value=u),placeholder:"副標題"},null,512),[[_s,n.value]]),Fr(K("input",{"onUpdate:modelValue":l[2]||(l[2]=u=>r.value=u),placeholder:"圖片網址"},null,512),[[_s,r.value]]),Fr(K("textarea",{"onUpdate:modelValue":l[3]||(l[3]=u=>s.value=u),placeholder:"內文"},null,512),[[_s,s.value]]),K("button",{onClick:o},"發布文章"),i.value?(me(),Ie("p",QP,$e(i.value),1)):Ss("",!0)])]))}},XP=St(YP,[["__scopeId","data-v-54bc76c2"]]),JP={class:"login"},ZP={key:0},e2={key:1},t2={class:"btn-inside"},n2={__name:"Login",setup(t){const e=h_(),n=Je(null),r=Je(""),s=Je("");Bn(()=>{B1(e,c=>{n.value=c})});const i=async()=>{if(console.log(r.value),!r.value||!s.value){alert("帳號或密碼未輸入");return}if(r.value!=="hedecpa@gmail.com"&&r.value!=="jameschunchin@gmail.com"){alert("此帳號無權限登入");return}try{await L1(e,r.value,s.value)}catch(c){c.code==="auth/invalid-credential"||c.code==="auth/wrong-password"?alert("帳號或密碼錯誤，請重新輸入"):alert("登入失敗："+c.message)}},o=async()=>{await $1(e)};return(c,l)=>{const u=na("router-link");return me(),Ie("div",JP,[n.value?(me(),Ie("div",e2,[K("p",null,"目前登入中："+$e(n.value.email),1),K("div",t2,[K("button",{onClick:o,class:"btn"},"登出"),Ce(u,{to:"/test",class:"btn"},{default:Lr(()=>[...l[6]||(l[6]=[Kt("前往上傳文章",-1)])]),_:1})])])):(me(),Ie("div",ZP,[l[2]||(l[2]=Kt(" 帳號：",-1)),Fr(K("input",{"onUpdate:modelValue":l[0]||(l[0]=f=>r.value=f),placeholder:"請輸入帳號"},null,512),[[_s,r.value]]),l[3]||(l[3]=K("br",null,null,-1)),l[4]||(l[4]=Kt(" 密碼：",-1)),Fr(K("input",{"onUpdate:modelValue":l[1]||(l[1]=f=>s.value=f),type:"password",placeholder:"請輸入密碼"},null,512),[[_s,s.value]]),l[5]||(l[5]=K("br",null,null,-1)),K("div",{class:"btn-inside"},[K("button",{onClick:i,class:"btn"},"登入")])]))])}}},r2=St(n2,[["__scopeId","data-v-0dca3547"]]),s2={class:"container"},i2={key:0,class:"no-articles"},o2={key:1,class:"articles"},a2=["onClick"],c2={class:"title"},l2={class:"subtitle"},u2={class:"time"},h2={class:"pagination"},f2=["disabled"],d2=["disabled"],Jc=5,p2={__name:"ArticleList",setup(t){const e=hu(),n=Je([]),r=Je(1),s=Je(1),i=kt(()=>{const u=(r.value-1)*Jc,f=u+Jc;return n.value.slice(u,f)}),o=()=>{r.value<s.value&&r.value++},c=()=>{r.value>1&&r.value--},l=u=>{e.push(`/articles/${u}`)};return Bn(async()=>{const u=aP(xy(ah,"articles"),cP("createdAtClient","desc"));pP(u,f=>{n.value=f.docs.map(p=>({id:p.id,...p.data()})),s.value=Math.ceil(n.value.length/Jc)})}),(u,f)=>(me(),Ie("div",s2,[f[0]||(f[0]=K("h2",{class:"page-title"},"文章列表",-1)),n.value.length===0?(me(),Ie("div",i2," 目前沒有文章 ")):(me(),Ie("div",o2,[(me(!0),Ie(vt,null,Ti(i.value,p=>(me(),Ie("div",{key:p.id,class:"article-card",onClick:m=>l(p.id)},[K("h3",c2,$e(p.title),1),K("p",l2,$e(p.subTitle),1),K("small",u2,$e(p.createdAtClient?.toDate?.().toLocaleString()||"時間不明"),1)],8,a2))),128))])),K("div",h2,[K("button",{onClick:c,disabled:r.value===1},"上一頁",8,f2),K("span",null,"第 "+$e(r.value)+" / "+$e(s.value)+" 頁",1),K("button",{onClick:o,disabled:r.value===s.value}," 下一頁 ",8,d2)])]))}},m2=St(p2,[["__scopeId","data-v-aadc7117"]]),g2={key:0,class:"container"},_2={class:"title"},y2={class:"subtitle"},v2={class:"time"},E2=["innerHTML"],T2=["src"],I2={key:1,class:"loading"},w2={__name:"ArticleDetail",setup(t){const e=hg(),n=hu(),r=Je(null),s=()=>{n.back()};return Bn(async()=>{const i=e.params.id;if(!i)return;const o=My(ah,"articles",i),c=await fP(o);c.exists()?r.value={id:c.id,...c.data()}:(console.warn("文章不存在"),n.replace("/articles"))}),(i,o)=>r.value?(me(),Ie("div",g2,[K("h2",_2,$e(r.value.title),1),K("p",y2,$e(r.value.subTitle),1),K("small",v2,$e(r.value.createdAtClient?.toDate?.().toLocaleString()||"時間不明"),1),K("pre",{class:"content",innerHTML:r.value.content},null,8,E2),r.value.imgUrl?(me(),Ie("img",{key:0,src:r.value.imgUrl,class:"image"},null,8,T2)):Ss("",!0),K("button",{class:"back-btn",onClick:s},"返回列表")])):(me(),Ie("div",I2,[...o[0]||(o[0]=[K("div",{class:"spinner"},null,-1),K("p",null,"載入中...",-1)])]))}},A2=St(w2,[["__scopeId","data-v-4efecd0c"]]),b2=[{path:"/",component:VI},{path:"/news",component:KI},{path:"/news/:id",component:nw},{path:"/test",component:XP},{path:"/login",component:r2},{path:"/articleList",component:m2},{path:"/articles/:id",component:A2}],R2=ZT({history:CT(),routes:b2});qE(YE).use(R2).use(FI()).mount("#app");
