import{c as t,o as d,C as e}from"./vendor.ed841bd5.js";const o={class:"markdown-body"},a=e('<h1>TextArea 文本域</h1><h3>介绍</h3><p>文本框内输入或编辑文字，支持限制输入数量。</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\n//vue\nimport { TextArea } from &#39;@nutui/nutui&#39;;\n//mp\nimport { TextArea } from &#39;@nutui/nutui@taro&#39;;\n\nconst app = createApp();\napp.use(TextArea);\n\n</code></pre><h2>代码演示</h2><h3>基础用法</h3><pre><code class="language-html">&lt;nut-textarea v-model=&quot;value&quot; /&gt;\n</code></pre><pre><code class="language-javascript">import { ref } from &#39;vue&#39;;\n\nexport default {\n  setup() {\n    const value = ref(&#39;&#39;);\n    return { value };\n  },\n};\n</code></pre><h3>显示字数统计</h3><pre><code class="language-html">&lt;nut-textarea v-model=&quot;value&quot; limit-show max-length=&quot;20&quot; /&gt;\n</code></pre><h3>高度自定义，拉伸</h3><pre><code class="language-html">&lt;nut-textarea v-model=&quot;value&quot; rows=&quot;10&quot; autosize /&gt;\n</code></pre><h3>直读、禁用</h3><pre><code class="language-html">&lt;nut-textarea readonly model-value=&quot;textarea直读状态&quot; /&gt;\n&lt;nut-textarea disabled model-value=&quot;textarea禁用状态&quot; limit-show max-length=&quot;20&quot; /&gt;\n</code></pre><h3>Prop</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>输入值，支持双向绑定</td><td>String</td><td>-</td></tr><tr><td>placeholder</td><td>设置占位提示文字</td><td>String</td><td><code>&#39;请输入内容&#39;</code></td></tr><tr><td>max-length</td><td>限制最长输入字符</td><td>String、Number</td><td>-</td></tr><tr><td>rows</td><td>textarea的高度</td><td>String、Number</td><td><code>2</code></td></tr><tr><td>limit-show</td><td>textarea是否展示输入字符。须配合<code>max-length</code>使用</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>autosize</td><td>高度是否可拉伸</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>text-align</td><td>文本位置,可选值<code>left</code>,<code>center</code>,<code>right</code></td><td>String</td><td><code>left</code></td></tr><tr><td>readonly</td><td>只读属性</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>disabled</td><td>禁用属性</td><td>Boolean</td><td><code>false</code></td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>输入内容时触发</td><td>val</td></tr><tr><td>focus</td><td>聚焦时触发</td><td>val</td></tr><tr><td>blur</td><td>失焦时触发</td><td>val</td></tr></tbody></table>',19),r={expose:[],setup:e=>(e,r)=>(d(),t("div",o,[a]))};export default r;
