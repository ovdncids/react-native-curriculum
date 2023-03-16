# GPS

## Android GPS 강제 설정 (하지만 변경 안됨)
* https://stackoverflow.com/questions/40700725/android-terminal-telnet-missing-commands-receiving-this-error-ko-unknown-co
```sh
vi ~/.emulator_console_auth_token
telnet localhost 5554
auth {auth_token}
geo fix {longitude} {latitude}
```

```sh
adb reboot
adb emu geo fix {longitude} {latitude}
```
