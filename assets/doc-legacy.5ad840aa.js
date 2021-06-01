System.register(["./vendor-legacy.2cbae777.js"],(function(t){"use strict";var n,l,o;return{setters:[function(t){n=t.c,l=t.o,o=t.B}],execute:function(){const u={class:"markdown-body"},e=o('<h1>Layout 布局</h1><h3>介绍</h3><p>用于快速进行布局</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\nimport { Layout } from &#39;@nutui/nutui&#39;;\n\nconst app = createApp();\napp.use(Layout);\n</code></pre><h2>代码演示</h2><h3>基础用法</h3><pre><code class="language-html">&lt;nut-row&gt;\n  &lt;nut-col :span=&quot;24&quot;&gt;\n    &lt;div class=&quot;flex-content&quot;&gt;span:24&lt;/div&gt;\n  &lt;/nut-col&gt;\n&lt;/nut-row&gt;\n&lt;nut-row&gt;\n  &lt;nut-col :span=&quot;12&quot;&gt;\n    &lt;div class=&quot;flex-content&quot;&gt;span:12&lt;/div&gt;\n  &lt;/nut-col&gt;\n  &lt;nut-col :span=&quot;12&quot;&gt;\n    &lt;div class=&quot;flex-content flex-content-light&quot;&gt;span:12&lt;/div&gt;\n  &lt;/nut-col&gt;\n&lt;/nut-row&gt;\n&lt;nut-row&gt;\n  &lt;nut-col :span=&quot;8&quot;&gt;\n    &lt;div class=&quot;flex-content&quot;&gt;span:8&lt;/div&gt;\n  &lt;/nut-col&gt;\n  &lt;nut-col :span=&quot;8&quot;&gt;\n    &lt;div class=&quot;flex-content flex-content-light&quot;&gt;span:8&lt;/div&gt;\n  &lt;/nut-col&gt;\n  &lt;nut-col :span=&quot;8&quot;&gt;\n    &lt;div class=&quot;flex-content&quot;&gt;span:8&lt;/div&gt;\n  &lt;/nut-col&gt;\n&lt;/nut-row&gt;\n&lt;nut-row&gt;\n  &lt;nut-col :span=&quot;6&quot;&gt;\n    &lt;div class=&quot;flex-content&quot;&gt;span:6&lt;/div&gt;\n  &lt;/nut-col&gt;\n  &lt;nut-col :span=&quot;6&quot;&gt;\n    &lt;div class=&quot;flex-content flex-content-light&quot;&gt;span:6&lt;/div&gt;\n  &lt;/nut-col&gt;\n  &lt;nut-col :span=&quot;6&quot;&gt;\n    &lt;div class=&quot;flex-content&quot;&gt;span:6&lt;/div&gt;\n  &lt;/nut-col&gt;\n  &lt;nut-col :span=&quot;6&quot;&gt;\n    &lt;div class=&quot;flex-content&quot;&gt;span:6&lt;/div&gt;\n  &lt;/nut-col&gt;\n&lt;/nut-row&gt;\n</code></pre><h3>设置元素间距</h3><pre><code class="language-html">&lt;nut-row :gutter=&quot;10&quot;&gt;\n    &lt;nut-col :span=&quot;8&quot;&gt;\n        &lt;div class=&quot;flex-content&quot;&gt;span:8&lt;/div&gt;\n    &lt;/nut-col&gt;\n    &lt;nut-col :span=&quot;8&quot;&gt;\n        &lt;div class=&quot;flex-content flex-content-light&quot;&gt;span:8&lt;/div&gt;\n    &lt;/nut-col&gt;\n    &lt;nut-col :span=&quot;8&quot;&gt;\n        &lt;div class=&quot;flex-content&quot;&gt;span:8&lt;/div&gt;\n    &lt;/nut-col&gt;\n&lt;/nut-row&gt;   \n</code></pre><h3>Flex布局</h3><pre><code class="language-html">&lt;nut-row type=&quot;flex&quot; wrap=&quot;nowrap&quot;&gt;\n  &lt;nut-col :span=&quot;6&quot;&gt;\n    &lt;div class=&quot;flex-content&quot;&gt;span:6&lt;/div&gt;\n  &lt;/nut-col&gt;\n  &lt;nut-col :span=&quot;6&quot;&gt;\n    &lt;div class=&quot;flex-content flex-content-light&quot;&gt;span:6&lt;/div&gt;\n  &lt;/nut-col&gt;\n  &lt;nut-col :span=&quot;6&quot;&gt;\n    &lt;div class=&quot;flex-content&quot;&gt;span:6&lt;/div&gt;\n  &lt;/nut-col&gt;\n&lt;/nut-row&gt;\n&lt;nut-row type=&quot;flex&quot; justify=&quot;center&quot;&gt;\n  &lt;nut-col :span=&quot;6&quot;&gt;\n    &lt;div class=&quot;flex-content&quot;&gt;span:6&lt;/div&gt;\n  &lt;/nut-col&gt;\n  &lt;nut-col :span=&quot;6&quot;&gt;\n    &lt;div class=&quot;flex-content flex-content-light&quot;&gt;span:6&lt;/div&gt;\n  &lt;/nut-col&gt;\n  &lt;nut-col :span=&quot;6&quot;&gt;\n    &lt;div class=&quot;flex-content&quot;&gt;span:6&lt;/div&gt;\n  &lt;/nut-col&gt;\n&lt;/nut-row&gt;\n&lt;nut-row type=&quot;flex&quot; justify=&quot;end&quot;&gt;\n  &lt;nut-col :span=&quot;6&quot;&gt;\n    &lt;div class=&quot;flex-content&quot;&gt;span:6&lt;/div&gt;\n  &lt;/nut-col&gt;\n  &lt;nut-col :span=&quot;6&quot;&gt;\n    &lt;div class=&quot;flex-content flex-content-light&quot;&gt;span:6&lt;/div&gt;\n  &lt;/nut-col&gt;\n  &lt;nut-col :span=&quot;6&quot;&gt;\n    &lt;div class=&quot;flex-content&quot;&gt;span:6&lt;/div&gt;\n  &lt;/nut-col&gt;\n&lt;/nut-row&gt;\n&lt;nut-row type=&quot;flex&quot; justify=&quot;space-between&quot;&gt;\n  &lt;nut-col :span=&quot;6&quot;&gt;\n    &lt;div class=&quot;flex-content&quot;&gt;span:6&lt;/div&gt;\n  &lt;/nut-col&gt;\n  &lt;nut-col :span=&quot;6&quot;&gt;\n    &lt;div class=&quot;flex-content flex-content-light&quot;&gt;span:6&lt;/div&gt;\n  &lt;/nut-col&gt;\n  &lt;nut-col :span=&quot;6&quot;&gt;\n    &lt;div class=&quot;flex-content&quot;&gt;span:6&lt;/div&gt;\n  &lt;/nut-col&gt;\n&lt;/nut-row&gt;\n&lt;nut-row type=&quot;flex&quot; justify=&quot;space-around&quot;&gt;\n  &lt;nut-col :span=&quot;6&quot;&gt;\n    &lt;div class=&quot;flex-content&quot;&gt;span:6&lt;/div&gt;\n  &lt;/nut-col&gt;\n  &lt;nut-col :span=&quot;6&quot;&gt;\n    &lt;div class=&quot;flex-content flex-content-light&quot;&gt;span:6&lt;/div&gt;\n  &lt;/nut-col&gt;\n  &lt;nut-col :span=&quot;6&quot;&gt;\n    &lt;div class=&quot;flex-content&quot;&gt;span:6&lt;/div&gt;\n  &lt;/nut-col&gt;\n&lt;/nut-row&gt;\n</code></pre><h2>Prop</h2><h3>row</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>布局方式，可选值为flex</td><td>String</td><td>-</td></tr><tr><td>gutter</td><td>列元素之间的间距（单位为px）</td><td>String、Number</td><td>-</td></tr><tr><td>justify</td><td>Flex 主轴对齐方式，可选值为 start end center space-around space-between</td><td>String</td><td>start</td></tr><tr><td>align</td><td>Flex 交叉轴对齐方式，可选值为 flex-start center flex-end</td><td>String</td><td>flex-start</td></tr><tr><td>flex-wrap</td><td>Flex是否换行，可选值为 nowrap wrap reverse</td><td>String</td><td>nowrap</td></tr></tbody></table><h3>col</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>span</td><td>列元素宽度（共分为24份，例如设置一行3个，那么span值为8）</td><td>String、Number</td><td>24</td></tr><tr><td>offset</td><td>列元素偏移距离</td><td>String、Number</td><td>0</td></tr></tbody></table>',17);t("default",{expose:[],setup:t=>(t,o)=>(l(),n("div",u,[e]))})}}}));
