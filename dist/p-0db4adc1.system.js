System.register([],(function(n){"use strict";return{execute:function(){n({b:c,i:i});var t=n("a",(function(n){return typeof n!=="undefined"&&n!==null}));var r=function(n){return Array.isArray(n)};var e=function(n){return typeof n==="object"&&!r(n)};var u=function(n){return typeof n==="string"};function i(n){return t(n)&&(u(n)&&n==="")}function c(n){return t(n)&&(r(n)&&n.length===0||e(n)&&Object.keys(n).length===0||u(n)&&n==="")}}}}));