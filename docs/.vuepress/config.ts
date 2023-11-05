import { defineUserConfig } from 'vuepress'

import { redirectPlugin } from "vuepress-plugin-redirect";

import theme from "./theme.ts";

// const { searchPlugin } = require('@vuepress/plugin-search')

export default defineUserConfig({
  base: '/SteamTools-Guide/',

  head: [
    // [
    //   'link',
    //   {
    //     rel: 'icon',
    //     type: 'image/png',
    //     sizes: '16x16',
    //     href: `/logo/favicon.ico`,
    //   },
    // ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `/SteamTools-Guide/logo/favicon.ico`,
      },
    ],
    // ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    // ['meta', { name: 'application-name', content: 'VuePress' }],
    // ['meta', { name: 'apple-mobile-web-app-title', content: 'VuePress' }],
    // [
    //   'meta',
    //   { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    // ],
    // [
    //   'link',
    //   { rel: 'apple-touch-icon', href: `/images/icons/apple-touch-icon.png` },
    // ],
    // [
    //   'link',
    //   {
    //     rel: 'mask-icon',
    //     href: '/images/icons/safari-pinned-tab.svg',
    //     color: '#3eaf7c',
    //   },
    // ],
    // ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
    // ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],

  locales: {
    '/zh/': {
      lang: 'zh_CN',
      title: 'Watt Toolkit 指南',
      description: '「Watt Toolkit」是一个开源跨平台的多功能 Steam 工具箱。',
    },
    '/en/': {
      lang: 'en_US',
      title: 'Watt Toolkit Guide',
      description: 'Watt Toolkit" is an open source cross-platform multi-purpose game toolkit',
    },
  },

  theme,

  plugins: [
    // searchPlugin({
    //   // 配置项
    //   locales: {
    //     '/en/': {
    //       placeholder: 'Search',
    //       hotKeys: ['/']
    //     },
    //     '/': {
    //       placeholder: '搜索文档',
    //       hotKeys: ['/']
    //     }
    //   },
    // }),
    redirectPlugin({
      defaultLocale: "/zh/",
      autoLocale: true,
      switchLocale: "modal",
      localeConfig: {
        "/en/": ["en-US", "en-UK", "en"],
        "/zh/": ["zh-CN", "zh-TW", "zh"],
      },
    }),
  ],
}
)
