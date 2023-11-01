function D0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function F0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vu={exports:{}},Zo={},Bu={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tr=Symbol.for("react.element"),b0=Symbol.for("react.portal"),H0=Symbol.for("react.fragment"),U0=Symbol.for("react.strict_mode"),V0=Symbol.for("react.profiler"),B0=Symbol.for("react.provider"),W0=Symbol.for("react.context"),Q0=Symbol.for("react.forward_ref"),Y0=Symbol.for("react.suspense"),K0=Symbol.for("react.memo"),G0=Symbol.for("react.lazy"),ra=Symbol.iterator;function X0(e){return e===null||typeof e!="object"?null:(e=ra&&e[ra]||e["@@iterator"],typeof e=="function"?e:null)}var Wu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qu=Object.assign,Yu={};function Dn(e,t,n){this.props=e,this.context=t,this.refs=Yu,this.updater=n||Wu}Dn.prototype.isReactComponent={};Dn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Dn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ku(){}Ku.prototype=Dn.prototype;function ns(e,t,n){this.props=e,this.context=t,this.refs=Yu,this.updater=n||Wu}var rs=ns.prototype=new Ku;rs.constructor=ns;Qu(rs,Dn.prototype);rs.isPureReactComponent=!0;var oa=Array.isArray,Gu=Object.prototype.hasOwnProperty,os={current:null},Xu={key:!0,ref:!0,__self:!0,__source:!0};function Zu(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Gu.call(t,r)&&!Xu.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),d=0;d<s;d++)a[d]=arguments[d+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Tr,type:e,key:i,ref:l,props:o,_owner:os.current}}function Z0(e,t){return{$$typeof:Tr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function is(e){return typeof e=="object"&&e!==null&&e.$$typeof===Tr}function J0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ia=/\/+/g;function Si(e,t){return typeof e=="object"&&e!==null&&e.key!=null?J0(""+e.key):t.toString(36)}function ro(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Tr:case b0:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Si(l,0):r,oa(o)?(n="",e!=null&&(n=e.replace(ia,"$&/")+"/"),ro(o,t,n,"",function(d){return d})):o!=null&&(is(o)&&(o=Z0(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(ia,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",oa(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+Si(i,s);l+=ro(i,t,n,a,o)}else if(a=X0(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+Si(i,s++),l+=ro(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Fr(e,t,n){if(e==null)return e;var r=[],o=0;return ro(e,r,"","",function(i){return t.call(n,i,o++)}),r}function q0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},oo={transition:null},ed={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:oo,ReactCurrentOwner:os};L.Children={map:Fr,forEach:function(e,t,n){Fr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Fr(e,function(){t++}),t},toArray:function(e){return Fr(e,function(t){return t})||[]},only:function(e){if(!is(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=Dn;L.Fragment=H0;L.Profiler=V0;L.PureComponent=ns;L.StrictMode=U0;L.Suspense=Y0;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ed;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Qu({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=os.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Gu.call(t,a)&&!Xu.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var d=0;d<a;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:Tr,type:e.type,key:o,ref:i,props:r,_owner:l}};L.createContext=function(e){return e={$$typeof:W0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:B0,_context:e},e.Consumer=e};L.createElement=Zu;L.createFactory=function(e){var t=Zu.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:Q0,render:e}};L.isValidElement=is;L.lazy=function(e){return{$$typeof:G0,_payload:{_status:-1,_result:e},_init:q0}};L.memo=function(e,t){return{$$typeof:K0,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=oo.transition;oo.transition={};try{e()}finally{oo.transition=t}};L.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};L.useCallback=function(e,t){return pe.current.useCallback(e,t)};L.useContext=function(e){return pe.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};L.useEffect=function(e,t){return pe.current.useEffect(e,t)};L.useId=function(){return pe.current.useId()};L.useImperativeHandle=function(e,t,n){return pe.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return pe.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return pe.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return pe.current.useMemo(e,t)};L.useReducer=function(e,t,n){return pe.current.useReducer(e,t,n)};L.useRef=function(e){return pe.current.useRef(e)};L.useState=function(e){return pe.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return pe.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return pe.current.useTransition()};L.version="18.2.0";Bu.exports=L;var I=Bu.exports;const Gt=F0(I),td=D0({__proto__:null,default:Gt},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nd=I,rd=Symbol.for("react.element"),od=Symbol.for("react.fragment"),id=Object.prototype.hasOwnProperty,ld=nd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sd={key:!0,ref:!0,__self:!0,__source:!0};function Ju(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)id.call(t,r)&&!sd.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:rd,type:e,key:i,ref:l,props:o,_owner:ld.current}}Zo.Fragment=od;Zo.jsx=Ju;Zo.jsxs=Ju;Vu.exports=Zo;var u=Vu.exports,tl={},qu={exports:{}},Pe={},ec={exports:{}},tc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,z){var P=C.length;C.push(z);e:for(;0<P;){var U=P-1>>>1,K=C[U];if(0<o(K,z))C[U]=z,C[P]=K,P=U;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var z=C[0],P=C.pop();if(P!==z){C[0]=P;e:for(var U=0,K=C.length,tt=K>>>1;U<tt;){var je=2*(U+1)-1,pt=C[je],Ee=je+1,Re=C[Ee];if(0>o(pt,P))Ee<K&&0>o(Re,pt)?(C[U]=Re,C[Ee]=P,U=Ee):(C[U]=pt,C[je]=P,U=je);else if(Ee<K&&0>o(Re,P))C[U]=Re,C[Ee]=P,U=Ee;else break e}}return z}function o(C,z){var P=C.sortIndex-z.sortIndex;return P!==0?P:C.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],d=[],g=1,h=null,m=3,y=!1,x=!1,S=!1,T=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(C){for(var z=n(d);z!==null;){if(z.callback===null)r(d);else if(z.startTime<=C)r(d),z.sortIndex=z.expirationTime,t(a,z);else break;z=n(d)}}function v(C){if(S=!1,p(C),!x)if(n(a)!==null)x=!0,Dt(k);else{var z=n(d);z!==null&&Te(v,z.startTime-C)}}function k(C,z){x=!1,S&&(S=!1,f(N),N=-1),y=!0;var P=m;try{for(p(z),h=n(a);h!==null&&(!(h.expirationTime>z)||C&&!Se());){var U=h.callback;if(typeof U=="function"){h.callback=null,m=h.priorityLevel;var K=U(h.expirationTime<=z);z=e.unstable_now(),typeof K=="function"?h.callback=K:h===n(a)&&r(a),p(z)}else r(a);h=n(a)}if(h!==null)var tt=!0;else{var je=n(d);je!==null&&Te(v,je.startTime-z),tt=!1}return tt}finally{h=null,m=P,y=!1}}var E=!1,j=null,N=-1,B=5,R=-1;function Se(){return!(e.unstable_now()-R<B)}function Ot(){if(j!==null){var C=e.unstable_now();R=C;var z=!0;try{z=j(!0,C)}finally{z?At():(E=!1,j=null)}}else E=!1}var At;if(typeof c=="function")At=function(){c(Ot)};else if(typeof MessageChannel<"u"){var Ar=new MessageChannel,wi=Ar.port2;Ar.port1.onmessage=Ot,At=function(){wi.postMessage(null)}}else At=function(){T(Ot,0)};function Dt(C){j=C,E||(E=!0,At())}function Te(C,z){N=T(function(){C(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,Dt(k))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var z=3;break;default:z=m}var P=m;m=z;try{return C()}finally{m=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,z){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var P=m;m=C;try{return z()}finally{m=P}},e.unstable_scheduleCallback=function(C,z,P){var U=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?U+P:U):P=U,C){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=P+K,C={id:g++,callback:z,priorityLevel:C,startTime:P,expirationTime:K,sortIndex:-1},P>U?(C.sortIndex=P,t(d,C),n(a)===null&&C===n(d)&&(S?(f(N),N=-1):S=!0,Te(v,P-U))):(C.sortIndex=K,t(a,C),x||y||(x=!0,Dt(k))),C},e.unstable_shouldYield=Se,e.unstable_wrapCallback=function(C){var z=m;return function(){var P=m;m=z;try{return C.apply(this,arguments)}finally{m=P}}}})(tc);ec.exports=tc;var ad=ec.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nc=I,ze=ad;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rc=new Set,pr={};function tn(e,t){Cn(e,t),Cn(e+"Capture",t)}function Cn(e,t){for(pr[e]=t,e=0;e<t.length;e++)rc.add(t[e])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nl=Object.prototype.hasOwnProperty,ud=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la={},sa={};function cd(e){return nl.call(sa,e)?!0:nl.call(la,e)?!1:ud.test(e)?sa[e]=!0:(la[e]=!0,!1)}function dd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function fd(e,t,n,r){if(t===null||typeof t>"u"||dd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var ls=/[\-:]([a-z])/g;function ss(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ls,ss);le[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ls,ss);le[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ls,ss);le[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function as(e,t,n,r){var o=le.hasOwnProperty(t)?le[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(fd(t,n,o,r)&&(n=null),r||o===null?cd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ft=nc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,br=Symbol.for("react.element"),ln=Symbol.for("react.portal"),sn=Symbol.for("react.fragment"),us=Symbol.for("react.strict_mode"),rl=Symbol.for("react.profiler"),oc=Symbol.for("react.provider"),ic=Symbol.for("react.context"),cs=Symbol.for("react.forward_ref"),ol=Symbol.for("react.suspense"),il=Symbol.for("react.suspense_list"),ds=Symbol.for("react.memo"),vt=Symbol.for("react.lazy"),lc=Symbol.for("react.offscreen"),aa=Symbol.iterator;function Vn(e){return e===null||typeof e!="object"?null:(e=aa&&e[aa]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,ji;function Jn(e){if(ji===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ji=t&&t[1]||""}return`
`+ji+e}var Ei=!1;function Ci(e,t){if(!e||Ei)return"";Ei=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{Ei=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Jn(e):""}function pd(e){switch(e.tag){case 5:return Jn(e.type);case 16:return Jn("Lazy");case 13:return Jn("Suspense");case 19:return Jn("SuspenseList");case 0:case 2:case 15:return e=Ci(e.type,!1),e;case 11:return e=Ci(e.type.render,!1),e;case 1:return e=Ci(e.type,!0),e;default:return""}}function ll(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case sn:return"Fragment";case ln:return"Portal";case rl:return"Profiler";case us:return"StrictMode";case ol:return"Suspense";case il:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ic:return(e.displayName||"Context")+".Consumer";case oc:return(e._context.displayName||"Context")+".Provider";case cs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ds:return t=e.displayName||null,t!==null?t:ll(e.type)||"Memo";case vt:t=e._payload,e=e._init;try{return ll(e(t))}catch{}}return null}function hd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ll(t);case 8:return t===us?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Tt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function md(e){var t=sc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Hr(e){e._valueTracker||(e._valueTracker=md(e))}function ac(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=sc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function wo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function sl(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ua(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Tt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function uc(e,t){t=t.checked,t!=null&&as(e,"checked",t,!1)}function al(e,t){uc(e,t);var n=Tt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ul(e,t.type,n):t.hasOwnProperty("defaultValue")&&ul(e,t.type,Tt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ca(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ul(e,t,n){(t!=="number"||wo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var qn=Array.isArray;function xn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Tt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function cl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function da(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(qn(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Tt(n)}}function cc(e,t){var n=Tt(t.value),r=Tt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function fa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function dc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?dc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ur,fc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ur=Ur||document.createElement("div"),Ur.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ur.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function hr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var rr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gd=["Webkit","ms","Moz","O"];Object.keys(rr).forEach(function(e){gd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),rr[t]=rr[e]})});function pc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||rr.hasOwnProperty(e)&&rr[e]?(""+t).trim():t+"px"}function hc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=pc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var vd=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fl(e,t){if(t){if(vd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function pl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hl=null;function fs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ml=null,wn=null,kn=null;function pa(e){if(e=Lr(e)){if(typeof ml!="function")throw Error(w(280));var t=e.stateNode;t&&(t=ni(t),ml(e.stateNode,e.type,t))}}function mc(e){wn?kn?kn.push(e):kn=[e]:wn=e}function gc(){if(wn){var e=wn,t=kn;if(kn=wn=null,pa(e),t)for(e=0;e<t.length;e++)pa(t[e])}}function vc(e,t){return e(t)}function yc(){}var _i=!1;function xc(e,t,n){if(_i)return e(t,n);_i=!0;try{return vc(e,t,n)}finally{_i=!1,(wn!==null||kn!==null)&&(yc(),gc())}}function mr(e,t){var n=e.stateNode;if(n===null)return null;var r=ni(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var gl=!1;if(at)try{var Bn={};Object.defineProperty(Bn,"passive",{get:function(){gl=!0}}),window.addEventListener("test",Bn,Bn),window.removeEventListener("test",Bn,Bn)}catch{gl=!1}function yd(e,t,n,r,o,i,l,s,a){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(g){this.onError(g)}}var or=!1,ko=null,So=!1,vl=null,xd={onError:function(e){or=!0,ko=e}};function wd(e,t,n,r,o,i,l,s,a){or=!1,ko=null,yd.apply(xd,arguments)}function kd(e,t,n,r,o,i,l,s,a){if(wd.apply(this,arguments),or){if(or){var d=ko;or=!1,ko=null}else throw Error(w(198));So||(So=!0,vl=d)}}function nn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function wc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ha(e){if(nn(e)!==e)throw Error(w(188))}function Sd(e){var t=e.alternate;if(!t){if(t=nn(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return ha(o),e;if(i===r)return ha(o),t;i=i.sibling}throw Error(w(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function kc(e){return e=Sd(e),e!==null?Sc(e):null}function Sc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Sc(e);if(t!==null)return t;e=e.sibling}return null}var jc=ze.unstable_scheduleCallback,ma=ze.unstable_cancelCallback,jd=ze.unstable_shouldYield,Ed=ze.unstable_requestPaint,X=ze.unstable_now,Cd=ze.unstable_getCurrentPriorityLevel,ps=ze.unstable_ImmediatePriority,Ec=ze.unstable_UserBlockingPriority,jo=ze.unstable_NormalPriority,_d=ze.unstable_LowPriority,Cc=ze.unstable_IdlePriority,Jo=null,qe=null;function Nd(e){if(qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(Jo,e,void 0,(e.current.flags&128)===128)}catch{}}var Be=Math.clz32?Math.clz32:Md,zd=Math.log,Pd=Math.LN2;function Md(e){return e>>>=0,e===0?32:31-(zd(e)/Pd|0)|0}var Vr=64,Br=4194304;function er(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Eo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=er(s):(i&=l,i!==0&&(r=er(i)))}else l=n&~o,l!==0?r=er(l):i!==0&&(r=er(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Be(t),o=1<<n,r|=e[n],t&=~o;return r}function Td(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Be(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=Td(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function yl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _c(){var e=Vr;return Vr<<=1,!(Vr&4194240)&&(Vr=64),e}function Ni(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Rr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Be(t),e[t]=n}function Id(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Be(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function hs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Be(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var A=0;function Nc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var zc,ms,Pc,Mc,Tc,xl=!1,Wr=[],jt=null,Et=null,Ct=null,gr=new Map,vr=new Map,xt=[],Ld="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ga(e,t){switch(e){case"focusin":case"focusout":jt=null;break;case"dragenter":case"dragleave":Et=null;break;case"mouseover":case"mouseout":Ct=null;break;case"pointerover":case"pointerout":gr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vr.delete(t.pointerId)}}function Wn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Lr(t),t!==null&&ms(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function $d(e,t,n,r,o){switch(t){case"focusin":return jt=Wn(jt,e,t,n,r,o),!0;case"dragenter":return Et=Wn(Et,e,t,n,r,o),!0;case"mouseover":return Ct=Wn(Ct,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return gr.set(i,Wn(gr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,vr.set(i,Wn(vr.get(i)||null,e,t,n,r,o)),!0}return!1}function Rc(e){var t=Ht(e.target);if(t!==null){var n=nn(t);if(n!==null){if(t=n.tag,t===13){if(t=wc(n),t!==null){e.blockedOn=t,Tc(e.priority,function(){Pc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function io(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);hl=r,n.target.dispatchEvent(r),hl=null}else return t=Lr(n),t!==null&&ms(t),e.blockedOn=n,!1;t.shift()}return!0}function va(e,t,n){io(e)&&n.delete(t)}function Od(){xl=!1,jt!==null&&io(jt)&&(jt=null),Et!==null&&io(Et)&&(Et=null),Ct!==null&&io(Ct)&&(Ct=null),gr.forEach(va),vr.forEach(va)}function Qn(e,t){e.blockedOn===t&&(e.blockedOn=null,xl||(xl=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,Od)))}function yr(e){function t(o){return Qn(o,e)}if(0<Wr.length){Qn(Wr[0],e);for(var n=1;n<Wr.length;n++){var r=Wr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(jt!==null&&Qn(jt,e),Et!==null&&Qn(Et,e),Ct!==null&&Qn(Ct,e),gr.forEach(t),vr.forEach(t),n=0;n<xt.length;n++)r=xt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<xt.length&&(n=xt[0],n.blockedOn===null);)Rc(n),n.blockedOn===null&&xt.shift()}var Sn=ft.ReactCurrentBatchConfig,Co=!0;function Ad(e,t,n,r){var o=A,i=Sn.transition;Sn.transition=null;try{A=1,gs(e,t,n,r)}finally{A=o,Sn.transition=i}}function Dd(e,t,n,r){var o=A,i=Sn.transition;Sn.transition=null;try{A=4,gs(e,t,n,r)}finally{A=o,Sn.transition=i}}function gs(e,t,n,r){if(Co){var o=wl(e,t,n,r);if(o===null)Ai(e,t,r,_o,n),ga(e,r);else if($d(o,e,t,n,r))r.stopPropagation();else if(ga(e,r),t&4&&-1<Ld.indexOf(e)){for(;o!==null;){var i=Lr(o);if(i!==null&&zc(i),i=wl(e,t,n,r),i===null&&Ai(e,t,r,_o,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ai(e,t,r,null,n)}}var _o=null;function wl(e,t,n,r){if(_o=null,e=fs(r),e=Ht(e),e!==null)if(t=nn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=wc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return _o=e,null}function Ic(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cd()){case ps:return 1;case Ec:return 4;case jo:case _d:return 16;case Cc:return 536870912;default:return 16}default:return 16}}var kt=null,vs=null,lo=null;function Lc(){if(lo)return lo;var e,t=vs,n=t.length,r,o="value"in kt?kt.value:kt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return lo=o.slice(e,1<r?1-r:void 0)}function so(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Qr(){return!0}function ya(){return!1}function Me(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Qr:ya,this.isPropagationStopped=ya,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qr)},persist:function(){},isPersistent:Qr}),t}var Fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ys=Me(Fn),Ir=Y({},Fn,{view:0,detail:0}),Fd=Me(Ir),zi,Pi,Yn,qo=Y({},Ir,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yn&&(Yn&&e.type==="mousemove"?(zi=e.screenX-Yn.screenX,Pi=e.screenY-Yn.screenY):Pi=zi=0,Yn=e),zi)},movementY:function(e){return"movementY"in e?e.movementY:Pi}}),xa=Me(qo),bd=Y({},qo,{dataTransfer:0}),Hd=Me(bd),Ud=Y({},Ir,{relatedTarget:0}),Mi=Me(Ud),Vd=Y({},Fn,{animationName:0,elapsedTime:0,pseudoElement:0}),Bd=Me(Vd),Wd=Y({},Fn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qd=Me(Wd),Yd=Y({},Fn,{data:0}),wa=Me(Yd),Kd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Xd[e])?!!t[e]:!1}function xs(){return Zd}var Jd=Y({},Ir,{key:function(e){if(e.key){var t=Kd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=so(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xs,charCode:function(e){return e.type==="keypress"?so(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?so(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qd=Me(Jd),ef=Y({},qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ka=Me(ef),tf=Y({},Ir,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xs}),nf=Me(tf),rf=Y({},Fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),of=Me(rf),lf=Y({},qo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sf=Me(lf),af=[9,13,27,32],ws=at&&"CompositionEvent"in window,ir=null;at&&"documentMode"in document&&(ir=document.documentMode);var uf=at&&"TextEvent"in window&&!ir,$c=at&&(!ws||ir&&8<ir&&11>=ir),Sa=String.fromCharCode(32),ja=!1;function Oc(e,t){switch(e){case"keyup":return af.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ac(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var an=!1;function cf(e,t){switch(e){case"compositionend":return Ac(t);case"keypress":return t.which!==32?null:(ja=!0,Sa);case"textInput":return e=t.data,e===Sa&&ja?null:e;default:return null}}function df(e,t){if(an)return e==="compositionend"||!ws&&Oc(e,t)?(e=Lc(),lo=vs=kt=null,an=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $c&&t.locale!=="ko"?null:t.data;default:return null}}var ff={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ea(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ff[e.type]:t==="textarea"}function Dc(e,t,n,r){mc(r),t=No(t,"onChange"),0<t.length&&(n=new ys("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var lr=null,xr=null;function pf(e){Gc(e,0)}function ei(e){var t=dn(e);if(ac(t))return e}function hf(e,t){if(e==="change")return t}var Fc=!1;if(at){var Ti;if(at){var Ri="oninput"in document;if(!Ri){var Ca=document.createElement("div");Ca.setAttribute("oninput","return;"),Ri=typeof Ca.oninput=="function"}Ti=Ri}else Ti=!1;Fc=Ti&&(!document.documentMode||9<document.documentMode)}function _a(){lr&&(lr.detachEvent("onpropertychange",bc),xr=lr=null)}function bc(e){if(e.propertyName==="value"&&ei(xr)){var t=[];Dc(t,xr,e,fs(e)),xc(pf,t)}}function mf(e,t,n){e==="focusin"?(_a(),lr=t,xr=n,lr.attachEvent("onpropertychange",bc)):e==="focusout"&&_a()}function gf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ei(xr)}function vf(e,t){if(e==="click")return ei(t)}function yf(e,t){if(e==="input"||e==="change")return ei(t)}function xf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ye=typeof Object.is=="function"?Object.is:xf;function wr(e,t){if(Ye(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!nl.call(t,o)||!Ye(e[o],t[o]))return!1}return!0}function Na(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function za(e,t){var n=Na(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Na(n)}}function Hc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Uc(){for(var e=window,t=wo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=wo(e.document)}return t}function ks(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function wf(e){var t=Uc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Hc(n.ownerDocument.documentElement,n)){if(r!==null&&ks(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=za(n,i);var l=za(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var kf=at&&"documentMode"in document&&11>=document.documentMode,un=null,kl=null,sr=null,Sl=!1;function Pa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sl||un==null||un!==wo(r)||(r=un,"selectionStart"in r&&ks(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),sr&&wr(sr,r)||(sr=r,r=No(kl,"onSelect"),0<r.length&&(t=new ys("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=un)))}function Yr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cn={animationend:Yr("Animation","AnimationEnd"),animationiteration:Yr("Animation","AnimationIteration"),animationstart:Yr("Animation","AnimationStart"),transitionend:Yr("Transition","TransitionEnd")},Ii={},Vc={};at&&(Vc=document.createElement("div").style,"AnimationEvent"in window||(delete cn.animationend.animation,delete cn.animationiteration.animation,delete cn.animationstart.animation),"TransitionEvent"in window||delete cn.transitionend.transition);function ti(e){if(Ii[e])return Ii[e];if(!cn[e])return e;var t=cn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vc)return Ii[e]=t[n];return e}var Bc=ti("animationend"),Wc=ti("animationiteration"),Qc=ti("animationstart"),Yc=ti("transitionend"),Kc=new Map,Ma="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function It(e,t){Kc.set(e,t),tn(t,[e])}for(var Li=0;Li<Ma.length;Li++){var $i=Ma[Li],Sf=$i.toLowerCase(),jf=$i[0].toUpperCase()+$i.slice(1);It(Sf,"on"+jf)}It(Bc,"onAnimationEnd");It(Wc,"onAnimationIteration");It(Qc,"onAnimationStart");It("dblclick","onDoubleClick");It("focusin","onFocus");It("focusout","onBlur");It(Yc,"onTransitionEnd");Cn("onMouseEnter",["mouseout","mouseover"]);Cn("onMouseLeave",["mouseout","mouseover"]);Cn("onPointerEnter",["pointerout","pointerover"]);Cn("onPointerLeave",["pointerout","pointerover"]);tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));tn("onBeforeInput",["compositionend","keypress","textInput","paste"]);tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ef=new Set("cancel close invalid load scroll toggle".split(" ").concat(tr));function Ta(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,kd(r,t,void 0,e),e.currentTarget=null}function Gc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,d=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;Ta(o,s,d),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,d=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;Ta(o,s,d),i=a}}}if(So)throw e=vl,So=!1,vl=null,e}function F(e,t){var n=t[Nl];n===void 0&&(n=t[Nl]=new Set);var r=e+"__bubble";n.has(r)||(Xc(t,e,2,!1),n.add(r))}function Oi(e,t,n){var r=0;t&&(r|=4),Xc(n,e,r,t)}var Kr="_reactListening"+Math.random().toString(36).slice(2);function kr(e){if(!e[Kr]){e[Kr]=!0,rc.forEach(function(n){n!=="selectionchange"&&(Ef.has(n)||Oi(n,!1,e),Oi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Kr]||(t[Kr]=!0,Oi("selectionchange",!1,t))}}function Xc(e,t,n,r){switch(Ic(t)){case 1:var o=Ad;break;case 4:o=Dd;break;default:o=gs}n=o.bind(null,t,n,e),o=void 0,!gl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ai(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=Ht(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}xc(function(){var d=i,g=fs(n),h=[];e:{var m=Kc.get(e);if(m!==void 0){var y=ys,x=e;switch(e){case"keypress":if(so(n)===0)break e;case"keydown":case"keyup":y=qd;break;case"focusin":x="focus",y=Mi;break;case"focusout":x="blur",y=Mi;break;case"beforeblur":case"afterblur":y=Mi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=xa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Hd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=nf;break;case Bc:case Wc:case Qc:y=Bd;break;case Yc:y=of;break;case"scroll":y=Fd;break;case"wheel":y=sf;break;case"copy":case"cut":case"paste":y=Qd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=ka}var S=(t&4)!==0,T=!S&&e==="scroll",f=S?m!==null?m+"Capture":null:m;S=[];for(var c=d,p;c!==null;){p=c;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=mr(c,f),v!=null&&S.push(Sr(c,v,p)))),T)break;c=c.return}0<S.length&&(m=new y(m,x,null,n,g),h.push({event:m,listeners:S}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&n!==hl&&(x=n.relatedTarget||n.fromElement)&&(Ht(x)||x[ut]))break e;if((y||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=d,x=x?Ht(x):null,x!==null&&(T=nn(x),x!==T||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=d),y!==x)){if(S=xa,v="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(S=ka,v="onPointerLeave",f="onPointerEnter",c="pointer"),T=y==null?m:dn(y),p=x==null?m:dn(x),m=new S(v,c+"leave",y,n,g),m.target=T,m.relatedTarget=p,v=null,Ht(g)===d&&(S=new S(f,c+"enter",x,n,g),S.target=p,S.relatedTarget=T,v=S),T=v,y&&x)t:{for(S=y,f=x,c=0,p=S;p;p=rn(p))c++;for(p=0,v=f;v;v=rn(v))p++;for(;0<c-p;)S=rn(S),c--;for(;0<p-c;)f=rn(f),p--;for(;c--;){if(S===f||f!==null&&S===f.alternate)break t;S=rn(S),f=rn(f)}S=null}else S=null;y!==null&&Ra(h,m,y,S,!1),x!==null&&T!==null&&Ra(h,T,x,S,!0)}}e:{if(m=d?dn(d):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var k=hf;else if(Ea(m))if(Fc)k=yf;else{k=gf;var E=mf}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=vf);if(k&&(k=k(e,d))){Dc(h,k,n,g);break e}E&&E(e,m,d),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&ul(m,"number",m.value)}switch(E=d?dn(d):window,e){case"focusin":(Ea(E)||E.contentEditable==="true")&&(un=E,kl=d,sr=null);break;case"focusout":sr=kl=un=null;break;case"mousedown":Sl=!0;break;case"contextmenu":case"mouseup":case"dragend":Sl=!1,Pa(h,n,g);break;case"selectionchange":if(kf)break;case"keydown":case"keyup":Pa(h,n,g)}var j;if(ws)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else an?Oc(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&($c&&n.locale!=="ko"&&(an||N!=="onCompositionStart"?N==="onCompositionEnd"&&an&&(j=Lc()):(kt=g,vs="value"in kt?kt.value:kt.textContent,an=!0)),E=No(d,N),0<E.length&&(N=new wa(N,e,null,n,g),h.push({event:N,listeners:E}),j?N.data=j:(j=Ac(n),j!==null&&(N.data=j)))),(j=uf?cf(e,n):df(e,n))&&(d=No(d,"onBeforeInput"),0<d.length&&(g=new wa("onBeforeInput","beforeinput",null,n,g),h.push({event:g,listeners:d}),g.data=j))}Gc(h,t)})}function Sr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function No(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=mr(e,n),i!=null&&r.unshift(Sr(e,i,o)),i=mr(e,t),i!=null&&r.push(Sr(e,i,o))),e=e.return}return r}function rn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ra(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,d=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&d!==null&&(s=d,o?(a=mr(n,i),a!=null&&l.unshift(Sr(n,a,s))):o||(a=mr(n,i),a!=null&&l.push(Sr(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Cf=/\r\n?/g,_f=/\u0000|\uFFFD/g;function Ia(e){return(typeof e=="string"?e:""+e).replace(Cf,`
`).replace(_f,"")}function Gr(e,t,n){if(t=Ia(t),Ia(e)!==t&&n)throw Error(w(425))}function zo(){}var jl=null,El=null;function Cl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _l=typeof setTimeout=="function"?setTimeout:void 0,Nf=typeof clearTimeout=="function"?clearTimeout:void 0,La=typeof Promise=="function"?Promise:void 0,zf=typeof queueMicrotask=="function"?queueMicrotask:typeof La<"u"?function(e){return La.resolve(null).then(e).catch(Pf)}:_l;function Pf(e){setTimeout(function(){throw e})}function Di(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),yr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);yr(t)}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $a(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var bn=Math.random().toString(36).slice(2),Ze="__reactFiber$"+bn,jr="__reactProps$"+bn,ut="__reactContainer$"+bn,Nl="__reactEvents$"+bn,Mf="__reactListeners$"+bn,Tf="__reactHandles$"+bn;function Ht(e){var t=e[Ze];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ut]||n[Ze]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$a(e);e!==null;){if(n=e[Ze])return n;e=$a(e)}return t}e=n,n=e.parentNode}return null}function Lr(e){return e=e[Ze]||e[ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function dn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function ni(e){return e[jr]||null}var zl=[],fn=-1;function Lt(e){return{current:e}}function H(e){0>fn||(e.current=zl[fn],zl[fn]=null,fn--)}function D(e,t){fn++,zl[fn]=e.current,e.current=t}var Rt={},ce=Lt(Rt),xe=Lt(!1),Xt=Rt;function _n(e,t){var n=e.type.contextTypes;if(!n)return Rt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function we(e){return e=e.childContextTypes,e!=null}function Po(){H(xe),H(ce)}function Oa(e,t,n){if(ce.current!==Rt)throw Error(w(168));D(ce,t),D(xe,n)}function Zc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(w(108,hd(e)||"Unknown",o));return Y({},n,r)}function Mo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rt,Xt=ce.current,D(ce,e),D(xe,xe.current),!0}function Aa(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=Zc(e,t,Xt),r.__reactInternalMemoizedMergedChildContext=e,H(xe),H(ce),D(ce,e)):H(xe),D(xe,n)}var ot=null,ri=!1,Fi=!1;function Jc(e){ot===null?ot=[e]:ot.push(e)}function Rf(e){ri=!0,Jc(e)}function $t(){if(!Fi&&ot!==null){Fi=!0;var e=0,t=A;try{var n=ot;for(A=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ot=null,ri=!1}catch(o){throw ot!==null&&(ot=ot.slice(e+1)),jc(ps,$t),o}finally{A=t,Fi=!1}}return null}var pn=[],hn=0,To=null,Ro=0,Ie=[],Le=0,Zt=null,it=1,lt="";function Ft(e,t){pn[hn++]=Ro,pn[hn++]=To,To=e,Ro=t}function qc(e,t,n){Ie[Le++]=it,Ie[Le++]=lt,Ie[Le++]=Zt,Zt=e;var r=it;e=lt;var o=32-Be(r)-1;r&=~(1<<o),n+=1;var i=32-Be(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,it=1<<32-Be(t)+o|n<<o|r,lt=i+e}else it=1<<i|n<<o|r,lt=e}function Ss(e){e.return!==null&&(Ft(e,1),qc(e,1,0))}function js(e){for(;e===To;)To=pn[--hn],pn[hn]=null,Ro=pn[--hn],pn[hn]=null;for(;e===Zt;)Zt=Ie[--Le],Ie[Le]=null,lt=Ie[--Le],Ie[Le]=null,it=Ie[--Le],Ie[Le]=null}var Ne=null,_e=null,V=!1,Ve=null;function e1(e,t){var n=$e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Da(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,_e=_t(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,_e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Zt!==null?{id:it,overflow:lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=$e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,_e=null,!0):!1;default:return!1}}function Pl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ml(e){if(V){var t=_e;if(t){var n=t;if(!Da(e,t)){if(Pl(e))throw Error(w(418));t=_t(n.nextSibling);var r=Ne;t&&Da(e,t)?e1(r,n):(e.flags=e.flags&-4097|2,V=!1,Ne=e)}}else{if(Pl(e))throw Error(w(418));e.flags=e.flags&-4097|2,V=!1,Ne=e}}}function Fa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function Xr(e){if(e!==Ne)return!1;if(!V)return Fa(e),V=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Cl(e.type,e.memoizedProps)),t&&(t=_e)){if(Pl(e))throw t1(),Error(w(418));for(;t;)e1(e,t),t=_t(t.nextSibling)}if(Fa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){_e=_t(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}_e=null}}else _e=Ne?_t(e.stateNode.nextSibling):null;return!0}function t1(){for(var e=_e;e;)e=_t(e.nextSibling)}function Nn(){_e=Ne=null,V=!1}function Es(e){Ve===null?Ve=[e]:Ve.push(e)}var If=ft.ReactCurrentBatchConfig;function He(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Io=Lt(null),Lo=null,mn=null,Cs=null;function _s(){Cs=mn=Lo=null}function Ns(e){var t=Io.current;H(Io),e._currentValue=t}function Tl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function jn(e,t){Lo=e,Cs=mn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ve=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(Cs!==e)if(e={context:e,memoizedValue:t,next:null},mn===null){if(Lo===null)throw Error(w(308));mn=e,Lo.dependencies={lanes:0,firstContext:e}}else mn=mn.next=e;return t}var Ut=null;function zs(e){Ut===null?Ut=[e]:Ut.push(e)}function n1(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,zs(t)):(n.next=o.next,o.next=n),t.interleaved=n,ct(e,r)}function ct(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var yt=!1;function Ps(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function r1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function st(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,ct(e,n)}return o=r.interleaved,o===null?(t.next=t,zs(r)):(t.next=o.next,o.next=t),r.interleaved=t,ct(e,n)}function ao(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hs(e,n)}}function ba(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $o(e,t,n,r){var o=e.updateQueue;yt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,d=a.next;a.next=null,l===null?i=d:l.next=d,l=a;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==l&&(s===null?g.firstBaseUpdate=d:s.next=d,g.lastBaseUpdate=a))}if(i!==null){var h=o.baseState;l=0,g=d=a=null,s=i;do{var m=s.lane,y=s.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,S=s;switch(m=t,y=n,S.tag){case 1:if(x=S.payload,typeof x=="function"){h=x.call(y,h,m);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=S.payload,m=typeof x=="function"?x.call(y,h,m):x,m==null)break e;h=Y({},h,m);break e;case 2:yt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[s]:m.push(s))}else y={eventTime:y,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(d=g=y,a=h):g=g.next=y,l|=m;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;m=s,s=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(1);if(g===null&&(a=h),o.baseState=a,o.firstBaseUpdate=d,o.lastBaseUpdate=g,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);qt|=l,e.lanes=l,e.memoizedState=h}}function Ha(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(w(191,o));o.call(r)}}}var o1=new nc.Component().refs;function Rl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var oi={isMounted:function(e){return(e=e._reactInternals)?nn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=fe(),o=Pt(e),i=st(r,o);i.payload=t,n!=null&&(i.callback=n),t=Nt(e,i,o),t!==null&&(We(t,e,o,r),ao(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=fe(),o=Pt(e),i=st(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Nt(e,i,o),t!==null&&(We(t,e,o,r),ao(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=fe(),r=Pt(e),o=st(n,r);o.tag=2,t!=null&&(o.callback=t),t=Nt(e,o,r),t!==null&&(We(t,e,r,n),ao(t,e,r))}};function Ua(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!wr(n,r)||!wr(o,i):!0}function i1(e,t,n){var r=!1,o=Rt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ae(i):(o=we(t)?Xt:ce.current,r=t.contextTypes,i=(r=r!=null)?_n(e,o):Rt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=oi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Va(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&oi.enqueueReplaceState(t,t.state,null)}function Il(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=o1,Ps(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ae(i):(i=we(t)?Xt:ce.current,o.context=_n(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Rl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&oi.enqueueReplaceState(o,o.state,null),$o(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Kn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;s===o1&&(s=o.refs={}),l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function Zr(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ba(e){var t=e._init;return t(e._payload)}function l1(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function o(f,c){return f=Mt(f,c),f.index=0,f.sibling=null,f}function i(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,p,v){return c===null||c.tag!==6?(c=Qi(p,f.mode,v),c.return=f,c):(c=o(c,p),c.return=f,c)}function a(f,c,p,v){var k=p.type;return k===sn?g(f,c,p.props.children,v,p.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===vt&&Ba(k)===c.type)?(v=o(c,p.props),v.ref=Kn(f,c,p),v.return=f,v):(v=mo(p.type,p.key,p.props,null,f.mode,v),v.ref=Kn(f,c,p),v.return=f,v)}function d(f,c,p,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Yi(p,f.mode,v),c.return=f,c):(c=o(c,p.children||[]),c.return=f,c)}function g(f,c,p,v,k){return c===null||c.tag!==7?(c=Qt(p,f.mode,v,k),c.return=f,c):(c=o(c,p),c.return=f,c)}function h(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Qi(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case br:return p=mo(c.type,c.key,c.props,null,f.mode,p),p.ref=Kn(f,null,c),p.return=f,p;case ln:return c=Yi(c,f.mode,p),c.return=f,c;case vt:var v=c._init;return h(f,v(c._payload),p)}if(qn(c)||Vn(c))return c=Qt(c,f.mode,p,null),c.return=f,c;Zr(f,c)}return null}function m(f,c,p,v){var k=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:s(f,c,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case br:return p.key===k?a(f,c,p,v):null;case ln:return p.key===k?d(f,c,p,v):null;case vt:return k=p._init,m(f,c,k(p._payload),v)}if(qn(p)||Vn(p))return k!==null?null:g(f,c,p,v,null);Zr(f,p)}return null}function y(f,c,p,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,s(c,f,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case br:return f=f.get(v.key===null?p:v.key)||null,a(c,f,v,k);case ln:return f=f.get(v.key===null?p:v.key)||null,d(c,f,v,k);case vt:var E=v._init;return y(f,c,p,E(v._payload),k)}if(qn(v)||Vn(v))return f=f.get(p)||null,g(c,f,v,k,null);Zr(c,v)}return null}function x(f,c,p,v){for(var k=null,E=null,j=c,N=c=0,B=null;j!==null&&N<p.length;N++){j.index>N?(B=j,j=null):B=j.sibling;var R=m(f,j,p[N],v);if(R===null){j===null&&(j=B);break}e&&j&&R.alternate===null&&t(f,j),c=i(R,c,N),E===null?k=R:E.sibling=R,E=R,j=B}if(N===p.length)return n(f,j),V&&Ft(f,N),k;if(j===null){for(;N<p.length;N++)j=h(f,p[N],v),j!==null&&(c=i(j,c,N),E===null?k=j:E.sibling=j,E=j);return V&&Ft(f,N),k}for(j=r(f,j);N<p.length;N++)B=y(j,f,N,p[N],v),B!==null&&(e&&B.alternate!==null&&j.delete(B.key===null?N:B.key),c=i(B,c,N),E===null?k=B:E.sibling=B,E=B);return e&&j.forEach(function(Se){return t(f,Se)}),V&&Ft(f,N),k}function S(f,c,p,v){var k=Vn(p);if(typeof k!="function")throw Error(w(150));if(p=k.call(p),p==null)throw Error(w(151));for(var E=k=null,j=c,N=c=0,B=null,R=p.next();j!==null&&!R.done;N++,R=p.next()){j.index>N?(B=j,j=null):B=j.sibling;var Se=m(f,j,R.value,v);if(Se===null){j===null&&(j=B);break}e&&j&&Se.alternate===null&&t(f,j),c=i(Se,c,N),E===null?k=Se:E.sibling=Se,E=Se,j=B}if(R.done)return n(f,j),V&&Ft(f,N),k;if(j===null){for(;!R.done;N++,R=p.next())R=h(f,R.value,v),R!==null&&(c=i(R,c,N),E===null?k=R:E.sibling=R,E=R);return V&&Ft(f,N),k}for(j=r(f,j);!R.done;N++,R=p.next())R=y(j,f,N,R.value,v),R!==null&&(e&&R.alternate!==null&&j.delete(R.key===null?N:R.key),c=i(R,c,N),E===null?k=R:E.sibling=R,E=R);return e&&j.forEach(function(Ot){return t(f,Ot)}),V&&Ft(f,N),k}function T(f,c,p,v){if(typeof p=="object"&&p!==null&&p.type===sn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case br:e:{for(var k=p.key,E=c;E!==null;){if(E.key===k){if(k=p.type,k===sn){if(E.tag===7){n(f,E.sibling),c=o(E,p.props.children),c.return=f,f=c;break e}}else if(E.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===vt&&Ba(k)===E.type){n(f,E.sibling),c=o(E,p.props),c.ref=Kn(f,E,p),c.return=f,f=c;break e}n(f,E);break}else t(f,E);E=E.sibling}p.type===sn?(c=Qt(p.props.children,f.mode,v,p.key),c.return=f,f=c):(v=mo(p.type,p.key,p.props,null,f.mode,v),v.ref=Kn(f,c,p),v.return=f,f=v)}return l(f);case ln:e:{for(E=p.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=o(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Yi(p,f.mode,v),c.return=f,f=c}return l(f);case vt:return E=p._init,T(f,c,E(p._payload),v)}if(qn(p))return x(f,c,p,v);if(Vn(p))return S(f,c,p,v);Zr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=o(c,p),c.return=f,f=c):(n(f,c),c=Qi(p,f.mode,v),c.return=f,f=c),l(f)):n(f,c)}return T}var zn=l1(!0),s1=l1(!1),$r={},et=Lt($r),Er=Lt($r),Cr=Lt($r);function Vt(e){if(e===$r)throw Error(w(174));return e}function Ms(e,t){switch(D(Cr,t),D(Er,e),D(et,$r),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:dl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=dl(t,e)}H(et),D(et,t)}function Pn(){H(et),H(Er),H(Cr)}function a1(e){Vt(Cr.current);var t=Vt(et.current),n=dl(t,e.type);t!==n&&(D(Er,e),D(et,n))}function Ts(e){Er.current===e&&(H(et),H(Er))}var W=Lt(0);function Oo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var bi=[];function Rs(){for(var e=0;e<bi.length;e++)bi[e]._workInProgressVersionPrimary=null;bi.length=0}var uo=ft.ReactCurrentDispatcher,Hi=ft.ReactCurrentBatchConfig,Jt=0,Q=null,q=null,te=null,Ao=!1,ar=!1,_r=0,Lf=0;function se(){throw Error(w(321))}function Is(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ye(e[n],t[n]))return!1;return!0}function Ls(e,t,n,r,o,i){if(Jt=i,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,uo.current=e===null||e.memoizedState===null?Df:Ff,e=n(r,o),ar){i=0;do{if(ar=!1,_r=0,25<=i)throw Error(w(301));i+=1,te=q=null,t.updateQueue=null,uo.current=bf,e=n(r,o)}while(ar)}if(uo.current=Do,t=q!==null&&q.next!==null,Jt=0,te=q=Q=null,Ao=!1,t)throw Error(w(300));return e}function $s(){var e=_r!==0;return _r=0,e}function Ge(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?Q.memoizedState=te=e:te=te.next=e,te}function De(){if(q===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=q.next;var t=te===null?Q.memoizedState:te.next;if(t!==null)te=t,q=e;else{if(e===null)throw Error(w(310));q=e,e={memoizedState:q.memoizedState,baseState:q.baseState,baseQueue:q.baseQueue,queue:q.queue,next:null},te===null?Q.memoizedState=te=e:te=te.next=e}return te}function Nr(e,t){return typeof t=="function"?t(e):t}function Ui(e){var t=De(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=q,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,d=i;do{var g=d.lane;if((Jt&g)===g)a!==null&&(a=a.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};a===null?(s=a=h,l=r):a=a.next=h,Q.lanes|=g,qt|=g}d=d.next}while(d!==null&&d!==i);a===null?l=r:a.next=s,Ye(r,t.memoizedState)||(ve=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Q.lanes|=i,qt|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vi(e){var t=De(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Ye(i,t.memoizedState)||(ve=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function u1(){}function c1(e,t){var n=Q,r=De(),o=t(),i=!Ye(r.memoizedState,o);if(i&&(r.memoizedState=o,ve=!0),r=r.queue,Os(p1.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||te!==null&&te.memoizedState.tag&1){if(n.flags|=2048,zr(9,f1.bind(null,n,r,o,t),void 0,null),re===null)throw Error(w(349));Jt&30||d1(n,t,o)}return o}function d1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function f1(e,t,n,r){t.value=n,t.getSnapshot=r,h1(t)&&m1(e)}function p1(e,t,n){return n(function(){h1(t)&&m1(e)})}function h1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ye(e,n)}catch{return!0}}function m1(e){var t=ct(e,1);t!==null&&We(t,e,1,-1)}function Wa(e){var t=Ge();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Nr,lastRenderedState:e},t.queue=e,e=e.dispatch=Af.bind(null,Q,e),[t.memoizedState,e]}function zr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function g1(){return De().memoizedState}function co(e,t,n,r){var o=Ge();Q.flags|=e,o.memoizedState=zr(1|t,n,void 0,r===void 0?null:r)}function ii(e,t,n,r){var o=De();r=r===void 0?null:r;var i=void 0;if(q!==null){var l=q.memoizedState;if(i=l.destroy,r!==null&&Is(r,l.deps)){o.memoizedState=zr(t,n,i,r);return}}Q.flags|=e,o.memoizedState=zr(1|t,n,i,r)}function Qa(e,t){return co(8390656,8,e,t)}function Os(e,t){return ii(2048,8,e,t)}function v1(e,t){return ii(4,2,e,t)}function y1(e,t){return ii(4,4,e,t)}function x1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function w1(e,t,n){return n=n!=null?n.concat([e]):null,ii(4,4,x1.bind(null,t,e),n)}function As(){}function k1(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Is(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function S1(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Is(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function j1(e,t,n){return Jt&21?(Ye(n,t)||(n=_c(),Q.lanes|=n,qt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ve=!0),e.memoizedState=n)}function $f(e,t){var n=A;A=n!==0&&4>n?n:4,e(!0);var r=Hi.transition;Hi.transition={};try{e(!1),t()}finally{A=n,Hi.transition=r}}function E1(){return De().memoizedState}function Of(e,t,n){var r=Pt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},C1(e))_1(t,n);else if(n=n1(e,t,n,r),n!==null){var o=fe();We(n,e,r,o),N1(n,t,r)}}function Af(e,t,n){var r=Pt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(C1(e))_1(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,Ye(s,l)){var a=t.interleaved;a===null?(o.next=o,zs(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=n1(e,t,o,r),n!==null&&(o=fe(),We(n,e,r,o),N1(n,t,r))}}function C1(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function _1(e,t){ar=Ao=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function N1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hs(e,n)}}var Do={readContext:Ae,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},Df={readContext:Ae,useCallback:function(e,t){return Ge().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:Qa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,co(4194308,4,x1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return co(4194308,4,e,t)},useInsertionEffect:function(e,t){return co(4,2,e,t)},useMemo:function(e,t){var n=Ge();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ge();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Of.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=Ge();return e={current:e},t.memoizedState=e},useState:Wa,useDebugValue:As,useDeferredValue:function(e){return Ge().memoizedState=e},useTransition:function(){var e=Wa(!1),t=e[0];return e=$f.bind(null,e[1]),Ge().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Q,o=Ge();if(V){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),re===null)throw Error(w(349));Jt&30||d1(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Qa(p1.bind(null,r,i,e),[e]),r.flags|=2048,zr(9,f1.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ge(),t=re.identifierPrefix;if(V){var n=lt,r=it;n=(r&~(1<<32-Be(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=_r++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Lf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ff={readContext:Ae,useCallback:k1,useContext:Ae,useEffect:Os,useImperativeHandle:w1,useInsertionEffect:v1,useLayoutEffect:y1,useMemo:S1,useReducer:Ui,useRef:g1,useState:function(){return Ui(Nr)},useDebugValue:As,useDeferredValue:function(e){var t=De();return j1(t,q.memoizedState,e)},useTransition:function(){var e=Ui(Nr)[0],t=De().memoizedState;return[e,t]},useMutableSource:u1,useSyncExternalStore:c1,useId:E1,unstable_isNewReconciler:!1},bf={readContext:Ae,useCallback:k1,useContext:Ae,useEffect:Os,useImperativeHandle:w1,useInsertionEffect:v1,useLayoutEffect:y1,useMemo:S1,useReducer:Vi,useRef:g1,useState:function(){return Vi(Nr)},useDebugValue:As,useDeferredValue:function(e){var t=De();return q===null?t.memoizedState=e:j1(t,q.memoizedState,e)},useTransition:function(){var e=Vi(Nr)[0],t=De().memoizedState;return[e,t]},useMutableSource:u1,useSyncExternalStore:c1,useId:E1,unstable_isNewReconciler:!1};function Mn(e,t){try{var n="",r=t;do n+=pd(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Bi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ll(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Hf=typeof WeakMap=="function"?WeakMap:Map;function z1(e,t,n){n=st(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){bo||(bo=!0,Bl=r),Ll(e,t)},n}function P1(e,t,n){n=st(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ll(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ll(e,t),typeof r!="function"&&(zt===null?zt=new Set([this]):zt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Ya(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Hf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=tp.bind(null,e,t,n),t.then(e,e))}function Ka(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ga(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=st(-1,1),t.tag=2,Nt(n,t,1))),n.lanes|=1),e)}var Uf=ft.ReactCurrentOwner,ve=!1;function de(e,t,n,r){t.child=e===null?s1(t,null,n,r):zn(t,e.child,n,r)}function Xa(e,t,n,r,o){n=n.render;var i=t.ref;return jn(t,o),r=Ls(e,t,n,r,i,o),n=$s(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,dt(e,t,o)):(V&&n&&Ss(t),t.flags|=1,de(e,t,r,o),t.child)}function Za(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ws(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,M1(e,t,i,r,o)):(e=mo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:wr,n(l,r)&&e.ref===t.ref)return dt(e,t,o)}return t.flags|=1,e=Mt(i,r),e.ref=t.ref,e.return=t,t.child=e}function M1(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(wr(i,r)&&e.ref===t.ref)if(ve=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(ve=!0);else return t.lanes=e.lanes,dt(e,t,o)}return $l(e,t,n,r,o)}function T1(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(vn,Ce),Ce|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(vn,Ce),Ce|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,D(vn,Ce),Ce|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,D(vn,Ce),Ce|=r;return de(e,t,o,n),t.child}function R1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function $l(e,t,n,r,o){var i=we(n)?Xt:ce.current;return i=_n(t,i),jn(t,o),n=Ls(e,t,n,r,i,o),r=$s(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,dt(e,t,o)):(V&&r&&Ss(t),t.flags|=1,de(e,t,n,o),t.child)}function Ja(e,t,n,r,o){if(we(n)){var i=!0;Mo(t)}else i=!1;if(jn(t,o),t.stateNode===null)fo(e,t),i1(t,n,r),Il(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ae(d):(d=we(n)?Xt:ce.current,d=_n(t,d));var g=n.getDerivedStateFromProps,h=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==d)&&Va(t,l,r,d),yt=!1;var m=t.memoizedState;l.state=m,$o(t,r,l,o),a=t.memoizedState,s!==r||m!==a||xe.current||yt?(typeof g=="function"&&(Rl(t,n,g,r),a=t.memoizedState),(s=yt||Ua(t,n,s,r,m,a,d))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=d,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,r1(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:He(t.type,s),l.props=d,h=t.pendingProps,m=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ae(a):(a=we(n)?Xt:ce.current,a=_n(t,a));var y=n.getDerivedStateFromProps;(g=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==h||m!==a)&&Va(t,l,r,a),yt=!1,m=t.memoizedState,l.state=m,$o(t,r,l,o);var x=t.memoizedState;s!==h||m!==x||xe.current||yt?(typeof y=="function"&&(Rl(t,n,y,r),x=t.memoizedState),(d=yt||Ua(t,n,d,r,m,x,a)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=a,r=d):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Ol(e,t,n,r,i,o)}function Ol(e,t,n,r,o,i){R1(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Aa(t,n,!1),dt(e,t,i);r=t.stateNode,Uf.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=zn(t,e.child,null,i),t.child=zn(t,null,s,i)):de(e,t,s,i),t.memoizedState=r.state,o&&Aa(t,n,!0),t.child}function I1(e){var t=e.stateNode;t.pendingContext?Oa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Oa(e,t.context,!1),Ms(e,t.containerInfo)}function qa(e,t,n,r,o){return Nn(),Es(o),t.flags|=256,de(e,t,n,r),t.child}var Al={dehydrated:null,treeContext:null,retryLane:0};function Dl(e){return{baseLanes:e,cachePool:null,transitions:null}}function L1(e,t,n){var r=t.pendingProps,o=W.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),D(W,o&1),e===null)return Ml(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=ai(l,r,0,null),e=Qt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Dl(n),t.memoizedState=Al,e):Ds(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Vf(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Mt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Mt(s,i):(i=Qt(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Dl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Al,r}return i=e.child,e=i.sibling,r=Mt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ds(e,t){return t=ai({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Jr(e,t,n,r){return r!==null&&Es(r),zn(t,e.child,null,n),e=Ds(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Vf(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Bi(Error(w(422))),Jr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=ai({mode:"visible",children:r.children},o,0,null),i=Qt(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&zn(t,e.child,null,l),t.child.memoizedState=Dl(l),t.memoizedState=Al,i);if(!(t.mode&1))return Jr(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(w(419)),r=Bi(i,r,void 0),Jr(e,t,l,r)}if(s=(l&e.childLanes)!==0,ve||s){if(r=re,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,ct(e,o),We(r,e,o,-1))}return Bs(),r=Bi(Error(w(421))),Jr(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=np.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,_e=_t(o.nextSibling),Ne=t,V=!0,Ve=null,e!==null&&(Ie[Le++]=it,Ie[Le++]=lt,Ie[Le++]=Zt,it=e.id,lt=e.overflow,Zt=t),t=Ds(t,r.children),t.flags|=4096,t)}function eu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Tl(e.return,t,n)}function Wi(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function $1(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(de(e,t,r.children,n),r=W.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&eu(e,n,t);else if(e.tag===19)eu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(W,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Oo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Wi(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Oo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Wi(t,!0,n,null,i);break;case"together":Wi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=Mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Bf(e,t,n){switch(t.tag){case 3:I1(t),Nn();break;case 5:a1(t);break;case 1:we(t.type)&&Mo(t);break;case 4:Ms(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;D(Io,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(D(W,W.current&1),t.flags|=128,null):n&t.child.childLanes?L1(e,t,n):(D(W,W.current&1),e=dt(e,t,n),e!==null?e.sibling:null);D(W,W.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return $1(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),D(W,W.current),r)break;return null;case 22:case 23:return t.lanes=0,T1(e,t,n)}return dt(e,t,n)}var O1,Fl,A1,D1;O1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fl=function(){};A1=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Vt(et.current);var i=null;switch(n){case"input":o=sl(e,o),r=sl(e,r),i=[];break;case"select":o=Y({},o,{value:void 0}),r=Y({},r,{value:void 0}),i=[];break;case"textarea":o=cl(e,o),r=cl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=zo)}fl(n,r);var l;n=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var s=o[d];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(pr.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var a=r[d];if(s=o!=null?o[d]:void 0,r.hasOwnProperty(d)&&a!==s&&(a!=null||s!=null))if(d==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(d,n)),n=a;else d==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(d,a)):d==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(d,""+a):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(pr.hasOwnProperty(d)?(a!=null&&d==="onScroll"&&F("scroll",e),i||s===a||(i=[])):(i=i||[]).push(d,a))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};D1=function(e,t,n,r){n!==r&&(t.flags|=4)};function Gn(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Wf(e,t,n){var r=t.pendingProps;switch(js(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return we(t.type)&&Po(),ae(t),null;case 3:return r=t.stateNode,Pn(),H(xe),H(ce),Rs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Xr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ve!==null&&(Yl(Ve),Ve=null))),Fl(e,t),ae(t),null;case 5:Ts(t);var o=Vt(Cr.current);if(n=t.type,e!==null&&t.stateNode!=null)A1(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return ae(t),null}if(e=Vt(et.current),Xr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ze]=t,r[jr]=i,e=(t.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(o=0;o<tr.length;o++)F(tr[o],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":ua(r,i),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},F("invalid",r);break;case"textarea":da(r,i),F("invalid",r)}fl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Gr(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Gr(r.textContent,s,e),o=["children",""+s]):pr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&F("scroll",r)}switch(n){case"input":Hr(r),ca(r,i,!0);break;case"textarea":Hr(r),fa(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=zo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=dc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Ze]=t,e[jr]=r,O1(e,t,!1,!1),t.stateNode=e;e:{switch(l=pl(n,r),n){case"dialog":F("cancel",e),F("close",e),o=r;break;case"iframe":case"object":case"embed":F("load",e),o=r;break;case"video":case"audio":for(o=0;o<tr.length;o++)F(tr[o],e);o=r;break;case"source":F("error",e),o=r;break;case"img":case"image":case"link":F("error",e),F("load",e),o=r;break;case"details":F("toggle",e),o=r;break;case"input":ua(e,r),o=sl(e,r),F("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Y({},r,{value:void 0}),F("invalid",e);break;case"textarea":da(e,r),o=cl(e,r),F("invalid",e);break;default:o=r}fl(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?hc(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&fc(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&hr(e,a):typeof a=="number"&&hr(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(pr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&F("scroll",e):a!=null&&as(e,i,a,l))}switch(n){case"input":Hr(e),ca(e,r,!1);break;case"textarea":Hr(e),fa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Tt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?xn(e,!!r.multiple,i,!1):r.defaultValue!=null&&xn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=zo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ae(t),null;case 6:if(e&&t.stateNode!=null)D1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=Vt(Cr.current),Vt(et.current),Xr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ze]=t,(i=r.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){case 3:Gr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Gr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ze]=t,t.stateNode=r}return ae(t),null;case 13:if(H(W),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&_e!==null&&t.mode&1&&!(t.flags&128))t1(),Nn(),t.flags|=98560,i=!1;else if(i=Xr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(w(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(w(317));i[Ze]=t}else Nn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),i=!1}else Ve!==null&&(Yl(Ve),Ve=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||W.current&1?ee===0&&(ee=3):Bs())),t.updateQueue!==null&&(t.flags|=4),ae(t),null);case 4:return Pn(),Fl(e,t),e===null&&kr(t.stateNode.containerInfo),ae(t),null;case 10:return Ns(t.type._context),ae(t),null;case 17:return we(t.type)&&Po(),ae(t),null;case 19:if(H(W),i=t.memoizedState,i===null)return ae(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Gn(i,!1);else{if(ee!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Oo(e),l!==null){for(t.flags|=128,Gn(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D(W,W.current&1|2),t.child}e=e.sibling}i.tail!==null&&X()>Tn&&(t.flags|=128,r=!0,Gn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Oo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Gn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!V)return ae(t),null}else 2*X()-i.renderingStartTime>Tn&&n!==1073741824&&(t.flags|=128,r=!0,Gn(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=X(),t.sibling=null,n=W.current,D(W,r?n&1|2:n&1),t):(ae(t),null);case 22:case 23:return Vs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ce&1073741824&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function Qf(e,t){switch(js(t),t.tag){case 1:return we(t.type)&&Po(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pn(),H(xe),H(ce),Rs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ts(t),null;case 13:if(H(W),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));Nn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(W),null;case 4:return Pn(),null;case 10:return Ns(t.type._context),null;case 22:case 23:return Vs(),null;case 24:return null;default:return null}}var qr=!1,ue=!1,Yf=typeof WeakSet=="function"?WeakSet:Set,_=null;function gn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function bl(e,t,n){try{n()}catch(r){G(e,t,r)}}var tu=!1;function Kf(e,t){if(jl=Co,e=Uc(),ks(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,d=0,g=0,h=e,m=null;t:for(;;){for(var y;h!==n||o!==0&&h.nodeType!==3||(s=l+o),h!==i||r!==0&&h.nodeType!==3||(a=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(y=h.firstChild)!==null;)m=h,h=y;for(;;){if(h===e)break t;if(m===n&&++d===o&&(s=l),m===i&&++g===r&&(a=l),(y=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=y}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(El={focusedElem:e,selectionRange:n},Co=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var S=x.memoizedProps,T=x.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?S:He(t.type,S),T);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(v){G(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return x=tu,tu=!1,x}function ur(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&bl(t,n,i)}o=o.next}while(o!==r)}}function li(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Hl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function F1(e){var t=e.alternate;t!==null&&(e.alternate=null,F1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ze],delete t[jr],delete t[Nl],delete t[Mf],delete t[Tf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function b1(e){return e.tag===5||e.tag===3||e.tag===4}function nu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||b1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ul(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=zo));else if(r!==4&&(e=e.child,e!==null))for(Ul(e,t,n),e=e.sibling;e!==null;)Ul(e,t,n),e=e.sibling}function Vl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Vl(e,t,n),e=e.sibling;e!==null;)Vl(e,t,n),e=e.sibling}var oe=null,Ue=!1;function mt(e,t,n){for(n=n.child;n!==null;)H1(e,t,n),n=n.sibling}function H1(e,t,n){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(Jo,n)}catch{}switch(n.tag){case 5:ue||gn(n,t);case 6:var r=oe,o=Ue;oe=null,mt(e,t,n),oe=r,Ue=o,oe!==null&&(Ue?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&(Ue?(e=oe,n=n.stateNode,e.nodeType===8?Di(e.parentNode,n):e.nodeType===1&&Di(e,n),yr(e)):Di(oe,n.stateNode));break;case 4:r=oe,o=Ue,oe=n.stateNode.containerInfo,Ue=!0,mt(e,t,n),oe=r,Ue=o;break;case 0:case 11:case 14:case 15:if(!ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&bl(n,t,l),o=o.next}while(o!==r)}mt(e,t,n);break;case 1:if(!ue&&(gn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){G(n,t,s)}mt(e,t,n);break;case 21:mt(e,t,n);break;case 22:n.mode&1?(ue=(r=ue)||n.memoizedState!==null,mt(e,t,n),ue=r):mt(e,t,n);break;default:mt(e,t,n)}}function ru(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Yf),t.forEach(function(r){var o=rp.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function be(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:oe=s.stateNode,Ue=!1;break e;case 3:oe=s.stateNode.containerInfo,Ue=!0;break e;case 4:oe=s.stateNode.containerInfo,Ue=!0;break e}s=s.return}if(oe===null)throw Error(w(160));H1(i,l,o),oe=null,Ue=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(d){G(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)U1(t,e),t=t.sibling}function U1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(be(t,e),Ke(e),r&4){try{ur(3,e,e.return),li(3,e)}catch(S){G(e,e.return,S)}try{ur(5,e,e.return)}catch(S){G(e,e.return,S)}}break;case 1:be(t,e),Ke(e),r&512&&n!==null&&gn(n,n.return);break;case 5:if(be(t,e),Ke(e),r&512&&n!==null&&gn(n,n.return),e.flags&32){var o=e.stateNode;try{hr(o,"")}catch(S){G(e,e.return,S)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&uc(o,i),pl(s,l);var d=pl(s,i);for(l=0;l<a.length;l+=2){var g=a[l],h=a[l+1];g==="style"?hc(o,h):g==="dangerouslySetInnerHTML"?fc(o,h):g==="children"?hr(o,h):as(o,g,h,d)}switch(s){case"input":al(o,i);break;case"textarea":cc(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?xn(o,!!i.multiple,y,!1):m!==!!i.multiple&&(i.defaultValue!=null?xn(o,!!i.multiple,i.defaultValue,!0):xn(o,!!i.multiple,i.multiple?[]:"",!1))}o[jr]=i}catch(S){G(e,e.return,S)}}break;case 6:if(be(t,e),Ke(e),r&4){if(e.stateNode===null)throw Error(w(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(S){G(e,e.return,S)}}break;case 3:if(be(t,e),Ke(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{yr(t.containerInfo)}catch(S){G(e,e.return,S)}break;case 4:be(t,e),Ke(e);break;case 13:be(t,e),Ke(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Hs=X())),r&4&&ru(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(ue=(d=ue)||g,be(t,e),ue=d):be(t,e),Ke(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(_=e,g=e.child;g!==null;){for(h=_=g;_!==null;){switch(m=_,y=m.child,m.tag){case 0:case 11:case 14:case 15:ur(4,m,m.return);break;case 1:gn(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(S){G(r,n,S)}}break;case 5:gn(m,m.return);break;case 22:if(m.memoizedState!==null){iu(h);continue}}y!==null?(y.return=m,_=y):iu(h)}g=g.sibling}e:for(g=null,h=e;;){if(h.tag===5){if(g===null){g=h;try{o=h.stateNode,d?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=h.stateNode,a=h.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=pc("display",l))}catch(S){G(e,e.return,S)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(S){G(e,e.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:be(t,e),Ke(e),r&4&&ru(e);break;case 21:break;default:be(t,e),Ke(e)}}function Ke(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(b1(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(hr(o,""),r.flags&=-33);var i=nu(e);Vl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=nu(e);Ul(e,s,l);break;default:throw Error(w(161))}}catch(a){G(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Gf(e,t,n){_=e,V1(e)}function V1(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var o=_,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||qr;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||ue;s=qr;var d=ue;if(qr=l,(ue=a)&&!d)for(_=o;_!==null;)l=_,a=l.child,l.tag===22&&l.memoizedState!==null?lu(o):a!==null?(a.return=l,_=a):lu(o);for(;i!==null;)_=i,V1(i),i=i.sibling;_=o,qr=s,ue=d}ou(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,_=i):ou(e)}}function ou(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ue||li(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ue)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:He(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ha(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ha(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&yr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}ue||t.flags&512&&Hl(t)}catch(m){G(t,t.return,m)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function iu(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function lu(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{li(4,t)}catch(a){G(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){G(t,o,a)}}var i=t.return;try{Hl(t)}catch(a){G(t,i,a)}break;case 5:var l=t.return;try{Hl(t)}catch(a){G(t,l,a)}}}catch(a){G(t,t.return,a)}if(t===e){_=null;break}var s=t.sibling;if(s!==null){s.return=t.return,_=s;break}_=t.return}}var Xf=Math.ceil,Fo=ft.ReactCurrentDispatcher,Fs=ft.ReactCurrentOwner,Oe=ft.ReactCurrentBatchConfig,$=0,re=null,J=null,ie=0,Ce=0,vn=Lt(0),ee=0,Pr=null,qt=0,si=0,bs=0,cr=null,ge=null,Hs=0,Tn=1/0,nt=null,bo=!1,Bl=null,zt=null,eo=!1,St=null,Ho=0,dr=0,Wl=null,po=-1,ho=0;function fe(){return $&6?X():po!==-1?po:po=X()}function Pt(e){return e.mode&1?$&2&&ie!==0?ie&-ie:If.transition!==null?(ho===0&&(ho=_c()),ho):(e=A,e!==0||(e=window.event,e=e===void 0?16:Ic(e.type)),e):1}function We(e,t,n,r){if(50<dr)throw dr=0,Wl=null,Error(w(185));Rr(e,n,r),(!($&2)||e!==re)&&(e===re&&(!($&2)&&(si|=n),ee===4&&wt(e,ie)),ke(e,r),n===1&&$===0&&!(t.mode&1)&&(Tn=X()+500,ri&&$t()))}function ke(e,t){var n=e.callbackNode;Rd(e,t);var r=Eo(e,e===re?ie:0);if(r===0)n!==null&&ma(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ma(n),t===1)e.tag===0?Rf(su.bind(null,e)):Jc(su.bind(null,e)),zf(function(){!($&6)&&$t()}),n=null;else{switch(Nc(r)){case 1:n=ps;break;case 4:n=Ec;break;case 16:n=jo;break;case 536870912:n=Cc;break;default:n=jo}n=Z1(n,B1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function B1(e,t){if(po=-1,ho=0,$&6)throw Error(w(327));var n=e.callbackNode;if(En()&&e.callbackNode!==n)return null;var r=Eo(e,e===re?ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Uo(e,r);else{t=r;var o=$;$|=2;var i=Q1();(re!==e||ie!==t)&&(nt=null,Tn=X()+500,Wt(e,t));do try{qf();break}catch(s){W1(e,s)}while(1);_s(),Fo.current=i,$=o,J!==null?t=0:(re=null,ie=0,t=ee)}if(t!==0){if(t===2&&(o=yl(e),o!==0&&(r=o,t=Ql(e,o))),t===1)throw n=Pr,Wt(e,0),wt(e,r),ke(e,X()),n;if(t===6)wt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Zf(o)&&(t=Uo(e,r),t===2&&(i=yl(e),i!==0&&(r=i,t=Ql(e,i))),t===1))throw n=Pr,Wt(e,0),wt(e,r),ke(e,X()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:bt(e,ge,nt);break;case 3:if(wt(e,r),(r&130023424)===r&&(t=Hs+500-X(),10<t)){if(Eo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){fe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=_l(bt.bind(null,e,ge,nt),t);break}bt(e,ge,nt);break;case 4:if(wt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Be(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Xf(r/1960))-r,10<r){e.timeoutHandle=_l(bt.bind(null,e,ge,nt),r);break}bt(e,ge,nt);break;case 5:bt(e,ge,nt);break;default:throw Error(w(329))}}}return ke(e,X()),e.callbackNode===n?B1.bind(null,e):null}function Ql(e,t){var n=cr;return e.current.memoizedState.isDehydrated&&(Wt(e,t).flags|=256),e=Uo(e,t),e!==2&&(t=ge,ge=n,t!==null&&Yl(t)),e}function Yl(e){ge===null?ge=e:ge.push.apply(ge,e)}function Zf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Ye(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wt(e,t){for(t&=~bs,t&=~si,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Be(t),r=1<<n;e[n]=-1,t&=~r}}function su(e){if($&6)throw Error(w(327));En();var t=Eo(e,0);if(!(t&1))return ke(e,X()),null;var n=Uo(e,t);if(e.tag!==0&&n===2){var r=yl(e);r!==0&&(t=r,n=Ql(e,r))}if(n===1)throw n=Pr,Wt(e,0),wt(e,t),ke(e,X()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,bt(e,ge,nt),ke(e,X()),null}function Us(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(Tn=X()+500,ri&&$t())}}function en(e){St!==null&&St.tag===0&&!($&6)&&En();var t=$;$|=1;var n=Oe.transition,r=A;try{if(Oe.transition=null,A=1,e)return e()}finally{A=r,Oe.transition=n,$=t,!($&6)&&$t()}}function Vs(){Ce=vn.current,H(vn)}function Wt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Nf(n)),J!==null)for(n=J.return;n!==null;){var r=n;switch(js(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Po();break;case 3:Pn(),H(xe),H(ce),Rs();break;case 5:Ts(r);break;case 4:Pn();break;case 13:H(W);break;case 19:H(W);break;case 10:Ns(r.type._context);break;case 22:case 23:Vs()}n=n.return}if(re=e,J=e=Mt(e.current,null),ie=Ce=t,ee=0,Pr=null,bs=si=qt=0,ge=cr=null,Ut!==null){for(t=0;t<Ut.length;t++)if(n=Ut[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Ut=null}return e}function W1(e,t){do{var n=J;try{if(_s(),uo.current=Do,Ao){for(var r=Q.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ao=!1}if(Jt=0,te=q=Q=null,ar=!1,_r=0,Fs.current=null,n===null||n.return===null){ee=1,Pr=t,J=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=ie,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var d=a,g=s,h=g.tag;if(!(g.mode&1)&&(h===0||h===11||h===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var y=Ka(l);if(y!==null){y.flags&=-257,Ga(y,l,s,i,t),y.mode&1&&Ya(i,d,t),t=y,a=d;var x=t.updateQueue;if(x===null){var S=new Set;S.add(a),t.updateQueue=S}else x.add(a);break e}else{if(!(t&1)){Ya(i,d,t),Bs();break e}a=Error(w(426))}}else if(V&&s.mode&1){var T=Ka(l);if(T!==null){!(T.flags&65536)&&(T.flags|=256),Ga(T,l,s,i,t),Es(Mn(a,s));break e}}i=a=Mn(a,s),ee!==4&&(ee=2),cr===null?cr=[i]:cr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=z1(i,a,t);ba(i,f);break e;case 1:s=a;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(zt===null||!zt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=P1(i,s,t);ba(i,v);break e}}i=i.return}while(i!==null)}K1(n)}catch(k){t=k,J===n&&n!==null&&(J=n=n.return);continue}break}while(1)}function Q1(){var e=Fo.current;return Fo.current=Do,e===null?Do:e}function Bs(){(ee===0||ee===3||ee===2)&&(ee=4),re===null||!(qt&268435455)&&!(si&268435455)||wt(re,ie)}function Uo(e,t){var n=$;$|=2;var r=Q1();(re!==e||ie!==t)&&(nt=null,Wt(e,t));do try{Jf();break}catch(o){W1(e,o)}while(1);if(_s(),$=n,Fo.current=r,J!==null)throw Error(w(261));return re=null,ie=0,ee}function Jf(){for(;J!==null;)Y1(J)}function qf(){for(;J!==null&&!jd();)Y1(J)}function Y1(e){var t=X1(e.alternate,e,Ce);e.memoizedProps=e.pendingProps,t===null?K1(e):J=t,Fs.current=null}function K1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Qf(n,t),n!==null){n.flags&=32767,J=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ee=6,J=null;return}}else if(n=Wf(n,t,Ce),n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);ee===0&&(ee=5)}function bt(e,t,n){var r=A,o=Oe.transition;try{Oe.transition=null,A=1,ep(e,t,n,r)}finally{Oe.transition=o,A=r}return null}function ep(e,t,n,r){do En();while(St!==null);if($&6)throw Error(w(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Id(e,i),e===re&&(J=re=null,ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||eo||(eo=!0,Z1(jo,function(){return En(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Oe.transition,Oe.transition=null;var l=A;A=1;var s=$;$|=4,Fs.current=null,Kf(e,n),U1(n,e),wf(El),Co=!!jl,El=jl=null,e.current=n,Gf(n),Ed(),$=s,A=l,Oe.transition=i}else e.current=n;if(eo&&(eo=!1,St=e,Ho=o),i=e.pendingLanes,i===0&&(zt=null),Nd(n.stateNode),ke(e,X()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(bo)throw bo=!1,e=Bl,Bl=null,e;return Ho&1&&e.tag!==0&&En(),i=e.pendingLanes,i&1?e===Wl?dr++:(dr=0,Wl=e):dr=0,$t(),null}function En(){if(St!==null){var e=Nc(Ho),t=Oe.transition,n=A;try{if(Oe.transition=null,A=16>e?16:e,St===null)var r=!1;else{if(e=St,St=null,Ho=0,$&6)throw Error(w(331));var o=$;for($|=4,_=e.current;_!==null;){var i=_,l=i.child;if(_.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var d=s[a];for(_=d;_!==null;){var g=_;switch(g.tag){case 0:case 11:case 15:ur(8,g,i)}var h=g.child;if(h!==null)h.return=g,_=h;else for(;_!==null;){g=_;var m=g.sibling,y=g.return;if(F1(g),g===d){_=null;break}if(m!==null){m.return=y,_=m;break}_=y}}}var x=i.alternate;if(x!==null){var S=x.child;if(S!==null){x.child=null;do{var T=S.sibling;S.sibling=null,S=T}while(S!==null)}}_=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,_=l;else e:for(;_!==null;){if(i=_,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ur(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,_=f;break e}_=i.return}}var c=e.current;for(_=c;_!==null;){l=_;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,_=p;else e:for(l=c;_!==null;){if(s=_,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:li(9,s)}}catch(k){G(s,s.return,k)}if(s===l){_=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,_=v;break e}_=s.return}}if($=o,$t(),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(Jo,e)}catch{}r=!0}return r}finally{A=n,Oe.transition=t}}return!1}function au(e,t,n){t=Mn(n,t),t=z1(e,t,1),e=Nt(e,t,1),t=fe(),e!==null&&(Rr(e,1,t),ke(e,t))}function G(e,t,n){if(e.tag===3)au(e,e,n);else for(;t!==null;){if(t.tag===3){au(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zt===null||!zt.has(r))){e=Mn(n,e),e=P1(t,e,1),t=Nt(t,e,1),e=fe(),t!==null&&(Rr(t,1,e),ke(t,e));break}}t=t.return}}function tp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=fe(),e.pingedLanes|=e.suspendedLanes&n,re===e&&(ie&n)===n&&(ee===4||ee===3&&(ie&130023424)===ie&&500>X()-Hs?Wt(e,0):bs|=n),ke(e,t)}function G1(e,t){t===0&&(e.mode&1?(t=Br,Br<<=1,!(Br&130023424)&&(Br=4194304)):t=1);var n=fe();e=ct(e,t),e!==null&&(Rr(e,t,n),ke(e,n))}function np(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),G1(e,n)}function rp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),G1(e,n)}var X1;X1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xe.current)ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ve=!1,Bf(e,t,n);ve=!!(e.flags&131072)}else ve=!1,V&&t.flags&1048576&&qc(t,Ro,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;fo(e,t),e=t.pendingProps;var o=_n(t,ce.current);jn(t,n),o=Ls(null,t,r,e,o,n);var i=$s();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,we(r)?(i=!0,Mo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ps(t),o.updater=oi,t.stateNode=o,o._reactInternals=t,Il(t,r,e,n),t=Ol(null,t,r,!0,i,n)):(t.tag=0,V&&i&&Ss(t),de(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(fo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=ip(r),e=He(r,e),o){case 0:t=$l(null,t,r,e,n);break e;case 1:t=Ja(null,t,r,e,n);break e;case 11:t=Xa(null,t,r,e,n);break e;case 14:t=Za(null,t,r,He(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),$l(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),Ja(e,t,r,o,n);case 3:e:{if(I1(t),e===null)throw Error(w(387));r=t.pendingProps,i=t.memoizedState,o=i.element,r1(e,t),$o(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Mn(Error(w(423)),t),t=qa(e,t,r,n,o);break e}else if(r!==o){o=Mn(Error(w(424)),t),t=qa(e,t,r,n,o);break e}else for(_e=_t(t.stateNode.containerInfo.firstChild),Ne=t,V=!0,Ve=null,n=s1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Nn(),r===o){t=dt(e,t,n);break e}de(e,t,r,n)}t=t.child}return t;case 5:return a1(t),e===null&&Ml(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Cl(r,o)?l=null:i!==null&&Cl(r,i)&&(t.flags|=32),R1(e,t),de(e,t,l,n),t.child;case 6:return e===null&&Ml(t),null;case 13:return L1(e,t,n);case 4:return Ms(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=zn(t,null,r,n):de(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),Xa(e,t,r,o,n);case 7:return de(e,t,t.pendingProps,n),t.child;case 8:return de(e,t,t.pendingProps.children,n),t.child;case 12:return de(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,D(Io,r._currentValue),r._currentValue=l,i!==null)if(Ye(i.value,l)){if(i.children===o.children&&!xe.current){t=dt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=st(-1,n&-n),a.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?a.next=a:(a.next=g.next,g.next=a),d.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Tl(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(w(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Tl(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}de(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,jn(t,n),o=Ae(o),r=r(o),t.flags|=1,de(e,t,r,n),t.child;case 14:return r=t.type,o=He(r,t.pendingProps),o=He(r.type,o),Za(e,t,r,o,n);case 15:return M1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),fo(e,t),t.tag=1,we(r)?(e=!0,Mo(t)):e=!1,jn(t,n),i1(t,r,o),Il(t,r,o,n),Ol(null,t,r,!0,e,n);case 19:return $1(e,t,n);case 22:return T1(e,t,n)}throw Error(w(156,t.tag))};function Z1(e,t){return jc(e,t)}function op(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $e(e,t,n,r){return new op(e,t,n,r)}function Ws(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ip(e){if(typeof e=="function")return Ws(e)?1:0;if(e!=null){if(e=e.$$typeof,e===cs)return 11;if(e===ds)return 14}return 2}function Mt(e,t){var n=e.alternate;return n===null?(n=$e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function mo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Ws(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case sn:return Qt(n.children,o,i,t);case us:l=8,o|=8;break;case rl:return e=$e(12,n,t,o|2),e.elementType=rl,e.lanes=i,e;case ol:return e=$e(13,n,t,o),e.elementType=ol,e.lanes=i,e;case il:return e=$e(19,n,t,o),e.elementType=il,e.lanes=i,e;case lc:return ai(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case oc:l=10;break e;case ic:l=9;break e;case cs:l=11;break e;case ds:l=14;break e;case vt:l=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=$e(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Qt(e,t,n,r){return e=$e(7,e,r,t),e.lanes=n,e}function ai(e,t,n,r){return e=$e(22,e,r,t),e.elementType=lc,e.lanes=n,e.stateNode={isHidden:!1},e}function Qi(e,t,n){return e=$e(6,e,null,t),e.lanes=n,e}function Yi(e,t,n){return t=$e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function lp(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ni(0),this.expirationTimes=Ni(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ni(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Qs(e,t,n,r,o,i,l,s,a){return e=new lp(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=$e(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ps(i),e}function sp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ln,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function J1(e){if(!e)return Rt;e=e._reactInternals;e:{if(nn(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(we(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(we(n))return Zc(e,n,t)}return t}function q1(e,t,n,r,o,i,l,s,a){return e=Qs(n,r,!0,e,o,i,l,s,a),e.context=J1(null),n=e.current,r=fe(),o=Pt(n),i=st(r,o),i.callback=t??null,Nt(n,i,o),e.current.lanes=o,Rr(e,o,r),ke(e,r),e}function ui(e,t,n,r){var o=t.current,i=fe(),l=Pt(o);return n=J1(n),t.context===null?t.context=n:t.pendingContext=n,t=st(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Nt(o,t,l),e!==null&&(We(e,o,l,i),ao(e,o,l)),l}function Vo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function uu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ys(e,t){uu(e,t),(e=e.alternate)&&uu(e,t)}function ap(){return null}var e0=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ks(e){this._internalRoot=e}ci.prototype.render=Ks.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));ui(e,t,null,null)};ci.prototype.unmount=Ks.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;en(function(){ui(null,e,null,null)}),t[ut]=null}};function ci(e){this._internalRoot=e}ci.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xt.length&&t!==0&&t<xt[n].priority;n++);xt.splice(n,0,e),n===0&&Rc(e)}};function Gs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function di(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cu(){}function up(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var d=Vo(l);i.call(d)}}var l=q1(t,r,e,0,null,!1,!1,"",cu);return e._reactRootContainer=l,e[ut]=l.current,kr(e.nodeType===8?e.parentNode:e),en(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var d=Vo(a);s.call(d)}}var a=Qs(e,0,!1,null,null,!1,!1,"",cu);return e._reactRootContainer=a,e[ut]=a.current,kr(e.nodeType===8?e.parentNode:e),en(function(){ui(t,a,n,r)}),a}function fi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=Vo(l);s.call(a)}}ui(t,l,e,o)}else l=up(n,t,e,o,r);return Vo(l)}zc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=er(t.pendingLanes);n!==0&&(hs(t,n|1),ke(t,X()),!($&6)&&(Tn=X()+500,$t()))}break;case 13:en(function(){var r=ct(e,1);if(r!==null){var o=fe();We(r,e,1,o)}}),Ys(e,1)}};ms=function(e){if(e.tag===13){var t=ct(e,134217728);if(t!==null){var n=fe();We(t,e,134217728,n)}Ys(e,134217728)}};Pc=function(e){if(e.tag===13){var t=Pt(e),n=ct(e,t);if(n!==null){var r=fe();We(n,e,t,r)}Ys(e,t)}};Mc=function(){return A};Tc=function(e,t){var n=A;try{return A=e,t()}finally{A=n}};ml=function(e,t,n){switch(t){case"input":if(al(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ni(r);if(!o)throw Error(w(90));ac(r),al(r,o)}}}break;case"textarea":cc(e,n);break;case"select":t=n.value,t!=null&&xn(e,!!n.multiple,t,!1)}};vc=Us;yc=en;var cp={usingClientEntryPoint:!1,Events:[Lr,dn,ni,mc,gc,Us]},Xn={findFiberByHostInstance:Ht,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},dp={bundleType:Xn.bundleType,version:Xn.version,rendererPackageName:Xn.rendererPackageName,rendererConfig:Xn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=kc(e),e===null?null:e.stateNode},findFiberByHostInstance:Xn.findFiberByHostInstance||ap,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var to=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!to.isDisabled&&to.supportsFiber)try{Jo=to.inject(dp),qe=to}catch{}}Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cp;Pe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gs(t))throw Error(w(200));return sp(e,t,null,n)};Pe.createRoot=function(e,t){if(!Gs(e))throw Error(w(299));var n=!1,r="",o=e0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Qs(e,1,!1,null,null,n,!1,r,o),e[ut]=t.current,kr(e.nodeType===8?e.parentNode:e),new Ks(t)};Pe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=kc(t),e=e===null?null:e.stateNode,e};Pe.flushSync=function(e){return en(e)};Pe.hydrate=function(e,t,n){if(!di(t))throw Error(w(200));return fi(null,e,t,!0,n)};Pe.hydrateRoot=function(e,t,n){if(!Gs(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=e0;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=q1(t,null,e,1,n??null,o,!1,i,l),e[ut]=t.current,kr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ci(t)};Pe.render=function(e,t,n){if(!di(t))throw Error(w(200));return fi(null,e,t,!1,n)};Pe.unmountComponentAtNode=function(e){if(!di(e))throw Error(w(40));return e._reactRootContainer?(en(function(){fi(null,null,e,!1,function(){e._reactRootContainer=null,e[ut]=null})}),!0):!1};Pe.unstable_batchedUpdates=Us;Pe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!di(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return fi(e,t,n,!1,r)};Pe.version="18.2.0-next-9e3b772b8-20220608";function t0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t0)}catch(e){console.error(e)}}t0(),qu.exports=Pe;var fp=qu.exports,du=fp;tl.createRoot=du.createRoot,tl.hydrateRoot=du.hydrateRoot;var n0={exports:{}},r0={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rn=I;function pp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var hp=typeof Object.is=="function"?Object.is:pp,mp=Rn.useState,gp=Rn.useEffect,vp=Rn.useLayoutEffect,yp=Rn.useDebugValue;function xp(e,t){var n=t(),r=mp({inst:{value:n,getSnapshot:t}}),o=r[0].inst,i=r[1];return vp(function(){o.value=n,o.getSnapshot=t,Ki(o)&&i({inst:o})},[e,n,t]),gp(function(){return Ki(o)&&i({inst:o}),e(function(){Ki(o)&&i({inst:o})})},[e]),yp(n),n}function Ki(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!hp(e,n)}catch{return!0}}function wp(e,t){return t()}var kp=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?wp:xp;r0.useSyncExternalStore=Rn.useSyncExternalStore!==void 0?Rn.useSyncExternalStore:kp;n0.exports=r0;var Sp=n0.exports;const{useEffect:jp,useLayoutEffect:Ep,useRef:Cp,useInsertionEffect:_p}=td,Np=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",zp=Np?Ep:jp,Pp=_p||zp,o0=e=>{const t=Cp([e,(...n)=>t[0](...n)]).current;return Pp(()=>{t[0]=e}),t[1]},Mp=(e="",t=location.pathname)=>t.toLowerCase().indexOf(e.toLowerCase())?"~"+t:t.slice(e.length)||"/",Tp=(e,t="")=>e[0]==="~"?e.slice(1):t+e,Rp="popstate",Xs="pushState",Zs="replaceState",Ip="hashchange",fu=[Rp,Xs,Zs,Ip],Lp=e=>{for(const t of fu)addEventListener(t,e);return()=>{for(const t of fu)removeEventListener(t,e)}},$p=(e,t)=>Sp.useSyncExternalStore(Lp,e,t),pu=()=>location.pathname,Op=({ssrPath:e}={})=>$p(pu,e?()=>e:pu),Ap=(e,{replace:t=!1}={})=>history[t?Zs:Xs](null,"",e),Dp=(e={})=>[Mp(e.base,Op(e)),o0((t,n)=>Ap(Tp(t,e.base),n))];if(typeof history<"u")for(const e of[Xs,Zs]){const t=history[e];history[e]=function(){const n=t.apply(this,arguments),r=new Event(e);return r.arguments=arguments,dispatchEvent(r),n}}function Fp(e=Hp){let t={};const n=r=>t[r]||(t[r]=e(r));return(r,o)=>{const{regexp:i,keys:l}=n(r||""),s=i.exec(o);return s?[!0,l.reduce((d,g,h)=>(d[g.name]=s[h+1],d),{})]:[!1,null]}}const hu=e=>e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),bp=(e,t,n)=>{let r=e?"((?:[^\\/]+?)(?:\\/(?:[^\\/]+?))*)":"([^\\/]+?)";return t&&n&&(r="(?:\\/"+r+")"),r+(t?"?":"")},Hp=e=>{const t=/:([A-Za-z0-9_]+)([?+*]?)/g;let n=null,r=0,o=[],i="";for(;(n=t.exec(e))!==null;){const[l,s,a]=n,d=a==="+"||a==="*",g=a==="?"||a==="*",h=g&&e[n.index-1]==="/"?1:0,m=e.substring(r,n.index-h);o.push({name:s}),r=t.lastIndex,i+=hu(m)+bp(d,g,h)}return i+=hu(e.substring(r)),{keys:o,regexp:new RegExp("^"+i+"(?:\\/)?$","i")}},Up={hook:Dp,matcher:Fp(),base:""},Vp=I.createContext(Up),pi=()=>I.useContext(Vp),hi=e=>e.hook(e),i0=()=>hi(pi()),Bp=e=>{const t=pi(),[n]=hi(t);return t.matcher(e,n)},Wp=I.createContext({params:{}}),mu=(e,t)=>I.createElement(Wp.Provider,{value:{params:e},children:t}),Zn=({path:e,match:t,component:n,children:r})=>{const o=Bp(e),[i,l]=t||o;return i?n?mu(l,I.createElement(n,{params:l})):mu(l,typeof r=="function"?r(l):r):null},Je=I.forwardRef((e,t)=>{const n=pi(),[,r]=hi(n),{to:o,href:i=o,children:l,onClick:s}=e,a=o0(h=>{h.ctrlKey||h.metaKey||h.altKey||h.shiftKey||h.button!==0||(s&&s(h),h.defaultPrevented||(h.preventDefault(),r(o||i,e)))}),d={href:i[0]==="~"?i.slice(1):n.base+i,onClick:a,to:null,ref:t},g=I.isValidElement(l)?l:I.createElement("a",e);return I.cloneElement(g,d)}),Kl=e=>Array.isArray(e)?[].concat(...e.map(t=>t&&t.type===I.Fragment?Kl(t.props.children):Kl(t))):[e],Qp=({children:e,location:t})=>{const n=pi(),r=n.matcher,[o]=hi(n);for(const i of Kl(e)){let l=0;if(I.isValidElement(i)&&(l=i.props.path?r(i.props.path,t||o):[!0,{}])[0])return I.cloneElement(i,{match:l})}return null};var ye=function(){return ye=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ye.apply(this,arguments)};function Bo(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var b="-ms-",fr="-moz-",O="-webkit-",l0="comm",mi="rule",Js="decl",Yp="@import",s0="@keyframes",Kp="@layer",Gp=Math.abs,qs=String.fromCharCode,Gl=Object.assign;function Xp(e,t){return ne(e,0)^45?(((t<<2^ne(e,0))<<2^ne(e,1))<<2^ne(e,2))<<2^ne(e,3):0}function a0(e){return e.trim()}function rt(e,t){return(e=t.exec(e))?e[0]:e}function M(e,t,n){return e.replace(t,n)}function go(e,t){return e.indexOf(t)}function ne(e,t){return e.charCodeAt(t)|0}function In(e,t,n){return e.slice(t,n)}function Xe(e){return e.length}function u0(e){return e.length}function nr(e,t){return t.push(e),e}function Zp(e,t){return e.map(t).join("")}function gu(e,t){return e.filter(function(n){return!rt(n,t)})}var gi=1,Ln=1,c0=0,Fe=0,Z=0,Hn="";function vi(e,t,n,r,o,i,l,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:gi,column:Ln,length:l,return:"",siblings:s}}function gt(e,t){return Gl(vi("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function on(e){for(;e.root;)e=gt(e.root,{children:[e]});nr(e,e.siblings)}function Jp(){return Z}function qp(){return Z=Fe>0?ne(Hn,--Fe):0,Ln--,Z===10&&(Ln=1,gi--),Z}function Qe(){return Z=Fe<c0?ne(Hn,Fe++):0,Ln++,Z===10&&(Ln=1,gi++),Z}function Yt(){return ne(Hn,Fe)}function vo(){return Fe}function yi(e,t){return In(Hn,e,t)}function Xl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function eh(e){return gi=Ln=1,c0=Xe(Hn=e),Fe=0,[]}function th(e){return Hn="",e}function Gi(e){return a0(yi(Fe-1,Zl(e===91?e+2:e===40?e+1:e)))}function nh(e){for(;(Z=Yt())&&Z<33;)Qe();return Xl(e)>2||Xl(Z)>3?"":" "}function rh(e,t){for(;--t&&Qe()&&!(Z<48||Z>102||Z>57&&Z<65||Z>70&&Z<97););return yi(e,vo()+(t<6&&Yt()==32&&Qe()==32))}function Zl(e){for(;Qe();)switch(Z){case e:return Fe;case 34:case 39:e!==34&&e!==39&&Zl(Z);break;case 40:e===41&&Zl(e);break;case 92:Qe();break}return Fe}function oh(e,t){for(;Qe()&&e+Z!==47+10;)if(e+Z===42+42&&Yt()===47)break;return"/*"+yi(t,Fe-1)+"*"+qs(e===47?e:Qe())}function ih(e){for(;!Xl(Yt());)Qe();return yi(e,Fe)}function lh(e){return th(yo("",null,null,null,[""],e=eh(e),0,[0],e))}function yo(e,t,n,r,o,i,l,s,a){for(var d=0,g=0,h=l,m=0,y=0,x=0,S=1,T=1,f=1,c=0,p="",v=o,k=i,E=r,j=p;T;)switch(x=c,c=Qe()){case 40:if(x!=108&&ne(j,h-1)==58){go(j+=M(Gi(c),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:j+=Gi(c);break;case 9:case 10:case 13:case 32:j+=nh(x);break;case 92:j+=rh(vo()-1,7);continue;case 47:switch(Yt()){case 42:case 47:nr(sh(oh(Qe(),vo()),t,n,a),a);break;default:j+="/"}break;case 123*S:s[d++]=Xe(j)*f;case 125*S:case 59:case 0:switch(c){case 0:case 125:T=0;case 59+g:f==-1&&(j=M(j,/\f/g,"")),y>0&&Xe(j)-h&&nr(y>32?yu(j+";",r,n,h-1,a):yu(M(j," ","")+";",r,n,h-2,a),a);break;case 59:j+=";";default:if(nr(E=vu(j,t,n,d,g,o,s,p,v=[],k=[],h,i),i),c===123)if(g===0)yo(j,t,E,E,v,i,h,s,k);else switch(m===99&&ne(j,3)===110?100:m){case 100:case 108:case 109:case 115:yo(e,E,E,r&&nr(vu(e,E,E,0,0,o,s,p,o,v=[],h,k),k),o,k,h,s,r?v:k);break;default:yo(j,E,E,E,[""],k,0,s,k)}}d=g=y=0,S=f=1,p=j="",h=l;break;case 58:h=1+Xe(j),y=x;default:if(S<1){if(c==123)--S;else if(c==125&&S++==0&&qp()==125)continue}switch(j+=qs(c),c*S){case 38:f=g>0?1:(j+="\f",-1);break;case 44:s[d++]=(Xe(j)-1)*f,f=1;break;case 64:Yt()===45&&(j+=Gi(Qe())),m=Yt(),g=h=Xe(p=j+=ih(vo())),c++;break;case 45:x===45&&Xe(j)==2&&(S=0)}}return i}function vu(e,t,n,r,o,i,l,s,a,d,g,h){for(var m=o-1,y=o===0?i:[""],x=u0(y),S=0,T=0,f=0;S<r;++S)for(var c=0,p=In(e,m+1,m=Gp(T=l[S])),v=e;c<x;++c)(v=a0(T>0?y[c]+" "+p:M(p,/&\f/g,y[c])))&&(a[f++]=v);return vi(e,t,n,o===0?mi:s,a,d,g,h)}function sh(e,t,n,r){return vi(e,t,n,l0,qs(Jp()),In(e,2,-2),0,r)}function yu(e,t,n,r,o){return vi(e,t,n,Js,In(e,0,r),In(e,r+1,-1),r,o)}function d0(e,t,n){switch(Xp(e,t)){case 5103:return O+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return O+e+e;case 4789:return fr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return O+e+fr+e+b+e+e;case 5936:switch(ne(e,t+11)){case 114:return O+e+b+M(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return O+e+b+M(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return O+e+b+M(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return O+e+b+e+e;case 6165:return O+e+b+"flex-"+e+e;case 5187:return O+e+M(e,/(\w+).+(:[^]+)/,O+"box-$1$2"+b+"flex-$1$2")+e;case 5443:return O+e+b+"flex-item-"+M(e,/flex-|-self/g,"")+(rt(e,/flex-|baseline/)?"":b+"grid-row-"+M(e,/flex-|-self/g,""))+e;case 4675:return O+e+b+"flex-line-pack"+M(e,/align-content|flex-|-self/g,"")+e;case 5548:return O+e+b+M(e,"shrink","negative")+e;case 5292:return O+e+b+M(e,"basis","preferred-size")+e;case 6060:return O+"box-"+M(e,"-grow","")+O+e+b+M(e,"grow","positive")+e;case 4554:return O+M(e,/([^-])(transform)/g,"$1"+O+"$2")+e;case 6187:return M(M(M(e,/(zoom-|grab)/,O+"$1"),/(image-set)/,O+"$1"),e,"")+e;case 5495:case 3959:return M(e,/(image-set\([^]*)/,O+"$1$`$1");case 4968:return M(M(e,/(.+:)(flex-)?(.*)/,O+"box-pack:$3"+b+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+O+e+e;case 4200:if(!rt(e,/flex-|baseline/))return b+"grid-column-align"+In(e,t)+e;break;case 2592:case 3360:return b+M(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,rt(r.props,/grid-\w+-end/)})?~go(e+(n=n[t].value),"span")?e:b+M(e,"-start","")+e+b+"grid-row-span:"+(~go(n,"span")?rt(n,/\d+/):+rt(n,/\d+/)-+rt(e,/\d+/))+";":b+M(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return rt(r.props,/grid-\w+-start/)})?e:b+M(M(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return M(e,/(.+)-inline(.+)/,O+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xe(e)-1-t>6)switch(ne(e,t+1)){case 109:if(ne(e,t+4)!==45)break;case 102:return M(e,/(.+:)(.+)-([^]+)/,"$1"+O+"$2-$3$1"+fr+(ne(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~go(e,"stretch")?d0(M(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return M(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,s,a,d){return b+o+":"+i+d+(l?b+o+"-span:"+(s?a:+a-+i)+d:"")+e});case 4949:if(ne(e,t+6)===121)return M(e,":",":"+O)+e;break;case 6444:switch(ne(e,ne(e,14)===45?18:11)){case 120:return M(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+O+(ne(e,14)===45?"inline-":"")+"box$3$1"+O+"$2$3$1"+b+"$2box$3")+e;case 100:return M(e,":",":"+b)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return M(e,"scroll-","scroll-snap-")+e}return e}function Wo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function ah(e,t,n,r){switch(e.type){case Kp:if(e.children.length)break;case Yp:case Js:return e.return=e.return||e.value;case l0:return"";case s0:return e.return=e.value+"{"+Wo(e.children,r)+"}";case mi:if(!Xe(e.value=e.props.join(",")))return""}return Xe(n=Wo(e.children,r))?e.return=e.value+"{"+n+"}":""}function uh(e){var t=u0(e);return function(n,r,o,i){for(var l="",s=0;s<t;s++)l+=e[s](n,r,o,i)||"";return l}}function ch(e){return function(t){t.root||(t=t.return)&&e(t)}}function dh(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Js:e.return=d0(e.value,e.length,n);return;case s0:return Wo([gt(e,{value:M(e.value,"@","@"+O)})],r);case mi:if(e.length)return Zp(n=e.props,function(o){switch(rt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":on(gt(e,{props:[M(o,/:(read-\w+)/,":"+fr+"$1")]})),on(gt(e,{props:[o]})),Gl(e,{props:gu(n,r)});break;case"::placeholder":on(gt(e,{props:[M(o,/:(plac\w+)/,":"+O+"input-$1")]})),on(gt(e,{props:[M(o,/:(plac\w+)/,":"+fr+"$1")]})),on(gt(e,{props:[M(o,/:(plac\w+)/,b+"input-$1")]})),on(gt(e,{props:[o]})),Gl(e,{props:gu(n,r)});break}return""})}}var fh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},$n=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",ea=typeof window<"u"&&"HTMLElement"in window,ph=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),xi=Object.freeze([]),On=Object.freeze({});function hh(e,t,n){return n===void 0&&(n=On),e.theme!==n.theme&&e.theme||t||n.theme}var f0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),mh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,gh=/(^-|-$)/g;function xu(e){return e.replace(mh,"-").replace(gh,"")}var vh=/(a)(d)/gi,wu=function(e){return String.fromCharCode(e+(e>25?39:97))};function Jl(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=wu(t%52)+n;return(wu(t%52)+n).replace(vh,"$1-$2")}var Xi,yn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},p0=function(e){return yn(5381,e)};function yh(e){return Jl(p0(e)>>>0)}function xh(e){return e.displayName||e.name||"Component"}function Zi(e){return typeof e=="string"&&!0}var h0=typeof Symbol=="function"&&Symbol.for,m0=h0?Symbol.for("react.memo"):60115,wh=h0?Symbol.for("react.forward_ref"):60112,kh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Sh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},g0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},jh=((Xi={})[wh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Xi[m0]=g0,Xi);function ku(e){return("type"in(t=e)&&t.type.$$typeof)===m0?g0:"$$typeof"in e?jh[e.$$typeof]:kh;var t}var Eh=Object.defineProperty,Ch=Object.getOwnPropertyNames,Su=Object.getOwnPropertySymbols,_h=Object.getOwnPropertyDescriptor,Nh=Object.getPrototypeOf,ju=Object.prototype;function v0(e,t,n){if(typeof t!="string"){if(ju){var r=Nh(t);r&&r!==ju&&v0(e,r,n)}var o=Ch(t);Su&&(o=o.concat(Su(t)));for(var i=ku(e),l=ku(t),s=0;s<o.length;++s){var a=o[s];if(!(a in Sh||n&&n[a]||l&&a in l||i&&a in i)){var d=_h(t,a);try{Eh(e,a,d)}catch{}}}}return e}function An(e){return typeof e=="function"}function ta(e){return typeof e=="object"&&"styledComponentId"in e}function Bt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Eu(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Mr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ql(e,t,n){if(n===void 0&&(n=!1),!n&&!Mr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ql(e[r],t[r]);else if(Mr(t))for(var r in t)e[r]=ql(e[r],t[r]);return e}function na(e,t){Object.defineProperty(e,"toString",{value:t})}function Or(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var zh=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw Or(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),a=(l=0,n.length);l<a;l++)this.tag.insertRule(s,n[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,l=o;l<i;l++)n+="".concat(this.tag.getRule(l)).concat(`/*!sc*/
`);return n},e}(),xo=new Map,Qo=new Map,Ji=1,no=function(e){if(xo.has(e))return xo.get(e);for(;Qo.has(Ji);)Ji++;var t=Ji++;return xo.set(e,t),Qo.set(t,e),t},Ph=function(e,t){xo.set(e,t),Qo.set(t,e)},Mh="style[".concat($n,"][").concat("data-styled-version",'="').concat("6.0.8",'"]'),Th=new RegExp("^".concat($n,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Rh=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},Ih=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),o=[],i=0,l=r.length;i<l;i++){var s=r[i].trim();if(s){var a=s.match(Th);if(a){var d=0|parseInt(a[1],10),g=a[2];d!==0&&(Ph(g,d),Rh(e,g,a[3]),e.getTag().insertRules(d,o)),o.length=0}else o.push(s)}}};function Lh(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var y0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){var a=Array.from(s.querySelectorAll("style[".concat($n,"]")));return a[a.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute($n,"active"),r.setAttribute("data-styled-version","6.0.8");var l=Lh();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},$h=function(){function e(t){this.element=y0(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var l=r[o];if(l.ownerNode===n)return l}throw Or(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Oh=function(){function e(t){this.element=y0(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Ah=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Cu=ea,Dh={isServer:!ea,useCSSOMInjection:!ph},x0=function(){function e(t,n,r){t===void 0&&(t=On),n===void 0&&(n={});var o=this;this.options=ye(ye({},Dh),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ea&&Cu&&(Cu=!1,function(i){for(var l=document.querySelectorAll(Mh),s=0,a=l.length;s<a;s++){var d=l[s];d&&d.getAttribute($n)!=="active"&&(Ih(i,d),d.parentNode&&d.parentNode.removeChild(d))}}(this)),na(this,function(){return function(i){for(var l=i.getTag(),s=l.length,a="",d=function(h){var m=function(f){return Qo.get(f)}(h);if(m===void 0)return"continue";var y=i.names.get(m),x=l.getGroup(h);if(y===void 0||x.length===0)return"continue";var S="".concat($n,".g").concat(h,'[id="').concat(m,'"]'),T="";y!==void 0&&y.forEach(function(f){f.length>0&&(T+="".concat(f,","))}),a+="".concat(x).concat(S,'{content:"').concat(T,'"}').concat(`/*!sc*/
`)},g=0;g<s;g++)d(g);return a}(o)})}return e.registerId=function(t){return no(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ye(ye({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Ah(o):r?new $h(o):new Oh(o)}(this.options),new zh(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(no(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(no(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(no(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Fh=/&/g,bh=/^\s*\/\/.*$/gm;function w0(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=w0(n.children,t)),n})}function Hh(e){var t,n,r,o=e===void 0?On:e,i=o.options,l=i===void 0?On:i,s=o.plugins,a=s===void 0?xi:s,d=function(m,y,x){return x===n||x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):m},g=a.slice();g.push(function(m){m.type===mi&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(Fh,n).replace(r,d))}),l.prefix&&g.push(dh),g.push(ah);var h=function(m,y,x,S){y===void 0&&(y=""),x===void 0&&(x=""),S===void 0&&(S="&"),t=S,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var T=m.replace(bh,""),f=lh(x||y?"".concat(x," ").concat(y," { ").concat(T," }"):T);l.namespace&&(f=w0(f,l.namespace));var c=[];return Wo(f,uh(g.concat(ch(function(p){return c.push(p)})))),c};return h.hash=a.length?a.reduce(function(m,y){return y.name||Or(15),yn(m,y.name)},5381).toString():"",h}var Uh=new x0,es=Hh(),k0=Gt.createContext({shouldForwardProp:void 0,styleSheet:Uh,stylis:es});k0.Consumer;Gt.createContext(void 0);function _u(){return I.useContext(k0)}var Vh=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=es);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,na(this,function(){throw Or(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=es),this.name+t.hash},e}(),Bh=function(e){return e>="A"&&e<="Z"};function Nu(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Bh(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var S0=function(e){return e==null||e===!1||e===""},j0=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!S0(i)&&(Array.isArray(i)&&i.isCss||An(i)?r.push("".concat(Nu(o),":"),i,";"):Mr(i)?r.push.apply(r,Bo(Bo(["".concat(o," {")],j0(i),!1),["}"],!1)):r.push("".concat(Nu(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in fh||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Kt(e,t,n,r){if(S0(e))return[];if(ta(e))return[".".concat(e.styledComponentId)];if(An(e)){if(!An(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return Kt(o,t,n,r)}var i;return e instanceof Vh?n?(e.inject(n,r),[e.getName(r)]):[e]:Mr(e)?j0(e):Array.isArray(e)?Array.prototype.concat.apply(xi,e.map(function(l){return Kt(l,t,n,r)})):[e.toString()]}function Wh(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(An(n)&&!ta(n))return!1}return!0}var Qh=p0("6.0.8"),Yh=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Wh(t),this.componentId=n,this.baseHash=yn(Qh,n),this.baseStyle=r,x0.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Bt(o,this.staticRulesId);else{var i=Eu(Kt(this.rules,t,n,r)),l=Jl(yn(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,l)){var s=r(i,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,s)}o=Bt(o,l),this.staticRulesId=l}else{for(var a=yn(this.baseHash,r.hash),d="",g=0;g<this.rules.length;g++){var h=this.rules[g];if(typeof h=="string")d+=h;else if(h){var m=Eu(Kt(h,t,n,r));a=yn(a,m+g),d+=m}}if(d){var y=Jl(a>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(d,".".concat(y),void 0,this.componentId)),o=Bt(o,y)}}return o},e}(),E0=Gt.createContext(void 0);E0.Consumer;var qi={};function Kh(e,t,n){var r=ta(e),o=e,i=!Zi(e),l=t.attrs,s=l===void 0?xi:l,a=t.componentId,d=a===void 0?function(p,v){var k=typeof p!="string"?"sc":xu(p);qi[k]=(qi[k]||0)+1;var E="".concat(k,"-").concat(yh("6.0.8"+k+qi[k]));return v?"".concat(v,"-").concat(E):E}(t.displayName,t.parentComponentId):a,g=t.displayName;g===void 0&&function(p){return Zi(p)?"styled.".concat(p):"Styled(".concat(xh(p),")")}(e);var h=t.displayName&&t.componentId?"".concat(xu(t.displayName),"-").concat(t.componentId):t.componentId||d,m=r&&o.attrs?o.attrs.concat(s).filter(Boolean):s,y=t.shouldForwardProp;if(r&&o.shouldForwardProp){var x=o.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;y=function(p,v){return x(p,v)&&S(p,v)}}else y=x}var T=new Yh(n,h,r?o.componentStyle:void 0);function f(p,v){return function(k,E,j){var N=k.attrs,B=k.componentStyle,R=k.defaultProps,Se=k.foldedComponentIds,Ot=k.styledComponentId,At=k.target,Ar=Gt.useContext(E0),wi=_u(),Dt=k.shouldForwardProp||wi.shouldForwardProp,Te=function(tt,je,pt){for(var Ee,Re=ye(ye({},je),{className:void 0,theme:pt}),ki=0;ki<tt.length;ki+=1){var Dr=An(Ee=tt[ki])?Ee(Re):Ee;for(var ht in Dr)Re[ht]=ht==="className"?Bt(Re[ht],Dr[ht]):ht==="style"?ye(ye({},Re[ht]),Dr[ht]):Dr[ht]}return je.className&&(Re.className=Bt(Re.className,je.className)),Re}(N,E,hh(E,Ar,R)||On),C=Te.as||At,z={};for(var P in Te)Te[P]===void 0||P[0]==="$"||P==="as"||P==="theme"||(P==="forwardedAs"?z.as=Te.forwardedAs:Dt&&!Dt(P,C)||(z[P]=Te[P]));var U=function(tt,je){var pt=_u(),Ee=tt.generateAndInjectStyles(je,pt.styleSheet,pt.stylis);return Ee}(B,Te),K=Bt(Se,Ot);return U&&(K+=" "+U),Te.className&&(K+=" "+Te.className),z[Zi(C)&&!f0.has(C)?"class":"className"]=K,z.ref=j,I.createElement(C,z)}(c,p,v)}var c=Gt.forwardRef(f);return c.attrs=m,c.componentStyle=T,c.shouldForwardProp=y,c.foldedComponentIds=r?Bt(o.foldedComponentIds,o.styledComponentId):"",c.styledComponentId=h,c.target=r?o.target:e,Object.defineProperty(c,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?function(v){for(var k=[],E=1;E<arguments.length;E++)k[E-1]=arguments[E];for(var j=0,N=k;j<N.length;j++)ql(v,N[j],!0);return v}({},o.defaultProps,p):p}}),na(c,function(){return".".concat(c.styledComponentId)}),i&&v0(c,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),c}function zu(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Pu=function(e){return Object.assign(e,{isCss:!0})};function Gh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(An(e)||Mr(e)){var r=e;return Pu(Kt(zu(xi,Bo([r],t,!0))))}var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?Kt(o):Pu(Kt(zu(o,t)))}function ts(e,t,n){if(n===void 0&&(n=On),!t)throw Or(1,t);var r=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,n,Gh.apply(void 0,Bo([o],i,!1)))};return r.attrs=function(o){return ts(e,t,ye(ye({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return ts(e,t,ye(ye({},n),o))},r}var C0=function(e){return ts(Kh,e)},me=C0;f0.forEach(function(e){me[e]=C0(e)});const Xh=me.div`
  --main-accent: linear-gradient(
    27deg,
    #ffc593 0%,
    #bc7198 43.29%,
    #5a77ff 83.33%
  );
  --black: 0, 0, 0;
  --light-gray: 223, 223, 223;
  --white: 255, 255, 255;
  --impure-white: 245, 245, 245;

  background: rgb(var(--white));
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .fs-h1,
  .fs-h2,
  .fs-h3,
  .fs-h4,
  .fs-body-1,
  .fs-body-2 {
    font-family: demonic-sans;
  }

  .fs-h1,
  .fs-h2,
  .fs-h3,
  .fs-h4 {
    font-weight: 700;
  }

  .fs-h1,
  .fs-h4 {
    text-transform: uppercase;
  }

  .fs-body-1,
  .fs-body-2 {
    font-weight: 400;
  }

  .fs-body-1 {
    font-size: 15px;
    line-height: 25px;
  }

  .fs-body-2 {
    font-size: 13px;
  }

  .fs-h1 {
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 4px;

    @media screen and (max-width: 700px) {
      &.scaled {
        font-size: 32px;
        line-height: 40px;
        letter-spacing: 3px;
      }
    }
  }

  .fs-h2 {
    font-size: 24px;
    line-height: 25px;
  }

  .fs-h3 {
    font-size: 18px;
    line-height: 25px;
  }

  .fs-h4 {
    font-size: 12px;
    letter-spacing: 2px;
  }

  .button-primary,
  .button-secondary {
    text-decoration: none;
    text-align: center;
    display: block;
  }

  .button-primary {
    padding: 12px 24px;
    transition: background-color 0.33s, color 0.33s;
    max-width: 325px;

    &.black {
      background-color: rgb(var(--black));
      color: rgb(var(--white));

      @media (hover: hover) {
        &:hover {
          background-color: rgb(var(--light-gray));
          color: rgb(var(--black));
        }
      }
    }

    &.white {
      background-color: rgb(var(--white));
      color: rgb(var(--black));

      @media (hover: hover) {
        &:hover {
          background-color: rgb(var(--light-gray));
        }
      }
    }
  }

  .button-secondary {
    display: flex;
    gap: 16px;

    @media (hover: hover) {
      &:hover {
        span::after {
          opacity: 1;
        }
      }

      span {
        position: relative;

        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          opacity: 0;
          transition: opacity 0.33s;
        }
      }
    }

    &.black {
      color: rgb(var(--black));

      @media (hover: hover) {
        span::after {
          background: rgb(var(--black));
        }
      }

      g {
        stroke: rgb(var(--black));
      }
    }

    &.white {
      color: rgb(var(--white));

      @media (hover: hover) {
        span::after {
          background: rgb(var(--white));
        }
      }

      g {
        stroke: rgb(var(--white));
      }
    }
  }

  .not-found {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    padding: 50px;

    .container {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  }
`;function Un(){return u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"43",height:"14",children:u.jsx("g",{fill:"none",fillRule:"evenodd",children:u.jsx("path",{d:"M0 7h41.864M35.428 1l6 6-6 6"})})})}const Zh="/fem_photosnap/assets/create-and-share-a9b81965.jpg",Jh="/fem_photosnap/assets/create-and-share-74decede.jpg",qh="/fem_photosnap/assets/create-and-share-46a25115.jpg",em="/fem_photosnap/assets/beautiful-stories-74ffa450.jpg",tm="/fem_photosnap/assets/beautiful-stories-788ca07e.jpg",nm="/fem_photosnap/assets/beautiful-stories-66f478e2.jpg",rm="/fem_photosnap/assets/designed-for-everyone-6f40d45d.jpg",om="/fem_photosnap/assets/designed-for-everyone-86a90372.jpg",im="/fem_photosnap/assets/designed-for-everyone-f0ac18cc.jpg",Yo="/fem_photosnap/assets/mountains-bc974a86.jpg",_0="/fem_photosnap/assets/mountains-02a87c73.jpg",Ko="/fem_photosnap/assets/cityscapes-bb5e02cd.jpg",N0="/fem_photosnap/assets/cityscapes-f2d706ff.jpg",Go="/fem_photosnap/assets/18-days-voyage-8d28d5c6.jpg",z0="/fem_photosnap/assets/18-days-voyage-c8120d37.jpg",Xo="/fem_photosnap/assets/architecturals-cd931ef1.jpg",P0="/fem_photosnap/assets/architecturals-c28c5011.jpg",lm=me.div`
  background-color: rgb(var(--black));
  color: rgb(var(--white));

  .hero {
    display: flex;

    .content {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 110px;
      position: relative;

      &::after {
        content: "";
        background-image: var(--main-accent);
        position: absolute;
        width: 6px;
        height: 45%;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        z-index: 1;

        @media screen and (max-width: 700px) {
          width: 130px;
          height: 6px;
          top: 0;
          left: 35px;
        }
      }

      .fs-h1,
      .fs-body-1 {
        max-width: 390px;
      }

      .fs-body-1 {
        margin: 20px 0 50px 0;
        opacity: 0.6;

        @media screen and (max-width: 700px) {
          margin: 15px 0 25px 0;
        }
      }

      @media screen and (max-width: 1430px) {
        padding: 0 55px;
      }

      @media screen and (max-width: 700px) {
        padding: 75px 25px;
      }
    }

    img {
      width: 100%;
      height: 100%;
    }

    @media screen and (max-width: 700px) {
      flex-direction: column-reverse;
    }
  }

  .stories {
    display: flex;

    @media screen and (max-width: 1000px) {
      display: grid;
      grid-template-columns: auto auto;
      grid-template-rows: auto auto;
    }

    @media screen and (max-width: 550px) {
      display: flex;
      flex-direction: column;
    }
  }

  .selling-points {
    background-color: rgb(var(--white));
    color: rgb(var(--black));
    display: flex;
    justify-content: space-between;
    padding: 120px 165px;

    @media screen and (max-width: 1400px) {
      padding: 120px 75px;
    }

    @media screen and (max-width: 1250px) {
      flex-direction: column;
      gap: 80px;
      padding: 120px 155px;
    }

    @media screen and (max-width: 550px) {
      gap: 55px;
      padding: 80px 30px;
    }
  }
`,sm=me.section`
  background-color: rgb(var(--white));
  color: rgb(var(--black));
  display: flex;

  &.reverse {
    flex-direction: row-reverse;

    @media screen and (max-width: 700px) {
      flex-direction: column-reverse;
    }
  }

  .content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 110px;

    &.reverse {
      align-items: flex-end;

      @media screen and (max-width: 700px) {
        align-items: flex-start;
      }
    }

    .fs-h1,
    .fs-body-1 {
      max-width: 390px;
    }

    .fs-h4.reverse {
      width: 390px;

      @media screen and (max-width: 700px) {
        width: auto;
      }
    }

    .fs-body-1 {
      margin: 20px 0 50px 0;
      opacity: 0.6;

      @media screen and (max-width: 700px) {
        margin: 15px 0 25px 0;
      }
    }

    @media screen and (max-width: 1430px) {
      padding: 0 55px;
    }

    @media screen and (max-width: 700px) {
      padding: 75px 25px;
    }
  }

  img {
    width: 100%;
    height: 100%;

    @media screen and (max-width: 700px) {
      width: 100%;
    }
  }

  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;
  }
