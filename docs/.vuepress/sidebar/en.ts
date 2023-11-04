import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    {
      text: 'Start',
      collapsible: true,
      children: [
        '/en/document/Start/Download channel.html',
        '/en/document/Start/Functions.html',
        '/en/document/Start/Supported Operating Systems.html',
      ]
    },
    {
      text: 'Local Authentication',
      collapsible: true,
      children: [
        '/en/document/Steam Guard/2FA to import Guard.html',
        '/en/document/Steam Guard/Android to import Guard.html',
        '/en/document/Steam Guard/Apple to import Guard.html',
        '/en/document/Steam Guard/Login to import Guard.html',
        '/en/document/Steam Guard/Steam++ to import Guard.html',
        '/en/document/Steam Guard/Reference documents.html',
      ]
    },
    {
      text: 'ArchiSteamFarm',
      collapsible: true,
      children: [
        '/en/document/ASF/How to use ASF.html',
      ]
    },
    {
      text: 'FAQ',
      collapsible: true,
      children: [
        '/en/document/FAQ/FAQ.html',
        '/en/document/FAQ/Network problems.html',
      ]
    }
  ]
});
