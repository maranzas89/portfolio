(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))u(h);new MutationObserver(h=>{for(const m of h)if(m.type==="childList")for(const f of m.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&u(f)}).observe(document,{childList:!0,subtree:!0});function c(h){const m={};return h.integrity&&(m.integrity=h.integrity),h.referrerPolicy&&(m.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?m.credentials="include":h.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function u(h){if(h.ep)return;h.ep=!0;const m=c(h);fetch(h.href,m)}})();function Mu(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Ei={exports:{}},Jr={},$i={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd;function Vh(){if(qd)return oe;qd=1;var o=Symbol.for("react.element"),d=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),f=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),k=Symbol.iterator;function z(v){return v===null||typeof v!="object"?null:(v=k&&v[k]||v["@@iterator"],typeof v=="function"?v:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,F={};function B(v,L,le){this.props=v,this.context=L,this.refs=F,this.updater=le||$}B.prototype.isReactComponent={},B.prototype.setState=function(v,L){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,L,"setState")},B.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function Z(){}Z.prototype=B.prototype;function he(v,L,le){this.props=v,this.context=L,this.refs=F,this.updater=le||$}var ve=he.prototype=new Z;ve.constructor=he,G(ve,B.prototype),ve.isPureReactComponent=!0;var be=Array.isArray,J=Object.prototype.hasOwnProperty,ne={current:null},ie={key:!0,ref:!0,__self:!0,__source:!0};function re(v,L,le){var ce,pe={},ge=null,ke=null;if(L!=null)for(ce in L.ref!==void 0&&(ke=L.ref),L.key!==void 0&&(ge=""+L.key),L)J.call(L,ce)&&!ie.hasOwnProperty(ce)&&(pe[ce]=L[ce]);var ye=arguments.length-2;if(ye===1)pe.children=le;else if(1<ye){for(var _e=Array(ye),ht=0;ht<ye;ht++)_e[ht]=arguments[ht+2];pe.children=_e}if(v&&v.defaultProps)for(ce in ye=v.defaultProps,ye)pe[ce]===void 0&&(pe[ce]=ye[ce]);return{$$typeof:o,type:v,key:ge,ref:ke,props:pe,_owner:ne.current}}function we(v,L){return{$$typeof:o,type:v.type,key:L,ref:v.ref,props:v.props,_owner:v._owner}}function Ne(v){return typeof v=="object"&&v!==null&&v.$$typeof===o}function K(v){var L={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(le){return L[le]})}var Pe=/\/+/g;function $e(v,L){return typeof v=="object"&&v!==null&&v.key!=null?K(""+v.key):L.toString(36)}function Ue(v,L,le,ce,pe){var ge=typeof v;(ge==="undefined"||ge==="boolean")&&(v=null);var ke=!1;if(v===null)ke=!0;else switch(ge){case"string":case"number":ke=!0;break;case"object":switch(v.$$typeof){case o:case d:ke=!0}}if(ke)return ke=v,pe=pe(ke),v=ce===""?"."+$e(ke,0):ce,be(pe)?(le="",v!=null&&(le=v.replace(Pe,"$&/")+"/"),Ue(pe,L,le,"",function(ht){return ht})):pe!=null&&(Ne(pe)&&(pe=we(pe,le+(!pe.key||ke&&ke.key===pe.key?"":(""+pe.key).replace(Pe,"$&/")+"/")+v)),L.push(pe)),1;if(ke=0,ce=ce===""?".":ce+":",be(v))for(var ye=0;ye<v.length;ye++){ge=v[ye];var _e=ce+$e(ge,ye);ke+=Ue(ge,L,le,_e,pe)}else if(_e=z(v),typeof _e=="function")for(v=_e.call(v),ye=0;!(ge=v.next()).done;)ge=ge.value,_e=ce+$e(ge,ye++),ke+=Ue(ge,L,le,_e,pe);else if(ge==="object")throw L=String(v),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.");return ke}function nt(v,L,le){if(v==null)return v;var ce=[],pe=0;return Ue(v,ce,"","",function(ge){return L.call(le,ge,pe++)}),ce}function P(v){if(v._status===-1){var L=v._result;L=L(),L.then(function(le){(v._status===0||v._status===-1)&&(v._status=1,v._result=le)},function(le){(v._status===0||v._status===-1)&&(v._status=2,v._result=le)}),v._status===-1&&(v._status=0,v._result=L)}if(v._status===1)return v._result.default;throw v._result}var Q={current:null},R={transition:null},W={ReactCurrentDispatcher:Q,ReactCurrentBatchConfig:R,ReactCurrentOwner:ne};function H(){throw Error("act(...) is not supported in production builds of React.")}return oe.Children={map:nt,forEach:function(v,L,le){nt(v,function(){L.apply(this,arguments)},le)},count:function(v){var L=0;return nt(v,function(){L++}),L},toArray:function(v){return nt(v,function(L){return L})||[]},only:function(v){if(!Ne(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},oe.Component=B,oe.Fragment=c,oe.Profiler=h,oe.PureComponent=he,oe.StrictMode=u,oe.Suspense=j,oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W,oe.act=H,oe.cloneElement=function(v,L,le){if(v==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+v+".");var ce=G({},v.props),pe=v.key,ge=v.ref,ke=v._owner;if(L!=null){if(L.ref!==void 0&&(ge=L.ref,ke=ne.current),L.key!==void 0&&(pe=""+L.key),v.type&&v.type.defaultProps)var ye=v.type.defaultProps;for(_e in L)J.call(L,_e)&&!ie.hasOwnProperty(_e)&&(ce[_e]=L[_e]===void 0&&ye!==void 0?ye[_e]:L[_e])}var _e=arguments.length-2;if(_e===1)ce.children=le;else if(1<_e){ye=Array(_e);for(var ht=0;ht<_e;ht++)ye[ht]=arguments[ht+2];ce.children=ye}return{$$typeof:o,type:v.type,key:pe,ref:ge,props:ce,_owner:ke}},oe.createContext=function(v){return v={$$typeof:f,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},v.Provider={$$typeof:m,_context:v},v.Consumer=v},oe.createElement=re,oe.createFactory=function(v){var L=re.bind(null,v);return L.type=v,L},oe.createRef=function(){return{current:null}},oe.forwardRef=function(v){return{$$typeof:w,render:v}},oe.isValidElement=Ne,oe.lazy=function(v){return{$$typeof:_,_payload:{_status:-1,_result:v},_init:P}},oe.memo=function(v,L){return{$$typeof:b,type:v,compare:L===void 0?null:L}},oe.startTransition=function(v){var L=R.transition;R.transition={};try{v()}finally{R.transition=L}},oe.unstable_act=H,oe.useCallback=function(v,L){return Q.current.useCallback(v,L)},oe.useContext=function(v){return Q.current.useContext(v)},oe.useDebugValue=function(){},oe.useDeferredValue=function(v){return Q.current.useDeferredValue(v)},oe.useEffect=function(v,L){return Q.current.useEffect(v,L)},oe.useId=function(){return Q.current.useId()},oe.useImperativeHandle=function(v,L,le){return Q.current.useImperativeHandle(v,L,le)},oe.useInsertionEffect=function(v,L){return Q.current.useInsertionEffect(v,L)},oe.useLayoutEffect=function(v,L){return Q.current.useLayoutEffect(v,L)},oe.useMemo=function(v,L){return Q.current.useMemo(v,L)},oe.useReducer=function(v,L,le){return Q.current.useReducer(v,L,le)},oe.useRef=function(v){return Q.current.useRef(v)},oe.useState=function(v){return Q.current.useState(v)},oe.useSyncExternalStore=function(v,L,le){return Q.current.useSyncExternalStore(v,L,le)},oe.useTransition=function(){return Q.current.useTransition()},oe.version="18.3.1",oe}var Jd;function Yi(){return Jd||(Jd=1,$i.exports=Vh()),$i.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kd;function Hh(){if(Kd)return Jr;Kd=1;var o=Yi(),d=Symbol.for("react.element"),c=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,h=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function f(w,j,b){var _,k={},z=null,$=null;b!==void 0&&(z=""+b),j.key!==void 0&&(z=""+j.key),j.ref!==void 0&&($=j.ref);for(_ in j)u.call(j,_)&&!m.hasOwnProperty(_)&&(k[_]=j[_]);if(w&&w.defaultProps)for(_ in j=w.defaultProps,j)k[_]===void 0&&(k[_]=j[_]);return{$$typeof:d,type:w,key:z,ref:$,props:k,_owner:h.current}}return Jr.Fragment=c,Jr.jsx=f,Jr.jsxs=f,Jr}var Xd;function Uh(){return Xd||(Xd=1,Ei.exports=Hh()),Ei.exports}var e=Uh(),wa={},Li={exports:{}},dt={},Di={exports:{}},Pi={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zd;function Wh(){return Zd||(Zd=1,(function(o){function d(R,W){var H=R.length;R.push(W);e:for(;0<H;){var v=H-1>>>1,L=R[v];if(0<h(L,W))R[v]=W,R[H]=L,H=v;else break e}}function c(R){return R.length===0?null:R[0]}function u(R){if(R.length===0)return null;var W=R[0],H=R.pop();if(H!==W){R[0]=H;e:for(var v=0,L=R.length,le=L>>>1;v<le;){var ce=2*(v+1)-1,pe=R[ce],ge=ce+1,ke=R[ge];if(0>h(pe,H))ge<L&&0>h(ke,pe)?(R[v]=ke,R[ge]=H,v=ge):(R[v]=pe,R[ce]=H,v=ce);else if(ge<L&&0>h(ke,H))R[v]=ke,R[ge]=H,v=ge;else break e}}return W}function h(R,W){var H=R.sortIndex-W.sortIndex;return H!==0?H:R.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var m=performance;o.unstable_now=function(){return m.now()}}else{var f=Date,w=f.now();o.unstable_now=function(){return f.now()-w}}var j=[],b=[],_=1,k=null,z=3,$=!1,G=!1,F=!1,B=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,he=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ve(R){for(var W=c(b);W!==null;){if(W.callback===null)u(b);else if(W.startTime<=R)u(b),W.sortIndex=W.expirationTime,d(j,W);else break;W=c(b)}}function be(R){if(F=!1,ve(R),!G)if(c(j)!==null)G=!0,P(J);else{var W=c(b);W!==null&&Q(be,W.startTime-R)}}function J(R,W){G=!1,F&&(F=!1,Z(re),re=-1),$=!0;var H=z;try{for(ve(W),k=c(j);k!==null&&(!(k.expirationTime>W)||R&&!K());){var v=k.callback;if(typeof v=="function"){k.callback=null,z=k.priorityLevel;var L=v(k.expirationTime<=W);W=o.unstable_now(),typeof L=="function"?k.callback=L:k===c(j)&&u(j),ve(W)}else u(j);k=c(j)}if(k!==null)var le=!0;else{var ce=c(b);ce!==null&&Q(be,ce.startTime-W),le=!1}return le}finally{k=null,z=H,$=!1}}var ne=!1,ie=null,re=-1,we=5,Ne=-1;function K(){return!(o.unstable_now()-Ne<we)}function Pe(){if(ie!==null){var R=o.unstable_now();Ne=R;var W=!0;try{W=ie(!0,R)}finally{W?$e():(ne=!1,ie=null)}}else ne=!1}var $e;if(typeof he=="function")$e=function(){he(Pe)};else if(typeof MessageChannel<"u"){var Ue=new MessageChannel,nt=Ue.port2;Ue.port1.onmessage=Pe,$e=function(){nt.postMessage(null)}}else $e=function(){B(Pe,0)};function P(R){ie=R,ne||(ne=!0,$e())}function Q(R,W){re=B(function(){R(o.unstable_now())},W)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(R){R.callback=null},o.unstable_continueExecution=function(){G||$||(G=!0,P(J))},o.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):we=0<R?Math.floor(1e3/R):5},o.unstable_getCurrentPriorityLevel=function(){return z},o.unstable_getFirstCallbackNode=function(){return c(j)},o.unstable_next=function(R){switch(z){case 1:case 2:case 3:var W=3;break;default:W=z}var H=z;z=W;try{return R()}finally{z=H}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(R,W){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var H=z;z=R;try{return W()}finally{z=H}},o.unstable_scheduleCallback=function(R,W,H){var v=o.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?v+H:v):H=v,R){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=H+L,R={id:_++,callback:W,priorityLevel:R,startTime:H,expirationTime:L,sortIndex:-1},H>v?(R.sortIndex=H,d(b,R),c(j)===null&&R===c(b)&&(F?(Z(re),re=-1):F=!0,Q(be,H-v))):(R.sortIndex=L,d(j,R),G||$||(G=!0,P(J))),R},o.unstable_shouldYield=K,o.unstable_wrapCallback=function(R){var W=z;return function(){var H=z;z=W;try{return R.apply(this,arguments)}finally{z=H}}}})(Pi)),Pi}var eu;function Yh(){return eu||(eu=1,Di.exports=Wh()),Di.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tu;function Qh(){if(tu)return dt;tu=1;var o=Yi(),d=Yh();function c(t){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)s+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,h={};function m(t,s){f(t,s),f(t+"Capture",s)}function f(t,s){for(h[t]=s,t=0;t<s.length;t++)u.add(s[t])}var w=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),j=Object.prototype.hasOwnProperty,b=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},k={};function z(t){return j.call(k,t)?!0:j.call(_,t)?!1:b.test(t)?k[t]=!0:(_[t]=!0,!1)}function $(t,s,r,n){if(r!==null&&r.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function G(t,s,r,n){if(s===null||typeof s>"u"||$(t,s,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function F(t,s,r,n,a,l,i){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=t,this.type=s,this.sanitizeURL=l,this.removeEmptyString=i}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){B[t]=new F(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var s=t[0];B[s]=new F(s,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){B[t]=new F(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){B[t]=new F(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){B[t]=new F(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){B[t]=new F(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){B[t]=new F(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){B[t]=new F(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){B[t]=new F(t,5,!1,t.toLowerCase(),null,!1,!1)});var Z=/[\-:]([a-z])/g;function he(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var s=t.replace(Z,he);B[s]=new F(s,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var s=t.replace(Z,he);B[s]=new F(s,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var s=t.replace(Z,he);B[s]=new F(s,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){B[t]=new F(t,1,!1,t.toLowerCase(),null,!1,!1)}),B.xlinkHref=new F("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){B[t]=new F(t,1,!1,t.toLowerCase(),null,!0,!0)});function ve(t,s,r,n){var a=B.hasOwnProperty(s)?B[s]:null;(a!==null?a.type!==0:n||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(G(s,r,a,n)&&(r=null),n||a===null?z(s)&&(r===null?t.removeAttribute(s):t.setAttribute(s,""+r)):a.mustUseProperty?t[a.propertyName]=r===null?a.type===3?!1:"":r:(s=a.attributeName,n=a.attributeNamespace,r===null?t.removeAttribute(s):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,n?t.setAttributeNS(n,s,r):t.setAttribute(s,r))))}var be=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,J=Symbol.for("react.element"),ne=Symbol.for("react.portal"),ie=Symbol.for("react.fragment"),re=Symbol.for("react.strict_mode"),we=Symbol.for("react.profiler"),Ne=Symbol.for("react.provider"),K=Symbol.for("react.context"),Pe=Symbol.for("react.forward_ref"),$e=Symbol.for("react.suspense"),Ue=Symbol.for("react.suspense_list"),nt=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),R=Symbol.iterator;function W(t){return t===null||typeof t!="object"?null:(t=R&&t[R]||t["@@iterator"],typeof t=="function"?t:null)}var H=Object.assign,v;function L(t){if(v===void 0)try{throw Error()}catch(r){var s=r.stack.trim().match(/\n( *(at )?)/);v=s&&s[1]||""}return`
`+v+t}var le=!1;function ce(t,s){if(!t||le)return"";le=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(S){var n=S}Reflect.construct(t,[],s)}else{try{s.call()}catch(S){n=S}t.call(s.prototype)}else{try{throw Error()}catch(S){n=S}t()}}catch(S){if(S&&n&&typeof S.stack=="string"){for(var a=S.stack.split(`
`),l=n.stack.split(`
`),i=a.length-1,x=l.length-1;1<=i&&0<=x&&a[i]!==l[x];)x--;for(;1<=i&&0<=x;i--,x--)if(a[i]!==l[x]){if(i!==1||x!==1)do if(i--,x--,0>x||a[i]!==l[x]){var p=`
`+a[i].replace(" at new "," at ");return t.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",t.displayName)),p}while(1<=i&&0<=x);break}}}finally{le=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?L(t):""}function pe(t){switch(t.tag){case 5:return L(t.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 2:case 15:return t=ce(t.type,!1),t;case 11:return t=ce(t.type.render,!1),t;case 1:return t=ce(t.type,!0),t;default:return""}}function ge(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ie:return"Fragment";case ne:return"Portal";case we:return"Profiler";case re:return"StrictMode";case $e:return"Suspense";case Ue:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case K:return(t.displayName||"Context")+".Consumer";case Ne:return(t._context.displayName||"Context")+".Provider";case Pe:var s=t.render;return t=t.displayName,t||(t=s.displayName||s.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case nt:return s=t.displayName||null,s!==null?s:ge(t.type)||"Memo";case P:s=t._payload,t=t._init;try{return ge(t(s))}catch{}}return null}function ke(t){var s=t.type;switch(t.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=s.render,t=t.displayName||t.name||"",s.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(s);case 8:return s===re?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function ye(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _e(t){var s=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function ht(t){var s=_e(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,s),n=""+t[s];if(!t.hasOwnProperty(s)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,l=r.set;return Object.defineProperty(t,s,{configurable:!0,get:function(){return a.call(this)},set:function(i){n=""+i,l.call(this,i)}}),Object.defineProperty(t,s,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(i){n=""+i},stopTracking:function(){t._valueTracker=null,delete t[s]}}}}function dn(t){t._valueTracker||(t._valueTracker=ht(t))}function eo(t){if(!t)return!1;var s=t._valueTracker;if(!s)return!0;var r=s.getValue(),n="";return t&&(n=_e(t)?t.checked?"true":"false":t.value),t=n,t!==r?(s.setValue(t),!0):!1}function un(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ra(t,s){var r=s.checked;return H({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function to(t,s){var r=s.defaultValue==null?"":s.defaultValue,n=s.checked!=null?s.checked:s.defaultChecked;r=ye(s.value!=null?s.value:r),t._wrapperState={initialChecked:n,initialValue:r,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function so(t,s){s=s.checked,s!=null&&ve(t,"checked",s,!1)}function Aa(t,s){so(t,s);var r=ye(s.value),n=s.type;if(r!=null)n==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}s.hasOwnProperty("value")?Ia(t,s.type,r):s.hasOwnProperty("defaultValue")&&Ia(t,s.type,ye(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(t.defaultChecked=!!s.defaultChecked)}function ro(t,s,r){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var n=s.type;if(!(n!=="submit"&&n!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+t._wrapperState.initialValue,r||s===t.value||(t.value=s),t.defaultValue=s}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function Ia(t,s,r){(s!=="number"||un(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var ur=Array.isArray;function Fs(t,s,r,n){if(t=t.options,s){s={};for(var a=0;a<r.length;a++)s["$"+r[a]]=!0;for(r=0;r<t.length;r++)a=s.hasOwnProperty("$"+t[r].value),t[r].selected!==a&&(t[r].selected=a),a&&n&&(t[r].defaultSelected=!0)}else{for(r=""+ye(r),s=null,a=0;a<t.length;a++){if(t[a].value===r){t[a].selected=!0,n&&(t[a].defaultSelected=!0);return}s!==null||t[a].disabled||(s=t[a])}s!==null&&(s.selected=!0)}}function Oa(t,s){if(s.dangerouslySetInnerHTML!=null)throw Error(c(91));return H({},s,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function no(t,s){var r=s.value;if(r==null){if(r=s.children,s=s.defaultValue,r!=null){if(s!=null)throw Error(c(92));if(ur(r)){if(1<r.length)throw Error(c(93));r=r[0]}s=r}s==null&&(s=""),r=s}t._wrapperState={initialValue:ye(r)}}function ao(t,s){var r=ye(s.value),n=ye(s.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),s.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),n!=null&&(t.defaultValue=""+n)}function lo(t){var s=t.textContent;s===t._wrapperState.initialValue&&s!==""&&s!==null&&(t.value=s)}function io(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ga(t,s){return t==null||t==="http://www.w3.org/1999/xhtml"?io(s):t==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xn,oo=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,r,n,a){MSApp.execUnsafeLocalFunction(function(){return t(s,r,n,a)})}:t})(function(t,s){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=s;else{for(xn=xn||document.createElement("div"),xn.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=xn.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;s.firstChild;)t.appendChild(s.firstChild)}});function xr(t,s){if(s){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=s;return}}t.textContent=s}var hr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yu=["Webkit","ms","Moz","O"];Object.keys(hr).forEach(function(t){Yu.forEach(function(s){s=s+t.charAt(0).toUpperCase()+t.substring(1),hr[s]=hr[t]})});function co(t,s,r){return s==null||typeof s=="boolean"||s===""?"":r||typeof s!="number"||s===0||hr.hasOwnProperty(t)&&hr[t]?(""+s).trim():s+"px"}function uo(t,s){t=t.style;for(var r in s)if(s.hasOwnProperty(r)){var n=r.indexOf("--")===0,a=co(r,s[r],n);r==="float"&&(r="cssFloat"),n?t.setProperty(r,a):t[r]=a}}var Qu=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ba(t,s){if(s){if(Qu[t]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(c(137,t));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(c(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(c(61))}if(s.style!=null&&typeof s.style!="object")throw Error(c(62))}}function Va(t,s){if(t.indexOf("-")===-1)return typeof s.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ha=null;function Ua(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wa=null,Rs=null,As=null;function xo(t){if(t=Tr(t)){if(typeof Wa!="function")throw Error(c(280));var s=t.stateNode;s&&(s=Tn(s),Wa(t.stateNode,t.type,s))}}function ho(t){Rs?As?As.push(t):As=[t]:Rs=t}function mo(){if(Rs){var t=Rs,s=As;if(As=Rs=null,xo(t),s)for(t=0;t<s.length;t++)xo(s[t])}}function po(t,s){return t(s)}function go(){}var Ya=!1;function fo(t,s,r){if(Ya)return t(s,r);Ya=!0;try{return po(t,s,r)}finally{Ya=!1,(Rs!==null||As!==null)&&(go(),mo())}}function mr(t,s){var r=t.stateNode;if(r===null)return null;var n=Tn(r);if(n===null)return null;r=n[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(c(231,s,typeof r));return r}var Qa=!1;if(w)try{var pr={};Object.defineProperty(pr,"passive",{get:function(){Qa=!0}}),window.addEventListener("test",pr,pr),window.removeEventListener("test",pr,pr)}catch{Qa=!1}function qu(t,s,r,n,a,l,i,x,p){var S=Array.prototype.slice.call(arguments,3);try{s.apply(r,S)}catch(D){this.onError(D)}}var gr=!1,hn=null,mn=!1,qa=null,Ju={onError:function(t){gr=!0,hn=t}};function Ku(t,s,r,n,a,l,i,x,p){gr=!1,hn=null,qu.apply(Ju,arguments)}function Xu(t,s,r,n,a,l,i,x,p){if(Ku.apply(this,arguments),gr){if(gr){var S=hn;gr=!1,hn=null}else throw Error(c(198));mn||(mn=!0,qa=S)}}function ys(t){var s=t,r=t;if(t.alternate)for(;s.return;)s=s.return;else{t=s;do s=t,(s.flags&4098)!==0&&(r=s.return),t=s.return;while(t)}return s.tag===3?r:null}function bo(t){if(t.tag===13){var s=t.memoizedState;if(s===null&&(t=t.alternate,t!==null&&(s=t.memoizedState)),s!==null)return s.dehydrated}return null}function vo(t){if(ys(t)!==t)throw Error(c(188))}function Zu(t){var s=t.alternate;if(!s){if(s=ys(t),s===null)throw Error(c(188));return s!==t?null:t}for(var r=t,n=s;;){var a=r.return;if(a===null)break;var l=a.alternate;if(l===null){if(n=a.return,n!==null){r=n;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===r)return vo(a),t;if(l===n)return vo(a),s;l=l.sibling}throw Error(c(188))}if(r.return!==n.return)r=a,n=l;else{for(var i=!1,x=a.child;x;){if(x===r){i=!0,r=a,n=l;break}if(x===n){i=!0,n=a,r=l;break}x=x.sibling}if(!i){for(x=l.child;x;){if(x===r){i=!0,r=l,n=a;break}if(x===n){i=!0,n=l,r=a;break}x=x.sibling}if(!i)throw Error(c(189))}}if(r.alternate!==n)throw Error(c(190))}if(r.tag!==3)throw Error(c(188));return r.stateNode.current===r?t:s}function wo(t){return t=Zu(t),t!==null?yo(t):null}function yo(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var s=yo(t);if(s!==null)return s;t=t.sibling}return null}var jo=d.unstable_scheduleCallback,No=d.unstable_cancelCallback,ex=d.unstable_shouldYield,tx=d.unstable_requestPaint,Fe=d.unstable_now,sx=d.unstable_getCurrentPriorityLevel,Ja=d.unstable_ImmediatePriority,ko=d.unstable_UserBlockingPriority,pn=d.unstable_NormalPriority,rx=d.unstable_LowPriority,So=d.unstable_IdlePriority,gn=null,Tt=null;function nx(t){if(Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(gn,t,void 0,(t.current.flags&128)===128)}catch{}}var St=Math.clz32?Math.clz32:ix,ax=Math.log,lx=Math.LN2;function ix(t){return t>>>=0,t===0?32:31-(ax(t)/lx|0)|0}var fn=64,bn=4194304;function fr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function vn(t,s){var r=t.pendingLanes;if(r===0)return 0;var n=0,a=t.suspendedLanes,l=t.pingedLanes,i=r&268435455;if(i!==0){var x=i&~a;x!==0?n=fr(x):(l&=i,l!==0&&(n=fr(l)))}else i=r&~a,i!==0?n=fr(i):l!==0&&(n=fr(l));if(n===0)return 0;if(s!==0&&s!==n&&(s&a)===0&&(a=n&-n,l=s&-s,a>=l||a===16&&(l&4194240)!==0))return s;if((n&4)!==0&&(n|=r&16),s=t.entangledLanes,s!==0)for(t=t.entanglements,s&=n;0<s;)r=31-St(s),a=1<<r,n|=t[r],s&=~a;return n}function ox(t,s){switch(t){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cx(t,s){for(var r=t.suspendedLanes,n=t.pingedLanes,a=t.expirationTimes,l=t.pendingLanes;0<l;){var i=31-St(l),x=1<<i,p=a[i];p===-1?((x&r)===0||(x&n)!==0)&&(a[i]=ox(x,s)):p<=s&&(t.expiredLanes|=x),l&=~x}}function Ka(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Co(){var t=fn;return fn<<=1,(fn&4194240)===0&&(fn=64),t}function Xa(t){for(var s=[],r=0;31>r;r++)s.push(t);return s}function br(t,s,r){t.pendingLanes|=s,s!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,s=31-St(s),t[s]=r}function dx(t,s){var r=t.pendingLanes&~s;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=s,t.mutableReadLanes&=s,t.entangledLanes&=s,s=t.entanglements;var n=t.eventTimes;for(t=t.expirationTimes;0<r;){var a=31-St(r),l=1<<a;s[a]=0,n[a]=-1,t[a]=-1,r&=~l}}function Za(t,s){var r=t.entangledLanes|=s;for(t=t.entanglements;r;){var n=31-St(r),a=1<<n;a&s|t[n]&s&&(t[n]|=s),r&=~a}}var je=0;function zo(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Mo,el,_o,Eo,$o,tl=!1,wn=[],Zt=null,es=null,ts=null,vr=new Map,wr=new Map,ss=[],ux="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lo(t,s){switch(t){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":es=null;break;case"mouseover":case"mouseout":ts=null;break;case"pointerover":case"pointerout":vr.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":wr.delete(s.pointerId)}}function yr(t,s,r,n,a,l){return t===null||t.nativeEvent!==l?(t={blockedOn:s,domEventName:r,eventSystemFlags:n,nativeEvent:l,targetContainers:[a]},s!==null&&(s=Tr(s),s!==null&&el(s)),t):(t.eventSystemFlags|=n,s=t.targetContainers,a!==null&&s.indexOf(a)===-1&&s.push(a),t)}function xx(t,s,r,n,a){switch(s){case"focusin":return Zt=yr(Zt,t,s,r,n,a),!0;case"dragenter":return es=yr(es,t,s,r,n,a),!0;case"mouseover":return ts=yr(ts,t,s,r,n,a),!0;case"pointerover":var l=a.pointerId;return vr.set(l,yr(vr.get(l)||null,t,s,r,n,a)),!0;case"gotpointercapture":return l=a.pointerId,wr.set(l,yr(wr.get(l)||null,t,s,r,n,a)),!0}return!1}function Do(t){var s=js(t.target);if(s!==null){var r=ys(s);if(r!==null){if(s=r.tag,s===13){if(s=bo(r),s!==null){t.blockedOn=s,$o(t.priority,function(){_o(r)});return}}else if(s===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function yn(t){if(t.blockedOn!==null)return!1;for(var s=t.targetContainers;0<s.length;){var r=rl(t.domEventName,t.eventSystemFlags,s[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var n=new r.constructor(r.type,r);Ha=n,r.target.dispatchEvent(n),Ha=null}else return s=Tr(r),s!==null&&el(s),t.blockedOn=r,!1;s.shift()}return!0}function Po(t,s,r){yn(t)&&r.delete(s)}function hx(){tl=!1,Zt!==null&&yn(Zt)&&(Zt=null),es!==null&&yn(es)&&(es=null),ts!==null&&yn(ts)&&(ts=null),vr.forEach(Po),wr.forEach(Po)}function jr(t,s){t.blockedOn===s&&(t.blockedOn=null,tl||(tl=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,hx)))}function Nr(t){function s(a){return jr(a,t)}if(0<wn.length){jr(wn[0],t);for(var r=1;r<wn.length;r++){var n=wn[r];n.blockedOn===t&&(n.blockedOn=null)}}for(Zt!==null&&jr(Zt,t),es!==null&&jr(es,t),ts!==null&&jr(ts,t),vr.forEach(s),wr.forEach(s),r=0;r<ss.length;r++)n=ss[r],n.blockedOn===t&&(n.blockedOn=null);for(;0<ss.length&&(r=ss[0],r.blockedOn===null);)Do(r),r.blockedOn===null&&ss.shift()}var Is=be.ReactCurrentBatchConfig,jn=!0;function mx(t,s,r,n){var a=je,l=Is.transition;Is.transition=null;try{je=1,sl(t,s,r,n)}finally{je=a,Is.transition=l}}function px(t,s,r,n){var a=je,l=Is.transition;Is.transition=null;try{je=4,sl(t,s,r,n)}finally{je=a,Is.transition=l}}function sl(t,s,r,n){if(jn){var a=rl(t,s,r,n);if(a===null)wl(t,s,n,Nn,r),Lo(t,n);else if(xx(a,t,s,r,n))n.stopPropagation();else if(Lo(t,n),s&4&&-1<ux.indexOf(t)){for(;a!==null;){var l=Tr(a);if(l!==null&&Mo(l),l=rl(t,s,r,n),l===null&&wl(t,s,n,Nn,r),l===a)break;a=l}a!==null&&n.stopPropagation()}else wl(t,s,n,null,r)}}var Nn=null;function rl(t,s,r,n){if(Nn=null,t=Ua(n),t=js(t),t!==null)if(s=ys(t),s===null)t=null;else if(r=s.tag,r===13){if(t=bo(s),t!==null)return t;t=null}else if(r===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;t=null}else s!==t&&(t=null);return Nn=t,null}function To(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sx()){case Ja:return 1;case ko:return 4;case pn:case rx:return 16;case So:return 536870912;default:return 16}default:return 16}}var rs=null,nl=null,kn=null;function Fo(){if(kn)return kn;var t,s=nl,r=s.length,n,a="value"in rs?rs.value:rs.textContent,l=a.length;for(t=0;t<r&&s[t]===a[t];t++);var i=r-t;for(n=1;n<=i&&s[r-n]===a[l-n];n++);return kn=a.slice(t,1<n?1-n:void 0)}function Sn(t){var s=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&s===13&&(t=13)):t=s,t===10&&(t=13),32<=t||t===13?t:0}function Cn(){return!0}function Ro(){return!1}function mt(t){function s(r,n,a,l,i){this._reactName=r,this._targetInst=a,this.type=n,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var x in t)t.hasOwnProperty(x)&&(r=t[x],this[x]=r?r(l):l[x]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Cn:Ro,this.isPropagationStopped=Ro,this}return H(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Cn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Cn)},persist:function(){},isPersistent:Cn}),s}var Os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},al=mt(Os),kr=H({},Os,{view:0,detail:0}),gx=mt(kr),ll,il,Sr,zn=H({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Sr&&(Sr&&t.type==="mousemove"?(ll=t.screenX-Sr.screenX,il=t.screenY-Sr.screenY):il=ll=0,Sr=t),ll)},movementY:function(t){return"movementY"in t?t.movementY:il}}),Ao=mt(zn),fx=H({},zn,{dataTransfer:0}),bx=mt(fx),vx=H({},kr,{relatedTarget:0}),ol=mt(vx),wx=H({},Os,{animationName:0,elapsedTime:0,pseudoElement:0}),yx=mt(wx),jx=H({},Os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Nx=mt(jx),kx=H({},Os,{data:0}),Io=mt(kx),Sx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mx(t){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(t):(t=zx[t])?!!s[t]:!1}function cl(){return Mx}var _x=H({},kr,{key:function(t){if(t.key){var s=Sx[t.key]||t.key;if(s!=="Unidentified")return s}return t.type==="keypress"?(t=Sn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Cx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cl,charCode:function(t){return t.type==="keypress"?Sn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Sn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ex=mt(_x),$x=H({},zn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oo=mt($x),Lx=H({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cl}),Dx=mt(Lx),Px=H({},Os,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tx=mt(Px),Fx=H({},zn,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Rx=mt(Fx),Ax=[9,13,27,32],dl=w&&"CompositionEvent"in window,Cr=null;w&&"documentMode"in document&&(Cr=document.documentMode);var Ix=w&&"TextEvent"in window&&!Cr,Go=w&&(!dl||Cr&&8<Cr&&11>=Cr),Bo=" ",Vo=!1;function Ho(t,s){switch(t){case"keyup":return Ax.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uo(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gs=!1;function Ox(t,s){switch(t){case"compositionend":return Uo(s);case"keypress":return s.which!==32?null:(Vo=!0,Bo);case"textInput":return t=s.data,t===Bo&&Vo?null:t;default:return null}}function Gx(t,s){if(Gs)return t==="compositionend"||!dl&&Ho(t,s)?(t=Fo(),kn=nl=rs=null,Gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Go&&s.locale!=="ko"?null:s.data;default:return null}}var Bx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wo(t){var s=t&&t.nodeName&&t.nodeName.toLowerCase();return s==="input"?!!Bx[t.type]:s==="textarea"}function Yo(t,s,r,n){ho(n),s=Ln(s,"onChange"),0<s.length&&(r=new al("onChange","change",null,r,n),t.push({event:r,listeners:s}))}var zr=null,Mr=null;function Vx(t){uc(t,0)}function Mn(t){var s=Ws(t);if(eo(s))return t}function Hx(t,s){if(t==="change")return s}var Qo=!1;if(w){var ul;if(w){var xl="oninput"in document;if(!xl){var qo=document.createElement("div");qo.setAttribute("oninput","return;"),xl=typeof qo.oninput=="function"}ul=xl}else ul=!1;Qo=ul&&(!document.documentMode||9<document.documentMode)}function Jo(){zr&&(zr.detachEvent("onpropertychange",Ko),Mr=zr=null)}function Ko(t){if(t.propertyName==="value"&&Mn(Mr)){var s=[];Yo(s,Mr,t,Ua(t)),fo(Vx,s)}}function Ux(t,s,r){t==="focusin"?(Jo(),zr=s,Mr=r,zr.attachEvent("onpropertychange",Ko)):t==="focusout"&&Jo()}function Wx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Mn(Mr)}function Yx(t,s){if(t==="click")return Mn(s)}function Qx(t,s){if(t==="input"||t==="change")return Mn(s)}function qx(t,s){return t===s&&(t!==0||1/t===1/s)||t!==t&&s!==s}var Ct=typeof Object.is=="function"?Object.is:qx;function _r(t,s){if(Ct(t,s))return!0;if(typeof t!="object"||t===null||typeof s!="object"||s===null)return!1;var r=Object.keys(t),n=Object.keys(s);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var a=r[n];if(!j.call(s,a)||!Ct(t[a],s[a]))return!1}return!0}function Xo(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zo(t,s){var r=Xo(t);t=0;for(var n;r;){if(r.nodeType===3){if(n=t+r.textContent.length,t<=s&&n>=s)return{node:r,offset:s-t};t=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Xo(r)}}function ec(t,s){return t&&s?t===s?!0:t&&t.nodeType===3?!1:s&&s.nodeType===3?ec(t,s.parentNode):"contains"in t?t.contains(s):t.compareDocumentPosition?!!(t.compareDocumentPosition(s)&16):!1:!1}function tc(){for(var t=window,s=un();s instanceof t.HTMLIFrameElement;){try{var r=typeof s.contentWindow.location.href=="string"}catch{r=!1}if(r)t=s.contentWindow;else break;s=un(t.document)}return s}function hl(t){var s=t&&t.nodeName&&t.nodeName.toLowerCase();return s&&(s==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||s==="textarea"||t.contentEditable==="true")}function Jx(t){var s=tc(),r=t.focusedElem,n=t.selectionRange;if(s!==r&&r&&r.ownerDocument&&ec(r.ownerDocument.documentElement,r)){if(n!==null&&hl(r)){if(s=n.start,t=n.end,t===void 0&&(t=s),"selectionStart"in r)r.selectionStart=s,r.selectionEnd=Math.min(t,r.value.length);else if(t=(s=r.ownerDocument||document)&&s.defaultView||window,t.getSelection){t=t.getSelection();var a=r.textContent.length,l=Math.min(n.start,a);n=n.end===void 0?l:Math.min(n.end,a),!t.extend&&l>n&&(a=n,n=l,l=a),a=Zo(r,l);var i=Zo(r,n);a&&i&&(t.rangeCount!==1||t.anchorNode!==a.node||t.anchorOffset!==a.offset||t.focusNode!==i.node||t.focusOffset!==i.offset)&&(s=s.createRange(),s.setStart(a.node,a.offset),t.removeAllRanges(),l>n?(t.addRange(s),t.extend(i.node,i.offset)):(s.setEnd(i.node,i.offset),t.addRange(s)))}}for(s=[],t=r;t=t.parentNode;)t.nodeType===1&&s.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<s.length;r++)t=s[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Kx=w&&"documentMode"in document&&11>=document.documentMode,Bs=null,ml=null,Er=null,pl=!1;function sc(t,s,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;pl||Bs==null||Bs!==un(n)||(n=Bs,"selectionStart"in n&&hl(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Er&&_r(Er,n)||(Er=n,n=Ln(ml,"onSelect"),0<n.length&&(s=new al("onSelect","select",null,s,r),t.push({event:s,listeners:n}),s.target=Bs)))}function _n(t,s){var r={};return r[t.toLowerCase()]=s.toLowerCase(),r["Webkit"+t]="webkit"+s,r["Moz"+t]="moz"+s,r}var Vs={animationend:_n("Animation","AnimationEnd"),animationiteration:_n("Animation","AnimationIteration"),animationstart:_n("Animation","AnimationStart"),transitionend:_n("Transition","TransitionEnd")},gl={},rc={};w&&(rc=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function En(t){if(gl[t])return gl[t];if(!Vs[t])return t;var s=Vs[t],r;for(r in s)if(s.hasOwnProperty(r)&&r in rc)return gl[t]=s[r];return t}var nc=En("animationend"),ac=En("animationiteration"),lc=En("animationstart"),ic=En("transitionend"),oc=new Map,cc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ns(t,s){oc.set(t,s),m(s,[t])}for(var fl=0;fl<cc.length;fl++){var bl=cc[fl],Xx=bl.toLowerCase(),Zx=bl[0].toUpperCase()+bl.slice(1);ns(Xx,"on"+Zx)}ns(nc,"onAnimationEnd"),ns(ac,"onAnimationIteration"),ns(lc,"onAnimationStart"),ns("dblclick","onDoubleClick"),ns("focusin","onFocus"),ns("focusout","onBlur"),ns(ic,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),m("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),m("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),m("onBeforeInput",["compositionend","keypress","textInput","paste"]),m("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eh=new Set("cancel close invalid load scroll toggle".split(" ").concat($r));function dc(t,s,r){var n=t.type||"unknown-event";t.currentTarget=r,Xu(n,s,void 0,t),t.currentTarget=null}function uc(t,s){s=(s&4)!==0;for(var r=0;r<t.length;r++){var n=t[r],a=n.event;n=n.listeners;e:{var l=void 0;if(s)for(var i=n.length-1;0<=i;i--){var x=n[i],p=x.instance,S=x.currentTarget;if(x=x.listener,p!==l&&a.isPropagationStopped())break e;dc(a,x,S),l=p}else for(i=0;i<n.length;i++){if(x=n[i],p=x.instance,S=x.currentTarget,x=x.listener,p!==l&&a.isPropagationStopped())break e;dc(a,x,S),l=p}}}if(mn)throw t=qa,mn=!1,qa=null,t}function Ce(t,s){var r=s[Cl];r===void 0&&(r=s[Cl]=new Set);var n=t+"__bubble";r.has(n)||(xc(s,t,2,!1),r.add(n))}function vl(t,s,r){var n=0;s&&(n|=4),xc(r,t,n,s)}var $n="_reactListening"+Math.random().toString(36).slice(2);function Lr(t){if(!t[$n]){t[$n]=!0,u.forEach(function(r){r!=="selectionchange"&&(eh.has(r)||vl(r,!1,t),vl(r,!0,t))});var s=t.nodeType===9?t:t.ownerDocument;s===null||s[$n]||(s[$n]=!0,vl("selectionchange",!1,s))}}function xc(t,s,r,n){switch(To(s)){case 1:var a=mx;break;case 4:a=px;break;default:a=sl}r=a.bind(null,s,r,t),a=void 0,!Qa||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(a=!0),n?a!==void 0?t.addEventListener(s,r,{capture:!0,passive:a}):t.addEventListener(s,r,!0):a!==void 0?t.addEventListener(s,r,{passive:a}):t.addEventListener(s,r,!1)}function wl(t,s,r,n,a){var l=n;if((s&1)===0&&(s&2)===0&&n!==null)e:for(;;){if(n===null)return;var i=n.tag;if(i===3||i===4){var x=n.stateNode.containerInfo;if(x===a||x.nodeType===8&&x.parentNode===a)break;if(i===4)for(i=n.return;i!==null;){var p=i.tag;if((p===3||p===4)&&(p=i.stateNode.containerInfo,p===a||p.nodeType===8&&p.parentNode===a))return;i=i.return}for(;x!==null;){if(i=js(x),i===null)return;if(p=i.tag,p===5||p===6){n=l=i;continue e}x=x.parentNode}}n=n.return}fo(function(){var S=l,D=Ua(r),T=[];e:{var E=oc.get(t);if(E!==void 0){var O=al,U=t;switch(t){case"keypress":if(Sn(r)===0)break e;case"keydown":case"keyup":O=Ex;break;case"focusin":U="focus",O=ol;break;case"focusout":U="blur",O=ol;break;case"beforeblur":case"afterblur":O=ol;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=Ao;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=bx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=Dx;break;case nc:case ac:case lc:O=yx;break;case ic:O=Tx;break;case"scroll":O=gx;break;case"wheel":O=Rx;break;case"copy":case"cut":case"paste":O=Nx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=Oo}var Y=(s&4)!==0,Re=!Y&&t==="scroll",y=Y?E!==null?E+"Capture":null:E;Y=[];for(var g=S,N;g!==null;){N=g;var A=N.stateNode;if(N.tag===5&&A!==null&&(N=A,y!==null&&(A=mr(g,y),A!=null&&Y.push(Dr(g,A,N)))),Re)break;g=g.return}0<Y.length&&(E=new O(E,U,null,r,D),T.push({event:E,listeners:Y}))}}if((s&7)===0){e:{if(E=t==="mouseover"||t==="pointerover",O=t==="mouseout"||t==="pointerout",E&&r!==Ha&&(U=r.relatedTarget||r.fromElement)&&(js(U)||U[Bt]))break e;if((O||E)&&(E=D.window===D?D:(E=D.ownerDocument)?E.defaultView||E.parentWindow:window,O?(U=r.relatedTarget||r.toElement,O=S,U=U?js(U):null,U!==null&&(Re=ys(U),U!==Re||U.tag!==5&&U.tag!==6)&&(U=null)):(O=null,U=S),O!==U)){if(Y=Ao,A="onMouseLeave",y="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(Y=Oo,A="onPointerLeave",y="onPointerEnter",g="pointer"),Re=O==null?E:Ws(O),N=U==null?E:Ws(U),E=new Y(A,g+"leave",O,r,D),E.target=Re,E.relatedTarget=N,A=null,js(D)===S&&(Y=new Y(y,g+"enter",U,r,D),Y.target=N,Y.relatedTarget=Re,A=Y),Re=A,O&&U)t:{for(Y=O,y=U,g=0,N=Y;N;N=Hs(N))g++;for(N=0,A=y;A;A=Hs(A))N++;for(;0<g-N;)Y=Hs(Y),g--;for(;0<N-g;)y=Hs(y),N--;for(;g--;){if(Y===y||y!==null&&Y===y.alternate)break t;Y=Hs(Y),y=Hs(y)}Y=null}else Y=null;O!==null&&hc(T,E,O,Y,!1),U!==null&&Re!==null&&hc(T,Re,U,Y,!0)}}e:{if(E=S?Ws(S):window,O=E.nodeName&&E.nodeName.toLowerCase(),O==="select"||O==="input"&&E.type==="file")var q=Hx;else if(Wo(E))if(Qo)q=Qx;else{q=Wx;var ee=Ux}else(O=E.nodeName)&&O.toLowerCase()==="input"&&(E.type==="checkbox"||E.type==="radio")&&(q=Yx);if(q&&(q=q(t,S))){Yo(T,q,r,D);break e}ee&&ee(t,E,S),t==="focusout"&&(ee=E._wrapperState)&&ee.controlled&&E.type==="number"&&Ia(E,"number",E.value)}switch(ee=S?Ws(S):window,t){case"focusin":(Wo(ee)||ee.contentEditable==="true")&&(Bs=ee,ml=S,Er=null);break;case"focusout":Er=ml=Bs=null;break;case"mousedown":pl=!0;break;case"contextmenu":case"mouseup":case"dragend":pl=!1,sc(T,r,D);break;case"selectionchange":if(Kx)break;case"keydown":case"keyup":sc(T,r,D)}var te;if(dl)e:{switch(t){case"compositionstart":var se="onCompositionStart";break e;case"compositionend":se="onCompositionEnd";break e;case"compositionupdate":se="onCompositionUpdate";break e}se=void 0}else Gs?Ho(t,r)&&(se="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(se="onCompositionStart");se&&(Go&&r.locale!=="ko"&&(Gs||se!=="onCompositionStart"?se==="onCompositionEnd"&&Gs&&(te=Fo()):(rs=D,nl="value"in rs?rs.value:rs.textContent,Gs=!0)),ee=Ln(S,se),0<ee.length&&(se=new Io(se,t,null,r,D),T.push({event:se,listeners:ee}),te?se.data=te:(te=Uo(r),te!==null&&(se.data=te)))),(te=Ix?Ox(t,r):Gx(t,r))&&(S=Ln(S,"onBeforeInput"),0<S.length&&(D=new Io("onBeforeInput","beforeinput",null,r,D),T.push({event:D,listeners:S}),D.data=te))}uc(T,s)})}function Dr(t,s,r){return{instance:t,listener:s,currentTarget:r}}function Ln(t,s){for(var r=s+"Capture",n=[];t!==null;){var a=t,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=mr(t,r),l!=null&&n.unshift(Dr(t,l,a)),l=mr(t,s),l!=null&&n.push(Dr(t,l,a))),t=t.return}return n}function Hs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hc(t,s,r,n,a){for(var l=s._reactName,i=[];r!==null&&r!==n;){var x=r,p=x.alternate,S=x.stateNode;if(p!==null&&p===n)break;x.tag===5&&S!==null&&(x=S,a?(p=mr(r,l),p!=null&&i.unshift(Dr(r,p,x))):a||(p=mr(r,l),p!=null&&i.push(Dr(r,p,x)))),r=r.return}i.length!==0&&t.push({event:s,listeners:i})}var th=/\r\n?/g,sh=/\u0000|\uFFFD/g;function mc(t){return(typeof t=="string"?t:""+t).replace(th,`
`).replace(sh,"")}function Dn(t,s,r){if(s=mc(s),mc(t)!==s&&r)throw Error(c(425))}function Pn(){}var yl=null,jl=null;function Nl(t,s){return t==="textarea"||t==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var kl=typeof setTimeout=="function"?setTimeout:void 0,rh=typeof clearTimeout=="function"?clearTimeout:void 0,pc=typeof Promise=="function"?Promise:void 0,nh=typeof queueMicrotask=="function"?queueMicrotask:typeof pc<"u"?function(t){return pc.resolve(null).then(t).catch(ah)}:kl;function ah(t){setTimeout(function(){throw t})}function Sl(t,s){var r=s,n=0;do{var a=r.nextSibling;if(t.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(n===0){t.removeChild(a),Nr(s);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=a}while(r);Nr(s)}function as(t){for(;t!=null;t=t.nextSibling){var s=t.nodeType;if(s===1||s===3)break;if(s===8){if(s=t.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return t}function gc(t){t=t.previousSibling;for(var s=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(s===0)return t;s--}else r==="/$"&&s++}t=t.previousSibling}return null}var Us=Math.random().toString(36).slice(2),Ft="__reactFiber$"+Us,Pr="__reactProps$"+Us,Bt="__reactContainer$"+Us,Cl="__reactEvents$"+Us,lh="__reactListeners$"+Us,ih="__reactHandles$"+Us;function js(t){var s=t[Ft];if(s)return s;for(var r=t.parentNode;r;){if(s=r[Bt]||r[Ft]){if(r=s.alternate,s.child!==null||r!==null&&r.child!==null)for(t=gc(t);t!==null;){if(r=t[Ft])return r;t=gc(t)}return s}t=r,r=t.parentNode}return null}function Tr(t){return t=t[Ft]||t[Bt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ws(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(c(33))}function Tn(t){return t[Pr]||null}var zl=[],Ys=-1;function ls(t){return{current:t}}function ze(t){0>Ys||(t.current=zl[Ys],zl[Ys]=null,Ys--)}function Se(t,s){Ys++,zl[Ys]=t.current,t.current=s}var is={},qe=ls(is),at=ls(!1),Ns=is;function Qs(t,s){var r=t.type.contextTypes;if(!r)return is;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===s)return n.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in r)a[l]=s[l];return n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=a),a}function lt(t){return t=t.childContextTypes,t!=null}function Fn(){ze(at),ze(qe)}function fc(t,s,r){if(qe.current!==is)throw Error(c(168));Se(qe,s),Se(at,r)}function bc(t,s,r){var n=t.stateNode;if(s=s.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var a in n)if(!(a in s))throw Error(c(108,ke(t)||"Unknown",a));return H({},r,n)}function Rn(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||is,Ns=qe.current,Se(qe,t),Se(at,at.current),!0}function vc(t,s,r){var n=t.stateNode;if(!n)throw Error(c(169));r?(t=bc(t,s,Ns),n.__reactInternalMemoizedMergedChildContext=t,ze(at),ze(qe),Se(qe,t)):ze(at),Se(at,r)}var Vt=null,An=!1,Ml=!1;function wc(t){Vt===null?Vt=[t]:Vt.push(t)}function oh(t){An=!0,wc(t)}function os(){if(!Ml&&Vt!==null){Ml=!0;var t=0,s=je;try{var r=Vt;for(je=1;t<r.length;t++){var n=r[t];do n=n(!0);while(n!==null)}Vt=null,An=!1}catch(a){throw Vt!==null&&(Vt=Vt.slice(t+1)),jo(Ja,os),a}finally{je=s,Ml=!1}}return null}var qs=[],Js=0,In=null,On=0,bt=[],vt=0,ks=null,Ht=1,Ut="";function Ss(t,s){qs[Js++]=On,qs[Js++]=In,In=t,On=s}function yc(t,s,r){bt[vt++]=Ht,bt[vt++]=Ut,bt[vt++]=ks,ks=t;var n=Ht;t=Ut;var a=32-St(n)-1;n&=~(1<<a),r+=1;var l=32-St(s)+a;if(30<l){var i=a-a%5;l=(n&(1<<i)-1).toString(32),n>>=i,a-=i,Ht=1<<32-St(s)+a|r<<a|n,Ut=l+t}else Ht=1<<l|r<<a|n,Ut=t}function _l(t){t.return!==null&&(Ss(t,1),yc(t,1,0))}function El(t){for(;t===In;)In=qs[--Js],qs[Js]=null,On=qs[--Js],qs[Js]=null;for(;t===ks;)ks=bt[--vt],bt[vt]=null,Ut=bt[--vt],bt[vt]=null,Ht=bt[--vt],bt[vt]=null}var pt=null,gt=null,Ee=!1,zt=null;function jc(t,s){var r=Nt(5,null,null,0);r.elementType="DELETED",r.stateNode=s,r.return=t,s=t.deletions,s===null?(t.deletions=[r],t.flags|=16):s.push(r)}function Nc(t,s){switch(t.tag){case 5:var r=t.type;return s=s.nodeType!==1||r.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(t.stateNode=s,pt=t,gt=as(s.firstChild),!0):!1;case 6:return s=t.pendingProps===""||s.nodeType!==3?null:s,s!==null?(t.stateNode=s,pt=t,gt=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(r=ks!==null?{id:Ht,overflow:Ut}:null,t.memoizedState={dehydrated:s,treeContext:r,retryLane:1073741824},r=Nt(18,null,null,0),r.stateNode=s,r.return=t,t.child=r,pt=t,gt=null,!0):!1;default:return!1}}function $l(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ll(t){if(Ee){var s=gt;if(s){var r=s;if(!Nc(t,s)){if($l(t))throw Error(c(418));s=as(r.nextSibling);var n=pt;s&&Nc(t,s)?jc(n,r):(t.flags=t.flags&-4097|2,Ee=!1,pt=t)}}else{if($l(t))throw Error(c(418));t.flags=t.flags&-4097|2,Ee=!1,pt=t}}}function kc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pt=t}function Gn(t){if(t!==pt)return!1;if(!Ee)return kc(t),Ee=!0,!1;var s;if((s=t.tag!==3)&&!(s=t.tag!==5)&&(s=t.type,s=s!=="head"&&s!=="body"&&!Nl(t.type,t.memoizedProps)),s&&(s=gt)){if($l(t))throw Sc(),Error(c(418));for(;s;)jc(t,s),s=as(s.nextSibling)}if(kc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(c(317));e:{for(t=t.nextSibling,s=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(s===0){gt=as(t.nextSibling);break e}s--}else r!=="$"&&r!=="$!"&&r!=="$?"||s++}t=t.nextSibling}gt=null}}else gt=pt?as(t.stateNode.nextSibling):null;return!0}function Sc(){for(var t=gt;t;)t=as(t.nextSibling)}function Ks(){gt=pt=null,Ee=!1}function Dl(t){zt===null?zt=[t]:zt.push(t)}var ch=be.ReactCurrentBatchConfig;function Fr(t,s,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(c(309));var n=r.stateNode}if(!n)throw Error(c(147,t));var a=n,l=""+t;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===l?s.ref:(s=function(i){var x=a.refs;i===null?delete x[l]:x[l]=i},s._stringRef=l,s)}if(typeof t!="string")throw Error(c(284));if(!r._owner)throw Error(c(290,t))}return t}function Bn(t,s){throw t=Object.prototype.toString.call(s),Error(c(31,t==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":t))}function Cc(t){var s=t._init;return s(t._payload)}function zc(t){function s(y,g){if(t){var N=y.deletions;N===null?(y.deletions=[g],y.flags|=16):N.push(g)}}function r(y,g){if(!t)return null;for(;g!==null;)s(y,g),g=g.sibling;return null}function n(y,g){for(y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function a(y,g){return y=gs(y,g),y.index=0,y.sibling=null,y}function l(y,g,N){return y.index=N,t?(N=y.alternate,N!==null?(N=N.index,N<g?(y.flags|=2,g):N):(y.flags|=2,g)):(y.flags|=1048576,g)}function i(y){return t&&y.alternate===null&&(y.flags|=2),y}function x(y,g,N,A){return g===null||g.tag!==6?(g=ki(N,y.mode,A),g.return=y,g):(g=a(g,N),g.return=y,g)}function p(y,g,N,A){var q=N.type;return q===ie?D(y,g,N.props.children,A,N.key):g!==null&&(g.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===P&&Cc(q)===g.type)?(A=a(g,N.props),A.ref=Fr(y,g,N),A.return=y,A):(A=xa(N.type,N.key,N.props,null,y.mode,A),A.ref=Fr(y,g,N),A.return=y,A)}function S(y,g,N,A){return g===null||g.tag!==4||g.stateNode.containerInfo!==N.containerInfo||g.stateNode.implementation!==N.implementation?(g=Si(N,y.mode,A),g.return=y,g):(g=a(g,N.children||[]),g.return=y,g)}function D(y,g,N,A,q){return g===null||g.tag!==7?(g=Ds(N,y.mode,A,q),g.return=y,g):(g=a(g,N),g.return=y,g)}function T(y,g,N){if(typeof g=="string"&&g!==""||typeof g=="number")return g=ki(""+g,y.mode,N),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case J:return N=xa(g.type,g.key,g.props,null,y.mode,N),N.ref=Fr(y,null,g),N.return=y,N;case ne:return g=Si(g,y.mode,N),g.return=y,g;case P:var A=g._init;return T(y,A(g._payload),N)}if(ur(g)||W(g))return g=Ds(g,y.mode,N,null),g.return=y,g;Bn(y,g)}return null}function E(y,g,N,A){var q=g!==null?g.key:null;if(typeof N=="string"&&N!==""||typeof N=="number")return q!==null?null:x(y,g,""+N,A);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case J:return N.key===q?p(y,g,N,A):null;case ne:return N.key===q?S(y,g,N,A):null;case P:return q=N._init,E(y,g,q(N._payload),A)}if(ur(N)||W(N))return q!==null?null:D(y,g,N,A,null);Bn(y,N)}return null}function O(y,g,N,A,q){if(typeof A=="string"&&A!==""||typeof A=="number")return y=y.get(N)||null,x(g,y,""+A,q);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case J:return y=y.get(A.key===null?N:A.key)||null,p(g,y,A,q);case ne:return y=y.get(A.key===null?N:A.key)||null,S(g,y,A,q);case P:var ee=A._init;return O(y,g,N,ee(A._payload),q)}if(ur(A)||W(A))return y=y.get(N)||null,D(g,y,A,q,null);Bn(g,A)}return null}function U(y,g,N,A){for(var q=null,ee=null,te=g,se=g=0,He=null;te!==null&&se<N.length;se++){te.index>se?(He=te,te=null):He=te.sibling;var fe=E(y,te,N[se],A);if(fe===null){te===null&&(te=He);break}t&&te&&fe.alternate===null&&s(y,te),g=l(fe,g,se),ee===null?q=fe:ee.sibling=fe,ee=fe,te=He}if(se===N.length)return r(y,te),Ee&&Ss(y,se),q;if(te===null){for(;se<N.length;se++)te=T(y,N[se],A),te!==null&&(g=l(te,g,se),ee===null?q=te:ee.sibling=te,ee=te);return Ee&&Ss(y,se),q}for(te=n(y,te);se<N.length;se++)He=O(te,y,se,N[se],A),He!==null&&(t&&He.alternate!==null&&te.delete(He.key===null?se:He.key),g=l(He,g,se),ee===null?q=He:ee.sibling=He,ee=He);return t&&te.forEach(function(fs){return s(y,fs)}),Ee&&Ss(y,se),q}function Y(y,g,N,A){var q=W(N);if(typeof q!="function")throw Error(c(150));if(N=q.call(N),N==null)throw Error(c(151));for(var ee=q=null,te=g,se=g=0,He=null,fe=N.next();te!==null&&!fe.done;se++,fe=N.next()){te.index>se?(He=te,te=null):He=te.sibling;var fs=E(y,te,fe.value,A);if(fs===null){te===null&&(te=He);break}t&&te&&fs.alternate===null&&s(y,te),g=l(fs,g,se),ee===null?q=fs:ee.sibling=fs,ee=fs,te=He}if(fe.done)return r(y,te),Ee&&Ss(y,se),q;if(te===null){for(;!fe.done;se++,fe=N.next())fe=T(y,fe.value,A),fe!==null&&(g=l(fe,g,se),ee===null?q=fe:ee.sibling=fe,ee=fe);return Ee&&Ss(y,se),q}for(te=n(y,te);!fe.done;se++,fe=N.next())fe=O(te,y,se,fe.value,A),fe!==null&&(t&&fe.alternate!==null&&te.delete(fe.key===null?se:fe.key),g=l(fe,g,se),ee===null?q=fe:ee.sibling=fe,ee=fe);return t&&te.forEach(function(Bh){return s(y,Bh)}),Ee&&Ss(y,se),q}function Re(y,g,N,A){if(typeof N=="object"&&N!==null&&N.type===ie&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case J:e:{for(var q=N.key,ee=g;ee!==null;){if(ee.key===q){if(q=N.type,q===ie){if(ee.tag===7){r(y,ee.sibling),g=a(ee,N.props.children),g.return=y,y=g;break e}}else if(ee.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===P&&Cc(q)===ee.type){r(y,ee.sibling),g=a(ee,N.props),g.ref=Fr(y,ee,N),g.return=y,y=g;break e}r(y,ee);break}else s(y,ee);ee=ee.sibling}N.type===ie?(g=Ds(N.props.children,y.mode,A,N.key),g.return=y,y=g):(A=xa(N.type,N.key,N.props,null,y.mode,A),A.ref=Fr(y,g,N),A.return=y,y=A)}return i(y);case ne:e:{for(ee=N.key;g!==null;){if(g.key===ee)if(g.tag===4&&g.stateNode.containerInfo===N.containerInfo&&g.stateNode.implementation===N.implementation){r(y,g.sibling),g=a(g,N.children||[]),g.return=y,y=g;break e}else{r(y,g);break}else s(y,g);g=g.sibling}g=Si(N,y.mode,A),g.return=y,y=g}return i(y);case P:return ee=N._init,Re(y,g,ee(N._payload),A)}if(ur(N))return U(y,g,N,A);if(W(N))return Y(y,g,N,A);Bn(y,N)}return typeof N=="string"&&N!==""||typeof N=="number"?(N=""+N,g!==null&&g.tag===6?(r(y,g.sibling),g=a(g,N),g.return=y,y=g):(r(y,g),g=ki(N,y.mode,A),g.return=y,y=g),i(y)):r(y,g)}return Re}var Xs=zc(!0),Mc=zc(!1),Vn=ls(null),Hn=null,Zs=null,Pl=null;function Tl(){Pl=Zs=Hn=null}function Fl(t){var s=Vn.current;ze(Vn),t._currentValue=s}function Rl(t,s,r){for(;t!==null;){var n=t.alternate;if((t.childLanes&s)!==s?(t.childLanes|=s,n!==null&&(n.childLanes|=s)):n!==null&&(n.childLanes&s)!==s&&(n.childLanes|=s),t===r)break;t=t.return}}function er(t,s){Hn=t,Pl=Zs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&s)!==0&&(it=!0),t.firstContext=null)}function wt(t){var s=t._currentValue;if(Pl!==t)if(t={context:t,memoizedValue:s,next:null},Zs===null){if(Hn===null)throw Error(c(308));Zs=t,Hn.dependencies={lanes:0,firstContext:t}}else Zs=Zs.next=t;return s}var Cs=null;function Al(t){Cs===null?Cs=[t]:Cs.push(t)}function _c(t,s,r,n){var a=s.interleaved;return a===null?(r.next=r,Al(s)):(r.next=a.next,a.next=r),s.interleaved=r,Wt(t,n)}function Wt(t,s){t.lanes|=s;var r=t.alternate;for(r!==null&&(r.lanes|=s),r=t,t=t.return;t!==null;)t.childLanes|=s,r=t.alternate,r!==null&&(r.childLanes|=s),r=t,t=t.return;return r.tag===3?r.stateNode:null}var cs=!1;function Il(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ec(t,s){t=t.updateQueue,s.updateQueue===t&&(s.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Yt(t,s){return{eventTime:t,lane:s,tag:0,payload:null,callback:null,next:null}}function ds(t,s,r){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,(me&2)!==0){var a=n.pending;return a===null?s.next=s:(s.next=a.next,a.next=s),n.pending=s,Wt(t,r)}return a=n.interleaved,a===null?(s.next=s,Al(n)):(s.next=a.next,a.next=s),n.interleaved=s,Wt(t,r)}function Un(t,s,r){if(s=s.updateQueue,s!==null&&(s=s.shared,(r&4194240)!==0)){var n=s.lanes;n&=t.pendingLanes,r|=n,s.lanes=r,Za(t,r)}}function $c(t,s){var r=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var a=null,l=null;if(r=r.firstBaseUpdate,r!==null){do{var i={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};l===null?a=l=i:l=l.next=i,r=r.next}while(r!==null);l===null?a=l=s:l=l.next=s}else a=l=s;r={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:n.shared,effects:n.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=s:t.next=s,r.lastBaseUpdate=s}function Wn(t,s,r,n){var a=t.updateQueue;cs=!1;var l=a.firstBaseUpdate,i=a.lastBaseUpdate,x=a.shared.pending;if(x!==null){a.shared.pending=null;var p=x,S=p.next;p.next=null,i===null?l=S:i.next=S,i=p;var D=t.alternate;D!==null&&(D=D.updateQueue,x=D.lastBaseUpdate,x!==i&&(x===null?D.firstBaseUpdate=S:x.next=S,D.lastBaseUpdate=p))}if(l!==null){var T=a.baseState;i=0,D=S=p=null,x=l;do{var E=x.lane,O=x.eventTime;if((n&E)===E){D!==null&&(D=D.next={eventTime:O,lane:0,tag:x.tag,payload:x.payload,callback:x.callback,next:null});e:{var U=t,Y=x;switch(E=s,O=r,Y.tag){case 1:if(U=Y.payload,typeof U=="function"){T=U.call(O,T,E);break e}T=U;break e;case 3:U.flags=U.flags&-65537|128;case 0:if(U=Y.payload,E=typeof U=="function"?U.call(O,T,E):U,E==null)break e;T=H({},T,E);break e;case 2:cs=!0}}x.callback!==null&&x.lane!==0&&(t.flags|=64,E=a.effects,E===null?a.effects=[x]:E.push(x))}else O={eventTime:O,lane:E,tag:x.tag,payload:x.payload,callback:x.callback,next:null},D===null?(S=D=O,p=T):D=D.next=O,i|=E;if(x=x.next,x===null){if(x=a.shared.pending,x===null)break;E=x,x=E.next,E.next=null,a.lastBaseUpdate=E,a.shared.pending=null}}while(!0);if(D===null&&(p=T),a.baseState=p,a.firstBaseUpdate=S,a.lastBaseUpdate=D,s=a.shared.interleaved,s!==null){a=s;do i|=a.lane,a=a.next;while(a!==s)}else l===null&&(a.shared.lanes=0);_s|=i,t.lanes=i,t.memoizedState=T}}function Lc(t,s,r){if(t=s.effects,s.effects=null,t!==null)for(s=0;s<t.length;s++){var n=t[s],a=n.callback;if(a!==null){if(n.callback=null,n=r,typeof a!="function")throw Error(c(191,a));a.call(n)}}}var Rr={},Rt=ls(Rr),Ar=ls(Rr),Ir=ls(Rr);function zs(t){if(t===Rr)throw Error(c(174));return t}function Ol(t,s){switch(Se(Ir,s),Se(Ar,t),Se(Rt,Rr),t=s.nodeType,t){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Ga(null,"");break;default:t=t===8?s.parentNode:s,s=t.namespaceURI||null,t=t.tagName,s=Ga(s,t)}ze(Rt),Se(Rt,s)}function tr(){ze(Rt),ze(Ar),ze(Ir)}function Dc(t){zs(Ir.current);var s=zs(Rt.current),r=Ga(s,t.type);s!==r&&(Se(Ar,t),Se(Rt,r))}function Gl(t){Ar.current===t&&(ze(Rt),ze(Ar))}var Le=ls(0);function Yn(t){for(var s=t;s!==null;){if(s.tag===13){var r=s.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Bl=[];function Vl(){for(var t=0;t<Bl.length;t++)Bl[t]._workInProgressVersionPrimary=null;Bl.length=0}var Qn=be.ReactCurrentDispatcher,Hl=be.ReactCurrentBatchConfig,Ms=0,De=null,Oe=null,Be=null,qn=!1,Or=!1,Gr=0,dh=0;function Je(){throw Error(c(321))}function Ul(t,s){if(s===null)return!1;for(var r=0;r<s.length&&r<t.length;r++)if(!Ct(t[r],s[r]))return!1;return!0}function Wl(t,s,r,n,a,l){if(Ms=l,De=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Qn.current=t===null||t.memoizedState===null?mh:ph,t=r(n,a),Or){l=0;do{if(Or=!1,Gr=0,25<=l)throw Error(c(301));l+=1,Be=Oe=null,s.updateQueue=null,Qn.current=gh,t=r(n,a)}while(Or)}if(Qn.current=Xn,s=Oe!==null&&Oe.next!==null,Ms=0,Be=Oe=De=null,qn=!1,s)throw Error(c(300));return t}function Yl(){var t=Gr!==0;return Gr=0,t}function At(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?De.memoizedState=Be=t:Be=Be.next=t,Be}function yt(){if(Oe===null){var t=De.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var s=Be===null?De.memoizedState:Be.next;if(s!==null)Be=s,Oe=t;else{if(t===null)throw Error(c(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Be===null?De.memoizedState=Be=t:Be=Be.next=t}return Be}function Br(t,s){return typeof s=="function"?s(t):s}function Ql(t){var s=yt(),r=s.queue;if(r===null)throw Error(c(311));r.lastRenderedReducer=t;var n=Oe,a=n.baseQueue,l=r.pending;if(l!==null){if(a!==null){var i=a.next;a.next=l.next,l.next=i}n.baseQueue=a=l,r.pending=null}if(a!==null){l=a.next,n=n.baseState;var x=i=null,p=null,S=l;do{var D=S.lane;if((Ms&D)===D)p!==null&&(p=p.next={lane:0,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),n=S.hasEagerState?S.eagerState:t(n,S.action);else{var T={lane:D,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null};p===null?(x=p=T,i=n):p=p.next=T,De.lanes|=D,_s|=D}S=S.next}while(S!==null&&S!==l);p===null?i=n:p.next=x,Ct(n,s.memoizedState)||(it=!0),s.memoizedState=n,s.baseState=i,s.baseQueue=p,r.lastRenderedState=n}if(t=r.interleaved,t!==null){a=t;do l=a.lane,De.lanes|=l,_s|=l,a=a.next;while(a!==t)}else a===null&&(r.lanes=0);return[s.memoizedState,r.dispatch]}function ql(t){var s=yt(),r=s.queue;if(r===null)throw Error(c(311));r.lastRenderedReducer=t;var n=r.dispatch,a=r.pending,l=s.memoizedState;if(a!==null){r.pending=null;var i=a=a.next;do l=t(l,i.action),i=i.next;while(i!==a);Ct(l,s.memoizedState)||(it=!0),s.memoizedState=l,s.baseQueue===null&&(s.baseState=l),r.lastRenderedState=l}return[l,n]}function Pc(){}function Tc(t,s){var r=De,n=yt(),a=s(),l=!Ct(n.memoizedState,a);if(l&&(n.memoizedState=a,it=!0),n=n.queue,Jl(Ac.bind(null,r,n,t),[t]),n.getSnapshot!==s||l||Be!==null&&Be.memoizedState.tag&1){if(r.flags|=2048,Vr(9,Rc.bind(null,r,n,a,s),void 0,null),Ve===null)throw Error(c(349));(Ms&30)!==0||Fc(r,s,a)}return a}function Fc(t,s,r){t.flags|=16384,t={getSnapshot:s,value:r},s=De.updateQueue,s===null?(s={lastEffect:null,stores:null},De.updateQueue=s,s.stores=[t]):(r=s.stores,r===null?s.stores=[t]:r.push(t))}function Rc(t,s,r,n){s.value=r,s.getSnapshot=n,Ic(s)&&Oc(t)}function Ac(t,s,r){return r(function(){Ic(s)&&Oc(t)})}function Ic(t){var s=t.getSnapshot;t=t.value;try{var r=s();return!Ct(t,r)}catch{return!0}}function Oc(t){var s=Wt(t,1);s!==null&&$t(s,t,1,-1)}function Gc(t){var s=At();return typeof t=="function"&&(t=t()),s.memoizedState=s.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Br,lastRenderedState:t},s.queue=t,t=t.dispatch=hh.bind(null,De,t),[s.memoizedState,t]}function Vr(t,s,r,n){return t={tag:t,create:s,destroy:r,deps:n,next:null},s=De.updateQueue,s===null?(s={lastEffect:null,stores:null},De.updateQueue=s,s.lastEffect=t.next=t):(r=s.lastEffect,r===null?s.lastEffect=t.next=t:(n=r.next,r.next=t,t.next=n,s.lastEffect=t)),t}function Bc(){return yt().memoizedState}function Jn(t,s,r,n){var a=At();De.flags|=t,a.memoizedState=Vr(1|s,r,void 0,n===void 0?null:n)}function Kn(t,s,r,n){var a=yt();n=n===void 0?null:n;var l=void 0;if(Oe!==null){var i=Oe.memoizedState;if(l=i.destroy,n!==null&&Ul(n,i.deps)){a.memoizedState=Vr(s,r,l,n);return}}De.flags|=t,a.memoizedState=Vr(1|s,r,l,n)}function Vc(t,s){return Jn(8390656,8,t,s)}function Jl(t,s){return Kn(2048,8,t,s)}function Hc(t,s){return Kn(4,2,t,s)}function Uc(t,s){return Kn(4,4,t,s)}function Wc(t,s){if(typeof s=="function")return t=t(),s(t),function(){s(null)};if(s!=null)return t=t(),s.current=t,function(){s.current=null}}function Yc(t,s,r){return r=r!=null?r.concat([t]):null,Kn(4,4,Wc.bind(null,s,t),r)}function Kl(){}function Qc(t,s){var r=yt();s=s===void 0?null:s;var n=r.memoizedState;return n!==null&&s!==null&&Ul(s,n[1])?n[0]:(r.memoizedState=[t,s],t)}function qc(t,s){var r=yt();s=s===void 0?null:s;var n=r.memoizedState;return n!==null&&s!==null&&Ul(s,n[1])?n[0]:(t=t(),r.memoizedState=[t,s],t)}function Jc(t,s,r){return(Ms&21)===0?(t.baseState&&(t.baseState=!1,it=!0),t.memoizedState=r):(Ct(r,s)||(r=Co(),De.lanes|=r,_s|=r,t.baseState=!0),s)}function uh(t,s){var r=je;je=r!==0&&4>r?r:4,t(!0);var n=Hl.transition;Hl.transition={};try{t(!1),s()}finally{je=r,Hl.transition=n}}function Kc(){return yt().memoizedState}function xh(t,s,r){var n=ms(t);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Xc(t))Zc(s,r);else if(r=_c(t,s,r,n),r!==null){var a=tt();$t(r,t,n,a),ed(r,s,n)}}function hh(t,s,r){var n=ms(t),a={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Xc(t))Zc(s,a);else{var l=t.alternate;if(t.lanes===0&&(l===null||l.lanes===0)&&(l=s.lastRenderedReducer,l!==null))try{var i=s.lastRenderedState,x=l(i,r);if(a.hasEagerState=!0,a.eagerState=x,Ct(x,i)){var p=s.interleaved;p===null?(a.next=a,Al(s)):(a.next=p.next,p.next=a),s.interleaved=a;return}}catch{}finally{}r=_c(t,s,a,n),r!==null&&(a=tt(),$t(r,t,n,a),ed(r,s,n))}}function Xc(t){var s=t.alternate;return t===De||s!==null&&s===De}function Zc(t,s){Or=qn=!0;var r=t.pending;r===null?s.next=s:(s.next=r.next,r.next=s),t.pending=s}function ed(t,s,r){if((r&4194240)!==0){var n=s.lanes;n&=t.pendingLanes,r|=n,s.lanes=r,Za(t,r)}}var Xn={readContext:wt,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},mh={readContext:wt,useCallback:function(t,s){return At().memoizedState=[t,s===void 0?null:s],t},useContext:wt,useEffect:Vc,useImperativeHandle:function(t,s,r){return r=r!=null?r.concat([t]):null,Jn(4194308,4,Wc.bind(null,s,t),r)},useLayoutEffect:function(t,s){return Jn(4194308,4,t,s)},useInsertionEffect:function(t,s){return Jn(4,2,t,s)},useMemo:function(t,s){var r=At();return s=s===void 0?null:s,t=t(),r.memoizedState=[t,s],t},useReducer:function(t,s,r){var n=At();return s=r!==void 0?r(s):s,n.memoizedState=n.baseState=s,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:s},n.queue=t,t=t.dispatch=xh.bind(null,De,t),[n.memoizedState,t]},useRef:function(t){var s=At();return t={current:t},s.memoizedState=t},useState:Gc,useDebugValue:Kl,useDeferredValue:function(t){return At().memoizedState=t},useTransition:function(){var t=Gc(!1),s=t[0];return t=uh.bind(null,t[1]),At().memoizedState=t,[s,t]},useMutableSource:function(){},useSyncExternalStore:function(t,s,r){var n=De,a=At();if(Ee){if(r===void 0)throw Error(c(407));r=r()}else{if(r=s(),Ve===null)throw Error(c(349));(Ms&30)!==0||Fc(n,s,r)}a.memoizedState=r;var l={value:r,getSnapshot:s};return a.queue=l,Vc(Ac.bind(null,n,l,t),[t]),n.flags|=2048,Vr(9,Rc.bind(null,n,l,r,s),void 0,null),r},useId:function(){var t=At(),s=Ve.identifierPrefix;if(Ee){var r=Ut,n=Ht;r=(n&~(1<<32-St(n)-1)).toString(32)+r,s=":"+s+"R"+r,r=Gr++,0<r&&(s+="H"+r.toString(32)),s+=":"}else r=dh++,s=":"+s+"r"+r.toString(32)+":";return t.memoizedState=s},unstable_isNewReconciler:!1},ph={readContext:wt,useCallback:Qc,useContext:wt,useEffect:Jl,useImperativeHandle:Yc,useInsertionEffect:Hc,useLayoutEffect:Uc,useMemo:qc,useReducer:Ql,useRef:Bc,useState:function(){return Ql(Br)},useDebugValue:Kl,useDeferredValue:function(t){var s=yt();return Jc(s,Oe.memoizedState,t)},useTransition:function(){var t=Ql(Br)[0],s=yt().memoizedState;return[t,s]},useMutableSource:Pc,useSyncExternalStore:Tc,useId:Kc,unstable_isNewReconciler:!1},gh={readContext:wt,useCallback:Qc,useContext:wt,useEffect:Jl,useImperativeHandle:Yc,useInsertionEffect:Hc,useLayoutEffect:Uc,useMemo:qc,useReducer:ql,useRef:Bc,useState:function(){return ql(Br)},useDebugValue:Kl,useDeferredValue:function(t){var s=yt();return Oe===null?s.memoizedState=t:Jc(s,Oe.memoizedState,t)},useTransition:function(){var t=ql(Br)[0],s=yt().memoizedState;return[t,s]},useMutableSource:Pc,useSyncExternalStore:Tc,useId:Kc,unstable_isNewReconciler:!1};function Mt(t,s){if(t&&t.defaultProps){s=H({},s),t=t.defaultProps;for(var r in t)s[r]===void 0&&(s[r]=t[r]);return s}return s}function Xl(t,s,r,n){s=t.memoizedState,r=r(n,s),r=r==null?s:H({},s,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Zn={isMounted:function(t){return(t=t._reactInternals)?ys(t)===t:!1},enqueueSetState:function(t,s,r){t=t._reactInternals;var n=tt(),a=ms(t),l=Yt(n,a);l.payload=s,r!=null&&(l.callback=r),s=ds(t,l,a),s!==null&&($t(s,t,a,n),Un(s,t,a))},enqueueReplaceState:function(t,s,r){t=t._reactInternals;var n=tt(),a=ms(t),l=Yt(n,a);l.tag=1,l.payload=s,r!=null&&(l.callback=r),s=ds(t,l,a),s!==null&&($t(s,t,a,n),Un(s,t,a))},enqueueForceUpdate:function(t,s){t=t._reactInternals;var r=tt(),n=ms(t),a=Yt(r,n);a.tag=2,s!=null&&(a.callback=s),s=ds(t,a,n),s!==null&&($t(s,t,n,r),Un(s,t,n))}};function td(t,s,r,n,a,l,i){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,l,i):s.prototype&&s.prototype.isPureReactComponent?!_r(r,n)||!_r(a,l):!0}function sd(t,s,r){var n=!1,a=is,l=s.contextType;return typeof l=="object"&&l!==null?l=wt(l):(a=lt(s)?Ns:qe.current,n=s.contextTypes,l=(n=n!=null)?Qs(t,a):is),s=new s(r,l),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Zn,t.stateNode=s,s._reactInternals=t,n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=a,t.__reactInternalMemoizedMaskedChildContext=l),s}function rd(t,s,r,n){t=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(r,n),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(r,n),s.state!==t&&Zn.enqueueReplaceState(s,s.state,null)}function Zl(t,s,r,n){var a=t.stateNode;a.props=r,a.state=t.memoizedState,a.refs={},Il(t);var l=s.contextType;typeof l=="object"&&l!==null?a.context=wt(l):(l=lt(s)?Ns:qe.current,a.context=Qs(t,l)),a.state=t.memoizedState,l=s.getDerivedStateFromProps,typeof l=="function"&&(Xl(t,s,l,r),a.state=t.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(s=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),s!==a.state&&Zn.enqueueReplaceState(a,a.state,null),Wn(t,r,a,n),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308)}function sr(t,s){try{var r="",n=s;do r+=pe(n),n=n.return;while(n);var a=r}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:t,source:s,stack:a,digest:null}}function ei(t,s,r){return{value:t,source:null,stack:r??null,digest:s??null}}function ti(t,s){try{console.error(s.value)}catch(r){setTimeout(function(){throw r})}}var fh=typeof WeakMap=="function"?WeakMap:Map;function nd(t,s,r){r=Yt(-1,r),r.tag=3,r.payload={element:null};var n=s.value;return r.callback=function(){la||(la=!0,gi=n),ti(t,s)},r}function ad(t,s,r){r=Yt(-1,r),r.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var a=s.value;r.payload=function(){return n(a)},r.callback=function(){ti(t,s)}}var l=t.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(r.callback=function(){ti(t,s),typeof n!="function"&&(xs===null?xs=new Set([this]):xs.add(this));var i=s.stack;this.componentDidCatch(s.value,{componentStack:i!==null?i:""})}),r}function ld(t,s,r){var n=t.pingCache;if(n===null){n=t.pingCache=new fh;var a=new Set;n.set(s,a)}else a=n.get(s),a===void 0&&(a=new Set,n.set(s,a));a.has(r)||(a.add(r),t=$h.bind(null,t,s,r),s.then(t,t))}function id(t){do{var s;if((s=t.tag===13)&&(s=t.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return t;t=t.return}while(t!==null);return null}function od(t,s,r,n,a){return(t.mode&1)===0?(t===s?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(s=Yt(-1,1),s.tag=2,ds(r,s,1))),r.lanes|=1),t):(t.flags|=65536,t.lanes=a,t)}var bh=be.ReactCurrentOwner,it=!1;function et(t,s,r,n){s.child=t===null?Mc(s,null,r,n):Xs(s,t.child,r,n)}function cd(t,s,r,n,a){r=r.render;var l=s.ref;return er(s,a),n=Wl(t,s,r,n,l,a),r=Yl(),t!==null&&!it?(s.updateQueue=t.updateQueue,s.flags&=-2053,t.lanes&=~a,Qt(t,s,a)):(Ee&&r&&_l(s),s.flags|=1,et(t,s,n,a),s.child)}function dd(t,s,r,n,a){if(t===null){var l=r.type;return typeof l=="function"&&!Ni(l)&&l.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(s.tag=15,s.type=l,ud(t,s,l,n,a)):(t=xa(r.type,null,n,s,s.mode,a),t.ref=s.ref,t.return=s,s.child=t)}if(l=t.child,(t.lanes&a)===0){var i=l.memoizedProps;if(r=r.compare,r=r!==null?r:_r,r(i,n)&&t.ref===s.ref)return Qt(t,s,a)}return s.flags|=1,t=gs(l,n),t.ref=s.ref,t.return=s,s.child=t}function ud(t,s,r,n,a){if(t!==null){var l=t.memoizedProps;if(_r(l,n)&&t.ref===s.ref)if(it=!1,s.pendingProps=n=l,(t.lanes&a)!==0)(t.flags&131072)!==0&&(it=!0);else return s.lanes=t.lanes,Qt(t,s,a)}return si(t,s,r,n,a)}function xd(t,s,r){var n=s.pendingProps,a=n.children,l=t!==null?t.memoizedState:null;if(n.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(nr,ft),ft|=r;else{if((r&1073741824)===0)return t=l!==null?l.baseLanes|r:r,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:t,cachePool:null,transitions:null},s.updateQueue=null,Se(nr,ft),ft|=t,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=l!==null?l.baseLanes:r,Se(nr,ft),ft|=n}else l!==null?(n=l.baseLanes|r,s.memoizedState=null):n=r,Se(nr,ft),ft|=n;return et(t,s,a,r),s.child}function hd(t,s){var r=s.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(s.flags|=512,s.flags|=2097152)}function si(t,s,r,n,a){var l=lt(r)?Ns:qe.current;return l=Qs(s,l),er(s,a),r=Wl(t,s,r,n,l,a),n=Yl(),t!==null&&!it?(s.updateQueue=t.updateQueue,s.flags&=-2053,t.lanes&=~a,Qt(t,s,a)):(Ee&&n&&_l(s),s.flags|=1,et(t,s,r,a),s.child)}function md(t,s,r,n,a){if(lt(r)){var l=!0;Rn(s)}else l=!1;if(er(s,a),s.stateNode===null)ta(t,s),sd(s,r,n),Zl(s,r,n,a),n=!0;else if(t===null){var i=s.stateNode,x=s.memoizedProps;i.props=x;var p=i.context,S=r.contextType;typeof S=="object"&&S!==null?S=wt(S):(S=lt(r)?Ns:qe.current,S=Qs(s,S));var D=r.getDerivedStateFromProps,T=typeof D=="function"||typeof i.getSnapshotBeforeUpdate=="function";T||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(x!==n||p!==S)&&rd(s,i,n,S),cs=!1;var E=s.memoizedState;i.state=E,Wn(s,n,i,a),p=s.memoizedState,x!==n||E!==p||at.current||cs?(typeof D=="function"&&(Xl(s,r,D,n),p=s.memoizedState),(x=cs||td(s,r,x,n,E,p,S))?(T||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(s.flags|=4194308)):(typeof i.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=n,s.memoizedState=p),i.props=n,i.state=p,i.context=S,n=x):(typeof i.componentDidMount=="function"&&(s.flags|=4194308),n=!1)}else{i=s.stateNode,Ec(t,s),x=s.memoizedProps,S=s.type===s.elementType?x:Mt(s.type,x),i.props=S,T=s.pendingProps,E=i.context,p=r.contextType,typeof p=="object"&&p!==null?p=wt(p):(p=lt(r)?Ns:qe.current,p=Qs(s,p));var O=r.getDerivedStateFromProps;(D=typeof O=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(x!==T||E!==p)&&rd(s,i,n,p),cs=!1,E=s.memoizedState,i.state=E,Wn(s,n,i,a);var U=s.memoizedState;x!==T||E!==U||at.current||cs?(typeof O=="function"&&(Xl(s,r,O,n),U=s.memoizedState),(S=cs||td(s,r,S,n,E,U,p)||!1)?(D||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,U,p),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,U,p)),typeof i.componentDidUpdate=="function"&&(s.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof i.componentDidUpdate!="function"||x===t.memoizedProps&&E===t.memoizedState||(s.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&E===t.memoizedState||(s.flags|=1024),s.memoizedProps=n,s.memoizedState=U),i.props=n,i.state=U,i.context=p,n=S):(typeof i.componentDidUpdate!="function"||x===t.memoizedProps&&E===t.memoizedState||(s.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&E===t.memoizedState||(s.flags|=1024),n=!1)}return ri(t,s,r,n,l,a)}function ri(t,s,r,n,a,l){hd(t,s);var i=(s.flags&128)!==0;if(!n&&!i)return a&&vc(s,r,!1),Qt(t,s,l);n=s.stateNode,bh.current=s;var x=i&&typeof r.getDerivedStateFromError!="function"?null:n.render();return s.flags|=1,t!==null&&i?(s.child=Xs(s,t.child,null,l),s.child=Xs(s,null,x,l)):et(t,s,x,l),s.memoizedState=n.state,a&&vc(s,r,!0),s.child}function pd(t){var s=t.stateNode;s.pendingContext?fc(t,s.pendingContext,s.pendingContext!==s.context):s.context&&fc(t,s.context,!1),Ol(t,s.containerInfo)}function gd(t,s,r,n,a){return Ks(),Dl(a),s.flags|=256,et(t,s,r,n),s.child}var ni={dehydrated:null,treeContext:null,retryLane:0};function ai(t){return{baseLanes:t,cachePool:null,transitions:null}}function fd(t,s,r){var n=s.pendingProps,a=Le.current,l=!1,i=(s.flags&128)!==0,x;if((x=i)||(x=t!==null&&t.memoizedState===null?!1:(a&2)!==0),x?(l=!0,s.flags&=-129):(t===null||t.memoizedState!==null)&&(a|=1),Se(Le,a&1),t===null)return Ll(s),t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((s.mode&1)===0?s.lanes=1:t.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(i=n.children,t=n.fallback,l?(n=s.mode,l=s.child,i={mode:"hidden",children:i},(n&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=i):l=ha(i,n,0,null),t=Ds(t,n,r,null),l.return=s,t.return=s,l.sibling=t,s.child=l,s.child.memoizedState=ai(r),s.memoizedState=ni,t):li(s,i));if(a=t.memoizedState,a!==null&&(x=a.dehydrated,x!==null))return vh(t,s,i,n,x,a,r);if(l){l=n.fallback,i=s.mode,a=t.child,x=a.sibling;var p={mode:"hidden",children:n.children};return(i&1)===0&&s.child!==a?(n=s.child,n.childLanes=0,n.pendingProps=p,s.deletions=null):(n=gs(a,p),n.subtreeFlags=a.subtreeFlags&14680064),x!==null?l=gs(x,l):(l=Ds(l,i,r,null),l.flags|=2),l.return=s,n.return=s,n.sibling=l,s.child=n,n=l,l=s.child,i=t.child.memoizedState,i=i===null?ai(r):{baseLanes:i.baseLanes|r,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=t.childLanes&~r,s.memoizedState=ni,n}return l=t.child,t=l.sibling,n=gs(l,{mode:"visible",children:n.children}),(s.mode&1)===0&&(n.lanes=r),n.return=s,n.sibling=null,t!==null&&(r=s.deletions,r===null?(s.deletions=[t],s.flags|=16):r.push(t)),s.child=n,s.memoizedState=null,n}function li(t,s){return s=ha({mode:"visible",children:s},t.mode,0,null),s.return=t,t.child=s}function ea(t,s,r,n){return n!==null&&Dl(n),Xs(s,t.child,null,r),t=li(s,s.pendingProps.children),t.flags|=2,s.memoizedState=null,t}function vh(t,s,r,n,a,l,i){if(r)return s.flags&256?(s.flags&=-257,n=ei(Error(c(422))),ea(t,s,i,n)):s.memoizedState!==null?(s.child=t.child,s.flags|=128,null):(l=n.fallback,a=s.mode,n=ha({mode:"visible",children:n.children},a,0,null),l=Ds(l,a,i,null),l.flags|=2,n.return=s,l.return=s,n.sibling=l,s.child=n,(s.mode&1)!==0&&Xs(s,t.child,null,i),s.child.memoizedState=ai(i),s.memoizedState=ni,l);if((s.mode&1)===0)return ea(t,s,i,null);if(a.data==="$!"){if(n=a.nextSibling&&a.nextSibling.dataset,n)var x=n.dgst;return n=x,l=Error(c(419)),n=ei(l,n,void 0),ea(t,s,i,n)}if(x=(i&t.childLanes)!==0,it||x){if(n=Ve,n!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(n.suspendedLanes|i))!==0?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,Wt(t,a),$t(n,t,a,-1))}return ji(),n=ei(Error(c(421))),ea(t,s,i,n)}return a.data==="$?"?(s.flags|=128,s.child=t.child,s=Lh.bind(null,t),a._reactRetry=s,null):(t=l.treeContext,gt=as(a.nextSibling),pt=s,Ee=!0,zt=null,t!==null&&(bt[vt++]=Ht,bt[vt++]=Ut,bt[vt++]=ks,Ht=t.id,Ut=t.overflow,ks=s),s=li(s,n.children),s.flags|=4096,s)}function bd(t,s,r){t.lanes|=s;var n=t.alternate;n!==null&&(n.lanes|=s),Rl(t.return,s,r)}function ii(t,s,r,n,a){var l=t.memoizedState;l===null?t.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:a}:(l.isBackwards=s,l.rendering=null,l.renderingStartTime=0,l.last=n,l.tail=r,l.tailMode=a)}function vd(t,s,r){var n=s.pendingProps,a=n.revealOrder,l=n.tail;if(et(t,s,n.children,r),n=Le.current,(n&2)!==0)n=n&1|2,s.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=s.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&bd(t,r,s);else if(t.tag===19)bd(t,r,s);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===s)break e;for(;t.sibling===null;){if(t.return===null||t.return===s)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if(Se(Le,n),(s.mode&1)===0)s.memoizedState=null;else switch(a){case"forwards":for(r=s.child,a=null;r!==null;)t=r.alternate,t!==null&&Yn(t)===null&&(a=r),r=r.sibling;r=a,r===null?(a=s.child,s.child=null):(a=r.sibling,r.sibling=null),ii(s,!1,a,r,l);break;case"backwards":for(r=null,a=s.child,s.child=null;a!==null;){if(t=a.alternate,t!==null&&Yn(t)===null){s.child=a;break}t=a.sibling,a.sibling=r,r=a,a=t}ii(s,!0,r,null,l);break;case"together":ii(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function ta(t,s){(s.mode&1)===0&&t!==null&&(t.alternate=null,s.alternate=null,s.flags|=2)}function Qt(t,s,r){if(t!==null&&(s.dependencies=t.dependencies),_s|=s.lanes,(r&s.childLanes)===0)return null;if(t!==null&&s.child!==t.child)throw Error(c(153));if(s.child!==null){for(t=s.child,r=gs(t,t.pendingProps),s.child=r,r.return=s;t.sibling!==null;)t=t.sibling,r=r.sibling=gs(t,t.pendingProps),r.return=s;r.sibling=null}return s.child}function wh(t,s,r){switch(s.tag){case 3:pd(s),Ks();break;case 5:Dc(s);break;case 1:lt(s.type)&&Rn(s);break;case 4:Ol(s,s.stateNode.containerInfo);break;case 10:var n=s.type._context,a=s.memoizedProps.value;Se(Vn,n._currentValue),n._currentValue=a;break;case 13:if(n=s.memoizedState,n!==null)return n.dehydrated!==null?(Se(Le,Le.current&1),s.flags|=128,null):(r&s.child.childLanes)!==0?fd(t,s,r):(Se(Le,Le.current&1),t=Qt(t,s,r),t!==null?t.sibling:null);Se(Le,Le.current&1);break;case 19:if(n=(r&s.childLanes)!==0,(t.flags&128)!==0){if(n)return vd(t,s,r);s.flags|=128}if(a=s.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Se(Le,Le.current),n)break;return null;case 22:case 23:return s.lanes=0,xd(t,s,r)}return Qt(t,s,r)}var wd,oi,yd,jd;wd=function(t,s){for(var r=s.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break;for(;r.sibling===null;){if(r.return===null||r.return===s)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},oi=function(){},yd=function(t,s,r,n){var a=t.memoizedProps;if(a!==n){t=s.stateNode,zs(Rt.current);var l=null;switch(r){case"input":a=Ra(t,a),n=Ra(t,n),l=[];break;case"select":a=H({},a,{value:void 0}),n=H({},n,{value:void 0}),l=[];break;case"textarea":a=Oa(t,a),n=Oa(t,n),l=[];break;default:typeof a.onClick!="function"&&typeof n.onClick=="function"&&(t.onclick=Pn)}Ba(r,n);var i;r=null;for(S in a)if(!n.hasOwnProperty(S)&&a.hasOwnProperty(S)&&a[S]!=null)if(S==="style"){var x=a[S];for(i in x)x.hasOwnProperty(i)&&(r||(r={}),r[i]="")}else S!=="dangerouslySetInnerHTML"&&S!=="children"&&S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&S!=="autoFocus"&&(h.hasOwnProperty(S)?l||(l=[]):(l=l||[]).push(S,null));for(S in n){var p=n[S];if(x=a!=null?a[S]:void 0,n.hasOwnProperty(S)&&p!==x&&(p!=null||x!=null))if(S==="style")if(x){for(i in x)!x.hasOwnProperty(i)||p&&p.hasOwnProperty(i)||(r||(r={}),r[i]="");for(i in p)p.hasOwnProperty(i)&&x[i]!==p[i]&&(r||(r={}),r[i]=p[i])}else r||(l||(l=[]),l.push(S,r)),r=p;else S==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,x=x?x.__html:void 0,p!=null&&x!==p&&(l=l||[]).push(S,p)):S==="children"?typeof p!="string"&&typeof p!="number"||(l=l||[]).push(S,""+p):S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&(h.hasOwnProperty(S)?(p!=null&&S==="onScroll"&&Ce("scroll",t),l||x===p||(l=[])):(l=l||[]).push(S,p))}r&&(l=l||[]).push("style",r);var S=l;(s.updateQueue=S)&&(s.flags|=4)}},jd=function(t,s,r,n){r!==n&&(s.flags|=4)};function Hr(t,s){if(!Ee)switch(t.tailMode){case"hidden":s=t.tail;for(var r=null;s!==null;)s.alternate!==null&&(r=s),s=s.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?s||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function Ke(t){var s=t.alternate!==null&&t.alternate.child===t.child,r=0,n=0;if(s)for(var a=t.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags&14680064,n|=a.flags&14680064,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=n,t.childLanes=r,s}function yh(t,s,r){var n=s.pendingProps;switch(El(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(s),null;case 1:return lt(s.type)&&Fn(),Ke(s),null;case 3:return n=s.stateNode,tr(),ze(at),ze(qe),Vl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Gn(s)?s.flags|=4:t===null||t.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,zt!==null&&(vi(zt),zt=null))),oi(t,s),Ke(s),null;case 5:Gl(s);var a=zs(Ir.current);if(r=s.type,t!==null&&s.stateNode!=null)yd(t,s,r,n,a),t.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!n){if(s.stateNode===null)throw Error(c(166));return Ke(s),null}if(t=zs(Rt.current),Gn(s)){n=s.stateNode,r=s.type;var l=s.memoizedProps;switch(n[Ft]=s,n[Pr]=l,t=(s.mode&1)!==0,r){case"dialog":Ce("cancel",n),Ce("close",n);break;case"iframe":case"object":case"embed":Ce("load",n);break;case"video":case"audio":for(a=0;a<$r.length;a++)Ce($r[a],n);break;case"source":Ce("error",n);break;case"img":case"image":case"link":Ce("error",n),Ce("load",n);break;case"details":Ce("toggle",n);break;case"input":to(n,l),Ce("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!l.multiple},Ce("invalid",n);break;case"textarea":no(n,l),Ce("invalid",n)}Ba(r,l),a=null;for(var i in l)if(l.hasOwnProperty(i)){var x=l[i];i==="children"?typeof x=="string"?n.textContent!==x&&(l.suppressHydrationWarning!==!0&&Dn(n.textContent,x,t),a=["children",x]):typeof x=="number"&&n.textContent!==""+x&&(l.suppressHydrationWarning!==!0&&Dn(n.textContent,x,t),a=["children",""+x]):h.hasOwnProperty(i)&&x!=null&&i==="onScroll"&&Ce("scroll",n)}switch(r){case"input":dn(n),ro(n,l,!0);break;case"textarea":dn(n),lo(n);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(n.onclick=Pn)}n=a,s.updateQueue=n,n!==null&&(s.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=io(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=i.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.is=="string"?t=i.createElement(r,{is:n.is}):(t=i.createElement(r),r==="select"&&(i=t,n.multiple?i.multiple=!0:n.size&&(i.size=n.size))):t=i.createElementNS(t,r),t[Ft]=s,t[Pr]=n,wd(t,s,!1,!1),s.stateNode=t;e:{switch(i=Va(r,n),r){case"dialog":Ce("cancel",t),Ce("close",t),a=n;break;case"iframe":case"object":case"embed":Ce("load",t),a=n;break;case"video":case"audio":for(a=0;a<$r.length;a++)Ce($r[a],t);a=n;break;case"source":Ce("error",t),a=n;break;case"img":case"image":case"link":Ce("error",t),Ce("load",t),a=n;break;case"details":Ce("toggle",t),a=n;break;case"input":to(t,n),a=Ra(t,n),Ce("invalid",t);break;case"option":a=n;break;case"select":t._wrapperState={wasMultiple:!!n.multiple},a=H({},n,{value:void 0}),Ce("invalid",t);break;case"textarea":no(t,n),a=Oa(t,n),Ce("invalid",t);break;default:a=n}Ba(r,a),x=a;for(l in x)if(x.hasOwnProperty(l)){var p=x[l];l==="style"?uo(t,p):l==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,p!=null&&oo(t,p)):l==="children"?typeof p=="string"?(r!=="textarea"||p!=="")&&xr(t,p):typeof p=="number"&&xr(t,""+p):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(h.hasOwnProperty(l)?p!=null&&l==="onScroll"&&Ce("scroll",t):p!=null&&ve(t,l,p,i))}switch(r){case"input":dn(t),ro(t,n,!1);break;case"textarea":dn(t),lo(t);break;case"option":n.value!=null&&t.setAttribute("value",""+ye(n.value));break;case"select":t.multiple=!!n.multiple,l=n.value,l!=null?Fs(t,!!n.multiple,l,!1):n.defaultValue!=null&&Fs(t,!!n.multiple,n.defaultValue,!0);break;default:typeof a.onClick=="function"&&(t.onclick=Pn)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Ke(s),null;case 6:if(t&&s.stateNode!=null)jd(t,s,t.memoizedProps,n);else{if(typeof n!="string"&&s.stateNode===null)throw Error(c(166));if(r=zs(Ir.current),zs(Rt.current),Gn(s)){if(n=s.stateNode,r=s.memoizedProps,n[Ft]=s,(l=n.nodeValue!==r)&&(t=pt,t!==null))switch(t.tag){case 3:Dn(n.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Dn(n.nodeValue,r,(t.mode&1)!==0)}l&&(s.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Ft]=s,s.stateNode=n}return Ke(s),null;case 13:if(ze(Le),n=s.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ee&&gt!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Sc(),Ks(),s.flags|=98560,l=!1;else if(l=Gn(s),n!==null&&n.dehydrated!==null){if(t===null){if(!l)throw Error(c(318));if(l=s.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[Ft]=s}else Ks(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ke(s),l=!1}else zt!==null&&(vi(zt),zt=null),l=!0;if(!l)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=r,s):(n=n!==null,n!==(t!==null&&t.memoizedState!==null)&&n&&(s.child.flags|=8192,(s.mode&1)!==0&&(t===null||(Le.current&1)!==0?Ge===0&&(Ge=3):ji())),s.updateQueue!==null&&(s.flags|=4),Ke(s),null);case 4:return tr(),oi(t,s),t===null&&Lr(s.stateNode.containerInfo),Ke(s),null;case 10:return Fl(s.type._context),Ke(s),null;case 17:return lt(s.type)&&Fn(),Ke(s),null;case 19:if(ze(Le),l=s.memoizedState,l===null)return Ke(s),null;if(n=(s.flags&128)!==0,i=l.rendering,i===null)if(n)Hr(l,!1);else{if(Ge!==0||t!==null&&(t.flags&128)!==0)for(t=s.child;t!==null;){if(i=Yn(t),i!==null){for(s.flags|=128,Hr(l,!1),n=i.updateQueue,n!==null&&(s.updateQueue=n,s.flags|=4),s.subtreeFlags=0,n=r,r=s.child;r!==null;)l=r,t=n,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=t,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,t=i.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return Se(Le,Le.current&1|2),s.child}t=t.sibling}l.tail!==null&&Fe()>ar&&(s.flags|=128,n=!0,Hr(l,!1),s.lanes=4194304)}else{if(!n)if(t=Yn(i),t!==null){if(s.flags|=128,n=!0,r=t.updateQueue,r!==null&&(s.updateQueue=r,s.flags|=4),Hr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!Ee)return Ke(s),null}else 2*Fe()-l.renderingStartTime>ar&&r!==1073741824&&(s.flags|=128,n=!0,Hr(l,!1),s.lanes=4194304);l.isBackwards?(i.sibling=s.child,s.child=i):(r=l.last,r!==null?r.sibling=i:s.child=i,l.last=i)}return l.tail!==null?(s=l.tail,l.rendering=s,l.tail=s.sibling,l.renderingStartTime=Fe(),s.sibling=null,r=Le.current,Se(Le,n?r&1|2:r&1),s):(Ke(s),null);case 22:case 23:return yi(),n=s.memoizedState!==null,t!==null&&t.memoizedState!==null!==n&&(s.flags|=8192),n&&(s.mode&1)!==0?(ft&1073741824)!==0&&(Ke(s),s.subtreeFlags&6&&(s.flags|=8192)):Ke(s),null;case 24:return null;case 25:return null}throw Error(c(156,s.tag))}function jh(t,s){switch(El(s),s.tag){case 1:return lt(s.type)&&Fn(),t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 3:return tr(),ze(at),ze(qe),Vl(),t=s.flags,(t&65536)!==0&&(t&128)===0?(s.flags=t&-65537|128,s):null;case 5:return Gl(s),null;case 13:if(ze(Le),t=s.memoizedState,t!==null&&t.dehydrated!==null){if(s.alternate===null)throw Error(c(340));Ks()}return t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 19:return ze(Le),null;case 4:return tr(),null;case 10:return Fl(s.type._context),null;case 22:case 23:return yi(),null;case 24:return null;default:return null}}var sa=!1,Xe=!1,Nh=typeof WeakSet=="function"?WeakSet:Set,V=null;function rr(t,s){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Te(t,s,n)}else r.current=null}function ci(t,s,r){try{r()}catch(n){Te(t,s,n)}}var Nd=!1;function kh(t,s){if(yl=jn,t=tc(),hl(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var a=n.anchorOffset,l=n.focusNode;n=n.focusOffset;try{r.nodeType,l.nodeType}catch{r=null;break e}var i=0,x=-1,p=-1,S=0,D=0,T=t,E=null;t:for(;;){for(var O;T!==r||a!==0&&T.nodeType!==3||(x=i+a),T!==l||n!==0&&T.nodeType!==3||(p=i+n),T.nodeType===3&&(i+=T.nodeValue.length),(O=T.firstChild)!==null;)E=T,T=O;for(;;){if(T===t)break t;if(E===r&&++S===a&&(x=i),E===l&&++D===n&&(p=i),(O=T.nextSibling)!==null)break;T=E,E=T.parentNode}T=O}r=x===-1||p===-1?null:{start:x,end:p}}else r=null}r=r||{start:0,end:0}}else r=null;for(jl={focusedElem:t,selectionRange:r},jn=!1,V=s;V!==null;)if(s=V,t=s.child,(s.subtreeFlags&1028)!==0&&t!==null)t.return=s,V=t;else for(;V!==null;){s=V;try{var U=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(U!==null){var Y=U.memoizedProps,Re=U.memoizedState,y=s.stateNode,g=y.getSnapshotBeforeUpdate(s.elementType===s.type?Y:Mt(s.type,Y),Re);y.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var N=s.stateNode.containerInfo;N.nodeType===1?N.textContent="":N.nodeType===9&&N.documentElement&&N.removeChild(N.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(A){Te(s,s.return,A)}if(t=s.sibling,t!==null){t.return=s.return,V=t;break}V=s.return}return U=Nd,Nd=!1,U}function Ur(t,s,r){var n=s.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&t)===t){var l=a.destroy;a.destroy=void 0,l!==void 0&&ci(s,r,l)}a=a.next}while(a!==n)}}function ra(t,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var r=s=s.next;do{if((r.tag&t)===t){var n=r.create;r.destroy=n()}r=r.next}while(r!==s)}}function di(t){var s=t.ref;if(s!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof s=="function"?s(t):s.current=t}}function kd(t){var s=t.alternate;s!==null&&(t.alternate=null,kd(s)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(s=t.stateNode,s!==null&&(delete s[Ft],delete s[Pr],delete s[Cl],delete s[lh],delete s[ih])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Sd(t){return t.tag===5||t.tag===3||t.tag===4}function Cd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Sd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ui(t,s,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,s?r.nodeType===8?r.parentNode.insertBefore(t,s):r.insertBefore(t,s):(r.nodeType===8?(s=r.parentNode,s.insertBefore(t,r)):(s=r,s.appendChild(t)),r=r._reactRootContainer,r!=null||s.onclick!==null||(s.onclick=Pn));else if(n!==4&&(t=t.child,t!==null))for(ui(t,s,r),t=t.sibling;t!==null;)ui(t,s,r),t=t.sibling}function xi(t,s,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,s?r.insertBefore(t,s):r.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for(xi(t,s,r),t=t.sibling;t!==null;)xi(t,s,r),t=t.sibling}var We=null,_t=!1;function us(t,s,r){for(r=r.child;r!==null;)zd(t,s,r),r=r.sibling}function zd(t,s,r){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(gn,r)}catch{}switch(r.tag){case 5:Xe||rr(r,s);case 6:var n=We,a=_t;We=null,us(t,s,r),We=n,_t=a,We!==null&&(_t?(t=We,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):We.removeChild(r.stateNode));break;case 18:We!==null&&(_t?(t=We,r=r.stateNode,t.nodeType===8?Sl(t.parentNode,r):t.nodeType===1&&Sl(t,r),Nr(t)):Sl(We,r.stateNode));break;case 4:n=We,a=_t,We=r.stateNode.containerInfo,_t=!0,us(t,s,r),We=n,_t=a;break;case 0:case 11:case 14:case 15:if(!Xe&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){a=n=n.next;do{var l=a,i=l.destroy;l=l.tag,i!==void 0&&((l&2)!==0||(l&4)!==0)&&ci(r,s,i),a=a.next}while(a!==n)}us(t,s,r);break;case 1:if(!Xe&&(rr(r,s),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(x){Te(r,s,x)}us(t,s,r);break;case 21:us(t,s,r);break;case 22:r.mode&1?(Xe=(n=Xe)||r.memoizedState!==null,us(t,s,r),Xe=n):us(t,s,r);break;default:us(t,s,r)}}function Md(t){var s=t.updateQueue;if(s!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new Nh),s.forEach(function(n){var a=Dh.bind(null,t,n);r.has(n)||(r.add(n),n.then(a,a))})}}function Et(t,s){var r=s.deletions;if(r!==null)for(var n=0;n<r.length;n++){var a=r[n];try{var l=t,i=s,x=i;e:for(;x!==null;){switch(x.tag){case 5:We=x.stateNode,_t=!1;break e;case 3:We=x.stateNode.containerInfo,_t=!0;break e;case 4:We=x.stateNode.containerInfo,_t=!0;break e}x=x.return}if(We===null)throw Error(c(160));zd(l,i,a),We=null,_t=!1;var p=a.alternate;p!==null&&(p.return=null),a.return=null}catch(S){Te(a,s,S)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)_d(s,t),s=s.sibling}function _d(t,s){var r=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Et(s,t),It(t),n&4){try{Ur(3,t,t.return),ra(3,t)}catch(Y){Te(t,t.return,Y)}try{Ur(5,t,t.return)}catch(Y){Te(t,t.return,Y)}}break;case 1:Et(s,t),It(t),n&512&&r!==null&&rr(r,r.return);break;case 5:if(Et(s,t),It(t),n&512&&r!==null&&rr(r,r.return),t.flags&32){var a=t.stateNode;try{xr(a,"")}catch(Y){Te(t,t.return,Y)}}if(n&4&&(a=t.stateNode,a!=null)){var l=t.memoizedProps,i=r!==null?r.memoizedProps:l,x=t.type,p=t.updateQueue;if(t.updateQueue=null,p!==null)try{x==="input"&&l.type==="radio"&&l.name!=null&&so(a,l),Va(x,i);var S=Va(x,l);for(i=0;i<p.length;i+=2){var D=p[i],T=p[i+1];D==="style"?uo(a,T):D==="dangerouslySetInnerHTML"?oo(a,T):D==="children"?xr(a,T):ve(a,D,T,S)}switch(x){case"input":Aa(a,l);break;case"textarea":ao(a,l);break;case"select":var E=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var O=l.value;O!=null?Fs(a,!!l.multiple,O,!1):E!==!!l.multiple&&(l.defaultValue!=null?Fs(a,!!l.multiple,l.defaultValue,!0):Fs(a,!!l.multiple,l.multiple?[]:"",!1))}a[Pr]=l}catch(Y){Te(t,t.return,Y)}}break;case 6:if(Et(s,t),It(t),n&4){if(t.stateNode===null)throw Error(c(162));a=t.stateNode,l=t.memoizedProps;try{a.nodeValue=l}catch(Y){Te(t,t.return,Y)}}break;case 3:if(Et(s,t),It(t),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Nr(s.containerInfo)}catch(Y){Te(t,t.return,Y)}break;case 4:Et(s,t),It(t);break;case 13:Et(s,t),It(t),a=t.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(pi=Fe())),n&4&&Md(t);break;case 22:if(D=r!==null&&r.memoizedState!==null,t.mode&1?(Xe=(S=Xe)||D,Et(s,t),Xe=S):Et(s,t),It(t),n&8192){if(S=t.memoizedState!==null,(t.stateNode.isHidden=S)&&!D&&(t.mode&1)!==0)for(V=t,D=t.child;D!==null;){for(T=V=D;V!==null;){switch(E=V,O=E.child,E.tag){case 0:case 11:case 14:case 15:Ur(4,E,E.return);break;case 1:rr(E,E.return);var U=E.stateNode;if(typeof U.componentWillUnmount=="function"){n=E,r=E.return;try{s=n,U.props=s.memoizedProps,U.state=s.memoizedState,U.componentWillUnmount()}catch(Y){Te(n,r,Y)}}break;case 5:rr(E,E.return);break;case 22:if(E.memoizedState!==null){Ld(T);continue}}O!==null?(O.return=E,V=O):Ld(T)}D=D.sibling}e:for(D=null,T=t;;){if(T.tag===5){if(D===null){D=T;try{a=T.stateNode,S?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(x=T.stateNode,p=T.memoizedProps.style,i=p!=null&&p.hasOwnProperty("display")?p.display:null,x.style.display=co("display",i))}catch(Y){Te(t,t.return,Y)}}}else if(T.tag===6){if(D===null)try{T.stateNode.nodeValue=S?"":T.memoizedProps}catch(Y){Te(t,t.return,Y)}}else if((T.tag!==22&&T.tag!==23||T.memoizedState===null||T===t)&&T.child!==null){T.child.return=T,T=T.child;continue}if(T===t)break e;for(;T.sibling===null;){if(T.return===null||T.return===t)break e;D===T&&(D=null),T=T.return}D===T&&(D=null),T.sibling.return=T.return,T=T.sibling}}break;case 19:Et(s,t),It(t),n&4&&Md(t);break;case 21:break;default:Et(s,t),It(t)}}function It(t){var s=t.flags;if(s&2){try{e:{for(var r=t.return;r!==null;){if(Sd(r)){var n=r;break e}r=r.return}throw Error(c(160))}switch(n.tag){case 5:var a=n.stateNode;n.flags&32&&(xr(a,""),n.flags&=-33);var l=Cd(t);xi(t,l,a);break;case 3:case 4:var i=n.stateNode.containerInfo,x=Cd(t);ui(t,x,i);break;default:throw Error(c(161))}}catch(p){Te(t,t.return,p)}t.flags&=-3}s&4096&&(t.flags&=-4097)}function Sh(t,s,r){V=t,Ed(t)}function Ed(t,s,r){for(var n=(t.mode&1)!==0;V!==null;){var a=V,l=a.child;if(a.tag===22&&n){var i=a.memoizedState!==null||sa;if(!i){var x=a.alternate,p=x!==null&&x.memoizedState!==null||Xe;x=sa;var S=Xe;if(sa=i,(Xe=p)&&!S)for(V=a;V!==null;)i=V,p=i.child,i.tag===22&&i.memoizedState!==null?Dd(a):p!==null?(p.return=i,V=p):Dd(a);for(;l!==null;)V=l,Ed(l),l=l.sibling;V=a,sa=x,Xe=S}$d(t)}else(a.subtreeFlags&8772)!==0&&l!==null?(l.return=a,V=l):$d(t)}}function $d(t){for(;V!==null;){var s=V;if((s.flags&8772)!==0){var r=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Xe||ra(5,s);break;case 1:var n=s.stateNode;if(s.flags&4&&!Xe)if(r===null)n.componentDidMount();else{var a=s.elementType===s.type?r.memoizedProps:Mt(s.type,r.memoizedProps);n.componentDidUpdate(a,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var l=s.updateQueue;l!==null&&Lc(s,l,n);break;case 3:var i=s.updateQueue;if(i!==null){if(r=null,s.child!==null)switch(s.child.tag){case 5:r=s.child.stateNode;break;case 1:r=s.child.stateNode}Lc(s,i,r)}break;case 5:var x=s.stateNode;if(r===null&&s.flags&4){r=x;var p=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":p.autoFocus&&r.focus();break;case"img":p.src&&(r.src=p.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var S=s.alternate;if(S!==null){var D=S.memoizedState;if(D!==null){var T=D.dehydrated;T!==null&&Nr(T)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}Xe||s.flags&512&&di(s)}catch(E){Te(s,s.return,E)}}if(s===t){V=null;break}if(r=s.sibling,r!==null){r.return=s.return,V=r;break}V=s.return}}function Ld(t){for(;V!==null;){var s=V;if(s===t){V=null;break}var r=s.sibling;if(r!==null){r.return=s.return,V=r;break}V=s.return}}function Dd(t){for(;V!==null;){var s=V;try{switch(s.tag){case 0:case 11:case 15:var r=s.return;try{ra(4,s)}catch(p){Te(s,r,p)}break;case 1:var n=s.stateNode;if(typeof n.componentDidMount=="function"){var a=s.return;try{n.componentDidMount()}catch(p){Te(s,a,p)}}var l=s.return;try{di(s)}catch(p){Te(s,l,p)}break;case 5:var i=s.return;try{di(s)}catch(p){Te(s,i,p)}}}catch(p){Te(s,s.return,p)}if(s===t){V=null;break}var x=s.sibling;if(x!==null){x.return=s.return,V=x;break}V=s.return}}var Ch=Math.ceil,na=be.ReactCurrentDispatcher,hi=be.ReactCurrentOwner,jt=be.ReactCurrentBatchConfig,me=0,Ve=null,Ae=null,Ye=0,ft=0,nr=ls(0),Ge=0,Wr=null,_s=0,aa=0,mi=0,Yr=null,ot=null,pi=0,ar=1/0,qt=null,la=!1,gi=null,xs=null,ia=!1,hs=null,oa=0,Qr=0,fi=null,ca=-1,da=0;function tt(){return(me&6)!==0?Fe():ca!==-1?ca:ca=Fe()}function ms(t){return(t.mode&1)===0?1:(me&2)!==0&&Ye!==0?Ye&-Ye:ch.transition!==null?(da===0&&(da=Co()),da):(t=je,t!==0||(t=window.event,t=t===void 0?16:To(t.type)),t)}function $t(t,s,r,n){if(50<Qr)throw Qr=0,fi=null,Error(c(185));br(t,r,n),((me&2)===0||t!==Ve)&&(t===Ve&&((me&2)===0&&(aa|=r),Ge===4&&ps(t,Ye)),ct(t,n),r===1&&me===0&&(s.mode&1)===0&&(ar=Fe()+500,An&&os()))}function ct(t,s){var r=t.callbackNode;cx(t,s);var n=vn(t,t===Ve?Ye:0);if(n===0)r!==null&&No(r),t.callbackNode=null,t.callbackPriority=0;else if(s=n&-n,t.callbackPriority!==s){if(r!=null&&No(r),s===1)t.tag===0?oh(Td.bind(null,t)):wc(Td.bind(null,t)),nh(function(){(me&6)===0&&os()}),r=null;else{switch(zo(n)){case 1:r=Ja;break;case 4:r=ko;break;case 16:r=pn;break;case 536870912:r=So;break;default:r=pn}r=Vd(r,Pd.bind(null,t))}t.callbackPriority=s,t.callbackNode=r}}function Pd(t,s){if(ca=-1,da=0,(me&6)!==0)throw Error(c(327));var r=t.callbackNode;if(lr()&&t.callbackNode!==r)return null;var n=vn(t,t===Ve?Ye:0);if(n===0)return null;if((n&30)!==0||(n&t.expiredLanes)!==0||s)s=ua(t,n);else{s=n;var a=me;me|=2;var l=Rd();(Ve!==t||Ye!==s)&&(qt=null,ar=Fe()+500,$s(t,s));do try{_h();break}catch(x){Fd(t,x)}while(!0);Tl(),na.current=l,me=a,Ae!==null?s=0:(Ve=null,Ye=0,s=Ge)}if(s!==0){if(s===2&&(a=Ka(t),a!==0&&(n=a,s=bi(t,a))),s===1)throw r=Wr,$s(t,0),ps(t,n),ct(t,Fe()),r;if(s===6)ps(t,n);else{if(a=t.current.alternate,(n&30)===0&&!zh(a)&&(s=ua(t,n),s===2&&(l=Ka(t),l!==0&&(n=l,s=bi(t,l))),s===1))throw r=Wr,$s(t,0),ps(t,n),ct(t,Fe()),r;switch(t.finishedWork=a,t.finishedLanes=n,s){case 0:case 1:throw Error(c(345));case 2:Ls(t,ot,qt);break;case 3:if(ps(t,n),(n&130023424)===n&&(s=pi+500-Fe(),10<s)){if(vn(t,0)!==0)break;if(a=t.suspendedLanes,(a&n)!==n){tt(),t.pingedLanes|=t.suspendedLanes&a;break}t.timeoutHandle=kl(Ls.bind(null,t,ot,qt),s);break}Ls(t,ot,qt);break;case 4:if(ps(t,n),(n&4194240)===n)break;for(s=t.eventTimes,a=-1;0<n;){var i=31-St(n);l=1<<i,i=s[i],i>a&&(a=i),n&=~l}if(n=a,n=Fe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Ch(n/1960))-n,10<n){t.timeoutHandle=kl(Ls.bind(null,t,ot,qt),n);break}Ls(t,ot,qt);break;case 5:Ls(t,ot,qt);break;default:throw Error(c(329))}}}return ct(t,Fe()),t.callbackNode===r?Pd.bind(null,t):null}function bi(t,s){var r=Yr;return t.current.memoizedState.isDehydrated&&($s(t,s).flags|=256),t=ua(t,s),t!==2&&(s=ot,ot=r,s!==null&&vi(s)),t}function vi(t){ot===null?ot=t:ot.push.apply(ot,t)}function zh(t){for(var s=t;;){if(s.flags&16384){var r=s.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var a=r[n],l=a.getSnapshot;a=a.value;try{if(!Ct(l(),a))return!1}catch{return!1}}}if(r=s.child,s.subtreeFlags&16384&&r!==null)r.return=s,s=r;else{if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function ps(t,s){for(s&=~mi,s&=~aa,t.suspendedLanes|=s,t.pingedLanes&=~s,t=t.expirationTimes;0<s;){var r=31-St(s),n=1<<r;t[r]=-1,s&=~n}}function Td(t){if((me&6)!==0)throw Error(c(327));lr();var s=vn(t,0);if((s&1)===0)return ct(t,Fe()),null;var r=ua(t,s);if(t.tag!==0&&r===2){var n=Ka(t);n!==0&&(s=n,r=bi(t,n))}if(r===1)throw r=Wr,$s(t,0),ps(t,s),ct(t,Fe()),r;if(r===6)throw Error(c(345));return t.finishedWork=t.current.alternate,t.finishedLanes=s,Ls(t,ot,qt),ct(t,Fe()),null}function wi(t,s){var r=me;me|=1;try{return t(s)}finally{me=r,me===0&&(ar=Fe()+500,An&&os())}}function Es(t){hs!==null&&hs.tag===0&&(me&6)===0&&lr();var s=me;me|=1;var r=jt.transition,n=je;try{if(jt.transition=null,je=1,t)return t()}finally{je=n,jt.transition=r,me=s,(me&6)===0&&os()}}function yi(){ft=nr.current,ze(nr)}function $s(t,s){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,rh(r)),Ae!==null)for(r=Ae.return;r!==null;){var n=r;switch(El(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Fn();break;case 3:tr(),ze(at),ze(qe),Vl();break;case 5:Gl(n);break;case 4:tr();break;case 13:ze(Le);break;case 19:ze(Le);break;case 10:Fl(n.type._context);break;case 22:case 23:yi()}r=r.return}if(Ve=t,Ae=t=gs(t.current,null),Ye=ft=s,Ge=0,Wr=null,mi=aa=_s=0,ot=Yr=null,Cs!==null){for(s=0;s<Cs.length;s++)if(r=Cs[s],n=r.interleaved,n!==null){r.interleaved=null;var a=n.next,l=r.pending;if(l!==null){var i=l.next;l.next=a,n.next=i}r.pending=n}Cs=null}return t}function Fd(t,s){do{var r=Ae;try{if(Tl(),Qn.current=Xn,qn){for(var n=De.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}qn=!1}if(Ms=0,Be=Oe=De=null,Or=!1,Gr=0,hi.current=null,r===null||r.return===null){Ge=1,Wr=s,Ae=null;break}e:{var l=t,i=r.return,x=r,p=s;if(s=Ye,x.flags|=32768,p!==null&&typeof p=="object"&&typeof p.then=="function"){var S=p,D=x,T=D.tag;if((D.mode&1)===0&&(T===0||T===11||T===15)){var E=D.alternate;E?(D.updateQueue=E.updateQueue,D.memoizedState=E.memoizedState,D.lanes=E.lanes):(D.updateQueue=null,D.memoizedState=null)}var O=id(i);if(O!==null){O.flags&=-257,od(O,i,x,l,s),O.mode&1&&ld(l,S,s),s=O,p=S;var U=s.updateQueue;if(U===null){var Y=new Set;Y.add(p),s.updateQueue=Y}else U.add(p);break e}else{if((s&1)===0){ld(l,S,s),ji();break e}p=Error(c(426))}}else if(Ee&&x.mode&1){var Re=id(i);if(Re!==null){(Re.flags&65536)===0&&(Re.flags|=256),od(Re,i,x,l,s),Dl(sr(p,x));break e}}l=p=sr(p,x),Ge!==4&&(Ge=2),Yr===null?Yr=[l]:Yr.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,s&=-s,l.lanes|=s;var y=nd(l,p,s);$c(l,y);break e;case 1:x=p;var g=l.type,N=l.stateNode;if((l.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||N!==null&&typeof N.componentDidCatch=="function"&&(xs===null||!xs.has(N)))){l.flags|=65536,s&=-s,l.lanes|=s;var A=ad(l,x,s);$c(l,A);break e}}l=l.return}while(l!==null)}Id(r)}catch(q){s=q,Ae===r&&r!==null&&(Ae=r=r.return);continue}break}while(!0)}function Rd(){var t=na.current;return na.current=Xn,t===null?Xn:t}function ji(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),Ve===null||(_s&268435455)===0&&(aa&268435455)===0||ps(Ve,Ye)}function ua(t,s){var r=me;me|=2;var n=Rd();(Ve!==t||Ye!==s)&&(qt=null,$s(t,s));do try{Mh();break}catch(a){Fd(t,a)}while(!0);if(Tl(),me=r,na.current=n,Ae!==null)throw Error(c(261));return Ve=null,Ye=0,Ge}function Mh(){for(;Ae!==null;)Ad(Ae)}function _h(){for(;Ae!==null&&!ex();)Ad(Ae)}function Ad(t){var s=Bd(t.alternate,t,ft);t.memoizedProps=t.pendingProps,s===null?Id(t):Ae=s,hi.current=null}function Id(t){var s=t;do{var r=s.alternate;if(t=s.return,(s.flags&32768)===0){if(r=yh(r,s,ft),r!==null){Ae=r;return}}else{if(r=jh(r,s),r!==null){r.flags&=32767,Ae=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ge=6,Ae=null;return}}if(s=s.sibling,s!==null){Ae=s;return}Ae=s=t}while(s!==null);Ge===0&&(Ge=5)}function Ls(t,s,r){var n=je,a=jt.transition;try{jt.transition=null,je=1,Eh(t,s,r,n)}finally{jt.transition=a,je=n}return null}function Eh(t,s,r,n){do lr();while(hs!==null);if((me&6)!==0)throw Error(c(327));r=t.finishedWork;var a=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(c(177));t.callbackNode=null,t.callbackPriority=0;var l=r.lanes|r.childLanes;if(dx(t,l),t===Ve&&(Ae=Ve=null,Ye=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||ia||(ia=!0,Vd(pn,function(){return lr(),null})),l=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||l){l=jt.transition,jt.transition=null;var i=je;je=1;var x=me;me|=4,hi.current=null,kh(t,r),_d(r,t),Jx(jl),jn=!!yl,jl=yl=null,t.current=r,Sh(r),tx(),me=x,je=i,jt.transition=l}else t.current=r;if(ia&&(ia=!1,hs=t,oa=a),l=t.pendingLanes,l===0&&(xs=null),nx(r.stateNode),ct(t,Fe()),s!==null)for(n=t.onRecoverableError,r=0;r<s.length;r++)a=s[r],n(a.value,{componentStack:a.stack,digest:a.digest});if(la)throw la=!1,t=gi,gi=null,t;return(oa&1)!==0&&t.tag!==0&&lr(),l=t.pendingLanes,(l&1)!==0?t===fi?Qr++:(Qr=0,fi=t):Qr=0,os(),null}function lr(){if(hs!==null){var t=zo(oa),s=jt.transition,r=je;try{if(jt.transition=null,je=16>t?16:t,hs===null)var n=!1;else{if(t=hs,hs=null,oa=0,(me&6)!==0)throw Error(c(331));var a=me;for(me|=4,V=t.current;V!==null;){var l=V,i=l.child;if((V.flags&16)!==0){var x=l.deletions;if(x!==null){for(var p=0;p<x.length;p++){var S=x[p];for(V=S;V!==null;){var D=V;switch(D.tag){case 0:case 11:case 15:Ur(8,D,l)}var T=D.child;if(T!==null)T.return=D,V=T;else for(;V!==null;){D=V;var E=D.sibling,O=D.return;if(kd(D),D===S){V=null;break}if(E!==null){E.return=O,V=E;break}V=O}}}var U=l.alternate;if(U!==null){var Y=U.child;if(Y!==null){U.child=null;do{var Re=Y.sibling;Y.sibling=null,Y=Re}while(Y!==null)}}V=l}}if((l.subtreeFlags&2064)!==0&&i!==null)i.return=l,V=i;else e:for(;V!==null;){if(l=V,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:Ur(9,l,l.return)}var y=l.sibling;if(y!==null){y.return=l.return,V=y;break e}V=l.return}}var g=t.current;for(V=g;V!==null;){i=V;var N=i.child;if((i.subtreeFlags&2064)!==0&&N!==null)N.return=i,V=N;else e:for(i=g;V!==null;){if(x=V,(x.flags&2048)!==0)try{switch(x.tag){case 0:case 11:case 15:ra(9,x)}}catch(q){Te(x,x.return,q)}if(x===i){V=null;break e}var A=x.sibling;if(A!==null){A.return=x.return,V=A;break e}V=x.return}}if(me=a,os(),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(gn,t)}catch{}n=!0}return n}finally{je=r,jt.transition=s}}return!1}function Od(t,s,r){s=sr(r,s),s=nd(t,s,1),t=ds(t,s,1),s=tt(),t!==null&&(br(t,1,s),ct(t,s))}function Te(t,s,r){if(t.tag===3)Od(t,t,r);else for(;s!==null;){if(s.tag===3){Od(s,t,r);break}else if(s.tag===1){var n=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(xs===null||!xs.has(n))){t=sr(r,t),t=ad(s,t,1),s=ds(s,t,1),t=tt(),s!==null&&(br(s,1,t),ct(s,t));break}}s=s.return}}function $h(t,s,r){var n=t.pingCache;n!==null&&n.delete(s),s=tt(),t.pingedLanes|=t.suspendedLanes&r,Ve===t&&(Ye&r)===r&&(Ge===4||Ge===3&&(Ye&130023424)===Ye&&500>Fe()-pi?$s(t,0):mi|=r),ct(t,s)}function Gd(t,s){s===0&&((t.mode&1)===0?s=1:(s=bn,bn<<=1,(bn&130023424)===0&&(bn=4194304)));var r=tt();t=Wt(t,s),t!==null&&(br(t,s,r),ct(t,r))}function Lh(t){var s=t.memoizedState,r=0;s!==null&&(r=s.retryLane),Gd(t,r)}function Dh(t,s){var r=0;switch(t.tag){case 13:var n=t.stateNode,a=t.memoizedState;a!==null&&(r=a.retryLane);break;case 19:n=t.stateNode;break;default:throw Error(c(314))}n!==null&&n.delete(s),Gd(t,r)}var Bd;Bd=function(t,s,r){if(t!==null)if(t.memoizedProps!==s.pendingProps||at.current)it=!0;else{if((t.lanes&r)===0&&(s.flags&128)===0)return it=!1,wh(t,s,r);it=(t.flags&131072)!==0}else it=!1,Ee&&(s.flags&1048576)!==0&&yc(s,On,s.index);switch(s.lanes=0,s.tag){case 2:var n=s.type;ta(t,s),t=s.pendingProps;var a=Qs(s,qe.current);er(s,r),a=Wl(null,s,n,t,a,r);var l=Yl();return s.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,lt(n)?(l=!0,Rn(s)):l=!1,s.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Il(s),a.updater=Zn,s.stateNode=a,a._reactInternals=s,Zl(s,n,t,r),s=ri(null,s,n,!0,l,r)):(s.tag=0,Ee&&l&&_l(s),et(null,s,a,r),s=s.child),s;case 16:n=s.elementType;e:{switch(ta(t,s),t=s.pendingProps,a=n._init,n=a(n._payload),s.type=n,a=s.tag=Th(n),t=Mt(n,t),a){case 0:s=si(null,s,n,t,r);break e;case 1:s=md(null,s,n,t,r);break e;case 11:s=cd(null,s,n,t,r);break e;case 14:s=dd(null,s,n,Mt(n.type,t),r);break e}throw Error(c(306,n,""))}return s;case 0:return n=s.type,a=s.pendingProps,a=s.elementType===n?a:Mt(n,a),si(t,s,n,a,r);case 1:return n=s.type,a=s.pendingProps,a=s.elementType===n?a:Mt(n,a),md(t,s,n,a,r);case 3:e:{if(pd(s),t===null)throw Error(c(387));n=s.pendingProps,l=s.memoizedState,a=l.element,Ec(t,s),Wn(s,n,null,r);var i=s.memoizedState;if(n=i.element,l.isDehydrated)if(l={element:n,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},s.updateQueue.baseState=l,s.memoizedState=l,s.flags&256){a=sr(Error(c(423)),s),s=gd(t,s,n,r,a);break e}else if(n!==a){a=sr(Error(c(424)),s),s=gd(t,s,n,r,a);break e}else for(gt=as(s.stateNode.containerInfo.firstChild),pt=s,Ee=!0,zt=null,r=Mc(s,null,n,r),s.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Ks(),n===a){s=Qt(t,s,r);break e}et(t,s,n,r)}s=s.child}return s;case 5:return Dc(s),t===null&&Ll(s),n=s.type,a=s.pendingProps,l=t!==null?t.memoizedProps:null,i=a.children,Nl(n,a)?i=null:l!==null&&Nl(n,l)&&(s.flags|=32),hd(t,s),et(t,s,i,r),s.child;case 6:return t===null&&Ll(s),null;case 13:return fd(t,s,r);case 4:return Ol(s,s.stateNode.containerInfo),n=s.pendingProps,t===null?s.child=Xs(s,null,n,r):et(t,s,n,r),s.child;case 11:return n=s.type,a=s.pendingProps,a=s.elementType===n?a:Mt(n,a),cd(t,s,n,a,r);case 7:return et(t,s,s.pendingProps,r),s.child;case 8:return et(t,s,s.pendingProps.children,r),s.child;case 12:return et(t,s,s.pendingProps.children,r),s.child;case 10:e:{if(n=s.type._context,a=s.pendingProps,l=s.memoizedProps,i=a.value,Se(Vn,n._currentValue),n._currentValue=i,l!==null)if(Ct(l.value,i)){if(l.children===a.children&&!at.current){s=Qt(t,s,r);break e}}else for(l=s.child,l!==null&&(l.return=s);l!==null;){var x=l.dependencies;if(x!==null){i=l.child;for(var p=x.firstContext;p!==null;){if(p.context===n){if(l.tag===1){p=Yt(-1,r&-r),p.tag=2;var S=l.updateQueue;if(S!==null){S=S.shared;var D=S.pending;D===null?p.next=p:(p.next=D.next,D.next=p),S.pending=p}}l.lanes|=r,p=l.alternate,p!==null&&(p.lanes|=r),Rl(l.return,r,s),x.lanes|=r;break}p=p.next}}else if(l.tag===10)i=l.type===s.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(c(341));i.lanes|=r,x=i.alternate,x!==null&&(x.lanes|=r),Rl(i,r,s),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===s){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}et(t,s,a.children,r),s=s.child}return s;case 9:return a=s.type,n=s.pendingProps.children,er(s,r),a=wt(a),n=n(a),s.flags|=1,et(t,s,n,r),s.child;case 14:return n=s.type,a=Mt(n,s.pendingProps),a=Mt(n.type,a),dd(t,s,n,a,r);case 15:return ud(t,s,s.type,s.pendingProps,r);case 17:return n=s.type,a=s.pendingProps,a=s.elementType===n?a:Mt(n,a),ta(t,s),s.tag=1,lt(n)?(t=!0,Rn(s)):t=!1,er(s,r),sd(s,n,a),Zl(s,n,a,r),ri(null,s,n,!0,t,r);case 19:return vd(t,s,r);case 22:return xd(t,s,r)}throw Error(c(156,s.tag))};function Vd(t,s){return jo(t,s)}function Ph(t,s,r,n){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(t,s,r,n){return new Ph(t,s,r,n)}function Ni(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Th(t){if(typeof t=="function")return Ni(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Pe)return 11;if(t===nt)return 14}return 2}function gs(t,s){var r=t.alternate;return r===null?(r=Nt(t.tag,s,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=s,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,s=t.dependencies,r.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function xa(t,s,r,n,a,l){var i=2;if(n=t,typeof t=="function")Ni(t)&&(i=1);else if(typeof t=="string")i=5;else e:switch(t){case ie:return Ds(r.children,a,l,s);case re:i=8,a|=8;break;case we:return t=Nt(12,r,s,a|2),t.elementType=we,t.lanes=l,t;case $e:return t=Nt(13,r,s,a),t.elementType=$e,t.lanes=l,t;case Ue:return t=Nt(19,r,s,a),t.elementType=Ue,t.lanes=l,t;case Q:return ha(r,a,l,s);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ne:i=10;break e;case K:i=9;break e;case Pe:i=11;break e;case nt:i=14;break e;case P:i=16,n=null;break e}throw Error(c(130,t==null?t:typeof t,""))}return s=Nt(i,r,s,a),s.elementType=t,s.type=n,s.lanes=l,s}function Ds(t,s,r,n){return t=Nt(7,t,n,s),t.lanes=r,t}function ha(t,s,r,n){return t=Nt(22,t,n,s),t.elementType=Q,t.lanes=r,t.stateNode={isHidden:!1},t}function ki(t,s,r){return t=Nt(6,t,null,s),t.lanes=r,t}function Si(t,s,r){return s=Nt(4,t.children!==null?t.children:[],t.key,s),s.lanes=r,s.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},s}function Fh(t,s,r,n,a){this.tag=s,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xa(0),this.expirationTimes=Xa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xa(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ci(t,s,r,n,a,l,i,x,p){return t=new Fh(t,s,r,x,p),s===1?(s=1,l===!0&&(s|=8)):s=0,l=Nt(3,null,null,s),t.current=l,l.stateNode=t,l.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Il(l),t}function Rh(t,s,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ne,key:n==null?null:""+n,children:t,containerInfo:s,implementation:r}}function Hd(t){if(!t)return is;t=t._reactInternals;e:{if(ys(t)!==t||t.tag!==1)throw Error(c(170));var s=t;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(lt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(c(171))}if(t.tag===1){var r=t.type;if(lt(r))return bc(t,r,s)}return s}function Ud(t,s,r,n,a,l,i,x,p){return t=Ci(r,n,!0,t,a,l,i,x,p),t.context=Hd(null),r=t.current,n=tt(),a=ms(r),l=Yt(n,a),l.callback=s??null,ds(r,l,a),t.current.lanes=a,br(t,a,n),ct(t,n),t}function ma(t,s,r,n){var a=s.current,l=tt(),i=ms(a);return r=Hd(r),s.context===null?s.context=r:s.pendingContext=r,s=Yt(l,i),s.payload={element:t},n=n===void 0?null:n,n!==null&&(s.callback=n),t=ds(a,s,i),t!==null&&($t(t,a,i,l),Un(t,a,i)),i}function pa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Wd(t,s){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<s?r:s}}function zi(t,s){Wd(t,s),(t=t.alternate)&&Wd(t,s)}function Ah(){return null}var Yd=typeof reportError=="function"?reportError:function(t){console.error(t)};function Mi(t){this._internalRoot=t}ga.prototype.render=Mi.prototype.render=function(t){var s=this._internalRoot;if(s===null)throw Error(c(409));ma(t,s,null,null)},ga.prototype.unmount=Mi.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var s=t.containerInfo;Es(function(){ma(null,t,null,null)}),s[Bt]=null}};function ga(t){this._internalRoot=t}ga.prototype.unstable_scheduleHydration=function(t){if(t){var s=Eo();t={blockedOn:null,target:t,priority:s};for(var r=0;r<ss.length&&s!==0&&s<ss[r].priority;r++);ss.splice(r,0,t),r===0&&Do(t)}};function _i(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qd(){}function Ih(t,s,r,n,a){if(a){if(typeof n=="function"){var l=n;n=function(){var S=pa(i);l.call(S)}}var i=Ud(s,n,t,0,null,!1,!1,"",Qd);return t._reactRootContainer=i,t[Bt]=i.current,Lr(t.nodeType===8?t.parentNode:t),Es(),i}for(;a=t.lastChild;)t.removeChild(a);if(typeof n=="function"){var x=n;n=function(){var S=pa(p);x.call(S)}}var p=Ci(t,0,!1,null,null,!1,!1,"",Qd);return t._reactRootContainer=p,t[Bt]=p.current,Lr(t.nodeType===8?t.parentNode:t),Es(function(){ma(s,p,r,n)}),p}function ba(t,s,r,n,a){var l=r._reactRootContainer;if(l){var i=l;if(typeof a=="function"){var x=a;a=function(){var p=pa(i);x.call(p)}}ma(s,i,t,a)}else i=Ih(r,s,t,a,n);return pa(i)}Mo=function(t){switch(t.tag){case 3:var s=t.stateNode;if(s.current.memoizedState.isDehydrated){var r=fr(s.pendingLanes);r!==0&&(Za(s,r|1),ct(s,Fe()),(me&6)===0&&(ar=Fe()+500,os()))}break;case 13:Es(function(){var n=Wt(t,1);if(n!==null){var a=tt();$t(n,t,1,a)}}),zi(t,1)}},el=function(t){if(t.tag===13){var s=Wt(t,134217728);if(s!==null){var r=tt();$t(s,t,134217728,r)}zi(t,134217728)}},_o=function(t){if(t.tag===13){var s=ms(t),r=Wt(t,s);if(r!==null){var n=tt();$t(r,t,s,n)}zi(t,s)}},Eo=function(){return je},$o=function(t,s){var r=je;try{return je=t,s()}finally{je=r}},Wa=function(t,s,r){switch(s){case"input":if(Aa(t,r),s=r.name,r.type==="radio"&&s!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<r.length;s++){var n=r[s];if(n!==t&&n.form===t.form){var a=Tn(n);if(!a)throw Error(c(90));eo(n),Aa(n,a)}}}break;case"textarea":ao(t,r);break;case"select":s=r.value,s!=null&&Fs(t,!!r.multiple,s,!1)}},po=wi,go=Es;var Oh={usingClientEntryPoint:!1,Events:[Tr,Ws,Tn,ho,mo,wi]},qr={findFiberByHostInstance:js,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gh={bundleType:qr.bundleType,version:qr.version,rendererPackageName:qr.rendererPackageName,rendererConfig:qr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:be.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=wo(t),t===null?null:t.stateNode},findFiberByHostInstance:qr.findFiberByHostInstance||Ah,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var va=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!va.isDisabled&&va.supportsFiber)try{gn=va.inject(Gh),Tt=va}catch{}}return dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Oh,dt.createPortal=function(t,s){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_i(s))throw Error(c(200));return Rh(t,s,null,r)},dt.createRoot=function(t,s){if(!_i(t))throw Error(c(299));var r=!1,n="",a=Yd;return s!=null&&(s.unstable_strictMode===!0&&(r=!0),s.identifierPrefix!==void 0&&(n=s.identifierPrefix),s.onRecoverableError!==void 0&&(a=s.onRecoverableError)),s=Ci(t,1,!1,null,null,r,!1,n,a),t[Bt]=s.current,Lr(t.nodeType===8?t.parentNode:t),new Mi(s)},dt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var s=t._reactInternals;if(s===void 0)throw typeof t.render=="function"?Error(c(188)):(t=Object.keys(t).join(","),Error(c(268,t)));return t=wo(s),t=t===null?null:t.stateNode,t},dt.flushSync=function(t){return Es(t)},dt.hydrate=function(t,s,r){if(!fa(s))throw Error(c(200));return ba(null,t,s,!0,r)},dt.hydrateRoot=function(t,s,r){if(!_i(t))throw Error(c(405));var n=r!=null&&r.hydratedSources||null,a=!1,l="",i=Yd;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),s=Ud(s,null,t,1,r??null,a,!1,l,i),t[Bt]=s.current,Lr(t),n)for(t=0;t<n.length;t++)r=n[t],a=r._getVersion,a=a(r._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[r,a]:s.mutableSourceEagerHydrationData.push(r,a);return new ga(s)},dt.render=function(t,s,r){if(!fa(s))throw Error(c(200));return ba(null,t,s,!1,r)},dt.unmountComponentAtNode=function(t){if(!fa(t))throw Error(c(40));return t._reactRootContainer?(Es(function(){ba(null,null,t,!1,function(){t._reactRootContainer=null,t[Bt]=null})}),!0):!1},dt.unstable_batchedUpdates=wi,dt.unstable_renderSubtreeIntoContainer=function(t,s,r,n){if(!fa(r))throw Error(c(200));if(t==null||t._reactInternals===void 0)throw Error(c(38));return ba(t,s,r,!1,n)},dt.version="18.3.1-next-f1338f8080-20240426",dt}var su;function _u(){if(su)return Li.exports;su=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(d){console.error(d)}}return o(),Li.exports=Qh(),Li.exports}var ru;function qh(){if(ru)return wa;ru=1;var o=_u();return wa.createRoot=o.createRoot,wa.hydrateRoot=o.hydrateRoot,wa}var Jh=qh(),de=Yi();const I=Mu(de),Kr={bgLight:"rgba(255, 255, 255, 0.1)",bgMedium:"rgba(255, 255, 255, 0.2)",bgStrong:"rgba(255, 255, 255, 0.3)",border:"rgba(255, 255, 255, 0.18)",shadow:"rgba(0, 0, 0, 0.05)"},Xr={bgLight:"rgba(255, 255, 255, 0.05)",bgMedium:"rgba(255, 255, 255, 0.1)",bgStrong:"rgba(255, 255, 255, 0.15)",border:"rgba(255, 255, 255, 0.1)",shadow:"rgba(0, 0, 0, 0.3)"},nu={backdrop:"rgba(0, 0, 0, 0.4)",popover:"rgba(0, 0, 0, 0.85)"},kt={success:{base:"#43e97b",light:"rgba(67, 233, 123, 0.2)",border:"rgba(74, 222, 128, 0.3)"},warning:{base:"#fee140",light:"rgba(251, 191, 36, 0.2)",border:"rgba(251, 191, 36, 0.3)"},error:{base:"#f5576c",light:"rgba(239, 68, 68, 0.2)",border:"rgba(248, 113, 113, 0.3)"},info:{base:"#FDBA74",light:"rgba(253, 186, 116, 0.2)",border:"rgba(253, 186, 116, 0.3)"}},Ti={primary:"#34D399",secondary:"#3B82F6",accent:"#9CA3AF"},ir={primary:"rgba(255, 255, 255, 1)",secondary:"rgba(255, 255, 255, 0.9)",tertiary:"rgba(255, 255, 255, 0.7)",muted:"rgba(255, 255, 255, 0.6)",placeholder:"rgba(255, 255, 255, 0.5)",disabled:"rgba(255, 255, 255, 0.4)"},Zr={primary:"linear-gradient(135deg, #F97316 0%, #FB923C 100%)",secondary:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",accent:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",success:"linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",warning:"linear-gradient(135deg, #fa709a 0%, #fee140 100%)"},Jt={glass:"0 8px 32px 0 rgba(0, 0, 0, 0.1)",elevated:"0 16px 48px 0 rgba(0, 0, 0, 0.15)",overlay:"0 16px 48px 0 rgba(0, 0, 0, 0.3)",glow:"0 0 10px rgba(255, 255, 255, 0.2)",button:{primary:"0 8px 32px 0 rgba(103, 126, 234, 0.37)",secondary:"0 8px 32px 0 rgba(240, 147, 251, 0.37)",accent:"0 8px 32px 0 rgba(79, 172, 254, 0.37)",success:"0 8px 32px 0 rgba(67, 233, 123, 0.37)",danger:"0 8px 32px 0 rgba(245, 87, 108, 0.37)"}},en={sm:"0.5rem",md:"0.75rem",lg:"1rem",xl:"1.5rem",full:"9999px"},tn={blur:{sm:"8px",md:"12px",lg:"16px",xl:"24px"},saturate:"150%"},Lt={padding:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem",xl:"2rem","2xl":"3rem"},gap:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem",xl:"2rem"}},ae={fontFamily:{sans:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",display:"'Poppins', sans-serif",mono:"'JetBrains Mono', 'Courier New', monospace",geometric:"'Space Grotesk', sans-serif",serif:"'Playfair Display', Georgia, serif",modern:"'Montserrat', sans-serif",elegant:"'Raleway', sans-serif",rounded:"'Outfit', sans-serif"},fontSize:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"3.75rem","7xl":"4.5rem","8xl":"6rem","9xl":"8rem"},fontWeight:{light:300,normal:400,medium:500,semibold:600,bold:700,extrabold:800,black:900},lineHeight:{none:1,tight:1.25,snug:1.375,normal:1.5,relaxed:1.625,loose:2},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0",wide:"0.025em",wider:"0.05em",widest:"0.1em"}},Ps={duration:{fast:"150ms",normal:"200ms",smooth:"300ms",slow:"500ms"},easing:{default:"ease",out:"ease-out",inOut:"ease-in-out"}},Kh={"--brand-primary":Ti.primary,"--brand-secondary":Ti.secondary,"--brand-accent":Ti.accent,"--glass-bg-subtle":"rgba(255, 255, 255, 0.05)","--glass-bg-light":Kr.bgLight,"--glass-bg-medium":Kr.bgMedium,"--glass-bg-strong":Kr.bgStrong,"--glass-border":Kr.border,"--glass-border-strong":"rgba(255, 255, 255, 0.3)","--glass-shadow":Kr.shadow,"--glass-dark-bg-light":Xr.bgLight,"--glass-dark-bg-medium":Xr.bgMedium,"--glass-dark-bg-strong":Xr.bgStrong,"--glass-dark-border":Xr.border,"--glass-dark-shadow":Xr.shadow,"--overlay-backdrop":nu.backdrop,"--overlay-popover":nu.popover,"--status-success":kt.success.base,"--status-success-light":kt.success.light,"--status-success-border":kt.success.border,"--status-warning":kt.warning.base,"--status-warning-light":kt.warning.light,"--status-warning-border":kt.warning.border,"--status-error":kt.error.base,"--status-error-light":kt.error.light,"--status-error-border":kt.error.border,"--status-info":kt.info.base,"--status-info-light":kt.info.light,"--status-info-border":kt.info.border,"--text-primary":ir.primary,"--text-secondary":ir.secondary,"--text-tertiary":ir.tertiary,"--text-muted":ir.muted,"--text-placeholder":ir.placeholder,"--text-disabled":ir.disabled,"--gradient-primary":Zr.primary,"--gradient-secondary":Zr.secondary,"--gradient-accent":Zr.accent,"--gradient-success":Zr.success,"--gradient-warning":Zr.warning,"--shadow-glass":Jt.glass,"--shadow-elevated":Jt.elevated,"--shadow-overlay":Jt.overlay,"--shadow-glow":Jt.glow,"--shadow-btn-primary":Jt.button.primary,"--shadow-btn-secondary":Jt.button.secondary,"--shadow-btn-accent":Jt.button.accent,"--shadow-btn-success":Jt.button.success,"--shadow-btn-danger":Jt.button.danger,"--radius-sm":en.sm,"--radius-md":en.md,"--radius-lg":en.lg,"--radius-xl":en.xl,"--radius-full":en.full,"--blur-sm":tn.blur.sm,"--blur-md":tn.blur.md,"--blur-lg":tn.blur.lg,"--blur-xl":tn.blur.xl,"--backdrop-saturate":tn.saturate,"--space-xs":Lt.padding.xs,"--space-sm":Lt.padding.sm,"--space-md":Lt.padding.md,"--space-lg":Lt.padding.lg,"--space-xl":Lt.padding.xl,"--space-2xl":Lt.padding["2xl"],"--gap-xs":Lt.gap.xs,"--gap-sm":Lt.gap.sm,"--gap-md":Lt.gap.md,"--gap-lg":Lt.gap.lg,"--gap-xl":Lt.gap.xl,"--font-sans":ae.fontFamily.sans,"--font-display":ae.fontFamily.display,"--font-mono":ae.fontFamily.mono,"--font-geometric":ae.fontFamily.geometric,"--font-serif":ae.fontFamily.serif,"--font-modern":ae.fontFamily.modern,"--font-elegant":ae.fontFamily.elegant,"--font-rounded":ae.fontFamily.rounded,"--text-xs":ae.fontSize.xs,"--text-sm":ae.fontSize.sm,"--text-base":ae.fontSize.base,"--text-lg":ae.fontSize.lg,"--text-xl":ae.fontSize.xl,"--text-2xl":ae.fontSize["2xl"],"--text-3xl":ae.fontSize["3xl"],"--text-4xl":ae.fontSize["4xl"],"--text-5xl":ae.fontSize["5xl"],"--text-6xl":ae.fontSize["6xl"],"--text-7xl":ae.fontSize["7xl"],"--text-8xl":ae.fontSize["8xl"],"--text-9xl":ae.fontSize["9xl"],"--font-light":String(ae.fontWeight.light),"--font-normal":String(ae.fontWeight.normal),"--font-medium":String(ae.fontWeight.medium),"--font-semibold":String(ae.fontWeight.semibold),"--font-bold":String(ae.fontWeight.bold),"--font-extrabold":String(ae.fontWeight.extrabold),"--font-black":String(ae.fontWeight.black),"--leading-none":String(ae.lineHeight.none),"--leading-tight":String(ae.lineHeight.tight),"--leading-snug":String(ae.lineHeight.snug),"--leading-normal":String(ae.lineHeight.normal),"--leading-relaxed":String(ae.lineHeight.relaxed),"--leading-loose":String(ae.lineHeight.loose),"--tracking-tighter":ae.letterSpacing.tighter,"--tracking-tight":ae.letterSpacing.tight,"--tracking-normal":ae.letterSpacing.normal,"--tracking-wide":ae.letterSpacing.wide,"--tracking-wider":ae.letterSpacing.wider,"--tracking-widest":ae.letterSpacing.widest,"--duration-fast":Ps.duration.fast,"--duration-normal":Ps.duration.normal,"--duration-smooth":Ps.duration.smooth,"--duration-slow":Ps.duration.slow,"--ease-default":Ps.easing.default,"--ease-out":Ps.easing.out,"--ease-in-out":Ps.easing.inOut};function Xh({children:o}){return de.useEffect(()=>{const d=document.documentElement;for(const[c,u]of Object.entries(Kh))d.style.setProperty(c,u)}),e.jsx(e.Fragment,{children:o})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),em=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(d,c,u)=>u?u.toUpperCase():c.toLowerCase()),au=o=>{const d=em(o);return d.charAt(0).toUpperCase()+d.slice(1)},Eu=(...o)=>o.filter((d,c,u)=>!!d&&d.trim()!==""&&u.indexOf(d)===c).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var tm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=de.forwardRef(({color:o="currentColor",size:d=24,strokeWidth:c=2,absoluteStrokeWidth:u,className:h="",children:m,iconNode:f,...w},j)=>de.createElement("svg",{ref:j,...tm,width:d,height:d,stroke:o,strokeWidth:u?Number(c)*24/Number(d):c,className:Eu("lucide",h),...w},[...f.map(([b,_])=>de.createElement(b,_)),...Array.isArray(m)?m:[m]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=(o,d)=>{const c=de.forwardRef(({className:u,...h},m)=>de.createElement(sm,{ref:m,iconNode:d,className:Eu(`lucide-${Zh(au(o))}`,`lucide-${o}`,u),...h}));return c.displayName=au(o),c};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],nm=M("activity",rm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=[["path",{d:"M17 12H7",key:"16if0g"}],["path",{d:"M19 18H5",key:"18s9l3"}],["path",{d:"M21 6H3",key:"1jwq7v"}]],lm=M("align-center",am);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=[["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M17 18H3",key:"1amg6g"}],["path",{d:"M21 6H3",key:"1jwq7v"}]],om=M("align-left",im);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=[["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M21 18H7",key:"1ygte8"}],["path",{d:"M21 6H3",key:"1jwq7v"}]],dm=M("align-right",cm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],xm=M("arrow-down",um);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],Ai=M("arrow-up-down",hm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],pm=M("arrow-up",mm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]],fm=M("at-sign",gm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742",key:"178tsu"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05",key:"1hqiys"}]],vm=M("bell-off",bm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],dr=M("bell",wm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",key:"mg9rjx"}]],jm=M("bold",ym);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],km=M("bookmark",Nm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]],lu=M("boxes",Sm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],an=M("calendar",Cm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],Mm=M("camera",zm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Ii=M("chart-column",_m);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],vs=M("check",Em);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Ts=M("chevron-down",$m);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Ta=M("chevron-left",Lm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Gt=M("chevron-right",Dm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Tm=M("chevron-up",Pm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]],$u=M("chevrons-left",Fm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]],Lu=M("chevrons-right",Rm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Du=M("circle-alert",Am);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Qi=M("circle-check-big",Im);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Pu=M("circle-x",Om);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]],Tu=M("code",Gm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Oi=M("copy",Bm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],iu=M("credit-card",Vm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],ou=M("database",Hm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],Wm=M("dollar-sign",Um);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],ln=M("download",Ym);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],Fu=M("ellipsis-vertical",Qm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Jm=M("eye-off",qm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Xm=M("eye",Km);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Gi=M("file-text",Zm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],t0=M("frown",e0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],r0=M("globe",s0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],cu=M("grid-3x3",n0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],l0=M("grip-vertical",a0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],cn=M("heart",i0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}]],Ru=M("hexagon",o0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],Fa=M("house",c0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],u0=M("image",d0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],on=M("info",x0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]],m0=M("italic",h0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],Au=M("layout-dashboard",p0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],du=M("loader-circle",g0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],b0=M("lock",f0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],za=M("mail",v0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Ma=M("map-pin",w0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]],Bi=M("maximize-2",y0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"8",x2:"16",y1:"15",y2:"15",key:"1xb1d9"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],N0=M("meh",j0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],qi=M("menu",k0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],Vi=M("message-circle",S0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],Hi=M("message-square",C0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]],M0=M("mic-off",z0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]],E0=M("mic",_0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=[["path",{d:"M5 12h14",key:"1ays0h"}]],Iu=M("minus",$0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],ya=M("monitor",L0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],P0=M("moon",D0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]],uu=M("mouse-pointer-2",T0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],R0=M("music",F0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=[["polygon",{points:"12 2 19 21 12 17 5 21 12 2",key:"x8c0qg"}]],xu=M("navigation-2",A0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]],rn=M("palette",I0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],_a=M("panels-top-left",O0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=[["path",{d:"M13.234 20.252 21 12.3",key:"1cbrk9"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",key:"1pkts6"}]],hu=M("paperclip",G0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],V0=M("pause",B0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]],U0=M("phone-call",H0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],nn=M("phone",W0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89",key:"znwnzq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11",key:"c9qhm2"}]],Q0=M("pin-off",Y0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]],mu=M("pin",q0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],K0=M("play",J0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Ji=M("plus",X0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M17 12h.01",key:"1m0b6t"}],["path",{d:"M7 12h.01",key:"eqddd0"}]],pu=M("rectangle-ellipsis",Z0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],tp=M("rocket",ep);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],gu=M("rotate-ccw",sp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],xt=M("search",rp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Ea=M("send",np);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],ws=M("settings",ap);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],$a=M("share-2",lp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],op=M("shopping-cart",ip);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],fu=M("smartphone",cp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],Ui=M("smile",dp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],bu=M("sparkles",up);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],vu=M("square-check-big",xp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],Ki=M("square-pen",hp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Qe=M("star",mp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],gp=M("sun",pp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]],wu=M("table",fp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18",key:"1dp563"}]],yu=M("tablet",bp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=[["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",key:"m61m77"}]],wp=M("thumbs-down",vp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]],Ou=M("thumbs-up",yp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"8",cy:"12",r:"2",key:"1nvbw3"}]],ju=M("toggle-left",jp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Xi=M("trash-2",Np);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]],Sp=M("trending-down",kp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],zp=M("trending-up",Cp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Gu=M("triangle-alert",Mp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]],Wi=M("type",_p);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]],$p=M("underline",Ep);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],Dp=M("upload",Lp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],rt=M("user",Pp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],La=M("users",Tp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],Da=M("video",Fp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Bu=M("volume-2",Rp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Vu=M("volume-x",Ap);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Op=M("wifi-off",Ip);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],Bp=M("wifi",Gp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Pt=M("x",Vp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Hu=M("zap",Hp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],Nu=M("zoom-in",Up);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],ku=M("zoom-out",Wp);function Yp({items:o,activeSection:d,onNavigate:c,onCollapseChange:u}){const[h,m]=I.useState(!1),[f,w]=I.useState(null),[j,b]=I.useState({top:0,left:0}),[_,k]=I.useState(""),[z,$]=I.useState(!1),G=I.useRef(null),F=I.useMemo(()=>{if(!_.trim())return o;const J=_.toLowerCase().trim();return o.filter(ne=>ne.label.toLowerCase().includes(J)||ne.id.toLowerCase().includes(J))},[o,_]),B=J=>{var ne,ie;J.key==="Enter"&&F.length>0&&(c(F[0].id),k(""),(ne=G.current)==null||ne.blur()),J.key==="Escape"&&(k(""),(ie=G.current)==null||ie.blur())},Z=()=>{const J=!h;m(J),u==null||u(J)},he=(J,ne)=>{if(!h)return;const ie=J.currentTarget.getBoundingClientRect();b({top:ie.top+ie.height/2,left:ie.right+12}),w(ne)},ve=()=>{w(null)};I.useEffect(()=>(z?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[z]);const be=J=>{c(J),$(!1)};return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>$(!0),className:`
          fixed top-4 left-4 z-50
          md:hidden
          w-12 h-12 rounded-xl
          backdrop-blur-xl backdrop-saturate-150
          bg-gradient-to-br from-[var(--glass-bg-light)] to-[var(--glass-bg-subtle)]
          border border-[var(--glass-border)]
          flex items-center justify-center
          text-white/80 hover:text-white
          transition-all duration-200
          shadow-lg
        `,"aria-label":"Open navigation menu",children:e.jsx(qi,{size:24})}),z&&e.jsxs("div",{className:"fixed inset-0 z-[100] md:hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-black/60 backdrop-blur-sm",onClick:()=>$(!1)}),e.jsxs("div",{className:`
            absolute inset-0
            backdrop-blur-xl backdrop-saturate-150
            bg-gradient-to-b from-purple-900/95 via-blue-900/95 to-teal-900/95
            flex flex-col
            overflow-y-auto
            [&::-webkit-scrollbar]:hidden
            [-ms-overflow-style:none]
            [scrollbar-width:none]
          `,children:[e.jsx("div",{className:"flex justify-end p-4 flex-shrink-0",children:e.jsx("button",{onClick:()=>$(!1),className:`
                  w-12 h-12 rounded-xl
                  bg-white/10 border border-white/20
                  flex items-center justify-center
                  text-white/80 hover:text-white hover:bg-white/20
                  transition-all duration-200
                `,"aria-label":"Close navigation menu",children:e.jsx(Pt,{size:24})})}),e.jsxs("div",{className:"flex-1 px-6 pb-8 space-y-2",children:[e.jsx("p",{className:"text-white/40 text-xs uppercase tracking-wider mb-4 px-4",children:"Navigation"}),o.map(J=>{const ne=d===J.id;return e.jsxs("button",{onClick:()=>be(J.id),className:`
                      w-full flex items-center gap-4
                      px-4 py-4 rounded-xl
                      transition-all duration-200
                      ${ne?"bg-white/15 text-white border border-white/25":"text-white/70 hover:bg-white/10 hover:text-white border border-transparent"}
                    `,children:[e.jsx("span",{className:`flex-shrink-0 ${ne?"text-[var(--brand-primary)]":"text-white/60"}`,children:J.icon}),e.jsx("span",{className:"flex-1 text-left font-medium text-lg",children:J.label}),ne&&e.jsx(Gt,{size:18,className:"text-[var(--brand-primary)]"})]},J.id)})]}),e.jsx("div",{className:"flex-shrink-0 p-6 border-t border-white/10",children:e.jsxs("div",{className:"p-3 rounded-xl bg-white/5 text-center",children:[e.jsx("p",{className:"text-white/60 text-xs",children:"50+ Components"}),e.jsx("p",{className:"text-white text-sm font-semibold",children:"v1.0.0"})]})})]})]}),e.jsxs("div",{className:`
          hidden md:flex
          fixed left-0 top-0 bottom-0
          backdrop-blur-xl backdrop-saturate-150
          bg-gradient-to-b from-[var(--glass-bg-light)] to-[var(--glass-bg-subtle)]
          z-50
          flex-col
          h-screen
          overflow-y-auto
          transition-all duration-300
          ${h?"w-20":"w-80"}
          [&::-webkit-scrollbar]:hidden
          [-ms-overflow-style:none]
          [scrollbar-width:none]
        `,children:[!h&&e.jsxs("div",{className:"p-4 pb-2 flex-shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("div",{className:"relative flex-1",children:[e.jsx(xt,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-white/40"}),e.jsx("input",{ref:G,type:"text",value:_,onChange:J=>k(J.target.value),onKeyDown:B,placeholder:"Search components...",className:`
                    w-full pl-9 pr-8 py-2.5 rounded-xl
                    bg-white/8 border border-[var(--glass-border)]
                    text-white text-sm placeholder-white/35
                    backdrop-blur-md
                    focus:outline-none focus:border-[var(--glass-border-strong)] focus:bg-white/12
                    transition-all duration-200
                  `}),_&&e.jsx("button",{onClick:()=>{var J;k(""),(J=G.current)==null||J.focus()},className:"absolute right-2.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 transition-colors",children:e.jsx(Pt,{size:14})})]}),e.jsx("button",{onClick:Z,className:`
                  w-10 h-10 rounded-lg flex-shrink-0
                  hover:bg-[var(--glass-bg-medium)]
                  transition-all duration-300
                  flex items-center justify-center
                  text-white/60 hover:text-white
                `,title:"Collapse Navigation",children:e.jsx($u,{size:20})})]}),_&&e.jsxs("p",{className:"text-white/40 text-xs mt-2 px-1",children:[F.length," result",F.length!==1?"s":""," found"]})]}),h&&e.jsx("div",{className:"p-4 pb-2 flex-shrink-0 flex justify-center",children:e.jsx("button",{onClick:Z,className:`
                w-12 h-12 rounded-xl
                flex items-center justify-center
                text-white/60 hover:text-white hover:bg-[var(--glass-bg-light)]
                transition-all duration-200
              `,title:"Expand Navigation",children:e.jsx(Lu,{size:20})})}),e.jsx("div",{className:"p-4 space-y-1 flex-1",children:F.map(J=>{const ne=d===J.id;return e.jsx("div",{className:"relative group/nav",children:e.jsxs("button",{onClick:()=>c(J.id),onMouseEnter:ie=>he(ie,J.id),onMouseLeave:ve,className:`
                    ${h?"w-12 h-12 mx-auto justify-center":"w-full"}
                    flex items-center gap-3
                    px-4 py-3 rounded-xl
                    transition-all duration-200
                    ${ne?"bg-[var(--glass-bg-medium)] text-white border border-[var(--glass-border-strong)]":"text-white/70 hover:bg-[var(--glass-bg-light)] hover:text-white border border-transparent"}
                  `,children:[e.jsx("span",{className:`
                    flex-shrink-0
                    ${ne?"text-[var(--brand-primary)]":"text-white/60 group-hover/nav:text-white/80"}
                  `,children:J.icon}),!h&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"flex-1 text-left font-medium",children:J.label}),ne&&e.jsx(Gt,{size:16,className:"text-[var(--brand-primary)]"})]})]})},J.id)})}),!h&&e.jsx("div",{className:`
            flex-shrink-0
            p-4
            border-t border-[var(--glass-border)]
            backdrop-blur-md
          `,children:e.jsxs("div",{className:`
              p-3 rounded-xl
              bg-[var(--glass-bg-subtle)]
              text-center
            `,children:[e.jsx("p",{className:"text-white/60 text-xs",children:"50+ Components"}),e.jsx("p",{className:"text-white text-sm font-semibold",children:"v1.0.0"})]})})]}),h&&f&&(()=>{const J=o.find(ne=>ne.id===f);return J?e.jsx("div",{className:`
              fixed
              px-3 py-2 rounded-xl
              backdrop-blur-xl backdrop-saturate-150
              bg-[var(--glass-bg-light)]
              border border-[var(--glass-border)]
              shadow-[var(--shadow-overlay)]
              text-white text-sm whitespace-nowrap
              pointer-events-none
              z-[9999]
            `,style:{top:j.top,left:j.left,transform:"translateY(-50%)"},children:J.label}):null})()]})}function Qp(o,d=100){const[c,u]=I.useState(o[0]);return I.useEffect(()=>{const h=()=>{const m=window.scrollY+d;if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-50){u(o[o.length-1]);return}for(let w=o.length-1;w>=0;w--){const j=document.getElementById(o[w]);if(j&&j.offsetTop<=m){u(o[w]);break}}};return window.addEventListener("scroll",h),h(),()=>window.removeEventListener("scroll",h)},[o,d]),c}function Me(o){const d=document.getElementById(o);if(d){const u=d.offsetTop-80;window.scrollTo({top:u,behavior:"smooth"})}}function qp({toast:o,onClose:d}){const u={success:{border:"border-[var(--status-success-border)]",bg:"bg-[var(--status-success-light)]",icon:e.jsx(Qi,{size:20,className:"text-[var(--status-success)]"}),iconBg:"bg-[var(--status-success-light)]"},error:{border:"border-[var(--status-error-border)]",bg:"bg-[var(--status-error-light)]",icon:e.jsx(Du,{size:20,className:"text-[var(--status-error)]"}),iconBg:"bg-[var(--status-error-light)]"},warning:{border:"border-[var(--status-warning-border)]",bg:"bg-[var(--status-warning-light)]",icon:e.jsx(Gu,{size:20,className:"text-[var(--status-warning)]"}),iconBg:"bg-[var(--status-warning-light)]"},info:{border:"border-[var(--status-info-border)]",bg:"bg-[var(--status-info-light)]",icon:e.jsx(on,{size:20,className:"text-[var(--status-info)]"}),iconBg:"bg-[var(--status-info-light)]"},default:{border:"border-[var(--glass-border)]",bg:"bg-[var(--glass-bg-light)]",icon:e.jsx(dr,{size:20,className:"text-white/80"}),iconBg:"bg-[var(--glass-bg-medium)]"}}[o.variant],h=o.icon||u.icon;return e.jsx("div",{className:`
      min-w-[320px] max-w-md
      backdrop-blur-xl backdrop-saturate-150
      ${u.bg}
      border-2 ${u.border}
      rounded-2xl
      p-4
      shadow-[var(--shadow-overlay)]
      animate-in slide-in-from-top-2 duration-300
    `,children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:`
          p-2 rounded-xl
          ${u.iconBg}
          flex-shrink-0
        `,children:h}),e.jsxs("div",{className:"flex-1 min-w-0",children:[o.title&&e.jsx("h4",{className:"text-white font-semibold mb-1",children:o.title}),e.jsx("p",{className:"text-white/90 text-sm",children:o.message}),o.action&&e.jsx("button",{onClick:o.action.onClick,className:`
                mt-3 px-4 py-1.5 rounded-lg
                bg-[var(--glass-bg-medium)]
                hover:bg-[var(--glass-bg-strong)]
                text-white text-sm font-medium
                transition-colors duration-200
              `,children:o.action.label})]}),o.closable!==!1&&e.jsx("button",{onClick:()=>d(o.id),className:`
              p-1.5 rounded-lg
              text-white/60
              hover:text-white
              hover:bg-[var(--glass-bg-light)]
              transition-all duration-200
              flex-shrink-0
            `,children:e.jsx(Pt,{size:16})})]})})}function Jp({toasts:o,onClose:d,position:c="top-right"}){const u={"top-left":"top-6 left-6","top-right":"top-6 right-6","bottom-left":"bottom-6 left-6","bottom-right":"bottom-6 right-6","top-center":"top-6 left-1/2 -translate-x-1/2","bottom-center":"bottom-6 left-1/2 -translate-x-1/2"};return e.jsx("div",{className:`fixed ${u[c]} z-50 space-y-3`,children:o.map(h=>e.jsx(qp,{toast:h,onClose:d},h.id))})}function Kp(){const[o,d]=I.useState([]),c=I.useCallback((h,m,f)=>{const w=Math.random().toString(36).substring(7),j={id:w,variant:h,message:m,duration:(f==null?void 0:f.duration)??5e3,title:f==null?void 0:f.title,action:f==null?void 0:f.action,icon:f==null?void 0:f.icon,closable:f==null?void 0:f.closable};d(b=>[...b,j]),j.duration&&j.duration>0&&setTimeout(()=>{u(w)},j.duration)},[]),u=I.useCallback(h=>{d(m=>m.filter(f=>f.id!==h))},[]);return{toasts:o,addToast:c,removeToast:u}}function C({children:o,className:d="",variant:c="default",padding:u="md"}){const h=`
    relative overflow-hidden rounded-3xl
    backdrop-blur-lg backdrop-saturate-150
    bg-[var(--glass-bg-light)]
    border border-[var(--glass-border)]
    shadow-[var(--shadow-glass)]
    transition-all duration-300
  `,m={default:"",gradient:`
      before:absolute before:inset-0 before:bg-gradient-to-br 
      before:from-[var(--glass-bg-medium)] before:via-transparent before:to-transparent
      before:pointer-events-none
    `,hover:`
      hover:scale-[1.02] hover:shadow-[var(--shadow-elevated)]
      hover:bg-[var(--glass-bg-medium)] cursor-pointer
    `},f={sm:"p-4",md:"p-6",lg:"p-8"};return e.jsx("div",{className:`${h} ${m[c]} ${f[u]} ${d}`,children:o})}function Xp({data:o,height:d=300,className:c="",showValues:u=!0,showGrid:h=!0}){const m=Math.max(...o.map(f=>f.value));return e.jsx("div",{className:`
      backdrop-blur-md backdrop-saturate-150
      bg-[var(--glass-bg-light)]
      border border-[var(--glass-border)]
      rounded-3xl
      p-6
      ${c}
    `,children:e.jsxs("div",{className:"relative",style:{minHeight:`${d+40}px`},children:[h&&e.jsx("div",{className:"absolute inset-x-0 flex flex-col justify-between",style:{height:`${d}px`},children:[...Array(5)].map((f,w)=>e.jsx("div",{className:"h-px bg-[var(--glass-bg-subtle)]"},w))}),e.jsx("div",{className:"flex items-end gap-4 px-2",style:{height:`${d}px`},children:o.map((f,w)=>{const j=f.value/m*100,b=f.color||"var(--brand-primary)";return e.jsxs("div",{className:"flex-1 flex flex-col items-center gap-3 h-full justify-end",children:[u&&e.jsx("span",{className:"text-white text-sm font-medium mb-1",children:f.value}),e.jsx("div",{className:"w-full flex items-end",style:{height:`${d-30}px`},children:e.jsx("div",{className:"w-full rounded-t-xl transition-all duration-500 hover:opacity-80 relative overflow-hidden group cursor-pointer",style:{height:`${j}%`,background:`linear-gradient(to top, ${b}, ${b}dd)`,backdropFilter:"blur(8px)",boxShadow:`0 4px 16px ${b}40`,minHeight:"4px"},children:e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[var(--glass-bg-light)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"})})})]},w)})}),e.jsx("div",{className:"flex gap-4 mt-3 px-2",children:o.map((f,w)=>e.jsx("div",{className:"flex-1 text-center",children:e.jsx("span",{className:"text-[var(--text-tertiary)] text-sm font-medium",children:f.label})},w))})]})})}function Zp({data:o,height:d=300,className:c="",smooth:u=!0,showGrid:h=!0,showDots:m=!0}){const f=Math.max(...o.map(k=>k.value)),w=Math.min(...o.map(k=>k.value)),j=f-w,b=o.map((k,z)=>{const $=z/(o.length-1)*100,G=100-(k.value-w)/j*90-5;return{x:$,y:G,value:k.value,label:k.label}}),_=u?b.map((k,z)=>{if(z===0)return`M ${k.x} ${k.y}`;const $=b[z-1];return`Q ${($.x+k.x)/2} ${$.y}, ${k.x} ${k.y}`}).join(" "):b.map((k,z)=>z===0?`M ${k.x} ${k.y}`:`L ${k.x} ${k.y}`).join(" ");return e.jsxs("div",{className:`
      backdrop-blur-md backdrop-saturate-150
      bg-[var(--glass-bg-light)]
      border border-[var(--glass-border)]
      rounded-3xl
      p-6
      ${c}
    `,children:[e.jsxs("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"none",style:{height:`${d}px`,width:"100%"},className:"mb-4",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"lineGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"var(--brand-primary)",stopOpacity:"0.4"}),e.jsx("stop",{offset:"100%",stopColor:"var(--brand-primary)",stopOpacity:"0"})]}),e.jsxs("filter",{id:"glow",children:[e.jsx("feGaussianBlur",{stdDeviation:"2",result:"coloredBlur"}),e.jsxs("feMerge",{children:[e.jsx("feMergeNode",{in:"coloredBlur"}),e.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),h&&e.jsx("g",{opacity:"0.1",children:[...Array(5)].map((k,z)=>e.jsx("line",{x1:"0",y1:z*25,x2:"100",y2:z*25,stroke:"white",strokeWidth:"0.2"},z))}),e.jsx("path",{d:`${_} L 100 100 L 0 100 Z`,fill:"url(#lineGradient)"}),e.jsx("path",{d:_,fill:"none",stroke:"var(--brand-primary)",strokeWidth:"0.8",filter:"url(#glow)"}),m&&b.map((k,z)=>e.jsxs("g",{children:[e.jsx("circle",{cx:k.x,cy:k.y,r:"1.5",fill:"white",className:"transition-all"}),e.jsx("circle",{cx:k.x,cy:k.y,r:"0.8",fill:"var(--brand-primary)"})]},z))]}),e.jsx("div",{className:"flex justify-between px-2",children:o.map((k,z)=>e.jsx("div",{className:"text-center",children:e.jsx("p",{className:"text-[var(--text-tertiary)] text-xs",children:k.label})},z))})]})}function eg({data:o,height:d=300,className:c="",smooth:u=!0,stacked:h=!1}){var b;const m=Object.keys(((b=o[0])==null?void 0:b.values)||{}),f=[{stroke:"var(--brand-primary)",fill:"var(--brand-primary)"},{stroke:"var(--status-error)",fill:"var(--status-error)"},{stroke:"var(--status-success)",fill:"var(--status-success)"}],j=Math.max(...h?o.map(_=>m.reduce((k,z)=>k+_.values[z],0)):o.flatMap(_=>m.map(k=>_.values[k])));return e.jsxs("div",{className:`
      backdrop-blur-md backdrop-saturate-150
      bg-[var(--glass-bg-light)]
      border border-[var(--glass-border)]
      rounded-3xl
      p-6
      ${c}
    `,children:[e.jsxs("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"none",style:{height:`${d}px`,width:"100%"},className:"mb-4",children:[e.jsx("defs",{children:f.map((_,k)=>e.jsxs("linearGradient",{id:`areaGradient${k}`,x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:_.fill,stopOpacity:"0.8"}),e.jsx("stop",{offset:"100%",stopColor:_.fill,stopOpacity:"0.1"})]},k))}),m.map((_,k)=>{const z=o.map((G,F)=>{const B=F/(o.length-1)*100;let Z=G.values[_];if(h&&k>0)for(let ve=0;ve<k;ve++)Z+=G.values[m[ve]];const he=100-Z/j*90;return{x:B,y:he,value:G.values[_]}}),$=u?z.map((G,F)=>{if(F===0)return`M ${G.x} ${G.y}`;const B=z[F-1];return`Q ${(B.x+G.x)/2} ${B.y}, ${G.x} ${G.y}`}).join(" "):z.map((G,F)=>F===0?`M ${G.x} ${G.y}`:`L ${G.x} ${G.y}`).join(" ");return e.jsxs("g",{children:[e.jsx("path",{d:`${$} L 100 100 L 0 100 Z`,fill:`url(#areaGradient${k})`}),e.jsx("path",{d:$,fill:"none",stroke:f[k].stroke,strokeWidth:"0.5"})]},k)})]}),e.jsx("div",{className:"flex justify-between items-center",children:e.jsx("div",{className:"flex gap-4",children:m.map((_,k)=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 rounded-full",style:{backgroundColor:f[k].stroke}}),e.jsx("span",{className:"text-[var(--text-tertiary)] text-xs",children:_})]},_))})})]})}function tg({data:o,size:d=300,className:c="",donut:u=!1,showLegend:h=!0}){const m=o.reduce((j,b)=>j+b.value,0);let f=-90;const w=o.map((j,b)=>{const _=j.value/m*100,k=j.value/m*360,z=f,$=f+k;f=$;const G=z*Math.PI/180,F=$*Math.PI/180,B=45,Z=u?30:0,he=50+B*Math.cos(G),ve=50+B*Math.sin(G),be=50+B*Math.cos(F),J=50+B*Math.sin(F),ne=k>180?1:0,ie=u?`M ${50+Z*Math.cos(G)} ${50+Z*Math.sin(G)} 
         L ${he} ${ve} 
         A ${B} ${B} 0 ${ne} 1 ${be} ${J} 
         L ${50+Z*Math.cos(F)} ${50+Z*Math.sin(F)} 
         A ${Z} ${Z} 0 ${ne} 0 ${50+Z*Math.cos(G)} ${50+Z*Math.sin(G)} Z`:`M 50 50 L ${he} ${ve} A ${B} ${B} 0 ${ne} 1 ${be} ${J} Z`,re=["var(--brand-primary)","var(--brand-secondary)","var(--brand-accent)","var(--status-success)","var(--status-error)"];return{path:ie,color:j.color||re[b%re.length],percentage:_,label:j.label,value:j.value}});return e.jsxs("div",{className:`flex ${h?"flex-col md:flex-row":"flex-col"} items-center gap-8 ${c}`,children:[e.jsxs("div",{className:"relative",children:[e.jsxs("svg",{width:d,height:d,viewBox:"0 0 100 100",className:"backdrop-blur-md filter drop-shadow-lg",children:[e.jsx("defs",{children:w.map((j,b)=>e.jsx("filter",{id:`shadow${b}`,children:e.jsx("feDropShadow",{dx:"0",dy:"2",stdDeviation:"2",floodColor:j.color,floodOpacity:"0.5"})},b))}),w.map((j,b)=>e.jsx("path",{d:j.path,fill:j.color,stroke:"var(--glass-bg-strong)",strokeWidth:"0.3",filter:`url(#shadow${b})`,className:"hover:opacity-90 transition-all cursor-pointer transform hover:scale-105 origin-center"},b))]}),u&&e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-4xl text-white font-bold",children:m}),e.jsx("p",{className:"text-[var(--text-muted)] text-sm",children:"Total"})]})})]}),h&&e.jsx("div",{className:"space-y-3",children:w.map((j,b)=>e.jsxs("div",{className:"flex items-center gap-3 group cursor-pointer",children:[e.jsx("div",{className:"w-4 h-4 rounded transition-transform group-hover:scale-110",style:{backgroundColor:j.color}}),e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"text-white text-sm font-medium",children:j.label}),e.jsxs("p",{className:"text-[var(--text-muted)] text-xs",children:[j.value," (",j.percentage.toFixed(1),"%)"]})]})]},b))})]})}function Su({value:o,max:d=100,size:c=200,className:u="",label:h,showValue:m=!0}){const f=Math.min(o/d*100,100);return e.jsxs("div",{className:`inline-flex flex-col items-center ${u}`,children:[e.jsxs("svg",{width:c,height:c*.65,viewBox:"0 0 100 65",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"gaugeGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",stopColor:"var(--status-error)"}),e.jsx("stop",{offset:"50%",stopColor:"var(--status-warning)"}),e.jsx("stop",{offset:"100%",stopColor:"var(--status-success)"})]})}),e.jsx("path",{d:"M 10 60 A 40 40 0 0 1 90 60",fill:"none",stroke:"var(--glass-bg-light)",strokeWidth:"8",strokeLinecap:"round"}),e.jsx("path",{d:"M 10 60 A 40 40 0 0 1 90 60",fill:"none",stroke:"url(#gaugeGradient)",strokeWidth:"8",strokeLinecap:"round",strokeDasharray:"125.6",strokeDashoffset:125.6-f/100*125.6,className:"transition-all duration-500"})]}),e.jsxs("div",{className:"text-center -mt-8",children:[m&&e.jsxs("p",{className:"text-4xl text-white font-bold mb-1",children:[o,e.jsxs("span",{className:"text-2xl text-[var(--text-muted)]",children:["/",d]})]}),h&&e.jsx("p",{className:"text-[var(--text-tertiary)] text-sm",children:h})]})]})}function ja({value:o,max:d=100,size:c="md",variant:u="circular",label:h,showValue:m=!0,className:f=""}){const w=Math.min(o/d*100,100),b={sm:{width:80,stroke:4,fontSize:"text-lg"},md:{width:120,stroke:6,fontSize:"text-2xl"},lg:{width:160,stroke:8,fontSize:"text-4xl"},xl:{width:200,stroke:10,fontSize:"text-5xl"}}[c],_=(b.width-b.stroke)/2,k=2*Math.PI*_,z=k-w/100*k;return u==="linear"?e.jsxs("div",{className:`w-full ${f}`,children:[h&&e.jsxs("div",{className:"flex justify-between mb-2",children:[e.jsx("span",{className:"text-white text-sm",children:h}),m&&e.jsxs("span",{className:"text-[var(--text-tertiary)] text-sm",children:[w.toFixed(0),"%"]})]}),e.jsx("div",{className:`
          h-4 rounded-full
          backdrop-blur-md backdrop-saturate-150
          bg-[var(--glass-bg-light)]
          border border-[var(--glass-border)]
          overflow-hidden
        `,children:e.jsx("div",{className:"h-full bg-gradient-to-r from-[var(--brand-primary)] to-cyan-400 transition-all duration-500",style:{width:`${w}%`}})})]}):u==="semi-circular"?e.jsxs("div",{className:`inline-flex flex-col items-center ${f}`,children:[e.jsxs("svg",{width:b.width,height:b.width/2+20,children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",stopColor:"var(--brand-primary)"}),e.jsx("stop",{offset:"100%",stopColor:"var(--brand-accent)"})]})}),e.jsx("path",{d:`M ${b.stroke/2} ${b.width/2} A ${_} ${_} 0 0 1 ${b.width-b.stroke/2} ${b.width/2}`,fill:"none",stroke:"var(--glass-bg-light)",strokeWidth:b.stroke,strokeLinecap:"round"}),e.jsx("path",{d:`M ${b.stroke/2} ${b.width/2} A ${_} ${_} 0 0 1 ${b.width-b.stroke/2} ${b.width/2}`,fill:"none",stroke:"url(#gradient)",strokeWidth:b.stroke,strokeLinecap:"round",strokeDasharray:k/2,strokeDashoffset:k/2-w/100*(k/2),className:"transition-all duration-500"})]}),e.jsxs("div",{className:"text-center -mt-10",children:[m&&e.jsxs("p",{className:`${b.fontSize} text-white`,children:[w.toFixed(0),"%"]}),h&&e.jsx("p",{className:"text-[var(--text-tertiary)] text-sm mt-1",children:h})]})]}):e.jsxs("div",{className:`inline-flex flex-col items-center ${f}`,children:[e.jsxs("svg",{width:b.width,height:b.width,children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"circularGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"var(--brand-primary)"}),e.jsx("stop",{offset:"100%",stopColor:"var(--brand-accent)"})]})}),e.jsx("circle",{cx:b.width/2,cy:b.width/2,r:_,fill:"none",stroke:"var(--glass-bg-light)",strokeWidth:b.stroke}),e.jsx("circle",{cx:b.width/2,cy:b.width/2,r:_,fill:"none",stroke:"url(#circularGradient)",strokeWidth:b.stroke,strokeLinecap:"round",strokeDasharray:k,strokeDashoffset:z,transform:`rotate(-90 ${b.width/2} ${b.width/2})`,className:"transition-all duration-500"}),e.jsx("text",{x:"50%",y:"50%",textAnchor:"middle",dy:".3em",className:`${b.fontSize} fill-white`,children:m&&`${w.toFixed(0)}%`})]}),h&&e.jsx("p",{className:"text-[var(--text-tertiary)] text-sm mt-2",children:h})]})}function Na({value:o,max:d=100,variant:c="primary",showLabel:u=!0,size:h="md"}){const m=Math.min(o/d*100,100),f={primary:"bg-[var(--status-info)]",success:"bg-[var(--status-success)]",warning:"bg-[var(--status-warning)]",danger:"bg-[var(--status-error)]"},w={sm:"h-1",md:"h-2",lg:"h-3"};return e.jsxs("div",{className:"w-full",children:[u&&e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsx("span",{className:"text-white/90 text-sm",children:"Progress"}),e.jsxs("span",{className:"text-white/70 text-sm",children:[Math.round(m),"%"]})]}),e.jsx("div",{className:`
        ${w[h]} rounded-full
        backdrop-blur-md backdrop-saturate-150
        bg-[var(--glass-bg-light)]
        border border-[var(--glass-border)]
        overflow-hidden
      `,children:e.jsx("div",{className:`h-full ${f[c]} transition-all duration-500 ease-out`,style:{width:`${m}%`}})})]})}function ue({code:o,language:d="tsx"}){return e.jsx("div",{className:"mt-12",children:e.jsxs("div",{className:`
        md:backdrop-blur-xl bg-gradient-to-br from-[var(--glass-bg-light)] to-[var(--glass-bg-subtle)]
        border border-[var(--glass-border)]
        rounded-3xl
        overflow-hidden
        shadow-2xl
      `,children:[e.jsxs("div",{className:"p-4 border-b border-[var(--glass-dark-border)] bg-[var(--glass-bg-subtle)] flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-[var(--status-error)]/60"}),e.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-400/60"}),e.jsx("div",{className:"w-3 h-3 rounded-full bg-[var(--status-success)]/60"})]}),e.jsx("span",{className:"text-[var(--text-tertiary)] text-sm font-medium",children:d})]}),e.jsxs("div",{className:`
            px-3 py-1.5 rounded-lg
            bg-[var(--glass-bg-light)]
            border border-[var(--glass-border)]
            text-white/50 text-sm
            flex items-center gap-2
            cursor-default select-none
          `,children:[e.jsx(b0,{size:16}),e.jsx("span",{children:"Copy Code"})]})]}),e.jsx("div",{className:"relative",children:e.jsx("pre",{className:`
              w-full h-96 p-6
              bg-black/20
              text-white/90 text-sm font-mono
              overflow-auto
              leading-relaxed
              select-none
              whitespace-pre-wrap break-words
            `,onCopy:c=>c.preventDefault(),children:o})})]})})}const xe={buttonSection:`// Glass Button Component - 完整实现
// 复制这段代码到你的项目即可使用

import React from 'react';

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function GlassButton({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}: GlassButtonProps) {
  const baseStyles = \`
    backdrop-blur-xl
    border border-white/20
    rounded-xl
    font-medium
    transition-all duration-300
    hover:scale-105 hover:shadow-xl
    active:scale-95
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
  \`;

  const variants = {
    primary: 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white hover:from-blue-500/30 hover:to-purple-500/30',
    secondary: 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white hover:from-purple-500/30 hover:to-pink-500/30',
    accent: 'bg-gradient-to-r from-pink-500/20 to-rose-500/20 text-white hover:from-pink-500/30 hover:to-rose-500/30',
    success: 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-white hover:from-green-500/30 hover:to-emerald-500/30',
    ghost: 'bg-white/5 text-white hover:bg-white/10',
    danger: 'bg-gradient-to-r from-red-500/20 to-rose-500/20 text-white hover:from-red-500/30 hover:to-rose-500/30',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={\`\${baseStyles} \${variants[variant]} \${sizes[size]} \${className}\`}
      {...props}
    >
      {children}
    </button>
  );
}

// 使用示例：
<GlassButton variant="primary">Primary</GlassButton>
<GlassButton variant="secondary" size="lg">Large Secondary</GlassButton>
<GlassButton variant="success" disabled>Disabled</GlassButton>

// 或者直接使用 HTML + Tailwind（无需组件）：
<button className="
  px-4 py-2
  backdrop-blur-xl
  bg-gradient-to-r from-blue-500/20 to-purple-500/20
  border border-white/20
  rounded-xl
  text-white font-medium
  hover:from-blue-500/30 hover:to-purple-500/30
  hover:scale-105 hover:shadow-xl
  active:scale-95
  transition-all duration-300
">
  Primary Button
</button>`,calendarSection:`// Calendar Component - 完整实现
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function GlassCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  return (
    <div className="
      backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
      border border-white/20
      rounded-3xl p-6
      max-w-md
    ">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white text-xl font-bold">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>
        <div className="flex gap-2">
          <button
            onClick={previousMonth}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextMonth}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Day Labels */}
      <div className="grid grid-cols-7 gap-2 mb-2">
        {days.map(day => (
          <div key={day} className="text-center text-white/60 text-sm font-medium">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: firstDayOfMonth }).map((_, i) => (
          <div key={\`empty-\${i}\`} />
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const isSelected = 
            selectedDate.getDate() === day &&
            selectedDate.getMonth() === currentDate.getMonth() &&
            selectedDate.getFullYear() === currentDate.getFullYear();
          
          return (
            <button
              key={day}
              onClick={() => setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
              className={\`
                aspect-square rounded-lg
                text-white text-sm
                transition-all
                \${isSelected
                  ? 'bg-blue-500 font-bold'
                  : 'bg-white/5 hover:bg-white/10'
                }
              \`}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}`,cardsSection:`// Glass Card Component - 完整实现
// 复制这段代码到你的项目即可使用

import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function GlassCard({ children, padding = 'md', className = '' }: GlassCardProps) {
  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div className={\`
      backdrop-blur-xl 
      bg-gradient-to-br from-white/10 to-white/5
      border border-white/20
      rounded-3xl
      shadow-2xl
      \${paddingStyles[padding]}
      \${className}
    \`}>
      {children}
    </div>
  );
}

// 使用示例：
<GlassCard>
  <h3 className="text-white text-xl font-bold mb-2">Card Title</h3>
  <p className="text-white/70">Card content goes here</p>
</GlassCard>

// 或者直接使用 HTML + Tailwind：
<div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-6 shadow-2xl">
  <h3 className="text-white text-xl font-bold mb-2">Card Title</h3>
  <p className="text-white/70">Card content goes here</p>
</div>

// 不同尺寸的卡片：
<GlassCard padding="sm">Small Card</GlassCard>
<GlassCard padding="md">Medium Card</GlassCard>
<GlassCard padding="lg">Large Card</GlassCard>`,chatSection:`// Chat Component - 完整实现
import React, { useState } from 'react';
import { Send } from 'lucide-react';

export function GlassChat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, user: 'John Doe', avatar: 'JD', content: 'Hey, how are you?', time: '10:30 AM', isOwn: false },
    { id: 2, user: 'You', avatar: 'ME', content: 'I am good, thanks!', time: '10:32 AM', isOwn: true },
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;
    setMessages([...messages, {
      id: messages.length + 1,
      user: 'You',
      avatar: 'ME',
      content: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isOwn: true
    }]);
    setMessage('');
  };

  return (
    <div className="
      backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
      border border-white/20
      rounded-3xl
      h-[600px]
      flex flex-col
    ">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={\`flex gap-3 \${msg.isOwn ? 'flex-row-reverse' : ''}\`}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-bold">{msg.avatar}</span>
            </div>
            <div className={\`flex-1 max-w-md \${msg.isOwn ? 'items-end' : ''}\`}>
              <div className={\`
                backdrop-blur-xl border border-white/20 rounded-2xl p-4
                \${msg.isOwn 
                  ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20' 
                  : 'bg-gradient-to-br from-white/10 to-white/5'
                }
              \`}>
                <p className="text-white/90">{msg.content}</p>
              </div>
              <p className="text-white/40 text-xs mt-1">{msg.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-white/10">
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type a message..."
            className="
              flex-1 px-4 py-2.5
              bg-white/10
              border border-white/20
              rounded-xl
              text-white placeholder-white/40
              focus:outline-none focus:border-blue-400/50
            "
          />
          <button
            onClick={sendMessage}
            className="
              px-4 py-2.5 rounded-xl
              bg-blue-500 hover:bg-blue-600
              text-white
              transition-colors
            "
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}`,chartsSection:`// Charts with Recharts - 完整实现
// 需要安装：npm install recharts

import React from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// 数据示例
const barData = [
  { name: 'Jan', sales: 4000, profit: 2400 },
  { name: 'Feb', sales: 3000, profit: 1398 },
  { name: 'Mar', sales: 2000, profit: 9800 },
  { name: 'Apr', sales: 2780, profit: 3908 },
  { name: 'May', sales: 1890, profit: 4800 },
  { name: 'Jun', sales: 2390, profit: 3800 },
];

const pieData = [
  { name: 'Product A', value: 400 },
  { name: 'Product B', value: 300 },
  { name: 'Product C', value: 300 },
  { name: 'Product D', value: 200 },
];

const COLORS = ['#667eea', '#764ba2', '#f093fb', '#4facfe'];

// Bar Chart
export function GlassBarChart() {
  return (
    <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-6">
      <h3 className="text-white text-xl font-bold mb-4">Sales Overview</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={barData}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="name" stroke="rgba(255,255,255,0.6)" />
          <YAxis stroke="rgba(255,255,255,0.6)" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(0,0,0,0.8)', 
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '12px',
              backdropFilter: 'blur(12px)'
            }}
          />
          <Legend />
          <Bar dataKey="sales" fill="#667eea" radius={[8, 8, 0, 0]} />
          <Bar dataKey="profit" fill="#f093fb" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// Pie Chart
export function GlassPieChart() {
  return (
    <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-6">
      <h3 className="text-white text-xl font-bold mb-4">Product Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => \`\${name}: \${(percent * 100).toFixed(0)}%\`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={\`cell-\${index}\`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}`,checkboxRadioSection:`// Liquid Glass Checkbox & Radio Components - 完整实现
// 复制这段代码到你的项目即可使用
// 依赖: lucide-react (用于 Check 图标), Tailwind CSS

import React, { useState } from 'react';
import { Check } from 'lucide-react';

// ============================================
// GlassCheckbox 组件 - 液态玻璃风格复选框
// ============================================
interface GlassCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

export function GlassCheckbox({
  checked,
  onChange,
  label,
  description,
  size = 'md',
  disabled = false,
  className = ''
}: GlassCheckboxProps) {
  const sizes = {
    sm: { box: 'w-4 h-4', icon: 14, text: 'text-sm', description: 'text-xs' },
    md: { box: 'w-5 h-5', icon: 16, text: 'text-base', description: 'text-sm' },
    lg: { box: 'w-6 h-6', icon: 18, text: 'text-lg', description: 'text-base' }
  };

  const s = sizes[size];

  return (
    <label
      className={\`
        flex items-start gap-3
        \${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        \${className}
      \`}
    >
      <div className="relative flex items-center justify-center pt-0.5">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => !disabled && onChange(e.target.checked)}
          disabled={disabled}
          className="sr-only"
        />
        <div
          className={\`
            \${s.box}
            rounded-md
            backdrop-blur-md
            border-2
            transition-all duration-300
            flex items-center justify-center
            \${checked
              ? 'bg-gradient-to-br from-blue-400/80 to-blue-600/80 border-blue-400/50 shadow-lg shadow-blue-500/50'
              : 'bg-white/10 border-white/30 hover:border-white/50'
            }
            \${!disabled && 'hover:scale-110'}
          \`}
        >
          {checked && (
            <Check
              size={s.icon}
              className="text-white"
              strokeWidth={3}
            />
          )}
        </div>
      </div>
      
      {(label || description) && (
        <div className="flex-1">
          {label && (
            <div className={\`text-white font-medium \${s.text}\`}>
              {label}
            </div>
          )}
          {description && (
            <div className={\`text-white/60 \${s.description} mt-1\`}>
              {description}
            </div>
          )}
        </div>
      )}
    </label>
  );
}

// ============================================
// GlassRadio 组件 - 液态玻璃风格单选按钮
// ============================================
interface GlassRadioProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  name: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

export function GlassRadio({
  checked,
  onChange,
  label,
  description,
  name,
  size = 'md',
  disabled = false,
  className = ''
}: GlassRadioProps) {
  const sizes = {
    sm: { outer: 'w-4 h-4', inner: 'w-2 h-2', text: 'text-sm', description: 'text-xs' },
    md: { outer: 'w-5 h-5', inner: 'w-2.5 h-2.5', text: 'text-base', description: 'text-sm' },
    lg: { outer: 'w-6 h-6', inner: 'w-3 h-3', text: 'text-lg', description: 'text-base' }
  };

  const s = sizes[size];

  return (
    <label
      className={\`
        flex items-start gap-3
        \${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        \${className}
      \`}
    >
      <div className="relative flex items-center justify-center pt-0.5">
        <input
          type="radio"
          name={name}
          checked={checked}
          onChange={(e) => !disabled && onChange(e.target.checked)}
          disabled={disabled}
          className="sr-only"
        />
        <div
          className={\`
            \${s.outer}
            rounded-full
            backdrop-blur-md
            border-2
            transition-all duration-300
            flex items-center justify-center
            \${checked
              ? 'bg-gradient-to-br from-purple-400/20 to-purple-600/20 border-purple-400/50 shadow-lg shadow-purple-500/50'
              : 'bg-white/10 border-white/30 hover:border-white/50'
            }
            \${!disabled && 'hover:scale-110'}
          \`}
        >
          {checked && (
            <div
              className={\`
                \${s.inner}
                rounded-full
                bg-gradient-to-br from-purple-400 to-purple-600
                shadow-lg
              \`}
            />
          )}
        </div>
      </div>
      
      {(label || description) && (
        <div className="flex-1">
          {label && (
            <div className={\`text-white font-medium \${s.text}\`}>
              {label}
            </div>
          )}
          {description && (
            <div className={\`text-white/60 \${s.description} mt-1\`}>
              {description}
            </div>
          )}
        </div>
      )}
    </label>
  );
}

// ============================================
// GlassRadioGroup 组件 - 单选按钮组
// ============================================
interface RadioOption {
  label: string;
  value: string;
  description?: string;
}

interface GlassRadioGroupProps {
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  name: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

export function GlassRadioGroup({
  options,
  value,
  onChange,
  name,
  size = 'md',
  disabled = false,
  className = ''
}: GlassRadioGroupProps) {
  return (
    <div className={\`space-y-3 \${className}\`}>
      {options.map((option) => (
        <GlassRadio
          key={option.value}
          checked={value === option.value}
          onChange={() => onChange(option.value)}
          label={option.label}
          description={option.description}
          name={name}
          size={size}
          disabled={disabled}
        />
      ))}
    </div>
  );
}

// ============================================
// 使用示例
// ============================================
function CheckboxRadioExample() {
  const [agree, setAgree] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true
  });
  const [selectedPlan, setSelectedPlan] = useState('pro');

  return (
    <div className="space-y-8 p-6">
      {/* 单个 Checkbox */}
      <GlassCheckbox
        checked={agree}
        onChange={setAgree}
        label="I agree to the terms"
        size="md"
      />

      {/* 带描述的 Checkbox 组 */}
      <div className="space-y-4">
        <GlassCheckbox
          checked={notifications.email}
          onChange={(checked) => setNotifications({ ...notifications, email: checked })}
          label="Email notifications"
          description="Get updates about your account activity"
        />
        <GlassCheckbox
          checked={notifications.sms}
          onChange={(checked) => setNotifications({ ...notifications, sms: checked })}
          label="SMS notifications"
          description="Receive text messages for important updates"
        />
        <GlassCheckbox
          checked={notifications.push}
          onChange={(checked) => setNotifications({ ...notifications, push: checked })}
          label="Push notifications"
          description="Get push notifications on your devices"
        />
      </div>

      {/* 不同尺寸的 Checkbox */}
      <div className="flex items-center gap-8">
        <GlassCheckbox checked={true} onChange={() => {}} label="Small" size="sm" />
        <GlassCheckbox checked={true} onChange={() => {}} label="Medium" size="md" />
        <GlassCheckbox checked={true} onChange={() => {}} label="Large" size="lg" />
      </div>

      {/* Radio 按钮组 */}
      <GlassRadioGroup
        options={[
          { value: 'basic', label: 'Basic Plan', description: '$9/mo - 10 Projects' },
          { value: 'pro', label: 'Pro Plan', description: '$29/mo - 100 Projects' },
          { value: 'enterprise', label: 'Enterprise', description: '$99/mo - Unlimited' }
        ]}
        value={selectedPlan}
        onChange={setSelectedPlan}
        name="pricing"
        size="md"
      />

      {/* Disabled 状态 */}
      <div className="space-y-3">
        <GlassCheckbox checked={true} onChange={() => {}} label="Disabled checked" disabled />
        <GlassRadio checked={true} onChange={() => {}} label="Disabled selected" name="disabled-demo" disabled />
      </div>
    </div>
  );
}`,colorSection:`// Color Palette Component - 完整实现
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface Color {
  name: string;
  value: string;
  category: string;
}

const colors: Color[] = [
  { name: 'Primary Blue', value: '#667eea', category: 'Primary' },
  { name: 'Primary Purple', value: '#764ba2', category: 'Primary' },
  { name: 'Accent Pink', value: '#f093fb', category: 'Accent' },
  { name: 'Accent Rose', value: '#fa709a', category: 'Accent' },
  { name: 'Success Green', value: '#10b981', category: 'Status' },
  { name: 'Warning Yellow', value: '#f59e0b', category: 'Status' },
  { name: 'Error Red', value: '#ef4444', category: 'Status' },
  { name: 'Info Cyan', value: '#06b6d4', category: 'Status' },
];

export function GlassColorPalette() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyColor = async (color: string) => {
    await navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {colors.map((color) => (
        <div
          key={color.value}
          className="
            backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
            border border-white/20
            rounded-2xl p-4
            hover:scale-105 transition-transform
            cursor-pointer
          "
          onClick={() => copyColor(color.value)}
        >
          <div
            className="w-full h-24 rounded-xl mb-3 shadow-lg"
            style={{ backgroundColor: color.value }}
          />
          <h4 className="text-white font-bold mb-1">{color.name}</h4>
          <div className="flex items-center justify-between">
            <p className="text-white/60 text-sm font-mono">{color.value}</p>
            {copiedColor === color.value ? (
              <Check size={16} className="text-green-400" />
            ) : (
              <Copy size={16} className="text-white/40" />
            )}
          </div>
          <span className="inline-block mt-2 px-2 py-1 bg-white/10 rounded text-white/70 text-xs">
            {color.category}
          </span>
        </div>
      ))}
    </div>
  );
}`,dataSection:`import React from 'react';

// Data Table
<table className="w-full">
  <thead>
    <tr className="bg-white/5 border-b border-white/10">
      <th className="px-4 py-3 text-left text-white/70">Column 1</th>
      <th className="px-4 py-3 text-left text-white/70">Column 2</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b border-white/5 hover:bg-white/5">
      <td className="px-4 py-3 text-white/90">Data 1</td>
      <td className="px-4 py-3 text-white/90">Data 2</td>
    </tr>
  </tbody>
</table>`,feedbackSection:`import React from 'react';
import { useState } from 'react';
import { Star } from 'lucide-react';

// Star Rating
const [rating, setRating] = useState(0);

<div className="flex gap-1">
  {[1, 2, 3, 4, 5].map((star) => (
    <button
      key={star}
      onClick={() => setRating(star)}
      className="text-yellow-400 hover:scale-110 transition-transform"
    >
      <Star size={24} fill={star <= rating ? 'currentColor' : 'none'} />
    </button>
  ))}
</div>`,fontsSection:`import React from 'react';

// Typography Examples
<h1 className="text-5xl text-white font-bold">Heading 1</h1>
<h2 className="text-4xl text-white font-bold">Heading 2</h2>
<h3 className="text-3xl text-white font-bold">Heading 3</h3>
<p className="text-white/90">Body text paragraph</p>
<p className="text-white/70 text-sm">Small text</p>
<p className="text-white/60 text-xs">Extra small text</p>`,formsSection:`import React from 'react';
import { useState } from 'react';

// Input Field
const [value, setValue] = useState('');

<input
  type="text"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Enter text"
  className="
    w-full px-4 py-2.5
    bg-white/10
    border border-white/20
    rounded-xl
    text-white placeholder-white/40
    focus:outline-none focus:border-blue-400/50
  "
/>

// Textarea
<textarea
  className="
    w-full px-4 py-2.5
    bg-white/10
    border border-white/20
    rounded-xl
    text-white placeholder-white/40
    focus:outline-none focus:border-blue-400/50
    resize-none
  "
  rows={4}
  placeholder="Enter description"
/>`,gridSection:`import React from 'react';

// Grid Layout
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6">
    <h3 className="text-white text-lg font-bold mb-2">Grid Item 1</h3>
    <p className="text-white/70">Content</p>
  </div>
  <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6">
    <h3 className="text-white text-lg font-bold mb-2">Grid Item 2</h3>
    <p className="text-white/70">Content</p>
  </div>
  <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6">
    <h3 className="text-white text-lg font-bold mb-2">Grid Item 3</h3>
    <p className="text-white/70">Content</p>
  </div>
</div>`,iconsSection:`import React from 'react';
import { Home, Search, Settings, User, Heart, Star, Bell, Mail } from 'lucide-react';

// Icon Usage
<div className="flex gap-4">
  <Home className="text-white" size={24} />
  <Search className="text-white" size={24} />
  <Settings className="text-white" size={24} />
  <User className="text-white" size={24} />
  <Heart className="text-white" size={24} />
  <Star className="text-white" size={24} />
  <Bell className="text-white" size={24} />
  <Mail className="text-white" size={24} />
</div>

// Icon with Background
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400/20 to-purple-500/20 flex items-center justify-center">
  <Heart className="text-blue-300" size={24} />
</div>`,desktopLayout:`// Desktop Layout - 桌面端布局组件
// 适用于 1024px 以上屏幕，左侧导航 + 右侧内容区域

import React from 'react';

interface DesktopLayoutProps {
  sidebar?: React.ReactNode;
  children: React.ReactNode;
}

export function DesktopLayout({ sidebar, children }: DesktopLayoutProps) {
  return (
    <div className="min-h-screen flex">
      {/* 左侧固定导航 */}
      <aside className="
        w-64 fixed top-0 left-0 h-screen
        backdrop-blur-xl bg-white/5
        border-r border-white/10
        p-6 flex flex-col gap-4
        overflow-y-auto
      ">
        {sidebar || (
          <>
            <div className="h-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl" />
            <nav className="flex-1 space-y-2 mt-6">
              {['Dashboard', 'Analytics', 'Projects', 'Settings'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="
                    block px-4 py-3 rounded-xl
                    text-white/70 hover:text-white
                    hover:bg-white/10
                    backdrop-blur-md
                    transition-all duration-200
                  "
                >
                  {item}
                </a>
              ))}
            </nav>
          </>
        )}
      </aside>

      {/* 右侧主内容区域 */}
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          {/* 顶部导航栏 */}
          <header className="
            mb-8 p-4 rounded-2xl
            backdrop-blur-xl bg-white/5
            border border-white/10
          ">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl text-white font-bold">Dashboard</h1>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
              </div>
            </div>
          </header>

          {/* 内容区域 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {children || (
              <>
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-white font-bold mb-2">Card 1</h3>
                  <p className="text-white/60">Content area</p>
                </div>
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-white font-bold mb-2">Card 2</h3>
                  <p className="text-white/60">Content area</p>
                </div>
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-white font-bold mb-2">Card 3</h3>
                  <p className="text-white/60">Content area</p>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}`,tabletLayout:`// Tablet Layout - 平板端响应式布局
// 适用于 768px - 1024px 屏幕，可折叠侧栏 + 自适应网格

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface TabletLayoutProps {
  children: React.ReactNode;
}

export function TabletLayout({ children }: TabletLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen relative">
      {/* 可折叠侧栏 */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside className={\`
        fixed top-0 left-0 h-screen w-72 z-50
        backdrop-blur-xl bg-white/10
        border-r border-white/20
        p-6 flex flex-col
        transition-transform duration-300
        \${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      \`}>
        <button
          onClick={() => setSidebarOpen(false)}
          className="self-end p-2 text-white/70 hover:text-white"
        >
          <X size={24} />
        </button>
        <nav className="flex-1 space-y-2 mt-4">
          {['Home', 'Browse', 'Library', 'Profile'].map((item) => (
            <a
              key={item}
              href="#"
              className="
                block px-4 py-3 rounded-xl
                text-white/70 hover:text-white
                hover:bg-white/10
                transition-all duration-200
              "
            >
              {item}
            </a>
          ))}
        </nav>
      </aside>

      {/* 主内容 */}
      <main className="p-6">
        <header className="
          flex items-center gap-4 mb-6 p-4 rounded-2xl
          backdrop-blur-xl bg-white/5 border border-white/10
        ">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 text-white/70 hover:text-white rounded-xl hover:bg-white/10"
          >
            <Menu size={24} />
          </button>
          <h1 className="text-xl text-white font-bold">Tablet View</h1>
        </header>

        {/* 自适应双列网格 */}
        <div className="grid grid-cols-2 gap-4">
          {children || (
            <>
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6"
                >
                  <h3 className="text-white font-bold mb-2">Card {i}</h3>
                  <p className="text-white/60 text-sm">Responsive content</p>
                </div>
              ))}
            </>
          )}
        </div>
      </main>
    </div>
  );
}`,mobileLayout:`// Mobile Layout - 移动端布局组件
// 适用于 768px 以下屏幕，底部标签栏 + 单列内容

import React, { useState } from 'react';
import { Home, Search, Bell, User } from 'lucide-react';

interface MobileLayoutProps {
  children: React.ReactNode;
}

export function MobileLayout({ children }: MobileLayoutProps) {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'search', label: 'Search', icon: Search },
    { id: 'notifications', label: 'Alerts', icon: Bell },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="min-h-screen flex flex-col pb-20">
      {/* 顶部状态栏 */}
      <header className="
        sticky top-0 z-30
        backdrop-blur-xl bg-white/5
        border-b border-white/10
        px-4 py-3
      ">
        <h1 className="text-lg text-white font-bold text-center">App Title</h1>
      </header>

      {/* 单列内容区域 */}
      <main className="flex-1 p-4 space-y-4">
        {children || (
          <>
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="
                  backdrop-blur-xl bg-white/5
                  border border-white/10
                  rounded-2xl p-4
                "
              >
                <h3 className="text-white font-bold mb-1">Item {i}</h3>
                <p className="text-white/60 text-sm">Mobile-optimized content card</p>
              </div>
            ))}
          </>
        )}
      </main>

      {/* 底部标签栏 */}
      <nav className="
        fixed bottom-0 left-0 right-0 z-30
        backdrop-blur-xl bg-white/10
        border-t border-white/20
        flex justify-around
        px-2 py-2
        safe-area-inset-bottom
      ">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={\`
              flex flex-col items-center gap-1 px-4 py-2 rounded-xl
              transition-all duration-200
              \${activeTab === id
                ? 'text-blue-400 bg-blue-500/10'
                : 'text-white/50 hover:text-white/70'
              }
            \`}
          >
            <Icon size={22} />
            <span className="text-xs">{label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}`,adaptiveLayouts:`// Adaptive Layout - 自适应断点布局
// 根据屏幕尺寸自动切换布局模式

import React from 'react';

interface AdaptiveLayoutProps {
  children: React.ReactNode;
}

export function AdaptiveLayout({ children }: AdaptiveLayoutProps) {
  return (
    <div className="min-h-screen">
      {/* 顶部导航 - 响应式 */}
      <header className="
        backdrop-blur-xl bg-white/5
        border-b border-white/10
        px-4 md:px-8 py-4
      ">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-xl md:text-2xl text-white font-bold">Adaptive</h1>
          {/* 桌面端显示导航链接 */}
          <nav className="hidden md:flex items-center gap-6">
            {['Home', 'About', 'Services', 'Contact'].map((link) => (
              <a key={link} href="#" className="text-white/70 hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* 主内容 - 断点自适应 */}
      <main className="max-w-7xl mx-auto p-4 md:p-8">
        {/* 移动端: 1列, 平板: 2列, 桌面: 3列 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {children || (
            <>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="
                    backdrop-blur-xl
                    bg-gradient-to-br from-white/10 to-white/5
                    border border-white/20
                    rounded-2xl p-6
                    hover:border-white/30
                    transition-all duration-300
                  "
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400/20 to-purple-500/20 mb-4" />
                  <h3 className="text-white font-bold mb-2">Feature {i}</h3>
                  <p className="text-white/60 text-sm">
                    Responsive content that adapts to different screen sizes automatically.
                  </p>
                </div>
              ))}
            </>
          )}
        </div>
      </main>
    </div>
  );
}

// 响应式断点速查表:
// sm:  640px   - 小型手机横屏
// md:  768px   - 平板竖屏
// lg:  1024px  - 平板横屏/小型笔记本
// xl:  1280px  - 标准笔记本
// 2xl: 1536px  - 大屏桌面`,fluidGrids:`// Fluid Grid System - 流式网格系统
// 基于 CSS Grid 和 Flexbox 的自适应网格

import React from 'react';

// ============================================
// 1. 基础流式网格
// ============================================
interface FluidGridProps {
  columns?: number;
  gap?: string;
  children: React.ReactNode;
  className?: string;
}

export function FluidGrid({
  columns = 3,
  gap = 'gap-6',
  children,
  className = ''
}: FluidGridProps) {
  const colClass: Record<number, string> = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
    12: 'grid-cols-3 md:grid-cols-6 lg:grid-cols-12',
  };

  return (
    <div className={\`grid \${colClass[columns] || colClass[3]} \${gap} \${className}\`}>
      {children}
    </div>
  );
}

// ============================================
// 2. 自动填充网格 (Auto-fit)
// ============================================
export function AutoFitGrid({
  minWidth = '280px',
  gap = '1.5rem',
  children,
  className = ''
}: {
  minWidth?: string;
  gap?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{
        display: 'grid',
        gridTemplateColumns: \`repeat(auto-fit, minmax(\${minWidth}, 1fr))\`,
        gap,
      }}
    >
      {children}
    </div>
  );
}

// ============================================
// 3. 使用示例
// ============================================
function GridExample() {
  return (
    <div className="space-y-12 p-8">
      {/* 3列响应式网格 */}
      <FluidGrid columns={3}>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="
              backdrop-blur-xl bg-white/5
              border border-white/10
              rounded-2xl p-6
            "
          >
            <h4 className="text-white font-bold">Card {i}</h4>
            <p className="text-white/60 text-sm mt-2">Grid item content</p>
          </div>
        ))}
      </FluidGrid>

      {/* 自动填充网格 */}
      <AutoFitGrid minWidth="250px">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="
              backdrop-blur-xl bg-white/5
              border border-white/10
              rounded-2xl p-6
            "
          >
            <h4 className="text-white font-bold">Auto {i}</h4>
            <p className="text-white/60 text-sm mt-2">Auto-fit content</p>
          </div>
        ))}
      </AutoFitGrid>
    </div>
  );
}`,loadingSection:`import React from 'react';
import { Loader2 } from 'lucide-react';

// Spinner
<Loader2 className="animate-spin text-white" size={48} />

// Loading Overlay
<div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
  <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8">
    <Loader2 className="animate-spin text-white mx-auto mb-4" size={48} />
    <p className="text-white text-lg">Loading...</p>
  </div>
</div>`,logoWithTextLarge:`// Logo with Text - Large Size
// 大尺寸品牌 Logo，适用于首页 Hero 区域和启动页

import React from 'react';
import { Droplets } from 'lucide-react';

export function GlassLogoLarge() {
  return (
    <div className="flex items-center gap-5">
      {/* Logo Icon */}
      <div className="
        relative w-20 h-20
        rounded-2xl
        bg-gradient-to-br from-blue-400/20 to-purple-500/20
        backdrop-blur-xl
        border border-white/20
        shadow-2xl shadow-blue-500/20
        flex items-center justify-center
        overflow-hidden
      ">
        {/* 流动渐变背景 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-purple-400/20 to-pink-400/30 animate-pulse" />
        <Droplets className="relative text-blue-300 drop-shadow-lg" size={40} />
      </div>

      {/* Brand Text */}
      <div>
        <h1 className="text-4xl text-white font-bold tracking-tight">
          <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Liquid Glass
          </span>
        </h1>
        <p className="text-white/60 text-lg mt-1">Design System</p>
      </div>
    </div>
  );
}

// 使用示例:
<GlassLogoLarge />`,logoWithTextMedium:`// Logo with Text - Medium Size
// 中等尺寸 Logo，适用于页面顶部导航栏

import React from 'react';
import { Droplets } from 'lucide-react';

export function GlassLogoMedium() {
  return (
    <div className="flex items-center gap-3">
      {/* Logo Icon */}
      <div className="
        relative w-12 h-12
        rounded-xl
        bg-gradient-to-br from-blue-400/20 to-purple-500/20
        backdrop-blur-xl
        border border-white/20
        shadow-lg shadow-blue-500/10
        flex items-center justify-center
        overflow-hidden
      ">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/10 to-pink-400/20" />
        <Droplets className="relative text-blue-300" size={24} />
      </div>

      {/* Brand Text */}
      <div>
        <h1 className="text-2xl text-white font-bold tracking-tight">
          <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Liquid Glass
          </span>
        </h1>
        <p className="text-white/60 text-sm">Design System</p>
      </div>
    </div>
  );
}

// 在导航栏中使用:
<nav className="
  backdrop-blur-xl bg-white/5
  border-b border-white/10
  px-6 py-3
">
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    <GlassLogoMedium />
    <div className="flex items-center gap-4">
      {/* 导航链接 */}
    </div>
  </div>
</nav>`,logoWithTextSmall:`// Logo with Text - Small Size
// 小尺寸 Logo，适用于侧边栏、页脚和紧凑空间

import React from 'react';
import { Droplets } from 'lucide-react';

export function GlassLogoSmall() {
  return (
    <div className="flex items-center gap-2">
      {/* Logo Icon */}
      <div className="
        w-8 h-8
        rounded-lg
        bg-gradient-to-br from-blue-400/20 to-purple-500/20
        backdrop-blur-xl
        border border-white/20
        flex items-center justify-center
      ">
        <Droplets className="text-blue-300" size={16} />
      </div>

      {/* Brand Text */}
      <span className="text-base text-white font-bold">
        <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
          LG
        </span>
      </span>
    </div>
  );
}

// 仅图标的极小 Logo (用于 Favicon 或头像):
export function GlassLogoIcon({ size = 32 }: { size?: number }) {
  return (
    <div
      className="
        rounded-lg
        bg-gradient-to-br from-blue-400/20 to-purple-500/20
        backdrop-blur-xl
        border border-white/20
        flex items-center justify-center
      "
      style={{ width: size, height: size }}
    >
      <Droplets className="text-blue-300" size={size * 0.5} />
    </div>
  );
}

// 使用示例:
<GlassLogoSmall />
<GlassLogoIcon size={24} />
<GlassLogoIcon size={32} />
<GlassLogoIcon size={48} />`,logoWithTextCompact:`// Logo with Text - Compact (No Subtitle)
// 紧凑 Logo 变体，不显示副标题，适用于空间有限的场景

import React from 'react';
import { Droplets } from 'lucide-react';

interface GlassLogoCompactProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function GlassLogoCompact({ size = 'md', className = '' }: GlassLogoCompactProps) {
  const sizes = {
    sm: { container: 'w-7 h-7', icon: 14, text: 'text-sm', gap: 'gap-1.5', rounded: 'rounded-md' },
    md: { container: 'w-10 h-10', icon: 20, text: 'text-lg', gap: 'gap-2', rounded: 'rounded-lg' },
    lg: { container: 'w-14 h-14', icon: 28, text: 'text-2xl', gap: 'gap-3', rounded: 'rounded-xl' },
  };

  const s = sizes[size];

  return (
    <div className={\`flex items-center \${s.gap} \${className}\`}>
      <div className={\`
        \${s.container} \${s.rounded}
        bg-gradient-to-br from-blue-400/20 to-purple-500/20
        backdrop-blur-xl
        border border-white/20
        flex items-center justify-center
      \`}>
        <Droplets className="text-blue-300" size={s.icon} />
      </div>
      <span className={\`\${s.text} text-white font-bold\`}>
        <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
          Liquid Glass
        </span>
      </span>
    </div>
  );
}

// 使用示例 - 不同尺寸:
<GlassLogoCompact size="sm" />
<GlassLogoCompact size="md" />
<GlassLogoCompact size="lg" />

// 在侧边栏顶部使用:
<aside className="w-64 backdrop-blur-xl bg-white/5 border-r border-white/10 p-4">
  <GlassLogoCompact size="md" className="mb-8" />
  <nav className="space-y-2">
    {/* 导航项 */}
  </nav>
</aside>

// 在页脚使用:
<footer className="backdrop-blur-xl bg-white/5 border-t border-white/10 px-8 py-6">
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    <GlassLogoCompact size="sm" />
    <p className="text-white/50 text-sm">© 2026 Liquid Glass. All rights reserved.</p>
  </div>
</footer>`,messageSection:`import React from 'react';
import { X } from 'lucide-react';

// Success Message
<div className="backdrop-blur-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-4">
  <div className="flex items-start justify-between gap-3">
    <div>
      <h4 className="text-green-300 font-bold mb-1">Success</h4>
      <p className="text-white/90 text-sm">Operation completed successfully!</p>
    </div>
    <button className="text-green-300 hover:text-green-200">
      <X size={20} />
    </button>
  </div>
</div>`,modalSizes:`// GlassModal 组件 - 完整实现
// 支持 sm / md / lg 三种尺寸，带毛玻璃背景和流畅动画

import React from 'react';
import { X } from 'lucide-react';

interface GlassModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function GlassModal({
  isOpen,
  onClose,
  title,
  size = 'md',
  children
}: GlassModalProps) {
  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-lg',
    lg: 'max-w-3xl',
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* 背景遮罩 */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal 内容 */}
      <div
        className={\`
          relative w-full \${sizeClasses[size]}
          backdrop-blur-xl
          bg-gradient-to-br from-white/15 to-white/5
          border border-white/20
          rounded-3xl
          shadow-2xl shadow-black/30
          p-8
        \`}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div className="flex items-start justify-between mb-6">
            <h3 className="text-white text-2xl font-bold">{title}</h3>
            <button
              onClick={onClose}
              className="p-2 -mr-2 -mt-2 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              <X size={20} />
            </button>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

// 使用示例:
const [isSmall, setIsSmall] = useState(false);
const [isMedium, setIsMedium] = useState(false);
const [isLarge, setIsLarge] = useState(false);

<GlassModal isOpen={isSmall} onClose={() => setIsSmall(false)} title="Small" size="sm">
  <p className="text-white/70">Small modal content</p>
</GlassModal>

<GlassModal isOpen={isMedium} onClose={() => setIsMedium(false)} title="Medium" size="md">
  <p className="text-white/70">Medium modal content</p>
</GlassModal>

<GlassModal isOpen={isLarge} onClose={() => setIsLarge(false)} title="Large" size="lg">
  <p className="text-white/70">Large modal content</p>
</GlassModal>`,smallModal:`// Small Modal - 小型确认弹窗
// 适用于简短提示、确认操作等场景

import React, { useState } from 'react';
import { X, AlertTriangle } from 'lucide-react';

export function SmallConfirmModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 rounded-xl backdrop-blur-xl bg-gradient-to-r from-red-500/20 to-rose-500/20 border border-white/20 text-white hover:from-red-500/30 hover:to-rose-500/30 transition-all duration-300"
      >
        Delete Item
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-sm backdrop-blur-xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 rounded-3xl shadow-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-400/30 flex items-center justify-center">
                <AlertTriangle size={20} className="text-red-400" />
              </div>
              <h3 className="text-white text-lg font-bold">Confirm Delete</h3>
            </div>

            <p className="text-white/70 text-sm mb-6">
              Are you sure you want to delete this item? This action cannot be undone.
            </p>

            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm transition-all duration-200"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white text-sm transition-all duration-200"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}`,basicModal:`// Basic Modal - 标准信息弹窗
// 适用于展示详细信息、功能介绍等

import React, { useState } from 'react';
import { X, Heart, Settings, Star } from 'lucide-react';

export function BasicInfoModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 rounded-xl backdrop-blur-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/20 text-white hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-lg backdrop-blur-xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 rounded-3xl shadow-2xl p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-white text-2xl font-bold">Welcome to Liquid Glass</h3>
              <button onClick={() => setIsOpen(false)} className="p-2 -mr-2 -mt-2 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-all">
                <X size={20} />
              </button>
            </div>

            <p className="text-white/80 mb-4">
              This is a medium-sized modal with glassmorphism effects.
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-white/70">
                <Heart size={18} className="text-pink-400 flex-shrink-0" />
                <span>Elegant glassmorphism design</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Settings size={18} className="text-blue-400 flex-shrink-0" />
                <span>Smooth animation transitions</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Star size={18} className="text-yellow-400 flex-shrink-0" />
                <span>Fully responsive and accessible</span>
              </li>
            </ul>

            <div className="flex gap-3">
              <button onClick={() => setIsOpen(false)} className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 border border-white/20 text-white transition-all duration-200">
                Confirm
              </button>
              <button onClick={() => setIsOpen(false)} className="px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 text-white transition-all duration-200">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}`,largeModalWithForm:`// Large Modal with Form - 大型表单弹窗
// 适用于联系表单、编辑详情等需要大量输入的场景

import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

export function ContactFormModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: ''
  });

  const inputClasses = \`
    w-full px-4 py-3 rounded-xl
    backdrop-blur-md bg-white/10
    border border-white/20
    text-white placeholder-white/40
    focus:outline-none focus:ring-2 focus:ring-blue-400/30
    focus:border-blue-400/50
    transition-all duration-200
  \`;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 rounded-xl backdrop-blur-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/20 text-white hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
      >
        Contact Us
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-3xl backdrop-blur-xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 rounded-3xl shadow-2xl p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-white text-2xl font-bold">Contact Form</h3>
                <p className="text-white/60 text-sm mt-1">Fill out this form to get in touch.</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 -mr-2 -mt-2 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-all">
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 text-sm mb-2">Your Name</label>
                  <input type="text" placeholder="John Doe" value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputClasses} />
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-2">Email</label>
                  <input type="email" placeholder="john@example.com" value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClasses} />
                </div>
              </div>

              <div>
                <label className="block text-white/70 text-sm mb-2">Subject</label>
                <input type="text" placeholder="How can we help?" value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={inputClasses} />
              </div>

              <div>
                <label className="block text-white/70 text-sm mb-2">Message</label>
                <textarea rows={5} placeholder="Tell us more..." value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={\`\${inputClasses} resize-none\`} />
              </div>

              <div className="flex gap-3 pt-4">
                <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg shadow-blue-500/30 transition-all duration-200">
                  <Send size={18} />
                  Send Message
                </button>
                <button onClick={() => setIsOpen(false)} className="px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 text-white transition-all duration-200">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}`,navigationSection:`import React from 'react';
import { Home, Search, User, Settings } from 'lucide-react';

// Navigation Bar
<nav className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border-b border-white/20 px-8 py-4">
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    <div className="text-white text-xl font-bold">Brand</div>
    <div className="flex gap-6">
      <button className="flex items-center gap-2 text-white/70 hover:text-white">
        <Home size={20} />
        <span>Home</span>
      </button>
      <button className="flex items-center gap-2 text-white/70 hover:text-white">
        <Search size={20} />
        <span>Search</span>
      </button>
      <button className="flex items-center gap-2 text-white/70 hover:text-white">
        <User size={20} />
        <span>Profile</span>
      </button>
      <button className="flex items-center gap-2 text-white/70 hover:text-white">
        <Settings size={20} />
        <span>Settings</span>
      </button>
    </div>
  </div>
</nav>`,searchSection:`import React from 'react';
import { useState } from 'react';
import { Search } from 'lucide-react';

// Search Input
const [query, setQuery] = useState('');

<div className="relative">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={20} />
  <input
    type="text"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    placeholder="Search..."
    className="
      w-full pl-10 pr-4 py-2.5
      bg-white/10
      border border-white/20
      rounded-xl
      text-white placeholder-white/40
      focus:outline-none focus:border-blue-400/50
    "
  />
</div>`,tableSection:`import React from 'react';
import { useState } from 'react';

// Table with Sorting & Pagination
const [currentPage, setCurrentPage] = useState(1);
const [sortColumn, setSortColumn] = useState(null);

<div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl overflow-hidden">
  <table className="w-full">
    <thead>
      <tr className="bg-white/5 border-b border-white/10">
        <th className="px-4 py-3 text-left text-white/70 text-sm font-medium">Name</th>
        <th className="px-4 py-3 text-left text-white/70 text-sm font-medium">Email</th>
        <th className="px-4 py-3 text-left text-white/70 text-sm font-medium">Role</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b border-white/5 hover:bg-white/5">
        <td className="px-4 py-3 text-white/90 text-sm">John Doe</td>
        <td className="px-4 py-3 text-white/90 text-sm">john@example.com</td>
        <td className="px-4 py-3 text-white/90 text-sm">Developer</td>
      </tr>
    </tbody>
  </table>
</div>`,toggleSection:{basicToggles:`// Basic Toggle Switches - 基础开关组件
// 支持 sm / md / lg 三种尺寸和 disabled 状态

import React, { useState } from 'react';

interface GlassToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'success' | 'warning' | 'danger';
  disabled?: boolean;
}

export function GlassToggle({
  checked,
  onChange,
  size = 'md',
  variant = 'primary',
  disabled = false,
}: GlassToggleProps) {
  const sizes = {
    sm: { track: 'w-10 h-5', thumb: 'w-3.5 h-3.5', translate: 'translate-x-5' },
    md: { track: 'w-14 h-7', thumb: 'w-5 h-5', translate: 'translate-x-7' },
    lg: { track: 'w-18 h-9', thumb: 'w-7 h-7', translate: 'translate-x-9' },
  };

  const variants = {
    primary: 'bg-blue-500 shadow-blue-500/50',
    success: 'bg-green-500 shadow-green-500/50',
    warning: 'bg-yellow-500 shadow-yellow-500/50',
    danger: 'bg-red-500 shadow-red-500/50',
  };

  const s = sizes[size];

  return (
    <button
      onClick={() => !disabled && onChange(!checked)}
      disabled={disabled}
      className={\\\`
        relative \\\${s.track} rounded-full
        transition-all duration-300 ease-in-out
        \\\${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        \\\${checked
          ? \\\`\\\${variants[variant]} shadow-lg\\\`
          : 'bg-white/20 hover:bg-white/30'
        }
      \\\`}
    >
      <div
        className={\\\`
          absolute top-1 left-1
          \\\${s.thumb} rounded-full
          bg-white shadow-md
          transition-transform duration-300 ease-in-out
          \\\${checked ? s.translate : 'translate-x-0'}
        \\\`}
      />
    </button>
  );
}

// 使用示例 - 不同尺寸:
<GlassToggle checked={true} onChange={() => {}} size="sm" />
<GlassToggle checked={true} onChange={() => {}} size="md" />
<GlassToggle checked={true} onChange={() => {}} size="lg" />
<GlassToggle checked={false} onChange={() => {}} size="md" disabled />`,toggleVariants:`// Toggle Variants - 不同颜色变体
// 支持 primary / success / warning / danger 四种语义化颜色

import React, { useState } from 'react';

function ToggleVariantsDemo() {
  const [states, setStates] = useState({
    primary: true, success: true, warning: true, danger: true,
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="flex flex-col items-center gap-3">
        <GlassToggle checked={states.primary} onChange={(v) => setStates({ ...states, primary: v })} variant="primary" />
        <span className="text-white/60 text-sm">Primary</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <GlassToggle checked={states.success} onChange={(v) => setStates({ ...states, success: v })} variant="success" />
        <span className="text-white/60 text-sm">Success</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <GlassToggle checked={states.warning} onChange={(v) => setStates({ ...states, warning: v })} variant="warning" />
        <span className="text-white/60 text-sm">Warning</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <GlassToggle checked={states.danger} onChange={(v) => setStates({ ...states, danger: v })} variant="danger" />
        <span className="text-white/60 text-sm">Danger</span>
      </div>
    </div>
  );
}

// 变体颜色映射:
// primary: 'bg-blue-500 shadow-blue-500/50'
// success: 'bg-green-500 shadow-green-500/50'
// warning: 'bg-yellow-500 shadow-yellow-500/50'
// danger:  'bg-red-500 shadow-red-500/50'`,interactiveToggles:`// Interactive Toggles with Icons - 带图标的交互式开关
// 适用于系统设置面板，开关状态联动图标和文案

import React, { useState } from 'react';
import { Wifi, WifiOff, Bell, BellOff, Moon, Sun, Volume2, VolumeX } from 'lucide-react';

function InteractiveTogglesDemo() {
  const [wifi, setWifi] = useState(true);
  const [notifications, setNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [sound, setSound] = useState(true);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
        <div className="flex items-center gap-3">
          {wifi ? <Wifi className="text-blue-400" size={24} /> : <WifiOff className="text-white/40" size={24} />}
          <div>
            <h4 className="text-white font-semibold">Wi-Fi</h4>
            <p className="text-white/60 text-sm">{wifi ? 'Connected' : 'Disconnected'}</p>
          </div>
        </div>
        <GlassToggle checked={wifi} onChange={setWifi} variant="primary" />
      </div>

      <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
        <div className="flex items-center gap-3">
          {notifications ? <Bell className="text-yellow-400" size={24} /> : <BellOff className="text-white/40" size={24} />}
          <div>
            <h4 className="text-white font-semibold">Notifications</h4>
            <p className="text-white/60 text-sm">{notifications ? 'Enabled' : 'Disabled'}</p>
          </div>
        </div>
        <GlassToggle checked={notifications} onChange={setNotifications} variant="warning" />
      </div>

      <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
        <div className="flex items-center gap-3">
          {darkMode ? <Moon className="text-purple-400" size={24} /> : <Sun className="text-white/40" size={24} />}
          <div>
            <h4 className="text-white font-semibold">Dark Mode</h4>
            <p className="text-white/60 text-sm">{darkMode ? 'On' : 'Off'}</p>
          </div>
        </div>
        <GlassToggle checked={darkMode} onChange={setDarkMode} variant="primary" />
      </div>

      <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
        <div className="flex items-center gap-3">
          {sound ? <Volume2 className="text-green-400" size={24} /> : <VolumeX className="text-white/40" size={24} />}
          <div>
            <h4 className="text-white font-semibold">Sound</h4>
            <p className="text-white/60 text-sm">{sound ? 'On' : 'Muted'}</p>
          </div>
        </div>
        <GlassToggle checked={sound} onChange={setSound} variant="success" />
      </div>
    </div>
  );
}`,settingsList:`// Settings List - 设置列表
// 适用于应用设置页面，带分隔线和描述文案

import React, { useState } from 'react';

function SettingsListDemo() {
  const [autoSave, setAutoSave] = useState(false);
  const [emailNotif, setEmailNotif] = useState(true);
  const [twoFA, setTwoFA] = useState(false);

  return (
    <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-6">
      <h3 className="text-white text-2xl mb-6">Settings</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between py-3 border-b border-white/10">
          <div>
            <h4 className="text-white font-medium">Auto-save</h4>
            <p className="text-white/60 text-sm">Automatically save changes</p>
          </div>
          <GlassToggle checked={autoSave} onChange={setAutoSave} />
        </div>

        <div className="flex items-center justify-between py-3 border-b border-white/10">
          <div>
            <h4 className="text-white font-medium">Email notifications</h4>
            <p className="text-white/60 text-sm">Receive updates via email</p>
          </div>
          <GlassToggle checked={emailNotif} onChange={setEmailNotif} />
        </div>

        <div className="flex items-center justify-between py-3">
          <div>
            <h4 className="text-white font-medium">Two-factor authentication</h4>
            <p className="text-white/60 text-sm">Add an extra layer of security</p>
          </div>
          <GlassToggle
            checked={twoFA}
            onChange={setTwoFA}
            variant={twoFA ? 'success' : 'primary'}
          />
        </div>
      </div>
    </div>
  );
}`,compactToggles:`// Compact Toggles - 紧凑型开关网格
// 适用于功能开关面板、批量启停控制

import React, { useState } from 'react';

function CompactTogglesDemo() {
  const features = [
    'Feature A', 'Feature B', 'Feature C', 'Feature D', 'Feature E',
    'Feature F', 'Feature G', 'Feature H', 'Feature I', 'Feature J',
  ];

  const [enabled, setEnabled] = useState<Record<string, boolean>>(
    Object.fromEntries(features.map((f, i) => [f, i % 2 === 0]))
  );

  return (
    <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-6">
      <h3 className="text-white text-2xl mb-6">Compact View</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-2">
            <GlassToggle
              checked={enabled[feature]}
              onChange={() => setEnabled(prev => ({ ...prev, [feature]: !prev[feature] }))}
              size="sm"
            />
            <span className="text-white/70 text-sm">{feature}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-3 mt-6 pt-4 border-t border-white/10">
        <button
          onClick={() => setEnabled(Object.fromEntries(features.map(f => [f, true])))}
          className="px-4 py-2 rounded-xl bg-green-500/20 hover:bg-green-500/30 border border-green-400/30 text-green-300 text-sm transition-all duration-200"
        >
          Enable All
        </button>
        <button
          onClick={() => setEnabled(Object.fromEntries(features.map(f => [f, false])))}
          className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white/70 text-sm transition-all duration-200"
        >
          Disable All
        </button>
      </div>
    </div>
  );
}`},tooltipSection:`import React from 'react';
import { useState } from 'react';

// Tooltip
const [showTooltip, setShowTooltip] = useState(false);

<div className="relative">
  <button
    onMouseEnter={() => setShowTooltip(true)}
    onMouseLeave={() => setShowTooltip(false)}
    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white"
  >
    Hover me
  </button>
  {showTooltip && (
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 backdrop-blur-xl bg-gradient-to-br from-white/95 to-white/90 border border-white/20 rounded-lg px-3 py-2">
      <p className="text-gray-800 text-sm whitespace-nowrap">Tooltip content</p>
    </div>
  )}
</div>`};function sg({addToast:o}){return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-[var(--brand-secondary)] to-[var(--brand-accent)] bg-clip-text text-transparent",children:"Charts & Visualizations"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Beautiful data visualization components with glassmorphism effects"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-4",children:"Bar Chart"}),e.jsx(Xp,{data:[{label:"Mon",value:65,color:"rgba(96, 165, 250, 0.9)"},{label:"Tue",value:78,color:"rgba(168, 85, 247, 0.9)"},{label:"Wed",value:90,color:"rgba(236, 72, 153, 0.9)"},{label:"Thu",value:81,color:"rgba(34, 197, 94, 0.9)"},{label:"Fri",value:95,color:"rgba(251, 146, 60, 0.9)"},{label:"Sat",value:72,color:"rgba(250, 204, 21, 0.9)"},{label:"Sun",value:68,color:"rgba(139, 92, 246, 0.9)"}],height:300,showGrid:!0,showValues:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-4",children:"Line Chart"}),e.jsx(Zp,{data:[{label:"Jan",value:4e3},{label:"Feb",value:3e3},{label:"Mar",value:5e3},{label:"Apr",value:4500},{label:"May",value:6e3},{label:"Jun",value:5500}],height:300,smooth:!0,showGrid:!0,showDots:!0})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-4",children:"Donut Chart"}),e.jsx(C,{padding:"lg",children:e.jsx(tg,{data:[{label:"Direct",value:4200,color:"rgba(103, 126, 234, 0.8)"},{label:"Organic",value:3800,color:"rgba(118, 75, 162, 0.8)"},{label:"Social",value:2100,color:"rgba(79, 172, 254, 0.8)"},{label:"Referral",value:1900,color:"rgba(67, 233, 123, 0.8)"},{label:"Email",value:1500,color:"rgba(250, 112, 154, 0.8)"}],size:280,donut:!0,showLegend:!0})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-4",children:"Gauge Charts"}),e.jsx(C,{padding:"lg",children:e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsx(Su,{value:75,max:100,size:160,label:"Performance"}),e.jsx(Su,{value:82,max:100,size:160,label:"Efficiency"})]})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-4",children:"Area Chart (Wave Chart)"}),e.jsx(eg,{data:[{label:"Jan",values:{Sales:4e3,Revenue:2400,Profit:1400}},{label:"Feb",values:{Sales:3e3,Revenue:1398,Profit:900}},{label:"Mar",values:{Sales:5e3,Revenue:3800,Profit:2100}},{label:"Apr",values:{Sales:4500,Revenue:3908,Profit:2500}},{label:"May",values:{Sales:6e3,Revenue:4800,Profit:3200}},{label:"Jun",values:{Sales:5500,Revenue:3800,Profit:2800}}],height:300,smooth:!0,stacked:!1})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-4",children:"Percentage Indicators"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6",children:[e.jsx(C,{padding:"lg",className:"flex flex-col items-center",children:e.jsx(ja,{value:85,variant:"circular",size:"md",label:"Goal"})}),e.jsx(C,{padding:"lg",className:"flex flex-col items-center",children:e.jsx(ja,{value:72,variant:"circular",size:"md",label:"Progress"})}),e.jsx(C,{padding:"lg",className:"flex flex-col items-center",children:e.jsx(ja,{value:68,variant:"semi-circular",size:"md",label:"Performance"})}),e.jsx(C,{padding:"lg",className:"flex flex-col items-center",children:e.jsx(ja,{value:91,variant:"semi-circular",size:"md",label:"Uptime"})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-4",children:"Progress Bars"}),e.jsx(C,{padding:"lg",children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between mb-2",children:[e.jsx("span",{className:"text-white/80",children:"Primary Progress"}),e.jsx("span",{className:"text-white",children:"75%"})]}),e.jsx(Na,{value:75,variant:"primary"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between mb-2",children:[e.jsx("span",{className:"text-white/80",children:"Success Progress"}),e.jsx("span",{className:"text-white",children:"60%"})]}),e.jsx(Na,{value:60,variant:"success"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between mb-2",children:[e.jsx("span",{className:"text-white/80",children:"Warning Progress"}),e.jsx("span",{className:"text-white",children:"45%"})]}),e.jsx(Na,{value:45,variant:"warning"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between mb-2",children:[e.jsx("span",{className:"text-white/80",children:"Danger Progress"}),e.jsx("span",{className:"text-white",children:"30%"})]}),e.jsx(Na,{value:30,variant:"danger"})]})]})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-4",children:"Code Samples"}),e.jsx(ue,{code:xe.chartsSection})]})]})}function rg(){const o=[{name:"Inter",cssVar:"--font-sans",weights:[300,400,500,600,700,800,900]},{name:"Poppins",cssVar:"--font-display",weights:[300,400,500,600,700,800,900]},{name:"Space Grotesk",cssVar:"--font-geometric",weights:[300,400,500,600,700]},{name:"JetBrains Mono",cssVar:"--font-mono",weights:[300,400,500,600,700]},{name:"Playfair Display",cssVar:"--font-serif",weights:[400,500,600,700,800,900]},{name:"Montserrat",cssVar:"--font-modern",weights:[300,400,500,600,700,800,900]},{name:"Raleway",cssVar:"--font-elegant",weights:[300,400,500,600,700,800,900]},{name:"Outfit",cssVar:"--font-rounded",weights:[300,400,500,600,700,800,900]}],d={300:"Light",400:"Regular",500:"Medium",600:"SemiBold",700:"Bold",800:"ExtraBold",900:"Black"};return e.jsx("div",{className:"space-y-6",children:o.map(c=>e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:c.name}),e.jsx("div",{className:"space-y-4",children:c.weights.map(u=>e.jsxs("div",{className:"flex items-baseline gap-4",children:[e.jsx("span",{className:"text-white/60 text-sm w-24",children:d[u]}),e.jsx("p",{className:"text-white text-2xl flex-1",style:{fontFamily:`var(${c.cssVar})`,fontWeight:u},children:"The quick brown fox jumps over the lazy dog"})]},u))})]},c.name))})}function ng({value:o,onChange:d,className:c=""}){const u=[{name:"Inter",value:"var(--font-sans)",preview:"The quick brown fox jumps"},{name:"Poppins",value:"var(--font-display)",preview:"Modern & Clean Design"},{name:"Space Grotesk",value:"var(--font-geometric)",preview:"Geometric Sans Serif"},{name:"JetBrains Mono",value:"var(--font-mono)",preview:"Code & Terminal Font"},{name:"Playfair Display",value:"var(--font-serif)",preview:"Elegant Serif Style"},{name:"Montserrat",value:"var(--font-modern)",preview:"Contemporary Design"},{name:"Raleway",value:"var(--font-elegant)",preview:"Sophisticated Look"},{name:"Outfit",value:"var(--font-rounded)",preview:"Friendly Rounded Font"}];return e.jsx("div",{className:`space-y-3 ${c}`,children:u.map(h=>e.jsx("button",{onClick:()=>d(h.value),className:`
            w-full p-4 rounded-2xl
            backdrop-blur-md backdrop-saturate-150
            border-2 transition-all duration-300
            text-left
            ${o===h.value?"bg-[var(--glass-bg-medium)] border-[var(--status-info-border)] scale-[1.02]":"bg-[var(--glass-bg-light)] border-[var(--glass-border)] hover:bg-[var(--glass-bg-medium)] hover:border-[var(--glass-border-strong)]"}
          `,children:e.jsx("div",{className:"flex items-start justify-between gap-4",children:e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("h4",{className:"text-white",children:h.name}),o===h.value&&e.jsx(vs,{size:16,className:"text-[var(--brand-primary)]"})]}),e.jsx("p",{className:"text-[var(--text-tertiary)] text-lg",style:{fontFamily:h.value},children:h.preview})]})})},h.value))})}function ag({value:o,onChange:d,min:c=8,max:u=128,step:h=1,className:m=""}){const f=[12,14,16,18,20,24,32,48,64,96],w=()=>{o<u&&d(Math.min(o+h,u))},j=()=>{o>c&&d(Math.max(o-h,c))};return e.jsxs("div",{className:`space-y-4 ${m}`,children:[e.jsxs("div",{className:`
        backdrop-blur-md backdrop-saturate-150
        bg-[var(--glass-bg-light)]
        border border-[var(--glass-border)]
        rounded-2xl
        p-6
        text-center
      `,children:[e.jsx("p",{className:"text-[var(--text-muted)] text-sm mb-2",children:"Current Size"}),e.jsx("p",{className:"text-white text-6xl font-bold",children:o}),e.jsx("p",{className:"text-[var(--text-disabled)] text-sm mt-1",children:"pixels"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("button",{onClick:j,disabled:o<=c,className:`
            p-3 rounded-xl
            backdrop-blur-md backdrop-saturate-150
            bg-[var(--glass-bg-light)]
            border border-[var(--glass-border)]
            text-white
            disabled:opacity-50 disabled:cursor-not-allowed
            hover:bg-[var(--glass-bg-medium)]
            transition-all duration-200
          `,children:e.jsx(Iu,{size:20})}),e.jsx("input",{type:"range",min:c,max:u,step:h,value:o,onChange:b=>d(Number(b.target.value)),className:"flex-1"}),e.jsx("button",{onClick:w,disabled:o>=u,className:`
            p-3 rounded-xl
            backdrop-blur-md backdrop-saturate-150
            bg-[var(--glass-bg-light)]
            border border-[var(--glass-border)]
            text-white
            disabled:opacity-50 disabled:cursor-not-allowed
            hover:bg-[var(--glass-bg-medium)]
            transition-all duration-200
          `,children:e.jsx(Ji,{size:20})})]}),e.jsx("div",{className:"grid grid-cols-5 gap-2",children:f.map(b=>e.jsx("button",{onClick:()=>d(b),className:`
              py-2 px-3 rounded-xl
              backdrop-blur-md backdrop-saturate-150
              border-2 transition-all duration-200
              ${o===b?"bg-[var(--glass-bg-medium)] border-[var(--status-info-border)] text-white":"bg-[var(--glass-bg-light)] border-[var(--glass-border)] text-[var(--text-secondary)] hover:bg-[var(--glass-bg-medium)]"}
            `,children:b},b))})]})}function lg({value:o,onChange:d,className:c=""}){const[u,h]=I.useState("var(--font-sans)"),[m,f]=I.useState(16),[w,j]=I.useState(!1),[b,_]=I.useState(!1),[k,z]=I.useState(!1),[$,G]=I.useState("left"),F=[{name:"Inter",value:"var(--font-sans)"},{name:"Poppins",value:"var(--font-display)"},{name:"Space Grotesk",value:"var(--font-geometric)"},{name:"JetBrains Mono",value:"var(--font-mono)"}],B={fontFamily:u,fontSize:`${m}px`,fontWeight:w?700:400,fontStyle:b?"italic":"normal",textDecoration:k?"underline":"none",textAlign:$};return e.jsxs("div",{className:`space-y-4 ${c}`,children:[e.jsxs("div",{className:`
        backdrop-blur-md backdrop-saturate-150
        bg-[var(--glass-bg-light)]
        border border-[var(--glass-border)]
        rounded-2xl
        p-4
        flex flex-wrap gap-4 items-center
      `,children:[e.jsx("select",{value:u,onChange:Z=>h(Z.target.value),className:`
            px-4 py-2 rounded-xl
            backdrop-blur-md backdrop-saturate-150
            bg-[var(--glass-bg-light)]
            border border-[var(--glass-border)]
            text-white
            outline-none
            cursor-pointer
          `,children:F.map(Z=>e.jsx("option",{value:Z.value,className:"bg-gray-800",children:Z.name},Z.value))}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Wi,{size:16,className:"text-[var(--text-muted)]"}),e.jsx("input",{type:"number",value:m,onChange:Z=>f(Number(Z.target.value)),min:8,max:72,className:`
              w-16 px-2 py-2 rounded-xl
              backdrop-blur-md backdrop-saturate-150
              bg-[var(--glass-bg-light)]
              border border-[var(--glass-border)]
              text-white text-center
              outline-none
            `})]}),e.jsx("div",{className:"h-6 w-px bg-[var(--glass-border)]"}),e.jsx("button",{onClick:()=>j(!w),className:`
            p-2 rounded-xl transition-all duration-200
            ${w?"bg-[var(--glass-bg-medium)] text-white":"bg-[var(--glass-bg-light)] text-[var(--text-muted)] hover:bg-[var(--glass-bg-medium)]"}
          `,children:e.jsx(jm,{size:20})}),e.jsx("button",{onClick:()=>_(!b),className:`
            p-2 rounded-xl transition-all duration-200
            ${b?"bg-[var(--glass-bg-medium)] text-white":"bg-[var(--glass-bg-light)] text-[var(--text-muted)] hover:bg-[var(--glass-bg-medium)]"}
          `,children:e.jsx(m0,{size:20})}),e.jsx("button",{onClick:()=>z(!k),className:`
            p-2 rounded-xl transition-all duration-200
            ${k?"bg-[var(--glass-bg-medium)] text-white":"bg-[var(--glass-bg-light)] text-[var(--text-muted)] hover:bg-[var(--glass-bg-medium)]"}
          `,children:e.jsx($p,{size:20})}),e.jsx("div",{className:"h-6 w-px bg-[var(--glass-border)]"}),e.jsx("button",{onClick:()=>G("left"),className:`
            p-2 rounded-xl transition-all duration-200
            ${$==="left"?"bg-[var(--glass-bg-medium)] text-white":"bg-[var(--glass-bg-light)] text-[var(--text-muted)] hover:bg-[var(--glass-bg-medium)]"}
          `,children:e.jsx(om,{size:20})}),e.jsx("button",{onClick:()=>G("center"),className:`
            p-2 rounded-xl transition-all duration-200
            ${$==="center"?"bg-[var(--glass-bg-medium)] text-white":"bg-[var(--glass-bg-light)] text-[var(--text-muted)] hover:bg-[var(--glass-bg-medium)]"}
          `,children:e.jsx(lm,{size:20})}),e.jsx("button",{onClick:()=>G("right"),className:`
            p-2 rounded-xl transition-all duration-200
            ${$==="right"?"bg-[var(--glass-bg-medium)] text-white":"bg-[var(--glass-bg-light)] text-[var(--text-muted)] hover:bg-[var(--glass-bg-medium)]"}
          `,children:e.jsx(dm,{size:20})})]}),e.jsx("div",{className:`
        backdrop-blur-md backdrop-saturate-150
        bg-[var(--glass-bg-light)]
        border border-[var(--glass-border)]
        rounded-2xl
        p-6
        min-h-[300px]
      `,children:e.jsx("textarea",{value:o,onChange:Z=>d(Z.target.value),placeholder:"Start typing...",className:`
            w-full h-full min-h-[250px]
            bg-transparent
            text-white
            placeholder:text-white/50
            outline-none
            resize-none
          `,style:B})})]})}function ig(){const[o,d]=I.useState("var(--font-sans)"),[c,u]=I.useState(24),[h,m]=I.useState("Welcome to Liquid Glass Design System!");return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-[var(--brand-secondary)] to-[var(--status-error)] bg-clip-text text-transparent",children:"Typography & Fonts"}),e.jsx("p",{className:"text-white/70 text-lg",children:"8 beautiful fonts with complete typography system"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Font Family Picker"}),e.jsx(ng,{value:o,onChange:d})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Font Size Picker"}),e.jsx(ag,{value:c,onChange:u,min:12,max:96,step:2}),e.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10",children:[e.jsx("p",{className:"text-white/60 text-sm mb-3",children:"Preview:"}),e.jsx("p",{className:"text-white leading-relaxed",style:{fontSize:`${c}px`,fontFamily:o},children:"The quick brown fox jumps over the lazy dog"})]})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Text Editor"}),e.jsx(lg,{value:h,onChange:m})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-3xl mb-6 text-center",children:"Complete Font Collection"}),e.jsx(rg,{})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-white text-3xl mb-6 text-center",children:"Code Samples"}),e.jsx(ue,{code:xe.fontsSection,language:"tsx"})]})]})}function Xt({type:o="text",placeholder:d,value:c,onChange:u,className:h="",icon:m}){return e.jsxs("div",{className:"relative",children:[m&&e.jsx("div",{className:"absolute left-4 top-1/2 -translate-y-1/2 text-white/60 pointer-events-none",children:m}),e.jsx("input",{type:o,placeholder:d,value:c,onChange:u,style:o==="date"?{colorScheme:"dark"}:void 0,className:`
          w-full rounded-2xl
          backdrop-blur-md backdrop-saturate-150
          bg-[var(--glass-bg-light)]
          border border-[var(--glass-border)]
          px-4 py-3 ${m?"pl-12":""}
          text-white placeholder:text-white/50
          outline-none
          focus:bg-[var(--glass-bg-medium)] focus:border-[var(--glass-border-strong)]
          focus:shadow-[var(--shadow-glass)]
          transition-all duration-300
          ${h}
        `})]})}function og({options:o,value:d,onChange:c,placeholder:u="Select an option",className:h=""}){const[m,f]=I.useState(!1),w=o.find(j=>j.value===d);return e.jsxs("div",{className:`relative ${h}`,children:[e.jsxs("button",{onClick:()=>f(!m),className:`
          w-full rounded-2xl
          backdrop-blur-md backdrop-saturate-150
          bg-[var(--glass-bg-light)]
          border border-[var(--glass-border)]
          px-4 py-3
          text-white text-left
          outline-none
          focus:bg-[var(--glass-bg-medium)] focus:border-[var(--glass-border-strong)]
          transition-all duration-300
          flex items-center justify-between
        `,children:[e.jsx("span",{className:w?"text-white":"text-[var(--text-placeholder)]",children:w?w.label:u}),e.jsx(Ts,{size:20,className:`text-[var(--text-muted)] transition-transform duration-200 ${m?"rotate-180":""}`})]}),m&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-10",onClick:()=>f(!1)}),e.jsx("div",{className:`
            absolute top-full left-0 right-0 mt-2 z-20
            backdrop-blur-xl backdrop-saturate-150
            bg-[var(--overlay-popover)]
            border border-[var(--glass-border)]
            rounded-2xl
            overflow-hidden
            shadow-[var(--shadow-overlay)]
            animate-in fade-in slide-in-from-top-2 duration-200
          `,children:o.map(j=>e.jsx("button",{onClick:()=>{c(j.value),f(!1)},className:`
                  w-full px-4 py-3 text-left
                  transition-colors duration-150
                  ${d===j.value?"bg-[var(--glass-bg-medium)] text-white":"text-[var(--text-secondary)] hover:bg-[var(--glass-bg-light)] hover:text-white"}
                `,children:j.label},j.value))})]})]})}function X({children:o,variant:d="primary",size:c="md",onClick:u,className:h="",disabled:m=!1}){const f=`
    relative overflow-hidden rounded-2xl
    backdrop-blur-md backdrop-saturate-150
    border border-[var(--glass-border)]
    transition-all duration-300
    hover:scale-105 hover:shadow-lg
    active:scale-95
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
  `,w={primary:`
      bg-[var(--glass-bg-light)] hover:bg-[var(--glass-bg-medium)]
      text-white shadow-[var(--shadow-btn-primary)]
      before:absolute before:inset-0 before:bg-gradient-to-br before:from-[var(--brand-primary)]/20 before:to-[var(--brand-secondary)]/20
    `,secondary:`
      bg-[var(--glass-bg-light)] hover:bg-[var(--glass-bg-medium)]
      text-white shadow-[var(--shadow-btn-secondary)]
      before:absolute before:inset-0 before:bg-gradient-to-br before:from-[var(--brand-secondary)]/20 before:to-[var(--status-error)]/20
    `,accent:`
      bg-[var(--glass-bg-light)] hover:bg-[var(--glass-bg-medium)]
      text-white shadow-[var(--shadow-btn-accent)]
      before:absolute before:inset-0 before:bg-gradient-to-br before:from-[var(--brand-accent)]/20 before:to-[var(--brand-primary)]/20
    `,success:`
      bg-[var(--glass-bg-light)] hover:bg-[var(--glass-bg-medium)]
      text-white shadow-[var(--shadow-btn-success)]
      before:absolute before:inset-0 before:bg-gradient-to-br before:from-[var(--status-success)]/20 before:to-[var(--status-success)]/20
    `,ghost:`
      bg-[var(--glass-bg-subtle)] hover:bg-[var(--glass-bg-light)]
      text-white/90 shadow-[var(--shadow-glass)]
    `},j={sm:"px-4 py-2 text-sm",md:"px-6 py-3 text-base",lg:"px-8 py-4 text-lg"};return e.jsx("button",{onClick:u,disabled:m,className:`${f} ${w[d]} ${j[c]} ${h}`,children:e.jsx("span",{className:"relative z-10 flex items-center justify-center",children:o})})}var cg=_u();const dg=Mu(cg);function ug({value:o,onChange:d,placeholder:c="MM/DD/YYYY",className:u=""}){const[h,m]=I.useState(!1),[f,w]=I.useState(o),[j,b]=I.useState(o||new Date),_=I.useRef(null),k=I.useRef(null),[z,$]=I.useState({top:0,left:0});I.useEffect(()=>{const re=we=>{if(_.current&&!_.current.contains(we.target)){const Ne=document.getElementById("glass-datepicker-portal");if(Ne&&Ne.contains(we.target))return;m(!1)}};return h&&document.addEventListener("mousedown",re),()=>document.removeEventListener("mousedown",re)},[h]),I.useEffect(()=>{if(h&&k.current){const re=k.current.getBoundingClientRect();$({top:re.bottom+8,left:re.left})}},[h]);const G=new Date(j.getFullYear(),j.getMonth()+1,0).getDate(),F=new Date(j.getFullYear(),j.getMonth(),1).getDay(),B=["January","February","March","April","May","June","July","August","September","October","November","December"],Z=["Su","Mo","Tu","We","Th","Fr","Sa"],he=()=>{b(new Date(j.getFullYear(),j.getMonth()-1))},ve=()=>{b(new Date(j.getFullYear(),j.getMonth()+1))},be=re=>{const we=new Date(j.getFullYear(),j.getMonth(),re);w(we),d==null||d(we),m(!1)},J=re=>{const we=new Date;return re===we.getDate()&&j.getMonth()===we.getMonth()&&j.getFullYear()===we.getFullYear()},ne=re=>f?re===f.getDate()&&j.getMonth()===f.getMonth()&&j.getFullYear()===f.getFullYear():!1,ie=re=>{if(!re)return"";const we=String(re.getMonth()+1).padStart(2,"0"),Ne=String(re.getDate()).padStart(2,"0"),K=re.getFullYear();return`${we}/${Ne}/${K}`};return e.jsxs("div",{ref:_,className:`relative ${u}`,children:[e.jsxs("div",{ref:k,onClick:()=>m(!h),className:`
          relative w-full rounded-2xl
          backdrop-blur-md backdrop-saturate-150
          bg-[var(--glass-bg-light)]
          border border-[var(--glass-border)]
          px-4 py-3 pl-12
          text-white
          outline-none
          hover:bg-[var(--glass-bg-medium)] hover:border-[var(--glass-border-strong)]
          transition-all duration-300
          select-none
        `,children:[e.jsx("div",{className:"absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] pointer-events-none",children:e.jsx(an,{size:20})}),e.jsx("span",{className:f?"text-white":"text-[var(--text-placeholder)]",children:f?ie(f):c})]}),h&&dg.createPortal(e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-[9998]",onClick:()=>m(!1)}),e.jsxs("div",{id:"glass-datepicker-portal",style:{position:"fixed",top:z.top,left:z.left},className:`
              z-[9999]
              w-[320px]
              backdrop-blur-xl backdrop-saturate-150
              bg-[var(--overlay-popover)]
              border border-[var(--glass-border)]
              rounded-2xl
              p-5
              shadow-[var(--shadow-overlay)]
            `,children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("button",{onClick:he,className:`
                  p-2 rounded-xl
                  hover:bg-[var(--glass-bg-light)]
                  transition-colors duration-200
                  text-white
                `,children:e.jsx(Ta,{size:18})}),e.jsxs("h3",{className:"text-white text-sm",children:[B[j.getMonth()]," ",j.getFullYear()]}),e.jsx("button",{onClick:ve,className:`
                  p-2 rounded-xl
                  hover:bg-[var(--glass-bg-light)]
                  transition-colors duration-200
                  text-white
                `,children:e.jsx(Gt,{size:18})})]}),e.jsx("div",{className:"grid grid-cols-7 gap-1 mb-1",children:Z.map(re=>e.jsx("div",{className:"text-center text-[var(--text-placeholder)] text-xs py-1.5",children:re},re))}),e.jsxs("div",{className:"grid grid-cols-7 gap-1",children:[Array.from({length:F},(re,we)=>e.jsx("div",{},`empty-${we}`)),Array.from({length:G},(re,we)=>{const Ne=we+1;return e.jsx("button",{onClick:()=>be(Ne),className:`
                      aspect-square rounded-lg
                      flex items-center justify-center
                      text-sm transition-all duration-200
                      ${ne(Ne)?"bg-gradient-to-br from-[var(--status-info-light)] to-[var(--brand-secondary)] text-white border border-[var(--status-info-border)] shadow-[0_0_12px_rgba(99,102,241,0.3)]":J(Ne)?"bg-[var(--glass-bg-medium)] text-white ring-1 ring-[var(--glass-border-strong)]":"text-[var(--text-secondary)] hover:bg-[var(--glass-bg-light)] hover:text-white"}
                    `,children:Ne},Ne)})]}),e.jsxs("div",{className:"mt-4 pt-3 border-t border-[var(--glass-dark-border)] flex items-center justify-between",children:[e.jsx("button",{onClick:()=>{const re=new Date;b(re),w(re),d==null||d(re),m(!1)},className:"text-xs text-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-colors",children:"Today"}),f&&e.jsx("button",{onClick:()=>{w(void 0),d==null||d(void 0)},className:"text-xs text-[var(--text-disabled)] hover:text-[var(--text-muted)] transition-colors",children:"Clear"})]})]})]}),document.body)]})}function xg({addToast:o}){const[d,c]=I.useState("");return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)] bg-clip-text text-transparent",children:"Forms & Inputs"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Beautiful form components with glass effects"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Text Inputs"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(Xt,{placeholder:"Search...",icon:e.jsx(xt,{size:20})}),e.jsx(Xt,{type:"email",placeholder:"Enter email",icon:e.jsx(za,{size:20})}),e.jsx("textarea",{placeholder:"Enter your message...",rows:4,value:d,onChange:u=>c(u.target.value),className:`
                w-full px-4 py-3
                bg-[var(--glass-bg-light)]
                border border-[var(--glass-border)]
                rounded-xl
                text-white placeholder-white/40
                focus:outline-none focus:border-blue-400/50
                resize-none
                transition-colors
              `})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Other Inputs"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(og,{options:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"}],placeholder:"Select an option"}),e.jsx(ug,{placeholder:"Select a date"}),e.jsx(Xt,{type:"tel",placeholder:"Phone number",icon:e.jsx(nn,{size:20})})]})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Contact Form Example"}),e.jsxs("form",{className:"space-y-4",onSubmit:u=>{u.preventDefault(),o("success","Form submitted!")},children:[e.jsx(Xt,{placeholder:"Full Name",icon:e.jsx(rt,{size:20})}),e.jsx(Xt,{type:"email",placeholder:"Email Address",icon:e.jsx(za,{size:20})}),e.jsx(Xt,{placeholder:"Website",icon:e.jsx(r0,{size:20})}),e.jsx("textarea",{placeholder:"Your message...",rows:6,className:`
              w-full px-4 py-3
              bg-[var(--glass-bg-light)]
              border border-[var(--glass-border)]
              rounded-xl
              text-white placeholder-white/40
              focus:outline-none focus:border-blue-400/50
              resize-none
              transition-colors
            `}),e.jsxs("div",{className:"flex justify-end gap-4",children:[e.jsx(X,{variant:"ghost",type:"button",children:"Cancel"}),e.jsx(X,{variant:"primary",type:"submit",children:"Submit"})]})]})]}),e.jsx(ue,{code:xe.formsSection})]})}function hg(){return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-secondary)] bg-clip-text text-transparent",children:"Layout Components"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Responsive layout patterns for web and mobile applications"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl font-bold mb-6",children:"Device Views"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(ya,{className:"text-blue-400",size:32}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white text-xl font-bold",children:"Desktop"}),e.jsx("p",{className:"text-white/60 text-sm",children:"1920×1080"})]})]}),e.jsx("div",{className:"aspect-video rounded-xl bg-white/5 border border-[var(--glass-border)] p-4",children:e.jsxs("div",{className:"h-full flex flex-col gap-2",children:[e.jsx("div",{className:"h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded"}),e.jsxs("div",{className:"flex-1 grid grid-cols-4 gap-2",children:[e.jsx("div",{className:"col-span-1 bg-[var(--glass-bg-light)] rounded"}),e.jsxs("div",{className:"col-span-3 space-y-2",children:[e.jsx("div",{className:"h-1/3 bg-[var(--glass-bg-light)] rounded"}),e.jsxs("div",{className:"h-2/3 grid grid-cols-2 gap-2",children:[e.jsx("div",{className:"bg-[var(--glass-bg-light)] rounded"}),e.jsx("div",{className:"bg-[var(--glass-bg-light)] rounded"})]})]})]})]})})]}),e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(yu,{className:"text-purple-400",size:32}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white text-xl font-bold",children:"Tablet"}),e.jsx("p",{className:"text-white/60 text-sm",children:"768×1024"})]})]}),e.jsx("div",{className:"aspect-[3/4] max-h-80 rounded-xl bg-white/5 border border-[var(--glass-border)] p-3 mx-auto",children:e.jsxs("div",{className:"h-full flex flex-col gap-2",children:[e.jsx("div",{className:"h-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded"}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx("div",{className:"h-1/4 bg-[var(--glass-bg-light)] rounded"}),e.jsxs("div",{className:"h-3/4 grid grid-cols-2 gap-2",children:[e.jsx("div",{className:"bg-[var(--glass-bg-light)] rounded"}),e.jsx("div",{className:"bg-[var(--glass-bg-light)] rounded"})]})]})]})})]}),e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(fu,{className:"text-pink-400",size:32}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white text-xl font-bold",children:"Mobile"}),e.jsx("p",{className:"text-white/60 text-sm",children:"375×812"})]})]}),e.jsx("div",{className:"aspect-[9/19.5] max-h-96 rounded-2xl bg-white/5 border border-[var(--glass-border)] p-3 mx-auto",children:e.jsxs("div",{className:"h-full flex flex-col gap-2",children:[e.jsx("div",{className:"h-12 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded"}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx("div",{className:"h-1/5 bg-[var(--glass-bg-light)] rounded"}),e.jsx("div",{className:"h-1/5 bg-[var(--glass-bg-light)] rounded"}),e.jsx("div",{className:"h-1/5 bg-[var(--glass-bg-light)] rounded"}),e.jsx("div",{className:"h-1/5 bg-[var(--glass-bg-light)] rounded"})]})]})})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl font-bold mb-6",children:"Layout Patterns"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-white font-bold",children:"Layout A"}),e.jsx("span",{className:"text-white/50 text-xs",children:"Full Width"})]}),e.jsx("p",{className:"text-white/60 text-sm",children:"Single column layout"})]}),e.jsx("div",{className:"aspect-[4/3] rounded-xl bg-white/5 border border-[var(--glass-border)] p-3",children:e.jsxs("div",{className:"h-full flex flex-col gap-2",children:[e.jsx("div",{className:"h-1/4 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded"}),e.jsx("div",{className:"h-2/4 bg-[var(--glass-bg-light)] rounded"}),e.jsx("div",{className:"h-1/4 bg-[var(--glass-bg-light)] rounded"})]})})]}),e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-white font-bold",children:"Layout B"}),e.jsx("span",{className:"text-white/50 text-xs",children:"Sidebar Right"})]}),e.jsx("p",{className:"text-white/60 text-sm",children:"Main content + sidebar"})]}),e.jsx("div",{className:"aspect-[4/3] rounded-xl bg-white/5 border border-[var(--glass-border)] p-3",children:e.jsxs("div",{className:"h-full flex gap-2",children:[e.jsxs("div",{className:"flex-1 flex flex-col gap-2",children:[e.jsx("div",{className:"h-1/4 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded"}),e.jsx("div",{className:"flex-1 bg-[var(--glass-bg-light)] rounded"})]}),e.jsx("div",{className:"w-1/3 bg-[var(--glass-bg-light)] rounded"})]})})]}),e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-white font-bold",children:"Layout C"}),e.jsx("span",{className:"text-white/50 text-xs",children:"Grid Layout"})]}),e.jsx("p",{className:"text-white/60 text-sm",children:"4-column grid"})]}),e.jsx("div",{className:"aspect-[4/3] rounded-xl bg-white/5 border border-[var(--glass-border)] p-3",children:e.jsxs("div",{className:"h-full flex flex-col gap-2",children:[e.jsx("div",{className:"h-1/5 bg-gradient-to-r from-green-400/30 to-emerald-400/30 rounded"}),e.jsxs("div",{className:"flex-1 grid grid-cols-2 gap-2",children:[e.jsx("div",{className:"bg-[var(--glass-bg-light)] rounded"}),e.jsx("div",{className:"bg-[var(--glass-bg-light)] rounded"}),e.jsx("div",{className:"bg-[var(--glass-bg-light)] rounded"}),e.jsx("div",{className:"bg-[var(--glass-bg-light)] rounded"})]})]})})]}),e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-white font-bold",children:"Layout D"}),e.jsx("span",{className:"text-white/50 text-xs",children:"With Sidebar"})]}),e.jsx("p",{className:"text-white/60 text-sm",children:"Left sidebar + grid"})]}),e.jsx("div",{className:"aspect-[4/3] rounded-xl bg-white/5 border border-[var(--glass-border)] p-3",children:e.jsxs("div",{className:"h-full flex gap-2",children:[e.jsx("div",{className:"w-1/4 bg-[var(--glass-bg-light)] rounded"}),e.jsxs("div",{className:"flex-1 flex flex-col gap-2",children:[e.jsx("div",{className:"h-1/4 bg-gradient-to-r from-orange-400/30 to-red-400/30 rounded"}),e.jsxs("div",{className:"flex-1 grid grid-cols-2 gap-2",children:[e.jsx("div",{className:"bg-[var(--glass-bg-light)] rounded"}),e.jsx("div",{className:"bg-[var(--glass-bg-light)] rounded"}),e.jsx("div",{className:"bg-[var(--glass-bg-light)] rounded"}),e.jsx("div",{className:"bg-[var(--glass-bg-light)] rounded"})]})]})]})})]}),e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-white font-bold",children:"Layout E"}),e.jsx("span",{className:"text-white/50 text-xs",children:"Stacked"})]}),e.jsx("p",{className:"text-white/60 text-sm",children:"Vertical sections"})]}),e.jsx("div",{className:"aspect-[4/3] rounded-xl bg-white/5 border border-[var(--glass-border)] p-3",children:e.jsxs("div",{className:"h-full flex gap-2",children:[e.jsx("div",{className:"w-1/3 bg-[var(--glass-bg-light)] rounded"}),e.jsxs("div",{className:"flex-1 flex flex-col gap-2",children:[e.jsx("div",{className:"h-1/5 bg-gradient-to-r from-violet-400/30 to-purple-400/30 rounded"}),e.jsx("div",{className:"flex-1 bg-[var(--glass-bg-light)] rounded"}),e.jsx("div",{className:"flex-1 bg-[var(--glass-bg-light)] rounded"}),e.jsx("div",{className:"flex-1 bg-[var(--glass-bg-light)] rounded"})]})]})})]}),e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-white font-bold",children:"Layout F"}),e.jsx("span",{className:"text-white/50 text-xs",children:"Three Column"})]}),e.jsx("p",{className:"text-white/60 text-sm",children:"Triple split layout"})]}),e.jsx("div",{className:"aspect-[4/3] rounded-xl bg-white/5 border border-[var(--glass-border)] p-3",children:e.jsxs("div",{className:"h-full flex flex-col gap-2",children:[e.jsx("div",{className:"h-1/5 bg-gradient-to-r from-teal-400/30 to-cyan-400/30 rounded"}),e.jsxs("div",{className:"flex-1 grid grid-cols-3 gap-2",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-1/2 bg-[var(--glass-bg-light)] rounded"}),e.jsx("div",{className:"h-1/2 bg-[var(--glass-bg-light)] rounded"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-1/2 bg-[var(--glass-bg-light)] rounded"}),e.jsx("div",{className:"h-1/2 bg-[var(--glass-bg-light)] rounded"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-1/2 bg-[var(--glass-bg-light)] rounded"}),e.jsx("div",{className:"h-1/2 bg-[var(--glass-bg-light)] rounded"})]})]})]})})]}),e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-white font-bold",children:"Layout G"}),e.jsx("span",{className:"text-white/50 text-xs",children:"Masonry"})]}),e.jsx("p",{className:"text-white/60 text-sm",children:"Pinterest-style grid"})]}),e.jsx("div",{className:"aspect-[4/3] rounded-xl bg-white/5 border border-[var(--glass-border)] p-3",children:e.jsxs("div",{className:"h-full grid grid-cols-3 gap-2",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-1/3 bg-gradient-to-br from-pink-400/30 to-rose-400/30 rounded"}),e.jsx("div",{className:"h-2/3 bg-[var(--glass-bg-light)] rounded"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-2/3 bg-[var(--glass-bg-light)] rounded"}),e.jsx("div",{className:"h-1/3 bg-[var(--glass-bg-light)] rounded"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-1/2 bg-[var(--glass-bg-light)] rounded"}),e.jsx("div",{className:"h-1/2 bg-[var(--glass-bg-light)] rounded"})]})]})})]}),e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-white font-bold",children:"Layout H"}),e.jsx("span",{className:"text-white/50 text-xs",children:"Hero Section"})]}),e.jsx("p",{className:"text-white/60 text-sm",children:"Large header + content"})]}),e.jsx("div",{className:"aspect-[4/3] rounded-xl bg-white/5 border border-[var(--glass-border)] p-3",children:e.jsxs("div",{className:"h-full flex flex-col gap-2",children:[e.jsx("div",{className:"h-2/5 bg-gradient-to-r from-indigo-400/30 to-blue-400/30 rounded flex items-center justify-center",children:e.jsx("div",{className:"w-1/2 h-1/3 bg-white/20 rounded"})}),e.jsxs("div",{className:"flex-1 grid grid-cols-3 gap-2",children:[e.jsx("div",{className:"bg-[var(--glass-bg-light)] rounded"}),e.jsx("div",{className:"bg-[var(--glass-bg-light)] rounded"}),e.jsx("div",{className:"bg-[var(--glass-bg-light)] rounded"})]})]})})]}),e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-white font-bold",children:"Layout I"}),e.jsx("span",{className:"text-white/50 text-xs",children:"Split Screen"})]}),e.jsx("p",{className:"text-white/60 text-sm",children:"50/50 divided layout"})]}),e.jsx("div",{className:"aspect-[4/3] rounded-xl bg-white/5 border border-[var(--glass-border)] p-3",children:e.jsxs("div",{className:"h-full flex gap-2",children:[e.jsxs("div",{className:"flex-1 flex flex-col gap-2",children:[e.jsx("div",{className:"h-1/4 bg-gradient-to-r from-amber-400/30 to-yellow-400/30 rounded"}),e.jsx("div",{className:"flex-1 bg-[var(--glass-bg-light)] rounded"})]}),e.jsxs("div",{className:"flex-1 flex flex-col gap-2",children:[e.jsx("div",{className:"h-1/4 bg-[var(--glass-bg-light)] rounded"}),e.jsx("div",{className:"flex-1 bg-[var(--glass-bg-light)] rounded"})]})]})})]}),e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-white font-bold",children:"Layout J"}),e.jsx("span",{className:"text-white/50 text-xs",children:"Dashboard"})]}),e.jsx("p",{className:"text-white/60 text-sm",children:"Stats cards grid"})]}),e.jsx("div",{className:"aspect-[4/3] rounded-xl bg-white/5 border border-[var(--glass-border)] p-3",children:e.jsxs("div",{className:"h-full flex flex-col gap-2",children:[e.jsx("div",{className:"h-1/5 bg-gradient-to-r from-lime-400/30 to-green-400/30 rounded"}),e.jsxs("div",{className:"flex-1 grid grid-cols-3 gap-2",children:[e.jsx("div",{className:"bg-[var(--glass-bg-light)] rounded"}),e.jsx("div",{className:"bg-[var(--glass-bg-light)] rounded"}),e.jsx("div",{className:"bg-[var(--glass-bg-light)] rounded"}),e.jsx("div",{className:"col-span-3 bg-[var(--glass-bg-light)] rounded"})]})]})})]}),e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-white font-bold",children:"Layout K"}),e.jsx("span",{className:"text-white/50 text-xs",children:"List View"})]}),e.jsx("p",{className:"text-white/60 text-sm",children:"Vertical list layout"})]}),e.jsx("div",{className:"aspect-[4/3] rounded-xl bg-white/5 border border-[var(--glass-border)] p-3",children:e.jsxs("div",{className:"h-full flex flex-col gap-2",children:[e.jsx("div",{className:"h-1/6 bg-gradient-to-r from-sky-400/30 to-blue-400/30 rounded"}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx("div",{className:"h-1/5 bg-[var(--glass-bg-light)] rounded"}),e.jsx("div",{className:"h-1/5 bg-[var(--glass-bg-light)] rounded"}),e.jsx("div",{className:"h-1/5 bg-[var(--glass-bg-light)] rounded"}),e.jsx("div",{className:"h-1/5 bg-[var(--glass-bg-light)] rounded"})]})]})})]}),e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-white font-bold",children:"Layout L"}),e.jsx("span",{className:"text-white/50 text-xs",children:"Cover"})]}),e.jsx("p",{className:"text-white/60 text-sm",children:"Full-page cover layout"})]}),e.jsx("div",{className:"aspect-[4/3] rounded-xl bg-white/5 border border-[var(--glass-border)] p-3",children:e.jsx("div",{className:"h-full flex items-center justify-center",children:e.jsx("div",{className:"w-3/4 h-3/4 bg-gradient-to-br from-fuchsia-400/30 to-purple-400/30 rounded-xl flex items-center justify-center",children:e.jsx("div",{className:"w-1/2 h-1/4 bg-white/20 rounded"})})})})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl font-bold mb-6",children:"Responsive Behavior"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(_a,{className:"text-cyan-400",size:32}),e.jsx("h4",{className:"text-white text-xl font-bold",children:"Adaptive Layouts"})]}),e.jsx("p",{className:"text-white/70 mb-4",children:"Layouts automatically adapt to different screen sizes using responsive breakpoints."}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-green-400"}),e.jsx("span",{className:"text-white/70 text-sm",children:"Mobile: < 768px"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-blue-400"}),e.jsx("span",{className:"text-white/70 text-sm",children:"Tablet: 768px - 1024px"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-purple-400"}),e.jsx("span",{className:"text-white/70 text-sm",children:"Desktop: > 1024px"})]})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(ya,{className:"text-pink-400",size:32}),e.jsx("h4",{className:"text-white text-xl font-bold",children:"Fluid Grids"})]}),e.jsx("p",{className:"text-white/70 mb-4",children:"Grid systems use flexible columns that scale proportionally across devices."}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-pink-400"}),e.jsx("span",{className:"text-white/70 text-sm",children:"12-column grid system"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-orange-400"}),e.jsx("span",{className:"text-white/70 text-sm",children:"Automatic reflow"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-400"}),e.jsx("span",{className:"text-white/70 text-sm",children:"Mobile-first approach"})]})]})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl font-bold mb-6",children:"Code Samples"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(ya,{className:"text-blue-400",size:32}),e.jsx("h4",{className:"text-white text-xl font-bold",children:"Desktop Layout"})]}),e.jsx(ue,{code:xe.desktopLayout})]}),e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(yu,{className:"text-purple-400",size:32}),e.jsx("h4",{className:"text-white text-xl font-bold",children:"Tablet Layout"})]}),e.jsx(ue,{code:xe.tabletLayout})]}),e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(fu,{className:"text-pink-400",size:32}),e.jsx("h4",{className:"text-white text-xl font-bold",children:"Mobile Layout"})]}),e.jsx(ue,{code:xe.mobileLayout})]}),e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(_a,{className:"text-cyan-400",size:32}),e.jsx("h4",{className:"text-white text-xl font-bold",children:"Adaptive Layouts"})]}),e.jsx(ue,{code:xe.adaptiveLayouts})]}),e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(ya,{className:"text-pink-400",size:32}),e.jsx("h4",{className:"text-white text-xl font-bold",children:"Fluid Grids"})]}),e.jsx(ue,{code:xe.fluidGrids})]})]})]})]})}function mg({addToast:o}){const[d,c]=de.useState(0),[u,h]=de.useState(0),[m,f]=de.useState(null),[w,j]=de.useState(null),[b,_]=de.useState(null),k=$=>{c($),o("success",`You rated ${$} out of 5 stars!`,{title:"Rating Submitted"})},z=$=>{f($);let G="";$>=9?G="Promoter":$>=7?G="Passive":G="Detractor",o("success",`NPS Score: ${$} (${G})`,{title:"Feedback Received"})};return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent",children:"User Feedback & Ratings"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Collect user ratings, reviews, and satisfaction scores"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl font-bold mb-2",children:"Star Rating"}),e.jsx("p",{className:"text-white/60 text-sm mb-4",children:"🖱️ Click on the stars below to submit your rating"}),e.jsx(C,{padding:"lg",children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-white/70 text-sm mb-3",children:"Rate your experience (1-5 stars)"}),e.jsxs("div",{className:"flex items-center gap-3",children:[[1,2,3,4,5].map($=>e.jsx("button",{onClick:()=>k($),onMouseEnter:()=>h($),onMouseLeave:()=>h(0),className:"transition-all duration-200 hover:scale-125",children:e.jsx(Qe,{size:48,className:`transition-all duration-200 ${$<=(u||d)?"fill-yellow-400 text-yellow-400 drop-shadow-lg":"text-white/30"}`})},$)),e.jsx("span",{className:"ml-4 text-white text-2xl font-bold",children:d>0?`${d}.0`:"—"})]}),d>0&&e.jsxs("p",{className:"text-white/70 text-sm mt-3",children:[d===5&&"⭐ Excellent! Thank you!",d===4&&"👍 Great! We appreciate your feedback!",d===3&&"👌 Good! We can do better!",d===2&&"😐 We will improve!",d===1&&"😞 Sorry to hear that. We will work harder!"]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-white/10",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{className:"text-white/60 text-xs",children:"Product Quality"}),e.jsxs("div",{className:"flex items-center gap-2",children:[[1,2,3,4,5].map($=>e.jsx(Qe,{size:20,className:"fill-yellow-400 text-yellow-400"},$)),e.jsx("span",{className:"text-white/70 text-sm ml-2",children:"(4.8)"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{className:"text-white/60 text-xs",children:"Customer Service"}),e.jsxs("div",{className:"flex items-center gap-2",children:[[1,2,3,4].map($=>e.jsx(Qe,{size:20,className:"fill-yellow-400 text-yellow-400"},$)),e.jsx(Qe,{size:20,className:"text-white/30"}),e.jsx("span",{className:"text-white/70 text-sm ml-2",children:"(4.2)"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{className:"text-white/60 text-xs",children:"Delivery Speed"}),e.jsxs("div",{className:"flex items-center gap-2",children:[[1,2,3,4].map($=>e.jsx(Qe,{size:20,className:"fill-yellow-400 text-yellow-400"},$)),e.jsx(Qe,{size:20,className:"fill-yellow-400/50 text-yellow-400/50"}),e.jsx("span",{className:"text-white/70 text-sm ml-2",children:"(4.5)"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{className:"text-white/60 text-xs",children:"Value for Money"}),e.jsxs("div",{className:"flex items-center gap-2",children:[[1,2,3].map($=>e.jsx(Qe,{size:20,className:"fill-yellow-400 text-yellow-400"},$)),[4,5].map($=>e.jsx(Qe,{size:20,className:"text-white/30"},$)),e.jsx("span",{className:"text-white/70 text-sm ml-2",children:"(3.0)"})]})]})]})]})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl font-bold mb-2",children:"Net Promoter Score (NPS)"}),e.jsx("p",{className:"text-white/60 text-sm mb-4",children:"🖱️ Click on a number to select your likelihood to recommend"}),e.jsxs(C,{padding:"lg",children:[e.jsx("p",{className:"text-white/70 text-sm mb-4",children:"How likely are you to recommend our product to a friend or colleague?"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:[0,1,2,3,4,5,6,7,8,9,10].map($=>e.jsx("button",{onClick:()=>z($),className:`
                    w-14 h-14 rounded-xl
                    backdrop-blur-md
                    border-2
                    transition-all duration-200
                    hover:scale-110
                    ${m===$?$>=9?"bg-green-500/30 border-green-400 text-white shadow-lg shadow-green-500/50":$>=7?"bg-yellow-500/30 border-yellow-400 text-white shadow-lg shadow-yellow-500/50":"bg-red-500/30 border-red-400 text-white shadow-lg shadow-red-500/50":"bg-white/5 border-[var(--glass-border)] text-white/70 hover:border-white/40"}
                  `,children:e.jsx("span",{className:"text-xl font-bold",children:$})},$))}),e.jsxs("div",{className:"flex justify-between text-white/50 text-xs",children:[e.jsx("span",{children:"Not likely at all"}),e.jsx("span",{children:"Extremely likely"})]}),m!==null&&e.jsx("div",{className:"mt-4 p-4 rounded-xl bg-white/5 border border-white/10",children:e.jsxs("p",{className:"text-white font-semibold",children:["Score: ",m," - "," ",m>=9&&e.jsx("span",{className:"text-green-400",children:"Promoter 🎉"}),m>=7&&m<9&&e.jsx("span",{className:"text-yellow-400",children:"Passive 😐"}),m<7&&e.jsx("span",{className:"text-red-400",children:"Detractor 😞"})]})})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl font-bold mb-2",children:"Satisfaction Level"}),e.jsx("p",{className:"text-white/60 text-sm mb-4",children:"🖱️ Click on an emoji to express your satisfaction level"}),e.jsxs(C,{padding:"lg",children:[e.jsx("p",{className:"text-white/70 text-sm mb-6",children:"How satisfied are you with our service?"}),e.jsxs("div",{className:"flex justify-center gap-8",children:[e.jsxs("button",{onClick:()=>{j("happy"),o("success","Thank you for your positive feedback!",{title:"Very Satisfied"})},className:`
                flex flex-col items-center gap-3 p-6 rounded-2xl
                backdrop-blur-md border-2 transition-all duration-200
                hover:scale-110
                ${w==="happy"?"bg-green-500/20 border-green-400 shadow-lg shadow-green-500/30":"bg-white/5 border-[var(--glass-border)] hover:border-green-400/50"}
              `,children:[e.jsx(Ui,{size:64,className:w==="happy"?"text-green-400":"text-white/70"}),e.jsx("span",{className:"text-white text-sm font-medium",children:"Very Satisfied"})]}),e.jsxs("button",{onClick:()=>{j("neutral"),o("info","Thank you for your feedback!",{title:"Neutral"})},className:`
                flex flex-col items-center gap-3 p-6 rounded-2xl
                backdrop-blur-md border-2 transition-all duration-200
                hover:scale-110
                ${w==="neutral"?"bg-yellow-500/20 border-yellow-400 shadow-lg shadow-yellow-500/30":"bg-white/5 border-[var(--glass-border)] hover:border-yellow-400/50"}
              `,children:[e.jsx(N0,{size:64,className:w==="neutral"?"text-yellow-400":"text-white/70"}),e.jsx("span",{className:"text-white text-sm font-medium",children:"Neutral"})]}),e.jsxs("button",{onClick:()=>{j("sad"),o("warning","We are sorry to hear that. We will improve!",{title:"Not Satisfied"})},className:`
                flex flex-col items-center gap-3 p-6 rounded-2xl
                backdrop-blur-md border-2 transition-all duration-200
                hover:scale-110
                ${w==="sad"?"bg-red-500/20 border-red-400 shadow-lg shadow-red-500/30":"bg-white/5 border-[var(--glass-border)] hover:border-red-400/50"}
              `,children:[e.jsx(t0,{size:64,className:w==="sad"?"text-red-400":"text-white/70"}),e.jsx("span",{className:"text-white text-sm font-medium",children:"Not Satisfied"})]})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl font-bold mb-2",children:"Quick Rating"}),e.jsx("p",{className:"text-white/60 text-sm mb-4",children:"🖱️ Click thumbs up or down to rate"}),e.jsxs(C,{padding:"lg",children:[e.jsx("p",{className:"text-white/70 text-sm mb-6",children:"Was this helpful?"}),e.jsxs("div",{className:"flex justify-center gap-6",children:[e.jsxs("button",{onClick:()=>{_("up"),o("success","Glad you found this helpful!",{title:"Thanks!"})},className:`
                flex flex-col items-center gap-3 p-8 rounded-2xl
                backdrop-blur-md border-2 transition-all duration-200
                hover:scale-110
                ${b==="up"?"bg-green-500/20 border-green-400 shadow-lg shadow-green-500/30":"bg-white/5 border-[var(--glass-border)] hover:border-green-400/50"}
              `,children:[e.jsx(Ou,{size:48,className:b==="up"?"text-green-400":"text-white/70"}),e.jsx("span",{className:"text-white font-medium",children:"Yes"}),b==="up"&&e.jsx("span",{className:"text-green-400 text-sm",children:"Thank you!"})]}),e.jsxs("button",{onClick:()=>{_("down"),o("warning","We will work to improve!",{title:"Thanks for feedback"})},className:`
                flex flex-col items-center gap-3 p-8 rounded-2xl
                backdrop-blur-md border-2 transition-all duration-200
                hover:scale-110
                ${b==="down"?"bg-red-500/20 border-red-400 shadow-lg shadow-red-500/30":"bg-white/5 border-[var(--glass-border)] hover:border-red-400/50"}
              `,children:[e.jsx(wp,{size:48,className:b==="down"?"text-red-400":"text-white/70"}),e.jsx("span",{className:"text-white font-medium",children:"No"}),b==="down"&&e.jsx("span",{className:"text-red-400 text-sm",children:"Sorry to hear"})]})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl font-bold mb-4",children:"Customer Reviews"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsx(C,{padding:"lg",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-bold",children:"Sarah Johnson"}),e.jsx("p",{className:"text-white/50 text-xs",children:"2 days ago"})]}),e.jsx("div",{className:"flex gap-1",children:[1,2,3,4,5].map($=>e.jsx(Qe,{size:16,className:"fill-yellow-400 text-yellow-400"},$))})]}),e.jsx("p",{className:"text-white/70 text-sm",children:"Absolutely love the design system! The glassmorphism effects are stunning and the components are very easy to use."}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"px-3 py-1 rounded-full bg-[var(--glass-bg-light)] text-white/70 text-xs",children:"Quality"}),e.jsx("span",{className:"px-3 py-1 rounded-full bg-[var(--glass-bg-light)] text-white/70 text-xs",children:"Design"})]})]})}),e.jsx(C,{padding:"lg",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-bold",children:"Michael Chen"}),e.jsx("p",{className:"text-white/50 text-xs",children:"1 week ago"})]}),e.jsxs("div",{className:"flex gap-1",children:[[1,2,3,4].map($=>e.jsx(Qe,{size:16,className:"fill-yellow-400 text-yellow-400"},$)),e.jsx(Qe,{size:16,className:"text-white/30"})]})]}),e.jsx("p",{className:"text-white/70 text-sm",children:"Great components overall. Would love to see more chart variations and better mobile responsiveness."}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"px-3 py-1 rounded-full bg-[var(--glass-bg-light)] text-white/70 text-xs",children:"Components"}),e.jsx("span",{className:"px-3 py-1 rounded-full bg-[var(--glass-bg-light)] text-white/70 text-xs",children:"Features"})]})]})}),e.jsx(C,{padding:"lg",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-bold",children:"Emma Williams"}),e.jsx("p",{className:"text-white/50 text-xs",children:"2 weeks ago"})]}),e.jsx("div",{className:"flex gap-1",children:[1,2,3,4,5].map($=>e.jsx(Qe,{size:16,className:"fill-yellow-400 text-yellow-400"},$))})]}),e.jsx("p",{className:"text-white/70 text-sm",children:"Perfect for our dashboard redesign. The liquid glass aesthetic is exactly what we were looking for!"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"px-3 py-1 rounded-full bg-[var(--glass-bg-light)] text-white/70 text-xs",children:"Beautiful"}),e.jsx("span",{className:"px-3 py-1 rounded-full bg-[var(--glass-bg-light)] text-white/70 text-xs",children:"Modern"})]})]})}),e.jsx(C,{padding:"lg",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-bold",children:"David Kim"}),e.jsx("p",{className:"text-white/50 text-xs",children:"3 weeks ago"})]}),e.jsxs("div",{className:"flex gap-1",children:[[1,2,3,4].map($=>e.jsx(Qe,{size:16,className:"fill-yellow-400 text-yellow-400"},$)),e.jsx(Qe,{size:16,className:"fill-yellow-400/50 text-yellow-400/50"})]})]}),e.jsx("p",{className:"text-white/70 text-sm",children:"Good library with nice visual effects. Documentation could be more comprehensive for beginners."}),e.jsx("div",{className:"flex gap-2",children:e.jsx("span",{className:"px-3 py-1 rounded-full bg-[var(--glass-bg-light)] text-white/70 text-xs",children:"Documentation"})})]})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl font-bold mb-2",children:"Submit Feedback"}),e.jsx("p",{className:"text-white/60 text-sm mb-4",children:"🖱️ Fill out the form and click submit"}),e.jsx(C,{padding:"lg",children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-white text-sm font-medium mb-2 block",children:"Your Name"}),e.jsx("input",{type:"text",placeholder:"John Doe",className:`
                  w-full px-4 py-3 rounded-xl
                  bg-white/5 backdrop-blur-md
                  border border-[var(--glass-border)]
                  text-white placeholder-white/40
                  focus:outline-none focus:border-blue-400/50
                  transition-all duration-200
                `})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-white text-sm font-medium mb-2 block",children:"Rating"}),e.jsx("div",{className:"flex gap-2",children:[1,2,3,4,5].map($=>e.jsx("button",{className:"transition-all duration-200 hover:scale-125",children:e.jsx(Qe,{size:32,className:"text-white/30 hover:fill-yellow-400 hover:text-yellow-400"})},$))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-white text-sm font-medium mb-2 block",children:"Your Feedback"}),e.jsx("textarea",{rows:4,placeholder:"Tell us what you think...",className:`
                  w-full px-4 py-3 rounded-xl
                  bg-white/5 backdrop-blur-md
                  border border-[var(--glass-border)]
                  text-white placeholder-white/40
                  focus:outline-none focus:border-blue-400/50
                  transition-all duration-200
                  resize-none
                `})]}),e.jsxs(X,{variant:"primary",onClick:()=>o("success","Thank you for your feedback!",{title:"Feedback Submitted"}),className:"w-full",children:[e.jsx(Ea,{size:18,className:"mr-2"}),"Submit Feedback"]})]})})]}),e.jsx(ue,{title:"Feedback & Rating Code Samples",code:xe.feedbackSection})]})}function pg({items:o,showHome:d=!0,className:c=""}){return e.jsxs("nav",{className:`flex items-center gap-2 ${c}`,children:[d&&e.jsxs(e.Fragment,{children:[e.jsx("a",{href:"/",className:`
              text-[var(--text-tertiary)] hover:text-white
              transition-colors duration-200
              p-2 rounded-lg
              hover:bg-[var(--glass-bg-light)]
            `,children:e.jsx(Fa,{size:16})}),e.jsx(Gt,{size:16,className:"text-[var(--text-disabled)]"})]}),o.map((u,h)=>e.jsx("div",{className:"flex items-center gap-2",children:h===o.length-1?e.jsx("span",{className:"text-white px-2 py-1",children:u.label}):e.jsxs(e.Fragment,{children:[e.jsx("a",{href:u.href,onClick:u.onClick,className:`
                  text-[var(--text-tertiary)] hover:text-white
                  transition-colors duration-200
                  px-2 py-1 rounded-lg
                  hover:bg-[var(--glass-bg-light)]
                `,children:u.label}),e.jsx(Gt,{size:16,className:"text-[var(--text-disabled)]"})]})},h))]})}function gg({items:o=[{label:"Home",icon:e.jsx(Fa,{size:18}),href:"#home"},{label:"Dashboard",icon:e.jsx(Au,{size:18}),href:"#dashboard"},{label:"Projects",icon:e.jsx(Gi,{size:18}),href:"#projects",badge:3},{label:"Team",icon:e.jsx(La,{size:18}),href:"#team"}],logo:d,onMenuClick:c,onSearch:u,showSearch:h=!0,showNotifications:m=!0,showUserMenu:f=!0,notificationCount:w=5,className:j=""}){const[b,_]=I.useState(""),[k,z]=I.useState("Home"),[$,G]=I.useState(!1);return e.jsx("nav",{className:`
      backdrop-blur-xl bg-[var(--overlay-popover)]
      border-b border-[var(--glass-border)]
      ${j}
    `,children:e.jsxs("div",{className:"px-6 h-16 flex items-center justify-between gap-6",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[c&&e.jsx("button",{onClick:c,className:`
                p-2 rounded-lg
                backdrop-blur-md bg-[var(--glass-bg-subtle)]
                border border-[var(--glass-dark-border)]
                hover:bg-[var(--glass-bg-light)]
                transition-all duration-300
                lg:hidden
              `,children:e.jsx(qi,{size:20,className:"text-white"})}),e.jsxs("div",{className:"flex items-center gap-3",children:[d||e.jsxs("div",{className:`
                w-9 h-9
                rounded-lg
                bg-gradient-to-br from-[var(--brand-primary)]/20 to-[var(--brand-secondary)]/20
                backdrop-blur-md
                border border-[var(--glass-border)]
                flex items-center justify-center
                relative overflow-hidden
              `,children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"}),e.jsx(Ru,{size:20,className:"relative z-10 text-white"})]}),e.jsx("span",{className:"text-white font-bold text-lg hidden sm:block",children:"Wen's Project"})]})]}),e.jsx("div",{className:"hidden lg:flex items-center gap-2 flex-1 max-w-2xl",children:o.map((F,B)=>e.jsxs("button",{onClick:()=>z(F.label),className:`
                relative px-4 py-2 rounded-lg
                flex items-center gap-2
                backdrop-blur-md
                border border-[var(--glass-dark-border)]
                transition-all duration-300
                ${k===F.label?"bg-[var(--glass-bg-medium)] border-[var(--glass-border-strong)]":"bg-[var(--glass-bg-subtle)] hover:bg-[var(--glass-bg-light)]"}
              `,children:[F.icon&&e.jsx("span",{className:"text-white/80",children:F.icon}),e.jsx("span",{className:"text-white text-sm font-medium",children:F.label}),F.badge&&e.jsx("span",{className:`
                  px-1.5 py-0.5 rounded-full
                  bg-gradient-to-r from-[var(--brand-secondary)] to-[var(--brand-accent)]
                  text-white text-xs font-bold
                  min-w-[20px] text-center
                `,children:F.badge})]},B))}),e.jsxs("div",{className:"flex items-center gap-3",children:[h&&e.jsxs("div",{className:`
              hidden md:flex items-center gap-2
              px-4 py-2 rounded-lg
              backdrop-blur-md bg-[var(--glass-bg-subtle)]
              border border-[var(--glass-dark-border)]
              focus-within:border-[var(--glass-border-strong)]
              transition-all duration-300
              min-w-[200px]
            `,children:[e.jsx(xt,{size:16,className:"text-white/40"}),e.jsx("input",{type:"text",placeholder:"Search...",value:b,onChange:F=>{_(F.target.value),u==null||u(F.target.value)},className:`
                  bg-transparent border-none outline-none
                  text-white placeholder-white/40
                  text-sm flex-1
                `})]}),m&&e.jsxs("button",{className:`
              relative p-2 rounded-lg
              backdrop-blur-md bg-[var(--glass-bg-subtle)]
              border border-[var(--glass-dark-border)]
              hover:bg-[var(--glass-bg-light)]
              transition-all duration-300
            `,children:[e.jsx(dr,{size:20,className:"text-white"}),w>0&&e.jsx("span",{className:`
                  absolute -top-1 -right-1
                  w-5 h-5 rounded-full
                  bg-gradient-to-r from-[var(--brand-secondary)] to-[var(--brand-accent)]
                  text-white text-xs
                  flex items-center justify-center
                  font-bold
                  animate-pulse
                `,children:w>9?"9+":w})]}),f&&e.jsxs("div",{className:"relative",children:[e.jsxs("button",{onClick:()=>G(!$),className:`
                  flex items-center gap-2 px-3 py-2 rounded-lg
                  backdrop-blur-md bg-[var(--glass-bg-subtle)]
                  border border-[var(--glass-dark-border)]
                  hover:bg-[var(--glass-bg-light)]
                  transition-all duration-300
                `,children:[e.jsx("div",{className:`
                  w-7 h-7 rounded-full
                  bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-secondary)]
                  flex items-center justify-center
                `,children:e.jsx(rt,{size:16,className:"text-white"})}),e.jsx(Ts,{size:16,className:"text-white/60 hidden sm:block"})]}),$&&e.jsxs("div",{className:`
                  absolute right-0 top-full mt-2
                  w-48 rounded-xl
                  backdrop-blur-xl bg-[var(--overlay-popover)]
                  border border-[var(--glass-border)]
                  shadow-2xl
                  overflow-hidden
                  z-50
                `,children:[e.jsxs("div",{className:"p-3 border-b border-[var(--glass-dark-border)]",children:[e.jsx("p",{className:"text-white text-sm font-medium",children:"John Doe"}),e.jsx("p",{className:"text-white/60 text-xs",children:"john@example.com"})]}),e.jsxs("div",{className:"p-2",children:[e.jsxs("button",{className:`
                      w-full px-3 py-2 rounded-lg
                      text-left text-white/80 text-sm
                      hover:bg-[var(--glass-bg-light)]
                      transition-all duration-200
                      flex items-center gap-2
                    `,children:[e.jsx(rt,{size:16}),"Profile"]}),e.jsxs("button",{className:`
                      w-full px-3 py-2 rounded-lg
                      text-left text-white/80 text-sm
                      hover:bg-[var(--glass-bg-light)]
                      transition-all duration-200
                      flex items-center gap-2
                    `,children:[e.jsx(ws,{size:16}),"Settings"]})]}),e.jsx("div",{className:"p-2 border-t border-[var(--glass-dark-border)]",children:e.jsx("button",{className:`
                      w-full px-3 py-2 rounded-lg
                      text-left text-[var(--status-error)] text-sm
                      hover:bg-[var(--glass-bg-light)]
                      transition-all duration-200
                    `,children:"Logout"})})]})]})]})]})})}function fg({tabs:o,activeTab:d,onChange:c}){return e.jsx("div",{className:`
      inline-flex
      backdrop-blur-md backdrop-saturate-150
      bg-[var(--glass-bg-light)]
      border border-[var(--glass-border)]
      rounded-2xl
      p-1
      gap-1
    `,children:o.map(u=>e.jsxs("button",{onClick:()=>c(u.value),className:`
            relative px-4 py-2 rounded-xl
            transition-all duration-300
            flex items-center gap-2
            ${d===u.value?"bg-[var(--glass-bg-medium)] text-white shadow-lg":"text-[var(--text-tertiary)] hover:text-white hover:bg-[var(--glass-bg-light)]"}
          `,children:[u.icon&&e.jsx("span",{className:"text-current",children:u.icon}),e.jsx("span",{children:u.label})]},u.value))})}function bg({currentPage:o,totalPages:d,onPageChange:c,maxVisible:u=5,className:h=""}){const m=()=>{const f=[],w=Math.floor(u/2);let j=Math.max(1,o-w),b=Math.min(d,j+u-1);b-j+1<u&&(j=Math.max(1,b-u+1)),j>1&&(f.push(1),j>2&&f.push("..."));for(let _=j;_<=b;_++)f.push(_);return b<d&&(b<d-1&&f.push("..."),f.push(d)),f};return e.jsxs("div",{className:`flex items-center gap-2 ${h}`,children:[e.jsx("button",{onClick:()=>c(o-1),disabled:o===1,className:`
          p-2 rounded-xl
          backdrop-blur-md backdrop-saturate-150
          bg-[var(--glass-bg-light)]
          border border-[var(--glass-border)]
          text-white
          disabled:opacity-50 disabled:cursor-not-allowed
          hover:bg-[var(--glass-bg-medium)]
          transition-all duration-200
        `,children:e.jsx(Ta,{size:20})}),m().map((f,w)=>e.jsx("div",{children:f==="..."?e.jsx("span",{className:"text-[var(--text-muted)] px-2",children:"..."}):e.jsx("button",{onClick:()=>c(f),className:`
                px-4 py-2 rounded-xl
                backdrop-blur-md backdrop-saturate-150
                border border-[var(--glass-border)]
                transition-all duration-200
                ${o===f?"bg-[var(--glass-bg-medium)] text-white":"bg-[var(--glass-bg-light)] text-[var(--text-secondary)] hover:bg-[var(--glass-bg-medium)] hover:text-white"}
              `,children:f})},w)),e.jsx("button",{onClick:()=>c(o+1),disabled:o===d,className:`
          p-2 rounded-xl
          backdrop-blur-md backdrop-saturate-150
          bg-[var(--glass-bg-light)]
          border border-[var(--glass-border)]
          text-white
          disabled:opacity-50 disabled:cursor-not-allowed
          hover:bg-[var(--glass-bg-medium)]
          transition-all duration-200
        `,children:e.jsx(Gt,{size:20})})]})}function vg({steps:o,currentStep:d,orientation:c="horizontal",className:u=""}){return c==="vertical"?e.jsx("div",{className:`space-y-4 ${u}`,children:o.map((h,m)=>{const f=m+1,w=f<d,j=f===d;return e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:`
                  w-10 h-10 rounded-full
                  backdrop-blur-md backdrop-saturate-150
                  border-2
                  flex items-center justify-center
                  transition-all duration-300
                  ${w?"bg-[var(--status-success-light)] border-[var(--status-success-border)]":j?"bg-[var(--status-info-light)] border-[var(--status-info-border)]":"bg-[var(--glass-bg-light)] border-[var(--glass-border)]"}
                `,children:w?e.jsx(vs,{size:20,className:"text-white"}):e.jsx("span",{className:"text-white",children:f})}),m<o.length-1&&e.jsx("div",{className:`w-px h-12 mt-2 ${w?"bg-[var(--status-success)]":"bg-[var(--glass-border)]"}`})]}),e.jsxs("div",{className:"flex-1 pb-8",children:[e.jsx("h4",{className:`${j?"text-white":"text-white/70"}`,children:h.label}),h.description&&e.jsx("p",{className:"text-white/60 text-sm mt-1",children:h.description})]})]},m)})}):e.jsx("div",{className:`flex items-center ${u}`,children:o.map((h,m)=>{const f=m+1,w=f<d,j=f===d;return e.jsxs("div",{className:"flex items-center",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("div",{className:`
                w-10 h-10 rounded-full
                backdrop-blur-md backdrop-saturate-150
                border-2
                flex items-center justify-center
                transition-all duration-300
                ${w?"bg-[var(--status-success-light)] border-[var(--status-success-border)]":j?"bg-[var(--status-info-light)] border-[var(--status-info-border)]":"bg-[var(--glass-bg-light)] border-[var(--glass-border)]"}
              `,children:w?e.jsx(vs,{size:20,className:"text-white"}):e.jsx("span",{className:"text-white",children:f})}),e.jsx("div",{className:"text-center",children:e.jsx("p",{className:`text-sm ${j?"text-white":"text-white/70"}`,children:h.label})})]}),m<o.length-1&&e.jsx("div",{className:`
                flex-1 h-px mx-4 mb-8
                ${w?"bg-[var(--status-success)]":"bg-[var(--glass-border)]"}
              `})]},m)})})}function Cu({items:o=[{label:"Dashboard",icon:e.jsx(Au,{size:20}),href:"#dashboard",active:!0},{label:"Projects",icon:e.jsx(Gi,{size:20}),badge:3,children:[{label:"All Projects",icon:e.jsx(Gi,{size:16}),href:"#all"},{label:"Active",icon:e.jsx(Qe,{size:16}),href:"#active",badge:2},{label:"Archived",icon:e.jsx(cn,{size:16}),href:"#archived"}]},{label:"Analytics",icon:e.jsx(Ii,{size:20}),href:"#analytics"},{label:"Team",icon:e.jsx(La,{size:20}),badge:12,children:[{label:"Members",icon:e.jsx(La,{size:16}),href:"#members"},{label:"Roles",icon:e.jsx(ws,{size:16}),href:"#roles"}]},{label:"Calendar",icon:e.jsx(an,{size:20}),href:"#calendar"},{label:"Messages",icon:e.jsx(za,{size:20}),href:"#messages",badge:5},{label:"Shop",icon:e.jsx(op,{size:20}),href:"#shop"},{label:"Settings",icon:e.jsx(ws,{size:20}),href:"#settings"}],collapsed:d=!1,onToggle:c,className:u=""}){const[h,m]=I.useState(["Projects"]),[f,w]=I.useState("Dashboard"),j=b=>{h.includes(b)?m(h.filter(_=>_!==b)):m([...h,b])};return e.jsxs("aside",{className:`
      ${d?"w-20":"w-64"}
      backdrop-blur-xl backdrop-saturate-150
      bg-gradient-to-b from-[var(--glass-bg-light)] to-[var(--glass-bg-subtle)]
      border-r border-[var(--glass-border)]
      transition-all duration-300
      flex flex-col
      ${u}
    `,children:[e.jsx("div",{className:`
        p-6 border-b border-[var(--glass-dark-border)]
        ${d?"px-4":""}
      `,children:e.jsxs("div",{className:`flex items-center ${d?"justify-center":"gap-3"}`,children:[e.jsxs("div",{className:`
            w-10 h-10 
            rounded-xl
            bg-gradient-to-br from-[var(--brand-primary)]/20 to-[var(--brand-secondary)]/20
            backdrop-blur-md
            border border-[var(--glass-border)]
            flex items-center justify-center
            relative overflow-hidden
            flex-shrink-0
          `,children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"}),e.jsx(Ru,{size:22,className:"relative z-10 text-white"})]}),!d&&e.jsxs("div",{children:[e.jsx("h1",{className:"text-white text-xl font-bold",children:"Wen's Project"}),e.jsx("p",{className:"text-white/50 text-xs",children:"Design System"})]})]})}),e.jsx("nav",{className:"flex-1 p-4 space-y-1 overflow-y-auto",children:o.map((b,_)=>e.jsxs("div",{children:[e.jsxs("button",{onClick:()=>{b.children?j(b.label):w(b.label)},className:`
                w-full flex items-center justify-between
                px-3 py-2.5 rounded-lg
                transition-all duration-300
                group
                ${f===b.label||b.active?"bg-[var(--glass-bg-medium)] border border-[var(--glass-border-strong)]":"bg-[var(--glass-bg-subtle)] border border-[var(--glass-dark-border)] hover:bg-[var(--glass-bg-light)]"}
                ${d?"justify-center":""}
              `,title:d?b.label:void 0,children:[e.jsxs("div",{className:`flex items-center ${d?"":"gap-3"} flex-1`,children:[e.jsx("span",{className:`
                  text-[var(--text-secondary)] group-hover:text-white transition-colors
                  ${d?"":"flex-shrink-0"}
                `,children:b.icon}),!d&&e.jsx("span",{className:"text-white text-sm font-medium flex-1 text-left",children:b.label})]}),!d&&e.jsxs("div",{className:"flex items-center gap-2",children:[b.badge&&e.jsx("span",{className:`
                      px-2 py-0.5 rounded-full
                      bg-gradient-to-r from-[var(--brand-secondary)] to-[var(--brand-accent)]
                      text-white text-xs font-bold
                      min-w-[20px] text-center
                    `,children:b.badge}),b.children&&e.jsx("span",{className:"text-[var(--text-muted)]",children:h.includes(b.label)?e.jsx(Ts,{size:16}):e.jsx(Gt,{size:16})})]})]}),b.children&&h.includes(b.label)&&!d&&e.jsx("div",{className:"ml-6 mt-1 space-y-1 border-l border-[var(--glass-dark-border)] pl-3",children:b.children.map((k,z)=>e.jsxs("button",{onClick:()=>w(k.label),className:`
                      w-full flex items-center justify-between
                      px-3 py-2 rounded-lg
                      transition-all duration-300
                      ${f===k.label?"bg-[var(--glass-bg-light)] border border-[var(--glass-border)]":"hover:bg-[var(--glass-bg-subtle)]"}
                    `,children:[e.jsxs("div",{className:"flex items-center gap-2 flex-1",children:[e.jsx("span",{className:"text-[var(--text-muted)]",children:k.icon}),e.jsx("span",{className:"text-[var(--text-secondary)] text-sm",children:k.label})]}),k.badge&&e.jsx("span",{className:`
                        px-2 py-0.5 rounded-full
                        bg-gradient-to-r from-[var(--brand-secondary)] to-[var(--brand-accent)]
                        text-white text-xs font-bold
                      `,children:k.badge})]},z))})]},_))}),!d&&e.jsx("div",{className:"p-4 border-t border-[var(--glass-dark-border)]",children:e.jsxs("div",{className:`
            p-4 rounded-xl
            backdrop-blur-md bg-gradient-to-br from-[var(--brand-primary)]/10 to-[var(--brand-secondary)]/10
            border border-[var(--glass-border)]
          `,children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:`
                w-8 h-8 rounded-full
                bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-secondary)]
                flex items-center justify-center
              `,children:e.jsx(wg,{size:16,className:"text-white"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"text-white text-sm font-medium",children:"John Doe"}),e.jsx("p",{className:"text-[var(--text-muted)] text-xs",children:"Admin"})]})]}),e.jsx("button",{className:`
              w-full px-3 py-1.5 rounded-lg
              bg-[var(--glass-bg-light)] hover:bg-[var(--glass-bg-medium)]
              border border-[var(--glass-border)]
              text-[var(--text-secondary)] text-xs
              transition-all duration-200
            `,children:"View Profile"})]})})]})}function wg({size:o,className:d}){return e.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:d,children:[e.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]})}function yg(){const[o,d]=I.useState("components"),[c,u]=I.useState(1),[h,m]=I.useState(2),[f,w]=I.useState(!1),j=[{label:"Components",value:"components",icon:e.jsx(Tu,{size:16})},{label:"Styles",value:"styles",icon:e.jsx(rn,{size:16})},{label:"Interactions",value:"interactions",icon:e.jsx(Hu,{size:16})}],b=[{label:"Select",description:"Choose your plan"},{label:"Configure",description:"Set preferences"},{label:"Review",description:"Check details"},{label:"Complete",description:"Finalize setup"}];return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-[var(--brand-secondary)] to-[var(--brand-accent)] bg-clip-text text-transparent",children:"Navigation Components"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Navigation bars, tabs, breadcrumbs, pagination and steppers"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-4",children:"Top Navigation Bar"}),e.jsx(C,{padding:"none",children:e.jsx(gg,{})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-4",children:"Side Navigation"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-white/60 text-sm mb-3",children:"Expanded"}),e.jsx(C,{padding:"none",className:"overflow-hidden",children:e.jsx("div",{className:"h-[600px]",children:e.jsx(Cu,{collapsed:!1})})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-white/60 text-sm mb-3",children:"Collapsed"}),e.jsx(C,{padding:"none",className:"overflow-hidden",children:e.jsx("div",{className:"h-[600px]",children:e.jsx(Cu,{collapsed:!0})})})]})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Tabs"}),e.jsx(fg,{tabs:j,activeTab:o,onChange:d})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Breadcrumb"}),e.jsx(pg,{items:[{label:"Home",href:"#home"},{label:"Components",href:"#components"},{label:"Navigation"}]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Pagination"}),e.jsx("div",{className:"flex justify-center",children:e.jsx(bg,{currentPage:c,totalPages:10,onPageChange:u,maxVisible:5})})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Stepper"}),e.jsx(vg,{steps:b,currentStep:h})]}),e.jsx(ue,{code:xe.navigationSection})]})}function jg({columns:o,data:d,className:c="",striped:u=!1,hoverable:h=!0}){const[m,f]=I.useState(null),w=I.useMemo(()=>m?[...d].sort((_,k)=>{const z=_[m.key],$=k[m.key];return z<$?m.direction==="asc"?-1:1:z>$?m.direction==="asc"?1:-1:0}):d,[d,m]),j=_=>{f(k=>!k||k.key!==_?{key:_,direction:"asc"}:k.direction==="asc"?{key:_,direction:"desc"}:null)},b=_=>!m||m.key!==_?e.jsx(Ai,{size:16,className:"text-white/40"}):m.direction==="asc"?e.jsx(pm,{size:16,className:"text-white"}):e.jsx(xm,{size:16,className:"text-white"});return e.jsx("div",{className:`
      backdrop-blur-md backdrop-saturate-150
      bg-[var(--glass-bg-light)]
      border border-[var(--glass-border)]
      rounded-3xl
      overflow-hidden
      ${c}
    `,children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{children:e.jsx("tr",{className:"border-b border-[var(--glass-border)]",children:o.map(_=>e.jsx("th",{className:"px-6 py-4 text-left text-white",children:_.sortable?e.jsxs("button",{onClick:()=>j(_.key),className:`
                        flex items-center gap-2
                        hover:text-white/80
                        transition-colors duration-200
                      `,children:[_.header,b(_.key)]}):_.header},_.key))})}),e.jsx("tbody",{children:w.map((_,k)=>e.jsx("tr",{className:`
                  border-b border-[var(--glass-dark-border)] last:border-0
                  ${u&&k%2===1?"bg-[var(--glass-bg-subtle)]":""}
                  ${h?"hover:bg-[var(--glass-bg-light)]":""}
                  transition-colors duration-200
                `,children:o.map(z=>e.jsx("td",{className:"px-6 py-4 text-white/80",children:z.render?z.render(_[z.key],_):_[z.key]},z.key))},k))})]})})})}function Dt({children:o,variant:d="default",size:c="md",className:u=""}){const h=`
    inline-flex items-center justify-center
    rounded-full
    backdrop-blur-md backdrop-saturate-150
    border border-[var(--glass-border)]
    transition-all duration-200
  `,m={default:"bg-[var(--glass-bg-light)] text-white/90",primary:"bg-[var(--status-info-light)] text-blue-100 border-[var(--status-info-border)]",success:"bg-[var(--status-success-light)] text-green-100 border-[var(--status-success-border)]",warning:"bg-[var(--status-warning-light)] text-amber-100 border-[var(--status-warning-border)]",danger:"bg-[var(--status-error-light)] text-red-100 border-[var(--status-error-border)]"},f={sm:"px-2 py-0.5 text-xs",md:"px-3 py-1 text-sm",lg:"px-4 py-1.5 text-base"};return e.jsx("span",{className:`${h} ${m[d]} ${f[c]} ${u}`,children:o})}function sn({src:o,alt:d,size:c="md",fallback:u,className:h=""}){const[m,f]=I.useState(!1),w={sm:"w-8 h-8 text-xs",md:"w-12 h-12 text-sm",lg:"w-16 h-16 text-base",xl:"w-24 h-24 text-xl"};return e.jsx("div",{className:`
      ${w[c]} rounded-full
      backdrop-blur-md backdrop-saturate-150
      bg-[var(--glass-bg-light)]
      border border-[var(--glass-border)]
      overflow-hidden
      flex items-center justify-center
      ${h}
    `,children:o&&!m?e.jsx("img",{src:o,alt:d,className:"w-full h-full object-cover",onError:()=>f(!0)}):u?e.jsx("span",{className:"text-white uppercase",children:u.slice(0,2)}):e.jsx(rt,{className:"text-white/60",size:c==="sm"?16:c==="md"?20:c==="lg"?24:32})})}function Ng({avatars:o,max:d=5,size:c="md"}){const u=o.slice(0,d),h=o.length-d;return e.jsxs("div",{className:"flex -space-x-3",children:[u.map((m,f)=>e.jsx(sn,{...m,size:c,className:"ring-2 ring-[var(--glass-dark-border)]"},f)),h>0&&e.jsxs("div",{className:`
          ${c==="sm"?"w-8 h-8 text-xs":c==="md"?"w-12 h-12 text-sm":c==="lg"?"w-16 h-16 text-base":"w-24 h-24 text-xl"}
          rounded-full
          backdrop-blur-md backdrop-saturate-150
          bg-[var(--glass-bg-medium)]
          border border-[var(--glass-border)]
          ring-2 ring-[var(--glass-dark-border)]
          flex items-center justify-center
          text-white
        `,children:["+",h]})]})}function ka({label:o,onDelete:d,icon:c,variant:u="default",className:h=""}){const m={default:"bg-[var(--glass-bg-light)] text-white/90 border-[var(--glass-border)]",primary:"bg-[var(--status-info-light)] text-blue-100 border-[var(--status-info-border)]",success:"bg-[var(--status-success-light)] text-green-100 border-[var(--status-success-border)]",warning:"bg-[var(--status-warning-light)] text-amber-100 border-[var(--status-warning-border)]",danger:"bg-[var(--status-error-light)] text-red-100 border-[var(--status-error-border)]"};return e.jsxs("div",{className:`
      inline-flex items-center gap-2
      px-3 py-1.5
      rounded-full
      backdrop-blur-md backdrop-saturate-150
      border
      ${m[u]}
      transition-all duration-200
      ${h}
    `,children:[c&&e.jsx("span",{children:c}),e.jsx("span",{className:"text-sm",children:o}),d&&e.jsx("button",{onClick:d,className:`
            hover:bg-[var(--glass-bg-light)] rounded-full p-0.5
            transition-colors duration-200
          `,children:e.jsx(Pt,{size:14})})]})}function kg(){const o=[{key:"name",header:"Name",sortable:!0},{key:"email",header:"Email",sortable:!0},{key:"role",header:"Role",sortable:!0},{key:"status",header:"Status",render:u=>e.jsx(Dt,{variant:u==="Active"?"success":"warning",children:u})}],d=[{name:"John Doe",email:"john@example.com",role:"Admin",status:"Active"},{name:"Jane Smith",email:"jane@example.com",role:"User",status:"Active"},{name:"Bob Johnson",email:"bob@example.com",role:"Editor",status:"Inactive"},{name:"Alice Williams",email:"alice@example.com",role:"User",status:"Active"}],c=[{fallback:"AB"},{fallback:"CD"},{fallback:"EF"},{fallback:"GH"},{fallback:"IJ"}];return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--status-success)] bg-clip-text text-transparent",children:"Data Display"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Tables, badges, avatars and chips"})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Data Table"}),e.jsx(jg,{columns:o,data:d,striped:!0,hoverable:!0})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Badges"}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(Dt,{variant:"primary",children:"Primary"}),e.jsx(Dt,{variant:"success",children:"Success"}),e.jsx(Dt,{variant:"warning",children:"Warning"}),e.jsx(Dt,{variant:"danger",children:"Danger"}),e.jsx(Dt,{variant:"info",children:"Info"})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Avatars"}),e.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[e.jsx(sn,{fallback:"JD",size:"sm"}),e.jsx(sn,{fallback:"JD",size:"md"}),e.jsx(sn,{fallback:"JD",size:"lg"}),e.jsx(sn,{fallback:"JD",size:"xl"}),e.jsx(Ng,{avatars:c,max:3,size:"md"})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Chips"}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(ka,{label:"Design",variant:"primary",icon:e.jsx(rn,{size:14})}),e.jsx(ka,{label:"Development",variant:"success",icon:e.jsx(Tu,{size:14})}),e.jsx(ka,{label:"Marketing",variant:"warning"}),e.jsx(ka,{label:"Removable",variant:"danger",onDelete:()=>{}})]})]}),e.jsx(ue,{code:xe.dataSection})]})}function Sg({value:o,onChange:d,placeholder:c="Search...",onSearch:u,suggestions:h=[],className:m=""}){const[f,w]=I.useState(!1),[j,b]=I.useState(!1),_=h.filter($=>$.toLowerCase().includes(o.toLowerCase())),k=$=>{$.preventDefault(),u==null||u(o),b(!1)},z=()=>{d(""),b(!1)};return e.jsxs("div",{className:`relative ${m}`,children:[e.jsx("form",{onSubmit:k,children:e.jsxs("div",{className:`
          relative
          backdrop-blur-md backdrop-saturate-150
          bg-[var(--glass-bg-light)]
          border border-[var(--glass-border)]
          rounded-2xl
          transition-all duration-300
          ${f?"bg-[var(--glass-bg-medium)] border-[var(--glass-border-strong)] shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]":""}
        `,children:[e.jsx(xt,{size:20,className:"absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] pointer-events-none"}),e.jsx("input",{type:"text",value:o,onChange:$=>{d($.target.value),b(!0)},onFocus:()=>{w(!0),b(!0)},onBlur:()=>{w(!1),setTimeout(()=>b(!1),200)},placeholder:c,className:`
              w-full px-12 py-3
              bg-transparent
              text-white placeholder:text-[var(--text-placeholder)]
              outline-none
            `}),o&&e.jsx("button",{type:"button",onClick:z,className:`
                absolute right-4 top-1/2 -translate-y-1/2
                text-[var(--text-muted)] hover:text-white
                transition-colors duration-200
              `,children:e.jsx(Pt,{size:20})})]})}),j&&_.length>0&&e.jsx("div",{className:`
          absolute top-full left-0 right-0 mt-2 z-20
          backdrop-blur-xl backdrop-saturate-150
          bg-[var(--overlay-popover)]
          border border-[var(--glass-border)]
          rounded-2xl
          overflow-hidden
          shadow-[var(--shadow-overlay)]
          max-h-60 overflow-y-auto
        `,children:_.map(($,G)=>e.jsx("button",{onClick:()=>{d($),b(!1),u==null||u($)},className:`
                w-full px-4 py-3 text-left
                text-white
                hover:bg-[var(--glass-bg-light)]
                transition-colors duration-150
              `,children:$},G))})]})}function Cg({addToast:o}){const[d,c]=I.useState(""),[u,h]=I.useState("");return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-secondary)] bg-clip-text text-transparent",children:"Search Components"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Search inputs with glass morphism effects"})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Glass Search Component"}),e.jsx(Sg,{value:d,onChange:c,placeholder:"Search components, docs, examples...",onSearch:m=>o("info",`Searching for: ${m}`)})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Search Input Variants"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"relative",children:[e.jsx(xt,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-white/40",size:20}),e.jsx("input",{type:"text",placeholder:"Search files...",value:u,onChange:m=>h(m.target.value),className:`
                w-full pl-12 pr-4 py-3
                bg-[var(--glass-bg-light)]
                border border-[var(--glass-border)]
                rounded-xl
                text-white placeholder-white/40
                focus:outline-none focus:border-blue-400/50
                transition-colors
              `})]}),e.jsxs("div",{className:"relative",children:[e.jsx(xt,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-white/40",size:20}),e.jsx("input",{type:"text",placeholder:"Search users...",className:`
                w-full pl-12 pr-4 py-3
                bg-[var(--glass-bg-light)]
                border border-[var(--glass-border)]
                rounded-xl
                text-white placeholder-white/40
                focus:outline-none focus:border-green-400/50
                transition-colors
              `})]}),e.jsxs("div",{className:"relative",children:[e.jsx(xt,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-white/40",size:20}),e.jsx("input",{type:"text",placeholder:"Search products...",className:`
                w-full pl-12 pr-4 py-3
                bg-[var(--glass-bg-light)]
                border border-[var(--glass-border)]
                rounded-xl
                text-white placeholder-white/40
                focus:outline-none focus:border-purple-400/50
                transition-colors
              `})]})]})]}),e.jsx(ue,{code:xe.searchSection})]})}function zg({addToast:o}){return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-[var(--brand-secondary)] to-[var(--brand-primary)] bg-clip-text text-transparent",children:"Button Components"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Beautiful glass buttons in various styles and sizes"})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Button Variants"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(X,{variant:"primary",children:"Primary"}),e.jsx(X,{variant:"secondary",children:"Secondary"}),e.jsx(X,{variant:"accent",children:"Accent"}),e.jsx(X,{variant:"success",children:"Success"}),e.jsx(X,{variant:"ghost",children:"Ghost"}),e.jsx(X,{variant:"danger",children:"Danger"})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Button Sizes"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(X,{variant:"primary",size:"sm",children:"Small"}),e.jsx(X,{variant:"primary",size:"md",children:"Medium"}),e.jsx(X,{variant:"primary",size:"lg",children:"Large"})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Buttons with Icons"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsxs(X,{variant:"primary",children:[e.jsx(cn,{size:20,className:"mr-2"}),"Like"]}),e.jsxs(X,{variant:"secondary",children:[e.jsx(ln,{size:20,className:"mr-2"}),"Download"]}),e.jsxs(X,{variant:"accent",children:[e.jsx($a,{size:20,className:"mr-2"}),"Share"]}),e.jsxs(X,{variant:"success",children:[e.jsx(Ji,{size:20,className:"mr-2"}),"Add New"]})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Icon-Only Buttons"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(X,{variant:"ghost",size:"sm",children:e.jsx(Ki,{size:18})}),e.jsx(X,{variant:"ghost",size:"sm",children:e.jsx(ws,{size:18})}),e.jsx(X,{variant:"ghost",size:"sm",children:e.jsx(Xi,{size:18})}),e.jsx(X,{variant:"ghost",size:"sm",children:e.jsx($a,{size:18})})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Disabled State"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(X,{variant:"primary",disabled:!0,children:"Disabled Primary"}),e.jsx(X,{variant:"secondary",disabled:!0,children:"Disabled Secondary"}),e.jsx(X,{variant:"success",disabled:!0,children:"Disabled Success"})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Interactive Examples"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(X,{variant:"primary",onClick:()=>o("success","Button clicked!"),children:"Click Me"}),e.jsx(X,{variant:"success",onClick:()=>o("success","Action completed!"),children:"Submit"}),e.jsx(X,{variant:"danger",onClick:()=>o("error","Delete action triggered"),children:"Delete"})]})]}),e.jsx(ue,{code:xe.buttonSection})]})}function Kt({children:o,content:d,position:c="top"}){const[u,h]=I.useState(!1),m={top:"bottom-full left-1/2 -translate-x-1/2 mb-2",bottom:"top-full left-1/2 -translate-x-1/2 mt-2",left:"right-full top-1/2 -translate-y-1/2 mr-2",right:"left-full top-1/2 -translate-y-1/2 ml-2"};return e.jsxs("div",{className:"relative inline-block",onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),children:[o,u&&e.jsx("div",{className:`
          absolute z-50 ${m[c]}
          px-3 py-2 rounded-xl
          backdrop-blur-xl backdrop-saturate-150
          bg-[var(--overlay-popover)]
          border border-[var(--glass-border)]
          shadow-[var(--shadow-overlay)]
          text-white text-sm whitespace-nowrap
          animate-in fade-in zoom-in-95 duration-200
          pointer-events-none
        `,children:d})]})}function zu({items:o,trigger:d,position:c="bottom-left",className:u=""}){const[h,m]=I.useState(!1),f={"bottom-left":"top-full left-0 mt-2","bottom-right":"top-full right-0 mt-2","top-left":"bottom-full left-0 mb-2","top-right":"bottom-full right-0 mb-2"};return e.jsxs("div",{className:`relative ${u}`,children:[e.jsx("div",{onClick:()=>m(!h),children:d}),h&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-[100]",onClick:()=>m(!1)}),e.jsx("div",{className:`
            absolute z-[101] ${f[c]}
            min-w-[200px]
            backdrop-blur-xl backdrop-saturate-150
            bg-[var(--overlay-popover)]
            border border-[var(--glass-border)]
            rounded-2xl
            overflow-hidden
            shadow-[var(--shadow-overlay)]
            animate-in fade-in slide-in-from-top-2 duration-200
          `,children:o.map((w,j)=>e.jsx("div",{children:w.divider?e.jsx("div",{className:"h-px bg-[var(--glass-border)] my-2"}):e.jsxs("button",{onClick:()=>{var b;w.disabled||((b=w.onClick)==null||b.call(w),m(!1))},disabled:w.disabled,className:`
                      w-full px-4 py-3 text-left
                      flex items-center gap-3
                      transition-colors duration-150
                      ${w.disabled?"text-[var(--text-disabled)] cursor-not-allowed":"text-white/90 hover:bg-[var(--glass-bg-light)] hover:text-white"}
                    `,children:[w.icon&&e.jsx("span",{children:w.icon}),e.jsx("span",{children:w.label})]})},j))})]})]})}function Mg({addToast:o}){const d=[{label:"Edit",icon:e.jsx(Ki,{size:16}),onClick:()=>o("info","Edit clicked")},{label:"Share",icon:e.jsx($a,{size:16}),onClick:()=>o("info","Share clicked")},{label:"Download",icon:e.jsx(ln,{size:16}),onClick:()=>o("success","Download started")},{divider:!0},{label:"Delete",icon:e.jsx(Xi,{size:16}),onClick:()=>o("error","Item deleted")}];return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-[var(--status-warning)] to-[var(--status-info)] bg-clip-text text-transparent",children:"Popover & Tooltip"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Tooltips and contextual popover menus"})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-2",children:"Tooltip Positions"}),e.jsx("p",{className:"text-white/60 text-sm mb-6",children:"🖱️ Hover over the buttons below to see tooltips"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8 py-8",children:[e.jsx("div",{className:"flex justify-center",children:e.jsx(Kt,{content:"Tooltip on top",position:"top",children:e.jsx(X,{variant:"primary",children:"Top"})})}),e.jsx("div",{className:"flex justify-center",children:e.jsx(Kt,{content:"Tooltip on right",position:"right",children:e.jsx(X,{variant:"primary",children:"Right"})})}),e.jsx("div",{className:"flex justify-center",children:e.jsx(Kt,{content:"Tooltip on bottom",position:"bottom",children:e.jsx(X,{variant:"primary",children:"Bottom"})})}),e.jsx("div",{className:"flex justify-center",children:e.jsx(Kt,{content:"Tooltip on left",position:"left",children:e.jsx(X,{variant:"primary",children:"Left"})})})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Tooltip Examples"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(Kt,{content:"Save your changes",children:e.jsx(X,{variant:"success",children:"Save"})}),e.jsx(Kt,{content:"Cancel current operation",children:e.jsx(X,{variant:"ghost",children:"Cancel"})}),e.jsx(Kt,{content:"Delete this item permanently",children:e.jsx(X,{variant:"danger",children:"Delete"})}),e.jsx(Kt,{content:"Download as PDF",children:e.jsx(X,{variant:"secondary",children:e.jsx(ln,{size:20})})})]})]}),e.jsxs(C,{padding:"lg",className:"relative z-0 pb-[253px]",children:[e.jsx("h3",{className:"text-white text-2xl mb-2",children:"Popover Menu"}),e.jsx("p",{className:"text-white/60 text-sm mb-6",children:"🖱️ Click the buttons below to open popover menus"}),e.jsxs("div",{className:"flex gap-4 relative z-auto",children:[e.jsx(zu,{trigger:e.jsx(X,{variant:"primary",children:"Actions Menu"}),items:d}),e.jsx(zu,{trigger:e.jsx(X,{variant:"ghost",children:e.jsx(Fu,{size:20})}),items:d})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Tooltip with Long Text"}),e.jsx(Kt,{content:"This is a longer tooltip message that provides more detailed information about the action that will be performed when you click this button.",children:e.jsx(X,{variant:"accent",children:"Hover for Long Tooltip"})})]}),e.jsx(ue,{code:xe.tooltipSection})]})}function _g(){return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-[var(--status-success)] to-[var(--brand-primary)] bg-clip-text text-transparent",children:"Grid Layout"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Responsive grid system for layouts"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"2 Column Grid"}),e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsxs(C,{padding:"lg",children:[e.jsx("h4",{className:"text-white text-xl mb-2",children:"Column 1"}),e.jsx("p",{className:"text-white/70",children:"Content in first column"})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h4",{className:"text-white text-xl mb-2",children:"Column 2"}),e.jsx("p",{className:"text-white/70",children:"Content in second column"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"3 Column Grid"}),e.jsxs("div",{className:"grid grid-cols-3 gap-6",children:[e.jsxs(C,{padding:"lg",children:[e.jsx("h4",{className:"text-white text-xl mb-2",children:"Column 1"}),e.jsx("p",{className:"text-white/70",children:"First column content"})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h4",{className:"text-white text-xl mb-2",children:"Column 2"}),e.jsx("p",{className:"text-white/70",children:"Second column content"})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h4",{className:"text-white text-xl mb-2",children:"Column 3"}),e.jsx("p",{className:"text-white/70",children:"Third column content"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"4 Column Grid"}),e.jsx("div",{className:"grid grid-cols-4 gap-4",children:[1,2,3,4,5,6,7,8].map(o=>e.jsx(C,{padding:"md",children:e.jsx("h4",{className:"text-white text-lg text-center",children:o})},o))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Responsive Grid (Auto-fit)"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:[1,2,3,4,5,6,7,8].map(o=>e.jsx(C,{padding:"lg",variant:"gradient",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-white text-3xl font-bold mb-2",children:o}),e.jsx("p",{className:"text-white/70",children:"Responsive Card"})]})},o))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Code Samples"}),e.jsx(ue,{code:xe.gridSection})]})]})}function Eg({value:o,onChange:d,className:c=""}){const[u,h]=I.useState(o||new Date),[m,f]=I.useState(o||new Date),w=new Date(u.getFullYear(),u.getMonth()+1,0).getDate(),j=new Date(u.getFullYear(),u.getMonth(),1).getDay(),b=["January","February","March","April","May","June","July","August","September","October","November","December"],_=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],k=()=>{h(new Date(u.getFullYear(),u.getMonth()-1))},z=()=>{h(new Date(u.getFullYear(),u.getMonth()+1))},$=B=>{const Z=new Date(u.getFullYear(),u.getMonth(),B);f(Z),d==null||d(Z)},G=B=>{const Z=new Date;return B===Z.getDate()&&u.getMonth()===Z.getMonth()&&u.getFullYear()===Z.getFullYear()},F=B=>B===m.getDate()&&u.getMonth()===m.getMonth()&&u.getFullYear()===m.getFullYear();return e.jsxs("div",{className:`
      backdrop-blur-md backdrop-saturate-150
      bg-[var(--glass-bg-light)]
      border border-[var(--glass-border)]
      rounded-3xl
      p-6
      ${c}
    `,children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("button",{onClick:k,className:`
            p-2 rounded-xl
            hover:bg-[var(--glass-bg-light)]
            transition-colors duration-200
            text-white
          `,children:e.jsx(Ta,{size:20})}),e.jsxs("h3",{className:"text-white",children:[b[u.getMonth()]," ",u.getFullYear()]}),e.jsx("button",{onClick:z,className:`
            p-2 rounded-xl
            hover:bg-[var(--glass-bg-light)]
            transition-colors duration-200
            text-white
          `,children:e.jsx(Gt,{size:20})})]}),e.jsx("div",{className:"grid grid-cols-7 gap-2 mb-2",children:_.map(B=>e.jsx("div",{className:"text-center text-[var(--text-muted)] text-sm py-2",children:B},B))}),e.jsxs("div",{className:"grid grid-cols-7 gap-2",children:[Array.from({length:j},(B,Z)=>e.jsx("div",{},`empty-${Z}`)),Array.from({length:w},(B,Z)=>{const he=Z+1;return e.jsx("button",{onClick:()=>$(he),className:`
                aspect-square rounded-xl
                flex items-center justify-center
                text-sm transition-all duration-200
                ${F(he)?"bg-blue-500/30 text-white border-2 border-[var(--status-info-border)]":G(he)?"bg-[var(--glass-bg-medium)] text-white":"text-[var(--text-secondary)] hover:bg-[var(--glass-bg-light)] hover:text-white"}
              `,children:he},he)})]})]})}function $g({addToast:o}){const[d,c]=I.useState(new Date);return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-[var(--brand-secondary)] to-[var(--brand-accent)] bg-clip-text text-transparent",children:"Calendar Component"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Beautiful glass calendar for date selection"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-2",children:"Interactive Calendar"}),e.jsx("p",{className:"text-white/60 text-sm mb-6",children:"🖱️ Click on a date to select it"}),e.jsx(Eg,{value:d,onChange:u=>{c(u),o("success",`Selected: ${u.toLocaleDateString()}`)}})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Selected Date"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-white/5 border border-white/10",children:[e.jsx("p",{className:"text-white/60 text-sm mb-2",children:"Selected Date:"}),e.jsx("p",{className:"text-white text-2xl font-bold",children:d.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-white/5 border border-white/10",children:[e.jsx("p",{className:"text-white/60 text-sm mb-2",children:"Day of Week:"}),e.jsx("p",{className:"text-white text-xl",children:d.toLocaleDateString("en-US",{weekday:"long"})})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-white/5 border border-white/10",children:[e.jsx("p",{className:"text-white/60 text-sm mb-2",children:"Month:"}),e.jsx("p",{className:"text-white text-xl",children:d.toLocaleDateString("en-US",{month:"long",year:"numeric"})})]})]})]})]}),e.jsx("div",{className:"mt-12",children:e.jsx(ue,{code:xe.calendarSection})})]})}function Sa({title:o,value:d,change:c,icon:u,variant:h="default",className:m=""}){const f={default:"from-[var(--glass-bg-light)] to-[var(--glass-bg-subtle)]",primary:"from-[var(--status-info-light)] to-[var(--brand-secondary)]/10",success:"from-[var(--status-success-light)] to-[var(--status-success)]/10",warning:"from-[var(--status-warning-light)] to-[var(--status-warning)]/10"};return e.jsxs("div",{className:`
      backdrop-blur-md backdrop-saturate-150
      bg-gradient-to-br ${f[h]}
      border border-[var(--glass-border)]
      rounded-3xl
      p-6
      ${m}
    `,children:[e.jsxs("div",{className:"flex items-start justify-between mb-4",children:[e.jsx("p",{className:"text-white/70 text-sm",children:o}),u&&e.jsx("div",{className:"p-2 rounded-xl bg-[var(--glass-bg-light)]",children:u})]}),e.jsxs("div",{className:"flex items-end justify-between",children:[e.jsx("h3",{className:"text-3xl text-white",children:d}),c!==void 0&&e.jsxs("div",{className:`
            flex items-center gap-1 text-sm
            ${c>=0?"text-[var(--status-success)]":"text-[var(--status-error)]"}
          `,children:[c>=0?e.jsx(zp,{size:16}):e.jsx(Sp,{size:16}),e.jsxs("span",{children:[Math.abs(c),"%"]})]})]})]})}function Lg(){return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-[var(--status-error)] to-[var(--brand-secondary)] bg-clip-text text-transparent",children:"Card Components"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Various card styles and layouts"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Card Variants"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs(C,{variant:"default",padding:"lg",children:[e.jsx("h4",{className:"text-white text-xl mb-2",children:"Default Card"}),e.jsx("p",{className:"text-white/70",children:"Simple glass card with default styling"})]}),e.jsxs(C,{variant:"gradient",padding:"lg",children:[e.jsx("h4",{className:"text-white text-xl mb-2",children:"Gradient Card"}),e.jsx("p",{className:"text-white/70",children:"Card with beautiful gradient background"})]}),e.jsxs(C,{variant:"border",padding:"lg",children:[e.jsx("h4",{className:"text-white text-xl mb-2",children:"Border Card"}),e.jsx("p",{className:"text-white/70",children:"Card with emphasized border"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Stat Cards"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:[e.jsx(Sa,{title:"Total Users",value:"12,345",change:12.5,icon:e.jsx(La,{className:"text-blue-300",size:24}),variant:"primary"}),e.jsx(Sa,{title:"Revenue",value:"$45,678",change:8.2,icon:e.jsx(Wm,{className:"text-green-300",size:24}),variant:"success"}),e.jsx(Sa,{title:"Activity",value:"89%",change:-3.1,icon:e.jsx(nm,{className:"text-amber-300",size:24}),variant:"warning"}),e.jsx(Sa,{title:"Projects",value:"156",change:15.3,icon:e.jsx(tp,{className:"text-purple-300",size:24})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Content Cards"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[e.jsxs(C,{padding:"lg",children:[e.jsx("div",{className:"aspect-video bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-xl mb-4"}),e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx(Dt,{variant:"primary",children:"Technology"}),e.jsx(Dt,{variant:"success",children:"New"})]}),e.jsx("h4",{className:"text-white text-xl mb-2",children:"Liquid Glass Design"}),e.jsx("p",{className:"text-white/70 mb-4",children:"A modern design system featuring glassmorphism effects and beautiful UI components."}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(X,{variant:"ghost",size:"sm",children:e.jsx(cn,{size:16})}),e.jsx(X,{variant:"ghost",size:"sm",children:e.jsx($a,{size:16})}),e.jsx(X,{variant:"ghost",size:"sm",children:e.jsx(km,{size:16})})]})]}),e.jsxs(C,{padding:"lg",variant:"gradient",children:[e.jsx("div",{className:"aspect-video bg-gradient-to-br from-pink-500/30 to-orange-500/30 rounded-xl mb-4"}),e.jsx("div",{className:"flex items-center gap-2 mb-3",children:e.jsx(Dt,{variant:"warning",children:"Design"})}),e.jsx("h4",{className:"text-white text-xl mb-2",children:"Beautiful Components"}),e.jsx("p",{className:"text-white/70 mb-4",children:"50+ carefully crafted components for your next project."}),e.jsx(X,{variant:"primary",className:"w-full",children:"Learn More"})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("div",{className:"aspect-video bg-gradient-to-br from-teal-500/30 to-green-500/30 rounded-xl mb-4"}),e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx(Dt,{variant:"success",children:"Featured"}),e.jsx(Dt,{variant:"info",children:"Popular"})]}),e.jsx("h4",{className:"text-white text-xl mb-2",children:"Premium Quality"}),e.jsx("p",{className:"text-white/70 mb-4",children:"Production-ready components with TypeScript support."}),e.jsx(X,{variant:"success",className:"w-full",children:"Get Started"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Card Padding Sizes"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs(C,{padding:"sm",children:[e.jsx("h4",{className:"text-white text-lg",children:"Small Padding"}),e.jsx("p",{className:"text-white/70 text-sm",children:"Compact card design"})]}),e.jsxs(C,{padding:"md",children:[e.jsx("h4",{className:"text-white text-lg",children:"Medium Padding"}),e.jsx("p",{className:"text-white/70 text-sm",children:"Default card spacing"})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h4",{className:"text-white text-lg",children:"Large Padding"}),e.jsx("p",{className:"text-white/70 text-sm",children:"Spacious card layout"})]})]})]}),e.jsx(ue,{code:xe.cardsSection})]})}function Fi({isOpen:o,onClose:d,title:c,children:u,size:h="md"}){if(!o)return null;const m={sm:"max-w-md",md:"max-w-2xl",lg:"max-w-4xl"};return e.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",children:[e.jsx("div",{className:"absolute inset-0 bg-[var(--overlay-backdrop)] backdrop-blur-sm",onClick:d}),e.jsxs("div",{className:`
        relative w-full ${m[h]}
        backdrop-blur-xl backdrop-saturate-150
        bg-[var(--overlay-popover)]
        border border-[var(--glass-border)]
        rounded-3xl
        shadow-[var(--shadow-overlay)]
        overflow-hidden
        animate-in fade-in zoom-in-95 duration-200
      `,children:[c&&e.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-[var(--glass-border)]",children:[e.jsx("h3",{className:"text-xl text-white",children:c}),e.jsx("button",{onClick:d,className:`
                text-white/70 hover:text-white
                transition-colors duration-200
                p-2 rounded-xl
                hover:bg-[var(--glass-bg-light)]
              `,children:e.jsx(Pt,{size:20})})]}),e.jsx("div",{className:"p-6",children:u})]})]})}function Dg(){const[o,d]=I.useState(!1),[c,u]=I.useState(!1),[h,m]=I.useState(!1);return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-[var(--brand-secondary)] to-[var(--brand-primary)] bg-clip-text text-transparent",children:"Modal & Drawer"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Overlay components for dialogs and side panels"})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-2",children:"Modal Sizes"}),e.jsx("p",{className:"text-white/60 text-sm mb-6",children:"🖱️ Click the buttons below to open modals in different sizes"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(X,{variant:"primary",onClick:()=>m(!0),children:"Small Modal"}),e.jsx(X,{variant:"primary",onClick:()=>d(!0),children:"Medium Modal"}),e.jsx(X,{variant:"primary",onClick:()=>u(!0),children:"Large Modal"})]})]}),e.jsxs(Fi,{isOpen:h,onClose:()=>m(!1),title:"Small Modal",size:"sm",children:[e.jsx("p",{className:"text-white/90 mb-4",children:"This is a small modal with limited width."}),e.jsx(X,{variant:"primary",onClick:()=>m(!1),children:"Close"})]}),e.jsx(Fi,{isOpen:o,onClose:()=>d(!1),title:"Welcome to Liquid Glass",size:"md",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-white/90",children:"This is a medium-sized modal component with glassmorphism effects."}),e.jsxs("ul",{className:"space-y-2 text-white/70",children:[e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(cn,{size:16,className:"text-pink-400"}),e.jsx("span",{children:"Elegant glassmorphism effects"})]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(ws,{size:16,className:"text-blue-400"}),e.jsx("span",{children:"Smooth animation transitions"})]})]}),e.jsxs("div",{className:"flex gap-3 pt-4",children:[e.jsx(X,{variant:"primary",onClick:()=>d(!1),children:"Confirm"}),e.jsx(X,{variant:"ghost",onClick:()=>d(!1),children:"Cancel"})]})]})}),e.jsx(Fi,{isOpen:c,onClose:()=>u(!1),title:"Contact Form",size:"lg",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-white/70 mb-4",children:"Fill out this form to get in touch with us."}),e.jsx(Xt,{placeholder:"Your name"}),e.jsx(Xt,{type:"email",placeholder:"Your email"}),e.jsx(Xt,{placeholder:"Subject"}),e.jsx("textarea",{className:`
              w-full px-4 py-3 rounded-xl
              backdrop-blur-md backdrop-saturate-150
              bg-[var(--glass-bg-light)]
              border border-[var(--glass-border)]
              text-white placeholder-white/50
              focus:outline-none focus:ring-2 focus:ring-white/30
              transition-all duration-200
            `,rows:4,placeholder:"Your message..."}),e.jsxs("div",{className:"flex gap-3 pt-4",children:[e.jsx(X,{variant:"primary",children:"Send Message"}),e.jsx(X,{variant:"ghost",onClick:()=>u(!1),children:"Cancel"})]})]})}),e.jsx(ue,{title:"Modal Sizes",code:xe.modalSizes}),e.jsx(ue,{title:"Small Modal",code:xe.smallModal}),e.jsx(ue,{title:"Basic Modal",code:xe.basicModal}),e.jsx(ue,{title:"Large Modal with Form",code:xe.largeModalWithForm})]})}function Ca({variant:o,title:d,message:c,onClose:u,className:h=""}){const f={info:{icon:on,color:"bg-[var(--status-info-light)]",borderColor:"border-[var(--status-info-border)]",iconColor:"text-[var(--status-info)]"},success:{icon:Qi,color:"bg-[var(--status-success-light)]",borderColor:"border-[var(--status-success-border)]",iconColor:"text-[var(--status-success)]"},warning:{icon:Du,color:"bg-[var(--status-warning-light)]",borderColor:"border-[var(--status-warning-border)]",iconColor:"text-[var(--status-warning)]"},error:{icon:Pu,color:"bg-[var(--status-error-light)]",borderColor:"border-[var(--status-error-border)]",iconColor:"text-[var(--status-error)]"}}[o],w=f.icon;return e.jsx("div",{className:`
      relative rounded-2xl
      backdrop-blur-md backdrop-saturate-150
      ${f.color}
      border ${f.borderColor}
      p-4
      ${h}
    `,children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx(w,{className:`${f.iconColor} flex-shrink-0 mt-0.5`,size:20}),e.jsxs("div",{className:"flex-1 min-w-0",children:[d&&e.jsx("h4",{className:"text-white mb-1",children:d}),e.jsx("p",{className:"text-white/90 text-sm",children:c})]}),u&&e.jsx("button",{onClick:u,className:"text-white/60 hover:text-white transition-colors p-1",children:e.jsx(Pt,{size:18})})]})})}function Pg({addToast:o}){const[d,c]=I.useState(!0),[u,h]=I.useState(!0);return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-[var(--status-warning)] to-[var(--status-error)] bg-clip-text text-transparent",children:"Messages & Alerts"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Alert messages and toast notifications"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Alert Variants"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(Ca,{variant:"info",title:"Information",message:"This is an informational alert with glass effect."}),e.jsx(Ca,{variant:"success",title:"Success",message:"Your changes have been saved successfully!"}),e.jsx(Ca,{variant:"warning",title:"Warning",message:"Please review your settings before continuing."}),e.jsx(Ca,{variant:"error",title:"Error",message:"An error occurred while processing your request."})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Inline Alerts"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:`
            md:backdrop-blur-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10
            border border-blue-400/30
            rounded-xl p-4
            flex items-start gap-3
          `,children:[e.jsx(on,{className:"text-blue-300 flex-shrink-0 mt-0.5",size:20}),e.jsx("div",{className:"flex-1",children:e.jsx("p",{className:"text-white",children:"Simple info message without title."})})]}),e.jsxs("div",{className:`
            md:backdrop-blur-xl bg-gradient-to-br from-green-500/20 to-green-600/10
            border border-green-400/30
            rounded-xl p-4
            flex items-start gap-3
          `,children:[e.jsx(Qi,{className:"text-green-300 flex-shrink-0 mt-0.5",size:20}),e.jsx("div",{className:"flex-1",children:e.jsx("p",{className:"text-white",children:"Operation completed successfully!"})})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Dismissible Alerts"}),e.jsxs("div",{className:"space-y-4",children:[d&&e.jsxs("div",{className:`
              md:backdrop-blur-xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/10
              border border-yellow-400/30
              rounded-xl p-4
              flex items-start gap-3
            `,children:[e.jsx(Gu,{className:"text-yellow-300 flex-shrink-0 mt-0.5",size:20}),e.jsx("div",{className:"flex-1",children:e.jsx("p",{className:"text-white",children:"This alert can be dismissed."})}),e.jsx("button",{onClick:()=>c(!1),className:"text-white/60 hover:text-white transition-colors",children:e.jsx(Pt,{size:18})})]}),u&&e.jsxs("div",{className:`
              md:backdrop-blur-xl bg-gradient-to-br from-red-500/20 to-red-600/10
              border border-red-400/30
              rounded-xl p-4
              flex items-start gap-3
            `,children:[e.jsx(Pu,{className:"text-red-300 flex-shrink-0 mt-0.5",size:20}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h4",{className:"text-white font-bold mb-1",children:"Closable Error"}),e.jsx("p",{className:"text-white/80",children:"Click the X to close this alert."})]}),e.jsx("button",{onClick:()=>h(!1),className:"text-white/60 hover:text-white transition-colors",children:e.jsx(Pt,{size:18})})]})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Toast Notifications"}),e.jsx("p",{className:"text-white/70 mb-6",children:"Click the buttons to trigger different toast notifications"}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(X,{variant:"success",onClick:()=>o("success","Operation completed successfully!",{title:"Success",duration:5e3}),children:"Success Toast"}),e.jsx(X,{variant:"secondary",onClick:()=>o("error","Something went wrong. Please try again.",{title:"Error",duration:5e3}),children:"Error Toast"}),e.jsx(X,{variant:"accent",onClick:()=>o("warning","Please review your changes before proceeding.",{title:"Warning",duration:5e3}),children:"Warning Toast"}),e.jsx(X,{variant:"primary",onClick:()=>o("info","New updates are available for your account.",{title:"Information",duration:5e3}),children:"Info Toast"})]})]}),e.jsxs(C,{padding:"lg",variant:"gradient",children:[e.jsx("h3",{className:"text-white text-2xl mb-4",children:"Message Best Practices"}),e.jsxs("ul",{className:"space-y-3 text-white/80",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-300 mt-1",children:"✓"}),e.jsxs("span",{children:["Use ",e.jsx("strong",{children:"success"})," alerts for positive confirmations"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-blue-300 mt-1",children:"ℹ"}),e.jsxs("span",{children:["Use ",e.jsx("strong",{children:"info"})," alerts for neutral information"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-yellow-300 mt-1",children:"⚠"}),e.jsxs("span",{children:["Use ",e.jsx("strong",{children:"warning"})," alerts for important notices"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-300 mt-1",children:"✕"}),e.jsxs("span",{children:["Use ",e.jsx("strong",{children:"error"})," alerts for critical issues"]})]})]})]}),e.jsx(ue,{code:xe.messageSection})]})}function Tg({addToast:o}){const[d,c]=de.useState(!1),[u,h]=de.useState(!1),[m,f]=de.useState(null);de.useEffect(()=>{c(!0)},[]);const[w,j]=de.useState(1),[b,_]=de.useState({x:0,y:0}),[k,z]=de.useState(!1),[$,G]=de.useState({x:0,y:0}),F=de.useRef(null),B=`
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
      33% { transform: translate(30px, -50px) scale(1.1) rotate(10deg); }
      66% { transform: translate(-20px, 20px) scale(0.9) rotate(-10deg); }
      100% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
    }
    .animate-blob {
      animation: blob 15s infinite alternate;
    }
    .animation-delay-2000 { animation-delay: 2s; }
    .animation-delay-4000 { animation-delay: 4s; }

    /* 液态玻璃核心属性 */
    .glass-panel {
      background: linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      border: 1px solid rgba(255,255,255,0.12);
      box-shadow: 0 8px 32px 0 rgba(0,0,0,0.4), inset 0 1px 0 0 rgba(255,255,255,0.2);
    }
    
    .glass-panel-hover:hover {
      background: linear-gradient(145deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%);
      border: 1px solid rgba(255,255,255,0.2);
    }

    /* SVG 地图遮罩，制造液态渐变底图 */
    .map-mask {
      -webkit-mask-image: url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg');
      mask-image: url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg');
      -webkit-mask-size: 100% 100%;
      mask-size: 100% 100%;
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-position: center;
      mask-position: center;
      background: radial-gradient(circle at center, rgba(6, 182, 212, 0.5) 0%, rgba(59, 130, 246, 0.2) 60%, rgba(168, 85, 247, 0.3) 100%);
    }

    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
      100% { transform: translateY(0px); }
    }
    .animate-float {
      animation: float 8s ease-in-out infinite;
    }

    @keyframes pulse-marker {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.2); opacity: 0.7; }
    }
    .animate-pulse-marker {
      animation: pulse-marker 2s ease-in-out infinite;
    }

    @keyframes ripple {
      0% { transform: scale(1); opacity: 0.8; }
      100% { transform: scale(2.5); opacity: 0; }
    }
    .animate-ripple {
      animation: ripple 2s ease-out infinite;
    }
  `,Z=[{id:1,name:"New York",left:"74%",top:"35%",color:"rgba(59, 130, 246, 0.9)"},{id:2,name:"London",left:"49.5%",top:"30%",color:"rgba(168, 85, 247, 0.9)"},{id:3,name:"Tokyo",left:"87%",top:"40%",color:"rgba(236, 72, 153, 0.9)"},{id:4,name:"Sydney",left:"90%",top:"68%",color:"rgba(34, 197, 94, 0.9)"},{id:5,name:"Dubai",left:"58%",top:"43%",color:"rgba(251, 146, 60, 0.9)"},{id:6,name:"São Paulo",left:"28%",top:"60%",color:"rgba(6, 182, 212, 0.9)"}],he=[{id:1,left:"75%",top:"36%",intensity:.9},{id:2,left:"50%",top:"31%",intensity:.8},{id:3,left:"87%",top:"41%",intensity:1},{id:4,left:"58%",top:"44%",intensity:.7},{id:5,left:"28%",top:"61%",intensity:.6},{id:6,left:"90%",top:"69%",intensity:.75},{id:7,left:"15%",top:"38%",intensity:.65},{id:8,left:"80%",top:"48%",intensity:.7}],ve=()=>{j(K=>Math.min(K+.2,3))},be=()=>{j(K=>Math.max(K-.2,.5))},J=()=>{j(1),_({x:0,y:0})},ne=()=>{h(!0)},ie=()=>{h(!1),j(1),_({x:0,y:0})},re=K=>{z(!0),G({x:K.clientX-b.x,y:K.clientY-b.y})},we=K=>{k&&_({x:K.clientX-$.x,y:K.clientY-$.y})},Ne=()=>{z(!1)};return e.jsxs("div",{className:"space-y-8",children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:B}}),e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-secondary)] bg-clip-text text-transparent",children:"Interactive Maps"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Location markers and heatmap visualizations"})]}),e.jsxs("div",{className:`relative overflow-hidden rounded-3xl transition-opacity duration-1000 ${d?"opacity-100":"opacity-0"}`,children:[e.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none z-0",children:[e.jsx("div",{className:"absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-cyan-600/20 rounded-full mix-blend-screen filter blur-[40px] md:blur-[120px] animate-blob"}),e.jsx("div",{className:"absolute top-[20%] right-[-10%] w-[45%] h-[60%] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[40px] md:blur-[140px] animate-blob animation-delay-2000"}),e.jsx("div",{className:"absolute bottom-[-15%] left-[25%] w-[40%] h-[40%] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[40px] md:blur-[100px] animate-blob animation-delay-4000"})]}),e.jsxs("div",{className:"relative z-10 w-full glass-panel rounded-3xl flex flex-col items-center justify-center p-6 md:p-10 overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-purple-500/5 pointer-events-none"}),e.jsxs("div",{className:"absolute top-4 right-4 z-20 flex flex-col gap-2",children:[e.jsx("button",{onClick:ve,className:`
                w-10 h-10 rounded-lg
                backdrop-blur-xl bg-[var(--glass-bg-light)]
                border border-[var(--glass-border)]
                hover:bg-white/20
                transition-all duration-200
                flex items-center justify-center
                text-white
              `,title:"Zoom In",children:e.jsx(Nu,{size:20})}),e.jsx("button",{onClick:be,className:`
                w-10 h-10 rounded-lg
                backdrop-blur-xl bg-[var(--glass-bg-light)]
                border border-[var(--glass-border)]
                hover:bg-white/20
                transition-all duration-200
                flex items-center justify-center
                text-white
              `,title:"Zoom Out",children:e.jsx(ku,{size:20})}),e.jsx("button",{onClick:J,className:`
                w-10 h-10 rounded-lg
                backdrop-blur-xl bg-cyan-500/20
                border border-cyan-400/40
                hover:bg-cyan-500/30
                transition-all duration-200
                flex items-center justify-center
                text-cyan-300
              `,title:"Reset View",children:e.jsx(gu,{size:18})}),e.jsx("div",{className:"h-px bg-[var(--glass-bg-light)] my-1"}),e.jsx("button",{onClick:ne,className:`
                w-10 h-10 rounded-lg
                backdrop-blur-xl bg-emerald-500/20
                border border-emerald-400/40
                hover:bg-emerald-500/30
                transition-all duration-200
                flex items-center justify-center
                text-emerald-300
              `,title:"Fullscreen",children:e.jsx(Bi,{size:20})})]}),e.jsx("div",{ref:F,className:"relative w-full overflow-hidden rounded-2xl",style:{aspectRatio:"2 / 1"},onMouseDown:re,onMouseMove:we,onMouseUp:Ne,onMouseLeave:Ne,children:e.jsxs("div",{className:`relative w-full h-full ${k?"cursor-grabbing":"cursor-grab"}`,style:{transform:`translate(${b.x}px, ${b.y}px) scale(${w})`,transition:k?"none":"transform 0.3s ease-out"},children:[e.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg",alt:"Map Fallback",className:"absolute inset-0 w-full h-full opacity-10 invert pointer-events-none"}),e.jsx("div",{className:"absolute inset-0 map-mask opacity-60"}),Z.map(K=>e.jsxs("div",{className:"absolute cursor-pointer group",style:{left:K.left,top:K.top,transform:"translate(-50%, -50%)"},onClick:Pe=>{Pe.stopPropagation(),o("info",`Location: ${K.name}`),f(K)},children:[e.jsx("div",{className:"absolute inset-0 w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full animate-ripple",style:{backgroundColor:K.color}}),e.jsx("div",{className:"relative w-8 h-8 flex items-center justify-center animate-pulse-marker",children:e.jsx(Ma,{size:28,className:"drop-shadow-lg",style:{color:K.color},fill:K.color})}),e.jsx("div",{className:`
                    absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                    px-3 py-1.5 rounded-lg
                    bg-black/80 backdrop-blur-sm
                    border border-[var(--glass-border)]
                    text-white text-sm whitespace-nowrap
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-200
                    pointer-events-none
                  `,children:K.name})]},K.id)),he.map(K=>{const Pe=80+K.intensity*60,$e=.3+K.intensity*.4,Ue=K.intensity>.8?`rgba(239, 68, 68, ${$e})`:K.intensity>.6?`rgba(251, 146, 60, ${$e})`:`rgba(234, 179, 8, ${$e})`;return e.jsx("div",{className:"absolute rounded-full blur-lg md:blur-2xl mix-blend-screen pointer-events-none md:animate-pulse",style:{left:K.left,top:K.top,width:`${Pe}px`,height:`${Pe}px`,backgroundColor:Ue,transform:"translate(-50%, -50%)"}},K.id)})]})})]})]}),m&&e.jsx("div",{className:"relative z-10",children:e.jsx("div",{className:`
            backdrop-blur-xl backdrop-saturate-150
            bg-[var(--glass-bg-light)]
            border border-[var(--glass-border)]
            rounded-2xl
            p-6
            shadow-2xl
            transition-all duration-300
            animate-float
          `,children:e.jsxs("div",{className:"flex items-start justify-between gap-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:"w-3 h-3 rounded-full animate-pulse",style:{backgroundColor:m.color}}),e.jsx("h3",{className:"text-white text-xl",children:m.name})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{className:"text-white/70 text-sm",children:["Position: ",m.left," / ",m.top]}),e.jsx("p",{className:"text-white/60 text-sm",children:"Click to view location details"})]})]}),e.jsx("button",{onClick:()=>f(null),className:`
                  text-white/60 hover:text-white 
                  transition-colors
                  p-2 rounded-lg
                  hover:bg-[var(--glass-bg-light)]
                `,"aria-label":"Close",children:e.jsx(Pt,{size:20})})]})})}),u&&e.jsxs("div",{className:"fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-8",children:[e.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[e.jsx("div",{className:"absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-cyan-600/20 rounded-full mix-blend-screen filter blur-[40px] md:blur-[120px] animate-blob"}),e.jsx("div",{className:"absolute top-[20%] right-[-10%] w-[45%] h-[60%] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[40px] md:blur-[140px] animate-blob animation-delay-2000"}),e.jsx("div",{className:"absolute bottom-[-15%] left-[25%] w-[40%] h-[40%] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[40px] md:blur-[100px] animate-blob animation-delay-4000"})]}),e.jsx("button",{onClick:ie,className:`
              absolute top-6 right-6 z-50
              w-12 h-12 rounded-full
              backdrop-blur-xl bg-[var(--glass-bg-light)]
              border border-[var(--glass-border)]
              hover:bg-white/20
              transition-all duration-200
              flex items-center justify-center
              text-white
            `,title:"Close",children:e.jsx(Pt,{size:24})}),e.jsxs("div",{className:"relative w-full h-full max-w-[95vw] max-h-[90vh] glass-panel rounded-3xl flex flex-col items-center justify-center p-8 overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-purple-500/5 pointer-events-none"}),e.jsxs("div",{className:"absolute top-4 right-4 z-20 flex flex-col gap-2",children:[e.jsx("button",{onClick:ve,className:`
                  w-12 h-12 rounded-lg
                  backdrop-blur-xl bg-[var(--glass-bg-light)]
                  border border-[var(--glass-border)]
                  hover:bg-white/20
                  transition-all duration-200
                  flex items-center justify-center
                  text-white
                `,title:"Zoom In",children:e.jsx(Nu,{size:24})}),e.jsx("button",{onClick:be,className:`
                  w-12 h-12 rounded-lg
                  backdrop-blur-xl bg-[var(--glass-bg-light)]
                  border border-[var(--glass-border)]
                  hover:bg-white/20
                  transition-all duration-200
                  flex items-center justify-center
                  text-white
                `,title:"Zoom Out",children:e.jsx(ku,{size:24})}),e.jsx("button",{onClick:J,className:`
                  w-12 h-12 rounded-lg
                  backdrop-blur-xl bg-[var(--glass-bg-light)]
                  border border-[var(--glass-border)]
                  hover:bg-white/20
                  transition-all duration-200
                  flex items-center justify-center
                  text-white
                `,title:"Reset View",children:e.jsx(gu,{size:20})})]}),e.jsx("div",{className:"relative w-full h-full overflow-hidden rounded-2xl",onMouseDown:re,onMouseMove:we,onMouseUp:Ne,onMouseLeave:Ne,children:e.jsxs("div",{className:`relative w-full h-full ${k?"cursor-grabbing":"cursor-grab"}`,style:{transform:`translate(${b.x}px, ${b.y}px) scale(${w})`,transition:k?"none":"transform 0.3s ease-out"},children:[e.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg",alt:"Map Fallback",className:"absolute inset-0 w-full h-full opacity-10 invert pointer-events-none object-contain"}),e.jsx("div",{className:"absolute inset-0 map-mask opacity-60",style:{aspectRatio:"2 / 1",margin:"auto"}}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsxs("div",{className:"relative w-full",style:{aspectRatio:"2 / 1"},children:[Z.map(K=>e.jsxs("div",{className:"absolute cursor-pointer group",style:{left:K.left,top:K.top,transform:"translate(-50%, -50%)"},onClick:Pe=>{Pe.stopPropagation(),o("info",`Location: ${K.name}`),f(K)},children:[e.jsx("div",{className:"absolute inset-0 w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full animate-ripple",style:{backgroundColor:K.color}}),e.jsx("div",{className:"relative w-8 h-8 flex items-center justify-center animate-pulse-marker",children:e.jsx(Ma,{size:28,className:"drop-shadow-lg",style:{color:K.color},fill:K.color})}),e.jsx("div",{className:`
                          absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                          px-3 py-1.5 rounded-lg
                          bg-black/80 backdrop-blur-sm
                          border border-[var(--glass-border)]
                          text-white text-sm whitespace-nowrap
                          opacity-0 group-hover:opacity-100
                          transition-opacity duration-200
                          pointer-events-none
                        `,children:K.name})]},K.id)),he.map(K=>{const Pe=80+K.intensity*60,$e=.3+K.intensity*.4,Ue=K.intensity>.8?`rgba(239, 68, 68, ${$e})`:K.intensity>.6?`rgba(251, 146, 60, ${$e})`:`rgba(234, 179, 8, ${$e})`;return e.jsx("div",{className:"absolute rounded-full blur-lg md:blur-2xl mix-blend-screen pointer-events-none md:animate-pulse",style:{left:K.left,top:K.top,width:`${Pe}px`,height:`${Pe}px`,backgroundColor:Ue,transform:"translate(-50%, -50%)"}},K.id)})]})})]})})]})]})]})}function bs({size:o="md",variant:d="primary",className:c=""}){const u={sm:"w-4 h-4 border-2",md:"w-8 h-8 border-3",lg:"w-12 h-12 border-4",xl:"w-16 h-16 border-4"},h={primary:"border-[var(--glass-border)] border-t-white",success:"border-[var(--status-success-light)] border-t-[var(--status-success)]",warning:"border-[var(--status-warning-light)] border-t-[var(--status-warning)]"};return e.jsx("div",{className:`
        ${u[o]}
        rounded-full
        ${h[d]}
        animate-spin
        ${c}
      `})}function Ie({variant:o="text",width:d,height:c,className:u=""}){const h=`
    backdrop-blur-md backdrop-saturate-150
    bg-[var(--glass-bg-light)]
    border border-[var(--glass-dark-border)]
    animate-pulse
  `,m={text:"h-4 rounded-lg",circular:"rounded-full",rectangular:"rounded-2xl"},f={};return d&&(f.width=d),c&&(f.height=c),e.jsx("div",{className:`${h} ${m[o]} ${u}`,style:f})}function Fg(){const[o,d]=I.useState(!1);return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-[var(--brand-secondary)] to-[var(--brand-accent)] bg-clip-text text-transparent",children:"Loading States"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Spinners, skeleton loaders and loading overlays"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Spinner Sizes"}),e.jsx(C,{padding:"lg",children:e.jsxs("div",{className:"flex items-center justify-around flex-wrap gap-8",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(bs,{size:"sm"}),e.jsx("p",{className:"text-white/60 text-sm mt-2",children:"Small"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(bs,{size:"md"}),e.jsx("p",{className:"text-white/60 text-sm mt-2",children:"Medium"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(bs,{size:"lg"}),e.jsx("p",{className:"text-white/60 text-sm mt-2",children:"Large"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(bs,{size:"xl"}),e.jsx("p",{className:"text-white/60 text-sm mt-2",children:"Extra Large"})]})]})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Spinner Variants"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[e.jsx(C,{padding:"lg",children:e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsx(bs,{size:"lg",variant:"primary"}),e.jsx("p",{className:"text-white",children:"Primary Spinner"})]})}),e.jsx(C,{padding:"lg",children:e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsx(bs,{size:"lg",variant:"success"}),e.jsx("p",{className:"text-white",children:"Success Spinner"})]})}),e.jsx(C,{padding:"lg",children:e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsx(bs,{size:"lg",variant:"warning"}),e.jsx("p",{className:"text-white",children:"Warning Spinner"})]})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Loading Overlay"}),e.jsxs(C,{padding:"lg",children:[e.jsx("p",{className:"text-white/80 mb-4",children:"Click the button to show a full-page loading overlay. Click anywhere on the overlay to close it."}),e.jsx(X,{variant:"primary",onClick:()=>{d(!0),setTimeout(()=>d(!1),3e3)},children:"Show Loading Overlay"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Skeleton Loading"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs(C,{padding:"lg",children:[e.jsx("h4",{className:"text-white text-xl mb-4",children:"Basic Skeletons"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(Ie,{width:"100%",height:"20px"}),e.jsx(Ie,{width:"80%",height:"20px"}),e.jsx(Ie,{width:"60%",height:"20px"}),e.jsx(Ie,{width:"90%",height:"20px"})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h4",{className:"text-white text-xl mb-4",children:"Different Sizes"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(Ie,{width:"100%",height:"40px"}),e.jsx(Ie,{width:"100%",height:"30px"}),e.jsx(Ie,{width:"100%",height:"20px"}),e.jsx(Ie,{width:"100%",height:"15px"})]})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Skeleton Card"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[e.jsx(Ri,{}),e.jsx(Ri,{}),e.jsx(Ri,{})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Content Loading Example"}),e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[e.jsx(Ie,{width:"60px",height:"60px",className:"rounded-full"}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx(Ie,{width:"40%",height:"20px"}),e.jsx(Ie,{width:"60%",height:"16px"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(Ie,{width:"100%",height:"16px"}),e.jsx(Ie,{width:"95%",height:"16px"}),e.jsx(Ie,{width:"88%",height:"16px"})]})]})]}),o&&e.jsx(Rg,{message:"Loading...",onClose:()=>d(!1)}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-white text-3xl mb-6 text-center",children:"Code Samples"}),e.jsx(ue,{code:xe.loadingSection,language:"tsx"})]})]})}function Ri(){return e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[e.jsx(Ie,{width:"48px",height:"48px",className:"rounded-full"}),e.jsxs("div",{className:"flex-1",children:[e.jsx(Ie,{width:"60%",height:"16px",className:"mb-2"}),e.jsx(Ie,{width:"40%",height:"12px"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(Ie,{width:"100%",height:"12px"}),e.jsx(Ie,{width:"90%",height:"12px"}),e.jsx(Ie,{width:"95%",height:"12px"})]})]})}function Rg({message:o,onClose:d}){return e.jsx("div",{className:"fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm",onClick:d,children:e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsx(bs,{size:"xl"}),e.jsx("p",{className:"text-white text-xl font-medium",children:o})]})})}const Ot=({className:o="",gradient:d=!1,glowColor:c="#60A5FA"})=>e.jsxs("svg",{viewBox:"0 0 80 80",className:o,fill:"none",children:[e.jsxs("defs",{children:[d&&e.jsxs(e.Fragment,{children:[e.jsxs("linearGradient",{id:"abstract-gradient-1",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"#60A5FA",stopOpacity:1}}),e.jsx("stop",{offset:"50%",style:{stopColor:"#A855F7",stopOpacity:1}}),e.jsx("stop",{offset:"100%",style:{stopColor:"#EC4899",stopOpacity:1}})]}),e.jsxs("linearGradient",{id:"abstract-gradient-2",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"#F472B6",stopOpacity:1}}),e.jsx("stop",{offset:"50%",style:{stopColor:"#A855F7",stopOpacity:1}}),e.jsx("stop",{offset:"100%",style:{stopColor:"#60A5FA",stopOpacity:1}})]})]}),e.jsxs("filter",{id:"glow",children:[e.jsx("feGaussianBlur",{stdDeviation:"3",result:"coloredBlur"}),e.jsxs("feMerge",{children:[e.jsx("feMergeNode",{in:"coloredBlur"}),e.jsx("feMergeNode",{in:"coloredBlur"}),e.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),e.jsx("circle",{cx:"25",cy:"40",r:"15",fill:d?"url(#abstract-gradient-1)":"white",opacity:"0.9"}),e.jsx("circle",{cx:"55",cy:"40",r:"15",fill:d?"url(#abstract-gradient-1)":"white",opacity:"0.9"}),e.jsx("circle",{cx:"40",cy:"25",r:"12",fill:d?"url(#abstract-gradient-2)":"white",opacity:"0.95"}),e.jsx("circle",{cx:"40",cy:"55",r:"12",fill:d?"url(#abstract-gradient-2)":"white",opacity:"0.95"}),e.jsx("circle",{cx:"40",cy:"40",r:"8",fill:d?"url(#abstract-gradient-1)":"white"}),e.jsx("circle",{cx:"40",cy:"40",r:"3",fill:"white",opacity:"1"})]}),Ag=({className:o="",strokeColor:d="white",strokeWidth:c=2.5})=>e.jsxs("svg",{viewBox:"0 0 80 80",className:o,fill:"none",children:[e.jsx("circle",{cx:"25",cy:"40",r:"15",stroke:d,strokeWidth:c,opacity:"0.9"}),e.jsx("circle",{cx:"55",cy:"40",r:"15",stroke:d,strokeWidth:c,opacity:"0.9"}),e.jsx("circle",{cx:"40",cy:"25",r:"12",stroke:d,strokeWidth:c,opacity:"0.95"}),e.jsx("circle",{cx:"40",cy:"55",r:"12",stroke:d,strokeWidth:c,opacity:"0.95"}),e.jsx("circle",{cx:"40",cy:"40",r:"8",stroke:d,strokeWidth:c}),e.jsx("circle",{cx:"40",cy:"40",r:"3",fill:d})]});function Ig(){const o=[{name:"Primary Logo",description:"Main brand logo with gradient glass effect",component:e.jsxs("div",{className:"w-32 h-32 rounded-2xl bg-gradient-to-br from-[var(--brand-primary)]/20 to-[var(--brand-secondary)]/20 backdrop-blur-md border border-[var(--glass-border)] flex items-center justify-center relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"}),e.jsx(Ot,{className:"w-20 h-20 relative z-10"})]})},{name:"Compact Logo",description:"Smaller version for navigation",component:e.jsxs("div",{className:"w-20 h-20 rounded-xl bg-gradient-to-br from-[var(--brand-primary)]/20 to-[var(--brand-secondary)]/20 backdrop-blur-md border border-[var(--glass-border)] flex items-center justify-center relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"}),e.jsx(Ot,{className:"w-12 h-12 relative z-10"})]})},{name:"Gradient Fill",description:"Logo with colorful gradient fill",component:e.jsx("div",{className:"w-32 h-32 rounded-2xl bg-gradient-to-br from-[var(--glass-bg-light)] to-[var(--glass-bg-subtle)] backdrop-blur-md border border-[var(--glass-border)] flex items-center justify-center relative overflow-hidden",children:e.jsx(Ot,{className:"w-20 h-20",gradient:!0})})},{name:"Neon Glow",description:"Logo with neon glow effect",component:e.jsx("div",{className:"w-32 h-32 rounded-2xl bg-gradient-to-br from-[var(--glass-bg-light)] to-[var(--glass-bg-subtle)] backdrop-blur-md border border-[var(--glass-border)] flex items-center justify-center relative overflow-hidden",children:e.jsxs("svg",{viewBox:"0 0 80 80",className:"w-20 h-20",fill:"none",children:[e.jsx("defs",{children:e.jsxs("filter",{id:"neon-glow-logo",children:[e.jsx("feGaussianBlur",{stdDeviation:"3",result:"coloredBlur"}),e.jsxs("feMerge",{children:[e.jsx("feMergeNode",{in:"coloredBlur"}),e.jsx("feMergeNode",{in:"coloredBlur"}),e.jsx("feMergeNode",{in:"SourceGraphic"})]})]})}),e.jsx("circle",{cx:"25",cy:"40",r:"15",fill:"#60A5FA",filter:"url(#neon-glow-logo)",opacity:"0.9"}),e.jsx("circle",{cx:"55",cy:"40",r:"15",fill:"#60A5FA",filter:"url(#neon-glow-logo)",opacity:"0.9"}),e.jsx("circle",{cx:"40",cy:"25",r:"12",fill:"#A855F7",filter:"url(#neon-glow-logo)",opacity:"0.95"}),e.jsx("circle",{cx:"40",cy:"55",r:"12",fill:"#A855F7",filter:"url(#neon-glow-logo)",opacity:"0.95"}),e.jsx("circle",{cx:"40",cy:"40",r:"8",fill:"#EC4899",filter:"url(#neon-glow-logo)"}),e.jsx("circle",{cx:"40",cy:"40",r:"3",fill:"white"})]})})},{name:"Outlined",description:"Minimalist outlined version",component:e.jsx("div",{className:"w-32 h-32 rounded-2xl bg-[var(--glass-bg-subtle)] backdrop-blur-md border-2 border-[var(--glass-border-strong)] flex items-center justify-center",children:e.jsx(Ag,{className:"w-20 h-20"})})},{name:"Solid Fill",description:"Bold solid color version",component:e.jsx("div",{className:"w-32 h-32 rounded-2xl bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-secondary)] flex items-center justify-center shadow-2xl shadow-purple-500/50",children:e.jsx(Ot,{className:"w-20 h-20"})})},{name:"Multi-color",description:"Vibrant multi-color gradient",component:e.jsx("div",{className:"w-32 h-32 rounded-2xl bg-gradient-to-br from-[var(--glass-bg-light)] to-[var(--glass-bg-subtle)] backdrop-blur-md border border-[var(--glass-border)] flex items-center justify-center relative overflow-hidden",children:e.jsxs("svg",{viewBox:"0 0 80 80",className:"w-20 h-20",fill:"none",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"multi-color-1",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"#F472B6",stopOpacity:1}}),e.jsx("stop",{offset:"100%",style:{stopColor:"#A855F7",stopOpacity:1}})]}),e.jsxs("linearGradient",{id:"multi-color-2",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"#60A5FA",stopOpacity:1}}),e.jsx("stop",{offset:"100%",style:{stopColor:"#34D399",stopOpacity:1}})]}),e.jsxs("linearGradient",{id:"multi-color-3",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"#FBBF24",stopOpacity:1}}),e.jsx("stop",{offset:"100%",style:{stopColor:"#F59E0B",stopOpacity:1}})]})]}),e.jsx("circle",{cx:"25",cy:"40",r:"15",fill:"url(#multi-color-1)",opacity:"0.9"}),e.jsx("circle",{cx:"55",cy:"40",r:"15",fill:"url(#multi-color-2)",opacity:"0.9"}),e.jsx("circle",{cx:"40",cy:"25",r:"12",fill:"url(#multi-color-3)",opacity:"0.95"}),e.jsx("circle",{cx:"40",cy:"55",r:"12",fill:"url(#multi-color-1)",opacity:"0.95"}),e.jsx("circle",{cx:"40",cy:"40",r:"8",fill:"url(#multi-color-2)"}),e.jsx("circle",{cx:"40",cy:"40",r:"3",fill:"white"})]})})},{name:"Glass Morphism",description:"Enhanced glass effect with layers",component:e.jsxs("div",{className:"w-32 h-32 rounded-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/30 to-[var(--brand-secondary)]/30 backdrop-blur-xl"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"}),e.jsx("div",{className:"absolute inset-0 border border-[var(--glass-border-strong)] rounded-2xl"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx(Ot,{className:"w-20 h-20 relative z-10"})})]})},{name:"Monochrome",description:"Clean monochrome design",component:e.jsx("div",{className:"w-32 h-32 rounded-2xl bg-[var(--glass-bg-light)] backdrop-blur-md border border-[var(--glass-border-strong)] flex items-center justify-center",children:e.jsx(Ot,{className:"w-20 h-20"})})},{name:"Animated Gradient",description:"Logo with animated background",component:e.jsxs("div",{className:"w-32 h-32 rounded-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/20 via-[var(--brand-secondary)]/20 to-pink-500/20 backdrop-blur-md animate-pulse"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"}),e.jsx("div",{className:"absolute inset-0 border border-[var(--glass-border-strong)] rounded-2xl"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx(Ot,{className:"w-20 h-20 relative z-10"})})]})},{name:"Dark Mode",description:"Optimized for dark backgrounds",component:e.jsx("div",{className:"w-32 h-32 rounded-2xl bg-black/40 backdrop-blur-md border border-[var(--glass-dark-border)] flex items-center justify-center",children:e.jsx(Ot,{className:"w-20 h-20"})})},{name:"Light Mode",description:"Optimized for light backgrounds",component:e.jsx("div",{className:"w-32 h-32 rounded-2xl bg-white/90 backdrop-blur-md border border-gray-200 flex items-center justify-center",children:e.jsxs("svg",{viewBox:"0 0 80 80",className:"w-20 h-20",fill:"none",children:[e.jsx("circle",{cx:"25",cy:"40",r:"15",fill:"#6366F1",opacity:"0.9"}),e.jsx("circle",{cx:"55",cy:"40",r:"15",fill:"#6366F1",opacity:"0.9"}),e.jsx("circle",{cx:"40",cy:"25",r:"12",fill:"#A855F7",opacity:"0.95"}),e.jsx("circle",{cx:"40",cy:"55",r:"12",fill:"#A855F7",opacity:"0.95"}),e.jsx("circle",{cx:"40",cy:"40",r:"8",fill:"#EC4899"}),e.jsx("circle",{cx:"40",cy:"40",r:"3",fill:"white"})]})})}];return e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",children:o.map((d,c)=>e.jsx("div",{className:`
            backdrop-blur-md backdrop-saturate-150
            bg-[var(--glass-bg-subtle)]
            border border-[var(--glass-dark-border)]
            rounded-2xl
            p-6
            hover:bg-[var(--glass-bg-light)]
            hover:border-[var(--glass-border)]
            transition-all duration-300
            group
          `,children:e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsx("div",{className:"transform group-hover:scale-110 transition-transform duration-300",children:d.component}),e.jsxs("div",{className:"text-center",children:[e.jsx("h4",{className:"text-white text-lg font-semibold mb-1",children:d.name}),e.jsx("p",{className:"text-[var(--text-muted)] text-sm",children:d.description})]})]})},c))})}function or({size:o="md",variant:d="primary",className:c=""}){const h={sm:{container:"w-8 h-8",icon:"w-6 h-6",text:"text-base",subtext:"text-[8px]"},md:{container:"w-12 h-12",icon:"w-9 h-9",text:"text-2xl",subtext:"text-xs"},lg:{container:"w-16 h-16",icon:"w-12 h-12",text:"text-3xl",subtext:"text-sm"}}[o];return d==="compact"?e.jsxs("div",{className:`flex items-center gap-3 ${c}`,children:[e.jsxs("div",{className:`
          ${h.container}
          rounded-xl
          bg-gradient-to-br from-[var(--brand-primary)]/20 to-[var(--brand-secondary)]/20
          backdrop-blur-md
          border border-[var(--glass-border)]
          flex items-center justify-center
          relative overflow-hidden
        `,children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"}),e.jsx(Ot,{className:`${h.icon} relative z-10`})]}),e.jsx("span",{className:`text-white font-bold ${h.text}`,children:"LIQUID GLASS"})]}):e.jsxs("div",{className:`flex items-center gap-3 ${c}`,children:[e.jsxs("div",{className:`
        ${h.container}
        rounded-xl
        bg-gradient-to-br from-[var(--brand-primary)]/20 to-[var(--brand-secondary)]/20
        backdrop-blur-md
        border border-[var(--glass-border)]
        flex items-center justify-center
        relative overflow-hidden
      `,children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"}),e.jsx(Ot,{className:`${h.icon} relative z-10`})]}),e.jsxs("div",{children:[e.jsx("h1",{className:`text-white font-bold tracking-wide ${h.text}`,children:"LIQUID GLASS"}),e.jsx("p",{className:`text-white/50 tracking-wider ${h.subtext}`,children:"DESIGN SYSTEM"})]})]})}function Og(){return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-[var(--brand-secondary)] via-[var(--brand-accent)] to-[var(--brand-primary)] bg-clip-text text-transparent",children:"Logo Design System"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Complete brand identity with multiple logo variations"})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Logo with Text"}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-white/60 text-sm mb-4",children:"Large"}),e.jsx("div",{className:"flex justify-center",children:e.jsx(or,{size:"lg",variant:"full"})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-white/60 text-sm mb-4",children:"Medium"}),e.jsx("div",{className:"flex justify-center",children:e.jsx(or,{size:"md",variant:"full"})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-white/60 text-sm mb-4",children:"Small"}),e.jsx("div",{className:"flex justify-center",children:e.jsx(or,{size:"sm",variant:"full"})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-white/60 text-sm mb-4",children:"Compact (No Subtitle)"}),e.jsxs("div",{className:"flex justify-center gap-8",children:[e.jsx(or,{size:"lg",variant:"compact"}),e.jsx(or,{size:"md",variant:"compact"}),e.jsx(or,{size:"sm",variant:"compact"})]})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Logo Variations"}),e.jsx(Ig,{})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Usage Guidelines"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-semibold mb-2",children:"Primary Logo"}),e.jsx("p",{className:"text-white/70 text-sm",children:"Use for main brand representation. Works best on dark backgrounds with glassmorphism effects."})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-semibold mb-2",children:"Compact Logo"}),e.jsx("p",{className:"text-white/70 text-sm",children:"Ideal for navigation bars, favicons, and small UI elements where space is limited."})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-semibold mb-2",children:"Gradient Variants"}),e.jsx("p",{className:"text-white/70 text-sm",children:"Use gradient fills for hero sections and marketing materials to add visual interest."})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-semibold mb-2",children:"Color Modes"}),e.jsx("p",{className:"text-white/70 text-sm",children:"Choose dark or light mode variants based on background. Maintain contrast for accessibility."})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-semibold mb-2",children:"Minimum Size"}),e.jsx("p",{className:"text-white/70 text-sm",children:"Never scale the logo below 24px × 24px to maintain legibility and visual impact."})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-semibold mb-2",children:"Clear Space"}),e.jsx("p",{className:"text-white/70 text-sm",children:"Maintain minimum padding equal to half the logo height on all sides."})]})]})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Brand Colors"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"w-full h-24 rounded-xl bg-gradient-to-br from-[var(--brand-secondary)] to-[var(--brand-secondary)] border border-[var(--glass-border)]"}),e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-white text-sm font-medium",children:"Primary Blue"}),e.jsx("p",{className:"text-white/60 text-xs",children:"#60A5FA"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"w-full h-24 rounded-xl bg-gradient-to-br from-[var(--brand-accent)] to-[var(--brand-accent)] border border-[var(--glass-border)]"}),e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-white text-sm font-medium",children:"Primary Purple"}),e.jsx("p",{className:"text-white/60 text-xs",children:"#A855F7"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"w-full h-24 rounded-xl bg-gradient-to-br from-[var(--status-error)] to-[var(--status-error)] border border-[var(--glass-border)]"}),e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-white text-sm font-medium",children:"Accent Pink"}),e.jsx("p",{className:"text-white/60 text-xs",children:"#F472B6"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"w-full h-24 rounded-xl bg-gradient-to-br from-white/80 to-white/60 border border-white/30"}),e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-white text-sm font-medium",children:"Glass White"}),e.jsx("p",{className:"text-white/60 text-xs",children:"#FFFFFF"})]})]})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Code Samples"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-semibold mb-2",children:"Logo with Text (Large)"}),e.jsx(ue,{code:xe.logoWithTextLarge})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-semibold mb-2",children:"Logo with Text (Medium)"}),e.jsx(ue,{code:xe.logoWithTextMedium})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-semibold mb-2",children:"Logo with Text (Small)"}),e.jsx(ue,{code:xe.logoWithTextSmall})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-semibold mb-2",children:"Logo with Text (Compact)"}),e.jsx(ue,{code:xe.logoWithTextCompact})]})]})]})]})}function Gg(){const[o,d]=I.useState(null),c=m=>{navigator.clipboard.writeText(m),d(m),setTimeout(()=>d(null),2e3)},u=[{name:"Primary Colors",description:"Main brand colors for primary actions and key elements",colors:[{name:"Blue",hex:"#60A5FA",rgb:"rgb(96, 165, 250)",usage:"Primary buttons, links, active states"},{name:"Purple",hex:"#A855F7",rgb:"rgb(168, 85, 247)",usage:"Secondary actions, highlights"},{name:"Indigo",hex:"#6366F1",rgb:"rgb(99, 102, 241)",usage:"Information, data visualization"}]},{name:"Accent Colors",description:"Eye-catching colors for special highlights and CTAs",colors:[{name:"Pink",hex:"#F472B6",rgb:"rgb(244, 114, 182)",usage:"Highlights, special offers, notifications"},{name:"Rose",hex:"#FB7185",rgb:"rgb(251, 113, 133)",usage:"Love, favorites, important items"},{name:"Fuchsia",hex:"#E879F9",rgb:"rgb(232, 121, 249)",usage:"Creative elements, decorative"}]},{name:"Success & Status",description:"Colors for feedback, alerts, and status indicators",colors:[{name:"Green",hex:"#43E97B",rgb:"rgb(67, 233, 123)",usage:"Success messages, positive actions"},{name:"Emerald",hex:"#10B981",rgb:"rgb(16, 185, 129)",usage:"Confirmed, active, available"},{name:"Teal",hex:"#14B8A6",rgb:"rgb(20, 184, 166)",usage:"Secondary success, growth"}]},{name:"Warning & Alert",description:"Colors for warnings, errors, and attention",colors:[{name:"Yellow",hex:"#FBBF24",rgb:"rgb(251, 191, 36)",usage:"Warnings, caution, pending"},{name:"Orange",hex:"#F97316",rgb:"rgb(249, 115, 22)",usage:"Important warnings, urgent"},{name:"Amber",hex:"#FAD089",rgb:"rgb(250, 208, 137)",usage:"Moderate alerts, notifications"}]},{name:"Error & Danger",description:"Colors for errors, destructive actions, and critical alerts",colors:[{name:"Red",hex:"#EF4444",rgb:"rgb(239, 68, 68)",usage:"Errors, delete actions, critical"},{name:"Crimson",hex:"#DC2626",rgb:"rgb(220, 38, 38)",usage:"Destructive actions, danger"}]},{name:"Cool Tones",description:"Blues and cyans for calm, professional interfaces",colors:[{name:"Cyan",hex:"#4FACFE",rgb:"rgb(79, 172, 254)",usage:"Links, information, data"},{name:"Sky",hex:"#38BDF8",rgb:"rgb(56, 189, 248)",usage:"Secondary information, badges"},{name:"Slate",hex:"#677EEA",rgb:"rgb(103, 126, 234)",usage:"Charts, graphs, data points"}]},{name:"Neutral Tones",description:"Grays and whites for backgrounds and text",colors:[{name:"White",hex:"#FFFFFF",rgb:"rgb(255, 255, 255)",usage:"Text, icons, borders"},{name:"Light Gray",hex:"#F3F4F6",rgb:"rgb(243, 244, 246)",usage:"Light backgrounds, dividers"},{name:"Gray",hex:"#9CA3AF",rgb:"rgb(156, 163, 175)",usage:"Secondary text, disabled states"},{name:"Dark Gray",hex:"#4B5563",rgb:"rgb(75, 85, 99)",usage:"Body text, labels"}]},{name:"Gradient Combinations",description:"Pre-designed gradient pairs for liquid glass effects",colors:[{name:"Blue → Purple",hex:"#60A5FA → #A855F7",rgb:"gradient",usage:"Primary brand gradients"},{name:"Purple → Pink",hex:"#A855F7 → #F472B6",rgb:"gradient",usage:"Accent gradients, highlights"},{name:"Cyan → Blue",hex:"#4FACFE → #677EEA",rgb:"gradient",usage:"Cool tone gradients"},{name:"Green → Teal",hex:"#43E97B → #14B8A6",rgb:"gradient",usage:"Success, growth gradients"},{name:"Pink → Orange",hex:"#F472B6 → #F97316",rgb:"gradient",usage:"Warm accent gradients"},{name:"Multi-Color",hex:"#F472B6 → #A855F7 → #60A5FA",rgb:"gradient",usage:"Rainbow effects, creative"}]}],h=[{name:"Ultra Light",value:"bg-white/5",usage:"Subtle overlays"},{name:"Light",value:"bg-[var(--glass-bg-light)]",usage:"Standard glass cards"},{name:"Medium",value:"bg-white/15",usage:"Emphasized elements"},{name:"Strong",value:"bg-white/20",usage:"Active states"},{name:"Extra Strong",value:"bg-white/30",usage:"Popups, modals"}];return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent",children:"Color System"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Complete color palette for Liquid Glass design system"})]}),u.map((m,f)=>e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl font-bold mb-2",children:m.name}),e.jsx("p",{className:"text-white/60 text-sm mb-4",children:m.description}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:m.colors.map((w,j)=>e.jsxs(C,{padding:"none",className:"overflow-hidden group",children:[w.rgb==="gradient"?e.jsx("div",{className:"h-32 relative overflow-hidden",style:{background:w.hex.includes("→")?`linear-gradient(135deg, ${w.hex.split(" → ").map(b=>b.trim()).join(", ")})`:w.hex},children:e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"})}):e.jsx("div",{className:"h-32 relative overflow-hidden",style:{backgroundColor:w.hex},children:e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"})}),e.jsxs("div",{className:"p-4 space-y-3",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-white text-lg font-bold mb-1",children:w.name}),e.jsx("p",{className:"text-white/60 text-xs",children:w.usage})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("button",{onClick:()=>c(w.hex),className:`
                        w-full flex items-center justify-between
                        px-3 py-2 rounded-lg
                        bg-white/5 hover:bg-[var(--glass-bg-light)]
                        border border-white/10
                        transition-all duration-200
                        group/copy
                      `,children:[e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsx("span",{className:"text-white/40 text-xs",children:"HEX"}),e.jsx("span",{className:"text-white text-sm font-mono",children:w.hex})]}),o===w.hex?e.jsx(vs,{size:16,className:"text-green-400"}):e.jsx(Oi,{size:16,className:"text-white/40 group-hover/copy:text-white/80"})]}),w.rgb!=="gradient"&&e.jsxs("button",{onClick:()=>c(w.rgb),className:`
                          w-full flex items-center justify-between
                          px-3 py-2 rounded-lg
                          bg-white/5 hover:bg-[var(--glass-bg-light)]
                          border border-white/10
                          transition-all duration-200
                          group/copy
                        `,children:[e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsx("span",{className:"text-white/40 text-xs",children:"RGB"}),e.jsx("span",{className:"text-white text-sm font-mono",children:w.rgb})]}),o===w.rgb?e.jsx(vs,{size:16,className:"text-green-400"}):e.jsx(Oi,{size:16,className:"text-white/40 group-hover/copy:text-white/80"})]})]})]})]},j))})]},f)),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl font-bold mb-2",children:"Glass Opacity Levels"}),e.jsx("p",{className:"text-white/60 text-sm mb-4",children:"Standard opacity values for glassmorphism effects"}),e.jsx(C,{padding:"lg",children:e.jsx("div",{className:"space-y-4",children:h.map((m,f)=>e.jsx("div",{className:"flex items-center gap-4",children:e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-white font-medium",children:m.name}),e.jsx("span",{className:"text-white/60 text-sm",children:m.usage})]}),e.jsxs("div",{className:"relative h-16 rounded-xl border border-[var(--glass-border)] overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"}),e.jsx("div",{className:`absolute inset-0 backdrop-blur-md ${m.value}`}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx("span",{className:"text-white font-mono text-sm",children:m.value})})]})]})},f))})})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Color Usage Guidelines"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsxs("h4",{className:"text-white font-semibold mb-2 flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-blue-400"}),"Primary Actions"]}),e.jsx("p",{className:"text-white/70 text-sm",children:"Use blue and purple for primary buttons, links, and interactive elements. These colors represent trust and reliability."})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"text-white font-semibold mb-2 flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-green-400"}),"Success States"]}),e.jsx("p",{className:"text-white/70 text-sm",children:"Green shades indicate successful operations, confirmations, and positive status."})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"text-white font-semibold mb-2 flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-400"}),"Warnings"]}),e.jsx("p",{className:"text-white/70 text-sm",children:"Yellow and orange for warnings, caution messages, and items requiring attention."})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsxs("h4",{className:"text-white font-semibold mb-2 flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-pink-400"}),"Accents & Highlights"]}),e.jsx("p",{className:"text-white/70 text-sm",children:"Pink and fuchsia for special highlights, promotions, and attention-grabbing elements."})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"text-white font-semibold mb-2 flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-red-400"}),"Errors & Danger"]}),e.jsx("p",{className:"text-white/70 text-sm",children:"Red for errors, destructive actions, and critical alerts that require immediate attention."})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"text-white font-semibold mb-2 flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-gray-400"}),"Neutrals"]}),e.jsx("p",{className:"text-white/70 text-sm",children:"Gray tones for text, borders, backgrounds, and secondary information."})]})]})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-4",children:"Accessibility"}),e.jsxs("div",{className:"space-y-3 text-white/70 text-sm",children:[e.jsx("p",{children:"• Ensure sufficient contrast ratios (minimum 4.5:1 for normal text, 3:1 for large text)"}),e.jsx("p",{children:"• Don't rely on color alone to convey information - use icons and labels"}),e.jsx("p",{children:"• Test colors with color blindness simulators"}),e.jsx("p",{children:"• Maintain consistency in color usage across the application"}),e.jsx("p",{children:"• Use semantic colors (success, warning, error) consistently"})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-4",children:"Code Samples"}),e.jsx(ue,{code:xe.colorSection})]})]})}function Ze({checked:o,onChange:d,size:c="md",variant:u="primary",disabled:h=!1,className:m=""}){const f={sm:{container:"w-10 h-6",thumb:"w-4 h-4",translate:"translate-x-4"},md:{container:"w-14 h-7",thumb:"w-5 h-5",translate:"translate-x-7"},lg:{container:"w-16 h-8",thumb:"w-6 h-6",translate:"translate-x-8"}},w={primary:"from-[var(--brand-primary)] to-[var(--brand-primary)]",success:"from-[var(--status-success)] to-[var(--status-success)]",warning:"from-[var(--status-warning)] to-[var(--status-warning)]",danger:"from-[var(--status-error)] to-[var(--status-error)]"},j=f[c],b=w[u];return e.jsx("button",{type:"button",role:"switch","aria-checked":o,disabled:h,onClick:()=>!h&&d(!o),className:`
        ${j.container}
        relative inline-flex items-center
        rounded-full
        transition-all duration-300
        ${h?"opacity-50 cursor-not-allowed":"cursor-pointer"}
        ${o?`bg-gradient-to-r ${b} shadow-lg shadow-${u==="primary"?"blue":u==="success"?"green":u==="warning"?"yellow":"red"}-500/50`:"bg-[var(--glass-bg-light)] border border-[var(--glass-border)]"}
        ${!h&&"hover:scale-105"}
        backdrop-blur-md
        ${m}
      `,children:e.jsx("span",{className:`
          ${j.thumb}
          inline-block
          rounded-full
          bg-white
          shadow-lg
          transform transition-transform duration-300
          ${o?j.translate:"translate-x-1"}
        `})})}function Bg({addToast:o}){const[d,c]=de.useState(!0),[u,h]=de.useState(!1),[m,f]=de.useState(!0),[w,j]=de.useState(!0),[b,_]=de.useState(!1),[k,z]=de.useState(!0),[$,G]=de.useState(!1);return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-[var(--status-success)] to-[var(--brand-primary)] bg-clip-text text-transparent",children:"Toggle Switches"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Beautiful toggle switches with smooth animations"})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Basic Toggles"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(Ze,{checked:!0,onChange:()=>{},size:"sm"}),e.jsx("span",{className:"text-white/60 text-sm text-center",children:"Small"})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(Ze,{checked:!0,onChange:()=>{},size:"md"}),e.jsx("span",{className:"text-white/60 text-sm text-center",children:"Medium"})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(Ze,{checked:!0,onChange:()=>{},size:"lg"}),e.jsx("span",{className:"text-white/60 text-sm text-center",children:"Large"})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(Ze,{checked:!1,onChange:()=>{},size:"md",disabled:!0}),e.jsx("span",{className:"text-white/60 text-sm text-center",children:"Disabled"})]})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Toggle Variants"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:[e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx(Ze,{checked:!0,onChange:()=>{},variant:"primary"}),e.jsx("span",{className:"text-white/60 text-sm",children:"Primary"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx(Ze,{checked:!0,onChange:()=>{},variant:"success"}),e.jsx("span",{className:"text-white/60 text-sm",children:"Success"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx(Ze,{checked:!0,onChange:()=>{},variant:"warning"}),e.jsx("span",{className:"text-white/60 text-sm",children:"Warning"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx(Ze,{checked:!0,onChange:()=>{},variant:"danger"}),e.jsx("span",{className:"text-white/60 text-sm",children:"Danger"})]})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Interactive Toggles"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-[var(--glass-bg-light)] transition-colors",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[d?e.jsx(Bp,{className:"text-blue-400",size:24}):e.jsx(Op,{className:"text-white/40",size:24}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-semibold",children:"Wi-Fi"}),e.jsx("p",{className:"text-white/60 text-sm",children:d?"Connected":"Disconnected"})]})]}),e.jsx(Ze,{checked:d,onChange:F=>{c(F),o(F?"success":"info",F?"Wi-Fi enabled":"Wi-Fi disabled")},variant:"primary"})]}),e.jsxs("div",{className:"flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-[var(--glass-bg-light)] transition-colors",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[u?e.jsx(dr,{className:"text-yellow-400",size:24}):e.jsx(vm,{className:"text-white/40",size:24}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-semibold",children:"Notifications"}),e.jsx("p",{className:"text-white/60 text-sm",children:u?"Enabled":"Disabled"})]})]}),e.jsx(Ze,{checked:u,onChange:F=>{h(F),o(F?"success":"info",F?"Notifications enabled":"Notifications disabled")},variant:"warning"})]}),e.jsxs("div",{className:"flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-[var(--glass-bg-light)] transition-colors",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[m?e.jsx(P0,{className:"text-purple-400",size:24}):e.jsx(gp,{className:"text-white/40",size:24}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-semibold",children:"Dark Mode"}),e.jsx("p",{className:"text-white/60 text-sm",children:m?"On":"Off"})]})]}),e.jsx(Ze,{checked:m,onChange:F=>{f(F),o("info",F?"Dark mode enabled":"Light mode enabled")},variant:"primary"})]}),e.jsxs("div",{className:"flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-[var(--glass-bg-light)] transition-colors",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[w?e.jsx(Bu,{className:"text-green-400",size:24}):e.jsx(Vu,{className:"text-white/40",size:24}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-semibold",children:"Sound"}),e.jsx("p",{className:"text-white/60 text-sm",children:w?"On":"Muted"})]})]}),e.jsx(Ze,{checked:w,onChange:F=>{j(F),o(F?"success":"info",F?"Sound enabled":"Sound muted")},variant:"success"})]})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Settings"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between py-3 border-b border-white/10",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-medium",children:"Auto-save"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Automatically save changes"})]}),e.jsx(Ze,{checked:b,onChange:F=>{_(F),o("success",F?"Auto-save enabled":"Auto-save disabled")}})]}),e.jsxs("div",{className:"flex items-center justify-between py-3 border-b border-white/10",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-medium",children:"Email notifications"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Receive updates via email"})]}),e.jsx(Ze,{checked:k,onChange:F=>{z(F),o("success",F?"Email notifications enabled":"Email notifications disabled")}})]}),e.jsxs("div",{className:"flex items-center justify-between py-3",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-medium",children:"Two-factor authentication"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Add an extra layer of security"})]}),e.jsx(Ze,{checked:$,onChange:F=>{G(F),o(F?"success":"warning",F?"2FA enabled":"2FA disabled")},variant:$?"success":"primary"})]})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Compact View"}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4",children:[{label:"Feature A",checked:!0},{label:"Feature B",checked:!1},{label:"Feature C",checked:!0},{label:"Feature D",checked:!1},{label:"Feature E",checked:!0},{label:"Feature F",checked:!1},{label:"Feature G",checked:!0},{label:"Feature H",checked:!1},{label:"Feature I",checked:!0},{label:"Feature J",checked:!1}].map((F,B)=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Ze,{checked:F.checked,onChange:()=>o("info",`${F.label} toggled`),size:"sm"}),e.jsx("span",{className:"text-white/70 text-sm",children:F.label})]},B))})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Code Samples"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(ue,{code:xe.toggleSection.basicToggles,language:"tsx"}),e.jsx(ue,{code:xe.toggleSection.toggleVariants,language:"tsx"}),e.jsx(ue,{code:xe.toggleSection.interactiveToggles,language:"tsx"}),e.jsx(ue,{code:xe.toggleSection.settingsList,language:"tsx"}),e.jsx(ue,{code:xe.toggleSection.compactToggles,language:"tsx"})]})]})]})}function ut({checked:o,onChange:d,label:c,description:u,size:h="md",disabled:m=!1,className:f=""}){const j={sm:{box:"w-4 h-4",icon:14,text:"text-sm",description:"text-xs"},md:{box:"w-5 h-5",icon:16,text:"text-base",description:"text-sm"},lg:{box:"w-6 h-6",icon:18,text:"text-lg",description:"text-base"}}[h];return e.jsxs("label",{className:`
        flex items-start gap-3
        ${m?"opacity-50 cursor-not-allowed":"cursor-pointer"}
        ${f}
      `,children:[e.jsxs("div",{className:"relative flex items-center justify-center pt-0.5",children:[e.jsx("input",{type:"checkbox",checked:o,onChange:b=>!m&&d(b.target.checked),disabled:m,className:"sr-only"}),e.jsx("div",{className:`
            ${j.box}
            rounded-md
            backdrop-blur-md
            border-2
            transition-all duration-300
            flex items-center justify-center
            ${o?"bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-primary)] border-[var(--status-info-border)] shadow-lg":"bg-[var(--glass-bg-light)] border-[var(--glass-border-strong)] hover:border-white/50"}
            ${!m&&"hover:scale-110"}
          `,children:o&&e.jsx(vs,{size:j.icon,className:"text-white",strokeWidth:3})})]}),(c||u)&&e.jsxs("div",{className:"flex-1",children:[c&&e.jsx("div",{className:`text-white font-medium ${j.text}`,children:c}),u&&e.jsx("div",{className:`text-white/60 ${j.description} mt-1`,children:u})]})]})}function st({checked:o,onChange:d,label:c,description:u,name:h,size:m="md",disabled:f=!1,className:w=""}){const b={sm:{outer:"w-4 h-4",inner:"w-2 h-2",text:"text-sm",description:"text-xs"},md:{outer:"w-5 h-5",inner:"w-2.5 h-2.5",text:"text-base",description:"text-sm"},lg:{outer:"w-6 h-6",inner:"w-3 h-3",text:"text-lg",description:"text-base"}}[m];return e.jsxs("label",{className:`
        flex items-start gap-3
        ${f?"opacity-50 cursor-not-allowed":"cursor-pointer"}
        ${w}
      `,children:[e.jsxs("div",{className:"relative flex items-center justify-center pt-0.5",children:[e.jsx("input",{type:"radio",name:h,checked:o,onChange:_=>!f&&d(_.target.checked),disabled:f,className:"sr-only"}),e.jsx("div",{className:`
            ${b.outer}
            rounded-full
            backdrop-blur-md
            border-2
            transition-all duration-300
            flex items-center justify-center
            ${o?"bg-gradient-to-br from-[var(--brand-secondary)]/20 to-[var(--brand-secondary)]/20 border-[var(--status-info-border)] shadow-lg":"bg-[var(--glass-bg-light)] border-[var(--glass-border-strong)] hover:border-white/50"}
            ${!f&&"hover:scale-110"}
          `,children:o&&e.jsx("div",{className:`
                ${b.inner}
                rounded-full
                bg-gradient-to-br from-[var(--brand-secondary)] to-purple-600
                shadow-lg
              `})})]}),(c||u)&&e.jsxs("div",{className:"flex-1",children:[c&&e.jsx("div",{className:`text-white font-medium ${b.text}`,children:c}),u&&e.jsx("div",{className:`text-[var(--text-muted)] ${b.description} mt-1`,children:u})]})]})}function Vg({addToast:o}){const[d,c]=de.useState(!1),[u,h]=de.useState({option1:!0,option2:!1,option3:!0,option4:!1}),[m,f]=de.useState("pro"),[w,j]=de.useState("blue"),[b,_]=de.useState("medium");return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)] bg-clip-text text-transparent",children:"Checkbox & Radio Button"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Selection controls with glassmorphism effects"})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Checkboxes"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:[e.jsx("div",{className:"flex flex-col gap-3",children:e.jsx(ut,{checked:!0,onChange:()=>{},label:"Checked"})}),e.jsx("div",{className:"flex flex-col gap-3",children:e.jsx(ut,{checked:!1,onChange:()=>{},label:"Unchecked"})}),e.jsx("div",{className:"flex flex-col gap-3",children:e.jsx(ut,{checked:!0,onChange:()=>{},label:"Disabled",disabled:!0})}),e.jsx("div",{className:"flex flex-col gap-3",children:e.jsx(ut,{checked:d,onChange:k=>{c(k),o("info",k?"Checked":"Unchecked")},label:"Interactive"})})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Checkbox Sizes"}),e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsx(ut,{checked:!0,onChange:()=>{},label:"Small",size:"sm"}),e.jsx(ut,{checked:!0,onChange:()=>{},label:"Medium",size:"md"}),e.jsx(ut,{checked:!0,onChange:()=>{},label:"Large",size:"lg"})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Checkbox Group"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(ut,{checked:u.option1,onChange:k=>{h({...u,option1:k}),o("success","Receive email notifications")},label:"Receive email notifications",description:"Get updates about your account activity"}),e.jsx(ut,{checked:u.option2,onChange:k=>{h({...u,option2:k}),o("success","SMS notifications")},label:"SMS notifications",description:"Receive text messages for important updates"}),e.jsx(ut,{checked:u.option3,onChange:k=>{h({...u,option3:k}),o("success","Push notifications")},label:"Push notifications",description:"Get push notifications on your devices"}),e.jsx(ut,{checked:u.option4,onChange:k=>{h({...u,option4:k}),o("success","Marketing emails")},label:"Marketing emails",description:"Receive news and special offers"})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Radio Buttons"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:[e.jsx(st,{checked:!0,onChange:()=>{},label:"Selected",name:"demo1"}),e.jsx(st,{checked:!1,onChange:()=>{},label:"Unselected",name:"demo1"}),e.jsx(st,{checked:!0,onChange:()=>{},label:"Disabled",name:"demo2",disabled:!0}),e.jsx(st,{checked:!1,onChange:()=>{},label:"Disabled",name:"demo3",disabled:!0})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Radio Button Sizes"}),e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsx(st,{checked:!0,onChange:()=>{},label:"Small",size:"sm",name:"size-demo"}),e.jsx(st,{checked:!1,onChange:()=>{},label:"Medium",size:"md",name:"size-demo"}),e.jsx(st,{checked:!1,onChange:()=>{},label:"Large",size:"lg",name:"size-demo"})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Select a Plan"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{onClick:()=>{f("basic"),o("info","Basic plan selected")},className:`p-6 rounded-2xl border-2 transition-all cursor-pointer ${m==="basic"?"bg-blue-500/20 border-blue-400/50":"bg-white/5 border-white/10 hover:border-[var(--glass-border)]"}`,children:[e.jsx(st,{checked:m==="basic",onChange:()=>f("basic"),label:"Basic",name:"plan",size:"lg"}),e.jsxs("div",{className:"mt-4",children:[e.jsxs("p",{className:"text-3xl text-white font-bold",children:["$9",e.jsx("span",{className:"text-lg text-white/60",children:"/mo"})]}),e.jsxs("ul",{className:"mt-4 space-y-2 text-white/70 text-sm",children:[e.jsx("li",{children:"✓ 10 Projects"}),e.jsx("li",{children:"✓ 5GB Storage"}),e.jsx("li",{children:"✓ Basic Support"})]})]})]}),e.jsxs("div",{onClick:()=>{f("pro"),o("info","Pro plan selected")},className:`p-6 rounded-2xl border-2 transition-all cursor-pointer ${m==="pro"?"bg-purple-500/20 border-purple-400/50":"bg-white/5 border-white/10 hover:border-[var(--glass-border)]"}`,children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(st,{checked:m==="pro",onChange:()=>f("pro"),label:"Pro",name:"plan",size:"lg"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/30 text-purple-300 text-xs rounded-full font-semibold",children:"Popular"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsxs("p",{className:"text-3xl text-white font-bold",children:["$29",e.jsx("span",{className:"text-lg text-white/60",children:"/mo"})]}),e.jsxs("ul",{className:"mt-4 space-y-2 text-white/70 text-sm",children:[e.jsx("li",{children:"✓ 100 Projects"}),e.jsx("li",{children:"✓ 50GB Storage"}),e.jsx("li",{children:"✓ Priority Support"}),e.jsx("li",{children:"✓ Advanced Features"})]})]})]}),e.jsxs("div",{onClick:()=>{f("enterprise"),o("info","Enterprise plan selected")},className:`p-6 rounded-2xl border-2 transition-all cursor-pointer ${m==="enterprise"?"bg-pink-500/20 border-pink-400/50":"bg-white/5 border-white/10 hover:border-[var(--glass-border)]"}`,children:[e.jsx(st,{checked:m==="enterprise",onChange:()=>f("enterprise"),label:"Enterprise",name:"plan",size:"lg"}),e.jsxs("div",{className:"mt-4",children:[e.jsxs("p",{className:"text-3xl text-white font-bold",children:["$99",e.jsx("span",{className:"text-lg text-white/60",children:"/mo"})]}),e.jsxs("ul",{className:"mt-4 space-y-2 text-white/70 text-sm",children:[e.jsx("li",{children:"✓ Unlimited Projects"}),e.jsx("li",{children:"✓ 500GB Storage"}),e.jsx("li",{children:"✓ 24/7 Support"}),e.jsx("li",{children:"✓ Custom Integration"})]})]})]})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Select Color"}),e.jsx("div",{className:"space-y-3",children:[{value:"blue",label:"Ocean Blue",color:"bg-blue-500"},{value:"purple",label:"Royal Purple",color:"bg-purple-500"},{value:"pink",label:"Rose Pink",color:"bg-pink-500"},{value:"green",label:"Emerald Green",color:"bg-green-500"},{value:"orange",label:"Sunset Orange",color:"bg-orange-500"}].map(k=>e.jsxs("div",{onClick:()=>{j(k.value),o("info",`${k.label} selected`)},className:`flex items-center gap-4 p-4 rounded-xl border transition-all cursor-pointer ${w===k.value?"bg-[var(--glass-bg-light)] border-white/30":"bg-white/5 border-white/10 hover:bg-white/8"}`,children:[e.jsx("div",{className:`w-8 h-8 rounded-lg ${k.color}`}),e.jsx(st,{checked:w===k.value,onChange:()=>j(k.value),label:k.label,name:"color"})]},k.value))})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Select Size"}),e.jsx("div",{className:"flex gap-4",children:["small","medium","large","xl"].map(k=>e.jsx("div",{onClick:()=>{_(k),o("info",`${k.toUpperCase()} selected`)},className:`flex-1 p-6 rounded-2xl border-2 transition-all cursor-pointer text-center ${b===k?"bg-cyan-500/20 border-cyan-400/50":"bg-white/5 border-white/10 hover:border-[var(--glass-border)]"}`,children:e.jsx(st,{checked:b===k,onChange:()=>_(k),label:k.toUpperCase(),name:"size"})},k))})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Preferences"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-semibold mb-4",children:"Notifications"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(ut,{checked:!0,onChange:()=>o("info","Toggle notification"),label:"All notifications"}),e.jsx(ut,{checked:!1,onChange:()=>o("info","Toggle notification"),label:"Comments only"}),e.jsx(ut,{checked:!0,onChange:()=>o("info","Toggle notification"),label:"Mentions only"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-semibold mb-4",children:"Theme"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(st,{checked:!0,onChange:()=>o("info","Theme changed"),label:"Dark theme",name:"theme"}),e.jsx(st,{checked:!1,onChange:()=>o("info","Theme changed"),label:"Light theme",name:"theme"}),e.jsx(st,{checked:!1,onChange:()=>o("info","Theme changed"),label:"Auto (system)",name:"theme"})]})]})]})]}),e.jsx(ue,{title:"Checkbox & Radio Button Code Samples",code:xe.checkboxRadioSection})]})}function Hg({addToast:o}){const[d,c]=de.useState(null),u=[{name:"UI & Interface",color:"from-[var(--brand-secondary)] to-[var(--brand-accent)]",bgColor:"from-[var(--brand-secondary)]/10 to-[var(--brand-accent)]/10",icons:[{Icon:Fa,name:"Home"},{Icon:ws,name:"Settings"},{Icon:rt,name:"User"},{Icon:dr,name:"Bell"},{Icon:za,name:"Mail"},{Icon:an,name:"Calendar"},{Icon:xt,name:"Search"},{Icon:qi,name:"Menu"}]},{name:"Actions",color:"from-[var(--brand-secondary)] to-[var(--status-error)]",bgColor:"from-[var(--brand-secondary)]/10 to-[var(--status-error)]/10",icons:[{Icon:Ji,name:"Plus"},{Icon:Iu,name:"Minus"},{Icon:Ki,name:"Edit"},{Icon:Xi,name:"Trash2"},{Icon:ln,name:"Download"},{Icon:Dp,name:"Upload"},{Icon:Oi,name:"Copy"},{Icon:vs,name:"Check"}]},{name:"Media",color:"from-[var(--status-success)] to-[var(--brand-primary)]",bgColor:"from-[var(--status-success)]/10 to-[var(--brand-primary)]/10",icons:[{Icon:K0,name:"Play"},{Icon:V0,name:"Pause"},{Icon:Bu,name:"Volume2"},{Icon:Vu,name:"VolumeX"},{Icon:u0,name:"Image"},{Icon:Da,name:"Video"},{Icon:R0,name:"Music"},{Icon:Mm,name:"Camera"}]},{name:"Communication",color:"from-[var(--status-warning)] to-[var(--status-error)]",bgColor:"from-[var(--status-warning)]/10 to-[var(--status-error)]/10",icons:[{Icon:Hi,name:"MessageSquare"},{Icon:Ea,name:"Send"},{Icon:nn,name:"Phone"},{Icon:U0,name:"PhoneCall"},{Icon:Da,name:"Video"},{Icon:E0,name:"Mic"},{Icon:M0,name:"MicOff"},{Icon:fm,name:"AtSign"}]}],h=m=>{const f=`<${m} size={24} />`;navigator.clipboard.writeText(f),c(m),o("success",`Copied ${m} code!`),setTimeout(()=>c(null),2e3)};return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-[var(--brand-secondary)] to-[var(--brand-accent)] bg-clip-text text-transparent",children:"Icon Library"}),e.jsx("p",{className:"text-white/70 text-lg",children:"300+ beautiful icons from Lucide React"})]}),u.map(m=>e.jsxs("div",{children:[e.jsx("h3",{className:`text-white text-2xl mb-6 bg-gradient-to-r ${m.color} bg-clip-text text-transparent`,children:m.name}),e.jsx(C,{padding:"lg",children:e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4",children:m.icons.map(({Icon:f,name:w})=>e.jsxs("button",{onClick:()=>h(w),className:`
                    relative group
                    flex flex-col items-center justify-center gap-2
                    p-4 rounded-xl
                    bg-gradient-to-br ${m.bgColor}
                    backdrop-blur-md
                    border border-white/10
                    hover:border-white/30
                    transition-all duration-300
                    hover:scale-105
                    cursor-pointer
                  `,children:[e.jsx(f,{size:32,className:`text-white group-hover:bg-gradient-to-r ${m.color} group-hover:bg-clip-text group-hover:text-transparent transition-all`}),e.jsx("span",{className:"text-white/70 text-xs text-center group-hover:text-white transition-colors",children:w}),d===w&&e.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-xl",children:e.jsx(vs,{className:"text-green-400",size:24})})]},w))})})]},m.name)),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Usage Example"}),e.jsxs(C,{padding:"lg",children:[e.jsx("p",{className:"text-white/70 mb-4",children:"Click any icon above to copy its code. Here's how to use icons in your components:"}),e.jsxs("div",{className:"flex items-center gap-4 p-6 rounded-lg bg-white/5 border border-white/10",children:[e.jsx(Qe,{className:"text-yellow-400",size:32}),e.jsx(cn,{className:"text-red-400",size:32}),e.jsx(Ou,{className:"text-green-400",size:32}),e.jsx(Hu,{className:"text-purple-400",size:32})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-white text-3xl mb-6 text-center",children:"Code Samples"}),e.jsx(ue,{code:xe.iconsSection,language:"tsx"})]})]})}function Ug(){var k;const[o,d]=I.useState(""),[c,u]=I.useState([{id:1,text:"Hey! How are you?",sender:"other",time:"10:30 AM"},{id:2,text:"I'm doing great! Thanks for asking 😊",sender:"user",time:"10:32 AM"},{id:3,text:"That's wonderful! Did you check out the new Liquid Glass design system?",sender:"other",time:"10:33 AM"},{id:4,text:"Yes! The glassmorphism effects are absolutely stunning!",sender:"user",time:"10:35 AM"},{id:5,text:"I love the backdrop blur and the gradient colors",sender:"user",time:"10:35 AM"},{id:6,text:"Same here! The components are so polished and modern.",sender:"other",time:"10:37 AM"}]),[h,m]=I.useState(1),[f,w]=I.useState(!0),j=[{id:1,name:"Alex Johnson",lastMessage:"Same here! The components...",time:"10:37 AM",online:!0,unread:0},{id:2,name:"Sarah Williams",lastMessage:"See you tomorrow!",time:"9:15 AM",online:!0,unread:2},{id:3,name:"Mike Chen",lastMessage:"Thanks for the help",time:"Yesterday",online:!1,unread:0},{id:4,name:"Emma Davis",lastMessage:"Let's catch up soon",time:"Yesterday",online:!0,unread:0},{id:5,name:"James Wilson",lastMessage:"Perfect! That works for me",time:"Tuesday",online:!1,unread:0}],b=()=>{if(o.trim()){const z={id:c.length+1,text:o,sender:"user",time:new Date().toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})};u([...c,z]),d("")}},_=z=>{z.key==="Enter"&&!z.shiftKey&&(z.preventDefault(),b())};return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center space-y-4",children:[e.jsx("h2",{className:"text-5xl font-bold text-white",children:"Chat"}),e.jsx("p",{className:"text-xl text-white/70 max-w-2xl mx-auto",children:"Modern messaging interface with real-time chat, contact list, and glassmorphism design"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-2xl font-bold text-white text-center",children:"Desktop View"}),e.jsx("div",{className:`
          md:backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
          border border-[var(--glass-border)]
          rounded-3xl
          overflow-hidden
          shadow-2xl
        `,children:e.jsxs("div",{className:"flex h-[600px] md:h-[700px]",children:[e.jsxs("div",{className:`
              ${f?"w-full md:w-80":"hidden md:block md:w-80"}
              border-r border-white/10
              flex flex-col
              bg-white/5
            `,children:[e.jsxs("div",{className:"p-4 border-b border-white/10",children:[e.jsx("h3",{className:"text-white text-lg font-bold mb-3",children:"Messages"}),e.jsxs("div",{className:"relative",children:[e.jsx(xt,{className:"absolute left-3 top-1/2 -translate-y-1/2 text-white/40",size:18}),e.jsx("input",{type:"text",placeholder:"Search contacts...",className:`
                      w-full pl-10 pr-4 py-2 
                      bg-[var(--glass-bg-light)] 
                      border border-[var(--glass-border)] 
                      rounded-xl
                      text-white placeholder-white/40
                      focus:outline-none focus:border-blue-400/50
                      transition-colors
                    `})]})]}),e.jsx("div",{className:"flex-1 overflow-y-auto scrollbar-hide",children:j.map(z=>e.jsxs("button",{onClick:()=>{m(z.id),w(!1)},className:`
                      w-full p-4 flex items-start gap-3
                      border-b border-white/5
                      transition-all duration-200
                      ${h===z.id?"bg-[var(--glass-bg-light)] border-l-4 border-l-blue-400":"hover:bg-white/5"}
                    `,children:[e.jsxs("div",{className:"relative flex-shrink-0",children:[e.jsx("div",{className:"w-12 h-12 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-500/30 flex items-center justify-center border border-[var(--glass-border)]",children:e.jsx(rt,{className:"text-white/70",size:20})}),z.online&&e.jsx("div",{className:"absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-900"})]}),e.jsxs("div",{className:"flex-1 text-left min-w-0",children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("span",{className:"text-white font-medium truncate",children:z.name}),e.jsx("span",{className:"text-white/40 text-xs flex-shrink-0 ml-2",children:z.time})]}),e.jsx("p",{className:"text-white/60 text-sm truncate",children:z.lastMessage})]}),z.unread>0&&e.jsx("div",{className:"flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-white text-xs font-bold",children:z.unread})})]},z.id))})]}),e.jsxs("div",{className:`
              ${f?"hidden md:flex":"flex"}
              flex-1 flex-col
            `,children:[e.jsxs("div",{className:"p-4 border-b border-white/10 flex items-center justify-between bg-white/5",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("button",{onClick:()=>w(!0),className:"md:hidden text-white/70 hover:text-white",children:"←"}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-500/30 flex items-center justify-center border border-[var(--glass-border)]",children:e.jsx(rt,{className:"text-white/70",size:18})}),e.jsx("div",{className:"absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-900"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-medium",children:(k=j.find(z=>z.id===h))==null?void 0:k.name}),e.jsx("p",{className:"text-white/60 text-xs",children:"Online"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{className:"w-9 h-9 rounded-lg bg-[var(--glass-bg-light)] hover:bg-white/20 flex items-center justify-center transition-colors",children:e.jsx(nn,{className:"text-white/70",size:18})}),e.jsx("button",{className:"w-9 h-9 rounded-lg bg-[var(--glass-bg-light)] hover:bg-white/20 flex items-center justify-center transition-colors",children:e.jsx(Da,{className:"text-white/70",size:18})}),e.jsx("button",{className:"w-9 h-9 rounded-lg bg-[var(--glass-bg-light)] hover:bg-white/20 flex items-center justify-center transition-colors",children:e.jsx(Fu,{className:"text-white/70",size:18})})]})]}),e.jsx("div",{className:"flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide",children:c.map(z=>e.jsx("div",{className:`flex ${z.sender==="user"?"justify-end":"justify-start"}`,children:e.jsxs("div",{className:"flex items-end gap-2 max-w-[80%] md:max-w-[70%]",children:[z.sender==="other"&&e.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-500/30 flex items-center justify-center border border-[var(--glass-border)] flex-shrink-0",children:e.jsx(rt,{className:"text-white/70",size:14})}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("div",{className:`
                          px-4 py-2 rounded-2xl
                          md:backdrop-blur-md
                          ${z.sender==="user"?"bg-gradient-to-br from-blue-500/40 to-purple-500/40 border border-blue-400/30 rounded-br-sm":"bg-[var(--glass-bg-light)] border border-[var(--glass-border)] rounded-bl-sm"}
                        `,children:e.jsx("p",{className:"text-white text-sm leading-relaxed",children:z.text})}),e.jsx("span",{className:`text-white/40 text-xs ${z.sender==="user"?"text-right":"text-left"}`,children:z.time})]}),z.sender==="user"&&e.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-br from-purple-400/30 to-pink-500/30 flex items-center justify-center border border-[var(--glass-border)] flex-shrink-0",children:e.jsx(rt,{className:"text-white/70",size:14})})]})},z.id))}),e.jsx("div",{className:"p-4 border-t border-white/10 bg-white/5",children:e.jsxs("div",{className:"flex items-end gap-2",children:[e.jsx("button",{className:"w-10 h-10 rounded-xl bg-[var(--glass-bg-light)] hover:bg-white/20 flex items-center justify-center transition-colors flex-shrink-0",children:e.jsx(hu,{className:"text-white/70",size:20})}),e.jsxs("div",{className:"flex-1 relative",children:[e.jsx("textarea",{value:o,onChange:z=>d(z.target.value),onKeyPress:_,placeholder:"Type a message...",rows:1,className:`
                        w-full px-4 py-3 pr-12
                        bg-[var(--glass-bg-light)]
                        border border-[var(--glass-border)]
                        rounded-xl
                        text-white placeholder-white/40
                        focus:outline-none focus:border-blue-400/50
                        transition-colors
                        resize-none
                        max-h-32
                      `}),e.jsx("button",{className:"absolute right-3 bottom-3 text-white/70 hover:text-white transition-colors",children:e.jsx(Ui,{size:20})})]}),e.jsx("button",{onClick:b,className:`
                      w-10 h-10 rounded-xl
                      bg-gradient-to-br from-blue-500 to-purple-600
                      hover:from-blue-600 hover:to-purple-700
                      flex items-center justify-center
                      transition-all duration-200
                      flex-shrink-0
                      shadow-lg shadow-blue-500/30
                    `,children:e.jsx(Ea,{className:"text-white",size:20})})]})})]})]})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:`
          p-6 rounded-2xl
          backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
          border border-[var(--glass-border)]
        `,children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400/20 to-purple-500/20 flex items-center justify-center mb-4",children:e.jsx(Vi,{className:"text-blue-300",size:24})}),e.jsx("h3",{className:"text-white text-lg font-bold mb-2",children:"Real-time Messaging"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Send and receive messages instantly with smooth animations and transitions"})]}),e.jsxs("div",{className:`
          p-6 rounded-2xl
          backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
          border border-[var(--glass-border)]
        `,children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400/20 to-pink-500/20 flex items-center justify-center mb-4",children:e.jsx(rt,{className:"text-purple-300",size:24})}),e.jsx("h3",{className:"text-white text-lg font-bold mb-2",children:"Contact Management"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Easily manage and search through your contacts with online status indicators"})]}),e.jsxs("div",{className:`
          p-6 rounded-2xl
          backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
          border border-[var(--glass-border)]
        `,children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400/20 to-purple-500/20 flex items-center justify-center mb-4",children:e.jsx(nn,{className:"text-pink-300",size:24})}),e.jsx("h3",{className:"text-white text-lg font-bold mb-2",children:"Voice & Video Calls"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Seamlessly switch from text to voice or video calls with one tap"})]})]}),e.jsxs("div",{className:`
        p-6 rounded-2xl
        backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10
        border border-blue-400/30
      `,children:[e.jsxs("h3",{className:"text-white text-lg font-bold mb-2 flex items-center gap-2",children:[e.jsx("span",{className:"text-2xl",children:"📱"}),"Mobile Responsive"]}),e.jsx("p",{className:"text-white/70",children:"The chat interface automatically adapts between desktop and mobile views. On mobile devices, the contact list and chat window switch between each other for optimal screen usage."})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-2xl font-bold text-white text-center",children:"Mobile View"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsx("div",{className:`
            backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
            border border-[var(--glass-border)]
            rounded-3xl
            overflow-hidden
            shadow-2xl
            max-w-sm mx-auto w-full
          `,children:e.jsxs("div",{className:"flex flex-col h-[600px]",children:[e.jsxs("div",{className:"p-4 border-b border-white/10 bg-white/5",children:[e.jsx("h3",{className:"text-white text-lg font-bold mb-3 text-center",children:"Messages"}),e.jsxs("div",{className:"relative",children:[e.jsx(xt,{className:"absolute left-3 top-1/2 -translate-y-1/2 text-white/40",size:18}),e.jsx("input",{type:"text",placeholder:"Search contacts...",className:`
                      w-full pl-10 pr-4 py-2 
                      bg-[var(--glass-bg-light)] 
                      border border-[var(--glass-border)] 
                      rounded-xl
                      text-white placeholder-white/40
                      focus:outline-none focus:border-blue-400/50
                      transition-colors
                    `})]})]}),e.jsx("div",{className:"flex-1 overflow-y-auto scrollbar-hide",children:j.slice(0,4).map(z=>e.jsxs("div",{className:`
                      w-full p-4 flex items-start gap-3
                      border-b border-white/5
                      hover:bg-white/5
                      transition-all duration-200
                    `,children:[e.jsxs("div",{className:"relative flex-shrink-0",children:[e.jsx("div",{className:"w-12 h-12 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-500/30 flex items-center justify-center border border-[var(--glass-border)]",children:e.jsx(rt,{className:"text-white/70",size:20})}),z.online&&e.jsx("div",{className:"absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-900"})]}),e.jsxs("div",{className:"flex-1 text-left min-w-0",children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("span",{className:"text-white font-medium truncate",children:z.name}),e.jsx("span",{className:"text-white/40 text-xs flex-shrink-0 ml-2",children:z.time})]}),e.jsx("p",{className:"text-white/60 text-sm truncate",children:z.lastMessage})]}),z.unread>0&&e.jsx("div",{className:"flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-white text-xs font-bold",children:z.unread})})]},z.id))}),e.jsx("div",{className:"p-3 bg-white/5 border-t border-white/10",children:e.jsx("p",{className:"text-white/60 text-xs text-center",children:"Contact List View"})})]})}),e.jsx("div",{className:`
            backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
            border border-[var(--glass-border)]
            rounded-3xl
            overflow-hidden
            shadow-2xl
            max-w-sm mx-auto w-full
          `,children:e.jsxs("div",{className:"flex flex-col h-[600px]",children:[e.jsxs("div",{className:"p-4 border-b border-white/10 flex items-center justify-between bg-white/5",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("button",{className:"text-white/70 hover:text-white text-lg",children:"←"}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-500/30 flex items-center justify-center border border-[var(--glass-border)]",children:e.jsx(rt,{className:"text-white/70",size:18})}),e.jsx("div",{className:"absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-900"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-medium text-sm",children:"Alex Johnson"}),e.jsx("p",{className:"text-white/60 text-xs",children:"Online"})]})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{className:"w-8 h-8 rounded-lg bg-[var(--glass-bg-light)] hover:bg-white/20 flex items-center justify-center transition-colors",children:e.jsx(nn,{className:"text-white/70",size:16})}),e.jsx("button",{className:"w-8 h-8 rounded-lg bg-[var(--glass-bg-light)] hover:bg-white/20 flex items-center justify-center transition-colors",children:e.jsx(Da,{className:"text-white/70",size:16})})]})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide",children:[e.jsx("div",{className:"flex justify-start",children:e.jsxs("div",{className:"flex items-end gap-2 max-w-[85%]",children:[e.jsx("div",{className:"w-7 h-7 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-500/30 flex items-center justify-center border border-[var(--glass-border)] flex-shrink-0",children:e.jsx(rt,{className:"text-white/70",size:12})}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("div",{className:"px-3 py-2 rounded-2xl md:backdrop-blur-md bg-[var(--glass-bg-light)] border border-[var(--glass-border)] rounded-bl-sm",children:e.jsx("p",{className:"text-white text-sm",children:"Hey! How are you?"})}),e.jsx("span",{className:"text-white/40 text-xs",children:"10:30 AM"})]})]})}),e.jsx("div",{className:"flex justify-end",children:e.jsxs("div",{className:"flex items-end gap-2 max-w-[85%]",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("div",{className:"px-3 py-2 rounded-2xl md:backdrop-blur-md bg-gradient-to-br from-blue-500/40 to-purple-500/40 border border-blue-400/30 rounded-br-sm",children:e.jsx("p",{className:"text-white text-sm",children:"I'm doing great! Thanks 😊"})}),e.jsx("span",{className:"text-white/40 text-xs text-right",children:"10:32 AM"})]}),e.jsx("div",{className:"w-7 h-7 rounded-full bg-gradient-to-br from-purple-400/30 to-pink-500/30 flex items-center justify-center border border-[var(--glass-border)] flex-shrink-0",children:e.jsx(rt,{className:"text-white/70",size:12})})]})}),e.jsx("div",{className:"flex justify-start",children:e.jsxs("div",{className:"flex items-end gap-2 max-w-[85%]",children:[e.jsx("div",{className:"w-7 h-7 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-500/30 flex items-center justify-center border border-[var(--glass-border)] flex-shrink-0",children:e.jsx(rt,{className:"text-white/70",size:12})}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("div",{className:"px-3 py-2 rounded-2xl md:backdrop-blur-md bg-[var(--glass-bg-light)] border border-[var(--glass-border)] rounded-bl-sm",children:e.jsx("p",{className:"text-white text-sm",children:"The Liquid Glass design is amazing!"})}),e.jsx("span",{className:"text-white/40 text-xs",children:"10:33 AM"})]})]})})]}),e.jsx("div",{className:"p-3 border-t border-white/10 bg-white/5",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{className:"w-9 h-9 rounded-xl bg-[var(--glass-bg-light)] hover:bg-white/20 flex items-center justify-center transition-colors flex-shrink-0",children:e.jsx(hu,{className:"text-white/70",size:18})}),e.jsxs("div",{className:"flex-1 relative",children:[e.jsx("input",{type:"text",placeholder:"Type a message...",className:`
                        w-full px-3 py-2 pr-10
                        bg-[var(--glass-bg-light)]
                        border border-[var(--glass-border)]
                        rounded-xl
                        text-white text-sm placeholder-white/40
                        focus:outline-none focus:border-blue-400/50
                        transition-colors
                      `}),e.jsx("button",{className:"absolute right-2 top-1/2 -translate-y-1/2 text-white/70",children:e.jsx(Ui,{size:18})})]}),e.jsx("button",{className:`
                    w-9 h-9 rounded-xl
                    bg-gradient-to-br from-blue-500 to-purple-600
                    flex items-center justify-center
                    flex-shrink-0
                    shadow-lg shadow-blue-500/30
                  `,children:e.jsx(Ea,{className:"text-white",size:18})})]})}),e.jsx("div",{className:"p-3 bg-white/5 border-t border-white/10",children:e.jsx("p",{className:"text-white/60 text-xs text-center",children:"Chat Window View"})})]})})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-2xl font-bold text-white text-center",children:"Code Sample"}),e.jsx(ue,{code:xe.chatSection})]})]})}function Wg(){const[o,d]=I.useState(""),[c,u]=I.useState(1),[h,m]=I.useState(10),[f,w]=I.useState(null),[j,b]=I.useState("asc"),[_,k]=I.useState(new Set),[z,$]=I.useState(!1),[G,F]=I.useState(null),B=[{id:1,name:"John Smith",email:"john.smith@company.com",role:"Senior Developer",department:"Engineering",status:"Active",joinDate:"2020-01-15",salary:95e3,location:"New York",projects:12},{id:2,name:"Sarah Johnson",email:"sarah.j@company.com",role:"Product Manager",department:"Product",status:"Active",joinDate:"2019-03-22",salary:11e4,location:"San Francisco",projects:8},{id:3,name:"Mike Chen",email:"mike.chen@company.com",role:"UI/UX Designer",department:"Design",status:"Active",joinDate:"2021-06-10",salary:85e3,location:"Los Angeles",projects:15},{id:4,name:"Emma Davis",email:"emma.d@company.com",role:"Data Analyst",department:"Analytics",status:"Pending",joinDate:"2023-11-01",salary:75e3,location:"Chicago",projects:3},{id:5,name:"James Wilson",email:"j.wilson@company.com",role:"DevOps Engineer",department:"Engineering",status:"Active",joinDate:"2020-09-05",salary:98e3,location:"Seattle",projects:10},{id:6,name:"Lisa Anderson",email:"lisa.a@company.com",role:"Marketing Manager",department:"Marketing",status:"Active",joinDate:"2018-12-15",salary:88e3,location:"Boston",projects:6},{id:7,name:"Robert Brown",email:"r.brown@company.com",role:"QA Engineer",department:"Engineering",status:"Inactive",joinDate:"2022-02-20",salary:72e3,location:"Austin",projects:5},{id:8,name:"Jennifer Lee",email:"jennifer.lee@company.com",role:"Sales Director",department:"Sales",status:"Active",joinDate:"2017-05-30",salary:125e3,location:"New York",projects:20},{id:9,name:"David Martinez",email:"d.martinez@company.com",role:"Backend Developer",department:"Engineering",status:"Active",joinDate:"2021-08-12",salary:92e3,location:"Miami",projects:9},{id:10,name:"Maria Garcia",email:"maria.g@company.com",role:"Content Writer",department:"Marketing",status:"Active",joinDate:"2022-04-18",salary:65e3,location:"Denver",projects:11},{id:11,name:"Thomas White",email:"t.white@company.com",role:"System Architect",department:"Engineering",status:"Active",joinDate:"2019-07-25",salary:115e3,location:"San Francisco",projects:7},{id:12,name:"Amy Taylor",email:"amy.taylor@company.com",role:"HR Manager",department:"HR",status:"Active",joinDate:"2020-11-08",salary:82e3,location:"Portland",projects:4},{id:13,name:"Kevin Moore",email:"k.moore@company.com",role:"Frontend Developer",department:"Engineering",status:"Pending",joinDate:"2023-09-14",salary:88e3,location:"Seattle",projects:2},{id:14,name:"Rachel Adams",email:"rachel.a@company.com",role:"Graphic Designer",department:"Design",status:"Active",joinDate:"2021-01-20",salary:78e3,location:"Los Angeles",projects:13},{id:15,name:"Chris Evans",email:"c.evans@company.com",role:"Business Analyst",department:"Analytics",status:"Active",joinDate:"2020-03-15",salary:8e4,location:"Chicago",projects:8}],[Z]=I.useState(B),[he,ve]=I.useState([{id:"id",label:"ID",sortable:!0,visible:!0,pinned:!0},{id:"name",label:"Name",sortable:!0,visible:!0,pinned:!0},{id:"email",label:"Email",sortable:!0,visible:!0,pinned:!1},{id:"role",label:"Role",sortable:!0,visible:!0,pinned:!1},{id:"department",label:"Department",sortable:!0,visible:!0,pinned:!1},{id:"status",label:"Status",sortable:!0,visible:!0,pinned:!1},{id:"joinDate",label:"Join Date",sortable:!0,visible:!0,pinned:!1},{id:"salary",label:"Salary",sortable:!0,visible:!0,pinned:!1},{id:"location",label:"Location",sortable:!0,visible:!0,pinned:!1},{id:"projects",label:"Projects",sortable:!0,visible:!0,pinned:!1}]),be=I.useMemo(()=>Z.filter(P=>Object.values(P).some(Q=>Q.toString().toLowerCase().includes(o.toLowerCase()))),[Z,o]),J=I.useMemo(()=>f?[...be].sort((P,Q)=>{const R=P[f],W=Q[f];return R<W?j==="asc"?-1:1:R>W?j==="asc"?1:-1:0}):be,[be,f,j]),ne=I.useMemo(()=>{const P=(c-1)*h;return J.slice(P,P+h)},[J,c,h]),ie=Math.ceil(J.length/h),re=P=>{f===P?b(j==="asc"?"desc":"asc"):(w(P),b("asc"))},we=P=>{const Q=new Set(_);Q.has(P)?Q.delete(P):Q.add(P),k(Q)},Ne=P=>{ve(he.map(Q=>Q.id===P?{...Q,visible:!Q.visible}:Q))},K=P=>{ve(he.map(Q=>Q.id===P?{...Q,pinned:!Q.pinned}:Q))},Pe=P=>{F(P)},$e=(P,Q)=>{if(P.preventDefault(),G===null||G===Q)return;const R=[...he],W=R[G];R.splice(G,1),R.splice(Q,0,W),ve(R),F(Q)},Ue=P=>{switch(P){case"Active":return"bg-green-500/20 text-green-300 border-green-500/30";case"Inactive":return"bg-red-500/20 text-red-300 border-red-500/30";case"Pending":return"bg-yellow-500/20 text-yellow-300 border-yellow-500/30";default:return"bg-gray-500/20 text-gray-300 border-gray-500/30"}},nt=he.filter(P=>P.visible);return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center space-y-4",children:[e.jsx("h2",{className:"text-5xl font-bold text-white",children:"Table"}),e.jsx("p",{className:"text-xl text-white/70 max-w-2xl mx-auto",children:"Advanced data table with search, sorting, pagination, column management, and row expansion"})]}),e.jsxs("div",{className:`
        md:md:backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
        border border-[var(--glass-border)]
        rounded-3xl
        overflow-hidden
        shadow-2xl
      `,children:[e.jsxs("div",{className:"p-4 border-b border-white/10 bg-white/5",children:[e.jsxs("div",{className:"flex flex-col md:flex-row gap-4 items-start md:items-center justify-between",children:[e.jsxs("div",{className:"relative flex-1 max-w-md w-full",children:[e.jsx(xt,{className:"absolute left-3 top-1/2 -translate-y-1/2 text-white/40",size:20}),e.jsx("input",{type:"text",placeholder:"Search across all columns...",value:o,onChange:P=>{d(P.target.value),u(1)},className:`
                  w-full pl-10 pr-4 py-2.5
                  bg-[var(--glass-bg-light)]
                  border border-[var(--glass-border)]
                  rounded-xl
                  text-white placeholder-white/40
                  focus:outline-none focus:border-blue-400/50
                  transition-colors
                `})]}),e.jsxs("div",{className:"flex gap-2 w-full md:w-auto",children:[e.jsxs("div",{className:"relative",children:[e.jsxs("button",{onClick:()=>$(!z),className:`
                    px-4 py-2.5 rounded-xl
                    bg-[var(--glass-bg-light)] hover:bg-white/20
                    border border-[var(--glass-border)]
                    text-white
                    transition-colors
                    flex items-center gap-2
                  `,children:[e.jsx(ws,{size:18}),e.jsx("span",{className:"hidden sm:inline",children:"Columns"})]}),z&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>$(!1)}),e.jsxs("div",{className:`
                      absolute right-0 top-full mt-2 w-64
                      backdrop-blur-xl backdrop-saturate-150
                      bg-black/85
                      border border-white/15
                      rounded-2xl
                      shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]
                      z-50
                      max-h-96
                      overflow-y-auto
                    `,children:[e.jsx("div",{className:"p-3 border-b border-[var(--glass-border)]",children:e.jsx("p",{className:"text-sm font-bold text-white",children:"Manage Columns"})}),e.jsx("div",{className:"p-2",children:he.map(P=>e.jsxs("div",{className:`
                              p-2 rounded-lg
                              hover:bg-white/15
                              transition-colors
                              flex items-center justify-between
                            `,children:[e.jsx("div",{className:"flex items-center gap-2 flex-1",children:e.jsxs("button",{onClick:()=>Ne(P.id),className:"flex items-center gap-2",children:[P.visible?e.jsx(Xm,{size:16,className:"text-blue-400"}):e.jsx(Jm,{size:16,className:"text-white/40"}),e.jsx("span",{className:`text-sm ${P.visible?"text-white":"text-white/40"}`,children:P.label})]})}),e.jsx("button",{onClick:()=>K(P.id),className:"p-1 hover:bg-white/15 rounded",children:P.pinned?e.jsx(mu,{size:14,className:"text-blue-400"}):e.jsx(Q0,{size:14,className:"text-white/40"})})]},P.id))})]})]})]}),e.jsxs("button",{className:`
                px-4 py-2.5 rounded-xl
                bg-[var(--glass-bg-light)] hover:bg-white/20
                border border-[var(--glass-border)]
                text-white
                transition-colors
                flex items-center gap-2
              `,children:[e.jsx(ln,{size:18}),e.jsx("span",{className:"hidden sm:inline",children:"Export"})]})]})]}),e.jsxs("div",{className:"flex items-center gap-4 mt-4 flex-wrap",children:[e.jsx("span",{className:"text-white/70 text-sm",children:"Rows per page:"}),[10,25,50,100].map(P=>e.jsx("button",{onClick:()=>{m(P),u(1)},className:`
                  px-3 py-1 rounded-lg text-sm
                  transition-colors
                  ${h===P?"bg-blue-500/30 text-blue-300 border border-blue-400/50":"bg-[var(--glass-bg-light)] text-white/70 border border-[var(--glass-border)] hover:bg-white/20"}
                `,children:P},P))]})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-white/5 border-b border-white/10",children:[e.jsx("th",{className:"px-4 py-3 text-left text-white/70 text-sm font-medium w-12",children:e.jsx(Ts,{size:16,className:"opacity-0"})}),nt.map((P,Q)=>e.jsx("th",{draggable:!0,onDragStart:()=>Pe(Q),onDragOver:R=>$e(R,Q),onDragEnd:()=>F(null),className:`
                      px-4 py-3 text-left text-white/70 text-sm font-medium
                      group cursor-move
                      ${P.pinned?"bg-blue-500/10":""}
                    `,children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(l0,{size:14,className:"text-white/30 group-hover:text-white/60"}),P.pinned&&e.jsx(mu,{size:14,className:"text-blue-400"}),e.jsx("span",{children:P.label}),P.sortable&&e.jsx("button",{onClick:()=>re(P.id),className:"hover:text-white transition-colors",children:f===P.id?j==="asc"?e.jsx(Tm,{size:16}):e.jsx(Ts,{size:16}):e.jsx(Ai,{size:14,className:"opacity-40"})})]})},P.id))]})}),e.jsx("tbody",{children:ne.flatMap(P=>{const Q=_.has(P.id),R=[e.jsxs("tr",{className:"border-b border-white/5 hover:bg-white/5 transition-colors",children:[e.jsx("td",{className:"px-4 py-3",children:e.jsx("button",{onClick:()=>we(P.id),className:"text-white/70 hover:text-white transition-colors",children:Q?e.jsx(Ts,{size:16}):e.jsx(Gt,{size:16})})}),nt.map(W=>e.jsx("td",{className:`
                          px-4 py-3 text-white/90 text-sm
                          ${W.pinned?"bg-blue-500/5":""}
                        `,children:W.id==="status"?e.jsx("span",{className:`
                            px-2 py-1 rounded-lg text-xs
                            border md:backdrop-blur-sm
                            ${Ue(P[W.id])}
                          `,children:P[W.id]}):W.id==="salary"?`$${P[W.id].toLocaleString()}`:P[W.id]},W.id))]},`row-${P.id}`)];return Q&&R.push(e.jsx("tr",{className:"bg-white/5",children:e.jsx("td",{colSpan:nt.length+1,className:"px-4 py-4",children:e.jsxs("div",{className:`
                          backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5
                          border border-[var(--glass-border)]
                          rounded-xl
                          p-4
                        `,children:[e.jsx("h4",{className:"text-white font-bold mb-3",children:"Detailed Information"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-white/60 text-xs mb-1",children:"Full Name"}),e.jsx("p",{className:"text-white text-sm",children:P.name})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-white/60 text-xs mb-1",children:"Email Address"}),e.jsx("p",{className:"text-white text-sm",children:P.email})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-white/60 text-xs mb-1",children:"Role & Department"}),e.jsxs("p",{className:"text-white text-sm",children:[P.role," - ",P.department]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-white/60 text-xs mb-1",children:"Location"}),e.jsx("p",{className:"text-white text-sm",children:P.location})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-white/60 text-xs mb-1",children:"Join Date"}),e.jsx("p",{className:"text-white text-sm",children:P.joinDate})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-white/60 text-xs mb-1",children:"Active Projects"}),e.jsxs("p",{className:"text-white text-sm",children:[P.projects," projects"]})]})]})]})})},`expanded-${P.id}`)),R})})]})}),e.jsx("div",{className:"p-4 border-t border-white/10 bg-white/5",children:e.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4",children:[e.jsxs("p",{className:"text-white/70 text-sm",children:["Showing ",(c-1)*h+1," to ",Math.min(c*h,J.length)," of ",J.length," results"]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>u(1),disabled:c===1,className:`
                  p-2 rounded-lg
                  bg-[var(--glass-bg-light)] hover:bg-white/20
                  border border-[var(--glass-border)]
                  text-white
                  disabled:opacity-30 disabled:cursor-not-allowed
                  transition-colors
                `,children:e.jsx($u,{size:18})}),e.jsx("button",{onClick:()=>u(Math.max(1,c-1)),disabled:c===1,className:`
                  p-2 rounded-lg
                  bg-[var(--glass-bg-light)] hover:bg-white/20
                  border border-[var(--glass-border)]
                  text-white
                  disabled:opacity-30 disabled:cursor-not-allowed
                  transition-colors
                `,children:e.jsx(Ta,{size:18})}),e.jsx("div",{className:"flex gap-1",children:Array.from({length:Math.min(5,ie)},(P,Q)=>{let R;return ie<=5||c<=3?R=Q+1:c>=ie-2?R=ie-4+Q:R=c-2+Q,e.jsx("button",{onClick:()=>u(R),className:`
                        px-3 py-2 rounded-lg text-sm
                        transition-colors
                        ${c===R?"bg-blue-500/30 text-blue-300 border border-blue-400/50":"bg-[var(--glass-bg-light)] text-white/70 border border-[var(--glass-border)] hover:bg-white/20"}
                      `,children:R},R)})}),e.jsx("button",{onClick:()=>u(Math.min(ie,c+1)),disabled:c===ie,className:`
                  p-2 rounded-lg
                  bg-[var(--glass-bg-light)] hover:bg-white/20
                  border border-[var(--glass-border)]
                  text-white
                  disabled:opacity-30 disabled:cursor-not-allowed
                  transition-colors
                `,children:e.jsx(Gt,{size:18})}),e.jsx("button",{onClick:()=>u(ie),disabled:c===ie,className:`
                  p-2 rounded-lg
                  bg-[var(--glass-bg-light)] hover:bg-white/20
                  border border-[var(--glass-border)]
                  text-white
                  disabled:opacity-30 disabled:cursor-not-allowed
                  transition-colors
                `,children:e.jsx(Lu,{size:18})})]})]})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:[e.jsxs("div",{className:`
          p-6 rounded-2xl
          md:backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
          border border-[var(--glass-border)]
        `,children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400/20 to-purple-500/20 flex items-center justify-center mb-4",children:e.jsx(xt,{className:"text-blue-300",size:24})}),e.jsx("h3",{className:"text-white text-lg font-bold mb-2",children:"Search & Filter"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Real-time search across all columns with instant filtering"})]}),e.jsxs("div",{className:`
          p-6 rounded-2xl
          md:backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
          border border-[var(--glass-border)]
        `,children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400/20 to-pink-500/20 flex items-center justify-center mb-4",children:e.jsx(Ai,{className:"text-purple-300",size:24})}),e.jsx("h3",{className:"text-white text-lg font-bold mb-2",children:"Column Sorting"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Sort by any column in ascending or descending order"})]}),e.jsxs("div",{className:`
          p-6 rounded-2xl
          md:backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
          border border-[var(--glass-border)]
        `,children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400/20 to-red-500/20 flex items-center justify-center mb-4",children:e.jsx(ws,{className:"text-pink-300",size:24})}),e.jsx("h3",{className:"text-white text-lg font-bold mb-2",children:"Column Management"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Show/hide, pin, and drag columns to customize your view"})]}),e.jsxs("div",{className:`
          p-6 rounded-2xl
          md:backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
          border border-[var(--glass-border)]
        `,children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-green-400/20 to-blue-500/20 flex items-center justify-center mb-4",children:e.jsx(Ts,{className:"text-green-300",size:24})}),e.jsx("h3",{className:"text-white text-lg font-bold mb-2",children:"Row Expansion"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Expand rows to see detailed information in a clean layout"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-2xl font-bold text-white text-center",children:"Simple Table"}),e.jsx("div",{className:`
          md:backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
          border border-[var(--glass-border)]
          rounded-3xl
          overflow-hidden
          shadow-2xl
        `,children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-white/5 border-b border-white/10",children:[e.jsx("th",{className:"px-4 py-3 text-left text-white/70 text-sm font-medium",children:"Product"}),e.jsx("th",{className:"px-4 py-3 text-left text-white/70 text-sm font-medium",children:"Category"}),e.jsx("th",{className:"px-4 py-3 text-left text-white/70 text-sm font-medium",children:"Price"}),e.jsx("th",{className:"px-4 py-3 text-left text-white/70 text-sm font-medium",children:"Stock"}),e.jsx("th",{className:"px-4 py-3 text-left text-white/70 text-sm font-medium",children:"Status"})]})}),e.jsx("tbody",{children:[{product:'Laptop Pro 15"',category:"Electronics",price:"$1,299",stock:45,status:"In Stock"},{product:"Wireless Mouse",category:"Accessories",price:"$29",stock:120,status:"In Stock"},{product:"USB-C Cable",category:"Accessories",price:"$15",stock:0,status:"Out of Stock"},{product:'Monitor 27"',category:"Electronics",price:"$399",stock:12,status:"Low Stock"},{product:"Keyboard Mechanical",category:"Accessories",price:"$89",stock:67,status:"In Stock"}].map((P,Q)=>e.jsxs("tr",{className:"border-b border-white/5 hover:bg-white/5 transition-colors",children:[e.jsx("td",{className:"px-4 py-3 text-white/90 text-sm",children:P.product}),e.jsx("td",{className:"px-4 py-3 text-white/90 text-sm",children:P.category}),e.jsx("td",{className:"px-4 py-3 text-white/90 text-sm font-medium",children:P.price}),e.jsx("td",{className:"px-4 py-3 text-white/90 text-sm",children:P.stock}),e.jsx("td",{className:"px-4 py-3",children:e.jsx("span",{className:`
                        px-2 py-1 rounded-lg text-xs border md:backdrop-blur-sm
                        ${P.status==="In Stock"?"bg-green-500/20 text-green-300 border-green-500/30":""}
                        ${P.status==="Out of Stock"?"bg-red-500/20 text-red-300 border-red-500/30":""}
                        ${P.status==="Low Stock"?"bg-yellow-500/20 text-yellow-300 border-yellow-500/30":""}
                      `,children:P.status})})]},Q))})]})})})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-2xl font-bold text-white text-center",children:"Compact Table"}),e.jsx("div",{className:`
          md:backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
          border border-[var(--glass-border)]
          rounded-3xl
          overflow-hidden
          shadow-2xl
        `,children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-white/5 border-b border-white/10",children:[e.jsx("th",{className:"px-3 py-2 text-left text-white/70 text-xs font-medium",children:"Task"}),e.jsx("th",{className:"px-3 py-2 text-left text-white/70 text-xs font-medium",children:"Assignee"}),e.jsx("th",{className:"px-3 py-2 text-left text-white/70 text-xs font-medium",children:"Priority"}),e.jsx("th",{className:"px-3 py-2 text-left text-white/70 text-xs font-medium",children:"Due Date"})]})}),e.jsx("tbody",{children:[{task:"Update documentation",assignee:"John S.",priority:"High",date:"2024-03-20"},{task:"Fix login bug",assignee:"Sarah J.",priority:"Critical",date:"2024-03-18"},{task:"Design new homepage",assignee:"Mike C.",priority:"Medium",date:"2024-03-25"},{task:"Code review",assignee:"Emma D.",priority:"Low",date:"2024-03-22"},{task:"Deploy to staging",assignee:"James W.",priority:"High",date:"2024-03-19"}].map((P,Q)=>e.jsxs("tr",{className:"border-b border-white/5 hover:bg-white/5 transition-colors",children:[e.jsx("td",{className:"px-3 py-2 text-white/90 text-xs",children:P.task}),e.jsx("td",{className:"px-3 py-2 text-white/90 text-xs",children:P.assignee}),e.jsx("td",{className:"px-3 py-2",children:e.jsx("span",{className:`
                        px-1.5 py-0.5 rounded text-xs border md:backdrop-blur-sm
                        ${P.priority==="Critical"?"bg-red-500/20 text-red-300 border-red-500/30":""}
                        ${P.priority==="High"?"bg-orange-500/20 text-orange-300 border-orange-500/30":""}
                        ${P.priority==="Medium"?"bg-yellow-500/20 text-yellow-300 border-yellow-500/30":""}
                        ${P.priority==="Low"?"bg-green-500/20 text-green-300 border-green-500/30":""}
                      `,children:P.priority})}),e.jsx("td",{className:"px-3 py-2 text-white/90 text-xs",children:P.date})]},Q))})]})})})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-2xl font-bold text-white text-center",children:"Code Sample"}),e.jsx(ue,{code:xe.tableSection})]})]})}function Yg(){const{toasts:o,addToast:d,removeToast:c}=Kp(),[u,h]=I.useState(!1),m=[{id:"home",label:"Home",icon:e.jsx(Fa,{size:20})},{id:"buttons",label:"Buttons",icon:e.jsx(uu,{size:20})},{id:"calendar",label:"Calendar",icon:e.jsx(an,{size:20})},{id:"cards",label:"Cards",icon:e.jsx(iu,{size:20})},{id:"chat",label:"Chat",icon:e.jsx(Vi,{size:20})},{id:"charts",label:"Charts & Graphs",icon:e.jsx(Ii,{size:20})},{id:"checkboxradio",label:"Checkbox & Radio",icon:e.jsx(vu,{size:20})},{id:"color",label:"Color",icon:e.jsx(rn,{size:20})},{id:"data",label:"Data Display",icon:e.jsx(ou,{size:20})},{id:"feedback",label:"Feedback",icon:e.jsx(dr,{size:20})},{id:"forms",label:"Forms & Inputs",icon:e.jsx(pu,{size:20})},{id:"grid",label:"Grid Layout",icon:e.jsx(cu,{size:20})},{id:"icons",label:"Icons",icon:e.jsx(lu,{size:20})},{id:"layout",label:"Layout",icon:e.jsx(_a,{size:20})},{id:"loading",label:"Loading",icon:e.jsx(du,{size:20})},{id:"logo",label:"Logo",icon:e.jsx(bu,{size:20})},{id:"message",label:"Message",icon:e.jsx(Hi,{size:20})},{id:"modal",label:"Modal",icon:e.jsx(Bi,{size:20})},{id:"navigation",label:"Navigation",icon:e.jsx(xu,{size:20})},{id:"tooltip",label:"Popover & Tooltip",icon:e.jsx(on,{size:20})},{id:"search",label:"Search",icon:e.jsx(xt,{size:20})},{id:"table",label:"Table",icon:e.jsx(wu,{size:20})},{id:"toggle",label:"Toggle",icon:e.jsx(ju,{size:20})},{id:"fonts",label:"Typography",icon:e.jsx(Wi,{size:20})},{id:"usmap",label:"Map",icon:e.jsx(Ma,{size:20})}],f=m.map(j=>j.id),w=Qp(f,150);return e.jsx(Xh,{children:e.jsxs("div",{className:"min-h-screen relative overflow-x-hidden",children:[e.jsxs("div",{className:"fixed inset-0 -z-10",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900"}),e.jsx("div",{className:"absolute top-0 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-[color-mix(in_srgb,var(--brand-secondary)_30%,transparent)] rounded-full blur-xl md:blur-3xl animate-pulse"}),e.jsx("div",{className:"absolute bottom-0 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-[color-mix(in_srgb,var(--brand-primary)_30%,transparent)] rounded-full blur-xl md:blur-3xl animate-pulse delay-1000"}),e.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-96 md:h-96 bg-[color-mix(in_srgb,var(--brand-accent)_20%,transparent)] rounded-full blur-xl md:blur-3xl animate-pulse delay-500"})]}),e.jsx(Jp,{toasts:o,onClose:c}),e.jsx(Yp,{items:m,activeSection:w,onNavigate:Me,onCollapseChange:h}),e.jsx("div",{className:`
        py-12 px-4 md:px-8
        transition-all duration-300
        ml-0 ${u?"md:ml-20":"md:ml-80"}
      `,children:e.jsxs("div",{className:"max-w-7xl mx-auto space-y-24",children:[e.jsx("section",{id:"home",className:"min-h-[60vh] md:min-h-screen flex items-center justify-center",children:e.jsxs("div",{className:"w-full space-y-12",children:[e.jsxs("div",{className:"text-center space-y-6",children:[e.jsx("div",{className:"flex justify-center mb-8",children:e.jsxs("div",{className:`
                    w-24 h-24 
                    rounded-3xl
                    bg-gradient-to-br from-[var(--brand-primary)]/20 to-[var(--brand-secondary)]/20
                    backdrop-blur-md
                    border border-[var(--glass-border)]
                    flex items-center justify-center
                    relative overflow-hidden
                    animate-pulse
                  `,children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[var(--glass-bg-strong)] to-transparent"}),e.jsx(rn,{className:"text-white relative z-10",size:48})]})}),e.jsx("h1",{className:"text-3xl md:text-7xl text-white font-bold bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-secondary)] to-[var(--status-error)] bg-clip-text text-transparent",children:"Wen's Project Liquid Glass"}),e.jsx("p",{className:"text-base md:text-2xl text-white/70 max-w-3xl mx-auto",children:"A complete design system with glassmorphism components for modern web and mobile applications"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto",children:[e.jsx("div",{className:`
                  p-6 rounded-2xl
                  backdrop-blur-xl bg-gradient-to-br from-[var(--glass-bg-light)] to-[var(--glass-bg-subtle)]
                  border border-[var(--glass-border)]
                  hover:border-[var(--glass-border-strong)]
                  transition-all duration-300
                  group
                `,children:e.jsxs("div",{className:"text-center space-y-2",children:[e.jsx("p",{className:"text-white/60 text-sm font-medium",children:"Components"}),e.jsx("p",{className:"text-white text-3xl md:text-5xl font-bold group-hover:scale-110 transition-transform",children:"60+"}),e.jsx("div",{className:"h-1 w-16 mx-auto bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] rounded-full"})]})}),e.jsx("div",{className:`
                  p-6 rounded-2xl
                  backdrop-blur-xl bg-gradient-to-br from-[var(--glass-bg-light)] to-[var(--glass-bg-subtle)]
                  border border-[var(--glass-border)]
                  hover:border-[var(--glass-border-strong)]
                  transition-all duration-300
                  group
                `,children:e.jsxs("div",{className:"text-center space-y-2",children:[e.jsx("p",{className:"text-white/60 text-sm font-medium",children:"Categories"}),e.jsx("p",{className:"text-white text-3xl md:text-5xl font-bold group-hover:scale-110 transition-transform",children:"24"}),e.jsx("div",{className:"h-1 w-16 mx-auto bg-gradient-to-r from-[var(--brand-secondary)] to-[var(--status-error)] rounded-full"})]})}),e.jsx("div",{className:`
                  p-6 rounded-2xl
                  backdrop-blur-xl bg-gradient-to-br from-[var(--glass-bg-light)] to-[var(--glass-bg-subtle)]
                  border border-[var(--glass-border)]
                  hover:border-[var(--glass-border-strong)]
                  transition-all duration-300
                  group
                `,children:e.jsxs("div",{className:"text-center space-y-2",children:[e.jsx("p",{className:"text-white/60 text-sm font-medium",children:"Variations"}),e.jsx("p",{className:"text-white text-3xl md:text-5xl font-bold group-hover:scale-110 transition-transform",children:"150+"}),e.jsx("div",{className:"h-1 w-16 mx-auto bg-gradient-to-r from-[var(--status-error)] to-[var(--brand-primary)] rounded-full"})]})})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl md:text-3xl text-white font-bold text-center",children:"Explore Components"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6",children:[e.jsx("button",{onClick:()=>Me("logo"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10
                      border border-white/20
                      hover:border-blue-400/50
                      hover:shadow-2xl hover:shadow-blue-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-blue-400/20 to-purple-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(bu,{className:"text-blue-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Logo"}),e.jsx("p",{className:"text-white/60 text-sm",children:"12 brand identity variations"})]})]})}),e.jsx("button",{onClick:()=>Me("search"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10
                      border border-white/20
                      hover:border-purple-400/50
                      hover:shadow-2xl hover:shadow-purple-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-purple-400/20 to-pink-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(xt,{className:"text-purple-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Search"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Smart search & filters"})]})]})}),e.jsx("button",{onClick:()=>Me("buttons"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-pink-500/10 to-orange-500/10
                      border border-white/20
                      hover:border-pink-400/50
                      hover:shadow-2xl hover:shadow-pink-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-pink-400/20 to-orange-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(uu,{className:"text-pink-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Buttons"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Interactive button styles"})]})]})}),e.jsx("button",{onClick:()=>Me("charts"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10
                      border border-white/20
                      hover:border-cyan-400/50
                      hover:shadow-2xl hover:shadow-cyan-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-cyan-400/20 to-blue-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(Ii,{className:"text-cyan-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Charts & Graphs"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Data visualization tools"})]})]})}),e.jsx("button",{onClick:()=>Me("fonts"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10
                      border border-white/20
                      hover:border-indigo-400/50
                      hover:shadow-2xl hover:shadow-indigo-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-indigo-400/20 to-purple-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(Wi,{className:"text-indigo-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Typography"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Font families & pickers"})]})]})}),e.jsx("button",{onClick:()=>Me("forms"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10
                      border border-white/20
                      hover:border-green-400/50
                      hover:shadow-2xl hover:shadow-green-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-green-400/20 to-emerald-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(pu,{className:"text-green-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Forms & Inputs"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Form controls & validation"})]})]})}),e.jsx("button",{onClick:()=>Me("tooltip"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10
                      border border-white/20
                      hover:border-yellow-400/50
                      hover:shadow-2xl hover:shadow-yellow-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-yellow-400/20 to-orange-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(on,{className:"text-yellow-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Popover & Tooltip"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Contextual information"})]})]})}),e.jsx("button",{onClick:()=>Me("grid"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-rose-500/10 to-pink-500/10
                      border border-white/20
                      hover:border-rose-400/50
                      hover:shadow-2xl hover:shadow-rose-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-rose-400/20 to-pink-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(cu,{className:"text-rose-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Grid Layout"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Flexible grid systems"})]})]})}),e.jsx("button",{onClick:()=>Me("calendar"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-violet-500/10 to-purple-500/10
                      border border-white/20
                      hover:border-violet-400/50
                      hover:shadow-2xl hover:shadow-violet-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-violet-400/20 to-purple-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(an,{className:"text-violet-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Calendar"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Date pickers & calendars"})]})]})}),e.jsx("button",{onClick:()=>Me("cards"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10
                      border border-white/20
                      hover:border-teal-400/50
                      hover:shadow-2xl hover:shadow-teal-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-teal-400/20 to-cyan-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(iu,{className:"text-teal-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Cards"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Content card layouts"})]})]})}),e.jsx("button",{onClick:()=>Me("modal"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10
                      border border-white/20
                      hover:border-blue-400/50
                      hover:shadow-2xl hover:shadow-blue-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-blue-400/20 to-indigo-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(Bi,{className:"text-blue-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Modal"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Dialog & modal windows"})]})]})}),e.jsx("button",{onClick:()=>Me("message"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-fuchsia-500/10 to-pink-500/10
                      border border-white/20
                      hover:border-fuchsia-400/50
                      hover:shadow-2xl hover:shadow-fuchsia-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-fuchsia-400/20 to-pink-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(Hi,{className:"text-fuchsia-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Message"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Messaging & chat UI"})]})]})}),e.jsx("button",{onClick:()=>Me("loading"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-amber-500/10 to-yellow-500/10
                      border border-white/20
                      hover:border-amber-400/50
                      hover:shadow-2xl hover:shadow-amber-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-amber-400/20 to-yellow-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(du,{className:"text-amber-300 animate-spin",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Loading"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Loading indicators"})]})]})}),e.jsx("button",{onClick:()=>Me("layout"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-lime-500/10 to-green-500/10
                      border border-white/20
                      hover:border-lime-400/50
                      hover:shadow-2xl hover:shadow-lime-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-lime-400/20 to-green-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(_a,{className:"text-lime-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Layout"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Page layouts & sections"})]})]})}),e.jsx("button",{onClick:()=>Me("feedback"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-sky-500/10 to-blue-500/10
                      border border-white/20
                      hover:border-sky-400/50
                      hover:shadow-2xl hover:shadow-sky-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-sky-400/20 to-blue-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(dr,{className:"text-sky-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Feedback"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Alerts & notifications"})]})]})}),e.jsx("button",{onClick:()=>Me("navigation"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10
                      border border-white/20
                      hover:border-purple-400/50
                      hover:shadow-2xl hover:shadow-purple-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-purple-400/20 to-fuchsia-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(xu,{className:"text-purple-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Navigation"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Navbars & menus"})]})]})}),e.jsx("button",{onClick:()=>Me("usmap"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10
                      border border-white/20
                      hover:border-emerald-400/50
                      hover:shadow-2xl hover:shadow-emerald-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-emerald-400/20 to-teal-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(Ma,{className:"text-emerald-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Map"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Interactive map visualizations"})]})]})}),e.jsx("button",{onClick:()=>Me("data"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-slate-500/10 to-gray-500/10
                      border border-white/20
                      hover:border-slate-400/50
                      hover:shadow-2xl hover:shadow-slate-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-slate-400/20 to-gray-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(ou,{className:"text-slate-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Data Display"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Tables & data views"})]})]})}),e.jsx("button",{onClick:()=>Me("color"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-pink-500/10 to-purple-500/10
                      border border-white/20
                      hover:border-pink-400/50
                      hover:shadow-2xl hover:shadow-pink-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-pink-400/20 to-purple-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(rn,{className:"text-pink-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Color"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Color palette & pickers"})]})]})}),e.jsx("button",{onClick:()=>Me("toggle"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10
                      border border-white/20
                      hover:border-blue-400/50
                      hover:shadow-2xl hover:shadow-blue-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-blue-400/20 to-indigo-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(ju,{className:"text-blue-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Toggle"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Toggle switches"})]})]})}),e.jsx("button",{onClick:()=>Me("checkboxradio"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10
                      border border-white/20
                      hover:border-green-400/50
                      hover:shadow-2xl hover:shadow-green-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-green-400/20 to-emerald-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(vu,{className:"text-green-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Checkbox & Radio"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Checkbox & radio buttons"})]})]})}),e.jsx("button",{onClick:()=>Me("icons"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-gray-500/10 to-gray-500/10
                      border border-white/20
                      hover:border-gray-400/50
                      hover:shadow-2xl hover:shadow-gray-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-gray-400/20 to-gray-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(lu,{className:"text-gray-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Icons"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Icon library"})]})]})}),e.jsx("button",{onClick:()=>Me("chat"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10
                      border border-white/20
                      hover:border-blue-400/50
                      hover:shadow-2xl hover:shadow-blue-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-blue-400/20 to-indigo-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(Vi,{className:"text-blue-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Chat"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Chat UI"})]})]})}),e.jsx("button",{onClick:()=>Me("table"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-green-500/10 to-teal-500/10
                      border border-white/20
                      hover:border-green-400/50
                      hover:shadow-2xl hover:shadow-green-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-green-400/20 to-teal-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(wu,{className:"text-green-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Table"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Advanced data tables"})]})]})})]})]})]})}),e.jsx("section",{id:"buttons",children:e.jsx(zg,{addToast:d})}),e.jsx("section",{id:"calendar",children:e.jsx($g,{addToast:d})}),e.jsx("section",{id:"cards",children:e.jsx(Lg,{})}),e.jsx("section",{id:"chat",children:e.jsx(Ug,{})}),e.jsx("section",{id:"charts",children:e.jsx(sg,{addToast:d})}),e.jsx("section",{id:"checkboxradio",children:e.jsx(Vg,{addToast:d})}),e.jsx("section",{id:"color",children:e.jsx(Gg,{})}),e.jsx("section",{id:"data",children:e.jsx(kg,{})}),e.jsx("section",{id:"feedback",children:e.jsx(mg,{addToast:d})}),e.jsx("section",{id:"forms",children:e.jsx(xg,{addToast:d})}),e.jsx("section",{id:"grid",children:e.jsx(_g,{})}),e.jsx("section",{id:"icons",children:e.jsx(Hg,{addToast:d})}),e.jsx("section",{id:"layout",children:e.jsx(hg,{})}),e.jsx("section",{id:"loading",children:e.jsx(Fg,{})}),e.jsx("section",{id:"logo",children:e.jsx(Og,{})}),e.jsx("section",{id:"message",children:e.jsx(Pg,{addToast:d})}),e.jsx("section",{id:"modal",children:e.jsx(Dg,{})}),e.jsx("section",{id:"navigation",children:e.jsx(yg,{})}),e.jsx("section",{id:"tooltip",children:e.jsx(Mg,{addToast:d})}),e.jsx("section",{id:"search",children:e.jsx(Cg,{addToast:d})}),e.jsx("section",{id:"table",children:e.jsx(Wg,{})}),e.jsx("section",{id:"toggle",children:e.jsx(Bg,{addToast:d})}),e.jsx("section",{id:"fonts",children:e.jsx(ig,{})}),e.jsx("section",{id:"usmap",children:e.jsx(Tg,{addToast:d})})]})})]})})}var Pa={},Qg=()=>{window.va||(window.va=function(...d){window.vaq||(window.vaq=[]),window.vaq.push(d)})},qg="@vercel/analytics",Jg="2.0.1";function Uu(){return typeof window<"u"}function Wu(){try{const o="production"}catch{}return"production"}function Kg(o="auto"){if(o==="auto"){window.vam=Wu();return}window.vam=o}function Xg(){return(Uu()?window.vam:Wu())||"production"}function Zi(){return Xg()==="development"}function Zg(o){return o.scriptSrc?cr(o.scriptSrc):Zi()?"https://va.vercel-scripts.com/v1/script.debug.js":o.basePath?cr(`${o.basePath}/insights/script.js`):"/_vercel/insights/script.js"}function ef(o,d){var c;let u=o;if(d)try{u={...(c=JSON.parse(d))==null?void 0:c.analytics,...o}}catch{}Kg(u.mode);const h={sdkn:qg+(u.framework?`/${u.framework}`:""),sdkv:Jg};return u.disableAutoTrack&&(h.disableAutoTrack="1"),u.viewEndpoint&&(h.viewEndpoint=cr(u.viewEndpoint)),u.eventEndpoint&&(h.eventEndpoint=cr(u.eventEndpoint)),u.sessionEndpoint&&(h.sessionEndpoint=cr(u.sessionEndpoint)),Zi()&&u.debug===!1&&(h.debug="false"),u.dsn&&(h.dsn=u.dsn),u.endpoint?h.endpoint=u.endpoint:u.basePath&&(h.endpoint=cr(`${u.basePath}/insights`)),{beforeSend:u.beforeSend,src:Zg(u),dataset:h}}function cr(o){return o.startsWith("http://")||o.startsWith("https://")||o.startsWith("/")?o:`/${o}`}function tf(o={debug:!0},d){var c;if(!Uu())return;const{beforeSend:u,src:h,dataset:m}=ef(o,d);if(Qg(),u&&((c=window.va)==null||c.call(window,"beforeSend",u)),document.head.querySelector(`script[src*="${h}"]`))return;const f=document.createElement("script");f.src=h;for(const[w,j]of Object.entries(m))f.dataset[w]=j;f.defer=!0,f.onerror=()=>{const w=Zi()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${h}. ${w}`)},document.head.appendChild(f)}function sf({route:o,path:d}){var c;(c=window.va)==null||c.call(window,"pageview",{route:o,path:d})}function rf(){if(!(typeof process>"u"||typeof Pa>"u"))return Pa.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH}function nf(){if(!(typeof process>"u"||typeof Pa>"u"))return Pa.REACT_APP_VERCEL_OBSERVABILITY_CLIENT_CONFIG}function af(o){return de.useEffect(()=>{var d;o.beforeSend&&((d=window.va)==null||d.call(window,"beforeSend",o.beforeSend))},[o.beforeSend]),de.useEffect(()=>{tf({framework:o.framework||"react",basePath:o.basePath??rf(),...o.route!==void 0&&{disableAutoTrack:!0},...o},o.configString??nf())},[]),de.useEffect(()=>{o.route&&o.path&&sf({route:o.route,path:o.path})},[o.route,o.path]),null}Jh.createRoot(document.getElementById("root")).render(e.jsxs(e.Fragment,{children:[e.jsx(Yg,{}),e.jsx(af,{})]}));
