import{faCircleNotch as n}from"@fortawesome/free-solid-svg-icons";import{FontAwesomeIcon as e}from"@fortawesome/react-fontawesome";import t,{Component as r,useContext as o,useState as i,useEffect as a}from"react";import c from"react-pose";import l from"styled-components";import u from"next/head";import{document as s}from"browser-monads";import{Button as f}from"grommet";import{Helmet as p}from"react-helmet";function d(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function y(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function m(n,e,t){return e&&y(n.prototype,e),t&&y(n,t),n}function h(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function v(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&g(n,e)}function b(n){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function g(n,e){return(g=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function w(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function x(n,e){return!e||"object"!=typeof e&&"function"!=typeof e?w(n):e}function E(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function k(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=n[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!e||t.length!==e);r=!0);}catch(n){o=!0,i=n}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function S(){var n=E(["\n  font-weight: bold;\n  font-family: 'Roboto Slab', sans-serif;\n  margin-right: 25px;\n  text-transform: lowercase;\n"]);return S=function(){return n},n}var C=l.p(S()),O=function n(){d(this,n)};h(O,"textColor","#dcd6ce"),h(O,"backgroundColor","#0f0f0f"),h(O,"link",{color:"#6385a9",colorActive:"#1565c0",colorHighlight:"#6385a9"}),h(O,"text",{color:O.textColor,font:"'Roboto', sans-serif"}),h(O,"page",{backgroundColor:"#0f0f0f",secondaryColor:"#EB6D6D"}),h(O,"navbar",{backgroundColor:O.backgroundColor,height:"60px",title:t.createElement(C,null,"My dank website"),button:{backgroundColor:O.backgroundColor,color:O.textColor,borderColor:"transparent",activeColor:O.link.color,hoverColor:O.link.color}}),h(O,"button",{backgroundColor:O.link.color,color:O.text.color,borderColor:O.link.color,hover:{backgroundColor:O.backgroundColor,color:O.link.color}});var P=t.createContext(O);function j(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function T(n,e){return n(e={exports:{}},e.exports),e.exports}var M=T(function(n,e){Object.defineProperty(e,"__esModule",{value:!0});var t="function"==typeof Symbol&&Symbol.for,r=t?Symbol.for("react.element"):60103,o=t?Symbol.for("react.portal"):60106,i=t?Symbol.for("react.fragment"):60107,a=t?Symbol.for("react.strict_mode"):60108,c=t?Symbol.for("react.profiler"):60114,l=t?Symbol.for("react.provider"):60109,u=t?Symbol.for("react.context"):60110,s=t?Symbol.for("react.async_mode"):60111,f=t?Symbol.for("react.concurrent_mode"):60111,p=t?Symbol.for("react.forward_ref"):60112,d=t?Symbol.for("react.suspense"):60113,y=t?Symbol.for("react.suspense_list"):60120,m=t?Symbol.for("react.memo"):60115,h=t?Symbol.for("react.lazy"):60116,v=t?Symbol.for("react.fundamental"):60117,b=t?Symbol.for("react.responder"):60118;function g(n){if("object"==typeof n&&null!==n){var e=n.$$typeof;switch(e){case r:switch(n=n.type){case s:case f:case i:case c:case a:case d:return n;default:switch(n=n&&n.$$typeof){case u:case p:case l:return n;default:return e}}case h:case m:case o:return e}}}function w(n){return g(n)===f}e.typeOf=g,e.AsyncMode=s,e.ConcurrentMode=f,e.ContextConsumer=u,e.ContextProvider=l,e.Element=r,e.ForwardRef=p,e.Fragment=i,e.Lazy=h,e.Memo=m,e.Portal=o,e.Profiler=c,e.StrictMode=a,e.Suspense=d,e.isValidElementType=function(n){return"string"==typeof n||"function"==typeof n||n===i||n===f||n===c||n===a||n===d||n===y||"object"==typeof n&&null!==n&&(n.$$typeof===h||n.$$typeof===m||n.$$typeof===l||n.$$typeof===u||n.$$typeof===p||n.$$typeof===v||n.$$typeof===b)},e.isAsyncMode=function(n){return w(n)||g(n)===s},e.isConcurrentMode=w,e.isContextConsumer=function(n){return g(n)===u},e.isContextProvider=function(n){return g(n)===l},e.isElement=function(n){return"object"==typeof n&&null!==n&&n.$$typeof===r},e.isForwardRef=function(n){return g(n)===p},e.isFragment=function(n){return g(n)===i},e.isLazy=function(n){return g(n)===h},e.isMemo=function(n){return g(n)===m},e.isPortal=function(n){return g(n)===o},e.isProfiler=function(n){return g(n)===c},e.isStrictMode=function(n){return g(n)===a},e.isSuspense=function(n){return g(n)===d}});j(M);M.typeOf,M.AsyncMode,M.ConcurrentMode,M.ContextConsumer,M.ContextProvider,M.Element,M.ForwardRef,M.Fragment,M.Lazy,M.Memo,M.Portal,M.Profiler,M.StrictMode,M.Suspense,M.isValidElementType,M.isAsyncMode,M.isConcurrentMode,M.isContextConsumer,M.isContextProvider,M.isElement,M.isForwardRef,M.isFragment,M.isLazy,M.isMemo,M.isPortal,M.isProfiler,M.isStrictMode,M.isSuspense;var R=T(function(n,e){"production"!==process.env.NODE_ENV&&function(){Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,t=n?Symbol.for("react.element"):60103,r=n?Symbol.for("react.portal"):60106,o=n?Symbol.for("react.fragment"):60107,i=n?Symbol.for("react.strict_mode"):60108,a=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,l=n?Symbol.for("react.context"):60110,u=n?Symbol.for("react.async_mode"):60111,s=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,d=n?Symbol.for("react.suspense_list"):60120,y=n?Symbol.for("react.memo"):60115,m=n?Symbol.for("react.lazy"):60116,h=n?Symbol.for("react.fundamental"):60117,v=n?Symbol.for("react.responder"):60118;var b=function(n){for(var e=arguments.length,t=Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=0,i="Warning: "+n.replace(/%s/g,function(){return t[o++]});"undefined"!=typeof console&&console.warn(i);try{throw new Error(i)}catch(n){}},g=function(n,e){if(void 0===e)throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!n){for(var t=arguments.length,r=Array(t>2?t-2:0),o=2;o<t;o++)r[o-2]=arguments[o];b.apply(void 0,[e].concat(r))}};function w(n){if("object"==typeof n&&null!==n){var e=n.$$typeof;switch(e){case t:var d=n.type;switch(d){case u:case s:case o:case a:case i:case p:return d;default:var h=d&&d.$$typeof;switch(h){case l:case f:case c:return h;default:return e}}case m:case y:case r:return e}}}var x=u,E=s,k=l,S=c,C=t,O=f,P=o,j=m,T=y,M=r,R=a,_=i,$=p,z=!1;function N(n){return w(n)===s}e.typeOf=w,e.AsyncMode=x,e.ConcurrentMode=E,e.ContextConsumer=k,e.ContextProvider=S,e.Element=C,e.ForwardRef=O,e.Fragment=P,e.Lazy=j,e.Memo=T,e.Portal=M,e.Profiler=R,e.StrictMode=_,e.Suspense=$,e.isValidElementType=function(n){return"string"==typeof n||"function"==typeof n||n===o||n===s||n===a||n===i||n===p||n===d||"object"==typeof n&&null!==n&&(n.$$typeof===m||n.$$typeof===y||n.$$typeof===c||n.$$typeof===l||n.$$typeof===f||n.$$typeof===h||n.$$typeof===v)},e.isAsyncMode=function(n){return z||(z=!0,g(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),N(n)||w(n)===u},e.isConcurrentMode=N,e.isContextConsumer=function(n){return w(n)===l},e.isContextProvider=function(n){return w(n)===c},e.isElement=function(n){return"object"==typeof n&&null!==n&&n.$$typeof===t},e.isForwardRef=function(n){return w(n)===f},e.isFragment=function(n){return w(n)===o},e.isLazy=function(n){return w(n)===m},e.isMemo=function(n){return w(n)===y},e.isPortal=function(n){return w(n)===r},e.isProfiler=function(n){return w(n)===a},e.isStrictMode=function(n){return w(n)===i},e.isSuspense=function(n){return w(n)===p}}()});j(R);R.typeOf,R.AsyncMode,R.ConcurrentMode,R.ContextConsumer,R.ContextProvider,R.Element,R.ForwardRef,R.Fragment,R.Lazy,R.Memo,R.Portal,R.Profiler,R.StrictMode,R.Suspense,R.isValidElementType,R.isAsyncMode,R.isConcurrentMode,R.isContextConsumer,R.isContextProvider,R.isElement,R.isForwardRef,R.isFragment,R.isLazy,R.isMemo,R.isPortal,R.isProfiler,R.isStrictMode,R.isSuspense;var _=T(function(n){"production"===process.env.NODE_ENV?n.exports=M:n.exports=R}),$=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;function A(n){if(null==n)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(n)}var F=function(){try{if(!Object.assign)return!1;var n=new String("abc");if(n[5]="de","5"===Object.getOwnPropertyNames(n)[0])return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(n){return e[n]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(n){r[n]=n}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(n){return!1}}()?Object.assign:function(n,e){for(var t,r,o=A(n),i=1;i<arguments.length;i++){for(var a in t=Object(arguments[i]))z.call(t,a)&&(o[a]=t[a]);if($){r=$(t);for(var c=0;c<r.length;c++)N.call(t,r[c])&&(o[r[c]]=t[r[c]])}}return o},I="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",D=function(){};if("production"!==process.env.NODE_ENV){var W=I,V={},L=Function.call.bind(Object.prototype.hasOwnProperty);D=function(n){var e="Warning: "+n;"undefined"!=typeof console&&console.error(e);try{throw new Error(e)}catch(n){}}}function q(n,e,t,r,o){if("production"!==process.env.NODE_ENV)for(var i in n)if(L(n,i)){var a;try{if("function"!=typeof n[i]){var c=Error((r||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof n[i]+"`.");throw c.name="Invariant Violation",c}a=n[i](e,i,r,t,null,W)}catch(n){a=n}if(!a||a instanceof Error||D((r||"React class")+": type specification of "+t+" `"+i+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof a+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),a instanceof Error&&!(a.message in V)){V[a.message]=!0;var l=o?o():"";D("Failed "+t+" type: "+a.message+(null!=l?l:""))}}}q.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(V={})};var H=q,U=Function.call.bind(Object.prototype.hasOwnProperty),B=function(){};function Y(){return null}"production"!==process.env.NODE_ENV&&(B=function(n){var e="Warning: "+n;"undefined"!=typeof console&&console.error(e);try{throw new Error(e)}catch(n){}});var J=function(n,e){var t="function"==typeof Symbol&&Symbol.iterator,r="@@iterator";var o="<<anonymous>>",i={array:u("array"),bool:u("boolean"),func:u("function"),number:u("number"),object:u("object"),string:u("string"),symbol:u("symbol"),any:l(Y),arrayOf:function(n){return l(function(e,t,r,o,i){if("function"!=typeof n)return new c("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var a=e[t];if(!Array.isArray(a))return new c("Invalid "+o+" `"+i+"` of type `"+f(a)+"` supplied to `"+r+"`, expected an array.");for(var l=0;l<a.length;l++){var u=n(a,l,r,o,i+"["+l+"]",I);if(u instanceof Error)return u}return null})},element:l(function(e,t,r,o,i){var a=e[t];return n(a)?null:new c("Invalid "+o+" `"+i+"` of type `"+f(a)+"` supplied to `"+r+"`, expected a single ReactElement.")}),elementType:l(function(n,e,t,r,o){var i=n[e];return _.isValidElementType(i)?null:new c("Invalid "+r+" `"+o+"` of type `"+f(i)+"` supplied to `"+t+"`, expected a single ReactElement type.")}),instanceOf:function(n){return l(function(e,t,r,i,a){if(!(e[t]instanceof n)){var l=n.name||o;return new c("Invalid "+i+" `"+a+"` of type `"+function(n){if(!n.constructor||!n.constructor.name)return o;return n.constructor.name}(e[t])+"` supplied to `"+r+"`, expected instance of `"+l+"`.")}return null})},node:l(function(n,e,t,r,o){return s(n[e])?null:new c("Invalid "+r+" `"+o+"` supplied to `"+t+"`, expected a ReactNode.")}),objectOf:function(n){return l(function(e,t,r,o,i){if("function"!=typeof n)return new c("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var a=e[t],l=f(a);if("object"!==l)return new c("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected an object.");for(var u in a)if(U(a,u)){var s=n(a,u,r,o,i+"."+u,I);if(s instanceof Error)return s}return null})},oneOf:function(n){if(!Array.isArray(n))return"production"!==process.env.NODE_ENV&&(arguments.length>1?B("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):B("Invalid argument supplied to oneOf, expected an array.")),Y;return l(function(e,t,r,o,i){for(var l=e[t],u=0;u<n.length;u++)if(a(l,n[u]))return null;var s=JSON.stringify(n,function(n,e){return"symbol"===p(e)?String(e):e});return new c("Invalid "+o+" `"+i+"` of value `"+String(l)+"` supplied to `"+r+"`, expected one of "+s+".")})},oneOfType:function(n){if(!Array.isArray(n))return"production"!==process.env.NODE_ENV&&B("Invalid argument supplied to oneOfType, expected an instance of array."),Y;for(var e=0;e<n.length;e++){var t=n[e];if("function"!=typeof t)return B("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+d(t)+" at index "+e+"."),Y}return l(function(e,t,r,o,i){for(var a=0;a<n.length;a++){if(null==(0,n[a])(e,t,r,o,i,I))return null}return new c("Invalid "+o+" `"+i+"` supplied to `"+r+"`.")})},shape:function(n){return l(function(e,t,r,o,i){var a=e[t],l=f(a);if("object"!==l)return new c("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var u in n){var s=n[u];if(s){var p=s(a,u,r,o,i+"."+u,I);if(p)return p}}return null})},exact:function(n){return l(function(e,t,r,o,i){var a=e[t],l=f(a);if("object"!==l)return new c("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");var u=F({},e[t],n);for(var s in u){var p=n[s];if(!p)return new c("Invalid "+o+" `"+i+"` key `"+s+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(e[t],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(n),null,"  "));var d=p(a,s,r,o,i+"."+s,I);if(d)return d}return null})}};function a(n,e){return n===e?0!==n||1/n==1/e:n!=n&&e!=e}function c(n){this.message=n,this.stack=""}function l(n){if("production"!==process.env.NODE_ENV)var t={},r=0;function i(i,a,l,u,s,f,p){if(u=u||o,f=f||l,p!==I){if(e){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var y=u+":"+l;!t[y]&&r<3&&(B("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+u+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[y]=!0,r++)}}return null==a[l]?i?null===a[l]?new c("The "+s+" `"+f+"` is marked as required in `"+u+"`, but its value is `null`."):new c("The "+s+" `"+f+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:n(a,l,u,s,f)}var a=i.bind(null,!1);return a.isRequired=i.bind(null,!0),a}function u(n){return l(function(e,t,r,o,i,a){var l=e[t];return f(l)!==n?new c("Invalid "+o+" `"+i+"` of type `"+p(l)+"` supplied to `"+r+"`, expected `"+n+"`."):null})}function s(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(s);if(null===e||n(e))return!0;var o=function(n){var e=n&&(t&&n[t]||n[r]);if("function"==typeof e)return e}(e);if(!o)return!1;var i,a=o.call(e);if(o!==e.entries){for(;!(i=a.next()).done;)if(!s(i.value))return!1}else for(;!(i=a.next()).done;){var c=i.value;if(c&&!s(c[1]))return!1}return!0;default:return!1}}function f(n){var e=typeof n;return Array.isArray(n)?"array":n instanceof RegExp?"object":function(n,e){return"symbol"===n||!!e&&("Symbol"===e["@@toStringTag"]||"function"==typeof Symbol&&e instanceof Symbol)}(e,n)?"symbol":e}function p(n){if(null==n)return""+n;var e=f(n);if("object"===e){if(n instanceof Date)return"date";if(n instanceof RegExp)return"regexp"}return e}function d(n){var e=p(n);switch(e){case"array":case"object":return"an "+e;case"boolean":case"date":case"regexp":return"a "+e;default:return e}}return c.prototype=Error.prototype,i.checkPropTypes=H,i.resetWarningCache=H.resetWarningCache,i.PropTypes=i,i};function G(){}function K(){}K.resetWarningCache=G;var Q=T(function(n){if("production"!==process.env.NODE_ENV){var e=_;n.exports=J(e.isElement,!0)}else n.exports=function(){function n(n,e,t,r,o,i){if(i!==I){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return n}n.isRequired=n;var t={array:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:K,resetWarningCache:G};return t.PropTypes=t,t}()}),X=function n(){d(this,n)};function Z(){var n=E(["\n    animation-name: spin;\n    align-items: center;\n    max-width: 200px;\n    animation-duration: 2500ms;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n\n    @keyframes spin {\n      from {\n        transform: rotate(0deg);\n      }\n      to {\n        transform: rotate(360deg);\n      }\n    }\n  "]);return Z=function(){return n},n}function nn(){var n=E(["\n    min-width: 100px;\n    width: 100%;\n    color: ","\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n  "]);return nn=function(){return n},n}function en(){var n=E([""]);return en=function(){return n},n}function tn(n){var e=c.div({visible:{opacity:1,height:"auto",transition:{default:{ease:"linear",duration:500}}},hidden:{opacity:0,height:"0px",overflow:"hidden",transition:{default:{ease:"linear",duration:500}}}}),r=l(e)(en());return t.createElement(t.Fragment,null,t.createElement(r,{initialPose:"visible",pose:n.loaded?"hidden":"visible"},t.createElement(rn,{color:"white"})),t.createElement(r,{initialPose:"hidden",pose:n.loaded?"visible":"hidden"},n.loaded&&n.children))}function rn(r){var o=l.div(nn(),r.color),i=l.div(Z());return t.createElement(o,null,t.createElement(i,null,t.createElement(e,{style:{fontSize:"65px",display:"flex",margin:"auto"},icon:n})))}function on(n){return t.createElement(t.Fragment,null)}function an(){var n=E(["\n      border: 8px solid ",";\n      border-radius: 4px;\n      padding: 20px;\n      display: flex;\n      flex-direction: ",";\n      ",";\n      ",";\n      ",";\n\n      ",";\n      ",";\n\n      &::-webkit-scrollbar-track {\n        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n        background-color: #2b2b2b;\n      }\n\n      &::-webkit-scrollbar {\n        width: 10px;\n        background-color: ",";\n      }\n\n      &::-webkit-scrollbar-thumb {\n        background-color: ",";\n        );\n      }\n    "]);return an=function(){return n},n}h(X,"navbar",{height:"64"}),h(X,"page",{sideMargin:"90px"}),tn.defaultProps={loaded:!1},rn.defaultProps={color:"white"},on.defaultProps={optionalWidth:"20px"};var cn=function(n){function e(){return d(this,e),x(this,b(e).apply(this,arguments))}return v(e,r),m(e,[{key:"render",value:function(){var n=l.div(an(),O.text.color,this.props.horizontalScroll?"row":"column",this.props.width?"width: ".concat(this.props.width):"",this.props.height?"height: ".concat(this.props.height):"",this.props.style,this.props.horizontalScroll?"overflow-x: auto":"",this.props.verticalScroll?"overflow-y: auto":"",O.backgroundColor,O.text.color);return t.createElement(n,null,this.props.children)}}]),e}();cn.propTypes={width:Q.string,height:Q.string,horizontalScroll:Q.bool,verticalScroll:Q.bool};var ln=function n(){d(this,n)};h(ln,"mobileSize","900");var un=function(){function n(e){d(this,n),this.style=e}return m(n,[{key:"toString",value:function(){return"\n      @media (max-width: ".concat(ln.mobileSize,"px) {\n        ").concat(this.style,";\n      }")}}]),n}();function sn(){var n=E(["\n    display: flex;\n    flex-direction: column;\n    margin: 0 40px 20px 0;\n    width: ",";\n\n    ","\n  "]);return sn=function(){return n},n}function fn(){var n=E(["\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n\n  ","\n"]);return fn=function(){return n},n}function pn(){var n=E(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]);return pn=function(){return n},n}var dn=l.div(pn()),yn=l.div(fn(),new un("\n    flex-direction: column;\n  "));function mn(n){var e=l.div(sn(),n.width,new un("\n        width: 100%;\n      "));return t.createElement(e,null,n.children)}function hn(n){return t.createElement(t.Fragment,null,t.createElement("meta",{charSet:"utf-8"}),t.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:300,400,700&display=swap",rel:"stylesheet"}),t.createElement("title",null,n.title),t.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),t.createElement("style",{jsx:!0,global:!0},"\n          body {\n            background-color: ".concat(n.backgroundColor,";\n            margin: 0;\n          }\n        ")))}mn.propTypes={width:Q.string},hn.defaultProps={title:"Robbie Cook",backgroundColor:"red"};var vn=function(){function n(e,t,r){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];d(this,n),this.name=e,this.path=t,this.exact=o}return m(n,[{key:"isActive",value:function(){return"/"+s.URL.split("/")[3]===this.path}}]),n}(),bn=function n(){d(this,n)};h(bn,"name","My Dank Website"),h(bn,"links",[new vn("Home","/"),new vn("News","/news"),new vn("Link3","/link3")]);var gn=t.createContext(bn);function wn(n){return t.createElement(u,null,t.createElement(hn,{title:n.title,backgroundColor:n.backgroundColor}))}function xn(){var n=E(["\n    height: ",";\n    width: ",";\n  "]);return xn=function(){return n},n}function En(n){var e=l.div(xn(),n.height,n.width);return t.createElement(e,null)}function kn(){var n=E(["\n      font-size: ",';\n      font-weight: bold;\n      font-family: "Roboto Slab", sans-serif;\n      color: ',";\n      opacity: ",";\n    "]);return kn=function(){return n},n}function Sn(){var n=E(["\n      display: flex;\n      align-items: center;\n    "]);return Sn=function(){return n},n}wn.defaultProps={title:"Robbie Cook's Awesome Website",backgroundColor:"red"},En.propTypes={width:Q.string,height:Q.string};var Cn=function(n){function e(){return d(this,e),x(this,b(e).apply(this,arguments))}return v(e,r),m(e,[{key:"render",value:function(){return t.createElement(t.Fragment,null,this.props.content)}}]),e}();Cn.propTypes={position:Q.string};var On=function(n){function e(){return d(this,e),x(this,b(e).apply(this,arguments))}return v(e,r),m(e,[{key:"render",value:function(){var n=l.div(Sn()),e=l.span(kn(),this.props.fontSize,this.props.color,this.props.opacity),r=t.createElement(e,null,"<"),o=t.createElement(t.Fragment,null,t.createElement(En,{width:this.props.rightTagSpacing}),t.createElement(e,null," />"));return t.createElement(n,null,t.createElement(Cn,{position:"left",content:r}),this.props.children,t.createElement(Cn,{position:"right",content:o}))}}]),e}();function Pn(){var n=E(['\n    font-family: "Roboto", sans-serif;\n    color: ',";\n    ",";\n  "]);return Pn=function(){return n},n}function jn(){var n=E(["\n    margin: 12px 0;\n    color: ",";\n\n    font-family: ",";\n    ",";\n  "]);return jn=function(){return n},n}function Tn(){var n=E(["\n      display: flex;\n      width: fit-content;\n      & * {\n        align-self: center;\n      }\n      ",";\n      ",";\n    "]);return Tn=function(){return n},n}function Mn(){var n=E(["\n      ","\n      font-size: 20px;\n    "]);return Mn=function(){return n},n}function Rn(){var n=E(["\n      ","\n      font-size: 25px;\n    "]);return Rn=function(){return n},n}function _n(){var n=E(["\n      ","\n      font-size: 30px;\n    "]);return _n=function(){return n},n}function $n(){var n=E(["\n      ","\n      font-size: 40px;\n    "]);return $n=function(){return n},n}function zn(){var n=E(["\n      ","\n      font-size: ",";\n      line-height: ",";\n    "]);return zn=function(){return n},n}On.propTypes={color:Q.string,fontSize:Q.string,rightTagSpacing:Q.string,opacity:Q.string},On.defaultProps={color:O.page.secondaryColor,fontSize:"69px",rightTagSpacing:"13px",opacity:"1"};var Nn=function(n){function e(){return d(this,e),x(this,b(e).apply(this,arguments))}return v(e,r),m(e,[{key:"getHeading",value:function(n,e,r){var o='\n      font-family: "Roboto Slab", sans-serif;\n      font-weight: bold;\n      margin: '.concat(this.props.margin,";\n      text-transform: lowercase;\n      color: ").concat(O.text.color,";\n    "),i=l.h1(zn(),o,"53px","53px"),a=l.h2($n(),o),c=l.h3(_n(),o),u=l.h4(Rn(),o),s=l.h5(Mn(),o),f=l.div(Tn(),this.props.center&&"align-self: center",this.props.style),p="";"h1"===n||void 0===n?p=i:"h2"===n?p=a:"h3"===n?p=c:"h4"===n?p=u:"h5"===n&&(p=s);var d=t.createElement(p,{className:r},this.props.children);return t.createElement(f,null,this.props.codify?t.createElement(On,null,d):d)}},{key:"render",value:function(){return this.getHeading(this.props.type,this.props.style,this.props.className,this.props.codify,this.props.margin)}}]),e}();function An(n){var e=o(P).text,r=l.p(jn(),e.color,e.font,n.style);return t.createElement(r,null,n.children)}function Fn(n){var e=l.a(Pn(),O.link.color,n.style);return t.createElement(e,{href:n.href},n.children)}function In(){var n=E(["\n      ","\n      display: flex;\n      ",";\n    "]);return In=function(){return n},n}function Dn(){var n=E(["\n    border: 3px solid ",";\n    border-radius: 6px;\n    transition: 0.03s;\n    height: 40px;\n    transition: .2s;\n\n    /* for svg icons */\n    fill: ",";\n    stroke: ",";\n    border: 1px solid ",";\n\n    &:hover {\n      & p {\n        border-bottom: 1px solid transparent;\n        color: ",";\n      }\n      background-color: ",";\n      box-shadow: none;\n    }\n\n    & p {\n      color: ",";\n      line-height: 28px;\n    }\n\n    margin: ",";\n    color: ",";\n    line-height: 27px;\n    font-size: 16px;\n    padding: 5px 12px;\n    font-weight: normal;\n\n    // Styles for active links\n    background-color: ",";\n\n    ",";\n  "]);return Dn=function(){return n},n}function Wn(n){var e=o(P).button,r=l(f)(Dn(),e.backgroundColor,e.color,e.color,e.color,e.hover.color,e.hover.backgroundColor,e.color,n.margin,e.color,e.backgroundColor,n.style),i=t.createElement(An,{style:"\n    color: ".concat(e.color,";\n    margin: 0;\n    text-decoration: none;\n    line-height: 20px;\n  ")},n.label);return t.createElement(r,{icon:n.icon,label:i,onClick:n.function,href:n.to})}Nn.propTypes={type:Q.string,codify:Q.bool,style:Q.string,margin:Q.string,center:Q.bool},Nn.defaultProps={margin:"0 0 20px 0;",center:!1},An.defaultProps={style:""},Wn.defaultProps={to:"/",label:"My name",active:!1};var Vn=function(n){function e(){return d(this,e),x(this,b(e).apply(this,arguments))}return v(e,r),m(e,[{key:"render",value:function(){var n=this;return t.createElement(Ln,{buttonRow:this.props.buttonRow},this.props.labels.map(function(e,r){return t.createElement(Wn,{function:n.props.functions[r],margin:n.props.buttonMargin,style:n.props.buttonStyle,label:e})}))}}]),e}();Vn.propTypes={labels:Q.array.isRequired,functions:Q.array,buttonRow:Q.bool,buttonStyle:Q.string,activeColor:Q.string};var Ln=function(n){function e(){return d(this,e),x(this,b(e).apply(this,arguments))}return v(e,r),m(e,[{key:"render",value:function(){var n=this,e=l.div(In(),"flex-direction: "+(!1!==n.props.buttonRow?"row":"column")+";",this.props.style);return t.createElement(e,null,this.props.children)}}]),e}();function qn(n){var e=o(P).navbar.button,r="\n    background-color: ".concat(e.backgroundColor,";\n    border-color: ").concat(e.borderColor,";\n    border-width: 1px;\n    color: ").concat(e.color,";\n\n    &:hover {\n      background-color: ").concat(e.backgroundColor,";\n      border-color: ").concat(e.activeColor,";\n      box-shadow: 0px 0px 0px 2px ").concat(e.activeColor,";\n\n      & * {\n        color: ").concat(e.hoverColor,";\n      }\n    }\n\n    margin: ").concat(n.margin,";\n\n    ").concat(n.active&&"\n    & p {\n      color: ".concat(e.activeColor,";\n    }\n    "),"\n  ");return t.createElement(Wn,{style:r,label:n.label,to:n.to},n.children)}function Hn(){var n=E([""]);return Hn=function(){return n},n}function Un(){var n=E(["\n    height: ",";\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    background-color: ",";\n    padding-left: 40px;\n    padding-right: 40px;\n    box-sizing: border-box;\n  "]);return Un=function(){return n},n}function Bn(n){var e=k(i(!1),2),r=(e[0],e[1]);a(function(){r(!0)});var c,u=o(P).navbar,s=l.div(Un(),u.height,u.backgroundColor),f=(c=[],n.links.forEach(function(n){c.push(t.createElement(qn,{to:n.path,label:n.name,active:n.isActive()}))}),c),p=l(An)(Hn());return t.createElement(s,null,t.createElement(p,null,n.title),t.createElement(En,{width:"30px"}),f)}function Yn(n){var e=k(i(!1),2),r=(e[0],e[1]);a(function(){r(!0)},[]);o(P).navbar,o(gn);return t.createElement(t.Fragment,null,t.createElement(Bn,{title:n.title,links:n.links}))}Ln.propTypes={buttonRow:Q.bool},qn.defaultProps={label:"My label",to:"/",active:!1,margin:"0 30px 0 0"},Bn.defaultProps={title:"Testing title",links:O.navbar.links},Yn.defaultProps={title:"My Website",links:[]};var Jn=function(){function n(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t;d(this,n),"string"==typeof e?(this.top=e,this.right=t,this.bottom=r,this.left=o):(this.top="".concat(e,"px"),this.right="".concat(t,"px"),this.bottom="".concat(r,"px"),this.left="".concat(o,"px"))}return m(n,[{key:"toString",value:function(){return"".concat(this.top," ").concat(this.right," ").concat(this.bottom," ").concat(this.left)}}]),n}();function Gn(n){return t.createElement("div",{className:"application"},t.createElement(p,null,t.createElement("meta",{charSet:"utf-8"}),t.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:300,400,700&display=swap",rel:"stylesheet"}),t.createElement("title",null,n.title),t.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),t.createElement("style",null,"\n              body {\n                background-color: ".concat(n.backgroundColor,";\n                margin: 0;\n              }\n            "))))}function Kn(){var n=E(["\n    display: flex;\n    flex-direction: column;\n    padding: ",";\n\n    // Mobile styles\n    ","\n  "]);return Kn=function(){return n},n}function Qn(n){var e=k(i(!1),2),r=e[0],c=e[1];a(function(){c(!0)},[]);var u=o(P),s=o(gn),f=l.div(Kn(),new Jn(40,90,0,90),new un("\n      flex-direction: column;\n      padding: ".concat(new Jn(20,30),"; \n    ")));return t.createElement(t.Fragment,null,t.createElement(Gn,{title:s.name,backgroundColor:u.backgroundColor}),r&&t.createElement(t.Fragment,null,n.next&&t.createElement(wn,{title:s.name,backgroundColor:u.backgroundColor}),t.createElement(Yn,{title:u.navbar.title,links:s.links}),t.createElement("div",{style:n.style},t.createElement(f,{style:n.style},n.children))))}function Xn(){var n=E(["\n      min-height: ","px;\n      display: flex;\n      ",";\n    "]);return Xn=function(){return n},n}Gn.defaultProps={backgroundColor:"white",title:"Robbie Cook"},Qn.defaultProps={next:!0};var Zn=function(n){function e(n){var t;return d(this,e),(t=x(this,b(e).call(this,n))).state={width:0,height:0},t.updateWindowDimensions=t.updateWindowDimensions.bind(w(t)),t}return v(e,r),m(e,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){var n=l.div(Xn(),this.state.height-X.navbar.height,this.props.style);return t.createElement(n,null,this.props.children)}}]),e}();function ne(){var n=E(["\ndisplay: flex;\nflex-direction: column;\nwidth: 100%"]);return ne=function(){return n},n}var ee=l.div(ne());function te(n){return t.createElement(Qn,null,t.createElement(dn,null,t.createElement(Nn,{type:"h1"},"Sample"),t.createElement(yn,null,t.createElement(mn,null),t.createElement(mn,null))))}function re(){var n=E(["\n      color: inherit;\n      &:hover {\n        color: inherit;\n      }\n    "]);return re=function(){return n},n}function oe(){var n=E(["\n      width: ","px;\n      height: ","px;\n      border-radius: ","px;\n      line-height: ","px;\n      text-align: center;\n      font-size: ","px;\n      cursor: pointer;\n      background-color: ",";\n      margin: 0 9px;\n      color: ",";\n      transition: 0.1s;\n      transition-timing-function: ease-out;\n\n      &:hover {\n        background-color: ",";\n        color: ",";\n      }\n\n      &:active {\n        background-color: ",";\n        color: ",";\n      }\n    "]);return oe=function(){return n},n}function ie(){var n=E(["\n      display: flex;\n      margin-top: 17px;\n      align-items: center;\n    "]);return ie=function(){return n},n}var ae=function(n){function e(){return d(this,e),x(this,b(e).apply(this,arguments))}return v(e,r),m(e,[{key:"render",value:function(){var n=l.div(ie());return t.createElement(n,null,this.props.children)}}]),e}();ae.propTypes={};var ce=function(n){function e(){return d(this,e),x(this,b(e).apply(this,arguments))}return v(e,r),m(e,[{key:"render",value:function(){var n=l.div(oe(),50,50,25,50,35,O.text.color,O.backgroundColor,O.link.color,O.text.color,O.link.color,O.text.color),e=l.a(re());return t.createElement(n,null,t.createElement(e,{href:this.props.href},this.props.children))}}]),e}();ce.propTypes={};export{cn as BorderBox,Wn as Button,Vn as ButtonGenerator,Ln as ButtonWrapper,On as Codify,mn as Col,ee as Container,bn as DefaultSiteContext,O as DefaultTheme,Jn as Dimensions,Nn as Heading,ce as Icon,ae as IconsWrapper,dn as LayoutWrapper,Fn as Link,un as MobileView,Gn as MyHelmet,vn as MyLink,Yn as NavigationBar,Qn as Page,yn as Row,on as SampleComponent,te as SamplePage,Zn as Section,gn as SiteContext,X as Sizes,En as Spacer,An as Text,P as ThemeContext,tn as Transition};
//# sourceMappingURL=index.es.js.map
