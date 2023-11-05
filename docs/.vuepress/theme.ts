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
  
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  // locales: {
  //   "/en/": {
  //     navbar: enNavbar,
  //     sidebar: enSidebar,

  //     footer: '"Watt Toolkit" is an open source cross-platform multi-purpose game toolkit',

  //     displayFooter: true,

  //     // metaLocales: {
  //     //   editLink: "Edit this page on GitHub",
  //     // },
  //   },

  //   "/zh/": {
  //     navbar: zhNavbar,
  //     sidebar: zhSidebar,

  //     footer: "「Watt Toolkit」是一个开源跨平台的多功能 Steam 工具箱。",

  //     displayFooter: true,

  //     // metaLocales: {
  //     //   editLink: "在 GitHub 上编辑此页",
  //     // },
  //   },
  // },

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

    // components: {
    //   components: ["Badge", "BiliBili"],
    // },

    // feed: {
    //   rss: true,
    // },

    // sitemap: {
    //   changefreq: "weekly",
    // },

    // mdEnhance: {
    //   gfm: true,
    //   imgLazyload: true,
    //   include: true,
    //   tabs: true,
    // },

    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: false,
    //   cachePic: true,
    //   appendBase: true,
    //   themeColor: "#f26d6d",
    //   update: "hint",
    //   apple: {
    //     icon: "/favicon.ico",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/favicon.ico",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/pwa-icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/pwa-icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/pwa-icon/chrome-144.png",
    //         sizes: "144x144",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/pwa-icon/chrome-72.png",
    //         sizes: "72x72",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/pwa-icon/chrome-96.png",
    //         sizes: "96x96",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/pwa-icon/chrome-48.png",
    //         sizes: "48x48",
    //         type: "image/png",
    //       },
    //     ],
    //   },
    // },
  },
});
