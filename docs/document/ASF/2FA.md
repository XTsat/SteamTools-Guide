# 在 ASF 中使用 2FA

将 2FA 导入 ASF 中可以在运行 ASF 的时候自动验证令牌以及确认能市场交易

::: tip

注意，导入 ASF 中的 2FA 文件无法直接导出，请不要只保留 ASF 的 2FA 验证

:::

## 如何获取 `.maFile`

从Android/iOS：先参考我之前的帖子steam++令牌导入教程获取到“steamguard-xxxxx”文件，将文件后缀改为“.maFile”
从SDA（SteamDesktopAuthenticator）：打开SDA文件夹中的maFile文件夹，找到其中的“SteamID.maFile”文件[注]
[注]：请在复制前确保你的SDA没有设置加密，即使用记事本打开后第一个字符为“{”，如果不是，请在SDA中点击“Setup Encryption”，输入密码后连续点击三次“Accept”，将加密清空后再操作
从Steam++：首先在令牌处点击查看令牌详细数据按钮（如图第三个按钮）：
复制SteamGuard栏中的所有内容，创建一个新的文本文件，将复制的文本原样粘贴进去，将文件后缀改为“.maFile”

从WinAuth：首先右击条目，选择“Show SteamGuard and Recovery Code”：
勾选“Allow copy”以允许复制，然后选择最后一个大框中的所有内容，创建一个新的文本文件，将复制的文本原样粘贴进去，将文件后缀改为“.maFile”

其他二步验证应用：由于各个2FA应用获取信息方法各不相同，此处无法给出详细步骤，请根据各软件教程获取数据后，按如下格式保存后缀为“.maFile”的文件：