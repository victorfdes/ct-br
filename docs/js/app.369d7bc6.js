(function(e){function t(t){for(var o,c,r=t[0],l=t[1],s=t[2],p=0,d=[];p<r.length;p++)c=r[p],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&d.push(i[c][0]),i[c]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var l=n[r];0!==i[l]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},i={app:0},a=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var s=0;s<r.length;s++)t(r[s]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),i=n.n(o);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("Test A-JS")]),n("div",[n("button",{on:{click:e.onClickPP}},[e._v("Random PP")]),n("button",{on:{click:e.onClickOUL}},[e._v("Random OUL")]),n("button",{on:{click:e.onClickEP}},[e._v("Event Push")]),n("button",{on:{click:e.enablePush}},[e._v("Enable Push Notification")])]),n("hr"),n("p",[e._v("On User Login")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.OULEmail,expression:"OULEmail"}],attrs:{type:"text"},domProps:{value:e.OULEmail},on:{input:function(t){t.target.composing||(e.OULEmail=t.target.value)}}}),n("input",{attrs:{type:"text",disabled:"",value:"@gmail.com"}}),n("button",{on:{click:e.clickOULSame}},[e._v("OUL")]),n("hr"),n("p",[e._v("Profile Push")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.PPEmail,expression:"PPEmail"}],attrs:{type:"text"},domProps:{value:e.PPEmail},on:{input:function(t){t.target.composing||(e.PPEmail=t.target.value)}}}),n("input",{attrs:{type:"text",disabled:"",value:"@gmail.com"}}),n("button",{on:{click:e.clickPPSame}},[e._v("PP")]),n("hr"),n("div",{staticStyle:{"text-align":"left"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.adc,expression:"adc"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.adc)?e._i(e.adc,null)>-1:e.adc},on:{change:function(t){var n=e.adc,o=t.target,i=!!o.checked;if(Array.isArray(n)){var a=null,c=e._i(n,a);o.checked?c<0&&(e.adc=n.concat([a])):c>-1&&(e.adc=n.slice(0,c).concat(n.slice(c+1)))}else e.adc=i}}}),e._v("Added to Cart"),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.ps,expression:"ps"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.ps)?e._i(e.ps,null)>-1:e.ps},on:{change:function(t){var n=e.ps,o=t.target,i=!!o.checked;if(Array.isArray(n)){var a=null,c=e._i(n,a);o.checked?c<0&&(e.ps=n.concat([a])):c>-1&&(e.ps=n.slice(0,c).concat(n.slice(c+1)))}else e.ps=i}}}),e._v("Product Sold"),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.pv,expression:"pv"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.pv)?e._i(e.pv,null)>-1:e.pv},on:{change:function(t){var n=e.pv,o=t.target,i=!!o.checked;if(Array.isArray(n)){var a=null,c=e._i(n,a);o.checked?c<0&&(e.pv=n.concat([a])):c>-1&&(e.pv=n.slice(0,c).concat(n.slice(c+1)))}else e.pv=i}}}),e._v("Product Viewed"),n("br"),n("button",{on:{click:e.pushSelectedEvents}},[e._v("Push Selected Events")])]),n("hr"),n("div",{staticStyle:{"text-align":"left"}},[n("button",{on:{click:e.getLS}},[e._v("Show Local Storage")]),n("br"),n("button",{on:{click:e.clearLS}},[e._v("Clear Local Storage")])]),n("div",{staticStyle:{"text-align":"left"}},[e._v(" WZRK_K: "+e._s(e.WZRK_K)+" "),n("br"),n("br"),e._v(" WZRK_G: "+e._s(e.WZRK_G)),n("br"),n("br"),e._v(" LRU_CAHCE: "+e._s(e.LRU_CACHE)),n("br"),n("br"),e._v(" WZRK_EV: "+e._s(e.WZRK_EV)),n("br"),n("br"),e._v(" WZRK_ARP: "+e._s(e.WZRK_ARP)),n("br"),n("br")])])},a=[],c=n("8f47"),r=n.n(c),l={name:"App",components:{},data:function(){return{LRU_CACHE:null,WZRK_K:null,WZRK_G:null,WZRK_EV:null,WZRK_ARP:null,OULEmail:"",PPEmail:"",adc:!1,ps:!1,pv:!1}},methods:{onClickPP:function(){r.a.profile.push({Site:{Email:"as".concat(Math.ceil(10002320*Math.random()),"@gmail.com")}}),this.getLS()},onClickOUL:function(){r.a.onUserLogin.push({Site:{Email:"qw".concat(Math.ceil(10002312*Math.random()),"@gmail.com")}}),this.getLS()},onClickEP:function(){r.a.event.push("Product Eaten"),r.a.event.push("Message Received"),r.a.event.push("Message Viewed"),r.a.event.push("Product add to cart"),this.getLS()},clickOULSame:function(){r.a.onUserLogin.push({Site:{Email:"".concat(this.OULEmail,"@gmail.com")}}),this.getLS()},clickPPSame:function(){r.a.profile.push({Site:{Email:"".concat(this.PPEmail,"@gmail.com")}})},pushSelectedEvents:function(){this.adc||this.ps||this.pv?(this.adc&&r.a.event.push("Added to Cart"),this.ps&&r.a.event.push("Product Sold"),this.pv&&r.a.event.push("Product Viewed"),this.adc=!1,this.ps=!1,this.pv=!1,this.getLS()):alert("Select atleast one event")},enablePush:function(){r.a.notifications.push({titleText:"Wish to receive push notifications?",bodyText:"Click Yes to receive push notifications",okButtonText:"Yes",rejectButtonText:"No",serviceWorkerPath:"/sw.js"})},getLS:function(){this.LRU_CACHE=decodeURIComponent(localStorage["WZRK_X"]),this.WZRK_K=decodeURIComponent(localStorage["WZRK_K"]),this.WZRK_G=decodeURIComponent(localStorage["WZRK_G"]),this.WZRK_EV=decodeURIComponent(localStorage["WZRK_EV"]),this.WZRK_ARP=decodeURIComponent(localStorage["WZRK_ARP"])},clearLS:function(){localStorage.clear(),this.getLS()}},mounted:function(){}},s=l,u=(n("034f"),n("2877")),p=Object(u["a"])(s,i,a,!1,null,null,null),d=p.exports;"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/sw.js").then((function(e){console.log("ServiceWorker registration successful with scope: ",e.scope)}),(function(e){console.log("ServiceWorker registration failed: ",e)}))})),o["a"].config.productionTip=!1,r.a.init("TEST-545-448-RW6Z",""),new o["a"]({render:function(e){return e(d)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.369d7bc6.js.map