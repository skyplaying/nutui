System.register(["./vendor-legacy.5bafa3ec.js"],(function(s){"use strict";var a,n,t;return{setters:[function(s){a=s.e,n=s.o,t=s.G}],execute:function(){const l={class:"markdown-body"},p=[t('<h1>Calendar 日历</h1><h3>介绍</h3><p>日历，可平铺/弹窗展示</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-comment">// vue</span>\n<span class="hljs-keyword">import</span> { Calendar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;\n<span class="hljs-comment">// taro</span>\n<span class="hljs-keyword">import</span> { Calendar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = createApp();\napp.use(Calendar);\n</code></pre><h2>代码演示</h2><h3>基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span>\n  <span class="hljs-attr">:showIcon</span>=<span class="hljs-string">&quot;true&quot;</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;选择单个日期&quot;</span>\n  <span class="hljs-attr">:desc</span>=<span class="hljs-string">&quot;date ? `${date} ${dateWeek}` : &#39;请选择&#39;&quot;</span>\n  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;openSwitch(&#39;isVisible&#39;)&quot;</span>\n&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-calendar</span>\n  <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;isVisible&quot;</span>\n  <span class="hljs-attr">:default-value</span>=<span class="hljs-string">&quot;date&quot;</span>\n  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;closeSwitch(&#39;isVisible&#39;)&quot;</span>\n  @<span class="hljs-attr">choose</span>=<span class="hljs-string">&quot;setChooseValue&quot;</span>\n  <span class="hljs-attr">:start-date</span>=<span class="hljs-string">&quot;`2019-10-11`&quot;</span>\n  <span class="hljs-attr">:end-date</span>=<span class="hljs-string">&quot;`2022-11-11`&quot;</span>\n&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-calendar</span>&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> state: TestCalendarState = reactive({\n      <span class="hljs-attr">isVisible</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">date</span>: <span class="hljs-string">&#39;&#39;</span>,\n      <span class="hljs-attr">dateWeek</span>: <span class="hljs-string">&#39;&#39;</span>\n    });\n    <span class="hljs-keyword">const</span> openSwitch = <span class="hljs-function"><span class="hljs-params">param</span> =&gt;</span> {\n      state[<span class="hljs-string">`<span class="hljs-subst">${param}</span>`</span>] = <span class="hljs-literal">true</span>;\n    };\n    <span class="hljs-keyword">const</span> closeSwitch = <span class="hljs-function"><span class="hljs-params">param</span> =&gt;</span> {\n      state[<span class="hljs-string">`<span class="hljs-subst">${param}</span>`</span>] = <span class="hljs-literal">false</span>;\n    };\n    <span class="hljs-keyword">const</span> setChooseValue = <span class="hljs-function"><span class="hljs-params">param</span> =&gt;</span> {\n      state.date = param[<span class="hljs-number">3</span>];\n      state.dateWeek = param[<span class="hljs-number">4</span>];\n    };\n    <span class="hljs-keyword">return</span> {\n      ...toRefs(state),\n      openSwitch,\n      closeSwitch,\n      setChooseValue\n    };\n  }\n</code></pre><h3>区间选择</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span>\n  <span class="hljs-attr">:showIcon</span>=<span class="hljs-string">&quot;true&quot;</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;选择日期区间&quot;</span>\n  <span class="hljs-attr">:desc</span>=<span class="hljs-string">&quot;date ? `${date[0]}至${date[1]}` : &#39;请选择&#39;&quot;</span>\n  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;openSwitch(&#39;isVisible&#39;)&quot;</span>\n&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-calendar</span>\n  <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;isVisible&quot;</span>\n  <span class="hljs-attr">:default-value</span>=<span class="hljs-string">&quot;date&quot;</span>\n  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;range&quot;</span>\n  <span class="hljs-attr">:start-date</span>=<span class="hljs-string">&quot;`2019-12-22`&quot;</span>\n  <span class="hljs-attr">:end-date</span>=<span class="hljs-string">&quot;`2021-01-08`&quot;</span>\n  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;closeSwitch(&#39;isVisible&#39;)&quot;</span>\n  @<span class="hljs-attr">choose</span>=<span class="hljs-string">&quot;setChooseValue&quot;</span>\n&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-calendar</span>&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> state: TestCalendarState = reactive({\n      <span class="hljs-attr">date</span>: [<span class="hljs-string">&#39;2019-12-23&#39;</span>, <span class="hljs-string">&#39;2019-12-26&#39;</span>],\n      <span class="hljs-attr">isVisible2</span>: <span class="hljs-literal">true</span>\n    });\n    <span class="hljs-keyword">const</span> openSwitch = <span class="hljs-function"><span class="hljs-params">param</span> =&gt;</span> {\n      state[<span class="hljs-string">`<span class="hljs-subst">${param}</span>`</span>] = <span class="hljs-literal">true</span>;\n    };\n    <span class="hljs-keyword">const</span> closeSwitch = <span class="hljs-function"><span class="hljs-params">param</span> =&gt;</span> {\n      state[<span class="hljs-string">`<span class="hljs-subst">${param}</span>`</span>] = <span class="hljs-literal">false</span>;\n    };\n    <span class="hljs-keyword">const</span> setChooseValue= <span class="hljs-function"><span class="hljs-params">param</span> =&gt;</span> {\n      state.date = [...[param[<span class="hljs-number">0</span>][<span class="hljs-number">3</span>], param[<span class="hljs-number">1</span>][<span class="hljs-number">3</span>]]];\n    };\n    <span class="hljs-keyword">return</span> {\n      ...toRefs(state),\n      openSwitch,\n      closeSwitch,\n      setChooseValue,\n    };\n  }\n</code></pre><h3>自定义日历-自动回填</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span>\n  <span class="hljs-attr">:showIcon</span>=<span class="hljs-string">&quot;true&quot;</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;选择日期&quot;</span>\n  <span class="hljs-attr">:desc</span>=<span class="hljs-string">&quot;date ? date : &#39;请选择&#39;&quot;</span>\n  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;openSwitch(&#39;isVisible&#39;)&quot;</span>\n&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-calendar</span>\n  <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;isVisible&quot;</span>\n  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;closeSwitch(&#39;isVisible&#39;)&quot;</span>\n  @<span class="hljs-attr">choose</span>=<span class="hljs-string">&quot;setChooseValue&quot;</span>\n  <span class="hljs-attr">:start-date</span>=<span class="hljs-string">&quot;null&quot;</span>\n  <span class="hljs-attr">:end-date</span>=<span class="hljs-string">&quot;null&quot;</span>\n  <span class="hljs-attr">:is-auto-back-fill</span>=<span class="hljs-string">&quot;true&quot;</span>\n&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-calendar</span>&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> state: TestCalendarState = reactive({\n      <span class="hljs-attr">date</span>: <span class="hljs-string">&#39;&#39;</span>,\n      <span class="hljs-attr">isVisible</span>: <span class="hljs-literal">false</span>\n    });\n    <span class="hljs-keyword">const</span> openSwitch = <span class="hljs-function"><span class="hljs-params">param</span> =&gt;</span> {\n      state[<span class="hljs-string">`<span class="hljs-subst">${param}</span>`</span>] = <span class="hljs-literal">true</span>;\n    };\n    <span class="hljs-keyword">const</span> closeSwitch = <span class="hljs-function"><span class="hljs-params">param</span> =&gt;</span> {\n      state[<span class="hljs-string">`<span class="hljs-subst">${param}</span>`</span>] = <span class="hljs-literal">false</span>;\n    };\n     <span class="hljs-keyword">const</span> setChooseValue = <span class="hljs-function"><span class="hljs-params">param</span> =&gt;</span> {\n      state.date= param[<span class="hljs-number">3</span>];\n    };\n    <span class="hljs-keyword">return</span> {\n      ...toRefs(state),\n      setChooseValue\n    };\n  }\n</code></pre><h3>平铺展示</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;test-calendar-wrapper&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-calendar</span>\n    <span class="hljs-attr">:poppable</span>=<span class="hljs-string">&quot;false&quot;</span>\n    <span class="hljs-attr">:is-auto-back-fill</span>=<span class="hljs-string">&quot;true&quot;</span>\n    <span class="hljs-attr">:default-value</span>=<span class="hljs-string">&quot;date&quot;</span>\n    @<span class="hljs-attr">choose</span>=<span class="hljs-string">&quot;setChooseValue&quot;</span>\n  &gt;</span>\n  &lt;/nut-calendar\n&gt;<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> state: TestCalendarState = reactive({\n      <span class="hljs-attr">date</span>: <span class="hljs-string">&#39;2020-07-08&#39;</span>\n    });\n    <span class="hljs-keyword">const</span> setChooseValue = <span class="hljs-function"><span class="hljs-params">param</span> =&gt;</span> {\n      state.date = param[<span class="hljs-number">3</span>];\n    };\n    <span class="hljs-keyword">return</span> {\n      ...toRefs(state),\n      setChooseValue\n    };\n  }\n</code></pre><h3>基础用法</h3><pre><code class="language-html">\n</code></pre><pre><code class="language-javascript"></code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model:visible</td><td>是否可见</td><td>Boolean</td><td>false</td></tr><tr><td>type</td><td>类型，日期选择’one’，区间选择’range’</td><td>String</td><td>‘one’</td></tr><tr><td>poppable</td><td>是否弹窗状态展示</td><td>Boolean</td><td>true</td></tr><tr><td>is-auto-back-fill</td><td>自动回填</td><td>Boolean</td><td>false</td></tr><tr><td>title</td><td>显示标题</td><td>String</td><td>‘日期选择’</td></tr><tr><td>default-value</td><td>默认值，日期选择 String 格式，区间选择 Array 格式</td><td>String 、 Array</td><td>null</td></tr><tr><td>start-date</td><td>开始日期， 如果不限制开始日期传 null</td><td>String</td><td>今天</td></tr><tr><td>end-date</td><td>结束日期，如果不限制结束日期传 null</td><td>String</td><td>距离今天 365 天</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>choose</td><td>选择之后或是点击确认按钮触发</td><td>日期数组（包含年月日和星期）</td></tr><tr><td>close</td><td>关闭时触发</td><td>-</td></tr></tbody></table>',26)];s("default",{setup:(s,{expose:t})=>(t({frontmatter:{}}),(s,t)=>(n(),a("div",l,p)))})}}}));
