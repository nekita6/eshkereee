(function(a,b){if(typeof exports==="object"){module.exports=b(a)}else{if(typeof define==="function"&&define.amd){define([],b)}else{a.LazyLoad=b(a)}}})(typeof global!=="undefined"?global:this.window||this.global,function(a){if(typeof define==="function"&&define.amd){a=window}const c={src:"data-src",srcset:"data-srcset",selector:".lazyload",root:null,rootMargin:"0px",threshold:0};const e=function(){let extended={};let deep=false;let i=0;let length=arguments.length;if(Object.prototype.toString.call(arguments[0])==="[object Boolean]"){deep=arguments[0];i++}let merge=function(f){for(let prop in f){if(Object.prototype.hasOwnProperty.call(f,prop)){if(deep&&Object.prototype.toString.call(f[prop])==="[object Object]"){extended[prop]=e(true,extended[prop],f[prop])}else{extended[prop]=f[prop]}}}};for(;i<length;i++){let obj=arguments[i];merge(obj)}return extended};function d(f,g){this.settings=e(c,g||{});this.images=f||document.querySelectorAll(this.settings.selector);this.observer=null;this.init()}d.prototype={init:function(){if(!a.IntersectionObserver){this.loadImages();return}let self=this;let observerConfig={root:this.settings.root,rootMargin:this.settings.rootMargin,threshold:[this.settings.threshold]};this.observer=new IntersectionObserver(function(f){Array.prototype.forEach.call(f,function(g){if(g.isIntersecting){self.observer.unobserve(g.target);let src=g.target.getAttribute(self.settings.src);let srcset=g.target.getAttribute(self.settings.srcset);if("img"===g.target.tagName.toLowerCase()){if(src){g.target.src=src}if(srcset){g.target.srcset=srcset}}else{g.target.style.backgroundImage="url("+src+")"}}})},observerConfig);Array.prototype.forEach.call(this.images,function(f){self.observer.observe(f)})},loadAndDestroy:function(){if(!this.settings){return}this.loadImages();this.destroy()},loadImages:function(){if(!this.settings){return}let self=this;Array.prototype.forEach.call(this.images,function(f){let src=f.getAttribute(self.settings.src);let srcset=f.getAttribute(self.settings.srcset);if("img"===f.tagName.toLowerCase()){if(src){f.src=src}if(srcset){f.srcset=srcset}}else{f.style.backgroundImage="url('"+src+"')"}})},destroy:function(){if(!this.settings){return}this.observer.disconnect();this.settings=null}};a.lazyload=function(f,g){return new d(f,g)};if(a.jQuery){const b=a.jQuery;b.fn.lazyload=function(f){f=f||{};f.attribute=f.attribute||"data-src";new d(b.makeArray(this),f);return this}}return d});