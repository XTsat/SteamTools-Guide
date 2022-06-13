import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/': [
    {
      text: '开始使用',
      collapsible: false,
      children: [
        '/document/Start/Download channel.md',
        '/document/Start/Functions.md',
        '/document/Start/Supported Operating Systems.md',
      ]
    },
    {
      text: '本地令牌',
      collapsible: false,
      children: [
        {
          text: '如何获取令牌',
          children: [
            '/document/Steam Guard/import/2FA令牌',
            '/document/Steam Guard/import/android令牌',
            '/document/Steam Guard/import/ios令牌',
            '/document/Steam Guard/import/登录令牌',
            '/document/Steam Guard/import/Steam++令牌',
            '/document/Steam Guard/import/参考',
          ]

        }

      ]
    },
    {
      text: '自动挂卡',
      collapsible: false,
      children: [
        '/document/ASF/ASF.md',
        '/document/ASF/2FA.md',
      ]
    },
    {
      text: '常见问题',
      collapsible: false,
      children: [
        '/document/FAQ/FAQ.md',
        '/document/FAQ/网络.md',
      ]
    }
  ]
};