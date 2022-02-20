var E=Object.defineProperty,T=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var N=(s,e,r)=>e in s?E(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r,j=(s,e)=>{for(var r in e||(e={}))H.call(e,r)&&N(s,r,e[r]);if(R)for(var r of R(e))J.call(e,r)&&N(s,r,e[r]);return s},P=(s,e)=>T(s,B(e));import{o as g,c as k,r as x,a as o,b as i,p as $,d as W,F as U,k as Z,e as z,f as F,t as Q,g as S,w as f,h as G,u as D,i as q,_ as c,j as L,l as I,m as h,n as M,q as X,s as Y,v as ee,x as se,y as te,z as oe,A as ae,B as ne}from"./vendor.dfc5c858.js";const ce=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))n(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const l of m.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerpolicy&&(m.referrerPolicy=d.referrerpolicy),d.crossorigin==="use-credentials"?m.credentials="include":d.crossorigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function n(d){if(d.ep)return;d.ep=!0;const m=r(d);fetch(d.href,m)}};ce();var A=(s,e)=>{const r=s.__vccOpts||s;for(const[n,d]of e)r[n]=d;return r},re="/assets/logo.03d6d6da.png";const de={},ie={class:"NinjaLogo",src:re,alt:"logo"};function le(s,e){return g(),k("img",ie)}var ue=A(de,[["render",le]]);const pe={components:{Logo:ue}},me=s=>($("data-v-7fe153b3"),s=s(),W(),s),_e={class:"header"},fe={class:"header-wrapper"},he={class:"flex items-center"},ge=me(()=>o("p",{class:"pl-3 select-none"},"Ninja",-1));function ke(s,e,r,n,d,m){const l=x("Logo");return g(),k("div",_e,[o("div",fe,[o("div",he,[i(l,{class:"h-10 w-10"}),ge])])])}var ye=A(pe,[["render",ke],["__scopeId","data-v-7fe153b3"]]);const ve={class:"main"},we={setup(s){return(e,r)=>{const n=x("router-view");return g(),k(U,null,[i(ye),o("div",ve,[i(n)])],64)}}};const be="/api",v=Z.create({prefixUrl:be,retry:{limit:0}});function Ce(){return v.get("info").json()}function xe(s){return v.post("cklogin",{json:s}).json()}function Se(){return v.get("qrcode").json()}function je(s){return v.post("check",{json:s}).json()}function Pe(s){const e=new URLSearchParams;return e.set("eid",s),v.get("userinfo",{searchParams:e}).json()}function Ie(s){return v.post("delaccount",{json:s}).json()}function Ae(s){return v.post("update/remark",{json:s}).json()}function O(s){return v.post("WSCKLogin",{json:s}).json()}function Ke(s){return v.post("WSCKDelaccount",{json:s}).json()}function $e(s){return v.post("updateWSCK/remark",{json:s}).json()}function We(s){return v.post("code",{json:s}).json()}function Le(s){return v.post("login",{json:s}).json()}const Ve={setup(){const s=D();q();let e=z({remark:"",jdwsck:void 0,nickName:void 0,timestamp:void 0});const r=async()=>{try{const a=localStorage.getItem("eid"),p=localStorage.getItem("wseid");if(!a&&!p){n();return}if(a){const t=await Pe(a);if(!t){c.error("\u83B7\u53D6\u7528\u6237CK\u4FE1\u606F\u5931\u8D25\uFF0C\u8BF7\u91CD\u91CD\u65B0\u767B\u5F55"),n();return}e.nickName=t.data.nickName,e.timestamp=new Date(t.data.timestamp).toLocaleString()}if(p){const t=await getWSCKUserinfoAPI(p);if(!t){c.error("\u83B7\u53D6\u7528\u6237WSCK\u4FE1\u606F\u5931\u8D25\uFF0C\u8BF7\u91CD\u91CD\u65B0\u767B\u5F55"),n();return}e.nickName=t.data.nickName,e.timestamp=new Date(t.data.timestamp).toLocaleString()}}catch(a){console.error(a)}};F(r);const n=()=>{localStorage.removeItem("eid"),localStorage.removeItem("wseid"),s.push("/login")},d=async()=>{try{const a=localStorage.getItem("eid"),p=await Ie({eid:a});p.code!==200?c.error(p.message):(c.success(p.message),setTimeout(()=>{n()},1e3))}catch(a){console.error(a)}},m=async()=>{try{const a=localStorage.getItem("eid"),p=localStorage.getItem("wseid"),t=e.remark;if(a){const u=await Ae({eid:a,remark:t});u.code!==200?c.success(u.message):c.error(u.message)}if(p){const u=await $e({wseid:p,remark:t});u.code!==200?c.success(u.message):c.error(u.message)}}catch(a){console.error(a)}},l=async()=>{try{const a=e.jdwsck.match(/wskey=(.*?);/)&&e.jdwsck.match(/wskey=(.*?);/)[1],p=e.jdwsck.match(/pin=(.*?);/)&&e.jdwsck.match(/pin=(.*?);/)[1];if(a&&p){const t=await O({wskey:a,pin:p});t.data.wseid?(localStorage.setItem("wseid",t.data.wseid),c.success(t.message)):c.error(t.message||"wskey \u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u540E\u91CD\u8BD5\uFF01")}else c.error("wskey \u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u540E\u91CD\u8BD5\uFF01")}catch(a){console.error(a)}},w=async()=>{try{const a=localStorage.getItem("wseid"),p=await Ke({wseid:a});p.code!==200?c.error(p.message):(c.success(p.message),setTimeout(()=>{n()},1e3))}catch(a){console.error(a)}},_=a=>{const p=encodeURIComponent(`{"category":"jump","des":"m","action":"to","url":"${a}"}`);window.location.href=`openapp.jdmobile://virtual?params=${p}`,console.log(window.location.href)},C=[{name:"\u73A9\u4E00\u73A9\uFF08\u53EF\u627E\u5230\u5927\u591A\u6570\u6D3B\u52A8\uFF09",address:"\u4EAC\u4E1C APP \u9996\u9875-\u9891\u9053-\u8FB9\u73A9\u8FB9\u8D5A",href:"https://funearth.m.jd.com/babelDiy/Zeus/3BB1rymVZUo4XmicATEUSDUgHZND/index.html"},{name:"\u5BA0\u6C6A\u6C6A",address:"\u4EAC\u4E1CAPP-\u9996\u9875/\u73A9\u4E00\u73A9/\u6211\u7684-\u5BA0\u6C6A\u6C6A"},{name:"\u4E1C\u4E1C\u840C\u5BA0",address:"\u4EAC\u4E1CAPP-\u9996\u9875/\u73A9\u4E00\u73A9/\u6211\u7684-\u4E1C\u4E1C\u840C\u5BA0"},{name:"\u4E1C\u4E1C\u519C\u573A",address:"\u4EAC\u4E1CAPP-\u9996\u9875/\u73A9\u4E00\u73A9/\u6211\u7684-\u4E1C\u4E1C\u519C\u573A"},{name:"\u4E1C\u4E1C\u5DE5\u5382",address:"\u4EAC\u4E1CAPP-\u9996\u9875/\u73A9\u4E00\u73A9/\u6211\u7684-\u4E1C\u4E1C\u5DE5\u5382"},{name:"\u4E1C\u4E1C\u8D85\u5E02",address:"\u4EAC\u4E1CAPP-\u9996\u9875/\u73A9\u4E00\u73A9/\u6211\u7684-\u4E1C\u4E1C\u8D85\u5E02"},{name:"\u9886\u73B0\u91D1",address:"\u4EAC\u4E1CAPP-\u9996\u9875/\u73A9\u4E00\u73A9/\u6211\u7684-\u9886\u73B0\u91D1"},{name:"\u4E1C\u4E1C\u5065\u5EB7\u793E\u533A",address:"\u4EAC\u4E1CAPP-\u9996\u9875/\u73A9\u4E00\u73A9/\u6211\u7684-\u4E1C\u4E1C\u5065\u5EB7\u793E\u533A"},{name:"\u4EAC\u559C\u519C\u573A",address:"\u4EAC\u559CAPP-\u6211\u7684-\u4EAC\u559C\u519C\u573A"},{name:"\u4EAC\u559C\u7267\u573A",address:"\u4EAC\u559CAPP-\u6211\u7684-\u4EAC\u559C\u7267\u573A"},{name:"\u4EAC\u559C\u5DE5\u5382",address:"\u4EAC\u559CAPP-\u6211\u7684-\u4EAC\u559C\u5DE5\u5382"},{name:"\u4EAC\u559C\u8D22\u5BCC\u5C9B",address:"\u4EAC\u559CAPP-\u6211\u7684-\u4EAC\u559C\u8D22\u5BCC\u5C9B"},{name:"\u4EAC\u4E1C\u6781\u901F\u7248\u7EA2\u5305",address:"\u4EAC\u4E1C\u6781\u901F\u7248APP-\u6211\u7684-\u7EA2\u5305"}];return P(j({},Q(e)),{activity:C,getInfo:r,logout:n,delAccount:d,changeremark:m,WSCKLogin:l,delWSCKAccount:w,openUrlWithJD:_})}},V=s=>($("data-v-62e65c2e"),s=s(),W(),s),Re={class:"content"},Ne={class:"card"},Ue=V(()=>o("div",{class:"card-header"},[o("p",{class:"card-title"},"\u4E2A\u4EBA\u4E2D\u5FC3")],-1)),ze={class:"card-body"},Fe={class:"card-footer"},Qe=h("\u9000\u51FA\u767B\u5F55"),De=h("\u5220\u9664CK"),qe={class:"card"},Oe=L('<div class="card-header" data-v-62e65c2e><p class="card-title" data-v-62e65c2e>WSCK \u5F55\u5165</p><div class="card-body text-base leading-6" data-v-62e65c2e><b data-v-62e65c2e>wskey\u6709\u6548\u671F\u957F\u8FBE\u4E00\u5E74\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\u786E\u8BA4\u4F7F\u7528\uFF0C\u614E\u91CD\uFF01</b><p data-v-62e65c2e>\u5220WSCK\u5728\u4E0B\u65B9\u3002</p><b data-v-62e65c2e>\u4E5F\u53EF\u4EE5\u4FDD\u6301pin\u4E0D\u53D8\uFF0C\u968F\u610F\u66F4\u6539wskey\uFF0C\u7B49\u540C\u4E8E\u5220\u9664WSCK\u3002\u6539\u5BC6\u7801\u89E3\u51B3\u4E00\u5207CK\u6CC4\u9732\u95EE\u9898\u3002</b><p data-v-62e65c2e>\u7528\u6237\u987B\u624B\u52A8\u63D0\u53D6pin\u548Cwskey\uFF0C\u683C\u5F0F\u5982\uFF1A&quot;pin=xxxxxx;wskey=xxxxxxxxxx;&quot;\u3002</p><p class="card-subtitle" data-v-62e65c2e>\u2014\u2014IOS\u7528\u6237\u624B\u673A\u6293\u5305APP\u2003<a style="" href="https://apps.apple.com/cn/app/stream/id1312141691" target="_blank" id="downiOSApp" data-v-62e65c2e>\u70B9\u51FB\u8DF3\u8F6C\u5B89\u88C5</a></p><p class="card-subtitle" data-v-62e65c2e>\u2014\u2014\u5728api.m.jd.com\u57DF\u540D\u4E0B\u627EPOST\u8BF7\u6C42\u5927\u6982\u7387\u80FD\u627E\u5230wskey\u3002</p><p class="card-subtitle" data-v-62e65c2e>wskey\u5728\u5F55\u5165\u540E\u7ACB\u9A6C\u4E0A\u7EBF\uFF0C\u7CFB\u7EDF\u4F1A\u5728\u6307\u5B9A\u65F6\u95F4\u68C0\u67E5wskey\uFF0C\u6709\u6548\u5219\u81EA\u52A8\u8F6C\u6362\u51FAcookie\u767B\u5F55</p><p class="card-subtitle" data-v-62e65c2e>cookie\u5931\u6548\u540E\uFF0C\u4E5F\u4F1A\u5728\u7CFB\u7EDF\u8BBE\u5B9A\u7684\u6307\u5B9A\u65F6\u95F4\u5185\u81EA\u52A8\u8F6C\u6362\u51FA\u65B0\u7684cookie\uFF0C\u5B9E\u73B0\u4E00\u6B21\u5F55\u5165\u957F\u671F\u6709\u6548</p><b data-v-62e65c2e>wskey\u4F1A\u968F\u7740\u4EAC\u4E1Capp\u7684\u9000\u51FA\u767B\u5F55\u548C\u66F4\u6539\u5BC6\u7801\u800C\u5931\u6548\uFF0C\u6E05\u695Aapp\u6570\u636E\u6216\u8005\u5378\u8F7D\u8F6F\u4EF6\u4E0D\u4F1A\u5F71\u54CD\u3002</b></div></div>',1),Ee={class:"card-body text-center"},Te={class:"card-footer"},Be=h("\u91CD\u65B0\u5F55\u5165"),He=h("\u5220\u9664WSCK"),Je={class:"card"},Ze=V(()=>o("div",{class:"card-header"},[o("p",{class:"card-title"},"\u4FEE\u6539\u5907\u6CE8\uFF08CK\u548CWSCK\u540C\u6B65\uFF09")],-1)),Ge={class:"card-body text-center"},Me={class:"card-footer"},Xe=h("\u4FEE\u6539"),Ye={class:"card"},es=V(()=>o("div",{class:"card-header"},[o("p",{class:"card-title"},"\u5E38\u89C1\u6D3B\u52A8\u4F4D\u7F6E"),o("span",{class:"card-subtitle"},"\u4E0B\u9762\u662F\u4E00\u4E9B\u5E38\u89C1\u6D3B\u52A8\u7684\u4F4D\u7F6E")],-1)),ss={class:"card-body"},ts={class:"pr-2"},os=["onClick"];function as(s,e,r,n,d,m){const l=x("el-button"),w=x("el-input");return g(),k("div",Re,[o("div",Ne,[Ue,o("div",ze,[o("p",null,"\u6635\u79F0\uFF1A"+S(s.nickName),1),o("p",null,"\u66F4\u65B0\u65F6\u95F4\uFF1A"+S(s.timestamp),1)]),o("div",Fe,[i(l,{size:"small",auto:"",onClick:n.logout},{default:f(()=>[Qe]),_:1},8,["onClick"]),i(l,{type:"danger",size:"small",auto:"",onClick:n.delAccount},{default:f(()=>[De]),_:1},8,["onClick"])])]),o("div",qe,[Oe,o("div",Ee,[i(w,{modelValue:s.jdwsck,"onUpdate:modelValue":e[0]||(e[0]=_=>s.jdwsck=_),placeholder:"pin=xxxxxx;wskey=xxxxxxxxxx;",size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue"])]),o("div",Te,[i(l,{type:"success",size:"small",auto:"",onClick:n.WSCKLogin},{default:f(()=>[Be]),_:1},8,["onClick"]),i(l,{type:"danger",size:"small",auto:"",onClick:n.delWSCKAccount},{default:f(()=>[He]),_:1},8,["onClick"])])]),o("div",Je,[Ze,o("div",Ge,[i(w,{modelValue:s.remark,"onUpdate:modelValue":e[1]||(e[1]=_=>s.remark=_),size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue"])]),o("div",Me,[i(l,{type:"success",size:"small",auto:"",onClick:n.changeremark},{default:f(()=>[Xe]),_:1},8,["onClick"])])]),o("div",Ye,[es,o("div",ss,[o("ul",null,[(g(!0),k(U,null,G(n.activity,(_,C)=>(g(),k("li",{key:C,class:"leading-normal"},[o("span",null,S(_.name)+"\uFF1A",1),o("span",ts,S(_.address),1),_.href?(g(),k("a",{key:0,class:"text-blue-400",href:"#",onClick:a=>n.openUrlWithJD(_.href)},"\u76F4\u8FBE\u94FE\u63A5",8,os)):I("",!0)]))),128))])])])])}var ns=A(Ve,[["render",as],["__scopeId","data-v-62e65c2e"]]);const cs={setup(){const s=D();q();let e=z({marginCount:0,allowAdd:!0,cookie:"",QRCode:void 0,qrCodeVisibility:!1,token:void 0,okl_token:void 0,cookies:void 0,timer:void 0,waitLogin:!1,marginWSCKCount:0,allowWSCKAdd:!0,jdwsck:void 0,showQR:!1,showWSCK:!1,showCK:!0,loginForm:{mobile:"",smscode:""},loginRules:{mobile:[{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",trigger:"blur"},{validator:(t,u,y)=>{/^1\d{10}$/.test(u)?y():y(new Error("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7!"))},trigger:"blur"}],smscode:[{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",trigger:"blur"}]}});const r=async()=>{try{const t=(await Ce()).data;e.marginCount=t.marginCount,e.allowAdd=t.allowAdd,e.marginWSCKCount=~~(t==null?void 0:t.marginWSCKCount),e.allowWSCKAdd=!!(t==null?void 0:t.allowWSCKAdd),e.showQR=!!(t==null?void 0:t.showQR),e.showWSCK=!!(t==null?void 0:t.showWSCK),e.showCK=!!(t==null?void 0:t.showCK)}catch(t){console.error(t)}},n=async()=>{if(this.showQR)try{const t=await Se();e.token=t.data.token,e.okl_token=t.data.okl_token,e.cookies=t.data.cookies,e.QRCode=t.data.QRCode,e.QRCode&&(e.waitLogin=!0,clearInterval(e.timer),e.timer=setInterval(l,3e3))}catch(t){console.error(t),c.error("\u751F\u6210\u4E8C\u7EF4\u7801\u5931\u8D25\uFF01\u8BF7\u91CD\u8BD5\u6216\u653E\u5F03")}else c.warning("\u626B\u7801\u5DF2\u7981\u7528\u8BF7\u624B\u52A8\u6293\u5305")},d=async()=>{e.qrCodeVisibility=!0},m=async()=>{const t=`openapp.jdmobile://virtual/ad?params={"category":"jump","des":"ThirdPartyLogin","action":"to","onekeylogin":"return","url":"https://plogin.m.jd.com/cgi-bin/m/tmauth?appid=300&client_type=m&token=${e.token}","authlogin_returnurl":"weixin://","browserlogin_fromurl":"${window.location.host}"}`;window.location.href=t},l=async()=>{try{const t=await je({token:e.token,okl_token:e.okl_token,cookies:e.cookies});switch(t==null?void 0:t.data.errcode){case 0:localStorage.setItem("eid",t.data.eid),c.success(t.message),clearInterval(e.timer),s.push("/");break;case 176:break;default:c.error(t.message),e.waitLogin=!1,clearInterval(e.timer);break}}catch{clearInterval(e.timer),e.waitLogin=!1}},w=async()=>{try{const t=e.cookie.match(/pt_key=(.*?);/)&&e.cookie.match(/pt_key=(.*?);/)[1],u=e.cookie.match(/pt_pin=(.*?);/)&&e.cookie.match(/pt_pin=(.*?);/)[1];if(t&&u){const y=await xe({pt_key:t,pt_pin:u});y.data.eid?(localStorage.setItem("eid",y.data.eid),c.success(y.message),s.push("/")):c.error(y.message||"cookie \u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u540E\u91CD\u8BD5\uFF01")}else c.error("cookie \u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u540E\u91CD\u8BD5\uFF01")}catch(t){console.error(t)}},_=async()=>{try{const t=e.jdwsck.match(/wskey=(.*?);/)&&e.jdwsck.match(/wskey=(.*?);/)[1],u=e.jdwsck.match(/pin=(.*?);/)&&e.jdwsck.match(/pin=(.*?);/)[1];if(t&&u){const y=await O({wskey:t,pin:u});y.data.wseid?(localStorage.setItem("wseid",y.data.wseid),c.success(y.message),s.push("/")):c.error(y.message||"wskey \u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u540E\u91CD\u8BD5\uFF01")}else c.error("wskey \u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u540E\u91CD\u8BD5\uFF01")}catch(t){console.error(t)}};F(()=>{r(),n()});const C=M(null),a=async()=>{C.value.validateField("mobile",async t=>{try{if(console.log(t),!t){const u=await We(e.loginForm);u.code==200?(sessionStorage.setItem("ck",u.data),c.success(u.message)):c.error(u.message)}}catch(u){console.error(u)}})},p=async()=>{try{await C.value.validate();const t=await Le(P(j({},e.loginForm),{ck:sessionStorage.getItem("ck")}));t.data.eid?(localStorage.setItem("eid",t.data.eid),c.success(t.message),s.push("/")):c.error(t.message||"cookie \u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u540E\u91CD\u8BD5\uFF01")}catch(t){console.error(t)}};return P(j({loginFormRef:C},Q(e)),{getInfo:r,getQrcode:n,showQrcode:d,ckeckLogin:l,jumpLogin:m,CKLogin:w,WSCKLogin:_,sendCode:a,login:p})}},b=s=>($("data-v-11f79827"),s=s(),W(),s),rs={class:"content"},ds=L('<div class="card" data-v-11f79827><div class="card-header" data-v-11f79827><div class="flex items-center justify-between" data-v-11f79827><p class="card-title" data-v-11f79827>Ninja\u63D0\u9192\u60A8</p></div></div><div class="card-body text-base leading-6" data-v-11f79827><p data-v-11f79827> \u4E3A\u4E86\u60A8\u7684\u8D22\u4EA7\u5B89\u5168\u8BF7\u5173\u95ED\u514D\u5BC6\u652F\u4ED8\u4EE5\u53CA\u6253\u5F00\u652F\u4ED8\u9A8C\u5BC6\uFF08\u4EAC\u4E1C-\u8BBE\u7F6E-\u652F\u4ED8\u8BBE\u7F6E-\u652F\u4ED8\u9A8C\u5BC6\u8BBE\u7F6E\uFF09\u3002 </p><p data-v-11f79827>\u5EFA\u8BAE\u4EAC\u4E1C\u8D26\u6237\u7ED1\u5B9A\u5FAE\u4FE1\u4EE5\u4FDD\u8BC1\u63D0\u73B0\u80FD\u5230\u8D26\u3002</p><p data-v-11f79827> \u7531\u4E8E\u4EAC\u4E1C\u5F02\u5730\u767B\u5F55\u9650\u5236\uFF0C\u626B\u7801\u83B7\u53D6cookie\u53EA\u67092\u5C0F\u65F6\u6709\u6548\u671F\uFF0C\u56E0\u6B64\u6682\u65F6\u5173\u95ED\u626B\u7801\u529F\u80FD\uFF0C\u73B0\u9700\u624B\u52A8\u6293\u53D6Cookie\u3002 </p><p data-v-11f79827>\u4E14\u6709\u6548\u671F\u4E0D\u957F\uFF0C\u5E73\u57473-5\u5929\uFF0C\u56E0\u6B64\u9700\u8981\u53CA\u65F6\u66F4\u65B0\u3002</p><b data-v-11f79827>\u5B89\u5168\u8D77\u89C1\uFF0CWSCK\u53EF\u4EE5\u5728CK\u767B\u5F55\u540E\u5F55\u5165\uFF0C\u671F\u9650\u534A\u6C38\u4E45\u3002</b></div><div class="card-footet" data-v-11f79827></div></div>',1),is={key:0,class:"card"},ls={class:"card-header"},us={class:"flex items-center justify-between"},ps=b(()=>o("p",{class:"card-title"},"\u626B\u7801\u767B\u5F55",-1)),ms={class:"ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},_s=b(()=>o("span",{class:"card-subtitle"}," \u8BF7\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u767B\u5F55\uFF0C\u70B9\u51FB\u6309\u94AE\u540E\u56DE\u5230\u672C\u7F51\u7AD9\u67E5\u770B\u662F\u5426\u767B\u5F55\u6210\u529F\uFF0C\u4EAC\u4E1C\u7684\u5347\u7EA7\u63D0\u793A\u4E0D\u7528\u7BA1\u3002 ",-1)),fs={class:"card-body text-center"},hs={key:0,class:"flex flex-col w-48 m-auto mt-4"},gs=h("\u626B\u63CF\u4E8C\u7EF4\u7801\u767B\u5F55"),ks=h("\u8DF3\u8F6C\u5230\u4EAC\u4E1C App \u767B\u5F55"),ys=["src"],vs=b(()=>o("div",{class:"card-footer"},null,-1)),ws={key:1,class:"card"},bs={class:"card-header"},Cs={class:"flex items-center justify-between"},xs=b(()=>o("p",{class:"card-title"},"WSCK \u5F55\u5165",-1)),Ss={class:"ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},js=L('<div class="card-body text-base leading-6" data-v-11f79827><b data-v-11f79827>wskey\u6709\u6548\u671F\u957F\u8FBE\u4E00\u5E74\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\u786E\u8BA4\u4F7F\u7528\uFF08\u5220\u4E0D\u6389\uFF0C\u614E\u7528\uFF09</b><p data-v-11f79827> \u7528\u6237\u987B\u624B\u52A8\u63D0\u53D6pin\u548Cwskey\uFF0C\u683C\u5F0F\u5982\uFF1A&quot;pt_pin=xxxxxx;wskey=xxxxxxxxxx;&quot;\u3002 </p><p class="card-subtitle" data-v-11f79827> \u2014\u2014IOS\u7528\u6237\u624B\u673A\u6293\u5305APP\u2003<a style="" href="https://apps.apple.com/cn/app/stream/id1312141691" target="_blank" id="downiOSApp" data-v-11f79827>\u70B9\u51FB\u8DF3\u8F6C\u5B89\u88C5</a></p><p class="card-subtitle" data-v-11f79827> \u2014\u2014\u5728api.m.jd.com\u57DF\u540D\u4E0B\u627EPOST\u8BF7\u6C42\u5927\u6982\u7387\u80FD\u627E\u5230wskey\u3002 </p><p class="card-subtitle" data-v-11f79827> wskey\u5728\u5F55\u5165\u540E\u7ACB\u9A6C\u4E0A\u7EBF\uFF0C\u7CFB\u7EDF\u4F1A\u5728\u6307\u5B9A\u65F6\u95F4\u68C0\u67E5wskey\uFF0C\u6709\u6548\u5219\u81EA\u52A8\u8F6C\u6362\u51FAcookie\u767B\u5F55 </p><p class="card-subtitle" data-v-11f79827> cookie\u5931\u6548\u540E\uFF0C\u4E5F\u4F1A\u5728\u7CFB\u7EDF\u8BBE\u5B9A\u7684\u6307\u5B9A\u65F6\u95F4\u5185\u81EA\u52A8\u8F6C\u6362\u51FA\u65B0\u7684cookie\uFF0C\u5B9E\u73B0\u4E00\u6B21\u5F55\u5165\u957F\u671F\u6709\u6548 </p><b data-v-11f79827>wskey\u4F1A\u968F\u7740\u4EAC\u4E1Capp\u7684\u9000\u51FA\u767B\u5F55\u548C\u66F4\u6539\u5BC6\u7801\u800C\u5931\u6548\uFF0C\u6E05\u695Aapp\u6570\u636E\u6216\u8005\u5378\u8F7D\u8F6F\u4EF6\u4E0D\u4F1A\u5F71\u54CD\u3002</b></div><span class="card-subtitle" data-v-11f79827> \u8BF7\u5728\u4E0B\u65B9\u8F93\u5165\u60A8\u7684 WSCK </span>',2),Ps={class:"card-body text-center"},Is=h("\u5F55\u5165"),As=b(()=>o("div",{class:"card-footet"},null,-1)),Ks={class:"card"},$s={class:"card-header"},Ws={class:"flex items-center justify-between"},Ls=b(()=>o("p",{class:"card-title"},"\u9A8C\u8BC1\u7801\u767B\u5F55",-1)),Vs={class:"ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},Rs={class:"card-body text-center"},Ns=h("\u83B7\u53D6\u9A8C\u8BC1\u7801"),Us={class:"text-center"},zs=h(" \u767B\u5F55 "),Fs={key:2,class:"card"},Qs={class:"card-header"},Ds={class:"flex items-center justify-between"},qs=b(()=>o("p",{class:"card-title"},"CK \u767B\u5F55",-1)),Os={class:"ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},Es=b(()=>o("div",{class:"card-body text-base leading-6"},[o("p",null,[h(" PC\u7528\u6237\u5EFA\u8BAE\u4F7F\u7528\u5F00\u6E90\u5DE5\u5177"),o("a",{style:{},href:"https://github.com/Waikkii/JD_Get_Cookie",target:"_blank",id:"waikiki"},"JD_Get_Cookie"),h("\u83B7\u53D6cookie\u5E76\u5728\u4E0B\u65B9\u586B\u5199\u3002 ")]),o("p",null,[h(" \u624B\u673A\u7528\u6237\u53EF\u4EE5\u4F7F\u7528Alook\u6D4F\u89C8\u5668\u767B\u5F55"),o("a",{style:{},href:"https://m.jd.com/",target:"_blank",id:"jd"},"JD\u5B98\u7F51"),h("\uFF0C\u5E76\u5728\u83DC\u5355-\u5DE5\u5177\u7BB1-\u5F00\u53D1\u8005\u5DE5\u5177-Cookies\u4E2D\u83B7\u53D6\uFF08Android\u548CiPhone\u901A\u7528\uFF09\u3002 ")]),o("p",null," \u53E6\u5916\u4E5F\u53EF\u4EE5\u4F7F\u7528\u6293\u5305\u5DE5\u5177\uFF08iPhone\uFF1AStream\uFF0CAndroid\uFF1AHttpCanary\uFF09\u6293\u53D6\u4EAC\u4E1Capp\u7684ck\uFF0C\u8981\u6CE8\u610Fpt_key\u548Cpt_pin\u5B57\u6BB5\u662F\u4EE5app_open\u5F00\u5934\u7684\u3002 "),o("p",null,"cookie\u76F4\u63A5\u586B\u5165\u8F93\u5165\u6846\u5373\u53EF\uFF0CNinja\u4F1A\u81EA\u52A8\u6B63\u5219\u63D0\u53D6pt_key\u548Cpt_pin\u3002")],-1)),Ts=b(()=>o("span",{class:"card-subtitle"}," \u8BF7\u5728\u4E0B\u65B9\u8F93\u5165\u60A8\u7684 cookie \u767B\u5F55\u3002 ",-1)),Bs={class:"card-body text-center"},Hs=h(" \u767B\u5F55 "),Js=b(()=>o("div",{class:"card-footet"},null,-1));function Zs(s,e,r,n,d,m){const l=x("el-button"),w=x("el-input"),_=x("el-form-item"),C=x("el-form");return g(),k("div",rs,[ds,s.showQR?(g(),k("div",is,[o("div",ls,[o("div",us,[ps,o("span",ms,"\u4F59\u91CF\uFF1A"+S(s.marginCount),1)]),_s]),o("div",fs,[s.qrCodeVisibility?(g(),k("img",{key:1,src:s.QRCode,width:256,class:"m-auto"},null,8,ys)):(g(),k("div",hs,[i(l,{type:"primary",round:"",onClick:n.showQrcode},{default:f(()=>[gs]),_:1},8,["onClick"]),i(l,{class:"mt-4 ml-0",type:"primary",round:"",onClick:n.jumpLogin},{default:f(()=>[ks]),_:1},8,["onClick"])]))]),vs])):I("",!0),s.showWSCK?(g(),k("div",ws,[o("div",bs,[o("div",Cs,[xs,o("span",Ss,"\u4F59\u91CF\uFF1A"+S(s.marginWSCKCount),1)]),js]),o("div",Ps,[i(w,{modelValue:s.jdwsck,"onUpdate:modelValue":e[0]||(e[0]=a=>s.jdwsck=a),placeholder:"pin=xxxxxx;wskey=xxxxxxxxxx;",size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue"]),i(l,{type:"primary",size:"small",round:"",onClick:n.WSCKLogin},{default:f(()=>[Is]),_:1},8,["onClick"])]),As])):I("",!0),o("div",Ks,[o("div",$s,[o("div",Ws,[Ls,o("span",Vs," \u4F59\u91CF\uFF1A"+S(s.marginCount),1)])]),o("div",Rs,[i(C,{ref:"loginFormRef","label-width":"80px",model:s.loginForm,rules:s.loginRules,onSubmit:e[3]||(e[3]=X(()=>{},["prevent"]))},{default:f(()=>[i(_,{label:"\u624B\u673A\u53F7",prop:"mobile"},{default:f(()=>[i(w,{modelValue:s.loginForm.mobile,"onUpdate:modelValue":e[1]||(e[1]=a=>s.loginForm.mobile=a),size:"small",maxlength:"11"},null,8,["modelValue"])]),_:1}),i(_,{label:"\u9A8C\u8BC1\u7801",prop:"smscode"},{default:f(()=>[i(w,{modelValue:s.loginForm.smscode,"onUpdate:modelValue":e[2]||(e[2]=a=>s.loginForm.smscode=a),size:"small"},{append:f(()=>[i(l,{onClick:n.sendCode},{default:f(()=>[Ns]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),i(_,null,{default:f(()=>[o("div",Us,[i(l,{type:"primary",size:"small",round:"",onClick:n.login},{default:f(()=>[zs]),_:1},8,["onClick"])])]),_:1})]),_:1},8,["model","rules"])])]),s.showCK?(g(),k("div",Fs,[o("div",Qs,[o("div",Ds,[qs,o("span",Os,"\u4F59\u91CF\uFF1A"+S(s.marginCount),1)]),Es,Ts]),o("div",Bs,[i(w,{modelValue:s.cookie,"onUpdate:modelValue":e[4]||(e[4]=a=>s.cookie=a),size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue"]),i(l,{type:"primary",size:"small",round:"",onClick:n.CKLogin},{default:f(()=>[Hs]),_:1},8,["onClick"])]),Js])):I("",!0)])}var Gs=A(cs,[["render",Zs],["__scopeId","data-v-11f79827"]]);const Ms=[{path:"/",component:ns},{path:"/login",component:Gs}],Xs=Y({history:ee(),routes:Ms}),Ys=[te,oe,c,ae,ne],et=[c],K=se(we);Ys.forEach(s=>{K.component(s.name,s)});et.forEach(s=>{K.use(s)});K.use(Xs);K.mount("#app");