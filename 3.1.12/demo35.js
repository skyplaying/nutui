var c=Object.defineProperty,h=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var p=(e,n,o)=>n in e?c(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,i=(e,n)=>{for(var o in n||(n={}))V.call(n,o)&&p(e,o,n[o]);if(g)for(var o of g(n))P.call(n,o)&&p(e,o,n[o]);return e},m=(e,n)=>h(e,C(n));import{c as f}from"./mobile.js";import{_ as v}from"./index.js";import{a as A,B,r as d,e as _,j as t,k as r,g as s,o as E,l as j,t as z}from"./vendor.js";const{createDemo:F}=f("pagination"),U=F({setup(){const e=A({currentPage:1,currentPage1:1,currentPage2:1,currentPage3:1}),n=o=>{console.log(o)};return m(i({},B(e)),{pageChange:n})}}),$={class:"demo"},k=s("h2",null,"\u57FA\u7840\u7528\u6CD5",-1),w=s("h2",null,"\u7B80\u5355\u6A21\u5F0F",-1),D=s("h2",null,"\u663E\u793A\u7701\u7565\u53F7",-1),N=s("h2",null,"\u81EA\u5B9A\u4E49\u6309\u94AE",-1);function b(e,n,o,y,R,S){const u=d("nut-pagination"),l=d("nut-icon");return E(),_("div",$,[k,t(u,{modelValue:e.currentPage,"onUpdate:modelValue":n[0]||(n[0]=a=>e.currentPage=a),"total-items":25,"items-per-page":5,onChange:e.pageChange},null,8,["modelValue","onChange"]),w,t(u,{modelValue:e.currentPage1,"onUpdate:modelValue":n[1]||(n[1]=a=>e.currentPage1=a),"page-count":12,mode:"simple",onChange:e.pageChange},null,8,["modelValue","onChange"]),D,t(u,{modelValue:e.currentPage2,"onUpdate:modelValue":n[2]||(n[2]=a=>e.currentPage2=a),"total-items":125,"show-page-size":3,"force-ellipses":"",onChange:e.pageChange},null,8,["modelValue","onChange"]),N,t(u,{modelValue:e.currentPage3,"onUpdate:modelValue":n[3]||(n[3]=a=>e.currentPage3=a),"total-items":500,"show-page-size":5,onChange:e.pageChange},{"prev-text":r(()=>[t(l,{name:"left",size:"10px"})]),"next-text":r(()=>[t(l,{name:"right",size:"10px"})]),page:r(({item:a})=>[j(z(a.number==3?"hot":a.text),1)]),_:1},8,["modelValue","onChange"])])}var H=v(U,[["render",b]]);export{H as default};
