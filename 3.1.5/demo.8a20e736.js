var t=Object.defineProperty,e=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,l=(e,i,a)=>i in e?t(e,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[i]=a;"undefined"!=typeof require&&require;import{c as o}from"./mobile.cab8a840.js";import{a as c,A as n,r,o as u,e as s,j as d,k as v,l as p,t as f,g as m}from"./vendor.6bc94963.js";import"./index.d8e175d8.js";const{createDemo:b}=o("collapse");var _=b({setup(t,o){const r=c({active1:[1,"2"],active2:1,active3:1,active4:1,active5:1,title1:"标题1",title2:"标题2",title3:"标题3",subTitle:"副标题"});return((t,o)=>{for(var c in o||(o={}))i.call(o,c)&&l(t,c,o[c]);if(e)for(var c of e(o))a.call(o,c)&&l(t,c,o[c]);return t})({change:t=>{console.log(`点击了name是${t}的面板`)}},n(r))}});const w={class:"demo full"},y=m("h2",null,"基本用法",-1),h=p(" NutUI是一套拥有京东风格的轻量级的 Vue 组件库 "),j=p(" 在产品的功能、体验、易用性和灵活性等各个方面做了全面的升级！ "),T=m("h2",null,"无icon样式",-1),U=p(" 引入Vue3新特性 Composition API、Teleport、Emits 等 "),g=p(" 全面使用 TypeScipt "),O=m("h2",null,"手风琴",-1),I=p(" 基于京东设计语言体系，构建场景 "),P=p(" 提高界⾯的模块化通用程度 "),x=p(" 采用组合式 API Composition 语法重构，结构清晰，功能模块化 "),A=m("h2",null,"自定义折叠图标",-1),q=p(" 文本测试 "),C=p(" NUTUI3.0重新思考其内在的一致性和可组合性 "),E=p(" 提⾼产研输出对接的效率，降低输出工作量 "),N=m("h2",null,"自定义标题图标",-1),S=p(" 组件 emits 事件单独提取，增强代码可读性 "),V=p(" 使用 Teleport 新特性重构挂载类组件 ");_.render=function(t,e,i,a,l,o){const c=r("nut-collapse-item"),n=r("nut-collapse");return u(),s("div",w,[y,d(n,{active:t.active1,"onUpdate:active":e[0]||(e[0]=e=>t.active1=e),icon:"down-arrow"},{default:v((()=>[d(c,{name:1},{mTitle:v((()=>[p(f(t.title1),1)])),default:v((()=>[h])),_:1}),d(c,{title:t.title2,name:2},{default:v((()=>[j])),_:1},8,["title"]),d(c,{title:t.title3,name:3,disabled:""},null,8,["title"])])),_:1},8,["active"]),T,d(n,{active:t.active4,"onUpdate:active":e[1]||(e[1]=e=>t.active4=e),accordion:!0},{default:v((()=>[d(c,{title:t.title1,name:1},{default:v((()=>[U])),_:1},8,["title"]),d(c,{title:t.title2,name:2},{default:v((()=>[g])),_:1},8,["title"])])),_:1},8,["active"]),O,d(n,{active:t.active2,"onUpdate:active":e[2]||(e[2]=e=>t.active2=e),accordion:!0,icon:"down-arrow"},{default:v((()=>[d(c,{title:t.title1,name:1},{default:v((()=>[I])),_:1},8,["title"]),d(c,{title:t.title2,name:2,"sub-title":t.subTitle},{default:v((()=>[P])),_:1},8,["title","sub-title"]),d(c,{title:t.title3,name:3},{default:v((()=>[x])),_:1},8,["title"])])),_:1},8,["active"]),A,d(n,{active:t.active3,"onUpdate:active":e[3]||(e[3]=e=>t.active3=e),accordion:!0,icon:"arrow-right2",rotate:"90"},{default:v((()=>[d(c,{title:t.title1,name:1},{sTitle:v((()=>[q])),default:v((()=>[C])),_:1},8,["title"]),d(c,{title:t.title2,name:2,"sub-title":"文本内容"},{default:v((()=>[E])),_:1},8,["title"])])),_:1},8,["active"]),N,d(n,{active:t.active5,"onUpdate:active":e[4]||(e[4]=e=>t.active5=e),"title-icon":"issue","title-icon-color":"red","title-icon-size":"20px","title-icon-position":"left",icon:"down-arrow",accordion:!0},{default:v((()=>[d(c,{title:t.title1,name:1},{default:v((()=>[S])),_:1},8,["title"]),d(c,{title:t.title2,name:2,"sub-title":"文本内容"},{default:v((()=>[V])),_:1},8,["title"])])),_:1},8,["active"])])};export{_ as default};
