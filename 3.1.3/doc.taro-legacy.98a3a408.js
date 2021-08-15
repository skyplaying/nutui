System.register(["./vendor-legacy.931694a1.js"],(function(t){"use strict";var d,e,o;return{setters:[function(t){d=t.e,e=t.o,o=t.G}],execute:function(){const a={class:"markdown-body"},n=[o('<h1>BackTop 返回顶部</h1><h3>介绍</h3><p>提供较长的页面快捷返回顶部功能。</p><h3>安装</h3><pre><code class="language-javascript">\nimport { createApp } from &#39;vue&#39;;\nimport { BackTop } from &#39;@nutui/nutui-taro&#39;;\n\nconst app = createApp();\napp.use(BackTop);\n\n</code></pre><h3>代码实例</h3><h3>基本用法</h3><pre><code class="language-html">&lt;nut-backtop height=&quot;100vh&quot;&gt;\n  &lt;template v-slot:content&gt;\n    &lt;div class=&quot;text-data&quot;&gt;我是测试数据1&lt;/div&gt;\n    &lt;div class=&quot;text-data&quot;&gt;我是测试数据2&lt;/div&gt;\n    &lt;div class=&quot;text-data&quot;&gt;我是测试数据3&lt;/div&gt;\n    &lt;div class=&quot;text-data&quot;&gt;我是测试数据4&lt;/div&gt;\n    &lt;div class=&quot;text-data&quot;&gt;我是测试数据5&lt;/div&gt;\n    &lt;div class=&quot;text-data&quot;&gt;我是测试数据6&lt;/div&gt;\n    ...\n  &lt;/template&gt;\n&lt;/nut-backtop&gt;\n</code></pre><h3>设置出现位置</h3><pre><code class="language-html">&lt;nut-backtop :distance=&quot;200&quot;&gt;&lt;/nut-backtop&gt;\n</code></pre><h3>自定义样式</h3><pre><code class="language-html">&lt;nut-backtop :distance=&quot;100&quot; :bottom=&quot;90&quot;&gt;&lt;div&gt;自定义内容&lt;/div&gt;&lt;/nut-backtop&gt;\n</code></pre><h3>click事件</h3><pre><code class="language-html">&lt;nut-backtop @click=&quot;handleClick&quot; &gt;&lt;/nut-backtop&gt;\n</code></pre><pre><code class="language-html">&lt;script&gt;\nexport default createDemo({\n  setup(props, { emit }) {\n    const handleClick = () =&gt; {\n      console.log(&#39;触发返回顶部&#39;);\n    };\n\n    return {\n      handleClick\n    };\n  }\n});\n&lt;/script&gt;\n</code></pre><h3>API</h3><h3>Prop</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>height</td><td>滚动区域的高度</td><td>String</td><td><code>100vh</code></td></tr><tr><td>bottom</td><td>距离页面底部距离</td><td>Number</td><td><code>20</code></td></tr><tr><td>right</td><td>距离页面右侧距离</td><td>Number</td><td><code>10</code></td></tr><tr><td>distance</td><td>页面垂直滚动多高后出现</td><td>Number</td><td><code>200</code></td></tr><tr><td>z-index</td><td>设置组件页面层级</td><td>Number</td><td><code>10</code></td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>按钮点击时触发事件</td><td>event: MouseEvent</td></tr></tbody></table>',20)];t("default",{setup:t=>(t,o)=>(e(),d("div",a,n))})}}}));
