# 苹果手机

## 已越狱

用 **Filza** 打开`/var/mobile/Containers/Data/Application/{字符串}`，数字串位置为Steam 数据文件夹，可能不一样，Filza会显示为“Steam”
用文本方式打开`/Documents/Steamguard-xxxxxxxxxxxxxxxx`，到最下面找到 otpauth 那一栏粘贴到 Steam++
用文本方式打开`/Library/Preferences/com.valvesoftware.Steam`，并找到`<string/var/mobile/Containers/Data/Application/XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX/Library/Caches</string`，复制`XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX`并在最前面添加`android:`并粘贴到 Watt Toolkit

## 未越狱，可能有暂挂

1. 将手机上的 Steam App 降级到 `2.0.16`（**这里虽说降级，但是一定要删掉原Steam，重新安装2.0.16版本！！！**），其他版本没有测试，反正 App Store 里最新版是不行的。因为 Steam 更新以后，将验证码存放在了更安全的地方。具体怎么安装旧版的 App，自己百度。
2. 利用 iTunes 备份 iPhone，备份的时候**不要选**加密备份。备份完确保这个路径下确实有备份文件
   - Windows `C:\Users\用户名\AppData\Roaming\Apple Computer\MobileSync\Backup\`
   - macOS `/Users/用户名/Library/Application Support/MobileSync/Backup/`

3. 下载 [工具](https://github.com/AigioL/ios-steamguard-extractor/releases) 解压后进行下一步
   - Windows
     - 如果你的系统是 64 位，则下载 `win-x64.7z`
     - 如果你不知道你的系统是不是 64 位或者你的系统是 32 位，则下载 `win-x86.7z`
     - 如果你使用 ARM 芯片的 PC（较为稀有），例如 Surface Pro X，则下载 `win-arm64.7z`
   - macOS/OSX
     - 下载 `osx-x64.7z`
   - linux
     - 如果你 CPU 是 Intel/AMD 的 x86 芯片（较为普遍），则下载 `linux-x64.7z`
     - 如果你 CPU 是 ARM 芯片，例如 树莓派，则下载 `linux-arm64.7z`

4. 运行工具，然后点击最下的按钮，选择备份文件所在的目录，默认会定向到上面的路径，点击确定，会看到如下的信息

    ![image](https://user-images.githubusercontent.com/33802186/123431177-92b86e00-d5fb-11eb-92df-3dd8257d636f.png)
5. 然后在Steam++中导入即可。`android`字样也要复制，下面的`{}`符号也要复制

   <img alt="image" width="643" src="https://user-images.githubusercontent.com/33802186/123431117-7e747100-d5fb-11eb-99b4-eb538c91b19e.png">

参考自：[CaitSith2/ios-steamguard-extractor#4 (comment)](https://github.com/CaitSith2/ios-steamguard-extractor/issues/4#issuecomment-817247572)

简单步骤：

   1. 解绑Steam令牌
   2. 卸载并安装`iTunes旧版`
   3. 使用 `iOS旧版应用下载` 下载`旧版本Steam`
   4. `提取ipa`并使用`爱思助手等工具`安装
   5. 绑定令牌并备份数据

## 参考

- 已越狱
  - [iOS 添加 Watt Toolkit 本地令牌方法（需越狱）](https://github.com/SteamTools-Team/SteamTools/issues/95) Steam++ issues #95
  - [越狱IOS设备无损导入Steam令牌至Steam++](https://keylol.com/t728973-1-1)
- 未越狱
  - [Watt Toolkit 添加 iOS 本地令牌方法（无需越狱！！！）](https://github.com/BeyondDimension/SteamTools/issues/299) Steam++ issues #299
  - [高版本的iOS导出Steam手机令牌教程](https://keylol.com/t696543-1-1)
  - [2021未越狱iOS设备提取Steam令牌导入ASF的方法](https://keylol.com/t703874-1-1)
- 云端
  - [\[云挂卡\]未越狱iOS设备也可以使用ASF 2FA功能了](https://keylol.com/t245711-1-1)
