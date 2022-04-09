# Steam++ 指南

[仓库地址 `https://github.com/XTsat/SteamTools-Guide`](https://github.com/XTsat/SteamTools-Guide)

[网页地址 `https://xtsat.github.io/SteamTools-Guide`](https://xtsat.github.io/SteamTools-Guide)

**注意**：此教程具有一定的时效性，请注意最后更新时间和steam++版本

## 什么是 Steam++？

🛠「Steam++」是一个开源跨平台的多功能Steam工具箱。

[Steam++ 官网](https://steampp.net/)

[GitHub 开源仓库](https://github.com/SteamTools-Team/SteamTools)

[\[原创发布\]Steam++ 工具箱](https://keylol.com/t667906-1-1) [(其乐 Keylol)@软妹币玩家](https://keylol.com/suid-269966)

## 怎么下载 Steam++

- [GitHub Releases](https://github.com/BeyondDimension/SteamTools/releases)
- [Gitee Releases](https://gitee.com/rmbgame/SteamTools/releases)
- [Official WebSite](https://steampp.net)
- [Arch Linux Package](https://aur.archlinux.org/packages/steam%2B%2B-bin)(By [zhanghua000](https://github.com/zhanghua000))

## [如何导入steam令牌](Docs/How-To-Import-Steam-Token.md)

- [如何导入steam令牌](Docs/How-To-Import-Steam-Token.md)

- [steam++令牌导入教程](https://keylol.com/t710508-1-1) [(其乐 Keylol)@cyb233](https://keylol.com/suid-988278)

- [steam++令牌导入教程](https://www.bilibili.com/read/cv10145839) [(BiliBili)@牛奶君](https://space.bilibili.com/484296)

## 常见问题解决办法

遇到问题可以先尝试更新到最新版本，可能新版本已经修复了问题

点 `关于` `检查更新` 即可

![检查更新](./Photo/Home/Setting-Update.png)
![检查更新](./Photo/Home/Setting-Update-dark.png)

### 网络问题

#### host 文件相关(只读，拒绝访问，没有权限)

- 请前往 `C:\Windows\System32\drivers\etc` ，右击`host`文件，打开 `属性` ，取消下面的 `只读` 选项。

- 只读也可能是被其他软件占用，或者因杀毒软件拦截导致的，如果 `hosts` 文件没有自定义的内容，可以先删除该文件后再启动，或者使用 系统代理模式，文件位于 `C:\Windows\System32\drivers\etc\hosts`

- 或者通过断网一键修复程序自动重置 host 问题，如 `360断网急救箱` `火绒断网修复`

#### 程序崩溃后无法连接网络

- 程序加速过程中崩溃后，社区/游戏服务器无法连接是因为崩溃后写入 `host` 的 `127.0.0.1` 未被正常消除，可以取消加速后重新打开，也可以手动清理掉 `host` 文件

- 或者通过断网一键修复程序自动重置 `host` 问题，如 `360断网急救箱` `火绒断网修复`

>崩溃后无网络的问题，是因为加速和停止加速本来有正常的逻辑要执行，因为在加速中将程序强退了，所以停止加速的逻辑没执行，也就没还原加速所修改的配置导致的。
>
>遇到这个问题可以尝试还原hosts文件，关闭windows系统代理，重置网络服务

---

[回到目录](#steam-指南)
