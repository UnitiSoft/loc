System.register(["./p-7442796a.system.js","./p-8b3b3be9.system.js","./p-054bfdbe.system.js"],(function(t){"use strict";var n,o,u,e;return{setters:[function(t){n=t.u;o=t.U},function(t){u=t.a},function(t){e=t.u}],execute:function(){t({a:b,b:c,u:r});var i=t("U",{button:"mdc-button",ripple:"mdc-button__ripple",flat:"mdc-button--unelevated",raised:"mdc-button--raised",outlined:"mdc-button--outlined",label:"mdc-button__label",icon:"mdc-button__icon",pro:"uni-button-pro"});function r(t,o){e("uni-button","string");if(!o){n(t.querySelector("button"))}}function b(t,o){e("uni-button-shadow","order");if(!o){n(t.querySelector("button"))}}function c(t){var r=t.el,b=t.pro,c=t.disabled,l=t.noRipple,s=t.mode,d=t.color;e("uni-button-wrap","overflow");Array.from(r.querySelectorAll("button")).forEach((function(t){u(t,i.button);if(b){u(t,"uni-button-pro")}if(!!i[s]){u(t,i[s])}if(!!o[d]){u(t,o[d])}t.disabled=c;if(!l){n(t)}}))}}}}));