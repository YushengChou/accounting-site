(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Yl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Oe={},Er=[],un=()=>{},Hp=()=>!1,ka=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Xl=t=>t.startsWith("onUpdate:"),rt=Object.assign,Jl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},kv=Object.prototype.hasOwnProperty,Ce=(t,e)=>kv.call(t,e),le=Array.isArray,Tr=t=>Va(t)==="[object Map]",zp=t=>Va(t)==="[object Set]",he=t=>typeof t=="function",Ge=t=>typeof t=="string",Ss=t=>typeof t=="symbol",Be=t=>t!==null&&typeof t=="object",Wp=t=>(Be(t)||he(t))&&he(t.then)&&he(t.catch),Kp=Object.prototype.toString,Va=t=>Kp.call(t),Vv=t=>Va(t).slice(8,-1),Gp=t=>Va(t)==="[object Object]",Zl=t=>Ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,yi=Yl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Da=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Dv=/-(\w)/g,zt=Da(t=>t.replace(Dv,(e,n)=>n?n.toUpperCase():"")),Nv=/\B([A-Z])/g,Zs=Da(t=>t.replace(Nv,"-$1").toLowerCase()),Na=Da(t=>t.charAt(0).toUpperCase()+t.slice(1)),Vc=Da(t=>t?`on${Na(t)}`:""),us=(t,e)=>!Object.is(t,e),Bo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Qp=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},al=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Ov=t=>{const e=Ge(t)?Number(t):NaN;return isNaN(e)?t:e};let rf;const Oa=()=>rf||(rf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function eu(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Ge(s)?Fv(s):eu(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(Ge(t)||Be(t))return t}const xv=/;(?![^(]*\))/g,Mv=/:([^]+)/,Lv=/\/\*[^]*?\*\//g;function Fv(t){const e={};return t.replace(Lv,"").split(xv).forEach(n=>{if(n){const s=n.split(Mv);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function xa(t){let e="";if(Ge(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const s=xa(t[n]);s&&(e+=s+" ")}else if(Be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Uv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bv=Yl(Uv);function Yp(t){return!!t||t===""}const Xp=t=>!!(t&&t.__v_isRef===!0),$e=t=>Ge(t)?t:t==null?"":le(t)||Be(t)&&(t.toString===Kp||!he(t.toString))?Xp(t)?$e(t.value):JSON.stringify(t,Jp,2):String(t),Jp=(t,e)=>Xp(e)?Jp(t,e.value):Tr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[Dc(s,i)+" =>"]=r,n),{})}:zp(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Dc(n))}:Ss(e)?Dc(e):Be(e)&&!le(e)&&!Gp(e)?String(e):e,Dc=(t,e="")=>{var n;return Ss(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let mt;class Zp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=mt,!e&&mt&&(this.index=(mt.scopes||(mt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=mt;try{return mt=this,e()}finally{mt=n}}}on(){++this._on===1&&(this.prevScope=mt,mt=this)}off(){this._on>0&&--this._on===0&&(mt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function em(t){return new Zp(t)}function tm(){return mt}function $v(t,e=!1){mt&&mt.cleanups.push(t)}let xe;const Nc=new WeakSet;class nm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,mt&&mt.active&&mt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Nc.has(this)&&(Nc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||rm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,of(this),im(this);const e=xe,n=Yt;xe=this,Yt=!0;try{return this.fn()}finally{om(this),xe=e,Yt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)su(e);this.deps=this.depsTail=void 0,of(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Nc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){cl(this)&&this.run()}get dirty(){return cl(this)}}let sm=0,vi,Ei;function rm(t,e=!1){if(t.flags|=8,e){t.next=Ei,Ei=t;return}t.next=vi,vi=t}function tu(){sm++}function nu(){if(--sm>0)return;if(Ei){let e=Ei;for(Ei=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;vi;){let e=vi;for(vi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function im(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function om(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),su(s),jv(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function cl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(am(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function am(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===xi)||(t.globalVersion=xi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!cl(t))))return;t.flags|=2;const e=t.dep,n=xe,s=Yt;xe=t,Yt=!0;try{im(t);const r=t.fn(t._value);(e.version===0||us(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{xe=n,Yt=s,om(t),t.flags&=-3}}function su(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)su(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function jv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Yt=!0;const cm=[];function On(){cm.push(Yt),Yt=!1}function xn(){const t=cm.pop();Yt=t===void 0?!0:t}function of(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=xe;xe=void 0;try{e()}finally{xe=n}}}let xi=0;class qv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ru{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!xe||!Yt||xe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==xe)n=this.activeLink=new qv(xe,this),xe.deps?(n.prevDep=xe.depsTail,xe.depsTail.nextDep=n,xe.depsTail=n):xe.deps=xe.depsTail=n,lm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=xe.depsTail,n.nextDep=void 0,xe.depsTail.nextDep=n,xe.depsTail=n,xe.deps===n&&(xe.deps=s)}return n}trigger(e){this.version++,xi++,this.notify(e)}notify(e){tu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{nu()}}}function lm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)lm(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ta=new WeakMap,zs=Symbol(""),ll=Symbol(""),Mi=Symbol("");function _t(t,e,n){if(Yt&&xe){let s=ta.get(t);s||ta.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new ru),r.map=s,r.key=n),r.track()}}function Pn(t,e,n,s,r,i){const o=ta.get(t);if(!o){xi++;return}const c=l=>{l&&l.trigger()};if(tu(),e==="clear")o.forEach(c);else{const l=le(t),u=l&&Zl(n);if(l&&n==="length"){const f=Number(s);o.forEach((d,m)=>{(m==="length"||m===Mi||!Ss(m)&&m>=f)&&c(d)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(Mi)),e){case"add":l?u&&c(o.get("length")):(c(o.get(zs)),Tr(t)&&c(o.get(ll)));break;case"delete":l||(c(o.get(zs)),Tr(t)&&c(o.get(ll)));break;case"set":Tr(t)&&c(o.get(zs));break}}nu()}function Hv(t,e){const n=ta.get(t);return n&&n.get(e)}function ur(t){const e=Re(t);return e===t?e:(_t(e,"iterate",Mi),qt(t)?e:e.map(ct))}function Ma(t){return _t(t=Re(t),"iterate",Mi),t}const zv={__proto__:null,[Symbol.iterator](){return Oc(this,Symbol.iterator,ct)},concat(...t){return ur(this).concat(...t.map(e=>le(e)?ur(e):e))},entries(){return Oc(this,"entries",t=>(t[1]=ct(t[1]),t))},every(t,e){return An(this,"every",t,e,void 0,arguments)},filter(t,e){return An(this,"filter",t,e,n=>n.map(ct),arguments)},find(t,e){return An(this,"find",t,e,ct,arguments)},findIndex(t,e){return An(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return An(this,"findLast",t,e,ct,arguments)},findLastIndex(t,e){return An(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return An(this,"forEach",t,e,void 0,arguments)},includes(...t){return xc(this,"includes",t)},indexOf(...t){return xc(this,"indexOf",t)},join(t){return ur(this).join(t)},lastIndexOf(...t){return xc(this,"lastIndexOf",t)},map(t,e){return An(this,"map",t,e,void 0,arguments)},pop(){return ai(this,"pop")},push(...t){return ai(this,"push",t)},reduce(t,...e){return af(this,"reduce",t,e)},reduceRight(t,...e){return af(this,"reduceRight",t,e)},shift(){return ai(this,"shift")},some(t,e){return An(this,"some",t,e,void 0,arguments)},splice(...t){return ai(this,"splice",t)},toReversed(){return ur(this).toReversed()},toSorted(t){return ur(this).toSorted(t)},toSpliced(...t){return ur(this).toSpliced(...t)},unshift(...t){return ai(this,"unshift",t)},values(){return Oc(this,"values",ct)}};function Oc(t,e,n){const s=Ma(t),r=s[e]();return s!==t&&!qt(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const Wv=Array.prototype;function An(t,e,n,s,r,i){const o=Ma(t),c=o!==t&&!qt(t),l=o[e];if(l!==Wv[e]){const d=l.apply(t,i);return c?ct(d):d}let u=n;o!==t&&(c?u=function(d,m){return n.call(this,ct(d),m,t)}:n.length>2&&(u=function(d,m){return n.call(this,d,m,t)}));const f=l.call(o,u,s);return c&&r?r(f):f}function af(t,e,n,s){const r=Ma(t);let i=n;return r!==t&&(qt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,ct(c),l,t)}),r[e](i,...s)}function xc(t,e,n){const s=Re(t);_t(s,"iterate",Mi);const r=s[e](...n);return(r===-1||r===!1)&&au(n[0])?(n[0]=Re(n[0]),s[e](...n)):r}function ai(t,e,n=[]){On(),tu();const s=Re(t)[e].apply(t,n);return nu(),xn(),s}const Kv=Yl("__proto__,__v_isRef,__isVue"),um=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ss));function Gv(t){Ss(t)||(t=String(t));const e=Re(this);return _t(e,"has",t),e.hasOwnProperty(t)}class hm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?r0:mm:i?pm:dm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=le(e);if(!r){let l;if(o&&(l=zv[n]))return l;if(n==="hasOwnProperty")return Gv}const c=Reflect.get(e,n,Ke(e)?e:s);return(Ss(n)?um.has(n):Kv(n))||(r||_t(e,"get",n),i)?c:Ke(c)?o&&Zl(n)?c:c.value:Be(c)?r?_m(c):no(c):c}}class fm extends hm{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const l=ys(i);if(!qt(s)&&!ys(s)&&(i=Re(i),s=Re(s)),!le(e)&&Ke(i)&&!Ke(s))return l||(i.value=s),!0}const o=le(e)&&Zl(n)?Number(n)<e.length:Ce(e,n),c=Reflect.set(e,n,s,Ke(e)?e:r);return e===Re(r)&&(o?us(s,i)&&Pn(e,"set",n,s):Pn(e,"add",n,s)),c}deleteProperty(e,n){const s=Ce(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&Pn(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Ss(n)||!um.has(n))&&_t(e,"has",n),s}ownKeys(e){return _t(e,"iterate",le(e)?"length":zs),Reflect.ownKeys(e)}}class Qv extends hm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Yv=new fm,Xv=new Qv,Jv=new fm(!0);const ul=t=>t,Po=t=>Reflect.getPrototypeOf(t);function Zv(t,e,n){return function(...s){const r=this.__v_raw,i=Re(r),o=Tr(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=r[t](...s),f=n?ul:e?na:ct;return!e&&_t(i,"iterate",l?ll:zs),{next(){const{value:d,done:m}=u.next();return m?{value:d,done:m}:{value:c?[f(d[0]),f(d[1])]:f(d),done:m}},[Symbol.iterator](){return this}}}}function ko(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function e0(t,e){const n={get(r){const i=this.__v_raw,o=Re(i),c=Re(r);t||(us(r,c)&&_t(o,"get",r),_t(o,"get",c));const{has:l}=Po(o),u=e?ul:t?na:ct;if(l.call(o,r))return u(i.get(r));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&_t(Re(r),"iterate",zs),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=Re(i),c=Re(r);return t||(us(r,c)&&_t(o,"has",r),_t(o,"has",c)),r===c?i.has(r):i.has(r)||i.has(c)},forEach(r,i){const o=this,c=o.__v_raw,l=Re(c),u=e?ul:t?na:ct;return!t&&_t(l,"iterate",zs),c.forEach((f,d)=>r.call(i,u(f),u(d),o))}};return rt(n,t?{add:ko("add"),set:ko("set"),delete:ko("delete"),clear:ko("clear")}:{add(r){!e&&!qt(r)&&!ys(r)&&(r=Re(r));const i=Re(this);return Po(i).has.call(i,r)||(i.add(r),Pn(i,"add",r,r)),this},set(r,i){!e&&!qt(i)&&!ys(i)&&(i=Re(i));const o=Re(this),{has:c,get:l}=Po(o);let u=c.call(o,r);u||(r=Re(r),u=c.call(o,r));const f=l.call(o,r);return o.set(r,i),u?us(i,f)&&Pn(o,"set",r,i):Pn(o,"add",r,i),this},delete(r){const i=Re(this),{has:o,get:c}=Po(i);let l=o.call(i,r);l||(r=Re(r),l=o.call(i,r)),c&&c.call(i,r);const u=i.delete(r);return l&&Pn(i,"delete",r,void 0),u},clear(){const r=Re(this),i=r.size!==0,o=r.clear();return i&&Pn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Zv(r,t,e)}),n}function iu(t,e){const n=e0(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Ce(n,r)&&r in s?n:s,r,i)}const t0={get:iu(!1,!1)},n0={get:iu(!1,!0)},s0={get:iu(!0,!1)};const dm=new WeakMap,pm=new WeakMap,mm=new WeakMap,r0=new WeakMap;function i0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function o0(t){return t.__v_skip||!Object.isExtensible(t)?0:i0(Vv(t))}function no(t){return ys(t)?t:ou(t,!1,Yv,t0,dm)}function gm(t){return ou(t,!1,Jv,n0,pm)}function _m(t){return ou(t,!0,Xv,s0,mm)}function ou(t,e,n,s,r){if(!Be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=o0(t);if(i===0)return t;const o=r.get(t);if(o)return o;const c=new Proxy(t,i===2?s:n);return r.set(t,c),c}function hs(t){return ys(t)?hs(t.__v_raw):!!(t&&t.__v_isReactive)}function ys(t){return!!(t&&t.__v_isReadonly)}function qt(t){return!!(t&&t.__v_isShallow)}function au(t){return t?!!t.__v_raw:!1}function Re(t){const e=t&&t.__v_raw;return e?Re(e):t}function cu(t){return!Ce(t,"__v_skip")&&Object.isExtensible(t)&&Qp(t,"__v_skip",!0),t}const ct=t=>Be(t)?no(t):t,na=t=>Be(t)?_m(t):t;function Ke(t){return t?t.__v_isRef===!0:!1}function Me(t){return ym(t,!1)}function a0(t){return ym(t,!0)}function ym(t,e){return Ke(t)?t:new c0(t,e)}class c0{constructor(e,n){this.dep=new ru,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Re(e),this._value=n?e:ct(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||qt(e)||ys(e);e=s?e:Re(e),us(e,n)&&(this._rawValue=e,this._value=s?e:ct(e),this.dep.trigger())}}function yt(t){return Ke(t)?t.value:t}const l0={get:(t,e,n)=>e==="__v_raw"?t:yt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ke(r)&&!Ke(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function vm(t){return hs(t)?t:new Proxy(t,l0)}function u0(t){const e=le(t)?new Array(t.length):{};for(const n in t)e[n]=f0(t,n);return e}class h0{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Hv(Re(this._object),this._key)}}function f0(t,e,n){const s=t[e];return Ke(s)?s:new h0(t,e,n)}class d0{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ru(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=xi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&xe!==this)return rm(this,!0),!0}get value(){const e=this.dep.track();return am(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function p0(t,e,n=!1){let s,r;return he(t)?s=t:(s=t.get,r=t.set),new d0(s,r,n)}const Vo={},sa=new WeakMap;let Bs;function m0(t,e=!1,n=Bs){if(n){let s=sa.get(n);s||sa.set(n,s=[]),s.push(t)}}function g0(t,e,n=Oe){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:c,call:l}=n,u=z=>r?z:qt(z)||r===!1||r===0?kn(z,1):kn(z);let f,d,m,_,S=!1,k=!1;if(Ke(t)?(d=()=>t.value,S=qt(t)):hs(t)?(d=()=>u(t),S=!0):le(t)?(k=!0,S=t.some(z=>hs(z)||qt(z)),d=()=>t.map(z=>{if(Ke(z))return z.value;if(hs(z))return u(z);if(he(z))return l?l(z,2):z()})):he(t)?e?d=l?()=>l(t,2):t:d=()=>{if(m){On();try{m()}finally{xn()}}const z=Bs;Bs=f;try{return l?l(t,3,[_]):t(_)}finally{Bs=z}}:d=un,e&&r){const z=d,ee=r===!0?1/0:r;d=()=>kn(z(),ee)}const D=tm(),U=()=>{f.stop(),D&&D.active&&Jl(D.effects,f)};if(i&&e){const z=e;e=(...ee)=>{z(...ee),U()}}let B=k?new Array(t.length).fill(Vo):Vo;const q=z=>{if(!(!(f.flags&1)||!f.dirty&&!z))if(e){const ee=f.run();if(r||S||(k?ee.some((ie,R)=>us(ie,B[R])):us(ee,B))){m&&m();const ie=Bs;Bs=f;try{const R=[ee,B===Vo?void 0:k&&B[0]===Vo?[]:B,_];B=ee,l?l(e,3,R):e(...R)}finally{Bs=ie}}}else f.run()};return c&&c(q),f=new nm(d),f.scheduler=o?()=>o(q,!1):q,_=z=>m0(z,!1,f),m=f.onStop=()=>{const z=sa.get(f);if(z){if(l)l(z,4);else for(const ee of z)ee();sa.delete(f)}},e?s?q(!0):B=f.run():o?o(q.bind(null,!0),!0):f.run(),U.pause=f.pause.bind(f),U.resume=f.resume.bind(f),U.stop=U,U}function kn(t,e=1/0,n){if(e<=0||!Be(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ke(t))kn(t.value,e,n);else if(le(t))for(let s=0;s<t.length;s++)kn(t[s],e,n);else if(zp(t)||Tr(t))t.forEach(s=>{kn(s,e,n)});else if(Gp(t)){for(const s in t)kn(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&kn(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function so(t,e,n,s){try{return s?t(...s):t()}catch(r){La(r,e,n)}}function Xt(t,e,n,s){if(he(t)){const r=so(t,e,n,s);return r&&Wp(r)&&r.catch(i=>{La(i,e,n)}),r}if(le(t)){const r=[];for(let i=0;i<t.length;i++)r.push(Xt(t[i],e,n,s));return r}}function La(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Oe;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](t,l,u)===!1)return}c=c.parent}if(i){On(),so(i,null,10,[t,l,u]),xn();return}}_0(t,n,r,s,o)}function _0(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const Rt=[];let on=-1;const Ir=[];let es=null,fr=0;const Em=Promise.resolve();let ra=null;function lu(t){const e=ra||Em;return t?e.then(this?t.bind(this):t):e}function y0(t){let e=on+1,n=Rt.length;for(;e<n;){const s=e+n>>>1,r=Rt[s],i=Li(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function uu(t){if(!(t.flags&1)){const e=Li(t),n=Rt[Rt.length-1];!n||!(t.flags&2)&&e>=Li(n)?Rt.push(t):Rt.splice(y0(e),0,t),t.flags|=1,Tm()}}function Tm(){ra||(ra=Em.then(wm))}function v0(t){le(t)?Ir.push(...t):es&&t.id===-1?es.splice(fr+1,0,t):t.flags&1||(Ir.push(t),t.flags|=1),Tm()}function cf(t,e,n=on+1){for(;n<Rt.length;n++){const s=Rt[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Rt.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Im(t){if(Ir.length){const e=[...new Set(Ir)].sort((n,s)=>Li(n)-Li(s));if(Ir.length=0,es){es.push(...e);return}for(es=e,fr=0;fr<es.length;fr++){const n=es[fr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}es=null,fr=0}}const Li=t=>t.id==null?t.flags&2?-1:1/0:t.id;function wm(t){try{for(on=0;on<Rt.length;on++){const e=Rt[on];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),so(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;on<Rt.length;on++){const e=Rt[on];e&&(e.flags&=-2)}on=-1,Rt.length=0,Im(),ra=null,(Rt.length||Ir.length)&&wm()}}let Lt=null,Am=null;function ia(t){const e=Lt;return Lt=t,Am=t&&t.type.__scopeId||null,e}function cs(t,e=Lt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&vf(-1);const i=ia(e);let o;try{o=t(...r)}finally{ia(i),s._d&&vf(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ss(t,e){if(Lt===null)return t;const n=Ha(Lt),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,c,l=Oe]=e[r];i&&(he(i)&&(i={mounted:i,updated:i}),i.deep&&kn(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Ms(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const c=r[o];i&&(c.oldValue=i[o].value);let l=c.dir[s];l&&(On(),Xt(l,n,8,[t.el,c,t,e]),xn())}}const E0=Symbol("_vte"),bm=t=>t.__isTeleport,Cn=Symbol("_leaveCb"),Do=Symbol("_enterCb");function T0(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return jn(()=>{t.isMounted=!0}),Om(()=>{t.isUnmounting=!0}),t}const Bt=[Function,Array],Rm={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Bt,onEnter:Bt,onAfterEnter:Bt,onEnterCancelled:Bt,onBeforeLeave:Bt,onLeave:Bt,onAfterLeave:Bt,onLeaveCancelled:Bt,onBeforeAppear:Bt,onAppear:Bt,onAfterAppear:Bt,onAppearCancelled:Bt},Sm=t=>{const e=t.subTree;return e.component?Sm(e.component):e},I0={name:"BaseTransition",props:Rm,setup(t,{slots:e}){const n=pu(),s=T0();return()=>{const r=e.default&&km(e.default(),!0);if(!r||!r.length)return;const i=Cm(r),o=Re(t),{mode:c}=o;if(s.isLeaving)return Mc(i);const l=lf(i);if(!l)return Mc(i);let u=hl(l,o,s,n,d=>u=d);l.type!==St&&Fi(l,u);let f=n.subTree&&lf(n.subTree);if(f&&f.type!==St&&!js(l,f)&&Sm(n).type!==St){let d=hl(f,o,s,n);if(Fi(f,d),c==="out-in"&&l.type!==St)return s.isLeaving=!0,d.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,f=void 0},Mc(i);c==="in-out"&&l.type!==St?d.delayLeave=(m,_,S)=>{const k=Pm(s,f);k[String(f.key)]=f,m[Cn]=()=>{_(),m[Cn]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{S(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function Cm(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==St){e=n;break}}return e}const w0=I0;function Pm(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function hl(t,e,n,s,r){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:m,onLeave:_,onAfterLeave:S,onLeaveCancelled:k,onBeforeAppear:D,onAppear:U,onAfterAppear:B,onAppearCancelled:q}=e,z=String(t.key),ee=Pm(n,t),ie=(y,A)=>{y&&Xt(y,s,9,A)},R=(y,A)=>{const w=A[1];ie(y,A),le(y)?y.every(I=>I.length<=1)&&w():y.length<=1&&w()},v={mode:o,persisted:c,beforeEnter(y){let A=l;if(!n.isMounted)if(i)A=D||l;else return;y[Cn]&&y[Cn](!0);const w=ee[z];w&&js(t,w)&&w.el[Cn]&&w.el[Cn](),ie(A,[y])},enter(y){let A=u,w=f,I=d;if(!n.isMounted)if(i)A=U||u,w=B||f,I=q||d;else return;let E=!1;const Te=y[Do]=je=>{E||(E=!0,je?ie(I,[y]):ie(w,[y]),v.delayedLeave&&v.delayedLeave(),y[Do]=void 0)};A?R(A,[y,Te]):Te()},leave(y,A){const w=String(t.key);if(y[Do]&&y[Do](!0),n.isUnmounting)return A();ie(m,[y]);let I=!1;const E=y[Cn]=Te=>{I||(I=!0,A(),Te?ie(k,[y]):ie(S,[y]),y[Cn]=void 0,ee[w]===t&&delete ee[w])};ee[w]=t,_?R(_,[y,E]):E()},clone(y){const A=hl(y,e,n,s,r);return r&&r(A),A}};return v}function Mc(t){if(Fa(t))return t=vs(t),t.children=null,t}function lf(t){if(!Fa(t))return bm(t.type)&&t.children?Cm(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&he(n.default))return n.default()}}function Fi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Fi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function km(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===vt?(o.patchFlag&128&&r++,s=s.concat(km(o.children,e,c))):(e||o.type!==St)&&s.push(c!=null?vs(o,{key:c}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function Vm(t,e){return he(t)?rt({name:t.name},e,{setup:t}):t}function Dm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ti(t,e,n,s,r=!1){if(le(t)){t.forEach((S,k)=>Ti(S,e&&(le(e)?e[k]:e),n,s,r));return}if(Ii(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Ti(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?Ha(s.component):s.el,o=r?null:i,{i:c,r:l}=t,u=e&&e.r,f=c.refs===Oe?c.refs={}:c.refs,d=c.setupState,m=Re(d),_=d===Oe?Hp:S=>Ce(m,S);if(u!=null&&u!==l){if(Ge(u))f[u]=null,_(u)&&(d[u]=null);else if(Ke(u)){u.value=null;const S=e;S.k&&(f[S.k]=null)}}if(he(l))so(l,c,12,[o,f]);else{const S=Ge(l),k=Ke(l);if(S||k){const D=()=>{if(t.f){const U=S?_(l)?d[l]:f[l]:l.value;if(r)le(U)&&Jl(U,i);else if(le(U))U.includes(i)||U.push(i);else if(S)f[l]=[i],_(l)&&(d[l]=f[l]);else{const B=[i];l.value=B,t.k&&(f[t.k]=B)}}else S?(f[l]=o,_(l)&&(d[l]=o)):k&&(l.value=o,t.k&&(f[t.k]=o))};o?(D.id=-1,Mt(D,n)):D()}}}Oa().requestIdleCallback;Oa().cancelIdleCallback;const Ii=t=>!!t.type.__asyncLoader,Fa=t=>t.type.__isKeepAlive;function A0(t,e){Nm(t,"a",e)}function b0(t,e){Nm(t,"da",e)}function Nm(t,e,n=Tt){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ua(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Fa(r.parent.vnode)&&R0(s,e,n,r),r=r.parent}}function R0(t,e,n,s){const r=Ua(e,t,s,!0);Ba(()=>{Jl(s[e],r)},n)}function Ua(t,e,n=Tt,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{On();const c=ro(n),l=Xt(e,n,t,o);return c(),xn(),l});return s?r.unshift(i):r.push(i),i}}const $n=t=>(e,n=Tt)=>{(!Bi||t==="sp")&&Ua(t,(...s)=>e(...s),n)},S0=$n("bm"),jn=$n("m"),C0=$n("bu"),P0=$n("u"),Om=$n("bum"),Ba=$n("um"),k0=$n("sp"),V0=$n("rtg"),D0=$n("rtc");function N0(t,e=Tt){Ua("ec",t,e)}const O0="components";function oa(t,e){return M0(O0,t,!0,e)||t}const x0=Symbol.for("v-ndc");function M0(t,e,n=!0,s=!1){const r=Lt||Tt;if(r){const i=r.type;{const c=wE(i,!1);if(c&&(c===e||c===zt(e)||c===Na(zt(e))))return i}const o=uf(r[t]||i[t],e)||uf(r.appContext[t],e);return!o&&s?i:o}}function uf(t,e){return t&&(t[e]||t[zt(e)]||t[Na(zt(e))])}function wi(t,e,n,s){let r;const i=n,o=le(t);if(o||Ge(t)){const c=o&&hs(t);let l=!1,u=!1;c&&(l=!qt(t),u=ys(t),t=Ma(t)),r=new Array(t.length);for(let f=0,d=t.length;f<d;f++)r[f]=e(l?u?na(ct(t[f])):ct(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let c=0;c<t;c++)r[c]=e(c+1,c,void 0,i)}else if(Be(t))if(t[Symbol.iterator])r=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);r=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const f=c[l];r[l]=e(t[f],f,l,i)}}else r=[];return r}const fl=t=>t?tg(t)?Ha(t):fl(t.parent):null,Ai=rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>fl(t.parent),$root:t=>fl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Mm(t),$forceUpdate:t=>t.f||(t.f=()=>{uu(t.update)}),$nextTick:t=>t.n||(t.n=lu.bind(t.proxy)),$watch:t=>rE.bind(t)}),Lc=(t,e)=>t!==Oe&&!t.__isScriptSetup&&Ce(t,e),L0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Lc(s,e))return o[e]=1,s[e];if(r!==Oe&&Ce(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&Ce(u,e))return o[e]=3,i[e];if(n!==Oe&&Ce(n,e))return o[e]=4,n[e];dl&&(o[e]=0)}}const f=Ai[e];let d,m;if(f)return e==="$attrs"&&_t(t.attrs,"get",""),f(t);if((d=c.__cssModules)&&(d=d[e]))return d;if(n!==Oe&&Ce(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,Ce(m,e))return m[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Lc(r,e)?(r[e]=n,!0):s!==Oe&&Ce(s,e)?(s[e]=n,!0):Ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i,type:o}},c){let l,u;return!!(n[c]||t!==Oe&&c[0]!=="$"&&Ce(t,c)||Lc(e,c)||(l=i[0])&&Ce(l,c)||Ce(s,c)||Ce(Ai,c)||Ce(r.config.globalProperties,c)||(u=o.__cssModules)&&u[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function hf(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let dl=!0;function F0(t){const e=Mm(t),n=t.proxy,s=t.ctx;dl=!1,e.beforeCreate&&ff(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:c,provide:l,inject:u,created:f,beforeMount:d,mounted:m,beforeUpdate:_,updated:S,activated:k,deactivated:D,beforeDestroy:U,beforeUnmount:B,destroyed:q,unmounted:z,render:ee,renderTracked:ie,renderTriggered:R,errorCaptured:v,serverPrefetch:y,expose:A,inheritAttrs:w,components:I,directives:E,filters:Te}=e;if(u&&U0(u,s,null),o)for(const de in o){const Ie=o[de];he(Ie)&&(s[de]=Ie.bind(n))}if(r){const de=r.call(n,n);Be(de)&&(t.data=no(de))}if(dl=!0,i)for(const de in i){const Ie=i[de],Ct=he(Ie)?Ie.bind(n,n):he(Ie.get)?Ie.get.bind(n,n):un,tn=!he(Ie)&&he(Ie.set)?Ie.set.bind(n):un,Dt=kt({get:Ct,set:tn});Object.defineProperty(s,de,{enumerable:!0,configurable:!0,get:()=>Dt.value,set:it=>Dt.value=it})}if(c)for(const de in c)xm(c[de],s,n,de);if(l){const de=he(l)?l.call(n):l;Reflect.ownKeys(de).forEach(Ie=>{$o(Ie,de[Ie])})}f&&ff(f,t,"c");function ke(de,Ie){le(Ie)?Ie.forEach(Ct=>de(Ct.bind(n))):Ie&&de(Ie.bind(n))}if(ke(S0,d),ke(jn,m),ke(C0,_),ke(P0,S),ke(A0,k),ke(b0,D),ke(N0,v),ke(D0,ie),ke(V0,R),ke(Om,B),ke(Ba,z),ke(k0,y),le(A))if(A.length){const de=t.exposed||(t.exposed={});A.forEach(Ie=>{Object.defineProperty(de,Ie,{get:()=>n[Ie],set:Ct=>n[Ie]=Ct,enumerable:!0})})}else t.exposed||(t.exposed={});ee&&t.render===un&&(t.render=ee),w!=null&&(t.inheritAttrs=w),I&&(t.components=I),E&&(t.directives=E),y&&Dm(t)}function U0(t,e,n=un){le(t)&&(t=pl(t));for(const s in t){const r=t[s];let i;Be(r)?"default"in r?i=Ht(r.from||s,r.default,!0):i=Ht(r.from||s):i=Ht(r),Ke(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function ff(t,e,n){Xt(le(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function xm(t,e,n,s){let r=s.includes(".")?Qm(n,s):()=>n[s];if(Ge(t)){const i=e[t];he(i)&&wr(r,i)}else if(he(t))wr(r,t.bind(n));else if(Be(t))if(le(t))t.forEach(i=>xm(i,e,n,s));else{const i=he(t.handler)?t.handler.bind(n):e[t.handler];he(i)&&wr(r,i,t)}}function Mm(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(u=>aa(l,u,o,!0)),aa(l,e,o)),Be(e)&&i.set(e,l),l}function aa(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&aa(t,i,n,!0),r&&r.forEach(o=>aa(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const c=B0[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const B0={data:df,props:pf,emits:pf,methods:hi,computed:hi,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:hi,directives:hi,watch:j0,provide:df,inject:$0};function df(t,e){return e?t?function(){return rt(he(t)?t.call(this,this):t,he(e)?e.call(this,this):e)}:e:t}function $0(t,e){return hi(pl(t),pl(e))}function pl(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function bt(t,e){return t?[...new Set([].concat(t,e))]:e}function hi(t,e){return t?rt(Object.create(null),t,e):e}function pf(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:rt(Object.create(null),hf(t),hf(e??{})):e}function j0(t,e){if(!t)return e;if(!e)return t;const n=rt(Object.create(null),t);for(const s in e)n[s]=bt(t[s],e[s]);return n}function Lm(){return{app:null,config:{isNativeTag:Hp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let q0=0;function H0(t,e){return function(s,r=null){he(s)||(s=rt({},s)),r!=null&&!Be(r)&&(r=null);const i=Lm(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:q0++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:bE,get config(){return i.config},set config(f){},use(f,...d){return o.has(f)||(f&&he(f.install)?(o.add(f),f.install(u,...d)):he(f)&&(o.add(f),f(u,...d))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,d){return d?(i.components[f]=d,u):i.components[f]},directive(f,d){return d?(i.directives[f]=d,u):i.directives[f]},mount(f,d,m){if(!l){const _=u._ceVNode||we(s,r);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(_,f,m),l=!0,u._container=f,f.__vue_app__=u,Ha(_.component)}},onUnmount(f){c.push(f)},unmount(){l&&(Xt(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,d){return i.provides[f]=d,u},runWithContext(f){const d=Ws;Ws=u;try{return f()}finally{Ws=d}}};return u}}let Ws=null;function $o(t,e){if(Tt){let n=Tt.provides;const s=Tt.parent&&Tt.parent.provides;s===n&&(n=Tt.provides=Object.create(s)),n[t]=e}}function Ht(t,e,n=!1){const s=pu();if(s||Ws){let r=Ws?Ws._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&he(e)?e.call(s&&s.proxy):e}}function z0(){return!!(pu()||Ws)}const Fm={},Um=()=>Object.create(Fm),Bm=t=>Object.getPrototypeOf(t)===Fm;function W0(t,e,n,s=!1){const r={},i=Um();t.propsDefaults=Object.create(null),$m(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:gm(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function K0(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,c=Re(r),[l]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let d=0;d<f.length;d++){let m=f[d];if($a(t.emitsOptions,m))continue;const _=e[m];if(l)if(Ce(i,m))_!==i[m]&&(i[m]=_,u=!0);else{const S=zt(m);r[S]=ml(l,c,S,_,t,!1)}else _!==i[m]&&(i[m]=_,u=!0)}}}else{$m(t,e,r,i)&&(u=!0);let f;for(const d in c)(!e||!Ce(e,d)&&((f=Zs(d))===d||!Ce(e,f)))&&(l?n&&(n[d]!==void 0||n[f]!==void 0)&&(r[d]=ml(l,c,d,void 0,t,!0)):delete r[d]);if(i!==c)for(const d in i)(!e||!Ce(e,d))&&(delete i[d],u=!0)}u&&Pn(t.attrs,"set","")}function $m(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(yi(l))continue;const u=e[l];let f;r&&Ce(r,f=zt(l))?!i||!i.includes(f)?n[f]=u:(c||(c={}))[f]=u:$a(t.emitsOptions,l)||(!(l in s)||u!==s[l])&&(s[l]=u,o=!0)}if(i){const l=Re(n),u=c||Oe;for(let f=0;f<i.length;f++){const d=i[f];n[d]=ml(r,l,d,u[d],t,!Ce(u,d))}}return o}function ml(t,e,n,s,r,i){const o=t[n];if(o!=null){const c=Ce(o,"default");if(c&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&he(l)){const{propsDefaults:u}=r;if(n in u)s=u[n];else{const f=ro(r);s=u[n]=l.call(null,e),f()}}else s=l;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!c?s=!1:o[1]&&(s===""||s===Zs(n))&&(s=!0))}return s}const G0=new WeakMap;function jm(t,e,n=!1){const s=n?G0:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},c=[];let l=!1;if(!he(t)){const f=d=>{l=!0;const[m,_]=jm(d,e,!0);rt(o,m),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Be(t)&&s.set(t,Er),Er;if(le(i))for(let f=0;f<i.length;f++){const d=zt(i[f]);mf(d)&&(o[d]=Oe)}else if(i)for(const f in i){const d=zt(f);if(mf(d)){const m=i[f],_=o[d]=le(m)||he(m)?{type:m}:rt({},m),S=_.type;let k=!1,D=!0;if(le(S))for(let U=0;U<S.length;++U){const B=S[U],q=he(B)&&B.name;if(q==="Boolean"){k=!0;break}else q==="String"&&(D=!1)}else k=he(S)&&S.name==="Boolean";_[0]=k,_[1]=D,(k||Ce(_,"default"))&&c.push(d)}}const u=[o,c];return Be(t)&&s.set(t,u),u}function mf(t){return t[0]!=="$"&&!yi(t)}const hu=t=>t==="_"||t==="_ctx"||t==="$stable",fu=t=>le(t)?t.map(cn):[cn(t)],Q0=(t,e,n)=>{if(e._n)return e;const s=cs((...r)=>fu(e(...r)),n);return s._c=!1,s},qm=(t,e,n)=>{const s=t._ctx;for(const r in t){if(hu(r))continue;const i=t[r];if(he(i))e[r]=Q0(r,i,s);else if(i!=null){const o=fu(i);e[r]=()=>o}}},Hm=(t,e)=>{const n=fu(e);t.slots.default=()=>n},zm=(t,e,n)=>{for(const s in e)(n||!hu(s))&&(t[s]=e[s])},Y0=(t,e,n)=>{const s=t.slots=Um();if(t.vnode.shapeFlag&32){const r=e._;r?(zm(s,e,n),n&&Qp(s,"_",r,!0)):qm(e,s)}else e&&Hm(t,e)},X0=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Oe;if(s.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:zm(r,e,n):(i=!e.$stable,qm(e,r)),o=e}else e&&(Hm(t,e),o={default:1});if(i)for(const c in r)!hu(c)&&o[c]==null&&delete r[c]},Mt=hE;function J0(t){return Z0(t)}function Z0(t,e){const n=Oa();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:f,parentNode:d,nextSibling:m,setScopeId:_=un,insertStaticContent:S}=t,k=(T,b,C,M=null,F=null,N=null,G=void 0,H=null,$=!!b.dynamicChildren)=>{if(T===b)return;T&&!js(T,b)&&(M=x(T),it(T,F,N,!0),T=null),b.patchFlag===-2&&($=!1,b.dynamicChildren=null);const{type:j,ref:re,shapeFlag:Y}=b;switch(j){case ja:D(T,b,C,M);break;case St:U(T,b,C,M);break;case jo:T==null&&B(b,C,M,G);break;case vt:I(T,b,C,M,F,N,G,H,$);break;default:Y&1?ee(T,b,C,M,F,N,G,H,$):Y&6?E(T,b,C,M,F,N,G,H,$):(Y&64||Y&128)&&j.process(T,b,C,M,F,N,G,H,$,te)}re!=null&&F?Ti(re,T&&T.ref,N,b||T,!b):re==null&&T&&T.ref!=null&&Ti(T.ref,null,N,T,!0)},D=(T,b,C,M)=>{if(T==null)s(b.el=c(b.children),C,M);else{const F=b.el=T.el;b.children!==T.children&&u(F,b.children)}},U=(T,b,C,M)=>{T==null?s(b.el=l(b.children||""),C,M):b.el=T.el},B=(T,b,C,M)=>{[T.el,T.anchor]=S(T.children,b,C,M,T.el,T.anchor)},q=({el:T,anchor:b},C,M)=>{let F;for(;T&&T!==b;)F=m(T),s(T,C,M),T=F;s(b,C,M)},z=({el:T,anchor:b})=>{let C;for(;T&&T!==b;)C=m(T),r(T),T=C;r(b)},ee=(T,b,C,M,F,N,G,H,$)=>{b.type==="svg"?G="svg":b.type==="math"&&(G="mathml"),T==null?ie(b,C,M,F,N,G,H,$):y(T,b,F,N,G,H,$)},ie=(T,b,C,M,F,N,G,H)=>{let $,j;const{props:re,shapeFlag:Y,transition:se,dirs:oe}=T;if($=T.el=o(T.type,N,re&&re.is,re),Y&8?f($,T.children):Y&16&&v(T.children,$,null,M,F,Fc(T,N),G,H),oe&&Ms(T,null,M,"created"),R($,T,T.scopeId,G,M),re){for(const De in re)De!=="value"&&!yi(De)&&i($,De,null,re[De],N,M);"value"in re&&i($,"value",null,re.value,N),(j=re.onVnodeBeforeMount)&&rn(j,M,T)}oe&&Ms(T,null,M,"beforeMount");const _e=eE(F,se);_e&&se.beforeEnter($),s($,b,C),((j=re&&re.onVnodeMounted)||_e||oe)&&Mt(()=>{j&&rn(j,M,T),_e&&se.enter($),oe&&Ms(T,null,M,"mounted")},F)},R=(T,b,C,M,F)=>{if(C&&_(T,C),M)for(let N=0;N<M.length;N++)_(T,M[N]);if(F){let N=F.subTree;if(b===N||Xm(N.type)&&(N.ssContent===b||N.ssFallback===b)){const G=F.vnode;R(T,G,G.scopeId,G.slotScopeIds,F.parent)}}},v=(T,b,C,M,F,N,G,H,$=0)=>{for(let j=$;j<T.length;j++){const re=T[j]=H?ts(T[j]):cn(T[j]);k(null,re,b,C,M,F,N,G,H)}},y=(T,b,C,M,F,N,G)=>{const H=b.el=T.el;let{patchFlag:$,dynamicChildren:j,dirs:re}=b;$|=T.patchFlag&16;const Y=T.props||Oe,se=b.props||Oe;let oe;if(C&&Ls(C,!1),(oe=se.onVnodeBeforeUpdate)&&rn(oe,C,b,T),re&&Ms(b,T,C,"beforeUpdate"),C&&Ls(C,!0),(Y.innerHTML&&se.innerHTML==null||Y.textContent&&se.textContent==null)&&f(H,""),j?A(T.dynamicChildren,j,H,C,M,Fc(b,F),N):G||Ie(T,b,H,null,C,M,Fc(b,F),N,!1),$>0){if($&16)w(H,Y,se,C,F);else if($&2&&Y.class!==se.class&&i(H,"class",null,se.class,F),$&4&&i(H,"style",Y.style,se.style,F),$&8){const _e=b.dynamicProps;for(let De=0;De<_e.length;De++){const be=_e[De],ft=Y[be],dt=se[be];(dt!==ft||be==="value")&&i(H,be,ft,dt,F,C)}}$&1&&T.children!==b.children&&f(H,b.children)}else!G&&j==null&&w(H,Y,se,C,F);((oe=se.onVnodeUpdated)||re)&&Mt(()=>{oe&&rn(oe,C,b,T),re&&Ms(b,T,C,"updated")},M)},A=(T,b,C,M,F,N,G)=>{for(let H=0;H<b.length;H++){const $=T[H],j=b[H],re=$.el&&($.type===vt||!js($,j)||$.shapeFlag&198)?d($.el):C;k($,j,re,null,M,F,N,G,!0)}},w=(T,b,C,M,F)=>{if(b!==C){if(b!==Oe)for(const N in b)!yi(N)&&!(N in C)&&i(T,N,b[N],null,F,M);for(const N in C){if(yi(N))continue;const G=C[N],H=b[N];G!==H&&N!=="value"&&i(T,N,H,G,F,M)}"value"in C&&i(T,"value",b.value,C.value,F)}},I=(T,b,C,M,F,N,G,H,$)=>{const j=b.el=T?T.el:c(""),re=b.anchor=T?T.anchor:c("");let{patchFlag:Y,dynamicChildren:se,slotScopeIds:oe}=b;oe&&(H=H?H.concat(oe):oe),T==null?(s(j,C,M),s(re,C,M),v(b.children||[],C,re,F,N,G,H,$)):Y>0&&Y&64&&se&&T.dynamicChildren?(A(T.dynamicChildren,se,C,F,N,G,H),(b.key!=null||F&&b===F.subTree)&&Wm(T,b,!0)):Ie(T,b,C,re,F,N,G,H,$)},E=(T,b,C,M,F,N,G,H,$)=>{b.slotScopeIds=H,T==null?b.shapeFlag&512?F.ctx.activate(b,C,M,G,$):Te(b,C,M,F,N,G,$):je(T,b,$)},Te=(T,b,C,M,F,N,G)=>{const H=T.component=yE(T,M,F);if(Fa(T)&&(H.ctx.renderer=te),vE(H,!1,G),H.asyncDep){if(F&&F.registerDep(H,ke,G),!T.el){const $=H.subTree=we(St);U(null,$,b,C),T.placeholder=$.el}}else ke(H,T,b,C,F,N,G)},je=(T,b,C)=>{const M=b.component=T.component;if(lE(T,b,C))if(M.asyncDep&&!M.asyncResolved){de(M,b,C);return}else M.next=b,M.update();else b.el=T.el,M.vnode=b},ke=(T,b,C,M,F,N,G)=>{const H=()=>{if(T.isMounted){let{next:Y,bu:se,u:oe,parent:_e,vnode:De}=T;{const Ot=Km(T);if(Ot){Y&&(Y.el=De.el,de(T,Y,G)),Ot.asyncDep.then(()=>{T.isUnmounted||H()});return}}let be=Y,ft;Ls(T,!1),Y?(Y.el=De.el,de(T,Y,G)):Y=De,se&&Bo(se),(ft=Y.props&&Y.props.onVnodeBeforeUpdate)&&rn(ft,_e,Y,De),Ls(T,!0);const dt=_f(T),Nt=T.subTree;T.subTree=dt,k(Nt,dt,d(Nt.el),x(Nt),T,F,N),Y.el=dt.el,be===null&&uE(T,dt.el),oe&&Mt(oe,F),(ft=Y.props&&Y.props.onVnodeUpdated)&&Mt(()=>rn(ft,_e,Y,De),F)}else{let Y;const{el:se,props:oe}=b,{bm:_e,m:De,parent:be,root:ft,type:dt}=T,Nt=Ii(b);Ls(T,!1),_e&&Bo(_e),!Nt&&(Y=oe&&oe.onVnodeBeforeMount)&&rn(Y,be,b),Ls(T,!0);{ft.ce&&ft.ce._def.shadowRoot!==!1&&ft.ce._injectChildStyle(dt);const Ot=T.subTree=_f(T);k(null,Ot,C,M,T,F,N),b.el=Ot.el}if(De&&Mt(De,F),!Nt&&(Y=oe&&oe.onVnodeMounted)){const Ot=b;Mt(()=>rn(Y,be,Ot),F)}(b.shapeFlag&256||be&&Ii(be.vnode)&&be.vnode.shapeFlag&256)&&T.a&&Mt(T.a,F),T.isMounted=!0,b=C=M=null}};T.scope.on();const $=T.effect=new nm(H);T.scope.off();const j=T.update=$.run.bind($),re=T.job=$.runIfDirty.bind($);re.i=T,re.id=T.uid,$.scheduler=()=>uu(re),Ls(T,!0),j()},de=(T,b,C)=>{b.component=T;const M=T.vnode.props;T.vnode=b,T.next=null,K0(T,b.props,M,C),X0(T,b.children,C),On(),cf(T),xn()},Ie=(T,b,C,M,F,N,G,H,$=!1)=>{const j=T&&T.children,re=T?T.shapeFlag:0,Y=b.children,{patchFlag:se,shapeFlag:oe}=b;if(se>0){if(se&128){tn(j,Y,C,M,F,N,G,H,$);return}else if(se&256){Ct(j,Y,C,M,F,N,G,H,$);return}}oe&8?(re&16&&ht(j,F,N),Y!==j&&f(C,Y)):re&16?oe&16?tn(j,Y,C,M,F,N,G,H,$):ht(j,F,N,!0):(re&8&&f(C,""),oe&16&&v(Y,C,M,F,N,G,H,$))},Ct=(T,b,C,M,F,N,G,H,$)=>{T=T||Er,b=b||Er;const j=T.length,re=b.length,Y=Math.min(j,re);let se;for(se=0;se<Y;se++){const oe=b[se]=$?ts(b[se]):cn(b[se]);k(T[se],oe,C,null,F,N,G,H,$)}j>re?ht(T,F,N,!0,!1,Y):v(b,C,M,F,N,G,H,$,Y)},tn=(T,b,C,M,F,N,G,H,$)=>{let j=0;const re=b.length;let Y=T.length-1,se=re-1;for(;j<=Y&&j<=se;){const oe=T[j],_e=b[j]=$?ts(b[j]):cn(b[j]);if(js(oe,_e))k(oe,_e,C,null,F,N,G,H,$);else break;j++}for(;j<=Y&&j<=se;){const oe=T[Y],_e=b[se]=$?ts(b[se]):cn(b[se]);if(js(oe,_e))k(oe,_e,C,null,F,N,G,H,$);else break;Y--,se--}if(j>Y){if(j<=se){const oe=se+1,_e=oe<re?b[oe].el:M;for(;j<=se;)k(null,b[j]=$?ts(b[j]):cn(b[j]),C,_e,F,N,G,H,$),j++}}else if(j>se)for(;j<=Y;)it(T[j],F,N,!0),j++;else{const oe=j,_e=j,De=new Map;for(j=_e;j<=se;j++){const ot=b[j]=$?ts(b[j]):cn(b[j]);ot.key!=null&&De.set(ot.key,j)}let be,ft=0;const dt=se-_e+1;let Nt=!1,Ot=0;const Kt=new Array(dt);for(j=0;j<dt;j++)Kt[j]=0;for(j=oe;j<=Y;j++){const ot=T[j];if(ft>=dt){it(ot,F,N,!0);continue}let tt;if(ot.key!=null)tt=De.get(ot.key);else for(be=_e;be<=se;be++)if(Kt[be-_e]===0&&js(ot,b[be])){tt=be;break}tt===void 0?it(ot,F,N,!0):(Kt[tt-_e]=j+1,tt>=Ot?Ot=tt:Nt=!0,k(ot,b[tt],C,null,F,N,G,H,$),ft++)}const or=Nt?tE(Kt):Er;for(be=or.length-1,j=dt-1;j>=0;j--){const ot=_e+j,tt=b[ot],Wr=b[ot+1],Vs=ot+1<re?Wr.el||Wr.placeholder:M;Kt[j]===0?k(null,tt,C,Vs,F,N,G,H,$):Nt&&(be<0||j!==or[be]?Dt(tt,C,Vs,2):be--)}}},Dt=(T,b,C,M,F=null)=>{const{el:N,type:G,transition:H,children:$,shapeFlag:j}=T;if(j&6){Dt(T.component.subTree,b,C,M);return}if(j&128){T.suspense.move(b,C,M);return}if(j&64){G.move(T,b,C,te);return}if(G===vt){s(N,b,C);for(let Y=0;Y<$.length;Y++)Dt($[Y],b,C,M);s(T.anchor,b,C);return}if(G===jo){q(T,b,C);return}if(M!==2&&j&1&&H)if(M===0)H.beforeEnter(N),s(N,b,C),Mt(()=>H.enter(N),F);else{const{leave:Y,delayLeave:se,afterLeave:oe}=H,_e=()=>{T.ctx.isUnmounted?r(N):s(N,b,C)},De=()=>{N._isLeaving&&N[Cn](!0),Y(N,()=>{_e(),oe&&oe()})};se?se(N,_e,De):De()}else s(N,b,C)},it=(T,b,C,M=!1,F=!1)=>{const{type:N,props:G,ref:H,children:$,dynamicChildren:j,shapeFlag:re,patchFlag:Y,dirs:se,cacheIndex:oe}=T;if(Y===-2&&(F=!1),H!=null&&(On(),Ti(H,null,C,T,!0),xn()),oe!=null&&(b.renderCache[oe]=void 0),re&256){b.ctx.deactivate(T);return}const _e=re&1&&se,De=!Ii(T);let be;if(De&&(be=G&&G.onVnodeBeforeUnmount)&&rn(be,b,T),re&6)qn(T.component,C,M);else{if(re&128){T.suspense.unmount(C,M);return}_e&&Ms(T,null,b,"beforeUnmount"),re&64?T.type.remove(T,b,C,te,M):j&&!j.hasOnce&&(N!==vt||Y>0&&Y&64)?ht(j,b,C,!1,!0):(N===vt&&Y&384||!F&&re&16)&&ht($,b,C),M&&wn(T)}(De&&(be=G&&G.onVnodeUnmounted)||_e)&&Mt(()=>{be&&rn(be,b,T),_e&&Ms(T,null,b,"unmounted")},C)},wn=T=>{const{type:b,el:C,anchor:M,transition:F}=T;if(b===vt){Wt(C,M);return}if(b===jo){z(T);return}const N=()=>{r(C),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(T.shapeFlag&1&&F&&!F.persisted){const{leave:G,delayLeave:H}=F,$=()=>G(C,N);H?H(T.el,N,$):$()}else N()},Wt=(T,b)=>{let C;for(;T!==b;)C=m(T),r(T),T=C;r(b)},qn=(T,b,C)=>{const{bum:M,scope:F,job:N,subTree:G,um:H,m:$,a:j}=T;gf($),gf(j),M&&Bo(M),F.stop(),N&&(N.flags|=8,it(G,T,b,C)),H&&Mt(H,b),Mt(()=>{T.isUnmounted=!0},b)},ht=(T,b,C,M=!1,F=!1,N=0)=>{for(let G=N;G<T.length;G++)it(T[G],b,C,M,F)},x=T=>{if(T.shapeFlag&6)return x(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const b=m(T.anchor||T.el),C=b&&b[E0];return C?m(C):b};let J=!1;const Q=(T,b,C)=>{T==null?b._vnode&&it(b._vnode,null,null,!0):k(b._vnode||null,T,b,null,null,null,C),b._vnode=T,J||(J=!0,cf(),Im(),J=!1)},te={p:k,um:it,m:Dt,r:wn,mt:Te,mc:v,pc:Ie,pbc:A,n:x,o:t};return{render:Q,hydrate:void 0,createApp:H0(Q)}}function Fc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ls({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function eE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Wm(t,e,n=!1){const s=t.children,r=e.children;if(le(s)&&le(r))for(let i=0;i<s.length;i++){const o=s[i];let c=r[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=r[i]=ts(r[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Wm(o,c)),c.type===ja&&c.patchFlag!==-1&&(c.el=o.el),c.type===St&&!c.el&&(c.el=o.el)}}function tE(t){const e=t.slice(),n=[0];let s,r,i,o,c;const l=t.length;for(s=0;s<l;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Km(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Km(e)}function gf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const nE=Symbol.for("v-scx"),sE=()=>Ht(nE);function wr(t,e,n){return Gm(t,e,n)}function Gm(t,e,n=Oe){const{immediate:s,deep:r,flush:i,once:o}=n,c=rt({},n),l=e&&s||!e&&i!=="post";let u;if(Bi){if(i==="sync"){const _=sE();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=un,_.resume=un,_.pause=un,_}}const f=Tt;c.call=(_,S,k)=>Xt(_,f,S,k);let d=!1;i==="post"?c.scheduler=_=>{Mt(_,f&&f.suspense)}:i!=="sync"&&(d=!0,c.scheduler=(_,S)=>{S?_():uu(_)}),c.augmentJob=_=>{e&&(_.flags|=4),d&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const m=g0(t,e,c);return Bi&&(u?u.push(m):l&&m()),m}function rE(t,e,n){const s=this.proxy,r=Ge(t)?t.includes(".")?Qm(s,t):()=>s[t]:t.bind(s,s);let i;he(e)?i=e:(i=e.handler,n=e);const o=ro(this),c=Gm(r,i.bind(s),n);return o(),c}function Qm(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const iE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${zt(e)}Modifiers`]||t[`${Zs(e)}Modifiers`];function oE(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Oe;let r=n;const i=e.startsWith("update:"),o=i&&iE(s,e.slice(7));o&&(o.trim&&(r=n.map(f=>Ge(f)?f.trim():f)),o.number&&(r=n.map(al)));let c,l=s[c=Vc(e)]||s[c=Vc(zt(e))];!l&&i&&(l=s[c=Vc(Zs(e))]),l&&Xt(l,t,6,r);const u=s[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Xt(u,t,6,r)}}function Ym(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},c=!1;if(!he(t)){const l=u=>{const f=Ym(u,e,!0);f&&(c=!0,rt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Be(t)&&s.set(t,null),null):(le(i)?i.forEach(l=>o[l]=null):rt(o,i),Be(t)&&s.set(t,o),o)}function $a(t,e){return!t||!ka(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ce(t,e[0].toLowerCase()+e.slice(1))||Ce(t,Zs(e))||Ce(t,e))}function _f(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:f,props:d,data:m,setupState:_,ctx:S,inheritAttrs:k}=t,D=ia(t);let U,B;try{if(n.shapeFlag&4){const z=r||s,ee=z;U=cn(u.call(ee,z,f,d,_,m,S)),B=c}else{const z=e;U=cn(z.length>1?z(d,{attrs:c,slots:o,emit:l}):z(d,null)),B=e.props?c:aE(c)}}catch(z){bi.length=0,La(z,t,1),U=we(St)}let q=U;if(B&&k!==!1){const z=Object.keys(B),{shapeFlag:ee}=q;z.length&&ee&7&&(i&&z.some(Xl)&&(B=cE(B,i)),q=vs(q,B,!1,!0))}return n.dirs&&(q=vs(q,null,!1,!0),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&Fi(q,n.transition),U=q,ia(D),U}const aE=t=>{let e;for(const n in t)(n==="class"||n==="style"||ka(n))&&((e||(e={}))[n]=t[n]);return e},cE=(t,e)=>{const n={};for(const s in t)(!Xl(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function lE(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?yf(s,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let d=0;d<f.length;d++){const m=f[d];if(o[m]!==s[m]&&!$a(u,m))return!0}}}else return(r||c)&&(!c||!c.$stable)?!0:s===o?!1:s?o?yf(s,o,u):!0:!!o;return!1}function yf(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!$a(n,i))return!0}return!1}function uE({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Xm=t=>t.__isSuspense;function hE(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):v0(t)}const vt=Symbol.for("v-fgt"),ja=Symbol.for("v-txt"),St=Symbol.for("v-cmt"),jo=Symbol.for("v-stc"),bi=[];let Ft=null;function pe(t=!1){bi.push(Ft=t?null:[])}function fE(){bi.pop(),Ft=bi[bi.length-1]||null}let Ui=1;function vf(t,e=!1){Ui+=t,t<0&&Ft&&e&&(Ft.hasOnce=!0)}function Jm(t){return t.dynamicChildren=Ui>0?Ft||Er:null,fE(),Ui>0&&Ft&&Ft.push(t),t}function ge(t,e,n,s,r,i){return Jm(W(t,e,n,s,r,i,!0))}function qa(t,e,n,s,r){return Jm(we(t,e,n,s,r,!0))}function ca(t){return t?t.__v_isVNode===!0:!1}function js(t,e){return t.type===e.type&&t.key===e.key}const Zm=({key:t})=>t??null,qo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ge(t)||Ke(t)||he(t)?{i:Lt,r:t,k:e,f:!!n}:t:null);function W(t,e=null,n=null,s=0,r=null,i=t===vt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Zm(e),ref:e&&qo(e),scopeId:Am,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Lt};return c?(du(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ge(n)?8:16),Ui>0&&!o&&Ft&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ft.push(l),l}const we=dE;function dE(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===x0)&&(t=St),ca(t)){const c=vs(t,e,!0);return n&&du(c,n),Ui>0&&!i&&Ft&&(c.shapeFlag&6?Ft[Ft.indexOf(t)]=c:Ft.push(c)),c.patchFlag=-2,c}if(AE(t)&&(t=t.__vccOpts),e){e=pE(e);let{class:c,style:l}=e;c&&!Ge(c)&&(e.class=xa(c)),Be(l)&&(au(l)&&!le(l)&&(l=rt({},l)),e.style=eu(l))}const o=Ge(t)?1:Xm(t)?128:bm(t)?64:Be(t)?4:he(t)?2:0;return W(t,e,n,s,r,o,i,!0)}function pE(t){return t?au(t)||Bm(t)?rt({},t):t:null}function vs(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?mE(r||{},e):r,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Zm(u),ref:e&&e.ref?n&&i?le(i)?i.concat(qo(e)):[i,qo(e)]:qo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==vt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&vs(t.ssContent),ssFallback:t.ssFallback&&vs(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&Fi(f,l.clone(f)),f}function ln(t=" ",e=0){return we(ja,null,t,e)}function eg(t,e){const n=we(jo,null,t);return n.staticCount=e,n}function Mn(t="",e=!1){return e?(pe(),qa(St,null,t)):we(St,null,t)}function cn(t){return t==null||typeof t=="boolean"?we(St):le(t)?we(vt,null,t.slice()):ca(t)?ts(t):we(ja,null,String(t))}function ts(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:vs(t)}function du(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),du(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Bm(e)?e._ctx=Lt:r===3&&Lt&&(Lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else he(e)?(e={default:e,_ctx:Lt},n=32):(e=String(e),s&64?(n=16,e=[ln(e)]):n=8);t.children=e,t.shapeFlag|=n}function mE(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=xa([e.class,s.class]));else if(r==="style")e.style=eu([e.style,s.style]);else if(ka(r)){const i=e[r],o=s[r];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function rn(t,e,n,s=null){Xt(t,e,7,[n,s])}const gE=Lm();let _E=0;function yE(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||gE,i={uid:_E++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Zp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jm(s,r),emitsOptions:Ym(s,r),emit:null,emitted:null,propsDefaults:Oe,inheritAttrs:s.inheritAttrs,ctx:Oe,data:Oe,props:Oe,attrs:Oe,slots:Oe,refs:Oe,setupState:Oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=oE.bind(null,i),t.ce&&t.ce(i),i}let Tt=null;const pu=()=>Tt||Lt;let la,gl;{const t=Oa(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};la=e("__VUE_INSTANCE_SETTERS__",n=>Tt=n),gl=e("__VUE_SSR_SETTERS__",n=>Bi=n)}const ro=t=>{const e=Tt;return la(t),t.scope.on(),()=>{t.scope.off(),la(e)}},Ef=()=>{Tt&&Tt.scope.off(),la(null)};function tg(t){return t.vnode.shapeFlag&4}let Bi=!1;function vE(t,e=!1,n=!1){e&&gl(e);const{props:s,children:r}=t.vnode,i=tg(t);W0(t,s,i,e),Y0(t,r,n||e);const o=i?EE(t,e):void 0;return e&&gl(!1),o}function EE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,L0);const{setup:s}=n;if(s){On();const r=t.setupContext=s.length>1?IE(t):null,i=ro(t),o=so(s,t,0,[t.props,r]),c=Wp(o);if(xn(),i(),(c||t.sp)&&!Ii(t)&&Dm(t),c){if(o.then(Ef,Ef),e)return o.then(l=>{Tf(t,l)}).catch(l=>{La(l,t,0)});t.asyncDep=o}else Tf(t,o)}else ng(t)}function Tf(t,e,n){he(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Be(e)&&(t.setupState=vm(e)),ng(t)}function ng(t,e,n){const s=t.type;t.render||(t.render=s.render||un);{const r=ro(t);On();try{F0(t)}finally{xn(),r()}}}const TE={get(t,e){return _t(t,"get",""),t[e]}};function IE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,TE),slots:t.slots,emit:t.emit,expose:e}}function Ha(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(vm(cu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ai)return Ai[n](t)},has(e,n){return n in e||n in Ai}})):t.proxy}function wE(t,e=!0){return he(t)?t.displayName||t.name:t.name||e&&t.__name}function AE(t){return he(t)&&"__vccOpts"in t}const kt=(t,e)=>p0(t,e,Bi);function mu(t,e,n){const s=arguments.length;return s===2?Be(e)&&!le(e)?ca(e)?we(t,null,[e]):we(t,e):we(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ca(n)&&(n=[n]),we(t,e,n))}const bE="3.5.19";/**
* @vue/runtime-dom v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _l;const If=typeof window<"u"&&window.trustedTypes;if(If)try{_l=If.createPolicy("vue",{createHTML:t=>t})}catch{}const sg=_l?t=>_l.createHTML(t):t=>t,RE="http://www.w3.org/2000/svg",SE="http://www.w3.org/1998/Math/MathML",Sn=typeof document<"u"?document:null,wf=Sn&&Sn.createElement("template"),CE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Sn.createElementNS(RE,t):e==="mathml"?Sn.createElementNS(SE,t):n?Sn.createElement(t,{is:n}):Sn.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Sn.createTextNode(t),createComment:t=>Sn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Sn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{wf.innerHTML=sg(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const c=wf.content;if(s==="svg"||s==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Yn="transition",ci="animation",$i=Symbol("_vtc"),rg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},PE=rt({},Rm,rg),kE=t=>(t.displayName="Transition",t.props=PE,t),ig=kE((t,{slots:e})=>mu(w0,VE(t),e)),Fs=(t,e=[])=>{le(t)?t.forEach(n=>n(...e)):t&&t(...e)},Af=t=>t?le(t)?t.some(e=>e.length>1):t.length>1:!1;function VE(t){const e={};for(const I in t)I in rg||(e[I]=t[I]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:f=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,S=DE(r),k=S&&S[0],D=S&&S[1],{onBeforeEnter:U,onEnter:B,onEnterCancelled:q,onLeave:z,onLeaveCancelled:ee,onBeforeAppear:ie=U,onAppear:R=B,onAppearCancelled:v=q}=e,y=(I,E,Te,je)=>{I._enterCancelled=je,Us(I,E?f:c),Us(I,E?u:o),Te&&Te()},A=(I,E)=>{I._isLeaving=!1,Us(I,d),Us(I,_),Us(I,m),E&&E()},w=I=>(E,Te)=>{const je=I?R:B,ke=()=>y(E,I,Te);Fs(je,[E,ke]),bf(()=>{Us(E,I?l:i),bn(E,I?f:c),Af(je)||Rf(E,s,k,ke)})};return rt(e,{onBeforeEnter(I){Fs(U,[I]),bn(I,i),bn(I,o)},onBeforeAppear(I){Fs(ie,[I]),bn(I,l),bn(I,u)},onEnter:w(!1),onAppear:w(!0),onLeave(I,E){I._isLeaving=!0;const Te=()=>A(I,E);bn(I,d),I._enterCancelled?(bn(I,m),Pf()):(Pf(),bn(I,m)),bf(()=>{I._isLeaving&&(Us(I,d),bn(I,_),Af(z)||Rf(I,s,D,Te))}),Fs(z,[I,Te])},onEnterCancelled(I){y(I,!1,void 0,!0),Fs(q,[I])},onAppearCancelled(I){y(I,!0,void 0,!0),Fs(v,[I])},onLeaveCancelled(I){A(I),Fs(ee,[I])}})}function DE(t){if(t==null)return null;if(Be(t))return[Uc(t.enter),Uc(t.leave)];{const e=Uc(t);return[e,e]}}function Uc(t){return Ov(t)}function bn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[$i]||(t[$i]=new Set)).add(e)}function Us(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[$i];n&&(n.delete(e),n.size||(t[$i]=void 0))}function bf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let NE=0;function Rf(t,e,n,s){const r=t._endId=++NE,i=()=>{r===t._endId&&s()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=OE(t,e);if(!o)return s();const u=o+"end";let f=0;const d=()=>{t.removeEventListener(u,m),i()},m=_=>{_.target===t&&++f>=l&&d()};setTimeout(()=>{f<l&&d()},c+1),t.addEventListener(u,m)}function OE(t,e){const n=window.getComputedStyle(t),s=S=>(n[S]||"").split(", "),r=s(`${Yn}Delay`),i=s(`${Yn}Duration`),o=Sf(r,i),c=s(`${ci}Delay`),l=s(`${ci}Duration`),u=Sf(c,l);let f=null,d=0,m=0;e===Yn?o>0&&(f=Yn,d=o,m=i.length):e===ci?u>0&&(f=ci,d=u,m=l.length):(d=Math.max(o,u),f=d>0?o>u?Yn:ci:null,m=f?f===Yn?i.length:l.length:0);const _=f===Yn&&/\b(transform|all)(,|$)/.test(s(`${Yn}Property`).toString());return{type:f,timeout:d,propCount:m,hasTransform:_}}function Sf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Cf(n)+Cf(t[s])))}function Cf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Pf(){return document.body.offsetHeight}function xE(t,e,n){const s=t[$i];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ua=Symbol("_vod"),og=Symbol("_vsh"),ME={beforeMount(t,{value:e},{transition:n}){t[ua]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):li(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),li(t,!0),s.enter(t)):s.leave(t,()=>{li(t,!1)}):li(t,e))},beforeUnmount(t,{value:e}){li(t,e)}};function li(t,e){t.style.display=e?t[ua]:"none",t[og]=!e}const LE=Symbol(""),FE=/(^|;)\s*display\s*:/;function UE(t,e,n){const s=t.style,r=Ge(n);let i=!1;if(n&&!r){if(e)if(Ge(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Ho(s,c,"")}else for(const o in e)n[o]==null&&Ho(s,o,"");for(const o in n)o==="display"&&(i=!0),Ho(s,o,n[o])}else if(r){if(e!==n){const o=s[LE];o&&(n+=";"+o),s.cssText=n,i=FE.test(n)}}else e&&t.removeAttribute("style");ua in t&&(t[ua]=i?s.display:"",t[og]&&(s.display="none"))}const kf=/\s*!important$/;function Ho(t,e,n){if(le(n))n.forEach(s=>Ho(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=BE(t,e);kf.test(n)?t.setProperty(Zs(s),n.replace(kf,""),"important"):t[s]=n}}const Vf=["Webkit","Moz","ms"],Bc={};function BE(t,e){const n=Bc[e];if(n)return n;let s=zt(e);if(s!=="filter"&&s in t)return Bc[e]=s;s=Na(s);for(let r=0;r<Vf.length;r++){const i=Vf[r]+s;if(i in t)return Bc[e]=i}return e}const Df="http://www.w3.org/1999/xlink";function Nf(t,e,n,s,r,i=Bv(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Df,e.slice(6,e.length)):t.setAttributeNS(Df,e,n):n==null||i&&!Yp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Ss(n)?String(n):n)}function Of(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?sg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Yp(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function dr(t,e,n,s){t.addEventListener(e,n,s)}function $E(t,e,n,s){t.removeEventListener(e,n,s)}const xf=Symbol("_vei");function jE(t,e,n,s,r=null){const i=t[xf]||(t[xf]={}),o=i[e];if(s&&o)o.value=s;else{const[c,l]=qE(e);if(s){const u=i[e]=WE(s,r);dr(t,c,u,l)}else o&&($E(t,c,o,l),i[e]=void 0)}}const Mf=/(?:Once|Passive|Capture)$/;function qE(t){let e;if(Mf.test(t)){e={};let s;for(;s=t.match(Mf);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Zs(t.slice(2)),e]}let $c=0;const HE=Promise.resolve(),zE=()=>$c||(HE.then(()=>$c=0),$c=Date.now());function WE(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Xt(KE(s,n.value),e,5,[s])};return n.value=t,n.attached=zE(),n}function KE(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Lf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,GE=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?xE(t,s,o):e==="style"?UE(t,n,s):ka(e)?Xl(e)||jE(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):QE(t,e,s,o))?(Of(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Nf(t,e,s,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ge(s))?Of(t,zt(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Nf(t,e,s,o))};function QE(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Lf(e)&&he(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Lf(e)&&Ge(n)?!1:e in t}const Ff=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>Bo(e,n):e};function YE(t){t.target.composing=!0}function Uf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const jc=Symbol("_assign"),qs={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[jc]=Ff(r);const i=s||r.props&&r.props.type==="number";dr(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=al(c)),t[jc](c)}),n&&dr(t,"change",()=>{t.value=t.value.trim()}),e||(dr(t,"compositionstart",YE),dr(t,"compositionend",Uf),dr(t,"change",Uf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[jc]=Ff(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?al(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===l)||(t.value=l))}},XE=rt({patchProp:GE},CE);let Bf;function JE(){return Bf||(Bf=J0(XE))}const ZE=((...t)=>{const e=JE().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=tT(s);if(!r)return;const i=e._component;!he(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,eT(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function eT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function tT(t){return Ge(t)?document.querySelector(t):t}const ag="/accounting-site/assets/logo-DMpoolbu.png",wt=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},nT={class:"navbar"},sT={class:"nav-links"},rT={class:"main"},iT={__name:"App",setup(t){const e=Me(!1),n=Me(window.innerWidth>=769),s=()=>{n.value=window.innerWidth>=769,n.value&&(e.value=!1)},r=()=>{e.value=!e.value};jn(()=>{window.addEventListener("resize",s),localStorage.getItem("theme")==="dark"&&(i.value=!0,document.documentElement.classList.add("dark"))}),Ba(()=>{window.removeEventListener("resize",s)});const i=Me(!1);return(o,c)=>{const l=oa("router-link"),u=oa("router-view");return pe(),ge(vt,null,[W("header",nT,[we(l,{to:"/",class:"logo"},{default:cs(()=>[...c[3]||(c[3]=[W("img",{class:"img",src:ag},null,-1)])]),_:1}),W("button",{class:"hamburger",onClick:r},[...c[4]||(c[4]=[W("span",null,null,-1),W("span",null,null,-1),W("span",null,null,-1)])]),yt(e)?(pe(),ge("div",{key:0,class:"overlay",onClick:c[0]||(c[0]=f=>e.value=!1)})):Mn("",!0),we(ig,{name:"slide"},{default:cs(()=>[ss(W("nav",sT,[we(l,{to:"/",onClick:c[1]||(c[1]=f=>e.value=!1)},{default:cs(()=>[...c[5]||(c[5]=[ln("首頁",-1)])]),_:1}),we(l,{to:"/articleList",onClick:c[2]||(c[2]=f=>e.value=!1)},{default:cs(()=>[...c[6]||(c[6]=[ln("最新消息",-1)])]),_:1})],512),[[ME,yt(e)||yt(n)]])]),_:1})]),W("main",rT,[we(u)])],64)}}},oT=wt(iT,[["__scopeId","data-v-65c44cfa"]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const pr=typeof document<"u";function cg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function aT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&cg(t.default)}const Se=Object.assign;function qc(t,e){const n={};for(const s in e){const r=e[s];n[s]=Jt(r)?r.map(t):t(r)}return n}const Ri=()=>{},Jt=Array.isArray,lg=/#/g,cT=/&/g,lT=/\//g,uT=/=/g,hT=/\?/g,ug=/\+/g,fT=/%5B/g,dT=/%5D/g,hg=/%5E/g,pT=/%60/g,fg=/%7B/g,mT=/%7C/g,dg=/%7D/g,gT=/%20/g;function gu(t){return encodeURI(""+t).replace(mT,"|").replace(fT,"[").replace(dT,"]")}function _T(t){return gu(t).replace(fg,"{").replace(dg,"}").replace(hg,"^")}function yl(t){return gu(t).replace(ug,"%2B").replace(gT,"+").replace(lg,"%23").replace(cT,"%26").replace(pT,"`").replace(fg,"{").replace(dg,"}").replace(hg,"^")}function yT(t){return yl(t).replace(uT,"%3D")}function vT(t){return gu(t).replace(lg,"%23").replace(hT,"%3F")}function ET(t){return t==null?"":vT(t).replace(lT,"%2F")}function ji(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const TT=/\/$/,IT=t=>t.replace(TT,"");function Hc(t,e,n="/"){let s,r={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(s=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),r=t(i)),c>-1&&(s=s||e.slice(0,c),o=e.slice(c,e.length)),s=RT(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:ji(o)}}function wT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function $f(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function AT(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Pr(e.matched[s],n.matched[r])&&pg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Pr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function pg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!bT(t[n],e[n]))return!1;return!0}function bT(t,e){return Jt(t)?jf(t,e):Jt(e)?jf(e,t):t===e}function jf(t,e){return Jt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function RT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,c;for(o=0;o<s.length;o++)if(c=s[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const Xn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var qi;(function(t){t.pop="pop",t.push="push"})(qi||(qi={}));var Si;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Si||(Si={}));function ST(t){if(!t)if(pr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),IT(t)}const CT=/^[^#]+#/;function PT(t,e){return t.replace(CT,"#")+e}function kT(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const za=()=>({left:window.scrollX,top:window.scrollY});function VT(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=kT(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function qf(t,e){return(history.state?history.state.position-e:-1)+t}const vl=new Map;function DT(t,e){vl.set(t,e)}function NT(t){const e=vl.get(t);return vl.delete(t),e}let OT=()=>location.protocol+"//"+location.host;function mg(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let c=r.includes(t.slice(i))?t.slice(i).length:1,l=r.slice(c);return l[0]!=="/"&&(l="/"+l),$f(l,"")}return $f(n,t)+s+r}function xT(t,e,n,s){let r=[],i=[],o=null;const c=({state:m})=>{const _=mg(t,location),S=n.value,k=e.value;let D=0;if(m){if(n.value=_,e.value=m,o&&o===S){o=null;return}D=k?m.position-k.position:0}else s(_);r.forEach(U=>{U(n.value,S,{delta:D,type:qi.pop,direction:D?D>0?Si.forward:Si.back:Si.unknown})})};function l(){o=n.value}function u(m){r.push(m);const _=()=>{const S=r.indexOf(m);S>-1&&r.splice(S,1)};return i.push(_),_}function f(){const{history:m}=window;m.state&&m.replaceState(Se({},m.state,{scroll:za()}),"")}function d(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function Hf(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?za():null}}function MT(t){const{history:e,location:n}=window,s={value:mg(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,f){const d=t.indexOf("#"),m=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:OT()+t+l;try{e[f?"replaceState":"pushState"](u,"",m),r.value=u}catch(_){console.error(_),n[f?"replace":"assign"](m)}}function o(l,u){const f=Se({},e.state,Hf(r.value.back,l,r.value.forward,!0),u,{position:r.value.position});i(l,f,!0),s.value=l}function c(l,u){const f=Se({},r.value,e.state,{forward:l,scroll:za()});i(f.current,f,!0);const d=Se({},Hf(s.value,l,null),{position:f.position+1},u);i(l,d,!1),s.value=l}return{location:s,state:r,push:c,replace:o}}function LT(t){t=ST(t);const e=MT(t),n=xT(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Se({location:"",base:t,go:s,createHref:PT.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function FT(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),LT(t)}function UT(t){return typeof t=="string"||t&&typeof t=="object"}function gg(t){return typeof t=="string"||typeof t=="symbol"}const _g=Symbol("");var zf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(zf||(zf={}));function kr(t,e){return Se(new Error,{type:t,[_g]:!0},e)}function Rn(t,e){return t instanceof Error&&_g in t&&(e==null||!!(t.type&e))}const Wf="[^/]+?",BT={sensitive:!1,strict:!1,start:!0,end:!0},$T=/[.+*?^${}()[\]/\\]/g;function jT(t,e){const n=Se({},BT,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let d=0;d<u.length;d++){const m=u[d];let _=40+(n.sensitive?.25:0);if(m.type===0)d||(r+="/"),r+=m.value.replace($T,"\\$&"),_+=40;else if(m.type===1){const{value:S,repeatable:k,optional:D,regexp:U}=m;i.push({name:S,repeatable:k,optional:D});const B=U||Wf;if(B!==Wf){_+=10;try{new RegExp(`(${B})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${S}" (${B}): `+z.message)}}let q=k?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;d||(q=D&&u.length<2?`(?:/${q})`:"/"+q),D&&(q+="?"),r+=q,_+=20,D&&(_+=-8),k&&(_+=-20),B===".*"&&(_+=-50)}f.push(_)}s.push(f)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function c(u){const f=u.match(o),d={};if(!f)return null;for(let m=1;m<f.length;m++){const _=f[m]||"",S=i[m-1];d[S.name]=_&&S.repeatable?_.split("/"):_}return d}function l(u){let f="",d=!1;for(const m of t){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const _ of m)if(_.type===0)f+=_.value;else if(_.type===1){const{value:S,repeatable:k,optional:D}=_,U=S in u?u[S]:"";if(Jt(U)&&!k)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const B=Jt(U)?U.join("/"):U;if(!B)if(D)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${S}"`);f+=B}}return f||"/"}return{re:o,score:s,keys:i,parse:c,stringify:l}}function qT(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function yg(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=qT(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Kf(s))return 1;if(Kf(r))return-1}return r.length-s.length}function Kf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const HT={type:0,value:""},zT=/[a-zA-Z0-9_]/;function WT(t){if(!t)return[[]];if(t==="/")return[[HT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let c=0,l,u="",f="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(u&&d(),o()):l===":"?(d(),n=1):m();break;case 4:m(),n=s;break;case 1:l==="("?n=2:zT.test(l)?m():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),r}function KT(t,e,n){const s=jT(WT(t.path),n),r=Se(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function GT(t,e){const n=[],s=new Map;e=Xf({strict:!1,end:!0,sensitive:!1},e);function r(d){return s.get(d)}function i(d,m,_){const S=!_,k=Qf(d);k.aliasOf=_&&_.record;const D=Xf(e,d),U=[k];if("alias"in d){const z=typeof d.alias=="string"?[d.alias]:d.alias;for(const ee of z)U.push(Qf(Se({},k,{components:_?_.record.components:k.components,path:ee,aliasOf:_?_.record:k})))}let B,q;for(const z of U){const{path:ee}=z;if(m&&ee[0]!=="/"){const ie=m.record.path,R=ie[ie.length-1]==="/"?"":"/";z.path=m.record.path+(ee&&R+ee)}if(B=KT(z,m,D),_?_.alias.push(B):(q=q||B,q!==B&&q.alias.push(B),S&&d.name&&!Yf(B)&&o(d.name)),vg(B)&&l(B),k.children){const ie=k.children;for(let R=0;R<ie.length;R++)i(ie[R],B,_&&_.children[R])}_=_||B}return q?()=>{o(q)}:Ri}function o(d){if(gg(d)){const m=s.get(d);m&&(s.delete(d),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(d);m>-1&&(n.splice(m,1),d.record.name&&s.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function c(){return n}function l(d){const m=XT(d,n);n.splice(m,0,d),d.record.name&&!Yf(d)&&s.set(d.record.name,d)}function u(d,m){let _,S={},k,D;if("name"in d&&d.name){if(_=s.get(d.name),!_)throw kr(1,{location:d});D=_.record.name,S=Se(Gf(m.params,_.keys.filter(q=>!q.optional).concat(_.parent?_.parent.keys.filter(q=>q.optional):[]).map(q=>q.name)),d.params&&Gf(d.params,_.keys.map(q=>q.name))),k=_.stringify(S)}else if(d.path!=null)k=d.path,_=n.find(q=>q.re.test(k)),_&&(S=_.parse(k),D=_.record.name);else{if(_=m.name?s.get(m.name):n.find(q=>q.re.test(m.path)),!_)throw kr(1,{location:d,currentLocation:m});D=_.record.name,S=Se({},m.params,d.params),k=_.stringify(S)}const U=[];let B=_;for(;B;)U.unshift(B.record),B=B.parent;return{name:D,path:k,params:S,matched:U,meta:YT(U)}}t.forEach(d=>i(d));function f(){n.length=0,s.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:r}}function Gf(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Qf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:QT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function QT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Yf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function YT(t){return t.reduce((e,n)=>Se(e,n.meta),{})}function Xf(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function XT(t,e){let n=0,s=e.length;for(;n!==s;){const i=n+s>>1;yg(t,e[i])<0?s=i:n=i+1}const r=JT(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function JT(t){let e=t;for(;e=e.parent;)if(vg(e)&&yg(t,e)===0)return e}function vg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function ZT(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(ug," "),o=i.indexOf("="),c=ji(o<0?i:i.slice(0,o)),l=o<0?null:ji(i.slice(o+1));if(c in e){let u=e[c];Jt(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function Jf(t){let e="";for(let n in t){const s=t[n];if(n=yT(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Jt(s)?s.map(i=>i&&yl(i)):[s&&yl(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function eI(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Jt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const tI=Symbol(""),Zf=Symbol(""),Wa=Symbol(""),_u=Symbol(""),El=Symbol("");function ui(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ns(t,e,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((c,l)=>{const u=m=>{m===!1?l(kr(4,{from:n,to:e})):m instanceof Error?l(m):UT(m)?l(kr(2,{from:e,to:m})):(o&&s.enterCallbacks[r]===o&&typeof m=="function"&&o.push(m),c())},f=i(()=>t.call(s&&s.instances[r],e,n,u));let d=Promise.resolve(f);t.length<3&&(d=d.then(u)),d.catch(m=>l(m))})}function zc(t,e,n,s,r=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(cg(l)){const f=(l.__vccOpts||l)[e];f&&i.push(ns(f,n,s,o,c,r))}else{let u=l();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const d=aT(f)?f.default:f;o.mods[c]=f,o.components[c]=d;const _=(d.__vccOpts||d)[e];return _&&ns(_,n,s,o,c,r)()}))}}return i}function ed(t){const e=Ht(Wa),n=Ht(_u),s=kt(()=>{const l=yt(t.to);return e.resolve(l)}),r=kt(()=>{const{matched:l}=s.value,{length:u}=l,f=l[u-1],d=n.matched;if(!f||!d.length)return-1;const m=d.findIndex(Pr.bind(null,f));if(m>-1)return m;const _=td(l[u-2]);return u>1&&td(f)===_&&d[d.length-1].path!==_?d.findIndex(Pr.bind(null,l[u-2])):m}),i=kt(()=>r.value>-1&&oI(n.params,s.value.params)),o=kt(()=>r.value>-1&&r.value===n.matched.length-1&&pg(n.params,s.value.params));function c(l={}){if(iI(l)){const u=e[yt(t.replace)?"replace":"push"](yt(t.to)).catch(Ri);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:kt(()=>s.value.href),isActive:i,isExactActive:o,navigate:c}}function nI(t){return t.length===1?t[0]:t}const sI=Vm({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ed,setup(t,{slots:e}){const n=no(ed(t)),{options:s}=Ht(Wa),r=kt(()=>({[nd(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[nd(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&nI(e.default(n));return t.custom?i:mu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),rI=sI;function iI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function oI(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Jt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function td(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const nd=(t,e,n)=>t??e??n,aI=Vm({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ht(El),r=kt(()=>t.route||s.value),i=Ht(Zf,0),o=kt(()=>{let u=yt(i);const{matched:f}=r.value;let d;for(;(d=f[u])&&!d.components;)u++;return u}),c=kt(()=>r.value.matched[o.value]);$o(Zf,kt(()=>o.value+1)),$o(tI,c),$o(El,r);const l=Me();return wr(()=>[l.value,c.value,t.name],([u,f,d],[m,_,S])=>{f&&(f.instances[d]=u,_&&_!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),u&&f&&(!_||!Pr(f,_)||!m)&&(f.enterCallbacks[d]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=r.value,f=t.name,d=c.value,m=d&&d.components[f];if(!m)return sd(n.default,{Component:m,route:u});const _=d.props[f],S=_?_===!0?u.params:typeof _=="function"?_(u):_:null,D=mu(m,Se({},S,e,{onVnodeUnmounted:U=>{U.component.isUnmounted&&(d.instances[f]=null)},ref:l}));return sd(n.default,{Component:D,route:u})||D}}});function sd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const cI=aI;function lI(t){const e=GT(t.routes,t),n=t.parseQuery||ZT,s=t.stringifyQuery||Jf,r=t.history,i=ui(),o=ui(),c=ui(),l=a0(Xn);let u=Xn;pr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=qc.bind(null,x=>""+x),d=qc.bind(null,ET),m=qc.bind(null,ji);function _(x,J){let Q,te;return gg(x)?(Q=e.getRecordMatcher(x),te=J):te=x,e.addRoute(te,Q)}function S(x){const J=e.getRecordMatcher(x);J&&e.removeRoute(J)}function k(){return e.getRoutes().map(x=>x.record)}function D(x){return!!e.getRecordMatcher(x)}function U(x,J){if(J=Se({},J||l.value),typeof x=="string"){const C=Hc(n,x,J.path),M=e.resolve({path:C.path},J),F=r.createHref(C.fullPath);return Se(C,M,{params:m(M.params),hash:ji(C.hash),redirectedFrom:void 0,href:F})}let Q;if(x.path!=null)Q=Se({},x,{path:Hc(n,x.path,J.path).path});else{const C=Se({},x.params);for(const M in C)C[M]==null&&delete C[M];Q=Se({},x,{params:d(C)}),J.params=d(J.params)}const te=e.resolve(Q,J),Ve=x.hash||"";te.params=f(m(te.params));const T=wT(s,Se({},x,{hash:_T(Ve),path:te.path})),b=r.createHref(T);return Se({fullPath:T,hash:Ve,query:s===Jf?eI(x.query):x.query||{}},te,{redirectedFrom:void 0,href:b})}function B(x){return typeof x=="string"?Hc(n,x,l.value.path):Se({},x)}function q(x,J){if(u!==x)return kr(8,{from:J,to:x})}function z(x){return R(x)}function ee(x){return z(Se(B(x),{replace:!0}))}function ie(x){const J=x.matched[x.matched.length-1];if(J&&J.redirect){const{redirect:Q}=J;let te=typeof Q=="function"?Q(x):Q;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=B(te):{path:te},te.params={}),Se({query:x.query,hash:x.hash,params:te.path!=null?{}:x.params},te)}}function R(x,J){const Q=u=U(x),te=l.value,Ve=x.state,T=x.force,b=x.replace===!0,C=ie(Q);if(C)return R(Se(B(C),{state:typeof C=="object"?Se({},Ve,C.state):Ve,force:T,replace:b}),J||Q);const M=Q;M.redirectedFrom=J;let F;return!T&&AT(s,te,Q)&&(F=kr(16,{to:M,from:te}),Dt(te,te,!0,!1)),(F?Promise.resolve(F):A(M,te)).catch(N=>Rn(N)?Rn(N,2)?N:tn(N):Ie(N,M,te)).then(N=>{if(N){if(Rn(N,2))return R(Se({replace:b},B(N.to),{state:typeof N.to=="object"?Se({},Ve,N.to.state):Ve,force:T}),J||M)}else N=I(M,te,!0,b,Ve);return w(M,te,N),N})}function v(x,J){const Q=q(x,J);return Q?Promise.reject(Q):Promise.resolve()}function y(x){const J=Wt.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(x):x()}function A(x,J){let Q;const[te,Ve,T]=uI(x,J);Q=zc(te.reverse(),"beforeRouteLeave",x,J);for(const C of te)C.leaveGuards.forEach(M=>{Q.push(ns(M,x,J))});const b=v.bind(null,x,J);return Q.push(b),ht(Q).then(()=>{Q=[];for(const C of i.list())Q.push(ns(C,x,J));return Q.push(b),ht(Q)}).then(()=>{Q=zc(Ve,"beforeRouteUpdate",x,J);for(const C of Ve)C.updateGuards.forEach(M=>{Q.push(ns(M,x,J))});return Q.push(b),ht(Q)}).then(()=>{Q=[];for(const C of T)if(C.beforeEnter)if(Jt(C.beforeEnter))for(const M of C.beforeEnter)Q.push(ns(M,x,J));else Q.push(ns(C.beforeEnter,x,J));return Q.push(b),ht(Q)}).then(()=>(x.matched.forEach(C=>C.enterCallbacks={}),Q=zc(T,"beforeRouteEnter",x,J,y),Q.push(b),ht(Q))).then(()=>{Q=[];for(const C of o.list())Q.push(ns(C,x,J));return Q.push(b),ht(Q)}).catch(C=>Rn(C,8)?C:Promise.reject(C))}function w(x,J,Q){c.list().forEach(te=>y(()=>te(x,J,Q)))}function I(x,J,Q,te,Ve){const T=q(x,J);if(T)return T;const b=J===Xn,C=pr?history.state:{};Q&&(te||b?r.replace(x.fullPath,Se({scroll:b&&C&&C.scroll},Ve)):r.push(x.fullPath,Ve)),l.value=x,Dt(x,J,Q,b),tn()}let E;function Te(){E||(E=r.listen((x,J,Q)=>{if(!qn.listening)return;const te=U(x),Ve=ie(te);if(Ve){R(Se(Ve,{replace:!0,force:!0}),te).catch(Ri);return}u=te;const T=l.value;pr&&DT(qf(T.fullPath,Q.delta),za()),A(te,T).catch(b=>Rn(b,12)?b:Rn(b,2)?(R(Se(B(b.to),{force:!0}),te).then(C=>{Rn(C,20)&&!Q.delta&&Q.type===qi.pop&&r.go(-1,!1)}).catch(Ri),Promise.reject()):(Q.delta&&r.go(-Q.delta,!1),Ie(b,te,T))).then(b=>{b=b||I(te,T,!1),b&&(Q.delta&&!Rn(b,8)?r.go(-Q.delta,!1):Q.type===qi.pop&&Rn(b,20)&&r.go(-1,!1)),w(te,T,b)}).catch(Ri)}))}let je=ui(),ke=ui(),de;function Ie(x,J,Q){tn(x);const te=ke.list();return te.length?te.forEach(Ve=>Ve(x,J,Q)):console.error(x),Promise.reject(x)}function Ct(){return de&&l.value!==Xn?Promise.resolve():new Promise((x,J)=>{je.add([x,J])})}function tn(x){return de||(de=!x,Te(),je.list().forEach(([J,Q])=>x?Q(x):J()),je.reset()),x}function Dt(x,J,Q,te){const{scrollBehavior:Ve}=t;if(!pr||!Ve)return Promise.resolve();const T=!Q&&NT(qf(x.fullPath,0))||(te||!Q)&&history.state&&history.state.scroll||null;return lu().then(()=>Ve(x,J,T)).then(b=>b&&VT(b)).catch(b=>Ie(b,x,J))}const it=x=>r.go(x);let wn;const Wt=new Set,qn={currentRoute:l,listening:!0,addRoute:_,removeRoute:S,clearRoutes:e.clearRoutes,hasRoute:D,getRoutes:k,resolve:U,options:t,push:z,replace:ee,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:ke.add,isReady:Ct,install(x){const J=this;x.component("RouterLink",rI),x.component("RouterView",cI),x.config.globalProperties.$router=J,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>yt(l)}),pr&&!wn&&l.value===Xn&&(wn=!0,z(r.location).catch(Ve=>{}));const Q={};for(const Ve in Xn)Object.defineProperty(Q,Ve,{get:()=>l.value[Ve],enumerable:!0});x.provide(Wa,J),x.provide(_u,gm(Q)),x.provide(El,l);const te=x.unmount;Wt.add(x),x.unmount=function(){Wt.delete(x),Wt.size<1&&(u=Xn,E&&E(),E=null,l.value=Xn,wn=!1,de=!1),te()}}};function ht(x){return x.reduce((J,Q)=>J.then(()=>y(Q)),Promise.resolve())}return qn}function uI(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>Pr(u,c))?s.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>Pr(u,l))||r.push(l))}return[n,s,r]}function yu(){return Ht(Wa)}function Eg(t){return Ht(_u)}const hI="/accounting-site/assets/logo-name-DKMeXibA.png",fI={class:"title"},dI={__name:"Title",props:{title:{type:String,required:!0}},setup(t){return(e,n)=>(pe(),ge("div",fI,[W("h3",null,$e(t.title),1)]))}},Tg=wt(dI,[["__scopeId","data-v-201c176b"]]),pI={class:"service-target"},mI={__name:"ServiceTarget",props:{target:{type:String,required:!0}},setup(t){return(e,n)=>(pe(),ge("div",pI,$e(t.target),1))}},gI=wt(mI,[["__scopeId","data-v-d5757030"]]),_I={class:"info-section"},yI={class:"container"},vI={class:"card-inside"},EI={__name:"InfoSection",props:{title:{type:String,required:!0},infoList:{type:Array,required:!0},twoCol:{type:Boolean}},setup(t){return(e,n)=>(pe(),ge("section",_I,[W("div",yI,[we(Tg,{title:t.title},null,8,["title"]),(pe(!0),ge(vt,null,wi(t.infoList,(s,r)=>(pe(),ge("div",{key:r,class:"card-container"},[s.target?(pe(),qa(gI,{key:0,target:s.target},null,8,["target"])):Mn("",!0),W("div",vI,[(pe(!0),ge(vt,null,wi(s.categories,(i,o)=>(pe(),ge("div",{key:o,class:xa([{twoCard:t.twoCol},"card"])},[W("h3",null,$e(i.name||i.title),1),W("p",null,$e(i.desc),1),W("ul",null,[(pe(!0),ge(vt,null,wi(i.items,(c,l)=>(pe(),ge("li",{key:l},$e(c),1))),128))])],2))),128))])]))),128))])]))}},rd=wt(EI,[["__scopeId","data-v-da89fcd3"]]),TI="/accounting-site/assets/james-CDFwbDAa.png",II={},wI={class:"about-us"};function AI(t,e){return pe(),ge("section",wI,[...e[0]||(e[0]=[eg('<div class="img-inside" data-v-3743b053><img src="'+TI+'" alt="" data-v-3743b053></div><div class="introduce" data-v-3743b053><h4 class="title" data-v-3743b053>James</h4><p class="title-desc" data-v-3743b053>因興趣使然而加入會計師行業～～</p><h5 class="sub-title" data-v-3743b053>學歷</h5><ul data-v-3743b053><li data-v-3743b053>德明商專(五專部)會計統計科</li><li data-v-3743b053>東吳大學會計學系學士</li><li data-v-3743b053>政治大學經營管理學程會計組碩士</li><li data-v-3743b053>安永會計師事務所 (DY致遠)</li></ul><h5 class="sub-title" data-v-3743b053>經歷</h5><ul data-v-3743b053><li data-v-3743b053>儒鴻企業股份有限公司</li><li data-v-3743b053>集盛實業股份有限公司</li><li data-v-3743b053>多年中國、越南派駐工作經驗</li><li data-v-3743b053>新北市都更推動師</li><li data-v-3743b053>和得會計師事務所 會計師</li></ul></div>',2)])])}const bI=wt(II,[["render",AI],["__scopeId","data-v-3743b053"]]),RI="/accounting-site/assets/line-Bf_xZ2G0.jpg",SI="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20x='0px'%20y='0px'%20width='100'%20height='100'%20viewBox='0%200%2048%2048'%3e%3cpath%20fill='%2300c300'%20d='M12.5,42h23c3.59,0,6.5-2.91,6.5-6.5v-23C42,8.91,39.09,6,35.5,6h-23C8.91,6,6,8.91,6,12.5v23C6,39.09,8.91,42,12.5,42z'%3e%3c/path%3e%3cpath%20fill='%23fff'%20d='M37.113,22.417c0-5.865-5.88-10.637-13.107-10.637s-13.108,4.772-13.108,10.637c0,5.258,4.663,9.662,10.962,10.495c0.427,0.092,1.008,0.282,1.155,0.646c0.132,0.331,0.086,0.85,0.042,1.185c0,0-0.153,0.925-0.187,1.122c-0.057,0.331-0.263,1.296,1.135,0.707c1.399-0.589,7.548-4.445,10.298-7.611h-0.001C36.203,26.879,37.113,24.764,37.113,22.417z%20M18.875,25.907h-2.604c-0.379,0-0.687-0.308-0.687-0.688V20.01c0-0.379,0.308-0.687,0.687-0.687c0.379,0,0.687,0.308,0.687,0.687v4.521h1.917c0.379,0,0.687,0.308,0.687,0.687C19.562,25.598,19.254,25.907,18.875,25.907z%20M21.568,25.219c0,0.379-0.308,0.688-0.687,0.688s-0.687-0.308-0.687-0.688V20.01c0-0.379,0.308-0.687,0.687-0.687s0.687,0.308,0.687,0.687V25.219z%20M27.838,25.219c0,0.297-0.188,0.559-0.47,0.652c-0.071,0.024-0.145,0.036-0.218,0.036c-0.215,0-0.42-0.103-0.549-0.275l-2.669-3.635v3.222c0,0.379-0.308,0.688-0.688,0.688c-0.379,0-0.688-0.308-0.688-0.688V20.01c0-0.296,0.189-0.558,0.47-0.652c0.071-0.024,0.144-0.035,0.218-0.035c0.214,0,0.42,0.103,0.549,0.275l2.67,3.635V20.01c0-0.379,0.309-0.687,0.688-0.687c0.379,0,0.687,0.308,0.687,0.687V25.219z%20M32.052,21.927c0.379,0,0.688,0.308,0.688,0.688c0,0.379-0.308,0.687-0.688,0.687h-1.917v1.23h1.917c0.379,0,0.688,0.308,0.688,0.687c0,0.379-0.309,0.688-0.688,0.688h-2.604c-0.378,0-0.687-0.308-0.687-0.688v-2.603c0-0.001,0-0.001,0-0.001c0,0,0-0.001,0-0.001v-2.601c0-0.001,0-0.001,0-0.002c0-0.379,0.308-0.687,0.687-0.687h2.604c0.379,0,0.688,0.308,0.688,0.687s-0.308,0.687-0.688,0.687h-1.917v1.23H32.052z'%3e%3c/path%3e%3c/svg%3e",CI="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20x='0px'%20y='0px'%20width='100'%20height='100'%20viewBox='0%200%2048%2048'%3e%3clinearGradient%20id='Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1'%20x1='9.993'%20x2='40.615'%20y1='9.993'%20y2='40.615'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%232aa4f4'%3e%3c/stop%3e%3cstop%20offset='1'%20stop-color='%23007ad9'%3e%3c/stop%3e%3c/linearGradient%3e%3cpath%20fill='url(%23Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)'%20d='M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z'%3e%3c/path%3e%3cpath%20fill='%23fff'%20d='M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46%20c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452%20C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z'%3e%3c/path%3e%3c/svg%3e",PI="/accounting-site/assets/instagram-DG-fKQy-.svg",kI="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20x='0px'%20y='0px'%20width='100'%20height='100'%20viewBox='0%200%2048%2048'%3e%3cpath%20fill='%238BC34A'%20d='M18,6C9.2,6,2,12,2,19.5c0,4.3,2.3,8,6,10.5l-2,6l6.3-3.9C14,32.7,16,33,18,33c8.8,0,16-6,16-13.5C34,12,26.8,6,18,6z'%3e%3c/path%3e%3cpath%20fill='%237CB342'%20d='M20,29c0-6.1,5.8-11,13-11c0.3,0,0.6,0,0.9,0c-0.1-0.7-0.3-1.4-0.5-2c-0.1,0-0.3,0-0.4,0c-8.3,0-15,5.8-15,13c0,1.4,0.3,2.7,0.7,4c0.7,0,1.4-0.1,2.1-0.2C20.3,31.6,20,30.3,20,29z'%3e%3c/path%3e%3cpath%20fill='%23CFD8DC'%20d='M46,29c0-6.1-5.8-11-13-11c-7.2,0-13,4.9-13,11s5.8,11,13,11c1.8,0,3.5-0.3,5-0.8l5,2.8l-1.4-4.8C44.3,35.2,46,32.3,46,29z'%3e%3c/path%3e%3cpath%20fill='%2333691E'%20d='M14,15c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2S14,13.9,14,15z%20M24,13c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S25.1,13,24,13z'%3e%3c/path%3e%3cpath%20fill='%23546E7A'%20d='M30,26.5c0,0.8-0.7,1.5-1.5,1.5S27,27.3,27,26.5s0.7-1.5,1.5-1.5S30,25.7,30,26.5z%20M37.5,25c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S38.3,25,37.5,25z'%3e%3c/path%3e%3c/svg%3e",VI="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20x='0px'%20y='0px'%20width='100'%20height='100'%20viewBox='0%200%2048%2048'%3e%3cpath%20fill='%230288D1'%20d='M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z'%3e%3c/path%3e%3cpath%20fill='%23FFF'%20d='M12%2019H17V36H12zM14.485%2017h-.028C12.965%2017%2012%2015.888%2012%2014.499%2012%2013.08%2012.995%2012%2014.514%2012c1.521%200%202.458%201.08%202.486%202.499C17%2015.887%2016.035%2017%2014.485%2017zM36%2036h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501%200-2.313%201.012-2.707%201.99C24.957%2025.543%2025%2026.511%2025%2027v9h-5V19h5v2.616C25.721%2020.5%2026.85%2019%2029.738%2019c3.578%200%206.261%202.25%206.261%207.274L36%2036%2036%2036z'%3e%3c/path%3e%3c/svg%3e",DI="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20x='0px'%20y='0px'%20width='100'%20height='100'%20viewBox='0%200%2050%2050'%3e%3cpath%20d='M46,9v32c0,2.757-2.243,5-5,5H9c-2.757,0-5-2.243-5-5V9c0-2.757,2.243-5,5-5h32C43.757,4,46,6.243,46,9z%20M33.544,35.913%20c2.711-2.708,2.635-6.093,1.746-8.17c-0.54-1.255-1.508-2.33-2.798-3.108l-0.223-0.138c-0.33-0.208-0.609-0.375-1.046-0.542%20c-0.008-0.278-0.025-0.556-0.058-0.807c-0.59-4.561-3.551-5.535-5.938-5.55c-2.154,0-3.946,0.92-5.044,2.592l1.672,1.098%20c0.736-1.121,1.871-1.689,3.366-1.689c2.367,0.015,3.625,1.223,3.96,3.801c-1.141-0.231-2.426-0.314-3.807-0.233%20c-3.924,0.226-5.561,2.591-5.442,4.836c0.134,2.486,2.278,4.222,5.216,4.222c0.13,0,0.259-0.003,0.384-0.011%20c2.297-0.126,5.105-1.29,5.61-6.063c0.021,0.013,0.041,0.026,0.062,0.039l0.253,0.157c0.932,0.562,1.621,1.317,1.994,2.185%20c0.643,1.501,0.682,3.964-1.322,5.966c-1.732,1.73-3.812,2.479-6.936,2.502c-3.47-0.026-6.099-1.145-7.812-3.325%20c-1.596-2.028-2.42-4.953-2.451-8.677c0.031-3.728,0.855-6.646,2.451-8.673c1.714-2.181,4.349-3.299,7.814-3.325%20c3.492,0.026,6.165,1.149,7.944,3.338c0.864,1.063,1.525,2.409,1.965,3.998l1.928-0.532c-0.514-1.858-1.301-3.449-2.341-4.728%20c-2.174-2.674-5.363-4.045-9.496-4.076c-4.12,0.031-7.278,1.406-9.387,4.089c-1.875,2.383-2.844,5.712-2.879,9.91%20c0.035,4.193,1.004,7.529,2.879,9.913c2.109,2.682,5.262,4.058,9.385,4.088C28.857,38.973,31.433,38.021,33.544,35.913z%20M28.993,25.405c0.07,0.016,0.138,0.031,0.202,0.046c-0.005,0.078-0.01,0.146-0.015,0.198c-0.314,3.928-2.295,4.489-3.761,4.569%20c-0.091,0.005-0.181,0.008-0.271,0.008c-1.851,0-3.144-0.936-3.218-2.329c-0.065-1.218,0.836-2.576,3.561-2.732%20c0.297-0.018,0.589-0.027,0.875-0.027C27.325,25.137,28.209,25.227,28.993,25.405z'%3e%3c/path%3e%3c/svg%3e",NI="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20x='0px'%20y='0px'%20width='100'%20height='100'%20viewBox='0%200%2050%2050'%3e%3cpath%20d='M35,22v2h1v-2H35z%20M35,22v2h1v-2H35z%20M44,4H6C4.91,4,4,4.91,4,6v38c0,1.09,0.91,2,2,2h38c1.09,0,2-0.91,2-2V6%20C46,4.91,45.09,4,44,4z%20M12,24c0,1.38-0.19,5.89-2.61,6.24l-0.28-1.98C9.5,28.07,10,26.12,10,24v-2h2V24z%20M15,30h-2V19h2V30z%20M17.29,29.71c-1.2-1.2-1.29-4.73-1.29-5.78V22h2v1.93c0,1.91,0.34,3.99,0.71,4.36L17.29,29.71z%20M22,31h-3l1-2h3L22,31z%20M31,31h-7%20l1-2h2v-7h-2l-2.1,4.38h1.72l-1,2H21c-0.8,0-1.28-0.91-0.82-1.57L22,24h-2c-0.78,0-1.26-0.85-0.86-1.51l3-5l1.72,1.02L21.77,22H25%20v-2h6v2h-2v7h2V31z%20M40,28.5c0,1.38-1.12,2.5-2.5,2.5c-1.21,0-1.22-0.86-1.45-2H38v-3h-3v5h-2v-5h-2v-2h2v-2h-1v-2h1v-1h2v1h1%20c1.1,0,2,0.9,2,2v2c1.1,0,2,0.9,2,2V28.5z%20M40,22h-1v-1c0-0.55,0.45-1,1-1s1,0.45,1,1S40.55,22,40,22z%20M35,24h1v-2h-1V24z%20M35,22%20v2h1v-2H35z'%3e%3c/path%3e%3c/svg%3e",OI="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20x='0px'%20y='0px'%20width='100'%20height='100'%20viewBox='0%200%2050%2050'%3e%3cpath%20d='M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z%20M37.006,22.323%20c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527%20s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053%20c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016%20c0.378,3.591,3.277,6.425,6.901,6.685V22.323z'%3e%3c/path%3e%3c/svg%3e",xI={class:"contact"},MI={__name:"Contact",props:{title:{type:String,required:!0}},setup(t){return(e,n)=>(pe(),ge("section",xI,[we(Tg,{title:"聯絡我們"}),n[0]||(n[0]=eg('<div class="contact-phone" data-v-35d3f4aa><div class="img-inside" data-v-35d3f4aa><img class="img" src="'+ag+'" data-v-35d3f4aa></div><div class="img-inside" data-v-35d3f4aa><img class="img" src="'+RI+'" width="275" height="275" data-v-35d3f4aa></div><div class="phone" data-v-35d3f4aa><div data-v-35d3f4aa><h3 data-v-35d3f4aa>和得會計師事務所</h3><p data-v-35d3f4aa>電話：02-29730059</p><p data-v-35d3f4aa>行動電話：0916973296</p><p data-v-35d3f4aa>電子郵件：hedecpa@gmail.com</p></div></div></div><div class="social-media" data-v-35d3f4aa><div data-v-35d3f4aa><a href="https://line.me/ti/p/U_4YvEWa63" target="_blank" aria-label="Line" data-v-35d3f4aa><img src="'+SI+'" data-v-35d3f4aa></a><a href="https://www.facebook.com/share/1CJqK21w1v/" target="_blank" aria-label="Facebook" data-v-35d3f4aa><img src="'+CI+'" data-v-35d3f4aa></a><a href="https://www.instagram.com/cpa__james?igsh=dzl0OHY1ZzRxa2Zr" target="_blank" aria-label="Instagram" data-v-35d3f4aa><img src="'+PI+'" data-v-35d3f4aa></a><a href="" target="_blank" aria-label="Wechat" data-v-35d3f4aa><img src="'+kI+'" data-v-35d3f4aa></a></div><div data-v-35d3f4aa><a href="https://www.linkedin.com/in/james-%E5%92%8C%E5%BE%97%E6%9C%83%E8%A8%88%E5%B8%AB%E4%BA%8B%E5%8B%99%E6%89%80-81bb8b380?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=android_app" target="_blank" aria-label="Linkedin" data-v-35d3f4aa><img src="'+VI+'" data-v-35d3f4aa></a><a href="https://www.threads.com/@cpa__james" target="_blank" aria-label="Threads" data-v-35d3f4aa><img src="'+DI+'" data-v-35d3f4aa></a><a href="https://www.xiaohongshu.com/user/profile/68b56b10000000001901070c?xsec_token=YBHIv8tlNZgFU5imoeubB_mxqexQACEO2sAACXE77OM1o%3D&amp;xsec_source=app_share&amp;xhsshare=CopyLink&amp;appuid=68b56b10000000001901070c&amp;apptime=1757127950&amp;share_id=1e16c269fcb6448aad85c918189465ba&amp;share_channel=copy_link" target="_blank" aria-label="小紅書" data-v-35d3f4aa><img src="'+NI+'" data-v-35d3f4aa></a><a href="https://www.tiktok.com/@user731550344?_t=ZS-8zUSJmLjIwB&amp;_r=1" target="_blank" aria-label="Tiktok" data-v-35d3f4aa><img src="'+OI+'" data-v-35d3f4aa></a></div></div>',2)),n[1]||(n[1]=W("div",{class:"map"},[W("div",null,[W("p",null,"地址：新北市三重區福德北路63號2樓"),W("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.0715399841774!2d121.49964077557456!3d25.06556427779594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a93408f1c6cb%3A0x5bd6d9fafbbf6c8a!2z5ZKM5b6X5pyD6KiI5bir5LqL5YuZ5omA!5e0!3m2!1szh-TW!2stw!4v1756027824509!5m2!1szh-TW!2stw",width:"600",height:"450",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})]),W("div",null,[W("p",null,"地址：桃園市桃園區春日路潤泰大家"),W("iframe",{src:"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1379.626138302121!2d121.3100801219292!3d25.010171883055904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z5qGD5ZyS5biC5qGD5ZyS5Y2A5pil5pel6Lev5r2k5rOw5aSn5a62!5e0!3m2!1szh-TW!2stw!4v1757162027599!5m2!1szh-TW!2stw",width:"600",height:"450",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})])],-1))]))}},LI=wt(MI,[["__scopeId","data-v-35d3f4aa"]]),FI=()=>{};var id={};/**
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
 */const Ig=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},UI=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],c=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},wg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,c=o?t[r+1]:0,l=r+2<t.length,u=l?t[r+2]:0,f=i>>2,d=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,_=u&63;l||(_=64,o||(m=64)),s.push(n[f],n[d],n[m],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ig(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):UI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],c=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||c==null||u==null||d==null)throw new BI;const m=i<<2|c>>4;if(s.push(m),u!==64){const _=c<<4&240|u>>2;if(s.push(_),d!==64){const S=u<<6&192|d;s.push(S)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class BI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $I=function(t){const e=Ig(t);return wg.encodeByteArray(e,!0)},ha=function(t){return $I(t).replace(/\./g,"")},Ag=function(t){try{return wg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function jI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const qI=()=>jI().__FIREBASE_DEFAULTS__,HI=()=>{if(typeof process>"u"||typeof id>"u")return;const t=id.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ag(t[1]);return e&&JSON.parse(e)},Ka=()=>{try{return FI()||qI()||HI()||zI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},bg=t=>Ka()?.emulatorHosts?.[t],Rg=t=>{const e=bg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Sg=()=>Ka()?.config,Cg=t=>Ka()?.[`_${t}`];/**
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
 */class WI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function er(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function vu(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function Pg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ha(JSON.stringify(n)),ha(JSON.stringify(o)),""].join(".")}const Ci={};function KI(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ci))Ci[e]?t.emulator.push(e):t.prod.push(e);return t}function GI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let od=!1;function Eu(t,e){if(typeof window>"u"||typeof document>"u"||!er(window.location.host)||Ci[t]===e||Ci[t]||od)return;Ci[t]=e;function n(m){return`__firebase__banner__${m}`}const s="__firebase__banner",i=KI().prod.length>0;function o(){const m=document.getElementById(s);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,_){m.setAttribute("width","24"),m.setAttribute("id",_),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{od=!0,o()},m}function f(m,_){m.setAttribute("id",_),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function d(){const m=GI(s),_=n("text"),S=document.getElementById(_)||document.createElement("span"),k=n("learnmore"),D=document.getElementById(k)||document.createElement("a"),U=n("preprendIcon"),B=document.getElementById(U)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const q=m.element;c(q),f(D,k);const z=u();l(B,U),q.append(B,S,D,z),document.body.appendChild(q)}i?(S.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
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
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function QI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function YI(){const t=Ka()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function XI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function JI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ZI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ew(){const t=It();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tw(){return!YI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function nw(){try{return typeof indexedDB=="object"}catch{return!1}}function sw(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{e(r.error?.message||"")}}catch(n){e(n)}})}/**
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
 */const rw="FirebaseError";class Tn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=rw,Object.setPrototypeOf(this,Tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,io.prototype.create)}}class io{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?iw(i,s):"Error",c=`${this.serviceName}: ${o} (${r}).`;return new Tn(r,c,s)}}function iw(t,e){return t.replace(ow,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const ow=/\{\$([^}]+)}/g;function aw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Gs(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(ad(i)&&ad(o)){if(!Gs(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function ad(t){return t!==null&&typeof t=="object"}/**
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
 */function oo(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function fi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function di(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function cw(t,e){const n=new lw(t,e);return n.subscribe.bind(n)}class lw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");uw(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Wc),r.error===void 0&&(r.error=Wc),r.complete===void 0&&(r.complete=Wc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wc(){}/**
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
 */function Je(t){return t&&t._delegate?t._delegate:t}class Es{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const $s="[DEFAULT]";/**
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
 */class hw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new WI;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dw(e))try{this.getOrInitializeService({instanceIdentifier:$s})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=$s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$s){return this.instances.has(e)}getOptions(e=$s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);s===c&&o.resolve(r)}return r}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:fw(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=$s){return this.component?this.component.multipleInstances?e:$s:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fw(t){return t===$s?void 0:t}function dw(t){return t.instantiationMode==="EAGER"}/**
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
 */class pw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const mw={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},gw=ye.INFO,_w={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},yw=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=_w[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tu{constructor(e){this.name=e,this._logLevel=gw,this._logHandler=yw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const vw=(t,e)=>e.some(n=>t instanceof n);let cd,ld;function Ew(){return cd||(cd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Tw(){return ld||(ld=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kg=new WeakMap,Tl=new WeakMap,Vg=new WeakMap,Kc=new WeakMap,Iu=new WeakMap;function Iw(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(fs(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&kg.set(n,t)}).catch(()=>{}),Iu.set(e,t),e}function ww(t){if(Tl.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Tl.set(t,e)}let Il={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Tl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Vg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Aw(t){Il=t(Il)}function bw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Gc(this),e,...n);return Vg.set(s,e.sort?e.sort():[e]),fs(s)}:Tw().includes(t)?function(...e){return t.apply(Gc(this),e),fs(kg.get(this))}:function(...e){return fs(t.apply(Gc(this),e))}}function Rw(t){return typeof t=="function"?bw(t):(t instanceof IDBTransaction&&ww(t),vw(t,Ew())?new Proxy(t,Il):t)}function fs(t){if(t instanceof IDBRequest)return Iw(t);if(Kc.has(t))return Kc.get(t);const e=Rw(t);return e!==t&&(Kc.set(t,e),Iu.set(e,t)),e}const Gc=t=>Iu.get(t);function Sw(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),c=fs(o);return s&&o.addEventListener("upgradeneeded",l=>{s(fs(o.result),l.oldVersion,l.newVersion,fs(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const Cw=["get","getKey","getAll","getAllKeys","count"],Pw=["put","add","delete","clear"],Qc=new Map;function ud(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qc.get(e))return Qc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Pw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Cw.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,r?"readwrite":"readonly");let u=l.store;return s&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),r&&l.done]))[0]};return Qc.set(e,i),i}Aw(t=>({...t,get:(e,n,s)=>ud(e,n)||t.get(e,n,s),has:(e,n)=>!!ud(e,n)||t.has(e,n)}));/**
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
 */class kw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Vw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Vw(t){return t.getComponent()?.type==="VERSION"}const wl="@firebase/app",hd="0.14.4";/**
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
 */const Ln=new Tu("@firebase/app"),Dw="@firebase/app-compat",Nw="@firebase/analytics-compat",Ow="@firebase/analytics",xw="@firebase/app-check-compat",Mw="@firebase/app-check",Lw="@firebase/auth",Fw="@firebase/auth-compat",Uw="@firebase/database",Bw="@firebase/data-connect",$w="@firebase/database-compat",jw="@firebase/functions",qw="@firebase/functions-compat",Hw="@firebase/installations",zw="@firebase/installations-compat",Ww="@firebase/messaging",Kw="@firebase/messaging-compat",Gw="@firebase/performance",Qw="@firebase/performance-compat",Yw="@firebase/remote-config",Xw="@firebase/remote-config-compat",Jw="@firebase/storage",Zw="@firebase/storage-compat",eA="@firebase/firestore",tA="@firebase/ai",nA="@firebase/firestore-compat",sA="firebase",rA="12.4.0";/**
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
 */const Al="[DEFAULT]",iA={[wl]:"fire-core",[Dw]:"fire-core-compat",[Ow]:"fire-analytics",[Nw]:"fire-analytics-compat",[Mw]:"fire-app-check",[xw]:"fire-app-check-compat",[Lw]:"fire-auth",[Fw]:"fire-auth-compat",[Uw]:"fire-rtdb",[Bw]:"fire-data-connect",[$w]:"fire-rtdb-compat",[jw]:"fire-fn",[qw]:"fire-fn-compat",[Hw]:"fire-iid",[zw]:"fire-iid-compat",[Ww]:"fire-fcm",[Kw]:"fire-fcm-compat",[Gw]:"fire-perf",[Qw]:"fire-perf-compat",[Yw]:"fire-rc",[Xw]:"fire-rc-compat",[Jw]:"fire-gcs",[Zw]:"fire-gcs-compat",[eA]:"fire-fst",[nA]:"fire-fst-compat",[tA]:"fire-vertex","fire-js":"fire-js",[sA]:"fire-js-all"};/**
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
 */const fa=new Map,oA=new Map,bl=new Map;function fd(t,e){try{t.container.addComponent(e)}catch(n){Ln.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qs(t){const e=t.name;if(bl.has(e))return Ln.debug(`There were multiple attempts to register component ${e}.`),!1;bl.set(e,t);for(const n of fa.values())fd(n,t);for(const n of oA.values())fd(n,t);return!0}function Ga(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function $t(t){return t==null?!1:t.settings!==void 0}/**
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
 */const aA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ds=new io("app","Firebase",aA);/**
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
 */class cA{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Es("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ds.create("app-deleted",{appName:this._name})}}/**
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
 */const tr=rA;function Dg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:Al,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw ds.create("bad-app-name",{appName:String(r)});if(n||(n=Sg()),!n)throw ds.create("no-options");const i=fa.get(r);if(i){if(Gs(n,i.options)&&Gs(s,i.config))return i;throw ds.create("duplicate-app",{appName:r})}const o=new pw(r);for(const l of bl.values())o.addComponent(l);const c=new cA(n,s,o);return fa.set(r,c),c}function wu(t=Al){const e=fa.get(t);if(!e&&t===Al&&Sg())return Dg();if(!e)throw ds.create("no-app",{appName:t});return e}function hn(t,e,n){let s=iA[t]??t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const o=[`Unable to register library "${s}" with version "${e}":`];r&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ln.warn(o.join(" "));return}Qs(new Es(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const lA="firebase-heartbeat-database",uA=1,Hi="firebase-heartbeat-store";let Yc=null;function Ng(){return Yc||(Yc=Sw(lA,uA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Hi)}catch(n){console.warn(n)}}}}).catch(t=>{throw ds.create("idb-open",{originalErrorMessage:t.message})})),Yc}async function hA(t){try{const n=(await Ng()).transaction(Hi),s=await n.objectStore(Hi).get(Og(t));return await n.done,s}catch(e){if(e instanceof Tn)Ln.warn(e.message);else{const n=ds.create("idb-get",{originalErrorMessage:e?.message});Ln.warn(n.message)}}}async function dd(t,e){try{const s=(await Ng()).transaction(Hi,"readwrite");await s.objectStore(Hi).put(e,Og(t)),await s.done}catch(n){if(n instanceof Tn)Ln.warn(n.message);else{const s=ds.create("idb-set",{originalErrorMessage:n?.message});Ln.warn(s.message)}}}function Og(t){return`${t.name}!${t.options.appId}`}/**
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
 */const fA=1024,dA=30;class pA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gA(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=pd();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>dA){const r=_A(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Ln.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=pd(),{heartbeatsToSend:n,unsentEntries:s}=mA(this._heartbeatsCache.heartbeats),r=ha(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return Ln.warn(e),""}}}function pd(){return new Date().toISOString().substring(0,10)}function mA(t,e=fA){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),md(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),md(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class gA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nw()?sw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await hA(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return dd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return dd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function md(t){return ha(JSON.stringify({version:2,heartbeats:t})).length}function _A(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function yA(t){Qs(new Es("platform-logger",e=>new kw(e),"PRIVATE")),Qs(new Es("heartbeat",e=>new pA(e),"PRIVATE")),hn(wl,hd,t),hn(wl,hd,"esm2020"),hn("fire-js","")}yA("");var gd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ps,xg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,v){function y(){}y.prototype=v.prototype,R.F=v.prototype,R.prototype=new y,R.prototype.constructor=R,R.D=function(A,w,I){for(var E=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)E[Te-2]=arguments[Te];return v.prototype[w].apply(A,E)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(R,v,y){y||(y=0);const A=Array(16);if(typeof v=="string")for(var w=0;w<16;++w)A[w]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(w=0;w<16;++w)A[w]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=R.g[0],y=R.g[1],w=R.g[2];let I=R.g[3],E;E=v+(I^y&(w^I))+A[0]+3614090360&4294967295,v=y+(E<<7&4294967295|E>>>25),E=I+(w^v&(y^w))+A[1]+3905402710&4294967295,I=v+(E<<12&4294967295|E>>>20),E=w+(y^I&(v^y))+A[2]+606105819&4294967295,w=I+(E<<17&4294967295|E>>>15),E=y+(v^w&(I^v))+A[3]+3250441966&4294967295,y=w+(E<<22&4294967295|E>>>10),E=v+(I^y&(w^I))+A[4]+4118548399&4294967295,v=y+(E<<7&4294967295|E>>>25),E=I+(w^v&(y^w))+A[5]+1200080426&4294967295,I=v+(E<<12&4294967295|E>>>20),E=w+(y^I&(v^y))+A[6]+2821735955&4294967295,w=I+(E<<17&4294967295|E>>>15),E=y+(v^w&(I^v))+A[7]+4249261313&4294967295,y=w+(E<<22&4294967295|E>>>10),E=v+(I^y&(w^I))+A[8]+1770035416&4294967295,v=y+(E<<7&4294967295|E>>>25),E=I+(w^v&(y^w))+A[9]+2336552879&4294967295,I=v+(E<<12&4294967295|E>>>20),E=w+(y^I&(v^y))+A[10]+4294925233&4294967295,w=I+(E<<17&4294967295|E>>>15),E=y+(v^w&(I^v))+A[11]+2304563134&4294967295,y=w+(E<<22&4294967295|E>>>10),E=v+(I^y&(w^I))+A[12]+1804603682&4294967295,v=y+(E<<7&4294967295|E>>>25),E=I+(w^v&(y^w))+A[13]+4254626195&4294967295,I=v+(E<<12&4294967295|E>>>20),E=w+(y^I&(v^y))+A[14]+2792965006&4294967295,w=I+(E<<17&4294967295|E>>>15),E=y+(v^w&(I^v))+A[15]+1236535329&4294967295,y=w+(E<<22&4294967295|E>>>10),E=v+(w^I&(y^w))+A[1]+4129170786&4294967295,v=y+(E<<5&4294967295|E>>>27),E=I+(y^w&(v^y))+A[6]+3225465664&4294967295,I=v+(E<<9&4294967295|E>>>23),E=w+(v^y&(I^v))+A[11]+643717713&4294967295,w=I+(E<<14&4294967295|E>>>18),E=y+(I^v&(w^I))+A[0]+3921069994&4294967295,y=w+(E<<20&4294967295|E>>>12),E=v+(w^I&(y^w))+A[5]+3593408605&4294967295,v=y+(E<<5&4294967295|E>>>27),E=I+(y^w&(v^y))+A[10]+38016083&4294967295,I=v+(E<<9&4294967295|E>>>23),E=w+(v^y&(I^v))+A[15]+3634488961&4294967295,w=I+(E<<14&4294967295|E>>>18),E=y+(I^v&(w^I))+A[4]+3889429448&4294967295,y=w+(E<<20&4294967295|E>>>12),E=v+(w^I&(y^w))+A[9]+568446438&4294967295,v=y+(E<<5&4294967295|E>>>27),E=I+(y^w&(v^y))+A[14]+3275163606&4294967295,I=v+(E<<9&4294967295|E>>>23),E=w+(v^y&(I^v))+A[3]+4107603335&4294967295,w=I+(E<<14&4294967295|E>>>18),E=y+(I^v&(w^I))+A[8]+1163531501&4294967295,y=w+(E<<20&4294967295|E>>>12),E=v+(w^I&(y^w))+A[13]+2850285829&4294967295,v=y+(E<<5&4294967295|E>>>27),E=I+(y^w&(v^y))+A[2]+4243563512&4294967295,I=v+(E<<9&4294967295|E>>>23),E=w+(v^y&(I^v))+A[7]+1735328473&4294967295,w=I+(E<<14&4294967295|E>>>18),E=y+(I^v&(w^I))+A[12]+2368359562&4294967295,y=w+(E<<20&4294967295|E>>>12),E=v+(y^w^I)+A[5]+4294588738&4294967295,v=y+(E<<4&4294967295|E>>>28),E=I+(v^y^w)+A[8]+2272392833&4294967295,I=v+(E<<11&4294967295|E>>>21),E=w+(I^v^y)+A[11]+1839030562&4294967295,w=I+(E<<16&4294967295|E>>>16),E=y+(w^I^v)+A[14]+4259657740&4294967295,y=w+(E<<23&4294967295|E>>>9),E=v+(y^w^I)+A[1]+2763975236&4294967295,v=y+(E<<4&4294967295|E>>>28),E=I+(v^y^w)+A[4]+1272893353&4294967295,I=v+(E<<11&4294967295|E>>>21),E=w+(I^v^y)+A[7]+4139469664&4294967295,w=I+(E<<16&4294967295|E>>>16),E=y+(w^I^v)+A[10]+3200236656&4294967295,y=w+(E<<23&4294967295|E>>>9),E=v+(y^w^I)+A[13]+681279174&4294967295,v=y+(E<<4&4294967295|E>>>28),E=I+(v^y^w)+A[0]+3936430074&4294967295,I=v+(E<<11&4294967295|E>>>21),E=w+(I^v^y)+A[3]+3572445317&4294967295,w=I+(E<<16&4294967295|E>>>16),E=y+(w^I^v)+A[6]+76029189&4294967295,y=w+(E<<23&4294967295|E>>>9),E=v+(y^w^I)+A[9]+3654602809&4294967295,v=y+(E<<4&4294967295|E>>>28),E=I+(v^y^w)+A[12]+3873151461&4294967295,I=v+(E<<11&4294967295|E>>>21),E=w+(I^v^y)+A[15]+530742520&4294967295,w=I+(E<<16&4294967295|E>>>16),E=y+(w^I^v)+A[2]+3299628645&4294967295,y=w+(E<<23&4294967295|E>>>9),E=v+(w^(y|~I))+A[0]+4096336452&4294967295,v=y+(E<<6&4294967295|E>>>26),E=I+(y^(v|~w))+A[7]+1126891415&4294967295,I=v+(E<<10&4294967295|E>>>22),E=w+(v^(I|~y))+A[14]+2878612391&4294967295,w=I+(E<<15&4294967295|E>>>17),E=y+(I^(w|~v))+A[5]+4237533241&4294967295,y=w+(E<<21&4294967295|E>>>11),E=v+(w^(y|~I))+A[12]+1700485571&4294967295,v=y+(E<<6&4294967295|E>>>26),E=I+(y^(v|~w))+A[3]+2399980690&4294967295,I=v+(E<<10&4294967295|E>>>22),E=w+(v^(I|~y))+A[10]+4293915773&4294967295,w=I+(E<<15&4294967295|E>>>17),E=y+(I^(w|~v))+A[1]+2240044497&4294967295,y=w+(E<<21&4294967295|E>>>11),E=v+(w^(y|~I))+A[8]+1873313359&4294967295,v=y+(E<<6&4294967295|E>>>26),E=I+(y^(v|~w))+A[15]+4264355552&4294967295,I=v+(E<<10&4294967295|E>>>22),E=w+(v^(I|~y))+A[6]+2734768916&4294967295,w=I+(E<<15&4294967295|E>>>17),E=y+(I^(w|~v))+A[13]+1309151649&4294967295,y=w+(E<<21&4294967295|E>>>11),E=v+(w^(y|~I))+A[4]+4149444226&4294967295,v=y+(E<<6&4294967295|E>>>26),E=I+(y^(v|~w))+A[11]+3174756917&4294967295,I=v+(E<<10&4294967295|E>>>22),E=w+(v^(I|~y))+A[2]+718787259&4294967295,w=I+(E<<15&4294967295|E>>>17),E=y+(I^(w|~v))+A[9]+3951481745&4294967295,R.g[0]=R.g[0]+v&4294967295,R.g[1]=R.g[1]+(w+(E<<21&4294967295|E>>>11))&4294967295,R.g[2]=R.g[2]+w&4294967295,R.g[3]=R.g[3]+I&4294967295}s.prototype.v=function(R,v){v===void 0&&(v=R.length);const y=v-this.blockSize,A=this.C;let w=this.h,I=0;for(;I<v;){if(w==0)for(;I<=y;)r(this,R,I),I+=this.blockSize;if(typeof R=="string"){for(;I<v;)if(A[w++]=R.charCodeAt(I++),w==this.blockSize){r(this,A),w=0;break}}else for(;I<v;)if(A[w++]=R[I++],w==this.blockSize){r(this,A),w=0;break}}this.h=w,this.o+=v},s.prototype.A=function(){var R=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);R[0]=128;for(var v=1;v<R.length-8;++v)R[v]=0;v=this.o*8;for(var y=R.length-8;y<R.length;++y)R[y]=v&255,v/=256;for(this.v(R),R=Array(16),v=0,y=0;y<4;++y)for(let A=0;A<32;A+=8)R[v++]=this.g[y]>>>A&255;return R};function i(R,v){var y=c;return Object.prototype.hasOwnProperty.call(y,R)?y[R]:y[R]=v(R)}function o(R,v){this.h=v;const y=[];let A=!0;for(let w=R.length-1;w>=0;w--){const I=R[w]|0;A&&I==v||(y[w]=I,A=!1)}this.g=y}var c={};function l(R){return-128<=R&&R<128?i(R,function(v){return new o([v|0],v<0?-1:0)}):new o([R|0],R<0?-1:0)}function u(R){if(isNaN(R)||!isFinite(R))return d;if(R<0)return D(u(-R));const v=[];let y=1;for(let A=0;R>=y;A++)v[A]=R/y|0,y*=4294967296;return new o(v,0)}function f(R,v){if(R.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(R.charAt(0)=="-")return D(f(R.substring(1),v));if(R.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=u(Math.pow(v,8));let A=d;for(let I=0;I<R.length;I+=8){var w=Math.min(8,R.length-I);const E=parseInt(R.substring(I,I+w),v);w<8?(w=u(Math.pow(v,w)),A=A.j(w).add(u(E))):(A=A.j(y),A=A.add(u(E)))}return A}var d=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(k(this))return-D(this).m();let R=0,v=1;for(let y=0;y<this.g.length;y++){const A=this.i(y);R+=(A>=0?A:4294967296+A)*v,v*=4294967296}return R},t.toString=function(R){if(R=R||10,R<2||36<R)throw Error("radix out of range: "+R);if(S(this))return"0";if(k(this))return"-"+D(this).toString(R);const v=u(Math.pow(R,6));var y=this;let A="";for(;;){const w=z(y,v).g;y=U(y,w.j(v));let I=((y.g.length>0?y.g[0]:y.h)>>>0).toString(R);if(y=w,S(y))return I+A;for(;I.length<6;)I="0"+I;A=I+A}},t.i=function(R){return R<0?0:R<this.g.length?this.g[R]:this.h};function S(R){if(R.h!=0)return!1;for(let v=0;v<R.g.length;v++)if(R.g[v]!=0)return!1;return!0}function k(R){return R.h==-1}t.l=function(R){return R=U(this,R),k(R)?-1:S(R)?0:1};function D(R){const v=R.g.length,y=[];for(let A=0;A<v;A++)y[A]=~R.g[A];return new o(y,~R.h).add(m)}t.abs=function(){return k(this)?D(this):this},t.add=function(R){const v=Math.max(this.g.length,R.g.length),y=[];let A=0;for(let w=0;w<=v;w++){let I=A+(this.i(w)&65535)+(R.i(w)&65535),E=(I>>>16)+(this.i(w)>>>16)+(R.i(w)>>>16);A=E>>>16,I&=65535,E&=65535,y[w]=E<<16|I}return new o(y,y[y.length-1]&-2147483648?-1:0)};function U(R,v){return R.add(D(v))}t.j=function(R){if(S(this)||S(R))return d;if(k(this))return k(R)?D(this).j(D(R)):D(D(this).j(R));if(k(R))return D(this.j(D(R)));if(this.l(_)<0&&R.l(_)<0)return u(this.m()*R.m());const v=this.g.length+R.g.length,y=[];for(var A=0;A<2*v;A++)y[A]=0;for(A=0;A<this.g.length;A++)for(let w=0;w<R.g.length;w++){const I=this.i(A)>>>16,E=this.i(A)&65535,Te=R.i(w)>>>16,je=R.i(w)&65535;y[2*A+2*w]+=E*je,B(y,2*A+2*w),y[2*A+2*w+1]+=I*je,B(y,2*A+2*w+1),y[2*A+2*w+1]+=E*Te,B(y,2*A+2*w+1),y[2*A+2*w+2]+=I*Te,B(y,2*A+2*w+2)}for(R=0;R<v;R++)y[R]=y[2*R+1]<<16|y[2*R];for(R=v;R<2*v;R++)y[R]=0;return new o(y,0)};function B(R,v){for(;(R[v]&65535)!=R[v];)R[v+1]+=R[v]>>>16,R[v]&=65535,v++}function q(R,v){this.g=R,this.h=v}function z(R,v){if(S(v))throw Error("division by zero");if(S(R))return new q(d,d);if(k(R))return v=z(D(R),v),new q(D(v.g),D(v.h));if(k(v))return v=z(R,D(v)),new q(D(v.g),v.h);if(R.g.length>30){if(k(R)||k(v))throw Error("slowDivide_ only works with positive integers.");for(var y=m,A=v;A.l(R)<=0;)y=ee(y),A=ee(A);var w=ie(y,1),I=ie(A,1);for(A=ie(A,2),y=ie(y,2);!S(A);){var E=I.add(A);E.l(R)<=0&&(w=w.add(y),I=E),A=ie(A,1),y=ie(y,1)}return v=U(R,w.j(v)),new q(w,v)}for(w=d;R.l(v)>=0;){for(y=Math.max(1,Math.floor(R.m()/v.m())),A=Math.ceil(Math.log(y)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),I=u(y),E=I.j(v);k(E)||E.l(R)>0;)y-=A,I=u(y),E=I.j(v);S(I)&&(I=m),w=w.add(I),R=U(R,E)}return new q(w,R)}t.B=function(R){return z(this,R).h},t.and=function(R){const v=Math.max(this.g.length,R.g.length),y=[];for(let A=0;A<v;A++)y[A]=this.i(A)&R.i(A);return new o(y,this.h&R.h)},t.or=function(R){const v=Math.max(this.g.length,R.g.length),y=[];for(let A=0;A<v;A++)y[A]=this.i(A)|R.i(A);return new o(y,this.h|R.h)},t.xor=function(R){const v=Math.max(this.g.length,R.g.length),y=[];for(let A=0;A<v;A++)y[A]=this.i(A)^R.i(A);return new o(y,this.h^R.h)};function ee(R){const v=R.g.length+1,y=[];for(let A=0;A<v;A++)y[A]=R.i(A)<<1|R.i(A-1)>>>31;return new o(y,R.h)}function ie(R,v){const y=v>>5;v%=32;const A=R.g.length-y,w=[];for(let I=0;I<A;I++)w[I]=v>0?R.i(I+y)>>>v|R.i(I+y+1)<<32-v:R.i(I+y);return new o(w,R.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,xg=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,ps=o}).apply(typeof gd<"u"?gd:typeof self<"u"?self:typeof window<"u"?window:{});var No=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mg,pi,Lg,zo,Rl,Fg,Ug,Bg;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof No=="object"&&No];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var s=n(this);function r(a,h){if(h)e:{var p=s;a=a.split(".");for(var g=0;g<a.length-1;g++){var P=a[g];if(!(P in p))break e;p=p[P]}a=a[a.length-1],g=p[a],h=h(g),h!=g&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}r("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(a){return a||function(h){var p=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&p.push([g,h[g]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function l(a,h,p){return a.call.apply(a.bind,arguments)}function u(a,h,p){return u=l,u.apply(null,arguments)}function f(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function d(a,h){function p(){}p.prototype=h.prototype,a.Z=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(g,P,V){for(var K=Array(arguments.length-2),me=2;me<arguments.length;me++)K[me-2]=arguments[me];return h.prototype[P].apply(g,K)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function _(a){const h=a.length;if(h>0){const p=Array(h);for(let g=0;g<h;g++)p[g]=a[g];return p}return[]}function S(a,h){for(let g=1;g<arguments.length;g++){const P=arguments[g];var p=typeof P;if(p=p!="object"?p:P?Array.isArray(P)?"array":p:"null",p=="array"||p=="object"&&typeof P.length=="number"){p=a.length||0;const V=P.length||0;a.length=p+V;for(let K=0;K<V;K++)a[p+K]=P[K]}else a.push(P)}}class k{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function D(a){o.setTimeout(()=>{throw a},0)}function U(){var a=R;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class B{constructor(){this.h=this.g=null}add(h,p){const g=q.get();g.set(h,p),this.h?this.h.next=g:this.g=g,this.h=g}}var q=new k(()=>new z,a=>a.reset());class z{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let ee,ie=!1,R=new B,v=()=>{const a=Promise.resolve(void 0);ee=()=>{a.then(y)}};function y(){for(var a;a=U();){try{a.h.call(a.g)}catch(p){D(p)}var h=q;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}ie=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function w(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var I=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,h),o.removeEventListener("test",p,h)}catch{}return a})();function E(a){return/^[\s\xa0]*$/.test(a)}function Te(a,h){w.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}d(Te,w),Te.prototype.init=function(a,h){const p=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Te.Z.h.call(this)},Te.prototype.h=function(){Te.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var je="closure_listenable_"+(Math.random()*1e6|0),ke=0;function de(a,h,p,g,P){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!g,this.ha=P,this.key=++ke,this.da=this.fa=!1}function Ie(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ct(a,h,p){for(const g in a)h.call(p,a[g],g,a)}function tn(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function Dt(a){const h={};for(const p in a)h[p]=a[p];return h}const it="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wn(a,h){let p,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(p in g)a[p]=g[p];for(let V=0;V<it.length;V++)p=it[V],Object.prototype.hasOwnProperty.call(g,p)&&(a[p]=g[p])}}function Wt(a){this.src=a,this.g={},this.h=0}Wt.prototype.add=function(a,h,p,g,P){const V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);const K=ht(a,h,g,P);return K>-1?(h=a[K],p||(h.fa=!1)):(h=new de(h,this.src,V,!!g,P),h.fa=p,a.push(h)),h};function qn(a,h){const p=h.type;if(p in a.g){var g=a.g[p],P=Array.prototype.indexOf.call(g,h,void 0),V;(V=P>=0)&&Array.prototype.splice.call(g,P,1),V&&(Ie(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function ht(a,h,p,g){for(let P=0;P<a.length;++P){const V=a[P];if(!V.da&&V.listener==h&&V.capture==!!p&&V.ha==g)return P}return-1}var x="closure_lm_"+(Math.random()*1e6|0),J={};function Q(a,h,p,g,P){if(Array.isArray(h)){for(let V=0;V<h.length;V++)Q(a,h[V],p,g,P);return null}return p=G(p),a&&a[je]?a.J(h,p,c(g)?!!g.capture:!1,P):te(a,h,p,!1,g,P)}function te(a,h,p,g,P,V){if(!h)throw Error("Invalid event type");const K=c(P)?!!P.capture:!!P;let me=F(a);if(me||(a[x]=me=new Wt(a)),p=me.add(h,p,g,K,V),p.proxy)return p;if(g=Ve(),p.proxy=g,g.src=a,g.listener=p,a.addEventListener)I||(P=K),P===void 0&&(P=!1),a.addEventListener(h.toString(),g,P);else if(a.attachEvent)a.attachEvent(C(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Ve(){function a(p){return h.call(a.src,a.listener,p)}const h=M;return a}function T(a,h,p,g,P){if(Array.isArray(h))for(var V=0;V<h.length;V++)T(a,h[V],p,g,P);else g=c(g)?!!g.capture:!!g,p=G(p),a&&a[je]?(a=a.i,V=String(h).toString(),V in a.g&&(h=a.g[V],p=ht(h,p,g,P),p>-1&&(Ie(h[p]),Array.prototype.splice.call(h,p,1),h.length==0&&(delete a.g[V],a.h--)))):a&&(a=F(a))&&(h=a.g[h.toString()],a=-1,h&&(a=ht(h,p,g,P)),(p=a>-1?h[a]:null)&&b(p))}function b(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[je])qn(h.i,a);else{var p=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(p,g,a.capture):h.detachEvent?h.detachEvent(C(p),g):h.addListener&&h.removeListener&&h.removeListener(g),(p=F(h))?(qn(p,a),p.h==0&&(p.src=null,h[x]=null)):Ie(a)}}}function C(a){return a in J?J[a]:J[a]="on"+a}function M(a,h){if(a.da)a=!0;else{h=new Te(h,this);const p=a.listener,g=a.ha||a.src;a.fa&&b(a),a=p.call(g,h)}return a}function F(a){return a=a[x],a instanceof Wt?a:null}var N="__closure_events_fn_"+(Math.random()*1e9>>>0);function G(a){return typeof a=="function"?a:(a[N]||(a[N]=function(h){return a.handleEvent(h)}),a[N])}function H(){A.call(this),this.i=new Wt(this),this.M=this,this.G=null}d(H,A),H.prototype[je]=!0,H.prototype.removeEventListener=function(a,h,p,g){T(this,a,h,p,g)};function $(a,h){var p,g=a.G;if(g)for(p=[];g;g=g.G)p.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new w(h,a);else if(h instanceof w)h.target=h.target||a;else{var P=h;h=new w(g,a),wn(h,P)}P=!0;let V,K;if(p)for(K=p.length-1;K>=0;K--)V=h.g=p[K],P=j(V,g,!0,h)&&P;if(V=h.g=a,P=j(V,g,!0,h)&&P,P=j(V,g,!1,h)&&P,p)for(K=0;K<p.length;K++)V=h.g=p[K],P=j(V,g,!1,h)&&P}H.prototype.N=function(){if(H.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const p=a.g[h];for(let g=0;g<p.length;g++)Ie(p[g]);delete a.g[h],a.h--}}this.G=null},H.prototype.J=function(a,h,p,g){return this.i.add(String(a),h,!1,p,g)},H.prototype.K=function(a,h,p,g){return this.i.add(String(a),h,!0,p,g)};function j(a,h,p,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let P=!0;for(let V=0;V<h.length;++V){const K=h[V];if(K&&!K.da&&K.capture==p){const me=K.listener,Ze=K.ha||K.src;K.fa&&qn(a.i,K),P=me.call(Ze,g)!==!1&&P}}return P&&!g.defaultPrevented}function re(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Y(a){a.g=re(()=>{a.g=null,a.i&&(a.i=!1,Y(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class se extends A{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Y(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oe(a){A.call(this),this.h=a,this.g={}}d(oe,A);var _e=[];function De(a){Ct(a.g,function(h,p){this.g.hasOwnProperty(p)&&b(h)},a),a.g={}}oe.prototype.N=function(){oe.Z.N.call(this),De(this)},oe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var be=o.JSON.stringify,ft=o.JSON.parse,dt=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Nt(){}function Ot(){}var Kt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function or(){w.call(this,"d")}d(or,w);function ot(){w.call(this,"c")}d(ot,w);var tt={},Wr=null;function Vs(){return Wr=Wr||new H}tt.Ia="serverreachability";function gh(a){w.call(this,tt.Ia,a)}d(gh,w);function Kr(a){const h=Vs();$(h,new gh(h))}tt.STAT_EVENT="statevent";function _h(a,h){w.call(this,tt.STAT_EVENT,a),this.stat=h}d(_h,w);function At(a){const h=Vs();$(h,new _h(h,a))}tt.Ja="timingevent";function yh(a,h){w.call(this,tt.Ja,a),this.size=h}d(yh,w);function Gr(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Qr(){this.g=!0}Qr.prototype.ua=function(){this.g=!1};function cv(a,h,p,g,P,V){a.info(function(){if(a.g)if(V){var K="",me=V.split("&");for(let Ne=0;Ne<me.length;Ne++){var Ze=me[Ne].split("=");if(Ze.length>1){const nt=Ze[0];Ze=Ze[1];const sn=nt.split("_");K=sn.length>=2&&sn[1]=="type"?K+(nt+"="+Ze+"&"):K+(nt+"=redacted&")}}}else K=null;else K=V;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+h+`
`+p+`
`+K})}function lv(a,h,p,g,P,V,K){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+h+`
`+p+`
`+V+" "+K})}function ar(a,h,p,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+hv(a,p)+(g?" "+g:"")})}function uv(a,h){a.info(function(){return"TIMEOUT: "+h})}Qr.prototype.info=function(){};function hv(a,h){if(!a.g)return h;if(!h)return null;try{const V=JSON.parse(h);if(V){for(a=0;a<V.length;a++)if(Array.isArray(V[a])){var p=V[a];if(!(p.length<2)){var g=p[1];if(Array.isArray(g)&&!(g.length<1)){var P=g[0];if(P!="noop"&&P!="stop"&&P!="close")for(let K=1;K<g.length;K++)g[K]=""}}}}return be(V)}catch{return h}}var vo={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},vh={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Eh;function _c(){}d(_c,Nt),_c.prototype.g=function(){return new XMLHttpRequest},Eh=new _c;function Yr(a){return encodeURIComponent(String(a))}function fv(a){var h=1;a=a.split(":");const p=[];for(;h>0&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function Hn(a,h,p,g){this.j=a,this.i=h,this.l=p,this.S=g||1,this.V=new oe(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Th}function Th(){this.i=null,this.g="",this.h=!1}var Ih={},yc={};function vc(a,h,p){a.M=1,a.A=To(nn(h)),a.u=p,a.R=!0,wh(a,null)}function wh(a,h){a.F=Date.now(),Eo(a),a.B=nn(a.A);var p=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),Mh(p.i,"t",g),a.C=0,p=a.j.L,a.h=new Th,a.g=ef(a.j,p?h:null,!a.u),a.P>0&&(a.O=new se(u(a.Y,a,a.g),a.P)),h=a.V,p=a.g,g=a.ba;var P="readystatechange";Array.isArray(P)||(P&&(_e[0]=P.toString()),P=_e);for(let V=0;V<P.length;V++){const K=Q(p,P[V],g||h.handleEvent,!1,h.h||h);if(!K)break;h.g[K.key]=K}h=a.J?Dt(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Kr(),cv(a.i,a.v,a.B,a.l,a.S,a.u)}Hn.prototype.ba=function(a){a=a.target;const h=this.O;h&&Kn(a)==3?h.j():this.Y(a)},Hn.prototype.Y=function(a){try{if(a==this.g)e:{const me=Kn(this.g),Ze=this.g.ya(),Ne=this.g.ca();if(!(me<3)&&(me!=3||this.g&&(this.h.h||this.g.la()||qh(this.g)))){this.K||me!=4||Ze==7||(Ze==8||Ne<=0?Kr(3):Kr(2)),Ec(this);var h=this.g.ca();this.X=h;var p=dv(this);if(this.o=h==200,lv(this.i,this.v,this.B,this.l,this.S,me,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,P=this.g;if((g=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(g)){var V=g;break t}}V=null}if(a=V)ar(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Tc(this,a);else{this.o=!1,this.m=3,At(12),Ds(this),Xr(this);break e}}if(this.R){a=!0;let nt;for(;!this.K&&this.C<p.length;)if(nt=pv(this,p),nt==yc){me==4&&(this.m=4,At(14),a=!1),ar(this.i,this.l,null,"[Incomplete Response]");break}else if(nt==Ih){this.m=4,At(15),ar(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else ar(this.i,this.l,nt,null),Tc(this,nt);if(Ah(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),me!=4||p.length!=0||this.h.h||(this.m=1,At(16),a=!1),this.o=this.o&&a,!a)ar(this.i,this.l,p,"[Invalid Chunked Response]"),Ds(this),Xr(this);else if(p.length>0&&!this.W){this.W=!0;var K=this.j;K.g==this&&K.aa&&!K.P&&(K.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),Pc(K),K.P=!0,At(11))}}else ar(this.i,this.l,p,null),Tc(this,p);me==4&&Ds(this),this.o&&!this.K&&(me==4?Yh(this.j,this):(this.o=!1,Eo(this)))}else Cv(this.g),h==400&&p.indexOf("Unknown SID")>0?(this.m=3,At(12)):(this.m=0,At(13)),Ds(this),Xr(this)}}}catch{}finally{}};function dv(a){if(!Ah(a))return a.g.la();const h=qh(a.g);if(h==="")return"";let p="";const g=h.length,P=Kn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Ds(a),Xr(a),"";a.h.i=new o.TextDecoder}for(let V=0;V<g;V++)a.h.h=!0,p+=a.h.i.decode(h[V],{stream:!(P&&V==g-1)});return h.length=0,a.h.g+=p,a.C=0,a.h.g}function Ah(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function pv(a,h){var p=a.C,g=h.indexOf(`
`,p);return g==-1?yc:(p=Number(h.substring(p,g)),isNaN(p)?Ih:(g+=1,g+p>h.length?yc:(h=h.slice(g,g+p),a.C=g+p,h)))}Hn.prototype.cancel=function(){this.K=!0,Ds(this)};function Eo(a){a.T=Date.now()+a.H,bh(a,a.H)}function bh(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Gr(u(a.aa,a),h)}function Ec(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Hn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(uv(this.i,this.B),this.M!=2&&(Kr(),At(17)),Ds(this),this.m=2,Xr(this)):bh(this,this.T-a)};function Xr(a){a.j.I==0||a.K||Yh(a.j,a)}function Ds(a){Ec(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,De(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Tc(a,h){try{var p=a.j;if(p.I!=0&&(p.g==a||Ic(p.h,a))){if(!a.L&&Ic(p.h,a)&&p.I==3){try{var g=p.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)Ro(p),Ao(p);else break e;Cc(p),At(18)}}else p.xa=P[1],0<p.xa-p.K&&P[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=Gr(u(p.Va,p),6e3));Ch(p.h)<=1&&p.ta&&(p.ta=void 0)}else Os(p,11)}else if((a.L||p.g==a)&&Ro(p),!E(h))for(P=p.Ba.g.parse(h),h=0;h<P.length;h++){let Ne=P[h];const nt=Ne[0];if(!(nt<=p.K))if(p.K=nt,Ne=Ne[1],p.I==2)if(Ne[0]=="c"){p.M=Ne[1],p.ba=Ne[2];const sn=Ne[3];sn!=null&&(p.ka=sn,p.j.info("VER="+p.ka));const xs=Ne[4];xs!=null&&(p.za=xs,p.j.info("SVER="+p.za));const Gn=Ne[5];Gn!=null&&typeof Gn=="number"&&Gn>0&&(g=1.5*Gn,p.O=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const Qn=a.g;if(Qn){const Co=Qn.g?Qn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Co){var V=g.h;V.g||Co.indexOf("spdy")==-1&&Co.indexOf("quic")==-1&&Co.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(wc(V,V.h),V.h=null))}if(g.G){const kc=Qn.g?Qn.g.getResponseHeader("X-HTTP-Session-Id"):null;kc&&(g.wa=kc,Fe(g.J,g.G,kc))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),g=p;var K=a;if(g.na=Zh(g,g.L?g.ba:null,g.W),K.L){Ph(g.h,K);var me=K,Ze=g.O;Ze&&(me.H=Ze),me.D&&(Ec(me),Eo(me)),g.g=K}else Gh(g);p.i.length>0&&bo(p)}else Ne[0]!="stop"&&Ne[0]!="close"||Os(p,7);else p.I==3&&(Ne[0]=="stop"||Ne[0]=="close"?Ne[0]=="stop"?Os(p,7):Sc(p):Ne[0]!="noop"&&p.l&&p.l.qa(Ne),p.A=0)}}Kr(4)}catch{}}var mv=class{constructor(a,h){this.g=a,this.map=h}};function Rh(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Sh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ch(a){return a.h?1:a.g?a.g.size:0}function Ic(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function wc(a,h){a.g?a.g.add(h):a.h=h}function Ph(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Rh.prototype.cancel=function(){if(this.i=kh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function kh(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.G);return h}return _(a.i)}var Vh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gv(a,h){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const g=a[p].indexOf("=");let P,V=null;g>=0?(P=a[p].substring(0,g),V=a[p].substring(g+1)):P=a[p],h(P,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function zn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof zn?(this.l=a.l,Jr(this,a.j),this.o=a.o,this.g=a.g,Zr(this,a.u),this.h=a.h,Ac(this,Lh(a.i)),this.m=a.m):a&&(h=String(a).match(Vh))?(this.l=!1,Jr(this,h[1]||"",!0),this.o=ei(h[2]||""),this.g=ei(h[3]||"",!0),Zr(this,h[4]),this.h=ei(h[5]||"",!0),Ac(this,h[6]||"",!0),this.m=ei(h[7]||"")):(this.l=!1,this.i=new ni(null,this.l))}zn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(ti(h,Dh,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ti(h,Dh,!0),"@"),a.push(Yr(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(ti(p,p.charAt(0)=="/"?vv:yv,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",ti(p,Tv)),a.join("")},zn.prototype.resolve=function(a){const h=nn(this);let p=!!a.j;p?Jr(h,a.j):p=!!a.o,p?h.o=a.o:p=!!a.g,p?h.g=a.g:p=a.u!=null;var g=a.h;if(p)Zr(h,a.u);else if(p=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var P=h.h.lastIndexOf("/");P!=-1&&(g=h.h.slice(0,P+1)+g)}if(P=g,P==".."||P==".")g="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){g=P.lastIndexOf("/",0)==0,P=P.split("/");const V=[];for(let K=0;K<P.length;){const me=P[K++];me=="."?g&&K==P.length&&V.push(""):me==".."?((V.length>1||V.length==1&&V[0]!="")&&V.pop(),g&&K==P.length&&V.push("")):(V.push(me),g=!0)}g=V.join("/")}else g=P}return p?h.h=g:p=a.i.toString()!=="",p?Ac(h,Lh(a.i)):p=!!a.m,p&&(h.m=a.m),h};function nn(a){return new zn(a)}function Jr(a,h,p){a.j=p?ei(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Zr(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Ac(a,h,p){h instanceof ni?(a.i=h,Iv(a.i,a.l)):(p||(h=ti(h,Ev)),a.i=new ni(h,a.l))}function Fe(a,h,p){a.i.set(h,p)}function To(a){return Fe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function ei(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ti(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,_v),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function _v(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Dh=/[#\/\?@]/g,yv=/[#\?:]/g,vv=/[#\?]/g,Ev=/[#\?@]/g,Tv=/#/g;function ni(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Ns(a){a.g||(a.g=new Map,a.h=0,a.i&&gv(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=ni.prototype,t.add=function(a,h){Ns(this),this.i=null,a=cr(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function Nh(a,h){Ns(a),h=cr(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Oh(a,h){return Ns(a),h=cr(a,h),a.g.has(h)}t.forEach=function(a,h){Ns(this),this.g.forEach(function(p,g){p.forEach(function(P){a.call(h,P,g,this)},this)},this)};function xh(a,h){Ns(a);let p=[];if(typeof h=="string")Oh(a,h)&&(p=p.concat(a.g.get(cr(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)p=p.concat(a[h]);return p}t.set=function(a,h){return Ns(this),this.i=null,a=cr(this,a),Oh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=xh(this,a),a.length>0?String(a[0]):h):h};function Mh(a,h,p){Nh(a,h),p.length>0&&(a.i=null,a.g.set(cr(a,h),_(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var p=h[g];const P=Yr(p);p=xh(this,p);for(let V=0;V<p.length;V++){let K=P;p[V]!==""&&(K+="="+Yr(p[V])),a.push(K)}}return this.i=a.join("&")};function Lh(a){const h=new ni;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function cr(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Iv(a,h){h&&!a.j&&(Ns(a),a.i=null,a.g.forEach(function(p,g){const P=g.toLowerCase();g!=P&&(Nh(this,g),Mh(this,P,p))},a)),a.j=h}function wv(a,h){const p=new Qr;if(o.Image){const g=new Image;g.onload=f(Wn,p,"TestLoadImage: loaded",!0,h,g),g.onerror=f(Wn,p,"TestLoadImage: error",!1,h,g),g.onabort=f(Wn,p,"TestLoadImage: abort",!1,h,g),g.ontimeout=f(Wn,p,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function Av(a,h){const p=new Qr,g=new AbortController,P=setTimeout(()=>{g.abort(),Wn(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(V=>{clearTimeout(P),V.ok?Wn(p,"TestPingServer: ok",!0,h):Wn(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),Wn(p,"TestPingServer: error",!1,h)})}function Wn(a,h,p,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(p)}catch{}}function bv(){this.g=new dt}function bc(a){this.i=a.Sb||null,this.h=a.ab||!1}d(bc,Nt),bc.prototype.g=function(){return new Io(this.i,this.h)};function Io(a,h){H.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}d(Io,H),t=Io.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,ri(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,si(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ri(this)),this.g&&(this.readyState=3,ri(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Fh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Fh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?si(this):ri(this),this.readyState==3&&Fh(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,si(this))},t.Na=function(a){this.g&&(this.response=a,si(this))},t.ga=function(){this.g&&si(this)};function si(a){a.readyState=4,a.l=null,a.j=null,a.B=null,ri(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function ri(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Io.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Uh(a){let h="";return Ct(a,function(p,g){h+=g,h+=":",h+=p,h+=`\r
`}),h}function Rc(a,h,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=Uh(p),typeof a=="string"?p!=null&&Yr(p):Fe(a,h,p))}function He(a){H.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}d(He,H);var Rv=/^https?$/i,Sv=["POST","PUT"];t=He.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Eh.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){Bh(this,V);return}if(a=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)p.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())p.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(V=>V.toLowerCase()=="content-type"),P=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Sv,h,void 0)>=0)||g||P||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,K]of p)this.g.setRequestHeader(V,K);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(V){Bh(this,V)}};function Bh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,$h(a),wo(a)}function $h(a){a.A||(a.A=!0,$(a,"complete"),$(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,$(this,"complete"),$(this,"abort"),wo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wo(this,!0)),He.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?jh(this):this.Xa())},t.Xa=function(){jh(this)};function jh(a){if(a.h&&typeof i<"u"){if(a.v&&Kn(a)==4)setTimeout(a.Ca.bind(a),0);else if($(a,"readystatechange"),Kn(a)==4){a.h=!1;try{const V=a.ca();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var g;if(g=V===0){let K=String(a.D).match(Vh)[1]||null;!K&&o.self&&o.self.location&&(K=o.self.location.protocol.slice(0,-1)),g=!Rv.test(K?K.toLowerCase():"")}p=g}if(p)$(a,"complete"),$(a,"success");else{a.o=6;try{var P=Kn(a)>2?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.ca()+"]",$h(a)}}finally{wo(a)}}}}function wo(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,h||$(a,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Kn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Kn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),ft(h)}};function qh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Cv(a){const h={};a=(a.g&&Kn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(E(a[g]))continue;var p=fv(a[g]);const P=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const V=h[P]||[];h[P]=V,V.push(p)}tn(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ii(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function Hh(a){this.za=0,this.i=[],this.j=new Qr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ii("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ii("baseRetryDelayMs",5e3,a),this.Za=ii("retryDelaySeedMs",1e4,a),this.Ta=ii("forwardChannelMaxRetries",2,a),this.va=ii("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Rh(a&&a.concurrentRequestLimit),this.Ba=new bv,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Hh.prototype,t.ka=8,t.I=1,t.connect=function(a,h,p,g){At(0),this.W=a,this.H=h||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.J=Zh(this,null,this.W),bo(this)};function Sc(a){if(zh(a),a.I==3){var h=a.V++,p=nn(a.J);if(Fe(p,"SID",a.M),Fe(p,"RID",h),Fe(p,"TYPE","terminate"),oi(a,p),h=new Hn(a,a.j,h),h.M=2,h.A=To(nn(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=h.A,p=!0),p||(h.g=ef(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Eo(h)}Jh(a)}function Ao(a){a.g&&(Pc(a),a.g.cancel(),a.g=null)}function zh(a){Ao(a),a.v&&(o.clearTimeout(a.v),a.v=null),Ro(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function bo(a){if(!Sh(a.h)&&!a.m){a.m=!0;var h=a.Ea;ee||v(),ie||(ee(),ie=!0),R.add(h,a),a.D=0}}function Pv(a,h){return Ch(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Gr(u(a.Ea,a,h),Xh(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const P=new Hn(this,this.j,a);let V=this.o;if(this.U&&(V?(V=Dt(V),wn(V,this.U)):V=this.U),this.u!==null||this.R||(P.J=V,V=null),this.S)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Kh(this,P,h),p=nn(this.J),Fe(p,"RID",a),Fe(p,"CVER",22),this.G&&Fe(p,"X-HTTP-Session-Id",this.G),oi(this,p),V&&(this.R?h="headers="+Yr(Uh(V))+"&"+h:this.u&&Rc(p,this.u,V)),wc(this.h,P),this.Ra&&Fe(p,"TYPE","init"),this.S?(Fe(p,"$req",h),Fe(p,"SID","null"),P.U=!0,vc(P,p,null)):vc(P,p,h),this.I=2}}else this.I==3&&(a?Wh(this,a):this.i.length==0||Sh(this.h)||Wh(this))};function Wh(a,h){var p;h?p=h.l:p=a.V++;const g=nn(a.J);Fe(g,"SID",a.M),Fe(g,"RID",p),Fe(g,"AID",a.K),oi(a,g),a.u&&a.o&&Rc(g,a.u,a.o),p=new Hn(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Kh(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),wc(a.h,p),vc(p,g,h)}function oi(a,h){a.H&&Ct(a.H,function(p,g){Fe(h,g,p)}),a.l&&Ct({},function(p,g){Fe(h,g,p)})}function Kh(a,h,p){p=Math.min(a.i.length,p);const g=a.l?u(a.l.Ka,a.l,a):null;e:{var P=a.i;let me=-1;for(;;){const Ze=["count="+p];me==-1?p>0?(me=P[0].g,Ze.push("ofs="+me)):me=0:Ze.push("ofs="+me);let Ne=!0;for(let nt=0;nt<p;nt++){var V=P[nt].g;const sn=P[nt].map;if(V-=me,V<0)me=Math.max(0,P[nt].g-100),Ne=!1;else try{V="req"+V+"_"||"";try{var K=sn instanceof Map?sn:Object.entries(sn);for(const[xs,Gn]of K){let Qn=Gn;c(Gn)&&(Qn=be(Gn)),Ze.push(V+xs+"="+encodeURIComponent(Qn))}}catch(xs){throw Ze.push(V+"type="+encodeURIComponent("_badmap")),xs}}catch{g&&g(sn)}}if(Ne){K=Ze.join("&");break e}}K=void 0}return a=a.i.splice(0,p),h.G=a,K}function Gh(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;ee||v(),ie||(ee(),ie=!0),R.add(h,a),a.A=0}}function Cc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Gr(u(a.Da,a),Xh(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Qh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Gr(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,At(10),Ao(this),Qh(this))};function Pc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Qh(a){a.g=new Hn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=nn(a.na);Fe(h,"RID","rpc"),Fe(h,"SID",a.M),Fe(h,"AID",a.K),Fe(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Fe(h,"TO",a.ia),Fe(h,"TYPE","xmlhttp"),oi(a,h),a.u&&a.o&&Rc(h,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=To(nn(h)),p.u=null,p.R=!0,wh(p,a)}t.Va=function(){this.C!=null&&(this.C=null,Ao(this),Cc(this),At(19))};function Ro(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Yh(a,h){var p=null;if(a.g==h){Ro(a),Pc(a),a.g=null;var g=2}else if(Ic(a.h,h))p=h.G,Ph(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){p=h.u?h.u.length:0,h=Date.now()-h.F;var P=a.D;g=Vs(),$(g,new yh(g,p)),bo(a)}else Gh(a);else if(P=h.m,P==3||P==0&&h.X>0||!(g==1&&Pv(a,h)||g==2&&Cc(a)))switch(p&&p.length>0&&(h=a.h,h.i=h.i.concat(p)),P){case 1:Os(a,5);break;case 4:Os(a,10);break;case 3:Os(a,6);break;default:Os(a,2)}}}function Xh(a,h){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*h}function Os(a,h){if(a.j.info("Error code "+h),h==2){var p=u(a.bb,a),g=a.Ua;const P=!g;g=new zn(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Jr(g,"https"),To(g),P?wv(g.toString(),p):Av(g.toString(),p)}else At(2);a.I=0,a.l&&a.l.pa(h),Jh(a),zh(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function Jh(a){if(a.I=0,a.ja=[],a.l){const h=kh(a.h);(h.length!=0||a.i.length!=0)&&(S(a.ja,h),S(a.ja,a.i),a.h.i.length=0,_(a.i),a.i.length=0),a.l.oa()}}function Zh(a,h,p){var g=p instanceof zn?nn(p):new zn(p);if(g.g!="")h&&(g.g=h+"."+g.g),Zr(g,g.u);else{var P=o.location;g=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;const V=new zn(null);g&&Jr(V,g),h&&(V.g=h),P&&Zr(V,P),p&&(V.h=p),g=V}return p=a.G,h=a.wa,p&&h&&Fe(g,p,h),Fe(g,"VER",a.ka),oi(a,g),g}function ef(a,h,p){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new He(new bc({ab:p})):new He(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function tf(){}t=tf.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function So(){}So.prototype.g=function(a,h){return new xt(a,h)};function xt(a,h){H.call(this),this.g=new Hh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!E(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!E(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new lr(this)}d(xt,H),xt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){Sc(this.g)},xt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=be(a),a=p);h.i.push(new mv(h.Ya++,a)),h.I==3&&bo(h)},xt.prototype.N=function(){this.g.l=null,delete this.j,Sc(this.g),delete this.g,xt.Z.N.call(this)};function nf(a){or.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}d(nf,or);function sf(){ot.call(this),this.status=1}d(sf,ot);function lr(a){this.g=a}d(lr,tf),lr.prototype.ra=function(){$(this.g,"a")},lr.prototype.qa=function(a){$(this.g,new nf(a))},lr.prototype.pa=function(a){$(this.g,new sf)},lr.prototype.oa=function(){$(this.g,"b")},So.prototype.createWebChannel=So.prototype.g,xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,Bg=function(){return new So},Ug=function(){return Vs()},Fg=tt,Rl={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},vo.NO_ERROR=0,vo.TIMEOUT=8,vo.HTTP_ERROR=6,zo=vo,vh.COMPLETE="complete",Lg=vh,Ot.EventType=Kt,Kt.OPEN="a",Kt.CLOSE="b",Kt.ERROR="c",Kt.MESSAGE="d",H.prototype.listen=H.prototype.J,pi=Ot,He.prototype.listenOnce=He.prototype.K,He.prototype.getLastError=He.prototype.Ha,He.prototype.getLastErrorCode=He.prototype.ya,He.prototype.getStatus=He.prototype.ca,He.prototype.getResponseJson=He.prototype.La,He.prototype.getResponseText=He.prototype.la,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Fa,Mg=He}).apply(typeof No<"u"?No:typeof self<"u"?self:typeof window<"u"?window:{});const _d="@firebase/firestore",yd="4.9.2";/**
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
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
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
 */let Ur="12.3.0";/**
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
 */const Ys=new Tu("@firebase/firestore");function mr(){return Ys.logLevel}function Z(t,...e){if(Ys.logLevel<=ye.DEBUG){const n=e.map(Au);Ys.debug(`Firestore (${Ur}): ${t}`,...n)}}function Fn(t,...e){if(Ys.logLevel<=ye.ERROR){const n=e.map(Au);Ys.error(`Firestore (${Ur}): ${t}`,...n)}}function Vr(t,...e){if(Ys.logLevel<=ye.WARN){const n=e.map(Au);Ys.warn(`Firestore (${Ur}): ${t}`,...n)}}function Au(t){if(typeof t=="string")return t;try{/**
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
 */function ce(t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,$g(t,s,n)}function $g(t,e,n){let s=`FIRESTORE (${Ur}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Fn(s),new Error(s)}function Pe(t,e,n,s){let r="Unexpected state";typeof n=="string"?r=n:s=n,t||$g(e,r,s)}function fe(t,e){return t}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends Tn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ms{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
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
 */class jg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(gt.UNAUTHENTICATED)))}shutdown(){}}class EA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class TA{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Pe(this.o===void 0,42304);let s=this.i;const r=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let i=new ms;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ms,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await r(this.currentUser)}))},c=l=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ms)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Pe(typeof s.accessToken=="string",31837,{l:s}),new jg(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string",2055,{h:e}),new gt(e)}}class IA{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class wA{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new IA(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(gt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class vd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class AA{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,$t(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Pe(this.o===void 0,3512);const s=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>s(i)))};const r=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new vd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Pe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new vd(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function bA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class bu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=bA(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%62))}return s}}function ve(t,e){return t<e?-1:t>e?1:0}function Sl(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const r=t.charAt(s),i=e.charAt(s);if(r!==i)return Xc(r)===Xc(i)?ve(r,i):Xc(r)?1:-1}return ve(t.length,e.length)}const RA=55296,SA=57343;function Xc(t){const e=t.charCodeAt(0);return e>=RA&&e<=SA}function Dr(t,e,n){return t.length===e.length&&t.every(((s,r)=>n(s,e[r])))}/**
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
 */const Ed="__name__";class an{constructor(e,n,s){n===void 0?n=0:n>e.length&&ce(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&ce(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return an.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof an?e.forEach((s=>{n.push(s)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=an.compareSegments(e.get(r),n.get(r));if(i!==0)return i}return ve(e.length,n.length)}static compareSegments(e,n){const s=an.isNumericId(e),r=an.isNumericId(n);return s&&!r?-1:!s&&r?1:s&&r?an.extractNumericId(e).compare(an.extractNumericId(n)):Sl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ps.fromString(e.substring(4,e.length-2))}}class Le extends an{construct(e,n,s){return new Le(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new X(O.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((r=>r.length>0)))}return new Le(n)}static emptyPath(){return new Le([])}}const CA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends an{construct(e,n,s){return new lt(e,n,s)}static isValidIdentifier(e){return CA.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ed}static keyField(){return new lt([Ed])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new X(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const c=e[r];if(c==="\\"){if(r+1===e.length)throw new X(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new X(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,r+=2}else c==="`"?(o=!o,r++):c!=="."||o?(s+=c,r++):(i(),r++)}if(i(),o)throw new X(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new lt(n)}static emptyPath(){return new lt([])}}/**
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
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(Le.fromString(e))}static fromName(e){return new ne(Le.fromString(e).popFirst(5))}static empty(){return new ne(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new Le(e.slice()))}}/**
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
 */function qg(t,e,n){if(!n)throw new X(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function PA(t,e,n,s){if(e===!0&&s===!0)throw new X(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Td(t){if(!ne.isDocumentKey(t))throw new X(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Id(t){if(ne.isDocumentKey(t))throw new X(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Hg(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Qa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ce(12329,{type:typeof t})}function Nn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qa(t);throw new X(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Xe(t,e){const n={typeString:t};return e&&(n.value=e),n}function ao(t,e){if(!Hg(t))throw new X(O.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in t)){n=`JSON missing required field: '${s}'`;break}const o=t[s];if(r&&typeof o!==r){n=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${s}' field to equal '${i.value}'`;break}}if(n)throw new X(O.INVALID_ARGUMENT,n);return!0}/**
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
 */const wd=-62135596800,Ad=1e6;class Ue{static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*Ad);return new Ue(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<wd)throw new X(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ad}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ue._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ao(e,Ue._jsonSchema))return new Ue(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-wd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ue._jsonSchemaVersion="firestore/timestamp/1.0",Ue._jsonSchema={type:Xe("string",Ue._jsonSchemaVersion),seconds:Xe("number"),nanoseconds:Xe("number")};/**
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
 */class ue{static fromTimestamp(e){return new ue(e)}static min(){return new ue(new Ue(0,0))}static max(){return new ue(new Ue(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const zi=-1;function kA(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=ue.fromTimestamp(s===1e9?new Ue(n+1,0):new Ue(n,s));return new Ts(r,ne.empty(),e)}function VA(t){return new Ts(t.readTime,t.key,zi)}class Ts{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ts(ue.min(),ne.empty(),zi)}static max(){return new Ts(ue.max(),ne.empty(),zi)}}function DA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
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
 */const NA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class OA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Br(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==NA)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ce(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L(((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):L.reject(n)}static resolve(e){return new L(((n,s)=>{n(e)}))}static reject(e){return new L(((n,s)=>{s(e)}))}static waitFor(e){return new L(((n,s)=>{let r=0,i=0,o=!1;e.forEach((c=>{++r,c.next((()=>{++i,o&&i===r&&n()}),(l=>s(l)))})),o=!0,i===r&&n()}))}static or(e){let n=L.resolve(!1);for(const s of e)n=n.next((r=>r?L.resolve(r):s()));return n}static forEach(e,n){const s=[];return e.forEach(((r,i)=>{s.push(n.call(this,r,i))})),this.waitFor(s)}static mapArray(e,n){return new L(((s,r)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next((f=>{o[u]=f,++c,c===i&&s(o)}),(f=>r(f)))}}))}static doWhile(e,n){return new L(((s,r)=>{const i=()=>{e()===!0?n().next((()=>{i()}),r):s()};i()}))}}function xA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function $r(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ya{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ya.ce=-1;/**
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
 */const Ru=-1;function Xa(t){return t==null}function da(t){return t===0&&1/t==-1/0}function MA(t){return typeof t=="number"&&Number.isInteger(t)&&!da(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const zg="";function LA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=bd(e)),e=FA(t.get(n),e);return bd(e)}function FA(t,e){let n=e;const s=t.length;for(let r=0;r<s;r++){const i=t.charAt(r);switch(i){case"\0":n+="";break;case zg:n+="";break;default:n+=i}}return n}function bd(t){return t+zg+""}/**
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
 */function Rd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Cs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Wg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class qe{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,s)=>(e(n,s),!1)))}toString(){const e=[];return this.inorderTraversal(((n,s)=>(e.push(`${n}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Oo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Oo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Oo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Oo(this.root,e,this.comparator,!0)}}class Oo{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??at.RED,this.left=r??at.EMPTY,this.right=i??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new at(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return at.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ce(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ce(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ce(27949);return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw ce(57766)}get value(){throw ce(16141)}get color(){throw ce(16727)}get left(){throw ce(29726)}get right(){throw ce(36894)}copy(e,n,s,r,i){return this}insert(e,n,s){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class et{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,s)=>(e(n),!1)))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Sd(this.data.getIterator())}getIteratorFrom(e){return new Sd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((s=>{n=n.add(s)})),n}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new et(this.comparator);return n.data=e,n}}class Sd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ut{constructor(e){this.fields=e,e.sort(lt.comparator)}static empty(){return new Ut([])}unionWith(e){let n=new et(lt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ut(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Dr(this.fields,e.fields,((n,s)=>n.isEqual(s)))}}/**
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
 */class Kg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Kg("Invalid base64 string: "+i):i}})(e);return new ut(n)}static fromUint8Array(e){const n=(function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i})(e);return new ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const UA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Is(t){if(Pe(!!t,39018),typeof t=="string"){let e=0;const n=UA.exec(t);if(Pe(!!n,46558,{timestamp:t}),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ws(t){return typeof t=="string"?ut.fromBase64String(t):ut.fromUint8Array(t)}/**
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
 */const Gg="server_timestamp",Qg="__type__",Yg="__previous_value__",Xg="__local_write_time__";function Su(t){return(t?.mapValue?.fields||{})[Qg]?.stringValue===Gg}function Ja(t){const e=t.mapValue.fields[Yg];return Su(e)?Ja(e):e}function Wi(t){const e=Is(t.mapValue.fields[Xg].timestampValue);return new Ue(e.seconds,e.nanos)}/**
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
 */class BA{constructor(e,n,s,r,i,o,c,l,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=f}}const pa="(default)";class Ki{constructor(e,n){this.projectId=e,this.database=n||pa}static empty(){return new Ki("","")}get isDefaultDatabase(){return this.database===pa}isEqual(e){return e instanceof Ki&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Jg="__type__",$A="__max__",xo={mapValue:{}},Zg="__vector__",ma="value";function As(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Su(t)?4:qA(t)?9007199254740991:jA(t)?10:11:ce(28295,{value:t})}function vn(t,e){if(t===e)return!0;const n=As(t);if(n!==As(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Wi(t).isEqual(Wi(e));case 3:return(function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=Is(r.timestampValue),c=Is(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(r,i){return ws(r.bytesValue).isEqual(ws(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(r,i){return ze(r.geoPointValue.latitude)===ze(i.geoPointValue.latitude)&&ze(r.geoPointValue.longitude)===ze(i.geoPointValue.longitude)})(t,e);case 2:return(function(r,i){if("integerValue"in r&&"integerValue"in i)return ze(r.integerValue)===ze(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=ze(r.doubleValue),c=ze(i.doubleValue);return o===c?da(o)===da(c):isNaN(o)&&isNaN(c)}return!1})(t,e);case 9:return Dr(t.arrayValue.values||[],e.arrayValue.values||[],vn);case 10:case 11:return(function(r,i){const o=r.mapValue.fields||{},c=i.mapValue.fields||{};if(Rd(o)!==Rd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!vn(o[l],c[l])))return!1;return!0})(t,e);default:return ce(52216,{left:t})}}function Gi(t,e){return(t.values||[]).find((n=>vn(n,e)))!==void 0}function Nr(t,e){if(t===e)return 0;const n=As(t),s=As(e);if(n!==s)return ve(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=ze(i.integerValue||i.doubleValue),l=ze(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(t,e);case 3:return Cd(t.timestampValue,e.timestampValue);case 4:return Cd(Wi(t),Wi(e));case 5:return Sl(t.stringValue,e.stringValue);case 6:return(function(i,o){const c=ws(i),l=ws(o);return c.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=ve(c[u],l[u]);if(f!==0)return f}return ve(c.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=ve(ze(i.latitude),ze(o.latitude));return c!==0?c:ve(ze(i.longitude),ze(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return Pd(t.arrayValue,e.arrayValue);case 10:return(function(i,o){const c=i.fields||{},l=o.fields||{},u=c[ma]?.arrayValue,f=l[ma]?.arrayValue,d=ve(u?.values?.length||0,f?.values?.length||0);return d!==0?d:Pd(u,f)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===xo.mapValue&&o===xo.mapValue)return 0;if(i===xo.mapValue)return 1;if(o===xo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let d=0;d<l.length&&d<f.length;++d){const m=Sl(l[d],f[d]);if(m!==0)return m;const _=Nr(c[l[d]],u[f[d]]);if(_!==0)return _}return ve(l.length,f.length)})(t.mapValue,e.mapValue);default:throw ce(23264,{he:n})}}function Cd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=Is(t),s=Is(e),r=ve(n.seconds,s.seconds);return r!==0?r:ve(n.nanos,s.nanos)}function Pd(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const i=Nr(n[r],s[r]);if(i)return i}return ve(n.length,s.length)}function Or(t){return Cl(t)}function Cl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const s=Is(n);return`time(${s.seconds},${s.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return ws(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return ne.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=Cl(i);return s+"]"})(t.arrayValue):"mapValue"in t?(function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${Cl(n.fields[o])}`;return r+"}"})(t.mapValue):ce(61005,{value:t})}function Wo(t){switch(As(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ja(t);return e?16+Wo(e):16;case 5:return 2*t.stringValue.length;case 6:return ws(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((r,i)=>r+Wo(i)),0)})(t.arrayValue);case 10:case 11:return(function(s){let r=0;return Cs(s.fields,((i,o)=>{r+=i.length+Wo(o)})),r})(t.mapValue);default:throw ce(13486,{value:t})}}function kd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Pl(t){return!!t&&"integerValue"in t}function Cu(t){return!!t&&"arrayValue"in t}function Vd(t){return!!t&&"nullValue"in t}function Dd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ko(t){return!!t&&"mapValue"in t}function jA(t){return(t?.mapValue?.fields||{})[Jg]?.stringValue===Zg}function Pi(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Cs(t.mapValue.fields,((n,s)=>e.mapValue.fields[n]=Pi(s))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Pi(t.arrayValue.values[n]);return e}return{...t}}function qA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===$A}/**
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
 */class Vt{constructor(e){this.value=e}static empty(){return new Vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Ko(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Pi(n)}setAll(e){let n=lt.emptyPath(),s={},r=[];e.forEach(((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,s,r),s={},r=[],n=c.popLast()}o?s[c.lastSegment()]=Pi(o):r.push(c.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Ko(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Ko(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Cs(n,((r,i)=>e[r]=i));for(const r of s)delete e[r]}clone(){return new Vt(Pi(this.value))}}function e_(t){const e=[];return Cs(t.fields,((n,s)=>{const r=new lt([n]);if(Ko(s)){const i=e_(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)})),new Ut(e)}/**
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
 */class Et{constructor(e,n,s,r,i,o,c){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Et(e,0,ue.min(),ue.min(),ue.min(),Vt.empty(),0)}static newFoundDocument(e,n,s,r){return new Et(e,1,n,ue.min(),s,r,0)}static newNoDocument(e,n){return new Et(e,2,n,ue.min(),ue.min(),Vt.empty(),0)}static newUnknownDocument(e,n){return new Et(e,3,n,ue.min(),ue.min(),Vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ga{constructor(e,n){this.position=e,this.inclusive=n}}function Nd(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=ne.comparator(ne.fromName(o.referenceValue),n.key):s=Nr(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Od(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!vn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Qi{constructor(e,n="asc"){this.field=e,this.dir=n}}function HA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class t_{}class Ye extends t_{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new WA(e,n,s):n==="array-contains"?new QA(e,s):n==="in"?new YA(e,s):n==="not-in"?new XA(e,s):n==="array-contains-any"?new JA(e,s):new Ye(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new KA(e,s):new GA(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Nr(n,this.value)):n!==null&&As(this.value)===As(n)&&this.matchesComparison(Nr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Zt extends t_{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Zt(e,n)}matches(e){return n_(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function n_(t){return t.op==="and"}function s_(t){return zA(t)&&n_(t)}function zA(t){for(const e of t.filters)if(e instanceof Zt)return!1;return!0}function kl(t){if(t instanceof Ye)return t.field.canonicalString()+t.op.toString()+Or(t.value);if(s_(t))return t.filters.map((e=>kl(e))).join(",");{const e=t.filters.map((n=>kl(n))).join(",");return`${t.op}(${e})`}}function r_(t,e){return t instanceof Ye?(function(s,r){return r instanceof Ye&&s.op===r.op&&s.field.isEqual(r.field)&&vn(s.value,r.value)})(t,e):t instanceof Zt?(function(s,r){return r instanceof Zt&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((i,o,c)=>i&&r_(o,r.filters[c])),!0):!1})(t,e):void ce(19439)}function i_(t){return t instanceof Ye?(function(n){return`${n.field.canonicalString()} ${n.op} ${Or(n.value)}`})(t):t instanceof Zt?(function(n){return n.op.toString()+" {"+n.getFilters().map(i_).join(" ,")+"}"})(t):"Filter"}class WA extends Ye{constructor(e,n,s){super(e,n,s),this.key=ne.fromName(s.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.matchesComparison(n)}}class KA extends Ye{constructor(e,n){super(e,"in",n),this.keys=o_("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class GA extends Ye{constructor(e,n){super(e,"not-in",n),this.keys=o_("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function o_(t,e){return(e.arrayValue?.values||[]).map((n=>ne.fromName(n.referenceValue)))}class QA extends Ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Cu(n)&&Gi(n.arrayValue,this.value)}}class YA extends Ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Gi(this.value.arrayValue,n)}}class XA extends Ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(Gi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Gi(this.value.arrayValue,n)}}class JA extends Ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Cu(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>Gi(this.value.arrayValue,s)))}}/**
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
 */class ZA{constructor(e,n=null,s=[],r=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function xd(t,e=null,n=[],s=[],r=null,i=null,o=null){return new ZA(t,e,n,s,r,i,o)}function Pu(t){const e=fe(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((s=>kl(s))).join(","),n+="|ob:",n+=e.orderBy.map((s=>(function(i){return i.field.canonicalString()+i.dir})(s))).join(","),Xa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>Or(s))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>Or(s))).join(",")),e.Te=n}return e.Te}function ku(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!HA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!r_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Od(t.startAt,e.startAt)&&Od(t.endAt,e.endAt)}function Vl(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class jr{constructor(e,n=null,s=[],r=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function e1(t,e,n,s,r,i,o,c){return new jr(t,e,n,s,r,i,o,c)}function Za(t){return new jr(t)}function Md(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function a_(t){return t.collectionGroup!==null}function ki(t){const e=fe(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new et(lt.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(c=c.add(u.field))}))})),c})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Qi(i,s))})),n.has(lt.keyField().canonicalString())||e.Ie.push(new Qi(lt.keyField(),s))}return e.Ie}function fn(t){const e=fe(t);return e.Ee||(e.Ee=t1(e,ki(t))),e.Ee}function t1(t,e){if(t.limitType==="F")return xd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new Qi(r.field,i)}));const n=t.endAt?new ga(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new ga(t.startAt.position,t.startAt.inclusive):null;return xd(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function Dl(t,e){const n=t.filters.concat([e]);return new jr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Nl(t,e,n){return new jr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ec(t,e){return ku(fn(t),fn(e))&&t.limitType===e.limitType}function c_(t){return`${Pu(fn(t))}|lt:${t.limitType}`}function gr(t){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((r=>i_(r))).join(", ")}]`),Xa(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((r=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(r))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((r=>Or(r))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((r=>Or(r))).join(",")),`Target(${s})`})(fn(t))}; limitType=${t.limitType})`}function tc(t,e){return e.isFoundDocument()&&(function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):ne.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)})(t,e)&&(function(s,r){for(const i of ki(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0})(t,e)&&(function(s,r){return!(s.startAt&&!(function(o,c,l){const u=Nd(o,c,l);return o.inclusive?u<=0:u<0})(s.startAt,ki(s),r)||s.endAt&&!(function(o,c,l){const u=Nd(o,c,l);return o.inclusive?u>=0:u>0})(s.endAt,ki(s),r))})(t,e)}function n1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function l_(t){return(e,n)=>{let s=!1;for(const r of ki(t)){const i=s1(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function s1(t,e,n){const s=t.field.isKeyField()?ne.comparator(e.key,n.key):(function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Nr(l,u):ce(42886)})(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ce(19790,{direction:t.dir})}}/**
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
 */class nr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Cs(this.inner,((n,s)=>{for(const[r,i]of s)e(r,i)}))}isEmpty(){return Wg(this.inner)}size(){return this.innerSize}}/**
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
 */const r1=new qe(ne.comparator);function Un(){return r1}const u_=new qe(ne.comparator);function mi(...t){let e=u_;for(const n of t)e=e.insert(n.key,n);return e}function h_(t){let e=u_;return t.forEach(((n,s)=>e=e.insert(n,s.overlayedDocument))),e}function Hs(){return Vi()}function f_(){return Vi()}function Vi(){return new nr((t=>t.toString()),((t,e)=>t.isEqual(e)))}const i1=new qe(ne.comparator),o1=new et(ne.comparator);function Ee(...t){let e=o1;for(const n of t)e=e.add(n);return e}const a1=new et(ve);function c1(){return a1}/**
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
 */function Vu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:da(e)?"-0":e}}function d_(t){return{integerValue:""+t}}function p_(t,e){return MA(e)?d_(e):Vu(t,e)}/**
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
 */class nc{constructor(){this._=void 0}}function l1(t,e,n){return t instanceof Yi?(function(r,i){const o={fields:{[Qg]:{stringValue:Gg},[Xg]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Su(i)&&(i=Ja(i)),i&&(o.fields[Yg]=i),{mapValue:o}})(n,e):t instanceof Xi?g_(t,e):t instanceof Ji?__(t,e):(function(r,i){const o=m_(r,i),c=Ld(o)+Ld(r.Ae);return Pl(o)&&Pl(r.Ae)?d_(c):Vu(r.serializer,c)})(t,e)}function u1(t,e,n){return t instanceof Xi?g_(t,e):t instanceof Ji?__(t,e):n}function m_(t,e){return t instanceof Zi?(function(s){return Pl(s)||(function(i){return!!i&&"doubleValue"in i})(s)})(e)?e:{integerValue:0}:null}class Yi extends nc{}class Xi extends nc{constructor(e){super(),this.elements=e}}function g_(t,e){const n=y_(e);for(const s of t.elements)n.some((r=>vn(r,s)))||n.push(s);return{arrayValue:{values:n}}}class Ji extends nc{constructor(e){super(),this.elements=e}}function __(t,e){let n=y_(e);for(const s of t.elements)n=n.filter((r=>!vn(r,s)));return{arrayValue:{values:n}}}class Zi extends nc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Ld(t){return ze(t.integerValue||t.doubleValue)}function y_(t){return Cu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class v_{constructor(e,n){this.field=e,this.transform=n}}function h1(t,e){return t.field.isEqual(e.field)&&(function(s,r){return s instanceof Xi&&r instanceof Xi||s instanceof Ji&&r instanceof Ji?Dr(s.elements,r.elements,vn):s instanceof Zi&&r instanceof Zi?vn(s.Ae,r.Ae):s instanceof Yi&&r instanceof Yi})(t.transform,e.transform)}class f1{constructor(e,n){this.version=e,this.transformResults=n}}class dn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new dn}static exists(e){return new dn(void 0,e)}static updateTime(e){return new dn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Go(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class sc{}function E_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new I_(t.key,dn.none()):new co(t.key,t.data,dn.none());{const n=t.data,s=Vt.empty();let r=new et(lt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Ps(t.key,s,new Ut(r.toArray()),dn.none())}}function d1(t,e,n){t instanceof co?(function(r,i,o){const c=r.value.clone(),l=Ud(r.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):t instanceof Ps?(function(r,i,o){if(!Go(r.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Ud(r.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(T_(r)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):(function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function Di(t,e,n,s){return t instanceof co?(function(i,o,c,l){if(!Go(i.precondition,o))return c;const u=i.value.clone(),f=Bd(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,s):t instanceof Ps?(function(i,o,c,l){if(!Go(i.precondition,o))return c;const u=Bd(i.fieldTransforms,l,o),f=o.data;return f.setAll(T_(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((d=>d.field)))})(t,e,n,s):(function(i,o,c){return Go(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(t,e,n)}function p1(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=m_(s.transform,r||null);i!=null&&(n===null&&(n=Vt.empty()),n.set(s.field,i))}return n||null}function Fd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Dr(s,r,((i,o)=>h1(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class co extends sc{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ps extends sc{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function T_(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function Ud(t,e,n){const s=new Map;Pe(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,c=e.data.field(i.field);s.set(i.field,u1(o,c,n[r]))}return s}function Bd(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,l1(i,o,e))}return s}class I_ extends sc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class m1 extends sc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class g1{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&d1(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Di(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Di(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=f_();return this.mutations.forEach((r=>{const i=e.get(r.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(r.key)?null:c;const l=E_(o,c);l!==null&&s.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(ue.min())})),s}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Ee())}isEqual(e){return this.batchId===e.batchId&&Dr(this.mutations,e.mutations,((n,s)=>Fd(n,s)))&&Dr(this.baseMutations,e.baseMutations,((n,s)=>Fd(n,s)))}}class Du{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Pe(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=(function(){return i1})();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Du(e,n,s,r)}}/**
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
 */class _1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class y1{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Qe,Ae;function v1(t){switch(t){case O.OK:return ce(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return ce(15467,{code:t})}}function w_(t){if(t===void 0)return Fn("GRPC error has no .code"),O.UNKNOWN;switch(t){case Qe.OK:return O.OK;case Qe.CANCELLED:return O.CANCELLED;case Qe.UNKNOWN:return O.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return O.INTERNAL;case Qe.UNAVAILABLE:return O.UNAVAILABLE;case Qe.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Qe.NOT_FOUND:return O.NOT_FOUND;case Qe.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Qe.ABORTED:return O.ABORTED;case Qe.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Qe.DATA_LOSS:return O.DATA_LOSS;default:return ce(39323,{code:t})}}(Ae=Qe||(Qe={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function E1(){return new TextEncoder}/**
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
 */const T1=new ps([4294967295,4294967295],0);function $d(t){const e=E1().encode(t),n=new xg;return n.update(e),new Uint8Array(n.digest())}function jd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ps([n,s],0),new ps([r,i],0)]}class Nu{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new gi(`Invalid padding: ${n}`);if(s<0)throw new gi(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new gi(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new gi(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=ps.fromNumber(this.ge)}ye(e,n,s){let r=e.add(n.multiply(ps.fromNumber(s)));return r.compare(T1)===1&&(r=new ps([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=$d(e),[s,r]=jd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(s,r,i);if(!this.we(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Nu(i,r,n);return s.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const n=$d(e),[s,r]=jd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(s,r,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class gi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class rc{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,lo.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new rc(ue.min(),r,new qe(ve),Un(),Ee())}}class lo{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new lo(s,n,Ee(),Ee(),Ee())}}/**
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
 */class Qo{constructor(e,n,s,r){this.be=e,this.removedTargetIds=n,this.key=s,this.De=r}}class A_{constructor(e,n){this.targetId=e,this.Ce=n}}class b_{constructor(e,n,s=ut.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class qd{constructor(){this.ve=0,this.Fe=Hd(),this.Me=ut.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ee(),n=Ee(),s=Ee();return this.Fe.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:ce(38017,{changeType:i})}})),new lo(this.Me,this.xe,e,n,s)}qe(){this.Oe=!1,this.Fe=Hd()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Pe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class I1{constructor(e){this.Ge=e,this.ze=new Map,this.je=Un(),this.Je=Mo(),this.He=Mo(),this.Ye=new qe(ve)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const s=this.nt(n);switch(e.state){case 0:this.rt(n)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(e.resumeToken));break;default:ce(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((s,r)=>{this.rt(r)&&n(r)}))}st(e){const n=e.targetId,s=e.Ce.count,r=this.ot(n);if(r){const i=r.target;if(Vl(i))if(s===0){const o=new ne(i.path);this.et(n,o,Et.newNoDocument(o,ue.min()))}else Pe(s===1,20013,{expectedCount:s});else{const o=this._t(n);if(o!==s){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=n;let o,c;try{o=ws(s).toUint8Array()}catch(l){if(l instanceof Kg)return Vr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Nu(o,r,i)}catch(l){return Vr(l instanceof gi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,s){return n.Ce.count===s-this.Pt(e,n.targetId)?0:2}Pt(e,n){const s=this.Ge.getRemoteKeysForTarget(n);let r=0;return s.forEach((i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),r++)})),r}Tt(e){const n=new Map;this.ze.forEach(((i,o)=>{const c=this.ot(o);if(c){if(i.current&&Vl(c.target)){const l=new ne(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,Et.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}}));let s=Ee();this.He.forEach(((i,o)=>{let c=!0;o.forEachWhile((l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(s=s.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const r=new rc(e,n,this.Ye,this.je,s);return this.je=Un(),this.Je=Mo(),this.He=Mo(),this.Ye=new qe(ve),r}Xe(e,n){if(!this.rt(e))return;const s=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,s){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,n)?r.Qe(n,1):r.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),s&&(this.je=this.je.insert(n,s))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new qd,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new et(ve),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new et(ve),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new qd),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Mo(){return new qe(ne.comparator)}function Hd(){return new qe(ne.comparator)}const w1={asc:"ASCENDING",desc:"DESCENDING"},A1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},b1={and:"AND",or:"OR"};class R1{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ol(t,e){return t.useProto3Json||Xa(e)?e:{value:e}}function _a(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function R_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function S1(t,e){return _a(t,e.toTimestamp())}function pn(t){return Pe(!!t,49232),ue.fromTimestamp((function(n){const s=Is(n);return new Ue(s.seconds,s.nanos)})(t))}function Ou(t,e){return xl(t,e).canonicalString()}function xl(t,e){const n=(function(r){return new Le(["projects",r.projectId,"databases",r.database])})(t).child("documents");return e===void 0?n:n.child(e)}function S_(t){const e=Le.fromString(t);return Pe(D_(e),10190,{key:e.toString()}),e}function Ml(t,e){return Ou(t.databaseId,e.path)}function Jc(t,e){const n=S_(e);if(n.get(1)!==t.databaseId.projectId)throw new X(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ne(P_(n))}function C_(t,e){return Ou(t.databaseId,e)}function C1(t){const e=S_(t);return e.length===4?Le.emptyPath():P_(e)}function Ll(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function P_(t){return Pe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function zd(t,e,n){return{name:Ml(t,e),fields:n.value.mapValue.fields}}function P1(t,e){let n;if("targetChange"in e){e.targetChange;const s=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ce(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(Pe(f===void 0||typeof f=="string",58123),ut.fromBase64String(f||"")):(Pe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ut.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(u){const f=u.code===void 0?O.UNKNOWN:w_(u.code);return new X(f,u.message||"")})(o);n=new b_(s,r,i,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Jc(t,s.document.name),i=pn(s.document.updateTime),o=s.document.createTime?pn(s.document.createTime):ue.min(),c=new Vt({mapValue:{fields:s.document.fields}}),l=Et.newFoundDocument(r,i,o,c),u=s.targetIds||[],f=s.removedTargetIds||[];n=new Qo(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Jc(t,s.document),i=s.readTime?pn(s.readTime):ue.min(),o=Et.newNoDocument(r,i),c=s.removedTargetIds||[];n=new Qo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Jc(t,s.document),i=s.removedTargetIds||[];n=new Qo([],i,r,null)}else{if(!("filter"in e))return ce(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new y1(r,i),c=s.targetId;n=new A_(c,o)}}return n}function k1(t,e){let n;if(e instanceof co)n={update:zd(t,e.key,e.value)};else if(e instanceof I_)n={delete:Ml(t,e.key)};else if(e instanceof Ps)n={update:zd(t,e.key,e.data),updateMask:U1(e.fieldMask)};else{if(!(e instanceof m1))return ce(16599,{Vt:e.type});n={verify:Ml(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((s=>(function(i,o){const c=o.transform;if(c instanceof Yi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Xi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ji)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Zi)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw ce(20930,{transform:o.transform})})(0,s)))),e.precondition.isNone||(n.currentDocument=(function(r,i){return i.updateTime!==void 0?{updateTime:S1(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ce(27497)})(t,e.precondition)),n}function V1(t,e){return t&&t.length>0?(Pe(e!==void 0,14353),t.map((n=>(function(r,i){let o=r.updateTime?pn(r.updateTime):pn(i);return o.isEqual(ue.min())&&(o=pn(i)),new f1(o,r.transformResults||[])})(n,e)))):[]}function D1(t,e){return{documents:[C_(t,e.path)]}}function N1(t,e){const n={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=C_(t,r);const i=(function(u){if(u.length!==0)return V_(Zt.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:_r(m.field),direction:M1(m.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Ol(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:n,parent:r}}function O1(t){let e=C1(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Pe(s===1,65062);const f=n.from[0];f.allDescendants?r=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(d){const m=k_(d);return m instanceof Zt&&s_(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(d){return d.map((m=>(function(S){return new Qi(yr(S.field),(function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(S.direction))})(m)))})(n.orderBy));let c=null;n.limit&&(c=(function(d){let m;return m=typeof d=="object"?d.value:d,Xa(m)?null:m})(n.limit));let l=null;n.startAt&&(l=(function(d){const m=!!d.before,_=d.values||[];return new ga(_,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(d){const m=!d.before,_=d.values||[];return new ga(_,m)})(n.endAt)),e1(e,r,o,i,c,"F",l,u)}function x1(t,e){const n=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce(28987,{purpose:r})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function k_(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=yr(n.unaryFilter.field);return Ye.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=yr(n.unaryFilter.field);return Ye.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=yr(n.unaryFilter.field);return Ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=yr(n.unaryFilter.field);return Ye.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ce(61313);default:return ce(60726)}})(t):t.fieldFilter!==void 0?(function(n){return Ye.create(yr(n.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ce(58110);default:return ce(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return Zt.create(n.compositeFilter.filters.map((s=>k_(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return ce(1026)}})(n.compositeFilter.op))})(t):ce(30097,{filter:t})}function M1(t){return w1[t]}function L1(t){return A1[t]}function F1(t){return b1[t]}function _r(t){return{fieldPath:t.canonicalString()}}function yr(t){return lt.fromServerFormat(t.fieldPath)}function V_(t){return t instanceof Ye?(function(n){if(n.op==="=="){if(Dd(n.value))return{unaryFilter:{field:_r(n.field),op:"IS_NAN"}};if(Vd(n.value))return{unaryFilter:{field:_r(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Dd(n.value))return{unaryFilter:{field:_r(n.field),op:"IS_NOT_NAN"}};if(Vd(n.value))return{unaryFilter:{field:_r(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_r(n.field),op:L1(n.op),value:n.value}}})(t):t instanceof Zt?(function(n){const s=n.getFilters().map((r=>V_(r)));return s.length===1?s[0]:{compositeFilter:{op:F1(n.op),filters:s}}})(t):ce(54877,{filter:t})}function U1(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function D_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ls{constructor(e,n,s,r,i=ue.min(),o=ue.min(),c=ut.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new ls(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ls(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ls(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ls(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class B1{constructor(e){this.yt=e}}function $1(t){const e=O1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Nl(e,e.limit,"L"):e}/**
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
 */class j1{constructor(){this.Cn=new q1}addToCollectionParentIndex(e,n){return this.Cn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Ts.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Ts.min())}updateCollectionGroup(e,n,s){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class q1{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new et(Le.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new et(Le.comparator)).toArray()}}/**
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
 */const Wd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},N_=41943040;class Pt{static withCacheSize(e){return new Pt(e,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Pt.DEFAULT_COLLECTION_PERCENTILE=10,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Pt.DEFAULT=new Pt(N_,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Pt.DISABLED=new Pt(-1,0,0);/**
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
 */class xr{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new xr(0)}static cr(){return new xr(-1)}}/**
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
 */const Kd="LruGarbageCollector",H1=1048576;function Gd([t,e],[n,s]){const r=ve(t,n);return r===0?ve(e,s):r}class z1{constructor(e){this.Ir=e,this.buffer=new et(Gd),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();Gd(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class W1{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){Z(Kd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){$r(n)?Z(Kd,"Ignoring IndexedDB error during garbage collection: ",n):await Br(n)}await this.Vr(3e5)}))}}class K1{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(e,n){if(n===0)return L.resolve(Ya.ce);const s=new z1(n);return this.mr.forEachTarget(e,(r=>s.Ar(r.sequenceNumber))).next((()=>this.mr.pr(e,(r=>s.Ar(r))))).next((()=>s.maxValue))}removeTargets(e,n,s){return this.mr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Wd)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Wd):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let s,r,i,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((d=>(d>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),r=this.params.maximumSequenceNumbersToCollect):r=d,o=Date.now(),this.nthSequenceNumber(e,r)))).next((d=>(s=d,c=Date.now(),this.removeTargets(e,s,n)))).next((d=>(i=d,l=Date.now(),this.removeOrphanedDocuments(e,s)))).next((d=>(u=Date.now(),mr()<=ye.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${r} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:d}))))}}function G1(t,e){return new K1(t,e)}/**
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
 */class Q1{constructor(){this.changes=new nr((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?L.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Y1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class X1{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,n)))).next((r=>(s!==null&&Di(s.mutation,r,Ut.empty(),Ue.now()),r)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.getLocalViewOfDocuments(e,s,Ee()).next((()=>s))))}getLocalViewOfDocuments(e,n,s=Ee()){const r=Hs();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,s).next((i=>{let o=mi();return i.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const s=Hs();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,Ee())))}populateOverlays(e,n,s){const r=[];return s.forEach((i=>{n.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((o,c)=>{n.set(o,c)}))}))}computeViews(e,n,s,r){let i=Un();const o=Vi(),c=(function(){return Vi()})();return n.forEach(((l,u)=>{const f=s.get(u.key);r.has(u.key)&&(f===void 0||f.mutation instanceof Ps)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Di(f.mutation,u,f.mutation.getFieldMask(),Ue.now())):o.set(u.key,Ut.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>c.set(u,new Y1(f,o.get(u)??null)))),c)))}recalculateAndSaveOverlays(e,n){const s=Vi();let r=new qe(((o,c)=>o-c)),i=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const c of o)c.keys().forEach((l=>{const u=n.get(l);if(u===null)return;let f=s.get(l)||Ut.empty();f=c.applyToLocalView(u,f),s.set(l,f);const d=(r.get(c.batchId)||Ee()).add(l);r=r.insert(c.batchId,d)}))})).next((()=>{const o=[],c=r.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,d=f_();f.forEach((m=>{if(!i.has(m)){const _=E_(n.get(m),s.get(m));_!==null&&d.set(m,_),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return L.waitFor(o)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,n,s,r){return(function(o){return ne.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):a_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next((i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):L.resolve(Hs());let c=zi,l=i;return o.next((u=>L.forEach(u,((f,d)=>(c<d.largestBatchId&&(c=d.largestBatchId),i.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{l=l.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,Ee()))).next((f=>({batchId:c,changes:h_(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next((s=>{let r=mi();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let o=mi();return this.indexManager.getCollectionParents(e,i).next((c=>L.forEach(c,(l=>{const u=(function(d,m){return new jr(m,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)})(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s,r).next((f=>{f.forEach(((d,m)=>{o=o.insert(d,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r)))).next((o=>{i.forEach(((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,Et.newInvalidDocument(f)))}));let c=mi();return o.forEach(((l,u)=>{const f=i.get(l);f!==void 0&&Di(f.mutation,u,Ut.empty(),Ue.now()),tc(n,u)&&(c=c.insert(l,u))})),c}))}}/**
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
 */class J1{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return L.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(r){return{id:r.id,version:r.version,createTime:pn(r.createTime)}})(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(r){return{name:r.name,query:$1(r.bundledQuery),readTime:pn(r.readTime)}})(n)),L.resolve()}}/**
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
 */class Z1{constructor(){this.overlays=new qe(ne.comparator),this.qr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Hs();return L.forEach(n,(r=>this.getOverlay(e,r).next((i=>{i!==null&&s.set(r,i)})))).next((()=>s))}saveOverlays(e,n,s){return s.forEach(((r,i)=>{this.St(e,n,i)})),L.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.qr.get(s);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(s)),L.resolve()}getOverlaysForCollection(e,n,s){const r=Hs(),i=n.length+1,o=new ne(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>s&&r.set(l.getKey(),l)}return L.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new qe(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let f=i.get(u.largestBatchId);f===null&&(f=Hs(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=Hs(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,f)=>c.set(u,f))),!(c.size()>=r)););return L.resolve(c)}St(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.qr.get(r.largestBatchId).delete(s.key);this.qr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new _1(n,s));let i=this.qr.get(n);i===void 0&&(i=Ee(),this.qr.set(n,i)),this.qr.set(n,i.add(s.key))}}/**
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
 */class eb{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
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
 */class xu{constructor(){this.Qr=new et(st.$r),this.Ur=new et(st.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const s=new st(e,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,n){e.forEach((s=>this.addReference(s,n)))}removeReference(e,n){this.Gr(new st(e,n))}zr(e,n){e.forEach((s=>this.removeReference(s,n)))}jr(e){const n=new ne(new Le([])),s=new st(n,e),r=new st(n,e+1),i=[];return this.Ur.forEachInRange([s,r],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ne(new Le([])),s=new st(n,e),r=new st(n,e+1);let i=Ee();return this.Ur.forEachInRange([s,r],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new st(e,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class st{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ne.comparator(e.key,n.key)||ve(e.Yr,n.Yr)}static Kr(e,n){return ve(e.Yr,n.Yr)||ne.comparator(e.key,n.key)}}/**
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
 */class tb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new et(st.$r)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new g1(i,n,s,r);this.mutationQueue.push(o);for(const c of r)this.Zr=this.Zr.add(new st(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ei(s),i=r<0?0:r;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?Ru:this.tr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new st(n,0),r=new st(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([s,r],(o=>{const c=this.Xr(o.Yr);i.push(c)})),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new et(ve);return n.forEach((r=>{const i=new st(r,0),o=new st(r,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(c=>{s=s.add(c.Yr)}))})),L.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;ne.isDocumentKey(i)||(i=i.child(""));const o=new st(new ne(i),0);let c=new et(ve);return this.Zr.forEachWhile((l=>{const u=l.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(c=c.add(l.Yr)),!0)}),o),L.resolve(this.ti(c))}ti(e){const n=[];return e.forEach((s=>{const r=this.Xr(s);r!==null&&n.push(r)})),n}removeMutationBatch(e,n){Pe(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return L.forEach(n.mutations,(r=>{const i=new st(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,n){const s=new st(n,0),r=this.Zr.firstAfterOrEqual(s);return L.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class nb{constructor(e){this.ri=e,this.docs=(function(){return new qe(ne.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return L.resolve(s?s.document.mutableCopy():Et.newInvalidDocument(n))}getEntries(e,n){let s=Un();return n.forEach((r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Et.newInvalidDocument(r))})),L.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Un();const o=n.path,c=new ne(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||DA(VA(f),s)<=0||(r.has(f.key)||tc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,s,r){ce(9500)}ii(e,n){return L.forEach(this.docs,(s=>n(s)))}newChangeBuffer(e){return new sb(this)}getSize(e){return L.resolve(this.size)}}class sb extends Q1{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?n.push(this.Nr.addEntry(e,r)):this.Nr.removeEntry(s)})),L.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class rb{constructor(e){this.persistence=e,this.si=new nr((n=>Pu(n)),ku),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.oi=0,this._i=new xu,this.targetCount=0,this.ai=xr.ur()}forEachTarget(e,n){return this.si.forEach(((s,r)=>n(r))),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),L.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new xr(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Pr(n),L.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.si.forEach(((o,c)=>{c.sequenceNumber<=n&&s.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),r++)})),L.waitFor(i).next((()=>r))}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const s=this.si.get(n)||null;return L.resolve(s)}addMatchingKeys(e,n,s){return this._i.Wr(n,s),L.resolve()}removeMatchingKeys(e,n,s){this._i.zr(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach((o=>{i.push(r.markPotentiallyOrphaned(e,o))})),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const s=this._i.Hr(n);return L.resolve(s)}containsKey(e,n){return L.resolve(this._i.containsKey(n))}}/**
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
 */class O_{constructor(e,n){this.ui={},this.overlays={},this.ci=new Ya(0),this.li=!1,this.li=!0,this.hi=new eb,this.referenceDelegate=e(this),this.Pi=new rb(this),this.indexManager=new j1,this.remoteDocumentCache=(function(r){return new nb(r)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new B1(n),this.Ii=new J1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Z1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ui[e.toKey()];return s||(s=new tb(n,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,s){Z("MemoryPersistence","Starting transaction:",e);const r=new ib(this.ci.next());return this.referenceDelegate.Ei(),s(r).next((i=>this.referenceDelegate.di(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}Ai(e,n){return L.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,n))))}}class ib extends OA{constructor(e){super(),this.currentSequenceNumber=e}}class Mu{constructor(e){this.persistence=e,this.Ri=new xu,this.Vi=null}static mi(e){return new Mu(e)}get fi(){if(this.Vi)return this.Vi;throw ce(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),L.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((r=>this.fi.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next((r=>{r.forEach((i=>this.fi.add(i.toString())))})).next((()=>s.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.fi,(s=>{const r=ne.fromPath(s);return this.gi(e,r).next((i=>{i||n.removeEntry(r,ue.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class ya{constructor(e,n){this.persistence=e,this.pi=new nr((s=>LA(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=G1(this,n)}static mi(e,n){return new ya(e,n)}Ei(){}di(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>n.next((r=>s+r))))}wr(e){let n=0;return this.pr(e,(s=>{n++})).next((()=>n))}pr(e,n){return L.forEach(this.pi,((s,r)=>this.br(e,s,r).next((i=>i?L.resolve():n(r)))))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ii(e,(o=>this.br(e,o,n).next((c=>{c||(s++,i.removeEntry(o,ue.min()))})))).next((()=>i.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),L.resolve()}removeReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),L.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Wo(e.data.value)),n}br(e,n,s){return L.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const r=this.pi.get(n);return L.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Lu{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Es=s,this.ds=r}static As(e,n){let s=Ee(),r=Ee();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Lu(e,n.fromCache,s,r)}}/**
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
 */class ob{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ab{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return tw()?8:xA(It())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.ys(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(e,n,r,s).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new ob;return this.Ss(e,n,o).next((c=>{if(i.result=c,this.Vs)return this.bs(e,n,o,c.size)}))})).next((()=>i.result))}bs(e,n,s,r){return s.documentReadCount<this.fs?(mr()<=ye.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",gr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),L.resolve()):(mr()<=ye.DEBUG&&Z("QueryEngine","Query:",gr(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.gs*r?(mr()<=ye.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",gr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,fn(n))):L.resolve())}ys(e,n){if(Md(n))return L.resolve(null);let s=fn(n);return this.indexManager.getIndexType(e,s).next((r=>r===0?null:(n.limit!==null&&r===1&&(n=Nl(n,null,"F"),s=fn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next((i=>{const o=Ee(...i);return this.ps.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,s).next((l=>{const u=this.Ds(n,c);return this.Cs(n,u,o,l.readTime)?this.ys(e,Nl(n,null,"F")):this.vs(e,u,n,l)}))))})))))}ws(e,n,s,r){return Md(n)||r.isEqual(ue.min())?L.resolve(null):this.ps.getDocuments(e,s).next((i=>{const o=this.Ds(n,i);return this.Cs(n,o,s,r)?L.resolve(null):(mr()<=ye.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),gr(n)),this.vs(e,o,n,kA(r,zi)).next((c=>c)))}))}Ds(e,n){let s=new et(l_(e));return n.forEach(((r,i)=>{tc(e,i)&&(s=s.add(i))})),s}Cs(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ss(e,n,s){return mr()<=ye.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",gr(n)),this.ps.getDocumentsMatchingQuery(e,n,Ts.min(),s)}vs(e,n,s,r){return this.ps.getDocumentsMatchingQuery(e,s,r).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
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
 */const Fu="LocalStore",cb=3e8;class lb{constructor(e,n,s,r){this.persistence=e,this.Fs=n,this.serializer=r,this.Ms=new qe(ve),this.xs=new nr((i=>Pu(i)),ku),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new X1(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function ub(t,e,n,s){return new lb(t,e,n,s)}async function x_(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next((i=>(r=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(s)))).next((i=>{const o=[],c=[];let l=Ee();for(const u of r){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(s,l).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:c})))}))}))}function hb(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const r=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,l,u,f){const d=u.batch,m=d.keys();let _=L.resolve();return m.forEach((S=>{_=_.next((()=>f.getEntry(l,S))).next((k=>{const D=u.docVersions.get(S);Pe(D!==null,48541),k.version.compareTo(D)<0&&(d.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),f.addEntry(k)))}))})),_.next((()=>c.mutationQueue.removeMutationBatch(l,d)))})(n,s,e,i).next((()=>i.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(c){let l=Ee();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l})(e)))).next((()=>n.localDocuments.getDocuments(s,r)))}))}function M_(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function fb(t,e){const n=fe(t),s=e.snapshotVersion;let r=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});r=n.Ms;const c=[];e.targetChanges.forEach(((f,d)=>{const m=r.get(d);if(!m)return;c.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,d).next((()=>n.Pi.addMatchingKeys(i,f.addedDocuments,d))));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?_=_.withResumeToken(ut.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,s)),r=r.insert(d,_),(function(k,D,U){return k.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=cb?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0})(m,_,f)&&c.push(n.Pi.updateTargetData(i,_))}));let l=Un(),u=Ee();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(db(i,o,e.documentUpdates).next((f=>{l=f.ks,u=f.qs}))),!s.isEqual(ue.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next((d=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,s)));c.push(f)}return L.waitFor(c).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(n.Ms=r,i)))}function db(t,e,n){let s=Ee(),r=Ee();return n.forEach((i=>s=s.add(i))),e.getEntries(t,s).next((i=>{let o=Un();return n.forEach(((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(c)),l.isNoDocument()&&l.version.isEqual(ue.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):Z(Fu,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)})),{ks:o,qs:r}}))}function pb(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Ru),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function mb(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let r;return n.Pi.getTargetData(s,e).next((i=>i?(r=i,L.resolve(r)):n.Pi.allocateTargetId(s).next((o=>(r=new ls(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,r).next((()=>r)))))))})).then((s=>{const r=n.Ms.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(e,s.targetId)),s}))}async function Fl(t,e,n){const s=fe(t),r=s.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,(o=>s.persistence.referenceDelegate.removeTarget(o,r)))}catch(o){if(!$r(o))throw o;Z(Fu,`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ms=s.Ms.remove(e),s.xs.delete(r.target)}function Qd(t,e,n){const s=fe(t);let r=ue.min(),i=Ee();return s.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,f){const d=fe(l),m=d.xs.get(f);return m!==void 0?L.resolve(d.Ms.get(m)):d.Pi.getTargetData(u,f)})(s,o,fn(e)).next((c=>{if(c)return r=c.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(o,c.targetId).next((l=>{i=l}))})).next((()=>s.Fs.getDocumentsMatchingQuery(o,e,n?r:ue.min(),n?i:Ee()))).next((c=>(gb(s,n1(e),c),{documents:c,Qs:i})))))}function gb(t,e,n){let s=t.Os.get(e)||ue.min();n.forEach(((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)})),t.Os.set(e,s)}class Yd{constructor(){this.activeTargetIds=c1()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _b{constructor(){this.Mo=new Yd,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,s){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Yd,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class yb{Oo(e){}shutdown(){}}/**
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
 */const Xd="ConnectivityMonitor";class Jd{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){Z(Xd,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){Z(Xd,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Lo=null;function Ul(){return Lo===null?Lo=(function(){return 268435456+Math.round(2147483648*Math.random())})():Lo++,"0x"+Lo.toString(16)}/**
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
 */const Zc="RestConnection",vb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Eb{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${s}/databases/${r}`,this.Wo=this.databaseId.database===pa?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Go(e,n,s,r,i){const o=Ul(),c=this.zo(e,n.toUriEncodedString());Z(Zc,`Sending RPC '${e}' ${o}:`,c,s);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,r,i);const{host:u}=new URL(c),f=er(u);return this.Jo(e,c,l,s,f).then((d=>(Z(Zc,`Received RPC '${e}' ${o}: `,d),d)),(d=>{throw Vr(Zc,`RPC '${e}' ${o} failed with error: `,d,"url: ",c,"request:",s),d}))}Ho(e,n,s,r,i,o){return this.Go(e,n,s,r,i)}jo(e,n,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ur})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((r,i)=>e[i]=r)),s&&s.headers.forEach(((r,i)=>e[i]=r))}zo(e,n){const s=vb[e];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
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
 */class Tb{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const pt="WebChannelConnection";class Ib extends Eb{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,s,r,i){const o=Ul();return new Promise(((c,l)=>{const u=new Mg;u.setWithCredentials(!0),u.listenOnce(Lg.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case zo.NO_ERROR:const d=u.getResponseJson();Z(pt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),c(d);break;case zo.TIMEOUT:Z(pt,`RPC '${e}' ${o} timed out`),l(new X(O.DEADLINE_EXCEEDED,"Request time out"));break;case zo.HTTP_ERROR:const m=u.getStatus();if(Z(pt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const S=_?.error;if(S&&S.status&&S.message){const k=(function(U){const B=U.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(B)>=0?B:O.UNKNOWN})(S.status);l(new X(k,S.message))}else l(new X(O.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new X(O.UNAVAILABLE,"Connection failed."));break;default:ce(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{Z(pt,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(r);Z(pt,`RPC '${e}' ${o} sending request:`,r),u.send(n,"POST",f,s,15)}))}T_(e,n,s){const r=Ul(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Bg(),c=Ug(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const f=i.join("");Z(pt,`Creating RPC '${e}' stream ${r}: ${f}`,l);const d=o.createWebChannel(f,l);this.I_(d);let m=!1,_=!1;const S=new Tb({Yo:D=>{_?Z(pt,`Not sending because RPC '${e}' stream ${r} is closed:`,D):(m||(Z(pt,`Opening RPC '${e}' stream ${r} transport.`),d.open(),m=!0),Z(pt,`RPC '${e}' stream ${r} sending:`,D),d.send(D))},Zo:()=>d.close()}),k=(D,U,B)=>{D.listen(U,(q=>{try{B(q)}catch(z){setTimeout((()=>{throw z}),0)}}))};return k(d,pi.EventType.OPEN,(()=>{_||(Z(pt,`RPC '${e}' stream ${r} transport opened.`),S.o_())})),k(d,pi.EventType.CLOSE,(()=>{_||(_=!0,Z(pt,`RPC '${e}' stream ${r} transport closed`),S.a_(),this.E_(d))})),k(d,pi.EventType.ERROR,(D=>{_||(_=!0,Vr(pt,`RPC '${e}' stream ${r} transport errored. Name:`,D.name,"Message:",D.message),S.a_(new X(O.UNAVAILABLE,"The operation could not be completed")))})),k(d,pi.EventType.MESSAGE,(D=>{if(!_){const U=D.data[0];Pe(!!U,16349);const B=U,q=B?.error||B[0]?.error;if(q){Z(pt,`RPC '${e}' stream ${r} received error:`,q);const z=q.status;let ee=(function(v){const y=Qe[v];if(y!==void 0)return w_(y)})(z),ie=q.message;ee===void 0&&(ee=O.INTERNAL,ie="Unknown error status: "+z+" with message "+q.message),_=!0,S.a_(new X(ee,ie)),d.close()}else Z(pt,`RPC '${e}' stream ${r} received:`,U),S.u_(U)}})),k(c,Fg.STAT_EVENT,(D=>{D.stat===Rl.PROXY?Z(pt,`RPC '${e}' stream ${r} detected buffering proxy`):D.stat===Rl.NOPROXY&&Z(pt,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{S.__()}),0),S}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function el(){return typeof document<"u"?document:null}/**
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
 */function ic(t){return new R1(t,!0)}/**
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
 */class L_{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=s,this.A_=r,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,n-s);r>0&&Z("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Zd="PersistentStream";class F_{constructor(e,n,s,r,i,o,c,l){this.Mi=e,this.S_=s,this.b_=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new L_(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(Fn(n.toString()),Fn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.D_===n&&this.G_(s,r)}),(s=>{e((()=>{const r=new X(O.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)}))}))}G_(e,n){const s=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((r=>{s((()=>this.z_(r)))})),this.stream.onMessage((r=>{s((()=>++this.F_==1?this.J_(r):this.onNext(r)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return Z(Zd,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(Z(Zd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class wb extends F_{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=P1(this.serializer,e),s=(function(i){if(!("targetChange"in i))return ue.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ue.min():o.readTime?pn(o.readTime):ue.min()})(e);return this.listener.H_(n,s)}Y_(e){const n={};n.database=Ll(this.serializer),n.addTarget=(function(i,o){let c;const l=o.target;if(c=Vl(l)?{documents:D1(i,l)}:{query:N1(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=R_(i,o.resumeToken);const u=Ol(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(ue.min())>0){c.readTime=_a(i,o.snapshotVersion.toTimestamp());const u=Ol(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c})(this.serializer,e);const s=x1(this.serializer,e);s&&(n.labels=s),this.q_(n)}Z_(e){const n={};n.database=Ll(this.serializer),n.removeTarget=e,this.q_(n)}}class Ab extends F_{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Pe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Pe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Pe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=V1(e.writeResults,e.commitTime),s=pn(e.commitTime);return this.listener.na(s,n)}ra(){const e={};e.database=Ll(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((s=>k1(this.serializer,s)))};this.q_(n)}}/**
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
 */class bb{}class Rb extends bb{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new X(O.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(e,xl(n,s),r,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(O.UNKNOWN,i.toString())}))}Ho(e,n,s,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.Ho(e,xl(n,s),r,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new X(O.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class Sb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Fn(n),this.aa=!1):Z("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Xs="RemoteStore";class Cb{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{s.enqueueAndForget((async()=>{sr(this)&&(Z(Xs,"Restarting streams for network reachability change."),await(async function(l){const u=fe(l);u.Ea.add(4),await uo(u),u.Ra.set("Unknown"),u.Ea.delete(4),await oc(u)})(this))}))})),this.Ra=new Sb(s,r)}}async function oc(t){if(sr(t))for(const e of t.da)await e(!0)}async function uo(t){for(const e of t.da)await e(!1)}function U_(t,e){const n=fe(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),ju(n)?$u(n):qr(n).O_()&&Bu(n,e))}function Uu(t,e){const n=fe(t),s=qr(n);n.Ia.delete(e),s.O_()&&B_(n,e),n.Ia.size===0&&(s.O_()?s.L_():sr(n)&&n.Ra.set("Unknown"))}function Bu(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}qr(t).Y_(e)}function B_(t,e){t.Va.Ue(e),qr(t).Z_(e)}function $u(t){t.Va=new I1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),qr(t).start(),t.Ra.ua()}function ju(t){return sr(t)&&!qr(t).x_()&&t.Ia.size>0}function sr(t){return fe(t).Ea.size===0}function $_(t){t.Va=void 0}async function Pb(t){t.Ra.set("Online")}async function kb(t){t.Ia.forEach(((e,n)=>{Bu(t,e)}))}async function Vb(t,e){$_(t),ju(t)?(t.Ra.ha(e),$u(t)):t.Ra.set("Unknown")}async function Db(t,e,n){if(t.Ra.set("Online"),e instanceof b_&&e.state===2&&e.cause)try{await(async function(r,i){const o=i.cause;for(const c of i.targetIds)r.Ia.has(c)&&(await r.remoteSyncer.rejectListen(c,o),r.Ia.delete(c),r.Va.removeTarget(c))})(t,e)}catch(s){Z(Xs,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await va(t,s)}else if(e instanceof Qo?t.Va.Ze(e):e instanceof A_?t.Va.st(e):t.Va.tt(e),!n.isEqual(ue.min()))try{const s=await M_(t.localStore);n.compareTo(s)>=0&&await(function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,u)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(ut.EMPTY_BYTE_STRING,f.snapshotVersion)),B_(i,l);const d=new ls(f.target,l,u,f.sequenceNumber);Bu(i,d)})),i.remoteSyncer.applyRemoteEvent(c)})(t,n)}catch(s){Z(Xs,"Failed to raise snapshot:",s),await va(t,s)}}async function va(t,e,n){if(!$r(e))throw e;t.Ea.add(1),await uo(t),t.Ra.set("Offline"),n||(n=()=>M_(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Z(Xs,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await oc(t)}))}function j_(t,e){return e().catch((n=>va(t,n,e)))}async function ac(t){const e=fe(t),n=bs(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ru;for(;Nb(e);)try{const r=await pb(e.localStore,s);if(r===null){e.Ta.length===0&&n.L_();break}s=r.batchId,Ob(e,r)}catch(r){await va(e,r)}q_(e)&&H_(e)}function Nb(t){return sr(t)&&t.Ta.length<10}function Ob(t,e){t.Ta.push(e);const n=bs(t);n.O_()&&n.X_&&n.ea(e.mutations)}function q_(t){return sr(t)&&!bs(t).x_()&&t.Ta.length>0}function H_(t){bs(t).start()}async function xb(t){bs(t).ra()}async function Mb(t){const e=bs(t);for(const n of t.Ta)e.ea(n.mutations)}async function Lb(t,e,n){const s=t.Ta.shift(),r=Du.from(s,e,n);await j_(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await ac(t)}async function Fb(t,e){e&&bs(t).X_&&await(async function(s,r){if((function(o){return v1(o)&&o!==O.ABORTED})(r.code)){const i=s.Ta.shift();bs(s).B_(),await j_(s,(()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r))),await ac(s)}})(t,e),q_(t)&&H_(t)}async function ep(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),Z(Xs,"RemoteStore received new credentials");const s=sr(n);n.Ea.add(3),await uo(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await oc(n)}async function Ub(t,e){const n=fe(t);e?(n.Ea.delete(2),await oc(n)):e||(n.Ea.add(2),await uo(n),n.Ra.set("Unknown"))}function qr(t){return t.ma||(t.ma=(function(n,s,r){const i=fe(n);return i.sa(),new wb(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(t.datastore,t.asyncQueue,{Xo:Pb.bind(null,t),t_:kb.bind(null,t),r_:Vb.bind(null,t),H_:Db.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),ju(t)?$u(t):t.Ra.set("Unknown")):(await t.ma.stop(),$_(t))}))),t.ma}function bs(t){return t.fa||(t.fa=(function(n,s,r){const i=fe(n);return i.sa(),new Ab(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:xb.bind(null,t),r_:Fb.bind(null,t),ta:Mb.bind(null,t),na:Lb.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await ac(t)):(await t.fa.stop(),t.Ta.length>0&&(Z(Xs,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
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
 */class qu{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new ms,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,c=new qu(e,n,o,r,i);return c.start(s),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hu(t,e){if(Fn("AsyncQueue",`${e}: ${t}`),$r(t))return new X(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ar{static emptySet(e){return new Ar(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||ne.comparator(n.key,s.key):(n,s)=>ne.comparator(n.key,s.key),this.keyedMap=mi(),this.sortedSet=new qe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,s)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ar)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Ar;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class tp{constructor(){this.ga=new qe(ne.comparator)}track(e){const n=e.doc.key,s=this.ga.get(n);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(n,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(n):e.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ce(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,s)=>{e.push(s)})),e}}class Mr{constructor(e,n,s,r,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach((c=>{o.push({type:0,doc:c})})),new Mr(e,n,Ar.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ec(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class Bb{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class $b{constructor(){this.queries=np(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const r=fe(n),i=r.queries;r.queries=np(),i.forEach(((o,c)=>{for(const l of c.Sa)l.onError(s)}))})(this,new X(O.ABORTED,"Firestore shutting down"))}}function np(){return new nr((t=>c_(t)),ec)}async function z_(t,e){const n=fe(t);let s=3;const r=e.query;let i=n.queries.get(r);i?!i.ba()&&e.Da()&&(s=2):(i=new Bb,s=e.Da()?0:1);try{switch(s){case 0:i.wa=await n.onListen(r,!0);break;case 1:i.wa=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(o){const c=Hu(o,`Initialization of query '${gr(e.query)}' failed`);return void e.onError(c)}n.queries.set(r,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&zu(n)}async function W_(t,e){const n=fe(t),s=e.query;let r=3;const i=n.queries.get(s);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?r=e.Da()?0:1:!i.ba()&&e.Da()&&(r=2))}switch(r){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function jb(t,e){const n=fe(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(r)&&(s=!0);o.wa=r}}s&&zu(n)}function qb(t,e,n){const s=fe(t),r=s.queries.get(e);if(r)for(const i of r.Sa)i.onError(n);s.queries.delete(e)}function zu(t){t.Ca.forEach((e=>{e.next()}))}var Bl,sp;(sp=Bl||(Bl={})).Ma="default",sp.Cache="cache";class K_{constructor(e,n,s){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Mr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Mr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Bl.Cache}}/**
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
 */class G_{constructor(e){this.key=e}}class Q_{constructor(e){this.key=e}}class Hb{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ee(),this.mutatedKeys=Ee(),this.eu=l_(e),this.tu=new Ar(this.eu)}get nu(){return this.Ya}ru(e,n){const s=n?n.iu:new tp,r=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,c=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((f,d)=>{const m=r.get(f),_=tc(this.query,d)?d:null,S=!!m&&this.mutatedKeys.has(m.key),k=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let D=!1;m&&_?m.data.isEqual(_.data)?S!==k&&(s.track({type:3,doc:_}),D=!0):this.su(m,_)||(s.track({type:2,doc:_}),D=!0,(l&&this.eu(_,l)>0||u&&this.eu(_,u)<0)&&(c=!0)):!m&&_?(s.track({type:0,doc:_}),D=!0):m&&!_&&(s.track({type:1,doc:m}),D=!0,(l||u)&&(c=!0)),D&&(_?(o=o.add(_),i=k?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),s.track({type:1,doc:f})}return{tu:o,iu:s,Cs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,r){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,d)=>(function(_,S){const k=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce(20277,{Rt:D})}};return k(_)-k(S)})(f.type,d.type)||this.eu(f.doc,d.doc))),this.ou(s),r=r??!1;const c=n&&!r?this._u():[],l=this.Xa.size===0&&this.current&&!r?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new Mr(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new tp,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ee(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const n=[];return e.forEach((s=>{this.Xa.has(s)||n.push(new Q_(s))})),this.Xa.forEach((s=>{e.has(s)||n.push(new G_(s))})),n}cu(e){this.Ya=e.Qs,this.Xa=Ee();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Mr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Wu="SyncEngine";class zb{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Wb{constructor(e){this.key=e,this.hu=!1}}class Kb{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new nr((c=>c_(c)),ec),this.Iu=new Map,this.Eu=new Set,this.du=new qe(ne.comparator),this.Au=new Map,this.Ru=new xu,this.Vu={},this.mu=new Map,this.fu=xr.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Gb(t,e,n=!0){const s=ty(t);let r;const i=s.Tu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.lu()):r=await Y_(s,e,n,!0),r}async function Qb(t,e){const n=ty(t);await Y_(n,e,!0,!1)}async function Y_(t,e,n,s){const r=await mb(t.localStore,fn(e)),i=r.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return s&&(c=await Yb(t,e,i,o==="current",r.resumeToken)),t.isPrimaryClient&&n&&U_(t.remoteStore,r),c}async function Yb(t,e,n,s,r){t.pu=(d,m,_)=>(async function(k,D,U,B){let q=D.view.ru(U);q.Cs&&(q=await Qd(k.localStore,D.query,!1).then((({documents:R})=>D.view.ru(R,q))));const z=B&&B.targetChanges.get(D.targetId),ee=B&&B.targetMismatches.get(D.targetId)!=null,ie=D.view.applyChanges(q,k.isPrimaryClient,z,ee);return ip(k,D.targetId,ie.au),ie.snapshot})(t,d,m,_);const i=await Qd(t.localStore,e,!0),o=new Hb(e,i.Qs),c=o.ru(i.documents),l=lo.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(c,t.isPrimaryClient,l);ip(t,n,u.au);const f=new zb(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function Xb(t,e,n){const s=fe(t),r=s.Tu.get(e),i=s.Iu.get(r.targetId);if(i.length>1)return s.Iu.set(r.targetId,i.filter((o=>!ec(o,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await Fl(s.localStore,r.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(r.targetId),n&&Uu(s.remoteStore,r.targetId),$l(s,r.targetId)})).catch(Br)):($l(s,r.targetId),await Fl(s.localStore,r.targetId,!0))}async function Jb(t,e){const n=fe(t),s=n.Tu.get(e),r=n.Iu.get(s.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Uu(n.remoteStore,s.targetId))}async function Zb(t,e,n){const s=oR(t);try{const r=await(function(o,c){const l=fe(o),u=Ue.now(),f=c.reduce(((_,S)=>_.add(S.key)),Ee());let d,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(_=>{let S=Un(),k=Ee();return l.Ns.getEntries(_,f).next((D=>{S=D,S.forEach(((U,B)=>{B.isValidDocument()||(k=k.add(U))}))})).next((()=>l.localDocuments.getOverlayedDocuments(_,S))).next((D=>{d=D;const U=[];for(const B of c){const q=p1(B,d.get(B.key).overlayedDocument);q!=null&&U.push(new Ps(B.key,q,e_(q.value.mapValue),dn.exists(!0)))}return l.mutationQueue.addMutationBatch(_,u,U,c)})).next((D=>{m=D;const U=D.applyToLocalDocumentSet(d,k);return l.documentOverlayCache.saveOverlays(_,D.batchId,U)}))})).then((()=>({batchId:m.batchId,changes:h_(d)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),(function(o,c,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new qe(ve)),u=u.insert(c,l),o.Vu[o.currentUser.toKey()]=u})(s,r.batchId,n),await ho(s,r.changes),await ac(s.remoteStore)}catch(r){const i=Hu(r,"Failed to persist write");n.reject(i)}}async function X_(t,e){const n=fe(t);try{const s=await fb(n.localStore,e);e.targetChanges.forEach(((r,i)=>{const o=n.Au.get(i);o&&(Pe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?o.hu=!0:r.modifiedDocuments.size>0?Pe(o.hu,14607):r.removedDocuments.size>0&&(Pe(o.hu,42227),o.hu=!1))})),await ho(n,s,e)}catch(s){await Br(s)}}function rp(t,e,n){const s=fe(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.Tu.forEach(((i,o)=>{const c=o.view.va(e);c.snapshot&&r.push(c.snapshot)})),(function(o,c){const l=fe(o);l.onlineState=c;let u=!1;l.queries.forEach(((f,d)=>{for(const m of d.Sa)m.va(c)&&(u=!0)})),u&&zu(l)})(s.eventManager,e),r.length&&s.Pu.H_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function eR(t,e,n){const s=fe(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Au.get(e),i=r&&r.key;if(i){let o=new qe(ne.comparator);o=o.insert(i,Et.newNoDocument(i,ue.min()));const c=Ee().add(i),l=new rc(ue.min(),new Map,new qe(ve),o,c);await X_(s,l),s.du=s.du.remove(i),s.Au.delete(e),Ku(s)}else await Fl(s.localStore,e,!1).then((()=>$l(s,e,n))).catch(Br)}async function tR(t,e){const n=fe(t),s=e.batch.batchId;try{const r=await hb(n.localStore,e);Z_(n,s,null),J_(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await ho(n,r)}catch(r){await Br(r)}}async function nR(t,e,n){const s=fe(t);try{const r=await(function(o,c){const l=fe(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next((d=>(Pe(d!==null,37113),f=d.keys(),l.mutationQueue.removeMutationBatch(u,d)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>l.localDocuments.getDocuments(u,f)))}))})(s.localStore,e);Z_(s,e,n),J_(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await ho(s,r)}catch(r){await Br(r)}}function J_(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function Z_(t,e,n){const s=fe(t);let r=s.Vu[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Vu[s.currentUser.toKey()]=r}}function $l(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Iu.get(e))t.Tu.delete(s),n&&t.Pu.yu(s,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((s=>{t.Ru.containsKey(s)||ey(t,s)}))}function ey(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Uu(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Ku(t))}function ip(t,e,n){for(const s of n)s instanceof G_?(t.Ru.addReference(s.key,e),sR(t,s)):s instanceof Q_?(Z(Wu,"Document no longer in limbo: "+s.key),t.Ru.removeReference(s.key,e),t.Ru.containsKey(s.key)||ey(t,s.key)):ce(19791,{wu:s})}function sR(t,e){const n=e.key,s=n.path.canonicalString();t.du.get(n)||t.Eu.has(s)||(Z(Wu,"New document in limbo: "+n),t.Eu.add(s),Ku(t))}function Ku(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new ne(Le.fromString(e)),s=t.fu.next();t.Au.set(s,new Wb(n)),t.du=t.du.insert(n,s),U_(t.remoteStore,new ls(fn(Za(n.path)),s,"TargetPurposeLimboResolution",Ya.ce))}}async function ho(t,e,n){const s=fe(t),r=[],i=[],o=[];s.Tu.isEmpty()||(s.Tu.forEach(((c,l)=>{o.push(s.pu(l,e,n).then((u=>{if((u||n)&&s.isPrimaryClient){const f=u?!u.fromCache:n?.targetChanges.get(l.targetId)?.current;s.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){r.push(u);const f=Lu.As(l.targetId,u);i.push(f)}})))})),await Promise.all(o),s.Pu.H_(r),await(async function(l,u){const f=fe(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(d=>L.forEach(u,(m=>L.forEach(m.Es,(_=>f.persistence.referenceDelegate.addReference(d,m.targetId,_))).next((()=>L.forEach(m.ds,(_=>f.persistence.referenceDelegate.removeReference(d,m.targetId,_)))))))))}catch(d){if(!$r(d))throw d;Z(Fu,"Failed to update sequence numbers: "+d)}for(const d of u){const m=d.targetId;if(!d.fromCache){const _=f.Ms.get(m),S=_.snapshotVersion,k=_.withLastLimboFreeSnapshotVersion(S);f.Ms=f.Ms.insert(m,k)}}})(s.localStore,i))}async function rR(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){Z(Wu,"User change. New user:",e.toKey());const s=await x_(n.localStore,e);n.currentUser=e,(function(i,o){i.mu.forEach((c=>{c.forEach((l=>{l.reject(new X(O.CANCELLED,o))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ho(n,s.Ls)}}function iR(t,e){const n=fe(t),s=n.Au.get(e);if(s&&s.hu)return Ee().add(s.key);{let r=Ee();const i=n.Iu.get(e);if(!i)return r;for(const o of i){const c=n.Tu.get(o);r=r.unionWith(c.view.nu)}return r}}function ty(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=X_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=iR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=eR.bind(null,e),e.Pu.H_=jb.bind(null,e.eventManager),e.Pu.yu=qb.bind(null,e.eventManager),e}function oR(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=tR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=nR.bind(null,e),e}class Ea{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ic(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return ub(this.persistence,new ab,e.initialUser,this.serializer)}Cu(e){return new O_(Mu.mi,this.serializer)}Du(e){return new _b}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ea.provider={build:()=>new Ea};class aR extends Ea{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Pe(this.persistence.referenceDelegate instanceof ya,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new W1(s,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Pt.withCacheSize(this.cacheSizeBytes):Pt.DEFAULT;return new O_((s=>ya.mi(s,n)),this.serializer)}}class jl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>rp(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=rR.bind(null,this.syncEngine),await Ub(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new $b})()}createDatastore(e){const n=ic(e.databaseInfo.databaseId),s=(function(i){return new Ib(i)})(e.databaseInfo);return(function(i,o,c,l){return new Rb(i,o,c,l)})(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return(function(s,r,i,o,c){return new Cb(s,r,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(n=>rp(this.syncEngine,n,0)),(function(){return Jd.v()?new Jd:new yb})())}createSyncEngine(e,n){return(function(r,i,o,c,l,u,f){const d=new Kb(r,i,o,c,l,u);return f&&(d.gu=!0),d})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const s=fe(n);Z(Xs,"RemoteStore shutting down."),s.Ea.add(5),await uo(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}jl.provider={build:()=>new jl};/**
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
 */class ny{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Fn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */const Rs="FirestoreClient";class cR{constructor(e,n,s,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=gt.UNAUTHENTICATED,this.clientId=bu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,(async o=>{Z(Rs,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(s,(o=>(Z(Rs,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ms;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Hu(n,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function tl(t,e){t.asyncQueue.verifyOperationInProgress(),Z(Rs,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async r=>{s.isEqual(r)||(await x_(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function op(t,e){t.asyncQueue.verifyOperationInProgress();const n=await lR(t);Z(Rs,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((s=>ep(e.remoteStore,s))),t.setAppCheckTokenChangeListener(((s,r)=>ep(e.remoteStore,r))),t._onlineComponents=e}async function lR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z(Rs,"Using user provided OfflineComponentProvider");try{await tl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(r){return r.name==="FirebaseError"?r.code===O.FAILED_PRECONDITION||r.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(n))throw n;Vr("Error using user provided cache. Falling back to memory cache: "+n),await tl(t,new Ea)}}else Z(Rs,"Using default OfflineComponentProvider"),await tl(t,new aR(void 0));return t._offlineComponents}async function sy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z(Rs,"Using user provided OnlineComponentProvider"),await op(t,t._uninitializedComponentsProvider._online)):(Z(Rs,"Using default OnlineComponentProvider"),await op(t,new jl))),t._onlineComponents}function uR(t){return sy(t).then((e=>e.syncEngine))}async function ql(t){const e=await sy(t),n=e.eventManager;return n.onListen=Gb.bind(null,e.syncEngine),n.onUnlisten=Xb.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Qb.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Jb.bind(null,e.syncEngine),n}function hR(t,e,n={}){const s=new ms;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const f=new ny({next:m=>{f.Nu(),o.enqueueAndForget((()=>W_(i,d)));const _=m.docs.has(c);!_&&m.fromCache?u.reject(new X(O.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&l&&l.source==="server"?u.reject(new X(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),d=new K_(Za(c.path),f,{includeMetadataChanges:!0,qa:!0});return z_(i,d)})(await ql(t),t.asyncQueue,e,n,s))),s.promise}/**
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
 */function ry(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const ap=new Map;/**
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
 */const iy="firestore.googleapis.com",cp=!0;class lp{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new X(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=iy,this.ssl=cp}else this.host=e.host,this.ssl=e.ssl??cp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=N_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<H1)throw new X(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}PA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ry(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new X(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new X(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new X(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cc{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new X(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new vA;switch(s.type){case"firstParty":return new wA(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new X(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=ap.get(n);s&&(Z("ComponentProvider","Removing Datastore"),ap.delete(n),s.terminate())})(this),Promise.resolve()}}function fR(t,e,n,s={}){t=Nn(t,cc);const r=er(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;r&&(vu(`https://${c}`),Eu("Firestore",!0)),i.host!==iy&&i.host!==c&&Vr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:r,emulatorOptions:s};if(!Gs(l,o)&&(t._setSettings(l),s.mockUserToken)){let u,f;if(typeof s.mockUserToken=="string")u=s.mockUserToken,f=gt.MOCK_USER;else{u=Pg(s.mockUserToken,t._app?.options.projectId);const d=s.mockUserToken.sub||s.mockUserToken.user_id;if(!d)throw new X(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new gt(d)}t._authCredentials=new EA(new jg(u,f))}}/**
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
 */class rr{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new rr(this.firestore,e,this._query)}}class We{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new We(this.firestore,e,this._key)}toJSON(){return{type:We._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(ao(n,We._jsonSchema))return new We(e,s||null,new ne(Le.fromString(n.referencePath)))}}We._jsonSchemaVersion="firestore/documentReference/1.0",We._jsonSchema={type:Xe("string",We._jsonSchemaVersion),referencePath:Xe("string")};class gs extends rr{constructor(e,n,s){super(e,n,Za(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new We(this.firestore,null,new ne(e))}withConverter(e){return new gs(this.firestore,e,this._path)}}function oy(t,e,...n){if(t=Je(t),qg("collection","path",e),t instanceof cc){const s=Le.fromString(e,...n);return Id(s),new gs(t,null,s)}{if(!(t instanceof We||t instanceof gs))throw new X(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Le.fromString(e,...n));return Id(s),new gs(t.firestore,null,s)}}function Gu(t,e,...n){if(t=Je(t),arguments.length===1&&(e=bu.newId()),qg("doc","path",e),t instanceof cc){const s=Le.fromString(e,...n);return Td(s),new We(t,null,new ne(s))}{if(!(t instanceof We||t instanceof gs))throw new X(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Le.fromString(e,...n));return Td(s),new We(t.firestore,t instanceof gs?t.converter:null,new ne(s))}}/**
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
 */const up="AsyncQueue";class hp{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new L_(this,"async_queue_retry"),this._c=()=>{const s=el();s&&Z(up,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=el();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=el();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new ms;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!$r(e))throw e;Z(up,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Fn("INTERNAL UNHANDLED ERROR: ",fp(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const r=qu.createAndSchedule(this,e,n,s,(i=>this.hc(i)));return this.tc.push(r),r}uc(){this.nc&&ce(47125,{Pc:fp(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function fp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function dp(t){return(function(n,s){if(typeof n!="object"||n===null)return!1;const r=n;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1})(t,["next","error","complete"])}class Lr extends cc{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new hp,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new hp(e),this._firestoreClient=void 0,await e}}}function dR(t,e){const n=typeof t=="object"?t:wu(),s=typeof t=="string"?t:pa,r=Ga(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Rg("firestore");i&&fR(r,...i)}return r}function Qu(t){if(t._terminated)throw new X(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||pR(t),t._firestoreClient}function pR(t){const e=t._freezeSettings(),n=(function(r,i,o,c){return new BA(r,i,o,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,ry(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new cR(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(r){const i=r?._online.build();return{_offline:r?._offline.build(i),_online:i}})(t._componentsProvider))}/**
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
 */class jt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new jt(ut.fromBase64String(e))}catch(n){throw new X(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new jt(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:jt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ao(e,jt._jsonSchema))return jt.fromBase64String(e.bytes)}}jt._jsonSchemaVersion="firestore/bytes/1.0",jt._jsonSchema={type:Xe("string",jt._jsonSchemaVersion),bytes:Xe("string")};/**
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
 */class lc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class fo{constructor(e){this._methodName=e}}/**
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
 */class mn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:mn._jsonSchemaVersion}}static fromJSON(e){if(ao(e,mn._jsonSchema))return new mn(e.latitude,e.longitude)}}mn._jsonSchemaVersion="firestore/geoPoint/1.0",mn._jsonSchema={type:Xe("string",mn._jsonSchemaVersion),latitude:Xe("number"),longitude:Xe("number")};/**
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
 */class gn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:gn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ao(e,gn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new gn(e.vectorValues);throw new X(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}gn._jsonSchemaVersion="firestore/vectorValue/1.0",gn._jsonSchema={type:Xe("string",gn._jsonSchemaVersion),vectorValues:Xe("object")};/**
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
 */const mR=/^__.*__$/;class gR{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Ps(e,this.data,this.fieldMask,n,this.fieldTransforms):new co(e,this.data,n,this.fieldTransforms)}}class ay{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Ps(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function cy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce(40011,{Ac:t})}}class Yu{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Yu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.gc(e),s}yc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ta(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(cy(this.Ac)&&mR.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class _R{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||ic(e)}Cc(e,n,s,r=!1){return new Yu({Ac:e,methodName:n,Dc:s,path:lt.emptyPath(),fc:!1,bc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Xu(t){const e=t._freezeSettings(),n=ic(t._databaseId);return new _R(t._databaseId,!!e.ignoreUndefinedProperties,n)}function yR(t,e,n,s,r,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,r);eh("Data must be an object, but it was:",o,s);const c=ly(s,o);let l,u;if(i.merge)l=new Ut(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const d of i.mergeFields){const m=Hl(e,d,n);if(!o.contains(m))throw new X(O.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);hy(f,m)||f.push(m)}l=new Ut(f),u=o.fieldTransforms.filter((d=>l.covers(d.field)))}else l=null,u=o.fieldTransforms;return new gR(new Vt(c),l,u)}class uc extends fo{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof uc}}class Ju extends fo{_toFieldTransform(e){return new v_(e.path,new Yi)}isEqual(e){return e instanceof Ju}}class Zu extends fo{constructor(e,n){super(e),this.Fc=n}_toFieldTransform(e){const n=new Zi(e.serializer,p_(e.serializer,this.Fc));return new v_(e.path,n)}isEqual(e){return e instanceof Zu&&this.Fc===e.Fc}}function vR(t,e,n,s){const r=t.Cc(1,e,n);eh("Data must be an object, but it was:",r,s);const i=[],o=Vt.empty();Cs(s,((l,u)=>{const f=th(e,l,n);u=Je(u);const d=r.yc(f);if(u instanceof uc)i.push(f);else{const m=po(u,d);m!=null&&(i.push(f),o.set(f,m))}}));const c=new Ut(i);return new ay(o,c,r.fieldTransforms)}function ER(t,e,n,s,r,i){const o=t.Cc(1,e,n),c=[Hl(e,s,n)],l=[r];if(i.length%2!=0)throw new X(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(Hl(e,i[m])),l.push(i[m+1]);const u=[],f=Vt.empty();for(let m=c.length-1;m>=0;--m)if(!hy(u,c[m])){const _=c[m];let S=l[m];S=Je(S);const k=o.yc(_);if(S instanceof uc)u.push(_);else{const D=po(S,k);D!=null&&(u.push(_),f.set(_,D))}}const d=new Ut(u);return new ay(f,d,o.fieldTransforms)}function TR(t,e,n,s=!1){return po(n,t.Cc(s?4:3,e))}function po(t,e){if(uy(t=Je(t)))return eh("Unsupported field value:",e,t),ly(t,e);if(t instanceof fo)return(function(s,r){if(!cy(r.Ac))throw r.Sc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Sc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,r){const i=[];let o=0;for(const c of s){let l=po(c,r.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(t,e)}return(function(s,r){if((s=Je(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return p_(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=Ue.fromDate(s);return{timestampValue:_a(r.serializer,i)}}if(s instanceof Ue){const i=new Ue(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:_a(r.serializer,i)}}if(s instanceof mn)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof jt)return{bytesValue:R_(r.serializer,s._byteString)};if(s instanceof We){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ou(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof gn)return(function(o,c){return{mapValue:{fields:{[Jg]:{stringValue:Zg},[ma]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw c.Sc("VectorValues must only contain numeric values.");return Vu(c.serializer,u)}))}}}}}})(s,r);throw r.Sc(`Unsupported field value: ${Qa(s)}`)})(t,e)}function ly(t,e){const n={};return Wg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Cs(t,((s,r)=>{const i=po(r,e.mc(s));i!=null&&(n[s]=i)})),{mapValue:{fields:n}}}function uy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ue||t instanceof mn||t instanceof jt||t instanceof We||t instanceof fo||t instanceof gn)}function eh(t,e,n){if(!uy(n)||!Hg(n)){const s=Qa(n);throw s==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+s)}}function Hl(t,e,n){if((e=Je(e))instanceof lc)return e._internalPath;if(typeof e=="string")return th(t,e);throw Ta("Field path arguments must be of type string or ",t,!1,void 0,n)}const IR=new RegExp("[~\\*/\\[\\]]");function th(t,e,n){if(e.search(IR)>=0)throw Ta(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new lc(...e.split("."))._internalPath}catch{throw Ta(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ta(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${s}`),o&&(l+=` in document ${r}`),l+=")"),new X(O.INVALID_ARGUMENT,c+t+l)}function hy(t,e){return t.some((n=>n.isEqual(e)))}/**
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
 */class fy{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new We(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(nh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wR extends fy{data(){return super.data()}}function nh(t,e){return typeof e=="string"?th(t,e):e instanceof lc?e._internalPath:e._delegate._internalPath}/**
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
 */function AR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sh{}class dy extends sh{}function bR(t,e,...n){let s=[];e instanceof sh&&s.push(e),s=s.concat(n),(function(i){const o=i.filter((l=>l instanceof ih)).length,c=i.filter((l=>l instanceof rh)).length;if(o>1||o>0&&c>0)throw new X(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const r of s)t=r._apply(t);return t}class rh extends dy{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new rh(e,n,s)}_apply(e){const n=this._parse(e);return py(e._query,n),new rr(e.firestore,e.converter,Dl(e._query,n))}_parse(e){const n=Xu(e.firestore);return(function(i,o,c,l,u,f,d){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new X(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){gp(d,f);const S=[];for(const k of d)S.push(mp(l,i,k));m={arrayValue:{values:S}}}else m=mp(l,i,d)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||gp(d,f),m=TR(c,o,d,f==="in"||f==="not-in");return Ye.create(u,f,m)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class ih extends sh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ih(e,n)}_parse(e){const n=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return n.length===1?n[0]:Zt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(r,i){let o=r;const c=i.getFlattenedFilters();for(const l of c)py(o,l),o=Dl(o,l)})(e._query,n),new rr(e.firestore,e.converter,Dl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class oh extends dy{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new oh(e,n)}_apply(e){const n=(function(r,i,o){if(r.startAt!==null)throw new X(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new X(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Qi(i,o)})(e._query,this._field,this._direction);return new rr(e.firestore,e.converter,(function(r,i){const o=r.explicitOrderBy.concat([i]);return new jr(r.path,r.collectionGroup,o,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)})(e._query,n))}}function pp(t,e="asc"){const n=e,s=nh("orderBy",t);return oh._create(s,n)}function mp(t,e,n){if(typeof(n=Je(n))=="string"){if(n==="")throw new X(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!a_(e)&&n.indexOf("/")!==-1)throw new X(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Le.fromString(n));if(!ne.isDocumentKey(s))throw new X(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return kd(t,new ne(s))}if(n instanceof We)return kd(t,n._key);throw new X(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qa(n)}.`)}function gp(t,e){if(!Array.isArray(t)||t.length===0)throw new X(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function py(t,e){const n=(function(r,i){for(const o of r)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(t.filters,(function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new X(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new X(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class RR{convertValue(e,n="none"){switch(As(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ws(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ce(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return Cs(e,((r,i)=>{s[r]=this.convertValue(i,n)})),s}convertVectorValue(e){const n=e.fields?.[ma].arrayValue?.values?.map((s=>ze(s.doubleValue)));return new gn(n)}convertGeoPoint(e){return new mn(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Ja(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Wi(e));default:return null}}convertTimestamp(e){const n=Is(e);return new Ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Le.fromString(e);Pe(D_(s),9688,{name:e});const r=new Ki(s.get(1),s.get(3)),i=new ne(s.popFirst(5));return r.isEqual(n)||Fn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function SR(t,e,n){let s;return s=t?t.toFirestore(e):e,s}class _i{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ks extends fy{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Yo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(nh("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new X(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ks._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ks._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ks._jsonSchema={type:Xe("string",Ks._jsonSchemaVersion),bundleSource:Xe("string","DocumentSnapshot"),bundleName:Xe("string"),bundle:Xe("string")};class Yo extends Ks{data(e={}){return super.data(e)}}class br{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new _i(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((s=>{e.call(n,new Yo(this._firestore,this._userDataWriter,s.key,s,new _i(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map((c=>{const l=new Yo(r._firestore,r._userDataWriter,c.doc.key,c.doc,new _i(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new Yo(r._firestore,r._userDataWriter,c.doc.key,c.doc,new _i(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:CR(c.type),doc:l,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new X(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=br._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=bu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function CR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce(61501,{type:t})}}/**
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
 */function PR(t){t=Nn(t,We);const e=Nn(t.firestore,Lr);return hR(Qu(e),t._key).then((n=>yy(e,t,n)))}br._jsonSchemaVersion="firestore/querySnapshot/1.0",br._jsonSchema={type:Xe("string",br._jsonSchemaVersion),bundleSource:Xe("string","QuerySnapshot"),bundleName:Xe("string"),bundle:Xe("string")};class my extends RR{constructor(e){super(),this.firestore=e}convertBytes(e){return new jt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new We(this.firestore,null,n)}}function kR(t,e,n,...s){t=Nn(t,We);const r=Nn(t.firestore,Lr),i=Xu(r);let o;return o=typeof(e=Je(e))=="string"||e instanceof lc?ER(i,"updateDoc",t._key,e,n,s):vR(i,"updateDoc",t._key,e),_y(r,[o.toMutation(t._key,dn.exists(!0))])}function VR(t,e){const n=Nn(t.firestore,Lr),s=Gu(t),r=SR(t.converter,e);return _y(n,[yR(Xu(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,dn.exists(!1))]).then((()=>s))}function gy(t,...e){t=Je(t);let n={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||dp(e[s])||(n=e[s++]);const r={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(dp(e[s])){const l=e[s];e[s]=l.next?.bind(l),e[s+1]=l.error?.bind(l),e[s+2]=l.complete?.bind(l)}let i,o,c;if(t instanceof We)o=Nn(t.firestore,Lr),c=Za(t._key.path),i={next:l=>{e[s]&&e[s](yy(o,t,l))},error:e[s+1],complete:e[s+2]};else{const l=Nn(t,rr);o=Nn(l.firestore,Lr),c=l._query;const u=new my(o);i={next:f=>{e[s]&&e[s](new br(o,u,l,f))},error:e[s+1],complete:e[s+2]},AR(t._query)}return(function(u,f,d,m){const _=new ny(m),S=new K_(f,_,d);return u.asyncQueue.enqueueAndForget((async()=>z_(await ql(u),S))),()=>{_.Nu(),u.asyncQueue.enqueueAndForget((async()=>W_(await ql(u),S)))}})(Qu(o),c,r,i)}function _y(t,e){return(function(s,r){const i=new ms;return s.asyncQueue.enqueueAndForget((async()=>Zb(await uR(s),r,i))),i.promise})(Qu(t),e)}function yy(t,e,n){const s=n.docs.get(e._key),r=new my(t);return new Ks(t,r,e._key,s,new _i(n.hasPendingWrites,n.fromCache),e.converter)}function DR(){return new Ju("serverTimestamp")}function NR(t){return new Zu("increment",t)}(function(e,n=!0){(function(r){Ur=r})(tr),Qs(new Es("firestore",((s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),c=new Lr(new TA(s.getProvider("auth-internal")),new AA(o,s.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new X(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ki(u.options.projectId,f)})(o,r),o);return i={useFetchStreams:n,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),hn(_d,yd,e),hn(_d,yd,"esm2020")})();var OR="firebase",xR="12.4.0";/**
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
 */hn(OR,xR,"app");function vy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const MR=vy,Ey=new io("auth","Firebase",vy());/**
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
 */const Ia=new Tu("@firebase/auth");function LR(t,...e){Ia.logLevel<=ye.WARN&&Ia.warn(`Auth (${tr}): ${t}`,...e)}function Xo(t,...e){Ia.logLevel<=ye.ERROR&&Ia.error(`Auth (${tr}): ${t}`,...e)}/**
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
 */function en(t,...e){throw ah(t,...e)}function _n(t,...e){return ah(t,...e)}function Ty(t,e,n){const s={...MR(),[e]:n};return new io("auth","Firebase",s).create(e,{appName:t.name})}function _s(t){return Ty(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ah(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Ey.create(t,...e)}function ae(t,e,...n){if(!t)throw ah(e,...n)}function Vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Xo(e),new Error(e)}function Bn(t,e){t||Vn(e)}/**
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
 */function zl(){return typeof self<"u"&&self.location?.href||""}function FR(){return _p()==="http:"||_p()==="https:"}function _p(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function UR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(FR()||JI()||"connection"in navigator)?navigator.onLine:!0}function BR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class mo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Bn(n>e,"Short delay should be less than long delay!"),this.isMobile=QI()||ZI()}get(){return UR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ch(t,e){Bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Iy{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const $R={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const jR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],qR=new mo(3e4,6e4);function ir(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ks(t,e,n,s,r={}){return wy(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const c=oo({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...i};return XI()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&er(t.emulatorConfig.host)&&(u.credentials="include"),Iy.fetch()(await Ay(t,t.config.apiHost,n,c),u)})}async function wy(t,e,n){t._canInitEmulator=!1;const s={...$R,...e};try{const r=new zR(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Fo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Fo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Fo(t,"user-disabled",o);const f=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ty(t,f,u);en(t,f)}}catch(r){if(r instanceof Tn)throw r;en(t,"network-request-failed",{message:String(r)})}}async function hc(t,e,n,s,r={}){const i=await ks(t,e,n,s,r);return"mfaPendingCredential"in i&&en(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Ay(t,e,n,s){const r=`${e}${n}?${s}`,i=t,o=i.config.emulator?ch(t.config,r):`${t.config.apiScheme}://${r}`;return jR.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function HR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(_n(this.auth,"network-request-failed")),qR.get())})}}function Fo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=_n(t,e,s);return r.customData._tokenResponse=n,r}function yp(t){return t!==void 0&&t.enterprise!==void 0}class WR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return HR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function KR(t,e){return ks(t,"GET","/v2/recaptchaConfig",ir(t,e))}/**
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
 */async function GR(t,e){return ks(t,"POST","/v1/accounts:delete",e)}async function wa(t,e){return ks(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ni(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function QR(t,e=!1){const n=Je(t),s=await n.getIdToken(e),r=lh(s);ae(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i?.sign_in_provider;return{claims:r,token:s,authTime:Ni(nl(r.auth_time)),issuedAtTime:Ni(nl(r.iat)),expirationTime:Ni(nl(r.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function nl(t){return Number(t)*1e3}function lh(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Xo("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ag(n);return r?JSON.parse(r):(Xo("Failed to decode base64 JWT payload"),null)}catch(r){return Xo("Caught error parsing JWT payload as JSON",r?.toString()),null}}function vp(t){const e=lh(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function eo(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Tn&&YR(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function YR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class XR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Wl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ni(this.lastLoginAt),this.creationTime=Ni(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Aa(t){const e=t.auth,n=await t.getIdToken(),s=await eo(t,wa(e,{idToken:n}));ae(s?.users.length,e,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const i=r.providerUserInfo?.length?by(r.providerUserInfo):[],o=ZR(t.providerData,i),c=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!o?.length,u=c?l:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new Wl(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function JR(t){const e=Je(t);await Aa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ZR(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function by(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function eS(t,e){const n=await wy(t,{},async()=>{const s=oo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=await Ay(t,r,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:s};return t.emulatorConfig&&er(t.emulatorConfig.host)&&(l.credentials="include"),Iy.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function tS(t,e){return ks(t,"POST","/v2/accounts:revokeToken",ir(t,e))}/**
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
 */class Rr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=vp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await eS(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Rr;return s&&(ae(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(ae(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(ae(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Rr,this.toJSON())}_performRefresh(){return Vn("not implemented")}}/**
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
 */function Jn(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Gt{constructor({uid:e,auth:n,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new XR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Wl(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await eo(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return QR(this,e)}reload(){return JR(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Gt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Aa(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($t(this.auth.app))return Promise.reject(_s(this.auth));const e=await this.getIdToken();return await eo(this,GR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,r=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:d,emailVerified:m,isAnonymous:_,providerData:S,stsTokenManager:k}=n;ae(d&&k,e,"internal-error");const D=Rr.fromJSON(this.name,k);ae(typeof d=="string",e,"internal-error"),Jn(s,e.name),Jn(r,e.name),ae(typeof m=="boolean",e,"internal-error"),ae(typeof _=="boolean",e,"internal-error"),Jn(i,e.name),Jn(o,e.name),Jn(c,e.name),Jn(l,e.name),Jn(u,e.name),Jn(f,e.name);const U=new Gt({uid:d,auth:e,email:r,emailVerified:m,displayName:s,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:D,createdAt:u,lastLoginAt:f});return S&&Array.isArray(S)&&(U.providerData=S.map(B=>({...B}))),l&&(U._redirectEventId=l),U}static async _fromIdTokenResponse(e,n,s=!1){const r=new Rr;r.updateFromServerResponse(n);const i=new Gt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Aa(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];ae(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?by(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!i?.length,c=new Rr;c.updateFromIdToken(s);const l=new Gt({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Wl(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!i?.length};return Object.assign(l,u),l}}/**
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
 */const Ep=new Map;function Dn(t){Bn(t instanceof Function,"Expected a class definition");let e=Ep.get(t);return e?(Bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ep.set(t,e),e)}/**
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
 */class Ry{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ry.type="NONE";const Tp=Ry;/**
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
 */function Jo(t,e,n){return`firebase:${t}:${e}:${n}`}class Sr{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Jo(this.userKey,r.apiKey,i),this.fullPersistenceKey=Jo("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await wa(this.auth,{idToken:e}).catch(()=>{});return n?Gt._fromGetAccountInfoResponse(this.auth,n,e):null}return Gt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Sr(Dn(Tp),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||Dn(Tp);const o=Jo(s,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){let d;if(typeof f=="string"){const m=await wa(e,{idToken:f}).catch(()=>{});if(!m)break;d=await Gt._fromGetAccountInfoResponse(e,m,f)}else d=Gt._fromJSON(e,f);u!==i&&(c=d),i=u;break}}catch{}const l=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Sr(i,e,s):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Sr(i,e,s))}}/**
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
 */function Ip(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ky(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Sy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dy(e))return"Blackberry";if(Ny(e))return"Webos";if(Cy(e))return"Safari";if((e.includes("chrome/")||Py(e))&&!e.includes("edge/"))return"Chrome";if(Vy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if(s?.length===2)return s[1]}return"Other"}function Sy(t=It()){return/firefox\//i.test(t)}function Cy(t=It()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Py(t=It()){return/crios\//i.test(t)}function ky(t=It()){return/iemobile/i.test(t)}function Vy(t=It()){return/android/i.test(t)}function Dy(t=It()){return/blackberry/i.test(t)}function Ny(t=It()){return/webos/i.test(t)}function uh(t=It()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function nS(t=It()){return uh(t)&&!!window.navigator?.standalone}function sS(){return ew()&&document.documentMode===10}function Oy(t=It()){return uh(t)||Vy(t)||Ny(t)||Dy(t)||/windows phone/i.test(t)||ky(t)}/**
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
 */function xy(t,e=[]){let n;switch(t){case"Browser":n=Ip(It());break;case"Worker":n=`${Ip(It())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${tr}/${s}`}/**
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
 */class rS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function iS(t,e={}){return ks(t,"GET","/v2/passwordPolicy",ir(t,e))}/**
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
 */const oS=6;class aS{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??oS,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class cS{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wp(this),this.idTokenSubscription=new wp(this),this.beforeStateQueue=new rS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ey,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Dn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Sr.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await wa(this,{idToken:e}),s=await Gt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if($t(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=s?._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===o)&&c?.user&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(i){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Aa(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=BR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($t(this.app))return Promise.reject(_s(this));const n=e?Je(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $t(this.app)?Promise.reject(_s(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $t(this.app)?Promise.reject(_s(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await iS(this),n=new aS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new io("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await tS(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Dn(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await Sr.create(this,[Dn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,r);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if($t(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&LR(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Hr(t){return Je(t)}class wp{constructor(e){this.auth=e,this.observer=null,this.addObserver=cw(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let fc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function lS(t){fc=t}function My(t){return fc.loadJS(t)}function uS(){return fc.recaptchaEnterpriseScript}function hS(){return fc.gapiScript}function fS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class dS{constructor(){this.enterprise=new pS}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class pS{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const mS="recaptcha-enterprise",Ly="NO_RECAPTCHA";class gS{constructor(e){this.type=mS,this.auth=Hr(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{KR(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new WR(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function r(i,o,c){const l=window.grecaptcha;yp(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Ly)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new dS().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(c=>{if(!n&&yp(window.grecaptcha))r(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=uS();l.length!==0&&(l+=c),My(l).then(()=>{r(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function Ap(t,e,n,s=!1,r=!1){const i=new gS(t);let o;if(r)o=Ly;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return s?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function bp(t,e,n,s,r){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Ap(t,e,n,n==="getOobCode");return s(t,i)}else return s(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ap(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(i)})}/**
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
 */function _S(t,e){const n=Ga(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Gs(i,e??{}))return r;en(r,"already-initialized")}return n.initialize({options:e})}function yS(t,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(Dn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e?.popupRedirectResolver)}function vS(t,e,n){const s=Hr(t);ae(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Fy(e),{host:o,port:c}=ES(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){ae(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ae(Gs(u,s.config.emulator)&&Gs(f,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=u,s.emulatorConfig=f,s.settings.appVerificationDisabledForTesting=!0,er(o)?(vu(`${i}//${o}${l}`),Eu("Auth",!0)):TS()}function Fy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ES(t){const e=Fy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Rp(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Rp(o)}}}function Rp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function TS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class hh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vn("not implemented")}_getIdTokenResponse(e){return Vn("not implemented")}_linkToIdToken(e,n){return Vn("not implemented")}_getReauthenticationResolver(e){return Vn("not implemented")}}async function IS(t,e){return ks(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function wS(t,e){return hc(t,"POST","/v1/accounts:signInWithPassword",ir(t,e))}/**
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
 */async function AS(t,e){return hc(t,"POST","/v1/accounts:signInWithEmailLink",ir(t,e))}async function bS(t,e){return hc(t,"POST","/v1/accounts:signInWithEmailLink",ir(t,e))}/**
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
 */class to extends hh{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new to(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new to(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bp(e,n,"signInWithPassword",wS);case"emailLink":return AS(e,{email:this._email,oobCode:this._password});default:en(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bp(e,s,"signUpPassword",IS);case"emailLink":return bS(e,{idToken:n,email:this._email,oobCode:this._password});default:en(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Cr(t,e){return hc(t,"POST","/v1/accounts:signInWithIdp",ir(t,e))}/**
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
 */const RS="http://localhost";class Js extends hh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Js(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):en("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=n;if(!s||!r)return null;const o=new Js(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Cr(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Cr(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Cr(e,n)}buildRequest(){const e={requestUri:RS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=oo(n)}return e}}/**
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
 */function SS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function CS(t){const e=fi(di(t)).link,n=e?fi(di(e)).deep_link_id:null,s=fi(di(t)).deep_link_id;return(s?fi(di(s)).link:null)||s||n||e||t}class fh{constructor(e){const n=fi(di(e)),s=n.apiKey??null,r=n.oobCode??null,i=SS(n.mode??null);ae(s&&r&&i,"argument-error"),this.apiKey=s,this.operation=i,this.code=r,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=CS(e);try{return new fh(n)}catch{return null}}}/**
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
 */class zr{constructor(){this.providerId=zr.PROVIDER_ID}static credential(e,n){return to._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=fh.parseLink(n);return ae(s,"argument-error"),to._fromEmailAndCode(e,s.code,s.tenantId)}}zr.PROVIDER_ID="password";zr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Uy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class go extends Uy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class rs extends go{constructor(){super("facebook.com")}static credential(e){return Js._fromParams({providerId:rs.PROVIDER_ID,signInMethod:rs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rs.credentialFromTaggedObject(e)}static credentialFromError(e){return rs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rs.credential(e.oauthAccessToken)}catch{return null}}}rs.FACEBOOK_SIGN_IN_METHOD="facebook.com";rs.PROVIDER_ID="facebook.com";/**
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
 */class is extends go{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Js._fromParams({providerId:is.PROVIDER_ID,signInMethod:is.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return is.credentialFromTaggedObject(e)}static credentialFromError(e){return is.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return is.credential(n,s)}catch{return null}}}is.GOOGLE_SIGN_IN_METHOD="google.com";is.PROVIDER_ID="google.com";/**
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
 */class os extends go{constructor(){super("github.com")}static credential(e){return Js._fromParams({providerId:os.PROVIDER_ID,signInMethod:os.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return os.credentialFromTaggedObject(e)}static credentialFromError(e){return os.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return os.credential(e.oauthAccessToken)}catch{return null}}}os.GITHUB_SIGN_IN_METHOD="github.com";os.PROVIDER_ID="github.com";/**
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
 */class as extends go{constructor(){super("twitter.com")}static credential(e,n){return Js._fromParams({providerId:as.PROVIDER_ID,signInMethod:as.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return as.credentialFromTaggedObject(e)}static credentialFromError(e){return as.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return as.credential(n,s)}catch{return null}}}as.TWITTER_SIGN_IN_METHOD="twitter.com";as.PROVIDER_ID="twitter.com";/**
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
 */class Fr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Gt._fromIdTokenResponse(e,s,r),o=Sp(s);return new Fr({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Sp(s);return new Fr({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Sp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ba extends Tn{constructor(e,n,s,r){super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,ba.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new ba(e,n,s,r)}}function By(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ba._fromErrorAndOperation(t,i,e,s):i})}async function PS(t,e,n=!1){const s=await eo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Fr._forOperation(t,"link",s)}/**
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
 */async function kS(t,e,n=!1){const{auth:s}=t;if($t(s.app))return Promise.reject(_s(s));const r="reauthenticate";try{const i=await eo(t,By(s,r,e,t),n);ae(i.idToken,s,"internal-error");const o=lh(i.idToken);ae(o,s,"internal-error");const{sub:c}=o;return ae(t.uid===c,s,"user-mismatch"),Fr._forOperation(t,r,i)}catch(i){throw i?.code==="auth/user-not-found"&&en(s,"user-mismatch"),i}}/**
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
 */async function $y(t,e,n=!1){if($t(t.app))return Promise.reject(_s(t));const s="signIn",r=await By(t,s,e),i=await Fr._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function VS(t,e){return $y(Hr(t),e)}/**
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
 */async function DS(t){const e=Hr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function NS(t,e,n){return $t(t.app)?Promise.reject(_s(t)):VS(Je(t),zr.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&DS(t),s})}function OS(t,e,n,s){return Je(t).onIdTokenChanged(e,n,s)}function xS(t,e,n){return Je(t).beforeAuthStateChanged(e,n)}function MS(t,e,n,s){return Je(t).onAuthStateChanged(e,n,s)}function LS(t){return Je(t).signOut()}const Ra="__sak";/**
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
 */class jy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ra,"1"),this.storage.removeItem(Ra),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const FS=1e3,US=10;class qy extends jy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Oy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);sS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,US):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},FS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qy.type="LOCAL";const BS=qy;/**
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
 */class Hy extends jy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Hy.type="SESSION";const zy=Hy;/**
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
 */function $S(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class dc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new dc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await $S(c);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}dc.receivers=[];/**
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
 */function dh(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class jS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=dh("",20);r.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(d){const m=d;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function yn(){return window}function qS(t){yn().location.href=t}/**
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
 */function Wy(){return typeof yn().WorkerGlobalScope<"u"&&typeof yn().importScripts=="function"}async function HS(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zS(){return navigator?.serviceWorker?.controller||null}function WS(){return Wy()?self:null}/**
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
 */const Ky="firebaseLocalStorageDb",KS=1,Sa="firebaseLocalStorage",Gy="fbase_key";class _o{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function pc(t,e){return t.transaction([Sa],e?"readwrite":"readonly").objectStore(Sa)}function GS(){const t=indexedDB.deleteDatabase(Ky);return new _o(t).toPromise()}function Kl(){const t=indexedDB.open(Ky,KS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Sa,{keyPath:Gy})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Sa)?e(s):(s.close(),await GS(),e(await Kl()))})})}async function Cp(t,e,n){const s=pc(t,!0).put({[Gy]:e,value:n});return new _o(s).toPromise()}async function QS(t,e){const n=pc(t,!1).get(e),s=await new _o(n).toPromise();return s===void 0?null:s.value}function Pp(t,e){const n=pc(t,!0).delete(e);return new _o(n).toPromise()}const YS=800,XS=3;class Qy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Kl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>XS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=dc._getInstance(WS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await HS(),!this.activeServiceWorker)return;this.sender=new jS(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Kl();return await Cp(e,Ra,"1"),await Pp(e,Ra),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Cp(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>QS(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Pp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=pc(r,!1).getAll();return new _o(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qy.type="LOCAL";const JS=Qy;new mo(3e4,6e4);/**
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
 */function ZS(t,e){return e?Dn(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ph extends hh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Cr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Cr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Cr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function eC(t){return $y(t.auth,new ph(t),t.bypassAuthState)}function tC(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),kS(n,new ph(t),t.bypassAuthState)}async function nC(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),PS(n,new ph(t),t.bypassAuthState)}/**
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
 */class Yy{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eC;case"linkViaPopup":case"linkViaRedirect":return nC;case"reauthViaPopup":case"reauthViaRedirect":return tC;default:en(this.auth,"internal-error")}}resolve(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const sC=new mo(2e3,1e4);class vr extends Yy{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,vr.currentPopupAction&&vr.currentPopupAction.cancel(),vr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){Bn(this.filter.length===1,"Popup operations only handle one event");const e=dh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(_n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vr.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sC.get())};e()}}vr.currentPopupAction=null;/**
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
 */const rC="pendingRedirect",Zo=new Map;class iC extends Yy{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Zo.get(this.auth._key());if(!e){try{const s=await oC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Zo.set(this.auth._key(),e)}return this.bypassAuthState||Zo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oC(t,e){const n=lC(e),s=cC(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function aC(t,e){Zo.set(t._key(),e)}function cC(t){return Dn(t._redirectPersistence)}function lC(t){return Jo(rC,t.config.apiKey,t.name)}async function uC(t,e,n=!1){if($t(t.app))return Promise.reject(_s(t));const s=Hr(t),r=ZS(s,e),o=await new iC(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const hC=600*1e3;class fC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!Xy(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";n.onError(_n(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hC&&this.cachedEventUids.clear(),this.cachedEventUids.has(kp(e))}saveEventToCache(e){this.cachedEventUids.add(kp(e)),this.lastProcessedEventTime=Date.now()}}function kp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Xy({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function dC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xy(t);default:return!1}}/**
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
 */async function pC(t,e={}){return ks(t,"GET","/v1/projects",e)}/**
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
 */const mC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gC=/^https?/;async function _C(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pC(t);for(const n of e)try{if(yC(n))return}catch{}en(t,"unauthorized-domain")}function yC(t){const e=zl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!gC.test(n))return!1;if(mC.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const vC=new mo(3e4,6e4);function Vp(){const t=yn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function EC(t){return new Promise((e,n)=>{function s(){Vp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vp(),n(_n(t,"network-request-failed"))},timeout:vC.get()})}if(yn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(yn().gapi?.load)s();else{const r=fS("iframefcb");return yn()[r]=()=>{gapi.load?s():n(_n(t,"network-request-failed"))},My(`${hS()}?onload=${r}`).catch(i=>n(i))}}).catch(e=>{throw ea=null,e})}let ea=null;function TC(t){return ea=ea||EC(t),ea}/**
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
 */const IC=new mo(5e3,15e3),wC="__/auth/iframe",AC="emulator/auth/iframe",bC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},RC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function SC(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ch(e,AC):`https://${t.config.authDomain}/${wC}`,s={apiKey:e.apiKey,appName:t.name,v:tr},r=RC.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${oo(s).slice(1)}`}async function CC(t){const e=await TC(t),n=yn().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:SC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bC,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=_n(t,"network-request-failed"),c=yn().setTimeout(()=>{i(o)},IC.get());function l(){yn().clearTimeout(c),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const PC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kC=500,VC=600,DC="_blank",NC="http://localhost";class Dp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function OC(t,e,n,s=kC,r=VC){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const l={...PC,width:s.toString(),height:r.toString(),top:i,left:o},u=It().toLowerCase();n&&(c=Py(u)?DC:n),Sy(u)&&(e=e||NC,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[_,S])=>`${m}${_}=${S},`,"");if(nS(u)&&c!=="_self")return xC(e||"",c),new Dp(null);const d=window.open(e||"",c,f);ae(d,t,"popup-blocked");try{d.focus()}catch{}return new Dp(d)}function xC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const MC="__/auth/handler",LC="emulator/auth/handler",FC=encodeURIComponent("fac");async function Np(t,e,n,s,r,i){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:tr,eventId:r};if(e instanceof Uy){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",aw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,d]of Object.entries({}))o[f]=d}if(e instanceof go){const f=e.getScopes().filter(d=>d!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),u=l?`#${FC}=${encodeURIComponent(l)}`:"";return`${UC(t)}?${oo(c).slice(1)}${u}`}function UC({config:t}){return t.emulator?ch(t,LC):`https://${t.authDomain}/${MC}`}/**
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
 */const sl="webStorageSupport";class BC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zy,this._completeRedirectFn=uC,this._overrideRedirectResult=aC}async _openPopup(e,n,s,r){Bn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Np(e,n,s,zl(),r);return OC(e,i,dh())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Np(e,n,s,zl(),r);return qS(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Bn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await CC(e),s=new fC(e);return n.register("authEvent",r=>(ae(r?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(sl,{type:sl},r=>{const i=r?.[0]?.[sl];i!==void 0&&n(!!i),en(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_C(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Oy()||Cy()||uh()}}const $C=BC;var Op="@firebase/auth",xp="1.11.0";/**
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
 */class jC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function qC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function HC(t){Qs(new Es("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=s.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xy(t)},u=new cS(s,r,i,l);return yS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Qs(new Es("auth-internal",e=>{const n=Hr(e.getProvider("auth").getImmediate());return(s=>new jC(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hn(Op,xp,qC(t)),hn(Op,xp,"esm2020")}/**
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
 */const zC=300,WC=Cg("authIdTokenMaxAge")||zC;let Mp=null;const KC=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>WC)return;const r=n?.token;Mp!==r&&(Mp=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Jy(t=wu()){const e=Ga(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_S(t,{popupRedirectResolver:$C,persistence:[JS,BS,zy]}),s=Cg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=KC(i.toString());xS(n,o,()=>o(n.currentUser)),OS(n,c=>o(c))}}const r=bg("auth");return r&&vS(n,`http://${r}`),n}function GC(){return document.getElementsByTagName("head")?.[0]??document}lS({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=_n("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",GC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});HC("Browser");/**
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
 */const Zy="firebasestorage.googleapis.com",QC="storageBucket",YC=120*1e3,XC=600*1e3;/**
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
 */class In extends Tn{constructor(e,n,s=0){super(rl(e),`Firebase Storage: ${n} (${rl(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,In.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return rl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var En;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(En||(En={}));function rl(t){return"storage/"+t}function JC(){const t="An unknown error occurred, please check the error payload for server response.";return new In(En.UNKNOWN,t)}function ZC(){return new In(En.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function eP(){return new In(En.CANCELED,"User canceled the upload/download.")}function tP(t){return new In(En.INVALID_URL,"Invalid URL '"+t+"'.")}function nP(t){return new In(En.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Lp(t){return new In(En.INVALID_ARGUMENT,t)}function ev(){return new In(En.APP_DELETED,"The Firebase app was deleted.")}function sP(t){return new In(En.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Qt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Qt.makeFromUrl(e,n)}catch{return new Qt(e,"")}if(s.path==="")return s;throw nP(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(z){z.path.charAt(z.path.length-1)==="/"&&(z.path_=z.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function u(z){z.path_=decodeURIComponent(z.path)}const f="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",_=new RegExp(`^https?://${d}/${f}/b/${r}/o${m}`,"i"),S={bucket:1,path:3},k=n===Zy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,D="([^?#]*)",U=new RegExp(`^https?://${k}/${r}/${D}`,"i"),q=[{regex:c,indices:l,postModify:i},{regex:_,indices:S,postModify:u},{regex:U,indices:{bucket:1,path:2},postModify:u}];for(let z=0;z<q.length;z++){const ee=q[z],ie=ee.regex.exec(e);if(ie){const R=ie[ee.indices.bucket];let v=ie[ee.indices.path];v||(v=""),s=new Qt(R,v),ee.postModify(s);break}}if(s==null)throw tP(e);return s}}class rP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function iP(t,e,n){let s=1,r=null,i=null,o=!1,c=0;function l(){return c===2}let u=!1;function f(...D){u||(u=!0,e.apply(null,D))}function d(D){r=setTimeout(()=>{r=null,t(_,l())},D)}function m(){i&&clearTimeout(i)}function _(D,...U){if(u){m();return}if(D){m(),f.call(null,D,...U);return}if(l()||o){m(),f.call(null,D,...U);return}s<64&&(s*=2);let q;c===1?(c=2,q=0):q=(s+Math.random())*1e3,d(q)}let S=!1;function k(D){S||(S=!0,m(),!u&&(r!==null?(D||(c=2),clearTimeout(r),d(0)):D||(c=1)))}return d(0),i=setTimeout(()=>{o=!0,k(!0)},n),k}function oP(t){t(!1)}/**
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
 */function aP(t){return t!==void 0}function Fp(t,e,n,s){if(s<e)throw Lp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Lp(`Invalid value for '${t}'. Expected ${n} or less.`)}function cP(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var Ca;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ca||(Ca={}));/**
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
 */function lP(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
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
 */class uP{constructor(e,n,s,r,i,o,c,l,u,f,d,m=!0,_=!1){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=d,this.retry=m,this.isUsingEmulator=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,k)=>{this.resolve_=S,this.reject_=k,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Uo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===Ca.NO_ERROR,l=i.getStatus();if(!c||lP(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Ca.ABORT;s(!1,new Uo(!1,null,f));return}const u=this.successCodes_.indexOf(l)!==-1;s(!0,new Uo(u,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,c=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());aP(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=JC();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(r.canceled){const l=this.appDelete_?ev():eP();o(l)}else{const l=ZC();o(l)}};this.canceled_?n(!1,new Uo(!1,null,!0)):this.backoffId_=iP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&oP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Uo{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function hP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function fP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function dP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function pP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function mP(t,e,n,s,r,i,o=!0,c=!1){const l=cP(t.urlParams),u=t.url+l,f=Object.assign({},t.headers);return dP(f,e),hP(f,n),fP(f,i),pP(f,s),new uP(u,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o,c)}/**
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
 */function gP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function _P(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Pa{constructor(e,n){this._service=e,n instanceof Qt?this._location=n:this._location=Qt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Pa(e,n)}get root(){const e=new Qt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return _P(this._location.path)}get storage(){return this._service}get parent(){const e=gP(this._location.path);if(e===null)return null;const n=new Qt(this._location.bucket,e);return new Pa(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw sP(e)}}function Up(t,e){const n=e?.[QC];return n==null?null:Qt.makeFromBucketSpec(n,t)}function yP(t,e,n,s={}){t.host=`${e}:${n}`;const r=er(e);r&&(vu(`https://${t.host}/b`),Eu("Storage",!0)),t._isUsingEmulator=!0,t._protocol=r?"https":"http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:Pg(i,t.app.options.projectId))}class vP{constructor(e,n,s,r,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=Zy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=YC,this._maxUploadRetryTime=XC,this._requests=new Set,r!=null?this._bucket=Qt.makeFromBucketSpec(r,this._host):this._bucket=Up(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Qt.makeFromBucketSpec(this._url,e):this._bucket=Up(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Fp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Fp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if($t(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Pa(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new rP(ev());{const o=mP(e,this._appId,s,r,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Bp="@firebase/storage",$p="0.14.0";/**
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
 */const tv="storage";function EP(t=wu(),e){t=Je(t);const s=Ga(t,tv).getImmediate({identifier:e}),r=Rg("storage");return r&&TP(s,...r),s}function TP(t,e,n,s={}){yP(t,e,n,s)}function IP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new vP(n,s,r,e,tr)}function wP(){Qs(new Es(tv,IP,"PUBLIC").setMultipleInstances(!0)),hn(Bp,$p,""),hn(Bp,$p,"esm2020")}wP();const AP={apiKey:"AIzaSyB8uWskczwYPUG4fWBQ7XBcdHdKDM0wKVg",authDomain:"accounting-site-5c946.firebaseapp.com",projectId:"accounting-site-5c946",storageBucket:"accounting-site-5c946.firebasestorage.app",messagingSenderId:"1030715238547",appId:"1:1030715238547:web:84e73751e15b0e26e84566",measurementId:"G-7WC5XS8LJD"},mh=Dg(AP);Jy(mh);const mc=dR(mh);EP(mh);const bP={__name:"PageViews",setup(t){const e=Me(0);let n=null;const s=Gu(mc,"pageViews","main"),r=()=>{const o=localStorage.getItem("page_view_date"),c=new Date().toISOString().split("T")[0];return o===c},i=()=>{const o=new Date().toISOString().split("T")[0];localStorage.setItem("page_view_date",o)};return jn(async()=>{n=gy(s,o=>{o.exists()&&(e.value=o.data().count??0)}),r()||(await kR(s,{count:NR(1)}),i())}),Ba(()=>{n&&n()}),(o,c)=>(pe(),ge("div",null,[W("p",null,"網站瀏覽人次："+$e(e.value),1)]))}},RP={class:"home"},SP={__name:"Home",setup(t){const e=[{categories:[{title:"專業可靠",desc:"以專業知識與經驗，提供精準建議與服務。"},{title:"誠信正直",desc:"堅守職業道德，建立客戶信任基礎。"},{title:"高效迅速",desc:"迅速回應客戶需求，提供有效解決方案。"},{title:"貼心服務",desc:"心懷同理，矢志為中小企業提供貼心服務。"}]}],n=[{target:"公司、商號、執行業務者、非營利組織、寺廟、宗親會歡迎醫師、護理機構、藥師、各項補習班、幼兒園、托幼機構、老人照顧中心、非營利組織、寺廟等洽詢",categories:[{name:"財務及稅務簽證",items:["銀行融資簽證","簽務申報簽證","決算晝表簽證","專案查核報告","協議程序之執行"]},{name:"工商登記代辦",items:["公司及商號設立登記","資本額查核報告","各項變更登記"]},{name:"代客帳務處理及制度設計",items:["合規帳務處理","內部制度設計規劃","執行業務專門人士稅務服務","非營利組織會計稅務"]}]},{target:"個人及家族服務",categories:[{name:"個人財產信託及遺贈稅申報",items:["一般財產信託","遺囑信託","遺產稅代理申報","贈與稅代理申報"]},{name:"家族傳承規劃",items:["家族辦公室規劃","閉鎖型公司規劃"]},{name:"都市更新及危老諮詢",items:["都市更新評估","整建維護法規諮詢","公寓大廈管理法規諮詢","都更危老條例社區輔導"]}]},{target:"其他",categories:[{name:"陸資來臺投資諮詢",items:["大陸地區人民來臺投資業別項目—製造業","大陸地區人民來臺投資業別項目—服務業"]},{name:"其他",items:["財稅教育訓練","其他簽證及認證","其他諮詢服務"]}]}];return(s,r)=>(pe(),ge("div",RP,[r[0]||(r[0]=W("section",{class:"home-header"},[W("div",{class:"logo"},[W("img",{class:"img",src:hI})]),W("div",{class:"logo-desc"},[W("p",null,[W("b",null,"It is our moments of struggle that define us. How we handle them is what matters."),ln(),W("br"),ln("— President Allan Trumbull"),W("span",null,"《Angel has Fallen》")]),W("p",null,[ln("正是這種艱困的時刻定義了我們，而我們的處置更加重要。"),W("br"),ln("艾倫特倫布爾總統，"),W("span",null,"《全面攻佔3：天使救援》")])])],-1)),we(bI),we(rd,{title:"核心價值",infoList:e,twoCol:!0}),we(rd,{title:"服務項目",infoList:n}),we(LI,{title:"聯絡我們"}),we(bP)]))}},CP=wt(SP,[["__scopeId","data-v-e893f9d4"]]),PP={class:"btn"},kP={__name:"BackBtn",setup(t){const e=yu(),n=()=>{e.back()};return(s,r)=>(pe(),ge("div",PP,[W("button",{class:"back-btn",onClick:n}," ← 返回 ")]))}},yo=wt(kP,[["__scopeId","data-v-13e8da75"]]),VP={class:"post-card"},DP={class:"date"},NP={__name:"PostCard",props:{post:Object},setup(t){return(e,n)=>{const s=oa("router-link");return pe(),ge("div",VP,[W("h2",null,[we(s,{to:`/news/${t.post.id}`,class:"title"},{default:cs(()=>[ln($e(t.post.title),1)]),_:1},8,["to"])]),W("p",DP,$e(t.post.date),1),W("p",null,$e(t.post.summary),1)])}}},OP=wt(NP,[["__scopeId","data-v-d1950569"]]);/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let nv;const gc=t=>nv=t,sv=Symbol();function Gl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Oi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Oi||(Oi={}));function xP(){const t=em(!0),e=t.run(()=>Me({}));let n=[],s=[];const r=cu({install(i){gc(r),r._a=i,i.provide(sv,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return this._a?n.push(i):s.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const rv=()=>{};function jp(t,e,n,s=rv){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&tm()&&$v(r),r}function hr(t,...e){t.slice().forEach(n=>{n(...e)})}const MP=t=>t(),qp=Symbol(),il=Symbol();function Ql(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];Gl(r)&&Gl(s)&&t.hasOwnProperty(n)&&!Ke(s)&&!hs(s)?t[n]=Ql(r,s):t[n]=s}return t}const LP=Symbol();function FP(t){return!Gl(t)||!Object.prototype.hasOwnProperty.call(t,LP)}const{assign:Zn}=Object;function UP(t){return!!(Ke(t)&&t.effect)}function BP(t,e,n,s){const{state:r,actions:i,getters:o}=e,c=n.state.value[t];let l;function u(){c||(n.state.value[t]=r?r():{});const f=u0(n.state.value[t]);return Zn(f,i,Object.keys(o||{}).reduce((d,m)=>(d[m]=cu(kt(()=>{gc(n);const _=n._s.get(t);return o[m].call(_,_)})),d),{}))}return l=iv(t,u,e,n,s,!0),l}function iv(t,e,n={},s,r,i){let o;const c=Zn({actions:{}},n),l={deep:!0};let u,f,d=[],m=[],_;const S=s.state.value[t];!i&&!S&&(s.state.value[t]={}),Me({});let k;function D(v){let y;u=f=!1,typeof v=="function"?(v(s.state.value[t]),y={type:Oi.patchFunction,storeId:t,events:_}):(Ql(s.state.value[t],v),y={type:Oi.patchObject,payload:v,storeId:t,events:_});const A=k=Symbol();lu().then(()=>{k===A&&(u=!0)}),f=!0,hr(d,y,s.state.value[t])}const U=i?function(){const{state:y}=n,A=y?y():{};this.$patch(w=>{Zn(w,A)})}:rv;function B(){o.stop(),d=[],m=[],s._s.delete(t)}const q=(v,y="")=>{if(qp in v)return v[il]=y,v;const A=function(){gc(s);const w=Array.from(arguments),I=[],E=[];function Te(de){I.push(de)}function je(de){E.push(de)}hr(m,{args:w,name:A[il],store:ee,after:Te,onError:je});let ke;try{ke=v.apply(this&&this.$id===t?this:ee,w)}catch(de){throw hr(E,de),de}return ke instanceof Promise?ke.then(de=>(hr(I,de),de)).catch(de=>(hr(E,de),Promise.reject(de))):(hr(I,ke),ke)};return A[qp]=!0,A[il]=y,A},z={_p:s,$id:t,$onAction:jp.bind(null,m),$patch:D,$reset:U,$subscribe(v,y={}){const A=jp(d,v,y.detached,()=>w()),w=o.run(()=>wr(()=>s.state.value[t],I=>{(y.flush==="sync"?f:u)&&v({storeId:t,type:Oi.direct,events:_},I)},Zn({},l,y)));return A},$dispose:B},ee=no(z);s._s.set(t,ee);const R=(s._a&&s._a.runWithContext||MP)(()=>s._e.run(()=>(o=em()).run(()=>e({action:q}))));for(const v in R){const y=R[v];if(Ke(y)&&!UP(y)||hs(y))i||(S&&FP(y)&&(Ke(y)?y.value=S[v]:Ql(y,S[v])),s.state.value[t][v]=y);else if(typeof y=="function"){const A=q(y,v);R[v]=A,c.actions[v]=y}}return Zn(ee,R),Zn(Re(ee),R),Object.defineProperty(ee,"$state",{get:()=>s.state.value[t],set:v=>{D(y=>{Zn(y,v)})}}),s._p.forEach(v=>{Zn(ee,o.run(()=>v({store:ee,app:s._a,pinia:s,options:c})))}),S&&i&&n.hydrate&&n.hydrate(ee.$state,S),u=!0,f=!0,ee}/*! #__NO_SIDE_EFFECTS__ */function $P(t,e,n){let s;const r=typeof e=="function";s=r?n:e;function i(o,c){const l=z0();return o=o||(l?Ht(sv,null):null),o&&gc(o),o=nv,o._s.has(t)||(r?iv(t,e,s,o):BP(t,s,o)),o._s.get(t)}return i.$id=t,i}const ov=$P("posts",{state:()=>({posts:[],loaded:!1}),actions:{async fetchPosts(){if(this.loaded)return;const i=await(await fetch("https://sheets.googleapis.com/v4/spreadsheets/1DNYhoy2vsUD8Q8ASWpyD4VcHCAcvq5SeLs0SPYu44es/values/sheet1?key=AIzaSyDiTcvxQ6OQcpfP8RuWnJBSfO1DXpZn93c")).json();this.posts=i.values.slice(1).reverse().map((o,c)=>({id:c+1,title:o[0],summary:o[1],content:o[2],date:o[3],img:o[4]})),this.loaded=!0}}}),jP={class:"container"},qP={__name:"News",setup(t){const e=ov();return jn(()=>{e.fetchPosts()}),(n,s)=>(pe(),ge("div",null,[we(yo),W("div",jP,[s[0]||(s[0]=W("h1",null,"最新消息",-1)),(pe(!0),ge(vt,null,wi(yt(e).posts,r=>(pe(),qa(OP,{key:r.id,post:r},null,8,["post"]))),128))])]))}},HP=wt(qP,[["__scopeId","data-v-d97a21f6"]]),zP="/accounting-site/assets/article-img-001-BSNCPfqR.jpg",WP="/accounting-site/assets/gpt-img-WYr3Xaz-.png",KP={key:0,class:"post"},GP={class:"container"},QP={class:"date"},YP={key:0,class:"img-inside"},XP=["src"],JP={__name:"Post",setup(t){const e=Eg(),n=ov();jn(()=>{n.fetchPosts()});const s=kt(()=>n.posts.find(i=>i.id===Number(e.params.id)));function r(i){return new URL(Object.assign({"../assets/article-images/article-img-001.jpg":zP,"../assets/article-images/gpt-img.png":WP})[`../assets/article-images/${i}`],import.meta.url).href}return(i,o)=>(pe(),ge("div",null,[we(yo),yt(s)?(pe(),ge("div",KP,[W("div",GP,[W("h2",null,$e(yt(s).title),1),W("p",QP,$e(yt(s).date),1),W("pre",null,$e(yt(s).content),1),yt(s).img?(pe(),ge("div",YP,[W("img",{src:r(yt(s).img),class:"img"},null,8,XP)])):Mn("",!0)])])):Mn("",!0)]))}},ZP=wt(JP,[["__scopeId","data-v-f8001e87"]]),e2={key:0,class:"toast-overlay"},t2={class:"toast-modal"},n2={__name:"Toast",props:{message:{type:String,required:!0},visible:{type:Boolean,default:!1}},emits:["update:visible"],setup(t,{emit:e}){const n=t,s=e,r=Me(n.visible);wr(()=>n.visible,o=>{r.value=o});const i=()=>{r.value=!1,s("update:visible",!1)};return(o,c)=>(pe(),qa(ig,{name:"fade"},{default:cs(()=>[r.value?(pe(),ge("div",e2,[W("div",t2,[W("p",null,$e(t.message),1),W("button",{onClick:i},"OK")])])):Mn("",!0)]),_:1}))}},av=wt(n2,[["__scopeId","data-v-6a803a6b"]]),s2={class:"upload"},r2={key:0,class:"msg"},i2={class:"form-card"},o2=["src"],a2="0c60c52ce46382fde56330eba5f303b2",c2={__name:"UploadArticle",setup(t){const e=Me(!1),n=Me(""),s=_=>{n.value=_,e.value=!0},r=Me(""),i=Me(""),o=Me(null),c=Me(""),l=Me(""),u=Me(""),f=Me(""),d=async _=>{const S=_.target.files[0];if(!S)return;f.value="圖片上傳中...";const k=new FormData;k.append("image",S);const U=await(await fetch(`https://api.imgbb.com/1/upload?key=${a2}`,{method:"POST",body:k})).json();U.success?(c.value=U.data.url,f.value="圖片上傳成功！"):f.value="圖片上傳失敗，請再試一次"},m=async()=>{if(!r.value||!i.value||!l.value||!u.value){s("內容尚未填寫完整");return}try{await VR(oy(mc,"articles"),{title:r.value,subTitle:i.value,imgUrl:c.value,date:l.value,content:u.value,createdAt:DR()}),s("文章上傳成功！"),r.value="",i.value="",o.value.value="",c.value="",l.value="",u.value=""}catch(_){s(_.message)}};return(_,S)=>(pe(),ge("div",s2,[we(yo),S[6]||(S[6]=W("h2",{class:"form-title"},"上傳文章",-1)),f.value?(pe(),ge("p",r2,$e(f.value),1)):Mn("",!0),W("div",i2,[ss(W("input",{"onUpdate:modelValue":S[0]||(S[0]=k=>r.value=k),placeholder:"標題"},null,512),[[qs,r.value]]),ss(W("input",{"onUpdate:modelValue":S[1]||(S[1]=k=>i.value=k),placeholder:"副標題"},null,512),[[qs,i.value]]),W("input",{type:"file",accept:"image/*",onChange:d,ref_key:"fileInput",ref:o},null,544),ss(W("input",{"onUpdate:modelValue":S[2]||(S[2]=k=>c.value=k),placeholder:"圖片網址（上傳成功自動產生）",readonly:""},null,512),[[qs,c.value]]),ss(W("input",{"onUpdate:modelValue":S[3]||(S[3]=k=>l.value=k),type:"date",min:"2025-01-01"},null,512),[[qs,l.value]]),ss(W("textarea",{"onUpdate:modelValue":S[4]||(S[4]=k=>u.value=k),placeholder:"內文"},null,512),[[qs,u.value]]),W("button",{onClick:m},"發布文章")]),c.value?(pe(),ge("img",{key:1,src:c.value,class:"previewImg",alt:"預覽圖片"},null,8,o2)):Mn("",!0),we(av,{visible:e.value,"onUpdate:visible":S[5]||(S[5]=k=>e.value=k),message:n.value},null,8,["visible","message"])]))}},l2=wt(c2,[["__scopeId","data-v-322adea5"]]),u2={class:"login"},h2={class:"card"},f2={key:0},d2={class:"form-group"},p2={class:"form-group"},m2={key:1,class:"logged-in"},g2={__name:"Login",setup(t){const e=Me(!1),n=Me(""),s=f=>{n.value=f,e.value=!0},r=Jy(),i=Me(null),o=Me(""),c=Me("");jn(()=>{MS(r,f=>{i.value=f})});const l=async()=>{if(console.log(o.value),!o.value||!c.value){s("帳號或密碼未輸入");return}if(o.value!=="hedecpa@gmail.com"&&o.value!=="jameschunchin@gmail.com"){s("此帳號無權限登入");return}try{await NS(r,o.value,c.value)}catch(f){f.code==="auth/invalid-credential"||f.code==="auth/wrong-password"?s("帳號或密碼錯誤，請重新輸入"):s("登入失敗："+f.message)}},u=async()=>{await LS(r)};return(f,d)=>{const m=oa("router-link");return pe(),ge("div",u2,[W("div",h2,[d[7]||(d[7]=W("h2",{class:"title"},"會員登入",-1)),i.value?(pe(),ge("div",m2,[W("p",null,[d[5]||(d[5]=ln("目前登入中：",-1)),W("strong",null,$e(i.value.email),1)]),W("button",{onClick:u,class:"btn danger"},"登出"),we(m,{to:"/uploadarticle",class:"btn link-btn"},{default:cs(()=>[...d[6]||(d[6]=[ln("前往上傳文章",-1)])]),_:1})])):(pe(),ge("div",f2,[W("div",d2,[d[3]||(d[3]=W("label",null,"帳號",-1)),ss(W("input",{"onUpdate:modelValue":d[0]||(d[0]=_=>o.value=_),placeholder:"請輸入帳號"},null,512),[[qs,o.value]])]),W("div",p2,[d[4]||(d[4]=W("label",null,"密碼",-1)),ss(W("input",{"onUpdate:modelValue":d[1]||(d[1]=_=>c.value=_),type:"password",placeholder:"請輸入密碼"},null,512),[[qs,c.value]])]),W("button",{onClick:l,class:"btn primary"},"登入")]))]),we(av,{visible:e.value,"onUpdate:visible":d[2]||(d[2]=_=>e.value=_),message:n.value},null,8,["visible","message"])])}}},_2=wt(g2,[["__scopeId","data-v-6ebaeea6"]]),y2={class:"page-list"},v2={key:0,class:"no-articles"},E2={key:1,class:"articles"},T2=["onClick"],I2={class:"title"},w2={class:"subtitle"},A2={class:"time"},b2={key:2,class:"pagination"},R2=["disabled"],S2=["disabled"],ol=10,C2={__name:"ArticleList",setup(t){const e=yu(),n=Me([]),s=Me(1),r=Me(1),i=kt(()=>{const u=(s.value-1)*ol,f=u+ol;return n.value.slice(u,f)}),o=()=>{s.value<r.value&&s.value++},c=()=>{s.value>1&&s.value--},l=u=>{e.push(`/articles/${u}`)};return jn(async()=>{const u=bR(oy(mc,"articles"),pp("date","desc"),pp("createdAt","desc"));gy(u,f=>{n.value=f.docs.map(d=>({id:d.id,...d.data()})),r.value=Math.ceil(n.value.length/ol)})}),(u,f)=>(pe(),ge("div",y2,[we(yo),f[0]||(f[0]=W("h2",{class:"page-title"},"文章列表",-1)),n.value.length===0?(pe(),ge("div",v2," 目前沒有文章 ")):(pe(),ge("div",E2,[(pe(!0),ge(vt,null,wi(i.value,d=>(pe(),ge("div",{key:d.id,class:"article-card",onClick:m=>l(d.id)},[W("h3",I2,$e(d.title),1),W("p",w2,$e(d.subTitle),1),W("small",A2,$e(d.date||"時間不明"),1)],8,T2))),128))])),r.value!==1&&r.value!==0?(pe(),ge("div",b2,[W("button",{onClick:c,disabled:s.value===1},"上一頁",8,R2),W("span",null,"第 "+$e(s.value)+" / "+$e(r.value)+" 頁",1),W("button",{onClick:o,disabled:s.value===r.value}," 下一頁 ",8,S2)])):Mn("",!0)]))}},P2=wt(C2,[["__scopeId","data-v-bd45243d"]]),k2={key:0,class:"container"},V2={class:"title"},D2={class:"subtitle"},N2={class:"time"},O2=["innerHTML"],x2=["src"],M2={key:1,class:"loading"},L2={__name:"ArticleDetail",setup(t){const e=Eg(),n=yu(),s=Me(null),r=()=>{n.back()};return jn(async()=>{const i=e.params.id;if(!i)return;const o=Gu(mc,"articles",i),c=await PR(o);c.exists()?s.value={id:c.id,...c.data()}:(console.warn("文章不存在"),n.replace("/articles"))}),(i,o)=>s.value?(pe(),ge("div",k2,[we(yo),W("h2",V2,$e(s.value.title),1),W("p",D2,$e(s.value.subTitle),1),W("small",N2,$e(s.value.date||"時間不明"),1),W("pre",{class:"content",innerHTML:s.value.content},null,8,O2),s.value.imgUrl?(pe(),ge("img",{key:0,src:s.value.imgUrl,class:"image"},null,8,x2)):Mn("",!0),W("button",{class:"back-btn",onClick:r},"返回列表")])):(pe(),ge("div",M2,[...o[0]||(o[0]=[W("div",{class:"spinner"},null,-1),W("p",null,"載入中...",-1)])]))}},F2=wt(L2,[["__scopeId","data-v-88bb27be"]]),U2=[{path:"/",component:CP},{path:"/news",component:HP},{path:"/news/:id",component:ZP},{path:"/uploadArticle",component:l2},{path:"/login",component:_2},{path:"/articleList",component:P2},{path:"/articles/:id",component:F2}],B2=lI({history:FT(),routes:U2});ZE(oT).use(B2).use(xP()).mount("#app");