`;function Mu({image:e,title:t,description:n,reverse:r}){return u.jsxs(sm,{className:`${r&&"reverse"}`,children:[u.jsxs("div",{className:`content ${r&&"reverse"}`,children:[u.jsx("h1",{className:"fs-h1 scaled",children:t}),u.jsx("p",{className:"fs-body-1",children:n}),u.jsxs(Je,{to:"/fem_photosnap/stories",className:`button-secondary black fs-h4 ${r&&"reverse"}`,children:[u.jsx("span",{children:"view the stories"}),u.jsx(Un,{})]})]}),u.jsxs("picture",{children:[u.jsx("source",{srcSet:e.desktop.src,media:`(min-width: ${e.desktop.breakPoint}px)`}),u.jsx("source",{srcSet:e.tablet.src,media:`(min-width: ${e.tablet.breakPoint}px)`}),u.jsx("img",{src:e.mobile.src,alt:t})]})]})}const am=me.div`
  color: rgb(var(--white));
  position: relative;
  width: 100%;
  transition: transform 0.33s;

  img {
    width: 100%;
    height: 100%;
  }

  .content {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0.27%,
      rgba(0, 0, 0, 0.66) 100%
    );
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 70%;

    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: end;
    align-items: center;
    padding: 40px;

    .details,
    .button-secondary {
      display: flex;
      width: 100%;
    }

    .details {
      flex-direction: column;
      gap: 4px;
      padding-bottom: 15px;
      position: relative;

      &::after {
        content: "";
        background-color: rgb(var(--white), 0.25);
        width: 100%;
        height: 1px;
        position: absolute;
        top: 100%;
        left: 0;
      }
    }

    .button-secondary {
      justify-content: space-between;
    }
  }

  &::after {
    content: "";
    background-image: var(--main-accent);
    width: 100%;
    height: 6px;
    position: absolute;
    top: 100%;
    left: 0;
    opacity: 0;
    transition: opacity 0.33s;
  }

  @media (hover: hover) {
    &:hover {
      transform: translateY(-25px);

      &::after {
        opacity: 1;
      }
    }
  }
