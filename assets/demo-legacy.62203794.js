!function(){var t=document.createElement("style");t.innerHTML="@keyframes nutFadeIn-3325d30e{from{opacity:0}to{opacity:1}}@keyframes nutFadeOut-3325d30e{from{opacity:1}to{opacity:0}}.nutFade-enter-active[data-v-3325d30e],.nutFade-leave-active[data-v-3325d30e],.nutFadeIn[data-v-3325d30e],.nutFadeOut[data-v-3325d30e]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutFade-enter-active[data-v-3325d30e],.nutFadeIn[data-v-3325d30e]{animation-name:nutFadeIn-3325d30e}.nutFade-leave-active[data-v-3325d30e],.nutFadeOut[data-v-3325d30e]{animation-name:nutFadeOut-3325d30e}@keyframes nutZoomIn-3325d30e{from{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes nutZoomOut-3325d30e{from{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}.nutZoom-enter-active[data-v-3325d30e],.nutZoom-leave-active[data-v-3325d30e],.nutZoomIn[data-v-3325d30e],.nutZoomOut[data-v-3325d30e]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutZoom-enter-active[data-v-3325d30e],.nutZoomIn[data-v-3325d30e]{animation-name:nutZoomIn-3325d30e}.nutZoom-leave-active[data-v-3325d30e],.nutZoomOut[data-v-3325d30e]{animation-name:nutZoomOut-3325d30e}@keyframes nutEaseIn-3325d30e{0%{opacity:0;transform:scale(.9)}100%{opacity:1;transform:scale(1)}}@keyframes nutEaseOut-3325d30e{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.9)}}.nutEase-enter-active[data-v-3325d30e],.nutEase-leave-active[data-v-3325d30e],.nutEaseIn[data-v-3325d30e],.nutEaseOut[data-v-3325d30e]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutEase-enter-active[data-v-3325d30e],.nutEaseIn[data-v-3325d30e]{animation-name:nutEaseIn-3325d30e}.nutEase-leave-active[data-v-3325d30e],.nutEaseOut[data-v-3325d30e]{animation-name:nutEaseOut-3325d30e}@keyframes nutDropIn-3325d30e{0%{opacity:0;transform:scaleY(.8)}100%{opacity:1;transform:scaleY(1)}}@keyframes nutDropOut-3325d30e{0%{opacity:1;transform:scaleY(1)}100%{opacity:0;transform:scaleY(.8)}}.nutDrop-enter-active[data-v-3325d30e],.nutDrop-leave-active[data-v-3325d30e],.nutDropIn[data-v-3325d30e],.nutDropOut[data-v-3325d30e]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutDrop-enter-active[data-v-3325d30e],.nutDropIn[data-v-3325d30e]{animation-name:nutDropIn-3325d30e}.nutDrop-leave-active[data-v-3325d30e],.nutDropOut[data-v-3325d30e]{animation-name:nutDropOut-3325d30e}@keyframes rotation-3325d30e{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}.nutRotate-enter-active[data-v-3325d30e],.nutRotate-leave-active[data-v-3325d30e],.nutRotateIn[data-v-3325d30e],.nutRotateOut[data-v-3325d30e]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutRotate-enter-active[data-v-3325d30e],.nutRotateIn[data-v-3325d30e]{animation-name:nutRotateIn}.nutRotate-leave-active[data-v-3325d30e],.nutRotateOut[data-v-3325d30e]{animation-name:nutRotateOut}.wrapper[data-v-3325d30e]{display:flex;height:100%;align-items:center;justify-content:center}.wrapper .content[data-v-3325d30e]{display:flex;width:150px;height:150px;background:#fff;border-radius:8px;align-items:center;justify-content:center;color:red}",document.head.appendChild(t),System.register(["./mobile-legacy.8ee5ad31.js","./vendor-legacy.de681981.js","./index-legacy.3376106d.js"],(function(t){"use strict";var a,e,n,o,i,d,u,r,c,s;return{setters:[function(t){a=t.c},function(t){e=t.a,n=t.z,o=t.A,i=t.r,d=t.o,u=t.c,r=t.f,c=t.y,s=t.j},function(){}],execute:function(){const{createDemo:m}=a("overlay");var v=t("default",m({props:{},setup:()=>({state:e({show:!1,show2:!1})})}));const l=c();n("data-v-3325d30e");const f={class:"demo"},p=r("h2",null,"基础用法",-1),y=s("显示遮罩层"),b=r("h2",null,"嵌套内容",-1),h=s("嵌套内容"),I=r("div",{class:"wrapper"},[r("div",{class:"content"},"这里是正文")],-1);o();const O=l(((t,a,e,n,o,c)=>{const s=i("nut-button"),m=i("nut-overlay"),v=i("nut-cell");return d(),u("div",f,[p,r(v,null,{default:l((()=>[r(s,{type:"primary",onClick:a[1]||(a[1]=a=>t.state.show=!0)},{default:l((()=>[y])),_:1}),r(m,{visible:t.state.show,"onUpdate:visible":a[2]||(a[2]=a=>t.state.show=a),"z-index":2e3},null,8,["visible"])])),_:1}),b,r(v,null,{default:l((()=>[r(s,{type:"success",onClick:a[3]||(a[3]=a=>t.state.show2=!0)},{default:l((()=>[h])),_:1}),r(m,{visible:t.state.show2,"onUpdate:visible":a[4]||(a[4]=a=>t.state.show2=a),"z-index":2e3},{default:l((()=>[I])),_:1},8,["visible"])])),_:1})])}));v.render=O,v.__scopeId="data-v-3325d30e"}}}))}();
