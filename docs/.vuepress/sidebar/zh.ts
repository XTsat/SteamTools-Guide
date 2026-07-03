import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
  ],

  "/document/": [
    {
      text: '开始使用 🛠️',
      link: '/document/README.md',
    },
    {
      text: '功能指南 📝',
      prefix: 'Functions/',
      children: "structure",
    },
    {
      text: '常见问题 ❓',
      prefix: 'FAQ/',
      children: "structure",
    },
  ],

  "/development/": [
    {
      text: '参与开发',
      children: "structure",
    },
  ],
});
