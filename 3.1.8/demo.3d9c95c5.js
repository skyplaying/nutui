import{c as p}from"./mobile.ebdf1305.js";import{_ as m}from"./index.17098d96.js";import{m as t,r as d,e as i,j as r,k as f,g as o,B as D,C as v,o as C}from"./vendor.d705eb26.js";const{createDemo:E}=p("barrage"),b=E({props:{},setup(){const e=t(""),u=t(null);let a=t(["\u753B\u7F8E\u4E0D\u770B","\u4E0D\u660E\u89C9\u5389","\u559C\u5927\u666E\u5954","\u7537\u9ED8\u5973\u6CEA","\u7D2F\u89C9\u4E0D\u7231","\u7237\u9752\u7ED3"]);function n(){let s=Math.random();u.value.add("\u968F\u673A\u2014\u2014"+String(s).substr(2,10))}return{inputVal:e,danmu:u,list:a,addDanmu:n}}}),h=e=>(D("data-v-dc99d5cc"),e=e(),v(),e),B={class:"demo"},g=h(()=>o("h2",null,"\u57FA\u7840\u7528\u6CD5",-1)),F={class:"test"};function A(e,u,a,n,s,j){const c=d("nut-barrage"),l=d("nut-cell");return C(),i("div",B,[g,r(l,null,{default:f(()=>[r(c,{ref:"danmu",danmu:e.list},null,8,["danmu"])]),_:1}),o("div",F,[o("button",{onClick:u[0]||(u[0]=(..._)=>e.addDanmu&&e.addDanmu(..._)),class:"add nut-button--primary"},"\u968F\u673A\u6DFB\u52A0")])])}var $=m(b,[["render",A],["__scopeId","data-v-dc99d5cc"]]);export{$ as default};
