import{c as t,o,B as n}from"./vendor.96954379.js";const l={class:"markdown-body"},a=n('<h1>Navbar 头部导航</h1><h3>介绍</h3><p>提供导航功能。</p><h3>安装</h3><pre><code class="language-javascript">\nimport { createApp } from &#39;vue&#39;;\nimport { Navbar } from &#39;@nutui/nutui&#39;;\n\nconst app = createApp();\napp.use(Navbar);\n\n</code></pre><h3>代码示例</h3><h3>基本用法</h3><pre><code class="language-html">  &lt;nut-navbar  @on-click-back=&quot;back&quot; @on-click-title=&quot;title&quot; @on-click-send=&quot;send&quot; title=&quot;订单详情&quot; icon=&quot;share&quot;&gt;&lt;/nut-navbar&gt;\n  &lt;nut-navbar @on-click-back=&quot;back&quot; @on-click-title=&quot;title&quot; @on-click-clear=&quot;clear&quot;  title=&quot;浏览记录&quot; desc=&quot;清空&quot;&gt;&lt;/nut-navbar&gt;\n  &lt;nut-navbar :left-show=&quot;false&quot; @on-click-title=&quot;title&quot; @on-click-icon=&quot;icon&quot; @on-click-clear=&quot;edit&quot;  @on-click-send=&quot;more&quot; title=&quot;购物车&quot; titIcon=&quot;locationg3&quot; desc=&quot;编辑&quot; icon=&quot;more&quot;&gt;&lt;/nut-navbar&gt;\n\n</code></pre><h3>设置slot:tabs可以增加tab</h3><pre><code class="language-html">    &lt;nut-navbar @on-click-back=&quot;back&quot; @on-click-title=&quot;title&quot; @on-click-clear=&quot;edit&quot; @on-click-send=&quot;list&quot; desc=&quot;编辑&quot; icon=&quot;horizontal&quot;&gt;\n      &lt;template v-slot:tabs&gt;\n        &lt;nut-tab&gt;\n          &lt;nut-tab-panel tab-title=&quot;商品&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签全部内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n          &lt;nut-tab-panel tab-title=&quot;店铺&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签待付款内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n        &lt;/nut-tab&gt;\n      &lt;/template&gt;\n    &lt;/nut-navbar&gt;\n</code></pre><h3>多tab切换导航及增加右侧按钮</h3><pre><code class="language-html">    &lt;nut-navbar @on-click-back=&quot;back&quot; icon=&quot;share&quot; @on-click-send=&quot;send&quot;&gt;\n      &lt;template v-slot:tabs&gt;\n        &lt;nut-tab&gt;\n          &lt;nut-tab-panel tab-title=&quot;商品&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签全部内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n          &lt;nut-tab-panel tab-title=&quot;评价&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签待付款内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n          &lt;nut-tab-panel tab-title=&quot;详情&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签待付款内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n          &lt;nut-tab-panel tab-title=&quot;推荐&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签待付款内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n        &lt;/nut-tab&gt;\n      &lt;/template&gt;\n\n      &lt;template #icons &gt;\n        &lt;nut-icon class=&quot;icon&quot; name=&quot;more&quot; @on-click-slot-send=&quot;morelist&quot;&gt;&lt;/nut-icon&gt;\n      &lt;/template&gt;\n    &lt;/nut-navbar&gt;\n</code></pre><h3>Prop</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题名称</td><td>String</td><td>-</td></tr><tr><td>desc</td><td>右侧描述</td><td>String</td><td>-</td></tr><tr><td>left-show</td><td>是否展示左侧箭头</td><td>Boolean</td><td>false</td></tr><tr><td>icon</td><td>左侧 <a href="#/icon">图标名称</a> 或图片链接</td><td>String</td><td>-</td></tr><tr><td>tit-icon</td><td>标题带icon</td><td>String</td><td>-</td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>title</td><td>点击页面标题事件</td><td>event:Event</td></tr><tr><td>right</td><td>点击右侧按钮事件</td><td>event:Event</td></tr><tr><td>back</td><td>点击返回上一页事件</td><td>event:Event</td></tr></tbody></table>',16),e={expose:[],setup:n=>(n,e)=>(o(),t("div",l,[a]))};export default e;
