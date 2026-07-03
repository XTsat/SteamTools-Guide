import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    {
      text: 'Start',
      prefix: 'document/Start/',
      children: "structure",
    },
    {
      text: 'Steam Guard',
      prefix: 'document/Steam Guard/',
      children: "structure",
    },
    {
      text: 'ArchiSteamFarm',
      prefix: 'document/ASF/',
      children: "structure",
    },
    {
      text: 'FAQ',
      prefix: 'document/FAQ/',
      children: "structure",
    },
  ],
});
