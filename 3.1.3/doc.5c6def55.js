import{e as s,o as a,G as n}from"./vendor.f7062dc0.js";const t={class:"markdown-body"},l=[n('<h1>Menu 菜单组件</h1><h3>介绍</h3><p>下拉选择菜单组件</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-comment">// vue</span>\n<span class="hljs-keyword">import</span> { Menu } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;\n<span class="hljs-comment">// taro</span>\n<span class="hljs-keyword">import</span> { Menu } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;\n<span class="hljs-keyword">const</span> app = createApp();\napp.use(Menu);\n\n</code></pre><h2>代码演示</h2><h3>基础用法1</h3><p><code>Menu</code> 属性支持传入列表数据menuList和title名称设置。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-menu</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span> <span class="hljs-attr">:menu-list</span>=<span class="hljs-string">&quot;menuList&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;最新商品&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span> <span class="hljs-attr">:menu-list</span>=<span class="hljs-string">&quot;menuList&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu</span>&gt;</span>\n</code></pre><pre><code class="language-js"> <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> resData = reactive({\n      <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;热门推荐&#39;</span>,\n      <span class="hljs-attr">menuList</span>: [\n        {<span class="hljs-attr">value</span>: <span class="hljs-string">&#39;手机&#39;</span>},\n        {<span class="hljs-attr">value</span>: <span class="hljs-string">&#39;电脑&#39;</span>},\n        {<span class="hljs-attr">value</span>: <span class="hljs-string">&#39;家用电器&#39;</span>},\n        {<span class="hljs-attr">value</span>: <span class="hljs-string">&#39;日用百货&#39;</span>}\n      ]\n    });\n }\n\n</code></pre><h3>菜单多列展示</h3><p><code>Menu</code> 的 <code> multiStyle</code> 属性配置1列、2列、3列展示菜单列表，默认单列展示。 <code>maxHeight</code> 属性可控制菜单列表的最大高度。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-menu</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span> <span class="hljs-attr">:menu-list</span>=<span class="hljs-string">&quot;menuList2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;单列展示&quot;</span> <span class="hljs-attr">multi-style</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">maxHeight</span>=<span class="hljs-string">&quot;200&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span> <span class="hljs-attr">:menu-list</span>=<span class="hljs-string">&quot;menuList2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;双列展示&quot;</span>  <span class="hljs-attr">multi-style</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span> <span class="hljs-attr">:menu-list</span>=<span class="hljs-string">&quot;menuList2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;三列展示&quot;</span>  <span class="hljs-attr">multi-style</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu</span>&gt;</span>\n</code></pre><h3>禁用操作</h3><p><code>Menu</code> 的 <code>disabled</code> 属性可对菜单列表进行禁用操作。 <code>autoClose</code> 属性控制下拉菜单列表是否选择后自动收起，默认自动收起。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-menu</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span> <span class="hljs-attr">:menu-list</span>=<span class="hljs-string">&quot;menuList&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;最新商品&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span> <span class="hljs-attr">:menu-list</span>=<span class="hljs-string">&quot;menuList&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">:auto-close</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span> <span class="hljs-attr">:menu-list</span>=<span class="hljs-string">&quot;menuList2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;筛选&quot;</span> <span class="hljs-attr">disabled</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu</span>&gt;</span>\n</code></pre><h3>禁止蒙层展示</h3><p>属性<code>hasMask</code>控制是否有蒙层，默认为 <code>true</code>展示蒙层</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-menu</span> <span class="hljs-attr">:hasMask</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span> <span class="hljs-attr">:menu-list</span>=<span class="hljs-string">&quot;menuList&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;最新商品&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span> <span class="hljs-attr">:menu-list</span>=<span class="hljs-string">&quot;menuList&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu</span>&gt;</span>\n</code></pre><h3>点击事件</h3><p><code>Menu</code> 的 <code>@menu-click</code> 事件返回点击的菜单标题，<code>@change</code>事件返回菜单列表选中的数据。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-menu</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span>\n        <span class="hljs-attr">:menu-list</span>=<span class="hljs-string">&quot;menuList2&quot;</span>\n        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;选择菜单列表项&quot;</span>\n        <span class="hljs-attr">multi-style</span>=<span class="hljs-string">&quot;2&quot;</span>\n        @<span class="hljs-attr">menu-click</span>=<span class="hljs-string">&quot;alertText($event, &#39;title&#39;)&quot;</span>\n        @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;getChecked&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span>\n        <span class="hljs-attr">:menu-list</span>=<span class="hljs-string">&quot;menuList2&quot;</span>\n        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;选中标题触发&quot;</span>\n        <span class="hljs-attr">disabled</span>\n        @<span class="hljs-attr">menu-click</span>=<span class="hljs-string">&quot;alertText&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu-item</span>&gt;</span>\n <span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu</span>&gt;</span>\n</code></pre><pre><code class="language-js"><span class="hljs-keyword">const</span> getChecked = <span class="hljs-function">(<span class="hljs-params">info: any, name: string</span>) =&gt;</span> {\n    alert(<span class="hljs-string">&#39;选择菜单选项：&#39;</span> + name);\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-number">11</span>, info, name);\n};\n<span class="hljs-keyword">const</span> alertText = <span class="hljs-function">(<span class="hljs-params">info, type</span>) =&gt;</span> {\n    <span class="hljs-built_in">console</span>.log(info, type);\n    <span class="hljs-keyword">if</span> (type == <span class="hljs-string">&#39;title&#39;</span>) {\n        alert(<span class="hljs-string">&#39;菜单标题点击：&#39;</span> + info);\n    } <span class="hljs-keyword">else</span> {\n        alert(<span class="hljs-string">&#39;禁用操作&#39;</span>);\n    }\n};\n</code></pre><h3>自定义内容</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-menu</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;自定义选项&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;user-style&quot;</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span>&gt;</span>\n            设置为默认 <span class="hljs-tag">&lt;<span class="hljs-name">nut-switch</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-switch</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>确认提交<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu</span>&gt;</span>\n</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>菜单标题名称或可为菜单列表第一项，必填</td><td>String</td><td>-</td></tr><tr><td>menu-list</td><td>菜单列表数据，必填</td><td>Array</td><td>-</td></tr><tr><td>multi-style</td><td>列表列数设置，默认1列，可选值 <code>1</code> <code>2</code> <code>3</code></td><td>String, Number</td><td>1</td></tr><tr><td>disabled</td><td>是否开启禁用设置，默认不开启</td><td>Boolean</td><td>false</td></tr><tr><td>max-height</td><td>菜单列表最大高度，单位px</td><td>String, Number</td><td>-</td></tr><tr><td>auto-close</td><td>选择后下拉菜单列表是否自动收起，默认自动收起</td><td>Boolean</td><td>true</td></tr><tr><td>has-mask</td><td>是否有蒙层</td><td>Boolean</td><td>true</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>menu-click</td><td>点击菜单标题触发，返回菜单标题名称</td><td>event: Event</td></tr><tr><td>change</td><td>点击菜单列表选项触发，返回选中菜单项数据、名称</td><td>event: Event</td></tr></tbody></table>',30)],p={setup:(n,{expose:p})=>(p({frontmatter:{}}),(n,p)=>(a(),s("div",t,l)))};export{p as default};
