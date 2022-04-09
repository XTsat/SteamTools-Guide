const navbar = require('./navbar')
const sidebarConf = require('./sidebar')

module.exports = {
  // site config
  lang: 'zh-CN',
  title: 'Steam ++ 指南!',
  base: '/SteamTools-Guide/',
  description: '',

  // theme and its config
  theme: '@vuepress/theme-default',
  themeConfig: {
    displayAllHeaders: true,
    logo: '/logo/Steam++ico.svg',
    navbar,
    
    // sidebar: require('./sidebar'),
    sidebar: 'auto',
    sidebar: sidebarConf,

    repo: 'XTsat/SteamTools-Guide',
    editLink: true,
    editLinkText: '编辑此页',
    docsRepo: 'XTsat/SteamTools-Guide',
    docsBranch: 'VuePress',
    docsDir: 'XTsat/SteamTools-Guide',
    contributors: true,
    lastUpdated: 'Last Updated',
    contributorsText: '贡献者',
    lastUpdatedText: '上次更新',
    tip: '提示',
    warning: '警告',
    danger: '危险',
    notFound: ["找不到该页面"],
    backToHome: '返回首页',
},

  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: '搜索文档',
            hotKeys: ['/']
          }
        }
      }
    ],
    [
      "vuepress-plugin-auto-sidebar",
      {
        title: {
        // 更多选项: 
        // `default`、`lowercase`、`uppercase`、`capitalize`、`camelcase`、`kebabcase`、`titlecase`
        mode: "titlecase"
        },
        removeEmptyGroup: true,
      }
    ],
  ],
  
}
