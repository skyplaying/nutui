import{c as s}from"./mobile.480ca10f.js";import{a as e,y as t,z as a,r as o,o as l,c as n,f as i,A as d,j as r}from"./vendor.92cebbd2.js";import"./index.3be2900d.js";const{createDemo:c}=s("overlay");var u=c({props:{},setup:()=>({state:e({show:!1,show2:!1})})});const p=d();t("data-v-3325d30e");const v={class:"demo"},b=i("h2",null,"基础用法",-1),f=r("显示遮罩层"),h=i("h2",null,"嵌套内容",-1),m=r("嵌套内容"),w=i("div",{class:"wrapper"},[i("div",{class:"content"},"这里是正文")],-1);a();const _=p(((s,e,t,a,d,r)=>{const c=o("nut-button"),u=o("nut-overlay"),_=o("nut-cell");return l(),n("div",v,[b,i(_,null,{default:p((()=>[i(c,{type:"primary",onClick:e[1]||(e[1]=e=>s.state.show=!0)},{default:p((()=>[f])),_:1}),i(u,{visible:s.state.show,"onUpdate:visible":e[2]||(e[2]=e=>s.state.show=e),"z-index":2e3},null,8,["visible"])])),_:1}),h,i(_,null,{default:p((()=>[i(c,{type:"success",onClick:e[3]||(e[3]=e=>s.state.show2=!0)},{default:p((()=>[m])),_:1}),i(u,{visible:s.state.show2,"onUpdate:visible":e[4]||(e[4]=e=>s.state.show2=e),"z-index":2e3},{default:p((()=>[w])),_:1},8,["visible"])])),_:1})])}));u.render=_,u.__scopeId="data-v-3325d30e";export default u;
