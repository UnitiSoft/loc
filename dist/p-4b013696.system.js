System.register(["./p-62a049dd.system.js","./p-a821f331.system.js","./p-8b4383e3.system.js","./p-62eab435.system.js"],(function(t){"use strict";var i,n,e,o,a,r,c,d,s;return{setters:[function(t){i=t.r;n=t.c;e=t.h;o=t.g},function(t){a=t.u},function(t){r=t.U},function(t){c=t.d;d=t.e;s=t.f}],execute:function(){var b=".mdc-tab-indicator{display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-tab-indicator .mdc-tab-indicator__content--icon{color:#018786;color:var(--mdc-theme-secondary, #018786)}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border-top-width:2px}.mdc-tab-indicator .mdc-tab-indicator__content--icon{height:34px;font-size:34px}.mdc-tab-indicator__content{-webkit-transform-origin:left;transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{-ms-flex-item-align:end;align-self:flex-end;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator__content--icon{-ms-flex-item-align:center;align-self:center;margin:0 auto}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}.mdc-tab-indicator .mdc-tab-indicator__content{-webkit-transition:250ms -webkit-transform cubic-bezier(0.4, 0, 0.2, 1);transition:250ms -webkit-transform cubic-bezier(0.4, 0, 0.2, 1);transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1);transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1), 250ms -webkit-transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{-webkit-transition:none;transition:none}.mdc-tab-indicator--fade .mdc-tab-indicator__content{-webkit-transition:150ms opacity linear;transition:150ms opacity linear}.mdc-tab-indicator--active.mdc-tab-indicator--fade .mdc-tab-indicator__content{-webkit-transition-delay:100ms;transition-delay:100ms}";var m=t("U",function(){function t(t){i(this,t);this.uniTabIndicatorMatInitialized=n(this,"uniTabIndicatorMatInitialized",7)}t.prototype.componentDidLoad=function(){a("uni-tab-indicator-mat","exist");this.entity=c(this.el);this.uniTabIndicatorMatInitialized.emit(this.entity)};t.prototype.render=function(){var t=d(this.active);return r({classes:t},e("span",{class:s()}))};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});return t}());m.style=b}}}));