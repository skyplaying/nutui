System.register(["./mobile-legacy.d8b6af40.js","./vendor-legacy.2cbae777.js","./index-legacy.82527409.js"],(function(n){"use strict";var e,i,l,c,t,o,a;return{setters:[function(n){e=n.c},function(n){i=n.a,l=n.r,c=n.o,t=n.c,o=n.f,a=n.i},function(){}],execute:function(){const{createDemo:r}=e("navbar");var k=n("default",r({setup:(n,{emit:e})=>({back:()=>{alert("header头部， 点击返回")},title:()=>{alert("header头部， 点击title")},right:()=>{alert("header头部， 点击右侧按钮")},send:()=>{alert("发送")},edit:()=>{alert("编辑")},clear:()=>{alert("清空")},more:()=>{alert("更多")},list:()=>{alert("列表")},icon:()=>{alert("icon")},morelist:()=>{alert("多个更多")},switchTab:function(n,e){console.log(n,e)},...i({tabList:[{id:"11",name:"商品"},{id:"22",name:"评价"},{id:"33",name:"详情"},{id:"44",name:"推荐"},{id:"55",name:"商品"},{id:"66",name:"评价"},{id:"77",name:"详情"},{id:"88",name:"推荐"}]})})}));const s={class:"demo full"},C=o("h2",null,"基础用法",-1),d=o("h2",null,"增加tab及右侧按钮",-1),O=o("h2",null,"多tab切换导航",-1);k.render=function(n,e,i,r,k,b){const u=l("nut-navbar"),m=l("nut-icon");return c(),t("div",s,[C,o(u,{onOnClickBack:n.back,onOnClickTitle:n.title,onOnClickSend:n.send,title:"订单详情",icon:"share-n"},null,8,["onOnClickBack","onOnClickTitle","onOnClickSend"]),o(u,{onOnClickBack:n.back,onOnClickTitle:n.title,onOnClickClear:n.clear,title:"浏览记录",desc:"清空"},null,8,["onOnClickBack","onOnClickTitle","onOnClickClear"]),o(u,{"left-show":!1,onOnClickTitle:n.title,onOnClickIcon:n.icon,onOnClickClear:n.edit,onOnClickSend:n.more,title:"购物车",titIcon:"locationg3",desc:"编辑",icon:"more-x"},null,8,["onOnClickTitle","onOnClickIcon","onOnClickClear","onOnClickSend"]),d,o(u,{tab:"",tabs:[{id:"11",name:"商品"},{id:"22",name:"店铺"}],onSwitchTab:n.switchTab,onOnClickBack:n.back,onOnClickTitle:n.title,onOnClickClear:n.edit,onOnClickSend:n.list,desc:"编辑",icon:"horizontal-n"},null,8,["onSwitchTab","onOnClickBack","onOnClickTitle","onOnClickClear","onOnClickSend"]),O,o(u,{tabs:n.tabList,onSwitchTab:n.switchTab,onOnClickBack:n.back,icon:"more-x",onOnClickSend:n.send},{icons:a((()=>[o(m,{class:"icon",name:"share",onOnClickSlotSend:n.morelist},null,8,["onOnClickSlotSend"])])),_:1},8,["tabs","onSwitchTab","onOnClickBack","onOnClickSend"])])}}}}));
