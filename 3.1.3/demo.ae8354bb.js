import{c as l,_ as e}from"./mobile.d7e7333b.js";import{m as t,r as n,o,e as i,j as c,k as a}from"./vendor.bcce97f3.js";import"./index.2ca4a1e4.js";const{createDemo:s}=l("dialog");var C=s({setup(){const l=t(!1),n=()=>{console.log("event cancel")},o=()=>{console.log("event ok")};return{visible:l,baseClick:()=>{e({title:"基础弹框",content:"支持函数调用和组件调用两种方式。",onCancel:n,onOk:o})},noTitleClick:()=>{e({content:"无标题弹框",onCancel:n,onOk:o})},componentClick:()=>{l.value=!0},tipsClick:()=>{e({title:"温馨提示",content:"支持函数调用和组件调用两种方式。",noCancelBtn:!0,onCancel:n,onOk:o})},teleportClick:l=>{e({teleport:l,title:"挂载至 "+l,content:"打开开发者工具看一下 Elements Tab",noCancelBtn:!0,onCancel:n})}}}});const k={class:"demo"};C.render=function(l,e,t,s,C,p){const r=n("nut-cell"),u=n("nut-cell-group"),d=n("nut-dialog");return o(),i("div",k,[c(u,{title:"函数式调用"},{default:a((()=>[c(r,{title:"基础弹框",onClick:l.baseClick},null,8,["onClick"]),c(r,{title:"无标题弹框",onClick:l.noTitleClick},null,8,["onClick"]),c(r,{title:"提示弹框",onClick:l.tipsClick},null,8,["onClick"])])),_:1}),c(u,{title:"标签式调用"},{default:a((()=>[c(r,{title:"组件调用",onClick:l.componentClick},null,8,["onClick"]),c(d,{teleport:"#app",title:"组件调用",content:"如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。",visible:l.visible,"onUpdate:visible":e[0]||(e[0]=e=>l.visible=e)},null,8,["visible"])])),_:1}),c(u,{title:"teleport 使用，挂载到指定节点"},{default:a((()=>[c(r,{title:"body 节点下",onClick:e[1]||(e[1]=e=>l.teleportClick("body"))}),c(r,{title:"#app 节点下",onClick:e[2]||(e[2]=e=>l.teleportClick("#app"))}),c(r,{title:"demo class 元素节点下",onClick:e[3]||(e[3]=e=>l.teleportClick(".demo"))})])),_:1})])};export{C as default};
