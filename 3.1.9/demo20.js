import{c as f}from"./mobile.js";import{_ as r}from"./index.js";import{m as l,b,a as g,r as v,e as y,j as n,k as c,o as A,g as s,t as E}from"./vendor.js";const{createDemo:x}=f("fixednav"),_=x({props:{},setup(){const e=l(!1),t=l(!1),a=l(!1),u=l(!1);b(()=>{setTimeout(()=>{a.value=!0},1e3)});const d=g([{id:1,text:"\u9996\u9875",icon:"https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png"},{id:2,text:"\u5206\u7C7B",icon:"https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png"},{id:3,text:"\u8D2D\u7269\u8F66",num:2,icon:"https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png"},{id:4,text:"\u6211\u7684",icon:"https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png"}]);return{visible:e,visible1:t,visible2:a,myActive:u,navList:d,selected:o=>{console.log(o)}}}}),S={class:"demo"},j=s("ul",{class:"nut-fixednav__list"},[s("li",{class:"nut-fixednav__list-item"},"1"),s("li",{class:"nut-fixednav__list-item"},"2"),s("li",{class:"nut-fixednav__list-item"},"3"),s("li",{class:"nut-fixednav__list-item"},"4"),s("li",{class:"nut-fixednav__list-item"},"5")],-1),D={class:"text"};function B(e,t,a,u,d,m){const o=v("nut-fixednav"),p=v("nut-icon");return A(),y("div",S,[n(o,{"active-text":"\u57FA\u7840\u7528\u6CD5",position:{top:"70px"},visible:e.visible,"onUpdate:visible":t[0]||(t[0]=i=>e.visible=i),"nav-list":e.navList,onSelected:e.selected},null,8,["visible","nav-list","onSelected"]),n(o,{type:"left",position:{top:"140px"},visible:e.visible1,"onUpdate:visible":t[1]||(t[1]=i=>e.visible1=i),"active-text":"\u5DE6\u4FA7\u6536\u8D77","un-active-text":"\u5DE6\u4FA7\u5C55\u5F00","nav-list":e.navList,onSelected:e.selected},null,8,["visible","nav-list","onSelected"]),n(o,{position:{top:"210px"},overlay:!1,visible:e.visible2,"onUpdate:visible":t[2]||(t[2]=i=>e.visible2=i),"nav-list":e.navList,onSelected:e.selected},null,8,["visible","nav-list","onSelected"]),n(o,{position:{top:"280px"},type:"left",visible:e.myActive,"onUpdate:visible":t[3]||(t[3]=i=>e.myActive=i),onSelected:e.selected},{list:c(()=>[j]),btn:c(()=>[n(p,{name:"retweet",color:"#fff"}),s("span",D,E(e.myActive?"\u81EA\u5B9A\u4E49\u5F00":"\u81EA\u5B9A\u4E49\u5173"),1)]),_:1},8,["visible","onSelected"])])}var U=r(_,[["render",B]]);export{U as default};
