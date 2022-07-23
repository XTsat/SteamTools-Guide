import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/': [
    // {
    //   text: '目录',
    //   collapsible: false,
    //   children: [
    //     '/document/Start/Functions',
    //   ]
    // },
    {
      text: '开始使用 🛠️',
      collapsible: false,
      children: [
        '/document/Start/Download channel',
        '/document/Start/Functions',
        '/document/Start/Supported Operating Systems',
      ]
    },
    {
      text: '功能指南 📝',
      link: '/document/Functions/Network Acceleration/info.md',
    },
    {
      text: '常见问题 ❓',
      collapsible: false,
      children: [
        '/document/FAQ/FAQ',
        '/document/FAQ/网络',
        '/document/FAQ/GPU',
      ]
    },
  ],

  '/document/Functions/': [
    {
      text: '回到指南',
      link: '/document/',
    },
    {
      text: '网络加速',
      collapsible: false,
      children: [
        '/document/Functions/Network Acceleration/info',
      ]
    },
    {
      text: '脚本配置',
      collapsible: false,
      children: [
        '/document/Functions/Userscript/info',
      ]
    },
    {
      text: '账号切换',
      collapsible: false,
      children: [
        '/document/Functions/Account Switch/info',
      ]
    },
    {
      text: '库存游戏',
      collapsible: false,
      children: [
        '/document/Functions/Library/info',
      ]
    },
    {
      text: '本地令牌',
      collapsible: false,
      children: [
        '/document/Functions/Steam Guard/info',
        {
          text: '导入令牌',
          children: [
            '/document/Functions/Steam Guard/import/2FA令牌',
            '/document/Functions/Steam Guard/import/android令牌',
            '/document/Functions/Steam Guard/import/ios令牌',
            '/document/Functions/Steam Guard/import/登录令牌',
            '/document/Functions/Steam Guard/import/Steam++令牌',
            '/document/Functions/Steam Guard/import/参考',
          ]
        },
      ]
    },
    {
      text: '自动挂卡',
      collapsible: false,
      children: [
        '/document/Functions/ASF/ASF',
        '/document/Functions/ASF/使用ASF',
        '/document/Functions/ASF/2FA',
        '/document/Functions/ASF/常用指令',
      ]
    },
    {
      text: '游戏工具',
      collapsible: false,
      children: [
        '/document/Functions/Game tools/info',
      ]
    },
  ],

  '/development/': [
    {
      text: '回到指南',
      link: '/document/',
    },
    {
      text: '开发日志',
      collapsible: false,
      children: [
        '/development/更新日志',
      ]
    },
    {
      text: '参与开发',
      collapsible: false,
      children: [
        '/development/开发文档',
      ]
    },
  ],

};