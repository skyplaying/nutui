import{e as t,o as e,G as o}from"./vendor.bcce97f3.js";const s={class:"markdown-body"},u=[o('<h1>小程序开发</h1><h2>介绍</h2><ul><li><p>作为一款具有京东风格的组件库，我们一直致力于用心打造更符合开发者体验的组件库。NutUI 3.0 上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 NutUI 能够为更多的开发者带来便利，我们决定在 NutUI 中增加小程序多端适配的能力。</p></li><li><p>为了给开发者提供更高效便捷的开发方式，NutUI 和 Taro 合力，现已可以用 NutUI 开发小程序了，NutUI 提供了30+ 组件涵盖了日常业务开发使用的大部分组件。</p></li><li><p>二者的结合，不仅可以让开发者一处代码，多端运行，畅快自如地开发小程序。更可以在开发过程中，使用到更美观、更便捷、组件更丰富的组件库。我们将 NutUI 和 Taro 更完美地接合到一起，Taro 官方将 NutUI 作为 Vue技术栈的推荐组件库。现在开发者将可以使用 NutUI 无缝开发 H5 和多端小程序。</p></li></ul><h2>预览</h2><blockquote><p>微信扫描下方二维码体验，体验组件库示例 , Demo 源码 <a href="https://github.com/jdf2e/nutui-demo/tree/master/taro">https://github.com/jdf2e/nutui-demo/tree/master/taro</a></p></blockquote><img width="200" src="https://storage.360buyimg.com/jdc-article/gh_f2231eb941be_258.jpg"><h2>安装</h2><ul><li>通过 Npm 或 Yarn 安装</li></ul><h4>安装 Taro 脚手架</h4><pre><code class="language-bash"># 使用 npm 安装 CLI\nnpm install -g @tarojs/cli\n\n# OR 使用 yarn 安装 CLI\nyarn global add @tarojs/cli\n\n# OR 安装了 cnpm，使用 cnpm 安装 CLI\ncnpm install -g @tarojs/cli\n</code></pre><blockquote><p>值得一提的是，如果安装过程出现sass相关的安装错误，请在安装 mirror-config-china 后重试。</p></blockquote><pre><code class="language-bash">npm install -g mirror-config-china\n</code></pre><h4>检查是否安装成功</h4><pre><code class="language-bash">taro -v\n</code></pre><h4>项目初始化</h4><p>使用命令创建模板：</p><pre><code class="language-bash">taro init myApp\n</code></pre><h4>按照下方图片依次选择，选择 Vue3 + NutUI 模板</h4><img src="https://storage.360buyimg.com/jdc-article/taro.jpg"><h4>NPM 使用示例</h4><pre><code class="language-javascript">import { createApp } from &quot;vue&quot;;\nimport App from &quot;./App.vue&quot;;\nimport NutUI from &quot;@nutui/nutui-taro&quot;;\nimport &quot;@nutui/nutui-taro/dist/style.css&quot;;\ncreateApp(App).use(NutUI);\n</code></pre><blockquote><p>注意：这种方式将会导入所有组件</p></blockquote><h4>推荐使用按需加载</h4><pre><code class="language-javascript">import { createApp } from &quot;vue&quot;;\nimport App from &quot;./App.vue&quot;;\nimport { Button, Cell, Icon } from &quot;@nutui/nutui-taro&quot;;\nimport &quot;@nutui/nutui-taro/dist/style.css&quot;;\ncreateApp(App).use(Button).use(Cell).use(Icon);\n</code></pre><h3>定制化主题使用</h3><h4>首先需要在 <strong>app.ts</strong> 文件中配置 使用 scss 样式文件如：</h4><pre><code class="language-javascript">import { createApp } from &quot;vue&quot;;\nimport App from &quot;./App.vue&quot;;\nimport { Button, Cell, Icon } from &quot;@nutui/nutui-taro&quot;;\n// 定制化主题必须使用 scss \nimport &#39;@nutui/nutui-taro/dist/styles/themes/default.scss&#39;;\ncreateApp(App).use(Button).use(Cell).use(Icon);\n</code></pre><h4>创建定制化主题样式文件 <code>assets/styles/custom_theme.scss</code> ，样式变量覆盖表参考 <a href="https://github.com/jdf2e/nutui/blob/next/src/packages/styles/variables.scss">nutui variables</a></h4><p><code>custom_theme.scss</code></p><pre><code class="language-scss">$primary-color: #478EF2;\n$primary-color-end: #496AF2;\n</code></pre><h4>然后需要在 <strong>config/index.js</strong> 文件中配置 scss 文件全局覆盖如：</h4><pre><code class="language-javascript">const path = require(&#39;path&#39;);\nconst config = {\n  deviceRatio: {\n    640: 2.34 / 2,\n    750: 1,\n    828: 1.81 / 2,\n    375: 2 / 1\n  },\n  sass: {\n    resource: [\n        path.resolve(__dirname, &#39;..&#39;, &#39;src/assets/styles/custom_theme.scss&#39;)\n    ]\n  },\n  // ...\n</code></pre><h4>vue 文件中使用查看效果</h4><pre><code class="language-html">&lt;template&gt;\n  &lt;view&gt;\n      &lt;nut-button type=&quot;primary&quot; &gt;nutui&lt;/nut-button&gt;\n  &lt;/view&gt;\n&lt;/template&gt;\n</code></pre>',34)],n={setup:o=>(o,n)=>(e(),t("div",s,u))};export{n as default};
