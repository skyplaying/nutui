import{c as m}from"./mobile.4f9c1c24.js";import{_ as v}from"./index.25a44c2e.js";import{r as c,e as l,j as t,k as r,B as w,C as R,g as e,o as u,F as i,i as _,t as h}from"./vendor.36d75c4a.js";const{createDemo:B}=m("pullrefresh"),D=B({props:{},setup(){return{refresh:n=>{console.log("\u4E0A\u62C9\u52A0\u8F7D"),setTimeout(()=>{n()},1e3)},downRefresh:n=>{console.log("\u4E0B\u62C9\u5237\u65B0"),setTimeout(()=>{n()},1e3)}}}}),p=s=>(w("data-v-02779db4"),s=s(),R(),s),g={class:"demo full"},C=p(()=>e("h2",null,"\u7EB5\u5411",-1)),E={class:"vertical"},I={class:"content",id:"pull"},k={class:"main"},y=p(()=>e("h2",null,"\u6A2A\u5411",-1)),F={class:"horizontal"},j={class:"contentH",id:"pullH"},A={class:"mainH"};function H(s,f,n,S,$,b){const a=c("nut-pullrefresh"),d=c("nut-cell");return u(),l("div",g,[C,t(d,null,{default:r(()=>[e("div",E,[t(a,{onRefresh:s.refresh,onDownRefresh:s.downRefresh,useWindow:!1,containerId:"pull"},{default:r(()=>[e("div",I,[e("div",k,[(u(),l(i,null,_([1,2,3,4,5,6,7,8,9],o=>e("div",{class:"pull-data",key:o},"\u6211\u662F\u6D4B\u8BD5\u6570\u636E "+h(o),1)),64))])])]),_:1},8,["onRefresh","onDownRefresh"])])]),_:1}),y,t(d,null,{default:r(()=>[e("div",F,[t(a,{onRefresh:s.refresh,onDownRefresh:s.downRefresh,useWindow:!1,containerId:"pullH",direction:"horizontal"},{default:r(()=>[e("div",j,[e("div",A,[(u(),l(i,null,_([1,2,3,4,5,6,7,8,9],o=>e("div",{class:"pull-data",key:o},"\u6211\u662F\u6D4B\u8BD5\u6570\u636E "+h(o),1)),64))])])]),_:1},8,["onRefresh","onDownRefresh"])])]),_:1})])}var T=v(D,[["render",H],["__scopeId","data-v-02779db4"]]);export{T as default};
