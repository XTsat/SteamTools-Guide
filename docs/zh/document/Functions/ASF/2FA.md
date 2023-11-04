# 在 ASF 中使用 2FA

将 2FA 导入 ASF 中可以在运行 ASF 的时候自动验证令牌以及确认能市场交易

::: tip

注意，导入 ASF 中的 2FA 文件无法直接导出，请不要只保留 ASF 的 2FA 验证

:::

## 导入 2FA

选择一个机器人 -> 点击锁图标的 `两步验证` -> 点击 `导入验证器` -> 选择后缀为 `.mafile` 的令牌文件

## 如何获取 `.mafile`

### Android/iOS

参考 [steam++令牌导入教程](/document/Steam Guard/import/android令牌) 获取到 `steamguard-xxxxx` 文件，将文件后缀改为 `.mafile`

### SteamDesktopAuthenticator

打开SDA文件夹中的 `maFile` 文件夹，找到其中的 `SteamID.mafile` 文件

请在复制前确保你没有设置加密，即使用记事本打开后第一个字符为 `{` ，如果不是，请在SDA中点击 `Setup Encryption` ，输入密码后连续点击三次 `Accept` ，将加密清空后再操作

### Steam++

首先在令牌处点击查看令牌详细数据按钮（如图第三个按钮）

复制 SteamGuard 栏中的所有内容，创建一个新的文本文件，将复制的文本原样粘贴进去，将文件后缀改为 `.mafile`

### WinAuth

首先右击条目，选择 `Show SteamGuard and Recovery Code`

勾选 `Allow copy` 以允许复制，然后选择最后一个大框中的所有内容，创建一个新的文本文件，将复制的文本原样粘贴进去，将文件后缀改为 `.mafile`

### 其他二步验证应用

由于各个 2FA 应用获取信息方法各不相同，此处无法给出详细步骤，请根据各软件教程获取数据后，按如下格式保存后缀为 .mafile 的文件

``` json
{
  "shared_secret": "字符串",
  "identity_secret": "字符串"
}
```
