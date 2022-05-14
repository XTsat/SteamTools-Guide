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
        '/document/Steam Guard/2FA to import Guard.md',
        '/document/Steam Guard/Android to import Guard.md',
        '/document/Steam Guard/Apple to import Guard.md',
        '/document/Steam Guard/Login to import Guard.md',
        '/document/Steam Guard/Steam++ to import Guard.md',
        '/document/Steam Guard/Reference documents.md',
      ]
    },
    {
      text: '自动挂卡',
      collapsible: false,
      children: [
        '/document/ASF/How to use ASF.md',
      ]
    },
    {
      text: '常见问题',
      collapsible: false,
      children: [
        '/document/FAQ/FAQ.md',
        '/document/FAQ/Network problems.md',
      ]
    }
  ]
};