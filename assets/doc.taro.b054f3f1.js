import{c as t,o as e,C as l}from"./vendor.2e1680f4.js";const o={class:"markdown-body"},n=l('<h1>Drag 拖拽</h1><p>实现可拖拽的任意元素</p><h2>限制拖拽边界</h2><pre><code class="language-html">&lt;nut-drag style=&quot;width: 90%; height: 200px; border: 1px solid red&quot; direction=&quot;all&quot; width=&quot;120&quot;height=&quot;40&quot;&gt;\n    &lt;nut-button style=&quot;width: 120px; height: 40px&quot; type=&quot;primary&quot;&gt;触摸移动&lt;/nut-button&gt;\n&lt;/nut-drag&gt;\n</code></pre><h2>限制拖拽方向</h2><pre><code class="language-html"> &lt;nut-drag direction=&quot;x&quot; width=&quot;120&quot; height=&quot;40&quot;&gt;\n      &lt;nut-button style=&quot;width: 120px; height: 40px&quot; type=&quot;primary&quot;&gt;只能X轴拖拽&lt;/nut-button&gt;\n &lt;/nut-drag&gt;\n &lt;nut-drag direction=&quot;y&quot; width=&quot;120&quot; height=&quot;40&quot;&gt;\n    &lt;nut-button style=&quot;width: 120px; height: 40px&quot; type=&quot;primary&quot;&gt;只能X轴拖拽&lt;/nut-button&gt;\n &lt;/nut-drag&gt;\n</code></pre><h2>不限制边界</h2><pre><code class="language-html"> &lt;nut-drag direction=&quot;all&quot; width=&quot;120&quot; height=&quot;40&quot;&gt;\n    &lt;nut-button style=&quot;width: 120px; height: 40px&quot; type=&quot;primary&quot; &gt;触摸移动&lt;/nut-button&gt;\n &lt;/nut-drag&gt;\n</code></pre><h2>Prop</h2><table><thead><tr><th style="text-align:left;">字段</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">width</td><td style="text-align:left;">子元素宽度</td><td style="text-align:left;">string</td><td style="text-align:left;">‘’</td></tr><tr><td style="text-align:left;">height</td><td style="text-align:left;">子元素高度</td><td style="text-align:left;">string</td><td style="text-align:left;">‘’</td></tr><tr><td style="text-align:left;">direction</td><td style="text-align:left;">拖拽元素的拖拽方向限制，<strong>x</strong>/<strong>y</strong>/<strong>all</strong>三选一</td><td style="text-align:left;">String</td><td style="text-align:left;">‘all’</td></tr><tr><td style="text-align:left;">boundary</td><td style="text-align:left;">拖拽元素的拖拽边界</td><td style="text-align:left;">Object</td><td style="text-align:left;">{top: 0,left: 0,right: 0,bottom: 0}</td></tr></tbody></table>',10),d={expose:[],setup:l=>(l,d)=>(e(),t("div",o,[n]))};export default d;
