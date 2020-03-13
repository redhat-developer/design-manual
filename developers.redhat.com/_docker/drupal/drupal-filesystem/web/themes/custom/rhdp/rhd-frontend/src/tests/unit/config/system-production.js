/*
    * SystemJS v0.21.4 Production
    */
   !function(){"use strict";var i="undefined"!=typeof window&&"undefined"!=typeof document,f="undefined"!=typeof process&&process.versions&&process.versions.node,a="undefined"!=typeof process&&"string"==typeof process.platform&&process.platform.match(/^win/),w="undefined"!=typeof self?self:global,t="undefined"!=typeof Symbol;function e(e){return t?Symbol():"@@"+e}var s,O=t&&Symbol.toStringTag;if("undefined"!=typeof document&&document.getElementsByTagName){if(!(s=document.baseURI)){var r=document.getElementsByTagName("base");s=r[0]&&r[0].href||window.location.href}}else"undefined"!=typeof location&&(s=location.href);if(s){var n=(s=s.split("#")[0].split("?")[0]).lastIndexOf("/");-1!==n&&(s=s.substr(0,n+1))}else{if("undefined"==typeof process||!process.cwd)throw new TypeError("No environment baseURI");s="file://"+(a?"/":"")+process.cwd(),a&&(s=s.replace(/\\/g,"/"))}"/"!==s[s.length-1]&&(s+="/");var u="_"==new Error(0,"_").fileName;function v(e,t){i||(t=t.replace(a?/file:\/\/\//g:/file:\/\//g,""));var r,n=(e.message||e)+"\n  "+t;r=u&&e.fileName?new Error(n,e.fileName,e.lineNumber):new Error(n);var o=e.originalErr?e.originalErr.stack:e.stack;return r.stack=f?n+"\n  "+o:o,r.originalErr=e.originalErr||e,r}function d(e,t){throw new RangeError('Unable to resolve "'+e+'" to '+t)}var p=/\\/g;function c(e,t){" "!==e[0]&&" "!==e[e.length-1]||(e=e.trim());var r=t&&t.substr(0,t.indexOf(":")+1),n=e[0],o=e[1];if("/"===n&&"/"===o)return r||d(e,t),-1!==e.indexOf("\\")&&(e=e.replace(p,"/")),r+e;if("."===n&&("/"===o||"."===o&&("/"===e[2]||2===e.length&&(e+="/"))||1===e.length&&(e+="/"))||"/"===n){-1!==e.indexOf("\\")&&(e=e.replace(p,"/"));var i,a=!r||"/"!==t[r.length];if(a?(void 0===t&&d(e,t),i=t):i="/"===t[r.length+1]?"file:"!==r?(i=t.substr(r.length+2)).substr(i.indexOf("/")+1):t.substr(8):t.substr(r.length+1),"/"===n){if(!a)return t.substr(0,t.length-i.length-1)+e;d(e,t)}for(var s=i.substr(0,i.lastIndexOf("/")+1)+e,u=[],c=-1,l=0;l<s.length;l++)if(-1===c)if("."!==s[l])c=l;else{if("."!==s[l+1]||"/"!==s[l+2]&&l+2!==s.length){if("/"!==s[l+1]&&l+1!==s.length){c=l;continue}l+=1}else u.pop(),l+=2;a&&0===u.length&&d(e,t)}else"/"===s[l]&&(u.push(s.substring(c,l+1)),c=-1);return-1!==c&&u.push(s.substr(c)),t.substr(0,t.length-i.length)+u.join("")}return-1!==e.indexOf(":")?f&&":"===e[1]&&"\\"===e[2]&&e[0].match(/[a-z]/i)?"file:///"+e.replace(p,"/"):e:void 0}var o=Promise.resolve();function l(r){if(r.values)return r.values();if("undefined"==typeof Symbol||!Symbol.iterator)throw new Error("Symbol.iterator not supported in this browser");var e={};return e[Symbol.iterator]=function(){var e=Object.keys(r),t=0;return{next:function(){return t<e.length?{value:r[e[t++]],done:!1}:{value:void 0,done:!0}}}},e}function h(){this.registry=new x}function m(e){if(void 0!==e){if(e instanceof j==!1&&"module"!==e[O])throw new TypeError("Module instantiation did not return a valid namespace object.");return e}}(h.prototype.constructor=h).prototype.import=function(t,r){if("string"!=typeof t)throw new TypeError("Loader import method must be passed a module key string");var e=this;return o.then(function(){return e[g](t,r)}).then(m).catch(function(e){throw v(e,"Loading "+t+(r?" from "+r:""))})};var y=h.resolve=e("resolve"),g=h.resolveInstantiate=e("resolveInstantiate");function b(e){if(void 0===e)throw new RangeError("No resolution found.");return e}h.prototype[g]=function(e,t){var r=this;return r.resolve(e,t).then(function(e){return r.registry.get(e)})},h.prototype.resolve=function(t,r){var e=this;return o.then(function(){return e[y](t,r)}).then(b).catch(function(e){throw v(e,"Resolving "+t+(r?" to "+r:""))})};var k="undefined"!=typeof Symbol&&Symbol.iterator,E=e("registry");function x(){this[E]={}}k&&(x.prototype[Symbol.iterator]=function(){return this.entries()[Symbol.iterator]()},x.prototype.entries=function(){var t=this[E];return l(Object.keys(t).map(function(e){return[e,t[e]]}))}),x.prototype.keys=function(){return l(Object.keys(this[E]))},x.prototype.values=function(){var t=this[E];return l(Object.keys(t).map(function(e){return t[e]}))},x.prototype.get=function(e){return this[E][e]},x.prototype.set=function(e,t){if(!(t instanceof j||"module"===t[O]))throw new Error("Registry must be set with an instance of Module Namespace");return this[E][e]=t,this},x.prototype.has=function(e){return Object.hasOwnProperty.call(this[E],e)},x.prototype.delete=function(e){return!!Object.hasOwnProperty.call(this[E],e)&&(delete this[E][e],!0)};var R=e("baseObject");function j(e){Object.defineProperty(this,R,{value:e}),Object.keys(e).forEach(S,this)}function S(e){Object.defineProperty(this,e,{enumerable:!0,get:function(){return this[R][e]}})}j.prototype=Object.create(null),O&&Object.defineProperty(j.prototype,O,{value:"Module"});var P=Promise.resolve(),_=e("register-internal");function I(){h.call(this);var r=this.registry.delete;this.registry.delete=function(e){var t=r.call(this,e);return n.hasOwnProperty(e)&&!n[e].linkRecord&&(delete n[e],t=!0),t};var n={};this[_]={lastRegister:void 0,records:n},this.trace=!1}var D=((I.prototype=Object.create(h.prototype)).constructor=I).instantiate=e("instantiate");function L(e,t,r){return e.records[t]={key:t,registration:r,module:void 0,importerSetters:void 0,loadError:void 0,evalError:void 0,linkRecord:{instantiatePromise:void 0,dependencies:void 0,execute:void 0,executingRequire:!1,moduleObj:void 0,setters:void 0,depsInstantiatePromise:void 0,dependencyInstantiations:void 0,evaluatePromise:void 0}}}function U(l,f,d,p,h){return d.instantiatePromise||(d.instantiatePromise=(f.registration?P:P.then(function(){return h.lastRegister=void 0,l[D](f.key,1<l[D].length&&(t=f,r=h,function(){var e=r.lastRegister;return e?(r.lastRegister=void 0,t.registration=e,!0):!!t.registration}));var t,r})).then(function(e){if(void 0!==e){if(!(e instanceof j||"module"===e[O]))throw new TypeError("Instantiate did not return a valid Module object.");return delete h.records[f.key],l.trace&&C(l,f,d),p[f.key]=e}var t,r,n,o,i,a,s,u,c=f.registration;if(f.registration=void 0,!c)throw new TypeError("Module instantiation did not call an anonymous or correctly named System.register.");return d.dependencies=c[0],f.importerSetters=[],d.moduleObj={},c[2]?(d.moduleObj.default=d.moduleObj.__useDefault={},d.executingRequire=c[1],d.execute=c[2]):(t=l,r=f,n=d,o=c[1],i=n.moduleObj,a=r.importerSetters,s=!1,u=o.call(w,function(e,t){if("object"==typeof e){var r=!1;for(var n in e)t=e[n],"__useDefault"===n||n in i&&i[n]===t||(r=!0,i[n]=t);if(!1===r)return t}else{if((s||e in i)&&i[e]===t)return t;i[e]=t}for(var o=0;o<a.length;o++)a[o](i);return t},new T(t,r.key)),n.setters=u.setters||[],n.execute=u.execute,u.exports&&(n.moduleObj=i=u.exports,s=!0)),f}).catch(function(e){throw f.linkRecord=void 0,f.loadError=f.loadError||v(e,"Instantiating "+f.key)}))}function M(o,i,e,a,s,u){return o.resolve(i,e).then(function(e){u&&(u[i]=e);var t=s.records[e],r=a[e];if(r&&(!t||t.module&&r!==t.module))return r;if(t&&t.loadError)throw t.loadError;(!t||!r&&t.module)&&(t=L(s,e,t&&t.registration));var n=t.linkRecord;return n?U(o,t,n,a,s):t})}function C(e,t,r){e.loads=e.loads||{},e.loads[t.key]={key:t.key,deps:r.dependencies,dynamicDeps:[],depMap:r.depMap||{}}}function T(e,t){this.loader=e,this.key=this.id=t,this.meta={url:t}}function A(e,t){e.linkRecord=void 0;var r=v(t,"Evaluating "+e.key);throw void 0===e.evalError&&(e.evalError=r),r}function q(e,t,r,n,o,i){for(var a,s,u=0;u<r.dependencies.length;u++){var c;if(!((c=r.dependencyInstantiations[u])instanceof j||"module"===c[O])&&(a=c.linkRecord))if(c.evalError)A(t,c.evalError);else if(a.setters){if(-1===i.indexOf(c)){i.push(c);try{var l=q(e,c,a,n,o,i)}catch(e){A(t,e)}l&&(s=s||[]).push(l.catch(function(e){A(t,e)}))}}else try{z(e,c,a,n,o,[c])}catch(e){A(t,e)}}if(s)return r.evaluatePromise=Promise.all(s).then(function(){if(r.execute){try{var e=r.execute.call(N)}catch(e){A(t,e)}if(e)return e.catch(function(e){A(t,e)}).then(function(){return t.linkRecord=void 0,n[t.key]=t.module=new j(r.moduleObj)})}t.linkRecord=void 0,n[t.key]=t.module=new j(r.moduleObj)});if(r.execute){try{var f=r.execute.call(N)}catch(e){A(t,e)}if(f)return r.evaluatePromise=f.catch(function(e){A(t,e)}).then(function(){return t.linkRecord=void 0,n[t.key]=t.module=new j(r.moduleObj)})}t.linkRecord=void 0,n[t.key]=t.module=new j(r.moduleObj)}function z(e,t,r,n,o,i){var a={id:t.key},s=r.moduleObj;Object.defineProperty(a,"exports",{configurable:!0,set:function(e){s.default=s.__useDefault=e},get:function(){return s.__useDefault}});var u,c,l,f,d,p,h,v=(u=e,c=t.key,l=r.dependencies,f=r.dependencyInstantiations,d=n,p=o,h=i,function(e){for(var t=0;t<l.length;t++)if(l[t]===e){var r,n=f[t];if(n instanceof j||"module"===n[O])r=n;else{if(n.evalError)throw n.evalError;void 0!==n.module||-1!==h.indexOf(n)||n.linkRecord.evaluatePromise||(n.linkRecord.setters?q(u,n,n.linkRecord,d,p,[n]):(h.push(n),z(u,n,n.linkRecord,d,p,h))),r=n.module||n.linkRecord.moduleObj}return"__useDefault"in r?r.__useDefault:r}throw new Error("Module "+e+" not declared as a System.registerDynamic dependency of "+c)});if(!r.executingRequire)for(var m=0;m<r.dependencies.length;m++)v(r.dependencies[m]);try{var y=r.execute.call(w,v,s.default,a);void 0!==y&&(a.exports=y)}catch(e){A(t,e)}t.linkRecord=void 0,a.exports!==s.__useDefault&&(s.default=s.__useDefault=a.exports);var g=s.default;if(g&&g.__esModule)for(var b in g)Object.hasOwnProperty.call(g,b)&&(s[b]=g[b]);if(n[t.key]=t.module=new j(r.moduleObj),t.importerSetters)for(m=0;m<t.importerSetters.length;m++)t.importerSetters[m](t.module);t.importerSetters=void 0}I.prototype[I.resolve=h.resolve]=function(e,t){return c(e,t||s)},I.prototype[D]=function(e,t){},I.prototype[h.resolveInstantiate]=function(e,t){var u=this,c=this[_],l=this.registry[E];return function(r,e,t,n,o){var i=n[e];if(i)return Promise.resolve(i);var a=o.records[e];if(a&&!a.module)return a.loadError?Promise.reject(a.loadError):U(r,a,a.linkRecord,n,o);return r.resolve(e,t).then(function(e){if(i=n[e])return i;if((a=o.records[e])&&!a.module||(a=L(o,e,a&&a.registration)),a.loadError)return Promise.reject(a.loadError);var t=a.linkRecord;return t?U(r,a,t,n,o):a})}(u,e,t,l,c).then(function(e){if(e instanceof j||"module"===e[O])return e;var t,r,n,i,a,s,o=e.linkRecord;if(!o){if(e.module)return e.module;throw e.evalError}return(t=u,r=e,n=o,i=l,a=c,s=[],function n(e,o){return o?-1!==s.indexOf(e)?P:(s.push(e),function(e,o,i,t,r){if(i.depsInstantiatePromise)return i.depsInstantiatePromise;for(var n=Array(i.dependencies.length),a=0;a<i.dependencies.length;a++)n[a]=M(e,i.dependencies[a],o.key,t,r,e.trace&&i.depMap||(i.depMap={}));var s=Promise.all(n).then(function(e){if(i.dependencyInstantiations=e,i.setters)for(var t=0;t<e.length;t++){var r=i.setters[t];if(r){var n=e[t];if(n instanceof j||"module"===n[O])r(n);else{if(n.loadError)throw n.loadError;r(n.module||n.linkRecord.moduleObj),n.importerSetters&&n.importerSetters.push(r)}}}return o});return e.trace&&(s=s.then(function(){return C(e,o,i),o})),(s=s.catch(function(e){throw i.depsInstantiatePromise=void 0,v(e,"Loading "+o.key)})).catch(function(){}),i.depsInstantiatePromise=s}(t,e,o,i,a).then(function(){for(var e,t=0;t<o.dependencies.length;t++){var r=o.dependencyInstantiations[t];r instanceof j||"module"===r[O]||(e=e||[]).push(n(r,r.linkRecord))}if(e)return Promise.all(e)})):P}(r,n)).then(function(){return function(e,t,r,n,o){if(t.module)return t.module;if(t.evalError)throw t.evalError;if(r.evaluatePromise)return r.evaluatePromise;if(r.setters){var i=q(e,t,r,n,o,[t]);if(i)return i}else z(e,t,r,n,o,[t]);return t.module}(u,e,o,l,c)})})},I.prototype.register=function(e,t,r){var n=this[_];void 0===r?n.lastRegister=[e,t,void 0]:(n.records[e]||L(n,e,void 0)).registration=[t,r,void 0]},I.prototype.registerDynamic=function(e,t,r,n){var o=this[_];"string"!=typeof e?o.lastRegister=[e,t,r]:(o.records[e]||L(o,e,void 0)).registration=[t,r,n]},T.prototype.import=function(e){return this.loader.trace&&this.loader.loads[this.key].dynamicDeps.push(e),this.loader.import(e,this.key)};var N=Object.create(null);Object.freeze&&Object.freeze(N);var F=Promise.resolve();function W(){}new j({});var B=e("loader-config"),$=e("plain-resolve"),J=e("plain-resolve-sync"),X="undefined"==typeof window&&"undefined"!=typeof self&&"undefined"!=typeof importScripts;function Y(e,t){for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}var Z=!1,G=!1;function H(e){if(Z||G){var t=document.createElement("link");Z?(t.rel="preload",t.as="script"):t.rel="prefetch",t.href=e,document.head.appendChild(t)}else{(new Image).src=e}}if(i&&function(){var e=document.createElement("link").relList;if(e&&e.supports){G=!0;try{Z=e.supports("preload")}catch(e){}}}(),i){var K=window.onerror;window.onerror=function(e,t){K&&K.apply(this,arguments)}}function Q(t,e,r,n,o){if(t=t.replace(/#/g,"%23"),X)return function(e,t,r){try{importScripts(e)}catch(e){r(e)}t()}(t,n,o);var i=document.createElement("script");function a(){n(),u()}function s(e){u(),o(new Error("Fetching "+t))}function u(){i.removeEventListener("load",a,!1),i.removeEventListener("error",s,!1),document.head.removeChild(i)}i.type="text/javascript",i.charset="utf-8",i.async=!0,e&&(i.crossOrigin=e),r&&(i.integrity=r),i.addEventListener("load",a,!1),i.addEventListener("error",s,!1),i.src=t,document.head.appendChild(i)}function V(e,t,r){var n=te(t,r);if(n){var o=t[n]+r.substr(n.length),i=c(o,s);return void 0!==i?i:e+o}return-1!==r.indexOf(":")?r:e+r}function ee(e){var t=this.name;if(t.substr(0,e.length)===e&&(t.length===e.length||"/"===t[e.length]||"/"===e[e.length-1]||":"===e[e.length-1])){var r=e.split("/").length;r>this.len&&(this.match=e,this.len=r)}}function te(e,t){if(Object.hasOwnProperty.call(e,t))return t;var r={name:t,match:void 0,len:0};return Object.keys(e).forEach(ee,r),r.match}function re(p){function h(e,t,r,n){if("object"==typeof e&&!(e instanceof Array))return h.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof e&&"function"==typeof t&&(e=[e]),!(e instanceof Array)){if("string"==typeof e){var o=p.decanonicalize(e,n),i=p.get(o);if(!i)throw new Error('Module not already loaded loading "'+e+'" as '+o+(n?' from "'+n+'".':"."));return"__useDefault"in i?i.__useDefault:i}throw new TypeError("Invalid require")}for(var a=[],s=0;s<e.length;s++)a.push(p.import(e[s],n));Promise.all(a).then(function(e){t&&t.apply(null,e)},r)}function e(e,u,c){var t,l,f,d;function r(n,e,o){for(var t=[],r=0;r<u.length;r++)t.push(n(u[r]));if(o.uri=o.id,o.config=W,-1!==d&&t.splice(d,0,o),-1!==f&&t.splice(f,0,e),-1!==l){var i=function(e,t,r){return"string"==typeof e&&"function"!=typeof t?n(e):h.call(p,e,t,r,o.id)};i.toUrl=function(e){return p.normalizeSync(e,o.id)},t.splice(l,0,i)}var a=w.require;w.require=h;var s=c.apply(-1===f?w:e,t);w.require=a,void 0!==s&&(o.exports=s)}"string"!=typeof e&&(c=u,u=e,e=null),u instanceof Array||(u=["require","exports","module"].splice(0,(c=u).length)),"function"!=typeof c&&(t=c,c=function(){return t}),e||pe&&(u=u.concat(pe),pe=void 0),-1!==(l=u.indexOf("require"))&&(u.splice(l,1),e||(u=u.concat(function(e,t){var r=((e=e.replace(ne,"")).match(ue)[1].split(",")[t]||"require").replace(ce,""),n=le[r]||(le[r]=new RegExp(ae+r+se,"g"));n.lastIndex=0;var o,i=[];for(;o=n.exec(e);)i.push(o[2]||o[3]);return i}(c.toString(),l)))),-1!==(f=u.indexOf("exports"))&&u.splice(f,1),-1!==(d=u.indexOf("module"))&&u.splice(d,1),e?(p.registerDynamic(e,u,!1,r),de?he=!(de=void 0):he||(de=[u,r])):p.registerDynamic(u,!1,ve?fe(r):r)}e.amd={},p.amdDefine=e,p.amdRequire=h}"undefined"!=typeof window&&"undefined"!=typeof document&&window.location&&(location.protocol,location.hostname,location.port&&location.port);var ne=/(^|[^\\])(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,oe=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","mozPaintCount","webkitStorageInfo","webkitIndexedDB","mozInnerScreenY","mozInnerScreenX"];function ie(t){if(-1===oe.indexOf(t)){try{var e=w[t]}catch(e){oe.push(t)}this(t,e)}}var ae="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",se="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",ue=/\(([^\)]*)\)/,ce=/^\s+|\s+$/g,le={};function fe(n){return function(e,t,r){n(e,t,r),"object"!=typeof(t=r.exports)&&"function"!=typeof t||"__esModule"in t||Object.defineProperty(r.exports,"__esModule",{value:!0})}}var de,pe,he=!1,ve=!1;function me(e){de?e.registerDynamic(pe?de[0].concat(pe):de[0],!1,ve?fe(de[1]):de[1]):he&&e.registerDynamic([],!1,W)}function ye(){I.call(this),this[B]={baseURL:s,paths:{},map:{},submap:{},depCache:{}},re(this),i&&(w.define=this.amdDefine)}ye.plainResolve=$,ye.plainResolveSync=J;var ge=ye.prototype=Object.create(I.prototype);ge.constructor=ye,ge[ye.resolve=I.resolve]=function(r,e){var t=c(r,e||s);if(void 0!==t)return Promise.resolve(t);var n=this;return F.then(function(){return n[$](r,e)}).then(function(e){if(e=e||r,n.registry.has(e))return e;var t=n[B];return V(t.baseURL,t.paths,e)})},ge.newModule=function(e){return new j(e)},ge.isModule=function(e){return e instanceof j||"module"===e[O]},ge.resolveSync=function(e,t){var r=c(e,t||s);if(void 0!==r)return r;if(r=this[J](e,t)||e,this.registry.has(r))return r;var n=this[B];return V(n.baseURL,n.paths,r)},ge[$]=ge[J]=function(e,t){var r=this[B];if(t){var n=te(r.submap,t),o=r.submap[n],i=o&&te(o,e);if(i){var a=o[i]+e.substr(i.length);return c(a,n)||a}}var s=r.map;if(i=te(s,e)){var a=s[i]+e.substr(i.length);return c(a,t||r.baseURL)||a}},ge[ye.instantiate=I.instantiate]=function(r,n){var e=this[B],t=e.depCache[r];if(t)for(var o=0;o<t.length;o++)this.resolve(t[o],r).then(H);if(e.wasm){var s=this;return fetch(r).then(function(e){if(!e.ok)throw new Error("Fetch error: "+e.status+" "+e.statusText);return-1===e.headers.get("content-type").indexOf("application/wasm")?e.text().then(function(e){!function(e,t,r,n){Object.keys(w).forEach(ie,function(e,t){be[e]=t}),(0,eval)(r+"\n//# sourceURL="+t);var o=n();if(!(o||(me(e),o=n()))){var i=we();e.register([],function(){return{exports:i}}),n()}}(s,r,e,n)}):(i=s,t=e,a=n,WebAssembly.compileStreaming(t).then(function(t){var r=[],n=[],o={};WebAssembly.Module.imports&&WebAssembly.Module.imports(t).forEach(function(e){var t=e.module;n.push(function(e){o[t]=e}),-1===r.indexOf(t)&&r.push(t)}),i.register(r,function(e){return{setters:n,execute:function(){e(new WebAssembly.Instance(t,o).exports)}}}),a()}));var i,t,a})}return i=this,a=r,u=n,Object.keys(w).forEach(ie,function(e,t){be[e]=t}),new Promise(function(r,e){return Q(a,"anonymous",void 0,function(){var e=u();if(!(e||(me(i),e=u()))){var t=we();i.register([],function(){return{exports:t}}),u()}r()},e)});var i,a,u},ge.config=function(e){var t=this[B];if(e.baseURL&&(t.baseURL=c(e.baseURL,s)||c("./"+e.baseURL,s),"/"!==t.baseURL[t.baseURL.length-1]&&(t.baseURL+="/")),e.paths&&Y(t.paths,e.paths),e.map){var r=e.map;for(var n in r)if(Object.hasOwnProperty.call(r,n)){var o=r[n];if("string"==typeof o)t.map[n]=o;else{var i=c(n,s)||V(t.baseURL,t.paths,n);Y(t.submap[i]||(t.submap[i]={}),o)}}}for(var n in t.wasm=!0===e.wasm,e)if(Object.hasOwnProperty.call(e,n)){r=e[n];switch(n){case"baseURL":case"paths":case"map":case"wasm":break;case"depCache":for(var n in r)if(Object.hasOwnProperty.call(r,n)){i=this.resolveSync(n,void 0);t.depCache[i]=(t.depCache[i]||[]).concat(r[n])}break;default:throw new TypeError('The SystemJS production build does not support the "'+n+'" configuration option.')}}},ge.getConfig=function(e){var t=this[B],r={};for(var n in Y(r,t.map),t.submap)Object.hasOwnProperty.call(t.submap,n)&&(r[n]=Y({},t.submap[n]));var o={};for(var n in t.depCache)Object.hasOwnProperty.call(t.depCache,n)&&(o[n]=[].concat(t.depCache[n]));return{baseURL:t.baseURL,paths:Y({},t.paths),depCache:o,map:r,wasm:!0===t.wasm}},ge.register=function(e,t,r){return"string"==typeof e&&(e=this.resolveSync(e,void 0)),I.prototype.register.call(this,e,t,r)},ge.registerDynamic=function(e,t,r,n){return"string"==typeof e&&(e=this.resolveSync(e,void 0)),I.prototype.registerDynamic.call(this,e,t,r,n)};var be={};function we(){var r={default:void 0},n=!1,o=void 0;return Object.keys(w).forEach(ie,function(e,t){be[e]!==t&&void 0!==(be[e]=t)&&(n?r[e]=t:o?r.default!==t&&(n=!0,r.__esModule=!0,r[o]=r.default,r[e]=t):(r.default=t,o=e))}),r}ye.prototype.version="0.21.4 Production";var Oe=new ye;if(i||X)if(w.SystemJS=Oe,w.System){var ke=w.System.register;w.System.register=function(){ke&&ke.apply(this,arguments),Oe.register.apply(Oe,arguments)}}else w.System=Oe;"undefined"!=typeof module&&module.exports&&(module.exports=Oe)}();