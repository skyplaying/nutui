import{c as e}from"./mobile.480ca10f.js";import{k as l,r as a,o as u,c as o,f as t}from"./vendor.92cebbd2.js";import"./index.3be2900d.js";const{createDemo:d}=e("textarea");var n=d({setup:()=>({value:l(""),value2:l(""),value3:l("")})});const m={class:"demo full"},r=t("h2",null,"基础用法",-1),s=t("h2",null,"显示字数统计",-1),v=t("h2",null,"高度自定义，拉伸",-1),i=t("h2",null,"只读",-1),c=t("h2",null,"禁用",-1);n.render=function(e,l,d,n,h,V){const p=a("nut-textarea");return u(),o("div",m,[r,t(p,{modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=l=>e.value=l)},null,8,["modelValue"]),s,t(p,{modelValue:e.value2,"onUpdate:modelValue":l[2]||(l[2]=l=>e.value2=l),"limit-show":"","max-length":"20"},null,8,["modelValue"]),v,t(p,{modelValue:e.value3,"onUpdate:modelValue":l[3]||(l[3]=l=>e.value3=l),rows:"10",autosize:""},null,8,["modelValue"]),i,t(p,{readonly:"","model-value":"textarea直读状态"}),c,t(p,{disabled:"","model-value":"textarea禁用状态","limit-show":"","max-length":"20"})])};export default n;
