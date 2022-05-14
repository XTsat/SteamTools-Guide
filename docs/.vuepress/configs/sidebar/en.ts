import type { SidebarConfig } from '@vuepress/theme-default'

export const en: SidebarConfig = {
  '/en/': [
    {
      text: 'Start',
      collapsible: false,
      children: [
        '/en/document/Start/Download channel.md',
        '/en/document/Start/Functions.md',
        '/en/document/Start/Supported Operating Systems.md',
      ]
    },
    {
      text: 'Local Authentication',
      collapsible: false,
      children: [
        '/en/document/Steam Guard/2FA to import Guard.md',
        '/en/document/Steam Guard/Android to import Guard.md',
        '/en/document/Steam Guard/Apple to import Guard.md',
        '/en/document/Steam Guard/Login to import Guard.md',
        '/en/document/Steam Guard/Steam++ to import Guard.md',
        '/en/document/Steam Guard/Reference documents.md',
      ]
    },
    {
      text: 'ArchiSteamFarm',
      collapsible: false,
      children: [
        '/en/document/ASF/How to use ASF.md',
      ]
    },
    {
      text: 'FAQ',
      collapsible: false,
      children: [
        '/en/document/FAQ/FAQ.md',
        '/en/document/FAQ/Network problems.md',
      ]
    }
  ]
};