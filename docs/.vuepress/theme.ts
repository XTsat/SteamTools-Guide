import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

// 用于 sitemap、RSS feed 等 SEO 资源
// Vercel 构建时自动注入 VERCEL=1，GitHub Actions 不会
const hostname = process.env.VERCEL === '1'
  ? "https://steamtools-guide.xtsat.cc.cd/"
  : "https://xtsat.github.io/SteamTools-Guide/";

export default hopeTheme({
  hostname,

  // author: {
  //   name: "Watt Toolkit",
  //   url: "https://github.com/XTsat/SteamTools-Guide",
  // },

  logo: "/logo/v3/Icon.ico",

  repo: "XTsat/SteamTools-Guide",
  docsRepo: "XTsat/SteamTools-Guide",
  docsBranch: "vp-hope-dev",
  docsDir: "docs",

  locales: {

    "/": {
      navbar: zhNavbar,
      sidebar: zhSidebar,

      footer: "「Watt Toolkit」是一个开源跨平台的多功能 Steam 工具箱。",

      displayFooter: true,

      metaLocales: {
        editLink: "编辑此页",
      },
    },

    "/en/": {
      navbar: enNavbar,
      sidebar: enSidebar,

      footer: '"Watt Toolkit" is an open source cross-platform multi-purpose game toolkit',

      displayFooter: true,

      metaLocales: {
        editLink: "Edit this page",
      },
    },
  },

  plugins: {
    comment: {
      provider: "Waline",
      serverURL: "https://waline.xtsat.cc.cd/",
      dark: "auto",
      emoji: [
        "//unpkg.com/@waline/emojis@1.1.0/weibo",
        "//unpkg.com/@waline/emojis@1.1.0/bilibili",
        "//unpkg.com/@waline/emojis@1.1.0/bmoji",
        "//unpkg.com/@waline/emojis@1.1.0/qq",
        "//unpkg.com/@waline/emojis@1.1.0/tieba",
      ],
      requiredMeta: ["nick", "mail"],
    },

    // icon: {
    //   assets: "iconfont",
    // },

    redirect: {
      defaultLocale: "/",
      switchLocale: "modal",
      localeConfig: {
        "/": ["zh-CN", "zh-TW"],
        "/en/": ["en-US", "en-UK"],
      },
    },

    // components: {
    //   components: ["Badge", "BiliBili"],
    //   rootComponents: {
    //     notice: [
    //       {
    //         path: "/",
    //         title: "版本说明",
    //         content: " 本指南目前基于 Watt Toolkit 3.1.0 版本制作 ",
    //         fullscreen: false,
    //         showOnce: true,
    //       },
    //     ],
    //   },
    // },

    feed: {
      rss: true,
    },

    sitemap: {
      changefreq: "weekly",
    },
  },

  markdown: {
    gfm: true,
    imgLazyload: true,

    component: true,
    footnote: true,
    imgMark: true,
    imgSize: true,
    include: true,
    tabs: true,
    tasklist: true,

    align: true,
  },

},
);
