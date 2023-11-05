import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    {
      text: 'Start',
      collapsible: true,
      children: [
        '/en/document/Start/Download channel',
        '/en/document/Start/Functions',
        '/en/document/Start/Supported Operating Systems',
      ]
    },
    {
      text: 'Local Authentication',
      collapsible: true,
      children: [
        '/en/document/Steam Guard/2FA to import Guard',
        '/en/document/Steam Guard/Android to import Guard',
        '/en/document/Steam Guard/Apple to import Guard',
        '/en/document/Steam Guard/Login to import Guard',
        '/en/document/Steam Guard/Steam++ to import Guard',
        '/en/document/Steam Guard/Reference documents',
      ]
    },
    {
      text: 'ArchiSteamFarm',
      collapsible: true,
      children: [
        '/en/document/ASF/How to use ASF',
      ]
    },
    {
      text: 'FAQ',
      collapsible: true,
      children: [
        '/en/document/FAQ/FAQ',
        '/en/document/FAQ/Network problems',
      ]
    }
  ]
});
