System.register(["./vendor-legacy.5bafa3ec.js"],(function(s){"use strict";var a,t,n;return{setters:[function(s){a=s.e,t=s.o,n=s.G}],execute:function(){const l={class:"markdown-body"},p=[n('<h1>BackTop 返回顶部</h1><h3>介绍</h3><p>提供较长的页面快捷返回顶部功能。</p><h3>安装</h3><pre><code class="language-javascript">\n<span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> { BackTop } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = createApp();\napp.use(BackTop);\n\n</code></pre><h3>代码实例</h3><h3>基本用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-backtop</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;100vh&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:content</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-data&quot;</span>&gt;</span>我是测试数据1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-data&quot;</span>&gt;</span>我是测试数据2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-data&quot;</span>&gt;</span>我是测试数据3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-data&quot;</span>&gt;</span>我是测试数据4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-data&quot;</span>&gt;</span>我是测试数据5<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-data&quot;</span>&gt;</span>我是测试数据6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    ...\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-backtop</span>&gt;</span>\n</code></pre><h3>设置出现位置</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-backtop</span> <span class="hljs-attr">:distance</span>=<span class="hljs-string">&quot;200&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-backtop</span>&gt;</span>\n</code></pre><h3>自定义样式</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-backtop</span> <span class="hljs-attr">:distance</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">:bottom</span>=<span class="hljs-string">&quot;90&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>自定义内容<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-backtop</span>&gt;</span>\n</code></pre><h3>click事件</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-backtop</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;handleClick&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-backtop</span>&gt;</span>\n</code></pre><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> createDemo({\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params">props, { emit }</span>)</span> {\n    <span class="hljs-keyword">const</span> handleClick = <span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;触发返回顶部&#39;</span>);\n    };\n\n    <span class="hljs-keyword">return</span> {\n      handleClick\n    };\n  }\n});\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</code></pre><h3>API</h3><h3>Prop</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>height</td><td>滚动区域的高度</td><td>String</td><td><code>100vh</code></td></tr><tr><td>bottom</td><td>距离页面底部距离</td><td>Number</td><td><code>20</code></td></tr><tr><td>right</td><td>距离页面右侧距离</td><td>Number</td><td><code>10</code></td></tr><tr><td>distance</td><td>页面垂直滚动多高后出现</td><td>Number</td><td><code>200</code></td></tr><tr><td>z-index</td><td>设置组件页面层级</td><td>Number</td><td><code>10</code></td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>按钮点击时触发事件</td><td>event: MouseEvent</td></tr></tbody></table>',20)];s("default",{setup:(s,{expose:n})=>(n({frontmatter:{}}),(s,n)=>(t(),a("div",l,p)))})}}}));
