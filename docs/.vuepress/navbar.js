const navbar = [
  {
    text: '主页',
    link: '/'
  },
  {
    text: 'Steam++ 指南',
    link: '/Steam++/',
  },
  {
    text: '下载',
    children: [
      {
        text: '所有下载',
        children: [
          {
            text: 'GitHub 发行版',
            link: 'https://github.com/BeyondDimension/SteamTools/releases'
          },
          {
            text: 'Gitee 发行版',
            link: 'https://gitee.com/rmbgame/SteamTools/releases'
          },
          {
            text: 'Official WebSite',
            link: 'https://steampp.net'
          },
          {
            text: 'Arch Linux Package',
            link: 'https://aur.archlinux.org/packages/steam%2B%2B-bin'
          },
        ]
      },
      {
        text: '下载 Windows 版',
        children: [
          {
            text: '免安装版直链下载(Gitee)',
            link: 'https://gitee.com/rmbgame/SteamTools/attach_files/984964/download/'
          },
          {
            text: '安装版直链下载(Gitee)',
            link: 'https://gitee.com/rmbgame/SteamTools/attach_files/984963/download/'
          },
          {
            text: '蓝奏云网盘 提取码:1234',
            link: 'https://cliencer.lanzoux.com/b01v4iz1g'
          },
          {
            text: '阿里云盘',
            link: 'https://www.aliyundrive.com/s/KDCFrongF7F'
          },
          {
            text: '奶牛快传',
            link: 'https://cowtransfer.com/s/94ce5dfa928f45'
          },
          {
            text: '百度网盘',
            link: 'https://pan.baidu.com/s/1xQ-RJEwd3y1nwUX7YZQ5nQ?pwd=ce4h'
          },
          {
            text: 'Nas 分流',
            link: 'https://pan.mossimo.net:5212/s/4yiQ'
          },
        ]
      },
      {
        text: '下载 UWP 版',
        children: [
          {
            text: '微软商店直接安装',
            link: 'https://www.microsoft.com/store/productId/9MTCFHS560NG'
          },
        ]
      },
      {
        text: '下载 macOS 版',
        children: [
          {
            text: '蓝奏云网盘 提取码:1234',
            link: 'https://wwe.lanzouy.com/b01v4izaf'
          },
          {
            text: '百度网盘',
            link: 'https://pan.baidu.com/s/1UaVrxC1F1GtkLTdC25yK-w?pwd=wg4x'
          },
          {
            text: '阿里云盘',
            link: 'https://www.aliyundrive.com/s/KDCFrongF7F'
          },
          {
            text: '奶牛快传',
            link: 'https://cowtransfer.com/s/94ce5dfa928f45'
          },
          {
            text: 'Nas 分流',
            link: 'https://pan.mossimo.net:5212/s/4yiQ'
          },
        ]
      },
      {
        text: '下载 Linux 版',
        children: [
          {
            text: '蓝奏云网盘 提取码:1234',
            link: 'https://wwe.lanzouy.com/b01v4iz7c'
          },
          {
            text: '阿里云盘',
            link: 'https://www.aliyundrive.com/s/KDCFrongF7F'
          },
          {
            text: '百度网盘',
            link: 'https://pan.baidu.com/s/1WOQBEg7hl92Lq7mjONlFJg?pwd=7tbn'
          },
          {
            text: '奶牛快传',
            link: 'https://cowtransfer.com/s/94ce5dfa928f45'
          },
          {
            text: 'Nas 分流',
            link: 'https://pan.mossimo.net:5212/s/4yiQ'
          },
        ]
      },
      {
        text: '下载 Android 版',
        children: [
          {
            text: '蓝奏云网盘 提取码:1234',
            link: 'https://wwe.lanzouy.com/b01v4izfa'
          },
          {
            text: '阿里云盘',
            link: 'https://www.aliyundrive.com/s/KDCFrongF7F'
          },
          {
            text: '奶牛快传',
            link: 'https://cowtransfer.com/s/94ce5dfa928f45'
          },
          {
            text: '百度网盘',
            link: 'https://pan.baidu.com/s/1Tnu9s10n57i8Fd9EmgTZBw?pwd=hk5f'
          },
        ]
      },
      {
        text: '下载 iOS 版',
        children: [
          {
            text: '敬请期待',
            link: ''
          },
        ]
      },
    ],
  },
  {text: '官方',
  children: [
    {
      text: '官方链接',
      children: [
        {
          text: '官网',
          link: 'https://steampp.net'
        },
        {
          text: 'GitHub',
          link: 'https://github.com/BeyondDimension/SteamTools'
        },
        {
          text: '更新日志',
          link: 'https://steampp.net/changelog'
        },
        {
          text: '发行日志',
          link: 'https://github.com/BeyondDimension/SteamTools/releases'
        },
      ]
    },
    {
      text: '作者',
      children: [
        {
          text: '软妹币玩家',
          link: 'https://space.bilibili.com/797215'
        },
        {
          text: 'Cliencer克总',
          link: 'https://space.bilibili.com/30031316'
        },
      ]
    },
    {
      text: '交流',
      children: [
        {
          text: 'Github反馈',
          link: 'https://github.com/BeyondDimension/SteamTools/issues'
        },
        {
          text: 'Steam 组',
          link: 'https://steamcommunity.com/groups/steamtool'
        },
      ]
    },
    {
      text: 'QQ群',
      children: [
        {
          text: 'QQ 一群 (53617681)',
          link: 'https://qm.qq.com/cgi-bin/qm/qr?k=EvP8VZ-ByGjMlbLvrj4x4YJ8C_bhTisG&authKey=toKraTwFoTlJKXSuBv7A87W0qKb0vSRrozVLXW0dVcvOmEP98T/t+MZK9qFi26fb&noverify=0'
        }, 
        {
          text: 'QQ 二群 (479036439)',
          link: 'https://qm.qq.com/cgi-bin/qm/qr?k=gcFoBFtXoWAd1JUMgdaJ3w8eP7Cpg50J&authKey=Z3Jc%2BhxKoku1n895f2HsS%2FRbsI7FQIeljQnWpnpBhK48U%2BTVrRUT3GJ7oWFAFNHY&noverify=0&group_code=479036439'
        }, 
        {
          text: 'QQ 三群 (101075312)',
          link: 'https://qm.qq.com/cgi-bin/qm/qr?k=vhZ4jXXCQDPmQrewjUMIaLSuQsx-Kig5&authKey=UkKWlFSpHRRL%2F6C7KE73zj%2FJUUY7PKu%2FD0XBA2xUGR9oeCXH1wyAAamIGfqbHOaQ&noverify=0&group_code=101075312'
        }, 
        {
          text: 'QQ 四群 (960746023)',
          link: 'https://qm.qq.com/cgi-bin/qm/qr?k=TeMwmsvPZgdU2RKK9cDQV-4kGvyDwQ1h&authKey=Zt0OTXgCdrwJInjcrqA0VF%2FCX2%2F3PFqRayo%2BCLXPmIFe2OmFCRtKrkc3u5%2FaqdJt&noverify=0&group_code=960746023'
        },
      ]
    },
  ],
},
  {text: '关于我',
  children: [
        {
          text: 'BiliBili 📺',
          link: 'https://space.bilibili.com/53283118'
        },
        {
          text: 'Steam 🎮',
          link: 'https://steamcommunity.com/id/XTxiaotong'
        },
        {
          text: 'Playlist 🎵',
          link: 'https://music.163.com/#/user/home?id=283588276'
        },
        {
          text: 'GitHub',
          link: 'https://github.com/XTsat'
        },
  ]
  },
]

module.exports = navbar