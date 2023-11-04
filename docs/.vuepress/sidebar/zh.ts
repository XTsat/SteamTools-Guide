import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    // {
    //   text: '目录',
    //   collapsible: false,
    //   children: [
    //     '/zh/document/Start/Functions',
    //   ]
    // },
    {
      text: '开始使用 🛠️',
      collapsible: false,
      children: [
        '/zh/document/Start/Download channel',
        '/zh/document/Start/Functions',
        '/zh/document/Start/Supported Operating Systems',
      ]
    },
    {
      text: '功能指南 📝',
      link: '/zh/document/Functions/Network Acceleration/info.md',
    },
    {
      text: '常见问题 ❓',
      collapsible: false,
      children: [
        '/zh/document/FAQ/FAQ',
        '/zh/document/FAQ/网络',
        '/zh/document/FAQ/GPU',
      ]
    },
  ],

  '/zh/document/Functions/': [
    {
      text: '回到指南',
      link: '/zh/document/',
    },
    {
      text: '网络加速',
      collapsible: false,
      children: [
        '/zh/document/Functions/Network Acceleration/info',
      ]
    },
    {
      text: '脚本配置',
      collapsible: false,
      children: [
        '/zh/document/Functions/Userscript/info',
      ]
    },
    {
      text: '账号切换',
      collapsible: false,
      children: [
        '/zh/document/Functions/Account Switch/info',
      ]
    },
    {
      text: '库存游戏',
      collapsible: false,
      children: [
        '/zh/document/Functions/Library/info',
      ]
    },
    {
      text: '本地令牌',
      collapsible: false,
      children: [
        '/zh/document/Functions/Steam Guard/info',
        {
          text: '导入令牌',
          children: [
            '/zh/document/Functions/Steam Guard/import/2FA令牌',
            '/zh/document/Functions/Steam Guard/import/android令牌',
            '/zh/document/Functions/Steam Guard/import/ios令牌',
            '/zh/document/Functions/Steam Guard/import/登录令牌',
            '/zh/document/Functions/Steam Guard/import/Steam++令牌',
            '/zh/document/Functions/Steam Guard/import/参考',
          ]
        },
      ]
    },
    {
      text: '自动挂卡',
      collapsible: false,
      children: [
        '/zh/document/Functions/ASF/ASF',
        '/zh/document/Functions/ASF/使用ASF',
        '/zh/document/Functions/ASF/2FA',
        '/zh/document/Functions/ASF/常用指令',
      ]
    },
    {
      text: '游戏工具',
      collapsible: false,
      children: [
        '/zh/document/Functions/Game tools/info',
      ]
    },
  ],

  '/zh/development/': [
    {
      text: '回到指南',
      link: '/zh/document/',
    },
    {
      text: '参与开发',
      collapsible: false,
      children: [
        '/zh/development/文档开发',
        '/zh/development/项目结构',
        '/zh/development/开发环境',
      ]
    },
    {
      text: '开发日志',
      collapsible: false,
      children: [
        '/zh/development/更新日志',
        '/zh/development/文件校验',
      ]
    },
  ],
});
