import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

import theme from "./theme.ts";

const isVercel = process.env.VERCEL === '1'
const base = isVercel ? '/' : '/SteamTools-Guide/'

export default defineUserConfig({
  bundler: viteBundler(),
  base,

  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `/logo/favicon.ico`,
      },
    ],
  ],

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Watt Toolkit 指南',
      description: '「Watt Toolkit」是一个开源跨平台的多功能 Steam 工具箱。',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Watt Toolkit Guide',
      description: 'Watt Toolkit" is an open source cross-platform multi-purpose game toolkit',
    },
  },

  theme,

  plugins: [
  ],
}
)
