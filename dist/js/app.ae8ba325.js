(function(){"use strict";var e={6092:function(e,t,n){var r=n(9242),o=n(3396);function i(e,t,n,r,i,s){const a=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(a)}var s={name:"App"},a=n(89);const c=(0,a.Z)(s,[["render",i]]);var u=c,d=n(2483);const f=[{path:"/",name:"Home",component:()=>Promise.all([n.e(60),n.e(177)]).then(n.bind(n,2427))},{path:"/cartList",name:"CartList",component:()=>n.e(77).then(n.bind(n,5225))},{path:"/orderConfirmation/:id",name:"OrderConfirmation",component:()=>Promise.all([n.e(60),n.e(32)]).then(n.bind(n,8862))},{path:"/orderList",name:"OrderList",component:()=>Promise.all([n.e(60),n.e(844)]).then(n.bind(n,5782))},{path:"/shop/:id",name:"Shop",component:()=>Promise.all([n.e(60),n.e(523)]).then(n.bind(n,866))},{path:"/person",name:"PersonalInfo",component:()=>Promise.all([n.e(60),n.e(445)]).then(n.bind(n,6763))},{path:"/chooseAddressList/:shopId",name:"ChooseAddressList",component:()=>Promise.all([n.e(60),n.e(738)]).then(n.bind(n,3169))},{path:"/myAddressList",name:"MyAddressList",component:()=>Promise.all([n.e(60),n.e(108)]).then(n.bind(n,7833))},{path:"/upsertAddress/:id?",name:"UpsertAddress",component:()=>Promise.all([n.e(60),n.e(624)]).then(n.bind(n,9910))},{path:"/register",name:"Register",component:()=>Promise.all([n.e(60),n.e(258)]).then(n.bind(n,8174)),beforeEnter(e,t,n){const{isLogin:r}=localStorage;r?n({name:"Home"}):n()}},{path:"/login",name:"Login",component:()=>Promise.all([n.e(60),n.e(642)]).then(n.bind(n,9723)),beforeEnter(e,t,n){const{isLogin:r}=localStorage;r?n({name:"Home"}):n()}}],l=(0,d.p7)({history:(0,d.r5)(),routes:f});l.beforeEach(((e,t,n)=>{const{isLogin:r}=localStorage;r||"Login"===e.name||"Register"===e.name?n():n({name:"Login"})}));var p=l,h=n(65);const m=e=>{const{cartList:t}=e,n=JSON.stringify(t);localStorage.cartList=n},g=()=>{try{return JSON.parse(localStorage.cartList)}catch(e){return{}}};var b=(0,h.MT)({state:{cartList:g(),addressList:[]},mutations:{changeCartItemInfo(e,t){const{shopId:n,productId:r,productInfo:o}=t;let i=e.cartList[n]||{shopName:"",productList:{}},s=i.productList[r];s||(o.count=0,s=o),s.count=s.count+t.num,t.num>0&&(s.check=!0),s.count<0&&(s.count=0),i.productList[r]=s,e.cartList[n]=i,m(e)},changeShopName(e,t){const{shopId:n,shopName:r}=t,o=e.cartList[n]||{shopName:"",productList:{}};o.shopName=r,e.cartList[n]=o,m(e)},changeCartItemChecked(e,t){const{shopId:n,productId:r}=t,o=e.cartList[n].productList[r];o.check=!o.check,m(e)},cleanCartProducts(e,t){const{shopId:n}=t;e.cartList[n].productList={},m(e)},setCartItemsChecked(e,t){const{shopId:n}=t,r=e.cartList[n].productList;if(r)for(let o in r){const e=r[o];e.check=!0}m(e)},clearCartData(e,t){e.cartList[t].productList={}},changeAddressList(e,t){e.addressList.splice(0,e.addressList.length,...t)}},actions:{},modules:{}});(0,r.ri)(u).use(b).use(p).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var s=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],i=e[d][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||s>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<s&&(s=i));if(a){e.splice(d--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+({32:"orderConfirmation",77:"cartList",108:"myAddressList",177:"home",258:"rejister",445:"person",523:"shop",624:"upsertAddress",642:"login_123123",738:"chooseAddressList",844:"orderList"}[e]||e)+"."+{32:"2ba69f55",60:"93df5885",77:"84ff4027",108:"b6ea539e",177:"aab4857f",258:"3e49fe47",445:"64c6f536",523:"b656f91d",624:"ea57b976",642:"097754a1",738:"779f6237",844:"d3a7efec"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+{32:"orderConfirmation",77:"cartList",108:"myAddressList",177:"home",258:"rejister",445:"person",523:"shop",624:"upsertAddress",642:"login_123123",738:"chooseAddressList",844:"orderList"}[e]+"."+{32:"e6b2968f",77:"c94febf1",108:"0c0a6c91",177:"dc9f2d74",258:"e084d114",445:"9750901c",523:"93eec4b7",624:"c2294a7d",642:"0dadf7ac",738:"b679c181",844:"f093856c"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="shengxian:";n.l=function(r,o,i,s){if(e[r])e[r].push(o);else{var a,c;if(void 0!==i)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var f=u[d];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+i){a=f;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=r),e[r]=[o];var l=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var s=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var s=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=a,i.parentNode.removeChild(i),o(c)}};return i.onerror=i.onload=s,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){o=s[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var s=n.miniCssF(r),a=n.p+s;if(t(s,a))return o();e(r,a,null,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={32:1,77:1,108:1,177:1,258:1,445:1,523:1,624:1,642:1,738:1,844:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var s=n.p+n.u(t),a=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",a.name="ChunkLoadError",a.type=i,a.request=s,o[1](a)}};n.l(s,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,s=r[0],a=r[1],c=r[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var d=c(n)}for(t&&t(r);u<s.length;u++)i=s[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},r=self["webpackChunkshengxian"]=self["webpackChunkshengxian"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6092)}));r=n.O(r)})();
//# sourceMappingURL=app.ae8ba325.js.map