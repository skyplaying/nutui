!function(){var a=document.createElement("style");a.innerHTML="@keyframes nutFadeIn-f4fab49e{from{opacity:0}to{opacity:1}}@keyframes nutFadeOut-f4fab49e{from{opacity:1}to{opacity:0}}.nutFade-enter-active[data-v-f4fab49e],.nutFade-leave-active[data-v-f4fab49e],.nutFadeIn[data-v-f4fab49e],.nutFadeOut[data-v-f4fab49e]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(0.55,0.085,0.68,0.53)}.nutFade-enter-active[data-v-f4fab49e],.nutFadeIn[data-v-f4fab49e]{animation-name:nutFadeIn-f4fab49e}.nutFade-leave-active[data-v-f4fab49e],.nutFadeOut[data-v-f4fab49e]{animation-name:nutFadeOut-f4fab49e}@keyframes nutZoomIn-f4fab49e{from{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes nutZoomOut-f4fab49e{from{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}.nutZoom-enter-active[data-v-f4fab49e],.nutZoom-leave-active[data-v-f4fab49e],.nutZoomIn[data-v-f4fab49e],.nutZoomOut[data-v-f4fab49e]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(0.55,0.085,0.68,0.53)}.nutZoom-enter-active[data-v-f4fab49e],.nutZoomIn[data-v-f4fab49e]{animation-name:nutZoomIn-f4fab49e}.nutZoom-leave-active[data-v-f4fab49e],.nutZoomOut[data-v-f4fab49e]{animation-name:nutZoomOut-f4fab49e}@keyframes nutEaseIn-f4fab49e{0%{opacity:0;transform:scale(.9)}100%{opacity:1;transform:scale(1)}}@keyframes nutEaseOut-f4fab49e{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.9)}}.nutEase-enter-active[data-v-f4fab49e],.nutEase-leave-active[data-v-f4fab49e],.nutEaseIn[data-v-f4fab49e],.nutEaseOut[data-v-f4fab49e]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(0.55,0.085,0.68,0.53)}.nutEase-enter-active[data-v-f4fab49e],.nutEaseIn[data-v-f4fab49e]{animation-name:nutEaseIn-f4fab49e}.nutEase-leave-active[data-v-f4fab49e],.nutEaseOut[data-v-f4fab49e]{animation-name:nutEaseOut-f4fab49e}@keyframes nutDropIn-f4fab49e{0%{opacity:0;transform:scaleY(.8)}100%{opacity:1;transform:scaleY(1)}}@keyframes nutDropOut-f4fab49e{0%{opacity:1;transform:scaleY(1)}100%{opacity:0;transform:scaleY(.8)}}.nutDrop-enter-active[data-v-f4fab49e],.nutDrop-leave-active[data-v-f4fab49e],.nutDropIn[data-v-f4fab49e],.nutDropOut[data-v-f4fab49e]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(0.55,0.085,0.68,0.53)}.nutDrop-enter-active[data-v-f4fab49e],.nutDropIn[data-v-f4fab49e]{animation-name:nutDropIn-f4fab49e}.nutDrop-leave-active[data-v-f4fab49e],.nutDropOut[data-v-f4fab49e]{animation-name:nutDropOut-f4fab49e}@keyframes rotation-f4fab49e{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}.nutRotate-enter-active[data-v-f4fab49e],.nutRotate-leave-active[data-v-f4fab49e],.nutRotateIn[data-v-f4fab49e],.nutRotateOut[data-v-f4fab49e]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(0.55,0.085,0.68,0.53)}.nutRotate-enter-active[data-v-f4fab49e],.nutRotateIn[data-v-f4fab49e]{animation-name:nutRotateIn}.nutRotate-leave-active[data-v-f4fab49e],.nutRotateOut[data-v-f4fab49e]{animation-name:nutRotateOut}#app .demo[data-v-f4fab49e]{padding:57px 0 0 0}.show-demo[data-v-f4fab49e]{background:#fff;padding:0 20px}h2[data-v-f4fab49e]{padding:0 20px}.btnBtn[data-v-f4fab49e]{text-align:center}.btnBtn .nut-button[data-v-f4fab49e]{margin-right:20px}.disabledClick[data-v-f4fab49e]{pointer-events:none!important;cursor:not-allowed!important;opacity:.6!important}",document.head.appendChild(a),System.register(["./mobile-legacy.bd408604.js","./vendor-legacy.466e82dd.js","./index-legacy.879cbd14.js"],(function(a){"use strict";var t,e,n,o,i,f,u,m,d,c,r,s,l;return{setters:[function(a){t=a.c},function(a){e=a.a,n=a.k,o=a.b,i=a.x,f=a.y,u=a.z,m=a.r,d=a.o,c=a.c,r=a.f,s=a.A,l=a.j},function(){}],execute:function(){const{createDemo:b}=t("countup");var v=a("default",b({props:{},setup(){const a=e({customNumber:618,bgImage:"https://img10.360buyimg.com/imagetools/jfs/t1/133024/3/2251/2646/5ee7549aE8dc02d7e/de6901b6c72db396.png",startFlag:!1,startFlag2:!1,machineNum:3,bgImage2:"https://img10.360buyimg.com/imagetools/jfs/t1/121466/20/6784/28830/5f06e7f2Edbb8998c/9bdd9e7b24dff9fe.png",prizeLevel:0}),t=n(null);return o((()=>{setInterval((()=>{a.customNumber=Math.floor(601*Math.random()+100)}),5e3)})),{...i(a),scrollAniEnd:t=>{console.log(t?"恭喜中奖！！！":"很遗憾！没有中奖"),setTimeout((()=>{a.startFlag=!1}),300)},startRole:()=>{a.prizeLevel=Math.floor(5*Math.random()+1),console.log(a.prizeLevel,"中奖"),a.startFlag=!0,setTimeout((()=>{t.value.machineLuck()}),500)},startRole2:()=>{a.prizeLevel=-1,console.log(a.prizeLevel,"不中奖"),a.startFlag=!0,setTimeout((()=>{t.value.machineLuck()}),500)},countupMachine:t}}}));const p=s();f("data-v-f4fab49e");const g={class:"demo"},h=r("h2",null,"基础用法",-1),y={class:"show-demo"},I=r("h2",null,"数字滚动",-1),k={class:"show-demo"},E=r("h2",null,"自定义滚动图片展示",-1),F={class:"show-demo"},O=r("h2",null,"抽奖（模拟滚动抽奖）",-1),z={class:"show-demo"},R={class:"btnBtn"},D=l("抽奖"),Z=l("不中奖");u();const w=p(((a,t,e,n,o,i)=>{const f=m("nut-countup"),u=m("nut-button");return d(),c("div",g,[h,r("div",y,[r(f,{"init-num":0,"end-num":200}),r(f,{"init-num":150,"end-num":0,speed:6.18,"to-fixed":2},null,8,["init-num","end-num","speed"]),r(f,{"init-num":500,"end-num":0,speed:17,"to-fixed":2},null,8,["init-num","end-num"])]),I,r("div",k,[r(f,{scrolling:!0,"init-num":17.618,during:600},null,8,["init-num"])]),E,r("div",F,[r(f,{"custom-change-num":a.customNumber,"custom-bg-img":a.bgImage,"custom-spac-num":11,"num-width":33,"num-height":47,during:8e3},null,8,["custom-change-num","custom-bg-img"])]),O,r("div",z,[r(f,{ref:"countupMachine",type:"machine","machine-num":a.machineNum,"machine-prize-num":5,"machine-prize-level":a.prizeLevel,"custom-bg-img":a.bgImage2,"num-width":100,"num-height":100,during:3e3,onScrollEnd:a.scrollAniEnd},null,8,["machine-num","machine-prize-level","custom-bg-img","onScrollEnd"]),r("div",R,[r(u,{type:"danger",onClick:a.startRole,disabled:a.startFlag},{default:p((()=>[D])),_:1},8,["onClick","disabled"]),r(u,{type:"danger",onClick:a.startRole2,disabled:a.startFlag},{default:p((()=>[Z])),_:1},8,["onClick","disabled"])])])])}));v.render=w,v.__scopeId="data-v-f4fab49e"}}}))}();
