!function(){function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var t=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],n=new/*#__PURE__*/(function(){var e;function t(e){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t),this.initialState=e,console.log(e)}return e=[{key:"moveLeft",value:function(){}},{key:"moveRight",value:function(){}},{key:"moveUp",value:function(){}},{key:"moveDown",value:function(){}},{key:"getScore",value:function(){}},{key:"getState",value:function(){}},{key:"getStatus",value:function(){}},{key:"start",value:function(){}},{key:"restart",value:function(){}}],function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(t.prototype,e),t}())(t),r=0,o=document.querySelector(".game-score"),a=structuredClone(t),u=document.querySelectorAll(".field-cell"),i=document.querySelector(".button"),l=document.querySelector(".message-start"),c=document.querySelector(".message-win"),f=document.querySelector(".message-lose");function s(){for(var e=Math.round(3*Math.random()),t=Math.round(3*Math.random()),i=.1>Math.random()?4:2;a[e][t]>0&&r<u.length;)e=Math.round(3*Math.random()),t=Math.round(3*Math.random());a[e][t]=i,r++,o.textContent=n.getScore(),function(){for(var e=0;e<u.length;e++)u[e].textContent=0===a[Math.floor(e/4)][e%4]?"":a[Math.floor(e/4)][e%4],u[e].className=0===a[Math.floor(e/4)][e%4]?"field-cell":"field-cell field-cell--".concat(a[Math.floor(e/4)][e%4])}()}i.addEventListener("click",function(){"button restart"===i.className&&n.restart(),"button start"===i.className&&n.start()}),document.addEventListener("keydown",function(t){switch(t.keyCode){case 37:n.moveLeft();break;case 38:n.moveUp();break;case 39:n.moveRight();break;case 40:n.moveDown()}((function(t){if(Array.isArray(t))return e(t)})(u)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(u)||function(t,n){if(t){if("string"==typeof t)return e(t,void 0);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,void 0)}}(u)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).some(function(e){return"2048"===e.textContent})&&(c.className="message message-win"),r===u.length&&!function(){for(var e=!1,t=a.length-2;t>=0;t--)for(var n=0;n<a[t].length;n++)a[t+1][n]===a[t][n]&&0!==a[t][n]&&(e=!0);for(var r=a.length-1;r>0;r--)for(var o=0;o<a[r].length;o++)a[r-1][o]===a[r][o]&&0!==a[r][o]&&(e=!0);for(var u=0;u<a.length;u++)for(var i=1;i<a[u].length;i++)a[u][i-1]===a[u][i]&&0!==a[u][i]&&(e=!0);for(var l=0;l<a.length;l++)for(var c=a[l].length-2;c>=0;c--)a[l][c+1]===a[l][c]&&0!==a[l][c]&&(e=!0);return e}()&&(f.className="message message-lose")}),n.start=function(){l.className="message message-start hidden",f.className="message message-lose hidden",c.className="message message-win hidden",i.className="button restart",i.textContent="Restart",s(),s()},n.restart=function(){r=0,o.textContent=0,a=structuredClone(t),n.start()},n.getScore=function(){var e=0,t=!0,n=!1,r=void 0;try{for(var o,u=a[Symbol.iterator]();!(t=(o=u.next()).done);t=!0){var i=o.value;e+=i.reduce(function(e,t){return e+t})}}catch(e){n=!0,r=e}finally{try{t||null==u.return||u.return()}finally{if(n)throw r}}return e},n.moveDown=function(){for(var e=!1,t=[],n=0;n<a.length;n++)for(var o=function(n){for(var o=function(o){if(a[n+1][o]===a[n][o]&&0!==a[n][o]&&t.every(function(e){return e!==o})){if(0!==a[0][o]&&0!==a[3][o]&&a[0][o]===a[1][o]&&a[2][o]===a[3][o])return a[3][o]=2*a[2][o],a[2][o]=2*a[1][o],a[1][o]=0,a[0][o]=0,e=!0,t.push(o),r-=2,"continue";a[n+1][o]*=2,a[n][o]=0,e=!0,t.push(o),r--}if(0===a[n+1][o]&&0!==a[n][o]){var u;u=[a[n][o],a[n+1][o]],a[n+1][o]=u[0],a[n][o]=u[1],e=!0}},u=0;u<a[n].length;u++)o(u)},u=a.length-2;u>=0;u--)o(u);e&&s()},n.moveUp=function(){for(var e=!1,t=[],n=0;n<a.length;n++)for(var o=function(n){for(var o=function(o){if(a[n-1][o]===a[n][o]&&0!==a[n][o]&&t.every(function(e){return e!==o})){if(0!==a[0][o]&&0!==a[3][o]&&a[0][o]===a[1][o]&&a[2][o]===a[3][o])return a[0][o]=2*a[1][o],a[1][o]=2*a[2][o],a[2][o]=0,a[3][o]=0,e=!0,t.push(o),r-=2,"continue";a[n-1][o]*=2,a[n][o]=0,e=!0,t.push(o),r--}if(0===a[n-1][o]&&0!==a[n][o]){var u;u=[a[n][o],a[n-1][o]],a[n-1][o]=u[0],a[n][o]=u[1],e=!0}},u=0;u<a[n].length;u++)o(u)},u=a.length-1;u>0;u--)o(u);e&&s()},n.moveLeft=function(){for(var e=!1,t=[],n=0;n<a.length;n++)for(var o,u=0;u<a.length;u++)for(var i=1;i<a[u].length;i++){if(a[u][i-1]===a[u][i]&&0!==a[u][i]&&t.every(function(e){return e!==u})){if(0!==a[u][0]&&0!==a[u][3]&&a[u][0]===a[u][1]&&a[u][2]===a[u][3]){a[u][0]=2*a[u][1],a[u][1]=2*a[u][2],a[u][2]=0,a[u][3]=0,e=!0,t.push(u),r-=2;continue}a[u][i-1]*=2,a[u][i]=0,e=!0,t.push(u),r--}0===a[u][i-1]&&0!==a[u][i]&&(o=[a[u][i],a[u][i-1]],a[u][i-1]=o[0],a[u][i]=o[1],e=!0)}e&&s()},n.moveRight=function(){for(var e=!1,t=[],n=0;n<a.length;n++)for(var o,u=0;u<a.length;u++)for(var i=a[u].length-2;i>=0;i--){if(a[u][i+1]===a[u][i]&&0!==a[u][i]&&t.every(function(e){return e!==u})){if(0!==a[u][0]&&0!==a[u][3]&&a[u][0]===a[u][1]&&a[u][2]===a[u][3]){a[u][3]=2*a[u][2],a[u][2]=2*a[u][1],a[u][1]=0,a[u][0]=0,e=!0,t.push(u),r-=2;continue}a[u][i+1]*=2,a[u][i]=0,e=!0,t.push(u),r--}0===a[u][i+1]&&0!==a[u][i]&&(o=[a[u][i],a[u][i+1]],a[u][i+1]=o[0],a[u][i]=o[1],e=!0)}e&&s()}}();
//# sourceMappingURL=index.eff1ec7a.js.map