# 🖥️ Supported Operating Systems

## Windows

OS                                    | Version                    | Architectures   | Lifecycle
--------------------------------------|----------------------------|-----------------|----------
[Windows Client][Windows-client]      | 7 SP1(**\***), 8.1(**\***) | x64             | [Windows][Windows-lifecycle]
[Windows 10 Client][Windows-client]   | Version 1607+(**\***)      | x64             | [Windows][Windows-lifecycle]
[Windows 11][Windows-client]          | Version 22000+             | x64,            | [Windows][Windows-lifecycle]
[Windows Server][Windows-Server]      | 2008 R2 SP1(**\***), 2012+ | x64             | [Windows Server][Windows-Server-lifecycle]

**\*** Windows 7 SP1 must have [Extended Security Update](https://docs.microsoft.com/troubleshoot/windows-client/windows-7-eos-faq/windows-7-extended-security-updates-faq) installed and will be released after November 2022 is no longer supported.  
**\*** Windows 8.1 will no longer be supported in versions released after November 2022.  
**\*** Windows Server 2008 R2 SP1 must have [Extended Security Update](https://docs.microsoft.com/en-us/lifecycle/faq/extended-security-updates) installed and will be released after November 2022 is no longer supported.  
**\*** Microsoft Store(Desktop Bridge) Version 1809+  

[Windows-client]: https://www.microsoft.com/windows/
[Windows-lifecycle]: https://support.microsoft.com/help/13853/windows-lifecycle-fact-sheet
[win-client-docker]: https://hub.docker.com/_/microsoft-windows
[Windows-Server-lifecycle]: https://docs.microsoft.com/windows-server/get-started/windows-server-release-info
[Nano-Server]: https://docs.microsoft.com/windows-server/get-started/getting-started-with-nano-server
[Windows-Server]: https://docs.microsoft.com/windows-server/

## Linux

OS                                    | Version               | Architectures     | Lifecycle
--------------------------------------|-----------------------|-------------------|----------
[Alpine Linux][Alpine]                | 3.13+                 | x64, Arm64        | [Alpine][Alpine-lifecycle]
[CentOS][CentOS]                      | 7+                    | x64               | [CentOS][CentOS-lifecycle]
[Debian][Debian]                      | 10+                   | x64, Arm64        | [Debian][Debian-lifecycle]
[Fedora][Fedora]                      | 33+                   | x64               | [Fedora][Fedora-lifecycle]
[openSUSE][OpenSUSE]                  | 15+                   | x64               | [OpenSUSE][OpenSUSE-lifecycle]
[Red Hat Enterprise Linux][RHEL]      | 7+                    | x64, Arm64        | [Red Hat][RHEL-lifecycle]
[SUSE Enterprise Linux (SLES)][SLES]  | 12 SP2+               | x64               | [SUSE][SLES-lifecycle]
[Ubuntu][Ubuntu]                      | 16.04, 18.04, 20.04+  | x64, Arm64        | [Ubuntu][Ubuntu-lifecycle]
[Deepin / UOS][Deepin]                | 20+                   | x64               | [Deepin][Deepin-lifecycle]
[Arch Linux][Arch]                    |                       | x64               |

[Alpine]: https://alpinelinux.org/
[Alpine-lifecycle]: https://wiki.alpinelinux.org/wiki/Alpine_Linux:Releases
[CentOS]: https://www.centos.org/
[CentOS-lifecycle]:https://wiki.centos.org/FAQ/General
[CentOS-docker]: https://hub.docker.com/_/centos
[CentOS-pm]: https://docs.microsoft.com/dotnet/core/install/linux-package-manager-centos8
[Debian]: https://www.debian.org/
[Debian-lifecycle]: https://wiki.debian.org/DebianReleases
[Debian-pm]: https://docs.microsoft.com/dotnet/core/install/linux-package-manager-debian10
[Fedora]: https://getfedora.org/
[Fedora-lifecycle]: https://fedoraproject.org/wiki/End_of_life
[Fedora-docker]: https://hub.docker.com/_/fedora
[Fedora-msft-pm]: https://docs.microsoft.com/dotnet/core/install/linux-package-manager-fedora32
[Fedora-pm]: https://fedoraproject.org/wiki/DotNet
[OpenSUSE]: https://opensuse.org/
[OpenSUSE-lifecycle]: https://en.opensuse.org/Lifetime
[OpenSUSE-docker]: https://hub.docker.com/r/opensuse/leap
[OpenSUSE-pm]: https://docs.microsoft.com/dotnet/core/install/linux-package-manager-opensuse15
[RHEL]: https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux
[RHEL-lifecycle]: https://access.redhat.com/support/policy/updates/errata/
[RHEL-msft-pm]: https://docs.microsoft.com/dotnet/core/install/linux-package-manager-rhel8
[RHEL-pm]: https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/developing_.net_applications_in_rhel_8/using-net-core-on-rhel_gsg#installing-net-core_gsg
[SLES]: https://www.suse.com/products/server/
[SLES-lifecycle]: https://www.suse.com/lifecycle/
[SLES-pm]: https://docs.microsoft.com/dotnet/core/install/linux-package-manager-sles15
[Ubuntu]: https://ubuntu.com/
[Ubuntu-lifecycle]: https://wiki.ubuntu.com/Releases
[Ubuntu-pm]: https://docs.microsoft.com/dotnet/core/install/linux-package-manager-ubuntu-2004
[Deepin]: https://www.deepin.org/
[Deepin-lifecycle]: https://www.deepin.org/release-notes
[Arch]: https://archlinux.org/

## macOS

OS                            | Version                   | Architectures     |
------------------------------|---------------------------|-------------------|
[macOS][macOS]                | 10.15+                    | x64, Arm64        |

[macOS]: https://support.apple.com/macos

## Android

OS                            | Version                 | Architectures                                                      |
------------------------------|-------------------------|--------------------------------------------------------------------|
[Android][Android]            | 5.0(API 21)+            | [x64][Android-x64], [Arm64][Android-Arm64], [Arm32][Android-Arm32] |

[Android]: https://support.google.com/android
[Android-x64]: https://developer.android.google.cn/ndk/guides/abis?hl=zh_cn#86-64
[Android-Arm32]: https://developer.android.google.cn/ndk/guides/abis?hl=zh_cn#v7a
[Android-Arm64]: https://developer.android.google.cn/ndk/guides/abis?hl=zh_cn#arm64-v8a

## ~~iOS / iPadOS~~

OS                            | Version                 | Architectures     |
------------------------------|-------------------------|-------------------|
[iOS][iOS]                    | 10.0+                   | x64, Arm32, Arm64 |

[iOS]: https://support.apple.com/ios

## ⛔ Unsupported Operating System

- Windows 8
  - [Due to Microsoft's official support for the product has ended](https://docs.microsoft.com/lifecycle/products/windows-8), so this program cannot run on this operating system, [It is recommended to upgrade to Windows 8.1](https://support.microsoft.com/windows/update-to-windows-8-1-from-windows-8-17fc54a7-a465-6b5a-c1a0-34140afd0669)
- Windows Server / Linux version without desktop GUI
- Xbox or Windows Mobile / Phone
