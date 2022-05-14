# Apple phone import token

## Jailbroken

This program is quoted and modified from[Steam++ issues #95](https://github.com/SteamTools-Team/SteamTools/issues/95)

Open `/var/mobile/Containers/Data/Application/{String}` with **Filza**, the number string location is Steam data folder, it may be different, Filza will show it as "Steam"
Open `/Documents/Steamguard-xxxxxxxxxxxxxxxx` with text, go to the bottom and find the otpauth column and paste it into Steam++
Open `/Library/Preferences/com.valvesoftware.Steam` with text and find `<string>/var/mobile/Containers/Data/Application/XXXXXXXX-XXXX-XXXX-XXXX- XXXXXXXXXXXXXX/Library/Caches</string>`, copy `XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXXXX` and add `android:` at the top and paste it into Watt Toolkit

## Not jailbroken, may have temporary hang

The token export for iOS can be found at

>[越狱IOS设备无损导入Steam令牌至Steam++](https://keylol.com/t728973-1-1)
>
>[高版本的iOS导出Steam手机令牌教程](https://keylol.com/t696543-1-1)
>
>[2021未越狱iOS设备提取Steam令牌导入ASF的方法](https://keylol.com/t703874-1-1)
>
>[\[云挂卡\]未越狱iOS设备也可以使用ASF 2FA功能了](https://keylol.com/t245711-1-1)

Simple steps.

1. Uninstall the Steam token
2. Uninstall and install `iTunes Old Version`.
3. Use `iOS old app download` to download `old version of Steam`.
4. `Extract ipa` and install it with `爱思助手` and other tools
5. Bind the token and backup the data
