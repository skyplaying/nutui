import{e as s,o as a,G as n}from"./vendor.36d75c4a.js";const d={class:"markdown-body"},l=n(`<h1>Uploader \u4E0A\u4F20</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u5C06\u672C\u5730\u7684\u56FE\u7247\u6216\u6587\u4EF6\u4E0A\u4F20\u81F3\u670D\u52A1\u5668\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { Uploader,Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Uploader);
app.use(Icon);

</code></pre><h3>\u57FA\u672C\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-uploader</span> <span class="hljs-attr">url</span>=<span class="hljs-string">&quot;http://\u670D\u52A1\u5668\u5730\u5740&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-uploader</span>&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6837\u5F0F</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-uploader</span> <span class="hljs-attr">url</span>=<span class="hljs-string">&quot;http://\u670D\u52A1\u5668\u5730\u5740&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;uploader&quot;</span>&gt;</span>\u4E0A\u4F20\u6587\u4EF6<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-uploader</span>&gt;</span>
</code></pre><h3>\u76F4\u63A5\u8C03\u8D77\u6444\u50CF\u5934\uFF08\u79FB\u52A8\u7AEF\u751F\u6548\uFF09</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-uploader</span> <span class="hljs-attr">url</span>=<span class="hljs-string">&quot;http://\u670D\u52A1\u5668\u5730\u5740&quot;</span> <span class="hljs-attr">capture</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-uploader</span>&gt;</span>
</code></pre><h3>\u9650\u5236\u4E0A\u4F20\u6570\u91CF5\u4E2A</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-uploader</span> <span class="hljs-attr">url</span>=<span class="hljs-string">&quot;http://\u670D\u52A1\u5668\u5730\u5740&quot;</span> <span class="hljs-attr">multiple</span> <span class="hljs-attr">maximum</span>=<span class="hljs-string">&quot;5&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-uploader</span>&gt;</span>
</code></pre><h3>\u9650\u5236\u4E0A\u4F20\u5927\u5C0F\uFF08\u6BCF\u4E2A\u6587\u4EF6\u6700\u5927\u4E0D\u8D85\u8FC7 50kb\uFF0C\u4E5F\u53EF\u4EE5\u5728beforeupload\u4E2D\u81EA\u884C\u5904\u7406\uFF09</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-uploader</span> <span class="hljs-attr">url</span>=<span class="hljs-string">&quot;http://\u670D\u52A1\u5668\u5730\u5740&quot;</span> <span class="hljs-attr">multiple</span> <span class="hljs-attr">:maximize</span>=<span class="hljs-string">&quot;1024 * 50&quot;</span> <span class="hljs-attr">:before-upload</span>=<span class="hljs-string">&quot;beforeUpload&quot;</span> @<span class="hljs-attr">oversize</span>=<span class="hljs-string">&quot;onOversize&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-uploader</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> formData = {
      <span class="hljs-attr">custom</span>: <span class="hljs-string">&#39;test&#39;</span>
    };
    <span class="hljs-keyword">const</span> onOversize = <span class="hljs-function">(<span class="hljs-params">files: File[]</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;oversize \u89E6\u53D1 \u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 50kb&#39;</span>, files);
    };

    <span class="hljs-keyword">const</span> beforeUpload = <span class="hljs-function">(<span class="hljs-params">files: File[]</span>) =&gt;</span> {
      <span class="hljs-comment">//\u81EA\u5B9A\u4E49\u5904\u7406</span>
      <span class="hljs-keyword">return</span> files;
    }
   
    <span class="hljs-keyword">return</span> {
      onOversize,
      formData
    };
}
</code></pre><h3>\u81EA\u5B9A\u4E49 FormData headers</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-uploader</span> <span class="hljs-attr">url</span>=<span class="hljs-string">&quot;http://\u670D\u52A1\u5668\u5730\u5740&quot;</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">:headers</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">:with-Credentials</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-uploader</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> formData = {
      <span class="hljs-attr">custom</span>: <span class="hljs-string">&#39;test&#39;</span>
    };
    <span class="hljs-keyword">const</span> onOversize = <span class="hljs-function">(<span class="hljs-params">files: File[]</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;oversize \u89E6\u53D1 \u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 50kb&#39;</span>, files);
    };
   
    <span class="hljs-keyword">return</span> {
      onOversize,
      formData
    };
}
</code></pre><h3>\u7981\u7528\u72B6\u6001</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-uploader</span> <span class="hljs-attr">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-uploader</span>&gt;</span>
</code></pre><h3>Prop</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>name</td><td><code>input</code> \u6807\u7B7E <code>name</code> \u7684\u540D\u79F0\uFF0C\u53D1\u5230\u540E\u53F0\u7684\u6587\u4EF6\u53C2\u6570\u540D</td><td>String</td><td>\u201Cfile\u201D</td></tr><tr><td>url</td><td>\u4E0A\u4F20\u670D\u52A1\u5668\u7684\u63A5\u53E3\u5730\u5740</td><td>String</td><td>-</td></tr><tr><td>v-model:file-list</td><td>\u9ED8\u8BA4\u5DF2\u7ECF\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868</td><td>FileItem[]</td><td>[]</td></tr><tr><td>is-preview</td><td>\u662F\u5426\u4E0A\u4F20\u6210\u529F\u540E\u5C55\u793A\u9884\u89C8\u56FE</td><td>Boolean</td><td>true</td></tr><tr><td>is-deletable</td><td>\u662F\u5426\u5C55\u793A\u5220\u9664\u6309\u94AE</td><td>Boolean</td><td>true</td></tr><tr><td>method</td><td>\u4E0A\u4F20\u8BF7\u6C42\u7684 http method</td><td>String</td><td>\u201Cpost\u201D</td></tr><tr><td>capture</td><td>\u56FE\u7247<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#htmlattrdefcapture">\u9009\u53D6\u6A21\u5F0F</a>\uFF0C\u76F4\u63A5\u8C03\u8D77\u6444\u50CF\u5934</td><td>String</td><td>false</td></tr><tr><td>maximize</td><td>\u53EF\u4EE5\u8BBE\u5B9A\u6700\u5927\u4E0A\u4F20\u6587\u4EF6\u7684\u5927\u5C0F\uFF08\u5B57\u8282\uFF09</td><td>Number\u4E28String</td><td>Number.MAX_VALUE</td></tr><tr><td>maximum</td><td>\u6587\u4EF6\u4E0A\u4F20\u6570\u91CF\u9650\u5236</td><td>Number\u4E28String</td><td>1</td></tr><tr><td>clear-input</td><td>\u662F\u5426\u9700\u8981\u6E05\u7A7A<code>input</code>\u5185\u5BB9\uFF0C\u8BBE\u4E3A<code>true</code>\u652F\u6301\u91CD\u590D\u9009\u62E9\u4E0A\u4F20\u540C\u4E00\u4E2A\u6587\u4EF6</td><td>Boolean</td><td>false</td></tr><tr><td>accept</td><td>\u5141\u8BB8\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B\uFF0C<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%90%E5%88%B6%E5%85%81%E8%AE%B8%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B">\u8BE6\u7EC6\u8BF4\u660E</a></td><td>String</td><td>*</td></tr><tr><td>headers</td><td>\u8BBE\u7F6E\u4E0A\u4F20\u7684\u8BF7\u6C42\u5934\u90E8</td><td>Object</td><td>{}</td></tr><tr><td>data</td><td>\u9644\u52A0\u4E0A\u4F20\u7684\u4FE1\u606F formData</td><td>Object</td><td>{}</td></tr><tr><td>upload-icon</td><td>\u4E0A\u4F20\u533A\u57DF<a href="#/icon">\u56FE\u6807\u540D\u79F0</a>\u6216\u56FE\u7247\u94FE\u63A5</td><td>String</td><td>\u201Cphotograph\u201D</td></tr><tr><td>upload-icon-size</td><td>\u4E0A\u4F20\u533A\u57DF<a href="#/icon">\u56FE\u6807\u5C3A\u5BF8</a>\u5927\u5C0F\uFF0C\u5982 <code>20px</code> <code>2em</code> <code>2rem</code></td><td>String or Number</td><td>-</td></tr><tr><td>xhr-state</td><td>\u63A5\u53E3\u54CD\u5E94\u7684\u6210\u529F\u72B6\u6001\uFF08status\uFF09\u503C</td><td>Number</td><td>200</td></tr><tr><td>with-credentials</td><td>\u652F\u6301\u53D1\u9001 cookie \u51ED\u8BC1\u4FE1\u606F</td><td>Boolean</td><td>fasle</td></tr><tr><td>multiple</td><td>\u662F\u5426\u652F\u6301\u6587\u4EF6\u591A\u9009</td><td>Boolean</td><td>fasle</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u6587\u4EF6\u4E0A\u4F20</td><td>Boolean</td><td>fasle</td></tr><tr><td>timeout</td><td>\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2</td><td>Number\u4E28String</td><td>1000 * 30</td></tr><tr><td>before-upload</td><td>\u4E0A\u4F20\u524D\u7684\u51FD\u6570\u9700\u8981\u8FD4\u56DE\u4E00\u4E2A<code>Promise</code>\u5BF9\u8C61</td><td>Function</td><td>null</td></tr><tr><td>before-delete</td><td>\u9664\u6587\u4EF6\u65F6\u7684\u56DE\u8C03\uFF0C\u8FD4\u56DE\u503C\u4E3A false \u65F6\u4E0D\u79FB\u9664\u3002\u652F\u6301\u8FD4\u56DE\u4E00\u4E2A <code>Promise</code> \u5BF9\u8C61\uFF0C<code>Promise</code> \u5BF9\u8C61 resolve(false) \u6216 reject \u65F6\u4E0D\u79FB\u9664</td><td>Function(file): boolean \u4E28Promise</td><td>-</td></tr></tbody></table><h3>FileItem</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>status</td><td>\u6587\u4EF6\u72B6\u6001\u503C\uFF0C\u53EF\u9009\u2019ready,uploading,success,error,removed\u2019</td><td>\u201Cready\u201D</td></tr><tr><td>uid</td><td>\u6587\u4EF6\u7684\u552F\u4E00\u6807\u8BC6</td><td>new Date().getTime().toString()</td></tr><tr><td>name</td><td>\u6587\u4EF6\u540D\u79F0</td><td>\u201C\u201D</td></tr><tr><td>url</td><td>\u6587\u4EF6\u8DEF\u5F84</td><td>\u201C\u201D</td></tr><tr><td>type</td><td>\u6587\u4EF6\u7C7B\u578B</td><td>\u201Cimage/jpeg\u201D</td></tr><tr><td>formData</td><td>\u4E0A\u4F20\u6240\u9700\u7684data</td><td>new FormData()</td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>start</td><td>\u6587\u4EF6\u4E0A\u4F20\u5F00\u59CB</td><td>options</td></tr><tr><td>progress</td><td>\u6587\u4EF6\u4E0A\u4F20\u7684\u8FDB\u5EA6</td><td>event,options</td></tr><tr><td>oversize</td><td>\u6587\u4EF6\u5927\u5C0F\u8D85\u8FC7\u9650\u5236\u65F6\u89E6\u53D1</td><td>files</td></tr><tr><td>success</td><td>\u4E0A\u4F20\u6210\u529F</td><td>responseText,options</td></tr><tr><td>failure</td><td>\u4E0A\u4F20\u5931\u8D25</td><td>responseText,options</td></tr><tr><td>change</td><td>\u4E0A\u4F20\u6587\u4EF6\u6539\u53D8\u65F6\u7684\u72B6\u6001</td><td>fileList,event</td></tr><tr><td>delete</td><td>\u6587\u4EF6\u5220\u9664\u4E4B\u524D\u7684\u72B6\u6001</td><td>files,fileList</td></tr></tbody></table>`,27),e=[l],u={setup(p,{expose:t}){return t({frontmatter:{}}),(o,c)=>(a(),s("div",d,e))}};export{u as default};
