var e=Object.defineProperty,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,c=(l,o,a)=>o in l?e(l,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[o]=a;import{c as u,T as d}from"./mobile.d7e7333b.js";import{m as t,a as n,A as b,B as h,C as x,r as m,o as k,e as p,j as r,k as V,g as f,t as g,l as s}from"./vendor.bcce97f3.js";import"./index.2ca4a1e4.js";const{createDemo:i}=u("checkbox");var _=i({setup(e,u){const h=t(null),x=n({checkbox1:!0,checkbox2:!1,checkbox3:!1,checkbox4:!0,checkbox5:!1,checkbox6:!1,checkbox7:!1,checkbox8:!1,checkbox9:!1,checkbox10:!1,checkbox11:!1,checkbox12:!1,checkbox13:!1,checkbox14:!1,checkbox15:!1,checkbox16:!1,checkboxgroup1:["2","3"],checkboxgroup2:["2"],checkboxgroup3:["2"]});return((e,u)=>{for(var d in u||(u={}))o.call(u,d)&&c(e,d,u[d]);if(l)for(var d of l(u))a.call(u,d)&&c(e,d,u[d]);return e})({changeBox1:(e,l)=>{console.log(e,l)},changeBox2:(e,l)=>{console.log(e,l)},changeBox3:(e,l)=>{d.text(`您${e?"选中":"取消"}了${l}`)},changeBox4:e=>{d.text(""+(e.length?"全选":"取消全选"))},toggleAll:e=>{h.value.toggleAll(e)},group:h},b(x))}});h("data-v-6a03cc27");const U={class:"demo"},y=s("复选框"),v=s("复选框"),C=f("div",{class:"demo-check"},"当前选中值",-1),B=s("未选时禁用状态"),j=s("选中时禁用状态"),O=s("自定义尺寸25"),A=s("自定义尺寸10"),w=s("自定义图标"),G=s("change复选框"),P=s("组合复选框"),z=s("组合复选框"),I=s("组合复选框"),$=s("组合复选框"),D=f("div",{class:"demo-check"},"当前选中值",-1),E=s("组合复选框"),S=s("组合复选框"),T=s("组合复选框"),q=s("组合复选框"),F=s("组合复选框"),H=s("组合复选框"),J=s("全选"),K=s("取消");x(),_.render=function(e,l,o,a,c,u){const d=m("nut-checkbox"),t=m("nut-cell"),n=m("nut-cell-group"),b=m("nut-checkboxgroup"),h=m("nut-button");return k(),p("div",U,[r(n,{title:"基本用法-左右"},{default:V((()=>[r(t,null,{default:V((()=>[r(d,{modelValue:e.checkbox1,"onUpdate:modelValue":l[0]||(l[0]=l=>e.checkbox1=l),label:"复选框",onChange:e.changeBox1},{default:V((()=>[y])),_:1},8,["modelValue","onChange"])])),_:1}),r(t,null,{default:V((()=>[r(d,{modelValue:e.checkbox1,"onUpdate:modelValue":l[1]||(l[1]=l=>e.checkbox1=l),"text-position":"left",onChange:e.changeBox1},{default:V((()=>[v])),_:1},8,["modelValue","onChange"])])),_:1}),r(t,null,{default:V((()=>[C,f("div",null,g(e.checkbox1),1)])),_:1})])),_:1}),r(n,{title:"禁用状态"},{default:V((()=>[r(t,null,{default:V((()=>[r(d,{modelValue:e.checkbox3,"onUpdate:modelValue":l[2]||(l[2]=l=>e.checkbox3=l),disabled:""},{default:V((()=>[B])),_:1},8,["modelValue"])])),_:1}),r(t,null,{default:V((()=>[r(d,{modelValue:e.checkbox4,"onUpdate:modelValue":l[3]||(l[3]=l=>e.checkbox4=l),disabled:""},{default:V((()=>[j])),_:1},8,["modelValue"])])),_:1})])),_:1}),r(n,{title:"自定义尺寸"},{default:V((()=>[r(t,null,{default:V((()=>[r(d,{modelValue:e.checkbox5,"onUpdate:modelValue":l[4]||(l[4]=l=>e.checkbox5=l),"icon-size":"25"},{default:V((()=>[O])),_:1},8,["modelValue"])])),_:1}),r(t,null,{default:V((()=>[r(d,{modelValue:e.checkbox6,"onUpdate:modelValue":l[5]||(l[5]=l=>e.checkbox6=l),"icon-size":"10"},{default:V((()=>[A])),_:1},8,["modelValue"])])),_:1})])),_:1}),r(n,{title:"自定义图标"},{default:V((()=>[r(t,null,{default:V((()=>[r(d,{modelValue:e.checkbox7,"onUpdate:modelValue":l[6]||(l[6]=l=>e.checkbox7=l),"icon-name":"checklist","icon-active-name":"checklist"},{default:V((()=>[w])),_:1},8,["modelValue"])])),_:1})])),_:1}),r(n,{title:"点击触发change事件"},{default:V((()=>[r(t,null,{default:V((()=>[r(d,{modelValue:e.checkbox8,"onUpdate:modelValue":l[7]||(l[7]=l=>e.checkbox8=l),onChange:e.changeBox3},{default:V((()=>[G])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1}),r(n,{title:"checkboxGroup使用"},{default:V((()=>[r(t,null,{default:V((()=>[r(b,{modelValue:e.checkboxgroup1,"onUpdate:modelValue":l[12]||(l[12]=l=>e.checkboxgroup1=l)},{default:V((()=>[r(d,{modelValue:e.checkbox9,"onUpdate:modelValue":l[8]||(l[8]=l=>e.checkbox9=l),label:"1",style:{margin:"2px 20px 0 0"}},{default:V((()=>[P])),_:1},8,["modelValue"]),r(d,{modelValue:e.checkbox10,"onUpdate:modelValue":l[9]||(l[9]=l=>e.checkbox10=l),label:"2"},{default:V((()=>[z])),_:1},8,["modelValue"]),r(d,{modelValue:e.checkbox11,"onUpdate:modelValue":l[10]||(l[10]=l=>e.checkbox11=l),label:"3",style:{margin:"2px 20px 0 0"}},{default:V((()=>[I])),_:1},8,["modelValue"]),r(d,{modelValue:e.checkbox12,"onUpdate:modelValue":l[11]||(l[11]=l=>e.checkbox12=l),label:"4"},{default:V((()=>[$])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])])),_:1}),r(t,null,{default:V((()=>[D,f("div",null,g(e.checkboxgroup1),1)])),_:1})])),_:1}),r(n,{title:"checkboxGroup禁用"},{default:V((()=>[r(t,null,{default:V((()=>[r(b,{modelValue:e.checkboxgroup1,"onUpdate:modelValue":l[17]||(l[17]=l=>e.checkboxgroup1=l),disabled:""},{default:V((()=>[r(d,{modelValue:e.checkbox9,"onUpdate:modelValue":l[13]||(l[13]=l=>e.checkbox9=l),label:"1",style:{margin:"2px 20px 0 0"}},{default:V((()=>[E])),_:1},8,["modelValue"]),r(d,{modelValue:e.checkbox10,"onUpdate:modelValue":l[14]||(l[14]=l=>e.checkbox10=l),label:"2"},{default:V((()=>[S])),_:1},8,["modelValue"]),r(d,{modelValue:e.checkbox11,"onUpdate:modelValue":l[15]||(l[15]=l=>e.checkbox11=l),label:"3",style:{margin:"2px 20px 0 0"}},{default:V((()=>[T])),_:1},8,["modelValue"]),r(d,{modelValue:e.checkbox12,"onUpdate:modelValue":l[16]||(l[16]=l=>e.checkbox12=l),label:"4"},{default:V((()=>[q])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])])),_:1})])),_:1}),r(n,{title:"checkboxGroup 全选/取消"},{default:V((()=>[r(t,null,{default:V((()=>[r(b,{modelValue:e.checkboxgroup3,"onUpdate:modelValue":l[20]||(l[20]=l=>e.checkboxgroup3=l),ref:"group",onChange:e.changeBox4},{default:V((()=>[r(d,{modelValue:e.checkbox15,"onUpdate:modelValue":l[18]||(l[18]=l=>e.checkbox15=l),label:"1",style:{margin:"0 20px 0 0"}},{default:V((()=>[F])),_:1},8,["modelValue"]),r(d,{modelValue:e.checkbox16,"onUpdate:modelValue":l[19]||(l[19]=l=>e.checkbox16=l),label:"2"},{default:V((()=>[H])),_:1},8,["modelValue"])])),_:1},8,["modelValue","onChange"])])),_:1}),r(t,null,{default:V((()=>[r(h,{type:"primary",onClick:l[21]||(l[21]=l=>e.toggleAll(!0)),style:{margin:"0 20px 0 0"}},{default:V((()=>[J])),_:1}),r(h,{type:"info",onClick:l[22]||(l[22]=l=>e.toggleAll(!1))},{default:V((()=>[K])),_:1})])),_:1})])),_:1})])},_.__scopeId="data-v-6a03cc27";export{_ as default};
