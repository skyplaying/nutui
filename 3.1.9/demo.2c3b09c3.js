import{c as m}from"./mobile.937a963a.js";import{_ as g}from"./index.5dbae174.js";import{a as p,r as v,e as C,j as n,g as s,o as V}from"./vendor.b9b5ce39.js";const{createDemo:h}=m("input"),i=h({setup(){const e=p({val0:"",val1:"\u521D\u59CB\u6570\u636E",val2:"\u7981\u6B62\u4FEE\u6539",val3:"readonly \u53EA\u8BFB",val4:"",val5:"",val6:"",val7:"",val8:"\u6587\u6848"});return setTimeout(function(){e.val1="\u5F02\u6B65\u6570\u636E"},2e3),{state:e,change:(o,u)=>{console.log("change: ",o,u)},blur:(o,u)=>{console.log("blur:",o,u)},clear:o=>{console.log("clear:",o)},focus:(o,u)=>{console.log("focus:",o,u)}}}}),b={class:"demo full"},B=s("h2",null,"\u57FA\u7840\u7528\u6CD5",-1),F=s("h2",null,"\u7981\u7528\u8F93\u5165\u6846",-1),f=s("h2",null,"\u9650\u5236\u8F93\u5165\u957F\u5EA6",-1),E=s("h2",null,"\u81EA\u5B9A\u4E49\u7C7B\u578B",-1);function U(e,l,t,d,r,o){const u=v("nut-input");return V(),C("div",b,[B,n(u,{modelValue:e.state.val1,"onUpdate:modelValue":l[0]||(l[0]=a=>e.state.val1=a),onChange:e.change,onFocus:e.focus,onBlur:e.blur,label:"\u6587\u672C(\u5F02\u6B65)"},null,8,["modelValue","onChange","onFocus","onBlur"]),n(u,{placeholder:"\u8BF7\u8F93\u5165\u6587\u672C",onChange:e.change,modelValue:e.state.val0,"onUpdate:modelValue":l[1]||(l[1]=a=>e.state.val0=a),"require-show":!0,label:"\u6587\u672C",onClear:e.clear},null,8,["onChange","modelValue","onClear"]),F,n(u,{modelValue:e.state.val2,"onUpdate:modelValue":l[2]||(l[2]=a=>e.state.val2=a),onChange:e.change,disabled:!0,label:"\u6587\u672C"},null,8,["modelValue","onChange"]),n(u,{modelValue:e.state.val3,"onUpdate:modelValue":l[3]||(l[3]=a=>e.state.val3=a),onChange:e.change,readonly:!0,label:"\u6587\u672C"},null,8,["modelValue","onChange"]),f,n(u,{modelValue:e.state.val4,"onUpdate:modelValue":l[4]||(l[4]=a=>e.state.val4=a),onChange:e.change,"max-length":"7",label:"\u9650\u52367"},null,8,["modelValue","onChange"]),E,n(u,{modelValue:e.state.val0,"onUpdate:modelValue":l[5]||(l[5]=a=>e.state.val0=a),onChange:e.change,type:"password",label:"\u5BC6\u7801"},null,8,["modelValue","onChange"]),n(u,{modelValue:e.state.val5,"onUpdate:modelValue":l[6]||(l[6]=a=>e.state.val5=a),onChange:e.change,type:"number",label:"\u6574\u6570"},null,8,["modelValue","onChange"]),n(u,{modelValue:e.state.val6,"onUpdate:modelValue":l[7]||(l[7]=a=>e.state.val6=a),onChange:e.change,type:"digit",placeholder:"\u652F\u6301\u5C0F\u6570\u70B9\u7684\u8F93\u5165",label:"\u6570\u5B57"},null,8,["modelValue","onChange"])])}var $=g(i,[["render",U]]);export{$ as default};
