import{c as m}from"./mobile.js";import{_ as v}from"./index.js";import{a as A,m as d,r as _,e as g,g as o,j as t,k as c,B as f,C as F,o as k,J as B,l as a}from"./vendor.js";const{createDemo:C}=m("circleprogress"),E=C({props:{},setup(){const e=A({radius:50,strokeOutWidth:10,backColor:"#d9d9d9",progressColor:"red"}),s=d(50),n=d(10),i=d(!0);return{progressOption:e,isAuto:i,setAddVal:()=>{n.value=10,!(s.value>=100)&&(s.value+=10)},setReduceVal:()=>{if(s.value-10<=0){n.value=0,s.value=0;return}s.value-=10},percent:s}}}),u=e=>(f("data-v-57d9cb92"),e=e(),F(),e),V={class:"demo full"},b=u(()=>o("h2",null,"\u57FA\u7840\u7528\u6CD5",-1)),D={class:"demo__piece"},y=u(()=>o("h2",null,"\u73AF\u5F62\u8FDB\u5EA6\u6761\u81EA\u5B9A\u4E49\u6837\u5F0F",-1)),I={class:"demo__piece"},$=u(()=>o("h2",null,"\u73AF\u5F62\u8FDB\u5EA6\u6761\u81EA\u5B9A\u4E49\u5185\u5BB9",-1)),j={class:"demo__piece"},w=a("\u81EA\u5B9A\u4E49"),O=u(()=>o("h2",null,"\u52A8\u6001\u6539\u53D8\u73AF\u5F62\u8FDB\u5EA6\u6761\u7684\u8FDB\u5EA6",-1)),S={class:"demo__piece"},N={class:"demo__btn"},R=a("\u51CF\u5C11"),W=a("\u589E\u52A0");function J(e,s,n,i,l,h){const r=_("nut-circleprogress"),p=_("nut-button");return k(),g("div",V,[b,o("div",D,[t(r,{progress:10})]),y,o("div",I,[t(r,{progress:50,"progress-option":e.progressOption},null,8,["progress-option"])]),$,o("div",j,[t(r,{progress:50,"is-auto":e.isAuto},{default:c(()=>[B(e.$slots,"default",{},()=>[w],!0)]),_:3},8,["is-auto"])]),O,o("div",S,[t(r,{progress:e.percent,"progress-option":e.progressOption,"stroke-inner-width":e.strokeInnerWidth},null,8,["progress","progress-option","stroke-inner-width"])]),o("div",N,[t(p,{type:"primary",onClick:e.setReduceVal},{default:c(()=>[R]),_:1},8,["onClick"]),t(p,{type:"primary",onClick:e.setAddVal},{default:c(()=>[W]),_:1},8,["onClick"])])])}var G=v(E,[["render",J],["__scopeId","data-v-57d9cb92"]]);export{G as default};
