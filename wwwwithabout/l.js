function _extends(){_extends=Object.assign||function(d){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var a in c){if(Object.prototype.hasOwnProperty.call(c,a)){d[a]=c[a]}}}return d};return _extends.apply(this,arguments)}function _typeof(b){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){a=function a(c){return typeof c}}else{a=function a(c){return c&&typeof Symbol==="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c}}return a(b)}(function(b,a){(typeof exports==="undefined"?"undefined":_typeof(exports))==="object"&&typeof module!=="undefined"?module.exports=a():typeof define==="function"&&define.amd?define(a):b.LazyLoad=a()})(this,function(){var P=typeof window!=="undefined";var u=P&&!("onscroll" in window)||typeof navigator!=="undefined"&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent);var N=P&&"IntersectionObserver" in window;var x=P&&"classList" in document.createElement("p");var ag={elements_selector:"img",container:u||P?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",class_loading:"loading",class_loaded:"loaded",class_error:"error",load_delay:0,auto_unobserve:true,callback_enter:null,callback_exit:null,callback_reveal:null,callback_loaded:null,callback_error:null,callback_finish:null,use_native:false};var b=function b(am){return _extends({},ag,am)};var o=function o(ap,ao){var ar;var an="LazyLoad::Initialized";var am=new ap(ao);try{ar=new CustomEvent(an,{detail:{instance:am}})}catch(aq){ar=document.createEvent("CustomEvent");ar.initCustomEvent(an,false,false,{instance:am})}window.dispatchEvent(ar)};function j(ao,am){if(!am){return}if(!am.length){o(ao,am)}else{for(var an=0,ap;ap=am[an];an+=1){o(ao,ap)}}}var I="data-";var B="was-processed";var F="ll-timeout";var ac="true";var w=function w(am,an){return am.getAttribute(I+an)};var z=function z(an,ao,ap){var am=I+ao;if(ap===null){an.removeAttribute(am);return}an.setAttribute(am,ap)};var m=function m(am){return z(am,B,ac)};var r=function r(am){return w(am,B)===ac};var S=function S(am,an){return z(am,F,an)};var ah=function ah(am){return w(am,F)};var C=function C(am){return am.filter(function(an){return !r(an)})};var U=function U(an,am){return an.filter(function(ao){return ao!==am})};var f=function f(an,am){if(an){an(am)}};var Y=function Y(am,an){am._loadingCount+=an;if(am._elements.length===0&&am._loadingCount===0){f(am._settings.callback_finish)}};var d=function d(ap){var an=[];for(var ao=0,am;am=ap.children[ao];ao+=1){if(am.tagName==="SOURCE"){an.push(am)}}return an};var p=function p(an,am,ao){if(!ao){return}an.setAttribute(am,ao)};var n=function n(am,an){p(am,"sizes",w(am,an.data_sizes));p(am,"srcset",w(am,an.data_srcset));p(am,"src",w(am,an.data_src))};var i=function i(an,ap){var ao=an.parentNode;if(ao&&ao.tagName==="PICTURE"){var am=d(ao);am.forEach(function(aq){n(aq,ap)})}n(an,ap)};var Q=function Q(am,an){p(am,"src",w(am,an.data_src))};var H=function H(an,ao){var am=d(an);am.forEach(function(ap){p(ap,"src",w(ap,ao.data_src))});p(an,"src",w(an,ao.data_src));an.load()};var G=function G(an,ao){var ap=w(an,ao.data_src);var am=w(an,ao.data_bg);if(ap){an.style.backgroundImage='url("'.concat(ap,'")')}if(am){an.style.backgroundImage=am}};var al={IMG:i,IFRAME:Q,VIDEO:H};var K=function K(ao,am){var aq=am._settings;var an=ao.tagName;var ap=al[an];if(ap){ap(ao,aq);Y(am,1);am._elements=U(am._elements,ao);return}G(ao,aq)};var A=function A(am,an){if(x){am.classList.add(an);return}am.className+=(am.className?" ":"")+an};var q=function q(am,an){if(x){am.classList.remove(an);return}am.className=am.className.replace(new RegExp("(^|\\s+)"+an+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")};var ae="load";var R="loadeddata";var k="error";var ak=function ak(an,am,ao){an.addEventListener(am,ao)};var e=function e(an,am,ao){an.removeEventListener(am,ao)};var y=function y(an,ao,am){ak(an,ae,ao);ak(an,R,ao);ak(an,k,am)};var X=function X(an,ao,am){e(an,ae,ao);e(an,R,ao);e(an,k,am)};var t=function t(aq,ar,am){var ap=am._settings;var ao=ar?ap.class_loaded:ap.class_error;var at=ar?ap.callback_loaded:ap.callback_error;var an=aq.target;q(an,ap.class_loading);A(an,ao);f(at,an);Y(am,-1)};var ad=function ad(ao,am){var ap=function ap(aq){t(aq,true,am);X(ao,ap,an)};var an=function an(aq){t(aq,false,am);X(ao,ap,an)};y(ao,ap,an)};var M=["IMG","IFRAME","VIDEO"];var T=function T(an,am){var ao=am._settings;f(ao.callback_enter,an);if(!ao.load_delay){af(an,am);return}s(an,am)};var af=function af(ao,am){var an=am._observer;aa(ao,am);if(an&&am._settings.auto_unobserve){an.unobserve(ao)}};var c=function c(an,am){var ao=am._settings;f(ao.callback_exit,an);if(!ao.load_delay){return}aj(an)};var aj=function aj(am){var an=ah(am);if(!an){return}clearTimeout(an);S(am,null)};var s=function s(ao,am){var an=am._settings.load_delay;var ap=ah(ao);if(ap){return}ap=setTimeout(function(){af(ao,am);aj(ao)},an);S(ao,ap)};var aa=function aa(an,am,ap){var ao=am._settings;if(!ap&&r(an)){return}if(M.indexOf(an.tagName)>-1){ad(an,am);A(an,ao.class_loading)}K(an,am);m(an);f(ao.callback_reveal,an);f(ao.callback_set,an)};var v=function v(am){return am.isIntersecting||am.intersectionRatio>0};var D=function D(am){return{root:am.container===document?null:am.container,rootMargin:am.thresholds||am.threshold+"px"}};var V=function V(am){if(!N){return false}am._observer=new IntersectionObserver(function(an){an.forEach(function(ao){return v(ao)?T(ao.target,am):c(ao.target,am)})},D(am._settings));return true};var E=["IMG","IFRAME"];var a=function a(am){return am.use_native&&"loading" in HTMLImageElement.prototype};var L=function L(am){am._elements.forEach(function(an){if(E.indexOf(an.tagName)===-1){return}an.setAttribute("loading","lazy");aa(an,am)})};var W=function W(am){return Array.prototype.slice.call(am)};var h=function h(am){return am.container.querySelectorAll(am.elements_selector)};var ai=function ai(an,am){return C(W(an||h(am)))};var O=function O(am,an){this._settings=b(am);this._loadingCount=0;V(this);this.update(an)};O.prototype={update:function J(an){var ao=this;var am=this._settings;this._elements=ai(an,am);if(u||!this._observer){this.loadAll();return}if(a(am)){L(this);this._elements=ai(an,am)}this._elements.forEach(function(ap){ao._observer.observe(ap)})},destroy:function ab(){var am=this;if(this._observer){this._elements.forEach(function(an){am._observer.unobserve(an)});this._observer=null}this._elements=null;this._settings=null},load:function Z(am,an){aa(am,this,an)},loadAll:function g(){var am=this;this._elements.forEach(function(an){af(an,am)})}};if(P){j(O,window.lazyLoadOptions)}return O});var l=new LazyLoad({elements_selector:"img"});let main=document.querySelector("main");let imgWidth=document.querySelector("img").width;let figures=document.querySelectorAll("figure");let windowWidth=window.innerWidth;window.addEventListener("resize",onResize,{passive:true});if(windowWidth>909){main.addEventListener("wheel",onWheel,{passive:true});main.addEventListener("touchstart",touchStart,{passive:true})}function touchStart(a){if(a.changedTouches[0].clientX>main.clientWidth/2){main.scrollLeft+=imgWidth/6}else{main.scrollLeft-=imgWidth/6}}function onResize(){imgWidth=document.querySelector("img").width;windowWidth=window.innerWidth}function onWheel(a){if(a.deltaY>0){main.scrollLeft+=imgWidth/6}else{if(a.deltaY<0&&main.scrollLeft>0){main.scrollLeft-=imgWidth/6}}}figures.forEach(function(a){a.onclick=function(){if(this.querySelector("figcaption").style.display=="block"){this.querySelector("figcaption").style.display="none"}else{this.querySelector("figcaption").style.display="block"}}});let aboutSection=document.querySelector("#about-section");let pricesSection=document.querySelector("#prices-section");document.querySelector("#about-btn").addEventListener("click",function(){aboutSection.style.display="block"},{passive:true});document.querySelector("#prices-btn").addEventListener("click",function(){pricesSection.style.display="block"},{passive:true});document.querySelector("#close-about-btn").addEventListener("click",function(){aboutSection.style.display="none"},{passive:true});document.querySelector("#close-prices-btn").addEventListener("click",function(){pricesSection.style.display="none"},{passive:true});