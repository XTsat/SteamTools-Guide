# How to use ASF

The main purpose of ASF (ArchiSteamFarm) is to automatically acquire Steam collectible cards from multiple accounts at the same time, but in addition to this function there is also automatic trading quotes and other operations

Official tutorials: [Chinese](https://github.com/JustArchiNET/ArchiSteamFarm/wiki/Home-zh-CN) / [English](https://github.com/JustArchiNET/ArchiSteamFarm/wiki)



ASF is a console application, which means that, at least at first, it does not provide a friendly GUI interface that you are familiar with.

ASF is primarily supposed to run on a server, so it is more like a service (daemon) than a desktop application.

The ASF is particularly versatile, but since this guide uses the ASF built into Watt Toolkit and is not mounted on the server

However, the community has developed a WebUi GUI interface, and all distributions that download ASF now have a built-in WebUi GUI console
located at ASF-win-x64/UI.html

<!-- ASF-ui Configuration
Our ASF-ui IPC interface also supports configuring ASF and is particularly suitable for modifying configuration content after the first configuration, because unlike the online configuration file generator that always generates new files, ASF-ui can edit configuration files directly in-place.

To use ASF-ui, you first need to enable the IPC interface itself. Since ASF version V5.1.0.0, IPC is enabled by default, so you can start accessing it directly as long as you have not manually disabled it.

After the program starts, the ASF's IPC address is accessed directly. If everything is working properly, you can also change the ASF configuration here. --> 

## ASF-ui

ASF-ui is a community project that provides a user-friendly GUI web interface mainly for end users. To accomplish this, it is designed as a front-end to the ASF API, allowing you to easily manipulate the ASF. This is the default UI that comes with the ASF.

As mentioned above, ASF-ui is a community project and is not maintained by the core ASF developers. It follows its own development process, and all related questions, discussions, bug reports, and suggestions should be published in the [ASF-ui repository](https://github.com/JustArchiNET/ASF-ui).

You can use ASF-ui for general administration of the ASF. For example, managing bots, modifying settings, sending commands, and various other functions provided by ASF.