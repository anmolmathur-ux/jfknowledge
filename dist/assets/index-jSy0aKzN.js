var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function ie(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ae(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var oe=/\/+/g;function se(e,t){return typeof e==`object`&&e&&e.key!=null?ae(``+e.key):t.toString(36)}function ce(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function le(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,le(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+se(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(oe,`$&/`)+`/`),le(o,r,i,``,function(e){return e})):o!=null&&(ie(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(oe,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+se(a,u),c+=le(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+se(a,u++),c+=le(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return le(ce(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ue(e,t,n){if(e==null)return e;var r=[],i=0;return le(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function de(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var w=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},T={map:ue,forEach:function(e,t,n){ue(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ue(e,function(){t++}),t},toArray:function(e){return ue(e,function(e){return e})||[]},only:function(e){if(!ie(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=T,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ie,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:de}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,w)}catch(e){w(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.7`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,ie());else{var t=n(l);t!==null&&se(x,t.startTime-e)}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function re(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&se(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ie():ee=!1}}}var ie;if(typeof y==`function`)ie=function(){y(re)};else if(typeof MessageChannel<`u`){var ae=new MessageChannel,oe=ae.port2;ae.port1.onmessage=re,ie=function(){oe.postMessage(null)}}else ie=function(){_(re,0)};function se(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,se(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,ie()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.7`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),ie=Symbol.for(`react.lazy`),ae=Symbol.for(`react.activity`),oe=Symbol.for(`react.memo_cache_sentinel`),se=Symbol.iterator;function ce(e){return typeof e!=`object`||!e?null:(e=se&&e[se]||e[`@@iterator`],typeof e==`function`?e:null)}var le=Symbol.for(`react.client.reference`);function ue(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===le?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case ae:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?ue(e.type)||`Memo`:t;case ie:t=e._payload,e=e._init;try{return ue(e(t))}catch{}}return null}var de=Array.isArray,w=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E={pending:!1,data:null,method:null,action:null},fe=[],pe=-1;function me(e){return{current:e}}function D(e){0>pe||(e.current=fe[pe],fe[pe]=null,pe--)}function O(e,t){pe++,fe[pe]=e.current,e.current=t}var he=me(null),ge=me(null),_e=me(null),ve=me(null);function ye(e,t){switch(O(_e,t),O(ge,e),O(he,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}D(he),O(he,e)}function be(){D(he),D(ge),D(_e)}function xe(e){e.memoizedState!==null&&O(ve,e);var t=he.current,n=Hd(t,e.type);t!==n&&(O(ge,e),O(he,n))}function Se(e){ge.current===e&&(D(he),D(ge)),ve.current===e&&(D(ve),Qf._currentValue=E)}var Ce,we;function Te(e){if(Ce===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ce=t&&t[1]||``,we=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ce+e+we}var Ee=!1;function De(e,t){if(!e||Ee)return``;Ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ee=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Te(n):``}function Oe(e,t){switch(e.tag){case 26:case 27:case 5:return Te(e.type);case 16:return Te(`Lazy`);case 13:return e.child!==t&&t!==null?Te(`Suspense Fallback`):Te(`Suspense`);case 19:return Te(`SuspenseList`);case 0:case 15:return De(e.type,!1);case 11:return De(e.type.render,!1);case 1:return De(e.type,!0);case 31:return Te(`Activity`);default:return``}}function ke(e){try{var t=``,n=null;do t+=Oe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ae=Object.prototype.hasOwnProperty,je=t.unstable_scheduleCallback,Me=t.unstable_cancelCallback,Ne=t.unstable_shouldYield,Pe=t.unstable_requestPaint,Fe=t.unstable_now,Ie=t.unstable_getCurrentPriorityLevel,Le=t.unstable_ImmediatePriority,Re=t.unstable_UserBlockingPriority,ze=t.unstable_NormalPriority,Be=t.unstable_LowPriority,Ve=t.unstable_IdlePriority,He=t.log,Ue=t.unstable_setDisableYieldValue,We=null,Ge=null;function Ke(e){if(typeof He==`function`&&Ue(e),Ge&&typeof Ge.setStrictMode==`function`)try{Ge.setStrictMode(We,e)}catch{}}var qe=Math.clz32?Math.clz32:Xe,Je=Math.log,Ye=Math.LN2;function Xe(e){return e>>>=0,e===0?32:31-(Je(e)/Ye|0)|0}var Ze=256,Qe=262144,$e=4194304;function et(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=et(n))):i=et(o):i=et(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=et(n))):i=et(o)):i=et(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function nt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function rt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function it(){var e=$e;return $e<<=1,!($e&62914560)&&($e=4194304),e}function at(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ot(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function st(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-qe(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ct(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ct(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-qe(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function lt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ut(e,t){var n=t&-t;return n=n&42?1:dt(n),(n&(e.suspendedLanes|t))===0?n:0}function dt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ft(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function pt(){var e=T.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function mt(e,t){var n=T.p;try{return T.p=e,t()}finally{T.p=n}}var ht=Math.random().toString(36).slice(2),k=`__reactFiber$`+ht,gt=`__reactProps$`+ht,_t=`__reactContainer$`+ht,vt=`__reactEvents$`+ht,yt=`__reactListeners$`+ht,bt=`__reactHandles$`+ht,xt=`__reactResources$`+ht,St=`__reactMarker$`+ht;function Ct(e){delete e[k],delete e[gt],delete e[vt],delete e[yt],delete e[bt]}function wt(e){var t=e[k];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[k]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[k])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Tt(e){if(e=e[k]||e[_t]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Et(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Dt(e){var t=e[xt];return t||=e[xt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function A(e){e[St]=!0}var Ot=new Set,kt={};function At(e,t){jt(e,t),jt(e+`Capture`,t)}function jt(e,t){for(kt[e]=t,e=0;e<t.length;e++)Ot.add(t[e])}var Mt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Nt={},Pt={};function Ft(e){return Ae.call(Pt,e)?!0:Ae.call(Nt,e)?!1:Mt.test(e)?Pt[e]=!0:(Nt[e]=!0,!1)}function It(e,t,n){if(Ft(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Lt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Rt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function zt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Bt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Vt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ht(e){if(!e._valueTracker){var t=Bt(e)?`checked`:`value`;e._valueTracker=Vt(e,t,``+e[t])}}function Ut(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Bt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Wt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Gt=/[\n"\\]/g;function Kt(e){return e.replace(Gt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function qt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+zt(t)):e.value!==``+zt(t)&&(e.value=``+zt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Yt(e,o,zt(n)):Yt(e,o,zt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+zt(s):e.removeAttribute(`name`)}function Jt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ht(e);return}n=n==null?``:``+zt(n),t=t==null?n:``+zt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ht(e)}function Yt(e,t,n){t===`number`&&Wt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Xt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Zt(e,t,n){if(t!=null&&(t=``+zt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+zt(n)}function Qt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(de(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=zt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ht(e)}function $t(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var en=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function tn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||en.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function nn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&tn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&tn(e,o,t[o])}function rn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var an=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),on=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sn(e){return on.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function cn(){}var ln=null;function un(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dn=null,fn=null;function pn(e){var t=Tt(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(qt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Kt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[gt]||null;if(!a)throw Error(i(90));qt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ut(r)}break a;case`textarea`:Zt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Xt(e,!!n.multiple,t,!1)}}}var mn=!1;function hn(e,t,n){if(mn)return e(t,n);mn=!0;try{return e(t)}finally{if(mn=!1,(dn!==null||fn!==null)&&(bu(),dn&&(t=dn,e=fn,fn=dn=null,pn(t),e)))for(t=0;t<e.length;t++)pn(e[t])}}function gn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[gt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var _n=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),vn=!1;if(_n)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){vn=!0}}),window.addEventListener(`test`,yn,yn),window.removeEventListener(`test`,yn,yn)}catch{vn=!1}var bn=null,xn=null,Sn=null;function Cn(){if(Sn)return Sn;var e,t=xn,n=t.length,r,i=`value`in bn?bn.value:bn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Sn=i.slice(e,1<r?1-r:void 0)}function wn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tn(){return!0}function En(){return!1}function Dn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Tn:En,this.isPropagationStopped=En,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Tn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Tn)},persist:function(){},isPersistent:Tn}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kn=Dn(On),An=h({},On,{view:0,detail:0}),jn=Dn(An),Mn,Nn,Pn,Fn=h({},An,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Pn&&(Pn&&e.type===`mousemove`?(Mn=e.screenX-Pn.screenX,Nn=e.screenY-Pn.screenY):Nn=Mn=0,Pn=e),Mn)},movementY:function(e){return`movementY`in e?e.movementY:Nn}}),In=Dn(Fn),Ln=Dn(h({},Fn,{dataTransfer:0})),Rn=Dn(h({},An,{relatedTarget:0})),zn=Dn(h({},On,{animationName:0,elapsedTime:0,pseudoElement:0})),Bn=Dn(h({},On,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Vn=Dn(h({},On,{data:0})),Hn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Un={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Wn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Gn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wn[e])?!!t[e]:!1}function Kn(){return Gn}var qn=Dn(h({},An,{key:function(e){if(e.key){var t=Hn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=wn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Un[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kn,charCode:function(e){return e.type===`keypress`?wn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?wn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Jn=Dn(h({},Fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Yn=Dn(h({},An,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kn})),Xn=Dn(h({},On,{propertyName:0,elapsedTime:0,pseudoElement:0})),Zn=Dn(h({},Fn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Qn=Dn(h({},On,{newState:0,oldState:0})),$n=[9,13,27,32],er=_n&&`CompositionEvent`in window,tr=null;_n&&`documentMode`in document&&(tr=document.documentMode);var nr=_n&&`TextEvent`in window&&!tr,rr=_n&&(!er||tr&&8<tr&&11>=tr),ir=` `,ar=!1;function or(e,t){switch(e){case`keyup`:return $n.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function sr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var cr=!1;function lr(e,t){switch(e){case`compositionend`:return sr(t);case`keypress`:return t.which===32?(ar=!0,ir):null;case`textInput`:return e=t.data,e===ir&&ar?null:e;default:return null}}function ur(e,t){if(cr)return e===`compositionend`||!er&&or(e,t)?(e=Cn(),Sn=xn=bn=null,cr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return rr&&t.locale!==`ko`?null:t.data;default:return null}}var dr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!dr[e.type]:t===`textarea`}function pr(e,t,n,r){dn?fn?fn.push(r):fn=[r]:dn=r,t=Ed(t,`onChange`),0<t.length&&(n=new kn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var mr=null,hr=null;function gr(e){yd(e,0)}function _r(e){if(Ut(Et(e)))return e}function vr(e,t){if(e===`change`)return t}var yr=!1;if(_n){var br;if(_n){var xr=`oninput`in document;if(!xr){var Sr=document.createElement(`div`);Sr.setAttribute(`oninput`,`return;`),xr=typeof Sr.oninput==`function`}br=xr}else br=!1;yr=br&&(!document.documentMode||9<document.documentMode)}function Cr(){mr&&(mr.detachEvent(`onpropertychange`,wr),hr=mr=null)}function wr(e){if(e.propertyName===`value`&&_r(hr)){var t=[];pr(t,hr,e,un(e)),hn(gr,t)}}function Tr(e,t,n){e===`focusin`?(Cr(),mr=t,hr=n,mr.attachEvent(`onpropertychange`,wr)):e===`focusout`&&Cr()}function Er(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return _r(hr)}function Dr(e,t){if(e===`click`)return _r(t)}function Or(e,t){if(e===`input`||e===`change`)return _r(t)}function kr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Ar=typeof Object.is==`function`?Object.is:kr;function jr(e,t){if(Ar(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ae.call(t,i)||!Ar(e[i],t[i]))return!1}return!0}function Mr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nr(e,t){var n=Mr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Mr(n)}}function Pr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wt(e.document)}return t}function Ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Lr=_n&&`documentMode`in document&&11>=document.documentMode,Rr=null,zr=null,Br=null,Vr=!1;function Hr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vr||Rr==null||Rr!==Wt(r)||(r=Rr,`selectionStart`in r&&Ir(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Br&&jr(Br,r)||(Br=r,r=Ed(zr,`onSelect`),0<r.length&&(t=new kn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Rr)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Wr={animationend:Ur(`Animation`,`AnimationEnd`),animationiteration:Ur(`Animation`,`AnimationIteration`),animationstart:Ur(`Animation`,`AnimationStart`),transitionrun:Ur(`Transition`,`TransitionRun`),transitionstart:Ur(`Transition`,`TransitionStart`),transitioncancel:Ur(`Transition`,`TransitionCancel`),transitionend:Ur(`Transition`,`TransitionEnd`)},Gr={},Kr={};_n&&(Kr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),`TransitionEvent`in window||delete Wr.transitionend.transition);function qr(e){if(Gr[e])return Gr[e];if(!Wr[e])return e;var t=Wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kr)return Gr[e]=t[n];return e}var Jr=qr(`animationend`),Yr=qr(`animationiteration`),Xr=qr(`animationstart`),Zr=qr(`transitionrun`),Qr=qr(`transitionstart`),$r=qr(`transitioncancel`),ei=qr(`transitionend`),ti=new Map,ni=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ni.push(`scrollEnd`);function ri(e,t){ti.set(e,t),At(t,[e])}var ii=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ai=[],oi=0,si=0;function ci(){for(var e=oi,t=si=oi=0;t<e;){var n=ai[t];ai[t++]=null;var r=ai[t];ai[t++]=null;var i=ai[t];ai[t++]=null;var a=ai[t];if(ai[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&fi(n,i,a)}}function li(e,t,n,r){ai[oi++]=e,ai[oi++]=t,ai[oi++]=n,ai[oi++]=r,si|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ui(e,t,n,r){return li(e,t,n,r),pi(e)}function di(e,t){return li(e,null,null,t),pi(e)}function fi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-qe(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function pi(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var mi={};function hi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(e,t,n,r){return new hi(e,t,n,r)}function _i(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vi(e,t){var n=e.alternate;return n===null?(n=gi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function yi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function bi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)_i(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,he.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ae:return e=gi(31,n,t,a),e.elementType=ae,e.lanes=o,e;case y:return xi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=gi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case te:return e=gi(13,n,t,a),e.elementType=te,e.lanes=o,e;case ne:return e=gi(19,n,t,a),e.elementType=ne,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case C:s=11;break a;case re:s=14;break a;case ie:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=gi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function xi(e,t,n,r){return e=gi(7,e,r,t),e.lanes=n,e}function Si(e,t,n){return e=gi(6,e,null,t),e.lanes=n,e}function Ci(e){var t=gi(18,null,null,0);return t.stateNode=e,t}function wi(e,t,n){return t=gi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ti=new WeakMap;function Ei(e,t){if(typeof e==`object`&&e){var n=Ti.get(e);return n===void 0?(t={value:e,source:t,stack:ke(t)},Ti.set(e,t),t):n}return{value:e,source:t,stack:ke(t)}}var Di=[],Oi=0,ki=null,Ai=0,ji=[],Mi=0,Ni=null,Pi=1,Fi=``;function Ii(e,t){Di[Oi++]=Ai,Di[Oi++]=ki,ki=e,Ai=t}function Li(e,t,n){ji[Mi++]=Pi,ji[Mi++]=Fi,ji[Mi++]=Ni,Ni=e;var r=Pi;e=Fi;var i=32-qe(r)-1;r&=~(1<<i),n+=1;var a=32-qe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Pi=1<<32-qe(t)+i|n<<i|r,Fi=a+e}else Pi=1<<a|n<<i|r,Fi=e}function Ri(e){e.return!==null&&(Ii(e,1),Li(e,1,0))}function zi(e){for(;e===ki;)ki=Di[--Oi],Di[Oi]=null,Ai=Di[--Oi],Di[Oi]=null;for(;e===Ni;)Ni=ji[--Mi],ji[Mi]=null,Fi=ji[--Mi],ji[Mi]=null,Pi=ji[--Mi],ji[Mi]=null}function Bi(e,t){ji[Mi++]=Pi,ji[Mi++]=Fi,ji[Mi++]=Ni,Pi=t.id,Fi=t.overflow,Ni=e}var Vi=null,j=null,M=!1,Hi=null,Ui=!1,Wi=Error(i(519));function Gi(e){throw Zi(Ei(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Wi}function Ki(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[k]=e,t[gt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Jt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Qt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=cn),t=!0):t=!1,t||Gi(e,!0)}function qi(e){for(Vi=e.return;Vi;)switch(Vi.tag){case 5:case 31:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:Vi=Vi.return}}function Ji(e){if(e!==Vi)return!1;if(!M)return qi(e),M=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&j&&Gi(e),qi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));j=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));j=uf(e)}else t===27?(t=j,Zd(e.type)?(e=lf,lf=null,j=e):j=t):j=Vi?cf(e.stateNode.nextSibling):null;return!0}function Yi(){j=Vi=null,M=!1}function Xi(){var e=Hi;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Hi=null),e}function Zi(e){Hi===null?Hi=[e]:Hi.push(e)}var Qi=me(null),$i=null,ea=null;function ta(e,t,n){O(Qi,t._currentValue),t._currentValue=n}function na(e){e._currentValue=Qi.current,D(Qi)}function ra(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ia(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ra(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ra(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function aa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Ar(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ve.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ia(t,e,n,r),t.flags|=262144}function oa(e){for(e=e.firstContext;e!==null;){if(!Ar(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sa(e){$i=e,ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ca(e){return ua($i,e)}function la(e,t){return $i===null&&sa(e),ua(e,t)}function ua(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ea===null){if(e===null)throw Error(i(308));ea=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ea=ea.next=t;return n}var da=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},fa=t.unstable_scheduleCallback,pa=t.unstable_NormalPriority,N={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ma(){return{controller:new da,data:new Map,refCount:0}}function ha(e){e.refCount--,e.refCount===0&&fa(pa,function(){e.controller.abort()})}var ga=null,_a=0,va=0,ya=null;function ba(e,t){if(ga===null){var n=ga=[];_a=0,va=dd(),ya={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return _a++,t.then(xa,xa),t}function xa(){if(--_a===0&&ga!==null){ya!==null&&(ya.status=`fulfilled`);var e=ga;ga=null,va=0,ya=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Sa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ca=w.S;w.S=function(e,t){tu=Fe(),typeof t==`object`&&t&&typeof t.then==`function`&&ba(e,t),Ca!==null&&Ca(e,t)};var wa=me(null);function Ta(){var e=wa.current;return e===null?G.pooledCache:e}function Ea(e,t){t===null?O(wa,wa.current):O(wa,t.pool)}function Da(){var e=Ta();return e===null?null:{parent:N._currentValue,pool:e}}var Oa=Error(i(460)),ka=Error(i(474)),Aa=Error(i(542)),ja={then:function(){}};function Ma(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Na(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(cn,cn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,La(e),e;default:if(typeof t.status==`string`)t.then(cn,cn);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,La(e),e}throw Fa=t,Oa}}function Pa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Fa=e,Oa):e}}var Fa=null;function Ia(){if(Fa===null)throw Error(i(459));var e=Fa;return Fa=null,e}function La(e){if(e===Oa||e===Aa)throw Error(i(483))}var Ra=null,za=0;function Ba(e){var t=za;return za+=1,Ra===null&&(Ra=[]),Na(Ra,e,t)}function Va(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ha(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ua(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=vi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Si(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===ie&&Pa(i)===t.type)?(t=a(t,n.props),Va(t,n),t.return=e,t):(t=bi(n.type,n.key,n.props,null,e.mode,r),Va(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=wi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=xi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Si(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=bi(t.type,t.key,t.props,null,e.mode,n),Va(n,t),n.return=e,n;case v:return t=wi(t,e.mode,n),t.return=e,t;case ie:return t=Pa(t),f(e,t,n)}if(de(t)||ce(t))return t=xi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ba(t),n);if(t.$$typeof===S)return f(e,la(e,t),n);Ha(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case ie:return n=Pa(n),p(e,t,n,r)}if(de(n)||ce(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ba(n),r);if(n.$$typeof===S)return p(e,t,la(e,n),r);Ha(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ie:return r=Pa(r),m(e,t,n,r,i)}if(de(r)||ce(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ba(r),i);if(r.$$typeof===S)return m(e,t,n,la(t,r),i);Ha(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),M&&Ii(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return M&&Ii(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),M&&Ii(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),M&&Ii(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return M&&Ii(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),M&&Ii(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ie&&Pa(l)===r.type){n(e,r.sibling),c=a(r,o.props),Va(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=xi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=bi(o.type,o.key,o.props,null,e.mode,c),Va(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=wi(o,e.mode,c),c.return=e,e=c}return s(e);case ie:return o=Pa(o),b(e,r,o,c)}if(de(o))return h(e,r,o,c);if(ce(o)){if(l=ce(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ba(o),c);if(o.$$typeof===S)return b(e,r,la(e,o),c);Ha(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Si(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{za=0;var i=b(e,t,n,r);return Ra=null,i}catch(t){if(t===Oa||t===Aa)throw t;var a=gi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Wa=Ua(!0),Ga=Ua(!1),Ka=!1;function qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ja(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=pi(e),fi(e,null,n),t}return li(e,r,t,n),pi(e)}function Za(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}function Qa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var $a=!1;function eo(){if($a){var e=ya;if(e!==null)throw e}}function to(e,t,n,r){$a=!1;var i=e.updateQueue;Ka=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===va&&($a=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ka=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function no(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function ro(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)no(n[e],t)}var io=me(null),ao=me(0);function oo(e,t){e=Gl,O(ao,e),O(io,t),Gl=e|t.baseLanes}function so(){O(ao,Gl),O(io,io.current)}function co(){Gl=ao.current,D(io),D(ao)}var lo=me(null),uo=null;function fo(e){var t=e.alternate;O(P,P.current&1),O(lo,e),uo===null&&(t===null||io.current!==null||t.memoizedState!==null)&&(uo=e)}function po(e){O(P,P.current),O(lo,e),uo===null&&(uo=e)}function mo(e){e.tag===22?(O(P,P.current),O(lo,e),uo===null&&(uo=e)):ho(e)}function ho(){O(P,P.current),O(lo,lo.current)}function go(e){D(lo),uo===e&&(uo=null),D(P)}var P=me(0);function _o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vo=0,F=null,I=null,L=null,yo=!1,bo=!1,xo=!1,So=0,Co=0,wo=null,To=0;function R(){throw Error(i(321))}function Eo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ar(e[n],t[n]))return!1;return!0}function Do(e,t,n,r,i,a){return vo=a,F=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,w.H=e===null||e.memoizedState===null?Us:Ws,xo=!1,a=n(r,i),xo=!1,bo&&(a=ko(t,n,r,i)),Oo(e),a}function Oo(e){w.H=Hs;var t=I!==null&&I.next!==null;if(vo=0,L=I=F=null,yo=!1,Co=0,wo=null,t)throw Error(i(300));e===null||B||(e=e.dependencies,e!==null&&oa(e)&&(B=!0))}function ko(e,t,n,r){F=e;var a=0;do{if(bo&&(wo=null),Co=0,bo=!1,25<=a)throw Error(i(301));if(a+=1,L=I=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}w.H=Gs,o=t(n,r)}while(bo);return o}function Ao(){var e=w.H,t=e.useState()[0];return t=typeof t.then==`function`?Io(t):t,e=e.useState()[0],(I===null?null:I.memoizedState)!==e&&(F.flags|=1024),t}function jo(){var e=So!==0;return So=0,e}function Mo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function No(e){if(yo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}yo=!1}vo=0,L=I=F=null,bo=!1,Co=So=0,wo=null}function Po(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return L===null?F.memoizedState=L=e:L=L.next=e,L}function z(){if(I===null){var e=F.alternate;e=e===null?null:e.memoizedState}else e=I.next;var t=L===null?F.memoizedState:L.next;if(t!==null)L=t,I=e;else{if(e===null)throw F.alternate===null?Error(i(467)):Error(i(310));I=e,e={memoizedState:I.memoizedState,baseState:I.baseState,baseQueue:I.baseQueue,queue:I.queue,next:null},L===null?F.memoizedState=L=e:L=L.next=e}return L}function Fo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Io(e){var t=Co;return Co+=1,wo===null&&(wo=[]),e=Na(wo,e,t),t=F,(L===null?t.memoizedState:L.next)===null&&(t=t.alternate,w.H=t===null||t.memoizedState===null?Us:Ws),e}function Lo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Io(e);if(e.$$typeof===S)return ca(e)}throw Error(i(438,String(e)))}function Ro(e){var t=null,n=F.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=F.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Fo(),F.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=oe;return t.index++,n}function zo(e,t){return typeof t==`function`?t(e):t}function Bo(e){return Vo(z(),I,e)}function Vo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(vo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===va&&(d=!0);else if((vo&p)===p){u=u.next,p===va&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,F.lanes|=p,Kl|=p;f=u.action,xo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,F.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Ar(o,e.memoizedState)&&(B=!0,d&&(n=ya,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ho(e){var t=z(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Ar(o,t.memoizedState)||(B=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Uo(e,t,n){var r=F,a=z(),o=M;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Ar((I||a).memoizedState,n);if(s&&(a.memoizedState=n,B=!0),a=a.queue,ms(Ko.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||L!==null&&L.memoizedState.tag&1){if(r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,a,n,t),null),G===null)throw Error(i(349));o||vo&127||Wo(r,t,n)}return n}function Wo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=F.updateQueue,t===null?(t=Fo(),F.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Go(e,t,n,r){t.value=n,t.getSnapshot=r,qo(t)&&Jo(e)}function Ko(e,t,n){return n(function(){qo(t)&&Jo(e)})}function qo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ar(e,n)}catch{return!0}}function Jo(e){var t=di(e,2);t!==null&&hu(t,e,2)}function Yo(e){var t=Po();if(typeof e==`function`){var n=e;if(e=n(),xo){Ke(!0);try{n()}finally{Ke(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:e},t}function Xo(e,t,n,r){return e.baseState=n,Vo(e,I,typeof r==`function`?r:zo)}function Zo(e,t,n,r,a){if(zs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};w.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Qo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Qo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=w.T,o={};w.T=o;try{var s=n(i,r),c=w.S;c!==null&&c(o,s),$o(e,t,s)}catch(n){ts(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),w.T=a}}else try{a=n(i,r),$o(e,t,a)}catch(n){ts(e,t,n)}}function $o(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){es(e,t,n)},function(n){return ts(e,t,n)}):es(e,t,n)}function es(e,t,n){t.status=`fulfilled`,t.value=n,ns(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Qo(e,n)))}function ts(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ns(t),t=t.next;while(t!==r)}e.action=null}function ns(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function rs(e,t){return t}function is(e,t){if(M){var n=G.formState;if(n!==null){a:{var r=F;if(M){if(j){b:{for(var i=j,a=Ui;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){j=cf(i.nextSibling),r=i.data===`F!`;break a}}Gi(r)}r=!1}r&&(t=n[0])}}return n=Po(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:t},n.queue=r,n=Is.bind(null,F,r),r.dispatch=n,r=Yo(!1),a=Rs.bind(null,F,!1,r.queue),r=Po(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Zo.bind(null,F,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function as(e){return os(z(),I,e)}function os(e,t,n){if(t=Vo(e,t,rs)[0],e=Bo(zo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Io(t)}catch(e){throw e===Oa?Aa:e}else r=t;t=z();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(F.flags|=2048,ls(9,{destroy:void 0},ss.bind(null,i,n),null)),[r,a,e]}function ss(e,t){e.action=t}function cs(e){var t=z(),n=I;if(n!==null)return os(t,n,e);z(),t=t.memoizedState,n=z();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ls(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=F.updateQueue,t===null&&(t=Fo(),F.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function us(){return z().memoizedState}function ds(e,t,n,r){var i=Po();F.flags|=e,i.memoizedState=ls(1|t,{destroy:void 0},n,r===void 0?null:r)}function fs(e,t,n,r){var i=z();r=r===void 0?null:r;var a=i.memoizedState.inst;I!==null&&r!==null&&Eo(r,I.memoizedState.deps)?i.memoizedState=ls(t,a,n,r):(F.flags|=e,i.memoizedState=ls(1|t,a,n,r))}function ps(e,t){ds(8390656,8,e,t)}function ms(e,t){fs(2048,8,e,t)}function hs(e){F.flags|=4;var t=F.updateQueue;if(t===null)t=Fo(),F.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function gs(e){var t=z().memoizedState;return hs({ref:t,nextImpl:e}),function(){if(W&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function _s(e,t){return fs(4,2,e,t)}function vs(e,t){return fs(4,4,e,t)}function ys(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bs(e,t,n){n=n==null?null:n.concat([e]),fs(4,4,ys.bind(null,t,e),n)}function xs(){}function Ss(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Eo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cs(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Eo(t,r[1]))return r[0];if(r=e(),xo){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r}function ws(e,t,n){return n===void 0||vo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),F.lanes|=e,Kl|=e,n)}function Ts(e,t,n,r){return Ar(n,t)?n:io.current===null?!(vo&42)||vo&1073741824&&!(q&261930)?(B=!0,e.memoizedState=n):(e=mu(),F.lanes|=e,Kl|=e,t):(e=ws(e,n,r),Ar(e,t)||(B=!0),e)}function Es(e,t,n,r,i){var a=T.p;T.p=a!==0&&8>a?a:8;var o=w.T,s={};w.T=s,Rs(e,!1,t,n);try{var c=i(),l=w.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ls(e,t,Sa(c,r),pu(e)):Ls(e,t,r,pu(e))}catch(n){Ls(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{T.p=a,o!==null&&s.types!==null&&(o.types=s.types),w.T=o}}function Ds(){}function Os(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=ks(e).queue;Es(e,a,t,E,n===null?Ds:function(){return As(e),n(r)})}function ks(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:E,baseState:E,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:E},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function As(e){var t=ks(e);t.next===null&&(t=e.alternate.memoizedState),Ls(e,t.next.queue,{},pu())}function js(){return ca(Qf)}function Ms(){return z().memoizedState}function Ns(){return z().memoizedState}function Ps(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ya(n);var r=Xa(t,e,n);r!==null&&(hu(r,t,n),Za(r,t,n)),t={cache:ma()},e.payload=t;return}t=t.return}}function Fs(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},zs(e)?Bs(t,n):(n=ui(e,t,n,r),n!==null&&(hu(n,e,r),Vs(n,t,r)))}function Is(e,t,n){Ls(e,t,n,pu())}function Ls(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(zs(e))Bs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ar(s,o))return li(e,t,i,0),G===null&&ci(),!1}catch{}if(n=ui(e,t,i,r),n!==null)return hu(n,e,r),Vs(n,t,r),!0}return!1}function Rs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},zs(e)){if(t)throw Error(i(479))}else t=ui(e,n,r,2),t!==null&&hu(t,e,2)}function zs(e){var t=e.alternate;return e===F||t!==null&&t===F}function Bs(e,t){bo=yo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}var Hs={readContext:ca,use:Lo,useCallback:R,useContext:R,useEffect:R,useImperativeHandle:R,useLayoutEffect:R,useInsertionEffect:R,useMemo:R,useReducer:R,useRef:R,useState:R,useDebugValue:R,useDeferredValue:R,useTransition:R,useSyncExternalStore:R,useId:R,useHostTransitionStatus:R,useFormState:R,useActionState:R,useOptimistic:R,useMemoCache:R,useCacheRefresh:R};Hs.useEffectEvent=R;var Us={readContext:ca,use:Lo,useCallback:function(e,t){return Po().memoizedState=[e,t===void 0?null:t],e},useContext:ca,useEffect:ps,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ds(4194308,4,ys.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ds(4194308,4,e,t)},useInsertionEffect:function(e,t){ds(4,2,e,t)},useMemo:function(e,t){var n=Po();t=t===void 0?null:t;var r=e();if(xo){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Po();if(n!==void 0){var i=n(t);if(xo){Ke(!0);try{n(t)}finally{Ke(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Fs.bind(null,F,e),[r.memoizedState,e]},useRef:function(e){var t=Po();return e={current:e},t.memoizedState=e},useState:function(e){e=Yo(e);var t=e.queue,n=Is.bind(null,F,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:xs,useDeferredValue:function(e,t){return ws(Po(),e,t)},useTransition:function(){var e=Yo(!1);return e=Es.bind(null,F,e.queue,!0,!1),Po().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=F,a=Po();if(M){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),G===null)throw Error(i(349));q&127||Wo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ps(Ko.bind(null,r,o,e),[e]),r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,o,n,t),null),n},useId:function(){var e=Po(),t=G.identifierPrefix;if(M){var n=Fi,r=Pi;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=So++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=To++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:js,useFormState:is,useActionState:is,useOptimistic:function(e){var t=Po();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Rs.bind(null,F,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ro,useCacheRefresh:function(){return Po().memoizedState=Ps.bind(null,F)},useEffectEvent:function(e){var t=Po(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Ws={readContext:ca,use:Lo,useCallback:Ss,useContext:ca,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Bo,useRef:us,useState:function(){return Bo(zo)},useDebugValue:xs,useDeferredValue:function(e,t){return Ts(z(),I.memoizedState,e,t)},useTransition:function(){var e=Bo(zo)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:Ms,useHostTransitionStatus:js,useFormState:as,useActionState:as,useOptimistic:function(e,t){return Xo(z(),I,e,t)},useMemoCache:Ro,useCacheRefresh:Ns};Ws.useEffectEvent=gs;var Gs={readContext:ca,use:Lo,useCallback:Ss,useContext:ca,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Ho,useRef:us,useState:function(){return Ho(zo)},useDebugValue:xs,useDeferredValue:function(e,t){var n=z();return I===null?ws(n,e,t):Ts(n,I.memoizedState,e,t)},useTransition:function(){var e=Ho(zo)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:Ms,useHostTransitionStatus:js,useFormState:cs,useActionState:cs,useOptimistic:function(e,t){var n=z();return I===null?(n.baseState=e,[e,n.queue.dispatch]):Xo(n,I,e,t)},useMemoCache:Ro,useCacheRefresh:Ns};Gs.useEffectEvent=gs;function Ks(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ya(r);i.payload=t,n!=null&&(i.callback=n),t=Xa(e,i,r),t!==null&&(hu(t,e,r),Za(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ya(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Xa(e,i,r),t!==null&&(hu(t,e,r),Za(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ya(n);r.tag=2,t!=null&&(r.callback=t),t=Xa(e,r,n),t!==null&&(hu(t,e,n),Za(t,e,n))}};function Js(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(i,a):!0}function Ys(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&qs.enqueueReplaceState(t,t.state,null)}function Xs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Zs(e){ii(e)}function Qs(e){console.error(e)}function $s(e){ii(e)}function ec(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){return n=Ya(n),n.tag=3,n.payload={element:null},n.callback=function(){ec(e,t)},n}function rc(e){return e=Ya(e),e.tag=3,e}function ic(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){tc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){tc(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ac(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&aa(t,n,a,!0),n=lo.current,n!==null){switch(n.tag){case 31:case 13:return uo===null?Du():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===ja?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===ja?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(M)return t=lo.current,t===null?(r!==Wi&&(t=Error(i(423),{cause:r}),Zi(Ei(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ei(r,n),a=nc(e.stateNode,r,a),Qa(e,a),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Wi&&(e=Error(i(422),{cause:r}),Zi(Ei(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ei(o,n),Zl===null?Zl=[o]:Zl.push(o),Y!==4&&(Y=2),t===null)return!0;r=Ei(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=nc(n.stateNode,r,e),Qa(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(iu===null||!iu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=rc(a),ic(a,e,n,r),Qa(n,a),!1}n=n.return}while(n!==null);return!1}var oc=Error(i(461)),B=!1;function sc(e,t,n,r){t.child=e===null?Ga(t,null,n,r):Wa(t,e.child,n,r)}function cc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return sa(t),r=Do(e,t,n,o,a,i),s=jo(),e!==null&&!B?(Mo(e,t,i),Mc(e,t,i)):(M&&s&&Ri(t),t.flags|=1,sc(e,t,r,i),t.child)}function lc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!_i(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,uc(e,t,a,r,i)):(e=bi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Nc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?jr:n,n(o,r)&&e.ref===t.ref)return Mc(e,t,i)}return t.flags|=1,e=vi(a,r),e.ref=t.ref,e.return=t,t.child=e}function uc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(jr(a,r)&&e.ref===t.ref)if(B=!1,t.pendingProps=r=a,Nc(e,i))e.flags&131072&&(B=!0);else return t.lanes=e.lanes,Mc(e,t,i)}return vc(e,t,n,r,i)}function dc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return pc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ea(t,a===null?null:a.cachePool),a===null?so():oo(t,a),mo(t);else return r=t.lanes=536870912,pc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ea(t,null),so(),ho(t)):(Ea(t,a.cachePool),oo(t,a),ho(t),t.memoizedState=null);return sc(e,t,i,n),t.child}function fc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function pc(e,t,n,r,i){var a=Ta();return a=a===null?null:{parent:N._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ea(t,null),so(),mo(t),e!==null&&aa(e,t,r,!0),t.childLanes=i,null}function mc(e,t){return t=Dc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function hc(e,t,n){return Wa(t,e.child,null,n),e=mc(t,t.pendingProps),e.flags|=2,go(t),t.memoizedState=null,e}function gc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(M){if(r.mode===`hidden`)return e=mc(t,r),t.lanes=536870912,fc(null,e);if(po(t),(e=j)?(e=rf(e,Ui),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ni===null?null:{id:Pi,overflow:Fi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,Vi=t,j=null)):e=null,e===null)throw Gi(t);return t.lanes=536870912,null}return mc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(po(t),a)if(t.flags&256)t.flags&=-257,t=hc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(B||aa(e,t,n,!1),a=(n&e.childLanes)!==0,B||a){if(r=G,r!==null&&(s=ut(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,di(e,s),hu(r,e,s),oc;Du(),t=hc(e,t,n)}else e=o.treeContext,j=cf(s.nextSibling),Vi=t,M=!0,Hi=null,Ui=!1,e!==null&&Bi(t,e),t=mc(t,r),t.flags|=4096;return t}return e=vi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function _c(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function vc(e,t,n,r,i){return sa(t),n=Do(e,t,n,r,void 0,i),r=jo(),e!==null&&!B?(Mo(e,t,i),Mc(e,t,i)):(M&&r&&Ri(t),t.flags|=1,sc(e,t,n,i),t.child)}function yc(e,t,n,r,i,a){return sa(t),t.updateQueue=null,n=ko(t,r,n,i),Oo(e),r=jo(),e!==null&&!B?(Mo(e,t,a),Mc(e,t,a)):(M&&r&&Ri(t),t.flags|=1,sc(e,t,n,a),t.child)}function bc(e,t,n,r,i){if(sa(t),t.stateNode===null){var a=mi,o=n.contextType;typeof o==`object`&&o&&(a=ca(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=qs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},qa(t),o=n.contextType,a.context=typeof o==`object`&&o?ca(o):mi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ks(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&qs.enqueueReplaceState(a,a.state,null),to(t,r,a,i),eo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Xs(n,s);a.props=c;var l=a.context,u=n.contextType;o=mi,typeof u==`object`&&u&&(o=ca(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ys(t,a,r,o),Ka=!1;var f=t.memoizedState;a.state=f,to(t,r,a,i),eo(),l=t.memoizedState,s||f!==l||Ka?(typeof d==`function`&&(Ks(t,n,d,r),l=t.memoizedState),(c=Ka||Js(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ja(e,t),o=t.memoizedProps,u=Xs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=mi,typeof l==`object`&&l&&(c=ca(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ys(t,a,r,c),Ka=!1,f=t.memoizedState,a.state=f,to(t,r,a,i),eo();var p=t.memoizedState;o!==d||f!==p||Ka||e!==null&&e.dependencies!==null&&oa(e.dependencies)?(typeof s==`function`&&(Ks(t,n,s,r),p=t.memoizedState),(u=Ka||Js(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&oa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,_c(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Wa(t,e.child,null,i),t.child=Wa(t,null,n,i)):sc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Mc(e,t,i),e}function xc(e,t,n,r){return Yi(),t.flags|=256,sc(e,t,n,r),t.child}var Sc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cc(e){return{baseLanes:e,cachePool:Da()}}function wc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Tc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(P.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(M){if(a?fo(t):ho(t),(e=j)?(e=rf(e,Ui),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ni===null?null:{id:Pi,overflow:Fi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,Vi=t,j=null)):e=null,e===null)throw Gi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(ho(t),a=t.mode,c=Dc({mode:`hidden`,children:c},a),r=xi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,s,n),t.memoizedState=Sc,fc(null,r)):(fo(t),Ec(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(fo(t),t.flags&=-257,t=Oc(e,t,n)):t.memoizedState===null?(ho(t),c=r.fallback,a=t.mode,r=Dc({mode:`visible`,children:r.children},a),c=xi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Wa(t,e.child,null,n),r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,s,n),t.memoizedState=Sc,t=fc(null,r)):(ho(t),t.child=e.child,t.flags|=128,t=null);else if(fo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Zi({value:r,source:null,stack:null}),t=Oc(e,t,n)}else if(B||aa(e,t,n,!1),s=(n&e.childLanes)!==0,B||s){if(s=G,s!==null&&(r=ut(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,di(e,r),hu(s,e,r),oc;af(c)||Du(),t=Oc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,j=cf(c.nextSibling),Vi=t,M=!0,Hi=null,Ui=!1,e!==null&&Bi(t,e),t=Ec(t,r.children),t.flags|=4096);return t}return a?(ho(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=vi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=xi(c,a,n,null),c.flags|=2):c=vi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,fc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Cc(n):(a=c.cachePool,a===null?a=Da():(l=N._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=wc(e,s,n),t.memoizedState=Sc,fc(e.child,r)):(fo(t),n=e.child,e=n.sibling,n=vi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Ec(e,t){return t=Dc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Dc(e,t){return e=gi(22,e,null,t),e.lanes=0,e}function Oc(e,t,n){return Wa(t,e.child,null,n),e=Ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ra(e.return,t,n)}function Ac(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function jc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=P.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,O(P,o),sc(e,t,r,n),r=M?Ai:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kc(e,n,t);else if(e.tag===19)kc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_o(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ac(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_o(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ac(t,!0,n,null,a,r);break;case`together`:Ac(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Mc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(aa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=vi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&oa(e))):!0}function Pc(e,t,n){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),ta(t,N,e.memoizedState.cache),Yi();break;case 27:case 5:xe(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,po(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(fo(t),e=Mc(e,t,n),e===null?null:e.sibling):Tc(e,t,n):(fo(t),t.flags|=128,null);fo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(aa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return jc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(P,P.current),r)break;return null;case 22:return t.lanes=0,dc(e,t,n,t.pendingProps);case 24:ta(t,N,e.memoizedState.cache)}return Mc(e,t,n)}function Fc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)B=!0;else{if(!Nc(e,n)&&!(t.flags&128))return B=!1,Pc(e,t,n);B=!!(e.flags&131072)}else B=!1,M&&t.flags&1048576&&Li(t,Ai,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Pa(t.elementType),t.type=e,typeof e==`function`)_i(e)?(r=Xs(e,r),t.tag=1,t=bc(null,t,e,r,n)):(t.tag=0,t=vc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=cc(null,t,e,r,n);break a}else if(a===re){t.tag=14,t=lc(null,t,e,r,n);break a}}throw t=ue(e)||e,Error(i(306,t,``))}}return t;case 0:return vc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Xs(r,t.pendingProps),bc(e,t,r,a,n);case 3:a:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ja(e,t),to(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ta(t,N,r),r!==o.cache&&ia(t,[N],n,!0),eo(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=xc(e,t,r,n);break a}else if(r!==a){a=Ei(Error(i(424)),t),Zi(a),t=xc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(j=cf(e.firstChild),Vi=t,M=!0,Hi=null,Ui=!0,n=Ga(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Yi(),r===a){t=Mc(e,t,n);break a}sc(e,t,r,n)}t=t.child}return t;case 26:return _c(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:M||(n=t.type,e=t.pendingProps,r=Bd(_e.current).createElement(n),r[k]=t,r[gt]=e,Pd(r,n,e),A(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xe(t),e===null&&M&&(r=t.stateNode=ff(t.type,t.pendingProps,_e.current),Vi=t,Ui=!0,a=j,Zd(t.type)?(lf=a,j=cf(r.firstChild)):j=a),sc(e,t,t.pendingProps.children,n),_c(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&M&&((a=r=j)&&(r=tf(r,t.type,t.pendingProps,Ui),r===null?a=!1:(t.stateNode=r,Vi=t,j=cf(r.firstChild),Ui=!1,a=!0)),a||Gi(t)),xe(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Do(e,t,Ao,null,null,n),Qf._currentValue=a),_c(e,t),sc(e,t,r,n),t.child;case 6:return e===null&&M&&((e=n=j)&&(n=nf(n,t.pendingProps,Ui),n===null?e=!1:(t.stateNode=n,Vi=t,j=null,e=!0)),e||Gi(t)),null;case 13:return Tc(e,t,n);case 4:return ye(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wa(t,null,r,n):sc(e,t,r,n),t.child;case 11:return cc(e,t,t.type,t.pendingProps,n);case 7:return sc(e,t,t.pendingProps,n),t.child;case 8:return sc(e,t,t.pendingProps.children,n),t.child;case 12:return sc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ta(t,t.type,r.value),sc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,sa(t),a=ca(a),r=r(a),t.flags|=1,sc(e,t,r,n),t.child;case 14:return lc(e,t,t.type,t.pendingProps,n);case 15:return uc(e,t,t.type,t.pendingProps,n);case 19:return jc(e,t,n);case 31:return gc(e,t,n);case 22:return dc(e,t,n,t.pendingProps);case 24:return sa(t),r=ca(N),e===null?(a=Ta(),a===null&&(a=G,o=ma(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},qa(t),ta(t,N,a)):((e.lanes&n)!==0&&(Ja(e,t),to(t,null,null,n),eo()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ta(t,N,r),r!==a.cache&&ia(t,[N],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ta(t,N,r))),sc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Ic(e){e.flags|=4}function Lc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Fa=ja,ka}else e.flags&=-16777217}function Rc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Fa=ja,ka}function zc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:it(),e.lanes|=t,Xl|=t)}function Bc(e,t){if(!M)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function V(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vc(e,t,n){var r=t.pendingProps;switch(zi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return V(t),null;case 1:return V(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),na(N),be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ji(t)?Ic(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xi())),V(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Ic(t),o===null?(V(t),Lc(t,a,null,r,n)):(V(t),Rc(t,o))):o?o===e.memoizedState?(V(t),t.flags&=-16777217):(Ic(t),V(t),Rc(t,o)):(e=e.memoizedProps,e!==r&&Ic(t),V(t),Lc(t,a,e,r,n)),null;case 27:if(Se(t),n=_e.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return V(t),null}e=he.current,Ji(t)?Ki(t,e):(e=ff(a,r,n),t.stateNode=e,Ic(t))}return V(t),null;case 5:if(Se(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return V(t),null}if(o=he.current,Ji(t))Ki(t,o);else{var s=Bd(_e.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[k]=t,o[gt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Ic(t)}}return V(t),Lc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=_e.current,Ji(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Vi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[k]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Gi(t,!0)}else e=Bd(e).createTextNode(r),e[k]=t,t.stateNode=e}return V(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ji(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[k]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),e=!1}else n=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(go(t),t):(go(t),null);if(t.flags&128)throw Error(i(558))}return V(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ji(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[k]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),a=!1}else a=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(go(t),t):(go(t),null)}return go(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),zc(t,t.updateQueue),V(t),null);case 4:return be(),e===null&&Sd(t.stateNode.containerInfo),V(t),null;case 10:return na(t.type),V(t),null;case 19:if(D(P),r=t.memoizedState,r===null)return V(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Bc(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=_o(e),o!==null){for(t.flags|=128,Bc(r,!1),e=o.updateQueue,t.updateQueue=e,zc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)yi(n,e),n=n.sibling;return O(P,P.current&1|2),M&&Ii(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Fe()>nu&&(t.flags|=128,a=!0,Bc(r,!1),t.lanes=4194304)}else{if(!a)if(e=_o(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,zc(t,e),Bc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!M)return V(t),null}else 2*Fe()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,a=!0,Bc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(V(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Fe(),e.sibling=null,n=P.current,O(P,a?n&1|2:n&1),M&&Ii(t,r.treeForkCount),e);case 22:case 23:return go(t),co(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(V(t),t.subtreeFlags&6&&(t.flags|=8192)):V(t),n=t.updateQueue,n!==null&&zc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&D(wa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),na(N),V(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Hc(e,t){switch(zi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return na(N),be(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Se(t),null;case 31:if(t.memoizedState!==null){if(go(t),t.alternate===null)throw Error(i(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(go(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(P),null;case 4:return be(),null;case 10:return na(t.type),null;case 22:case 23:return go(t),co(),e!==null&&D(wa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return na(N),null;case 25:return null;default:return null}}function Uc(e,t){switch(zi(t),t.tag){case 3:na(N),be();break;case 26:case 27:case 5:Se(t);break;case 4:be();break;case 31:t.memoizedState!==null&&go(t);break;case 13:go(t);break;case 19:D(P);break;case 10:na(t.type);break;case 22:case 23:go(t),co(),e!==null&&D(wa);break;case 24:na(N)}}function Wc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Gc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Kc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ro(t,n)}catch(t){Z(e,e.return,t)}}}function qc(e,t,n){n.props=Xs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Jc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Yc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Xc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Zc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[gt]=t}catch(t){Z(e,e.return,t)}}function Qc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function $c(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[k]=e,t[gt]=n}catch(t){Z(e,e.return,t)}}var rl=!1,H=!1,il=!1,al=typeof WeakSet==`function`?WeakSet:Set,ol=null;function sl(e,t){if(e=e.containerInfo,Rd=sp,e=Fr(e),Ir(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,ol=t;ol!==null;)if(t=ol,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,ol=e;else for(;ol!==null;){switch(t=ol,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Xs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,ol=e;break}ol=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sl(e,n),r&4&&Wc(5,n);break;case 1:if(Sl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Xs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Kc(n),r&512&&Jc(n,n.return);break;case 3:if(Sl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ro(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&nl(n);case 26:case 5:Sl(e,n),t===null&&r&4&&Xc(n),r&512&&Jc(n,n.return);break;case 12:Sl(e,n);break;case 31:Sl(e,n),r&4&&pl(e,n);break;case 13:Sl(e,n),r&4&&ml(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||rl,!r){t=t!==null&&t.memoizedState!==null||H,i=rl;var a=H;rl=r,(H=t)&&!a?wl(e,n,(n.subtreeFlags&8772)!=0):Sl(e,n),rl=i,H=a}break;case 30:break;default:Sl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ct(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,ul=!1;function dl(e,t,n){for(n=n.child;n!==null;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount==`function`)try{Ge.onCommitFiberUnmount(We,n)}catch{}switch(n.tag){case 26:H||Yc(n,t),dl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:H||Yc(n,t);var r=U,i=ul;Zd(n.type)&&(U=n.stateNode,ul=!1),dl(e,t,n),pf(n.stateNode),U=r,ul=i;break;case 5:H||Yc(n,t);case 6:if(r=U,i=ul,U=null,dl(e,t,n),U=r,ul=i,U!==null)if(ul)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:U!==null&&(ul?(e=U,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(U,n.stateNode));break;case 4:r=U,i=ul,U=n.stateNode.containerInfo,ul=!0,dl(e,t,n),U=r,ul=i;break;case 0:case 11:case 14:case 15:Gc(2,n,t),H||Gc(4,n,t),dl(e,t,n);break;case 1:H||(Yc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&qc(n,t,r)),dl(e,t,n);break;case 21:dl(e,t,n);break;case 22:H=(r=H)||n.memoizedState!==null,dl(e,t,n),H=r;break;default:dl(e,t,n)}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function hl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new al),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new al),t;default:throw Error(i(435,e.tag))}}function gl(e,t){var n=hl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function _l(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){U=c.stateNode,ul=!1;break a}break;case 5:U=c.stateNode,ul=!1;break a;case 3:case 4:U=c.stateNode.containerInfo,ul=!0;break a}c=c.return}if(U===null)throw Error(i(160));fl(o,s,a),U=null,ul=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yl(t,e),t=t.sibling}var vl=null;function yl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_l(t,e),bl(e),r&4&&(Gc(3,e,e.return),Wc(3,e),Gc(5,e,e.return));break;case 1:_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),r&64&&rl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=vl;if(_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[St]||o[k]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[k]=e,A(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[k]=e,A(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Zc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),n!==null&&r&4&&Zc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),e.flags&32){a=e.stateNode;try{$t(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Zc(e,a,n===null?a:n.memoizedProps)),r&1024&&(il=!0);break;case 6:if(_l(t,e),bl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=vl,vl=gf(t.containerInfo),_l(t,e),vl=a,bl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}il&&(il=!1,xl(e));break;case 4:r=vl,vl=gf(e.stateNode.containerInfo),_l(t,e),bl(e),vl=r;break;case 12:_l(t,e),bl(e);break;case 31:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 13:_l(t,e),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Fe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=rl,d=H;if(rl=u||a,H=d||l,_l(t,e),H=d,rl=u,bl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||rl||H||Cl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,gl(e,n))));break;case 19:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 30:break;case 21:break;default:_l(t,e),bl(e)}}function bl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Qc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;tl(e,$c(e),a);break;case 5:var o=n.stateNode;n.flags&32&&($t(o,``),n.flags&=-33),tl(e,$c(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;el(e,$c(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function Cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Gc(4,t,t.return),Cl(t);break;case 1:Yc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&qc(t,t.return,n),Cl(t);break;case 27:pf(t.stateNode);case 26:case 5:Yc(t,t.return),Cl(t);break;case 22:t.memoizedState===null&&Cl(t);break;case 30:Cl(t);break;default:Cl(t)}e=e.sibling}}function wl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:wl(i,a,n),Wc(4,a);break;case 1:if(wl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)no(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Kc(a),Jc(a,a.return);break;case 27:nl(a);case 26:case 5:wl(i,a,n),n&&r===null&&o&4&&Xc(a),Jc(a,a.return);break;case 12:wl(i,a,n);break;case 31:wl(i,a,n),n&&o&4&&pl(i,a);break;case 13:wl(i,a,n),n&&o&4&&ml(i,a);break;case 22:a.memoizedState===null&&wl(i,a,n),Jc(a,a.return);break;case 30:break;default:wl(i,a,n)}t=t.sibling}}function Tl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ha(n))}function El(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e))}function Dl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ol(e,t,n,r),t=t.sibling}function Ol(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dl(e,t,n,r),i&2048&&Wc(9,t);break;case 1:Dl(e,t,n,r);break;case 3:Dl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e)));break;case 12:if(i&2048){Dl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Dl(e,t,n,r);break;case 31:Dl(e,t,n,r);break;case 13:Dl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Dl(e,t,n,r):(a._visibility|=2,kl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Dl(e,t,n,r):Al(e,t),i&2048&&Tl(o,t);break;case 24:Dl(e,t,n,r),i&2048&&El(t.alternate,t);break;default:Dl(e,t,n,r)}}function kl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:kl(a,o,s,c,i),Wc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,kl(a,o,s,c,i)):u._visibility&2?kl(a,o,s,c,i):Al(a,o),i&&l&2048&&Tl(o.alternate,o);break;case 24:kl(a,o,s,c,i),i&&l&2048&&El(o.alternate,o);break;default:kl(a,o,s,c,i)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Al(n,r),i&2048&&Tl(r.alternate,r);break;case 24:Al(n,r),i&2048&&El(r.alternate,r);break;default:Al(n,r)}t=t.sibling}}var jl=8192;function Ml(e,t,n){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)Nl(e,t,n),e=e.sibling}function Nl(e,t,n){switch(e.tag){case 26:Ml(e,t,n),e.flags&jl&&e.memoizedState!==null&&Gf(n,vl,e.memoizedState,e.memoizedProps);break;case 5:Ml(e,t,n);break;case 3:case 4:var r=vl;vl=gf(e.stateNode.containerInfo),Ml(e,t,n),vl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=jl,jl=16777216,Ml(e,t,n),jl=r):Ml(e,t,n));break;default:Ml(e,t,n)}}function Pl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Rl(r,e)}Pl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Il(e),e=e.sibling}function Il(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Gc(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ll(e)):Fl(e);break;default:Fl(e)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Rl(r,e)}Pl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Gc(8,t,t.return),Ll(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(t));break;default:Ll(t)}e=e.sibling}}function Rl(e,t){for(;ol!==null;){var n=ol;switch(n.tag){case 0:case 11:case 15:Gc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ha(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ol=r;else a:for(n=e;ol!==null;){r=ol;var i=r.sibling,a=r.return;if(ll(r),r===n){ol=null;break a}if(i!==null){i.return=a,ol=i;break a}ol=a}}}var zl={getCacheForType:function(e){var t=ca(N),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ca(N).controller.signal}},Bl=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Y=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,X=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return W&2&&q!==0?q&-q:w.T===null?pt():dd()}function mu(){if(Yl===0)if(!(q&536870912)||M){var e=Qe;Qe<<=1,!(Qe&3932160)&&(Qe=262144),Yl=e}else Yl=536870912;return e=lo.current,e!==null&&(e.flags|=32),Yl}function hu(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,q,Yl,!1)),ot(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(ql|=n),Y===4&&yu(e,q,Yl,!1)),rd(e))}function gu(e,t,n){if(W&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||nt(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Ul&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=o,ql|=o,a=4;break a}o=Ql,Ql=a,o!==null&&(Ql===null?Ql=o:Ql.push.apply(Ql,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Yl,!Hl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=eu+300-Fe(),10<a)){if(yu(r,t,Yl,!Hl),tt(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,o,`Throttled`,-0,0),a);break a}_u(r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:cn},Nl(t,a,d);var m=(a&62914560)===a?eu-Fe():(a&4194048)===a?tu-Fe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ar(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-qe(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ct(e,n,t)}function bu(){return W&6?!0:(id(0,!1),!1)}function xu(){if(K!==null){if(J===0)var e=K.return;else e=K,ea=$i=null,No(e),Ra=null,za=0,e=K;for(;e!==null;)Uc(e.alternate,e),e=e.return;K=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),G=e,K=n=vi(e.current,null),q=t,J=0,Vl=null,Hl=!1,Ul=nt(e,t),Wl=!1,Xl=Yl=Jl=ql=Kl=Y=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-qe(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,ci(),n}function Cu(e,t){F=null,w.H=Hs,t===Oa||t===Aa?(t=Ia(),J=3):t===ka?(t=Ia(),J=4):J=t===oc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,K===null&&(Y=1,ec(e,Ei(t,e.current)))}function wu(){var e=lo.current;return e===null?!0:(q&4194048)===q?uo===null:(q&62914560)===q||q&536870912?e===uo:!1}function Tu(){var e=w.H;return w.H=Hs,e===null?Hs:e}function Eu(){var e=w.A;return w.A=zl,e}function Du(){Y=4,Hl||(q&4194048)!==q&&lo.current!==null||(Ul=!0),!(Kl&134217727)&&!(ql&134217727)||G===null||yu(G,q,Yl,!1)}function Ou(e,t,n){var r=W;W|=2;var i=Tu(),a=Eu();(G!==e||q!==t)&&(ru=null,Su(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=Vl;switch(J){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:lo.current===null&&(t=!0);var l=J;if(J=0,Vl=null,Pu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=J,J=0,Vl=null,Pu(e,s,c,l)}}ku(),o=Y;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,ea=$i=null,W=r,w.H=i,w.A=a,K===null&&(G=null,q=0,ci()),o}function ku(){for(;K!==null;)Mu(K)}function Au(e,t){var n=W;W|=2;var r=Tu(),a=Eu();G!==e||q!==t?(ru=null,nu=Fe()+500,Su(e,t)):Ul=nt(e,t);a:do try{if(J!==0&&K!==null){t=K;var o=Vl;b:switch(J){case 1:J=0,Vl=null,Pu(e,t,o,1);break;case 2:case 9:if(Ma(o)){J=0,Vl=null,Nu(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),rd(e)},o.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:Ma(o)?(J=0,Vl=null,Nu(t)):(J=0,Vl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(K.tag){case 26:s=K.memoizedState;case 5:case 27:var c=K;if(s?Wf(s):c.stateNode.complete){J=0,Vl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Fu(u))}break b}}J=0,Vl=null,Pu(e,t,o,5);break;case 6:J=0,Vl=null,Pu(e,t,o,6);break;case 8:xu(),Y=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return ea=$i=null,w.H=r,w.A=a,W=n,K===null?(G=null,q=0,ci(),Y):0}function ju(){for(;K!==null&&!Ne();)Mu(K)}function Mu(e){var t=Fc(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=yc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=yc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:No(t);default:Uc(n,t),t=K=yi(t,Gl),t=Fc(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Pu(e,t,n,r){ea=$i=null,No(t),Ra=null,za=0;var i=t.return;try{if(ac(e,i,t,n,q)){Y=1,ec(e,Ei(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,ec(e,Ei(n,e.current)),K=null;return}t.flags&32768?(M||r===1?e=!0:Ul||q&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=lo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Hl);return}e=t.return;var n=Vc(t.alternate,t,Gl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function Iu(e,t){do{var n=Hc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(X!==0);if(W&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=si,st(e,n,o,s,c,l),e===G&&(K=G=null,q=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(ze,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=w.T,w.T=null,a=T.p,T.p=2,s=W,W|=4;try{sl(e,t,n)}finally{W=s,T.p=a,w.T=r}}X=1,Ru(),zu(),Bu()}}function Ru(){if(X===1){X=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=w.T,w.T=null;var r=T.p;T.p=2;var i=W;W|=4;try{yl(t,e);var a=zd,o=Fr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Pr(s.ownerDocument.documentElement,s)){if(c!==null&&Ir(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Nr(s,h),v=Nr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{W=i,T.p=r,w.T=n}}e.current=t,X=2}}function zu(){if(X===2){X=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=w.T,w.T=null;var r=T.p;T.p=2;var i=W;W|=4;try{cl(e,t.alternate,t)}finally{W=i,T.p=r,w.T=n}}X=3}}function Bu(){if(X===4||X===3){X=0,Pe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?X=5:(X=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),ft(n),t=t.stateNode,Ge&&typeof Ge.onCommitFiberRoot==`function`)try{Ge.onCommitFiberRoot(We,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=w.T,i=T.p,T.p=2,w.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{w.T=t,T.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ha(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(X!==5)return!1;var e=au,t=cu;cu=0;var n=ft(su),r=w.T,a=T.p;try{T.p=32>n?32:n,w.T=null,n=lu,lu=null;var o=au,s=su;if(X=0,ou=au=null,su=0,W&6)throw Error(i(331));var c=W;if(W|=4,Il(o.current),Ol(o,o.current,s,n),W=c,id(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot==`function`)try{Ge.onPostCommitFiberRoot(We,o)}catch{}return!0}finally{T.p=a,w.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ei(n,t),t=nc(e.stateNode,t,2),e=Xa(e,t,2),e!==null&&(ot(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Ei(n,e),n=rc(2),r=Xa(t,n,2),r!==null&&(ic(n,r,t,e),ot(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>Fe()-eu?!(W&2)&&Su(e,0):Jl|=n,Xl===q&&(Xl=0)),rd(e)}function qu(e,t){t===0&&(t=it()),e=di(e,t),e!==null&&(ot(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return je(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-qe(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=q,a=tt(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||nt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Fe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}X!==0&&X!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-qe(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=rt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=tt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Me(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||nt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Me(r),ft(n)){case 2:case 8:n=Re;break;case 32:n=ze;break;case 268435456:n=Ve;break;default:n=ze}return r=cd.bind(null,e),n=je(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Me(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=q;return r=tt(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Fe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){W&6?je(Le,ad):od()})}function dd(){if(nd===0){var e=va;e===0&&(e=Ze,Ze<<=1,!(Ze&261888)&&(Ze=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:sn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[gt]||null).action),o=r.submitter;o&&(t=(t=o[gt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new kn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Os(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Os(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ni.length;hd++){var gd=ni[hd];ri(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ri(Jr,`onAnimationEnd`),ri(Yr,`onAnimationIteration`),ri(Xr,`onAnimationStart`),ri(`dblclick`,`onDoubleClick`),ri(`focusin`,`onFocus`),ri(`focusout`,`onBlur`),ri(Zr,`onTransitionRun`),ri(Qr,`onTransitionStart`),ri($r,`onTransitionCancel`),ri(ei,`onTransitionEnd`),jt(`onMouseEnter`,[`mouseout`,`mouseover`]),jt(`onMouseLeave`,[`mouseout`,`mouseover`]),jt(`onPointerEnter`,[`pointerout`,`pointerover`]),jt(`onPointerLeave`,[`pointerout`,`pointerover`]),At(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),At(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),At(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),At(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[vt];n===void 0&&(n=t[vt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Ot.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!vn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=wt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}hn(function(){var r=a,i=un(n),s=[];a:{var c=ti.get(e);if(c!==void 0){var l=kn,u=e;switch(e){case`keypress`:if(wn(n)===0)break a;case`keydown`:case`keyup`:l=qn;break;case`focusin`:u=`focus`,l=Rn;break;case`focusout`:u=`blur`,l=Rn;break;case`beforeblur`:case`afterblur`:l=Rn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=In;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Ln;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Yn;break;case Jr:case Yr:case Xr:l=zn;break;case ei:l=Xn;break;case`scroll`:case`scrollend`:l=jn;break;case`wheel`:l=Zn;break;case`copy`:case`cut`:case`paste`:l=Bn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Jn;break;case`toggle`:case`beforetoggle`:l=Qn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=gn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==ln&&(u=n.relatedTarget||n.fromElement)&&(wt(u)||u[_t]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?wt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=In,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Jn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Et(l),h=u==null?c:Et(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,wt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Et(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=vr;else if(fr(c))if(yr)v=Or;else{v=Er;var y=Tr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&rn(r.elementType)&&(v=vr):v=Dr;if(v&&=v(e,r)){pr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Yt(c,`number`,c.value)}switch(y=r?Et(r):window,e){case`focusin`:(fr(y)||y.contentEditable===`true`)&&(Rr=y,zr=r,Br=null);break;case`focusout`:Br=zr=Rr=null;break;case`mousedown`:Vr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Vr=!1,Hr(s,n,i);break;case`selectionchange`:if(Lr)break;case`keydown`:case`keyup`:Hr(s,n,i)}var b;if(er)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else cr?or(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(rr&&n.locale!==`ko`&&(cr||x!==`onCompositionStart`?x===`onCompositionEnd`&&cr&&(b=Cn()):(bn=i,xn=`value`in bn?bn.value:bn.textContent,cr=!0)),y=Ed(r,x),0<y.length&&(x=new Vn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=sr(n),b!==null&&(x.data=b)))),(b=nr?lr(e,n):ur(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Vn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=gn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=gn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=gn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=gn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&$t(e,``+r);break;case`className`:Lt(e,`class`,r);break;case`tabIndex`:Lt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Lt(e,n,r);break;case`style`:nn(e,r,o);break;case`data`:if(t!==`object`){Lt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=sn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),It(e,`popover`,r);break;case`xlinkActuate`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:It(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=an.get(n)||n,It(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:nn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&$t(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!kt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[gt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):It(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Jt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Xt(e,!!r,n,!0):Xt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Qt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(rn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}qt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Xt(e,!!n,n?[]:``,!1):Xt(e,!!n,t,!0)):Xt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Zt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(rn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[St]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),Ct(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[St])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ct(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=T.d;T.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Tt(e);t!==null&&t.tag===5&&t.type===`form`?As(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Kt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),A(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Kt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Kt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Kt(n.imageSizes)+`"]`)):i+=`[href="`+Kt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),A(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Kt(r)+`"][href="`+Kt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),A(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Dt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);A(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),A(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),A(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=_e.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Dt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Dt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Dt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Kt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),A(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Kt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Kt(n.href)+`"]`);if(r)return t.instance=r,A(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),A(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,A(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),A(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,A(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),A(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[St]||a[k]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,A(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),A(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:E,_currentValue2:E,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=at(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=at(0),this.hiddenUpdates=at(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=gi(3,null,null,t),e.current=a,a.stateNode=e,t=ma(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},qa(a),e}function tp(e){return e?(e=mi,e):mi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ya(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Xa(e,r,t),n!==null&&(hu(n,e,t),Za(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=di(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=dt(t);var n=di(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=w.T;w.T=null;var a=T.p;try{T.p=2,up(e,t,n,r)}finally{T.p=a,w.T=i}}function lp(e,t,n,r){var i=w.T;w.T=null;var a=T.p;try{T.p=8,up(e,t,n,r)}finally{T.p=a,w.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Tt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=et(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-qe(o);s.entanglements[1]|=c,o&=~c}rd(a),!(W&6)&&(nu=Fe()+500,id(0,!1))}}break;case 31:case 13:s=di(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=un(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=wt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ie()){case Le:return 2;case Re:return 8;case ze:case Be:return 32;case Ve:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Tt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=wt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ln=r,n.target.dispatchEvent(r),ln=null}else return t=Tt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Tt(n);a!==null&&(e.splice(t,3),t-=3,Os(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[gt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[gt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[_t]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=pt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.7`)throw Error(i(527,Lp,`19.2.7`));T.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.7`,rendererPackageName:`react-dom`,currentDispatcherRef:w,reconcilerVersion:`19.2.7`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{We=zp.inject(Rp),Ge=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Zs,s=Qs,c=$s;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[_t]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),v=o(((e,t)=>{t.exports=_()})),y=c(g(),1),b=c(u(),1),x=v(),ee=[{label:`About`,href:`/about`},{label:`Services`,href:`/services`}];function S(){let[e,t]=(0,b.useState)(!1),[n,r]=(0,b.useState)(!1),i=(0,b.useRef)(null);(0,b.useEffect)(()=>{let e=()=>t(window.scrollY>20);return window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]),(0,b.useEffect)(()=>{let e=e=>{i.current&&!i.current.contains(e.target)&&r(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let a=e=>{window.history.pushState({},``,e),window.dispatchEvent(new PopStateEvent(`popstate`)),r(!1)};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`style`,{children:`
                /* Full screen-width header pinned straight to the top */
                .jf-header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    
                    /* Left and right edge spacing slightly decreased */
                    padding: 0 max(16px, 3vw);
                    
                    /* Height decreased a little bit (68px default) */
                    height: 68px;
                    font-family: var(--font-family, sans-serif);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    
                    /* Custom Glassmorphism at 40% Opacity stretching full-width */
                    background: rgba(8, 15, 30, 0.40); 
                    backdrop-filter: blur(18px);
                    -webkit-backdrop-filter: blur(18px);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
                }

                /* Compact scroll transition state */
                .jf-header.scrolled-state {
                    height: 62px;
                    background: rgba(7, 17, 31, 0.85);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.7);
                }

                .jf-logo-wrap {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    flex-shrink: 0;
                }

                /* Sophisticated White Logo with Opacity */
                .jf-logo-img {
                    height: 34px; /* Scaled down slightly to fit new height */
                    width: auto;
                    object-fit: contain;
                    filter: brightness(1.05) invert(1);
                    opacity: 0.82;
                    transition: all 0.3s ease;
                }

                .jf-logo-wrap:hover .jf-logo-img {
                    opacity: 1;
                }

                .jf-header.scrolled-state .jf-logo-img { 
                    height: 30px; 
                }

                .desktop-nav {
                    display: flex;
                    align-items: center;
                    gap: 28px; /* Slightly tighter link spacing */
                    height: 100%;
                    margin-left: auto;
                }

                .header-actions {
                    display: flex;
                    align-items: center;
                    gap: 10px; /* Reduced gap between custom buttons by 2px */
                    margin-left: 28px;
                }

                /* Enterprise Navigation Typography */
                .jf-nav-link {
                    background: none;
                    border: none;
                    font-family: var(--font-family, sans-serif);
                    font-size: 13px;
                    font-weight: 500;
                    color: #D1D5DB;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    padding: 6px 0;
                    transition: color 0.25s ease;
                }

                .jf-nav-link:hover {
                    color: #FFFFFF;
                }

                .jf-nav-link.active {
                    color: #3B82F6;
                }

                /* Premium Button Frameworks with optimized top/bottom padding */
                .header-cta-primary {
                    background: linear-gradient(135deg, #2563EB, #3B82F6) !important;
                    color: #ffffff !important;
                    padding: 8px 18px !important; /* Shaved off internal padding height */
                    border-radius: 16px !important;
                    font-size: 13px !important;
                    font-weight: 600 !important;
                    letter-spacing: 0.01em !important;
                    border: none !important;
                    cursor: pointer;
                    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
                }

                .header-cta-primary:hover {
                    transform: translateY(-1px);
                    box-shadow: 0 8px 24px rgba(37, 99, 235, 0.3);
                }

                .header-cta-secondary {
                    background: transparent !important;
                    color: #D1D5DB !important;
                    padding: 8px 18px !important; /* Shaved off internal padding height */
                    border-radius: 16px !important;
                    font-size: 13px !important;
                    font-weight: 600 !important;
                    letter-spacing: 0.01em !important;
                    border: 1px solid rgba(255, 255, 255, 0.12) !important;
                    cursor: pointer;
                    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
                }

                .header-cta-secondary:hover {
                    color: #FFFFFF !important;
                    background: rgba(255, 255, 255, 0.05) !important;
                    border-color: rgba(255, 255, 255, 0.25) !important;
                    transform: translateY(-1px);
                }

                #jf-hamburger-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: #D1D5DB;
                    cursor: pointer;
                    padding: 4px;
                }

                .mobile-menu {
                    position: fixed;
                    top: 68px;
                    left: 0;
                    right: 0;
                    background: #07111F;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                    padding: 20px max(16px, 3vw) 24px;
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    z-index: 999;
                    max-height: calc(100vh - 68px);
                    overflow-y: auto;
                }

                .jf-header.scrolled-state ~ .mobile-menu {
                    top: 62px;
                    max-height: calc(100vh - 62px);
                }

                .jf-mobile-link {
                    background: none;
                    border: none;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                    font-family: var(--font-family, sans-serif);
                    font-size: 14px;
                    font-weight: 500;
                    color: #D1D5DB;
                    text-align: left;
                    padding: 12px 0;
                    cursor: pointer;
                    width: 100%;
                    transition: color 0.2s ease;
                }

                .jf-mobile-link:hover { color: #FFFFFF; }

                @media (max-width: 960px) {
                    .desktop-nav { display: none !important; }
                    #desktop-actions-container { display: none !important; }
                    #jf-hamburger-btn { display: flex !important; }
                }
            `}),(0,x.jsxs)(`header`,{className:`jf-header ${e?`scrolled-state`:``}`,ref:i,children:[(0,x.jsx)(`div`,{className:`jf-logo-wrap`,onClick:()=>a(`/`),children:(0,x.jsx)(`img`,{src:`/assets/images/about/logo.png`,alt:`JF Knowledge Centre`,className:`jf-logo-img`})}),(0,x.jsxs)(`div`,{className:`desktop-nav`,children:[ee.map((e,t)=>(0,x.jsx)(`button`,{className:`jf-nav-link ${window.location.pathname===e.href?`active`:``}`,onClick:()=>a(e.href),children:e.label},t)),(0,x.jsxs)(`div`,{id:`desktop-actions-container`,className:`header-actions`,children:[(0,x.jsx)(`button`,{className:`header-cta-secondary`,onClick:()=>a(`/contact`),children:`Contact Us`}),(0,x.jsx)(`button`,{className:`header-cta-primary`,onClick:()=>a(`/contact`),children:`Book Appointment`})]})]}),(0,x.jsx)(`button`,{id:`jf-hamburger-btn`,onClick:()=>r(!n),"aria-label":`Menu`,children:n?(0,x.jsxs)(`svg`,{width:`22`,height:`22`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,x.jsx)(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`}),(0,x.jsx)(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`})]}):(0,x.jsxs)(`svg`,{width:`22`,height:`22`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,x.jsx)(`line`,{x1:`3`,y1:`8`,x2:`21`,y2:`8`}),(0,x.jsx)(`line`,{x1:`3`,y1:`16`,x2:`21`,y2:`16`})]})}),n&&(0,x.jsxs)(`div`,{className:`mobile-menu`,children:[ee.map((e,t)=>(0,x.jsx)(`button`,{className:`jf-mobile-link`,onClick:()=>a(e.href),children:e.label},t)),(0,x.jsx)(`button`,{className:`header-cta-secondary`,style:{marginTop:`16px`,justifyContent:`center`,width:`100%`,textAlign:`center`},onClick:()=>a(`/contact`),children:`Contact Us`}),(0,x.jsx)(`button`,{className:`header-cta-primary`,style:{marginTop:`8px`,justifyContent:`center`,width:`100%`,textAlign:`center`},onClick:()=>a(`/contact`),children:`Book Appointment`})]})]})]})}var C=e=>{window.history.pushState({},``,e),window.dispatchEvent(new PopStateEvent(`popstate`))},te=({href:e,children:t})=>(0,x.jsx)(`a`,{href:e,onClick:t=>{t.preventDefault(),C(e)},className:`footer-link`,children:t});function ne(){let e=new Date().getFullYear();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`style`,{children:`
                .footer-shell {
                    background: var(--bg-main);
                    border-top: 1px solid var(--border-dark);
                    font-family: var(--font-family);
                    color: var(--text-primary);
                }

                .footer-main {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 72px max(24px, 4vw) 48px;
                    display: grid;
                    grid-template-columns: 1.6fr 1fr 1fr 1.3fr;
                    gap: 48px;
                }

                @media (max-width: 1000px) {
                    .footer-main { grid-template-columns: 1fr 1fr; gap: 40px; }
                }

                @media (max-width: 600px) {
                    .footer-main { grid-template-columns: 1fr; gap: 32px; padding: 48px 24px 36px; }
                }

                .footer-brand-col {
                    display: flex;
                    flex-direction: column;
                    gap: 18px;
                }

                .footer-logo-row {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .footer-logo-img {
                    height: 32px;
                    width: auto;
                    object-fit: contain;
                    filter: brightness(0) invert(1);
                }

                .footer-brand-name {
                    font-size: 12px;
                    font-weight: 800;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: var(--text-primary);
                }

                .footer-brand-desc {
                    font-size: 14px;
                    color: var(--text-secondary);
                    line-height: 1.7;
                    max-width: 300px;
                }

                .footer-socials {
                    display: flex;
                    gap: 10px;
                    margin-top: 4px;
                }

                .footer-social-btn {
                    width: 38px;
                    height: 38px;
                    border-radius: 50%;
                    border: 1px solid var(--border-visible);
                    background: transparent;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.22s ease;
                    color: var(--text-secondary);
                }

                .footer-social-btn:hover {
                    border-color: var(--primary);
                    color: var(--primary-light);
                    background: var(--primary-muted);
                    transform: translateY(-2px);
                }

                .footer-col-title {
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: var(--text-muted);
                    margin-bottom: 18px;
                }

                .footer-link-list {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .footer-link {
                    font-size: 14px;
                    color: var(--text-secondary);
                    text-decoration: none;
                    transition: color 0.2s ease;
                    font-weight: 400;
                }

                .footer-link:hover { color: var(--primary-light); }

                .footer-newsletter-desc {
                    font-size: 13px;
                    color: var(--text-secondary);
                    line-height: 1.6;
                    margin-bottom: 14px;
                }

                .footer-newsletter-input {
                    width: 100%;
                    padding: 12px 14px;
                    background: rgba(8, 15, 38, 0.6);
                    border: 1px solid var(--border-visible);
                    border-radius: 8px;
                    color: var(--text-primary);
                    font-family: var(--font-family);
                    font-size: 13px;
                    outline: none;
                    box-sizing: border-box;
                    margin-bottom: 10px;
                    transition: border-color 0.2s ease;
                }

                .footer-newsletter-input::placeholder { color: var(--text-placeholder); }
                .footer-newsletter-input:focus { border-color: var(--primary); }

                .footer-newsletter-btn {
                    width: 100%;
                    padding: 12px 14px;
                    background: var(--gold-gradient);
                    border: none;
                    border-radius: 8px;
                    color: rgb(0, 0, 0);
                    font-family: var(--font-family);
                    font-size: 12px;
                    font-weight: 700;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    cursor: pointer;
                    transition: all 0.22s ease;
                }

                .footer-newsletter-btn:hover {
                    transform: translateY(-1px);
                    box-shadow: var(--shadow-gold);
                }

                .footer-industry-tags {
                    margin-top: 14px;
                    font-size: 10px;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    color: var(--text-muted);
                    line-height: 1.8;
                }

                .footer-bottom {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 20px max(24px, 4vw);
                    border-top: 1px solid var(--border-dark);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 16px;
                    flex-wrap: wrap;
                }

                .footer-copy {
                    font-size: 13px;
                    color: var(--text-muted);
                }

                .footer-copy strong {
                    color: var(--text-secondary);
                    font-weight: 600;
                }

                .footer-global-tag {
                    font-size: 11px;
                    font-weight: 600;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    color: var(--text-muted);
                }
            `}),(0,x.jsxs)(`footer`,{className:`footer-shell`,children:[(0,x.jsxs)(`div`,{className:`footer-main`,children:[(0,x.jsxs)(`div`,{className:`footer-brand-col`,children:[(0,x.jsx)(`div`,{className:`footer-logo-row`,children:(0,x.jsx)(`img`,{src:`/assets/images/about/logo.png`,alt:`JF Knowledge Centre`,className:`footer-logo-img`})}),(0,x.jsx)(`p`,{className:`footer-brand-desc`,children:`Empowering Talent. Enabling Growth. Elevating Business.`}),(0,x.jsxs)(`div`,{style:{display:`grid`,gap:`14px`,maxWidth:`320px`},children:[(0,x.jsxs)(`div`,{style:{fontSize:`14px`,color:`var(--text-secondary)`,lineHeight:1.8},children:[`123 Knowledge Way`,(0,x.jsx)(`br`,{}),`London, UK`,(0,x.jsx)(`br`,{}),(0,x.jsx)(`a`,{href:`mailto:info@jfknowledgecentre.com`,className:`footer-link`,children:`info@jfknowledgecentre.com`})]}),(0,x.jsx)(`button`,{className:`jf-btn-primary header-cta`,style:{width:`100%`,justifyContent:`center`},onClick:()=>C(`/contact`),children:`Book Appointment`})]})]}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{className:`footer-col-title`,children:`E-Learning Solutions`}),(0,x.jsxs)(`div`,{className:`footer-link-list`,children:[(0,x.jsx)(te,{href:`/e-learning`,children:`Instructor-Led Training`}),(0,x.jsx)(te,{href:`/e-learning`,children:`Microlearning`}),(0,x.jsx)(te,{href:`/e-learning`,children:`Custom SCORM / xAPI`})]})]}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{className:`footer-col-title`,children:`Recruitment & Staffing`}),(0,x.jsxs)(`div`,{className:`footer-link-list`,children:[(0,x.jsx)(te,{href:`/recruitment-staffing`,children:`Contract Staffing`}),(0,x.jsx)(te,{href:`/recruitment-staffing`,children:`Permanent Placement`}),(0,x.jsx)(te,{href:`/recruitment-staffing`,children:`Executive Search`})]})]}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{className:`footer-col-title`,children:`Financial Consultancy`}),(0,x.jsxs)(`div`,{className:`footer-link-list`,children:[(0,x.jsx)(te,{href:`/financial-consultancy`,children:`Accounting Services`}),(0,x.jsx)(te,{href:`/financial-consultancy`,children:`Fractional CFO`}),(0,x.jsx)(te,{href:`/financial-consultancy`,children:`Tax & Compliance`})]})]})]}),(0,x.jsxs)(`div`,{className:`footer-bottom`,children:[(0,x.jsxs)(`span`,{className:`footer-copy`,children:[`© `,e,` `,(0,x.jsx)(`strong`,{children:`JF Knowledge Centre`}),`. All rights reserved.`]}),(0,x.jsx)(`span`,{className:`footer-global-tag`,children:`Global Support Ecosystem`})]})]})]})}var re=e=>{window.history.pushState({},``,e),window.dispatchEvent(new PopStateEvent(`popstate`))};function ie(){let e=[{eyebrow:`Global Professional Services`,title:`Empowering Talent.`,accent:`Elevating Growth.`,description:`JF Knowledge Centre blends learning, staffing, and finance into a single delivery engine that helps organisations scale faster with lower risk.`,cta:`Begin Your Journey`,subCta:`Discover Our Story`,href:`/contact`,subHref:`/about`},{eyebrow:`Integrated Business Solutions`,title:`Learn Better.`,accent:`Hire Smarter.`,description:`From custom digital learning to executive recruitment and financial optimisation, our teams deliver seamless value across every business function.`,cta:`Book a Consultation`,subCta:`View Services`,href:`/contact`,subHref:`/services`},{eyebrow:`Performance-Driven Outcomes`,title:`Scale With Confidence.`,accent:`Operate With Clarity.`,description:`We help leaders build durable talent systems, modern learning ecosystems, and finance functions that support rapid global expansion.`,cta:`Schedule a Call`,subCta:`Why JF Works`,href:`/contact`,subHref:`/why-jf`}],[t,n]=(0,b.useState)(0),[r,i]=(0,b.useState)(!1),a=(0,b.useRef)(null),[o,s]=(0,b.useState)(!0),[c,l]=(0,b.useState)(!0);return(0,b.useEffect)(()=>{let e=setTimeout(()=>i(!0),100);return()=>clearTimeout(e)},[]),(0,b.useEffect)(()=>{let t=setInterval(()=>{n(t=>(t+1)%e.length)},3e3);return()=>clearInterval(t)},[e.length]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`style`,{children:`
                /* Container fits viewport minus custom navbar height */
            .hero-shell {
    position: relative;
    width: 100%;
    /* 1. Account for the header height so the hero fits the remaining viewport exactly */
    height: calc(100vh - 68px); 
    min-height: 620px;
    display: flex;
    align-items: center;
    overflow: hidden;
    font-family: var(--font-family);
    background: #000;
    
    /* 2. Push the entire element down so it clears the fixed header frame */
    margin-top: 68px; 
}

/* Fixed base video element layer */
.hero-video-wrapper {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
}

/* Change object-fit from contain to cover */
.hero-video {
    width: 100%;
    height: 100%;
    object-fit: cover; /* This covers the full area, eliminating black bars */
    object-position: center center; /* Optional: centers the video crop */
}

/* Translucent vignette panel framing the entire scene nicely */
.hero-left-gradient {
    position: absolute;
    inset: 0;
    /* Rich tech-blue vignette framing content perfectly across both edges */
    background: linear-gradient(
        90deg,
        rgba(5, 12, 28, 0.95) 0%,
        rgba(6, 15, 34, 0.85) 30%,
        rgba(7, 20, 45, 0.3) 60%,
        rgba(5, 12, 28, 0.25) 85%,
        rgba(5, 12, 28, 0.65) 100%
    );
    z-index: 2;
    pointer-events: none;
}

/* Grid shell mapping space across the frame */
.hero-inner {
    position: relative;
    z-index: 5;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 max(24px, 4vw);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}

/* Content slide block structure */
.hero-content-block {
    max-width: 540px;
    text-align: left;
    opacity: 0;
    transform: translateX(-20px);
    transition: opacity 0.6s ease-in-out, transform 0.6s ease-in-out;
}

.hero-content-block.visible {
    opacity: 1;
    transform: translateX(0);
}

.hero-overline {
    margin-bottom: 20px;
    display: inline-block;
}

.hero-headline {
    font-size: clamp(34px, 4.2vw, 54px);
    font-weight: 800;
    letter-spacing: -0.02em;
    line-height: 1.15;
    /* Main text color is pure white */
    color: #ffffff; 
    margin: 0 0 20px 0;
}

.hero-headline em {
    font-style: normal;
    /* Matching the precise neon cyan/blue hue from the reference image */
    background: linear-gradient(90deg, #38bdf8, #0ea5e9);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: block; /* Forces it to its own line exactly like the design layout */
    margin: 4px 0;
}

.hero-subtext {
    font-size: clamp(15px, 1.2vw, 16px);
    line-height: 1.65;
    color: var(--text-secondary, #cbd5e1);
    margin: 0 0 32px 0;
    min-height: 80px; /* Reserves uniform spacing for varying text lengths */
}

.hero-cta-row {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
    flex-wrap: wrap;
}

/* Left-aligned pagination dots */
.hero-slide-indicators {
    display: flex;
    gap: 12px;
    margin-top: 40px;
    justify-content: flex-start;
}

.hero-indicator {
    width: 12px;
    height: 12px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.15);
    cursor: pointer;
    padding: 0;
    transition: transform 0.2s ease, background 0.2s ease, width 0.2s ease;
}

.hero-indicator.active {
    width: 22px;
    background: var(--gold, #f59e0b);
    transform: scale(1.02);
}

/* Sound controls HUD */
.hero-audio-btn {
    position: absolute;
    right: 32px;
    bottom: 32px;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, .15);
    background: rgba(8, 15, 30, .6);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    cursor: pointer;
    transition: .3s ease;
    z-index: 10;
    box-shadow: 0 10px 30px rgba(0, 0, 0, .4);
}

.hero-audio-btn:hover {
    transform: scale(1.05);
    background: #2563EB;
    border-color: #2563EB;
}

.hero-audio-hint {
    position: absolute;
    right: 98px;
    bottom: 42px;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
    pointer-events: none;
    z-index: 10;
    white-space: nowrap;
    opacity: 1;
    transition: opacity 0.4s ease, transform 0.4s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.hero-audio-hint.fade-out {
    opacity: 0;
    transform: translateX(10px);
}

/* Responsive formatting fallback for smaller viewports */
@media (max-width: 820px) {
    .hero-shell {
        height: auto;
        min-height: calc(100vh - 68px);
        padding-top: 60px;
        padding-bottom: 90px;
        margin-top: 68px; 
    }
    .hero-video {
        object-position: center center;
    }
    .hero-left-gradient {
        /* Fades from top to bottom beautifully on vertical screen profiles */
        background: linear-gradient(
            180deg,
            rgba(5, 12, 28, 0.95) 0%,
            rgba(6, 15, 34, 0.85) 60%,
            rgba(7, 20, 45, 0.7) 100%
        );
    }
    .hero-inner {
        align-items: center;
    }
    .hero-content-block {
        text-align: center;
        max-width: 100%;
    }
    .hero-subtext {
        min-height: auto;
    }
    .hero-cta-row {
        justify-content: center;
    }
    .hero-slide-indicators {
        justify-content: center;
        margin-top: 30px;
    }
    .hero-audio-btn {
        right: 20px;
        bottom: 20px;
    }
    .hero-audio-hint {
        right: 84px;
        bottom: 30px;
    }
}
            `}),(0,x.jsxs)(`section`,{className:`hero-shell`,children:[(0,x.jsx)(`div`,{className:`hero-video-wrapper`,children:(0,x.jsx)(`video`,{ref:a,className:`hero-video`,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:`auto`,children:(0,x.jsx)(`source`,{src:`/assets/images/about/hero.mp4`,type:`video/mp4`})})}),(0,x.jsx)(`div`,{className:`hero-left-gradient`}),(0,x.jsxs)(`div`,{className:`hero-inner`,children:[e.map((e,n)=>(0,x.jsxs)(`div`,{className:`hero-content-block ${r&&t===n?`visible`:``}`,style:{display:t===n?`block`:`none`},children:[(0,x.jsx)(`span`,{className:`jf-overline hero-overline`,children:e.eyebrow}),(0,x.jsxs)(`h1`,{className:`hero-headline`,children:[e.title,(0,x.jsx)(`br`,{}),(0,x.jsx)(`em`,{children:e.accent})]}),(0,x.jsx)(`p`,{className:`hero-subtext`,children:e.description}),(0,x.jsxs)(`div`,{className:`hero-cta-row hero-cta`,children:[(0,x.jsxs)(`button`,{className:`jf-btn-primary jf-btn-primary-hero`,onClick:()=>re(e.href),children:[e.cta,(0,x.jsxs)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,x.jsx)(`line`,{x1:`5`,y1:`12`,x2:`19`,y2:`12`}),(0,x.jsx)(`polyline`,{points:`12 5 19 12 12 19`})]})]}),(0,x.jsx)(`button`,{className:`jf-btn-outline`,onClick:()=>re(e.subHref),children:e.subCta})]})]},e.title)),(0,x.jsx)(`div`,{className:`hero-slide-indicators`,children:e.map((e,r)=>(0,x.jsx)(`button`,{className:`hero-indicator ${t===r?`active`:``}`,onClick:()=>n(r),"aria-label":`Slide ${r+1}`},r))})]}),(0,x.jsx)(`div`,{className:`hero-audio-hint ${c?``:`fade-out`}`,children:`🔊 Tap for sound`}),(0,x.jsx)(`button`,{className:`hero-audio-btn`,onClick:()=>{a.current&&(a.current.muted=!a.current.muted,s(a.current.muted),c&&l(!1))},"aria-label":o?`Unmute sound`:`Mute sound`,children:o?(0,x.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,x.jsx)(`polygon`,{points:`11 5 6 9 2 9 2 15 6 15 11 19 11 5`}),(0,x.jsx)(`line`,{x1:`22`,y1:`9`,x2:`16`,y2:`15`}),(0,x.jsx)(`line`,{x1:`16`,y1:`9`,x2:`22`,y2:`15`})]}):(0,x.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,x.jsx)(`polygon`,{points:`11 5 6 9 2 9 2 15 6 15 11 19 11 5`}),(0,x.jsx)(`path`,{d:`M15.54 8.46a5 5 0 0 1 0 7.07`}),(0,x.jsx)(`path`,{d:`M19.07 4.93a10 10 0 0 1 0 14.14`})]})})]})]})}var ae=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),oe=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),se=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),ce=e=>{let t=se(e);return t.charAt(0).toUpperCase()+t.slice(1)},le={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},ue=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},de=(0,b.createContext)({}),w=()=>(0,b.useContext)(de),T=(0,b.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:p=``}=w()??{},m=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,b.createElement)(`svg`,{ref:c,...le,width:t??l??le.width,height:t??l??le.height,stroke:e??f,strokeWidth:m,className:ae(`lucide`,p,i),...!a&&!ue(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,b.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),E=(e,t)=>{let n=(0,b.forwardRef)(({className:n,...r},i)=>(0,b.createElement)(T,{ref:i,iconNode:t,className:ae(`lucide-${oe(ce(e))}`,`lucide-${e}`,n),...r}));return n.displayName=ce(e),n},fe=E(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),pe=E(`book-open`,[[`path`,{d:`M12 7v14`,key:`1akyts`}],[`path`,{d:`M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,key:`ruj8y`}]]),me=E(`briefcase`,[[`path`,{d:`M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16`,key:`jecpp`}],[`rect`,{width:`20`,height:`14`,x:`2`,y:`6`,rx:`2`,key:`i6l2r4`}]]),D=E(`building`,[[`path`,{d:`M12 10h.01`,key:`1nrarc`}],[`path`,{d:`M12 14h.01`,key:`1etili`}],[`path`,{d:`M12 6h.01`,key:`1vi96p`}],[`path`,{d:`M16 10h.01`,key:`1m94wz`}],[`path`,{d:`M16 14h.01`,key:`1gbofw`}],[`path`,{d:`M16 6h.01`,key:`1x0f13`}],[`path`,{d:`M8 10h.01`,key:`19clt8`}],[`path`,{d:`M8 14h.01`,key:`6423bh`}],[`path`,{d:`M8 6h.01`,key:`1dz90k`}],[`path`,{d:`M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3`,key:`cabbwy`}],[`rect`,{x:`4`,y:`2`,width:`16`,height:`20`,rx:`2`,key:`1uxh74`}]]),O=E(`calculator`,[[`rect`,{width:`16`,height:`20`,x:`4`,y:`2`,rx:`2`,key:`1nb95v`}],[`line`,{x1:`8`,x2:`16`,y1:`6`,y2:`6`,key:`x4nwl0`}],[`line`,{x1:`16`,x2:`16`,y1:`14`,y2:`18`,key:`wjye3r`}],[`path`,{d:`M16 10h.01`,key:`1m94wz`}],[`path`,{d:`M12 10h.01`,key:`1nrarc`}],[`path`,{d:`M8 10h.01`,key:`19clt8`}],[`path`,{d:`M12 14h.01`,key:`1etili`}],[`path`,{d:`M8 14h.01`,key:`6423bh`}],[`path`,{d:`M12 18h.01`,key:`mhygvu`}],[`path`,{d:`M8 18h.01`,key:`lrp35t`}]]),he=E(`calendar`,[[`path`,{d:`M8 2v4`,key:`1cmpym`}],[`path`,{d:`M16 2v4`,key:`4m81vk`}],[`rect`,{width:`18`,height:`18`,x:`3`,y:`4`,rx:`2`,key:`1hopcy`}],[`path`,{d:`M3 10h18`,key:`8toen8`}]]),ge=E(`chart-column`,[[`path`,{d:`M3 3v16a2 2 0 0 0 2 2h16`,key:`c24i48`}],[`path`,{d:`M18 17V9`,key:`2bz60n`}],[`path`,{d:`M13 17V5`,key:`1frdt8`}],[`path`,{d:`M8 17v-3`,key:`17ska0`}]]),_e=E(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),ve=E(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),ye=E(`circle-check`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),be=E(`clipboard-check`,[[`rect`,{width:`8`,height:`4`,x:`8`,y:`2`,rx:`1`,ry:`1`,key:`tgr4d6`}],[`path`,{d:`M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2`,key:`116196`}],[`path`,{d:`m9 14 2 2 4-4`,key:`df797q`}]]),xe=E(`code`,[[`path`,{d:`m16 18 6-6-6-6`,key:`eg8j8`}],[`path`,{d:`m8 6-6 6 6 6`,key:`ppft3o`}]]),Se=E(`compass`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z`,key:`9ktpf1`}]]),Ce=E(`cpu`,[[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M17 20v2`,key:`1rnc9c`}],[`path`,{d:`M17 2v2`,key:`11trls`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M2 17h2`,key:`7oei6x`}],[`path`,{d:`M2 7h2`,key:`asdhe0`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`M20 17h2`,key:`1fpfkl`}],[`path`,{d:`M20 7h2`,key:`1o8tra`}],[`path`,{d:`M7 20v2`,key:`4gnj0m`}],[`path`,{d:`M7 2v2`,key:`1i4yhu`}],[`rect`,{x:`4`,y:`4`,width:`16`,height:`16`,rx:`2`,key:`1vbyd7`}],[`rect`,{x:`8`,y:`8`,width:`8`,height:`8`,rx:`1`,key:`z9xiuo`}]]),we=E(`crown`,[[`path`,{d:`M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z`,key:`1vdc57`}],[`path`,{d:`M5 21h14`,key:`11awu3`}]]),Te=E(`earth`,[[`path`,{d:`M21.54 15H17a2 2 0 0 0-2 2v4.54`,key:`1djwo0`}],[`path`,{d:`M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17`,key:`1tzkfa`}],[`path`,{d:`M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05`,key:`14pb5j`}],[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),Ee=E(`eye`,[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,key:`1nclc0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),De=E(`factory`,[[`path`,{d:`M12 16h.01`,key:`1drbdi`}],[`path`,{d:`M16 16h.01`,key:`1f9h7w`}],[`path`,{d:`M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z`,key:`1iv0i2`}],[`path`,{d:`M8 16h.01`,key:`18s6g9`}]]),Oe=E(`file-text`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]),ke=E(`gamepad-2`,[[`line`,{x1:`6`,x2:`10`,y1:`11`,y2:`11`,key:`1gktln`}],[`line`,{x1:`8`,x2:`8`,y1:`9`,y2:`13`,key:`qnk9ow`}],[`line`,{x1:`15`,x2:`15.01`,y1:`12`,y2:`12`,key:`krot7o`}],[`line`,{x1:`18`,x2:`18.01`,y1:`10`,y2:`10`,key:`1lcuu1`}],[`path`,{d:`M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z`,key:`mfqc10`}]]),Ae=E(`graduation-cap`,[[`path`,{d:`M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z`,key:`j76jl0`}],[`path`,{d:`M22 10v6`,key:`1lu8f3`}],[`path`,{d:`M6 12.5V16a6 3 0 0 0 12 0v-3.5`,key:`1r8lef`}]]),je=E(`heart-pulse`,[[`path`,{d:`M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5`,key:`mvr1a0`}],[`path`,{d:`M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27`,key:`auskq0`}]]),Me=E(`landmark`,[[`path`,{d:`M10 18v-7`,key:`wt116b`}],[`path`,{d:`M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z`,key:`yxxwt6`}],[`path`,{d:`M14 18v-7`,key:`vav6t3`}],[`path`,{d:`M18 18v-7`,key:`aexdmj`}],[`path`,{d:`M3 22h18`,key:`8prr45`}],[`path`,{d:`M6 18v-7`,key:`1ivflk`}]]),Ne=E(`laptop`,[[`path`,{d:`M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z`,key:`1pdavp`}],[`path`,{d:`M20.054 15.987H3.946`,key:`14rxg9`}]]),Pe=E(`layers`,[[`path`,{d:`M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`,key:`zw3jo`}],[`path`,{d:`M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`,key:`1wduqc`}],[`path`,{d:`M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`,key:`kqbvx6`}]]),Fe=E(`mail`,[[`path`,{d:`m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`,key:`132q7q`}],[`rect`,{x:`2`,y:`4`,width:`20`,height:`16`,rx:`2`,key:`izxlao`}]]),Ie=E(`phone`,[[`path`,{d:`M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384`,key:`9njp5v`}]]),Le=E(`receipt`,[[`path`,{d:`M12 17V7`,key:`pyj7ub`}],[`path`,{d:`M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8`,key:`1elt7d`}],[`path`,{d:`M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z`,key:`ycz6yz`}]]),Re=E(`shield-alert`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`M12 8v4`,key:`1got3b`}],[`path`,{d:`M12 16h.01`,key:`1drbdi`}]]),ze=E(`shield-check`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),Be=E(`sparkles`,[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]]),Ve=E(`target`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`circle`,{cx:`12`,cy:`12`,r:`6`,key:`1vlfrh`}],[`circle`,{cx:`12`,cy:`12`,r:`2`,key:`1c9p78`}]]),He=E(`trending-up`,[[`path`,{d:`M16 7h6v6`,key:`box55l`}],[`path`,{d:`m22 7-8.5 8.5-5-5L2 17`,key:`1t1m79`}]]),Ue=E(`user-check`,[[`path`,{d:`m16 11 2 2 4-4`,key:`9rsbq5`}],[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}]]),We=E(`user`,[[`path`,{d:`M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`,key:`975kel`}],[`circle`,{cx:`12`,cy:`7`,r:`4`,key:`17ys0d`}]]),Ge=E(`users`,[[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`path`,{d:`M16 3.128a4 4 0 0 1 0 7.744`,key:`16gr8j`}],[`path`,{d:`M22 21v-2a4 4 0 0 0-3-3.87`,key:`kshegd`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}]]),Ke=E(`video`,[[`path`,{d:`m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5`,key:`ftymec`}],[`rect`,{x:`2`,y:`6`,width:`14`,height:`12`,rx:`2`,key:`158x01`}]]),qe=E(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),Je=E(`zap`,[[`path`,{d:`M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z`,key:`1xq2db`}]]),Ye=e=>{window.history.pushState({},``,e),window.dispatchEvent(new PopStateEvent(`popstate`))};function Xe(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`style`,{children:`
                .sg-section {
                    padding: 96px 0;
                    font-family: var(--font-family);
                    position: relative;
                    isolation: isolate;
                    background:
                       linear-gradient(
                        135deg,
                        rgba(222, 232, 248, 0.82) 0%,
                        rgba(195, 210, 232, 0.68) 100%
                        ),
                        url('/assets/images/about/servicebg.png') center / cover no-repeat;
                }

                .sg-container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 max(24px, 4vw);
                }

                .sg-header {
                    text-align: center;
                    max-width: 720px;
                    margin: 0 auto 56px;
                }

                .sg-headline {
                    font-size: clamp(34px, 4vw, 52px);
                    font-weight: 800;
                    letter-spacing: -0.03em;
                    color: var(--text-on-light);
                    margin: 12px 0 16px;
                    line-height: 1.08;
                }

                .sg-desc {
                    font-size: 16px;
                    color: var(--text-on-light-muted);
                    line-height: 1.8;
                    margin: 0 auto;
                    max-width: 680px;
                }

                .sg-grid {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    gap: 28px;
                }

                .sg-card {
                    background: linear-gradient(145deg, rgba(8, 15, 34, 0.96) 0%, rgba(15, 23, 55, 0.9) 100%),
                        url('/assets/images/about/card bg.png') center / cover no-repeat;
                    border: 1px solid rgba(15, 23, 55, 0.12);
                    border-radius: 32px;
                    padding: 28px;
                    display: grid;
                    grid-template-rows: auto 1fr auto;
                    cursor: pointer;
                    transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
                    min-height: 620px;
                    box-shadow: 0 24px 60px rgba(15, 23, 55, 0.12);
                    overflow: hidden;
                }

                .sg-card:hover {
                    border-color: rgba(37, 99, 235, 0.35);
                    box-shadow: 0 28px 80px rgba(37, 99, 235, 0.12);
                    transform: translateY(-4px);
                }

                .sg-card-content {
                    display: grid;
                    gap: 20px;
                }

                .sg-card-image {
                    height: 360px;
                    border-radius: 24px;
                    background-size: cover;
                    background-position: center;
                    overflow: hidden;
                    position: relative;
                    margin-top: 0;
                    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04);
                }

                .sg-card-image::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(180deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.22) 100%);
                }

                .sg-label-capsule {
                    position: absolute;
                    top: 16px;
                    right: 16px;
                    padding: 8px 12px;
                    border-radius: 999px;
                    background: rgba(255,255,255,0.95);
                    backdrop-filter: blur(6px);
                    font-size: 12px;
                    font-weight: 700;
                    color: #1e3a8a;
                    z-index: 3;
                    box-shadow: 0 8px 20px rgba(15,23,55,0.12);
                }

                .sg-card-top { display: none; }

                .sg-card {
                    min-height: 620px;
                    display: grid;
                    grid-template-rows: auto 1fr auto;
                }

                .sg-card-content {
                    display: flex;
                    flex-direction: column;
                    gap: 18px;
                    padding-top: 20px;
                }

                .sg-bullet-list {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    margin: 0;
                    padding: 0;
                }

                .sg-bullet-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 14px;
                    color: rgba(255, 255, 255, 0.9);
                }

                /* Elegant White Bullet Point Style */
                .sg-bullet-dot-white {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: #ffffff;
                    flex-shrink: 0;
                    box-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
                }

                .sg-icon-wrap {
                    width: 52px;
                    height: 52px;
                    border-radius: 12px;
                    background: var(--primary-muted);
                    color: var(--primary-light);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .sg-card-num {
                    font-size: 12px;
                    font-weight: 700;
                    letter-spacing: 0.14em;
                    color: var(--text-on-light-faint);
                }

                .sg-card-label {
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 0.16em;
                    text-transform: uppercase;
                    color: var(--primary-light);
                    margin-bottom: 8px;
                }

                .sg-card-title {
                    font-size: 20px;
                    font-weight: 700;
                    color: #ffffff;
                    margin-bottom: 12px;
                    line-height: 1.25;
                    letter-spacing: -0.02em;
                }

                .sg-card-desc {
                    font-size: 14px;
                    color: rgba(255, 255, 255, 0.85);
                    line-height: 1.7;
                    margin-bottom: 20px;
                    flex: 1;
                }

                .sg-card-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 13px;
                    font-weight: 600;
                    color: #60a5fa;
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 0;
                    font-family: var(--font-family);
                    transition: gap 0.2s ease;
                    margin-top: auto;
                }

                .sg-card-link:hover { gap: 12px; }

                .sg-bottom-bar {
                    margin-top: 56px;
                    padding-top: 40px;
                    border-top: 1px solid var(--border-light);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 32px;
                    flex-wrap: wrap;
                }

                .sg-bottom-stats {
                    display: flex;
                    gap: 48px;
                    flex-wrap: wrap;
                }

                .sg-stat-val {
                    font-size: 28px;
                    font-weight: 800;
                    color: var(--text-on-light);
                    letter-spacing: -0.03em;
                    line-height: 1;
                }

                .sg-stat-lbl {
                    font-size: 11px;
                    font-weight: 600;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: var(--text-on-light-faint);
                    margin-top: 4px;
                }

                @media (max-width: 960px) {
                    .sg-grid { grid-template-columns: 1fr; }
                    .sg-bottom-stats { gap: 28px; }
                }
            `}),(0,x.jsx)(`section`,{className:`sg-section theme-section theme-section--light`,children:(0,x.jsxs)(`div`,{className:`sg-container`,children:[(0,x.jsxs)(`div`,{className:`sg-header section-intro`,children:[(0,x.jsx)(`span`,{className:`jf-overline`,children:`Core Capabilities`}),(0,x.jsx)(`h2`,{className:`sg-headline section-title`,style:{fontWeight:700,color:`var(--primary)`},children:`Three Divisions. Infinite Scalability.`}),(0,x.jsx)(`p`,{className:`sg-desc section-copy`,children:`One unified partner engine accelerating your strategic hyper-growth objectives across learning assets, talent engineering, and institutional finances — globally.`})]}),(0,x.jsx)(`div`,{className:`sg-grid`,children:[{icon:(0,x.jsx)(Ne,{size:28,strokeWidth:1.5}),label:`E-Learning`,title:`E-Learning & Digital Learning Solutions`,desc:`We design, develop, and deploy cutting-edge learning experiences tailored to your organisation's unique goals.`,href:`/e-learning`,bgImage:`/assets/images/about/elearning.png`,bullets:[`Instructor-led & VILT programmes`,`Microlearning & mobile-first modules`,`LMS implementation & integrations`]},{icon:(0,x.jsx)(Ge,{size:28,strokeWidth:1.5}),label:`Recruitment`,title:`Recruitment, Staffing & Talent Solutions`,desc:`We deliver permanent placement, contract staffing, staff augmentation, and executive search with rapid shortlists.`,href:`/recruitment-staffing`,bgImage:`/assets/images/about/recruitment.png`,bullets:[`Permanent & contract hiring`,`Fast shortlists (48h)`,`Executive search & leadership hires`]},{icon:(0,x.jsx)(ge,{size:28,strokeWidth:1.5}),label:`Financial Consultancy`,title:`Financial Consultancy & Accounting Services`,desc:`Qualified accountants delivering bookkeeping, reporting and fractional CFO services.`,href:`/financial-consultancy`,bgImage:`/assets/images/about/financial.png`,bullets:[`Cloud bookkeeping & reporting`,`Tax & compliance advisory`,`Fractional CFO services`]}].map((e,t)=>(0,x.jsxs)(`div`,{className:`sg-card`,onClick:()=>Ye(e.href),children:[(0,x.jsx)(`div`,{className:`sg-card-image`,style:{backgroundImage:`url('${e.bgImage}')`},children:(0,x.jsx)(`div`,{className:`sg-label-capsule`,children:e.label})}),(0,x.jsxs)(`div`,{className:`sg-card-content`,children:[(0,x.jsx)(`h3`,{className:`sg-card-title`,children:e.title}),(0,x.jsx)(`div`,{className:`sg-bullet-list`,children:e.bullets?.map((e,t)=>(0,x.jsxs)(`div`,{className:`sg-bullet-item`,children:[(0,x.jsx)(`span`,{className:`sg-bullet-dot-white`}),(0,x.jsx)(`span`,{children:e})]},t))}),(0,x.jsx)(`p`,{className:`sg-card-desc`,style:{marginTop:8},children:e.desc})]}),(0,x.jsxs)(`button`,{className:`sg-card-link`,onClick:t=>{t.stopPropagation(),Ye(e.href)},children:[`Explore Division `,(0,x.jsx)(fe,{size:14})]})]},t))}),(0,x.jsxs)(`div`,{className:`sg-bottom-bar`,children:[(0,x.jsx)(`div`,{className:`sg-bottom-stats`,children:[{val:`92%+`,lbl:`Talent Retention`},{val:`48h`,lbl:`Time-to-Shortlist`},{val:`30+`,lbl:`Languages Delivered`},{val:`Big 4`,lbl:`Grade Financial Expertise`}].map((e,t)=>(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{className:`sg-stat-val`,children:e.val}),(0,x.jsx)(`div`,{className:`sg-stat-lbl`,children:e.lbl})]},t))}),(0,x.jsxs)(`button`,{className:`jf-btn-outline`,onClick:()=>Ye(`/contact`),children:[`Start a Conversation`,(0,x.jsxs)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 24 24`,fill:`linear-gradient(135deg, #2563EB, #3B82F6)`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,x.jsx)(`line`,{x1:`5`,y1:`12`,x2:`19`,y2:`12`}),(0,x.jsx)(`polyline`,{points:`12 5 19 12 12 19`})]})]})]})]})})]})}var Ze=e=>{window.history.pushState({},``,e),window.dispatchEvent(new PopStateEvent(`popstate`))};function Qe(){let[e,t]=(0,b.useState)(0),n=[{label:`INTEGRATED`,title:`Expertise`,short:`Three divisions. One trusted partner.`,desc:`Three corporate divisions unified under one roof. We coordinate your digital education, staff sourcing, and financial reporting with clear, single-point accountability — saving time, cost, and coordination overhead.`,stat:`3`,statLabel:`DIVISIONS`,bullets:[`Unified Accountability`,`Cost Reduction`,`Streamlined Workflows`,`Centralized Reporting`],tags:[`Learning`,`Talent`],bgImage:`/assets/images/about/card1.png`,position:`center center`,footerText:`Trusted by 150+ Enterprises`},{label:`GLOBAL REACH`,title:`Local Insight`,short:`US · UK · Europe · GCC · India`,desc:`Active business hubs across the US, UK, Europe, GCC, and India. We understand local market nuances, regulatory landscapes, and cultural contexts that drive results in each geography.`,stat:`5+`,statLabel:`MARKETS`,bullets:[`Cross-border Compliance`,`Local Market Nuances`,`Multi-currency Support`,`Global Delivery Network`],tags:[`US/UK Hubs`,`GCC Network`],bgImage:`/assets/images/about/card2.png`,position:`top center`,footerText:`Global Operational Readiness`},{label:`TECH-DRIVEN`,title:`Digital Delivery`,short:`AI, automation & corporate platforms.`,desc:`We leverage AI-powered candidate matching, automated learning platforms, and real-time financial dashboards to deliver faster, smarter, and more scalable solutions across all three divisions.`,stat:`AI`,statLabel:`POWERED`,bullets:[`Smart Candidate Matching`,`Automated L&D Pipelines`,`Real-time Dashboards`,`Predictive Resource Models`],tags:[`AI Sourcing`,`L&D Platforms`],bgImage:`/assets/images/about/card3.png`,position:`right center`,footerText:`Next-Gen Enterprise Infrastructure`},{label:`OUTCOME-FOCUSED`,title:`Guarantees`,short:`KPIs, milestones, measurable impact.`,desc:`We measure success by outcomes, not activity. Every engagement is defined by clear KPIs, milestones, and measurable impact that drives your business forward — guaranteed.`,stat:`100%`,statLabel:`OUTCOME TRACKED`,bullets:[`Guaranteed Milestones`,`Transparent Analytics`,`ROI-centric Models`,`SLA Alignment Assurance`],tags:[`KPI Matrices`,`ROI Metrics`],bgImage:`/assets/images/about/card4.png`,position:`30% center`,footerText:`Milestone Assurance Architecture`},{label:`QUALIFIED`,title:`Professionals`,short:`CAs, CPAs, CIPD & certified experts.`,desc:`Our team includes CIPD-qualified HR professionals, Chartered Accountants, CPAs, certified instructional designers, and senior talent consultants with decades of cross-industry experience.`,stat:`BIG 4`,statLabel:`GRADE EXPERTISE`,bullets:[`Certified Strategists`,`Senior Advisory Pools`,`Cross-industry Experience`,`Rigorous Compliance Auditing`],tags:[`CAs & CPAs`,`CIPD Grade`],bgImage:`/assets/images/about/card5.png`,position:`70% center`,footerText:`Industry Certified Subject Experts`},{label:`SCALABLE`,title:`Solutions`,short:`Built to grow with your corporate ambitions.`,desc:`From start-ups building their first financial model to multinationals deploying training to 50,000 employees — our solutions are built to scale with your ambition without compromising quality.`,stat:`50K+`,statLabel:`LEARNERS SERVED`,bullets:[`Startup Agility Matrix`,`Enterprise Infrastructure`,`Global Scalability Deployments`,`On-Demand Elastic Sizing`],tags:[`Scale Engine`,`Enterprise Sizing`],bgImage:`/assets/images/about/card6.png`,position:`center bottom`,footerText:`Built for Fortune 500 Sizing`}],r=n[e];return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`style`,{children:`
                /* Structural Matrix Foundations */
                .wcu-section {
                    padding: 120px 0;
                    font-family: var(--font-family, sans-serif);
                    background-color: #040A14;
                    position: relative;
                    overflow: hidden;
                }

                /* Immersive Enterprise Section Background Image Layer */
                .wcu-bg-image {
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                    overflow: hidden;
                    pointer-events: none;
                    background-image: url('/assets/images/about/whyus3.jpg');
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    filter: brightness(.72) contrast(1.08) saturate(1.08);
                }

                /* Dark Gradient Overlay with Dynamic Blur */
                .wcu-bg-gradient {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(180deg, rgba(4,10,20,.45) 0%, rgba(6,12,28,.35) 35%, rgba(5,8,18,.60) 100%);
                    backdrop-filter: blur(2px);
                }

                /* Immersive Ambient Blur Background Clusters */
                .wcu-blob-blue {
                    position: absolute;
                    width: 650px;
                    height: 650px;
                    top: -150px;
                    right: -100px;
                    background: radial-gradient(circle, rgba(37,99,235,0.14) 0%, transparent 70%);
                    pointer-events: none;
                    z-index: 1;
                }

                .wcu-blob-gold {
                    position: absolute;
                    width: 550px;
                    height: 550px;
                    bottom: -80px;
                    left: -120px;
                    background: radial-gradient(circle, rgba(253,181,21,0.07) 0%, transparent 70%);
                    pointer-events: none;
                    z-index: 1;
                }

                .wcu-container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 max(24px, 4vw);
                    position: relative;
                    z-index: 2;
                }

                /* Modernized Split Dashboard Core Grid Layout */
                .wcu-split-hero {
                    display: grid;
                    grid-template-columns: 1fr 1.10fr;
                    gap: 56px;
                    align-items: center;
                    margin-bottom: 80px;
                }

                .wcu-hero-left {
                    display: flex;
                    flex-direction: column;
                }

                .wcu-eyebrow {
                    font-size: 14px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    color: #60A5FA;
                    margin-bottom: 16px;
                }

                .wcu-headline {
                    font-size: 64px;
                    font-weight: 900;
                    line-height: 1.05;
                    letter-spacing: -0.04em;
                    color: #ffffff;
                    margin: 0 0 24px 0;
                }

                .wcu-headline em {
                    font-style: normal;
                    background: linear-gradient(135deg, #60A5FA, #2563EB);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .wcu-subheading {
                    font-size: 20px;
                    font-weight: 400;
                    color: rgba(255, 255, 255, 0.7);
                    line-height: 1.55;
                    margin-bottom: 32px;
                }

                .wcu-hero-cta {
                    align-self: flex-start;
                    background: linear-gradient(135deg, #FDB515, #FFCB45);
                    color: #040A14;
                    font-weight: 700;
                    font-size: 16px;
                    border: none;
                    box-shadow: 0 12px 30px rgba(253,181,21,.35);
                    padding: 18px 38px;
                    border-radius: 999px;
                    cursor: pointer;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .wcu-hero-cta:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 20px 50px rgba(253,181,21,.45);
                }

                /* --- 💎 PREMIUM SPOTLIGHT CARD RE-ENGINEERING --- */
                .wcu-spotlight-card {
                    position: relative;
                    overflow: hidden;
                    background: 
                        radial-gradient(circle at top right, rgba(37,99,235,.22), transparent 45%),
                        linear-gradient(180deg, rgba(16,23,40,.98), rgba(10,17,33,.98));
                    border: 1px solid rgba(255,255,255,.08);
                    border-radius: 30px;
                    box-shadow: 
                        0 30px 70px rgba(0,0,0,.45),
                        inset 0 1px rgba(255,255,255,.05);
                    backdrop-filter: blur(30px);
                    padding: 42px;
                    min-height: 460px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                /* Depth Glow Decoration */
                .wcu-spotlight-card::before {
                    content: "";
                    position: absolute;
                    top: -120px;
                    right: -80px;
                    width: 280px;
                    height: 280px;
                    background: radial-gradient(circle, rgba(59,130,246,.35), transparent 70%);
                    filter: blur(20px);
                    pointer-events: none;
                    z-index: 1;
                }

                /* Floating Ambient Background Digit */
                .wcu-spotlight-card::after {
                    content: "${String(e+1).padStart(2,`0`)}";
                    position: absolute;
                    right: 25px;
                    bottom: -20px;
                    font-size: 140px;
                    font-weight: 900;
                    color: rgba(255, 255, 255, 0.025);
                    pointer-events: none;
                    line-height: 1;
                    z-index: 0;
                }

                .wcu-transition-group {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    width: 100%;
                    animation: wcuFadeSlide 0.40s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }

                @keyframes wcuFadeSlide {
                    0% { opacity: 0; transform: translateY(12px); }
                    100% { opacity: 1; transform: translateY(0); }
                }

                /* Layout Upgrades */
                .wcu-spotlight-top-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    gap: 30px;
                    padding-bottom: 28px;
                    border-bottom: 1px solid rgba(255,255,255,.06);
                    margin-bottom: 30px;
                }

                .wcu-spotlight-title {
                    font-size: 42px;
                    font-weight: 800;
                    line-height: 1.05;
                    letter-spacing: -1px;
                    color: white;
                    margin-bottom: 14px;
                }

                .wcu-spotlight-desc {
                    font-size: 18px;
                    line-height: 1.7;
                    color: rgba(255,255,255,.72);
                    max-width: 560px;
                    margin: 0;
                }

                /* Glowing Stat Box Pill */
                .wcu-spotlight-stat-box {
                    background: linear-gradient(135deg, #2563eb, #4f8cff);
                    padding: 16px 22px;
                    border-radius: 18px;
                    min-width: 120px;
                    text-align: center;
                    box-shadow: 0 15px 40px rgba(37,99,235,.35);
                    flex-shrink: 0;
                }

                .wcu-spotlight-stat {
                    font-size: 36px;
                    font-weight: 800;
                    color: white;
                    line-height: 1;
                }

                .wcu-spotlight-lbl {
                    margin-top: 6px;
                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: white;
                    opacity: .85;
                    line-height: 1.2;
                }

                /* Structured 2-Column Bullet Layout */
                .wcu-bullet-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 18px;
                }

                .wcu-bullet-item {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    padding: 14px 18px;
                    border-radius: 16px;
                    background: rgba(255,255,255,.03);
                    border: 1px solid rgba(255,255,255,.05);
                    transition: .35s ease;
                }

                .wcu-bullet-item:hover {
                    background: rgba(37,99,235,.12);
                    border-color: #3b82f6;
                    transform: translateY(-3px);
                }

                .wcu-bullet-item span {
                    color: rgba(255, 255, 255, 0.9);
                    font-size: 15px;
                    font-weight: 500;
                }

                .wcu-bullet-icon {
                    color: #4ea7ff;
                    padding: 8px;
                    background: rgba(78,167,255,.12);
                    border-radius: 50%;
                    min-width: 34px;
                    height: 34px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-sizing: border-box;
                }

                /* Bottom Interactive CTA Strip */
                .wcu-card-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-top: 28px;
                    margin-top: 30px;
                    border-top: 1px solid rgba(255,255,255,.06);
                }

                .wcu-footer-badge {
                    font-size: 14px;
                    font-weight: 500;
                    color: rgba(255, 255, 255, 0.45);
                    letter-spacing: 0.02em;
                }

                .wcu-footer-action {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 14px;
                    font-weight: 700;
                    color: #60A5FA;
                    cursor: pointer;
                    transition: color 0.3s ease, transform 0.3s ease;
                }

                .wcu-footer-action:hover {
                    color: #93C5FD;
                    transform: translateX(4px);
                }

                /* 6-Card Grid Matrices */
                .wcu-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                    margin-top: 32px;
                }

                .wcu-card {
                    position: relative;
                    height: 460px;
                    background: linear-gradient(180deg, rgba(18,26,45,.18), rgba(18,26,45,.35));
                    border: 1px solid rgba(255,255,255,.06);
                    border-radius: 26px;
                    padding: 34px; 
                    cursor: pointer;
                    text-align: left;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    transition: all .45s cubic-bezier(.16,1,.3,1);
                    backdrop-filter: blur(12px);
                }

                .wcu-card-bg-image {
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                    background-size: cover;
                    pointer-events: none;
                    opacity: 1;
                    filter: brightness(.95) contrast(1.08) saturate(1.1);
                    transition: all .45s cubic-bezier(.16,1,.3,1);
                }

                .wcu-card-bg-overlay {
                    position: absolute;
                    inset: 0;
                    z-index: 1;
                    pointer-events: none;
                    background: linear-gradient(180deg, rgba(0,0,0,.05) 0%, rgba(0,0,0,.15) 35%, rgba(4,10,20,.92) 100%);
                }

                .wcu-card-bg-overlay-fade {
                    position: absolute;
                    inset: 0;
                    z-index: 2;
                    pointer-events: none;
                    background: radial-gradient(circle at bottom, rgba(37,99,235,.28), transparent 70%);
                }

                .wcu-card-content {
                    position: relative;
                    z-index: 3;
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                }

                .wcu-card-stat-badge {
                    position: absolute;
                    top: 24px;
                    right: 24px;
                    z-index: 4;
                    background: rgba(255, 255, 255, 0.06);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    backdrop-filter: blur(16px);
                    padding: 10px 16px;
                    border-radius: 16px;
                    text-align: right;
                    pointer-events: none;
                    transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s ease;
                }

                .wcu-card:hover .wcu-card-stat-badge {
                    transform: translateY(-2px);
                    background: rgba(255, 255, 255, 0.1);
                    border-color: rgba(96, 165, 250, 0.3);
                }

                .wcu-card-stat-value {
                    font-size: 22px;
                    font-weight: 900;
                    color: #ffffff;
                    line-height: 1;
                }

                .wcu-card-stat-label {
                    font-size: 9px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    color: rgba(255, 255, 255, 0.5);
                    margin-top: 2px;
                }

                .wcu-card:hover, .wcu-card.active {
                    transform: translateY(-12px) scale(1.02);
                    border-color: rgba(96,165,250,0.4);
                    box-shadow: 0 40px 90px rgba(37,99,235,.28);
                }

                .wcu-card:hover .wcu-card-bg-image,
                .wcu-card.active .wcu-card-bg-image {
                    transform: scale(1.1);
                    filter: brightness(1.15) contrast(1.2) saturate(1.2);
                }

                .wcu-card::after {
                    content: "";
                    position: absolute;
                    inset: 0;
                    padding: 1px;
                    border-radius: 26px;
                    background: linear-gradient(135deg, #2563EB, #60A5FA, transparent);
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    opacity: 0;
                    transition: opacity .4s ease;
                    z-index: 5;
                }

                .wcu-card:hover::after, .wcu-card.active::after {
                    opacity: 1;
                }

                .wcu-card-label {
                    font-size: 14px;
                    font-weight: 700;
                    text-transform: uppercase;
                    color: #5EA3FF;
                    letter-spacing: 0.18em;
                    margin-bottom: 6px;
                }

                .wcu-card-title {
                    font-size: 42px;
                    font-weight: 900;
                    color: #ffffff;
                    letter-spacing: -0.03em;
                    line-height: 1;
                    margin-bottom: 12px;
                }

                .wcu-card-desc {
                    font-size: 15px;
                    color: rgba(255, 255, 255, 0.7);
                    line-height: 1.55;
                    margin-bottom: 28px;
                }

                .wcu-pill-box {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-top: auto;
                }

                .wcu-pill-chip {
                    padding: 10px 18px;
                    background: rgba(255,255,255,.12);
                    border: 1px solid rgba(255,255,255,.18);
                    backdrop-filter: blur(12px);
                    border-radius: 999px;
                    font-size: 13px;
                    font-weight: 700;
                    color: #ffffff;
                }

                .wcu-section-divider {
                    margin-top: 96px;
                    height: 1px;
                    width: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08) 20%, rgba(255, 255, 255, 0.08) 80%, transparent);
                }

                /* Fluid Structural Responsive Matrix */
                @media (max-width: 1140px) {
                    .wcu-split-hero { grid-template-columns: 1fr; gap: 48px; }
                    .wcu-grid { grid-template-columns: repeat(2, 1fr); }
                }

                @media (max-width: 768px) {
                    .wcu-headline { font-size: 46px; }
                    .wcu-grid { grid-template-columns: 1fr; }
                    .wcu-bullet-grid { grid-template-columns: 1fr; }
                    .wcu-spotlight-top-row { gap: 20px; }
                    .wcu-spotlight-title { font-size: 32px; }
                }
            `}),(0,x.jsxs)(`section`,{className:`wcu-section`,children:[(0,x.jsx)(`div`,{className:`wcu-bg-image`,children:(0,x.jsx)(`div`,{className:`wcu-bg-gradient`})}),(0,x.jsx)(`div`,{className:`wcu-blob-blue`}),(0,x.jsx)(`div`,{className:`wcu-blob-gold`}),(0,x.jsxs)(`div`,{className:`wcu-container`,children:[(0,x.jsxs)(`div`,{className:`wcu-split-hero`,children:[(0,x.jsxs)(`div`,{className:`wcu-hero-left`,children:[(0,x.jsx)(`span`,{className:`wcu-eyebrow`,children:`Empowering Talent. Enabling Growth. Elevating Business.`}),(0,x.jsxs)(`h2`,{className:`wcu-headline`,children:[`The JF Knowledge `,(0,x.jsx)(`em`,{children:`Difference.`})]}),(0,x.jsx)(`p`,{className:`wcu-subheading`,children:`The concept of integrated professional services means that different aspects of your business — learning, talent, and finance — are interconnected and influence each other. JF unifies all three under one roof, contributing to your organisation's overall operational excellence.`}),(0,x.jsx)(`button`,{className:`wcu-hero-cta`,onClick:()=>Ze(`/contact`),children:`Book a Consultation`})]}),(0,x.jsx)(`div`,{className:`wcu-spotlight-card`,children:(0,x.jsxs)(`div`,{className:`wcu-transition-group`,children:[(0,x.jsxs)(`div`,{className:`wcu-spotlight-top-row`,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsxs)(`h3`,{className:`wcu-spotlight-title`,children:[r.label,` `,r.title]}),(0,x.jsx)(`p`,{className:`wcu-spotlight-desc`,children:r.desc})]}),(0,x.jsxs)(`div`,{className:`wcu-spotlight-stat-box`,children:[(0,x.jsx)(`div`,{className:`wcu-spotlight-stat`,children:r.stat}),(0,x.jsx)(`div`,{className:`wcu-spotlight-lbl`,children:r.statLabel})]})]}),(0,x.jsx)(`div`,{className:`wcu-bullet-grid`,children:r.bullets.map((e,t)=>(0,x.jsxs)(`div`,{className:`wcu-bullet-item`,children:[(0,x.jsx)(`div`,{className:`wcu-bullet-icon`,children:(0,x.jsx)(ye,{size:16,strokeWidth:2.5})}),(0,x.jsx)(`span`,{children:e})]},t))}),(0,x.jsxs)(`div`,{className:`wcu-card-footer`,children:[(0,x.jsx)(`div`,{className:`wcu-footer-badge`,children:r.footerText}),(0,x.jsxs)(`div`,{className:`wcu-footer-action`,onClick:()=>Ze(`/contact`),children:[(0,x.jsx)(`span`,{children:`Learn More`}),(0,x.jsx)(fe,{size:14,strokeWidth:2.5})]})]})]},e)})]}),(0,x.jsx)(`div`,{className:`wcu-grid`,children:n.map((n,r)=>(0,x.jsxs)(`div`,{className:`wcu-card ${e===r?`active`:``}`,onMouseEnter:()=>t(r),onClick:()=>t(r),children:[(0,x.jsx)(`div`,{className:`wcu-card-bg-image`,style:{backgroundImage:`url(${n.bgImage})`,backgroundPosition:n.position}}),(0,x.jsx)(`div`,{className:`wcu-card-bg-overlay`}),(0,x.jsx)(`div`,{className:`wcu-card-bg-overlay-fade`}),(0,x.jsxs)(`div`,{className:`wcu-card-stat-badge`,children:[(0,x.jsx)(`div`,{className:`wcu-card-stat-value`,children:n.stat}),(0,x.jsx)(`div`,{className:`wcu-card-stat-label`,children:n.statLabel.toLowerCase()})]}),(0,x.jsxs)(`div`,{className:`wcu-card-content`,children:[(0,x.jsx)(`span`,{className:`wcu-card-label`,children:n.label}),(0,x.jsx)(`h4`,{className:`wcu-card-title`,children:n.title}),(0,x.jsx)(`p`,{className:`wcu-card-desc`,children:n.short}),(0,x.jsx)(`div`,{className:`wcu-pill-box`,children:n.tags.map((e,t)=>(0,x.jsx)(`span`,{className:`wcu-pill-chip`,children:e},t))})]})]},r))}),(0,x.jsx)(`div`,{className:`wcu-section-divider`})]})]})]})}var $e=e=>{window.history.pushState({},``,e),window.dispatchEvent(new PopStateEvent(`popstate`))};function et(){let[e,t]=(0,b.useState)(`learning`),n=[{key:`learning`,label:`Corporate Learning`,icon:Ae,color:`#3B82F6`,glow:`rgba(59,130,246,0.35)`},{key:`talent`,label:`Talent`,icon:Ge,color:`#A855F7`,glow:`rgba(168,85,247,0.35)`},{key:`finance`,label:`Finance`,icon:He,color:`#10B981`,glow:`rgba(16,185,129,0.35)`}];return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`style`,{children:`
                :root {
                    --vibrant-font: 'Inter', system-ui, -apple-system, sans-serif;
                    --vibrant-bg: #050c1c;
                    --vibrant-text: #ffffff;
                }

                .vibrant-section {
                    padding: 100px 0;
                    font-family: var(--vibrant-font);
                    position: relative;
                    overflow: hidden;
                    color: var(--vibrant-text);
                    background-color: var(--vibrant-bg);
                }

                /* Improved Background Overlay */
                .vibrant-section::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        90deg,
                        rgba(5, 12, 28, 0.82) 0%,
                        rgba(8, 20, 45, 0.62) 45%,
                        rgba(18, 40, 80, 0.35) 100%
                    );
                    z-index: 1;
                }

                /* Floating Ambient Elements */
                .vibrant-floating-decorations {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    opacity: 0.15;
                    z-index: 2;
                }
                .vibrant-blob-1 {
                    position: absolute;
                    top: 10%;
                    left: 5%;
                    width: 300px;
                    height: 300px;
                    background: radial-gradient(circle, #3b82f6, transparent 70%);
                    animation: floatSlow 12s infinite alternate ease-in-out;
                }
                .vibrant-blob-2 {
                    position: absolute;
                    bottom: 15%;
                    right: 45%;
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(circle, #00e0ff, transparent 70%);
                    animation: floatSlow 18s infinite alternate-reverse ease-in-out;
                }
                .vibrant-grid-dots {
                    position: absolute;
                    inset: 0;
                    background-image: radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px);
                    background-size: 24px 24px;
                }

                @keyframes floatSlow {
                    0% { transform: translate(0, 0) scale(1); }
                    100% { transform: translate(30px, -40px) scale(1.1); }
                }

                /* Container Layout Setup */
                .vibrant-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 32px;
                    display: grid;
                    grid-template-columns: 1.2fr 0.8fr; /* Shifted balance slightly to allow smaller right column */
                    gap: 60px;
                    align-items: center;
                    position: relative;
                    z-index: 3;
                }

                /* Glass Divider (Visible on Desktops Only) */
                @media (min-width: 961px) {
                    .vibrant-container::after {
                        content: "";
                        position: absolute;
                        top: 20%;
                        left: 56%;
                        width: 1px;
                        height: 60%;
                        background: rgba(255, 255, 255, 0.08);
                    }
                }

                /* Left Content Styles */
                .vibrant-intro {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }

                /* Trust Badge Setup */
                .vibrant-trust-badge {
                    background: rgba(255, 255, 255, 0.08);
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    padding: 6px 14px;
                    border-radius: 50px;
                    font-size: 13px;
                    font-weight: 600;
                    color: #FFFFFF;
                    margin-bottom: 20px;
                    letter-spacing: 0.02em;
                }

                /* Heading setup with distinct line modifications */
                .vibrant-headline {
                    font-size: clamp(34px, 4.2vw, 48px);
                    font-weight: 800;
                    letter-spacing: -0.02em;
                    line-height: 1.2;
                    margin: 0 0 24px;
                }
                .vh-white-1 { color: #FFFFFF; }
                .vh-blue-sub { color: #C7D2FE; font-size: 0.85em; display: block; margin: 2px 0; }
                .vh-white-2 { color: #FFFFFF; display: block; margin-top: 2px; }
                
                /* Gradient logic for the primary highlighted word */
                .blue-txt {
                    background: linear-gradient(90deg, #4F8CFF, #00E0FF);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    display: inline-block;
                }

                /* Upgraded readable text paragraph */
                .vibrant-copy {
                    font-size: 18px;
                    line-height: 1.8;
                    font-weight: 500;
                    color: rgba(255, 255, 255, 0.85);
                    margin: 0 0 28px;
                    max-width: 520px;
                }

                /* Premium Main Call to Action Button */
                .vibrant-phone-btn-wrap {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    margin-bottom: 44px;
                    gap: 8px;
                }

                .vibrant-phone-btn {
                    display: inline-flex;
                    align-items: center;
                    font-size: 15px;
                    font-weight: 700;
                    color: white;
                    background: linear-gradient(180deg, #3B82F6, #2563EB);
                    border: none;
                    padding: 14px 32px;
                    border-radius: 50px;
                    cursor: pointer;
                    box-shadow: 0 15px 40px rgba(59, 130, 246, 0.35);
                    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
                }

                .vibrant-phone-btn:hover {
                    transform: translateY(-5px) scale(1.02);
                    box-shadow: 0 20px 50px rgba(59, 130, 246, 0.5);
                }

                .vibrant-phone-subtext {
                    font-size: 12px;
                    color: rgba(255, 255, 255, 0.6);
                    padding-left: 14px;
                    font-weight: 500;
                }

                /* Floating Glass Metrics Component Configuration */
                .vibrant-stats-strip {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 12px;
                    width: 100%;
                }

                .vibrant-stat-card {
                    background: rgba(255, 255, 255, 0.08);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    border-radius: 12px;
                    padding: 16px 12px;
                    text-align: center;
                    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, background-color 0.3s ease;
                }

                .vibrant-stat-card:hover {
                    transform: translateY(-6px) scale(1.03);
                    background: rgba(255, 255, 255, 0.12);
                    box-shadow: 0 15px 30px rgba(59, 130, 246, 0.15);
                }

                .vibrant-stat-val {
                    font-size: 26px;
                    font-weight: 800;
                    color: #fff;
                    margin-bottom: 4px;
                    background: linear-gradient(180deg, #fff, rgba(255,255,255,0.7));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .vibrant-stat-lbl {
                    font-size: 12px;
                    color: rgba(255, 255, 255, 0.65);
                    font-weight: 500;
                    line-height: 1.3;
                }

                /* --- COMPACT RIGHT COLUMN FORM CARD CHANGES --- */
                .vibrant-form-card {
                    background: linear-gradient(180deg, rgba(28, 40, 66, 0.94), rgba(9, 16, 28, 0.96));
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 20px;
                    padding: 32px 28px; /* Compacted from 56px layout footprint */
                    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    position: relative;
                    max-width: 400px; /* Limits excessive horizontal expansion */
                    justify-self: end;
                    width: 100%;
                }

                /* Radial Blue Glow Effect for Card Background */
                .vibrant-form-card::after {
                    content: "";
                    position: absolute;
                    inset: 0;
                    border-radius: 20px;
                    background: radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.22), transparent 70%);
                    pointer-events: none;
                    z-index: -1;
                }

                .vibrant-form-title-group {
                    margin-bottom: 16px;
                }

                .vibrant-form-title {
                    font-size: 22px; /* Slightly downscaled for scale-compactness */
                    font-weight: 800;
                    color: #fff;
                    letter-spacing: -0.02em;
                    line-height: 1.2;
                    margin-bottom: 6px;
                }

                .vibrant-form-subtitle {
                    font-size: 13px;
                    color: rgba(255, 255, 255, 0.55);
                    line-height: 1.4;
                }

                .vibrant-form-divider {
                    height: 1px;
                    background: rgba(255, 255, 255, 0.08);
                    margin: 16px 0;
                    border: none;
                }

                .vibrant-focus-list {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .vibrant-focus-btn {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 10px 16px; /* Reduced button padding padding */
                    border-radius: 10px;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    cursor: pointer;
                    font-family: var(--vibrant-font);
                    font-size: 13px;
                    font-weight: 600;
                    color: rgba(255, 255, 255, 0.8);
                    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
                    width: 100%;
                }

                .vibrant-btn-content {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .vibrant-focus-btn:hover {
                    background: rgba(255, 255, 255, 0.06);
                    box-shadow: 0 4px 15px var(--hover-glow);
                    color: #fff;
                }

                .vibrant-focus-btn.active {
                    background: rgba(255, 255, 255, 0.05);
                    border-color: #3B82F6;
                    color: #fff;
                    box-shadow: 0 0 20px rgba(59, 130, 246, 0.25);
                    border-left: 4px solid #3B82F6;
                    padding-left: 13px;
                }

                .vibrant-indicator-circle {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: transparent;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    transition: all 0.2s ease;
                }

                .vibrant-focus-btn.active .vibrant-indicator-circle {
                    background: #3B82F6;
                    border-color: #3B82F6;
                    box-shadow: 0 0 6px #3B82F6;
                }

                .vibrant-input-group {
                    display: flex;
                    flex-direction: column;
                    gap: 12px; /* Denser element stacks */
                }

                .vibrant-input-wrapper {
                    position: relative;
                    display: flex;
                    align-items: center;
                }

                .vibrant-input-icon {
                    position: absolute;
                    left: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .vibrant-input {
                    width: 100%;
                    padding: 11px 14px 11px 38px; /* Tighter input text elements */
                    background: rgba(255, 255, 255, 0.04);
                    border: 1px solid rgba(255, 255, 255, 0.10);
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                    border-radius: 8px;
                    font-family: var(--vibrant-font);
                    font-size: 13px;
                    color: #fff;
                    transition: all 0.25s ease;
                    box-sizing: border-box;
                }

                .vibrant-input:focus {
                    outline: none;
                    border-color: #3B82F6;
                    background: rgba(255, 255, 255, 0.07);
                    box-shadow: 0 0 12px rgba(59, 130, 246, 0.25);
                }

                .vibrant-submit-btn {
                    width: 100%;
                    padding: 13px;
                    border: none;
                    border-radius: 8px;
                    background: linear-gradient(135deg, #2563EB, #60A5FA);
                    color: white;
                    font-weight: 700;
                    font-size: 14px;
                    cursor: pointer;
                    box-shadow: 0 12px 30px rgba(37, 99, 235, 0.35);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 6px;
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .vibrant-submit-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 15px 40px rgba(37, 99, 235, 0.5);
                }

                .vibrant-submit-btn:hover span.arrow {
                    transform: translateX(4px);
                    display: inline-block;
                    transition: transform 0.2s ease;
                }

                .vibrant-form-note {
                    font-size: 12px;
                    color: rgba(255, 255, 255, 0.5);
                    text-align: center;
                    margin-top: 14px;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 6px;
                }

                @media (max-width: 960px) {
                    .vibrant-container {
                        grid-template-columns: 1fr;
                        gap: 44px;
                    }
                    .vibrant-intro {
                        align-items: center;
                        text-align: center;
                    }
                    .vibrant-copy {
                        margin-left: auto;
                        margin-right: auto;
                    }
                    .vibrant-phone-btn-wrap {
                        align-items: center;
                        width: 100%;
                    }
                    .vibrant-phone-subtext {
                        padding-left: 0;
                    }
                    .vibrant-stats-strip {
                        grid-template-columns: 1fr;
                        gap: 12px;
                    }
                    .vibrant-form-card {
                        max-width: 100%;
                        justify-self: center;
                        padding: 28px 20px;
                    }
                }
            `}),(0,x.jsxs)(`section`,{className:`vibrant-section`,style:{backgroundImage:`url('/assets/images/about/about.webp')`,backgroundPosition:`center`,backgroundSize:`cover`,backgroundRepeat:`no-repeat`},children:[(0,x.jsxs)(`div`,{className:`vibrant-floating-decorations`,children:[(0,x.jsx)(`div`,{className:`vibrant-grid-dots`}),(0,x.jsx)(`div`,{className:`vibrant-blob-1`}),(0,x.jsx)(`div`,{className:`vibrant-blob-2`})]}),(0,x.jsxs)(`div`,{className:`vibrant-container`,children:[(0,x.jsxs)(`div`,{className:`vibrant-intro`,children:[(0,x.jsxs)(`h2`,{className:`vibrant-headline`,children:[(0,x.jsx)(`span`,{className:`vh-white-1`,children:`Connecting You to`}),(0,x.jsx)(`span`,{className:`blue-txt`,children:`Solutions That`}),(0,x.jsx)(`span`,{className:`vh-white-2`,children:`Drive Results.`})]}),(0,x.jsx)(`p`,{className:`vibrant-copy`,children:`Whether you need custom e-learning platforms, enterprise executive recruitment pipelines, or deep corporate financial audits — our integrated divisions deliver seamless cross-border execution.`}),(0,x.jsxs)(`div`,{className:`vibrant-phone-btn-wrap`,children:[(0,x.jsx)(`button`,{className:`vibrant-phone-btn`,onClick:()=>$e(`/contact`),children:`Talk to an Expert`}),(0,x.jsx)(`span`,{className:`vibrant-phone-subtext`,children:`Call us in 2 minutes →`})]}),(0,x.jsx)(`div`,{className:`vibrant-stats-strip`,children:[{val:`24h`,lbl:`Response Time`},{val:`40+`,lbl:`Countries`},{val:`99%`,lbl:`Client Satisfaction`}].map((e,t)=>(0,x.jsxs)(`div`,{className:`vibrant-stat-card`,children:[(0,x.jsx)(`div`,{className:`vibrant-stat-val`,children:e.val}),(0,x.jsx)(`div`,{className:`vibrant-stat-lbl`,children:e.lbl})]},t))})]}),(0,x.jsxs)(`div`,{className:`vibrant-form-card`,children:[(0,x.jsxs)(`div`,{className:`vibrant-form-title-group`,children:[(0,x.jsxs)(`div`,{className:`vibrant-form-title`,children:[`Let's Build`,(0,x.jsx)(`br`,{}),`Your Next Solution`]}),(0,x.jsx)(`div`,{className:`vibrant-form-subtitle`,children:`Tell us about your project and we'll connect you with the right specialist.`})]}),(0,x.jsx)(`hr`,{className:`vibrant-form-divider`}),(0,x.jsx)(`div`,{className:`vibrant-focus-list`,children:n.map(n=>{let r=n.icon;return(0,x.jsxs)(`button`,{type:`button`,style:{"--hover-glow":n.glow},className:`vibrant-focus-btn ${e===n.key?`active`:``}`,onClick:()=>t(n.key),children:[(0,x.jsxs)(`div`,{className:`vibrant-btn-content`,children:[(0,x.jsx)(r,{className:`w-4 h-4 text-slate-400 group-hover:text-white`,style:{color:e===n.key?`#3B82F6`:void 0}}),(0,x.jsx)(`span`,{children:n.label})]}),e===n.key?(0,x.jsx)(`span`,{style:{color:`#3B82F6`,fontWeight:`bold`},children:`→`}):(0,x.jsx)(`div`,{className:`vibrant-indicator-circle`})]},n.key)})}),(0,x.jsx)(`hr`,{className:`vibrant-form-divider`}),(0,x.jsxs)(`div`,{className:`vibrant-input-group`,children:[(0,x.jsxs)(`div`,{className:`vibrant-input-wrapper`,children:[(0,x.jsx)(`span`,{className:`vibrant-input-icon`,children:(0,x.jsx)(We,{className:`w-3.5 h-3.5 text-slate-500`})}),(0,x.jsx)(`input`,{className:`vibrant-input`,type:`text`,placeholder:`Name`})]}),(0,x.jsxs)(`div`,{className:`vibrant-input-wrapper`,children:[(0,x.jsx)(`span`,{className:`vibrant-input-icon`,children:(0,x.jsx)(Fe,{className:`w-3.5 h-3.5 text-slate-500`})}),(0,x.jsx)(`input`,{className:`vibrant-input`,type:`email`,placeholder:`Email`})]}),(0,x.jsxs)(`div`,{className:`vibrant-input-wrapper`,children:[(0,x.jsx)(`span`,{className:`vibrant-input-icon`,children:(0,x.jsx)(D,{className:`w-3.5 h-3.5 text-slate-500`})}),(0,x.jsx)(`input`,{className:`vibrant-input`,type:`text`,placeholder:`Company`})]}),(0,x.jsx)(`hr`,{className:`vibrant-form-divider`}),(0,x.jsxs)(`button`,{className:`vibrant-submit-btn`,onClick:()=>$e(`/contact`),children:[`Schedule Free Consultation `,(0,x.jsx)(fe,{className:`w-4 h-4 arrow`})]})]}),(0,x.jsxs)(`div`,{className:`vibrant-form-note`,children:[(0,x.jsx)(ze,{className:`w-3.5 h-3.5 text-slate-400`}),(0,x.jsx)(`span`,{children:`Your information is completely confidential`})]})]})]})]})]})}function tt({children:e,delay:t=0,direction:n=`up`}){let[r,i]=(0,b.useState)(!1),a=(0,b.useRef)(null);return(0,b.useEffect)(()=>{let e=new IntersectionObserver(([t])=>{t.isIntersecting&&(i(!0),e.unobserve(t.target))},{threshold:.1,rootMargin:`0px 0px -50px 0px`});return a.current&&e.observe(a.current),()=>e.disconnect()},[]),(0,x.jsx)(`div`,{ref:a,className:`motion-reveal-container ${n===`left`?`reveal-reveal-left`:n===`right`?`reveal-reveal-right`:`reveal-reveal-up`} ${r?`revealed`:``}`,style:{transitionDelay:`${t}ms`},children:e})}function nt(){let e=[{val:`92%+`,label:`Talent Retention Rate`},{val:`48h`,label:`Average Time-to-Shortlist`},{val:`30+`,label:`Languages Delivered`},{val:`3`,label:`Expert Divisions`},{val:`US · UK · UAE · IN`,label:`Global Offices`},{val:`SCORM / xAPI`,label:`eLearning Standards`},{val:`Big 4`,label:`Grade Financial Expertise`},{val:`WCAG 2.1`,label:`Accessibility Compliant`}];return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`style`,{children:`
                @keyframes scroll-left-idx {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .marquee-track {
                    display: flex;
                    animation: scroll-left-idx 32s linear infinite;
                    width: max-content;
                }
                .marquee-track:hover { animation-play-state: paused; }
                .marquee-shell {
                    background: var(--bg-surface);
                    border-top: 1px solid var(--border-dark);
                    border-bottom: 1px solid var(--border-dark);
                    overflow: hidden;
                    padding: 16px 0;
                }
                .marquee-val {
                    font-size: 15px;
                    font-weight: 800;
                    color: var(--gold);
                    letter-spacing: -0.02em;
                }
                .marquee-lbl {
                    font-size: 11px;
                    font-weight: 600;
                    color: var(--text-muted);
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                }
                .marquee-sep {
                    color: var(--border-dark);
                    margin-left: 28px;
                    font-size: 18px;
                }
            `}),(0,x.jsx)(`div`,{className:`marquee-shell`,children:(0,x.jsx)(`div`,{className:`marquee-track`,children:[...e,...e].map((e,t)=>(0,x.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`12px`,padding:`0 44px`,whiteSpace:`nowrap`},children:[(0,x.jsx)(`span`,{className:`marquee-val`,children:e.val}),(0,x.jsx)(`span`,{className:`marquee-lbl`,children:e.label}),(0,x.jsx)(`span`,{className:`marquee-sep`,children:`·`})]},t))})})]})}function rt(){return(0,x.jsxs)(`section`,{style:{background:`linear-gradient(135deg, #1034A6 0%, #0A2280 40%, #061660 100%)`,padding:`10px 25px 72px`,position:`relative`,overflow:`hidden`},children:[(0,x.jsx)(`div`,{style:{position:`absolute`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`,width:`900px`,height:`500px`,background:`radial-gradient(ellipse, rgba(255,210,0,0.06), transparent 70%)`,filter:`blur(60px)`,pointerEvents:`none`}}),(0,x.jsxs)(`div`,{style:{textAlign:`center`,marginBottom:`40px`,position:`relative`,zIndex:2},children:[(0,x.jsx)(`span`,{style:{display:`inline-block`,fontSize:`11px`,fontWeight:`800`,letterSpacing:`0.22em`,textTransform:`uppercase`,color:`#FFD200`,marginBottom:`18px`},children:`Why JF Knowledge Centre`}),(0,x.jsxs)(`h2`,{style:{fontSize:`clamp(28px, 4vw, 52px)`,fontWeight:900,lineHeight:1.1,letterSpacing:`-0.03em`,color:`#ffffff`,margin:0},children:[`One Partner.`,` `,(0,x.jsx)(`span`,{style:{color:`#FFD200`},children:`Three Divisions.`}),(0,x.jsx)(`br`,{}),`Unlimited Potential.`]})]}),(0,x.jsxs)(`div`,{style:{position:`relative`,zIndex:2,maxWidth:`1100px`,margin:`0 auto`,borderRadius:`20px`,overflow:`hidden`,border:`1px solid rgba(255,255,255,0.12)`,boxShadow:`0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,210,0,0.08)`,aspectRatio:`16/9`},children:[(0,x.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,style:{width:`100%`,height:`100%`,objectFit:`cover`,display:`block`},children:(0,x.jsx)(`source`,{src:`/assets/images/about/why-jf.mp4`,type:`video/mp4`})}),(0,x.jsx)(`div`,{style:{position:`absolute`,bottom:0,left:0,right:0,height:`80px`,background:`linear-gradient(to bottom, transparent, rgba(6,22,96,0.6))`,pointerEvents:`none`}})]})]})}function it(){return(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,minHeight:`100vh`},children:[(0,x.jsx)(S,{}),(0,x.jsx)(ie,{}),(0,x.jsx)(nt,{}),(0,x.jsx)(tt,{direction:`up`,children:(0,x.jsx)(Xe,{})}),(0,x.jsx)(tt,{direction:`up`,children:(0,x.jsx)(rt,{})}),(0,x.jsx)(tt,{direction:`up`,children:(0,x.jsx)(Qe,{})}),(0,x.jsx)(tt,{direction:`up`,children:(0,x.jsx)(et,{})}),(0,x.jsx)(ne,{})]})}var at=`modulepreload`,ot=function(e){return`/`+e},st={},ct=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=ot(t,n),t=s(t),t in st)return;st[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:at,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},lt=e=>{window.history.pushState({},``,e),window.dispatchEvent(new PopStateEvent(`popstate`))};function ut(){let[e,t]=(0,b.useState)(0),n=(0,b.useRef)(null),r=(0,b.useRef)(null),[i,a]=(0,b.useState)(0),[o,s]=(0,b.useState)(4),l=[{title:`Excellence`,text:`We pursue the highest standards in everything we deliver.`,img:`/assets/images/about/1.webp`},{title:`Innovation`,text:`We continuously evolve our solutions to stay ahead of industry trends.`,img:`/assets/images/about/2.jpg`},{title:`Integrity`,text:`We operate with transparency, honesty, and accountability.`,img:`/assets/images/about/3.jpg`},{title:`Partnership`,text:`We build long-term relationships grounded in mutual trust.`,img:`/assets/images/about/4.jpg`},{title:`Impact`,text:`We measure our success by the tangible outcomes we create for our clients.`,img:`/assets/images/about/5.jpg`}],u=(e,t,n,r,i,a)=>{let o=i*Math.PI/180,s=a*Math.PI/180,c=e+r*Math.cos(o),l=t+r*Math.sin(o),u=e+r*Math.cos(s),d=t+r*Math.sin(s),f=e+n*Math.cos(s),p=t+n*Math.sin(s),m=e+n*Math.cos(o),h=t+n*Math.sin(o),g=+(a-i>180);return`M ${c} ${l} A ${r} ${r} 0 ${g} 1 ${u} ${d} L ${f} ${p} A ${n} ${n} 0 ${g} 0 ${m} ${h} Z`};return(0,b.useEffect)(()=>{let e=!0,t=null,i=async()=>{try{let i=await ct(()=>import(`./page-flip.browser-rhxevgKr.js`).then(e=>c(e.default,1)),[]);if(!n.current||!e)return;let o=i.PageFlip||i.default?.PageFlip||i.default;if(!o)throw Error(`Target PageFlip module constructor parsing failed.`);t=new o(n.current,{width:580,height:760,size:`stretch`,minWidth:400,maxWidth:600,minHeight:550,maxHeight:800,drawShadow:!0,flippingTime:800,usePortrait:!0,startPage:0,showCover:!0,mobileScrollSupport:!1});let l=n.current.querySelectorAll(`.handbook-page`);l.length>0&&(t.loadFromHTML(l),r.current=t,s(t.getPageCount()||4),t.on(`flip`,t=>{e&&a(t.data)}))}catch(e){console.error(`Vite dynamic module resolver caught an error: `,e)}},o=setTimeout(()=>{i()},150);return()=>{if(e=!1,clearTimeout(o),r.current){try{r.current.destroy()}catch(e){console.warn(`Soft handling error during destruction phase:`,e)}r.current=null}}},[]),(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,minHeight:`100vh`,background:`var(--bg-main)`,fontFamily:`var(--font-family)`},children:[(0,x.jsx)(S,{}),(0,x.jsxs)(`main`,{style:{flex:1,overflow:`hidden`,position:`relative`,paddingTop:`80px`},children:[(0,x.jsxs)(`section`,{className:`page-hero-shell theme-section theme-section--light`,style:{position:`relative`,overflow:`hidden`,padding:0},children:[(0,x.jsxs)(`div`,{className:`page-hero-media`,style:{position:`absolute`,top:0,left:0,width:`100%`,height:`100%`,zIndex:1,overflow:`hidden`},children:[(0,x.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,style:{position:`absolute`,inset:0,width:`100%`,height:`100%`,objectFit:`cover`,objectPosition:`center center`,filter:`brightness(.82) contrast(1.05) saturate(1.1)`,transform:`none`},children:(0,x.jsx)(`source`,{src:`/assets/images/about/about2.mp4`,type:`video/mp4`})}),(0,x.jsx)(`div`,{className:`hero-video-gradient`,style:{position:`absolute`,top:0,left:0,width:`100%`,height:`100%`,background:`
                            linear-gradient(
                            180deg,
                            rgba(0,0,0,.08) 0%,
                            rgba(0,0,0,.04) 35%,
                            rgba(0,0,0,.12) 70%,
                            rgba(0,0,0,.28) 100%
                            )
                            `,pointerEvents:`none`}}),(0,x.jsx)(`div`,{style:{position:`absolute`,bottom:0,left:0,width:`100%`,height:100,background:`linear-gradient(180deg, transparent, #060B17)`}})]}),(0,x.jsxs)(`div`,{style:{position:`relative`,zIndex:3,maxWidth:`1280px`,margin:`0 auto`,padding:`70px 50px`,display:`flex`,flexDirection:`column`,alignItems:`flex-start`,justifyContent:`center`,height:`calc(100vh - 80px)`,textAlign:`left`},children:[(0,x.jsx)(`div`,{style:{position:`absolute`,width:600,height:600,borderRadius:`50%`,background:`radial-gradient(circle, rgba(253,181,21,.12), transparent 70%)`,filter:`blur(60px)`,left:`0px`,top:`20%`,zIndex:-1}}),(0,x.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:10,padding:`10px 18px`,borderRadius:50,background:`rgba(255,255,255,.08)`,border:`1px solid rgba(255,255,255,.12)`,backdropFilter:`blur(15px)`,marginBottom:28,color:`rgba(255,255,255,.9)`,fontSize:`13px`,fontWeight:`500`,letterSpacing:`0.02em`},children:[(0,x.jsx)(`div`,{style:{width:8,height:8,borderRadius:`50%`,background:`#FDB515`}}),(0,x.jsx)(`span`,{children:`Corporate Learning • Leadership • Business Growth`})]}),(0,x.jsxs)(`h1`,{style:{fontSize:`clamp(36px, 4.2vw, 62px)`,fontWeight:850,lineHeight:1.15,letterSpacing:`-0.03em`,maxWidth:`880px`,color:`#fff`,textShadow:`0 10px 30px rgba(0,0,0,.35)`,margin:0},children:[`Empowering Talent. `,(0,x.jsx)(`span`,{style:{color:`#fff`},children:`Enabling Growth.`}),(0,x.jsx)(`span`,{className:`gold`,style:{display:`block`,color:`#3B82F6`},children:`Elevating Business.`})]}),(0,x.jsx)(`p`,{style:{maxWidth:640,margin:`24px 0 0 0`,fontSize:`clamp(15px, 1.6vw, 18px)`,lineHeight:1.75,color:`rgba(255,255,255,.82)`,fontWeight:`400`},children:`Transforming individuals and organizations through future-ready learning experiences, strategic consulting, and measurable business outcomes.`}),(0,x.jsxs)(`div`,{style:{display:`flex`,gap:18,marginTop:40},children:[(0,x.jsx)(`button`,{style:{background:`#3B82F6`,color:`#ffffff`,height:54,padding:`0 30px`,borderRadius:`999px`,fontWeight:700,fontSize:`15px`,border:`none`,cursor:`pointer`,transition:`transform 0.25s ease, opacity 0.25s ease`},onClick:()=>lt(`#programs`),children:`Explore Programs`}),(0,x.jsx)(`button`,{style:{background:`transparent`,border:`1px solid rgba(255,255,255,.2)`,color:`white`,backdropFilter:`blur(20px)`,height:54,padding:`0 30px`,borderRadius:`999px`,fontWeight:600,fontSize:`15px`,cursor:`pointer`,transition:`all 0.25s ease`},onClick:()=>lt(`/contact`),children:`Talk to an Expert`})]})]})]}),(0,x.jsxs)(`section`,{className:`handbook-hero-section`,children:[(0,x.jsx)(`div`,{className:`handbook-hero-blueprint`}),(0,x.jsx)(`div`,{className:`handbook-hero-glow`}),(0,x.jsx)(`div`,{className:`handbook-hero-particles`}),(0,x.jsx)(`div`,{className:`handbook-hero-spotlight`}),(0,x.jsxs)(`div`,{className:`handbook-hero-container`,children:[(0,x.jsxs)(`div`,{className:`handbook-text-panel`,children:[(0,x.jsx)(`span`,{className:`handbook-overline`,children:`OUR PURPOSE`}),(0,x.jsx)(`h2`,{className:`handbook-title`,children:`Vision & Mission`}),(0,x.jsx)(`p`,{className:`handbook-desc`,children:`Discover the principles guiding every transformation, learning journey, and client partnership.`})]}),(0,x.jsxs)(`div`,{className:`handbook-book-wrapper`,children:[(0,x.jsx)(`div`,{className:`handbook-pedestal`,children:(0,x.jsxs)(`div`,{ref:n,className:`stf__wrapper`,children:[(0,x.jsxs)(`div`,{className:`handbook-page book-cover-front`,"data-density":`hard`,children:[(0,x.jsx)(`div`,{className:`cover-leather-texture`}),(0,x.jsx)(`div`,{className:`cover-gold-overlay`}),(0,x.jsxs)(`div`,{className:`cover-content-shell`,children:[(0,x.jsx)(`div`,{className:`cover-logo-mark`,style:{width:100,height:100},children:(0,x.jsx)(`img`,{src:`/assets/images/about/logo-only.png`,alt:``})}),(0,x.jsx)(`h3`,{className:`cover-branding-main`,children:`JF KNOWLEDGE`}),(0,x.jsx)(`div`,{className:`cover-gold-divider`}),(0,x.jsx)(`h4`,{className:`cover-title-main`,children:`Vision & Mission`}),`                                            `,(0,x.jsx)(`div`,{className:`cover-date-stamp`,children:`2026`})]}),(0,x.jsx)(`div`,{className:`page-edge-shimmer`})]}),(0,x.jsxs)(`div`,{className:`handbook-page book-page-internal page-state-mission`,"data-density":`soft`,children:[(0,x.jsx)(`div`,{className:`paper-grain-overlay`}),(0,x.jsxs)(`div`,{className:`internal-page-padding`,children:[(0,x.jsx)(`div`,{className:`page-inner-icon-wrapper scale-anim`,children:(0,x.jsx)(Ve,{size:36,className:`handbook-icon-accent text-blue`})}),(0,x.jsx)(`h4`,{className:`page-large-heading fade-up-anim`,children:`MISSION`}),(0,x.jsx)(`p`,{className:`page-small-description`,children:`Empowering individuals and organizations through innovative learning, strategic consulting, and measurable outcomes.`}),(0,x.jsx)(`div`,{className:`page-structural-divider`}),(0,x.jsxs)(`div`,{className:`page-highlight-cards-container`,children:[(0,x.jsxs)(`div`,{className:`page-highlight-card stagger-1`,children:[(0,x.jsx)(`span`,{className:`card-check`,children:`✓`}),(0,x.jsx)(`span`,{className:`card-label`,children:`Future-ready Learning`})]}),(0,x.jsxs)(`div`,{className:`page-highlight-card stagger-2`,children:[(0,x.jsx)(`span`,{className:`card-check`,children:`✓`}),(0,x.jsx)(`span`,{className:`card-label`,children:`Business Excellence`})]}),(0,x.jsxs)(`div`,{className:`page-highlight-card stagger-3`,children:[(0,x.jsx)(`span`,{className:`card-check`,children:`✓`}),(0,x.jsx)(`span`,{className:`card-label`,children:`Sustainable Growth`})]})]}),(0,x.jsxs)(`div`,{className:`page-handbook-footer`,children:[(0,x.jsx)(`span`,{children:`JF KNOWLEDGE`}),(0,x.jsx)(`span`,{children:`01`})]})]})]}),(0,x.jsxs)(`div`,{className:`handbook-page book-page-internal page-state-vision`,"data-density":`soft`,children:[(0,x.jsx)(`div`,{className:`paper-grain-overlay`}),(0,x.jsxs)(`div`,{className:`internal-page-padding`,children:[(0,x.jsx)(`div`,{className:`page-inner-icon-wrapper eye-glow-anim`,children:(0,x.jsx)(Ee,{size:36,className:`handbook-icon-accent text-cyan`})}),(0,x.jsx)(`h4`,{className:`page-large-heading fade-up-anim`,children:`VISION`}),(0,x.jsx)(`p`,{className:`page-small-description`,children:`To become the most trusted professional services partner across learning, talent and finance.`}),(0,x.jsx)(`div`,{className:`page-structural-divider`}),(0,x.jsxs)(`div`,{className:`page-highlight-cards-container`,children:[(0,x.jsxs)(`div`,{className:`page-highlight-card stagger-1`,children:[(0,x.jsx)(`span`,{className:`card-check`,children:`✓`}),(0,x.jsx)(`span`,{className:`card-label`,children:`Global Impact`})]}),(0,x.jsxs)(`div`,{className:`page-highlight-card stagger-2`,children:[(0,x.jsx)(`span`,{className:`card-check`,children:`✓`}),(0,x.jsx)(`span`,{className:`card-label`,children:`Innovation`})]}),(0,x.jsxs)(`div`,{className:`page-highlight-card stagger-3`,children:[(0,x.jsx)(`span`,{className:`card-check`,children:`✓`}),(0,x.jsx)(`span`,{className:`card-label`,children:`Leadership`})]})]}),(0,x.jsxs)(`div`,{className:`page-handbook-footer`,children:[(0,x.jsx)(`span`,{children:`JF KNOWLEDGE`}),(0,x.jsx)(`span`,{children:`02`})]})]})]}),(0,x.jsxs)(`div`,{className:`handbook-page book-cover-back`,"data-density":`hard`,children:[(0,x.jsx)(`div`,{className:`cover-leather-texture`}),(0,x.jsxs)(`div`,{className:`cover-content-shell back-casing-center`,children:[(0,x.jsx)(`div`,{className:`back-casing-logo`,children:(0,x.jsx)(`img`,{src:`/assets/images/about/logo-only.png`,alt:`learning--v1 filter-invert: white`})}),(0,x.jsx)(`p`,{className:`back-casing-motto-headline`,children:`Together We Build`}),(0,x.jsx)(`h5`,{className:`back-casing-sub-motto`,children:`Future-ready Organizations`}),(0,x.jsx)(`div`,{className:`back-casing-web-link`,children:`jfknowledge.com`})]}),(0,x.jsx)(`div`,{className:`page-edge-shimmer left-oriented`})]})]})}),(0,x.jsxs)(`div`,{className:`handbook-floating-pill-nav`,children:[(0,x.jsx)(`button`,{onClick:()=>r.current?.flipPrev(),disabled:i===0,className:`pill-nav-arrow`,"aria-label":`Previous Page`,children:`←`}),(0,x.jsx)(`span`,{className:`pill-nav-indicator`,children:((e,t)=>`${String(e+1).padStart(2,`0`)} / ${String(t).padStart(2,`0`)}`)(i,o)}),(0,x.jsx)(`button`,{onClick:()=>r.current?.flipNext(),disabled:i===o-1,className:`pill-nav-arrow`,"aria-label":`Next Page`,children:`→`})]})]})]}),(0,x.jsx)(`style`,{children:`
                        .handbook-hero-section {
                            position: relative;
                            width: 100%;
                            min-height: 980px;
                            display: flex;
                            align-items: center;
                            background-image: url("/assets/images/about/aboutcta.jpg");
                            overflow: hidden;
                            background-gradient: linear-gradient(to right, #43a1b1ff, #cee3e7ff);
                            background-repeat: no-repeat;
                            background-size: cover;
                            padding: 80px 0 120px 0;
                        }
                        .handbook-hero-blueprint {
                            position: absolute;
                            inset: 0;
                            background-image: linear-gradient(rgba(59, 130, 246, 0.025) 1px, transparent 1px),
                                            linear-gradient(90deg, rgba(59, 130, 246, 0.025) 1px, transparent 1px);
                            background-size: 50px 50px;
                            z-index: 1;
                        }
                        .handbook-hero-glow {
                            position: absolute;
                            top: 40%;
                            right: 15%;
                            transform: translate(50%, -50%);
                            width: 800px;
                            height: 800px;
                            background: radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%);
                            z-index: 2;
                            pointer-events: none;
                        }
                        .handbook-hero-particles {
                            position: absolute;
                            inset: 0;
                            background: radial-gradient(circle at 75% 35%, rgba(14, 165, 233, 0.04), transparent 45%),
                                        radial-gradient(circle at 30% 70%, rgba(99, 102, 241, 0.03), transparent 50%);
                            z-index: 2;
                            pointer-events: none;
                        }
                        .handbook-hero-spotlight {
                            position: absolute;
                            top: 0;
                            left: 50%;
                            transform: translateX(-50%);
                            width: 100%;
                            max-width: 1400px;
                            height: 100%;
                            background: radial-gradient(circle at top, rgba(255, 255, 255, 0.02), transparent 60%);
                            z-index: 2;
                            pointer-events: none;
                        }
                        .handbook-hero-container {
                            position: relative;
                            z-index: 5;
                            width: 100%;
                            max-width: 1440px;
                            margin: 0 auto;
                            padding: 0 60px;
                            display: grid;
                            grid-template-columns: 0.85fr 1.15fr;
                            gap: 40px;
                            align-items: center;
                        }
                        .handbook-text-panel {
                            max-width: 480px;
                        }
                        .handbook-overline {
                            font-size: 12px;
                            font-weight: 800;
                            letter-spacing: 0.25em;
                            color: #b2c9eeff;
                            display: inline-block;
                            margin-bottom: 16px;
                        }
                        .handbook-title {
                            font-size: clamp(38px, 4.5vw, 56px);
                            font-weight: 850;
                            color: #ffffff;
                            line-height: 1.15;
                            margin: 0 0 24px 0;
                            letter-spacing: -0.03em;
                        }
                        .handbook-desc {
                            font-size: 17px;
                            line-height: 1.7;
                            color: #cee3e7ff;
                            margin-bottom: 36px;
                        }
                        .handbook-feature-pills {
                            list-style: none;
                            padding: 0;
                            margin: 0;
                            display: flex;
                            flex-direction: column;
                            gap: 14px;
                        }
                        .handbook-feature-pills li {
                            display: flex;
                            align-items: center;
                            gap: 12px;
                            font-size: 14px;
                            font-weight: 500;
                            color: #cbd5e1;
                        }
                        .pill-dot {
                            width: 6px;
                            height: 6px;
                            border-radius: 50%;
                            background: transparent;
                            border: 2px solid #3b82f6;
                        }
                        .handbook-book-wrapper {
                            position: relative;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                        }
                        .handbook-pedestal {
                            position: relative;
                            padding: 10px;
                            border-radius: 8px;
                            background: transparent;
                            box-shadow: 0 60px 120px rgba(0,0,0,.45);
                        }
                        .stf__wrapper {
                            background: transparent;
                        }
                        .handbook-page {
                            width: 100%;
                            height: 100%;
                            box-sizing: border-box;
                            overflow: hidden;
                            position: relative;
                        }
                        
                        /* COVER STRUCTURES */
                        .book-cover-front, .book-cover-back {
                            background: linear-gradient(145deg, #081932, #102d59, #081932);
                            color: #ffffff;
                            border: 1px solid rgba(255,255,255,.08);
                            border-radius: 0 6px 6px 0;
                        }
                        .book-cover-back {
                            border-radius: 6px 0 0 6px;
                        }
                        .cover-leather-texture {
                            position: absolute;
                            inset: 0;
                            opacity: 0.07;
                            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
                            pointer-events: none;
                        }
                        .cover-gold-overlay {
                            position: absolute;
                            inset: 0;
                            background: radial-gradient(circle at top, rgba(59,130,246,.2), transparent 70%);
                            pointer-events: none;
                        }
                        .cover-content-shell {
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            padding: 60px;
                            text-align: center;
                            position: relative;
                            z-index: 3;
                        }
                        .cover-logo-mark {
                            font-size: 26px;
                            font-weight: 900;
                            color: #f59e0b;
                            border: 2.5px solid #f59e0b;
                            width: 64px;
                            height: 64px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border-radius: 50%;
                            margin-bottom: 30px;
                        }
                        .cover-branding-main {
                            font-size: 24px;
                            font-weight: 800;
                            letter-spacing: 0.12em;
                            color: #ffffff;
                            margin: 0;
                        }
                        .cover-gold-divider {
                            width: 44px;
                            height: 1.5px;
                            background: #f59e0b;
                            margin: 28px 0;
                        }
                        .cover-title-main {
                            font-size: 36px;
                            font-weight: 750;
                            letter-spacing: -0.02em;
                            color: #ffffff;
                            margin: 0 0 16px 0;
                        }
                        .cover-subtitle-badge {
                            font-size: 13px;
                            font-weight: 600;
                            letter-spacing: 0.06em;
                            color: #94a3b8;
                            text-transform: uppercase;
                            margin: 0;
                        }
                        .cover-date-stamp {
                            position: absolute;
                            bottom: 50px;
                            font-size: 14px;
                            font-weight: 700;
                            letter-spacing: 0.2em;
                            color: #f59e0b;
                        }
                        
                        /* INTERNAL PREMIUM ARCHITECTURAL PAPER STYLE */
                        .book-page-internal {
                            background: #FCFBF7;
                            color: #0f172a;
                        }
                        .paper-grain-overlay {
                            position: absolute;
                            inset: 0;
                            opacity: 0.02;
                            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
                            pointer-events: none;
                        }
                        .internal-page-padding {
    padding: 45px 45px 30px 45px; /* Reduced top/bottom padding to gain vertical space */
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 3;
    box-sizing: border-box;
}
                        .page-inner-icon-wrapper {
    margin-bottom: 18px; /* Reduced from 36px */
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.page-large-heading {
    font-size: 34px; /* Slightly scaled down from 40px */
    font-weight: 900;
    letter-spacing: -0.01em;
    color: #0f172a;
    margin: 0 0 14px 0; /* Reduced from 24px */
}

.page-small-description {
    font-size: 16px; /* Optimized from 18px */
    line-height: 1.6;
    color: #475569;
    margin: 0 0 20px 0; /* Reduced from 40px */
}

.page-structural-divider {
    width: 100%;
    height: 1px;
    background: #e2e8f0;
    margin-bottom: 20px; /* Reduced from 40px */
}

.page-highlight-cards-container {
    display: flex;
    flex-direction: column;
    gap: 10px; /* Reduced gap from 16px to prevent spilling */
    flex-grow: 1;
}

.page-highlight-card {
    background: rgba(15, 23, 42, 0.03);
    border: 1px solid rgba(15, 23, 42, 0.05);
    padding: 12px 20px; /* Streamlined layout padding from 20px 24px */
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 14px;
}

.page-handbook-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #e2e8f0;
    padding-top: 14px;
    margin-top: auto; /* Solidifies placement at the absolute bottom */
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: #94a3b8;
}
                        
                        /* BACK CASING */
                        .back-casing-center {
                            justify-content: center;
                        }
                        .back-casing-logo {
                            font-size: 32px;
                            font-weight: 900;
                            color: rgba(255, 255, 255, 0.08);
                            border: 2.5px solid rgba(255, 255, 255, 0.08);
                            width: 76px;
                            height: 76px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border-radius: 50%;
                            margin-bottom: 24px;
                        }
                        .back-casing-motto-headline {
                            font-size: 14px;
                            font-weight: 600;
                            letter-spacing: 0.15em;
                            color: #94a3b8;
                            text-transform: uppercase;
                            margin: 0 0 8px 0;
                        }
                        .back-casing-sub-motto {
                            font-size: 20px;
                            font-weight: 700;
                            color: #ffffff;
                            margin: 0 0 40px 0;
                        }
                        .back-casing-web-link {
                            font-size: 13px;
                            font-weight: 500;
                            color: #f59e0b;
                            letter-spacing: 0.05em;
                        }
                        
                        /* EDGE SHIMMERS */
                        .page-edge-shimmer {
                            position: absolute;
                            top: 0;
                            right: 0;
                            bottom: 0;
                            width: 14px;
                            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.03));
                        }
                        .page-edge-shimmer.left-oriented {
                            right: auto;
                            left: 0;
                            background: linear-gradient(90deg, rgba(255,255,255,0.03), transparent);
                        }
                        
                        /* FLOATING GLASS PILL CONTROLS */
                        .handbook-floating-pill-nav {
                            margin-top: 40px;
                            display: inline-flex;
                            align-items: center;
                            gap: 24px;
                            padding: 10px 24px;
                            border-radius: 999px;
                            background: rgba(15, 23, 42, 0.4);
                            border: 1px solid rgba(255, 255, 255, 0.08);
                            backdrop-filter: blur(16px);
                            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                            z-index: 10;
                        }
                        .pill-nav-arrow {
                            background: transparent;
                            border: none;
                            color: #ffffff;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            cursor: pointer;
                            font-size: 16px;
                            opacity: 0.7;
                            transition: all 0.2s ease;
                        }
                        .pill-nav-arrow:hover:not(:disabled) {
                            opacity: 1;
                            transform: scale(1.15);
                            color: #3b82f6;
                        }
                        .pill-nav-arrow:disabled {
                            opacity: 0.15;
                            cursor: not-allowed;
                        }
                        .pill-nav-indicator {
                            font-size: 13px;
                            font-weight: 600;
                            color: #94a3b8;
                            letter-spacing: 0.15em;
                            min-width: 65px;
                            text-align: center;
                        }
                        
                        /* ANIMATIONS */
                        .scale-anim {
                            animation: scaleUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                        }
                        .eye-glow-anim {
                            animation: glowEye 2s infinite ease-in-out;
                        }
                        .fade-up-anim {
                            opacity: 0;
                            transform: translateY(12px);
                            animation: fadeUp 0.5s ease-out forwards;
                            animation-delay: 0.1s;
                        }
                        .stagger-1 { animation: itemFade 0.4s ease forwards; animation-delay: 0.2s; opacity: 0; }
                        .stagger-2 { animation: itemFade 0.4s ease forwards; animation-delay: 0.28s; opacity: 0; }
                        .stagger-3 { animation: itemFade 0.4s ease forwards; animation-delay: 0.36s; opacity: 0; }
                        
                        @keyframes scaleUp {
                            0% { transform: scale(0.6) rotate(-8deg); opacity: 0; }
                            100% { transform: scale(1) rotate(0deg); opacity: 1; }
                        }
                        @keyframes glowEye {
                            0%, 100% { filter: drop-shadow(0 0 2px rgba(14,165,233,0.1)); opacity: 0.9; }
                            50% { filter: drop-shadow(0 0 12px rgba(14,165,233,0.4)); opacity: 1; }
                        }
                        @keyframes fadeUp {
                            to { opacity: 1; transform: translateY(0); }
                        }
                        @keyframes itemFade {
                            to { opacity: 1; transform: translateY(0); }
                        }

                        @media (max-width: 1024px) {
                            .handbook-hero-container {
                                grid-template-columns: 1fr;
                                gap: 60px;
                                padding: 0 30px;
                                text-align: center;
                            }
                            .handbook-text-panel {
                                max-width: 100%;
                            }
                            .handbook-feature-pills {
                                align-items: center;
                            }
                        }
                    `})]}),(0,x.jsxs)(`section`,{className:`theme-section theme-section--dark`,style:{padding:`100px 24px`,display:`flex`,flexDirection:`column`,alignItems:`center`,backgroundImage:` url("/assets/images/about/principlebg.jpg")`,backgroundSize:`cover`,backgroundPosition:`center`},children:[(0,x.jsx)(`div`,{style:{display:`inline-block`,padding:`14px 28px`,borderRadius:`20px`,background:`rgba(15,23,42,0.35)`,backdropFilter:`blur(12px)`},children:(0,x.jsx)(`h2`,{style:{color:`#fff`,fontSize:`clamp(36px,4vw,54px)`,fontWeight:800,margin:0},children:`The principles that guide every engagement.`})}),(0,x.jsxs)(`div`,{style:{position:`relative`,width:`650px`,height:`650px`,margin:`80px auto 0`,display:`flex`,justifyContent:`center`,alignItems:`center`},children:[(0,x.jsxs)(`svg`,{viewBox:`0 0 650 650`,style:{position:`absolute`,width:`100%`,height:`100%`,overflow:`visible`},children:[(0,x.jsx)(`defs`,{children:l.map((e,t)=>(0,x.jsx)(`pattern`,{id:`bg-image-${t}`,patternUnits:`userSpaceOnUse`,width:`650`,height:`650`,children:(0,x.jsx)(`image`,{href:e.img,width:`650`,height:`650`,x:`0`,y:`0`,preserveAspectRatio:`xMidYMid slice`})},`pattern-${t}`))}),(0,x.jsxs)(`g`,{children:[(0,x.jsx)(`circle`,{cx:`325`,cy:`325`,r:`215`,fill:`none`,stroke:`rgba(255,255,255,0.05)`,strokeWidth:`220`}),l.map((n,r)=>{let i=360/l.length,a=r*i-90+4/2,o=(r+1)*i-90-4/2,s=e===r,c=u(325,325,105,325,a,o);return(0,x.jsxs)(`g`,{onMouseEnter:()=>t(r),onClick:()=>t(r),filter:`drop-shadow(0 0 8px rgba(0,0,0,.35))`,style:{cursor:`pointer`,transformOrigin:`325px 325px`,transform:s?`scale(1.03)`:`scale(1)`,transition:`all .35s ease`},children:[(0,x.jsx)(`path`,{d:c,fill:s?`rgba(35,20,70,.95)`:`rgba(8,10,18,.95)`}),(0,x.jsx)(`path`,{d:c,fill:`url(#bg-image-${r})`,opacity:s?.45:.18,style:{transition:`opacity 0.35s ease`}}),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`path`,{d:c,fill:`none`,stroke:`rgba(167,139,250,.15)`,strokeWidth:`7`}),(0,x.jsx)(`path`,{d:c,fill:`none`,stroke:s?`#c084fc`:`rgba(255,255,255,.08)`,strokeWidth:s?3:2})]})]},r)}),(0,x.jsx)(`circle`,{cx:`325`,cy:`325`,r:`108`,fill:`none`,stroke:`rgba(255,255,255,.08)`,strokeWidth:`1`}),(0,x.jsx)(`circle`,{cx:`325`,cy:`325`,r:`318`,fill:`none`,stroke:`rgba(255,255,255,.05)`,strokeWidth:`1`})]})]}),(0,x.jsx)(`div`,{style:{position:`absolute`,width:230,height:230,borderRadius:`50%`,background:`radial-gradient(circle, rgba(168,85,247,.25), transparent 70%)`,filter:`blur(18px)`,zIndex:2}}),(0,x.jsx)(`div`,{style:{position:`absolute`,zIndex:10,width:190,height:190,borderRadius:`50%`,background:`radial-gradient(circle at 30% 30%, #1b1f35 0%, #090d18 70%, #04060d 100%)`,border:`2px solid rgba(192,132,252,.6)`,boxShadow:`0 0 60px rgba(168,85,247,.35), 0 0 120px rgba(168,85,247,.15), inset 0 0 30px rgba(255,255,255,.04), inset 0 -15px 30px rgba(0,0,0,.8)`,display:`flex`,justifyContent:`center`,alignItems:`center`,pointerEvents:`none`},children:(0,x.jsx)(`img`,{src:`/assets/images/about/logo-only.png`,alt:`Logo`,style:{width:`85px`,height:`85px`,objectFit:`contain`,filter:`brightness(0) invert(1)`}})}),l.map((n,r)=>{let i=360/l.length,a=(r*i-90+i/2)*Math.PI/180,o=Math.cos(a)*215,s=Math.sin(a)*215,c=e===r;return(0,x.jsxs)(`div`,{onMouseEnter:()=>t(r),onClick:()=>t(r),style:{position:`absolute`,left:`calc(50% + ${o}px)`,top:`calc(50% + ${s}px)`,zIndex:5,width:`180px`,textAlign:`center`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,cursor:`pointer`,userSelect:`none`,pointerEvents:`auto`,transform:c?`translate(-50%,-50%) scale(1.08)`:`translate(-50%,-50%) scale(1)`,transition:`all .35s ease`},children:[(0,x.jsxs)(`div`,{style:{fontSize:`11px`,color:c?`#c084fc`:`#a78bfa`,fontWeight:`800`,marginBottom:`4px`,opacity:c?1:.7},children:[`0`,r+1]}),(0,x.jsx)(`h3`,{style:{fontSize:`16px`,fontWeight:`800`,color:c?`#ffffff`:`var(--text-primary)`,marginBottom:`6px`,letterSpacing:`-0.02em`,transition:`color 0.25s ease`},children:n.title}),(0,x.jsx)(`p`,{style:{fontSize:`11.5px`,color:c?`#e2e8f0`:`var(--text-secondary)`,lineHeight:1.4,margin:0,opacity:c?1:.65,transition:`all 0.25s ease`},children:n.text})]},r)})]})]}),(0,x.jsxs)(`section`,{className:`theme-section`,style:{padding:`80px 24px 140px`,background:`
            linear-gradient(
                rgba(28, 45, 82, .55),
                rgba(18, 31, 61, .55)
            ),
            url("/assets/images/about/aboutcta.jpg") center/cover no-repeat`,position:`relative`,overflow:`hidden`},children:[(0,x.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`
                radial-gradient(circle at 15% 20%, rgba(59, 130, 246, .20), transparent 30%),
                radial-gradient(circle at 80% 80%, rgba(34, 211, 238, .12), transparent 35%)
            `,pointerEvents:`none`,zIndex:1}}),(0,x.jsxs)(`div`,{style:{maxWidth:`1080px`,margin:`0 auto`,textAlign:`center`,position:`relative`,zIndex:2},children:[(0,x.jsx)(`div`,{style:{position:`absolute`,inset:`-60px`,background:`radial-gradient(circle, rgba(59, 130, 246, .25), transparent 70%)`,filter:`blur(70px)`,zIndex:0,pointerEvents:`none`}}),(0,x.jsxs)(`div`,{className:`section-panel`,style:{padding:`64px 40px`,background:`
                    linear-gradient(
                        180deg,
                        rgba(34, 52, 93, .88),
                        rgba(24, 38, 70, .82)
                    )
                `,backdropFilter:`blur(12px)`,borderRadius:`24px`,border:`1px solid rgba(255, 255, 255, .12)`,boxShadow:`
                    0 20px 60px rgba(0, 0, 0, .18),
                    0 0 80px rgba(59, 130, 246, .18)
                `,position:`relative`,zIndex:2},children:[(0,x.jsx)(`h2`,{className:`section-title`,style:{color:`#FFFFFF`,fontSize:`clamp(48px, 5vw, 72px)`,fontWeight:800,letterSpacing:`-2px`,lineHeight:1.05,textShadow:`0 4px 20px rgba(0, 0, 0, .25)`,margin:0},children:`Book an Appointment`}),(0,x.jsx)(`p`,{className:`section-copy`,style:{color:`#CBD5E1`,fontSize:`20px`,lineHeight:1.8,maxWidth:`760px`,margin:`24px auto 40px`},children:`Speak with our team to explore a custom service package that combines learning, talent, and financial advisory into one powerful delivery suite.`}),(0,x.jsx)(`button`,{className:`jf-btn-primary jf-btn-primary-hero`,onClick:()=>lt(`/contact`),children:`Book an Appointment`})]})]})]})]}),(0,x.jsx)(ne,{})]})}function dt(){let e={learning:[{accent:`#2563eb`,badge:`INSTRUCTOR-LED TRAINING (ILT)`,img:`/assets/images/services/1-1.jpg`,stat:`Custom`,statLabel:`Curriculum Design`},{accent:`#3b82f6`,badge:`VIRTUAL ILT (VILT)`,img:`/assets/images/services/1-2.jpg`,stat:`Live`,statLabel:`Synchronous Sessions`},{accent:`#7c3aed`,badge:`MICROLEARNING`,img:`/assets/images/services/1-3.jpg`,stat:`3-7 Min`,statLabel:`Bite-Sized Modules`},{accent:`#059669`,badge:`GAMIFICATION`,img:`/assets/images/services/1-4.jpg`,stat:`Engagement`,statLabel:`Game Mechanics`}],recruitment:[{accent:`#3b82f6`,badge:`PERMANENT PLACEMENT`,img:`/assets/images/services/3-1.jpg`,stat:`90 Day`,statLabel:`Replacement Guarantee`},{accent:`#60a5fa`,badge:`CONTRACT & TEMPORARY STAFFING`,img:`/assets/images/services/3-2.jpg`,stat:`24-72h`,statLabel:`Rapid Deployment`},{accent:`#a855f7`,badge:`STAFF AUGMENTATION`,img:`/assets/images/services/3-3.jpg`,stat:`IT & Non-IT`,statLabel:`Team Extensions`},{accent:`#10b981`,badge:`MANAGED STAFFING SOLUTIONS`,img:`/assets/images/services/3-4.jpg`,stat:`RPO / MSP`,statLabel:`Outsourced Models`}],finance:[{accent:`#2563eb`,badge:`ACCOUNTING & BOOKKEEPING`,img:`/assets/images/services/2-1.jpg`,stat:`Cloud`,statLabel:`Xero, QuickBooks, Sage`},{accent:`#3b82f6`,badge:`TAX & COMPLIANCE`,img:`/assets/images/services/2-2.jpg`,stat:`Advisory`,statLabel:`Planning & Filing`},{accent:`#059669`,badge:`CFO ADVISORY`,img:`/assets/images/services/2-3.jpg`,stat:`Fractional`,statLabel:`Strategic Leadership`}]},t=({title:e,desc:t,f1:n,f2:r,f3:i,meta:a,theme:o=`dark`})=>{let s=o===`light`;return(0,x.jsxs)(`div`,{className:`wcu-premium-card-wrapper ${s?`wcu-light-theme`:`wcu-dark-theme`}`,children:[(0,x.jsx)(`div`,{className:`wcu-premium-glow-border`}),(0,x.jsxs)(`div`,{className:`wcu-premium-card-inner`,children:[(0,x.jsx)(`div`,{className:`wcu-card-dots`,children:`● ● ● ●
● ● ● ●`}),(0,x.jsxs)(`div`,{style:{height:210,position:`relative`,overflow:`hidden`},children:[(0,x.jsx)(`img`,{src:a.img,alt:e,className:`wcu-card-img-mask`}),(0,x.jsx)(`div`,{style:{position:`absolute`,inset:0,background:s?`linear-gradient(to top, #ffffff 5%, transparent 70%)`:`linear-gradient(to top, #0b1220 5%, transparent 70%)`}})]}),(0,x.jsxs)(`div`,{style:{padding:`28px`},children:[(0,x.jsx)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:6,fontSize:10,fontWeight:800,letterSpacing:`0.15em`,color:a.accent,background:`${a.accent}12`,border:`1px solid ${a.accent}33`,borderRadius:99,padding:`4px 12px`,marginBottom:16},children:a.badge}),(0,x.jsx)(`h3`,{className:`wcu-card-title`,children:e}),(0,x.jsx)(`p`,{className:`wcu-card-desc`,children:t}),(0,x.jsxs)(`div`,{className:`wcu-card-kpi-row`,style:{borderLeft:`3px solid ${a.accent}`},children:[(0,x.jsx)(`span`,{className:`wcu-kpi-val`,children:a.stat}),(0,x.jsx)(`span`,{className:`wcu-kpi-label`,children:a.statLabel})]}),(0,x.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:[n,r,i].filter(Boolean).map((e,t)=>(0,x.jsx)(`span`,{className:`wcu-card-mini-chip`,children:e},t))})]})]})]})};return(0,x.jsxs)(`div`,{style:{background:`#060B17`,color:`#ffffff`,fontFamily:`var(--font-family, "Inter", sans-serif)`,overflowX:`hidden`},children:[(0,x.jsx)(S,{}),(0,x.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
                @keyframes pulseDot { 0%, 100% { transform: scale(1); opacity: 0.4; } 50% { transform: scale(1.5); opacity: 1; } }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .animate-on-load {
                    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }

                .wcu-premium-bg {
                    position: relative;
                    background: radial-gradient(circle at top, #14284f 0%, #060B17 60%);
                }
                .wcu-noise-layer {
                    position: absolute; inset: 0; pointer-events: none; z-index: 2; opacity: 0.02; mix-blend-mode: overlay;
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
                }
                .wcu-animated-divider {
                    display: flex; align-items: center; justify-content: center; margin: 40px 0; width: 100%; opacity: 0.4;
                }
                .wcu-divider-line { height: 1px; flex: 1; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent); }
                .wcu-divider-dot { width: 6px; height: 6px; background: #3b82f6; border-radius: 50%; margin: 0 20px; box-shadow: 0 0 10px #3b82f6; animation: pulseDot 2s infinite ease-in-out; }
                
                /* PREMIUM FROSTED APPLE/OPENAI STYLE SPOTLIGHT CARD */
                .wcu-spotlight-card {
                    position: relative; 
                    overflow: hidden; 
                    z-index: 5;
                    padding: 64px; 
                    border-radius: 32px;
                    background: linear-gradient(180deg, rgba(17, 24, 39, 0.35), rgba(17, 24, 39, 0.22));
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    backdrop-filter: blur(14px); 
                    -webkit-backdrop-filter: blur(14px);
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);
                    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                }
                
                .wcu-spotlight-card::before {
                    content: "";
                    position: absolute; 
                    inset: 0;
                    background: radial-gradient(circle at top right, rgba(59, 130, 246, 0.14), transparent 45%);
                    pointer-events: none;
                    z-index: -1;
                }
                
                .wcu-spotlight-card::after {
                    content: "";
                    position: absolute; 
                    inset: 1px; 
                    border-radius: 30px;
                    border: 1px solid rgba(255, 255, 255, 0.04);
                    pointer-events: none;
                    z-index: -1;
                }
                
                .wcu-spotlight-card:hover {
                    transform: translateY(-4px);
                    border-color: rgba(59, 130, 246, 0.28);
                    box-shadow: 0 35px 90px rgba(37, 99, 235, 0.18);
                }
                
                .wcu-spotlight-video-bg {
                    position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: -3; 
                    opacity: 0.45; filter: brightness(0.95) contrast(1.1) saturate(1.15);
                }
                
                .wcu-spotlight-video-overlay {
                    position: absolute; inset: 0; 
                    background: linear-gradient(90deg, rgba(4, 12, 28, 0.50) 40%, rgba(4, 12, 28, 0.35) 100%); 
                    z-index: -2; pointer-events: none;
                }
                
                .wcu-spotlight-label { font-size: 12px; letter-spacing: 0.3em; text-transform: uppercase; color: #60a5fa; font-weight: 800; margin-bottom: 12px; display: flex; align-items: center; gap: 8px; }
                
                .wcu-spotlight-title { 
                    font-size: clamp(36px, 4.5vw, 58px); font-weight: 900; line-height: 1.05; letter-spacing: -0.03em; color: #ffffff; margin: 0 0 20px 0;
                    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
                }
                
                .wcu-spotlight-desc {
                    font-size: 16.5px; line-height: 1.7; color: rgba(255, 255, 255, 0.78); margin: 0 0 28px 0;
                    text-shadow: 0 1px 6px rgba(0, 0, 0, 0.25);
                }
                
                .wcu-bullet-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin: 32px 0; }
                .wcu-bullet-item { padding: 16px 20px; border-radius: 16px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); display: flex; align-items: center; gap: 12px; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
                .wcu-bullet-item:hover { transform: translateY(-4px); background: rgba(37,99,235,0.08); border-color: rgba(59,130,246,0.4); }
                
                .wcu-pill-cta { display: inline-flex; align-items: center; gap: 8px; background: linear-gradient(90deg, #2563eb, #3b82f6); color: #ffffff; padding: 14px 28px; border-radius: 999px; font-weight: 700; font-size: 15px; border: none; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 10px 25px rgba(37,99,235,0.3); text-decoration: none; }
                .wcu-pill-cta:hover { transform: translateX(3px); filter: brightness(1.1); box-shadow: 0 12px 30px rgba(37,99,235,0.45); }
                
                /* THEME-SPECIFIC CARD WRAPPERS */
                .wcu-premium-card-wrapper { 
                    position: relative; 
                    border-radius: 24px; 
                    padding: 1px; 
                    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1); 
                }
                .wcu-premium-card-inner { 
                    border-radius: 23px; 
                    overflow: hidden; 
                    height: 100%; 
                    position: relative;
                    transition: background 0.4s ease, box-shadow 0.4s ease;
                }
                
                /* Dark Cards styling */
                .wcu-premium-card-wrapper.wcu-dark-theme {
                    background: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02)); 
                }
                .wcu-premium-card-wrapper.wcu-dark-theme .wcu-premium-card-inner {
                    background: #0b1220; 
                }
                .wcu-premium-card-wrapper.wcu-dark-theme .wcu-card-title { color: #ffffff; }
                .wcu-premium-card-wrapper.wcu-dark-theme .wcu-card-desc { color: #94a3b8; }
                .wcu-premium-card-wrapper.wcu-dark-theme .wcu-kpi-val { color: #ffffff; }
                .wcu-premium-card-wrapper.wcu-dark-theme .wcu-card-mini-chip { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); color: #94a3b8; }
                
                .wcu-premium-card-wrapper.wcu-dark-theme:hover { 
                    transform: translateY(-8px); 
                    background: linear-gradient(135deg, rgba(59,130,246,0.4), transparent 60%); 
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
                }

                /* Light Cards styling */
                .wcu-premium-card-wrapper.wcu-light-theme {
                    background: linear-gradient(180deg, rgba(15,23,42,0.08), rgba(15,23,42,0.03)); 
                    box-shadow: 0 4px 20px rgba(15,23,42,0.02);
                }
                .wcu-premium-card-wrapper.wcu-light-theme .wcu-premium-card-inner {
                    background: #ffffff; 
                }
                .wcu-premium-card-wrapper.wcu-light-theme .wcu-card-title { color: #0f172a; }
                .wcu-premium-card-wrapper.wcu-light-theme .wcu-card-desc { color: #475569; }
                .wcu-premium-card-wrapper.wcu-light-theme .wcu-kpi-val { color: #0f172a; }
                .wcu-premium-card-wrapper.wcu-light-theme .wcu-card-mini-chip { background: #f1f5f9; border: 1px solid #e2e8f0; color: #475569; }
                
                .wcu-premium-card-wrapper.wcu-light-theme:hover { 
                    transform: translateY(-8px); 
                    background: linear-gradient(135deg, rgba(59,130,246,0.3), transparent 60%); 
                    box-shadow: 0 25px 50px rgba(15,23,42,0.08);
                }

                .wcu-card-dots { position: absolute; top: 20px; right: 20px; opacity: 0.05; font-size: 10px; line-height: 1.4; letter-spacing: 3px; color: #fff; }
                .wcu-premium-card-wrapper.wcu-light-theme .wcu-card-dots { color: #0f172a; opacity: 0.08; }

                .wcu-card-img-mask { width: 100%; height: 100%; object-fit: cover; filter: contrast(1.05) brightness(0.9); transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
                .wcu-premium-card-wrapper:hover .wcu-card-img-mask { transform: scale(1.06); }
                
                .wcu-card-title { font-size: 22px; font-weight: 800; line-height: 1.3; marginBottom: 12px; transition: color 0.3s ease; }
                .wcu-card-desc { font-size: 14.5px; line-height: 1.65; marginBottom: 20px; transition: color 0.3s ease; }
                .wcu-card-kpi-row { display: flex; flex-direction: column; gap: 2px; padding-left: 14px; margin-bottom: 22px; }
                .wcu-kpi-val { font-size: 24px; font-weight: 900; line-height: 1; transition: color 0.3s ease; }
                .wcu-kpi-label { font-size: 11px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: '0.05em'; }
                .wcu-card-mini-chip { padding: 5px 12px; border-radius: 99px; font-size: 12.5px; transition: all 0.3s ease; }

                /* SECTION LAYOUT SYSTEM */
                .wcu-section-dark {
                    background: #060B17;
                    color: #ffffff;
                }
                .wcu-section-light {
                    background: #f8fafc;
                    color: #0f172a;
                }

                .wcu-section-light h2 {
                    color: #0f172a !important;
                }
                .wcu-section-light p {
                    color: #475569 !important;
                }

                /* SMOOTH MEDIA CONTENT COMPONENT TRIMS */
                .wcu-media-wrapper {
                    border-radius: 24px; 
                    overflow: hidden; 
                    height: 380px; 
                    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .wcu-section-dark .wcu-media-wrapper {
                    border: 1px solid rgba(255, 255, 255, 0.08); 
                    box-shadow: 0 30px 60px rgba(0,0,0,0.4);
                }
                .wcu-section-light .wcu-media-wrapper {
                    border: 1px solid rgba(15, 23, 42, 0.08); 
                    box-shadow: 0 30px 60px rgba(15, 23, 42, 0.08);
                }
                .wcu-media-wrapper:hover {
                    transform: scale(1.02);
                }

                /* GEOGRAPHIC HONEYCOMB GRAPHICS */
                .geo-footprint-board {
                    width: 100%;
                    max-width: 850px;
                    height: 760px;
                    margin: auto;
                    position: relative;
                    z-index: 5;
                }
                .geo-network-lines {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    opacity: 0.25;
                    background-size: 300px 170px;
                    z-index: 1;
                }
                .hex-card {
                    width: 260px;
                    height: 290px;
                    position: absolute;
                    clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
                    background: linear-gradient(180deg, #0e1a38 0%, #060b14 100%);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                    cursor: default;
                    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.04), inset 0 0 25px rgba(255, 255, 255, 0.02);
                    transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s ease, background 0.4s ease;
                    z-index: 10;
                }
                .node-uk     { left: 285px; top: 0px; }
                .node-usa    { left: 120px; top: 145px; }
                .node-eu     { left: 450px; top: 145px; }
                .node-gcc    { left: 285px; top: 290px; }
                .node-global { left: 120px; top: 435px; }
                .node-india  { left: 450px; top: 435px; }

                .hex-card::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at center, rgba(0, 194, 199, 0.15), transparent 70%);
                    opacity: 0.3;
                    transition: opacity 0.4s;
                    z-index: 1;
                }
                .hex-card::after {
                    content: '';
                    position: absolute;
                    top: -100%;
                    left: -100%;
                    width: 60%;
                    height: 300%;
                    background: linear-gradient(90deg, transparent, rgba(0, 194, 199, 0.15), transparent);
                    transform: rotate(45deg);
                    z-index: 2;
                }
                .hex-card:hover {
                    transform: scale(1.04) !important;
                    box-shadow: 0 0 35px rgba(0, 194, 199, 0.35), 0 0 0 2px rgba(0, 194, 199, 0.5);
                    background: linear-gradient(180deg, #11254f 0%, #091224 100%);
                    z-index: 30;
                }
                .hex-card:hover::before { opacity: 0.8; }
                .hex-card:hover::after {
                    top: 100%;
                    left: 100%;
                    transition: all 0.75s ease;
                }
                .hex-center {
                    transform: scale(1.08);
                    background: linear-gradient(180deg, #133868 0%, #0a1b38 100%);
                    box-shadow: 0 0 50px rgba(0, 194, 199, 0.35);
                    z-index: 20;
                }
                .hex-center::before {
                    background: radial-gradient(circle at center, rgba(0, 194, 199, 0.4), transparent 70%);
                    opacity: 1;
                }
                .hex-center:hover {
                    transform: scale(1.11) !important;
                    box-shadow: 0 0 60px rgba(0, 194, 199, 0.5), 0 0 0 2px rgba(0, 194, 199, 0.65);
                }
                .hex-content-wrap {
                    position: relative;
                    z-index: 3;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    padding: 0 22px;
                    width: 100%;
                }
                .hex-icon-box {
                    margin-bottom: 14px;
                    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                .hex-card:hover .hex-icon-box {
                    transform: scale(1.15);
                }
                .hex-title {
                    color: #ffffff;
                    font-size: 19px;
                    font-weight: 700;
                    letter-spacing: -0.01em;
                    margin-bottom: 6px;
                    transition: color 0.3s;
                }
                .hex-center .hex-title, .hex-card:hover .hex-title {
                    color: #00C2C7;
                }
                .hex-sub {
                    color: #94a3b8;
                    font-size: 12px;
                    line-height: 1.45;
                    max-width: 85%;
                    transition: color 0.3s;
                }
                .hex-card:hover .hex-sub {
                    color: #e2e8f0;
                }

                @media (max-width: 840px) {
                    .geo-footprint-board {
                        height: auto;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        gap: 16px;
                        padding: 20px;
                    }
                    .hex-card {
                        position: relative !important;
                        left: auto !important;
                        top: auto !important;
                        margin: 0 !important;
                        transform: none !important;
                    }
                    .hex-center {
                        transform: scale(1) !important;
                    }
                }
            `}}),(0,x.jsxs)(`main`,{style:{flex:1},className:`wcu-premium-bg`,children:[(0,x.jsx)(`div`,{className:`wcu-noise-layer`}),(0,x.jsx)(`section`,{style:{padding:`140px 24px 100px 24px`,position:`relative`,zIndex:3},className:`animate-on-load`,children:(0,x.jsxs)(`div`,{style:{maxWidth:`1240px`,margin:`0 auto`},children:[(0,x.jsxs)(`div`,{className:`wcu-spotlight-card`,children:[(0,x.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:`wcu-spotlight-video-bg`,children:(0,x.jsx)(`source`,{src:`/assets/images/about/service.mp4`,type:`video/mp4`})}),(0,x.jsx)(`div`,{className:`wcu-spotlight-video-overlay`}),(0,x.jsxs)(`div`,{style:{maxWidth:`680px`},children:[(0,x.jsx)(`div`,{className:`wcu-spotlight-label`,children:`JF KNOWLEDGE CENTRE`}),(0,x.jsxs)(`h1`,{className:`wcu-spotlight-title`,children:[`INTEGRATED`,(0,x.jsx)(`br`,{}),(0,x.jsx)(`span`,{style:{color:`#3b82f6`},children:`SOLUTIONS`})]}),(0,x.jsx)(`p`,{className:`wcu-spotlight-desc`,children:`A globally oriented, multi-disciplinary professional services organisation committed to transforming the way businesses learn, hire, and grow across our powerful operational verticals.`}),(0,x.jsxs)(`div`,{className:`wcu-bullet-grid`,children:[(0,x.jsxs)(`div`,{className:`wcu-bullet-item`,children:[(0,x.jsx)(ye,{size:16,color:`#3b82f6`}),(0,x.jsx)(`span`,{style:{fontSize:`14.5px`,fontWeight:600},children:`E-Learning Solutions`})]}),(0,x.jsxs)(`div`,{className:`wcu-bullet-item`,children:[(0,x.jsx)(ye,{size:16,color:`#3b82f6`}),(0,x.jsx)(`span`,{style:{fontSize:`14.5px`,fontWeight:600},children:`Recruitment & Staffing`})]}),(0,x.jsxs)(`div`,{className:`wcu-bullet-item`,children:[(0,x.jsx)(ye,{size:16,color:`#3b82f6`}),(0,x.jsx)(`span`,{style:{fontSize:`14.5px`,fontWeight:600},children:`Financial Consultancy`})]}),(0,x.jsxs)(`div`,{className:`wcu-bullet-item`,children:[(0,x.jsx)(ye,{size:16,color:`#3b82f6`}),(0,x.jsx)(`span`,{style:{fontSize:`14.5px`,fontWeight:600},children:`Accounting Services`})]})]}),(0,x.jsx)(`div`,{style:{marginTop:`36px`},children:(0,x.jsxs)(`a`,{href:`#recruitment`,className:`wcu-pill-cta`,children:[`Explore Talent Solutions `,(0,x.jsx)(fe,{size:15})]})})]})]}),(0,x.jsxs)(`div`,{className:`wcu-animated-divider`,children:[(0,x.jsx)(`div`,{className:`wcu-divider-line`}),(0,x.jsx)(`div`,{className:`wcu-divider-dot`}),(0,x.jsx)(`div`,{className:`wcu-divider-line`})]}),(0,x.jsx)(`div`,{style:{position:`relative`,marginTop:`60px`,width:`100%`,minHeight:`840px`},children:(0,x.jsxs)(`div`,{className:`geo-footprint-board`,children:[(0,x.jsx)(`div`,{className:`geo-network-lines`}),(0,x.jsx)(`div`,{className:`hex-card node-uk`,children:(0,x.jsxs)(`div`,{className:`hex-content-wrap`,children:[(0,x.jsx)(`div`,{className:`hex-icon-box`,children:(0,x.jsxs)(`svg`,{width:`42`,height:`42`,viewBox:`0 0 24 24`,fill:`none`,stroke:`#2AABDB`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,x.jsx)(`path`,{d:`M3 22h18`}),(0,x.jsx)(`path`,{d:`M6 18v-7a6 6 0 0 1 12 0v7`}),(0,x.jsx)(`path`,{d:`M9 22v-4h6v4`}),(0,x.jsx)(`path`,{d:`M4 18h16`}),(0,x.jsx)(`path`,{d:`M12 2v2`})]})}),(0,x.jsx)(`div`,{className:`hex-title`,children:`United Kingdom`}),(0,x.jsx)(`div`,{className:`hex-sub`,children:`IR35 Ecosystem & GDPR Data Shield`})]})}),(0,x.jsx)(`div`,{className:`hex-card node-usa`,children:(0,x.jsxs)(`div`,{className:`hex-content-wrap`,children:[(0,x.jsx)(`div`,{className:`hex-icon-box`,children:(0,x.jsxs)(`svg`,{width:`42`,height:`42`,viewBox:`0 0 24 24`,fill:`none`,stroke:`#2AABDB`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,x.jsx)(`path`,{d:`M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z`}),(0,x.jsx)(`path`,{d:`M6 12H4a2 2 0 0 0-2 2v8`}),(0,x.jsx)(`path`,{d:`M18 16h2a2 2 0 0 1 2 2v4`}),(0,x.jsx)(`path`,{d:`M10 6h4`}),(0,x.jsx)(`path`,{d:`M10 10h4`}),(0,x.jsx)(`path`,{d:`M10 14h4`}),(0,x.jsx)(`path`,{d:`M10 18h4`})]})}),(0,x.jsx)(`div`,{className:`hex-title`,children:`United States`}),(0,x.jsx)(`div`,{className:`hex-sub`,children:`EEO & ITAR Compliant Architecture`})]})}),(0,x.jsx)(`div`,{className:`hex-card node-eu`,children:(0,x.jsxs)(`div`,{className:`hex-content-wrap`,children:[(0,x.jsx)(`div`,{className:`hex-icon-box`,children:(0,x.jsxs)(`svg`,{width:`42`,height:`42`,viewBox:`0 0 24 24`,fill:`none`,stroke:`#2AABDB`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,x.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,x.jsx)(`path`,{d:`M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`}),(0,x.jsx)(`path`,{d:`M2 12h20`})]})}),(0,x.jsx)(`div`,{className:`hex-title`,children:`Europe`}),(0,x.jsx)(`div`,{className:`hex-sub`,children:`Cross-Border Talent Pooling Pipelines`})]})}),(0,x.jsx)(`div`,{className:`hex-card hex-center node-gcc`,children:(0,x.jsxs)(`div`,{className:`hex-content-wrap`,children:[(0,x.jsx)(`div`,{className:`hex-icon-box`,children:(0,x.jsxs)(`svg`,{width:`44`,height:`44`,viewBox:`0 0 24 24`,fill:`none`,stroke:`#00C2C7`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,x.jsx)(`path`,{d:`M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z`}),(0,x.jsx)(`circle`,{cx:`12`,cy:`10`,r:`3`}),(0,x.jsx)(`path`,{d:`M8 10h8`})]})}),(0,x.jsx)(`div`,{className:`hex-title`,children:`GCC Region`}),(0,x.jsx)(`div`,{className:`hex-sub`,style:{color:`#a5f3fc`},children:`Localized Visa & Relocation Hub`})]})}),(0,x.jsx)(`div`,{className:`hex-card node-global`,children:(0,x.jsxs)(`div`,{className:`hex-content-wrap`,children:[(0,x.jsx)(`div`,{className:`hex-icon-box`,children:(0,x.jsxs)(`svg`,{width:`42`,height:`42`,viewBox:`0 0 24 24`,fill:`none`,stroke:`#2AABDB`,strokeWidth:`1.5`,children:[(0,x.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`,strokeDasharray:`3 3`}),(0,x.jsx)(`circle`,{cx:`12`,cy:`12`,r:`6`,fill:`rgba(42,171,219,0.1)`}),(0,x.jsx)(`path`,{d:`M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z`,strokeWidth:`1`})]})}),(0,x.jsx)(`div`,{className:`hex-title`,children:`Global Network`}),(0,x.jsx)(`div`,{className:`hex-sub`,children:`Synchronized Delivery Infrastructure`})]})}),(0,x.jsx)(`div`,{className:`hex-card node-india`,children:(0,x.jsxs)(`div`,{className:`hex-content-wrap`,children:[(0,x.jsx)(`div`,{className:`hex-icon-box`,children:(0,x.jsxs)(`svg`,{width:`42`,height:`42`,viewBox:`0 0 24 24`,fill:`none`,stroke:`#2AABDB`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,x.jsx)(`rect`,{x:`16`,y:`16`,width:`6`,height:`6`,rx:`1`}),(0,x.jsx)(`rect`,{x:`2`,y:`16`,width:`6`,height:`6`,rx:`1`}),(0,x.jsx)(`rect`,{x:`9`,y:`2`,width:`6`,height:`6`,rx:`1`}),(0,x.jsx)(`path`,{d:`M12 8v8`}),(0,x.jsx)(`path`,{d:`M5 16v-4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4`})]})}),(0,x.jsx)(`div`,{className:`hex-title`,children:`India Hub`}),(0,x.jsx)(`div`,{className:`hex-sub`,children:`High-Scale Enterprise Delivery Base`})]})})]})})]})}),(0,x.jsx)(`section`,{id:`learning`,className:`wcu-section-light`,style:{padding:`100px 24px`,position:`relative`,transition:`background 0.5s`},children:(0,x.jsxs)(`div`,{style:{maxWidth:`1240px`,margin:`0 auto`},children:[(0,x.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`64px`,alignItems:`center`,marginBottom:`64px`},children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`span`,{style:{fontSize:`11px`,fontWeight:`800`,color:`#2563eb`,letterSpacing:`0.2em`,display:`block`,marginBottom:`12px`},children:`DIVISION 1`}),(0,x.jsx)(`h2`,{style:{fontSize:`38px`,fontWeight:`900`,lineHeight:`1.2`,marginBottom:`20px`,letterSpacing:`-0.02em`},children:`E-Learning & Digital Learning Solutions`}),(0,x.jsx)(`p`,{style:{fontSize:`16.5px`,lineHeight:`1.7`,color:`#475569`,marginBottom:`28px`},children:`Transforming complex knowledge, skills, and compliance requirements into engaging, impactful, and measurable learning journeys accessible anytime, anywhere, on any device.`}),(0,x.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`8px`},children:[`SCORM 1.2 / 2004`,`xAPI (Tin Can)`,`AICC Compliant`,`LMS Services`,`Instructional Design`].map(e=>(0,x.jsx)(`span`,{style:{padding:`6px 14px`,background:`#f1f5f9`,border:`1px solid #e2e8f0`,borderRadius:`50px`,fontSize:`13px`,color:`#475569`,fontWeight:600},children:e},e))})]}),(0,x.jsx)(`div`,{className:`wcu-media-wrapper`,children:(0,x.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,style:{width:`100%`,height:`100%`,objectFit:`cover`},children:(0,x.jsx)(`source`,{src:`/assets/images/about/e-learning.mp4`,type:`video/mp4`})})})]}),(0,x.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(48%, 1fr))`,gap:`32px`},children:[{title:`Instructor-Led Training (ILT)`,desc:`Expertly designed and facilitated by seasoned subject matter experts bringing real-world experience into the classroom.`,f1:`Custom Curriculum`,f2:`Pre/Post Assessments`,f3:`Training Needs Analysis`},{title:`Virtual Instructor-Led Training (VILT)`,desc:`Bringing the richness of classroom learning to digital environments via industry-leading collaboration platforms.`,f1:`Multi-Timezone Delivery`,f2:`Cohort-Based Learning`,f3:`Hybrid VILT Models`},{title:`Microlearning Solutions`,desc:`Focused, bite-sized learning content designed to be consumed in 3–7 minutes, perfectly suited for modern learners.`,f1:`Mobile-First Content`,f2:`Spaced Repetition`,f3:`Rapid Development`},{title:`Gamification Frameworks`,desc:`Applying behavioural psychology, motivational design, and game mechanics to dramatically improve completion rates.`,f1:`Points & Badges`,f2:`Leaderboards & Rewards`,f3:`Learning Quests`}].map((n,r)=>(0,x.jsx)(t,{...n,meta:e.learning[r],theme:`light`},r))})]})}),(0,x.jsx)(`section`,{id:`recruitment`,className:`wcu-section-dark`,style:{padding:`100px 24px`,position:`relative`},children:(0,x.jsxs)(`div`,{style:{maxWidth:`1240px`,margin:`0 auto`},children:[(0,x.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`64px`,alignItems:`center`,marginBottom:`64px`},children:[(0,x.jsxs)(`div`,{style:{order:2},children:[(0,x.jsx)(`span`,{style:{fontSize:`11px`,fontWeight:`800`,color:`#60a5fa`,letterSpacing:`0.2em`,display:`block`,marginBottom:`12px`},children:`DIVISION 2`}),(0,x.jsx)(`h2`,{style:{fontSize:`38px`,fontWeight:`900`,lineHeight:`1.2`,marginBottom:`20px`,letterSpacing:`-0.02em`},children:`Recruitment, Staffing & Talent Solutions`}),(0,x.jsx)(`p`,{style:{fontSize:`16.5px`,lineHeight:`1.7`,color:`#94a3b8`,marginBottom:`28px`},children:`End-to-end recruitment and staffing solutions across permanent placement, contract staffing, staff augmentation, and executive search serving global markets.`}),(0,x.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`8px`},children:[`Permanent Placement`,`Contract Staffing`,`IT Staff Augmentation`,`Non-IT Staff Augmentation`,`Executive Search`].map(e=>(0,x.jsx)(`span`,{style:{padding:`6px 14px`,background:`rgba(255,255,255,0.03)`,border:`1px solid rgba(255,255,255,0.06)`,borderRadius:`50px`,fontSize:`13px`,color:`#64748b`},children:e},e))})]}),(0,x.jsx)(`div`,{className:`wcu-media-wrapper`,style:{order:1},children:(0,x.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,style:{width:`100%`,height:`100%`,objectFit:`cover`},children:(0,x.jsx)(`source`,{src:`/assets/images/about/industries.mp4`,type:`video/mp4`})})})]}),(0,x.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(48%, 1fr))`,gap:`32px`},children:[{title:`Permanent Placement & Direct Hire`,desc:`Sourcing, screening, and presenting exceptional candidates across all seniority levels with multi-stage evaluation processes.`,f1:`AI Candidate Matching`,f2:`Competency Interviewing`,f3:`90-Day Guarantee`},{title:`Contract & Temporary Staffing`,desc:`Flexible, quality talent deployed at speed to manage peak seasons or specific project cycles throughout the employee lifecycle.`,f1:`24–72h Deployment`,f2:`Payroll Management`,f3:`Tax Compliance Support`},{title:`Staff Augmentation Model`,desc:`Seamlessly extending internal software engineering, data, cloud architectures, finance, HR, or operations teams without traditional overheads.`,f1:`IT Specialized Roles`,f2:`Non-IT Domain Experts`,f3:`Seamless Integration`},{title:`Executive Search & Leadership`,desc:`Applying a discreet, research-led methodology to identify and attract transformational leaders across C-suite and board levels.`,f1:`Market Mapping`,f2:`Leadership Assessment`,f3:`Confidential Mandates`}].map((n,r)=>(0,x.jsx)(t,{...n,meta:e.recruitment[r],theme:`dark`},r))})]})}),(0,x.jsx)(`section`,{id:`finance`,className:`wcu-section-light`,style:{padding:`100px 24px`,position:`relative`},children:(0,x.jsxs)(`div`,{style:{maxWidth:`1240px`,margin:`0 auto`},children:[(0,x.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`64px`,alignItems:`center`,marginBottom:`64px`},children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`span`,{style:{fontSize:`11px`,fontWeight:`800`,color:`#2563eb`,letterSpacing:`0.2em`,display:`block`,marginBottom:`12px`},children:`DIVISION 3`}),(0,x.jsx)(`h2`,{style:{fontSize:`38px`,fontWeight:`900`,lineHeight:`1.2`,marginBottom:`20px`,letterSpacing:`-0.02em`},children:`Financial Consultancy & Accounting Services`}),(0,x.jsx)(`p`,{style:{fontSize:`16.5px`,lineHeight:`1.7`,color:`#475569`,marginBottom:`28px`},children:`Comprehensive end-to-end financial services designed to provide clarity, compliance, and strategic direction for businesses of all sizes.`}),(0,x.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`8px`},children:[`Accounting & Bookkeeping`,`Tax Planning`,`Financial Reporting`,`Budgeting & Forecasting`,`Audit Support`].map(e=>(0,x.jsx)(`span`,{style:{padding:`6px 14px`,background:`#f1f5f9`,border:`1px solid #e2e8f0`,borderRadius:`50px`,fontSize:`13px`,color:`#475569`,fontWeight:600},children:e},e))})]}),(0,x.jsx)(`div`,{className:`wcu-media-wrapper`,children:(0,x.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,style:{width:`100%`,height:`100%`,objectFit:`cover`},children:(0,x.jsx)(`source`,{src:`/assets/images/about/global-Delivery-Network.mp4`,type:`video/mp4`})})})]}),(0,x.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr`,gap:`32px`},children:[{title:`Accounting, Bookkeeping & Reporting Services`,desc:`Accurate, timely, and fully compliant transaction logging and management information generation across cloud accounting ecosystems.`,f1:`Xero & QuickBooks`,f2:`IFRS & GAAP Compliance`,f3:`AP/AR Management`},{title:`Tax Planning, Compliance & Advisory`,desc:`Navigating domestic and international tax obligations with precision, ensuring corporate and personal compliance across jurisdictions.`,f1:`VAT / GST Filings`,f2:`Transfer Pricing Docs`,f3:`Cross-Border Planning`},{title:`Budgeting, Forecasting & CFO Advisory`,desc:`Access to strategic board-level financial management, Three-Way financial modeling, and scenario planning tools for scalable growth.`,f1:`Scenario Modeling`,f2:`Fractional CFO Support`,f3:`Cash Flow Forecasting`}].map((n,r)=>(0,x.jsx)(t,{...n,meta:e.finance[r],theme:`light`},r))})]})}),(0,x.jsx)(`section`,{className:`wcu-section-dark`,style:{padding:`100px 24px`,position:`relative`},children:(0,x.jsxs)(`div`,{style:{maxWidth:`960px`,margin:`0 auto`},children:[(0,x.jsxs)(`div`,{style:{textAlign:`center`,marginBottom:`64px`},children:[(0,x.jsx)(`span`,{style:{fontSize:`11px`,fontWeight:`800`,color:`#60a5fa`,letterSpacing:`0.2em`},children:`OUR STRATEGIC ADVANTAGE`}),(0,x.jsx)(`h2`,{style:{fontSize:`38px`,fontWeight:`900`,marginTop:`8px`},children:`Why Partner with JF Knowledge Centre?`})]}),(0,x.jsx)(`div`,{style:{position:`relative`,paddingLeft:`32px`,borderLeft:`2px solid rgba(255,255,255,0.06)`},children:[{title:`Integrated Expertise`,desc:`Three specialist divisions under one roof. Whether you need to train your people, hire the best, or manage your finances — we deliver it all with consistent quality and a single point of accountability.`},{title:`Global Reach, Local Insight`,desc:`Active presence across US, UK, Europe, GCC, and India. We understand local market nuances, regulatory landscapes, and cultural contexts that drive results in each geography.`},{title:`Technology-Driven Foundations`,desc:`We leverage AI, automation, and digital platforms to deliver faster, smarter, and more scalable solutions across all three divisions — from AI-powered candidate matching to real-time financial dashboards.`}].map((e,t)=>(0,x.jsxs)(`div`,{style:{position:`relative`,marginBottom:`40px`},children:[(0,x.jsx)(`div`,{style:{position:`absolute`,left:`-42px`,top:`4px`,width:`18px`,height:`18px`,borderRadius:`50%`,background:`#060B17`,border:`2px solid #3b82f6`,boxShadow:`0 0 10px rgba(59,130,246,0.5)`}}),(0,x.jsx)(`h4`,{style:{fontSize:`19px`,fontWeight:`800`,color:`#ffffff`,marginBottom:`6px`},children:e.title}),(0,x.jsx)(`p`,{style:{fontSize:`15px`,lineHeight:`1.6`,color:`#94a3b8`,margin:0},children:e.desc})]},t))})]})}),(0,x.jsx)(`section`,{className:`wcu-section-light`,style:{padding:`100px 24px`,borderTop:`1px solid rgba(15,23,42,0.04)`},children:(0,x.jsxs)(`div`,{style:{maxWidth:`860px`,margin:`0 auto`},children:[(0,x.jsxs)(`div`,{style:{textAlign:`center`,marginBottom:`56px`},children:[(0,x.jsx)(`span`,{style:{fontSize:`11px`,fontWeight:`800`,color:`#2563eb`,letterSpacing:`0.15em`},children:`FAQ`}),(0,x.jsx)(`h2`,{style:{fontSize:`34px`,fontWeight:`900`,marginTop:`8px`},children:`Frequently Asked Parameters`})]}),(0,x.jsx)(`div`,{style:{display:`grid`,gap:`20px`},children:[{q:`What compliance frameworks govern your Custom eLearning outputs?`,a:`Our custom modules are fully SCORM 1.2, SCORM 2004, xAPI (Tin Can), and AICC compliant, utilizing top-tier authoring tools like Articulate Storyline and Adobe Captivate.`},{q:`What specific timelines back your Contract and Temporary staffing placements?`,a:`We specialize in the rapid deployment of pre-vetted contract professionals within 24 to 72 hours, managing complete contractor payroll, tax compliance, and HR support requirements.`}].map((e,t)=>(0,x.jsxs)(`div`,{style:{padding:`24px`,background:`#ffffff`,borderRadius:`16px`,border:`1px solid #e2e8f0`,boxShadow:`0 4px 12px rgba(15,23,42,0.02)`,transition:`transform 0.3s ease`},children:[(0,x.jsx)(`h4`,{style:{fontSize:`16.5px`,fontWeight:`800`,marginBottom:`8px`,color:`#0f172a`},children:e.q}),(0,x.jsx)(`p`,{style:{fontSize:`14.5px`,lineHeight:`1.6`,color:`#475569`,margin:0},children:e.a})]},t))})]})}),(0,x.jsx)(et,{})]}),(0,x.jsx)(ne,{})]})}var ft=[{flag:`🇬🇧`,country:`United Kingdom`,city:`London`},{flag:`🇺🇸`,country:`United States`,city:`New York`},{flag:`🇦🇪`,country:`United Arab Emirates`,city:`Dubai`},{flag:`🇮🇳`,country:`India`,city:`Mumbai`}],pt=[{label:`General Enquiries`,value:`info@jfknowledgecentre.com`,href:`mailto:info@jfknowledgecentre.com`,icon:(0,x.jsx)(Fe,{size:16,strokeWidth:2})},{label:`UK Office`,value:`+44 (0) 20 XXXX XXXX`,href:`tel:+44020XXXXXXXX`,icon:(0,x.jsx)(Ie,{size:16,strokeWidth:2})},{label:`US Office`,value:`+1 (XXX) XXX-XXXX`,href:`tel:+1XXXXXXXXXX`,icon:(0,x.jsx)(Ie,{size:16,strokeWidth:2})}];function mt(){let[e,t]=(0,b.useState)({name:``,email:``,company:``,division:`E-Learning`,message:``}),[n,r]=(0,b.useState)(!1);return(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,minHeight:`100vh`,background:`#f8fafc`,color:`#0f172a`,fontFamily:`var(--font-family, "Inter", sans-serif)`,overflowX:`hidden`},children:[(0,x.jsx)(S,{}),(0,x.jsx)(`style`,{children:`
                @keyframes gridMove {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-40px); }
                }
                @keyframes bgScale {
                    0% { transform: scale(1.00); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1.00); }
                }
                @keyframes heroFadeUp {
                    0% { opacity: 0; transform: translateY(20px); filter: blur(4px); }
                    100% { opacity: 1; transform: translateY(0); filter: blur(0); }
                }
                @keyframes floatStat {
                    0% { transform: translateY(4px); }
                    50% { transform: translateY(-4px); }
                    100% { transform: translateY(4px); }
                }
                @keyframes lineWidth {
                    0% { width: 0%; opacity: 0; }
                    100% { width: 100%; opacity: 1; }
                }

                .contact-hero-section {
                    position: relative;
                    padding: 140px 0 100px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: center;
                    overflow: hidden;
                    background-color: #08152A;
                    text-align: left;
                }

                .contact-hero-bg-wrapper {
                    position: absolute;
                    inset: 0;
                    z-index: 1;
                    animation: bgScale 30s infinite ease-in-out;
                }
                .contact-hero-video {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: brightness(0.80) contrast(1.10) saturate(1.10);
                }

                .contact-hero-overlay {
                    position: absolute;
                    inset: 0;
                    z-index: 2;
                    background: linear-gradient(180deg, rgba(8,15,32,.75) 0%, rgba(8,15,32,.82) 50%, rgba(8,15,32,.95) 100%);
                }

                .contact-hero-grid-decoration {
                    position: absolute;
                    inset: -40px 0;
                    z-index: 3;
                    opacity: 0.04;
                    pointer-events: none;
                    background-image: 
                        linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
                    background-size: 50px 50px;
                    animation: gridMove 60s linear infinite;
                }

                .contact-hero-glow-back {
                    position: absolute;
                    top: 35%;
                    left: 20%;
                    width: 600px;
                    height: 450px;
                    z-index: 4;
                    background: radial-gradient(circle, rgba(37,99,235,.20), transparent 70%);
                    filter: blur(50px);
                    opacity: 0.30;
                    pointer-events: none;
                }

                .contact-hero-container {
                    position: relative;
                    z-index: 5;
                    max-width: 1200px;
                    width: 100%;
                    margin: 0 auto;
                    padding: 0 24px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    animation: heroFadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                    box-sizing: border-box;
                }

                .contact-hero-eyebrow {
                    display: inline-block;
                    font-size: 12px;
                    font-weight: 800;
                    letter-spacing: 0.25em;
                    text-transform: uppercase;
                    color: #FBBF24;
                    margin-bottom: 20px;
                }

                /* Compact & Indented Headline Variant */
                .contact-hero-headline {
                    font-size: clamp(38px, 4.5vw, 56px);
                    font-weight: 900;
                    line-height: 1.05;
                    letter-spacing: -0.03em;
                    color: #FFFFFF;
                    margin: 0 0 32px 0;
                    max-width: 800px;
                }

                .contact-hero-headline span.accent-wrapper {
                    position: relative;
                    display: inline-block;
                    color: #FFFFFF;
                }
                .contact-hero-headline span.accent-wrapper::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    bottom: -2px;
                    height: 4px;
                    background: linear-gradient(90deg, #2563EB, #38BDF8, transparent);
                    border-radius: 99px;
                    animation: lineWidth 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }

                /* Left Aligned Clean Glass Panel */
                .contact-hero-paragraph-glass {
                    background: rgba(255, 255, 255, .04);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, .08);
                    border-radius: 16px;
                    padding: 22px 32px;
                    max-width: 620px;
                    width: 100%;
                    margin-bottom: 40px;
                    box-sizing: border-box;
                }
                .contact-hero-desc {
                    font-size: 16px;
                    line-height: 1.65;
                    color: #CBD5E1;
                    margin: 0;
                }

                .contact-hero-btn-group {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    margin-bottom: 70px;
                    flex-wrap: wrap;
                }
                .contact-btn-primary {
                    background: linear-gradient(135deg, #2563EB, #3B82F6);
                    color: #ffffff;
                    border: none;
                    border-radius: 12px;
                    padding: 15px 30px;
                    font-size: 15px;
                    font-weight: 700;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    transition: all 0.3s ease;
                    box-shadow: 0 10px 20px rgba(37,99,235,0.25);
                }
                .contact-btn-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 14px 28px rgba(37,99,235,0.35);
                    filter: brightness(1.08);
                }
                .contact-btn-secondary {
                    background: rgba(255, 255, 255, .06);
                    color: #ffffff;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(8px);
                    border-radius: 12px;
                    padding: 15px 30px;
                    font-size: 15px;
                    font-weight: 700;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    transition: all 0.3s ease;
                }
                .contact-btn-secondary:hover {
                    background: rgba(255, 255, 255, .1);
                    border-color: rgba(255, 255, 255, 0.2);
                    transform: translateY(-2px);
                }

                .contact-stats-dashboard {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 20px;
                    width: 100%;
                    max-width: 1000px;
                    border-top: 1px solid rgba(255, 255, 255, 0.08);
                    padding-top: 32px;
                }
                .contact-stat-glass-card {
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(16px);
                    border-radius: 14px;
                    padding: 18px 16px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 4px;
                    animation: floatStat 6s ease-in-out infinite;
                }
                .contact-stat-glass-card:nth-child(even) {
                    animation-delay: 1.5s;
                }
                .contact-stat-number {
                    font-size: 32px;
                    font-weight: 900;
                    color: #FFFFFF;
                    line-height: 1;
                    letter-spacing: -0.02em;
                }
                .contact-stat-label {
                    font-size: 12px;
                    font-weight: 600;
                    color: rgba(255, 255, 255, 0.45);
                    letter-spacing: 0.01em;
                }

                /* ── COMPACT DATA INPUT HOUSING FRAMEWORK ── */
                .compact-form-card {
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    border-radius: 18px;
                    padding: 24px 28px;
                    box-shadow: 0 15px 35px -10px rgba(15,23,42,0.03);
                }
                .contact-input {
                    width: 100%;
                    box-sizing: border-box;
                    background: #f8fafc;
                    border: 1px solid #e2e8f0;
                    border-radius: 8px;
                    padding: 11px 14px;
                    color: #0f172a;
                    font-size: 14px;
                    font-family: var(--font-family, "Inter", sans-serif);
                    outline: none;
                    transition: all 0.2s ease;
                    -webkit-appearance: none;
                }
                .contact-input::placeholder {
                    color: #94a3b8;
                }
                .contact-input:focus {
                    border-color: #2563EB;
                    background: #ffffff;
                    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
                }
                .contact-input option {
                    background: #ffffff;
                    color: #0f172a;
                }
                .channel-link {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    padding: 14px 18px;
                    border: 1px solid #e2e8f0;
                    border-radius: 12px;
                    background: #ffffff;
                    text-decoration: none;
                    transition: all 0.2s ease;
                    color: inherit;
                }
                .channel-link:hover {
                    border-color: #2563EB;
                    background: rgba(37, 99, 235, 0.01);
                    transform: translateY(-1px);
                }
                .office-card {
                    padding: 14px 16px;
                    border: 1px solid #e2e8f0;
                    border-radius: 12px;
                    background: #ffffff;
                    transition: all 0.2s ease;
                }
                .office-card:hover {
                    border-color: #cbd5e1;
                    background: #f1f5f9;
                }
                .submit-btn {
                    width: 100%;
                    padding: 13px 24px;
                    background: linear-gradient(135deg, #2563EB, #3B82F6);
                    color: #ffffff;
                    border: none;
                    border-radius: 8px;
                    font-size: 14px;
                    font-weight: 700;
                    font-family: var(--font-family, "Inter", sans-serif);
                    cursor: pointer;
                    transition: all 0.2s ease;
                    box-shadow: 0 5px 15px rgba(37,99,235,0.15);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                }
                .submit-btn:hover {
                    transform: translateY(-1px);
                    box-shadow: 0 10px 22px rgba(37,99,235,0.25);
                    filter: brightness(1.05);
                }
                .form-label {
                    display: block;
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: #64748b;
                    margin-bottom: 6px;
                }

                @media (max-width: 900px) {
                    .contact-grid {
                        grid-template-columns: 1fr !important;
                        gap: 32px !important;
                    }
                    .contact-stats-dashboard {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                @media (max-width: 550px) {
                    .contact-stats-dashboard {
                        grid-template-columns: 1fr;
                    }
                }
            `}),(0,x.jsxs)(`main`,{style:{flex:1},children:[(0,x.jsxs)(`section`,{className:`contact-hero-section`,children:[(0,x.jsx)(`div`,{className:`contact-hero-bg-wrapper`,children:(0,x.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:`contact-hero-video`,children:(0,x.jsx)(`source`,{src:`/assets/images/about/about.mp4`,type:`video/mp4`})})}),(0,x.jsx)(`div`,{className:`contact-hero-overlay`}),(0,x.jsx)(`div`,{className:`contact-hero-grid-decoration`}),(0,x.jsx)(`div`,{className:`contact-hero-glow-back`}),(0,x.jsxs)(`div`,{className:`contact-hero-container`,children:[(0,x.jsx)(`span`,{className:`contact-hero-eyebrow`,children:`Get In Touch`}),(0,x.jsxs)(`h1`,{className:`contact-hero-headline`,children:[`Let's Start Your Next`,(0,x.jsx)(`br`,{}),(0,x.jsx)(`span`,{className:`accent-wrapper`,children:`Success Story`})]}),(0,x.jsx)(`div`,{className:`contact-hero-paragraph-glass`,children:(0,x.jsx)(`p`,{className:`contact-hero-desc`,children:`Reach out for a confidential consultation. We'll evaluate your requirements and check configurations within 24 business hours.`})}),(0,x.jsxs)(`div`,{className:`contact-hero-btn-group`,children:[(0,x.jsxs)(`button`,{className:`contact-btn-primary`,onClick:()=>document.getElementById(`message-form-panel`).scrollIntoView({behavior:`smooth`}),children:[(0,x.jsx)(he,{size:16}),(0,x.jsx)(`span`,{children:`Schedule Consultation`})]}),(0,x.jsxs)(`button`,{className:`contact-btn-secondary`,onClick:()=>document.getElementById(`message-form-panel`).scrollIntoView({behavior:`smooth`}),children:[(0,x.jsx)(`span`,{children:`Contact Our Team`}),(0,x.jsx)(fe,{size:14})]})]}),(0,x.jsxs)(`div`,{className:`contact-stats-dashboard`,children:[(0,x.jsxs)(`div`,{className:`contact-stat-glass-card`,children:[(0,x.jsx)(`span`,{className:`contact-stat-number`,children:`24h`}),(0,x.jsx)(`span`,{className:`contact-stat-label`,children:`Response Time`})]}),(0,x.jsxs)(`div`,{className:`contact-stat-glass-card`,children:[(0,x.jsx)(`span`,{className:`contact-stat-number`,children:`250+`}),(0,x.jsx)(`span`,{className:`contact-stat-label`,children:`Enterprise Clients`})]}),(0,x.jsxs)(`div`,{className:`contact-stat-glass-card`,children:[(0,x.jsx)(`span`,{className:`contact-stat-number`,children:`99%`}),(0,x.jsx)(`span`,{className:`contact-stat-label`,children:`Satisfaction Rate`})]}),(0,x.jsxs)(`div`,{className:`contact-stat-glass-card`,children:[(0,x.jsx)(`span`,{className:`contact-stat-number`,children:`40+`}),(0,x.jsx)(`span`,{className:`contact-stat-label`,children:`Countries Active`})]})]})]})]}),(0,x.jsx)(`section`,{style:{padding:`60px 24px`,background:`#f8fafc`,position:`relative`,zIndex:2,boxSizing:`border-box`},children:(0,x.jsxs)(`div`,{className:`contact-grid`,style:{maxWidth:`1200px`,margin:`0 auto`,display:`grid`,gridTemplateColumns:`1fr 1.25fr`,gap:`32px`,alignItems:`stretch`},children:[(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,justifyContent:`space-between`,gap:`20px`},children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`p`,{style:{fontSize:`11px`,fontWeight:`800`,letterSpacing:`0.1em`,textTransform:`uppercase`,color:`#2563EB`,marginBottom:`6px`},children:`Contact Information`}),(0,x.jsx)(`h2`,{style:{fontSize:`clamp(22px, 2vw, 28px)`,fontWeight:900,letterSpacing:`-0.02em`,lineHeight:1.2,color:`#0f172a`,margin:`0 0 10px`},children:`Global Hub Coordinates`}),(0,x.jsx)(`p`,{style:{fontSize:`14.5px`,lineHeight:1.55,color:`#475569`,margin:0},children:`Our specialists stand ready globally to execute digital learning architecture adjustments, strategic recruitment setups, and active financial reporting assistance.`})]}),(0,x.jsx)(`div`,{style:{height:`1px`,background:`#e2e8f0`}}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`p`,{style:{fontSize:`10px`,fontWeight:`700`,letterSpacing:`0.08em`,textTransform:`uppercase`,color:`#94a3b8`,marginBottom:`10px`},children:`Official Channels`}),(0,x.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:pt.map(e=>(0,x.jsxs)(`a`,{href:e.href,className:`channel-link`,children:[(0,x.jsx)(`span`,{style:{width:`34px`,height:`34px`,borderRadius:`8px`,background:`rgba(37,99,235,0.06)`,border:`1px solid rgba(37,99,235,0.12)`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`#2563EB`,flexShrink:0},children:e.icon}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{style:{fontSize:`9px`,fontWeight:`700`,letterSpacing:`0.05em`,textTransform:`uppercase`,color:`#64748b`,marginBottom:`1px`},children:e.label}),(0,x.jsx)(`div`,{style:{fontSize:`14px`,fontWeight:`600`,color:`#0f172a`,letterSpacing:`-0.01em`},children:e.value})]})]},e.label))})]}),(0,x.jsx)(`div`,{style:{height:`1px`,background:`#e2e8f0`}}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`p`,{style:{fontSize:`10px`,fontWeight:`700`,letterSpacing:`0.08em`,textTransform:`uppercase`,color:`#94a3b8`,marginBottom:`10px`},children:`Global Footprint`}),(0,x.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`10px`},children:ft.map(e=>(0,x.jsxs)(`div`,{className:`office-card`,children:[(0,x.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,marginBottom:`2px`},children:[(0,x.jsx)(`span`,{style:{fontSize:`18px`,lineHeight:1},children:e.flag}),(0,x.jsx)(`span`,{style:{fontSize:`13.5px`,fontWeight:`700`,color:`#0f172a`},children:e.country})]}),(0,x.jsx)(`div`,{style:{fontSize:`12.5px`,color:`#64748b`,fontWeight:`500`,paddingLeft:`26px`},children:e.city})]},e.country))})]})]}),(0,x.jsx)(`div`,{id:`message-form-panel`,className:`compact-form-card`,children:n?(0,x.jsxs)(`div`,{style:{padding:`40px 10px`,textAlign:`center`},children:[(0,x.jsx)(`div`,{style:{width:`56px`,height:`56px`,borderRadius:`50%`,background:`#dcfce7`,border:`1px solid #bbf7d0`,display:`flex`,alignItems:`center`,justifyContent:`center`,margin:`0 auto 20px`,color:`#15803d`},children:(0,x.jsx)(_e,{size:24,strokeWidth:2.5})}),(0,x.jsx)(`h3`,{style:{fontSize:`20px`,fontWeight:`800`,color:`#0f172a`,marginBottom:`10px`,letterSpacing:`-0.02em`},children:`Submission Received`}),(0,x.jsxs)(`p`,{style:{fontSize:`14px`,lineHeight:1.5,color:`#475569`,maxWidth:`340px`,margin:`0 auto`},children:[`The details for our `,(0,x.jsx)(`strong`,{style:{color:`#2563EB`},children:e.division}),` desk have been locked in. Expect an update within 24 business hours.`]})]}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(`div`,{style:{marginBottom:`14px`},children:[(0,x.jsx)(`h2`,{style:{fontSize:`22px`,fontWeight:800,letterSpacing:`-0.02em`,color:`#0f172a`,margin:`0 0 4px`},children:`Send Us a Message`}),(0,x.jsxs)(`p`,{style:{fontSize:`13px`,color:`#64748b`,margin:0},children:[`Required options are annotated with `,(0,x.jsx)(`span`,{style:{color:`#2563EB`},children:`*`}),`.`]})]}),(0,x.jsx)(`div`,{style:{height:`2px`,background:`linear-gradient(90deg, #2563EB, transparent)`,marginBottom:`20px`}}),(0,x.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),r(!0)},style:{display:`flex`,flexDirection:`column`,gap:`14px`},children:[(0,x.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`14px`},children:[(0,x.jsxs)(`div`,{children:[(0,x.jsxs)(`label`,{className:`form-label`,children:[`Full Name `,(0,x.jsx)(`span`,{style:{color:`#2563EB`},children:`*`})]}),(0,x.jsx)(`input`,{type:`text`,required:!0,className:`contact-input`,value:e.name,onChange:n=>t({...e,name:n.target.value}),placeholder:`Your full name`})]}),(0,x.jsxs)(`div`,{children:[(0,x.jsxs)(`label`,{className:`form-label`,children:[`Work Email `,(0,x.jsx)(`span`,{style:{color:`#2563EB`},children:`*`})]}),(0,x.jsx)(`input`,{type:`email`,required:!0,className:`contact-input`,value:e.email,onChange:n=>t({...e,email:n.target.value}),placeholder:`work@company.com`})]})]}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`label`,{className:`form-label`,children:`Company / Organisation`}),(0,x.jsx)(`input`,{type:`text`,className:`contact-input`,value:e.company,onChange:n=>t({...e,company:n.target.value}),placeholder:`Your organisation name`})]}),(0,x.jsxs)(`div`,{children:[(0,x.jsxs)(`label`,{className:`form-label`,children:[`Area of Corporate Interest `,(0,x.jsx)(`span`,{style:{color:`#2563EB`},children:`*`})]}),(0,x.jsxs)(`select`,{className:`contact-input`,style:{cursor:`pointer`},value:e.division,onChange:n=>t({...e,division:n.target.value}),children:[(0,x.jsx)(`option`,{value:`E-Learning`,children:`E-Learning & Digital Learning Solutions`}),(0,x.jsx)(`option`,{value:`Recruitment`,children:`Recruitment, Staffing & Talent Solutions`}),(0,x.jsx)(`option`,{value:`Financial Consultancy`,children:`Financial Consultancy & Accounting Services`}),(0,x.jsx)(`option`,{value:`General`,children:`General Corporate Enquiry`})]})]}),(0,x.jsxs)(`div`,{children:[(0,x.jsxs)(`label`,{className:`form-label`,children:[`Requirements Blueprint Summary `,(0,x.jsx)(`span`,{style:{color:`#2563EB`},children:`*`})]}),(0,x.jsx)(`textarea`,{rows:`3`,required:!0,className:`contact-input`,style:{resize:`vertical`,minHeight:`75px`},value:e.message,onChange:n=>t({...e,message:n.target.value}),placeholder:`Describe your project scaling specifications...`})]}),(0,x.jsxs)(`button`,{type:`submit`,className:`submit-btn`,style:{marginTop:`4px`},children:[`Submit Request`,(0,x.jsx)(fe,{size:14,strokeWidth:2.5})]})]})]})})]})})]}),(0,x.jsx)(ne,{})]})}function ht(){let[e,t]=(0,b.useState)(null),n={ilt:Ae,vilt:Ke,micro:Je,game:ke,lxp:Ce,pdf:Oe,custom:xe,lms:Pe,strategy:pe},r={"Banking & Financial Services":Me,"Healthcare & Life Sciences":je,"Manufacturing & Engineering":De,"Technology & IT":Ne};return(0,x.jsxs)(`div`,{style:{background:`#0F172A`,color:`#F8FAFC`,fontFamily:`var(--font-family, "Inter", sans-serif)`,minHeight:`100vh`,display:`flex`,flexDirection:`column`,overflowX:`hidden`},children:[(0,x.jsx)(S,{}),(0,x.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
                @keyframes scaleUpBg {
                    from { transform: scale(1.05); opacity: 0; }
                    to { transform: scale(1); opacity: 0.85; }
                }
                @keyframes heroFadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes floatSlow {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(2deg); }
                }
                @keyframes floatMedium {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-25px) rotate(-3deg); }
                }
                @keyframes floatFast {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes bounceSlow {
                    0%, 100% { transform: translateY(0); opacity: 0.6; }
                    50% { transform: translateY(8px); opacity: 1; }
                }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes modalScaleIn {
                    from { opacity: 0; transform: scale(0.96) translateY(20px); }
                    to { opacity: 1; transform: scale(1) translateY(0); }
                }
                
                /* Responsive Grid Config */
                .rec-premium-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
                    gap: 32px;
                    padding: 60px 0;
                }
                @media(max-width: 500px) {
                    .rec-premium-grid {
                        grid-template-columns: 1fr;
                    }
                }
                
                /* Structural Premium Editorial Cards */
                .rec-editorial-card {
                    position: relative;
                    border-radius: 32px;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    overflow: hidden;
                    cursor: pointer;
                    height: 480px;
                    box-sizing: border-box;
                    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .rec-card-image-wrapper {
                    position: relative;
                    width: 100%;
                    height: 200px;
                    overflow: hidden;
                    background: #1F2937;
                }
                .rec-card-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                    opacity: 0.75;
                }
                .rec-editorial-card:hover .rec-card-image {
                    transform: scale(1.08);
                    opacity: 0.9;
                }
                
                .rec-card-image-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to bottom, transparent 40%, #111827 100%);
                }
                .rec-card-light .rec-card-image-overlay {
                    background: linear-gradient(to bottom, transparent 40%, #FFFFFF 100%);
                }

                .rec-card-content {
                    padding: 32px 40px 40px 40px;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    position: relative;
                    z-index: 2;
                }

                .rec-card-texture {
                    position: absolute;
                    inset: 0;
                    opacity: 0.025;
                    pointer-events: none;
                    background-image: radial-gradient(#22D3EE 1px, transparent 1px);
                    background-size: 24px 24px;
                }

                .rec-card-glow-tr {
                    position: absolute;
                    top: -10%;
                    right: -10%;
                    width: 250px;
                    height: 250px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%);
                    filter: blur(40px);
                    pointer-events: none;
                }
                .rec-card-glow-bl {
                    position: absolute;
                    bottom: -10%;
                    left: -10%;
                    width: 250px;
                    height: 250px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%);
                    filter: blur(40px);
                    pointer-events: none;
                }
                
                /* Dark Variant */
                .rec-card-dark {
                    background: #111827;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                }
                .rec-card-dark .rec-title-gradient {
                    background: linear-gradient(90deg, #3B82F6, #06B6D4);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .rec-card-dark .rec-body-desc {
                    color: #CBD5E1;
                }
                .rec-card-dark .rec-feature-chip {
                    background: rgba(59, 130, 246, 0.15);
                    color: #93C5FD;
                }
                .rec-card-dark .rec-card-cta {
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    background: transparent;
                    color: #E2E8F0;
                }

                /* Light Variant */
                .rec-card-light {
                    background: linear-gradient(180deg, #FFFFFF 0%, #FAFCFF 100%);
                    border: 1px solid rgba(15, 23, 42, 0.06);
                }
                .rec-card-light .rec-title-gradient {
                    background: linear-gradient(90deg, #1D4ED8, #0891B2);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .rec-card-light .rec-body-desc {
                    color: #475569;
                }
                .rec-card-light .rec-feature-chip {
                    background: #EFF6FF;
                    color: #1E40AF;
                }
                .rec-card-light .rec-card-cta {
                    border: 1px solid rgba(15, 23, 42, 0.08);
                    background: #FFFFFF;
                    color: #334155;
                }

                .rec-editorial-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 40px 80px -15px rgba(15, 23, 42, 0.3), 0 0 40px rgba(34, 211, 238, 0.05);
                }
                .rec-card-dark:hover {
                    border-color: rgba(34, 211, 238, 0.3);
                }
                .rec-card-light:hover {
                    border-color: rgba(37, 99, 235, 0.25);
                }

                .rec-icon-box {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 56px;
                    height: 56px;
                    border-radius: 16px;
                    background: linear-gradient(145deg, #EFF6FF, #DBEAFE);
                    box-shadow: 0 8px 24px rgba(37, 99, 235, 0.15);
                    color: #1E40AF;
                    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .rec-editorial-card:hover .rec-icon-box {
                    transform: scale(1.05) rotate(5deg);
                }

                .rec-feature-chip {
                    font-size: 12px;
                    font-weight: 600;
                    padding: 6px 14px;
                    border-radius: 99px;
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .rec-editorial-card:hover .rec-feature-chip {
                    background: #2563EB;
                    color: #FFFFFF !important;
                }

                .rec-editorial-card:hover .rec-card-cta {
                    border-color: #2563EB;
                    background: #2563EB;
                    color: #FFFFFF;
                }
                .rec-editorial-card:hover .rec-card-cta-arrow {
                    transform: translateX(12px);
                }

                .rec-stagger-card {
                    opacity: 0;
                    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                
                /* Modal Layer */
                .rec-modal-backdrop {
                    position: fixed;
                    inset: 0;
                    z-index: 9999;
                    background: rgba(15, 23, 42, 0.85);
                    backdrop-filter: blur(16px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 24px;
                    animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
                }
                .rec-modal-window {
                    background: #111827;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 32px;
                    width: 100%;
                    max-width: 960px;
                    max-height: 85vh;
                    overflow-y: auto;
                    position: relative;
                    box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.7);
                    animation: modalScaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
                }

                /* Enhanced Hero UI Layout classes */
                .rec-hero-container {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    position: relative;
                    background: #070F20;
                    overflow: hidden;
                    width: 100%;
                }
                .rec-hero-grid-bg {
                    position: absolute;
                    inset: 0;
                    opacity: 0.04;
                    background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
                    background-size: 40px 40px;
                    pointer-events: none;
                    z-index: 2;
                }
                .rec-hero-glow-tl {
                    position: absolute;
                    top: -20%;
                    left: -10%;
                    width: 600px;
                    height: 600px;
                    background: radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%);
                    filter: blur(80px);
                    pointer-events: none;
                    z-index: 1;
                }
                .rec-hero-glow-br {
                    position: absolute;
                    bottom: -20%;
                    right: -10%;
                    width: 600px;
                    height: 600px;
                    background: radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%);
                    filter: blur(80px);
                    pointer-events: none;
                    z-index: 1;
                }
                .rec-hero-split {
                    display: flex;
                    width: 100%;
                    max-width: 1440px;
                    margin: 0 auto;
                    padding: 120px 60px 60px 60px;
                    position: relative;
                    z-index: 5;
                }
                .rec-hero-left {
                    width: 50%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: center;
                    text-align: left;
                }
                .rec-hero-right {
                    width: 50%;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                @media(max-width: 1024px) {
                    .rec-hero-split {
                        flex-direction: column;
                        padding: 140px 24px 60px 24px;
                        gap: 60px;
                    }
                    .rec-hero-left, .rec-hero-right {
                        width: 100%;
                    }
                    .rec-hero-right {
                        min-height: 400px;
                    }
                }
                .rec-hero-video-wrapper {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    z-index: 0;
                }
                .rec-hero-video {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    animation: scaleUpBg 1.6s cubic-bezier(0.16, 1, 0.3, 1) both;
                }
                .rec-hero-overlay-left {
                    position: absolute;
                    top: 0; left: 0; bottom: 0; width: 60%;
                    background: linear-gradient(90deg, #070F20 0%, rgba(7,15,32,0.92) 50%, rgba(7,15,32,0.4) 100%);
                    z-index: 1;
                    backdrop-filter: blur(4px);
                }
                .rec-hero-overlay-right {
                    position: absolute;
                    top: 0; right: 0; bottom: 0; width: 40%;
                    background: linear-gradient(-90deg, rgba(7,15,32,0.3) 0%, rgba(7,15,32,0.6) 100%);
                    z-index: 1;
                }
                
                /* Animated Graphics Engine Components */
                .rec-floating-card-1 {
                    position: absolute;
                    top: 15%; right: 10%;
                    background: rgba(17, 24, 39, 0.7);
                    border: 1px solid rgba(255,255,255,0.1);
                    backdrop-filter: blur(12px);
                    border-radius: 20px;
                    padding: 16px 20px;
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                    animation: floatSlow 6s ease-in-out infinite;
                }
                .rec-floating-card-2 {
                    position: absolute;
                    bottom: 20%; left: 5%;
                    background: rgba(17, 24, 39, 0.75);
                    border: 1px solid rgba(34, 211, 238, 0.2);
                    backdrop-filter: blur(12px);
                    border-radius: 20px;
                    padding: 18px 22px;
                    box-shadow: 0 25px 50px rgba(0,0,0,0.4);
                    animation: floatMedium 8s ease-in-out infinite;
                }
                .rec-floating-card-3 {
                    position: absolute;
                    top: 45%; right: 5%;
                    background: rgba(17, 24, 39, 0.7);
                    border: 1px solid rgba(37, 99, 235, 0.2);
                    backdrop-filter: blur(12px);
                    border-radius: 50%;
                    width: 64px;
                    height: 64px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #3B82F6;
                    box-shadow: 0 15px 30px rgba(0,0,0,0.3);
                    animation: floatSlow 5s ease-in-out infinite alternate;
                }
                
                /* Interactive Primary/Secondary CTA Buttons */
                .rec-btn-primary {
                    background: linear-gradient(90deg, #2563EB, #06B6D4);
                    color: #FFFFFF;
                    padding: 16px 32px;
                    border-radius: 14px;
                    font-weight: 700;
                    font-size: 15px;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    border: none;
                    cursor: pointer;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    box-shadow: 0 10px 25px rgba(37, 99, 235, 0.25);
                }
                .rec-btn-primary:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 15px 35px rgba(37, 99, 235, 0.4), 0 0 20px rgba(6, 182, 212, 0.3);
                }
                .rec-btn-primary:hover .rec-btn-arrow {
                    transform: translateX(4px);
                }
                .rec-btn-secondary {
                    background: rgba(255, 255, 255, 0.03);
                    color: #FFFFFF;
                    padding: 16px 32px;
                    border-radius: 14px;
                    font-weight: 700;
                    font-size: 15px;
                    display: inline-flex;
                    align-items: center;
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    backdrop-filter: blur(8px);
                    cursor: pointer;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .rec-btn-secondary:hover {
                    background: rgba(255, 255, 255, 0.08);
                    border-color: rgba(255, 255, 255, 0.3);
                    transform: translateY(-3px);
                }
                `}}),(0,x.jsxs)(`main`,{style:{flex:1,position:`relative`},children:[(0,x.jsxs)(`section`,{className:`rec-hero-container`,children:[(0,x.jsx)(`div`,{className:`rec-hero-video-wrapper`,children:(0,x.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:`rec-hero-video`,children:(0,x.jsx)(`source`,{src:`/assets/images/about/e-learning.mp4`,type:`video/mp4`})})}),(0,x.jsx)(`div`,{className:`rec-hero-overlay-left`}),(0,x.jsx)(`div`,{className:`rec-hero-overlay-right`}),(0,x.jsx)(`div`,{className:`rec-hero-grid-bg`}),(0,x.jsx)(`div`,{className:`rec-hero-glow-tl`}),(0,x.jsx)(`div`,{className:`rec-hero-glow-br`}),(0,x.jsxs)(`div`,{className:`rec-hero-split`,children:[(0,x.jsxs)(`div`,{className:`rec-hero-left`,style:{animation:`heroFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both`},children:[(0,x.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:8,fontSize:`11px`,fontWeight:800,letterSpacing:`0.15em`,color:`#F8FAFC`,background:`rgba(255, 255, 255, 0.04)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(12px)`,borderRadius:99,padding:`6px 16px`,marginBottom:24,boxShadow:`0 4px 15px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)`},children:[(0,x.jsx)(Be,{size:13,style:{color:`#06B6D4`}}),(0,x.jsx)(`span`,{children:`GLOBAL DIGITAL EDUCATION FRAMEWORKS`})]}),(0,x.jsxs)(`h1`,{style:{fontSize:`clamp(46px, 5vw, 72px)`,fontWeight:800,color:`#F8FAFC`,letterSpacing:`-0.03em`,margin:`0 0 28px 0`,lineHeight:1.1},children:[`Transform Enterprise `,(0,x.jsx)(`br`,{}),(0,x.jsx)(`span`,{style:{background:`linear-gradient(90deg, #2563EB, #06B6D4)`,WebkitBackgroundClip:`text`,WebkitTextFillColor:`transparent`,display:`inline-block`},children:`Learning with`}),` `,(0,x.jsx)(`br`,{}),(0,x.jsx)(`span`,{style:{fontSize:`0.85em`,fontWeight:700,opacity:.95},children:`Digital Intelligence`})]}),(0,x.jsx)(`p`,{style:{fontSize:`17px`,color:`#CBD5E1`,lineHeight:1.6,marginBottom:40,fontWeight:400,maxWidth:`620px`},children:`Deliver enterprise-grade digital learning ecosystems, virtual classrooms, and scalable workforce training that drive measurable business outcomes.`}),(0,x.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,flexWrap:`wrap`,marginBottom:`36px`},children:[(0,x.jsxs)(`button`,{className:`rec-btn-primary`,onClick:()=>{let e=document.getElementById(`frameworks-grid`);e&&e.scrollIntoView({behavior:`smooth`})},children:[(0,x.jsx)(`span`,{children:`Explore Solutions`}),(0,x.jsx)(fe,{size:16,className:`rec-btn-arrow`,style:{transition:`transform 0.3s ease`}})]}),(0,x.jsx)(`button`,{className:`rec-btn-secondary`,onClick:()=>{window.scrollTo({top:document.body.scrollHeight,behavior:`smooth`})},children:(0,x.jsx)(`span`,{children:`Schedule Consultation`})})]}),(0,x.jsxs)(`div`,{style:{display:`flex`,gap:`32px`,borderTop:`1px solid rgba(255,255,255,0.08)`,width:`100%`,maxWidth:`620px`,paddingTop:`32px`},children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{style:{fontSize:`24px`,fontWeight:800,color:`#FFFFFF`},children:`25+`}),(0,x.jsx)(`div`,{style:{fontSize:`12px`,color:`#94A3B8`,marginTop:`2px`},children:`Years Experience`})]}),(0,x.jsx)(`div`,{style:{width:`1px`,background:`rgba(255,255,255,0.08)`,alignSelf:`stretch`}}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{style:{fontSize:`24px`,fontWeight:800,color:`#06B6D4`},children:`120+`}),(0,x.jsx)(`div`,{style:{fontSize:`12px`,color:`#94A3B8`,marginTop:`2px`},children:`Enterprise Clients`})]}),(0,x.jsx)(`div`,{style:{width:`1px`,background:`rgba(255,255,255,0.08)`,alignSelf:`stretch`}}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{style:{fontSize:`24px`,fontWeight:800,color:`#2563EB`},children:`500K+`}),(0,x.jsx)(`div`,{style:{fontSize:`12px`,color:`#94A3B8`,marginTop:`2px`},children:`Learners Enabled`})]}),(0,x.jsx)(`div`,{style:{width:`1px`,background:`rgba(255,255,255,0.08)`,alignSelf:`stretch`}}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{style:{fontSize:`24px`,fontWeight:800,color:`#FFFFFF`},children:`40+`}),(0,x.jsx)(`div`,{style:{fontSize:`12px`,color:`#94A3B8`,marginTop:`2px`},children:`Countries`})]})]})]}),(0,x.jsxs)(`div`,{className:`rec-hero-right`,children:[(0,x.jsxs)(`div`,{className:`rec-floating-card-1`,children:[(0,x.jsx)(ge,{size:24,style:{color:`#06B6D4`}}),(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`},children:[(0,x.jsx)(`span`,{style:{fontSize:`14px`,fontWeight:700,color:`#FFF`},children:`94% Retention`}),(0,x.jsx)(`span`,{style:{fontSize:`11px`,color:`#94A3B8`},children:`Microlearning Impact`})]})]}),(0,x.jsxs)(`div`,{className:`rec-floating-card-2`,children:[(0,x.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`10px`,marginBottom:`6px`},children:[(0,x.jsx)(`span`,{style:{width:`8px`,height:`8px`,borderRadius:`50%`,background:`#10B981`}}),(0,x.jsx)(`span`,{style:{fontSize:`12px`,fontWeight:600,color:`#94A3B8`,letterSpacing:`0.05em`},children:`LMS PLATFORM ACTIVE`})]}),(0,x.jsx)(`span`,{style:{fontSize:`16px`,fontWeight:800,color:`#FFF`},children:`Architecture Compliant`})]}),(0,x.jsx)(`div`,{className:`rec-floating-card-3`,children:(0,x.jsx)(Se,{size:28})})]})]}),(0,x.jsxs)(`div`,{style:{position:`absolute`,bottom:`32px`,left:`50%`,transform:`translateX(-50%)`,zIndex:10,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`8px`,cursor:`pointer`},onClick:()=>{let e=document.getElementById(`frameworks-grid`);e&&e.scrollIntoView({behavior:`smooth`})},children:[(0,x.jsx)(`span`,{style:{fontSize:`11px`,fontWeight:700,letterSpacing:`0.15em`,color:`#94A3B8`,textTransform:`uppercase`},children:`Explore Services`}),(0,x.jsx)(ve,{size:16,style:{color:`#06B6D4`,animation:`bounceSlow 2s ease-in-out infinite`}})]})]}),(0,x.jsxs)(`section`,{id:`frameworks-grid`,style:{padding:`120px 24px 100px 24px`,maxWidth:`1280px`,margin:`0 auto`,background:`transparent`,position:`relative`},children:[(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`,marginBottom:`80px`,borderLeft:`3px solid #22D3EE`,paddingLeft:`24px`},children:[(0,x.jsx)(`span`,{style:{fontSize:`11px`,fontWeight:800,letterSpacing:`0.2em`,color:`#22D3EE`,textTransform:`uppercase`},children:`ENTERPRISE SKILL MATURITY`}),(0,x.jsx)(`h2`,{style:{fontSize:`clamp(32px, 4.5vw, 48px)`,fontWeight:800,color:`#FFFFFF`,letterSpacing:`-0.02em`,margin:`4px 0`},children:`Learning Frameworks Designed for Modern Enterprises`}),(0,x.jsx)(`p`,{style:{fontSize:`18px`,color:`#94A3B8`,maxWidth:`650px`,lineHeight:1.6,margin:0,fontWeight:400},children:`Delivering end-to-end learning deployment technologies and bespoke structural compliance modules across global industries.`})]}),(0,x.jsx)(`div`,{className:`rec-premium-grid`,children:[{id:`ilt`,title:`Instructor-Led Training (ILT)`,iconName:`ilt`,imageSrc:`/assets/images/about/card6.png`,shortDesc:`Immersive learning designed and facilitated by seasoned SMEs to bridge critical capability gaps in modern working environments.`,longDesc:`Instructor-Led Training remains one of the most powerful modalities for immersive, deep-dive learning. Our ILT programmes are expertly designed and facilitated by seasoned subject matter experts and certified trainers who bring real-world experience into the classroom.`,chips:[`Expert Facilitated`,`On-Premises`,`Competency Mapping`,`Action Workbooks`],points:[`Customised curriculum design aligned with business objectives and learning outcomes`,`In-person training delivery at client premises, training centres, or conference venues`,`Industry-specific programmes across leadership, technical, compliance, soft skills, and domain knowledge`,`Pre- and post-training assessments to measure knowledge gain and ROI`,`Comprehensive facilitator guides, participant workbooks, and support materials`,`Training needs analysis (TNA) to identify skill gaps and recommend optimal programmes`],benefits:[`Maximized knowledge retention`,`Direct real-world cohort communication`,`Immediate competency feedback`,`Tailored learning loops`],industries:[`Banking & Financial Services`,`Healthcare & Life Sciences`,`Manufacturing & Engineering`]},{id:`vilt`,title:`Virtual Instructor-Led Training (VILT)`,iconName:`vilt`,imageSrc:`/assets/images/about/card1.png`,shortDesc:`Rich, highly-interactive classroom environments delivered entirely through leading live digital collaboration systems.`,longDesc:`Our VILT solutions bring the richness of classroom learning to the digital environment. Leveraging industry-leading platforms such as Zoom, Microsoft Teams, Webex, and Adobe Connect, we deliver interactive, high-engagement virtual training experiences that rival in-person sessions.`,chips:[`Live Synchronous`,`Breakout Management`,`Global Distribution`,`Recorded Assets`],points:[`Live, synchronous virtual training sessions hosted by expert facilitators`,`Interactive features including polls, breakout rooms, whiteboards, and Q&A`,`Cohort-based learning that fosters collaboration and peer engagement`,`Hybrid VILT models combining recorded modules with live facilitated sessions`,`Session recordings, transcripts, and post-session learning materials`,`Multi-timezone delivery to support globally distributed teams`,`Technical support and participant management throughout training delivery`],benefits:[`Eliminated organizational travel overhead`,`Scalable worldwide deployment`,`Interactive social touchpoints`,`Flexible asynchronous hybrid additions`],industries:[`Banking & Financial Services`,`Technology & IT`,`Healthcare & Life Sciences`]},{id:`micro`,title:`Microlearning`,iconName:`micro`,imageSrc:`/assets/images/about/card6.png`,shortDesc:`Bite-sized, focused content engineered for high retention and seamless consumption inside busy modern workflows.`,longDesc:`Attention spans are shrinking and workloads are increasing. Microlearning delivers focused, bite-sized learning content designed to be consumed in 3–7 minutes — perfectly suited to the modern, on-the-go learner. Our microlearning solutions drive knowledge retention through repetition, relevance, and rapid accessibility.`,chips:[`Mobile-First`,`Workflow-Embedded`,`Rapid Turnaround`,`Spaced Repetition`],points:[`Short-form video modules, animated explainers, and knowledge snippets`,`Topic-specific skill pills that target individual learning objectives`,`Mobile-first content optimised for smartphones and tablets`,`Spaced repetition tools and push notification-based delivery`,`Integrated quizzes and reinforcement activities for knowledge retention`,`Just-in-time learning resources embedded within workflows and tools`,`Rapid development with turnaround times of days, not months`],benefits:[`Frictionless employee access`,`High engagement curves`,`Direct just-in-time support`,`Accelerated asset iteration cycles`],industries:[`Technology & IT`,`Manufacturing & Engineering`,`Banking & Financial Services`]},{id:`game`,title:`Gamification`,iconName:`game`,imageSrc:`/assets/images/about/card6.png`,shortDesc:`Behavioral psychology meets interactive technology to turn training into an engaging, gamified competitive experience.`,longDesc:`We harness the power of game mechanics to transform learning from a passive obligation into an energising experience. Our gamification frameworks apply behavioural psychology, motivational design, and technology to dramatically improve learner engagement, completion rates, and knowledge retention.`,chips:[`Behavioral Quests`,`Real-Time Leaderboards`,`Custom Challenges`,`Rewards Alignment`],points:[`Points, badges, leaderboards, and rewards systems integrated into learning journeys`,`Narrative-driven learning quests and scenario-based challenges`,`Timed challenges, streak systems, and level progression structures`,`Team-based competitions and collaborative missions`,`Custom gamified assessments and knowledge-check games`,`Real-time dashboards tracking learner progress, scores, and achievements`,`Enterprise-grade gamification platforms compatible with existing LMS infrastructure`],benefits:[`Dramatically elevated completion rates`,`Active self-motivated progression`,`Healthy collaborative competition`,`Deep cognitive retention`],industries:[`Technology & IT`,`Banking & Financial Services`,`Healthcare & Life Sciences`]},{id:`lxp`,title:`Learning Experience Platforms (LXP)`,iconName:`lxp`,imageSrc:`/assets/images/about/card6.png`,shortDesc:`Consultation and deployment of modern personalized, AI-driven, and socially-collaborative corporate learning platforms.`,longDesc:`Moving beyond traditional Learning Management Systems, our LXP solutions place the learner at the centre, offering personalised, AI-driven, and socially collaborative learning environments. We help organisations select, configure, and implement the right LXP to drive a culture of continuous learning.`,chips:[`AI Customizations`,`Social Learning Hubs`,`System Integration`,`Dynamic Metrics`],points:[`Advisory and consulting on LXP selection (Degreed, EdCast, Cornerstone, 360Learning, and more)`,`Platform implementation, configuration, and integration with existing HR tech stack`,`AI-powered content recommendations based on learner role, history, and goals`,`Curated content libraries and third-party content aggregation (LinkedIn Learning, Coursera, Udemy)`,`Social learning features including user-generated content, forums, and peer coaching`,`Skills gap mapping and career pathing tools integrated within the platform`,`Comprehensive analytics dashboards for learners, managers, and L&D teams`,`Ongoing platform support, user training, and performance optimisation`],benefits:[`Self-directed talent continuous education`,`Centralized multi-source content integration`,`Skill gap insight reporting`,`Enhanced digital employee branding`],industries:[`Technology & IT`,`Banking & Financial Services`,`Healthcare & Life Sciences`]},{id:`pdf`,title:`Interactive PDFs`,iconName:`pdf`,imageSrc:`/assets/images/about/card6.png`,shortDesc:`Beautifully designed, self-contained interactive media documents that deliver deep learning experiences without an LMS.`,longDesc:`Interactive PDFs represent a powerful, cost-effective format for delivering rich, self-paced learning content without requiring an LMS. JF Knowledge Centre's design team creates visually stunning, highly functional interactive PDFs that feel more like digital experiences than static documents.`,chips:[`Zero LMS Overhead`,`Embedded Multimedia`,`Offline Functional`,`Fillable Forms`],points:[`Clickable navigation, hyperlinks, and table of contents for seamless reading`,`Embedded multimedia — video, audio, and animated infographics`,`Fillable form fields for self-assessments, reflections, and action planning`,`Pop-up glossary definitions, expandable content sections, and hover tooltips`,`Brand-aligned design with custom typography, icons, and visual elements`,`Universal accessibility — usable on all devices without internet connectivity`,`Ideal for compliance documentation, onboarding guides, product training, and SOPs`],benefits:[`Low cost, high-speed development`,`Highly portable self-contained layout`,`Universal offline cross-device execution`,`Zero integration complexities`],industries:[`Manufacturing & Engineering`,`Healthcare & Life Sciences`,`Banking & Financial Services`]},{id:`custom`,title:`Custom eLearning Development (SCORM / xAPI)`,iconName:`custom`,imageSrc:`/assets/images/about/card6.png`,shortDesc:`End-to-end storyboard-to-deployment engineering of compliance-focused, rich interactive digital courses.`,longDesc:`Our custom eLearning development team brings together instructional designers, visual artists, developers, and voice artists to craft fully bespoke digital learning modules that align with your brand, content, and learner needs.`,chips:[`SCORM/xAPI Compliant`,`Storyline & Rise Expert`,`Branching Simulations`,`WCAG 2.1 Accessible`],points:[`End-to-end development from storyboard to final delivery`,`SCORM 1.2, SCORM 2004, xAPI (Tin Can), and AICC compliant outputs`,`Authoring tool expertise: Articulate Storyline, Rise 360, Adobe Captivate, Lectora`,`Scenario-based and branching simulations for real-world decision making`,`Software simulations and system walkthroughs (ERP, CRM, proprietary tools)`,`Multilingual development and voice-over in 30+ languages`,`Accessibility compliance: WCAG 2.1 AA standards`],benefits:[`Exact alignment with corporate workflows`,`Traceable, granular learner analytics`,`Global localization potential`,`Inclusive, standard-compliant assets`],industries:[`Healthcare & Life Sciences`,`Technology & IT`,`Manufacturing & Engineering`]},{id:`lms`,title:`Learning Management System (LMS) Services`,iconName:`lms`,imageSrc:`/assets/images/about/card2.png`,shortDesc:`Strategic architecture alignment, implementation, and integration of system portals to track mandatory qualifications.`,longDesc:`Comprehensive architecture alignment and systems management strategies engineered to deploy, measure, and scale enterprise qualification structures seamlessly across modern operating frameworks.`,chips:[`Platform Consulting`,`Platform Integrations`,`Compliance Automated`,`LMS Administration`],points:[`LMS selection consulting and procurement support`,`Implementation, configuration, and content migration`,`Platform integration with HRMS, payroll, and talent management tools`,`Custom reporting and analytics dashboards`,`User administration, LMS management, and helpdesk support`,`Compliance tracking and mandatory training workflows`],benefits:[`Centralized management oversight`,`Automated regulatory reporting logs`,`Consolidated software spending`,`Minimized internal admin burden`],industries:[`Banking & Financial Services`,`Healthcare & Life Sciences`,`Manufacturing & Engineering`]},{id:`strategy`,title:`Content Strategy & Instructional Design`,iconName:`strategy`,imageSrc:`/assets/images/about/card6.png`,shortDesc:`High-level diagnostic blueprinting mapping structural business targets directly into targeted training journeys.`,longDesc:`Structuring deep core data alignment blueprints to safely bridge structural competence gaps, optimizing learning acquisition speed and modern long-term organizational knowledge retention rates.`,chips:[`Training Needs Audits`,`Path Mapping`,`Blended Architectures`,`Competency Assessments`],points:[`Comprehensive Training Needs Analysis (TNA) and skills gap assessments`,`Learning architecture and curriculum mapping`,`Blended learning journey design combining multiple modalities`,`Assessment design: formative, summative, and competency-based evaluations`,`Content curation, licensing, and third-party content sourcing`],benefits:[`Strict alignment to strategic goals`,`Optimized content production pathways`,`Clear metrics of training ROI`,`Accelerated path-to-performance times`],industries:[`Banking & Financial Services`,`Healthcare & Life Sciences`,`Technology & IT`]}].map((e,r)=>{let i=r%2==0,a=n[e.iconName]||Ae,o=String(r+1).padStart(2,`0`),s={animationDelay:`${r*80}ms`};return(0,x.jsxs)(`div`,{className:`rec-editorial-card ${i?`rec-card-dark`:`rec-card-light`} rec-stagger-card`,style:s,onClick:()=>t(e),children:[(0,x.jsxs)(`div`,{className:`rec-card-image-wrapper`,children:[(0,x.jsx)(`img`,{src:e.imageSrc||`/assets/images/services/placeholder.jpg`,alt:e.title,className:`rec-card-image`}),(0,x.jsx)(`div`,{className:`rec-card-image-overlay`}),(0,x.jsx)(`div`,{style:{position:`absolute`,top:`24px`,left:`24px`,zIndex:3},children:(0,x.jsx)(`div`,{className:`rec-icon-box`,children:(0,x.jsx)(a,{size:24,strokeWidth:1.5})})})]}),(0,x.jsxs)(`div`,{className:`rec-card-content`,children:[(0,x.jsx)(`div`,{className:`rec-card-texture`}),(0,x.jsx)(`div`,{className:`rec-card-glow-tr`}),(0,x.jsx)(`div`,{className:`rec-card-glow-bl`}),(0,x.jsx)(`div`,{style:{position:`absolute`,top:0,left:0,width:`4px`,height:`40px`,background:`linear-gradient(180deg, #2563EB, #06B6D4)`}}),(0,x.jsx)(`div`,{style:{position:`absolute`,bottom:`80px`,right:`40px`,fontSize:`120px`,fontWeight:900,opacity:.03,pointerEvents:`none`,userSelect:`none`,color:`#3B82F6`,lineHeight:1},children:o}),(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`flex-start`,width:`100%`},children:[(0,x.jsx)(`div`,{style:{height:`76px`,marginBottom:`14px`,overflow:`hidden`},children:(0,x.jsx)(`h3`,{className:`rec-title-gradient`,style:{fontSize:`26px`,fontWeight:800,lineHeight:1.2,margin:0,letterSpacing:`-0.02em`,display:`-webkit-box`,WebkitLineClamp:2,WebkitBoxOrient:`vertical`,overflow:`hidden`},children:e.title})}),(0,x.jsx)(`div`,{style:{height:`90px`,overflow:`hidden`,marginBottom:`24px`},children:(0,x.jsx)(`p`,{className:`rec-body-desc`,style:{fontSize:`14px`,lineHeight:1.7,margin:0,display:`-webkit-box`,WebkitLineClamp:4,WebkitBoxOrient:`vertical`,overflow:`hidden`},children:e.shortDesc})}),(0,x.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`6px`,alignContent:`flex-start`},children:e.chips&&e.chips.slice(0,3).map((e,t)=>(0,x.jsx)(`span`,{className:`rec-feature-chip`,children:e},t))})]})]})]},r)})}),(0,x.jsxs)(`div`,{style:{marginTop:`100px`},children:[(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`,marginBottom:`48px`,borderLeft:`3px solid #22D3EE`,paddingLeft:`24px`},children:[(0,x.jsx)(`span`,{style:{fontSize:`11px`,fontWeight:800,letterSpacing:`0.2em`,color:`#22D3EE`,textTransform:`uppercase`},children:`GLOBAL FOOTPRINT`}),(0,x.jsx)(`h2`,{style:{fontSize:`clamp(32px, 4.5vw, 42px)`,fontWeight:800,color:`#FFFFFF`,letterSpacing:`-0.02em`,margin:0},children:`Key Verticals & Regulatory Domains Served`})]}),(0,x.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(280px, 1fr))`,gap:`32px`},children:[`Banking & Financial Services`,`Healthcare & Life Sciences`,`Manufacturing & Engineering`,`Retail & FMCG`,`Technology & IT`,`Oil & Gas`,`Hospitality & Travel`,`Government & Public Sector`,`Education & Professional Services`].map((e,t)=>(0,x.jsx)(`div`,{style:{background:`#111827`,border:`1px solid rgba(255, 255, 255, 0.05)`,borderRadius:`24px`,padding:`40px`,transition:`all 0.4s cubic-bezier(0.16, 1, 0.3, 1)`},onMouseEnter:e=>{e.currentTarget.style.transform=`translateY(-6px)`,e.currentTarget.style.borderColor=`rgba(34, 211, 238, 0.3)`},onMouseLeave:e=>{e.currentTarget.style.transform=`translateY(0)`,e.currentTarget.style.borderColor=`rgba(255, 255, 255, 0.05)`},children:(0,x.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,x.jsx)(`div`,{style:{width:`40px`,height:`40px`,borderRadius:`10px`,background:`rgba(34, 211, 238, 0.08)`,color:`#22D3EE`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0},children:(0,x.jsx)(r[e]||Ae,{size:20,strokeWidth:1.5})}),(0,x.jsx)(`h3`,{style:{fontSize:`16px`,fontWeight:700,color:`#FFFFFF`,margin:0},children:e})]})},t))})]}),(0,x.jsxs)(`div`,{style:{marginTop:`80px`,background:`linear-gradient(180deg, #111827, rgba(17, 24, 39, 0.4))`,border:`1px solid rgba(255, 255, 255, 0.06)`,borderRadius:`32px`,padding:`56px 40px`,display:`flex`,gap:`32px`,alignItems:`center`,textAlign:`left`},children:[(0,x.jsx)(`div`,{style:{minWidth:`64px`,height:`64px`,borderRadius:`50%`,background:`rgba(34, 211, 238, 0.08)`,color:`#22D3EE`,display:`flex`,alignItems:`center`,justifyContent:`center`,border:`1px solid rgba(34, 211, 238, 0.2)`,flexShrink:0},children:(0,x.jsx)(Re,{size:28})}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h3`,{style:{fontSize:`22px`,fontWeight:800,color:`#FFFFFF`,marginBottom:`8px`,letterSpacing:`-0.01em`},children:`Our Learning Promise & Competency Vetting`}),(0,x.jsx)(`p`,{style:{fontSize:`15px`,color:`#94A3B8`,lineHeight:1.7,margin:0},children:`We don't just supply courses — we deploy institutional transformation pipelines. Every digital program we design is optimized to match strict compliance criteria, global translation requirements, and long-term organizational knowledge metrics.`})]})]})]}),(0,x.jsx)(ne,{})]}),e&&(0,x.jsx)(`div`,{className:`rec-modal-backdrop`,onClick:()=>t(null),children:(0,x.jsxs)(`div`,{className:`rec-modal-window`,onClick:e=>e.stopPropagation(),children:[(0,x.jsxs)(`div`,{style:{position:`sticky`,top:0,background:`#111827`,display:`flex`,justifyContent:`space-between`,alignItems:`center`,padding:`28px 48px`,borderBottom:`1px solid rgba(255, 255, 255, 0.08)`,zIndex:10},children:[(0,x.jsx)(`h2`,{style:{fontSize:`26px`,fontWeight:800,color:`#FFFFFF`,letterSpacing:`-0.02em`,margin:0},children:e.title}),(0,x.jsx)(`button`,{onClick:()=>t(null),style:{background:`rgba(255,255,255,0.04)`,border:`1px solid rgba(255,255,255,0.08)`,borderRadius:`50%`,width:`44px`,height:`44px`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`#94A3B8`,cursor:`pointer`,transition:`all 0.2s ease`},onMouseEnter:e=>e.currentTarget.style.color=`#FFFFFF`,onMouseLeave:e=>e.currentTarget.style.color=`#94A3B8`,children:(0,x.jsx)(qe,{size:20})})]}),(0,x.jsxs)(`div`,{style:{padding:`48px`},children:[(0,x.jsxs)(`div`,{style:{marginBottom:`40px`},children:[(0,x.jsx)(`h4`,{style:{fontSize:`11px`,fontWeight:800,textTransform:`uppercase`,letterSpacing:`0.15em`,color:`#22D3EE`,marginBottom:`12px`},children:`Executive Overview`}),(0,x.jsx)(`p`,{style:{fontSize:`16px`,color:`#E2E8F0`,lineHeight:1.7,margin:0},children:e.longDesc})]}),(0,x.jsx)(`hr`,{style:{border:0,height:`1px`,background:`rgba(255,255,255,0.08)`,marginBottom:`40px`}}),(0,x.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(300px, 1fr))`,gap:`48px`,alignItems:`start`},children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h4`,{style:{fontSize:`13px`,fontWeight:800,textTransform:`uppercase`,letterSpacing:`0.05em`,color:`#FFFFFF`,marginBottom:`24px`},children:`Key Pillars & Methodology`}),(0,x.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:e.points.map((e,t)=>(0,x.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:`14px`},children:[(0,x.jsx)(`span`,{style:{display:`inline-flex`,alignItems:`center`,justifyContent:`center`,width:`22px`,height:`22px`,borderRadius:`50%`,background:`rgba(34, 211, 238, 0.1)`,color:`#22D3EE`,flexShrink:0,marginTop:`2px`},children:(0,x.jsx)(_e,{size:12,strokeWidth:3})}),(0,x.jsx)(`span`,{style:{fontSize:`14.5px`,color:`#94A3B8`,lineHeight:1.5},children:e})]},t))})]}),(0,x.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`36px`},children:(0,x.jsxs)(`div`,{style:{background:`rgba(255,255,255,0.02)`,border:`1px solid rgba(255,255,255,0.04)`,borderRadius:`20px`,padding:`32px`},children:[(0,x.jsx)(`h4`,{style:{fontSize:`12px`,fontWeight:800,textTransform:`uppercase`,letterSpacing:`0.05em`,color:`#FFFFFF`,marginBottom:`20px`},children:`Strategic Value Added`}),(0,x.jsx)(`ul`,{style:{padding:0,margin:0,listStyle:`none`,display:`flex`,flexDirection:`column`,gap:`12px`},children:e.benefits.map((e,t)=>(0,x.jsxs)(`li`,{style:{display:`flex`,alignItems:`flex-start`,gap:`14px`},children:[(0,x.jsx)(`span`,{style:{display:`inline-flex`,alignItems:`center`,justifyContent:`center`,width:`22px`,height:`22px`,borderRadius:`50%`,background:`rgba(34, 211, 238, 0.1)`,color:`#22D3EE`,flexShrink:0,marginTop:`2px`},children:(0,x.jsx)(_e,{size:12,strokeWidth:3})}),(0,x.jsx)(`span`,{style:{fontSize:`14.5px`,color:`#94A3B8`,lineHeight:1.5},children:e})]},t))})]})})]})]})]})})]})}function k(){let[e,t]=(0,b.useState)(null),n={permanent:Ue,contract:Ge,augmentation:Ce,executive:we,managed:Pe},r={"Banking & Finance":Me,"Healthcare Systems":je,"Enterprise Manufacturing":De,"Technology & SaaS":Ne,"Education Holdings":Ae};return(0,x.jsxs)(`div`,{style:{background:`#070F20`,color:`#F8FAFC`,fontFamily:`var(--font-family, "Inter", sans-serif)`,minHeight:`100vh`,display:`flex`,flexDirection:`column`,overflowX:`hidden`},children:[(0,x.jsx)(S,{}),(0,x.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
                @keyframes scaleUpBg {
                    from { transform: scale(1.05); opacity: 0; }
                    to { transform: scale(1); opacity: 0.85; }
                }
                @keyframes heroFadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes floatSlow {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(2deg); }
                }
                @keyframes floatMedium {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-25px) rotate(-3deg); }
                }
                @keyframes floatFast {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes bounceSlow {
                    0%, 100% { transform: translateY(0); opacity: 0.6; }
                    50% { transform: translateY(8px); opacity: 1; }
                }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes modalScaleIn {
                    from { opacity: 0; transform: scale(0.96) translateY(20px); }
                    to { opacity: 1; transform: scale(1) translateY(0); }
                }
                
                /* Responsive Grid Config */
                .rec-premium-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
                    gap: 32px;
                    padding: 60px 0;
                }
                @media(max-width: 500px) {
                    .rec-premium-grid {
                        grid-template-columns: 1fr;
                    }
                }
                
                /* Structural Premium Editorial Cards */
                .rec-editorial-card {
                    position: relative;
                    border-radius: 32px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    overflow: hidden;
                    cursor: pointer;
                    height: 640px;
                    box-sizing: border-box;
                    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .rec-card-image-wrapper {
                    position: relative;
                    width: 100%;
                    height: 200px;
                    overflow: hidden;
                    background: #455c7eff;
                }
                .rec-card-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                    opacity: 0.55;
                }
                .rec-editorial-card:hover .rec-card-image {
                    transform: scale(1.08);
                    opacity: 0.75;
                }
                
                .rec-card-image-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to bottom, transparent 40%, #2f4166ff 100%);
                }
                .rec-card-light .rec-card-image-overlay {
                    background: linear-gradient(to bottom, transparent 40%, #FFFFFF 100%);
                }

                .rec-card-content {
                    padding: 32px 40px 40px 40px;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    position: relative;
                    z-index: 2;
                }

                .rec-card-texture {
                    position: absolute;
                    inset: 0;
                    opacity: 0.025;
                    pointer-events: none;
                    background-image: radial-gradient(#22D3EE 1px, transparent 1px);
                    background-size: 24px 24px;
                }

                .rec-card-glow-tr {
                    position: absolute;
                    top: -10%;
                    right: -10%;
                    width: 250px;
                    height: 250px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%);
                    filter: blur(40px);
                    pointer-events: none;
                }
                .rec-card-glow-bl {
                    position: absolute;
                    bottom: -10%;
                    left: -10%;
                    width: 250px;
                    height: 250px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%);
                    filter: blur(40px);
                    pointer-events: none;
                }
                
                /* Dark Variant */
                .rec-card-dark {
                    background: #111827;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                }
                .rec-card-dark .rec-title-gradient {
                    background: linear-gradient(90deg, #3B82F6, #06B6D4);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .rec-card-dark .rec-body-desc {
                    color: #CBD5E1;
                }
                .rec-card-dark .rec-feature-chip {
                    background: rgba(59, 130, 246, 0.15);
                    color: #93C5FD;
                }
                .rec-card-dark .rec-card-cta {
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    background: transparent;
                    color: #E2E8F0;
                }

                /* Light Variant */
                .rec-card-light {
                    background: linear-gradient(180deg, #FFFFFF 0%, #FAFCFF 100%);
                    border: 1px solid rgba(15, 23, 42, 0.06);
                }
                .rec-card-light .rec-title-gradient {
                    background: linear-gradient(90deg, #1D4ED8, #0891B2);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .rec-card-light .rec-body-desc {
                    color: #475569;
                }
                .rec-card-light .rec-feature-chip {
                    background: #EFF6FF;
                    color: #1E40AF;
                }
                .rec-card-light .rec-card-cta {
                    border: 1px solid rgba(15, 23, 42, 0.08);
                    background: #FFFFFF;
                    color: #334155;
                }

                .rec-editorial-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 40px 80px -15px rgba(15, 23, 42, 0.3), 0 0 40px rgba(34, 211, 238, 0.05);
                }
                .rec-card-dark:hover {
                    border-color: rgba(34, 211, 238, 0.3);
                }
                .rec-card-light:hover {
                    border-color: rgba(37, 99, 235, 0.25);
                }

                .rec-icon-box {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 56px;
                    height: 56px;
                    border-radius: 16px;
                    background: linear-gradient(145deg, #EFF6FF, #DBEAFE);
                    box-shadow: 0 8px 24px rgba(37, 99, 235, 0.15);
                    color: #1E40AF;
                    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .rec-editorial-card:hover .rec-icon-box {
                    transform: scale(1.05) rotate(5deg);
                }

                .rec-feature-chip {
                    font-size: 12px;
                    font-weight: 600;
                    padding: 6px 14px;
                    border-radius: 99px;
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .rec-editorial-card:hover .rec-feature-chip {
                    background: #2563EB;
                    color: #FFFFFF !important;
                }

                .rec-editorial-card:hover .rec-card-cta {
                    border-color: #2563EB;
                    background: #2563EB;
                    color: #FFFFFF;
                }
                .rec-editorial-card:hover .rec-card-cta-arrow {
                    transform: translateX(12px);
                }

                .rec-stagger-card {
                    opacity: 0;
                    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }

                /* Enhanced Hero UI Layout classes */
                .rec-hero-container {
                    min-height: 90vh;
                    display: flex;
                    align-items: center;
                    position: relative;
                    background: #070F20;
                    overflow: hidden;
                    width: 100%;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
                }
                .rec-hero-grid-bg {
                    position: absolute;
                    inset: 0;
                    opacity: 0.04;
                    background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
                    background-size: 40px 40px;
                    pointer-events: none;
                    z-index: 2;
                }
                .rec-hero-glow-tl {
                    position: absolute;
                    top: -20%;
                    left: -10%;
                    width: 600px;
                    height: 600px;
                    background: radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%);
                    filter: blur(80px);
                    pointer-events: none;
                    z-index: 1;
                }
                .rec-hero-glow-br {
                    position: absolute;
                    bottom: -20%;
                    right: -10%;
                    width: 600px;
                    height: 600px;
                    background: radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%);
                    filter: blur(80px);
                    pointer-events: none;
                    z-index: 1;
                }
                .rec-hero-split {
                    display: flex;
                    width: 100%;
                    max-width: 1440px;
                    margin: 0 auto;
                    padding: 120px 60px 60px 60px;
                    position: relative;
                    z-index: 5;
                }
                .rec-hero-left {
                    width: 50%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: center;
                    text-align: left;
                    animation: heroFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
                }
                .rec-hero-right {
                    width: 50%;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                @media(max-width: 1024px) {
                    .rec-hero-split {
                        flex-direction: column;
                        padding: 140px 24px 60px 24px;
                        gap: 60px;
                    }
                    .rec-hero-left, .rec-hero-right {
                        width: 100%;
                    }
                    .rec-hero-right {
                        min-height: 400px;
                    }
                }
                .rec-hero-video-wrapper {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    z-index: 0;
                }
                .rec-hero-video {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    animation: scaleUpBg 1.6s cubic-bezier(0.16, 1, 0.3, 1) both;
                    filter: grayscale(20%) brightness(0.45);
                }
                .rec-hero-overlay-left {
                    position: absolute;
                    top: 0; left: 0; bottom: 0; width: 60%;
                    background: linear-gradient(90deg, #070F20 0%, rgba(7,15,32,0.92) 50%, rgba(7,15,32,0.4) 100%);
                    z-index: 1;
                    backdrop-filter: blur(4px);
                }
                @media(max-width: 1024px) {
                    .rec-hero-overlay-left {
                        width: 100%;
                        background: linear-gradient(180deg, #070F20 40%, rgba(7,15,32,0.85) 100%);
                    }
                }
                .rec-hero-overlay-right {
                    position: absolute;
                    top: 0; right: 0; bottom: 0; width: 40%;
                    background: linear-gradient(-90deg, rgba(7,15,32,0.3) 0%, rgba(7,15,32,0.6) 100%);
                    z-index: 1;
                }
                
                /* Animated Graphics Engine Components */
                .rec-floating-card-1 {
                    position: absolute;
                    top: 15%; right: 10%;
                    background: rgba(17, 24, 39, 0.7);
                    border: 1px solid rgba(255,255,255,0.1);
                    backdrop-filter: blur(12px);
                    border-radius: 20px;
                    padding: 16px 20px;
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                    animation: floatSlow 6s ease-in-out infinite;
                }
                .rec-floating-card-2 {
                    position: absolute;
                    bottom: 20%; left: 5%;
                    background: rgba(17, 24, 39, 0.75);
                    border: 1px solid rgba(34, 211, 238, 0.2);
                    backdrop-filter: blur(12px);
                    border-radius: 20px;
                    padding: 18px 22px;
                    box-shadow: 0 25px 50px rgba(0,0,0,0.4);
                    animation: floatMedium 8s ease-in-out infinite;
                }
                .rec-floating-card-3 {
                    position: absolute;
                    top: 45%; right: 5%;
                    background: rgba(17, 24, 39, 0.7);
                    border: 1px solid rgba(37, 99, 235, 0.2);
                    backdrop-filter: blur(12px);
                    border-radius: 50%;
                    width: 64px;
                    height: 64px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #3B82F6;
                    box-shadow: 0 15px 30px rgba(0,0,0,0.3);
                    animation: floatSlow 5s ease-in-out infinite alternate;
                }
                
                /* Interactive Primary/Secondary CTA Buttons */
                .rec-btn-primary {
                    background: linear-gradient(90deg, #2563EB, #06B6D4);
                    color: #FFFFFF;
                    padding: 16px 32px;
                    border-radius: 14px;
                    font-weight: 700;
                    font-size: 15px;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    border: none;
                    cursor: pointer;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    box-shadow: 0 10px 25px rgba(37, 99, 235, 0.25);
                }
                .rec-btn-primary:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 15px 35px rgba(37, 99, 235, 0.4), 0 0 20px rgba(6, 182, 212, 0.3);
                }
                .rec-btn-primary:hover .rec-btn-arrow {
                    transform: translateX(4px);
                }
                .rec-btn-secondary {
                    background: rgba(255, 255, 255, 0.03);
                    color: #FFFFFF;
                    padding: 16px 32px;
                    border-radius: 14px;
                    font-weight: 700;
                    font-size: 15px;
                    display: inline-flex;
                    align-items: center;
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    backdrop-filter: blur(8px);
                    cursor: pointer;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .rec-btn-secondary:hover {
                    background: rgba(255, 255, 255, 0.08);
                    border-color: rgba(255, 255, 255, 0.3);
                    transform: translateY(-3px);
                }

                .rec-industry-pill {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    border-radius: 12px;
                    padding: 8px 16px;
                    font-size: 13.5px;
                    color: #94A3B8;
                    cursor: default;
                    transition: all 0.3s ease;
                }
                .rec-industry-pill:hover {
                    transform: scale(1.05);
                    border-color: rgba(34, 211, 238, 0.4);
                    background: rgba(34, 211, 238, 0.05);
                    color: #FFFFFF;
                }
                
                .rec-modal-backdrop {
                    position: fixed;
                    inset: 0;
                    z-index: 9999;
                    background: rgba(15, 23, 42, 0.85);
                    backdrop-filter: blur(16px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 24px;
                    animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
                }
                .rec-modal-window {
                    background: #111827;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 32px;
                    width: 100%;
                    max-width: 960px;
                    max-height: 85vh;
                    overflow-y: auto;
                    position: relative;
                    box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.7);
                    animation: modalScaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
                }
                `}}),(0,x.jsxs)(`main`,{style:{flex:1,position:`relative`},children:[(0,x.jsxs)(`section`,{className:`rec-hero-container`,children:[(0,x.jsx)(`div`,{className:`rec-hero-grid-bg`}),(0,x.jsx)(`div`,{className:`rec-hero-glow-tl`}),(0,x.jsx)(`div`,{className:`rec-hero-glow-br`}),(0,x.jsxs)(`div`,{className:`rec-hero-video-wrapper`,children:[(0,x.jsx)(`div`,{className:`rec-hero-overlay-left`}),(0,x.jsx)(`div`,{className:`rec-hero-overlay-right`}),(0,x.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:`rec-hero-video`,children:(0,x.jsx)(`source`,{src:`/assets/images/about/recruitbg.mp4`,type:`video/mp4`})})]}),(0,x.jsx)(`div`,{className:`rec-hero-split`,children:(0,x.jsxs)(`div`,{className:`rec-hero-left`,children:[(0,x.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:6,fontSize:`11px`,fontWeight:800,letterSpacing:`0.15em`,color:`#06B6D4`,background:`rgba(6, 182, 212, 0.1)`,border:`1px solid rgba(6, 182, 212, 0.2)`,borderRadius:99,padding:`6px 16px`,marginBottom:28},children:[(0,x.jsx)(Je,{size:12}),` GLOBAL TALENT DEPLOYMENT & ACQUISITION`]}),(0,x.jsxs)(`h1`,{style:{fontSize:`clamp(38px, 5.5vw, 62px)`,fontWeight:900,color:`#FFFFFF`,letterSpacing:`-0.03em`,margin:`0 0 28px 0`,lineHeight:1.15},children:[`Recruitment, Staffing & `,(0,x.jsx)(`br`,{}),(0,x.jsx)(`span`,{style:{background:`linear-gradient(90deg, #3B82F6, #06B6D4)`,WebkitBackgroundClip:`text`,WebkitTextFillColor:`transparent`},children:`Talent Solutions`})]}),(0,x.jsx)(`p`,{style:{fontSize:`18px`,color:`#94A3B8`,lineHeight:1.8,marginBottom:40,maxWidth:`540px`,fontWeight:400},children:`Connecting global organisations with exceptional executive talent, contract staff, and specialized workforce engineering solutions across complex regulatory markets.`}),(0,x.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`16px`},children:[(0,x.jsxs)(`button`,{className:`rec-btn-primary`,onClick:()=>window.scrollTo({top:document.body.scrollHeight,behavior:`smooth`}),children:[(0,x.jsx)(`span`,{children:`Deploy Strategy`}),(0,x.jsx)(fe,{className:`rec-btn-arrow`,size:16,style:{transition:`transform 0.3s ease`}})]}),(0,x.jsx)(`button`,{className:`rec-btn-secondary`,onClick:()=>{let e=document.getElementById(`recruitment-frameworks`);e&&e.scrollIntoView({behavior:`smooth`})},children:(0,x.jsx)(`span`,{children:`Explore Architectures`})})]})]})})]}),(0,x.jsxs)(`div`,{id:`recruitment-frameworks`,style:{padding:`100px 24px`,maxWidth:`1280px`,margin:`0 auto`,position:`relative`},children:[(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`10px`,marginBottom:`60px`,borderLeft:`3px solid #3B82F6`,paddingLeft:`24px`},children:[(0,x.jsx)(`span`,{style:{fontSize:`11px`,fontWeight:800,letterSpacing:`0.2em`,color:`#3B82F6`,textTransform:`uppercase`},children:`GLOBAL HUMAN RESOURCES`}),(0,x.jsx)(`h2`,{style:{fontSize:`clamp(32px, 4.5vw, 48px)`,fontWeight:800,color:`#FFFFFF`,letterSpacing:`-0.02em`,margin:0},children:`Recruitment Frameworks Designed for Modern Enterprises`}),(0,x.jsx)(`p`,{style:{fontSize:`18px`,color:`#94A3B8`,maxWidth:`650px`,lineHeight:1.6,marginTop:`8px`,fontWeight:400},children:`Rigorous, scalable deployment pipelines tailored to support organizational maturity and borderless growth.`})]}),(0,x.jsx)(`div`,{className:`rec-premium-grid`,children:[{id:`permanent`,title:`Permanent Placement & Direct Hire`,iconName:`permanent`,image:`https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80`,shortDesc:`Sourcing and evaluating exceptional talent for permanent roles across all organizational levels, ensuring long-term technical and cultural alignment.`,longDesc:`We source, screen, and present exceptional candidates for permanent roles across all seniority levels — from entry-level professionals to C-suite executives. Our rigorous multi-stage evaluation process ensures only the most qualified, culturally aligned candidates reach your hiring team.`,chips:[`Executive Search`,`Retained Search`,`Competency Audit`,`Talent Mapping`],points:[`Comprehensive job profiling and role analysis in partnership with hiring managers`,`Multi-channel talent sourcing: LinkedIn, job boards, referrals, proprietary databases`,`AI-powered candidate matching and talent intelligence tools`,`In-depth competency-based interviewing and behavioural assessments`,`Background verification, reference checks, and credential validation`,`Offer management, negotiation support, and onboarding coordination`,`90-day replacement guarantee for permanent placements`],benefits:[`90-day placement guarantee`,`Cultural alignment indexing`,`Pre-vetted professional pipelines`,`Optimized onboarding transition`],industries:[`Technology & SaaS`,`Healthcare Systems`,`Banking & Finance`]},{id:`contract`,title:`Contract & Temporary Staffing`,iconName:`contract`,image:`https://images.unsplash.com/photo-1521737711867-e3b90473bd58?auto=format&fit=crop&w=800&q=80`,shortDesc:`Flexible contract-to-hire and temporary staffing models to scale workforce capacity on demand while streamlining administrative operations.`,longDesc:`Whether you need to scale your team for a peak season, a specific project, or a sudden surge in demand, our contract and temporary staffing solutions provide flexible, quality talent at speed. We manage the entire employee lifecycle — from recruitment through to payroll and compliance.`,chips:[`Rapid Sourcing`,`Payroll Custody`,`Tax Compliance`,`Hybrid/Remote`],points:[`Rapid deployment of pre-vetted contract professionals within 24–72 hours`,`Flexible engagement durations — days, weeks, months, or open-ended contracts`,`Complete contractor management: payroll, tax compliance, insurance, and HR support`,`On-site, hybrid, and remote working arrangements`,`Contract-to-permanent conversion pathways for high-performing contractors`],benefits:[`Statutory risk insulation`,`Workforce elasticity on demand`,`Complete payroll delegation`,`Rapid project deployment velocity`],industries:[`Enterprise Manufacturing`,`Technology & SaaS`,`Banking & Finance`]},{id:`augmentation`,title:`Staff Augmentation — IT & Non-IT`,iconName:`augmentation`,image:`https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80`,shortDesc:`Seamlessly integrate specialized operational and technical experts directly into your existing in-house teams.`,longDesc:`Our Staff Augmentation model enables organisations to seamlessly extend their existing teams with skilled professionals who integrate into your workflows, tools, and culture — without the overheads of traditional hiring. We offer augmentation across both IT and Non-IT functions.`,chips:[`Direct Integration`,`Zero Hiring Overhead`,`Technical Upscaling`,`Cross-Border Teams`],points:[`IT Functions: Software Developers, Data Scientists, Cloud Architects, Cybersecurity, QA Engineers, ERP/CRM Consultants, Network Engineers, Project Managers, AI/ML Engineers`,`Non-IT Functions: Finance & Accounting, HR Business Partners, Sales & Business Development, Marketing, Supply Chain & Logistics, Legal & Compliance, Operations, Customer Service, Healthcare, Administrative`],benefits:[`Direct workspace alignment`,`Instant operational capacity`,`De-risked scalability`,`Eliminated recruitment overhead`],industries:[`Technology & SaaS`,`Healthcare Systems`,`Enterprise Manufacturing`]},{id:`executive`,title:`Executive Search & Leadership Hiring`,iconName:`executive`,image:`https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80`,shortDesc:`Discreet research-driven executive mapping to secure transformational leaders capable of guiding corporate trajectories.`,longDesc:`Finding the right leader can redefine an organisation's trajectory. Our executive search practice applies a discreet, research-led methodology to identify and attract transformational leaders across the C-suite, board, and senior management levels.`,chips:[`C-Suite Sourcing`,`Discrete Execution`,`Retained Mandates`,`Psychometric Audits`],points:[`Retained and contingency executive search mandates`,`Comprehensive market mapping and competitor talent intelligence`,`Psychometric profiling, leadership assessments, and cultural fit evaluation`,`Discreet, confidential search processes for sensitive mandates`,`Global reach across US, UK, Europe, GCC, Asia, and beyond`],benefits:[`Transformational board assets`,`Insulated competitor search models`,`Comprehensive global reach`,`Robust competency validation`],industries:[`Banking & Finance`,`Healthcare Systems`,`Enterprise Manufacturing`]},{id:`managed`,title:`Managed Staffing Solutions (MSP / RPO)`,iconName:`managed`,image:`https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80`,shortDesc:`Outsourced master vendor staffing frameworks designed for high-volume consistent operations.`,longDesc:`For organisations with high-volume or ongoing recruitment needs, our Managed Staffing Solutions provide a fully outsourced or co-sourced model that delivers consistency, compliance, and cost efficiency at scale.`,chips:[`Enterprise RPO`,`Master Vendor Custody`,`Dedicated Units`,`Workforce Analytics`],points:[`Recruitment Process Outsourcing (RPO): end-to-end talent acquisition management`,`Master Vendor Staffing (MSP): single-point management of all staffing suppliers`,`Dedicated on-site or embedded recruitment teams`,`Standardised hiring processes, SLAs, and compliance frameworks`,`Real-time hiring dashboards and workforce analytics reporting`],benefits:[`Consistent standardized KPIs`,`Consolidated supplier spend`,`Embedded on-site hiring teams`,`Data-driven capacity insights`],industries:[`Technology & SaaS`,`Enterprise Manufacturing`,`Education Holdings`]}].map((e,r)=>{let i=r%2==0,a=n[e.iconName]||Ue;return(0,x.jsxs)(`div`,{className:`rec-editorial-card ${i?`rec-card-dark`:`rec-card-light`} rec-stagger-card`,style:{animationDelay:`${r*.12}s`},onClick:()=>t(e),children:[(0,x.jsxs)(`div`,{className:`rec-card-image-wrapper`,children:[(0,x.jsx)(`img`,{src:e.image||`/assets/images/services/placeholder.jpg`,alt:e.title,className:`rec-card-image`}),(0,x.jsx)(`div`,{className:`rec-card-image-overlay`}),(0,x.jsx)(`div`,{style:{position:`absolute`,top:`24px`,left:`24px`,zIndex:3},children:(0,x.jsx)(`div`,{className:`rec-icon-box`,children:(0,x.jsx)(a,{size:24,strokeWidth:1.5})})})]}),(0,x.jsxs)(`div`,{className:`rec-card-content`,children:[(0,x.jsx)(`div`,{className:`rec-card-texture`}),(0,x.jsx)(`div`,{className:`rec-card-glow-tr`}),(0,x.jsx)(`div`,{className:`rec-card-glow-bl`}),(0,x.jsx)(`div`,{style:{position:`absolute`,top:0,left:0,width:`4px`,height:`40px`,background:`linear-gradient(180deg, #3B82F6, #06B6D4)`}}),(0,x.jsx)(`div`,{style:{position:`absolute`,bottom:`80px`,right:`40px`,fontSize:`120px`,fontWeight:900,opacity:.03,pointerEvents:`none`,userSelect:`none`,color:`#3B82F6`,lineHeight:1},children:String(r+1).padStart(2,`0`)}),(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`flex-start`,width:`100%`},children:[(0,x.jsx)(`div`,{style:{height:`76px`,marginBottom:`14px`,overflow:`hidden`},children:(0,x.jsx)(`h3`,{className:`rec-title-gradient`,style:{fontSize:`26px`,fontWeight:800,lineHeight:1.2,margin:0,letterSpacing:`-0.02em`,display:`-webkit-box`,WebkitLineClamp:2,WebkitBoxOrient:`vertical`,overflow:`hidden`},children:e.title})}),(0,x.jsx)(`div`,{style:{height:`90px`,overflow:`hidden`,marginBottom:`24px`},children:(0,x.jsx)(`p`,{className:`rec-body-desc`,style:{fontSize:`14px`,lineHeight:1.7,margin:0,display:`-webkit-box`,WebkitLineClamp:4,WebkitBoxOrient:`vertical`,overflow:`hidden`},children:e.shortDesc})})]})]})]},r)})}),(0,x.jsxs)(`div`,{style:{marginTop:`100px`},children:[(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`,marginBottom:`48px`,borderLeft:`3px solid #06B6D4`,paddingLeft:`24px`},children:[(0,x.jsx)(`span`,{style:{fontSize:`11px`,fontWeight:800,letterSpacing:`0.2em`,color:`#06B6D4`,textTransform:`uppercase`},children:`GEOGRAPHIC REACH`}),(0,x.jsx)(`h2`,{style:{fontSize:`clamp(32px, 4.5vw, 42px)`,fontWeight:800,color:`#FFFFFF`,letterSpacing:`-0.02em`,margin:0},children:`Transnational Regulatory Deployment`})]}),(0,x.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(280px, 1fr))`,gap:`32px`},children:[{region:`United States`,desc:`Full-cycle permanent, contract, and staff augmentation across all major industries. Specialisms include Technology, Healthcare, Finance, Engineering, and Life Sciences. Compliant with US employment law, EEO, and ITAR where applicable.`},{region:`United Kingdom`,desc:`Specialist recruitment across Financial Services, Technology, Professional Services, and Public Sector. Compliant with UK employment law, IR35 regulation, and GDPR. Strong network across London, Manchester, Birmingham, and Edinburgh.`},{region:`Europe`,desc:`Pan-European recruitment across Germany, Netherlands, France, Switzerland, Nordics, and beyond. Expertise in GDPR-compliant hiring, multilingual candidate sourcing, and cross-border talent mobility.`},{region:`GCC`,desc:`Specialist talent solutions across UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman. Deep expertise in vision-aligned industries including Oil & Gas, Construction, Hospitality, Islamic Finance, and Government projects. Visa sponsorship coordination and relocation support.`}].map((e,t)=>(0,x.jsxs)(`div`,{style:{background:`#111827`,border:`1px solid rgba(255, 255, 255, 0.05)`,borderRadius:`24px`,padding:`40px`,transition:`all 0.4s ease`},onMouseEnter:e=>{e.currentTarget.style.transform=`translateY(-6px)`,e.currentTarget.style.borderColor=`rgba(6, 182, 212, 0.3)`},onMouseLeave:e=>{e.currentTarget.style.transform=`translateY(0)`,e.currentTarget.style.borderColor=`rgba(255, 255, 255, 0.05)`},children:[(0,x.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`,marginBottom:`18px`},children:[(0,x.jsx)(`div`,{style:{width:`40px`,height:`40px`,borderRadius:`10px`,background:`rgba(6, 182, 212, 0.08)`,color:`#06B6D4`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,x.jsx)(Te,{size:20,strokeWidth:1.5})}),(0,x.jsx)(`h3`,{style:{fontSize:`20px`,fontWeight:700,color:`#FFFFFF`,margin:0},children:e.region})]}),(0,x.jsx)(`p`,{style:{fontSize:`14px`,color:`#94A3B8`,margin:0,lineHeight:1.65},children:e.desc})]},t))})]}),(0,x.jsxs)(`div`,{style:{marginTop:`100px`,background:`linear-gradient(180deg, #111827, rgba(17, 24, 39, 0.4))`,border:`1px solid rgba(255, 255, 255, 0.06)`,borderRadius:`32px`,padding:`56px 40px`,display:`flex`,gap:`32px`,alignItems:`center`,textAlign:`left`},children:[(0,x.jsx)(`div`,{style:{minWidth:`64px`,height:`64px`,borderRadius:`50%`,background:`rgba(6, 182, 212, 0.08)`,color:`#06B6D4`,display:`flex`,alignItems:`center`,justifyContent:`center`,border:`1px solid rgba(6, 182, 212, 0.2)`,flexShrink:0},children:(0,x.jsx)(ze,{size:28})}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h3`,{style:{fontSize:`22px`,fontWeight:800,color:`#FFFFFF`,marginBottom:`8px`,letterSpacing:`-0.01em`},children:`Our Talent Promise & Quality Metrics`}),(0,x.jsx)(`p`,{style:{fontSize:`15px`,color:`#94A3B8`,lineHeight:1.7,margin:0},children:`We don't fill positions — we build resilient enterprise frameworks. Every asset we provision is thoroughly vetted for technical competence, cross-border cultural compliance, and long-term utility. Our average time-to-shortlist sits at 48 hours, yielding a standard retention metric exceeding 92% at the 12-month milestone.`})]})]})]}),(0,x.jsx)(et,{})]}),(0,x.jsx)(ne,{}),e&&(0,x.jsx)(`div`,{className:`rec-modal-backdrop`,onClick:()=>t(null),children:(0,x.jsxs)(`div`,{className:`rec-modal-window`,onClick:e=>e.stopPropagation(),children:[(0,x.jsxs)(`div`,{style:{position:`sticky`,top:0,background:`#111827`,display:`flex`,justifyContent:`space-between`,alignItems:`center`,padding:`28px 48px`,borderBottom:`1px solid rgba(255, 255, 255, 0.08)`,zIndex:10},children:[(0,x.jsx)(`h2`,{style:{fontSize:`26px`,fontWeight:800,color:`#FFFFFF`,letterSpacing:`-0.02em`,margin:0},children:e.title}),(0,x.jsx)(`button`,{onClick:()=>t(null),style:{background:`rgba(255,255,255,0.04)`,border:`1px solid rgba(255,255,255,0.08)`,borderRadius:`50%`,width:`44px`,height:`44px`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`#94A3B8`,cursor:`pointer`,transition:`all 0.2s ease`},onMouseEnter:e=>e.currentTarget.style.color=`#FFFFFF`,onMouseLeave:e=>e.currentTarget.style.color=`#94A3B8`,children:(0,x.jsx)(qe,{size:20})})]}),(0,x.jsxs)(`div`,{style:{padding:`48px`},children:[(0,x.jsxs)(`div`,{style:{marginBottom:`40px`},children:[(0,x.jsx)(`h4`,{style:{fontSize:`11px`,fontWeight:800,textTransform:`uppercase`,letterSpacing:`0.15em`,color:`#06B6D4`,marginBottom:`12px`},children:`Executive Overview`}),(0,x.jsx)(`p`,{style:{fontSize:`16px`,color:`#E2E8F0`,lineHeight:1.7,margin:0},children:e.longDesc})]}),(0,x.jsx)(`hr`,{style:{border:0,height:`1px`,background:`rgba(255,255,255,0.08)`,marginBottom:`40px`}}),(0,x.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(300px, 1fr))`,gap:`48px`,alignItems:`start`},children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h4`,{style:{fontSize:`13px`,fontWeight:800,textTransform:`uppercase`,letterSpacing:`0.05em`,color:`#FFFFFF`,marginBottom:`24px`},children:`Core Deliverables`}),(0,x.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:e.points.map((e,t)=>(0,x.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:`14px`},children:[(0,x.jsx)(`span`,{style:{display:`inline-flex`,alignItems:`center`,justifyContent:`center`,width:`22px`,height:`22px`,borderRadius:`50%`,background:`rgba(6, 182, 212, 0.1)`,color:`#06B6D4`,flexShrink:0,marginTop:`2px`},children:(0,x.jsx)(_e,{size:12,strokeWidth:3})}),(0,x.jsx)(`span`,{style:{fontSize:`14.5px`,color:`#94A3B8`,lineHeight:1.5},children:e})]},t))})]}),(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`36px`},children:[(0,x.jsxs)(`div`,{style:{background:`rgba(255,255,255,0.02)`,border:`1px solid rgba(255,255,255,0.04)`,borderRadius:`20px`,padding:`32px`},children:[(0,x.jsx)(`h4`,{style:{fontSize:`12px`,fontWeight:800,textTransform:`uppercase`,letterSpacing:`0.05em`,color:`#FFFFFF`,marginBottom:`20px`},children:`Strategic Value Added`}),(0,x.jsx)(`ul`,{style:{padding:0,margin:0,listStyle:`none`,display:`flex`,flexDirection:`column`,gap:`12px`},children:e.benefits.map((e,t)=>(0,x.jsxs)(`li`,{style:{display:`flex`,alignItems:`center`,gap:`10px`,fontSize:`14px`,color:`#E2E8F0`},children:[(0,x.jsx)(`span`,{style:{width:`6px`,height:`6px`,borderRadius:`50%`,background:`#06B6D4`}}),e]},t))})]}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h4`,{style:{fontSize:`12px`,fontWeight:800,textTransform:`uppercase`,letterSpacing:`0.05em`,color:`#FFFFFF`,marginBottom:`20px`},children:`Target Industry Verticals`}),(0,x.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`10px`},children:e.industries.map((e,t)=>(0,x.jsxs)(`div`,{className:`rec-industry-pill`,children:[(0,x.jsx)(r[e]||Me,{size:16,strokeWidth:1.5}),(0,x.jsx)(`span`,{children:e})]},t))})]}),(0,x.jsxs)(`div`,{style:{background:`linear-gradient(135deg, rgba(6,182,212,0.08) 0%, transparent 100%)`,border:`1px solid rgba(6, 182, 212, 0.15)`,borderRadius:`20px`,padding:`32px`,textAlign:`center`},children:[(0,x.jsx)(`h5`,{style:{fontSize:`16px`,fontWeight:700,color:`#FFFFFF`,marginBottom:`8px`},children:`Ready to transform your global team?`}),(0,x.jsx)(`p`,{style:{fontSize:`13px`,color:`#94A3B8`,marginBottom:`20px`,lineHeight:1.5},children:`Consult our specialist advisors today to map out premium talent pipelines.`}),(0,x.jsxs)(`button`,{onClick:()=>{t(null),window.scrollTo({top:document.body.scrollHeight,behavior:`smooth`})},style:{width:`100%`,padding:`16px`,background:`#06B6D4`,border:0,borderRadius:`12px`,color:`#070F20`,fontWeight:700,fontSize:`14px`,cursor:`pointer`,transition:`background 0.2s ease`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:`8px`},onMouseEnter:e=>e.currentTarget.style.background=`#0891B2`,onMouseLeave:e=>e.currentTarget.style.background=`#06B6D4`,children:[(0,x.jsx)(`span`,{children:`Contact Us`}),(0,x.jsx)(fe,{size:16})]})]})]})]})]})]})})]})}function gt(){let[e,t]=(0,b.useState)(null),n={accounting:O,reporting:ge,tax:Le,payroll:Ge,budgeting:He,advisory:me,audit:ze,compliance:be},r={"Banking & Finance":Me,"Healthcare Systems":je,"Enterprise Manufacturing":De,"Technology & SaaS":Ne,"Education Holdings":Ae};return(0,x.jsxs)(`div`,{style:{background:`#0B0F19`,color:`#F8FAFC`,fontFamily:`var(--font-family, "Inter", sans-serif)`,minHeight:`100vh`,display:`flex`,flexDirection:`column`,overflowX:`hidden`},children:[(0,x.jsx)(S,{}),(0,x.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
                @keyframes scaleUpBg {
                    from { transform: scale(1.05); opacity: 0; }
                    to { transform: scale(1); opacity: 0.85; }
                }
                @keyframes heroFadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes floatSlow {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(2deg); }
                }
                @keyframes floatMedium {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-25px) rotate(-3deg); }
                }
                @keyframes floatFast {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes bounceSlow {
                    0%, 100% { transform: translateY(0); opacity: 0.6; }
                    50% { transform: translateY(8px); opacity: 1; }
                }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes modalScaleIn {
                    from { opacity: 0; transform: scale(0.96) translateY(20px); }
                    to { opacity: 1; transform: scale(1) translateY(0); }
                }
                
                /* Responsive Grid Config */
                .rec-premium-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
                    gap: 32px;
                    padding: 60px 0;
                }
                @media(max-width: 500px) {
                    .rec-premium-grid {
                        grid-template-columns: 1fr;
                    }
                }
                
                /* Structural Premium Editorial Cards */
                .rec-editorial-card {
                    position: relative;
                    border-radius: 32px;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    overflow: hidden;
                    cursor: pointer;
                    height: 480px;
                    box-sizing: border-box;
                    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .rec-card-image-wrapper {
                    position: relative;
                    width: 100%;
                    height: 200px;
                    overflow: hidden;
                    background: #1F2937;
                }
                .rec-card-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                    opacity: 0.75;
                }
                .rec-editorial-card:hover .rec-card-image {
                    transform: scale(1.08);
                    opacity: 0.9;
                }
                
                .rec-card-image-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to bottom, transparent 40%, #111827 100%);
                }
                .rec-card-light .rec-card-image-overlay {
                    background: linear-gradient(to bottom, transparent 40%, #FFFFFF 100%);
                }

                .rec-card-content {
                    padding: 32px 40px 40px 40px;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    position: relative;
                    z-index: 2;
                }

                .rec-card-texture {
                    position: absolute;
                    inset: 0;
                    opacity: 0.025;
                    pointer-events: none;
                    background-image: radial-gradient(#22D3EE 1px, transparent 1px);
                    background-size: 24px 24px;
                }

                .rec-card-glow-tr {
                    position: absolute;
                    top: -10%;
                    right: -10%;
                    width: 250px;
                    height: 250px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%);
                    filter: blur(40px);
                    pointer-events: none;
                }
                .rec-card-glow-bl {
                    position: absolute;
                    bottom: -10%;
                    left: -10%;
                    width: 250px;
                    height: 250px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%);
                    filter: blur(40px);
                    pointer-events: none;
                }
                
                /* Dark Variant */
                .rec-card-dark {
                    background: #111827;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                }
                .rec-card-dark .rec-title-gradient {
                    background: linear-gradient(90deg, #3B82F6, #06B6D4);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .rec-card-dark .rec-body-desc {
                    color: #CBD5E1;
                }
                .rec-card-dark .rec-feature-chip {
                    background: rgba(59, 130, 246, 0.15);
                    color: #93C5FD;
                }
                .rec-card-dark .rec-card-cta {
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    background: transparent;
                    color: #E2E8F0;
                }

                /* Light Variant */
                .rec-card-light {
                    background: linear-gradient(180deg, #FFFFFF 0%, #FAFCFF 100%);
                    border: 1px solid rgba(15, 23, 42, 0.06);
                }
                .rec-card-light .rec-title-gradient {
                    background: linear-gradient(90deg, #1D4ED8, #0891B2);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .rec-card-light .rec-body-desc {
                    color: #475569;
                }
                .rec-card-light .rec-feature-chip {
                    background: #EFF6FF;
                    color: #1E40AF;
                }
                .rec-card-light .rec-card-cta {
                    border: 1px solid rgba(15, 23, 42, 0.08);
                    background: #FFFFFF;
                    color: #334155;
                }

                .rec-editorial-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 40px 80px -15px rgba(15, 23, 42, 0.3), 0 0 40px rgba(34, 211, 238, 0.05);
                }
                .rec-card-dark:hover {
                    border-color: rgba(34, 211, 238, 0.3);
                }
                .rec-card-light:hover {
                    border-color: rgba(37, 99, 235, 0.25);
                }

                .rec-icon-box {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 56px;
                    height: 56px;
                    border-radius: 16px;
                    background: linear-gradient(145deg, #EFF6FF, #DBEAFE);
                    box-shadow: 0 8px 24px rgba(37, 99, 235, 0.15);
                    color: #1E40AF;
                    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .rec-editorial-card:hover .rec-icon-box {
                    transform: scale(1.05) rotate(5deg);
                }

                .rec-feature-chip {
                    font-size: 12px;
                    font-weight: 600;
                    padding: 6px 14px;
                    border-radius: 99px;
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .rec-editorial-card:hover .rec-feature-chip {
                    background: #2563EB;
                    color: #FFFFFF !important;
                }

                .rec-editorial-card:hover .rec-card-cta {
                    border-color: #2563EB;
                    background: #2563EB;
                    color: #FFFFFF;
                }
                .rec-editorial-card:hover .rec-card-cta-arrow {
                    transform: translateX(12px);
                }

                .rec-stagger-card {
                    opacity: 0;
                    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                
                /* Modal Layer */
                .rec-modal-backdrop {
                    position: fixed;
                    inset: 0;
                    z-index: 9999;
                    background: rgba(15, 23, 42, 0.85);
                    backdrop-filter: blur(16px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 24px;
                    animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
                }
                .rec-modal-window {
                    background: #111827;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 32px;
                    width: 100%;
                    max-width: 960px;
                    max-height: 85vh;
                    overflow-y: auto;
                    position: relative;
                    box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.7);
                    animation: modalScaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
                }

                .rec-industry-pill {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    border-radius: 12px;
                    padding: 8px 16px;
                    font-size: 13.5px;
                    color: #94A3B8;
                    cursor: default;
                    transition: all 0.3s ease;
                }
                .rec-industry-pill:hover {
                    transform: scale(1.05);
                    border-color: rgba(34, 211, 238, 0.4);
                    background: rgba(34, 211, 238, 0.05);
                    color: #FFFFFF;
                }

                /* Enhanced Hero UI Layout classes */
                .rec-hero-container {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    position: relative;
                    background: #070F20;
                    overflow: hidden;
                    width: 100%;
                }
                .rec-hero-grid-bg {
                    position: absolute;
                    inset: 0;
                    opacity: 0.04;
                    background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
                    background-size: 40px 40px;
                    pointer-events: none;
                    z-index: 2;
                }
                .rec-hero-glow-tl {
                    position: absolute;
                    top: -20%;
                    left: -10%;
                    width: 600px;
                    height: 600px;
                    background: radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%);
                    filter: blur(80px);
                    pointer-events: none;
                    z-index: 1;
                }
                .rec-hero-glow-br {
                    position: absolute;
                    bottom: -20%;
                    right: -10%;
                    width: 600px;
                    height: 600px;
                    background: radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%);
                    filter: blur(80px);
                    pointer-events: none;
                    z-index: 1;
                }
                .rec-hero-split {
                    display: flex;
                    width: 100%;
                    max-width: 1440px;
                    margin: 0 auto;
                    padding: 120px 60px 60px 60px;
                    position: relative;
                    z-index: 5;
                }
                .rec-hero-left {
                    width: 50%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: center;
                    text-align: left;
                }
                .rec-hero-right {
                    width: 50%;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                @media(max-width: 1024px) {
                    .rec-hero-split {
                        flex-direction: column;
                        padding: 140px 24px 60px 24px;
                        gap: 60px;
                    }
                    .rec-hero-left, .rec-hero-right {
                        width: 100%;
                    }
                    .rec-hero-right {
                        min-height: 400px;
                    }
                }
                .rec-hero-video-wrapper {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    z-index: 0;
                }
                .rec-hero-video {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    animation: scaleUpBg 1.6s cubic-bezier(0.16, 1, 0.3, 1) both;
                }
                .rec-hero-overlay-left {
                    position: absolute;
                    top: 0; left: 0; bottom: 0; width: 60%;
                    background: linear-gradient(90deg, #070F20 0%, rgba(7,15,32,0.92) 50%, rgba(7,15,32,0.4) 100%);
                    z-index: 1;
                    backdrop-filter: blur(4px);
                }
                .rec-hero-overlay-right {
                    position: absolute;
                    top: 0; right: 0; bottom: 0; width: 40%;
                    background: linear-gradient(-90deg, rgba(7,15,32,0.3) 0%, rgba(7,15,32,0.6) 100%);
                    z-index: 1;
                }
                
                /* Animated Graphics Engine Components */
                .rec-floating-card-1 {
                    position: absolute;
                    top: 15%; right: 10%;
                    background: rgba(17, 24, 39, 0.7);
                    border: 1px solid rgba(255,255,255,0.1);
                    backdrop-filter: blur(12px);
                    border-radius: 20px;
                    padding: 16px 20px;
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                    animation: floatSlow 6s ease-in-out infinite;
                }
                .rec-floating-card-2 {
                    position: absolute;
                    bottom: 20%; left: 5%;
                    background: rgba(17, 24, 39, 0.75);
                    border: 1px solid rgba(34, 211, 238, 0.2);
                    backdrop-filter: blur(12px);
                    border-radius: 20px;
                    padding: 18px 22px;
                    box-shadow: 0 25px 50px rgba(0,0,0,0.4);
                    animation: floatMedium 8s ease-in-out infinite;
                }
                .rec-floating-card-3 {
                    position: absolute;
                    top: 45%; right: 5%;
                    background: rgba(17, 24, 39, 0.7);
                    border: 1px solid rgba(37, 99, 235, 0.2);
                    backdrop-filter: blur(12px);
                    border-radius: 50%;
                    width: 64px;
                    height: 64px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #3B82F6;
                    box-shadow: 0 15px 30px rgba(0,0,0,0.3);
                    animation: floatSlow 5s ease-in-out infinite alternate;
                }
                
                /* Interactive Primary/Secondary CTA Buttons */
                .rec-btn-primary {
                    background: linear-gradient(90deg, #2563EB, #06B6D4);
                    color: #FFFFFF;
                    padding: 16px 32px;
                    border-radius: 14px;
                    font-weight: 700;
                    font-size: 15px;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    border: none;
                    cursor: pointer;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    box-shadow: 0 10px 25px rgba(37, 99, 235, 0.25);
                }
                .rec-btn-primary:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 15px 35px rgba(37, 99, 235, 0.4), 0 0 20px rgba(6, 182, 212, 0.3);
                }
                .rec-btn-primary:hover .rec-btn-arrow {
                    transform: translateX(4px);
                }
                .rec-btn-secondary {
                    background: rgba(255, 255, 255, 0.03);
                    color: #FFFFFF;
                    padding: 16px 32px;
                    border-radius: 14px;
                    font-weight: 700;
                    font-size: 15px;
                    display: inline-flex;
                    align-items: center;
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    backdrop-filter: blur(8px);
                    cursor: pointer;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .rec-btn-secondary:hover {
                    background: rgba(255, 255, 255, 0.08);
                    border-color: rgba(255, 255, 255, 0.3);
                    transform: translateY(-3px);
                }
                `}}),(0,x.jsxs)(`main`,{style:{flex:1,position:`relative`},children:[(0,x.jsxs)(`section`,{className:`rec-hero-container`,children:[(0,x.jsxs)(`div`,{className:`rec-hero-video-wrapper`,children:[(0,x.jsx)(`video`,{className:`rec-hero-video`,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:(0,x.jsx)(`source`,{src:`/assets/images/about/financebg.mp4`,type:`video/mp4`})}),(0,x.jsx)(`div`,{className:`rec-hero-overlay-left`}),(0,x.jsx)(`div`,{className:`rec-hero-overlay-right`})]}),(0,x.jsx)(`div`,{className:`rec-hero-grid-bg`}),(0,x.jsx)(`div`,{className:`rec-hero-glow-tl`}),(0,x.jsx)(`div`,{className:`rec-hero-glow-br`}),(0,x.jsxs)(`div`,{className:`rec-hero-split`,children:[(0,x.jsxs)(`div`,{className:`rec-hero-left`,children:[(0,x.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:6,fontSize:`11px`,fontWeight:700,letterSpacing:`0.15em`,color:`#10B981`,background:`rgba(16, 185, 129, 0.08)`,border:`1px solid rgba(16, 185, 129, 0.2)`,borderRadius:`8px`,padding:`6px 14px`,marginBottom:24,textTransform:`uppercase`},children:[(0,x.jsx)(Be,{size:12,style:{color:`#10B981`}}),`Elite Strategic Financial Frameworks`]}),(0,x.jsxs)(`h1`,{style:{fontSize:`clamp(36px, 5vw, 56px)`,fontWeight:800,color:`#FFFFFF`,letterSpacing:`-0.03em`,margin:`0 0 24px 0`,lineHeight:1.15},children:[`Master Your Enterprise `,(0,x.jsx)(`br`,{}),(0,x.jsx)(`span`,{style:{background:`linear-gradient(90deg, #10B981, #06B6D4)`,WebkitBackgroundClip:`text`,WebkitTextFillColor:`transparent`},children:`Fiscal Architectures`})]}),(0,x.jsx)(`p`,{style:{fontSize:`17px`,color:`#94A3B8`,lineHeight:1.7,marginBottom:36,fontWeight:400},children:`Demystify global compliance frameworks and optimize cash positions. JF Knowledge Centre pairs elite strategic financial oversight with modern regulatory structural models tailored for ambitious scaling enterprises.`}),(0,x.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`16px`},children:(0,x.jsxs)(`button`,{onClick:()=>document.getElementById(`explore-services`).scrollIntoView({behavior:`smooth`}),className:`rec-btn-primary`,children:[(0,x.jsx)(`span`,{children:`Browse Service Tracks`}),(0,x.jsx)(fe,{size:18,className:`rec-btn-arrow`})]})})]}),(0,x.jsxs)(`div`,{className:`rec-hero-right`,children:[(0,x.jsxs)(`div`,{className:`rec-floating-card-2`,children:[(0,x.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:`16px`},children:[(0,x.jsx)(`span`,{style:{fontSize:`11px`,color:`#10B981`,fontWeight:700,textTransform:`uppercase`,letterSpacing:`0.05em`},children:`Compliance Matrix`}),(0,x.jsx)(Se,{size:16,style:{color:`#06B6D4`}})]}),(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`10px`},children:[(0,x.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,fontSize:`13px`,color:`#CBD5E1`},children:[(0,x.jsx)(_e,{size:14,style:{color:`#10B981`}}),` GAAP & IFRS Audited`]}),(0,x.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,fontSize:`13px`,color:`#CBD5E1`},children:[(0,x.jsx)(_e,{size:14,style:{color:`#10B981`}}),` Risk Shield Configured`]}),(0,x.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,fontSize:`13px`,color:`#CBD5E1`},children:[(0,x.jsx)(_e,{size:14,style:{color:`#10B981`}}),` Multi-currency Ready`]})]})]}),(0,x.jsx)(`div`,{style:{width:`300px`,height:`300px`,borderRadius:`50%`,background:`linear-gradient(135deg, rgba(16,185,129,0.05) 0%, rgba(6,186,212,0.05) 100%)`,border:`1px solid rgba(255,255,255,0.03)`,position:`absolute`,zIndex:1,pointerEvents:`none`}})]})]})]}),(0,x.jsxs)(`div`,{id:`explore-services`,style:{padding:`80px 24px 100px 24px`,maxWidth:`1280px`,margin:`0 auto`,position:`relative`},children:[(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,textAlign:`center`,marginBottom:`60px`},children:[(0,x.jsx)(`span`,{style:{fontSize:`12px`,fontWeight:700,letterSpacing:`0.15em`,color:`#10B981`,textTransform:`uppercase`,marginBottom:`12px`},children:`Curated Knowledge Portfolios`}),(0,x.jsx)(`h2`,{style:{fontSize:`clamp(28px, 4vw, 40px)`,fontWeight:800,color:`#FFFFFF`,letterSpacing:`-0.02em`,margin:0},children:`Explore Our Specialized Service Tracks`}),(0,x.jsx)(`div`,{style:{width:`60px`,height:`4px`,background:`#10B981`,borderRadius:`2px`,marginTop:`16px`}})]}),(0,x.jsx)(`div`,{className:`rec-premium-grid`,children:[{id:`accounting`,title:`Accounting & Bookkeeping Services`,iconName:`accounting`,level:`Core Foundation`,duration:`Continuous Ops`,modulesCount:`11 Frameworks`,imageUrl:`https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop`,shortDesc:`Accurate bookkeeping and financial management frameworks that keep your scaling business organized, fully compliant, and investment ready.`,longDesc:`We provide accurate, timely, and fully compliant accounting and bookkeeping services that keep your financial records in perfect order — giving you a clear and real-time view of your financial position at all times.`,chips:[`Bookkeeping`,`AP & AR Ops`,`Reconciliations`,`Cloud Migration`],points:[`Day-to-day bookkeeping: recording of all financial transactions across income, expenses, assets, and liabilities`,`Chart of accounts setup, maintenance, and optimisation`,`Accounts payable (AP) management: invoice processing, supplier payment scheduling, and reconciliation`,`Accounts receivable (AR) management: invoicing, collections, and debtor ageing reports`,`Bank and credit card reconciliation — daily, weekly, or monthly`,`General ledger maintenance and journal entry management`,`Petty cash management and expense reimbursement processing`,`Fixed assets register management and depreciation scheduling`,`Payroll accounting and salary journal entries`,`Multi-currency bookkeeping for international operations`,`Cloud accounting on Xero, QuickBooks, Sage, Zoho Books, and NetSuite`],benefits:[`Real-time cash flow metrics`,`Audit-ready financial ledgers`,`Seamless platform automation`,`Mitigated operational leakage`],industries:[`Banking & Finance`,`Healthcare Systems`,`Technology & SaaS`,`Enterprise Manufacturing`]},{id:`reporting`,title:`Financial Reporting & Management Accounts`,iconName:`reporting`,level:`Executive Strategy`,duration:`Monthly/Quarterly`,modulesCount:`8 Deliverables`,imageUrl:`https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop`,shortDesc:`Transform raw historical ledger entries into actionable corporate intelligence to drive executive-level decision making.`,longDesc:`We transform raw financial data into meaningful management information that empowers decision-making at every level of your organisation.`,chips:[`Management Accounts`,`KPI Dashboards`,`GAAP Compliance`,`Board Packs`],points:[`Monthly, quarterly, and annual management accounts preparation`,`Profit & Loss (Income Statement), Balance Sheet, and Cash Flow Statement preparation`,`Variance analysis: actual vs. budget vs. prior period comparisons`,`Key Performance Indicator (KPI) dashboards and financial performance scorecards`,`Consolidated financial statements for group entities and subsidiaries`,`Board-ready financial packs and investor reporting`,`IFRS, US GAAP, UK GAAP, and local GAAP compliant reporting`,`Financial commentary, narrative analysis, and actionable insights`],benefits:[`Transparent investor reporting`,`Granular performance clarity`,`Frictionless regulatory compliance`,`Accelerated strategic response`],industries:[`Banking & Finance`,`Enterprise Manufacturing`,`Technology & SaaS`]},{id:`tax`,title:`Tax Planning, Compliance & Advisory`,iconName:`tax`,level:`Advanced Oversight`,duration:`Annual Strategy`,modulesCount:`10 Directives`,imageUrl:`/assets/images/about/taxplan.jpg`,shortDesc:`Strategic cross-border tax positioning and proactive compliance optimization built to safeguard your operating margins.`,longDesc:`Navigating the complexity of domestic and international tax obligations requires precision, expertise, and proactive planning. Our tax advisory team ensures full compliance while identifying legitimate opportunities to optimise your tax position.`,chips:[`Corporate & VAT`,`Transfer Pricing`,`R&D Tax Credits`,`IRS/HMRC Liaison`],points:[`Corporate tax return preparation and filing (UK Corporation Tax, US Federal & State Tax, UAE Corporate Tax)`,`VAT / GST registration, return filing, and advisory (UK, EU, UAE, and other jurisdictions)`,`Personal income tax planning and self-assessment tax return filing`,`Payroll tax compliance: PAYE, National Insurance, social security contributions`,`Transfer pricing documentation and intercompany transaction management`,`Tax-efficient structuring for business operations, acquisitions, and asset management`,`R&D tax credit identification and claims`,`Capital Gains Tax (CGT) planning for business disposals and property transactions`,`International tax advisory: double taxation treaties and cross-border tax planning`,`Tax investigation support and HMRC / IRS correspondence management`],benefits:[`Optimized global tax structures`,`Zero regulatory penalty exposure`,`Maximized R&D capital recovery`,`Structured risk containment`],industries:[`Enterprise Manufacturing`,`Technology & SaaS`,`Banking & Finance`]},{id:`payroll`,title:`Payroll Management & HR Compliance`,iconName:`payroll`,level:`Operational Core`,duration:`Cyclical Processing`,modulesCount:`8 Protocols`,imageUrl:`https://images.unsplash.com/photo-1521791136066-848f0856b4f6?q=80&w=600&auto=format&fit=crop`,shortDesc:`Flawless end-to-end multi-currency payroll distribution systems engineered to minimize risk and enforce strict labor compliance.`,longDesc:`Payroll errors erode employee trust and expose businesses to significant compliance risk. Our payroll team delivers a seamless, accurate, and fully compliant payroll service tailored to your workforce structure.`,chips:[`Auto-Enrolment`,`Remuneration Design`,`Statutory Filings`,`Contractor Payroll`],points:[`End-to-end payroll processing for employees, contractors, and directors`,`Payslip generation, payroll register maintenance, and year-end reconciliations`,`Statutory deductions: PAYE, National Insurance, pension contributions, student loan repayments`,`Auto-enrolment pension administration and compliance reporting`,`P11D benefit-in-kind reporting and P60 / P45 management`,`Salary benchmarking and remuneration structure advisory`,`Multi-country payroll coordination for international workforces`,`Payroll audit and compliance health checks`],benefits:[`Guaranteed execution timeline`,`Total statutory compliance transparency`,`Resource relief for internal HR`,`Protected workforce integrity`],industries:[`Education Holdings`,`Healthcare Systems`,`Technology & SaaS`]},{id:`budgeting`,title:`Budgeting, Forecasting & Financial Planning`,iconName:`budgeting`,level:`Strategic Growth`,duration:`Forward Dynamic`,modulesCount:`8 Frameworks`,imageUrl:`https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop`,shortDesc:`Predictive forward-looking financial architecture including 3-way cash flow models to comfortably sustain corporate expansion.`,longDesc:`Proactive financial planning distinguishes thriving businesses from reactive ones. Our financial planning specialists work closely with your leadership team to build robust financial models that drive strategy and support growth.`,chips:[`3-Way Modeling`,`Scenario Testing`,`CapEx Appraisals`,`13-Week Forecasts`],points:[`Annual budget preparation in collaboration with department heads`,`Rolling forecasts and re-forecasting models (13-week, quarterly, annual)`,`Three-way financial model: integrated P&L, Balance Sheet, and Cash Flow projections`,`Scenario planning: best case, base case, and stress-test modelling`,`Cash flow forecasting and working capital management`,`Sensitivity analysis and risk modelling`,`Capital expenditure (CapEx) planning and investment appraisal`,`Break-even analysis and profitability modelling by product, service, or segment`],benefits:[`Defensible fundraising models`,`Proactive liquidity positioning`,`De-risked market initiatives`,`Granular performance visibility`],industries:[`Technology & SaaS`,`Enterprise Manufacturing`,`Banking & Finance`]},{id:`advisory`,title:`Business Advisory & Strategic Consultancy`,iconName:`advisory`,level:`Corporate Tier`,duration:`Milestone Guided`,modulesCount:`9 Directives`,imageUrl:`https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop`,shortDesc:`Sophisticated corporate finance structuring, objective valuations, and tactical advisory for transactional milestones.`,longDesc:`Beyond numbers, we provide strategic counsel that helps business owners and executives make informed, confident decisions at critical junctures — whether launching, launching, scaling, restructuring, or exiting.`,chips:[`M&A Structuring`,`Corporate Valuation`,`Fundraising Prep`,`Margin Optimisation`],points:[`Business start-up financial advisory: entity structuring, registration, and initial setup`,`Growth strategy support: financial feasibility analysis and market entry modelling`,`Mergers & Acquisitions (M&A) advisory: due diligence, valuation, and integration support`,`Business valuation reports for sale, acquisition, shareholder restructuring, or dispute resolution`,`Investor pitch financial modelling and fundraising support`,`Debt and equity financing advisory — preparation of lending packages and investor memoranda`,`Working capital optimisation and cash flow improvement strategies`,`Cost reduction and efficiency improvement programmes`,`Profitability analysis and margin improvement advisory`],benefits:[`Optimized transaction values`,`Accelerated due diligence execution`,`Configured capital cost structures`,`Objective strategic alignment`],industries:[`Banking & Finance`,`Technology & SaaS`,`Enterprise Manufacturing`]},{id:`audit`,title:`Audit Support & Internal Controls`,iconName:`audit`,level:`Governance Elite`,duration:`Systemic Review`,modulesCount:`7 Checkpoints`,imageUrl:`https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop`,shortDesc:`Rigorous diagnostic validation of internal control matrices to insulate operational governance from systemic risk.`,longDesc:`We help organisations prepare for external audits, strengthen internal control frameworks, and build governance structures that protect assets and ensure regulatory compliance.`,chips:[`External Audit Prep`,`SOX Frameworks`,`Fraud Risk Mitigation`,`Process Flowcharts`],points:[`Statutory audit preparation and liaison with external auditors`,`Internal audit co-sourcing and outsourcing`,`Internal control framework design and implementation`,`Process documentation: flowcharts, risk and control matrices (RCMs)`,`Fraud risk assessment and anti-money laundering (AML) compliance review`,`Sarbanes-Oxley (SOX) compliance support for US-listed entities`,`Corporate governance advisory and board reporting`],benefits:[`Reduced external auditor fees`,`Hardened anti-fraud defense`,`Strengthened board governance`,`Eliminated process operational gaps`],industries:[`Banking & Finance`,`Healthcare Systems`,`Education Holdings`]},{id:`compliance`,title:`Compliance & Regulatory Advisory`,iconName:`compliance`,level:`Global Integrity`,duration:`Adaptive Continuous`,modulesCount:`6 Frameworks`,imageUrl:`https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop`,shortDesc:`Cross-border compliance frameworks ensuring absolute operational continuity across variable international architectures.`,longDesc:`Ensuring cross-border integrity, our advisory protocols build absolute administrative compliance within international operating frameworks.`,chips:[`Companies House`,`SEC Frameworks`,`ESR Directives (UAE)`,`Data Governance`],points:[`Companies House filings and statutory compliance (UK)`,`SEC reporting support and US regulatory compliance`,`Economic Substance Regulations (ESR) compliance in the UAE`,`Anti-Bribery and Corruption (ABC) policy design and implementation`,`GDPR-aligned financial data management practices`,`Whistleblowing policies and ethical finance governance frameworks`],benefits:[`Insulated multi-national presence`,`Enforced data governance protocols`,`Ethical enterprise integrity`,`Proactive dynamic regulatory alignment`],industries:[`Banking & Finance`,`Technology & SaaS`,`Enterprise Manufacturing`]}].map((e,r)=>{let i=n[e.iconName]||O;return(0,x.jsxs)(`div`,{className:`rec-editorial-card rec-stagger-card ${r%2==0?`rec-card-dark`:`rec-card-light`}`,style:{animationDelay:`${r*.08}s`},onClick:()=>t(e),children:[(0,x.jsxs)(`div`,{className:`rec-card-image-wrapper`,children:[(0,x.jsx)(`img`,{src:e.imageUrl||`/assets/images/services/placeholder.jpg`,alt:e.title,className:`rec-card-image`}),(0,x.jsx)(`div`,{className:`rec-card-image-overlay`}),(0,x.jsx)(`div`,{style:{position:`absolute`,top:`24px`,left:`24px`,zIndex:3},children:(0,x.jsx)(`div`,{className:`rec-icon-box`,children:(0,x.jsx)(i,{size:24,strokeWidth:1.5})})})]}),(0,x.jsxs)(`div`,{className:`rec-card-content`,children:[(0,x.jsx)(`div`,{className:`rec-card-texture`}),(0,x.jsx)(`div`,{className:`rec-card-glow-tr`}),(0,x.jsx)(`div`,{className:`rec-card-glow-bl`}),(0,x.jsx)(`div`,{style:{position:`absolute`,top:0,left:0,width:`4px`,height:`40px`,background:`linear-gradient(180deg, #10B981, #06B6D4)`}}),(0,x.jsx)(`div`,{style:{position:`absolute`,bottom:`80px`,right:`40px`,fontSize:`120px`,fontWeight:900,opacity:.03,pointerEvents:`none`,userSelect:`none`,color:`#10B981`,lineHeight:1},children:String(r+1).padStart(2,`0`)}),(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`flex-start`,width:`100%`},children:[(0,x.jsx)(`div`,{style:{height:`76px`,marginBottom:`14px`,overflow:`hidden`},children:(0,x.jsx)(`h3`,{className:`rec-title-gradient`,style:{fontSize:`26px`,fontWeight:800,lineHeight:1.2,margin:0,letterSpacing:`-0.02em`,display:`-webkit-box`,WebkitLineClamp:2,WebkitBoxOrient:`vertical`,overflow:`hidden`},children:e.title})}),(0,x.jsx)(`div`,{style:{height:`90px`,overflow:`hidden`,marginBottom:`24px`},children:(0,x.jsx)(`p`,{className:`rec-body-desc`,style:{fontSize:`14px`,lineHeight:1.7,margin:0,display:`-webkit-box`,WebkitLineClamp:4,WebkitBoxOrient:`vertical`,overflow:`hidden`},children:e.shortDesc})})]})]})]},r)})}),(0,x.jsxs)(`div`,{className:`edu-fade-in`,style:{marginTop:`48px`,background:`linear-gradient(135deg, #131B2E 0%, rgba(19,27,46,0.4) 100%)`,border:`1px solid rgba(255, 255, 255, 0.04)`,borderRadius:`24px`,padding:`40px`,display:`flex`,flexDirection:`column`,alignItems:`center`,textAlign:`center`},children:[(0,x.jsx)(`h3`,{style:{fontSize:`22px`,fontWeight:700,color:`#FFFFFF`,marginBottom:`12px`,letterSpacing:`-0.01em`},children:`The Corporate Learning Mandate`}),(0,x.jsx)(`p`,{style:{fontSize:`15px`,color:`#94A3B8`,lineHeight:1.6,maxWidth:`800px`,margin:0},children:`Numbers dictate strategies. Every track within our catalog is curated by enterprise advisors with comprehensive top-tier firm backgrounds, transforming transactional operations into robust modules optimized for scalability.`})]})]}),(0,x.jsx)(et,{})]}),(0,x.jsx)(ne,{}),e&&(0,x.jsx)(`div`,{className:`rec-modal-backdrop`,onClick:()=>t(null),children:(0,x.jsxs)(`div`,{className:`rec-modal-window`,onClick:e=>e.stopPropagation(),children:[(0,x.jsxs)(`div`,{style:{position:`sticky`,top:0,background:`#111827`,display:`flex`,justifyContent:`space-between`,alignItems:`center`,padding:`28px 48px`,borderBottom:`1px solid rgba(255, 255, 255, 0.08)`,zIndex:10},children:[(0,x.jsx)(`h2`,{style:{fontSize:`26px`,fontWeight:800,color:`#FFFFFF`,letterSpacing:`-0.02em`,margin:0},children:e.title}),(0,x.jsx)(`button`,{onClick:()=>t(null),style:{background:`rgba(255,255,255,0.04)`,border:`1px solid rgba(255,255,255,0.08)`,borderRadius:`50%`,width:`44px`,height:`44px`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`#94A3B8`,cursor:`pointer`,transition:`all 0.2s ease`},onMouseEnter:e=>e.currentTarget.style.color=`#FFFFFF`,onMouseLeave:e=>e.currentTarget.style.color=`#94A3B8`,children:(0,x.jsx)(qe,{size:20})})]}),(0,x.jsxs)(`div`,{style:{padding:`48px`},children:[(0,x.jsxs)(`div`,{style:{marginBottom:`40px`},children:[(0,x.jsx)(`h4`,{style:{fontSize:`11px`,fontWeight:800,textTransform:`uppercase`,letterSpacing:`0.15em`,color:`#06B6D4`,marginBottom:`12px`},children:`Executive Overview`}),(0,x.jsx)(`p`,{style:{fontSize:`16px`,color:`#E2E8F0`,lineHeight:1.7,margin:0},children:e.longDesc})]}),(0,x.jsx)(`hr`,{style:{border:0,height:`1px`,background:`rgba(255,255,255,0.08)`,marginBottom:`40px`}}),(0,x.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(300px, 1fr))`,gap:`48px`,alignItems:`start`},children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h4`,{style:{fontSize:`13px`,fontWeight:800,textTransform:`uppercase`,letterSpacing:`0.05em`,color:`#FFFFFF`,marginBottom:`24px`},children:`Core Deliverables`}),(0,x.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:e.points.map((e,t)=>(0,x.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:`14px`},children:[(0,x.jsx)(`span`,{style:{display:`inline-flex`,alignItems:`center`,justifyContent:`center`,width:`22px`,height:`22px`,borderRadius:`50%`,background:`rgba(6, 182, 212, 0.1)`,color:`#06B6D4`,flexShrink:0,marginTop:`2px`},children:(0,x.jsx)(_e,{size:12,strokeWidth:3})}),(0,x.jsx)(`span`,{style:{fontSize:`14.5px`,color:`#94A3B8`,lineHeight:1.5},children:e})]},t))})]}),(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`36px`},children:[(0,x.jsxs)(`div`,{style:{background:`rgba(255,255,255,0.02)`,border:`1px solid rgba(255,255,255,0.04)`,borderRadius:`20px`,padding:`32px`},children:[(0,x.jsx)(`h4`,{style:{fontSize:`12px`,fontWeight:800,textTransform:`uppercase`,letterSpacing:`0.05em`,color:`#FFFFFF`,marginBottom:`20px`},children:`Strategic Value Added`}),(0,x.jsx)(`ul`,{style:{padding:0,margin:0,listStyle:`none`,display:`flex`,flexDirection:`column`,gap:`12px`},children:e.benefits.map((e,t)=>(0,x.jsxs)(`li`,{style:{display:`flex`,alignItems:`center`,gap:`10px`,fontSize:`14px`,color:`#E2E8F0`},children:[(0,x.jsx)(`span`,{style:{width:`6px`,height:`6px`,borderRadius:`50%`,background:`#06B6D4`}}),e]},t))})]}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h4`,{style:{fontSize:`12px`,fontWeight:800,textTransform:`uppercase`,letterSpacing:`0.05em`,color:`#FFFFFF`,marginBottom:`20px`},children:`Target Industry Verticals`}),(0,x.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`10px`},children:e.industries.map((e,t)=>(0,x.jsxs)(`div`,{className:`rec-industry-pill`,children:[(0,x.jsx)(r[e]||Me,{size:16,strokeWidth:1.5}),(0,x.jsx)(`span`,{children:e})]},t))})]}),(0,x.jsxs)(`div`,{style:{background:`linear-gradient(135deg, rgba(6,182,212,0.08) 0%, transparent 100%)`,border:`1px solid rgba(6, 182, 212, 0.15)`,borderRadius:`20px`,padding:`32px`,textAlign:`center`},children:[(0,x.jsx)(`h5`,{style:{fontSize:`16px`,fontWeight:700,color:`#FFFFFF`,marginBottom:`8px`},children:`Ready to transform your global team?`}),(0,x.jsx)(`p`,{style:{fontSize:`13px`,color:`#94A3B8`,marginBottom:`20px`,lineHeight:1.5},children:`Consult our specialist advisors today to map out premium talent pipelines.`}),(0,x.jsxs)(`button`,{onClick:()=>{t(null),window.scrollTo({top:document.body.scrollHeight,behavior:`smooth`})},style:{width:`100%`,padding:`16px`,background:`#06B6D4`,border:0,borderRadius:`12px`,color:`#070F20`,fontWeight:700,fontSize:`14px`,cursor:`pointer`,transition:`background 0.2s ease`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:`8px`},onMouseEnter:e=>e.currentTarget.style.background=`#0891B2`,onMouseLeave:e=>e.currentTarget.style.background=`#06B6D4`,children:[(0,x.jsx)(`span`,{children:`Contact Us`}),(0,x.jsx)(fe,{size:16})]})]})]})]})]})]})})]})}function _t(){let[e,t]=(0,b.useState)(window.location.pathname);switch((0,b.useEffect)(()=>{let e=()=>{t(window.location.pathname)};return window.addEventListener(`popstate`,e),()=>window.removeEventListener(`popstate`,e)},[]),(0,b.useEffect)(()=>{window.scrollTo(0,0)},[e]),e){case`/`:case`/index.html`:return(0,x.jsx)(it,{});case`/about`:return(0,x.jsx)(ut,{});case`/services`:return(0,x.jsx)(dt,{});case`/contact`:return(0,x.jsx)(mt,{});case`/e-learning`:return(0,x.jsx)(ht,{});case`/recruitment-staffing`:return(0,x.jsx)(k,{});case`/financial-consultancy`:return(0,x.jsx)(gt,{});default:return(0,x.jsxs)(`div`,{style:{padding:`40px`,textAlign:`center`},children:[(0,x.jsx)(`h2`,{children:`404 — Section Route Not Found`}),(0,x.jsx)(`a`,{href:`/`,children:`Return to Home Hub Hub`})]})}}y.createRoot(document.getElementById(`root`)).render((0,x.jsx)(b.StrictMode,{children:(0,x.jsx)(_t,{})}));export{o as t};