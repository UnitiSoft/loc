System.register(["./p-06009a93.system.js","./p-a821f331.system.js","./p-2dea2bc9.system.js"],(function(t){"use strict";var e,s,i,n;return{setters:[function(t){e=t.r;s=t.h},function(t){i=t.u},function(t){n=t.U}],execute:function(){var a=t("uni_event_store",function(){function t(t){e(this,t);this.inactive=false;this.once=false;this.mode="merge";this.type="memory";this.feature="uni.store";this.separator=".";this.all=false;this.prevent=false;this.stop=false;this.bindStart="{{";this.bindEnd="}}"}t.prototype.render=function(){return n(s("uni-event-store-set",{inactive:this.inactive,once:this.once,listen:this.listen,mode:this.mode,type:this.type,feature:this.feature,separator:this.separator,path:this.path,state:this.state,bindStart:this.bindStart,bindEnd:this.bindEnd,prevent:this.prevent,stop:this.stop},s("uni-event-store-get",{inactive:this.inactive,type:this.type,feature:this.feature,separator:this.separator,path:this.path,equal:this.equal||(this.noEqual?undefined:this.state),noEqual:this.noEqual,all:this.all,selector:this.selector,prop:this.prop,value:this.value,bindStart:this.bindStart,bindEnd:this.bindEnd},s("slot",null))))};t.prototype.componentDidLoad=function(){i("uni-event-store","size")};return t}())}}}));