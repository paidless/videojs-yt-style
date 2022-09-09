/*! eruda-features v2.0.0 https://github.com/liriliri/eruda-features#readme */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.erudaFeatures=t():e.erudaFeatures=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/assets/",t(t.s=47)}([function(e,t){var r=e.exports={version:"2.5.1"};"number"==typeof __e&&(__e=r)},function(e,t,r){"use strict";function n(e){return f[e]}function o(e){for(var t=1;t<arguments.length;t++)for(var r in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],r)&&(e[r]=arguments[t][r]);return e}function i(e,t){for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return-1}function a(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}return p.test(e)?e.replace(d,n):e}function s(e){return!e&&0!==e||!(!m(e)||0!==e.length)}function u(e){var t=o({},e);return t._parent=e,t}function c(e,t){return e.path=t,e}function l(e,t){return(e?e+".":"")+t}t.__esModule=!0,t.extend=o,t.indexOf=i,t.escapeExpression=a,t.isEmpty=s,t.createFrame=u,t.blockParams=c,t.appendContextPath=l;var f={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},d=/[&<>"'`=]/g,p=/[&<>"'`=]/,h=Object.prototype.toString;t.toString=h;var v=function(e){return"function"==typeof e};v(/x/)&&(t.isFunction=v=function(e){return"function"==typeof e&&"[object Function]"===h.call(e)}),t.isFunction=v;var m=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===h.call(e)};t.isArray=m},function(e,t){var r=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(e,t){var r={}.hasOwnProperty;e.exports=function(e,t){return r.call(e,t)}},function(e,t,r){var n=r(10),o=r(37),i=r(19),a=Object.defineProperty;t.f=r(5)?Object.defineProperty:function(e,t,r){if(n(e),t=i(t,!0),n(r),o)try{return a(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},function(e,t,r){e.exports=!r(12)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t,r){var n=r(63),o=r(16);e.exports=function(e){return n(o(e))}},function(e,t,r){var n=r(2),o=r(0),i=r(36),a=r(8),s=function(e,t,r){var u,c,l,f=e&s.F,d=e&s.G,p=e&s.S,h=e&s.P,v=e&s.B,m=e&s.W,y=d?o:o[t]||(o[t]={}),g=y.prototype,w=d?n:p?n[t]:(n[t]||{}).prototype;d&&(r=t);for(u in r)(c=!f&&w&&void 0!==w[u])&&u in y||(l=c?w[u]:r[u],y[u]=d&&"function"!=typeof w[u]?r[u]:v&&c?i(l,n):m&&w[u]==l?function(e){var t=function(t,r,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,r)}return new e(t,r,n)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(l):h&&"function"==typeof l?i(Function.call,l):l,h&&((y.virtual||(y.virtual={}))[u]=l,e&s.R&&g&&!g[u]&&a(g,u,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,e.exports=s},function(e,t,r){var n=r(4),o=r(15);e.exports=r(5)?function(e,t,r){return n.f(e,t,o(1,r))}:function(e,t,r){return e[t]=r,e}},function(e,t,r){var n=r(18)("wks"),o=r(14),i=r(2).Symbol,a="function"==typeof i;(e.exports=function(e){return n[e]||(n[e]=a&&i[e]||(a?i:o)("Symbol."+e))}).store=n},function(e,t,r){var n=r(11);e.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,r){"use strict";function n(e,t){var r=t&&t.loc,i=void 0,a=void 0;r&&(i=r.start.line,a=r.start.column,e+=" - "+i+":"+a);for(var s=Error.prototype.constructor.call(this,e),u=0;u<o.length;u++)this[o[u]]=s[o[u]];Error.captureStackTrace&&Error.captureStackTrace(this,n);try{r&&(this.lineNumber=i,Object.defineProperty?Object.defineProperty(this,"column",{value:a,enumerable:!0}):this.column=a)}catch(e){}}t.__esModule=!0;var o=["description","fileName","lineNumber","message","name","number","stack"];n.prototype=new Error,t.default=n,e.exports=t.default},function(e,t){var r=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++r+n).toString(36))}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,r){var n=r(18)("keys"),o=r(14);e.exports=function(e){return n[e]||(n[e]=o(e))}},function(e,t,r){var n=r(2),o=n["__core-js_shared__"]||(n["__core-js_shared__"]={});e.exports=function(e){return o[e]||(o[e]={})}},function(e,t,r){var n=r(11);e.exports=function(e,t){if(!n(e))return e;var r,o;if(t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;if("function"==typeof(r=e.valueOf)&&!n(o=r.call(e)))return o;if(!t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=r(57),i=n(o),a=r(72),s=n(a),u="function"==typeof s.default&&"symbol"==typeof i.default?function(e){return typeof e}:function(e){return e&&"function"==typeof s.default&&e.constructor===s.default&&e!==s.default.prototype?"symbol":typeof e};t.default="function"==typeof s.default&&"symbol"===u(i.default)?function(e){return void 0===e?"undefined":u(e)}:function(e){return e&&"function"==typeof s.default&&e.constructor===s.default&&e!==s.default.prototype?"symbol":void 0===e?"undefined":u(e)}},function(e,t){var r=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:r)(e)}},function(e,t){e.exports=!0},function(e,t){e.exports={}},function(e,t,r){var n=r(10),o=r(62),i=r(26),a=r(17)("IE_PROTO"),s=function(){},u=function(){var e,t=r(38)("iframe"),n=i.length;for(t.style.display="none",r(67).appendChild(t),t.src="javascript:",e=t.contentWindow.document,e.open(),e.write("<script>document.F=Object<\/script>"),e.close(),u=e.F;n--;)delete u.prototype[i[n]];return u()};e.exports=Object.create||function(e,t){var r;return null!==e?(s.prototype=n(e),r=new s,s.prototype=null,r[a]=e):r=u(),void 0===t?r:o(r,t)}},function(e,t,r){var n=r(41),o=r(26);e.exports=Object.keys||function(e){return n(e,o)}},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t,r){var n=r(4).f,o=r(3),i=r(9)("toStringTag");e.exports=function(e,t,r){e&&!o(e=r?e:e.prototype,i)&&n(e,i,{configurable:!0,value:t})}},function(e,t,r){t.f=r(9)},function(e,t,r){var n=r(2),o=r(0),i=r(22),a=r(28),s=r(4).f;e.exports=function(e){var t=o.Symbol||(o.Symbol=i?{}:n.Symbol||{});"_"==e.charAt(0)||e in t||s(t,e,{value:a.f(e)})}},function(e,t){t.f={}.propertyIsEnumerable},function(e,t,r){var n=r(30),o=r(15),i=r(6),a=r(19),s=r(3),u=r(37),c=Object.getOwnPropertyDescriptor;t.f=r(5)?c:function(e,t){if(e=i(e),t=a(t,!0),u)try{return c(e,t)}catch(e){}if(s(e,t))return o(!n.f.call(e,t),e[t])}},function(e,t,r){e.exports={default:r(48),__esModule:!0}},function(e,t,r){var n=r(16);e.exports=function(e){return Object(n(e))}},function(e,t,r){var n=r(3),o=r(33),i=r(17)("IE_PROTO"),a=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=o(e),n(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?a:null}},function(e,t,r){var n=r(7),o=r(0),i=r(12);e.exports=function(e,t){var r=(o.Object||{})[e]||Object[e],a={};a[e]=t(r),n(n.S+n.F*i(function(){r(1)}),"Object",a)}},function(e,t,r){var n=r(50);e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}}},function(e,t,r){e.exports=!r(5)&&!r(12)(function(){return 7!=Object.defineProperty(r(38)("div"),"a",{get:function(){return 7}}).a})},function(e,t,r){var n=r(11),o=r(2).document,i=n(o)&&n(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},function(e,t,r){"use strict";var n=r(22),o=r(7),i=r(40),a=r(8),s=r(3),u=r(23),c=r(61),l=r(27),f=r(34),d=r(9)("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};e.exports=function(e,t,r,v,m,y,g){c(r,t,v);var w,b,A,x=function(e){if(!p&&e in S)return S[e];switch(e){case"keys":case"values":return function(){return new r(this,e)}}return function(){return new r(this,e)}},_=t+" Iterator",M="values"==m,P=!1,S=e.prototype,T=S[d]||S["@@iterator"]||m&&S[m],O=T||x(m),z=m?M?x("entries"):O:void 0,E="Array"==t?S.entries||T:T;if(E&&(A=f(E.call(new e)))!==Object.prototype&&A.next&&(l(A,_,!0),n||s(A,d)||a(A,d,h)),M&&T&&"values"!==T.name&&(P=!0,O=function(){return T.call(this)}),n&&!g||!p&&!P&&S[d]||a(S,d,O),u[t]=O,u[_]=h,m)if(w={values:M?O:x("values"),keys:y?O:x("keys"),entries:z},g)for(b in w)b in S||i(S,b,w[b]);else o(o.P+o.F*(p||P),t,w);return w}},function(e,t,r){e.exports=r(8)},function(e,t,r){var n=r(3),o=r(6),i=r(64)(!1),a=r(17)("IE_PROTO");e.exports=function(e,t){var r,s=o(e),u=0,c=[];for(r in s)r!=a&&n(s,r)&&c.push(r);for(;t.length>u;)n(s,r=t[u++])&&(~i(c,r)||c.push(r));return c}},function(e,t){var r={}.toString;e.exports=function(e){return r.call(e).slice(8,-1)}},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,r){var n=r(41),o=r(26).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,o)}},function(e,t,r){var n=r(98);e.exports=(n.default||n).template({1:function(e,t,r,n,o){var i,a,s=null!=t?t:e.nullContext||{},u=r.helperMissing,c=e.escapeExpression;return'        <li>\n            <a href="http://caniuse.com/#search='+c((a=null!=(a=r.key||o&&o.key)?a:u,"function"==typeof a?a.call(s,{name:"key",hash:{},data:o}):a))+'" target="_blank" class="eruda-inner-wrapper '+(null!=(i=r.if.call(s,t,{name:"if",hash:{},fn:e.program(2,o,0),inverse:e.noop,data:o}))?i:"")+'">\n                '+c((a=null!=(a=r.key||o&&o.key)?a:u,"function"==typeof a?a.call(s,{name:"key",hash:{},data:o}):a))+"\n            </a>\n        </li>\n"},2:function(e,t,r,n,o){return"eruda-ok"},compiler:[7,">= 4.0.0"],main:function(e,t,r,n,o){var i;return"<ul>\n"+(null!=(i=r.each.call(null!=t?t:e.nullContext||{},null!=t?t.features:t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o}))?i:"")+'</ul>\n<a class="eruda-html5test" target="_blank" href="http://html5test.com">Go to HTML5 Test</a>'},useData:!0})},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t,r){this.helpers=e||{},this.partials=t||{},this.decorators=r||{},u.registerDefaultHelpers(this),c.registerDefaultDecorators(this)}t.__esModule=!0,t.HandlebarsEnvironment=o;var i=r(1),a=r(13),s=n(a),u=r(100),c=r(108),l=r(110),f=n(l);t.VERSION="4.0.11";t.COMPILER_REVISION=7;var d={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};t.REVISION_CHANGES=d;o.prototype={constructor:o,logger:f.default,log:f.default.log,registerHelper:function(e,t){if("[object Object]"===i.toString.call(e)){if(t)throw new s.default("Arg not supported with multiple helpers");i.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===i.toString.call(e))i.extend(this.partials,e);else{if(void 0===t)throw new s.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===i.toString.call(e)){if(t)throw new s.default("Arg not supported with multiple decorators");i.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]}};var p=f.default.log;t.log=p,t.createFrame=i.createFrame,t.logger=f.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=r(32),i=n(o),a=r(51),s=n(a),u=r(52),c=n(u),l=r(56),f=n(l),d=r(82),p=n(d),h=r(86),v=n(h),m=r(94),y=n(m),g=r(95),w=g["feature-detects"],b=g["special-names"];e.exports=function(e){var t=e.util.evalCss;return new(function(e){function n(){(0,s.default)(this,n);var e=(0,f.default)(this,(n.__proto__||(0,i.default)(n)).call(this));return e.name="features",e._style=t(r(96)),e._tpl=r(45),e._features={},e._isInit=!1,e}return(0,v.default)(n,e),(0,c.default)(n,[{key:"init",value:function(e,t){(0,p.default)(n.prototype.__proto__||(0,i.default)(n.prototype),"init",this).call(this,e,t),e.html(r(45)())}},{key:"show",value:function(){(0,p.default)(n.prototype.__proto__||(0,i.default)(n.prototype),"show",this).call(this),this._isInit||this._initFeatures()}},{key:"hide",value:function(){(0,p.default)(n.prototype.__proto__||(0,i.default)(n.prototype),"hide",this).call(this)}},{key:"destroy",value:function(){(0,p.default)(n.prototype.__proto__||(0,i.default)(n.prototype),"destroy",this).call(this),t.remove(this._style)}},{key:"_initFeatures",value:function(){var e=this;this._isInit=!0,y.default.testRunner();var t=0,r=w.length;w.forEach(function(n){b[n]&&(n=b[n]),n=n.replace(/\//g,""),y.default.on(n,function(o){e._features[n]=o,++t===r&&e._render()})})}},{key:"_render",value:function(){this._$el.html(this._tpl({features:this._features}))}}]),n}(e.Tool))}},function(e,t,r){r(49),e.exports=r(0).Object.getPrototypeOf},function(e,t,r){var n=r(33),o=r(34);r(35)("getPrototypeOf",function(){return function(e){return o(n(e))}})},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,r){"use strict";t.__esModule=!0;var n=r(53),o=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,o.default)(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}()},function(e,t,r){e.exports={default:r(54),__esModule:!0}},function(e,t,r){r(55);var n=r(0).Object;e.exports=function(e,t,r){return n.defineProperty(e,t,r)}},function(e,t,r){var n=r(7);n(n.S+n.F*!r(5),"Object",{defineProperty:r(4).f})},function(e,t,r){"use strict";t.__esModule=!0;var n=r(20),o=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":(0,o.default)(t))&&"function"!=typeof t?e:t}},function(e,t,r){e.exports={default:r(58),__esModule:!0}},function(e,t,r){r(59),r(68),e.exports=r(28).f("iterator")},function(e,t,r){"use strict";var n=r(60)(!0);r(39)(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,r=this._i;return r>=t.length?{value:void 0,done:!0}:(e=n(t,r),this._i+=e.length,{value:e,done:!1})})},function(e,t,r){var n=r(21),o=r(16);e.exports=function(e){return function(t,r){var i,a,s=String(o(t)),u=n(r),c=s.length;return u<0||u>=c?e?"":void 0:(i=s.charCodeAt(u),i<55296||i>56319||u+1===c||(a=s.charCodeAt(u+1))<56320||a>57343?e?s.charAt(u):i:e?s.slice(u,u+2):a-56320+(i-55296<<10)+65536)}}},function(e,t,r){"use strict";var n=r(24),o=r(15),i=r(27),a={};r(8)(a,r(9)("iterator"),function(){return this}),e.exports=function(e,t,r){e.prototype=n(a,{next:o(1,r)}),i(e,t+" Iterator")}},function(e,t,r){var n=r(4),o=r(10),i=r(25);e.exports=r(5)?Object.defineProperties:function(e,t){o(e);for(var r,a=i(t),s=a.length,u=0;s>u;)n.f(e,r=a[u++],t[r]);return e}},function(e,t,r){var n=r(42);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},function(e,t,r){var n=r(6),o=r(65),i=r(66);e.exports=function(e){return function(t,r,a){var s,u=n(t),c=o(u.length),l=i(a,c);if(e&&r!=r){for(;c>l;)if((s=u[l++])!=s)return!0}else for(;c>l;l++)if((e||l in u)&&u[l]===r)return e||l||0;return!e&&-1}}},function(e,t,r){var n=r(21),o=Math.min;e.exports=function(e){return e>0?o(n(e),9007199254740991):0}},function(e,t,r){var n=r(21),o=Math.max,i=Math.min;e.exports=function(e,t){return e=n(e),e<0?o(e+t,0):i(e,t)}},function(e,t,r){var n=r(2).document;e.exports=n&&n.documentElement},function(e,t,r){r(69);for(var n=r(2),o=r(8),i=r(23),a=r(9)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<s.length;u++){var c=s[u],l=n[c],f=l&&l.prototype;f&&!f[a]&&o(f,a,c),i[c]=i.Array}},function(e,t,r){"use strict";var n=r(70),o=r(71),i=r(23),a=r(6);e.exports=r(39)(Array,"Array",function(e,t){this._t=a(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,o(1)):"keys"==t?o(0,r):"values"==t?o(0,e[r]):o(0,[r,e[r]])},"values"),i.Arguments=i.Array,n("keys"),n("values"),n("entries")},function(e,t){e.exports=function(){}},function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},function(e,t,r){e.exports={default:r(73),__esModule:!0}},function(e,t,r){r(74),r(79),r(80),r(81),e.exports=r(0).Symbol},function(e,t,r){"use strict";var n=r(2),o=r(3),i=r(5),a=r(7),s=r(40),u=r(75).KEY,c=r(12),l=r(18),f=r(27),d=r(14),p=r(9),h=r(28),v=r(29),m=r(76),y=r(77),g=r(10),w=r(6),b=r(19),A=r(15),x=r(24),_=r(78),M=r(31),P=r(4),S=r(25),T=M.f,O=P.f,z=_.f,E=n.Symbol,k=n.JSON,j=k&&k.stringify,C=p("_hidden"),R=p("toPrimitive"),D={}.propertyIsEnumerable,L=l("symbol-registry"),I=l("symbols"),N=l("op-symbols"),B=Object.prototype,F="function"==typeof E,H=n.QObject,U=!H||!H.prototype||!H.prototype.findChild,G=i&&c(function(){return 7!=x(O({},"a",{get:function(){return O(this,"a",{value:7}).a}})).a})?function(e,t,r){var n=T(B,t);n&&delete B[t],O(e,t,r),n&&e!==B&&O(B,t,n)}:O,Q=function(e){var t=I[e]=x(E.prototype);return t._k=e,t},V=F&&"symbol"==typeof E.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof E},q=function(e,t,r){return e===B&&q(N,t,r),g(e),t=b(t,!0),g(r),o(I,t)?(r.enumerable?(o(e,C)&&e[C][t]&&(e[C][t]=!1),r=x(r,{enumerable:A(0,!1)})):(o(e,C)||O(e,C,A(1,{})),e[C][t]=!0),G(e,t,r)):O(e,t,r)},W=function(e,t){g(e);for(var r,n=m(t=w(t)),o=0,i=n.length;i>o;)q(e,r=n[o++],t[r]);return e},J=function(e,t){return void 0===t?x(e):W(x(e),t)},$=function(e){var t=D.call(this,e=b(e,!0));return!(this===B&&o(I,e)&&!o(N,e))&&(!(t||!o(this,e)||!o(I,e)||o(this,C)&&this[C][e])||t)},X=function(e,t){if(e=w(e),t=b(t,!0),e!==B||!o(I,t)||o(N,t)){var r=T(e,t);return!r||!o(I,t)||o(e,C)&&e[C][t]||(r.enumerable=!0),r}},K=function(e){for(var t,r=z(w(e)),n=[],i=0;r.length>i;)o(I,t=r[i++])||t==C||t==u||n.push(t);return n},Y=function(e){for(var t,r=e===B,n=z(r?N:w(e)),i=[],a=0;n.length>a;)!o(I,t=n[a++])||r&&!o(B,t)||i.push(I[t]);return i};F||(E=function(){if(this instanceof E)throw TypeError("Symbol is not a constructor!");var e=d(arguments.length>0?arguments[0]:void 0),t=function(r){this===B&&t.call(N,r),o(this,C)&&o(this[C],e)&&(this[C][e]=!1),G(this,e,A(1,r))};return i&&U&&G(B,e,{configurable:!0,set:t}),Q(e)},s(E.prototype,"toString",function(){return this._k}),M.f=X,P.f=q,r(44).f=_.f=K,r(30).f=$,r(43).f=Y,i&&!r(22)&&s(B,"propertyIsEnumerable",$,!0),h.f=function(e){return Q(p(e))}),a(a.G+a.W+a.F*!F,{Symbol:E});for(var Z="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ee=0;Z.length>ee;)p(Z[ee++]);for(var te=S(p.store),re=0;te.length>re;)v(te[re++]);a(a.S+a.F*!F,"Symbol",{for:function(e){return o(L,e+="")?L[e]:L[e]=E(e)},keyFor:function(e){if(!V(e))throw TypeError(e+" is not a symbol!");for(var t in L)if(L[t]===e)return t},useSetter:function(){U=!0},useSimple:function(){U=!1}}),a(a.S+a.F*!F,"Object",{create:J,defineProperty:q,defineProperties:W,getOwnPropertyDescriptor:X,getOwnPropertyNames:K,getOwnPropertySymbols:Y}),k&&a(a.S+a.F*(!F||c(function(){var e=E();return"[null]"!=j([e])||"{}"!=j({a:e})||"{}"!=j(Object(e))})),"JSON",{stringify:function(e){if(void 0!==e&&!V(e)){for(var t,r,n=[e],o=1;arguments.length>o;)n.push(arguments[o++]);return t=n[1],"function"==typeof t&&(r=t),!r&&y(t)||(t=function(e,t){if(r&&(t=r.call(this,e,t)),!V(t))return t}),n[1]=t,j.apply(k,n)}}}),E.prototype[R]||r(8)(E.prototype,R,E.prototype.valueOf),f(E,"Symbol"),f(Math,"Math",!0),f(n.JSON,"JSON",!0)},function(e,t,r){var n=r(14)("meta"),o=r(11),i=r(3),a=r(4).f,s=0,u=Object.isExtensible||function(){return!0},c=!r(12)(function(){return u(Object.preventExtensions({}))}),l=function(e){a(e,n,{value:{i:"O"+ ++s,w:{}}})},f=function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,n)){if(!u(e))return"F";if(!t)return"E";l(e)}return e[n].i},d=function(e,t){if(!i(e,n)){if(!u(e))return!0;if(!t)return!1;l(e)}return e[n].w},p=function(e){return c&&h.NEED&&u(e)&&!i(e,n)&&l(e),e},h=e.exports={KEY:n,NEED:!1,fastKey:f,getWeak:d,onFreeze:p}},function(e,t,r){var n=r(25),o=r(43),i=r(30);e.exports=function(e){var t=n(e),r=o.f;if(r)for(var a,s=r(e),u=i.f,c=0;s.length>c;)u.call(e,a=s[c++])&&t.push(a);return t}},function(e,t,r){var n=r(42);e.exports=Array.isArray||function(e){return"Array"==n(e)}},function(e,t,r){var n=r(6),o=r(44).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return o(e)}catch(e){return a.slice()}};e.exports.f=function(e){return a&&"[object Window]"==i.call(e)?s(e):o(n(e))}},function(e,t){},function(e,t,r){r(29)("asyncIterator")},function(e,t,r){r(29)("observable")},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=r(32),i=n(o),a=r(83),s=n(a);t.default=function e(t,r,n){null===t&&(t=Function.prototype);var o=(0,s.default)(t,r);if(void 0===o){var a=(0,i.default)(t);return null===a?void 0:e(a,r,n)}if("value"in o)return o.value;var u=o.get;if(void 0!==u)return u.call(n)}},function(e,t,r){e.exports={default:r(84),__esModule:!0}},function(e,t,r){r(85);var n=r(0).Object;e.exports=function(e,t){return n.getOwnPropertyDescriptor(e,t)}},function(e,t,r){var n=r(6),o=r(31).f;r(35)("getOwnPropertyDescriptor",function(){return function(e,t){return o(n(e),t)}})},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=r(87),i=n(o),a=r(91),s=n(a),u=r(20),c=n(u);t.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":(0,c.default)(t)));e.prototype=(0,s.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(i.default?(0,i.default)(e,t):e.__proto__=t)}},function(e,t,r){e.exports={default:r(88),__esModule:!0}},function(e,t,r){r(89),e.exports=r(0).Object.setPrototypeOf},function(e,t,r){var n=r(7);n(n.S,"Object",{setPrototypeOf:r(90).set})},function(e,t,r){var n=r(11),o=r(10),i=function(e,t){if(o(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{n=r(36)(Function.call,r(31).f(Object.prototype,"__proto__").set,2),n(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,r){return i(e,r),t?e.__proto__=r:n(e,r),e}}({},!1):void 0),check:i}},function(e,t,r){e.exports={default:r(92),__esModule:!0}},function(e,t,r){r(93);var n=r(0).Object;e.exports=function(e,t){return n.create(e,t)}},function(e,t,r){var n=r(7);n(n.S,"Object",{create:r(24)})},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function is(e,t){return(void 0===e?"undefined":(0,_typeof3.default)(e))===t}function testRunner(){var e,t,r,n,o,i,a;for(var s in tests)if(tests.hasOwnProperty(s)){if(e=[],t=tests[s],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(r=0;r<t.options.aliases.length;r++)e.push(t.options.aliases[r].toLowerCase());for(n=is(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)i=e[o],a=i.split("."),1===a.length?Modernizr[a[0]]=n:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=n),classes.push((n?"":"no-")+a.join("-"))}}function createElement(){return"function"!=typeof document.createElement?document.createElement(arguments[0]):isSVG?document.createElementNS.call(document,"http://www.w3.org/2000/svg",arguments[0]):document.createElement.apply(document,arguments)}function contains(e,t){return!!~(""+e).indexOf(t)}function getBody(){var e=document.body;return e||(e=createElement(isSVG?"svg":"body"),e.fake=!0),e}function injectElementWithStyles(e,t,r,n){var o,i,a,s,u="modernizr",c=createElement("div"),l=getBody();if(parseInt(r,10))for(;r--;)a=createElement("div"),a.id=n?n[r]:u+(r+1),c.appendChild(a);return o=createElement("style"),o.type="text/css",o.id="s"+u,(l.fake?l:c).appendChild(o),l.appendChild(c),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e)),c.id=u,l.fake&&(l.style.background="",l.style.overflow="hidden",s=docElement.style.overflow,docElement.style.overflow="hidden",docElement.appendChild(l)),i=t(c,e),l.fake?(l.parentNode.removeChild(l),docElement.style.overflow=s,docElement.offsetHeight):c.parentNode.removeChild(c),!!i}function domToCSS(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function computedStyle(e,t,r){var n;if("getComputedStyle"in window){n=getComputedStyle.call(window,e,t);var o=window.console;if(null!==n)r&&(n=n.getPropertyValue(r));else if(o){var i=o.error?"error":"log";o[i].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else n=!t&&e.currentStyle&&e.currentStyle[r];return n}function nativeTestProps(e,t){var r=e.length;if("CSS"in window&&"supports"in window.CSS){for(;r--;)if(window.CSS.supports(domToCSS(e[r]),t))return!0;return!1}if("CSSSupportsRule"in window){for(var n=[];r--;)n.push("("+domToCSS(e[r])+":"+t+")");return n=n.join(" or "),injectElementWithStyles("@supports ("+n+") { #modernizr { position: absolute; } }",function(e){return"absolute"==computedStyle(e,null,"position")})}}function cssToDOM(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,r){return t+r.toUpperCase()}).replace(/^-/,"")}function testProps(e,t,r,n){function o(){a&&(delete mStyle.style,delete mStyle.modElem)}if(n=!is(n,"undefined")&&n,!is(r,"undefined")){var i=nativeTestProps(e,r);if(!is(i,"undefined"))return i}for(var a,s,u,c,l,f=["modernizr","tspan","samp"];!mStyle.style&&f.length;)a=!0,mStyle.modElem=createElement(f.shift()),mStyle.style=mStyle.modElem.style;for(u=e.length,s=0;s<u;s++)if(c=e[s],l=mStyle.style[c],contains(c,"-")&&(c=cssToDOM(c)),void 0!==mStyle.style[c]){if(n||is(r,"undefined"))return o(),"pfx"!=t||c;try{mStyle.style[c]=r}catch(e){}if(mStyle.style[c]!=l)return o(),"pfx"!=t||c}return o(),!1}function fnBind(e,t){return function(){return e.apply(t,arguments)}}function testDOMProps(e,t,r){var n;for(var o in e)if(e[o]in t)return!1===r?e[o]:(n=t[e[o]],is(n,"function")?fnBind(n,r||t):n);return!1}function testPropsAll(e,t,r,n,o){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+cssomPrefixes.join(i+" ")+i).split(" ");return is(t,"string")||is(t,"undefined")?testProps(a,t,n,o):(a=(e+" "+domPrefixes.join(i+" ")+i).split(" "),testDOMProps(a,t,r))}function testAllProps(e,t,r){return testPropsAll(e,void 0,void 0,t,r)}function setClasses(e){var t=docElement.className,r=Modernizr._config.classPrefix||"";if(isSVG&&(t=t.baseVal),Modernizr._config.enableJSClass){var n=new RegExp("(^|\\s)"+r+"no-js(\\s|$)");t=t.replace(n,"$1"+r+"js$2")}Modernizr._config.enableClasses&&(t+=" "+r+e.join(" "+r),isSVG?docElement.className.baseVal=t:docElement.className=t)}function addTest(e,t){if("object"==(void 0===e?"undefined":(0,_typeof3.default)(e)))for(var r in e)hasOwnProp(e,r)&&addTest(r,e[r]);else{e=e.toLowerCase();var n=e.split("."),o=Modernizr[n[0]];if(2==n.length&&(o=o[n[1]]),void 0!==o)return Modernizr;t="function"==typeof t?t():t,1==n.length?Modernizr[n[0]]=t:(!Modernizr[n[0]]||Modernizr[n[0]]instanceof Boolean||(Modernizr[n[0]]=new Boolean(Modernizr[n[0]])),Modernizr[n[0]][n[1]]=t),setClasses([(t&&0!=t?"":"no-")+n.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function detectDeleteDatabase(e,t){var r=e.deleteDatabase(t);r.onsuccess=function(){addTest("indexeddb.deletedatabase",!0)},r.onerror=function(){addTest("indexeddb.deletedatabase",!1)}}var _typeof2=__webpack_require__(20),_typeof3=_interopRequireDefault(_typeof2),tests=[],ModernizrProto={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!1,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var r=this;setTimeout(function(){t(r[e])},0)},addTest:function(e,t,r){tests.push({name:e,fn:t,options:r})},addAsyncTest:function(e){tests.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=ModernizrProto,Modernizr=new Modernizr;var classes=[],docElement=document.documentElement,isSVG="svg"===docElement.nodeName.toLowerCase();/*!
{
  "name" : "HTML5 Audio Element",
  "property": "audio",
  "tags" : ["html5", "audio", "media"]
}
!*/
Modernizr.addTest("audio",function(){var e=createElement("audio"),t=!1;try{t=!!e.canPlayType,t&&(t=new Boolean(t),t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(e){}return t}),/*!
{
  "name": "Canvas",
  "property": "canvas",
  "caniuse": "canvas",
  "tags": ["canvas", "graphics"],
  "polyfills": ["flashcanvas", "excanvas", "slcanvas", "fxcanvas"]
}
!*/
Modernizr.addTest("canvas",function(){var e=createElement("canvas");return!(!e.getContext||!e.getContext("2d"))}),/*!
{
  "name": "Cookies",
  "property": "cookies",
  "tags": ["storage"],
  "authors": ["tauren"]
}
!*/
Modernizr.addTest("cookies",function(){try{document.cookie="cookietest=1";var e=-1!=document.cookie.indexOf("cookietest=");return document.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}catch(e){return!1}});var omPrefixes="Moz O ms Webkit",cssomPrefixes=ModernizrProto._config.usePrefixes?omPrefixes.split(" "):[];ModernizrProto._cssomPrefixes=cssomPrefixes;var modElem={elem:createElement("modernizr")};Modernizr._q.push(function(){delete modElem.elem});var mStyle={style:modElem.elem.style};Modernizr._q.unshift(function(){delete mStyle.style});var domPrefixes=ModernizrProto._config.usePrefixes?omPrefixes.toLowerCase().split(" "):[];ModernizrProto._domPrefixes=domPrefixes,ModernizrProto.testAllProps=testPropsAll,ModernizrProto.testAllProps=testAllProps,/*!
{
  "name": "CSS Animations",
  "property": "cssanimations",
  "caniuse": "css-animation",
  "polyfills": ["transformie", "csssandpaper"],
  "tags": ["css"],
  "warnings": ["Android < 4 will pass this test, but can only animate a single property at a time"],
  "notes": [{
    "name" : "Article: 'Dispelling the Android CSS animation myths'",
    "href": "https://goo.gl/OGw5Gm"
  }]
}
!*/
Modernizr.addTest("cssanimations",testAllProps("animationName","a",!0)),/*!
{
  "name": "Box Shadow",
  "property": "boxshadow",
  "caniuse": "css-boxshadow",
  "tags": ["css"],
  "knownBugs": [
    "WebOS false positives on this test.",
    "The Kindle Silk browser false positives"
  ]
}
!*/
Modernizr.addTest("boxshadow",testAllProps("boxShadow","1px 1px",!0)),/*!
{
  "name": "Box Sizing",
  "property": "boxsizing",
  "caniuse": "css3-boxsizing",
  "polyfills": ["borderboxmodel", "boxsizingpolyfill", "borderbox"],
  "tags": ["css"],
  "builderAliases": ["css_boxsizing"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing"
  },{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/248"
  }]
}
!*/
Modernizr.addTest("boxsizing",testAllProps("boxSizing","border-box",!0)&&(void 0===document.documentMode||document.documentMode>7));var prefixes=ModernizrProto._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];ModernizrProto._prefixes=prefixes,/*!
{
  "name": "CSS Calc",
  "property": "csscalc",
  "caniuse": "calc",
  "tags": ["css"],
  "builderAliases": ["css_calc"],
  "authors": ["@calvein"]
}
!*/
Modernizr.addTest("csscalc",function(){var e=createElement("a");return e.style.cssText="width:"+prefixes.join("calc(10px);width:"),!!e.style.length}),/*!
{
  "name": "Flexbox",
  "property": "flexbox",
  "caniuse": "flexbox",
  "tags": ["css"],
  "notes": [{
    "name": "The _new_ flexbox",
    "href": "http://dev.w3.org/csswg/css3-flexbox"
  }],
  "warnings": [
    "A `true` result for this detect does not imply that the `flex-wrap` property is supported; see the `flexwrap` detect."
  ]
}
!*/
Modernizr.addTest("flexbox",testAllProps("flexBasis","1px",!0)),/*!
{
  "name": "CSS Transforms",
  "property": "csstransforms",
  "caniuse": "transforms2d",
  "tags": ["css"]
}
!*/
Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&testAllProps("transform","scale(1)",!0)});var testStyles=ModernizrProto.testStyles=injectElementWithStyles,newSyntax="CSS"in window&&"supports"in window.CSS,oldSyntax="supportsCSS"in window;Modernizr.addTest("supports",newSyntax||oldSyntax),/*!
{
  "name": "CSS Transforms 3D",
  "property": "csstransforms3d",
  "caniuse": "transforms3d",
  "tags": ["css"],
  "warnings": [
    "Chrome may occassionally fail this test on some systems; more info: https://code.google.com/p/chromium/issues/detail?id=129004"
  ]
}
!*/
Modernizr.addTest("csstransforms3d",function(){var e=!!testAllProps("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in docElement.style)){var r;Modernizr.supports?r="@supports (perspective: 1px)":(r="@media (transform-3d)",t&&(r+=",(-webkit-transform-3d)")),r+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",testStyles("#modernizr{width:0;height:0}"+r,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),/*!
{
  "name": "CSS Transitions",
  "property": "csstransitions",
  "caniuse": "css-transitions",
  "tags": ["css"]
}
!*/
Modernizr.addTest("csstransitions",testAllProps("transition","all",!0)),/*!
{
  "name": "ES6 Promises",
  "property": "promises",
  "caniuse": "promises",
  "polyfills": ["es6promises"],
  "authors": ["Krister Kari", "Jake Archibald"],
  "tags": ["es6"],
  "notes": [{
    "name": "The ES6 promises spec",
    "href": "https://github.com/domenic/promises-unwrapping"
  },{
    "name": "Chromium dashboard - ES6 Promises",
    "href": "https://www.chromestatus.com/features/5681726336532480"
  },{
    "name": "JavaScript Promises: There and back again - HTML5 Rocks",
    "href": "http://www.html5rocks.com/en/tutorials/es6/promises/"
  }]
}
!*/
Modernizr.addTest("promises",function(){return"Promise"in window&&"resolve"in window.Promise&&"reject"in window.Promise&&"all"in window.Promise&&"race"in window.Promise&&function(){var e;return new window.Promise(function(t){e=t}),"function"==typeof e}()}),/*!
{
  "name": "File API",
  "property": "filereader",
  "caniuse": "fileapi",
  "notes": [{
    "name": "W3C Working Draft",
    "href": "https://www.w3.org/TR/FileAPI/"
  }],
  "tags": ["file"],
  "builderAliases": ["file_api"],
  "knownBugs": ["Will fail in Safari 5 due to its lack of support for the standards defined FileReader object"]
}
!*/
Modernizr.addTest("filereader",!!(window.File&&window.FileList&&window.FileReader));var atRule=function(e){var t,r=prefixes.length,n=window.CSSRule;if(void 0!==n){if(!e)return!1;if(e=e.replace(/^@/,""),(t=e.replace(/-/g,"_").toUpperCase()+"_RULE")in n)return"@"+e;for(var o=0;o<r;o++){var i=prefixes[o];if(i.toUpperCase()+"_"+t in n)return"@-"+i.toLowerCase()+"-"+e}return!1}};ModernizrProto.atRule=atRule;var prefixed=ModernizrProto.prefixed=function(e,t,r){return 0===e.indexOf("@")?atRule(e):(-1!=e.indexOf("-")&&(e=cssToDOM(e)),t?testPropsAll(e,t,r):testPropsAll(e,"pfx"))};/*!
{
  "name": "Filesystem API",
  "property": "filesystem",
  "caniuse": "filesystem",
  "notes": [{
    "name": "W3 Draft",
    "href": "http://dev.w3.org/2009/dap/file-system/file-dir-sys.html"
  }],
  "authors": ["Eric Bidelman (@ebidel)"],
  "tags": ["file"],
  "builderAliases": ["file_filesystem"],
  "knownBugs": ["The API will be present in Chrome incognito, but will throw an exception. See crbug.com/93417"]
}
!*/
Modernizr.addTest("filesystem",!!prefixed("requestFileSystem",window)),/*!
{
  "name": "placeholder attribute",
  "property": "placeholder",
  "tags": ["forms", "attribute"],
  "builderAliases": ["forms_placeholder"]
}
!*/
Modernizr.addTest("placeholder","placeholder"in createElement("input")&&"placeholder"in createElement("textarea")),/*!
{
  "name": "Fullscreen API",
  "property": "fullscreen",
  "caniuse": "fullscreen",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en/API/Fullscreen"
  }],
  "polyfills": ["screenfulljs"],
  "builderAliases": ["fullscreen_api"]
}
!*/
Modernizr.addTest("fullscreen",!(!prefixed("exitFullscreen",document,!1)&&!prefixed("cancelFullScreen",document,!1))),/*!
{
  "name": "Geolocation API",
  "property": "geolocation",
  "caniuse": "geolocation",
  "tags": ["media"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/WebAPI/Using_geolocation"
  }],
  "polyfills": [
    "joshuabell-polyfill",
    "webshims",
    "geo-location-javascript",
    "geolocation-api-polyfill"
  ]
}
!*/
Modernizr.addTest("geolocation","geolocation"in navigator);var hasEvent=function(){function e(e,r){var n;return!!e&&(r&&"string"!=typeof r||(r=createElement(r||"div")),e="on"+e,n=e in r,!n&&t&&(r.setAttribute||(r=createElement("div")),r.setAttribute(e,""),n="function"==typeof r[e],void 0!==r[e]&&(r[e]=void 0),r.removeAttribute(e)),n)}var t=!("onblur"in document.documentElement);return e}();ModernizrProto.hasEvent=hasEvent,/*!
{
  "name": "Hashchange event",
  "property": "hashchange",
  "caniuse": "hashchange",
  "tags": ["history"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/window.onhashchange"
  }],
  "polyfills": [
    "jquery-hashchange",
    "moo-historymanager",
    "jquery-ajaxy",
    "hasher",
    "shistory"
  ]
}
!*/
Modernizr.addTest("hashchange",function(){return!1!==hasEvent("hashchange",window)&&(void 0===document.documentMode||document.documentMode>7)}),/*!
{
  "name": "History API",
  "property": "history",
  "caniuse": "history",
  "tags": ["history"],
  "authors": ["Hay Kranen", "Alexander Farkas"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/html51/browsers.html#the-history-interface"
  }, {
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/window.history"
  }],
  "polyfills": ["historyjs", "html5historyapi"]
}
!*/
Modernizr.addTest("history",function(){var e=navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone")||"file:"===location.protocol)&&(window.history&&"pushState"in window.history)});var hasOwnProp;!function(){var e={}.hasOwnProperty;hasOwnProp=is(e,"undefined")||is(e.call,"undefined")?function(e,t){return t in e&&is(e.constructor.prototype[t],"undefined")}:function(t,r){return e.call(t,r)}}(),ModernizrProto._l={},ModernizrProto.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},ModernizrProto._trigger=function(e,t){if(this._l[e]){var r=this._l[e];setTimeout(function(){var e;for(e=0;e<r.length;e++)(0,r[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){ModernizrProto.addTest=addTest}),/*!
{
  "name": "Webp",
  "async": true,
  "property": "webp",
  "tags": ["image"],
  "builderAliases": ["img_webp"],
  "authors": ["Krister Kari", "@amandeep", "Rich Bradshaw", "Ryan Seddon", "Paul Irish"],
  "notes": [{
    "name": "Webp Info",
    "href": "https://developers.google.com/speed/webp/"
  }, {
    "name": "Chormium blog - Chrome 32 Beta: Animated WebP images and faster Chrome for Android touch input",
    "href": "https://blog.chromium.org/2013/11/chrome-32-beta-animated-webp-images-and.html"
  }, {
    "name": "Webp Lossless Spec",
    "href": "https://developers.google.com/speed/webp/docs/webp_lossless_bitstream_specification"
  }, {
    "name": "Article about WebP support on Android browsers",
    "href": "http://www.wope-framework.com/en/2013/06/24/webp-support-on-android-browsers/"
  }, {
    "name": "Chormium WebP announcement",
    "href": "https://blog.chromium.org/2011/11/lossless-and-transparency-encoding-in.html?m=1"
  }]
}
!*/
Modernizr.addAsyncTest(function(){function e(e,t,r){function n(t){var n=!(!t||"load"!==t.type)&&1==o.width;addTest(e,"webp"===e&&n?new Boolean(n):n),r&&r(t)}var o=new Image;o.onerror=n,o.onload=n,o.src=t}var t=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],r=t.shift();e(r.name,r.uri,function(r){if(r&&"load"===r.type)for(var n=0;n<t.length;n++)e(t[n].name,t[n].uri)})}),/*!
{
  "name": "Webp Alpha",
  "async": true,
  "property": "webpalpha",
  "aliases": ["webp-alpha"],
  "tags": ["image"],
  "authors": ["Krister Kari", "Rich Bradshaw", "Ryan Seddon", "Paul Irish"],
  "notes": [{
    "name": "WebP Info",
    "href": "https://developers.google.com/speed/webp/"
  },{
    "name": "Article about WebP support on Android browsers",
    "href": "http://www.wope-framework.com/en/2013/06/24/webp-support-on-android-browsers/"
  },{
    "name": "Chromium WebP announcement",
    "href": "https://blog.chromium.org/2011/11/lossless-and-transparency-encoding-in.html?m=1"
  }]
}
!*/
Modernizr.addAsyncTest(function(){var e=new Image;e.onerror=function(){addTest("webpalpha",!1,{aliases:["webp-alpha"]})},e.onload=function(){addTest("webpalpha",1==e.width,{aliases:["webp-alpha"]})},e.src="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="}),/*!
{
  "name": "IndexedDB",
  "property": "indexeddb",
  "caniuse": "indexeddb",
  "tags": ["storage"],
  "polyfills": ["indexeddb"],
  "async": true
}
!*/
Modernizr.addAsyncTest(function(){var e;try{e=prefixed("indexedDB",window)}catch(e){}if(e){var t="modernizr-"+Math.random(),r=e.open(t);r.onerror=function(){r.error&&"InvalidStateError"===r.error.name?addTest("indexeddb",!1):(addTest("indexeddb",!0),detectDeleteDatabase(e,t))},r.onsuccess=function(){addTest("indexeddb",!0),detectDeleteDatabase(e,t)}}else addTest("indexeddb",!1)}),/*!
{
  "name": "JSON",
  "property": "json",
  "caniuse": "json",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Glossary/JSON"
  }],
  "polyfills": ["json2"]
}
!*/
Modernizr.addTest("json","JSON"in window&&"parse"in JSON&&"stringify"in JSON),/*!
{
  "name": "Fetch API",
  "property": "fetch",
  "tags": ["network"],
  "caniuse": "fetch",
  "notes": [{
    "name": "Fetch Living Standard",
    "href": "https://fetch.spec.whatwg.org/"
  }],
  "polyfills": ["fetch"]
}
!*/
Modernizr.addTest("fetch","fetch"in window),/*!
{
  "name": "XML HTTP Request Level 2 XHR2",
  "property": "xhr2",
  "tags": ["network"],
  "builderAliases": ["network_xhr2"],
  "notes": [{
    "name": "W3 Spec",
    "href": "https://www.w3.org/TR/XMLHttpRequest2/"
  },{
    "name": "Details on Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/385"
  }]
}
!*/
Modernizr.addTest("xhr2","XMLHttpRequest"in window&&"withCredentials"in new XMLHttpRequest),/*!
{
  "name": "Notification",
  "property": "notification",
  "caniuse": "notifications",
  "authors": ["Theodoor van Donge", "Hendrik Beskow"],
  "notes": [{
    "name": "HTML5 Rocks tutorial",
    "href": "http://www.html5rocks.com/en/tutorials/notifications/quick/"
  },{
    "name": "W3C spec",
    "href": "https://www.w3.org/TR/notifications/"
  }, {
    "name": "Changes in Chrome to Notifications API due to Service Worker Push Notifications",
    "href": "https://developers.google.com/web/updates/2015/05/Notifying-you-of-notificiation-changes"
  }],
  "knownBugs": [
    "Possibility of false-positive on Chrome for Android if permissions we're granted for a website prior to Chrome 44."
  ],
  "polyfills": ["desktop-notify", "html5-notifications"]
}
!*/
Modernizr.addTest("notification",function(){if(!window.Notification||!window.Notification.requestPermission)return!1;if("granted"===window.Notification.permission)return!0;try{new window.Notification("")}catch(e){if("TypeError"===e.name)return!1}return!0}),/*!
{
  "name": "Navigation Timing API",
  "property": "performance",
  "caniuse": "nav-timing",
  "tags": ["performance"],
  "authors": ["Scott Murphy (@uxder)"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/navigation-timing/"
  },{
    "name": "HTML5 Rocks article",
    "href": "http://www.html5rocks.com/en/tutorials/webperformance/basics/"
  }],
  "polyfills": ["perfnow"]
}
!*/
Modernizr.addTest("performance",!!prefixed("performance",window)),/*!
{
  "name": "DOM Pointer Events API",
  "property": "pointerevents",
  "tags": ["input"],
  "authors": ["Stu Cox"],
  "notes": [
    {
      "name": "W3C spec",
      "href": "https://www.w3.org/TR/pointerevents/"
    }
  ],
  "warnings": ["This property name now refers to W3C DOM PointerEvents: https://github.com/Modernizr/Modernizr/issues/548#issuecomment-12812099"],
  "polyfills": ["handjs","pep"]
}
!*/
Modernizr.addTest("pointerevents",function(){var e=!1,t=domPrefixes.length;for(e=Modernizr.hasEvent("pointerdown");t--&&!e;)hasEvent(domPrefixes[t]+"pointerdown")&&(e=!0);return e}),/*!
{
  "name": "QuerySelector",
  "property": "queryselector",
  "caniuse": "queryselector",
  "tags": ["queryselector"],
  "authors": ["Andrew Betts (@triblondon)"],
  "notes": [{
    "name" : "W3C Selectors reference",
    "href": "https://www.w3.org/TR/selectors-api/#queryselectorall"
  }],
  "polyfills": ["css-selector-engine"]
}
!*/
Modernizr.addTest("queryselector","querySelector"in document&&"querySelectorAll"in document),/*!
{
  "name": "script[async]",
  "property": "scriptasync",
  "caniuse": "script-async",
  "tags": ["script"],
  "builderAliases": ["script_async"],
  "authors": ["Theodoor van Donge"]
}
!*/
Modernizr.addTest("scriptasync","async"in createElement("script")),/*!
{
  "name": "script[defer]",
  "property": "scriptdefer",
  "caniuse": "script-defer",
  "tags": ["script"],
  "builderAliases": ["script_defer"],
  "authors": ["Theodoor van Donge"],
  "warnings": ["Browser implementation of the `defer` attribute vary: https://stackoverflow.com/questions/3952009/defer-attribute-chrome#answer-3982619"],
  "knownBugs": ["False positive in Opera 12"]
}
!*/
Modernizr.addTest("scriptdefer","defer"in createElement("script")),/*!
{
  "name": "ServiceWorker API",
  "property": "serviceworker",
  "notes": [{
    "name": "ServiceWorkers Explained",
    "href": "https://github.com/slightlyoff/ServiceWorker/blob/master/explainer.md"
  }]
}
!*/
Modernizr.addTest("serviceworker","serviceWorker"in navigator),/*!
{
  "name": "Local Storage",
  "property": "localstorage",
  "caniuse": "namevalue-storage",
  "tags": ["storage"],
  "knownBugs": [],
  "notes": [],
  "warnings": [],
  "polyfills": [
    "joshuabell-polyfill",
    "cupcake",
    "storagepolyfill",
    "amplifyjs",
    "yui-cacheoffline"
  ]
}
!*/
Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}}),/*!
{
  "name": "Session Storage",
  "property": "sessionstorage",
  "tags": ["storage"],
  "polyfills": ["joshuabell-polyfill", "cupcake", "sessionstorage"]
}
!*/
Modernizr.addTest("sessionstorage",function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(e){return!1}}),/*!
{
  "name": "Web SQL Database",
  "property": "websqldatabase",
  "caniuse": "sql-storage",
  "tags": ["storage"]
}
!*/
Modernizr.addTest("websqldatabase","openDatabase"in window),/*!
{
  "name": "style[scoped]",
  "property": "stylescoped",
  "caniuse": "style-scoped",
  "tags": ["dom"],
  "builderAliases": ["style_scoped"],
  "authors": ["Cătălin Mariș"],
  "notes": [{
    "name": "WHATWG Specification",
    "href": "https://html.spec.whatwg.org/multipage/semantics.html#attr-style-scoped"
  }],
  "polyfills": ["scoped-styles"]
}
!*/
Modernizr.addTest("stylescoped","scoped"in createElement("style")),/*!
{
  "name": "SVG",
  "property": "svg",
  "caniuse": "svg",
  "tags": ["svg"],
  "authors": ["Erik Dahlstrom"],
  "polyfills": [
    "svgweb",
    "raphael",
    "amplesdk",
    "canvg",
    "svg-boilerplate",
    "sie",
    "dojogfx",
    "fabricjs"
  ]
}
!*/
Modernizr.addTest("svg",!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),/*!
{
  "name": "Template strings",
  "property": "templatestrings",
  "notes": [{
    "name": "MDN Reference",
    "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings#Browser_compatibility"
  }]
}
!*/
Modernizr.addTest("templatestrings",function(){var supports;try{eval("``"),supports=!0}catch(e){}return!!supports}),/*!
{
  "name": "Touch Events",
  "property": "touchevents",
  "caniuse" : "touch",
  "tags": ["media", "attribute"],
  "notes": [{
    "name": "Touch Events spec",
    "href": "https://www.w3.org/TR/2013/WD-touch-events-20130124/"
  }],
  "warnings": [
    "Indicates if the browser supports the Touch Events spec, and does not necessarily reflect a touchscreen device"
  ],
  "knownBugs": [
    "False-positive on some configurations of Nokia N900",
    "False-positive on some BlackBerry 6.0 builds – https://github.com/Modernizr/Modernizr/issues/372#issuecomment-3112695"
  ]
}
!*/
Modernizr.addTest("touchevents",function(){var e;if("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)e=!0;else{var t=["@media (",prefixes.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");testStyles(t,function(t){e=9===t.offsetTop})}return e}),/*!
{
  "name": "Typed arrays",
  "property": "typedarrays",
  "caniuse": "typedarrays",
  "tags": ["js"],
  "authors": ["Stanley Stuart (@fivetanley)"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/JavaScript_typed_arrays"
  },{
    "name": "Kronos spec",
    "href": "https://www.khronos.org/registry/typedarray/specs/latest/"
  }],
  "polyfills": ["joshuabell-polyfill"]
}
!*/
Modernizr.addTest("typedarrays","ArrayBuffer"in window);/*!
{
  "name": "Blob URLs",
  "property": "bloburls",
  "caniuse": "bloburls",
  "notes": [{
    "name": "W3C Working Draft",
    "href": "https://www.w3.org/TR/FileAPI/#creating-revoking"
  }],
  "tags": ["file", "url"],
  "authors": ["Ron Waldon (@jokeyrhyme)"]
}
!*/
var url=prefixed("URL",window,!1);url=url&&window[url],Modernizr.addTest("bloburls",url&&"revokeObjectURL"in url&&"createObjectURL"in url),/*!
{
  "name": "Data URI",
  "property": "datauri",
  "caniuse": "datauri",
  "tags": ["url"],
  "builderAliases": ["url_data_uri"],
  "async": true,
  "notes": [{
    "name": "Wikipedia article",
    "href": "https://en.wikipedia.org/wiki/Data_URI_scheme"
  }],
  "warnings": ["Support in Internet Explorer 8 is limited to images and linked resources like CSS files, not HTML files"]
}
!*/
Modernizr.addAsyncTest(function(){function e(){var e=new Image;e.onerror=function(){addTest("datauri",!0),Modernizr.datauri=new Boolean(!0),Modernizr.datauri.over32kb=!1},e.onload=function(){addTest("datauri",!0),Modernizr.datauri=new Boolean(!0),Modernizr.datauri.over32kb=1==e.width&&1==e.height};for(var t="R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";t.length<33e3;)t="\r\n"+t;e.src="data:image/gif;base64,"+t}-1!==navigator.userAgent.indexOf("MSIE 7.")&&setTimeout(function(){addTest("datauri",!1)},10);var t=new Image;t.onerror=function(){addTest("datauri",!1)},t.onload=function(){1==t.width&&1==t.height?e():addTest("datauri",!1)},t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}),/*!
{
  "name": "HTML5 Video",
  "property": "video",
  "caniuse": "video",
  "tags": ["html5"],
  "knownBugs": [
    "Without QuickTime, `Modernizr.video.h264` will be `undefined`; https://github.com/Modernizr/Modernizr/issues/546"
  ],
  "polyfills": [
    "html5media",
    "mediaelementjs",
    "sublimevideo",
    "videojs",
    "leanbackplayer",
    "videoforeverybody"
  ]
}
!*/
Modernizr.addTest("video",function(){var e=createElement("video"),t=!1;try{t=!!e.canPlayType,t&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(e){}return t}),/*!
{
  "name": "WebGL",
  "property": "webgl",
  "caniuse": "webgl",
  "tags": ["webgl", "graphics"],
  "polyfills": ["jebgl", "cwebgl", "iewebgl"]
}
!*/
Modernizr.addTest("webgl",function(){var e=createElement("canvas"),t="probablySupportsContext"in e?"probablySupportsContext":"supportsContext";return t in e?e[t]("webgl")||e[t]("experimental-webgl"):"WebGLRenderingContext"in window});/*!
{
  "name": "WebSockets Support",
  "property": "websockets",
  "authors": ["Phread [fearphage]", "Mike Sherov [mikesherov]", "Burak Yigit Kaya [BYK]"],
  "caniuse": "websockets",
  "tags": ["html5"],
  "warnings": [
    "This test will reject any old version of WebSockets even if it is not prefixed such as in Safari 5.1"
  ],
  "notes": [{
    "name": "CLOSING State and Spec",
    "href": "https://www.w3.org/TR/websockets/#the-websocket-interface"
  }],
  "polyfills": [
    "sockjs",
    "socketio",
    "kaazing-websocket-gateway",
    "websocketjs",
    "atmosphere",
    "graceful-websocket",
    "portal",
    "datachannel"
  ]
}
!*/
var supports=!1;try{supports="WebSocket"in window&&2===window.WebSocket.CLOSING}catch(e){}Modernizr.addTest("websockets",supports),Modernizr.testRunner=testRunner,delete ModernizrProto.addTest,delete ModernizrProto.addAsyncTest;for(var i=0;i<Modernizr._q.length;i++)Modernizr._q[i]();module.exports=Modernizr},function(e,t){e.exports={"feature-detects":["audio","canvas","cookies","css/animations","css/boxshadow","css/boxsizing","css/calc","css/flexbox","css/transforms","css/transforms3d","css/transitions","es6/promises","file/api","file/filesystem","forms/placeholder","fullscreen-api","geolocation","hashchange","history","img/webp","img/webp-alpha","indexeddb","json","network/fetch","network/xhr2","notification","performance","pointerevents","queryselector","script/async","script/defer","serviceworker","storage/localstorage","storage/sessionstorage","storage/websqldatabase","style/scoped","svg","templatestrings","touchevents","typed-arrays","url/bloburls","url/data-uri","video","webgl","websockets"],"special-names":{"css/boxshadow":"boxshadow","css/boxsizing":"boxsizing","css/flexbox":"flexbox","es6/promises":"promises","file/api":"filereader","file/filesystem":"filesystem","forms/placeholder":"placeholder","fullscreen-api":"fullscreen","img/webp":"webp","img/webp-alpha":"webpalpha","network/fetch":"fetch","network/xhr2":"xhr2","storage/localstorage":"localstorage","storage/sessionstorage":"sessionstorage","storage/websqldatabase":"websqldatabase","typed-arrays":"typedarrays","url/bloburls":"bloburls","url/data-uri":"datauri"}}},function(e,t,r){t=e.exports=r(97)(void 0),t.push([e.i,'.eruda-dev-tools .eruda-tools .eruda-features{padding-bottom:40px;padding-top:5px}.eruda-dev-tools .eruda-tools .eruda-features ul{overflow-y:auto;-webkit-overflow-scrolling:touch;height:100%}.eruda-dev-tools .eruda-tools .eruda-features ul:after{content:"";display:block;clear:both}.eruda-dev-tools .eruda-tools .eruda-features ul li{width:33.3%;float:left;padding:5px}.eruda-dev-tools .eruda-tools .eruda-features ul li .eruda-inner-wrapper{overflow-x:auto;-webkit-overflow-scrolling:touch;font-size:12px;text-decoration:underline;display:block;padding:10px;text-align:center;color:var(--console-error-foreground);background:var(--console-error-background);border:1px solid var(--console-error-border)}.eruda-dev-tools .eruda-tools .eruda-features ul li .eruda-inner-wrapper.eruda-ok{background:var(--darker-background);border:1px solid var(--border);color:var(--foreground)}.eruda-dev-tools .eruda-tools .eruda-features .eruda-html5test{position:absolute;left:0;bottom:0;color:var(--fore-ground);border-top:1px solid var(--border);width:100%;background:var(--darker-background);display:block;height:40px;line-height:40px;text-decoration:none;text-align:center;margin-top:10px}.eruda-dev-tools .eruda-tools .eruda-features .eruda-html5test:active{color:var(--select-foreground)}',""])},function(e,t){function r(e,t){var r=e[1]||"",o=e[3];if(!o)return r;if(t&&"function"==typeof btoa){var i=n(o);return[r].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[r].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=r(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),t.push(a))}},t}},function(e,t,r){e.exports=r(99).default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function i(){var e=new s.HandlebarsEnvironment;return p.extend(e,s),e.SafeString=c.default,e.Exception=f.default,e.Utils=p,e.escapeExpression=p.escapeExpression,e.VM=v,e.template=function(t){return v.template(t,e)},e}t.__esModule=!0;var a=r(46),s=o(a),u=r(111),c=n(u),l=r(13),f=n(l),d=r(1),p=o(d),h=r(112),v=o(h),m=r(113),y=n(m),g=i();g.create=i,y.default(g),g.default=g,t.default=g,e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){a.default(e),u.default(e),l.default(e),d.default(e),h.default(e),m.default(e),g.default(e)}t.__esModule=!0,t.registerDefaultHelpers=o;var i=r(101),a=n(i),s=r(102),u=n(s),c=r(103),l=n(c),f=r(104),d=n(f),p=r(105),h=n(p),v=r(106),m=n(v),y=r(107),g=n(y)},function(e,t,r){"use strict";t.__esModule=!0;var n=r(1);t.default=function(e){e.registerHelper("blockHelperMissing",function(t,r){var o=r.inverse,i=r.fn;if(!0===t)return i(this);if(!1===t||null==t)return o(this);if(n.isArray(t))return t.length>0?(r.ids&&(r.ids=[r.name]),e.helpers.each(t,r)):o(this);if(r.data&&r.ids){var a=n.createFrame(r.data);a.contextPath=n.appendContextPath(r.data.contextPath,r.name),r={data:a}}return i(t,r)})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n=r(1),o=r(13),i=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default=function(e){e.registerHelper("each",function(e,t){function r(t,r,i){c&&(c.key=t,c.index=r,c.first=0===r,c.last=!!i,l&&(c.contextPath=l+t)),u+=o(e[t],{data:c,blockParams:n.blockParams([e[t],t],[l+t,null])})}if(!t)throw new i.default("Must pass iterator to #each");var o=t.fn,a=t.inverse,s=0,u="",c=void 0,l=void 0;if(t.data&&t.ids&&(l=n.appendContextPath(t.data.contextPath,t.ids[0])+"."),n.isFunction(e)&&(e=e.call(this)),t.data&&(c=n.createFrame(t.data)),e&&"object"==typeof e)if(n.isArray(e))for(var f=e.length;s<f;s++)s in e&&r(s,s,s===e.length-1);else{var d=void 0;for(var p in e)e.hasOwnProperty(p)&&(void 0!==d&&r(d,s-1),d=p,s++);void 0!==d&&r(d,s-1,!0)}return 0===s&&(u=a(this)),u})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n=r(13),o=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=function(e){e.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new o.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n=r(1);t.default=function(e){e.registerHelper("if",function(e,t){return n.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||n.isEmpty(e)?t.inverse(this):t.fn(this)}),e.registerHelper("unless",function(t,r){return e.helpers.if.call(this,t,{fn:r.inverse,inverse:r.fn,hash:r.hash})})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("log",function(){for(var t=[void 0],r=arguments[arguments.length-1],n=0;n<arguments.length-1;n++)t.push(arguments[n]);var o=1;null!=r.hash.level?o=r.hash.level:r.data&&null!=r.data.level&&(o=r.data.level),t[0]=o,e.log.apply(e,t)})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("lookup",function(e,t){return e&&e[t]})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n=r(1);t.default=function(e){e.registerHelper("with",function(e,t){n.isFunction(e)&&(e=e.call(this));var r=t.fn;if(n.isEmpty(e))return t.inverse(this);var o=t.data;return t.data&&t.ids&&(o=n.createFrame(t.data),o.contextPath=n.appendContextPath(t.data.contextPath,t.ids[0])),r(e,{data:o,blockParams:n.blockParams([e],[o&&o.contextPath])})})},e.exports=t.default},function(e,t,r){"use strict";function n(e){i.default(e)}t.__esModule=!0,t.registerDefaultDecorators=n;var o=r(109),i=function(e){return e&&e.__esModule?e:{default:e}}(o)},function(e,t,r){"use strict";t.__esModule=!0;var n=r(1);t.default=function(e){e.registerDecorator("inline",function(e,t,r,o){var i=e;return t.partials||(t.partials={},i=function(o,i){var a=r.partials;r.partials=n.extend({},a,t.partials);var s=e(o,i);return r.partials=a,s}),t.partials[o.args[0]]=o.fn,i})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n=r(1),o={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=n.indexOf(o.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=o.lookupLevel(e),"undefined"!=typeof console&&o.lookupLevel(o.level)<=e){var t=o.methodMap[e];console[t]||(t="log");for(var r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];console[t].apply(console,n)}}};t.default=o,e.exports=t.default},function(e,t,r){"use strict";function n(e){this.string=e}t.__esModule=!0,n.prototype.toString=n.prototype.toHTML=function(){return""+this.string},t.default=n,e.exports=t.default},function(e,t,r){"use strict";function n(e){var t=e&&e[0]||1,r=v.COMPILER_REVISION;if(t!==r){if(t<r){var n=v.REVISION_CHANGES[r],o=v.REVISION_CHANGES[t];throw new h.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+n+") or downgrade your runtime to an older version ("+o+").")}throw new h.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}}function o(e,t){function r(r,n,o){o.hash&&(n=d.extend({},n,o.hash),o.ids&&(o.ids[0]=!0)),r=t.VM.resolvePartial.call(this,r,n,o);var i=t.VM.invokePartial.call(this,r,n,o);if(null==i&&t.compile&&(o.partials[o.name]=t.compile(r,e.compilerOptions,t),i=o.partials[o.name](n,o)),null!=i){if(o.indent){for(var a=i.split("\n"),s=0,u=a.length;s<u&&(a[s]||s+1!==u);s++)a[s]=o.indent+a[s];i=a.join("\n")}return i}throw new h.default("The partial "+o.name+" could not be compiled when running in runtime-only mode")}function n(t){function r(t){return""+e.main(o,t,o.helpers,o.partials,a,u,s)}var i=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],a=i.data;n._setup(i),!i.partial&&e.useData&&(a=c(t,a));var s=void 0,u=e.useBlockParams?[]:void 0;return e.useDepths&&(s=i.depths?t!=i.depths[0]?[t].concat(i.depths):i.depths:[t]),(r=l(e.main,r,o,i.depths||[],a,u))(t,i)}if(!t)throw new h.default("No environment passed to template");if(!e||!e.main)throw new h.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var o={strict:function(e,t){if(!(t in e))throw new h.default('"'+t+'" not defined in '+e);return e[t]},lookup:function(e,t){for(var r=e.length,n=0;n<r;n++)if(e[n]&&null!=e[n][t])return e[n][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:d.escapeExpression,invokePartial:r,fn:function(t){var r=e[t];return r.decorator=e[t+"_d"],r},programs:[],program:function(e,t,r,n,o){var a=this.programs[e],s=this.fn(e);return t||o||n||r?a=i(this,e,s,t,r,n,o):a||(a=this.programs[e]=i(this,e,s)),a},data:function(e,t){for(;e&&t--;)e=e._parent;return e},merge:function(e,t){var r=e||t;return e&&t&&e!==t&&(r=d.extend({},t,e)),r},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};return n.isTop=!0,n._setup=function(r){r.partial?(o.helpers=r.helpers,o.partials=r.partials,o.decorators=r.decorators):(o.helpers=o.merge(r.helpers,t.helpers),e.usePartial&&(o.partials=o.merge(r.partials,t.partials)),(e.usePartial||e.useDecorators)&&(o.decorators=o.merge(r.decorators,t.decorators)))},n._child=function(t,r,n,a){if(e.useBlockParams&&!n)throw new h.default("must pass block params");if(e.useDepths&&!a)throw new h.default("must pass parent depths");return i(o,t,e[t],r,0,n,a)},n}function i(e,t,r,n,o,i,a){function s(t){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],s=a;return!a||t==a[0]||t===e.nullContext&&null===a[0]||(s=[t].concat(a)),r(e,t,e.helpers,e.partials,o.data||n,i&&[o.blockParams].concat(i),s)}return s=l(r,s,e,a,n,i),s.program=t,s.depth=a?a.length:0,s.blockParams=o||0,s}function a(e,t,r){return e?e.call||r.name||(r.name=e,e=r.partials[e]):e="@partial-block"===r.name?r.data["partial-block"]:r.partials[r.name],e}function s(e,t,r){var n=r.data&&r.data["partial-block"];r.partial=!0,r.ids&&(r.data.contextPath=r.ids[0]||r.data.contextPath);var o=void 0;if(r.fn&&r.fn!==u&&function(){r.data=v.createFrame(r.data);var e=r.fn;o=r.data["partial-block"]=function(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return r.data=v.createFrame(r.data),r.data["partial-block"]=n,e(t,r)},e.partials&&(r.partials=d.extend({},r.partials,e.partials))}(),void 0===e&&o&&(e=o),void 0===e)throw new h.default("The partial "+r.name+" could not be found");if(e instanceof Function)return e(t,r)}function u(){return""}function c(e,t){return t&&"root"in t||(t=t?v.createFrame(t):{},t.root=e),t}function l(e,t,r,n,o,i){if(e.decorator){var a={};t=e.decorator(t,a,r,n&&n[0],o,i,n),d.extend(t,a)}return t}t.__esModule=!0,t.checkRevision=n,t.template=o,t.wrapProgram=i,t.resolvePartial=a,t.invokePartial=s,t.noop=u;var f=r(1),d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(f),p=r(13),h=function(e){return e&&e.__esModule?e:{default:e}}(p),v=r(46)},function(e,t,r){"use strict";(function(r){t.__esModule=!0,t.default=function(e){var t=void 0!==r?r:window,n=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=n),e}},e.exports=t.default}).call(t,r(114))},function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r}])});
//# sourceMappingURL=eruda-features.js.map