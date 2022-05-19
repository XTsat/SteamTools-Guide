# ✨ Functions

## Network Acceleration <img src="../../../.vuepress/public/Brands/windows.svg" width="16" height="16" /> <img src="../../../.vuepress/public/Brands/linux.svg" width="16" height="16" /> <img src="../../../.vuepress/public/Brands/apple.svg" width="16" height="16" /> <img src="../../../.vuepress/public/Brands/android.svg" width="16" height="16" />

- Implement normal access to `Steam` `Discord` `Twitch` `Origin` `Uplay` `GitHub` `Microsoft Store` `Google Captcha` `Pixiv` and other hard-to-access web pages in China to prevent network interference

- Functions similar to [Steamcommunity 302](https://www.dogfight360.com/blog/686/), using [Titanium-Web-Proxy](https://github.com/justcoding121/Titanium- Web-Proxy) open source project for local anti-generation.

- There are two ways to choose `Host proxy mode` and `system proxy mode`, you need to confirm the installation of the certificate file before using it for the first time

- You can also remove **Steam Store** access restrictions**, including but not limited to: ``This item is not currently available in your region`` `This game is marked as "adults only". You are seeing this game because you have set your preferences to allow such content. `

::: details [Click to expand]-FAQ

> Q: hosts is being used by another process, so that process cannot access this file?
>
> A: If the hosts file is occupied by other programs and this program cannot read or write normally, use `Resource Monitor` to search for hosts in the `Associated Handle` to find the occupied process and end it.
>
> Q: Why the checkbox in front of the script is not saved when the script in Community Acceleration is enabled and invalid?
>
> A: The script requires the corresponding acceleration service to be enabled to take effect, and the script must also be enabled after the acceleration function is enabled to be effective, for example, the `Steam Store History Low Search` script must have the `Steam Store Acceleration Service` enabled to take effect.
>
> Q: Using acceleration prompts certificate installation failure?
>
> A: You can try to manually install the `SteamTools.Certificate.pfx` certificate file under the `AppData` folder in the program directory, install it to the trusted root certificate area, the area must be selected correctly, otherwise the installation will be invalid even if it succeeds.

:::

## Script Configuration <img src="../../../.vuepress/public/Brands/windows.svg" width="16" height="16" /> <img src="../../../.vuepress/public/Brands/linux.svg" width="16" height="16" /> <img src="../../../.vuepress/public/Brands/apple.svg" width="16" height="16" />

- Injects some JS scripts into web pages (Steam's built-in browser) through an acceleration service that intercepts network requests, providing web plug-in-like functionality. Enables Steam's built-in browser to use some of the scripts

- For example `Steam History Lowest Price Check `Steam Economy Enhancer(Steam Market Enhancement)``CSGO Market Tool(CSGO Market Check Gun Wear Value)`

## Account Switch <img src="../../../.vuepress/public/Brands/windows.svg" width="16" height="16" /> <img src="../../../.vuepress/public/Brands/linux.svg" width="16" height="16" /> <img src="../../../.vuepress/public/Brands/apple.svg" width="16" height="16" />

- Switch between Steam accounts that are already logged in on the current PC with one click via Steam **save by default** credential information** and the ability to log in offline with one click, as well as manage features such as home shared library sorting.

  ![Account Switching](../Photo/Home/dark/Account-switching.png)

::: details [Click to expand]-FAQ

> Q: I still need to enter my password and token after switching accounts? Why can I sometimes switch with one click and sometimes not?
>
> A: Watt Toolkit account switching feature doesn't record your password and token. The fast account switching is due to Steam's own remember password feature.

:::

[Family Library Sharing](https://help.steampowered.com/zh-cn/faqs/view/57A7-503C-991F-E9A8)(Steam Support)

Adjust the priority order of Steam accounts shared on the current device to solve the problem that you want to play with account B's shares but keep using account A's shares, sorted from top to bottom by the priority order of the shared library usage, or you can choose to temporarily disable or enable shares for a specific account. You can also choose to temporarily disable or enable shares for a specific account. Save and restart Steam after the adjustment takes effect!

![Family Library Sharing](../Photo/Home/dark/Family-Library-Sharing.png)

## Inventory Management <img src="../../../.vuepress/public/Brands/windows.svg" width="16" height="16" /> <img src="../../../.vuepress/public/Brands/linux.svg" width="16" height="16" /> <img src="../../../.vuepress/public/Brands/apple.svg" width="16" height="16" />

- Lets you manage your Steam game inventory directly, not only by downloading older Steam games, but also by managing Steam game achievements directly, supporting unlocked achievements and unlocked achievements.

- You can use Steam download completion timer shutdown so that no one can reduce unnecessary power consumption after the completion of the download (for example, sleep at night automatically after the completion of the download automatically shutdown)

  ![Auto shutdown](../Photo/Home/dark/Auto-shutdown.png)

- It is also possible to customize the ability to increase the length of the game after starting Watt Toolkit

  ![Automatic game length](../Photo/Home/dark/Auto-Gametime.png)

:::: details [Click to expand]-Steam Game achievements unlocked：

Steam game achievements unlocked using open source projects [SteamAchievementManager](https://github.com/gibbed/SteamAchievementManager)

::: warning

This feature carries some risk, theoretically it will not be VAC, but if abused it may be pulled by the game manufacturer, it is recommended to use it without starting the game, so far it has no effect. The unlock achievements feature is not a plug-in, it only communicates with Steam in principle, and has nothing to do with the game itself, as anti-cheat systems like VAC work in multiplayer games. If the game is bound to another platform, unlocked achievements will not be synced to other platforms and may not be updated on other platforms if the achievements are re-completed, e.g. Sea of Thieves is bound to Xbox.

![Sam](../Photo/Home/dark/Sam.png)

:::

By checking the achievements and saving the achievement changes (**Note**: It is best not to change achievements for games with `VAC` to avoid unnecessary damage, the picture below is a game with `VAC`)

![Sam2](../Photo/Home/dark/Sam2.png)

::::

## Local Authentication <img src="../../../.vuepress/public/Brands/windows.svg" width="16" height="16" /> <img src="../../../.vuepress/public/Brands/linux.svg" width="16" height="16" /> <img src="../../../.vuepress/public/Brands/apple.svg" width="16" height="16" /> <img src="../../../.vuepress/public/Brands/android.svg" width="16" height="16" />

- Let your cell phone token unified save in the computer, currently only support Steam token, later will develop support more token types with cloud synchronization token.

- Similar to `WinAuth` (you can import `WinAuth 2-step verification` into `Watt Toolkit` by exporting it, using [open source project Winauth](https://github.com/winauth/winauth))
  
## ArchiSteamFarm  <img src="../../../.vuepress/public/Brands/windows.svg" width="16" height="16" /> <img src="../../../.vuepress/public/Brands/linux.svg" width="16" height="16" /> <img src="../../../.vuepress/public/Brands/apple.svg" width="16" height="16" /> <img src="../../../.vuepress/public/Brands/android.svg" width="16" height="16" />

- Integrated with the open source project [ArchiSteamFarm](https://github.com/JustArchiNET/ArchiSteamFarm) in the application to provide hanging drops `Steam Collectible Deck` and other functions.

- [The easiest ASF User Manual](https://keylol.com/t770760-1-1) [(Keylol)@cyb233](https://keylol.com/suid-988278)

## Game Tools <img src="../../../.vuepress/public/Brands/windows.svg" width="16" height="16" />

- You can force the game window to use borderless windowing or full screen, or you can put the game screen on the desktop wallpaper (conflict with dynamic wallpaper software)

  ![Game Tools](../Photo/Home/dark/Game-Setting.png)
