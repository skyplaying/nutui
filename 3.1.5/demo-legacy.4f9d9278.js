System.register(["./mobile-legacy.5fb40f89.js","./vendor-legacy.d8a4b3f3.js","./index-legacy.7fac09e4.js"],(function(t){"use strict";var n,o,i,s,e,l,a;return{setters:[function(t){n=t.c,o=t.T},function(t){i=t.r,s=t.o,e=t.e,l=t.j,a=t.g},function(){}],execute:function(){const{createDemo:c}=n("toast"),r=t("default",c({setup:()=>({textToast:t=>{o.text(t)},successToast:t=>{o.success(t)},errorToast:t=>{o.fail(t)},warningToast:t=>{o.warn(t)},loadingToast:t=>{o.loading(t)},NoToast:t=>{o.text(t,{duration:0})},NoLoading:t=>{o.loading(t,{cover:!0})}})})),u={class:"demo"},T=a("h2",null,"基本用法",-1),d=a("h2",null,"Toast不消失",-1),g=a("h2",null,"Loading带透明遮罩",-1);r.render=function(t,n,o,a,c,r){const k=i("nut-cell");return s(),e("div",u,[T,l(k,{title:"Text 文字提示","is-link":"",onClick:n[0]||(n[0]=n=>t.textToast("网络失败，请稍后再试~"))}),l(k,{title:"Success 成功提示","is-link":"",onClick:n[1]||(n[1]=n=>t.successToast("成功提示"))}),l(k,{title:"Error 失败提示","is-link":"",onClick:n[2]||(n[2]=n=>t.errorToast("失败提示"))}),l(k,{title:"Warning 警告提示","is-link":"",onClick:n[3]||(n[3]=n=>t.warningToast("警告提示"))}),l(k,{title:"Loading 加载提示","is-link":"",onClick:n[4]||(n[4]=n=>t.loadingToast("加载中"))}),d,l(k,{title:"Toast 文字提示不消失","is-link":"",onClick:n[5]||(n[5]=n=>t.NoToast("Toast不消失~"))}),g,l(k,{title:"带文案+带透明遮罩+自动消失","is-link":"",onClick:n[6]||(n[6]=n=>t.NoLoading("加载中~"))})])}}}}));
