import{c as t}from"./mobile.d7e7333b.js";import{m as i,r as a,o as e,e as o,j as c,k as n,g as l}from"./vendor.bcce97f3.js";import"./index.2ca4a1e4.js";const{createDemo:b}=t("tabbar");var r=b({props:{},setup:()=>({active:i(2),tabSwitch:function(t,i){console.log(t,i)}})});const m={class:"demo full"},u=l("h2",null,"基础用法",-1),f=l("h2",null,"自定义选中",-1),s=l("h2",null,"徽标提示",-1),d=l("h2",null,"自定义颜色",-1),h=l("h2",null,"三个icon的tabbar",-1),v=l("h2",null,"固定底部，可自由跳转",-1);r.render=function(t,i,l,b,r,y){const p=a("nut-tabbar-item"),g=a("nut-tabbar");return e(),o("div",m,[u,c(g,{onTabSwitch:t.tabSwitch},{default:n((()=>[c(p,{"tab-title":"首页",icon:"home"}),c(p,{"tab-title":"分类",icon:"category"}),c(p,{"tab-title":"发现",icon:"find"}),c(p,{"tab-title":"购物车",icon:"cart"}),c(p,{"tab-title":"我的",icon:"my"})])),_:1},8,["onTabSwitch"]),f,c(g,{visible:t.active,"onUpdate:visible":i[0]||(i[0]=i=>t.active=i)},{default:n((()=>[c(p,{"tab-title":"首页",icon:"home"}),c(p,{"tab-title":"分类",icon:"category"}),c(p,{"tab-title":"发现",icon:"find"}),c(p,{"tab-title":"购物车",icon:"cart"}),c(p,{"tab-title":"我的",icon:"my"})])),_:1},8,["visible"]),s,c(g,null,{default:n((()=>[c(p,{"tab-title":"首页",icon:"home",num:"11"}),c(p,{"tab-title":"分类",icon:"category"}),c(p,{"tab-title":"发现",icon:"find"}),c(p,{"tab-title":"购物车",icon:"cart",num:"110"}),c(p,{"tab-title":"我的",icon:"my"})])),_:1}),d,c(g,{"unactive-color":"#7d7e80","active-color":"#1989fa"},{default:n((()=>[c(p,{"tab-title":"首页",icon:"home"}),c(p,{"tab-title":"分类",icon:"category"}),c(p,{"tab-title":"发现",icon:"find"}),c(p,{"tab-title":"购物车",icon:"cart"}),c(p,{"tab-title":"我的",icon:"my"})])),_:1}),h,c(g,{"unactive-color":"#7d7e80","active-color":"#1989fa"},{default:n((()=>[c(p,{"tab-title":"首页",icon:"home"}),c(p,{"tab-title":"分类",icon:"category"}),c(p,{"tab-title":"发现",icon:"find"})])),_:1}),v,c(g,{bottom:!0},{default:n((()=>[c(p,{"tab-title":"首页",href:"",icon:"home"}),c(p,{"tab-title":"分类",icon:"category"}),c(p,{"tab-title":"发现",icon:"find"}),c(p,{"tab-title":"购物车",href:"https://m.jd.com",icon:"cart"}),c(p,{"tab-title":"我的",href:"######",icon:"my"})])),_:1})])};export{r as default};
