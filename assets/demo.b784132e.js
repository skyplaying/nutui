import{c as t}from"./mobile.a721bc25.js";import{x as e,y as o,r as a,o as r,c as p,f as l,s as d,j as i}from"./vendor.8cdc485e.js";import"./index.00c891e2.js";const{createDemo:n}=t("drag");var s=n({setup:()=>({right:function(){return document.documentElement.clientWidth-300-9},bottom:function(){return document.documentElement.clientHeight-559}})});const u=d();e("data-v-1d2dfb33");const c={class:"demo full"},f=l("h2",null,"基础用法",-1),y=i("触摸移动"),m=l("h2",{style:{top:"30px",position:"relative"}},"限制拖拽方向",-1),x=i("只能X轴拖拽"),_=i("只能Y轴拖拽"),b=l("h2",{style:{top:"60px",position:"relative"}},"自动吸边",-1),h=i("拖动我"),v=l("h2",{style:{top:"90px",position:"relative"}},"限制拖动边界",-1),g=l("div",{class:"drag-boundary"},null,-1),j=i("限制拖拽边界");o();const E=u(((t,e,o,d,i,n)=>{const s=a("nut-button"),E=a("nut-drag");return r(),p("div",c,[f,l(E,{style:{top:"120px",left:"8px"}},{default:u((()=>[l(s,{type:"primary"},{default:u((()=>[y])),_:1})])),_:1}),m,l(E,{direction:"x",style:{top:"200px",left:"8px"}},{default:u((()=>[l(s,{type:"primary"},{default:u((()=>[x])),_:1})])),_:1}),l(E,{direction:"y",style:{top:"200px",right:"50px"}},{default:u((()=>[l(s,{type:"primary"},{default:u((()=>[_])),_:1})])),_:1}),b,l(E,{direction:"x",attract:!0,style:{top:"275px",left:"8px"}},{default:u((()=>[l(s,{type:"primary"},{default:u((()=>[h])),_:1})])),_:1}),v,g,l(E,{boundary:{top:361,left:9,bottom:t.bottom(),right:t.right()},style:{top:"400px",left:"50px"}},{default:u((()=>[l(s,{type:"primary"},{default:u((()=>[j])),_:1})])),_:1},8,["boundary"])])}));s.render=E,s.__scopeId="data-v-1d2dfb33";export default s;
