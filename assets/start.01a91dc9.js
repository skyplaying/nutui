import{c as t,o as u,B as n}from"./vendor.96954379.js";const o={class:"markdown-body"},e=n('<h1>快速上手</h1><h2>安装</h2><ul><li>通过 Npm 或 Yarn 安装</li></ul><h4>NPM 安装</h4><pre><code class="language-bash"># Vue2 项目\nnpm i @nutui/nutui -S\n\n# Vue3 项目\nnpm i @nutui/nutui@next -S\n</code></pre><h4>CDN 安装使用示例</h4><blockquote><p>可以通过 CDN 的方式引入， 可以在 <strong>jsdelivr</strong> 和 <strong>unpkg</strong> 等公共 CDN 上获取到 NutUI。</p></blockquote><pre><code class="language-html">&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n  &lt;head&gt;\n    &lt;meta charset=&quot;UTF-8&quot; /&gt;\n    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;\n    &lt;!-- 引入样式 --&gt;\n    &lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdn.jsdelivr.net/npm/@nutui/nutui@next/dist/style.css&quot; /&gt;\n    &lt;!-- 引入Vue --&gt;\n    &lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue@next&quot;&gt;&lt;/script&gt;\n    &lt;!-- 引入NutUI组件库 --&gt;\n    &lt;script src=&quot;https://cdn.jsdelivr.net/npm/@nutui/nutui@next/dist/nutui.umd.js&quot;&gt;&lt;/script&gt;\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;div id=&quot;app&quot;&gt;\n        \n    &lt;/div&gt;\n    &lt;script&gt;\n      // 在 #app 标签下渲染一个按钮组件\n      const app = Vue.createApp({\n        template: `\n        &lt;nut-button type=&quot;primary&quot;&gt;主要按钮&lt;/nut-button&gt;\n        &lt;nut-button type=&quot;info&quot;&gt;信息按钮&lt;/nut-button&gt;\n        &lt;nut-button type=&quot;default&quot;&gt;默认按钮&lt;/nut-button&gt;\n        &lt;nut-button type=&quot;danger&quot;&gt;危险按钮&lt;/nut-button&gt;\n        &lt;nut-button type=&quot;warning&quot;&gt;警告按钮&lt;/nut-button&gt;\n        &lt;nut-button type=&quot;success&quot;&gt;成功按钮&lt;/nut-button&gt;\n        `,\n      });\n      app.use(nutui);\n      app.mount(&quot;#app&quot;);\n    &lt;/script&gt;\n  &lt;/body&gt;\n&lt;/html&gt;\n</code></pre><blockquote><p>在页面中直接引入，将无法使用 <strong>主题定制</strong> 等功能。我们推荐使用 <em>NPM</em> 或 <em>YARN</em> 方式安装，不推荐在页面中直接引入的用法</p></blockquote><h4>NPM 使用示例</h4><pre><code class="language-javascript">import { createApp } from &quot;vue&quot;;\nimport App from &quot;./App.vue&quot;;\nimport NutUI from &quot;@nutui/nutui&quot;;\nimport &quot;@nutui/nutui/dist/style.css&quot;;\ncreateApp(App).use(NutUI).mount(&quot;#app&quot;);\n</code></pre><blockquote><p>注意：这种方式将会导入所有组件</p></blockquote><h2>推荐使用按需加载</h2><pre><code class="language-javascript">import { createApp } from &quot;vue&quot;;\nimport App from &quot;./App.vue&quot;;\nimport { Button, Cell, Icon } from &quot;@nutui/nutui&quot;;\nimport &quot;@nutui/nutui/dist/style.css&quot;;\ncreateApp(App).use(Button).use(Cell).use(Icon).mount(&quot;#app&quot;);\n</code></pre><h2>注意事项</h2><ul><li>使用:prop传递数据格式为 数字、布尔值或函数时，必须带:(兼容字符串类型除外)，比如：</li></ul><pre><code class="language-html">&lt;nut-switch :active=&quot;true&quot; size=&quot;base&quot;&gt;&lt;/nut-switch&gt;\n</code></pre><ul><li>组件 css 单位使用的是 <strong>px</strong>，如果你的项目中需要 <strong>rem</strong> 单位，可借助一些工具进行转换，比如 <a href="https://www.webpackjs.com/">webpack</a> 的 <a href="https://www.npmjs.com/package/px2rem-loader">px2rem-loader</a>、<a href="https://github.com/postcss/postcss">postcss</a> 的 <a href="https://www.npmjs.com/package/postcss-plugin-px2rem">postcss-plugin-px2rem</a> 插件等</li></ul>',18),p={expose:[],setup:n=>(n,p)=>(u(),t("div",o,[e]))};export default p;
