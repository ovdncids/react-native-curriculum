# React Native Install

## Expo CLI 설치 (5.3.2, Xcode 13.2.1)
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

### iOS, Xcode needs to be installed (don't worry, you won't have to use it), would you like to continue
```sh
Xcode > Preferences... > Locations > Command Line Tools
> Xcode 버전 선택은 되어 있지만 다시 선택 (암호 요구)
```

### Android Studio Emulator 설치
* https://docs.expo.dev/workflow/android-studio-emulator
* ❕ `AVD`(Android Virtual Device)는 `Play Store` 내장 되어 있는 버전을 설치 해야 `Expo` 설치가능
```sh
Android Studio > Preferences > Appearance & Behavior > System Settings > Android SDK > SDK Tools > Android SDK Build-Tools 체크
Android SDK Location: `path copy`
```
```sh
# ❕ ~/.zshrc 아님
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

### Java 버전 확인
```sh
/usr/libexec/java_home -V
```
* `Java 11` 버전을 사용 해야 한다.
* [java 버전 변경](https://ifuwanna.tistory.com/247)

### Ruby 버전
* https://2vup.com/mac-ruby-update
```sh
# ruby 버전 (2.6.3)
ruby -v

# rbenv 설치
brew install rbenv

# ruby 설치 가능 버전 (추천 버전)
rbenv install -l

# ruby 버전 설치
rbenv install 2.7.6

# 설치된 ruby 버전 확인
rbenv versions

# ruby 버전 사용
rbenv global 2.7.6

# ruby 버전 설정
vi ~/.zshrc
eval "$(rbenv init -)"

source ~/.zshrc
```

### 프로젝트 설치
```sh
# React Native CLI 버전 (5.0.1)
npx react-native --version

# 버전별 설치
npx react-native init react-native-study --version=0.64.3
# 최신 버전 설치
npx react-native init react-native-study
cd react-native-study
code .

# React Native CLI 시작
npx react-native start

# React Native iOS 연결
npx react-native run-ios

# React Native Android 연결
npx react-native run-android
```

### 단축키
* https://stackoverflow.com/questions/32914665/how-do-i-shake-an-android-device-within-the-android-emulator-to-bring-up-the-d
```sh
command + r: iOS Reload
command + d: iOS Debug
r 두번: Android Reload
command + m: Android Debug (하지만 창이 내려 간다. Mac 기본 단축키가 우선 적용됨)
adb shell input keyevent 82
```

### Android 프로젝트 설치 오류
#### SDK location not found. Define a valid SDK location with an ANDROID_HOME environment variable or by setting the sdk.
android/local.properties
```properties
sdk.dir=/Users/{사용자}/Library/Android/sdk
```

#### Class 'kotlin.Unit' was compiled with an incompatible version of Kotlin. The binary version of its metadata is 1.5.1, expected version is 1.1.16.
android/build.gradle
```diff
- kotlinVersion = "1.3.72"
+ kotlinVersion = "1.4.32"
```
* https://newline.tistory.com/164

#### 알 수 없는 에러가 발생하는 경우
```sh
chmod 755 android/gradlew
```

### iOS 프로젝트 설치 오류
#### pod install 진행중 오류
* `pod`은 `iOS의 npm`과 같다.
```sh
cd ios
# lock 파일 삭제
rm -fr Podfile.lock
# 설지되어 있는 iOS 라이브러리 삭제
rm -fr Pods
pod install
```

#### Failed to prepare device for development
* `XCode`에 해당 하는 `iPhone OS 버전`이 없어서 발생한다.
* https://github.com/filsv/iPhoneOSDeviceSupport
* https://velog.io/@jihoson94/xcode-failed-to-prepare-device-for-development-%ED%95%B4%EA%B2%B0%EB%B0%A9%EB%B2%95
```sh
/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/DeviceSupport/
# 해당 경로에 `iPhone OS 버전`을 다운 받는다.
```

#### 신뢰하지 않는 개발자
```sh
설정 > 일반 > VPN 및 기기 관리 > 개발자 앱 > 활성화
```

#### 빌드중 RNChannelIO 오류
* 오류가 발생하는 `RNChannelIO.m` 파일에서 오류 부분 주석 처리
* https://ychcom.tistory.com/entry/채널톡-라이브러리-설치-방법

### Mac M1
#### Xcode가 통통 튀면서 실행이 안 될 경우
```sh
Launchpad > Other (기타) > 콘솔 > 시작
Xcode 실행
```

#### 빌드 시 Node를 못 찾는 경우
```sh
# node 경로 확인
which node

# Xcode는 node를 `/usr/local/bin/node`에서 찾음
# /usr/local/bin/node 심볼릭 링크 만들기
ln -s $(which node) /usr/local/bin/node
```
* https://velog.io/@space_dog/mac-m1%EC%B9%A9-Xcode-ios-%EB%B9%8C%EB%93%9C-%EC%97%90%EB%9F%AC

## 배포
### Android
* https://reactnative.dev/docs/signed-apk-android
```sh
# 배포 버전으로 실행
npx react-native run-android --variant=release
```

### iOS
* https://reactnative.dev/docs/publishing-to-app-store
