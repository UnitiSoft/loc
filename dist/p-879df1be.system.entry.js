System.register(["./p-62a049dd.system.js","./p-a821f331.system.js","./p-2dea2bc9.system.js"],(function(t){"use strict";var e,n,s,i;return{setters:[function(t){e=t.r;n=t.h},function(t){s=t.u},function(t){i=t.U}],execute:function(){var a=t("uni_template_load_wrap",function(){function t(t){e(this,t);this.active=false;this.multiple=false;this.propagate=false}t.prototype.render=function(){var t=this,e=t.active,s=t.multiple,a=t.propagate;var u=this.suf?"uni-event-"+this.suf:"uni-event";var o=this.suf?"uni-template-"+this.suf:"uni-template";var r=this.suf?"uni-load-wrap-"+this.suf:"uni-load-wrap";return i(n(u,{active:e,once:!s,listen:"uniLoadSuccess",target:"uni-template",prop:"content",stop:!a},n(o,null,n(r,{active:e,response:"text"},n("slot",null)))))};t.prototype.componentDidLoad=function(){s("uni-template-load-wrap","float")};return t}())}}}));