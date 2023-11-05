import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://xtsat.github.io/SteamTools-Guide/",

  author: {
    name: "SteamTools Guide",
    url: "https://github.com/SteamTools-Guide",
  },

  iconAssets: "iconfont",

  logo: '/logo/Steam++ico.svg',

  repo: "XTsat/SteamTools-Guide",
  docsRepo: "XTsat/SteamTools-Guide",
  docsBranch: 'vp-hope',
  docsDir: "docs",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime","PageView"],

  locales: {

    "/zh/": {
      navbar: zhNavbar,
      sidebar: zhSidebar,

      footer: "「Watt Toolkit」是一个开源跨平台的多功能 Steam 工具箱。",

      displayFooter: true,

      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },

    "/en/": {
      navbar: enNavbar,
      sidebar: enSidebar,

      footer: '"Watt Toolkit" is an open source cross-platform multi-purpose game toolkit',

      displayFooter: true,

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },
  },

  plugins: {
    comment: {
      provider: "Waline",
      serverURL: "https://document-waline.vercel.app/",
      emoji: [
        "//unpkg.com/@waline/emojis@1.1.0/weibo",
        "//unpkg.com/@waline/emojis@1.1.0/bilibili",
        "//unpkg.com/@waline/emojis@1.1.0/bmoji",
        "//unpkg.com/@waline/emojis@1.1.0/qq",
        "//unpkg.com/@waline/emojis@1.1.0/tieba",
      ],
      requiredMeta: ["mail"],
      reaction: false,
    },

    components: {
      components: ["Badge", "BiliBili"],
    },

    feed: {
      rss: true,
    },

    sitemap: {
      changefreq: "weekly",
    },

    mdEnhance: {
      gfm: true,
      imgLazyload: true,
      include: true,
      tabs: true,
    },

  },
});
