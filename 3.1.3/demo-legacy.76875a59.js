!function(){var t=document.createElement("style");t.innerHTML="@keyframes nutFadeIn-19dc20d8{0%{opacity:0}to{opacity:1}}@keyframes nutFadeOut-19dc20d8{0%{opacity:1}to{opacity:0}}.nutFade-enter-active[data-v-19dc20d8],.nutFadeIn[data-v-19dc20d8],.nutFade-leave-active[data-v-19dc20d8],.nutFadeOut[data-v-19dc20d8]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutFade-enter-active[data-v-19dc20d8],.nutFadeIn[data-v-19dc20d8]{animation-name:nutFadeIn-19dc20d8}.nutFade-leave-active[data-v-19dc20d8],.nutFadeOut[data-v-19dc20d8]{animation-name:nutFadeOut-19dc20d8}@keyframes nutZoomIn-19dc20d8{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes nutZoomOut-19dc20d8{0%{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}.nutZoom-enter-active[data-v-19dc20d8],.nutZoomIn[data-v-19dc20d8],.nutZoom-leave-active[data-v-19dc20d8],.nutZoomOut[data-v-19dc20d8]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutZoom-enter-active[data-v-19dc20d8],.nutZoomIn[data-v-19dc20d8]{animation-name:nutZoomIn-19dc20d8}.nutZoom-leave-active[data-v-19dc20d8],.nutZoomOut[data-v-19dc20d8]{animation-name:nutZoomOut-19dc20d8}@keyframes nutEaseIn-19dc20d8{0%{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}@keyframes nutEaseOut-19dc20d8{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.9)}}.nutEase-enter-active[data-v-19dc20d8],.nutEaseIn[data-v-19dc20d8],.nutEase-leave-active[data-v-19dc20d8],.nutEaseOut[data-v-19dc20d8]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutEase-enter-active[data-v-19dc20d8],.nutEaseIn[data-v-19dc20d8]{animation-name:nutEaseIn-19dc20d8}.nutEase-leave-active[data-v-19dc20d8],.nutEaseOut[data-v-19dc20d8]{animation-name:nutEaseOut-19dc20d8}@keyframes nutDropIn-19dc20d8{0%{opacity:0;transform:scaleY(.8)}to{opacity:1;transform:scaleY(1)}}@keyframes nutDropOut-19dc20d8{0%{opacity:1;transform:scaleY(1)}to{opacity:0;transform:scaleY(.8)}}.nutDrop-enter-active[data-v-19dc20d8],.nutDropIn[data-v-19dc20d8],.nutDrop-leave-active[data-v-19dc20d8],.nutDropOut[data-v-19dc20d8]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutDrop-enter-active[data-v-19dc20d8],.nutDropIn[data-v-19dc20d8]{animation-name:nutDropIn-19dc20d8}.nutDrop-leave-active[data-v-19dc20d8],.nutDropOut[data-v-19dc20d8]{animation-name:nutDropOut-19dc20d8}@keyframes rotation-19dc20d8{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(360deg)}}.nutRotate-enter-active[data-v-19dc20d8],.nutRotateIn[data-v-19dc20d8],.nutRotate-leave-active[data-v-19dc20d8],.nutRotateOut[data-v-19dc20d8]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutRotate-enter-active[data-v-19dc20d8],.nutRotateIn[data-v-19dc20d8]{animation-name:nutRotateIn}.nutRotate-leave-active[data-v-19dc20d8],.nutRotateOut[data-v-19dc20d8]{animation-name:nutRotateOut}.demo-button-row[data-v-19dc20d8]{margin-bottom:20px}.demo-button-row2[data-v-19dc20d8]{margin-bottom:10px;display:flex;align-items:center;flex-wrap:wrap}.nut-button[data-v-19dc20d8]{margin-right:15px}.nut-button[data-v-19dc20d8]:last-child{margin-bottom:0;margin-right:0}\n",document.head.appendChild(t),System.register(["./mobile-legacy.686021e2.js","./vendor-legacy.c1dd93a9.js","./index-legacy.0fc3d9a1.js"],(function(t){"use strict";var a,e,d,n,o,i,c,u,r,l,m;return{setters:[function(t){a=t.c},function(t){e=t.m,d=t.B,n=t.C,o=t.r,i=t.o,c=t.e,u=t.g,r=t.j,l=t.k,m=t.l},function(){}],execute:function(){const{createDemo:s}=a("button");var v=t("default",s({props:{},setup(t){let a=e(!1);return{isLoading:a,changeLoading:()=>{a.value=!0,setTimeout((()=>{a.value=!1}),3e3)}}}}));d("data-v-19dc20d8");const p={class:"demo"},f=u("h2",null,"按钮类型",-1),y={class:"demo-button-row"},b=m("主要按钮"),g=m("信息按钮"),h=m("默认按钮"),_={class:"demo-button-row2"},I=m("危险按钮"),O=m("警告按钮"),w=m("成功按钮"),k=u("h2",null,"朴素按钮",-1),D={class:"demo-button-row2"},E=m("朴素按钮"),F=m("朴素按钮"),Z=u("h2",null,"禁用状态",-1),R={class:"demo-button-row2"},x=m("禁用状态"),z=m("禁用状态"),C=m("禁用状态"),L=u("h2",null,"按钮形状",-1),j={class:"demo-button-row2"},Y=m("方形按钮"),q=m("圆形按钮"),T=u("h2",null,"加载状态",-1),B={class:"demo-button-row2"},H=m("加载中..."),M=m("Click me!"),S=u("h2",null,"图标按钮",-1),A={class:"demo-button-row2"},G=m("收藏"),J=u("h2",null,"按钮尺寸",-1),K={class:"demo-button-row2"},N=m("大号按钮"),P=m("普通按钮"),Q=m("小型按钮"),U=u("h2",null,"块级元素",-1),V={class:"demo-button-row2"},W=m("块级元素"),X=u("h2",null,"自定义颜色",-1),$={class:"demo-button-row2"},tt=m("单色按钮"),at=m("单色按钮"),et=m(" 渐变按钮 ");n(),v.render=function(t,a,e,d,n,m){const s=o("nut-button");return i(),c("div",p,[f,u("div",y,[r(s,{type:"primary"},{default:l((()=>[b])),_:1}),r(s,{type:"info"},{default:l((()=>[g])),_:1}),r(s,{type:"default"},{default:l((()=>[h])),_:1})]),u("div",_,[r(s,{type:"danger"},{default:l((()=>[I])),_:1}),r(s,{type:"warning"},{default:l((()=>[O])),_:1}),r(s,{type:"success"},{default:l((()=>[w])),_:1})]),k,u("div",D,[r(s,{plain:"",type:"primary"},{default:l((()=>[E])),_:1}),r(s,{plain:"",type:"info"},{default:l((()=>[F])),_:1})]),Z,u("div",R,[r(s,{disabled:"",type:"primary"},{default:l((()=>[x])),_:1}),r(s,{plain:"",disabled:"",type:"info"},{default:l((()=>[z])),_:1}),r(s,{plain:"",disabled:"",type:"primary"},{default:l((()=>[C])),_:1})]),L,u("div",j,[r(s,{shape:"square",type:"primary"},{default:l((()=>[Y])),_:1}),r(s,{type:"info"},{default:l((()=>[q])),_:1})]),T,u("div",B,[r(s,{loading:"",type:"info"}),r(s,{loading:"",type:"warning"},{default:l((()=>[H])),_:1}),r(s,{loading:t.isLoading,type:"success",onClick:t.changeLoading},{default:l((()=>[M])),_:1},8,["loading","onClick"])]),S,u("div",A,[r(s,{shape:"square",plain:"",type:"primary",icon:"star-fill"}),r(s,{shape:"square",type:"primary",icon:"star"},{default:l((()=>[G])),_:1})]),J,u("div",K,[r(s,{size:"large",type:"primary",style:{"margin-bottom":"10px"}},{default:l((()=>[N])),_:1}),r(s,{type:"primary"},{default:l((()=>[P])),_:1}),r(s,{size:"small",type:"primary"},{default:l((()=>[Q])),_:1})]),U,u("div",V,[r(s,{block:"",type:"primary"},{default:l((()=>[W])),_:1})]),X,u("div",$,[r(s,{color:"#7232dd"},{default:l((()=>[tt])),_:1}),r(s,{color:"#7232dd",plain:""},{default:l((()=>[at])),_:1}),r(s,{color:"linear-gradient(to right, #ff6034, #ee0a24)"},{default:l((()=>[et])),_:1})])])},v.__scopeId="data-v-19dc20d8"}}}))}();
