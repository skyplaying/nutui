System.register(["./vendor-legacy.466e82dd.js"],(function(t){"use strict";var o,n,e;return{setters:[function(t){o=t.c,n=t.o,e=t.C}],execute:function(){const d={class:"markdown-body"},u=e('<h1>Button 按钮</h1><h3>介绍</h3><p>按钮用于触发一个操作，如提交表单。</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\n// vue\nimport { Button } from &#39;@nutui/nutui&#39;;\n// taro\nimport { Button } from &#39;@nutui/nutui-taro&#39;;\n\nconst app = createApp();\napp.use(Button);\n</code></pre><h2>代码演示</h2><h3>按钮类型</h3><p>按钮支持 <code>default</code>、<code>primary</code>、<code>info</code>、<code>warning</code>、<code>danger</code>、<code>success</code> 六种类型，默认为 <code>default</code>。</p><pre><code class="language-html">&lt;nut-button type=&quot;primary&quot;&gt;主要按钮&lt;/nut-button&gt;\n&lt;nut-button type=&quot;info&quot;&gt;信息按钮&lt;/nut-button&gt;\n&lt;nut-button type=&quot;default&quot;&gt;默认按钮&lt;/nut-button&gt;\n&lt;nut-button type=&quot;danger&quot;&gt;危险按钮&lt;/nut-button&gt;\n&lt;nut-button type=&quot;warning&quot;&gt;警告按钮&lt;/nut-button&gt;\n&lt;nut-button type=&quot;success&quot;&gt;成功按钮&lt;/nut-button&gt;\n</code></pre><h3>朴素按钮</h3><p>通过 <code>plain</code> 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。</p><pre><code class="language-html">&lt;nut-button plain type=&quot;primary&quot;&gt;朴素按钮&lt;/nut-button&gt;\n&lt;nut-button plain type=&quot;info&quot;&gt;朴素按钮&lt;/nut-button&gt;\n</code></pre><h3>禁用状态</h3><p>通过 <code>disabled</code> 属性来禁用按钮，禁用状态下按钮不可点击。</p><pre><code class="language-html">&lt;nut-button disabled type=&quot;primary&quot;&gt;禁用状态&lt;/nut-button&gt;\n&lt;nut-button plain disabled type=&quot;info&quot;&gt;禁用状态&lt;/nut-button&gt;\n&lt;nut-button plain disabled type=&quot;primary&quot;&gt;禁用状态&lt;/nut-button&gt;\n</code></pre><h3>按钮形状</h3><p>通过 <code>shape</code> 属性设置按钮形状，支持圆形、方形按钮，默认为圆形。</p><pre><code class="language-html">&lt;nut-button shape=&quot;square&quot; type=&quot;primary&quot;&gt;方形按钮&lt;/nut-button&gt;\n&lt;nut-button type=&quot;info&quot;&gt;圆形按钮&lt;/nut-button&gt;\n</code></pre><h3>加载状态</h3><pre><code class="language-html">&lt;nut-button loading&gt;&lt;/nut-button&gt;\n&lt;nut-button loading&gt;加载中&lt;/nut-button&gt;\n</code></pre><h3>图标按钮</h3><pre><code class="language-html">  &lt;nut-button shape=&quot;square&quot; plain type=&quot;primary&quot; icon=&quot;star-fill&quot;&gt;&lt;/nut-button&gt;\n  &lt;nut-button shape=&quot;square&quot; type=&quot;primary&quot; icon=&quot;star&quot;&gt;收藏&lt;/nut-button&gt;\n</code></pre><h3>按钮尺寸</h3><p>支持 <code>large</code>、<code>normal</code>、<code>small</code> 三种尺寸，默认为 <code>normal</code>。</p><pre><code class="language-html">&lt;nut-button size=&quot;large&quot; type=&quot;primary&quot;&gt;大号按钮&lt;/nut-button&gt;\n&lt;nut-button type=&quot;primary&quot;&gt;普通按钮&lt;/nut-button&gt;\n&lt;nut-button size=&quot;small&quot; type=&quot;primary&quot;&gt;小型按钮&lt;/nut-button&gt;\n</code></pre><h3>块级元素</h3><p>按钮在默认情况下为行内块级元素，通过 <code>block</code> 属性可以将按钮的元素类型设置为块级元素，常用来实现通栏按钮。</p><pre><code class="language-html">&lt;nut-button block type=&quot;primary&quot;&gt;块级元素&lt;/nut-button&gt;\n</code></pre><h3>自定义颜色</h3><p>通过 color 属性可以自定义按钮的颜色。</p><pre><code class="language-html">&lt;nut-button color=&quot;#7232dd&quot;&gt;单色按钮&lt;/nut-button&gt;\n&lt;nut-button color=&quot;#7232dd&quot; plain&gt;单色按钮&lt;/nut-button&gt;\n&lt;nut-button color=&quot;linear-gradient(to right, #ff6034, #ee0a24)&quot;&gt;\n  渐变色按钮\n&lt;/nut-button&gt;\n</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>类型，可选值为 <code>primary</code> <code>info</code> <code>warning</code> <code>danger</code> <code>success</code></td><td>String</td><td><code>default</code></td></tr><tr><td>size</td><td>尺寸，可选值为 <code>large</code> <code>small</code></td><td>String</td><td><code>normal</code></td></tr><tr><td>shape</td><td>形状，可选值为 <code>square</code></td><td>String</td><td><code>round</code></td></tr><tr><td>color</td><td>按钮颜色，支持传入 linear-gradient 渐变色</td><td>String</td><td>-</td></tr><tr><td>plain</td><td>是否为朴素按钮</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>disabled</td><td>是否禁用按钮</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>block</td><td>是否为块级元素</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>icon</td><td>按钮图标，同Icon组件name属性</td><td>String</td><td>-</td></tr><tr><td>loading</td><td>按钮loading状态</td><td>Boolean</td><td><code>false</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击按钮时触发</td><td>event: MouseEvent</td></tr></tbody></table>',36);t("default",{setup:t=>(t,e)=>(n(),o("div",d,[u]))})}}}));
