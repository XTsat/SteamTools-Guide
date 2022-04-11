const navbar = require('./config/navbar')
const sidebarConf = require('./config/sidebar')

// import { navbar, sidebar } from './configs'

module.exports = {

  lang: 'zh-CN',
  title: 'Steam ++ 指南!',
  description: '',
  base: '/XTsat/SteamTools-Guide/',

  head: [
    ["link", { rel: "icon", href: "/logo/Steam++Logo_1024.png" }],
  ],

  // open: true,

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
    repoLabel: 'GitHub文档',

    editLink: true,
    editLinkText: '编辑此页',

    docsRepo: 'XTsat/SteamTools-Guide',
    docsBranch: 'VuePress',
    docsDir: 'docs',

    lastUpdated: true,
    lastUpdatedText: '最后更新时间',
    contributors: true,
    contributorsText: '编辑人',

    // 自定义容器 的默认标题
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
          },
          '/en/': {
            placeholder: 'search Docs',
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
