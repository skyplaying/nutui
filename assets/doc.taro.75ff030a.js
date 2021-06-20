import{c as t,o as e,C as o}from"./vendor.2e1680f4.js";const u={class:"markdown-body"},i=o('<h1>Swiper 轮播图 组件</h1><h3>介绍</h3><p>常用于一组图片或卡片轮播，当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\n//vue\nimport { Swiper } from &#39;@nutui/nutui&#39;;\n//vue-taro\nimport { Swiper } from &#39;@nutui/nutui@taro&#39;;\n\nconst app = createApp();\napp.use(Swiper);\n</code></pre><h2>代码演示</h2><h3>基础用法</h3><p><code>autoplay</code> 是否自动切换 <code>interval</code> 自动切换时间间隔 <code>current</code> 当前所在滑块的 index <code>indicator-dots</code> 是否显示面板指示点 <code>indicator-color</code> 指示点颜色</p><pre><code class="language-html">&lt;nut-swiper current=&quot;1&quot; indicator-dots=&quot;true&quot; indicator-color=&quot;#426543&quot; autoplay=&quot;true&quot; interval=&quot;3000&quot;&gt;\n  &lt;nut-swiper-item&gt;\n    &lt;img src=&quot;//m.360buyimg.com/mobilecms/s700x280_jfs/t1/152158/32/19170/280589/6035429fE08208901/024578cf04ce3b47.jpg!cr_1125x445_0_171&quot; alt=&quot;&quot; /&gt;\n  &lt;/nut-swiper-item&gt;\n  &lt;nut-swiper-item&gt;\n    &lt;img src=&quot;//m.360buyimg.com/mobilecms/s700x280_jfs/t1/159602/22/7999/126515/6035f371E6f95bfee/559cb1ee48c962c9.jpg&quot; alt=&quot;&quot; /&gt;\n  &lt;/nut-swiper-item&gt;\n  &lt;nut-swiper-item&gt;\n    &lt;img src=&quot;//m.360buyimg.com/mobilecms/s700x280_jfs/t1/166846/13/7534/136440/60338b5cEd491d8b3/9e5527429136ab86.jpg&quot; alt=&quot;&quot; /&gt;\n  &lt;/nut-swiper-item&gt;\n  &lt;nut-swiper-item&gt;\n    &lt;img src=&quot;//m.360buyimg.com/mobilecms/s700x280_jfs/t1/145433/27/14059/141680/5facf066Ec402354c/530d5a316aed55fc.jpg!cr_1125x445_0_171&quot; alt=&quot;&quot; /&gt;\n  &lt;/nut-swiper-item&gt;\n&lt;/nut-swiper&gt;\n</code></pre><h3>自定义大小</h3><p><code>previous-margin</code> 前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值 <code>next-margin</code> 后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值</p><pre><code class="language-html">&lt;nut-swiper previous-margin=&quot;10px&quot; next-margin=&quot;10px&quot;&gt;\n  &lt;nut-swiper-item&gt;\n    &lt;img src=&quot;//m.360buyimg.com/mobilecms/s700x280_jfs/t1/152158/32/19170/280589/6035429fE08208901/024578cf04ce3b47.jpg!cr_1125x445_0_171&quot; alt=&quot;&quot; /&gt;\n  &lt;/nut-swiper-item&gt;\n  &lt;nut-swiper-item&gt;\n    &lt;img src=&quot;//m.360buyimg.com/mobilecms/s700x280_jfs/t1/159602/22/7999/126515/6035f371E6f95bfee/559cb1ee48c962c9.jpg&quot; alt=&quot;&quot; /&gt;\n  &lt;/nut-swiper-item&gt;\n  &lt;nut-swiper-item&gt;\n    &lt;img src=&quot;//m.360buyimg.com/mobilecms/s700x280_jfs/t1/166846/13/7534/136440/60338b5cEd491d8b3/9e5527429136ab86.jpg&quot; alt=&quot;&quot; /&gt;\n  &lt;/nut-swiper-item&gt;\n  &lt;nut-swiper-item&gt;\n    &lt;img src=&quot;//m.360buyimg.com/mobilecms/s700x280_jfs/t1/145433/27/14059/141680/5facf066Ec402354c/530d5a316aed55fc.jpg!cr_1125x445_0_171&quot; alt=&quot;&quot; /&gt;\n  &lt;/nut-swiper-item&gt;\n&lt;/nut-swiper&gt;\n</code></pre><h3>垂直方向</h3><p><code>vertical</code> 滑动方向是否为纵向</p><pre><code class="language-html">&lt;nut-swiper vertical=&quot;true&quot;&gt;\n  &lt;nut-swiper-item&gt;\n    &lt;img src=&quot;//m.360buyimg.com/mobilecms/s700x280_jfs/t1/152158/32/19170/280589/6035429fE08208901/024578cf04ce3b47.jpg!cr_1125x445_0_171&quot; alt=&quot;&quot; /&gt;\n  &lt;/nut-swiper-item&gt;\n  &lt;nut-swiper-item&gt;\n    &lt;img src=&quot;//m.360buyimg.com/mobilecms/s700x280_jfs/t1/159602/22/7999/126515/6035f371E6f95bfee/559cb1ee48c962c9.jpg&quot; alt=&quot;&quot; /&gt;\n  &lt;/nut-swiper-item&gt;\n  &lt;nut-swiper-item&gt;\n    &lt;img src=&quot;//m.360buyimg.com/mobilecms/s700x280_jfs/t1/166846/13/7534/136440/60338b5cEd491d8b3/9e5527429136ab86.jpg&quot; alt=&quot;&quot; /&gt;\n  &lt;/nut-swiper-item&gt;\n  &lt;nut-swiper-item&gt;\n    &lt;img src=&quot;//m.360buyimg.com/mobilecms/s700x280_jfs/t1/145433/27/14059/141680/5facf066Ec402354c/530d5a316aed55fc.jpg!cr_1125x445_0_171&quot; alt=&quot;&quot; /&gt;\n  &lt;/nut-swiper-item&gt;\n&lt;/nut-swiper&gt;\n</code></pre><h4>API <a href="https://docs.taro.zone/docs/components/viewContainer/swiper">参考文档</a></h4>',16),c={expose:[],setup:o=>(o,c)=>(e(),t("div",u,[i]))};export default c;
