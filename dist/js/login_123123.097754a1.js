"use strict";(self["webpackChunkshengxian"]=self["webpackChunkshengxian"]||[]).push([[642],{1929:function(s,e,a){a.d(e,{Z:function(){return d},S:function(){return p}});var n=a(3396),t=a(7139);const r={class:"toast"};function o(s,e,a,o,i,l){return(0,n.wg)(),(0,n.iD)("div",r,(0,t.zw)(a.message),1)}var i=a(4870),l={props:["message"]};const p=()=>{const s=(0,i.qj)({show:!1,toastMessage:""}),e=e=>{s.show=!0,s.toastMessage=e,setTimeout((()=>{s.show=!1,s.toastMessage=""}),2e3)},{show:a,toastMessage:n}=(0,i.BK)(s);return{show:a,toastMessage:n,showToast:e}};var u=a(89);const c=(0,u.Z)(l,[["render",o],["__scopeId","data-v-57f1308a"]]);var d=c},9723:function(s,e,a){a.r(e),a.d(e,{default:function(){return f}});var n=a(3396),t=a(9242);const r=s=>((0,n.dD)("data-v-37d31e48"),s=s(),(0,n.Cn)(),s),o={class:"wrapper"},i=r((()=>(0,n._)("img",{class:"wrapper__img",src:"http://www.dell-lee.com/imgs/vue3/user.png",alt:""},null,-1))),l={class:"wrapper__input"},p={class:"wrapper__input"};function u(s,e,a,r,u,c){const d=(0,n.up)("Toast");return(0,n.wg)(),(0,n.iD)("div",o,[i,(0,n._)("div",l,[(0,n.wy)((0,n._)("input",{class:"wrapper__input__content",placeholder:"用户名","onUpdate:modelValue":e[0]||(e[0]=s=>r.username=s)},null,512),[[t.nr,r.username]])]),(0,n._)("div",p,[(0,n.wy)((0,n._)("input",{type:"password",class:"wrapper__input__content",placeholder:"请输入密码","onUpdate:modelValue":e[1]||(e[1]=s=>r.password=s),autocomplete:"new-password"},null,512),[[t.nr,r.password]])]),(0,n._)("div",{class:"wrapper__login-button",onClick:e[2]||(e[2]=(...s)=>r.handleLogin&&r.handleLogin(...s))},"登录"),(0,n._)("div",{class:"wrapper__login-link",onClick:e[3]||(e[3]=(...s)=>r.handleRegisterClick&&r.handleRegisterClick(...s))},"立即注册"),r.show?((0,n.wg)(),(0,n.j4)(d,{key:0,message:r.toastMessage},null,8,["message"])):(0,n.kq)("",!0)])}a(7658);var c=a(4870),d=a(2483),w=a(60),g=a(1929);const h=s=>{const e=(0,d.tv)(),a=(0,c.qj)({username:"",password:""}),n=async()=>{try{const{username:n,password:t}=a;if(""===n||""===t)return s("请填写用户名密码");const r=await(0,w.v_)("/api/user/login",{username:a.username,password:a.password});0===r?.errno?(localStorage.isLogin=!0,e.push({name:"Home"})):s("登录失败")}catch(n){s("请求失败")}},{username:t,password:r}=(0,c.BK)(a);return{username:t,password:r,handleLogin:n}},_=()=>{const s=(0,d.tv)(),e=()=>{s.push({name:"Register"})};return{handleRegisterClick:e}};var m={name:"Login",components:{Toast:g.Z},setup(){const{show:s,toastMessage:e,showToast:a}=(0,g.S)(),{username:n,password:t,handleLogin:r}=h(a),{handleRegisterClick:o}=_();return{handleLogin:r,handleRegisterClick:o,username:n,password:t,show:s,toastMessage:e}}},v=a(89);const k=(0,v.Z)(m,[["render",u],["__scopeId","data-v-37d31e48"]]);var f=k}}]);
//# sourceMappingURL=login_123123.097754a1.js.map