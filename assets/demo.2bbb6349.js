var e=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,n=(l,a,o)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[a]=o;import{c as u,T as r}from"./mobile.b4c555b8.js";import{a as i,s as c,r as s,o as f,c as V,f as m,i as b,j as _}from"./vendor.ed841bd5.js";import"./index.97d10053.js";const{createDemo:p}=u("radio");var h=p({props:{},setup(){const e=i({radioVal:1,radioVal2:2,radioVal3:1,radioVal4:1,radioVal5:1,radioVal6:1});return u=((e,l)=>{for(var a in l||(l={}))d.call(l,a)&&n(e,a,l[a]);if(o)for(var a of o(l))t.call(l,a)&&n(e,a,l[a]);return e})({},c(e)),l(u,a({handleChange1:e=>{console.log(e)},handleChange2:e=>{console.log(e)},handleChange3:e=>{r.text(`您选中了${e}`)}}));var u}});const g={class:"demo"},C=_("单选框1"),j=_("单选框2"),v=_("单选框1"),O=_("单选框2"),y=_("禁用单选框"),U=_("禁用单选框"),P=_("自定义尺寸12"),k=_("自定义尺寸12"),w=_("自定义图标"),x=_("自定义图标"),z=_("触发事件"),D=_("触发事件");h.render=function(e,l,a,o,d,t){const n=s("nut-radio"),u=s("nut-radiogroup"),r=s("nut-cell"),i=s("nut-cell-group");return f(),V("div",g,[m(i,{title:"基本用法-左右侧"},{default:b((()=>[m(r,null,{default:b((()=>[m(u,{modelValue:e.radioVal,"onUpdate:modelValue":l[1]||(l[1]=l=>e.radioVal=l),onChange:e.handleChange1},{default:b((()=>[m(n,{label:1},{default:b((()=>[C])),_:1}),m(n,{label:2},{default:b((()=>[j])),_:1})])),_:1},8,["modelValue","onChange"])])),_:1}),m(r,null,{default:b((()=>[m(u,{modelValue:e.radioVal,"onUpdate:modelValue":l[2]||(l[2]=l=>e.radioVal=l),"text-position":"left",onChange:e.handleChange1},{default:b((()=>[m(n,{label:1},{default:b((()=>[v])),_:1}),m(n,{label:2},{default:b((()=>[O])),_:1})])),_:1},8,["modelValue","onChange"])])),_:1}),m(r,{title:"当前选中值",desc:e.radioVal},null,8,["desc"])])),_:1}),m(i,{title:"单选框禁用"},{default:b((()=>[m(r,null,{default:b((()=>[m(u,{modelValue:e.radioVal3,"onUpdate:modelValue":l[3]||(l[3]=l=>e.radioVal3=l)},{default:b((()=>[m(n,{label:1,disabled:""},{default:b((()=>[y])),_:1}),m(n,{label:2,disabled:""},{default:b((()=>[U])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}),m(i,{title:"自定义尺寸"},{default:b((()=>[m(r,null,{default:b((()=>[m(u,{modelValue:e.radioVal4,"onUpdate:modelValue":l[4]||(l[4]=l=>e.radioVal4=l)},{default:b((()=>[m(n,{label:1,"icon-size":"12"},{default:b((()=>[P])),_:1}),m(n,{label:2,"icon-size":"12"},{default:b((()=>[k])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}),m(i,{title:"Radio自定义图标"},{default:b((()=>[m(r,null,{default:b((()=>[m(u,{modelValue:e.radioVal5,"onUpdate:modelValue":l[5]||(l[5]=l=>e.radioVal5=l)},{default:b((()=>[m(n,{label:1,"icon-name":"checklist","icon-active-name":"checklist"},{default:b((()=>[w])),_:1}),m(n,{label:2,"icon-name":"checklist","icon-active-name":"checklist"},{default:b((()=>[x])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}),m(i,{title:"触发事件"},{default:b((()=>[m(r,null,{default:b((()=>[m(u,{modelValue:e.radioVal6,"onUpdate:modelValue":l[6]||(l[6]=l=>e.radioVal6=l),onChange:e.handleChange3},{default:b((()=>[m(n,{label:1},{default:b((()=>[z])),_:1}),m(n,{label:2},{default:b((()=>[D])),_:1})])),_:1},8,["modelValue","onChange"])])),_:1}),m(r,{title:"当前选中值",desc:e.radioVal6},null,8,["desc"])])),_:1})])};export default h;
