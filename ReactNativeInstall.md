# React Native Install

## 설치
```sh
npm install -g expo-cli
expo init react-native-study

cd react-native-study
code .
npm start
```

### 단축키
```sh
ctrl + command + z: iOS 제어창
command + m: Android 제어창
```

### Android Studio Emulator 설치
* https://docs.expo.dev/workflow/android-studio-emulator
* ❕ `AVD`(Android Virtual Device)는 `Play Store` 내장 되어 있는 버전을 설치 해야 `Expo` 설치가능
```sh
Android Studio > Preferences > Appearance & Behavior > System Settings > Android SDK > SDK Tools > Android SDK Build-Tools 체크
Android SDK Location: `path copy`
```
```sh
vi ~/.zshenv

# ANDROID_SDK
ANDROID_SDK=`path paste`
```
```
# shell에서 실행
[ -d "$HOME/Library/Android/sdk" ] && ANDROID_SDK=$HOME/Library/Android/sdk || ANDROID_SDK=$HOME/Android/Sdk
echo "export ANDROID_SDK=$ANDROID_SDK" >> ~/`[[ $SHELL == *"zsh" ]] && echo '.zshenv' || echo '.bash_profile'`

# shell에서 실행
echo "export PATH=$HOME/Library/Android/sdk/platform-tools:\$PATH" >> ~/`[[ $SHELL == *"zsh" ]] && echo '.zshenv' || echo '.bash_profile'`

# 터미널 재시작

# 확인
adb 123
adb version
```

#### Android virtual device 생성
```sh
# Android virtual device 실행 후

npm start

# Run on Android device/emulator
```