`;function M0({image:e,title:t,story:n,author:r,date:o}){return u.jsxs(am,{children:[u.jsxs("picture",{children:[u.jsx("source",{srcSet:e.desktop.src,media:`(min-width: ${e.desktop.breakPoint}px)`}),u.jsx("source",{srcSet:e.tablet.src,media:`(min-width: ${e.tablet.breakPoint}px)`}),u.jsx("img",{src:e.mobile.src,alt:t})]}),u.jsxs("div",{className:"content",children:[u.jsxs("div",{className:"details",children:[o&&u.jsx("p",{className:"fs-body-2",children:o}),u.jsx("h3",{className:"fs-h3",children:t}),u.jsxs("p",{className:"fs-body-2",children:["by ",r]})]}),u.jsxs("a",{href:n,className:"button-secondary white fs-h4",target:"_blank",children:[u.jsx("span",{children:"read story"}),u.jsx(Un,{})]})]})]})}function T0(){return u.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"72",height:"72",children:[u.jsx("path",{d:"M31.195 32.674c0-.654-.529-1.183-1.183-1.183H4.88c-.653 0-1.183.53-1.183 1.183v31.195c0 .653.53 1.182 1.183 1.182h25.133c.654 0 1.183-.53 1.183-1.182V32.674zM28.83 62.686H6.062v-28.83H28.83v28.83zm-10.194 3.4h-2.37a1.182 1.182 0 100 2.366h2.37a1.183 1.183 0 000-2.366z"}),u.jsx("path",{d:"M68.33 0H52.298C50.32 0 48.64 1.545 48.64 3.523v6.235H12.292a6.694 6.694 0 00-6.674 6.696v11.34h-.724C2.168 27.795 0 30.063 0 32.792v34.168a4.864 4.864 0 004.897 4.893h26.086a3.91 3.91 0 002.835-1.183c.743-.765 1.221-1.737 1.073-2.798v-5.777h27.576a6.736 6.736 0 006.724-6.696V51.17a1.23 1.23 0 00-1.223-1.198h-1.734V38.44h2.095c1.978 0 3.523-1.678 3.523-3.656V3.523A3.483 3.483 0 0068.33 0zM51.005 7.688h18.48V28.83h-18.48V7.688zM52.3 2.366h16.03a1.12 1.12 0 011.158 1.157v1.8h-18.48v-1.8c0-.673.618-1.157 1.292-1.157zM7.984 16.454a4.326 4.326 0 014.308-4.33h36.349v3.4H12.22c-.654 0-1.132.594-1.132 1.247v11.024H7.984V16.454zm24.172 52.57c-.31.309-.735.477-1.173.463H4.9a2.5 2.5 0 01-2.536-2.532v-34.16c0-1.43 1.106-2.635 2.532-2.635h25.101c1.43 0 2.529 1.205 2.529 2.63v35.1c0 .011.036.007.036.02.026.411-.122.815-.407 1.113zm-2.154-41.23H13.454V17.89H48.64v16.894a3.712 3.712 0 003.658 3.656h6.1v11.532H43.995c-.33.003-.646.144-.87.389l-1.116 1.194a4.312 4.312 0 01-3.175 1.374h-3.944v-20.14c0-2.726-2.16-4.993-4.89-4.993zm36.823 27.604a4.368 4.368 0 01-4.358 4.331H34.891v-4.435h3.944a6.689 6.689 0 004.915-2.14l.765-.817h22.31v3.061zm-2.956-5.427h-3.105V38.44h3.105v11.532zm4.46-13.897H52.3a1.347 1.347 0 01-1.293-1.291v-3.588h18.48v3.588c0 .674-.483 1.29-1.157 1.29z"}),u.jsx("path",{d:"M61.947 32.23h-3.105a1.183 1.183 0 000 2.365h3.105a1.182 1.182 0 100-2.365z"})]})}function R0(){return u.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"72",height:"36",children:[u.jsx("path",{d:"M71.087 19.105a1.056 1.056 0 00-1.19.904 15.715 15.715 0 01-5.2 9.667 15.714 15.714 0 01-10.384 3.914c-2.082 0-4.104-.4-6.01-1.189a1.15 1.15 0 00-.102-.036c-.022-.006-2.272-.71-5.621-3.368a1.056 1.056 0 00-1.313 1.654c3.436 2.728 5.85 3.584 6.271 3.72 2.15.883 4.43 1.331 6.775 1.331 4.34 0 8.523-1.577 11.779-4.44a17.827 17.827 0 005.898-10.967 1.056 1.056 0 00-.903-1.19z"}),u.jsx("path",{d:"M45.67 25.17c2.242 1.997 5.03 4.04 8.713 4.04h.004c6.256-.003 11.346-5.095 11.346-11.35 0-6.259-5.092-11.35-11.35-11.35-4.315 0-7.257 2.505-9.337 4.688-3.044 3.194-9.947 11.385-10.198 11.702-6.619 8.377-10.55 9.385-10.765 9.435a.8.8 0 00-.23.066 15.63 15.63 0 01-5.351 1.175l-.67.014A15.622 15.622 0 016.679 28.94a15.624 15.624 0 01-4.566-11.2c.03-4.189 1.705-8.126 4.715-11.085 2.975-2.923 6.88-4.527 11.015-4.527h.16a15.65 15.65 0 015.664 1.113c.112.044.223.088.335.13.55.206 5.395 2.163 10.85 9.087 0 0-2.344 2.862-2.886 3.505a79.573 79.573 0 00-5.482-5.414c-2.24-1.998-5.028-4.04-8.712-4.04h-.004c-.376 0-.757.018-1.13.055a1.056 1.056 0 00.209 2.102c.304-.03.614-.046.922-.046h.004c1.67 0 3.843.418 7.306 3.505a78.432 78.432 0 015.503 5.456 161.824 161.824 0 01-5.001 5.481c-2.659 2.79-5.067 4.034-7.809 4.034-5.093 0-9.237-4.144-9.237-9.238a9.23 9.23 0 014.12-7.693 1.056 1.056 0 10-1.172-1.757 11.339 11.339 0 00-5.06 9.45c0 6.259 5.091 11.35 11.35 11.35 4.315 0 7.256-2.505 9.336-4.688 3.044-3.194 10.386-11.94 10.386-11.94.005-.005.01-.01.013-.016 6.498-8.144 10.351-9.132 10.564-9.181a.796.796 0 00.23-.066c1.7-.704 3.501-1.1 5.352-1.176l.669-.013a15.73 15.73 0 0115.53 13.274 1.056 1.056 0 002.086-.327A17.846 17.846 0 0054.313.016h-.022L53.6.032h-.022a17.74 17.74 0 00-5.987 1.296c-.883.196-4.895 1.49-11.366 9.465-5.567-6.93-10.51-9.034-11.483-9.398a14.312 14.312 0 01-.293-.113A17.752 17.752 0 0018.023.018c-4.761-.05-9.26 1.775-12.675 5.132C1.934 8.506.035 12.972 0 17.726A17.725 17.725 0 005.18 30.43a17.72 17.72 0 0012.662 5.272h.022l.691-.014h.022a17.739 17.739 0 005.987-1.296c.872-.194 4.788-1.456 11.104-9.144.603.69 1.216 1.354 1.828 1.98a1.056 1.056 0 001.511-1.475 47.766 47.766 0 01-1.984-2.164c.554-.67 2.624-3.191 3.166-3.835a79.567 79.567 0 005.482 5.415zm.905-12.515c2.658-2.79 5.066-4.033 7.808-4.033 5.093 0 9.238 4.144 9.238 9.238 0 5.091-4.143 9.235-9.235 9.237h-.003c-1.67 0-3.844-.417-7.307-3.504a78.35 78.35 0 01-5.503-5.457 162.117 162.117 0 015.002-5.48z"})]})}function I0(){return u.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"71",height:"72",children:[u.jsx("path",{d:"M41.311 62.557h-2.36V50.99a1.18 1.18 0 00-2.36 0v11.567H5.9V38.951h9.821a1.18 1.18 0 100-2.36h-11a1.18 1.18 0 00-1.181 1.18v24.786h-2.36A1.18 1.18 0 000 63.737v2.361A5.902 5.902 0 005.902 72H36.59a5.902 5.902 0 005.902-5.902v-2.36a1.18 1.18 0 00-1.18-1.18zm-1.18 3.541a3.541 3.541 0 01-3.54 3.541H34.23v-1.18a1.18 1.18 0 10-2.361 0v1.18H10.623v-1.18a1.18 1.18 0 10-2.36 0v1.18H5.901A3.541 3.541 0 012.36 66.1v-1.181h37.77v1.18zM61.377 8.262h2.36a1.18 1.18 0 100-2.36h-2.36a3.541 3.541 0 00-3.54 3.54v1.181h-1.181a1.18 1.18 0 100 2.36h1.18v3.542a1.18 1.18 0 002.36 0v-3.541h1.181a1.18 1.18 0 000-2.361h-1.18v-1.18c0-.652.528-1.18 1.18-1.18z"}),u.jsx("path",{d:"M67.279 1.18H53.115a3.541 3.541 0 00-3.541 3.541v2.361a1.18 1.18 0 002.36 0v-2.36c0-.653.529-1.181 1.18-1.181H67.28c.652 0 1.18.528 1.18 1.18v14.164a1.18 1.18 0 01-1.18 1.18H53.115a1.18 1.18 0 01-1.18-1.18v-7.082a1.18 1.18 0 10-2.361 0v7.082a3.541 3.541 0 003.54 3.541H67.28a3.541 3.541 0 003.54-3.54V4.72a3.541 3.541 0 00-3.54-3.54zM55.475 48.393a4.721 4.721 0 109.443 0 4.721 4.721 0 00-9.443 0zm7.082 0a2.36 2.36 0 11-4.72 0 2.36 2.36 0 014.72 0z"}),u.jsx("path",{d:"M67.279 37.77H53.115a3.541 3.541 0 00-3.541 3.541v14.164a3.541 3.541 0 003.54 3.541H67.28a3.541 3.541 0 003.54-3.54v-2.361a1.18 1.18 0 10-2.36 0v2.36a1.18 1.18 0 01-1.18 1.18H53.115a1.18 1.18 0 01-1.18-1.18V41.311c0-.651.528-1.18 1.18-1.18h14.164c.652 0 1.18.529 1.18 1.18v7.082a1.18 1.18 0 102.36 0v-7.082a3.541 3.541 0 00-3.54-3.54zM26.522 15.167a1.18 1.18 0 001.157.047l7.082-3.54a1.18 1.18 0 000-2.102l-7.082-3.54a1.18 1.18 0 00-1.712 1.05v7.082c0 .408.21.787.555 1.003zm1.806-6.173l3.258 1.629-3.258 1.629V8.994z"}),u.jsx("path",{d:"M29.508 21.246c5.867 0 10.623-4.756 10.623-10.623C40.131 4.756 35.375 0 29.508 0c-5.867 0-10.623 4.756-10.623 10.623 0 5.867 4.756 10.623 10.623 10.623zm0-18.885a8.262 8.262 0 110 16.524 8.262 8.262 0 010-16.524zm11.803 23.606c.372 0 .722-.175.945-.472l3.54-4.721a1.18 1.18 0 10-1.888-1.417l-3.54 4.722a1.18 1.18 0 00.943 1.888zm2.597 4.25a1.18 1.18 0 001.653.235l4.721-3.54a1.18 1.18 0 10-1.416-1.889l-4.722 3.54a1.18 1.18 0 00-.236 1.653zm11.567 2.596a1.18 1.18 0 00-1.416-.944l-5.902 1.18a1.186 1.186 0 00.236 2.36h.237l5.901-1.18a1.18 1.18 0 00.944-1.416zM1.18 33.05h14.164a1.18 1.18 0 001.18-1.18V12.984a1.18 1.18 0 00-1.18-1.18H1.18A1.18 1.18 0 000 12.983v18.885c0 .652.528 1.18 1.18 1.18zm1.18-18.885h11.804v16.525H2.36V14.164z"}),u.jsx("path",{d:"M10.623 16.525h-2.36a1.18 1.18 0 100 2.36h2.36a1.18 1.18 0 100-2.36zm0 4.72H5.902a1.18 1.18 0 000 2.362h4.721a1.18 1.18 0 100-2.361zm0 4.722H5.902a1.18 1.18 0 000 2.36h4.721a1.18 1.18 0 100-2.36zm29.65 6.728a1.184 1.184 0 10-2.054 1.18l5.205 9.006-18.885 7.082h-.177l-3.069 1.77-2.042 1.181a2.36 2.36 0 01-3.222-.862l-2.36-4.083a2.36 2.36 0 01.884-3.117l4.084-2.36 2.951 5.11a1.18 1.18 0 001.027.59 1.18 1.18 0 001.027-1.77l-3.045-5.264L35.41 28.942l.484.838a1.184 1.184 0 102.054-1.18l-1.18-2.043a1.18 1.18 0 00-.815-.566 1.18 1.18 0 00-.968.248L18.46 39.859l-5.028 2.904a4.721 4.721 0 00-2.172 5.347l-1.18.673a3.541 3.541 0 001.77 6.61 3.612 3.612 0 001.771-.472l1.18-.673a4.58 4.58 0 003.305 1.393 4.65 4.65 0 002.36-.638l1.028-.59 2.36 4.096a3.541 3.541 0 004.828 1.298 3.541 3.541 0 001.298-4.84l-2.148-3.74 17.705-6.646a1.18 1.18 0 00.614-1.688l-5.878-10.198zm-27.88 20.172a1.18 1.18 0 01-.897.118 1.18 1.18 0 01-.72-.543 1.18 1.18 0 01.437-1.617l1.027-.59 1.18 2.042-1.027.59zm15.534 3.305c.156.271.199.594.118.897a1.18 1.18 0 01-.555.708 1.18 1.18 0 01-1.605-.425l-2.361-4.096 1.96-1.12h.094l2.349 4.036z"})]})}const um=me.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .icon-container {
    width: 72px;
    height: 72px;
    display: grid;
    place-items: center;
  }

  .fs-h3 {
    margin: 50px 0 15px 0;
  }

  .fs-body-1 {
    max-width: 350px;
    opacity: 0.6;
  }
`;function L0({Icon:e,title:t,description:n}){return u.jsxs(um,{children:[u.jsx("div",{className:"icon-container",children:u.jsx(e,{})}),u.jsx("h3",{className:"fs-h3",children:t}),u.jsx("p",{className:"fs-body-1",children:n})]})}function cm({breakPoints:e}){const t=I.useMemo(()=>[{image:{desktop:{src:em,breakPoint:e.desktop},tablet:{src:tm,breakPoint:e.tablet},mobile:{src:nm,breakPoint:e.mobile}},title:"BEAUTIFUL STORIES EVERY TIME",description:"We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."},{image:{desktop:{src:rm,breakPoint:e.desktop},tablet:{src:om,breakPoint:e.tablet},mobile:{src:im,breakPoint:e.mobile}},title:"DESIGNED FOR EVERYONE",description:"Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it."}],[]),n=I.useMemo(()=>[{title:"The Mountains",author:"John Appleseed",story:"https://www.youtube.com/watch?v=wg0G0FOoCI8",image:{desktop:{breakPoint:e.tablet,src:Yo},tablet:{breakPoint:e.tablet,src:Yo},mobile:{breakPoint:e.mobile,src:_0}}},{title:"Sunset Cityscapes",author:"Benjamin Cruz",story:"https://www.youtube.com/watch?v=UnIhRpIT7nc",image:{desktop:{breakPoint:e.tablet,src:Ko},tablet:{breakPoint:e.tablet,src:Ko},mobile:{breakPoint:e.mobile,src:N0}}},{title:"18 Days Voyage",author:"Alexei Borodin",story:"https://www.youtube.com/watch?v=BnkhBwzBqlQ",image:{desktop:{breakPoint:e.tablet,src:Go},tablet:{breakPoint:e.tablet,src:Go},mobile:{breakPoint:e.mobile,src:z0}}},{title:"Architecturals",author:"Samantha Brooke",story:"https://www.youtube.com/watch?v=DdUoGjniJ7s",image:{desktop:{breakPoint:e.tablet,src:Xo},tablet:{breakPoint:e.tablet,src:Xo},mobile:{breakPoint:e.mobile,src:P0}}}],[]),r=I.useMemo(()=>[{Icon:T0,title:"100% Responsive",description:"No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."},{Icon:R0,title:"No Photo Upload Limit",description:"Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."},{Icon:I0,title:"Available to Embed",description:"Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. "}],[]);return u.jsxs(lm,{children:[u.jsxs("header",{className:"hero",children:[u.jsxs("div",{className:"content",children:[u.jsxs("h1",{className:"fs-h1 scaled",children:["Create and share your photo stories."," "]}),u.jsx("p",{className:"fs-body-1",children:"Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."}),u.jsxs("a",{href:"https://4chan.org/g/catalog",className:"button-secondary white fs-h4",children:[u.jsx("span",{children:"get an invite"}),u.jsx(Un,{})]})]}),u.jsxs("picture",{children:[u.jsx("source",{srcSet:Zh,media:`(min-width: ${e.desktop}px)`}),u.jsx("source",{srcSet:Jh,media:`(min-width: ${e.tablet}px)`}),u.jsx("img",{src:qh,alt:"Create and Share"})]})]}),u.jsx(Mu,{...t[0],reverse:!0}),u.jsx(Mu,{...t[1]}),u.jsx("section",{className:"stories",children:n.map((o,i)=>u.jsx(M0,{...o},i))}),u.jsx("section",{className:"selling-points",children:r.map((o,i)=>u.jsx(L0,{...o},i))})]})}function $0(){return u.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"170",height:"16",children:[u.jsx("defs",{children:u.jsxs("linearGradient",{id:"a",x1:"0%",x2:"50%",y1:"85.457%",y2:"14.543%",children:[u.jsx("stop",{offset:"0%",stopColor:"#FFC593"}),u.jsx("stop",{offset:"51.945%",stopColor:"#BC7198"}),u.jsx("stop",{offset:"100%",stopColor:"#5A77FF"})]})}),u.jsxs("g",{fill:"none",fillRule:"evenodd",children:[u.jsx("path",{className:"name",fillRule:"nonzero",d:"M31.108 15.568v-4.541h2.703c.836 0 1.6-.133 2.292-.4a5.19 5.19 0 001.773-1.113 5.1 5.1 0 001.146-1.676c.273-.642.41-1.344.41-2.108 0-.75-.137-1.449-.41-2.098a5.072 5.072 0 00-1.146-1.686A5.19 5.19 0 0036.103.832c-.692-.266-1.456-.4-2.292-.4H27v15.136h4.108zm2.487-8.217h-2.487V4.108h2.487c.49 0 .9.162 1.232.487.332.324.497.702.497 1.135 0 .432-.165.81-.497 1.135-.332.324-.742.486-1.232.486zm12.54 8.217V9.73h5.514v5.838h4.108V.432h-4.108v5.622h-5.514V.432h-4.108v15.136h4.108zM66.784 16a8.616 8.616 0 003.319-.638 8.401 8.401 0 002.68-1.74 8.192 8.192 0 001.785-2.552c.432-.965.648-1.989.648-3.07a7.428 7.428 0 00-.648-3.07 8.192 8.192 0 00-1.784-2.552 8.401 8.401 0 00-2.681-1.74A8.616 8.616 0 0066.783 0c-1.196 0-2.306.213-3.329.638a8.432 8.432 0 00-2.67 1.74A8.192 8.192 0 0059 4.93 7.428 7.428 0 0058.351 8c0 1.081.217 2.105.649 3.07a8.192 8.192 0 001.784 2.552 8.432 8.432 0 002.67 1.74c1.023.425 2.133.638 3.33.638zm0-3.676A4.285 4.285 0 0165.119 12a3.942 3.942 0 01-1.34-.908 4.33 4.33 0 01-.887-1.373A4.479 4.479 0 0162.568 8c0-.62.108-1.193.324-1.719a4.33 4.33 0 01.886-1.373c.375-.39.822-.692 1.34-.908a4.285 4.285 0 011.666-.324c.59 0 1.142.108 1.654.324.512.216.958.519 1.34.908.382.39.681.847.898 1.373.216.526.324 1.1.324 1.719 0 .62-.108 1.193-.324 1.719a4.236 4.236 0 01-.898 1.373c-.382.39-.828.692-1.34.908a4.206 4.206 0 01-1.654.324zm18.054 3.244V4.108h4.216V.432h-12.54v3.676h4.216v11.46h4.108zM98.784 16a8.616 8.616 0 003.319-.638 8.401 8.401 0 002.68-1.74 8.192 8.192 0 001.785-2.552c.432-.965.648-1.989.648-3.07a7.428 7.428 0 00-.648-3.07 8.192 8.192 0 00-1.784-2.552 8.401 8.401 0 00-2.681-1.74A8.616 8.616 0 0098.783 0c-1.196 0-2.306.213-3.329.638a8.432 8.432 0 00-2.67 1.74A8.192 8.192 0 0091 4.93 7.428 7.428 0 0090.351 8c0 1.081.217 2.105.649 3.07a8.192 8.192 0 001.784 2.552 8.432 8.432 0 002.67 1.74c1.023.425 2.133.638 3.33.638zm0-3.676A4.285 4.285 0 0197.119 12a3.942 3.942 0 01-1.34-.908 4.33 4.33 0 01-.887-1.373A4.479 4.479 0 0194.568 8c0-.62.108-1.193.324-1.719a4.33 4.33 0 01.886-1.373c.375-.39.822-.692 1.34-.908a4.285 4.285 0 011.666-.324c.59 0 1.142.108 1.654.324.512.216.958.519 1.34.908.382.39.681.847.898 1.373.216.526.324 1.1.324 1.719 0 .62-.108 1.193-.324 1.719a4.236 4.236 0 01-.898 1.373c-.382.39-.828.692-1.34.908a4.206 4.206 0 01-1.654.324zM114.568 16c.95 0 1.801-.133 2.55-.4.75-.267 1.385-.627 1.904-1.081.519-.454.915-.98 1.189-1.578.274-.599.41-1.236.41-1.914 0-.88-.172-1.6-.518-2.162a4.35 4.35 0 00-1.298-1.362 6.98 6.98 0 00-1.697-.822l-1.697-.562a7.533 7.533 0 01-1.297-.551c-.346-.195-.52-.465-.52-.811 0-.332.148-.63.444-.898.295-.266.688-.4 1.178-.4.375 0 .714.062 1.016.184.303.123.563.263.779.422.26.173.49.367.692.584l2.378-2.487a5.559 5.559 0 00-1.276-1.08c-.432-.275-.98-.523-1.643-.747C116.5.112 115.706 0 114.784 0c-.865 0-1.65.13-2.357.39-.706.259-1.308.605-1.805 1.037-.498.432-.883.93-1.157 1.492a3.908 3.908 0 00-.41 1.73c0 .879.172 1.6.518 2.162a4.35 4.35 0 001.297 1.362 6.98 6.98 0 001.698.822c.612.201 1.178.389 1.697.562.519.173.951.357 1.297.551.346.195.52.465.52.81 0 .433-.174.812-.52 1.136-.346.324-.821.487-1.427.487-.49 0-.933-.083-1.33-.25a5.466 5.466 0 01-1.027-.55 5.352 5.352 0 01-.886-.822l-2.378 2.486c.432.49.944.923 1.535 1.298.504.331 1.131.63 1.88.897.75.267 1.63.4 2.639.4zm12.54-.432V7.135l6.508 8.433h3.546V.432h-4.108v8.433L126.568.432H123v15.136h4.108zm16.216 0l1.081-3.244h4.973l1.081 3.244h4.433L149.162.432h-4.54l-5.73 15.136h4.432zm4.973-6.487h-2.81l1.405-4.432 1.405 4.432zm12.433 6.487v-4.541h2.702c.836 0 1.6-.133 2.292-.4a5.19 5.19 0 001.773-1.113 5.1 5.1 0 001.146-1.676c.274-.642.411-1.344.411-2.108 0-.75-.137-1.449-.41-2.098a5.072 5.072 0 00-1.147-1.686 5.19 5.19 0 00-1.773-1.114c-.692-.266-1.456-.4-2.292-.4h-6.81v15.136h4.108zm2.486-8.217h-2.486V4.108h2.486c.49 0 .901.162 1.233.487.331.324.497.702.497 1.135 0 .432-.166.81-.497 1.135-.332.324-.743.486-1.233.486z"}),u.jsx("path",{fill:"url(#a)",d:"M0 16L9.5 0 19 16z"})]})]})}const dm=me.nav`
  position: relative;

  .content {
    background-color: rgb(var(--white));
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 16px 165px;
    z-index: 2;

    svg {
      .name {
        fill: rgb(var(--black));
      }
    }

    .menu-toggle {
      display: none;

      @media screen and (max-width: 730px) {
        display: block;
        position: relative;
        width: 20px;
        height: 20px;

        &::before,
        &::after {
          content: "";
          background: black;
          width: 20px;
          height: 1px;
          position: absolute;
          left: 0;
          transition: transform 0.33s, top 0.33s, bottom 0.33s, width 0.33s;
          transform-origin: center;
        }

        &::before {
          top: 35%;
        }

        &::after {
          bottom: 35%;
        }

        &.open::before,
        &.open::after {
          width: 22px;
        }

        &.open::before {
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
        }

        &.open::after {
          bottom: 50%;
          transform: translateY(-50%) rotate(-45deg);
        }

        input[type="checkbox"] {
          appearance: none;
          position: absolute;
          inset: 0;
        }
      }
    }

    .links {
      .local-links {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        gap: 37px;

        .fs-h4 {
          color: rgb(var(--black));
          text-decoration: none;
          transition: opacity 0.33s;

          @media (hover: hover) {
            &:hover {
              opacity: 0.3;
            }
          }
        }

        @media screen and (max-width: 730px) {
          position: relative;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          top: 0;
          left: 0;
          transform: translate(0, 0);
          width: 100%;

          &::after {
            content: "";
            background-color: rgb(var(--black), 0.25);
            width: 100%;
            height: 1px;
          }
        }
      }

      @media screen and (max-width: 730px) {
        background-color: rgb(var(--white));
        ft: 0;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        padding: 32px;
        z-index: 1;
        visibility: hidden;
        opacity: 0;

        &.shown {
          animation: show 0.33s forwards;
        }

        &.hidden {
          animation: hide 0.33s forwards;
        }

        .button-primary {
          width: 100%;
          padding: 12px 0;
        }

        @keyframes show {
          from {
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
          }

          to {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }
        }

        @keyframes hide {
          from {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          to {
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
          }
        }
      }
    }

    @media screen and (max-width: 1100px) {
      padding: 16px 40px;
    }

    @media screen and (max-width: 730px) {
      padding: 28px 24px;
      position: relative;
    }
  }

  .overlay {
    background-color: rgb(var(--black));
    position: fixed;
    inset: 0;
    z-index: 1;
    transition: opacity 0.33s;

    &.shown {
      opacity: 0.5;
      pointer-events: all;
    }

    &.hidden {
      opacity: 0;
      pointer-events: none;
    }
  }
`;function fm(){const[e,t]=I.useState(!1),[n,r]=I.useState(!1),[o]=i0(),i=n?e?"shown":"hidden":"";function l(s){const d=s.target.checked;t(d),r(!0)}return I.useEffect(()=>(e?document.body.style.overflowY="hidden":document.body.style.overflowY="",()=>{document.body.style.overflowY=""}),[e]),I.useEffect(()=>{t(!1)},[o]),u.jsxs(dm,{children:[u.jsxs("div",{className:"content",children:[u.jsx(Je,{to:"/fem_photosnap/","aria-label":"home",children:u.jsx("span",{children:u.jsx($0,{})})}),u.jsx("label",{className:`menu-toggle ${e&&"open"}`,children:u.jsx("input",{type:"checkbox","aria-label":"toggle navbar",checked:e,onChange:l})}),u.jsxs("div",{className:`links ${i}`,children:[u.jsxs("div",{className:"local-links",children:[u.jsx(Je,{className:"fs-h4",to:"/fem_photosnap/stories",children:"stories"}),u.jsx(Je,{className:"fs-h4",to:"/fem_photosnap/features",children:"features"}),u.jsx(Je,{className:"fs-h4",to:"/fem_photosnap/pricing",children:"pricing"})]}),u.jsx("a",{className:"fs-h4 button-primary black",href:"https://4chan.org/g/catalog",target:"_blank",children:"get an invite"})]})]}),u.jsx("div",{className:`overlay ${e?"shown":"hidden"}`,onClick:()=>t(!1)})]})}function pm(){return u.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",children:[u.jsx("defs",{children:u.jsxs("linearGradient",{id:"facebook-gradient",x1:"100%",x2:"0%",y1:"0%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:"#63AFDB"}),u.jsx("stop",{offset:"100%",stopColor:"#6028F1"})]})}),u.jsx("path",{fill:"url(#facebook-gradient)",d:"M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"})]})}function hm(){return u.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"21",height:"20",children:[u.jsx("defs",{children:u.jsxs("linearGradient",{id:"insta-gradient",x1:"0%",x2:"50%",y1:"100%",y2:"0%",children:[u.jsx("stop",{offset:"0%",stopColor:"#FFC593"}),u.jsx("stop",{offset:"51.945%",stopColor:"#BC7198"}),u.jsx("stop",{offset:"100%",stopColor:"#5A77FF"})]})}),u.jsx("path",{fill:"url(#insta-gradient)",d:"M143.32 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.718-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zm0-1.802c-2.716 0-3.056.012-4.123.06-3.631.167-5.65 2.182-5.816 5.817-.05 1.067-.061 1.407-.061 4.123s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122c-.163-3.629-2.18-5.65-5.816-5.817C146.377.01 146.036 0 143.32 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z",transform:"translate(-133)"})]})}function mm(){return u.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",children:[u.jsx("defs",{children:u.jsxs("linearGradient",{id:"piterest-gradient",x1:"100%",x2:"0%",y1:"0%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:"#F6C683"}),u.jsx("stop",{offset:"100%",stopColor:"#DE3838"})]})}),u.jsx("path",{fill:"url(#piterest-gradient)",d:"M109.99 0c-5.522 0-10 4.477-10 10 0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.176-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.33 1.781.744 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10s-4.477-10-10-10z",transform:"translate(-100)"})]})}function gm(){return u.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"21",height:"18",children:[u.jsx("defs",{children:u.jsxs("linearGradient",{id:"twitter-gradient",x1:"100%",x2:"0%",y1:"16.979%",y2:"83.021%",children:[u.jsx("stop",{offset:"0%",stopColor:"#65FFEB"}),u.jsx("stop",{offset:"100%",stopColor:"#27718A"})]})}),u.jsx("path",{fill:"url(#twitter-gradient)",d:"M86.66 3.797a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.805-2.27 8.22 8.22 0 01-2.606.996 4.096 4.096 0 00-2.995-1.296c-2.65 0-4.596 2.472-3.998 5.038a11.648 11.648 0 01-8.457-4.287 4.109 4.109 0 001.27 5.478 4.086 4.086 0 01-1.858-.513c-.045 1.901 1.318 3.68 3.291 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.833 2.85 8.25 8.25 0 01-6.075 1.7 11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.662-12.205a8.354 8.354 0 002.048-2.124z",transform:"translate(-66 -1)"})]})}function vm(){return u.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"21",height:"20",children:[u.jsx("defs",{children:u.jsxs("linearGradient",{id:"youtube-gradient",x1:"0%",x2:"100%",y1:"100%",y2:"0%",children:[u.jsx("stop",{offset:"0%",stopColor:"#D3205A"}),u.jsx("stop",{offset:"100%",stopColor:"#FF5A5A"})]})}),u.jsx("path",{fill:"url(#youtube-gradient)",d:"M43.33 0c-5.523 0-10 4.478-10 10 0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.522-4.477-10-10-10zm3.7 14.077c-1.75.12-5.653.12-7.402 0-1.896-.13-2.117-1.059-2.131-4.077.014-3.024.237-3.947 2.131-4.077 1.75-.12 5.652-.12 7.403 0 1.897.13 2.117 1.059 2.132 4.077-.015 3.024-.237 3.947-2.132 4.077zm-5.367-6.029l4.098 1.949-4.098 1.955V8.048z",transform:"translate(-33)"})]})}const ym=me.footer`
  background-color: rgb(var(--black));
  display: flex;
  justify-content: space-between;
  padding: 65px 165px;

  .links {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    column-gap: 125px;

    .logo {
      grid-column: 1 / 2;
      grid-row: 1 / 2;

      .name {
        fill: rgb(var(--white));
      }
    }

    .socials {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
      align-self: end;
      display: flex;
      gap: 15px;

      svg:not(:hover) {
        path {
          fill: rgb(var(--white));
        }
      }

      @media screen and (max-width: 800px) {
        order: 3;
        align-self: auto;
      }

      @media screen and (max-width: 680px) {
        order: 2;
        margin-top: 32px;
      }
    }

    .local-links {
      grid-column: 2 / 3;
      grid-row: 1 / 3;
      display: flex;
      flex-direction: column;
      gap: 20px;

      a {
        color: rgb(var(--white));
        text-decoration: none;

        @media (hover: hover) {
          transition: opacity 0.33s;

          &:hover {
            opacity: 0.3;
          }
        }
      }

      @media screen and (max-width: 800px) {
        order: 2;
        margin: 32px 0 72px 0;
        flex-direction: row;
        gap: 26px;
      }

      @media screen and (max-width: 680px) {
        order: 3;
        margin: 50px 0 120px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
      }
    }

    @media screen and (max-width: 800px) {
      display: flex;
      flex-direction: column;
    }
  }

  .legal {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-between;

    .fs-body-1 {
      color: rgb(var(--white), 0.5);
    }

    @media screen and (max-width: 680px) {
      align-items: center;
      gap: 35px;
    }
  }

  @media screen and (max-width: 1100px) {
    padding: 65px 40px;
  }

  @media screen and (max-width: 680px) {
    flex-direction: column;
    align-items: center;
    padding: 56px 32px;
  }
`;function xm(){return u.jsxs(ym,{children:[u.jsxs("div",{className:"links",children:[u.jsx(Je,{to:"/fem_photosnap/","aria-label":"home",children:u.jsx("span",{className:"logo",children:u.jsx($0,{})})}),u.jsxs("div",{className:"socials",children:[u.jsx("a",{href:"https://4chan.org/g/catalog",target:"_blank",children:u.jsx(pm,{})}),u.jsx("a",{href:"https://4chan.org/g/catalog",target:"_blank",children:u.jsx(vm,{})}),u.jsx("a",{href:"https://4chan.org/g/catalog",target:"_blank",children:u.jsx(gm,{})}),u.jsx("a",{href:"https://4chan.org/g/catalog",target:"_blank",children:u.jsx(mm,{})}),u.jsx("a",{href:"https://4chan.org/g/catalog",target:"_blank",children:u.jsx(hm,{})})]}),u.jsxs("div",{className:"local-links",children:[u.jsx(Je,{className:"fs-h4",to:"/fem_photosnap/",children:"home"}),u.jsx(Je,{className:"fs-h4",to:"/fem_photosnap/stories",children:"stories"}),u.jsx(Je,{className:"fs-h4",to:"/fem_photosnap/features",children:"features"}),u.jsx(Je,{className:"fs-h4",to:"/fem_photosnap/pricing",children:"pricing"})]})]}),u.jsxs("div",{className:"legal",children:[u.jsxs("a",{href:"https://4chan.org/g/catalog",target:"_blank",className:"button-secondary white fs-h4",children:[u.jsx("span",{children:"get an invite"}),u.jsx(Un,{})]}),u.jsx("p",{className:"fs-body-1",children:"Copyright 2019. All Rights Reserved"})]})]})}const wm=me.div`
  background-color: rgb(var(--black));

  .hero {
    position: relative;
    width: 100%;

    img {
      width: 100%;
    }

    .content {
      color: rgb(var(--white));
      position: absolute;
      top: 122px;
      left: 112px;
      max-width: 390px;

      .fs-h1 {
        margin: 24px 0 16px 0;
        max-width: 350px;
      }

      .fs-body-1 {
        opacity: 0.6;
        margin: 24px 0;
      }

      .fs-body-2 {
        display: flex;
        gap: 10px;

        .date {
          opacity: 0.75;
        }
      }

      @media screen and (max-width: 800px) {
        left: 40px;
      }

      @media screen and (max-width: 700px) {
        background: rgb(var(--black));
        position: static;
        max-width: 100%;
        padding: 50px 30px;
      }
    }
  }

  .stories {
    background-color: rgb(var(--white));
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto auto auto auto;

    @media screen and (max-width: 1000px) {
      grid-template-columns: auto auto;
      grid-template-rows: repeat(8, auto);
    }

    @media screen and (max-width: 650px) {
      display: flex;
      flex-direction: column;
    }
  }
`,km="/fem_photosnap/assets/moon-of-appalacia-eb9b2565.jpg",Sm="/fem_photosnap/assets/moon-of-appalacia-f096689a.jpg",jm="/fem_photosnap/assets/moon-of-appalacia-c0e46ae0.jpg",Tu="/fem_photosnap/assets/world-tour-123f815a.jpg",Em="/fem_photosnap/assets/world-tour-e11a8afc.jpg",Ru="/fem_photosnap/assets/unforeseen-corners-95049acd.jpg",Cm="/fem_photosnap/assets/unforeseen-corners-7cf618f1.jpg",Iu="/fem_photosnap/assets/king-on-africa-bff5be48.jpg",_m="/fem_photosnap/assets/king-on-africa-78313957.jpg",Lu="/fem_photosnap/assets/trip-to-nowhere-250a6208.jpg",Nm="/fem_photosnap/assets/trip-to-nowhere-199274b6.jpg",$u="/fem_photosnap/assets/rage-of-the-sea-05ab1b1b.jpg",zm="/fem_photosnap/assets/rage-of-the-sea-f5e2d39b.jpg",Ou="/fem_photosnap/assets/running-free-8dba3ee2.jpg",Pm="/fem_photosnap/assets/running-free-377721d5.jpg",Au="/fem_photosnap/assets/behind-the-waves-87cdf5ef.jpg",Mm="/fem_photosnap/assets/behind-the-waves-a945b0f7.jpg",Du="/fem_photosnap/assets/calm-waters-e2fdd902.jpg",Tm="/fem_photosnap/assets/calm-waters-911b8eb4.jpg",Fu="/fem_photosnap/assets/milky-way-307f3e30.jpg",Rm="/fem_photosnap/assets/milky-way-44659f65.jpg",bu="/fem_photosnap/assets/dark-forest-131ea623.jpg",Im="/fem_photosnap/assets/dark-forest-57320c50.jpg",Hu="/fem_photosnap/assets/somwarpet-ebc7781d.jpg",Lm="/fem_photosnap/assets/somwarpet-98e60007.jpg",Uu="/fem_photosnap/assets/land-of-dreams-df172167.jpg",$m="/fem_photosnap/assets/land-of-dreams-be570710.jpg";function Om({breakPoints:e}){const t=I.useMemo(()=>[{date:"April 16th 2020",title:"The Mountains",author:"John Appleseed",story:"https://youtu.be/2SUwOgmvzK4?si=lnKUxM5HkATL1-nf",image:{desktop:{breakPoint:e.tablet,src:Yo},tablet:{breakPoint:e.tablet,src:Yo},mobile:{breakPoint:e.mobile,src:_0}}},{date:"April 14th 2020",title:"Sunset Cityscapes",author:"Benjamin Cruz",story:"https://youtu.be/rUmV-MorIKc?si=IrE_HHCpVTiZKE6a",image:{desktop:{breakPoint:e.tablet,src:Ko},tablet:{breakPoint:e.tablet,src:Ko},mobile:{breakPoint:e.mobile,src:N0}}},{date:"April 11th 2020",title:"18 Days Voyage",author:"Alexei Borodin",story:"https://youtu.be/utCjuKDXQsE?si=lrqJJaKMSXtBj6Qj",image:{desktop:{breakPoint:e.tablet,src:Go},tablet:{breakPoint:e.tablet,src:Go},mobile:{breakPoint:e.mobile,src:z0}}},{date:"April 9th 2020",title:"Architecturals",author:"Samantha Brooke",story:"https://youtu.be/3Qpf9pAkUeI?si=xAuj6IwpayhoXZ1T",image:{desktop:{breakPoint:e.tablet,src:Xo},tablet:{breakPoint:e.tablet,src:Xo},mobile:{breakPoint:e.mobile,src:P0}}},{date:"April 7th 2020",title:"World Tour 2019",author:"Timothy Wagner",story:"https://youtu.be/4hZ_wTx_kWg?si=6Z0qohwgn--8D2Vo",image:{desktop:{breakPoint:e.tablet,src:Tu},tablet:{breakPoint:e.tablet,src:Tu},mobile:{breakPoint:e.mobile,src:Em}}},{date:"April 3rd 2020",title:"Unforeseen Corners",author:"William Malcolm",story:"https://youtu.be/j706aSetFbI?si=CWo5tRlRHkAp91Y1",image:{desktop:{breakPoint:e.tablet,src:Ru},tablet:{breakPoint:e.tablet,src:Ru},mobile:{breakPoint:e.mobile,src:Cm}}},{date:"March 29th 2020",title:"King on Africa: Part II",author:"Tim Hillenburg",story:"https://youtu.be/gs-MtItyOFc?si=x8Du9qLShW5vj4mR",image:{desktop:{breakPoint:e.tablet,src:Iu},tablet:{breakPoint:e.tablet,src:Iu},mobile:{breakPoint:e.mobile,src:_m}}},{date:"March 21st 2020",title:"The Trip to Nowhere",author:"Felicia Rourke",story:"https://youtu.be/sVx1mJDeUjY?si=v0PWTH0sJOuHm2Qz",image:{desktop:{breakPoint:e.tablet,src:Lu},tablet:{breakPoint:e.tablet,src:Lu},mobile:{breakPoint:e.mobile,src:Nm}}},{date:"March 19th 2020",title:"Rage of The Sea",author:"Mohammed Abdul",story:"https://youtu.be/t5NoCmnfg7o?si=gDZD-vMHj-iPL1Xr",image:{desktop:{breakPoint:e.tablet,src:$u},tablet:{breakPoint:e.tablet,src:$u},mobile:{breakPoint:e.mobile,src:zm}}},{date:"March 16th 2020",title:"Running Free",author:"Michelle",story:"https://www.youtube.com/watch?v=j4Jyev7iTlE",image:{desktop:{breakPoint:e.tablet,src:Ou},tablet:{breakPoint:e.tablet,src:Ou},mobile:{breakPoint:e.mobile,src:Pm}}},{date:"March 11th 2020",title:"Behind the Waves",author:"Lamarr Wilson",story:"https://www.youtube.com/watch?v=Z9VVLJQTAI4",image:{desktop:{breakPoint:e.tablet,src:Au},tablet:{breakPoint:e.tablet,src:Au},mobile:{breakPoint:e.mobile,src:Mm}}},{date:"March 9th 2020",title:"Calm Waters",author:"by Samantha Brooke",story:"https://youtu.be/zKWlEej2j5Q?si=MXCico5PRCU6Cd0C",image:{desktop:{breakPoint:e.tablet,src:Du},tablet:{breakPoint:e.tablet,src:Du},mobile:{breakPoint:e.mobile,src:Tm}}},{date:"March 5th 2020",title:"The Milky Way",author:"Benjamin Cruz",story:"https://youtu.be/KGAAhzreGWw?si=wf4Ab07cX7S33JIb",image:{desktop:{breakPoint:e.tablet,src:Fu},tablet:{breakPoint:e.tablet,src:Fu},mobile:{breakPoint:e.mobile,src:Rm}}},{date:"March 4th 2020",title:"Night at The Dark Forest",author:"Mohammed Abdul",story:"https://youtu.be/wK7-4080KMk?si=qNZLk2HJF6g7xSWS",image:{desktop:{breakPoint:e.tablet,src:bu},tablet:{breakPoint:e.tablet,src:bu},mobile:{breakPoint:e.mobile,src:Im}}},{date:"March 1st 2020",title:"Somwarpet’s Beauty",author:"Michelle",story:"https://www.youtube.com/watch?v=Xrf0zdpCDv0",image:{desktop:{breakPoint:e.tablet,src:Hu},tablet:{breakPoint:e.tablet,src:Hu},mobile:{breakPoint:e.mobile,src:Lm}}},{date:"February 25th 2020",title:"Land of Dreams",author:"William Malcolm",story:"https://www.youtube.com/watch?v=VK9h7234eOY",image:{desktop:{breakPoint:e.tablet,src:Uu},tablet:{breakPoint:e.tablet,src:Uu},mobile:{breakPoint:e.mobile,src:$m}}}],[]);return u.jsxs(wm,{children:[u.jsxs("header",{className:"hero",children:[u.jsxs("picture",{children:[u.jsx("source",{srcSet:km,media:`(min-width: ${e.desktop}px)`}),u.jsx("source",{srcSet:Sm,media:`(min-width: ${e.tablet}px)`}),u.jsx("img",{src:jm,alt:"HAZY FULL MOON OF APPALACHIA"})]}),u.jsxs("div",{className:"content",children:[u.jsx("h4",{className:"fs-h4",children:"LAST MONTH’S FEATURED STORY"}),u.jsx("h1",{className:"fs-h1 scaled",children:"HAZY FULL MOON OF APPALACHIA"}),u.jsxs("p",{className:"fs-body-2",children:[u.jsx("span",{className:"date",children:"March 2nd 2020"}),u.jsx("span",{className:"author",children:"by John Appleseed"})]}),u.jsx("p",{className:"fs-body-1",children:'The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.'}),u.jsxs("a",{href:"https://www.youtube.com/watch?v=jqnZGcmPLvA",className:"button-secondary white fs-h4",target:"_blank",children:[u.jsx("span",{children:"read the story"}),u.jsx(Un,{})]})]})]}),u.jsx("section",{className:"stories",children:t.map((n,r)=>u.jsx(M0,{...n},r))})]})}const Am="/fem_photosnap/assets/hero-86c7eae4.jpg",Dm="/fem_photosnap/assets/hero-b4af8392.jpg",Fm="/fem_photosnap/assets/hero-536c21e2.jpg",bm=me.div`
  .selling-points {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 105px;
    column-gap: 30px;
    padding: 160px 165px;

    @media screen and (max-width: 1300px) {
      padding: 100px 80px;
    }

    @media screen and (max-width: 1100px) {
      grid-template-columns: 1fr 1fr;
      padding: 110px 40px;
    }

    @media screen and (max-width: 600px) {
      display: flex;
      flex-direction: column;
      gap: 55px;
      padding: 65px 35px;
    }
  }
`;function Hm(){return u.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"81",height:"72",children:[u.jsx("path",{d:"M48.628 26.431c-7.611 0-13.804 6.193-13.804 13.804 0 7.612 6.193 13.804 13.804 13.804 7.612 0 13.804-6.192 13.804-13.804 0-7.611-6.192-13.804-13.804-13.804zm0 24.471c-5.882 0-10.667-4.785-10.667-10.667 0-5.881 4.785-10.666 10.667-10.666s10.667 4.785 10.667 10.666c0 5.882-4.785 10.667-10.667 10.667z"}),u.jsx("path",{d:"M48.628 33.177a1.569 1.569 0 100 3.137 3.926 3.926 0 013.921 3.921 1.569 1.569 0 103.137 0 7.066 7.066 0 00-7.058-7.058zM9.67 11.907a1.57 1.57 0 00-2.786 1.442l4.222 8.157c.273.528.826.85 1.417.847a1.57 1.57 0 001.39-.89l2.556-5.322 2.777 5.365c.27.52.807.847 1.393.847h.023a1.57 1.57 0 001.391-.89l3.918-8.157a1.569 1.569 0 00-2.828-1.357l-2.557 5.322-2.777-5.365a1.57 1.57 0 00-2.807.042l-2.555 5.323-2.777-5.365zm10.093-8.691a1.58 1.58 0 001.109-.46c.292-.292.46-.697.46-1.109 0-.412-.168-.817-.46-1.109a1.58 1.58 0 00-1.11-.46 1.58 1.58 0 00-1.108.46 1.58 1.58 0 00-.46 1.11c0 .411.168.816.46 1.108.292.292.696.46 1.109.46z"}),u.jsx("path",{d:"M80.314 27.059V6.353A6.282 6.282 0 0074.039.078H26.351a1.569 1.569 0 000 3.138H74.04a3.14 3.14 0 013.137 3.137v20.706a3.14 3.14 0 01-3.137 3.137h-7.53c-.045 0-.089.003-.133.007a20.501 20.501 0 00-11.026-9.22l2.325-4.841 2.777 5.364c.27.521.807.847 1.393.847h.024a1.57 1.57 0 001.39-.89l3.917-8.157a1.568 1.568 0 10-2.827-1.357l-2.556 5.322-2.777-5.365a1.567 1.567 0 00-2.807.042l-2.556 5.323-2.777-5.365a1.57 1.57 0 00-2.787 1.443l3.472 6.706a20.348 20.348 0 00-8.498.56l3.511-7.309a1.568 1.568 0 10-2.828-1.357L41.19 17.27l-2.777-5.365a1.568 1.568 0 00-2.807.042l-2.556 5.323-2.777-5.365a1.569 1.569 0 00-2.786 1.443l4.223 8.157a1.57 1.57 0 002.807-.042l2.556-5.322 2.776 5.364c.047.09.104.171.166.249a20.529 20.529 0 00-9.13 8.441H6.274a3.14 3.14 0 01-3.138-3.137V6.353a3.14 3.14 0 013.138-3.137h6.43a1.569 1.569 0 100-3.138h-6.43A6.282 6.282 0 000 6.353v20.706a6.282 6.282 0 006.275 6.274h23.164a20.296 20.296 0 00-1.203 6.902c0 11.245 9.148 20.392 20.392 20.392 3.695 0 7.164-.987 10.156-2.713l12.45 12.45a5.302 5.302 0 003.76 1.555 5.302 5.302 0 003.762-1.555 5.325 5.325 0 000-7.523l-4.892-4.891a1.569 1.569 0 00-2.218 2.218l4.891 4.892c.85.85.85 2.235 0 3.086-.85.85-2.234.85-3.085 0L61.415 56.108c4.635-3.741 7.605-9.466 7.605-15.873 0-2.421-.425-4.745-1.203-6.902h6.222a6.282 6.282 0 006.275-6.274zM48.628 57.49c-9.514 0-17.255-7.74-17.255-17.255 0-9.514 7.741-17.255 17.255-17.255s17.255 7.741 17.255 17.255-7.74 17.255-17.255 17.255z"}),u.jsx("path",{d:"M67.925 54.23a1.58 1.58 0 00-.46 1.108c0 .413.168.817.46 1.11.293.291.696.459 1.109.459.412 0 .817-.168 1.109-.46.293-.292.46-.696.46-1.109a1.572 1.572 0 00-1.57-1.568c-.412 0-.817.167-1.108.46z"})]})}function Um(){return u.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"72",height:"72",children:[u.jsx("path",{d:"M64.5 27h-15a1.5 1.5 0 000 3h15c2.481 0 4.5 2.019 4.5 4.5v30c0 2.481-2.019 4.5-4.5 4.5h-30a4.505 4.505 0 01-4.5-4.5v-12a1.5 1.5 0 00-3 0v12c0 4.134 3.366 7.5 7.5 7.5h30c4.134 0 7.5-3.366 7.5-7.5v-30c0-4.134-3.366-7.5-7.5-7.5zm-42 15H21a1.5 1.5 0 000 3h1.5a1.5 1.5 0 000-3zM8.823 0H7.5a7.54 7.54 0 00-2.106.3 1.505 1.505 0 00-1.02 1.863A1.502 1.502 0 006.237 3.18C6.645 3.06 7.068 3 7.5 3h1.323a1.499 1.499 0 100-3zM3 36.171v-3.033a1.5 1.5 0 00-3 0v3.033a1.5 1.5 0 003 0zm-1.5-7.599a1.5 1.5 0 001.5-1.5v-3.033a1.5 1.5 0 00-3 0v3.033a1.5 1.5 0 001.5 1.5zm0-18.195a1.5 1.5 0 001.5-1.5V7.5c0-.417.057-.828.168-1.224a1.498 1.498 0 00-1.035-1.851A1.49 1.49 0 00.283 5.46 7.557 7.557 0 000 7.5v1.377a1.5 1.5 0 001.5 1.5zm0 9.099a1.5 1.5 0 001.5-1.5v-3.033a1.5 1.5 0 00-3 0v3.033a1.5 1.5 0 001.5 1.5zm4.77 22.353a4.515 4.515 0 01-1.938-1.137 1.501 1.501 0 00-2.121.006 1.498 1.498 0 00.006 2.121 7.49 7.49 0 003.234 1.896 1.498 1.498 0 001.851-1.032A1.498 1.498 0 006.27 41.83zM43.257 7.308c.138 0 .279-.018.42-.063a1.5 1.5 0 001.02-1.86 7.506 7.506 0 00-1.923-3.22 1.498 1.498 0 00-2.121.013 1.501 1.501 0 00.012 2.12c.54.54.942 1.207 1.152 1.93.192.654.789 1.08 1.44 1.08zM36.117 0h-3.033a1.5 1.5 0 000 3h3.033a1.5 1.5 0 000-3zm-21.18 42h-3.033a1.5 1.5 0 000 3h3.033a1.5 1.5 0 000-3zM43.5 10.35a1.5 1.5 0 00-1.5 1.5v3.033a1.5 1.5 0 003 0V11.85c0-.831-.672-1.5-1.5-1.5zM27.021 0h-3.033a1.5 1.5 0 000 3h3.03a1.501 1.501 0 10.003-3zm-9.099 0h-3.033a1.5 1.5 0 000 3h3.033a1.5 1.5 0 000-3zM43.5 19.5A1.5 1.5 0 0042 21v1.5a1.5 1.5 0 003 0V21a1.5 1.5 0 00-1.5-1.5z"}),u.jsx("path",{d:"M49.212 26.088l-4.65-4.65a4.69 4.69 0 00-6.621 0 4.66 4.66 0 00-1.15 1.887c-1.634-.57-3.59-.147-4.85 1.113a4.662 4.662 0 00-1.284 2.424 4.723 4.723 0 00-3.966 1.326 4.672 4.672 0 00-1.36 3.636 4.658 4.658 0 00-2.675 1.329 4.652 4.652 0 00-1.371 3.312c0 1.251.486 2.43 1.37 3.312L24 41.121V46.5c0 4.134 3.366 7.5 7.5 7.5h6.15C46.665 54 54 46.665 54 37.65c0-4.365-1.701-8.472-4.788-11.562zM37.65 51H31.5a4.505 4.505 0 01-4.5-4.5v-2.379l3.441 3.441a1.501 1.501 0 002.121 0 1.507 1.507 0 000-2.124l-7.785-7.785a1.665 1.665 0 01-.492-1.188c0-.447.174-.87.492-1.188.636-.636 1.743-.636 2.379 0l3.285 3.285a1.501 1.501 0 002.121 0 1.507 1.507 0 000-2.121l-3.75-3.75a1.682 1.682 0 010-2.379c.636-.636 1.743-.636 2.379 0l2.25 2.25a1.501 1.501 0 002.121 0 1.507 1.507 0 000-2.121l-1.5-1.5a1.682 1.682 0 010-2.379c.636-.636 1.743-.636 2.379 0l1.5 1.5a1.501 1.501 0 002.121 0 1.507 1.507 0 00-.003-2.124 1.66 1.66 0 01-.492-1.188c0-.45.177-.873.495-1.188a1.682 1.682 0 012.379 0l4.65 4.65A13.264 13.264 0 0151 37.65C51 45.012 45.012 51 37.65 51z"})]})}function Vm(){return u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"91",height:"72",children:u.jsx("path",{d:"M45.176 57.627a7.122 7.122 0 00-7.114 7.114 7.122 7.122 0 007.114 7.114 7.122 7.122 0 007.115-7.114 7.122 7.122 0 00-7.115-7.114zm0 10.671a3.561 3.561 0 01-3.557-3.557 3.561 3.561 0 013.557-3.557 3.561 3.561 0 013.558 3.557 3.561 3.561 0 01-3.558 3.557zm-24.9-9.604a6.054 6.054 0 00-6.047 6.047 6.054 6.054 0 006.047 6.047 6.054 6.054 0 006.047-6.047 6.054 6.054 0 00-6.047-6.047zm0 8.537a2.493 2.493 0 01-2.49-2.49 2.493 2.493 0 012.49-2.49 2.493 2.493 0 012.49 2.49 2.493 2.493 0 01-2.49 2.49zm49.8-8.537a6.054 6.054 0 00-6.046 6.047 6.054 6.054 0 006.047 6.047 6.054 6.054 0 006.047-6.047 6.054 6.054 0 00-6.047-6.047zm0 8.537a2.493 2.493 0 01-2.49-2.49 2.493 2.493 0 012.49-2.49 2.493 2.493 0 012.49 2.49 2.493 2.493 0 01-2.49 2.49zm-10.67-40.908c5.295 0 9.604-4.308 9.604-9.604 0-5.296-4.309-9.605-9.605-9.605s-9.604 4.309-9.604 9.605 4.308 9.604 9.604 9.604zm0-15.651a6.054 6.054 0 016.047 6.047 6.054 6.054 0 01-6.048 6.047 6.054 6.054 0 01-6.047-6.047 6.054 6.054 0 016.047-6.047zM88.573 25.09c.98 0 1.779.798 1.779 1.778s-.799 1.779-1.779 1.779c-.98 0-1.778-.799-1.778-1.779 0-.98.798-1.778 1.778-1.778zM1.78 28.648A1.78 1.78 0 010 26.869c0-.98.799-1.778 1.779-1.778.98 0 1.778.798 1.778 1.778a1.78 1.78 0 01-1.778 1.779zM85.017 5.272h-8.893V1.78C76.124.796 75.328 0 74.346 0H16.007c-.982 0-1.778.796-1.778 1.779v3.557H5.336A5.336 5.336 0 000 10.672v8.132c0 .946.711 1.774 1.655 1.838a1.781 1.781 0 001.902-1.774v-8.196c.002-.979.8-1.777 1.779-1.779h8.893v36.64H5.336a1.786 1.786 0 01-1.779-1.78v-8.88c0-1.02-.866-1.845-1.902-1.774C.711 33.163 0 33.99 0 34.937v8.817a5.336 5.336 0 005.336 5.335h8.893v3.558c0 .982.796 1.778 1.778 1.778h58.339c.982 0 1.778-.796 1.778-1.778v-3.621h8.893a5.336 5.336 0 005.336-5.336v-8.817c0-.946-.711-1.774-1.655-1.838a1.781 1.781 0 00-1.902 1.774v8.88a1.786 1.786 0 01-1.779 1.78h-8.893V8.829h8.893c.978.002 1.777.8 1.779 1.779v8.196c0 1.02.866 1.845 1.902 1.774.944-.064 1.655-.892 1.655-1.838v-8.132a5.336 5.336 0 00-5.336-5.336zm-12.45-1.715v46.63L48.87 28.037c-3.02-2.823-7.75-2.823-10.769 0l-5.318 4.971L19.78 16.754a4.816 4.816 0 00-1.994-1.475V3.557h54.78zM17.786 19.955l17.715 22.144c1.48 1.85 4.258-.372 2.778-2.223l-3.266-4.082 5.518-5.159a4.34 4.34 0 015.911 0l21.644 20.233h-50.3V19.955z"})})}const Bm="/fem_photosnap/assets/bg-beta-f097c30a.jpg",Wm="/fem_photosnap/assets/bg-beta-026d651b.jpg",Qm="/fem_photosnap/assets/bg-beta-d3910d4b.jpg",Ym=me.div`
  position: relative;
  background-color: rgb(var(--black));

  img {
    width: 100%;
  }

  .content {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 165px;

    .fs-h1 {
      color: rgb(var(--white));
      max-width: 400px;
    }

    @media screen and (max-width: 1000px) {
      padding: 0 40px;
    }

    @media screen and (max-width: 700px) {
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 25px;
      padding: 0 30px;
    }
  }

  &::before {
    content: "";
    background-image: var(--main-accent);
    width: 6px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    @media screen and (max-width: 700px) {
      width: 130px;
      height: 6px;
      top: 0;
      left: 35px;
    }
  }
`;function O0({breakPoints:e}){return u.jsxs(Ym,{children:[u.jsxs("picture",{children:[u.jsx("source",{srcSet:Bm,media:`(min-width: ${e.desktop}px)`}),u.jsx("source",{srcSet:Wm,media:`(min-width: ${e.tablet}px)`}),u.jsx("img",{src:Qm,alt:"background image"})]}),u.jsxs("div",{className:"content",children:[u.jsx("h1",{className:"fs-h1 scaled",children:"We’re in beta. Get your invite today!"}),u.jsxs("a",{href:"https://4chan.org/g/catalog",className:"button-secondary white fs-h4",target:"_blank",children:[u.jsx("span",{children:"get an invite"}),u.jsx(Un,{})]})]})]})}const Km=me.header`
  display: flex;

  picture {
    background-color: black;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .content {
    flex-grow: 1;
    background-color: rgb(var(--black));
    color: rgb(var(--white));
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 175px 110px;
    position: relative;

    &::before {
      content: "";
      background-image: var(--main-accent);
      width: 6px;
      height: 30%;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);

      @media screen and (max-width: 700px) {
        width: 130px;
        height: 6px;
        top: 0;
        left: 30px;
      }
    }

    .fs-body-1 {
      opacity: 0.6;
      max-width: 390px;
    }

    @media screen and (max-width: 1400px) {
      padding: 175px 55px;
    }

    @media screen and (max-width: 700px) {
      padding: 70px 30px;
    }
  }

  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;
    gap: 0;
  }
`;function A0({title:e,description:t,image:n}){return u.jsxs(Km,{children:[u.jsxs("div",{className:"content",children:[u.jsx("h1",{className:"fs-h1 scaled",children:e}),u.jsx("p",{className:"fs-body-1",children:t})]}),u.jsxs("picture",{children:[u.jsx("source",{srcSet:n.desktop.src,media:`(min-width: ${n.desktop.breakPoint}px)`}),u.jsx("source",{srcSet:n.tablet.src,media:`(min-width: ${n.tablet.breakPoint}px)`}),u.jsx("img",{src:n.mobile.src,alt:"features"})]})]})}function Gm({breakPoints:e}){const t=I.useMemo(()=>({desktop:{src:Am,breakPoint:e.desktop},tablet:{src:Dm,breakPoint:e.tablet},mobile:{src:Fm,breakPoint:e.mobile}}),[]),n=I.useMemo(()=>[{Icon:T0,title:"100% Responsive",description:"No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."},{Icon:R0,title:"No Photo Upload Limit",description:"Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."},{Icon:I0,title:"Available to Embed",description:"Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. "},{Icon:Hm,title:"Custom Domain",description:"With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!"},{Icon:Um,title:"Boost Your Exposure",description:"Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list."},{Icon:Vm,title:"Boost Your Exposure",description:"Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories."}],[]);return u.jsxs(bm,{children:[u.jsx(A0,{title:"features",description:"We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.",image:t}),u.jsx("section",{className:"selling-points",children:n.map((r,o)=>u.jsx(L0,{...r},o))}),u.jsx(O0,{breakPoints:e})]})}const Xm="/fem_photosnap/assets/hero-9ff5db3a.jpg",Zm="/fem_photosnap/assets/hero-e02cfdb4.jpg",Jm="/fem_photosnap/assets/hero-8aaf4d44.jpg",qm=me.div`
  .rate {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    padding: 120px 0 160px 0;

    .prices {
      display: flex;
      align-items: center;
      gap: 30px;

      @media screen and (max-width: 1200px) {
        flex-direction: column;
        gap: 24px;
      }
    }

    @media screen and (max-width: 1200px) {
      padding: 112px 0;
    }

    @media screen and (max-width: 625px) {
      padding: 65px 0;
    }
  }

  .comparision {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 55px;
    padding-bottom: 160px;

    .fs-h1 {
      @media screen and (max-width: 625px) {
        display: none;
      }
    }

    .table {
      width: 730px;

      .row {
        display: flex;
        justify-content: space-between;
        padding: 24px;
        border-bottom: 1px solid rgb(var(--light-gray));

        &:first-of-type {
          border-color: rgb(var(--black));
        }

        .points {
          display: flex;

          .item {
            display: grid;
            place-items: center;
            text-align: center;
            width: 140px;

            @media screen and (max-width: 750px) {
              width: 80px;
            }

            @media screen and (max-width: 625px) {
              width: 16px;
            }
          }

          .point {
            height: 16px;
            position: relative;

            input[type="checkbox"] {
              appearance: none;
              position: absolute;
              inset: 0;
            }

            .fs-h4 {
              display: none;
              opacity: 0.5;

              @media screen and (max-width: 625px) {
                display: block;
              }
            }

            @media screen and (max-width: 625px) {
              display: flex;
              flex-direction: column;
              gap: 8px;
            }
          }

          @media screen and (max-width: 625px) {
            justify-content: space-between;
          }
        }

        @media screen and (max-width: 625px) {
          flex-direction: column;
          gap: 17px;

          &:first-of-type {
            .points {
              display: none;
            }
          }
        }
      }

      @media screen and (max-width: 750px) {
        width: 600px;
      }

      @media screen and (max-width: 625px) {
        width: 85%;
      }
    }

    @media screen and (max-width: 1000px) {
      padding-bottom: 112px;
    }

    @media screen and (max-width: 625px) {
      padding-bottom: 65px;
    }
  }
`,e2=me.div`
  display: flex;

  label {
    color: rgb(var(--black));
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 0.5;
    transition: opacity 0.33s;

    &.active {
      opacity: 1;
    }

    &:first-of-type {
      padding-right: 32px;
    }

    &:last-of-type {
      padding-left: 32px;
    }
  }

  .inputs {
    border-radius: 64px;
    height: 32px;
    position: relative;
    transition: background-color 0.33s;

    &.a {
      background-color: rgb(var(--light-gray));
    }

    &.b {
      background-color: rgb(var(--black));
    }

    input[type="radio"] {
      appearance: none;
      width: 32px;
      height: 32px;

      &:first-of-type:checked {
        ~ .ball {
          background-color: rgb(var(--black));
        }
      }

      &:last-of-type:checked {
        ~ .ball {
          background-color: rgb(var(--white));
          transform: translate(35px, -50%);
        }
      }
    }

    .ball {
      position: absolute;
      width: 24px;
      height: 24px;
      border-radius: 100%;
      top: 50%;
      transform: translate(5px, -50%);
      transition: transform 0.33s, background-color 0.33s;
    }
  }
`;function t2({isA:e,aLabel:t,bLabel:n,toggle:r}){const o=I.useMemo(()=>crypto.randomUUID(),[]);return u.jsxs(e2,{children:[u.jsx("label",{htmlFor:`a-${o}`,className:`fs-h3 ${e?"active":""}`,children:t}),u.jsxs("div",{className:`inputs ${e?"a":"b"}`,children:[u.jsx("input",{type:"radio",id:`a-${o}`,name:`toggle-set-${o}`,onChange:r,checked:e}),u.jsx("input",{type:"radio",id:`b-${o}`,name:`toggle-set-${o}`,onChange:r,checked:!e}),u.jsx("div",{className:"ball"})]}),u.jsx("label",{htmlFor:`b-${o}`,className:`fs-h3 ${e?"":"active"}`,children:n})]})}const n2=me.div`
  background-color: rgb(var(--impure-white));
  color: rgb(var(--black));
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px;
  padding-top: 55px;
  width: fit-content;
  text-align: center;

  &.pro {
    background-color: rgb(var(--black));
    color: rgb(var(--white));
    padding: 90px 40px 70px 40px;
    position: relative;

    &::before {
      content: "";
      background-image: var(--main-accent);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 6px;

      @media screen and (max-width: 1200px) {
        width: 6px;
        height: 100%;
      }

      @media screen and (max-width: 600px) {
        width: 100%;
        height: 6px;
      }
    }

    @media screen and (max-width: 1200px) {
      padding: 40px;
    }

    @media screen and (max-width: 600px) {
      padding: 50px 35px;
    }
  }

  .name {
    display: flex;
    flex-direction: column;
    gap: 18px;

    .fs-body-1 {
      max-width: 270px;
      opacity: 0.6;
    }

    @media screen and (max-width: 1200px) {
      grid-row: 1 / 2;
      grid-column: 1 / 2;
    }
  }

  .price-container {
    .fs-body-1 {
      opacity: 0.6;

      @media screen and (max-width: 1200px) {
        text-align: end;
      }

      @media screen and (max-width: 600px) {
        text-align: center;
      }
    }

    @media screen and (max-width: 1200px) {
      grid-row: 1 / 2;
      grid-column: 2 / 3;
    }
  }

  @media screen and (max-width: 1200px) {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto auto;
    text-align: start;
    width: 100%;
    column-gap: 180px;
  }

  @media screen and (max-width: 735px) {
    column-gap: 50px;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    text-align: center;
    padding: 40px 35px;
    padding-top: 55px;
  }
`;function r2({title:e,description:t,monthlyRate:n,yearlyRate:r,isMonthly:o,link:i,isPro:l}){return u.jsxs(n2,{className:`price-card ${l?"pro":""}`,children:[u.jsxs("div",{className:"name",children:[u.jsx("h2",{className:"fs-h2",children:e}),u.jsx("p",{className:"fs-body-1",children:t})]}),u.jsxs("div",{className:"price-container",children:[u.jsxs("h1",{className:"fs-h1",children:["$",o?n.toFixed(2):r.toFixed(2)]}),u.jsxs("p",{className:"fs-body-1",children:["per ",o?"month":"year"]})]}),u.jsx("a",{href:i,className:`button-primary fs-h4 ${l?"white":"black"}`,target:"_blank",children:"pick plan"})]})}function el(){return u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"15",children:u.jsx("path",{fill:"none",stroke:"#000",strokeWidth:"2",d:"M1 8.124L5.623 13 17 1"})})}function o2({breakPoints:e}){const[t,n]=I.useState(!0),r=I.useMemo(()=>({desktop:{src:Xm,breakPoint:e.desktop},tablet:{src:Zm,breakPoint:e.tablet},mobile:{src:Jm,breakPoint:e.mobile}}),[]),o=I.useMemo(()=>[{title:"Basic",description:"Includes basic usage of our platform. Recommended for new and aspiring photographers.",monthlyRate:19,yearlyRate:190,link:"https://www.youtube.com/watch?v=P4ALDytLAXQ",isPro:!1},{title:"Pro",description:"More advanced features available. Recommended for photography veterans and professionals.",monthlyRate:39,yearlyRate:390,link:"https://www.youtube.com/watch?v=5sHu__--POY",isPro:!0},{title:"Business",description:"Additional features available such as more detailed metrics. Recommended for business owners.",monthlyRate:99,yearlyRate:990,link:"https://www.youtube.com/watch?v=ivp7AmHZp1E",isPro:!1}],[]),i=I.useMemo(()=>[{name:"UNLIMITED SHITPOSTING",basic:!0,pro:!0,business:!0},{name:"UNLIMITED PHOTO UPLOAD",basic:!0,pro:!0,business:!0},{name:"EMBEDDING CUSTOM CONTENT",basic:!1,pro:!0,business:!0},{name:"CUSTOMIZE METADATA",basic:!1,pro:!0,business:!0},{name:"ADVANCED METRICS",basic:!1,pro:!1,business:!0},{name:"PHOTO DOWNLOADS",basic:!1,pro:!1,business:!0},{name:"SEARCH ENGINE INDEXING",basic:!1,pro:!1,business:!0},{name:"CUSTOM ANALYTICS",basic:!1,pro:!1,business:!0}],[]);function l(){n(s=>!s)}return u.jsxs(qm,{children:[u.jsx(A0,{title:"pricing",description:"Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.",image:r}),u.jsxs("section",{className:"rate",children:[u.jsx(t2,{isA:t,aLabel:"Monthly",bLabel:"Yearly",toggle:l}),u.jsx("div",{className:"prices",children:o.map((s,a)=>u.jsx(r2,{...s,isMonthly:t},a))})]}),u.jsxs("section",{className:"comparision",children:[u.jsx("h1",{className:"fs-h1 scaled",children:"compare"}),u.jsxs("ul",{className:"table",children:[u.jsxs("li",{className:"row",children:[u.jsx("p",{className:"fs-h4",children:"the features"}),u.jsxs("div",{className:"points",children:[u.jsx("p",{className:"fs-h4 item",children:"basic"}),u.jsx("p",{className:"fs-h4 item",children:"pro"}),u.jsx("p",{className:"fs-h4 item",children:"business"})]})]}),i.map((s,a)=>u.jsxs("li",{className:"row",children:[u.jsx("p",{className:"fs-h4",children:s.name}),u.jsxs("ul",{className:"points",children:[u.jsxs("li",{className:"point",children:[u.jsx("span",{className:"fs-h4",children:"basic"}),u.jsxs("label",{className:"item",children:[u.jsx("input",{type:"checkbox",checked:s.basic,disabled:!0}),s.basic&&u.jsx(el,{})]})]}),u.jsxs("li",{className:"point",children:[u.jsx("span",{className:"fs-h4",children:"pro"}),u.jsxs("label",{className:"item",children:[u.jsx("input",{type:"checkbox",checked:s.pro,disabled:!0}),s.pro&&u.jsx(el,{})]})]}),u.jsxs("li",{className:"point",children:[u.jsx("span",{className:"fs-h4",children:"business"}),u.jsxs("label",{className:"item",children:[u.jsx("input",{type:"checkbox",checked:s.business,disabled:!0}),s.business&&u.jsx(el,{})]})]})]})]},a))]})]}),u.jsx(O0,{breakPoints:e})]})}function i2(){const[e]=i0(),t=I.useMemo(()=>({desktop:1350,tablet:700,mobile:500}),[]);return I.useEffect(()=>{window.scrollTo(0,0)},[e]),u.jsxs(Xh,{children:[u.jsx(fm,{}),u.jsxs(Qp,{children:[u.jsx(Zn,{path:"/fem_photosnap/",children:u.jsx(cm,{breakPoints:t})}),u.jsx(Zn,{path:"/fem_photosnap/stories",children:u.jsx(Om,{breakPoints:t})}),u.jsx(Zn,{path:"/fem_photosnap/features",children:u.jsx(Gm,{breakPoints:t})}),u.jsx(Zn,{path:"/fem_photosnap/pricing",children:u.jsx(o2,{breakPoints:t})}),u.jsx(Zn,{children:u.jsx("div",{className:"not-found",children:u.jsxs("div",{className:"container",children:[u.jsx("h1",{className:"fs-h1",children:"404"}),u.jsx("h3",{className:"fs-h3",children:"Not Found"})]})})})]}),u.jsx(xm,{})]})}tl.createRoot(document.getElementById("root")).render(u.jsx(Gt.StrictMode,{children:u.jsx(i2,{})}));
