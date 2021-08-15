System.register(["./vendor-legacy.931694a1.js"],(function(t){"use strict";var n,e,d;return{setters:[function(t){n=t.e,e=t.o,d=t.G}],execute:function(){const o={class:"markdown-body"},r=[d('<h1>Picker 选择器</h1><h3>介绍</h3><p>提供多个选项集合供用户选择其中一项。</p><h2>安装</h2><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\nimport { Picker } from &#39;@nutui/nutui&#39;;\n\nconst app = createApp();\napp.use(Picker);\n</code></pre><h2>代码演示</h2><h3>基础用法</h3><pre><code class="language-html">&lt;nut-cell title=&quot;请选择城市&quot; :desc=&quot;desc&quot; @click=&quot;open&quot;&gt;&lt;/nut-cell&gt;\n&lt;nut-picker\n    v-model:visible=&quot;show&quot;\n    :list-data=&quot;listData&quot;\n    title=&quot;城市选择&quot;\n    @confirm=&quot;confirm&quot; \n&gt;&lt;/nut-picker&gt;\n</code></pre><pre><code class="language-javascript">&lt;script&gt;\nexport default createDemo({\n  setup(props, { emit }) {\n    const show = ref(false);\n    const listData = [\n      &#39;南京市&#39;,\n      &#39;无锡市&#39;,\n      &#39;海北藏族自治区&#39;,\n      &#39;北京市&#39;,\n      &#39;连云港市&#39;,\n      &#39;浙江市&#39;,\n      &#39;江苏市&#39;\n    ];\n\n    return {\n      listData,\n      open: (index) =&gt; {\n        show.value = true;\n      },\n      confirm: (res) =&gt; {\n        desc.value = res;\n      }\n    };\n  }\n});\n&lt;/script&gt;\n</code></pre><h3>多列样式</h3><pre><code class="language-html">&lt;nut-cell title=&quot;请选择时间&quot; :desc=&quot;desc&quot; @click=&quot;open&quot;&gt;&lt;/nut-cell&gt;\n&lt;nut-picker\n    v-model:visible=&quot;show&quot;\n    :list-data=&quot;listData&quot;\n    title=&quot;多列选择&quot;\n    @confirm=&quot;confirm&quot;\n    @close=&quot;close&quot;\n&gt;&lt;/nut-picker&gt;\n</code></pre><pre><code class="language-javascript">&lt;script&gt;\nexport default createDemo({\n  setup(props, { emit }) {\n    const show = ref(false);\n    const listData = [\n      {\n        values: [&#39;周一&#39;, &#39;周二&#39;, &#39;周三&#39;, &#39;周四&#39;, &#39;周五&#39;],\n        defaultIndex: 2\n      },\n      // 第二列\n      {\n        values: [&#39;上午&#39;, &#39;下午&#39;, &#39;晚上&#39;],\n        defaultIndex: 1\n      }\n    ];\n\n    return {\n      listData,\n      open: (index) =&gt; {\n        show.value = true;\n      },\n      confirm: (res) =&gt; {\n        desc.value = res.join(&#39; &#39;);\n      }\n    };\n  }\n});\n&lt;/script&gt;\n</code></pre><h3>多级联动</h3><pre><code class="language-html">&lt;nut-cell title=&quot;地址&quot; :desc=&quot;desc&quot; @click=&quot;open&quot;&gt;&lt;/nut-cell&gt;\n&lt;nut-picker\n    v-model:visible=&quot;show&quot;\n    :list-data=&quot;listData&quot;\n    title=&quot;地址选择&quot;\n    @confirm=&quot;confirm&quot; \n&gt;&lt;/nut-picker&gt;\n</code></pre><pre><code class="language-javascript">&lt;script&gt;\nexport default createDemo({\n  setup(props, { emit }) {\n    const show = ref(false);\n    const listData = [\n      {\n        text: &#39;浙江&#39;,\n        children: [\n          {\n            text: &#39;杭州&#39;,\n            children: [{ text: &#39;西湖区&#39; }, { text: &#39;余杭区&#39; }]\n          },\n          {\n            text: &#39;温州&#39;,\n            children: [{ text: &#39;鹿城区&#39; }, { text: &#39;瓯海区&#39; }]\n          }\n        ]\n      },\n      {\n        text: &#39;福建&#39;,\n        children: [\n          {\n            text: &#39;福州&#39;,\n            children: [{ text: &#39;鼓楼区&#39; }, { text: &#39;台江区&#39; }]\n          },\n          {\n            text: &#39;厦门&#39;,\n            children: [{ text: &#39;思明区&#39; }, { text: &#39;海沧区&#39; }]\n          }\n        ]\n      }\n    ];\n\n    return {\n      listData,\n      open: (index) =&gt; {\n        show.value = true;\n      },\n      confirm: (res) =&gt; {\n        desc.value = res.join(&#39; &#39;);\n      }\n    };\n  }\n});\n&lt;/script&gt;\n</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model:visible</td><td>是否可见</td><td>Boolean</td><td>false</td></tr><tr><td>title</td><td>设置标题</td><td>String</td><td>-</td></tr><tr><td>cancel-text</td><td>取消按钮文案</td><td>String</td><td>取消</td></tr><tr><td>ok-text</td><td>确定按钮文案</td><td>String</td><td>确定</td></tr><tr><td>list-data</td><td>列表数据</td><td>Array</td><td>-</td></tr><tr><td>default-value-index</td><td>初始选中项的索引，默认为 0</td><td>number</td><td>0</td></tr><tr><td>teleport</td><td>指定挂载节点</td><td>String</td><td>“body”</td></tr><tr><td>close-on-click-overlay</td><td>点击蒙层是否关闭对话框</td><td>Boolean</td><td>false</td></tr><tr><td>lock-scroll</td><td>背景是否锁定</td><td>Boolean</td><td>false</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>close</td><td>关闭弹窗时触发</td><td>event: Event</td></tr><tr><td>confirm</td><td>点击确认时候触发</td><td>event: Event</td></tr><tr><td>change</td><td>改变时触发</td><td>val</td></tr></tbody></table>',20)];t("default",{setup:t=>(t,d)=>(e(),n("div",o,r))})}}}));
