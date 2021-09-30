import{e as a,o as t,G as n}from"./vendor.36d75c4a.js";const l={class:"markdown-body"},p=n(`<h1>BackTop \u8FD4\u56DE\u9876\u90E8</h1><h3>\u4ECB\u7ECD</h3><p>\u63D0\u4F9B\u8F83\u957F\u7684\u9875\u9762\u5FEB\u6377\u8FD4\u56DE\u9876\u90E8\u529F\u80FD\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript">
<span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { BackTop,Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(BackTop);
app.use(Icon);

</code></pre><h3>\u4EE3\u7801\u5B9E\u4F8B</h3><h3>\u57FA\u672C\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-backtop</span>  <span class="hljs-attr">el-id</span>=<span class="hljs-string">&quot;elId&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-backtop</span>&gt;</span>
</code></pre><h3>\u8BBE\u7F6E\u51FA\u73B0\u4F4D\u7F6E</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-backtop</span> <span class="hljs-attr">:distance</span>=<span class="hljs-string">&quot;200&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-backtop</span>&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u6837\u5F0F</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-backtop</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;handleClick&quot;</span> <span class="hljs-attr">el-id</span>=<span class="hljs-string">&quot;elId&quot;</span> <span class="hljs-attr">:distance</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">:bottom</span>=<span class="hljs-string">&quot;90&quot;</span> &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u65E0<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-backtop</span>&gt;</span>
</code></pre><h3>click\u4E8B\u4EF6</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-backtop</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;handleClick&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-backtop</span>&gt;</span>
</code></pre><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> createDemo({
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params">props, { emit }</span>)</span> {
    <span class="hljs-keyword">const</span> handleClick = <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;\u89E6\u53D1\u8FD4\u56DE\u9876\u90E8&#39;</span>);
    };

    <span class="hljs-keyword">return</span> {
      handleClick
    };
  }
});
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre><h3>API</h3><h3>Prop</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>el-id</td><td>\u83B7\u53D6\u76D1\u542C\u5143\u7D20\u7684\u7236\u7EA7\u5143\u7D20</td><td>String</td><td>-</td></tr><tr><td>bottom</td><td>\u8DDD\u79BB\u9875\u9762\u5E95\u90E8\u8DDD\u79BB</td><td>Number</td><td><code>20</code></td></tr><tr><td>right</td><td>\u8DDD\u79BB\u9875\u9762\u53F3\u4FA7\u8DDD\u79BB</td><td>Number</td><td><code>10</code></td></tr><tr><td>distance</td><td>\u9875\u9762\u5782\u76F4\u6EDA\u52A8\u591A\u9AD8\u540E\u51FA\u73B0</td><td>Number</td><td><code>200</code></td></tr><tr><td>z-index</td><td>\u8BBE\u7F6E\u7EC4\u4EF6\u9875\u9762\u5C42\u7EA7</td><td>Number</td><td><code>10</code></td></tr><tr><td>is-animation</td><td>\u662F\u5426\u6709\u52A8\u753B,\u548Cduration\u53C2\u6570\u4E92\u65A5</td><td>Boolean</td><td><code>true</code></td></tr><tr><td>duration</td><td>\u8BBE\u7F6E\u52A8\u753B\u6301\u7EED\u65F6\u95F4</td><td>Number</td><td><code>1000</code></td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u6309\u94AE\u70B9\u51FB\u65F6\u89E6\u53D1\u4E8B\u4EF6</td><td>event: MouseEvent</td></tr></tbody></table>`,20),c=[p],j={setup(e,{expose:s}){return s({frontmatter:{}}),(o,h)=>(t(),a("div",l,c))}};export{j as default};
