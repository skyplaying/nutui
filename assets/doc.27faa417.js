import{c as t,o as a,C as o}from"./vendor.ed841bd5.js";const u={class:"markdown-body"},n=o('<h1>Tabbar 标签栏</h1><h3>介绍</h3><p>底部导航常用场景</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\n//vue\nimport { Tabbar } from &#39;@nutui/nutui&#39;;\n//mp\nimport { Tabbar } from &#39;@nutui/nutui@taro&#39;;\n\nconst app = createApp();\napp.use(Tabbar);\n\n</code></pre><h2>代码示例</h2><h3>基础用法</h3><pre><code class="language-html">&lt;nut-tabbar @tab-switch=&quot;tabSwitch&quot;&gt;\n  &lt;nut-tabbar-item tab-title=&quot;首页&quot; icon=&quot;home&quot;&gt;&lt;/nut-tabbar-item&gt;\n  &lt;nut-tabbar-item tab-title=&quot;分类&quot; icon=&quot;category&quot;&gt;&lt;/nut-tabbar-item&gt;\n  &lt;nut-tabbar-item tab-title=&quot;发现&quot; icon=&quot;find&quot;&gt;&lt;/nut-tabbar-item&gt;\n  &lt;nut-tabbar-item tab-title=&quot;购物车&quot; icon=&quot;cart&quot;&gt;&lt;/nut-tabbar-item&gt;\n  &lt;nut-tabbar-item tab-title=&quot;我的&quot; icon=&quot;my&quot;&gt;&lt;/nut-tabbar-item&gt;\n&lt;/nut-tabbar&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n  function tabSwitch(item: object, index: number) {\n    console.log(item, index);\n  }\n  return {\n    tabSwitch,\n  };\n},\n</code></pre><h3>自定义选中</h3><pre><code class="language-html">&lt;nut-tabbar v-model:visible=&quot;active&quot;&gt;\n  &lt;nut-tabbar-item tab-title=&quot;首页&quot; icon=&quot;home&quot;&gt;&lt;/nut-tabbar-item&gt;\n  &lt;nut-tabbar-item tab-title=&quot;分类&quot; icon=&quot;category&quot;&gt;&lt;/nut-tabbar-item&gt;\n  &lt;nut-tabbar-item tab-title=&quot;发现&quot; icon=&quot;find&quot;&gt;&lt;/nut-tabbar-item&gt;\n  &lt;nut-tabbar-item tab-title=&quot;购物车&quot; icon=&quot;cart&quot;&gt;&lt;/nut-tabbar-item&gt;\n  &lt;nut-tabbar-item tab-title=&quot;我的&quot; icon=&quot;my&quot;&gt;&lt;/nut-tabbar-item&gt;\n&lt;/nut-tabbar&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n  const active = ref(2)\n  return {\n    active\n  };\n},\n</code></pre><h3>徽标提示</h3><pre><code class="language-html">&lt;nut-tabbar&gt;\n  &lt;nut-tabbar-item tab-title=&quot;首页&quot; icon=&quot;home&quot; num=&quot;11&quot;&gt;&lt;/nut-tabbar-item&gt;\n  &lt;nut-tabbar-item tab-title=&quot;分类&quot; icon=&quot;category&quot;&gt;&lt;/nut-tabbar-item&gt;\n  &lt;nut-tabbar-item tab-title=&quot;发现&quot; icon=&quot;find&quot;&gt;&lt;/nut-tabbar-item&gt;\n  &lt;nut-tabbar-item tab-title=&quot;购物车&quot; icon=&quot;cart&quot; num=&quot;110&quot;&gt;&lt;/nut-tabbar-item&gt;\n  &lt;nut-tabbar-item tab-title=&quot;我的&quot; icon=&quot;my&quot;&gt;&lt;/nut-tabbar-item&gt;\n&lt;/nut-tabbar&gt;\n</code></pre><h3>自定义颜色</h3><pre><code class="language-html">&lt;nut-tabbar unactive-color=&quot;#7d7e80&quot; active-color=&quot;#1989fa&quot;&gt;\n  &lt;nut-tabbar-item tab-title=&quot;首页&quot; icon=&quot;home&quot;&gt;&lt;/nut-tabbar-item&gt;\n  &lt;nut-tabbar-item tab-title=&quot;分类&quot; icon=&quot;category&quot;&gt;&lt;/nut-tabbar-item&gt;\n  &lt;nut-tabbar-item tab-title=&quot;发现&quot; icon=&quot;find&quot;&gt;&lt;/nut-tabbar-item&gt;\n  &lt;nut-tabbar-item tab-title=&quot;购物车&quot; icon=&quot;cart&quot;&gt;&lt;/nut-tabbar-item&gt;\n  &lt;nut-tabbar-item tab-title=&quot;我的&quot; icon=&quot;my&quot;&gt;&lt;/nut-tabbar-item&gt;\n&lt;/nut-tabbar&gt;\n</code></pre><h3>三个图标的标签栏</h3><pre><code class="language-html">&lt;nut-tabbar unactive-color=&quot;#7d7e80&quot; active-color=&quot;#1989fa&quot;&gt;\n  &lt;nut-tabbar-item tab-title=&quot;首页&quot; icon=&quot;home&quot;&gt;&lt;/nut-tabbar-item&gt;\n  &lt;nut-tabbar-item tab-title=&quot;分类&quot; icon=&quot;category&quot;&gt;&lt;/nut-tabbar-item&gt;\n  &lt;nut-tabbar-item tab-title=&quot;发现&quot; icon=&quot;find&quot;&gt;&lt;/nut-tabbar-item&gt;\n&lt;/nut-tabbar&gt;\n</code></pre><h3>固定底部，可自由跳转</h3><pre><code class="language-html">&lt;nut-tabbar :bottom=&quot;true&quot;&gt;\n  &lt;nut-tabbar-item tab-title=&quot;首页&quot; href=&quot;&quot; icon=&quot;home&quot;&gt;&lt;/nut-tabbar-item&gt;\n  &lt;nut-tabbar-item tab-title=&quot;分类&quot; icon=&quot;category&quot;&gt;&lt;/nut-tabbar-item&gt;\n  &lt;nut-tabbar-item tab-title=&quot;发现&quot; icon=&quot;find&quot;&gt;&lt;/nut-tabbar-item&gt;\n  &lt;nut-tabbar-item\n    tab-title=&quot;购物车&quot;\n    href=&quot;https://m.jd.com&quot;\n    icon=&quot;cart&quot;\n  &gt;&lt;/nut-tabbar-item&gt;\n  &lt;nut-tabbar-item\n    tab-title=&quot;我的&quot;\n    href=&quot;######&quot;\n    icon=&quot;my&quot;\n  &gt;&lt;/nut-tabbar-item&gt;\n&lt;/nut-tabbar&gt;\n</code></pre><h3>Prop</h3><h3>nut-tabbar</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model:visible</td><td>选中标签的索引值</td><td>number</td><td>0</td></tr><tr><td>bottom</td><td>是否固定在页面底部</td><td>Booble</td><td>false</td></tr><tr><td>unactive-color</td><td>icon未激活的颜色</td><td>string</td><td>#7d7e80</td></tr><tr><td>active-color</td><td>icon激活的颜色</td><td>string</td><td>#1989fa</td></tr></tbody></table><h3>tabbar-item</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>tab-title</td><td>标签页的标题</td><td>String</td><td>–</td></tr><tr><td>icon</td><td>标签页显示的<a href="#/icon">图标名称</a> 或图片链接</td><td>String</td><td>–</td></tr><tr><td>href</td><td>标签页的跳转链接</td><td>String</td><td>–</td></tr><tr><td>num</td><td>页签右上角的数字角标，超出99之后为99+</td><td>Number</td><td>–</td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>tab-switch</td><td>切换页签时触发事件</td><td>点击的数据和索引值</td></tr></tbody></table>',27),e={expose:[],setup:o=>(o,e)=>(a(),t("div",u,[n]))};export default e;
