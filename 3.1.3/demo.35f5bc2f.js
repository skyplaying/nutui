var e=Object.defineProperty,t=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,r=(t,l,o)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[l]=o;import{c as i}from"./mobile.2e41a28a.js";import{a as n,A as c,B as d,C as p,r as m,o as h,e as u,j as f,k as b,g,F as v,i as y,t as j,l as x}from"./vendor.21cda21c.js";import"./index.20f35658.js";const{createDemo:C}=i("noticebar");var O=C({props:{},setup(){const e=n({horseLamp1:["惊喜红包免费领","爆款准点秒","买超值优惠","赢百万京豆"],horseLamp2:["惊喜红包免费领","爆款准点秒","买超值优惠","赢百万京豆"],horseLamp3:["惊喜红包免费领","爆款准点秒","买超值优惠","赢百万京豆"],text:"华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！"});return i=((e,t)=>{for(var l in t||(t={}))s.call(t,l)&&r(e,l,t[l]);if(o)for(var l of o(t))a.call(t,l)&&r(e,l,t[l]);return e})({},c(e)),t(i,l({hello:()=>{console.log("hello world")},go:e=>{console.log(e)}}));var i}});d("data-v-6c6986f8");const w={class:"demo"},A=g("h2",null,"默认用法",-1),L=g("h2",null,"禁用滚动",-1),T=g("h2",null,"通告栏模式--关闭模式",-1),k=x("华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！ "),H=g("h2",null,"通告栏模式--链接模式",-1),I=g("a",{href:"https://www.jd.com"},"京东商城",-1),W=g("h2",null,"纵向滚动",-1),_={class:"interstroll-list"},E=g("h2",null,"纵向复杂滚动动画",-1),P=g("h2",null,"纵向自定义滚动内容",-1),U=["data-index"],D=g("h2",null,"纵向自定义右侧图标",-1);p(),O.render=function(e,t,l,o,s,a){const r=m("nut-noticebar"),i=m("nut-icon");return h(),u("div",w,[A,f(r,{text:e.text},null,8,["text"]),L,f(r,{text:"华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！",scrollable:!1}),T,f(r,{closeMode:!0,onClick:e.hello},{default:b((()=>[k])),_:1},8,["onClick"]),H,f(r,{"left-icon":"https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png"},{default:b((()=>[I])),_:1}),W,g("div",_,[f(r,{direction:"vertical",list:e.horseLamp1,speed:10,standTime:1e3,onClick:e.go,closeMode:!0},null,8,["list","onClick"])]),E,f(r,{direction:"vertical",list:e.horseLamp2,speed:10,standTime:2e3,complexAm:!0},null,8,["list"]),P,f(r,{direction:"vertical",height:50,speed:10,standTime:1e3,list:[],onClose:e.go},{default:b((()=>[(h(!0),u(v,null,y(e.horseLamp3,((e,t)=>(h(),u("div",{class:"custom-item","data-index":t,style:{height:"50px","line-height":"50px"},key:t},j(e),9,U)))),128))])),_:1},8,["onClose"]),D,f(r,{direction:"vertical",list:e.horseLamp1,speed:10,standTime:1e3},{rightIcon:b((()=>[f(i,{type:"trolley",color:"#f0250f"})])),_:1},8,["list"])])},O.__scopeId="data-v-6c6986f8";export{O as default};
