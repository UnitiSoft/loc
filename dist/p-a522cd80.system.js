System.register(["./p-62a049dd.system.js","./p-a821f331.system.js","./p-2dea2bc9.system.js"],(function(e){"use strict";var t,n,r,i,o;return{setters:[function(e){t=e.r;n=e.h;r=e.g},function(e){i=e.u},function(e){o=e.U}],execute:function(){var s=e("U",function(){function e(e){t(this,e)}e.prototype.render=function(){return o(n("iframe",{scrolling:"no",src:this.src}))};e.prototype.componentDidLoad=function(){var e=this;i("uni-frame","catch");var t=this.el.firstElementChild["contentWindow"];t.uniResizeObserver=new ResizeObserver((function(t){var n,r;e.el.firstElementChild["height"]=Math.trunc((r=(n=t[0])===null||n===void 0?void 0:n.contentRect)===null||r===void 0?void 0:r.height)+5}));t.addEventListener("load",u)};Object.defineProperty(e.prototype,"el",{get:function(){return r(this)},enumerable:false,configurable:true});return e}());function u(){this.uniResizeObserver.observe(this.document.body)}s.style="iframe {width:100%;border:none;}"}}}));