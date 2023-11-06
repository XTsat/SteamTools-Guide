import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,a as i,f as e}from"./app-c3963437.js";const r={},d=e('<h1 id="文档开发" tabindex="-1"><a class="header-anchor" href="#文档开发" aria-hidden="true">#</a> 文档开发</h1><h2 id="在线编辑" tabindex="-1"><a class="header-anchor" href="#在线编辑" aria-hidden="true">#</a> 在线编辑</h2><p>直接点击文档内底部的编辑此页快速跳转到GitHub编辑页面直接向本仓库提交你撰写的文档</p><h2 id="本地开发" tabindex="-1"><a class="header-anchor" href="#本地开发" aria-hidden="true">#</a> 本地开发</h2><p>先决条件：</p><ul><li>nodejs(Version &gt;= 16)</li><li>yarn(Version &gt;= 1)</li></ul><p>Clone 本仓库</p><p>在项目文件夹下运行：</p>',8),t=e(`<div class="language-yarn line-numbers-mode" data-ext="yarn"><pre class="language-yarn"><code>yarn install
yarn docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>更新框架及插件(非必要不必更新)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn add -D vuepress@next
yarn add @vuepress/plugin-search@next -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function l(u,o){return n(),s("div",null,[d,i(` 安装自动侧边栏插件
[仓库](https://github.com/shanyuhai123/vuepress-plugin-auto-sidebar)
[文档](https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar/)

\`\`\`c#
# vuepress v2 alpha(vuepress v2 仍处于测试阶段)
npm i vuepress-plugin-auto-sidebar@alpha -D
\`\`\`

<details><summary>新仓库插件初次设置(本仓库中已经有了)</summary>
VuePress v2 不再支持插件修改 sidebar，所以你需要自行引入生成的 \`sidebar.js\` 文件。

\`\`\`javascript
const sidebarConf = require('./sidebar')

module.exports = {
  plugins: [
    ["vuepress-plugin-auto-sidebar", {}]
  ],
  themeConfig: {
    sidebar: sidebarConf
  }
}
\`\`\`

</details> `),t])}const h=a(r,[["render",l],["__file","文档开发.html.vue"]]);export{h as default};
