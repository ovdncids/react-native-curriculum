# React Native Install

## Expo CLI 설치
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

## React Native CLI
* https://reactnative.dev/docs/environment-setup

### Android Virtual Device 버전
```sh
API Level 31
Android 12.0
```

### java 버전 확인
```sh
/usr/libexec/java_home -V
```
* [java 버전 변경](https://ifuwanna.tistory.com/247)

### 프로젝트 설치
```sh
npx react-native init react-native-study
cd react-native-study
code .
# react-native CLI 시작
npx react-native start
# react-native iOS 연결
npx react-native run-ios
# react-native Android 연결
npx react-native run-android
```

### Android 프로젝트 설치 오류
#### Class 'kotlin.Unit' was compiled with an incompatible version of Kotlin. The binary version of its metadata is 1.5.1, expected version is 1.1.16.
android/build.gradle
```diff
- kotlinVersion = "1.3.72"
+ kotlinVersion = "1.4.32"
```
* https://newline.tistory.com/164

### iOS 프로젝트 설치 오류
#### pod install 진행중 오류
* `pod`은 `iOS의 npm`과 같다.
```sh
cd ios
# lock 파일 삭제
rm -fr Podfile.lock
# 설지되어 있는 iOS 라이브러리 삭제
rm -fr Pods
```

#### 빌드중 RNChannelIO 오류
* 오류가 발생하는 `RNChannelIO.m` 파일에서 오류 부분 주석 처리
* https://ychcom.tistory.com/entry/채널톡-라이브러리-설치-방법

## 배포
* [Android](https://reactnative.dev/docs/signed-apk-android)
* [iOS](https://reactnative.dev/docs/publishing-to-app-store)
