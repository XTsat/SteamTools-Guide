---
title: 首页
home: true
heroImage: /logo/Steam++Logo_1024.png
heroText: Watt Toolkit 指南
tagline: 🛠️「Watt Toolkit」是一个开源跨平台的多功能 Steam 工具箱。(原名 Steam++)
actions:
  - text: 官网
    link: https://steampp.net/
    type: secondary
  - text: GitHub
    link: https://github.com/BeyondDimension/SteamTools/
    type: secondary
  - text: 指南
    link: /document/
    type: primary
  - text: 下载
    link: /document/Start/Download channel.md
    type: primary
features:
  - title: 本地加速
    details: 使 Steam 社区、 Github 、谷歌验证码等国内难以访问的网页正常访问。功能类似 steamcommunit302 ，使用 Titanium-Web-Proxy 开源项目进行本地反代。
  - title: 脚本配置
    details: 通过加速服务拦截网络请求将一些 JS 脚本注入在网页中，提供类似网页插件的功能。
  - title: 账号切换
    details: 一键切换已在当前 PC 上登录过的 Steam 账号，与管理家庭共享库排序等功能。
  - title: 本地令牌
    details: 让您的手机令牌统一保存在电脑中，目前仅支持 Steam 令牌，后续会开发支持更多的令牌种类与云同步令牌。
  - title: 库存管理
    details: 让您直接管理到 Steam 游戏库存，不仅能够下载老版本的 Steam 游戏，也能够对 Steam 游戏成就进行直接管理，支持解锁成就以及反解锁成就。
  - title: 自动挂卡
    details: 集成 ArchiSteamFarm 在应用内提供 挂机掉落 Steam 集换式卡牌 等功能。
footer: <div>© 2022,Built with VuePress By <a href="https://github.com/XTsat">晓同</a></div><div><a href="https://github.com/XTsat/SteamTools-Guide">如果觉得这个指南有用的话,可以点击这个链接去 Github 点个 Star ⭐</a></div><br/><div>本指南是一个业余项目，不持有任何商标。</div><div>所有商标均为其各自所有者的财产。</div>
footerHtml: true
---

### 公告

#### 更名通知

Steam++ 更名为 Watt Toolkit

上架微软商店不能使用未经授权的商标,即与 Steam 相近的名字，要有v社的授权证明才能上架
[Microsoft Store 策略](https://docs.microsoft.com/zh-cn/windows/uwp/publish/store-policies#112-content-including-names-logos-original-and-third-party)
[下架原因](https://raw.githubusercontent.com/XTsat/SteamTools-Guide/56b2364c72c7adb1f91f1582ea2fb0239ece11d4/docs/.vuepress/public/Change-name/QQ%E5%9B%BE%E7%89%8720220512025429.png)

#### 2022-07-23

1. 非简中语言将默认隐藏加速和脚本功能，仅能通过切换语言并重启程序的方式还原被隐藏的功能
2. 因经济状况原因，现已停止短信服务节约开销，后续会推出邮箱注册登录，对于仅使用手机号登录的用户请绑定第三方快速登录，否则注销后将无法再次登录，需要等待至邮箱服务推出后支持会暂时在开放短信服务提供换绑邮箱。
3. 自动更新目前仅 Windows 端可用，且由于下载渠道限速可能导致无法更新成功，推荐在官网链接的网盘或群文件中下载压缩包解压覆盖更新(应用商店版由商店更新不受此影响)
4. 在 Android 上因系统限制，目前的加速功能无法正常使用，所以此功能已放弃继续开发，如仍想使用需要自行导入证书到系统目录，使用 adb 工具或 Magisk 之类的软件操作，未来会使用不需要证书的加速功能替换此功能
5. fde 版本需要安装 [ASP.NET Core 运行时 6.0.8 (x64) 与 .NET Core 运行时 6.0.8 (x64)](https://dotnet.microsoft.com/zh-cn/download/dotnet/6.0)
6. Windows x86 与 x64 版本令牌本机加密互不兼容，使用两者版本时注意令牌加密后的文件不能共用。
7. 由于新版本加速功能重构，调整了部分加速项目，这会影响旧版本程序使用加速功能
8. 为了能继续维持开发，从此版本开始将会添加程序内广告，赞助用户可以在设置中关闭所有广告
