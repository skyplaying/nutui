import{e as s,o as a,G as n}from"./vendor.f7062dc0.js";const t={class:"markdown-body"},l=[n('<h1>Datepicker 日期选择器</h1><h3>介绍</h3><p>时间选择器，支持日期、年月、时分等维度，通常与弹出层组件配合使用。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> { DatePicker } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = createApp();\napp.use(DatePicker);\n</code></pre><h2>代码演示</h2><h3>日期选择-每列不显示中文</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-datepicker</span>\n    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentDate&quot;</span>\n    @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;confirm&quot;</span>\n    <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;show&quot;</span>\n    <span class="hljs-attr">:is-show-chinese</span>=<span class="hljs-string">&quot;false&quot;</span>\n&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-datepicker</span>&gt;</span> \n</code></pre><pre><code class="language-javascript">&lt;script&gt;\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> createDemo({\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params">props, { emit }</span>)</span> {\n    <span class="hljs-keyword">const</span> show = ref(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> desc = ref(<span class="hljs-string">&#39;2020-1-1&#39;</span>);\n\n    <span class="hljs-keyword">return</span> {\n      show,\n      desc\n      <span class="hljs-attr">open</span>: <span class="hljs-function">(<span class="hljs-params">index</span>) =&gt;</span> {\n        show.value = <span class="hljs-literal">true</span>;\n      },\n      <span class="hljs-attr">confirm</span>: <span class="hljs-function">(<span class="hljs-params">res</span>) =&gt;</span> {\n        desc.value = val.join(<span class="hljs-string">&#39;-&#39;</span>);\n      }\n    };\n  }\n});\n&lt;/script&gt;\n</code></pre><h3>日期选择-限制开始结束时间</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-datepicker</span>\n    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentDate&quot;</span>\n    <span class="hljs-attr">:min-date</span>=<span class="hljs-string">&quot;minDate&quot;</span>\n    <span class="hljs-attr">:max-date</span>=<span class="hljs-string">&quot;maxDate&quot;</span>\n    @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;confirm&quot;</span>\n    <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;show&quot;</span>\n    <span class="hljs-attr">:is-show-chinese</span>=<span class="hljs-string">&quot;false&quot;</span>\n&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-datepicker</span>&gt;</span> \n</code></pre><pre><code class="language-javascript">&lt;script&gt;\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> createDemo({\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params">props, { emit }</span>)</span> {\n    <span class="hljs-keyword">const</span> show = ref(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> desc = ref(<span class="hljs-string">&#39;2020-1-1&#39;</span>);\n\n    <span class="hljs-keyword">return</span> {\n      show,\n      desc,\n      <span class="hljs-attr">minDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">2020</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>),\n      <span class="hljs-attr">maxDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">2025</span>, <span class="hljs-number">10</span>, <span class="hljs-number">1</span>),\n      <span class="hljs-attr">open</span>: <span class="hljs-function">(<span class="hljs-params">index</span>) =&gt;</span> {\n        show.value = <span class="hljs-literal">true</span>;\n      },\n      <span class="hljs-attr">confirm</span>: <span class="hljs-function">(<span class="hljs-params">res</span>) =&gt;</span> {\n        desc.value = val.join(<span class="hljs-string">&#39;-&#39;</span>);\n      }\n    };\n  }\n});\n&lt;/script&gt;\n</code></pre><h3>日期时间-限制开始结束时间（有默认值）</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-datepicker</span>\n    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentDate&quot;</span>\n    <span class="hljs-attr">:min-date</span>=<span class="hljs-string">&quot;minDate&quot;</span>\n    <span class="hljs-attr">:max-date</span>=<span class="hljs-string">&quot;maxDate&quot;</span>\n    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;datetime&quot;</span>\n    @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;confirm&quot;</span>\n    <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;show&quot;</span> \n&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-datepicker</span>&gt;</span> \n</code></pre><pre><code class="language-javascript">&lt;script&gt;\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> createDemo({\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params">props, { emit }</span>)</span> {\n    <span class="hljs-keyword">const</span> show = ref(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> desc = ref(<span class="hljs-string">&#39;2020年-1月-1日-0时-0分&#39;</span>);\n\n    <span class="hljs-keyword">return</span> {\n      show,\n      desc,\n      <span class="hljs-attr">minDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">2020</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>),\n      <span class="hljs-attr">maxDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">2025</span>, <span class="hljs-number">10</span>, <span class="hljs-number">1</span>),\n      <span class="hljs-attr">open</span>: <span class="hljs-function">(<span class="hljs-params">index</span>) =&gt;</span> {\n        show.value = <span class="hljs-literal">true</span>;\n      },\n      <span class="hljs-attr">confirm</span>: <span class="hljs-function">(<span class="hljs-params">res</span>) =&gt;</span> {\n        desc.value = val.join(<span class="hljs-string">&#39;-&#39;</span>);\n      }\n    };\n  }\n});\n&lt;/script&gt;\n</code></pre><h3>时间选择-12小时制</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-datepicker</span>\n    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentDate&quot;</span>\n    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;time&quot;</span>\n    <span class="hljs-attr">:min-date</span>=<span class="hljs-string">&quot;minDate&quot;</span>\n    <span class="hljs-attr">:max-date</span>=<span class="hljs-string">&quot;maxDate&quot;</span>\n    <span class="hljs-attr">:is-use12-hours</span>=<span class="hljs-string">&quot;true&quot;</span>\n    @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;confirm&quot;</span>\n    <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;show&quot;</span>\n&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-datepicker</span>&gt;</span>\n</code></pre><h3>时间选择-分钟数递增步长设置</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-datepicker</span>\n    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentDate&quot;</span>\n    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;time&quot;</span>\n    <span class="hljs-attr">:minute-step</span>=<span class="hljs-string">&quot;5&quot;</span>\n    <span class="hljs-attr">:min-date</span>=<span class="hljs-string">&quot;minDate&quot;</span>\n    <span class="hljs-attr">:max-date</span>=<span class="hljs-string">&quot;maxDate&quot;</span>\n    <span class="hljs-attr">:is-use12-hours</span>=<span class="hljs-string">&quot;true&quot;</span>\n    @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;confirm&quot;</span>\n    <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;show&quot;</span>\n&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-datepicker</span>&gt;</span>\n</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>初始值</td><td>Date</td><td><code>null</code></td></tr><tr><td>v-model:visible</td><td>是否可见</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>type</td><td>类型，日期’date’， 日期时间’datetime’，时间’time’</td><td>String</td><td><code>&#39;date&#39;</code></td></tr><tr><td>is-use12-hours</td><td>是否十二小时制度，只限类型为’time’时使用</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>minute-step</td><td>分钟步进值</td><td>Number</td><td><code>1</code></td></tr><tr><td>is-show-chinese</td><td>每列是否展示中文</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>title</td><td>设置标题</td><td>String</td><td><code>null</code></td></tr><tr><td>min-date</td><td>开始日期</td><td>Date</td><td><code>十年前</code></td></tr><tr><td>max-date</td><td>结束日期</td><td>Date</td><td><code>十年后</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>confirm</td><td>点击确定按钮时触发</td><td>event: Event</td></tr><tr><td>close</td><td>关闭时触发</td><td>event: Event</td></tr></tbody></table>',24)],p={setup:(n,{expose:p})=>(p({frontmatter:{}}),(n,p)=>(a(),s("div",t,l)))};export{p as default};
