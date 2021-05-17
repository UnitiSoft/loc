System.register(["./p-06009a93.system.js","./p-054bfdbe.system.js","./p-ecfe904b.system.js","./p-fdeb947e.system.js"],(function(e){"use strict";var t,i,n,r,a,o,l,d;return{setters:[function(e){t=e.r;i=e.g},function(e){n=e.u},function(e){r=e.U},function(e){a=e._;o=e.a;l=e.M;d=e.b}],execute:function(){var f={ROOT:"mdc-form-field"};var c={LABEL_SELECTOR:".mdc-form-field > label"};var p=function(e){a(t,e);function t(i){var n=e.call(this,o(o({},t.defaultAdapter),i))||this;n.click=function(){n.handleClick()};return n}Object.defineProperty(t,"cssClasses",{get:function(){return f},enumerable:true,configurable:true});Object.defineProperty(t,"strings",{get:function(){return c},enumerable:true,configurable:true});Object.defineProperty(t,"defaultAdapter",{get:function(){return{activateInputRipple:function(){return undefined},deactivateInputRipple:function(){return undefined},deregisterInteractionHandler:function(){return undefined},registerInteractionHandler:function(){return undefined}}},enumerable:true,configurable:true});t.prototype.init=function(){this.adapter.registerInteractionHandler("click",this.click)};t.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("click",this.click)};t.prototype.handleClick=function(){var e=this;this.adapter.activateInputRipple();requestAnimationFrame((function(){e.adapter.deactivateInputRipple()}))};return t}(l);var u=function(e){a(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}t.attachTo=function(e){return new t(e)};t.prototype.labelEl=function(){var e=p.strings.LABEL_SELECTOR;return this.root.querySelector(e)};t.prototype.getDefaultFoundation=function(){var e=this;var t={activateInputRipple:function(){if(e.input&&e.input.ripple){e.input.ripple.activate()}},deactivateInputRipple:function(){if(e.input&&e.input.ripple){e.input.ripple.deactivate()}},deregisterInteractionHandler:function(t,i){var n=e.labelEl();if(n){n.removeEventListener(t,i)}},registerInteractionHandler:function(t,i){var n=e.labelEl();if(n){n.addEventListener(t,i)}}};return new p(t)};return t}(d);function s(e){n("uni-field","hide");return new u(e)}function m(){return{"mdc-form-field":true}}var g=".mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;-webkit-text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;-ms-flex-order:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;-ms-flex-order:-1;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{-ms-flex-pack:justify;justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}";var h=e("U",function(){function e(e){t(this,e)}e.prototype.onUniCheckboxInitialized=function(e){this.instance.input=e.detail};e.prototype.onUniRadioInitialized=function(e){this.instance.input=e.detail};e.prototype.render=function(){var e=m();return r({classes:e})};e.prototype.componentDidLoad=function(){this.instance=s(this.el)};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});return e}());h.style=g}}}));