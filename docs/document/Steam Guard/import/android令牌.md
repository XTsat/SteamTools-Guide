# 安卓手机

安卓手机根据不同情况不同厂商可分为三种情况：
任意安卓手机，有root
部分安卓手机厂商，有自家备份软件，且备份文件无加密/加密可破解
手机无root，且无法备份对应数据/无法解密备份数据的，此方法由于是重新绑定，所以可能有暂挂

## 有root

[steam++令牌导入教程-从Android App导入-须root的方式](https://www.bilibili.com/read/cv10142098?from=articleDetail) [(BiliBili)@牛奶君](https://space.bilibili.com/484296)

- 一台绑定了目标账号令牌，并且已经被root的手机

## 无root

>需要一台绑定了目标账号令牌的手机，根据手机品牌不同，还需要不同的软件，这一方案并非全品牌适用

[steam++令牌导入教程-从Android App导入-无须root的方式](https://www.bilibili.com/read/cv10052462) [(BiliBili)@牛奶君](https://space.bilibili.com/484296)

本方案涉及手机品牌较多，总结概述为：

1. 通过具备高权限的手机厂商自家备份软件对 SteamApp 进行备份

2. 提取备份文件导入令牌

已知的相关教程链接：

>[~~vivo~~](https://keylol.com/t684133-1-1)新版已加密
>
>[小米](https://keylol.com/t524510-1-1)
>
>[LG](https://keylol.com/t582900-1-1)解密
>
>[~~华为~~](https://keylol.com/t666792-1-1)新版已修改加密

更多品牌手机可参考以上教程自行研究

## ADB

::: warning

保留数据卸载 app 也是有风险的，请做好要用备用码解绑的心理准备！

不过好处就是如果成功了，可以合理避免暂挂问题。

:::

### 准备工具

1. 电脑、数据线和一台安卓 10 以上的手机。（这里没查到从哪一个版本开始支持 adb uninstall -k 指令的，但我搜新闻都说是 10 以上）
2. Java SE 8，JRE 就行了，无需 JDK，安装版或压缩包皆可。（压缩包需自行配置环境变量
3. Steam 的 APK 文件，官方的即可。（因为要改，当然准备旧版的话就不用改了）
4. APK 修改工具，这里用的是 ApkTool 和 signapk。（用旧版的话无需下载）
5. ADB 工具包，没什么好说的
6. Android Backup Extractor，用于解包备份文件。

## 参考

- ADB
  - [利用adb可免root导出steam令牌](https://keylol.com/t670455-1-1) [(其乐 Keylol)@AK_Scrin](https://keylol.com/suid-193463)
  - [安卓手机利用 ADB 免 root 导出令牌（避免暂挂）](https://keylol.com/t757408-1-1) [(其乐 Keylol)@sffxzzp](https://keylol.com/suid-218128)
