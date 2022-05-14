# Network issues

## Host file related (read-only, access denied, no privileges)

- Please go to `C:\Windows\System32\drivers\etc`, right-click on the `host` file, open `Properties` and uncheck the `Read-only` option below.

- Read-only may also be occupied by other software or blocked by anti-virus software. If the `hosts` file has no custom content, you can delete the file before starting it, or use the system agent mode with the file located at `C:\Windows\System32\drivers\etc\hosts`

- Or automatically reset the host problem with a disconnected one-click repair program, such as `360 Disconnect First Aid` `FireWire Disconnect Repair`

## Unable to connect to the network after a program crash

- After the program crashes during acceleration, the community/game server cannot be connected because the `127.0.0.1` written to the `host` after the crash has not been eliminated properly, you can cancel the acceleration and reopen it, or you can clean up the `host` file manually

- Or you can automatically reset the `host` problem with a one-click repair program, such as `360 Disconnect First Aid`, `FireWire Disconnect Repair`.

>The problem of no network after a crash is due to the normal logic of accelerating and stopping acceleration, because the program was forced to quit in acceleration, so the logic of stopping acceleration was not executed, and the configuration modified by acceleration was not restored.
>
>If you encounter this problem, you can try to restore the hosts file, close the windows system agent, and reset the network service.

![Reset host file](../Photo/Home/reset-host-dark.png)
