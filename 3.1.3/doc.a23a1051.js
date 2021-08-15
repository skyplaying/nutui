import{e as t,o as e,G as o}from"./vendor.bcce97f3.js";const n={class:"markdown-body"},l=[o('<h1>Collapse 折叠面板</h1><h3>介绍</h3><p>将内容放置在多个折叠面板中，点击面板标题可展开或收缩内容。</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\n// vue\nimport { Collapse } from &#39;@nutui/nutui&#39;;\n// taro\nimport { Collapse } from &#39;@nutui/nutui-taro&#39;;\n\nconst app = createApp();\napp.use(Collapse);\n</code></pre><h2>代码演示</h2><h2>基本用法</h2><p>通过<code>v-model</code>控制展开的面板列表，<code>activeNames</code>为数组格式</p><pre><code class="language-html">&lt;nut-collapse v-model:active=&quot;active1&quot; icon=&quot;down-arrow&quot;&gt;\n  &lt;nut-collapse-item :title=&quot;title1&quot; :name=&quot;1&quot;&gt;\n    NutUI是一套拥有京东风格的轻量级的 Vue 组件库\n  &lt;/nut-collapse-item&gt;\n  &lt;nut-collapse-item :title=&quot;title2&quot; :name=&quot;2&quot;&gt;\n    在产品的功能、体验、易用性和灵活性等各个方面做了全面的升级！\n  &lt;/nut-collapse-item&gt;\n  &lt;nut-collapse-item :title=&quot;title3&quot; :name=&quot;3&quot; disabled&gt;\n  &lt;/nut-collapse-item&gt;\n&lt;/nut-collapse&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n  const activeNames = reactive([1, 2]);\n  const title = reactive({\n    title1: &#39;标题1&#39;,\n    title2: &#39;标题2&#39;,\n    title3: &#39;标题3&#39;,\n  })\n  return {\n    activeNames,\n    ...toRefs(title)\n  };\n}\n</code></pre><h3>无icon样式</h3><pre><code class="language-html">&lt;nut-collapse v-model:active=&quot;activeName&quot; :accordion=&quot;true&quot;&gt;\n  &lt;nut-collapse-item :title=&quot;title1&quot; :name=&quot;1&quot;&gt;\n   引入Vue3新特性 Composition API、Teleport、Emits 等\n  &lt;/nut-collapse-item&gt;\n  &lt;nut-collapse-item :title=&quot;title2&quot; :name=&quot;2&quot;&gt;\n    全面使用 TypeScipt\n  &lt;/nut-collapse-item&gt;\n&lt;/nut-collapse&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n  const activeName = ref(1);\n  const title = reactive({\n    title1: &#39;标题1&#39;,\n    title2: &#39;标题2&#39;,\n    title3: &#39;标题3&#39;,\n  })\n  return {\n    activeName,\n    ...toRefs(title)\n  };\n}\n</code></pre><h3>手风琴</h3><p>通过<code>accordion</code>可以设置为手风琴模式，最多展开一个面板，此时<code>activeName</code>为字符串格式；<code>subTitle</code>可以设置副标题的内容</p><pre><code class="language-html"> &lt;nut-collapse v-model:active=&quot;activeName&quot; :accordion=&quot;true&quot; icon=&quot;down-arrow&quot;&gt;\n  &lt;nut-collapse-item :title=&quot;title1&quot; :name=&quot;1&quot;&gt;\n    基于京东设计语言体系，构建场景\n  &lt;/nut-collapse-item&gt;\n  &lt;nut-collapse-item :title=&quot;title2&quot; :name=&quot;2&quot; :sub-title=&quot;subTitle&quot;&gt;\n   提高界⾯的模块化通用程度\n  &lt;/nut-collapse-item&gt;\n  &lt;nut-collapse-item :title=&quot;title3&quot; :name=&quot;3&quot;&gt;\n  采用组合式 API Composition 语法重构，结构清晰，功能模块化\n  &lt;/nut-collapse-item&gt;\n&lt;/nut-collapse&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n  const activeName = ref(1);\n  const subTitle = &#39;副标题&#39;;\n  const title = reactive({\n    title1: &#39;标题1&#39;,\n    title2: &#39;标题2&#39;,\n    title3: &#39;标题3&#39;,\n  })\n  return {\n    activeName,\n    subTitle,\n    ...toRefs(title)\n  };\n}\n</code></pre><h3>自定义折叠图标</h3><p>通过icon设置自定义图标，rotate设置图标旋转的角度</p><pre><code class="language-html">&lt;nut-collapse\n  v-model:active=&quot;activeName&quot;\n  :accordion=&quot;true&quot;\n  icon=&quot;arrow-right2&quot;\n  rotate=&quot;90&quot;\n&gt;\n  &lt;nut-collapse-item :title=&quot;title1&quot; :name=&quot;1&quot;&gt;\n      NUTUI3.0重新思考其内在的一致性和可组合性\n  &lt;/nut-collapse-item&gt;\n  &lt;nut-collapse-item :title=&quot;title2&quot; :name=&quot;2&quot; sub-title=&quot;文本内容&quot;&gt;\n    提⾼产研输出对接的效率，降低输出工作量\n  &lt;/nut-collapse-item&gt;\n&lt;/nut-collapse&gt;\n</code></pre><pre><code class="language-javascript">const activeName = ref(1);\nconst title = reactive({\n  title1: &#39;标题1&#39;,\n  title2: &#39;标题2&#39;,\n})\nreturn {\n  activeName,\n  ...toRefs(title)\n};\n</code></pre><h3>自定义标题图标</h3><p>通过icon设置自定义图标，rotate设置图标旋转的角度</p><pre><code class="language-html">&lt;nut-collapse\n  v-model:active=&quot;activeName&quot;\n  title-icon=&quot;issue&quot;\n  title-icon-color=&quot;red&quot;\n  title-icon-size=&quot;20px&quot;\n  title-icon-position=&quot;left&quot;\n  icon=&quot;down-arrow&quot;\n  :accordion=&quot;true&quot;\n&gt;\n  &lt;nut-collapse-item :title=&quot;title1&quot; :name=&quot;1&quot;&gt;\n  组件 emits 事件单独提取，增强代码可读性\n  &lt;/nut-collapse-item&gt;\n  &lt;nut-collapse-item :title=&quot;title2&quot; :name=&quot;2&quot; sub-title=&quot;文本内容&quot;&gt;\n  使用 Teleport 新特性重构挂载类组件\n  &lt;/nut-collapse-item&gt;\n&lt;/nut-collapse&gt;\n</code></pre><pre><code class="language-javascript">const activeName = ref(1);\nconst title = reactive({\n  title1: &#39;标题1&#39;,\n  title2: &#39;标题2&#39;,\n})\nreturn {\n  activeName,\n  ...toRefs(title)\n};\n</code></pre><h2>Collapse Prop</h2><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>当前展开面板的 name</td><td>手风琴模式：string | number<br>非手风琴模式：(string | number)[]</td><td>-</td></tr><tr><td>accordion</td><td>是否开启手风琴模式</td><td>boolean</td><td>false</td></tr><tr><td>icon</td><td>图标链接/或使用 NutUI 的 icon</td><td>string</td><td>‘’</td></tr><tr><td>icon-size</td><td>图标大小</td><td>string</td><td>16px</td></tr><tr><td>icon-color</td><td>图标颜色</td><td>string</td><td>‘’</td></tr><tr><td>sub-title</td><td>标题栏副标题</td><td>string</td><td>-</td></tr><tr><td>title-icon</td><td>标题图标链接/或使用 NutUI 的 icon</td><td>string</td><td>‘’</td></tr><tr><td>title-icon-size</td><td>标题图标大小</td><td>string</td><td>16px</td></tr><tr><td>title-icon-color</td><td>标题图标颜色</td><td>string</td><td>’‘</td></tr><tr><td>title-icon-position</td><td>标题图标位置</td><td>string</td><td>‘left’</td></tr><tr><td>rotate</td><td>点击折叠和展开的旋转角度,在自定义图标模式下生效</td><td>string \\ number</td><td>180</td></tr></tbody></table><h3>CollapseItem Prop</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>唯一标识符，必填</td><td>string \\ number</td><td>-1</td></tr><tr><td>title</td><td>标题栏左侧内容</td><td>string</td><td>-</td></tr><tr><td>sub-title</td><td>标题栏副标题</td><td>string</td><td>-</td></tr><tr><td>disabled</td><td>标题栏是否禁用</td><td>boolean</td><td>false</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>切换面板时触发</td><td>类型与 v-model 绑定的值一致</td></tr></tbody></table>',31)],d={setup:o=>(o,d)=>(e(),t("div",n,l))};export{d as default};
