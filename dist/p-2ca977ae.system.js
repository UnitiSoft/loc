var __awaiter=this&&this.__awaiter||function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,u){function o(t){try{c(r.next(t))}catch(e){u(e)}}function a(t){try{c(r["throw"](t))}catch(e){u(e)}}function c(t){t.done?n(t.value):i(t.value).then(o,a)}c((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(u[0]&1)throw u[1];return u[1]},trys:[],ops:[]},r,i,u,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(t){return function(e){return c([t,e])}}function c(o){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(u=o[0]&2?i["return"]:o[0]?i["throw"]||((u=i["return"])&&u.call(i),0):i.next)&&!(u=u.call(i,o[1])).done)return u;if(i=0,u)o=[o[0]&2,u.value];switch(o[0]){case 0:case 1:u=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;i=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(u=n.trys,u=u.length>0&&u[u.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!u||o[1]>u[0]&&o[1]<u[3])){n.label=o[1];break}if(o[0]===6&&n.label<u[1]){n.label=u[1];u=o;break}if(u&&n.label<u[2]){n.label=u[2];n.ops.push(o);break}if(u[2])n.ops.pop();n.trys.pop();continue}o=e.call(t,n)}catch(a){o=[6,a];i=0}finally{r=u=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-8f26514f.system.js"],(function(t){"use strict";var e,n;return{setters:[function(t){e=t.u;n=t.a}],execute:function(){t({a:r,b:o,u:i});function r(t,e,n){var r=t.querySelector(e)||{};return r[n]||""}function i(t,n,r,i){if(t){e(t,n,i).then((function(t){return r.emit(t)}))}}function u(t,e,i){return __awaiter(this,void 0,void 0,(function(){var u,o;return __generator(this,(function(a){switch(a.label){case 0:u=r(t,"a","href");if(!u)return[3,2];return[4,n(u,e,i)];case 1:o=a.sent();return[3,3];case 2:o=null;a.label=3;case 3:return[2,o]}}))}))}function o(t,e,n,r){u(t,e,r).then((function(t){return n.emit(t)}))}}}}));