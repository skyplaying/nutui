var h=Object.defineProperty,E=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var b=(e,s,l)=>s in e?h(e,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[s]=l,C=(e,s)=>{for(var l in s||(s={}))m.call(s,l)&&b(e,l,s[l]);if(v)for(var l of v(s))w.call(s,l)&&b(e,l,s[l]);return e},f=(e,s)=>E(e,$(s));import{c}from"./mobile.js";import{_ as S}from"./index.js";import{a as k,B as F,r as V,e as A,g as i,j as u,C as B,D as g,o as j}from"./vendor.js";const{createDemo:D}=c("calendar"),I=D({props:{},setup(){const e=k({isVisible:!1,date:"",dateWeek:"",isVisible1:!1,date1:["2019-12-23","2019-12-26"],date2:"2020-07-08",isVisible3:!1,date3:""}),s=o=>{e[`${o}`]=!0},l=o=>{e[`${o}`]=!1},d=o=>{e.date=o[3],e.dateWeek=o[4]},r=o=>{e.date1=[o[0][3],o[1][3]]},p=o=>{e.date2=o[3],console.log(e.date2)},n=o=>{e.date3=o[3]};return f(C({},F(e)),{openSwitch:s,closeSwitch:l,setChooseValue:d,setChooseValue1:r,setChooseValue2:p,setChooseValue3:n})}}),a=e=>(B("data-v-34956fd8"),e=e(),g(),e),y={class:"demo"},U=a(()=>i("h2",null,"\u57FA\u7840\u7528\u6CD5",-1)),W=a(()=>i("h2",null,"\u81EA\u5B9A\u4E49\u65E5\u5386-\u81EA\u52A8\u56DE\u586B",-1)),N=a(()=>i("h2",null,"\u5E73\u94FA\u5C55\u793A",-1)),R={class:"test-calendar-wrapper"};function q(e,s,l,d,r,p){const n=V("nut-cell"),o=V("nut-calendar");return j(),A("div",y,[U,i("div",null,[u(n,{"show-icon":!0,title:"\u9009\u62E9\u5355\u4E2A\u65E5\u671F",desc:e.date?`${e.date} ${e.dateWeek}`:"\u8BF7\u9009\u62E9",onClick:s[0]||(s[0]=t=>e.openSwitch("isVisible"))},null,8,["desc"]),u(o,{visible:e.isVisible,"onUpdate:visible":s[1]||(s[1]=t=>e.isVisible=t),"default-value":e.date,onClose:s[2]||(s[2]=t=>e.closeSwitch("isVisible")),onChoose:e.setChooseValue,"start-date":"2019-10-11","end-date":"2029-11-11"},null,8,["visible","default-value","onChoose"])]),i("div",null,[u(n,{"show-icon":!0,title:"\u9009\u62E9\u65E5\u671F\u533A\u95F4",desc:e.date1?`${e.date1[0]}\u81F3${e.date1[1]}`:"\u8BF7\u9009\u62E9",onClick:s[3]||(s[3]=t=>e.openSwitch("isVisible1"))},null,8,["desc"]),u(o,{visible:e.isVisible1,"onUpdate:visible":s[4]||(s[4]=t=>e.isVisible1=t),"default-value":e.date1,type:"range","start-date":"2019-12-22","end-date":"2021-01-08",onClose:s[5]||(s[5]=t=>e.closeSwitch("isVisible1")),onChoose:e.setChooseValue1},null,8,["visible","default-value","onChoose"])]),W,i("div",null,[u(n,{"show-icon":!0,title:"\u9009\u62E9\u65E5\u671F",desc:e.date3?e.date3:"\u8BF7\u9009\u62E9",onClick:s[6]||(s[6]=t=>e.openSwitch("isVisible3"))},null,8,["desc"]),u(o,{visible:e.isVisible3,"onUpdate:visible":s[7]||(s[7]=t=>e.isVisible3=t),onClose:s[8]||(s[8]=t=>e.closeSwitch("isVisible3")),onChoose:e.setChooseValue3,"default-value":e.date3,"start-date":null,"end-date":null,"is-auto-back-fill":!0},null,8,["visible","onChoose","default-value"])]),N,i("div",R,[u(o,{poppable:!1,"default-value":e.date2,"is-auto-back-fill":!0,onChoose:e.setChooseValue2},null,8,["default-value","onChoose"])])])}var K=S(I,[["render",q],["__scopeId","data-v-34956fd8"]]);export{K as default};
