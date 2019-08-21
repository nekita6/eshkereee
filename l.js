function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}(function(a,b){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.LazyLoad=b()})(this,function(){'use strict';var a="undefined"!=typeof window,b=a&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),c=a&&"IntersectionObserver"in window,d=a&&"classList"in document.createElement("p"),e={elements_selector:"img",container:b||a?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",class_loading:"loading",class_loaded:"loaded",class_error:"error",load_delay:0,auto_unobserve:!0,callback_enter:null,callback_exit:null,callback_reveal:null,callback_loaded:null,callback_error:null,callback_finish:null,use_native:!1},f=function(a){return _extends({},e,a)},g=function(a,b){var c,d="LazyLoad::Initialized",e=new a(b);try{c=new CustomEvent(d,{detail:{instance:e}})}catch(a){c=document.createEvent("CustomEvent"),c.initCustomEvent(d,!1,!1,{instance:e})}window.dispatchEvent(c)},h="data-",i="was-processed",j="ll-timeout",k="true",l=function(a,b){return a.getAttribute(h+b)},m=function(a,b,c){var d=h+b;return null===c?void a.removeAttribute(d):void a.setAttribute(d,c)},n=function(a){return m(a,i,k)},o=function(a){return l(a,i)===k},p=function(a,b){return m(a,j,b)},q=function(a){return l(a,j)},r=function(a){return a.filter(function(a){return!o(a)})},s=function(a,b){return a.filter(function(a){return a!==b})},t=function(a,b){a&&a(b)},u=function(a,b){a._loadingCount+=b,0===a._elements.length&&0===a._loadingCount&&t(a._settings.callback_finish)},v=function(a){for(var b,c=[],d=0;b=a.children[d];d+=1)"SOURCE"===b.tagName&&c.push(b);return c},w=function(a,b,c){c&&a.setAttribute(b,c)},x=function(a,b){w(a,"sizes",l(a,b.data_sizes)),w(a,"srcset",l(a,b.data_srcset)),w(a,"src",l(a,b.data_src))},y=function(a,b){var c=l(a,b.data_src),d=l(a,b.data_bg);c&&(a.style.backgroundImage="url(\"".concat(c,"\")")),d&&(a.style.backgroundImage=d)},z={IMG:function(a,b){var c=a.parentNode;if(c&&"PICTURE"===c.tagName){var d=v(c);d.forEach(function(a){x(a,b)})}x(a,b)},IFRAME:function(a,b){w(a,"src",l(a,b.data_src))},VIDEO:function(a,b){var c=v(a);c.forEach(function(a){w(a,"src",l(a,b.data_src))}),w(a,"src",l(a,b.data_src)),a.load()}},A=function(a,b){var c=b._settings,d=a.tagName,e=z[d];return e?(e(a,c),u(b,1),void(b._elements=s(b._elements,a))):void y(a,c)},B=function(a,b){return d?void a.classList.add(b):void(a.className+=(a.className?" ":"")+b)},C=function(a,b){return d?void a.classList.remove(b):void(a.className=a.className.replace(new RegExp("(^|\\s+)"+b+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,""))},D="load",E="loadeddata",F="error",G=function(a,b,c){a.addEventListener(b,c)},H=function(a,b,c){a.removeEventListener(b,c)},I=function(a,b,c){G(a,D,b),G(a,E,b),G(a,F,c)},J=function(a,b,c){H(a,D,b),H(a,E,b),H(a,F,c)},K=function(a,b,c){var d=c._settings,e=b?d.class_loaded:d.class_error,f=b?d.callback_loaded:d.callback_error,g=a.target;C(g,d.class_loading),B(g,e),t(f,g),u(c,-1)},L=function(a,b){var c=function c(e){K(e,!0,b),J(a,c,d)},d=function d(e){K(e,!1,b),J(a,c,d)};I(a,c,d)},M=["IMG","IFRAME","VIDEO"],N=function(a,b){var c=b._settings;return t(c.callback_enter,a),c.load_delay?void R(a,b):void O(a,b)},O=function(a,b){var c=b._observer;S(a,b),c&&b._settings.auto_unobserve&&c.unobserve(a)},P=function(a,b){var c=b._settings;t(c.callback_exit,a),c.load_delay&&Q(a)},Q=function(a){var b=q(a);b&&(clearTimeout(b),p(a,null))},R=function(a,b){var c=b._settings.load_delay,d=q(a);d||(d=setTimeout(function(){O(a,b),Q(a)},c),p(a,d))},S=function(a,b,c){var d=b._settings;!c&&o(a)||(-1<M.indexOf(a.tagName)&&(L(a,b),B(a,d.class_loading)),A(a,b),n(a),t(d.callback_reveal,a),t(d.callback_set,a))},T=function(a){return a.isIntersecting||0<a.intersectionRatio},U=function(a){return{root:a.container===document?null:a.container,rootMargin:a.thresholds||a.threshold+"px"}},V=function(a){return!!c&&(a._observer=new IntersectionObserver(function(b){b.forEach(function(b){return T(b)?N(b.target,a):P(b.target,a)})},U(a._settings)),!0)},W=["IMG","IFRAME"],X=function(a){return a.use_native&&"loading"in HTMLImageElement.prototype},Y=function(a){a._elements.forEach(function(b){-1===W.indexOf(b.tagName)||(b.setAttribute("loading","lazy"),S(b,a))})},Z=function(a){return Array.prototype.slice.call(a)},$=function(a){return a.container.querySelectorAll(a.elements_selector)},_=function(a,b){return r(Z(a||$(b)))},aa=function(a,b){this._settings=f(a),this._loadingCount=0,V(this),this.update(b)};return aa.prototype={update:function(a){var c=this,d=this._settings;return this._elements=_(a,d),b||!this._observer?void this.loadAll():void(X(d)&&(Y(this),this._elements=_(a,d)),this._elements.forEach(function(a){c._observer.observe(a)}))},destroy:function(){var a=this;this._observer&&(this._elements.forEach(function(b){a._observer.unobserve(b)}),this._observer=null),this._elements=null,this._settings=null},load:function(a,b){S(a,this,b)},loadAll:function(){var a=this;this._elements.forEach(function(b){O(b,a)})}},a&&function(a,b){if(b)if(!b.length)g(a,b);else for(var c,d=0;c=b[d];d+=1)g(a,c)}(aa,window.lazyLoadOptions),aa});var l=new LazyLoad({elements_selector:"img"});let main=document.querySelector("main"),imgWidth=document.querySelector("img").width,figures=document.querySelectorAll("figure"),windowWidth=window.innerWidth,aboutSection=document.querySelector("#about-section"),pricesSection=document.querySelector("#prices-section");window.addEventListener("resize",onResize,{passive:!0}),909<windowWidth&&(main.addEventListener("wheel",onWheel,{passive:!0}),main.addEventListener("touchstart",touchStart,{passive:!0}));function touchStart(a){a.changedTouches[0].clientX>main.clientWidth/2?main.scrollLeft+=imgWidth/6:main.scrollLeft-=imgWidth/6}function onResize(){imgWidth=document.querySelector("img").width,windowWidth=window.innerWidth}function onWheel(a){0<a.deltaY?main.scrollLeft+=imgWidth/6:0>a.deltaY&&0<main.scrollLeft&&(main.scrollLeft-=imgWidth/6)}figures.forEach(function(a){a.addEventListener("click",function(){this.querySelector("figcaption").style.display="block"==this.querySelector("figcaption").style.display?"none":"block"},{passive:!0})});function closeSection(){document.body.removeAttribute("show-about"),document.body.removeAttribute("show-prices"),window.scrollTo({top:0});}document.querySelectorAll(".close-btn").forEach(function(a){a.addEventListener("click",closeSection,{passive:!0})}),document.querySelector("#about-btn").addEventListener("click",()=>{document.body.setAttribute("show-about","")}),document.querySelector("#prices-btn").addEventListener("click",()=>{document.body.setAttribute("show-prices","")});