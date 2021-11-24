import{e as t,o as a,G as n}from"./vendor.js";const l={class:"markdown-body"},p=n(`<h1>NumberKeyboard \u6570\u5B57\u952E\u76D8</h1><h3>\u4ECB\u7ECD</h3><p>\u865A\u62DF\u6570\u5B57\u952E\u76D8\uFF0C\u7528\u4E8E\u8F93\u5165\u652F\u4ED8\u5BC6\u7801\u7684\u573A\u666F\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">//vue</span>
<span class="hljs-keyword">import</span> { NumberKeyboard,Popup } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">//taro</span>
<span class="hljs-keyword">import</span> { NumberKeyboard,Popup } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(NumberKeyboard);
app.use(Popup);

</code></pre><h3>\u57FA\u7840\u7528\u6CD5 \u9ED8\u8BA4\u952E\u76D8</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-numberkeyboard</span> <span class="hljs-attr">:visible</span>=<span class="hljs-string">&quot;true&quot;</span> @<span class="hljs-attr">input</span>=<span class="hljs-string">&quot;input&quot;</span> @<span class="hljs-attr">delete</span>=<span class="hljs-string">&quot;onDelete&quot;</span> @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close()&quot;</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">nut-numberkeyboard</span>&gt;</span>
</code></pre><h3>\u5E26\u53F3\u4FA7\u680F\u952E\u76D8</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-numberkeyboard</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;rightColumn&quot;</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible&quot;</span> <span class="hljs-attr">:custom-key</span>=<span class="hljs-string">&quot;customKey1&quot;</span> @<span class="hljs-attr">input</span>=<span class="hljs-string">&quot;input&quot;</span> @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close()&quot;</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">nut-numberkeyboard</span>&gt;</span>
</code></pre><h3>\u968F\u673A\u6570\u952E\u76D8</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-numberkeyboard</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;rightColumn&quot;</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible&quot;</span> <span class="hljs-attr">randomKeys</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">:custom-key</span>=<span class="hljs-string">&quot;customKey1&quot;</span> @<span class="hljs-attr">input</span>=<span class="hljs-string">&quot;input&quot;</span> @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close(\uFF09&quot;</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">nut-numberkeyboard</span>&gt;</span>
</code></pre><h3>\u5E26\u6807\u9898\u680F\u952E\u76D8</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-numberkeyboard</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9ED8\u8BA4\u952E\u76D8&quot;</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible&quot;</span> <span class="hljs-attr">:custom-key</span>=<span class="hljs-string">&quot;customKey2&quot;</span> @<span class="hljs-attr">input</span>=<span class="hljs-string">&quot;input&quot;</span> @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close()&quot;</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">nut-numberkeyboard</span>&gt;</span>
</code></pre><h3>\u53CC\u5411\u7ED1\u5B9A\uFF1A</h3><pre><code class="language-html"> <span class="hljs-tag">&lt;<span class="hljs-name">nut-numberkeyboard</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible&quot;</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">maxlength</span>=<span class="hljs-string">&quot;6&quot;</span> @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close()&quot;</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">nut-numberkeyboard</span>&gt;</span>
</code></pre><h2>Prop</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model:visible</td><td>\u662F\u5426\u663E\u793A\u952E\u76D8</td><td>Boolean</td><td>false</td></tr><tr><td>title</td><td>\u952E\u76D8\u6807\u9898</td><td>String</td><td>-</td></tr><tr><td>type</td><td>\u952E\u76D8\u6A21\u5F0F</td><td>String</td><td><code>default</code>\uFF1A\u9ED8\u8BA4\u6837\u5F0F<br><code>rightColumn</code>\uFF1A\u5E26\u53F3\u4FA7\u680F</td></tr><tr><td>random-keys</td><td>\u968F\u673A\u6570</td><td>Boolean</td><td>false</td></tr><tr><td>custom-key</td><td>\u81EA\u5B9A\u4E49\u952E\u76D8\u989D\u5916\u7684\u952E</td><td>array<br>string</td><td>\u6570\u7EC4\u5F62\u5F0F\u6700\u591A\u652F\u6301\u6DFB\u52A02\u4E2A,\u8D85\u51FA\u9ED8\u8BA4\u53D6\u524D2\u9879</td></tr><tr><td>overlay</td><td>\u81EA\u5B9A\u4E49\u952E\u76D8\u989D\u5916\u7684\u952E</td><td>array<br>string</td><td>\u6570\u7EC4\u5F62\u5F0F\u6700\u591A\u652F\u6301\u6DFB\u52A02\u4E2A,\u8D85\u51FA\u9ED8\u8BA4\u53D6\u524D2\u9879</td></tr><tr><td>v-model:value</td><td>\u662F\u5426\u663E\u793A\u906E\u7F69</td><td>Boolean</td><td>true</td></tr><tr><td>maxlength</td><td>\u8F93\u5165\u503C\u6700\u5927\u957F\u5EA6\uFF0C\u7ED3\u5408 v-model \u4F7F\u7528</td><td>number <br> String</td><td>6</td></tr></tbody></table><h2>Event</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>input</td><td>\u70B9\u51FB\u6309\u952E\u65F6\u89E6\u53D1</td><td>\u6309\u952E\u5185\u5BB9</td></tr><tr><td>delete</td><td>\u70B9\u51FB\u5220\u9664\u952E\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>close</td><td>\u70B9\u51FB\u5173\u95ED\u6309\u94AE\u6216\u975E\u952E\u76D8\u533A\u57DF\u65F6\u89E6\u53D1</td><td>-</td></tr></tbody></table>`,19),e=[p],u={setup(r,{expose:s}){return s({frontmatter:{}}),(d,c)=>(a(),t("div",l,e))}};export{u as default};
