var C=Object.defineProperty,h=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var v=(e,l,u)=>l in e?C(e,l,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[l]=u,g=(e,l)=>{for(var u in l||(l={}))f.call(l,u)&&v(e,u,l[u]);if(r)for(var u of r(l))_.call(l,u)&&v(e,u,l[u]);return e},i=(e,l)=>h(e,V(l));import{c as F,T as c}from"./mobile.4f9c1c24.js";import{_ as B}from"./index.25a44c2e.js";import{a as E,A as b,r as p,e as A,j as a,k as n,B as U,C as D,g as s,o as j,t as I}from"./vendor.36d75c4a.js";const{createDemo:S}=F("range"),$=S({props:{},setup(){const e=E({value1:40,value2:[20,80],value3:0,value4:20,value5:30,value6:40,value7:50,value8:40,value9:60}),l=u=>c.text("\u5F53\u524D\u503C\uFF1A"+u);return i(g({},b(e)),{onChange:l})}}),m=e=>(U("data-v-48a48510"),e=e(),D(),e),k={class:"demo"},y=m(()=>s("h2",null,"\u57FA\u7840\u7528\u6CD5",-1)),w=m(()=>s("h2",null,"\u53CC\u6ED1\u5757",-1)),N=m(()=>s("h2",null,"\u6307\u5B9A\u8303\u56F4",-1)),T=m(()=>s("h2",null,"\u8BBE\u7F6E\u6B65\u957F",-1)),R=m(()=>s("h2",null,"\u9690\u85CF\u8303\u56F4",-1)),q=m(()=>s("h2",null,"\u9690\u85CF\u6807\u7B7E",-1)),z=m(()=>s("h2",null,"\u7981\u7528",-1)),G=m(()=>s("h2",null,"\u81EA\u5B9A\u4E49\u6837\u5F0F",-1)),H=m(()=>s("h2",null,"\u81EA\u5B9A\u4E49\u6309\u94AE",-1)),J={class:"custom-button"};function K(e,l,u,L,M,O){const d=p("nut-range"),t=p("nut-cell");return j(),A("div",k,[y,a(t,{class:"cell"},{default:n(()=>[a(d,{modelValue:e.value1,"onUpdate:modelValue":l[0]||(l[0]=o=>e.value1=o),onChange:e.onChange},null,8,["modelValue","onChange"])]),_:1}),w,a(t,{class:"cell"},{default:n(()=>[a(d,{range:"",modelValue:e.value2,"onUpdate:modelValue":l[1]||(l[1]=o=>e.value2=o),onChange:e.onChange},null,8,["modelValue","onChange"])]),_:1}),N,a(t,{class:"cell"},{default:n(()=>[a(d,{modelValue:e.value3,"onUpdate:modelValue":l[2]||(l[2]=o=>e.value3=o),max:10,min:-10,onChange:e.onChange},null,8,["modelValue","onChange"])]),_:1}),T,a(t,{class:"cell"},{default:n(()=>[a(d,{modelValue:e.value4,"onUpdate:modelValue":l[3]||(l[3]=o=>e.value4=o),step:5,onChange:e.onChange},null,8,["modelValue","onChange"])]),_:1}),R,a(t,{class:"cell"},{default:n(()=>[a(d,{"hidden-range":"",modelValue:e.value5,"onUpdate:modelValue":l[4]||(l[4]=o=>e.value5=o),onChange:e.onChange},null,8,["modelValue","onChange"])]),_:1}),q,a(t,{class:"cell"},{default:n(()=>[a(d,{"hidden-tag":"",modelValue:e.value6,"onUpdate:modelValue":l[5]||(l[5]=o=>e.value6=o),onChange:e.onChange},null,8,["modelValue","onChange"])]),_:1}),z,a(t,{class:"cell"},{default:n(()=>[a(d,{disabled:"",modelValue:e.value7,"onUpdate:modelValue":l[6]||(l[6]=o=>e.value7=o)},null,8,["modelValue"])]),_:1}),G,a(t,{class:"cell"},{default:n(()=>[a(d,{modelValue:e.value8,"onUpdate:modelValue":l[7]||(l[7]=o=>e.value8=o),onChange:e.onChange,"inactive-color":"rgba(163,184,255,1)","button-color":"rgba(52,96,250,1)","active-color":"linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"},null,8,["modelValue","onChange"])]),_:1}),H,a(t,{class:"cell"},{default:n(()=>[a(d,{modelValue:e.value9,"onUpdate:modelValue":l[8]||(l[8]=o=>e.value9=o),onChange:e.onChange},{button:n(()=>[s("div",J,I(e.value9),1)]),_:1},8,["modelValue","onChange"])]),_:1})])}var Y=B($,[["render",K],["__scopeId","data-v-48a48510"]]);export{Y as default};
