import{c as l}from"./mobile.a68f22f3.js";import{z as a,A as o,r as e,o as t,c as n,f as s,y as c,j as f}from"./vendor.2e1680f4.js";import"./index.6aaff52e.js";const{createDemo:i}=l("avatar");var m=i({props:{},setup:()=>({handleClick:()=>{console.log("触发点击头像")}})});const u=c();a("data-v-6504f754");const r={class:"demo full"},d=s("h2",null,'默认用法 (内置"small","normal","large"三种尺寸规格)',-1),g=s("h2",null,"修改形状",-1),p=s("h2",null,"修改背景色",-1),h=s("h2",null,"修改背景图片",-1),v=s("h2",null,"可以修改头像的内容",-1),b=f("N"),y=s("h2",null,"点击头像触发事件",-1);o();const _=u(((l,a,o,c,f,i)=>{const m=e("nut-avatar"),_=e("nut-cell");return t(),n("div",r,[d,s(_,null,{default:u((()=>[s(m,{size:"large",icon:"https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"}),s(m,{size:"normal",icon:"https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"}),s(m,{size:"small",icon:"https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"})])),_:1}),g,s(_,null,{default:u((()=>[s(m,{icon:"my",shape:"square"}),s(m,{icon:"my",shape:"round"})])),_:1}),p,s(_,null,{default:u((()=>[s(m,{class:"demo-avatar",icon:"my","bg-color":"#FA2C19"})])),_:1}),h,s(_,null,{default:u((()=>[s(m,{icon:"https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"})])),_:1}),v,s(_,null,{default:u((()=>[s(m,null,{default:u((()=>[b])),_:1})])),_:1}),y,s(_,null,{default:u((()=>[s(m,{icon:"my",onActiveAvatar:l.handleClick},null,8,["onActiveAvatar"])])),_:1})])}));m.render=_,m.__scopeId="data-v-6504f754";export default m;
