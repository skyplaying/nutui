System.register(["./vendor-legacy.466e82dd.js"],(function(t){"use strict";var e,l,d;return{setters:[function(t){e=t.c,l=t.o,d=t.C}],execute:function(){const n={class:"markdown-body"},o=d('<h1>Cell 单元格</h1><h3>介绍</h3><p>列表项，可组成列表。</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\nimport { Cell } from &#39;@nutui/nutui&#39;;\n\nconst app = createApp();\napp.use(Cell);\n\n</code></pre><h2>代码示例</h2><h3>基本用法</h3><pre><code class="language-html">&lt;nut-cell title=&quot;我是标题&quot; desc=&quot;描述文字&quot;&gt;&lt;/nut-cell&gt;\n&lt;nut-cell title=&quot;我是标题&quot; sub-title=&quot;副标题描述&quot; desc=&quot;描述文字&quot;&gt;&lt;/nut-cell&gt;\n&lt;nut-cell title=&quot;点击测试&quot; @click=&quot;testClick&quot;&gt;&lt;/nut-cell&gt;\n</code></pre><pre><code class="language-javascript">// ...\nimport { ref } from &#39;vue&#39;;\nimport { Toast } from &#39;@nutui/nutui&#39;;\nexport default {\n  setup() {\n      const switchChecked = ref(true);\n      const testClick = (event) =&gt; {\n        Toast.text(&#39;点击事件&#39;)\n      };\n      return { testClick,switchChecked };\n  }\n}\n// ...\n</code></pre><h3>直接使用插槽</h3><pre><code class="language-html"> &lt;nut-cell title=&quot;我是标题&quot; desc=&quot;描述文字&quot;&gt;\n  &lt;div&gt;自定义内容&lt;/div&gt;\n &lt;/nut-cell&gt;  \n</code></pre><h3>链接 | 分组用法</h3><pre><code class="language-html">&lt;nut-cell-group title=&quot;链接 | 分组用法&quot;&gt;\n  &lt;nut-cell title=&quot;链接&quot; is-link&gt;&lt;/nut-cell&gt;\n  &lt;nut-cell title=&quot;URL 跳转&quot; desc=&quot;https://jd.com&quot; is-link url=&quot;https://jd.com&quot;&gt;&lt;/nut-cell&gt;\n  &lt;nut-cell title=&quot;路由跳转 ’/‘ &quot; to=&quot;/&quot;&gt;&lt;/nut-cell&gt;\n&lt;/nut-cell-group&gt;\n</code></pre><h3>自定义右侧箭头区域</h3><pre><code class="language-html">&lt;nut-cell-group title=&quot;自定义右侧箭头区域&quot;&gt;\n  &lt;nut-cell title=&quot;Switch&quot;&gt;\n    &lt;template v-slot:link&gt;\n      &lt;nut-switch v-model=&quot;switchChecked&quot; /&gt;\n    &lt;/template&gt;\n  &lt;/nut-cell&gt;\n&lt;/nut-cell-group&gt;\n</code></pre><h3>单元格展示图标</h3><pre><code class="language-html">&lt;nut-cell title=&quot;姓名&quot; icon=&quot;my&quot; desc=&quot;张三&quot;&gt;&lt;/nut-cell&gt;\n</code></pre><h3>只展示 desc ，可通过 desc-text-align 调整内容位置</h3><pre><code class="language-html">&lt;nut-cell desc-text-align=&quot;left&quot; desc=&quot;张三&quot;&gt;&lt;/nut-cell&gt;\n</code></pre><h2>API</h2><h3>Prop</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题名称</td><td>String</td><td>-</td></tr><tr><td>sub-title</td><td>左侧副标题</td><td>String</td><td>-</td></tr><tr><td>desc</td><td>右侧描述</td><td>String</td><td>-</td></tr><tr><td>desc-text-align</td><td>右侧描述文本对齐方式 <a href="https://www.w3school.com.cn/cssref/pr_text_text-align.asp">text-align</a></td><td>String</td><td>right</td></tr><tr><td>is-link</td><td>是否展示右侧箭头并开启点击反馈</td><td>Boolean</td><td>false</td></tr><tr><td>icon</td><td>左侧 <a href="#/icon">图标名称</a> 或图片链接</td><td>String</td><td>-</td></tr><tr><td>url</td><td>点击后跳转的链接地址</td><td>String</td><td>-</td></tr><tr><td>to</td><td>点击后跳转的目标路由对象，同 vue-router 的 <a href="https://router.vuejs.org/zh/api/#to">to 属性</a> 属性</td><td>String</td><td>-</td></tr><tr><td>replace</td><td>是否在跳转时替换当前页面历史</td><td>Boolean</td><td>false</td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击事件</td><td>event:Event</td></tr></tbody></table>',24);t("default",{setup:t=>(t,d)=>(l(),e("div",n,[o]))})}}}));
