import{c as s}from"./mobile.454b187d.js";import{a as e,y as t,z as a,r as o,o as l,c as n,f as d,A as i,j as r}from"./vendor.df5cf62d.js";import"./index.88909ce1.js";const{createDemo:c}=s("overlay");var u=c({props:{},setup:()=>({state:e({show:!1,show2:!1})})});const p=i();t("data-v-3325d30e");const v={class:"demo"},f=d("h2",null,"基础用法",-1),h=r("显示遮罩层"),b=d("h2",null,"嵌套内容",-1),m=r("嵌套内容"),w=d("div",{class:"wrapper"},[d("div",{class:"content"},"这里是正文")],-1);a();const _=p(((s,e,t,a,i,r)=>{const c=o("nut-button"),u=o("nut-overlay"),_=o("nut-cell");return l(),n("div",v,[f,d(_,null,{default:p((()=>[d(c,{type:"primary",onClick:e[1]||(e[1]=e=>s.state.show=!0)},{default:p((()=>[h])),_:1}),d(u,{visible:s.state.show,"onUpdate:visible":e[2]||(e[2]=e=>s.state.show=e),"z-index":2e3},null,8,["visible"])])),_:1}),b,d(_,null,{default:p((()=>[d(c,{type:"success",onClick:e[3]||(e[3]=e=>s.state.show2=!0)},{default:p((()=>[m])),_:1}),d(u,{visible:s.state.show2,"onUpdate:visible":e[4]||(e[4]=e=>s.state.show2=e),"z-index":2e3},{default:p((()=>[w])),_:1},8,["visible"])])),_:1})])}));u.render=_,u.__scopeId="data-v-3325d30e";export default u;
