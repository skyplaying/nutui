var m=Object.defineProperty,_=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var d=(e,o,t)=>o in e?m(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,i=(e,o)=>{for(var t in o||(o={}))f.call(o,t)&&d(e,t,o[t]);if(c)for(var t of c(o))v.call(o,t)&&d(e,t,o[t]);return e},l=(e,o)=>_(e,h(o));import{c as C}from"./mobile.4f9c1c24.js";import{_ as B}from"./index.25a44c2e.js";import{a as E,r as g,e as S,g as s,j as p,B as y,C as k,o as j}from"./vendor.36d75c4a.js";const{createDemo:A}=C("signature"),F=A({props:{},setup(){const e=E({lineWidth:4,strokeStyle:"green"}),o=(t,r)=>{let n=document.createElement("img");n.src=r,document.querySelector(".demo1").appendChild(n)};return l(i({},e),{confirm:o})}}),u=e=>(y("data-v-c5e4da9c"),e=e(),k(),e),I={class:"demo"},W=u(()=>s("h2",null,"\u57FA\u7840\u7528\u6CD5",-1)),$=u(()=>s("p",{class:"demo-tips demo1"},"Tips: \u70B9\u51FB\u786E\u8BA4\u6309\u94AE,\u4E0B\u65B9\u663E\u793A\u7B7E\u540D\u56FE\u7247",-1)),D=u(()=>s("h2",null,"\u4FEE\u6539\u989C\u8272\u548C\u7B7E\u5B57\u7C97\u7EC6",-1));function N(e,o,t,r,n,V){const a=g("nut-signature");return j(),S("div",I,[W,s("div",null,[p(a,{onConfirm:e.confirm,onClear:e.clear},null,8,["onConfirm","onClear"]),$]),D,s("div",null,[p(a,{lineWidth:e.lineWidth,strokeStyle:e.strokeStyle},null,8,["lineWidth","strokeStyle"])])])}var T=B(F,[["render",N],["__scopeId","data-v-c5e4da9c"]]);export{T as default};
