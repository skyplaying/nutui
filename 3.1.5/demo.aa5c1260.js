import{c as a}from"./mobile.cab8a840.js";import{m as e,B as t,C as l,r as d,o,e as i,g as s,j as n,k as r,l as u}from"./vendor.6bc94963.js";import"./index.d8e175d8.js";const{createDemo:p}=a("button");var c=p({props:{},setup(a){let t=e(!1);return{isLoading:t,changeLoading:()=>{t.value=!0,setTimeout((()=>{t.value=!1}),3e3)}}}});t("data-v-19dc20d8");const f={class:"demo"},m=s("h2",null,"按钮类型",-1),y={class:"demo-button-row"},_=u("主要按钮"),b=u("信息按钮"),g=u("默认按钮"),v={class:"demo-button-row2"},h=u("危险按钮"),w=u("警告按钮"),k=u("成功按钮"),j=s("h2",null,"朴素按钮",-1),C={class:"demo-button-row2"},L=u("朴素按钮"),q=u("朴素按钮"),x=s("h2",null,"禁用状态",-1),z={class:"demo-button-row2"},B=u("禁用状态"),D=u("禁用状态"),I=u("禁用状态"),T=s("h2",null,"按钮形状",-1),A={class:"demo-button-row2"},E=u("方形按钮"),F=u("圆形按钮"),G=s("h2",null,"加载状态",-1),H={class:"demo-button-row2"},J=u("加载中..."),K=u("Click me!"),M=s("h2",null,"图标按钮",-1),N={class:"demo-button-row2"},O=u("收藏"),P=s("h2",null,"按钮尺寸",-1),Q={class:"demo-button-row2"},R=u("大号按钮"),S=u("普通按钮"),U=u("小型按钮"),V=s("h2",null,"块级元素",-1),W={class:"demo-button-row2"},X=u("块级元素"),Y=s("h2",null,"自定义颜色",-1),Z={class:"demo-button-row2"},$=u("单色按钮"),aa=u("单色按钮"),ea=u(" 渐变按钮 ");l(),c.render=function(a,e,t,l,u,p){const c=d("nut-button");return o(),i("div",f,[m,s("div",y,[n(c,{type:"primary"},{default:r((()=>[_])),_:1}),n(c,{type:"info"},{default:r((()=>[b])),_:1}),n(c,{type:"default"},{default:r((()=>[g])),_:1})]),s("div",v,[n(c,{type:"danger"},{default:r((()=>[h])),_:1}),n(c,{type:"warning"},{default:r((()=>[w])),_:1}),n(c,{type:"success"},{default:r((()=>[k])),_:1})]),j,s("div",C,[n(c,{plain:"",type:"primary"},{default:r((()=>[L])),_:1}),n(c,{plain:"",type:"info"},{default:r((()=>[q])),_:1})]),x,s("div",z,[n(c,{disabled:"",type:"primary"},{default:r((()=>[B])),_:1}),n(c,{plain:"",disabled:"",type:"info"},{default:r((()=>[D])),_:1}),n(c,{plain:"",disabled:"",type:"primary"},{default:r((()=>[I])),_:1})]),T,s("div",A,[n(c,{shape:"square",type:"primary"},{default:r((()=>[E])),_:1}),n(c,{type:"info"},{default:r((()=>[F])),_:1})]),G,s("div",H,[n(c,{loading:"",type:"info"}),n(c,{loading:"",type:"warning"},{default:r((()=>[J])),_:1}),n(c,{loading:a.isLoading,type:"success",onClick:a.changeLoading},{default:r((()=>[K])),_:1},8,["loading","onClick"])]),M,s("div",N,[n(c,{shape:"square",plain:"",type:"primary",icon:"star-fill"}),n(c,{shape:"square",type:"primary",icon:"star"},{default:r((()=>[O])),_:1})]),P,s("div",Q,[n(c,{size:"large",type:"primary",style:{"margin-bottom":"10px"}},{default:r((()=>[R])),_:1}),n(c,{type:"primary"},{default:r((()=>[S])),_:1}),n(c,{size:"small",type:"primary"},{default:r((()=>[U])),_:1})]),V,s("div",W,[n(c,{block:"",type:"primary"},{default:r((()=>[X])),_:1})]),Y,s("div",Z,[n(c,{color:"#7232dd"},{default:r((()=>[$])),_:1}),n(c,{color:"#7232dd",plain:""},{default:r((()=>[aa])),_:1}),n(c,{color:"linear-gradient(to right, #ff6034, #ee0a24)"},{default:r((()=>[ea])),_:1})])])},c.__scopeId="data-v-19dc20d8";export{c as default};
