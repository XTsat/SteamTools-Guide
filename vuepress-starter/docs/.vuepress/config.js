module.exports = {
  // site config
  lang: 'zh-CN',
  title: 'Steam ++ 指南!',
  base: '/SteamTools-Guide/',
  description: '',

  // theme and its config
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/logo/Steam++ico.svg',
    navbar: [
      {
        text: '主页',
        link: '/'
      },
      {
        text: "帮助文档",
        link: '/documents'
      },
      {
        text: 'Group',
        children: ['/group/foo.md', '/group/bar.md'],
      },
      {
        text: '更新日志',
        link: 'https://github.com/BeyondDimension/SteamTools/releases'
      },
      {
        text: 'Github',
        link: 'https://github.com/XTsat/SteamTools-Guide'
      },
    ],
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
      "vuepress-plugin-clipboard",
      {
        align: "top"
      }
    ]
  ]
},
}
