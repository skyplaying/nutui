!function(){var e=document.createElement("style");e.innerHTML="@keyframes nutFadeIn-2951e98d{from{opacity:0}to{opacity:1}}@keyframes nutFadeOut-2951e98d{from{opacity:1}to{opacity:0}}.nutFade-enter-active[data-v-2951e98d],.nutFade-leave-active[data-v-2951e98d],.nutFadeIn[data-v-2951e98d],.nutFadeOut[data-v-2951e98d]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(0.55,0.085,0.68,0.53)}.nutFade-enter-active[data-v-2951e98d],.nutFadeIn[data-v-2951e98d]{animation-name:nutFadeIn-2951e98d}.nutFade-leave-active[data-v-2951e98d],.nutFadeOut[data-v-2951e98d]{animation-name:nutFadeOut-2951e98d}@keyframes nutZoomIn-2951e98d{from{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes nutZoomOut-2951e98d{from{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}.nutZoom-enter-active[data-v-2951e98d],.nutZoom-leave-active[data-v-2951e98d],.nutZoomIn[data-v-2951e98d],.nutZoomOut[data-v-2951e98d]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(0.55,0.085,0.68,0.53)}.nutZoom-enter-active[data-v-2951e98d],.nutZoomIn[data-v-2951e98d]{animation-name:nutZoomIn-2951e98d}.nutZoom-leave-active[data-v-2951e98d],.nutZoomOut[data-v-2951e98d]{animation-name:nutZoomOut-2951e98d}@keyframes nutEaseIn-2951e98d{0%{opacity:0;transform:scale(.9)}100%{opacity:1;transform:scale(1)}}@keyframes nutEaseOut-2951e98d{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.9)}}.nutEase-enter-active[data-v-2951e98d],.nutEase-leave-active[data-v-2951e98d],.nutEaseIn[data-v-2951e98d],.nutEaseOut[data-v-2951e98d]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(0.55,0.085,0.68,0.53)}.nutEase-enter-active[data-v-2951e98d],.nutEaseIn[data-v-2951e98d]{animation-name:nutEaseIn-2951e98d}.nutEase-leave-active[data-v-2951e98d],.nutEaseOut[data-v-2951e98d]{animation-name:nutEaseOut-2951e98d}@keyframes nutDropIn-2951e98d{0%{opacity:0;transform:scaleY(.8)}100%{opacity:1;transform:scaleY(1)}}@keyframes nutDropOut-2951e98d{0%{opacity:1;transform:scaleY(1)}100%{opacity:0;transform:scaleY(.8)}}.nutDrop-enter-active[data-v-2951e98d],.nutDrop-leave-active[data-v-2951e98d],.nutDropIn[data-v-2951e98d],.nutDropOut[data-v-2951e98d]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(0.55,0.085,0.68,0.53)}.nutDrop-enter-active[data-v-2951e98d],.nutDropIn[data-v-2951e98d]{animation-name:nutDropIn-2951e98d}.nutDrop-leave-active[data-v-2951e98d],.nutDropOut[data-v-2951e98d]{animation-name:nutDropOut-2951e98d}@keyframes rotation-2951e98d{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}.nutRotate-enter-active[data-v-2951e98d],.nutRotate-leave-active[data-v-2951e98d],.nutRotateIn[data-v-2951e98d],.nutRotateOut[data-v-2951e98d]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(0.55,0.085,0.68,0.53)}.nutRotate-enter-active[data-v-2951e98d],.nutRotateIn[data-v-2951e98d]{animation-name:nutRotateIn}.nutRotate-leave-active[data-v-2951e98d],.nutRotateOut[data-v-2951e98d]{animation-name:nutRotateOut}.test-calendar-wrapper[data-v-2951e98d]{display:flex;width:100%;height:613px;overflow:hidden}",document.head.appendChild(e),System.register(["./mobile-legacy.bd408604.js","./vendor-legacy.466e82dd.js","./index-legacy.879cbd14.js"],(function(e){"use strict";var t,a,n,i,o,d,s,u,l,c;return{setters:[function(e){t=e.c},function(e){a=e.a,n=e.x,i=e.y,o=e.z,d=e.r,s=e.o,u=e.c,l=e.f,c=e.A},function(){}],execute:function(){const{createDemo:r}=t("calendar");var v=e("default",r({props:{},setup(){const e=a({isVisible:!1,date:"",dateWeek:"",isVisible1:!1,date1:["2019-12-23","2019-12-26"],date2:"2020-07-08",isVisible3:!1,date3:""});return{...n(e),openSwitch:t=>{e[`${t}`]=!0},closeSwitch:t=>{e[`${t}`]=!1},setChooseValue:t=>{e.date=t[3],e.dateWeek=t[4]},setChooseValue1:t=>{e.date1=[t[0][3],t[1][3]]},setChooseValue2:t=>{e.date2=t[3],console.log(e.date2)},setChooseValue3:t=>{e.date3=t[3]}}}}));const m=c();i("data-v-2951e98d");const f={class:"demo"},p=l("h2",null,"基础用法",-1),b=l("h2",null,"自定义日历-自动回填",-1),h=l("h2",null,"平铺展示",-1),y={class:"test-calendar-wrapper"};o();const C=m(((e,t,a,n,i,o)=>{const c=d("nut-cell"),r=d("nut-calendar");return s(),u("div",f,[p,l("div",null,[l(c,{"show-icon":!0,title:"选择单个日期",desc:e.date?`${e.date} ${e.dateWeek}`:"请选择",onClick:t[1]||(t[1]=t=>e.openSwitch("isVisible"))},null,8,["desc"]),l(r,{visible:e.isVisible,"onUpdate:visible":t[2]||(t[2]=t=>e.isVisible=t),"default-value":e.date,onClose:t[3]||(t[3]=t=>e.closeSwitch("isVisible")),onChoose:e.setChooseValue,"start-date":"2019-10-11","end-date":"2022-11-11"},null,8,["visible","default-value","onChoose"])]),l("div",null,[l(c,{"show-icon":!0,title:"选择日期区间",desc:e.date1?`${e.date1[0]}至${e.date1[1]}`:"请选择",onClick:t[4]||(t[4]=t=>e.openSwitch("isVisible1"))},null,8,["desc"]),l(r,{visible:e.isVisible1,"onUpdate:visible":t[5]||(t[5]=t=>e.isVisible1=t),"default-value":e.date1,type:"range","start-date":"2019-12-22","end-date":"2021-01-08",onClose:t[6]||(t[6]=t=>e.closeSwitch("isVisible1")),onChoose:e.setChooseValue1},null,8,["visible","default-value","onChoose"])]),b,l("div",null,[l(c,{"show-icon":!0,title:"选择日期",desc:e.date3?e.date3:"请选择",onClick:t[7]||(t[7]=t=>e.openSwitch("isVisible3"))},null,8,["desc"]),l(r,{visible:e.isVisible3,"onUpdate:visible":t[8]||(t[8]=t=>e.isVisible3=t),onClose:t[9]||(t[9]=t=>e.closeSwitch("isVisible3")),onChoose:e.setChooseValue3,"default-value":e.date3,"start-date":null,"end-date":null,"is-auto-back-fill":!0},null,8,["visible","onChoose","default-value"])]),h,l("div",y,[l(r,{poppable:!1,"default-value":e.date2,"is-auto-back-fill":!0,onChoose:e.setChooseValue2},null,8,["default-value","onChoose"])])])}));v.render=C,v.__scopeId="data-v-2951e98d"}}}))}();
