System.register(["./vendor-legacy.5bafa3ec.js"],(function(s){"use strict";var a,t,n;return{setters:[function(s){a=s.e,t=s.o,n=s.G}],execute:function(){const l={class:"markdown-body"},p=[n('<h1>Drag 拖拽</h1><h3>介绍</h3><p>实现可拖拽的任意元素</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> { Drag } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = createApp();\napp.use(Drag);\n</code></pre><h2>基本用法</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-drag</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;touch-dom&quot;</span>&gt;</span>可点击，可拖拽<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-drag</span>&gt;</span>\n</code></pre><h2>限制拖拽方向</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-drag</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;x&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;touch-dom&quot;</span>&gt;</span>只能在X轴拖动<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-drag</span>&gt;</span>\n</code></pre><h2>自动吸边</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-drag</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;x&quot;</span> <span class="hljs-attr">:attract</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;touch-dom&quot;</span>&gt;</span>拖动我<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-drag</span>&gt;</span>\n</code></pre><h2>限制拖拽边界</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-drag</span>\n  <span class="hljs-attr">:boundary</span>=<span class="hljs-string">&quot;{ top: 401, left: 9, bottom: bottom(), right: right() }&quot;</span>\n  <span class="hljs-attr">:attract</span>=<span class="hljs-string">&quot;true&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;touch-dom&quot;</span>&gt;</span>拖动我<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-drag</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">right</span>(<span class="hljs-params"></span>) </span>{\n      <span class="hljs-keyword">return</span> <span class="hljs-built_in">document</span>.documentElement.clientWidth - <span class="hljs-number">300</span> - <span class="hljs-number">9</span>;\n    }\n    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bottom</span>(<span class="hljs-params"></span>) </span>{\n      <span class="hljs-keyword">return</span> <span class="hljs-built_in">document</span>.documentElement.clientHeight - <span class="hljs-number">559</span>;\n    }\n    <span class="hljs-keyword">return</span> {\n      right,\n      bottom\n    };\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</code></pre><h2>Prop</h2><table><thead><tr><th style="text-align:left;">字段</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">attract</td><td style="text-align:left;">是否开启自动吸边</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">direction</td><td style="text-align:left;">拖拽元素的拖拽方向限制，<strong>x</strong>/<strong>y</strong>/<strong>all</strong>三选一</td><td style="text-align:left;">String</td><td style="text-align:left;">‘all’</td></tr><tr><td style="text-align:left;">boundary</td><td style="text-align:left;">拖拽元素的拖拽边界</td><td style="text-align:left;">Object</td><td style="text-align:left;">{top: 0,left: 0,right: 0,bottom: 0}</td></tr></tbody></table>',15)];s("default",{setup:(s,{expose:n})=>(n({frontmatter:{}}),(s,n)=>(t(),a("div",l,p)))})}}}));
