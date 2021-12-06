import{e as a,o as t,y as n}from"./vendor.js";const l={class:"markdown-body"},p=n(`<h1>Tag \u6807\u7B7E</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u6807\u8BB0\u548C\u5206\u7C7B\u7684\u6807\u7B7E\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript">
<span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">// vue</span>
<span class="hljs-keyword">import</span> { Tag } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">// taro</span>
<span class="hljs-keyword">import</span> { Tag } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Tag);

</code></pre><h3>\u4EE3\u7801\u5B9E\u4F8B</h3><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"> <span class="hljs-tag">&lt;<span class="hljs-name">nut-tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u6807\u7B7E<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tag</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">nut-tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>\u6807\u7B7E<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tag</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">nut-tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>\u6807\u7B7E<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tag</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">nut-tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>\u6807\u7B7E<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tag</span>&gt;</span>
</code></pre><h3>\u7A7A\u5FC3\u6837\u5F0F</h3><pre><code class="language-html"> <span class="hljs-tag">&lt;<span class="hljs-name">nut-tag</span> <span class="hljs-attr">plain</span>&gt;</span>\u6807\u7B7E<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tag</span>&gt;</span>
</code></pre><h3>\u5706\u89D2\u6837\u5F0F</h3><pre><code class="language-html"> <span class="hljs-tag">&lt;<span class="hljs-name">nut-tag</span> <span class="hljs-attr">round</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u6807\u7B7E<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tag</span>&gt;</span>
</code></pre><h3>\u6807\u8BB0\u6837\u5F0F</h3><pre><code class="language-html"> <span class="hljs-tag">&lt;<span class="hljs-name">nut-tag</span> <span class="hljs-attr">mark</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u6807\u7B7E<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tag</span>&gt;</span>
</code></pre><h3>\u53EF\u5173\u95ED\u6807\u7B7E</h3><pre><code class="language-html"> <span class="hljs-tag">&lt;<span class="hljs-name">nut-tag</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">closeable</span>  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u6807\u7B7E<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tag</span>&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u989C\u8272</h3><pre><code class="language-html"> <span class="hljs-tag">&lt;<span class="hljs-name">nut-tag</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#FA685D&quot;</span>&gt;</span>\u6807\u7B7E<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tag</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">nut-tag</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#E9E9E9&quot;</span> <span class="hljs-attr">text-color</span>=<span class="hljs-string">&quot;#999999&quot;</span>&gt;</span>\u6807\u7B7E<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tag</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">nut-tag</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#FA2400&quot;</span> <span class="hljs-attr">plain</span>&gt;</span>\u6807\u7B7E<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tag</span>&gt;</span>
</code></pre><h3>Prop</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>type</td><td>\u6807\u7B7E\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3Aprimary success danger warning</td><td>String</td><td><code>default</code></td></tr><tr><td>color</td><td>\u6807\u7B7E\u989C\u8272</td><td>String</td><td>-</td></tr><tr><td>text-color</td><td>\u6587\u672C\u989C\u8272\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8Ecolor\u5C5E\u6027</td><td>String</td><td><code>white</code></td></tr><tr><td>plain</td><td>\u662F\u5426\u4E3A\u7A7A\u5FC3\u6837\u5F0F</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>round</td><td>\u662F\u5426\u4E3A\u5706\u89D2\u6837\u5F0F</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>mark</td><td>\u662F\u5426\u4E3A\u6807\u8BB0\u6837\u5F0F</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>closeable</td><td>\u662F\u5426\u4E3A\u53EF\u5173\u95ED\u6807\u7B7E</td><td>Boolean</td><td><code>false</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u6807\u7B7E\u663E\u793A\u5185\u5BB9</td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>close</td><td>\u5173\u95ED\u4E8B\u4EF6</td><td>event</td></tr></tbody></table>`,24),c=[p],g={setup(e,{expose:s}){return s({frontmatter:{}}),(r,o)=>(t(),a("div",l,c))}};export{g as default};
