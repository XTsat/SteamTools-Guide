# Steam++指南

欢迎访问 Steam++ 指南，你可以在这里找到 Steam++ 工具箱的使用帮助

文档还在制作过程中，你可以提出更多的文档需求

详细指南请前往文档链接:<https://xtsat.github.io/SteamTools-Guide/>

## 在线编辑

直接点击文档内底部的编辑此页快速跳转到GitHub编辑页面直接向本仓库提交你撰写的文档

## 本地开发

先决条件：

- nodejs(Version >= 16)
- yarn(Version >= 1)

Clone 本仓库

在项目文件夹下运行：

安装自动侧边栏插件
[仓库](https://github.com/shanyuhai123/vuepress-plugin-auto-sidebar)
[文档](https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar/)

```
# vuepress v2 alpha(vuepress v2 仍处于测试阶段)
npm i vuepress-plugin-auto-sidebar@alpha -D
```

<details><summary>新仓库插件初次设置(本仓库中已经有了)</summary>
VuePress v2 不再支持插件修改 sidebar，所以你需要自行引入生成的 `sidebar.js` 文件。

```
const sidebarConf = require('./sidebar')

module.exports = {
  plugins: [
    ["vuepress-plugin-auto-sidebar", {}]
  ],
  themeConfig: {
    sidebar: sidebarConf
  }
}
```

</details>

```yarn
yarn install
yarn docs:dev
```
