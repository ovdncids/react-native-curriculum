# React Native Install

## Expo CLI 설치
* https://docs.expo.dev
* node@v20.19.4, create-expo-app@3.5.3, react-native@0.79.6, react@19.0.0, expo@53.0.22, Expo Go@2.33.22, Xcode@16.3
```sh
npx create-expo-app@latest --template
# Choose a template: Blank 또는 Blank (Typescript)
# What is your app named? expo-blank-study

cd expo-blank-study
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

# Expo 재시작
```

### Error: xcrun simctl boot 해시 exited with non-zero code: 2
* https://saying-me.tistory.com/147
```sh
# Emulator의 해시 코드를 확인 할 수 있다.
xcrun simctl list
# iPhone 16을 기본으로 선택
xcrun simctl boot F7DA36FB-33A8-4EE3-B62C-7063FE5934ED
```

## Android Studio Emulator 설치
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
# ANDROID_SDK=/Users/{사용자}/Library/Android/sdk
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

### Android 실행시 Expo 앱은 켜지고, 프로젝트 앱은 자꾸 꺼지거나 정상 동작 하지 않을 경우
* Expo 앱에서 `Enter URL manually` > `exp://{ip}:19000`

### Shake(command + m) 잘 안되는 경우
* `Emulator Play` 버튼 옆에 메뉴에서 `Cold boot`

#### Android virtual device 생성
```sh
# Android virtual device 실행 후

npm start

# Run on Android device/emulator
```

### Expo debugger
```sh
npm start
# 폰 또는 에뮬레이터 실행

Press j | open debugger
## Opening JavaScript inspector in the browser... (정상: 크롬 개발자 모드 열림)
## No compatible apps connected. JavaScript Debugging can only be used with the Hermes engine. (npm start부터 다시 진행)

# 소스 파일에 debugger 넣기
```

### Expo 배포
* https://docs.expo.dev/build/setup

## React Native CLI
* https://reactnative.dev/docs/environment-setup

### Android Virtual Device 버전
```sh
API Level 31
Android 12.0
```

### Java 버전 확인 (M1은 ARM64(aarch64) 버전 선택)
* IntelliJ > File > Project Structure... > + Add SDK > Java 버전 설치
```sh
# 깔려있는 모든 자바 확인
/usr/libexec/java_home -V

# 깔려있는 1.8 버전의 자바 경로 확인
/usr/libexec/java_home -v 11

# 깔려있는 1.8 버전의 자바 삭제 (남겨 있는 버전이 자동으로 기본이 됨)
rm -fr /usr/libexec/java_home -v 11

# 기본 자바 버전 변경 ($JAVA_HOME 필요한 경우 사용)
vi ~/.zshrc
export JAVA_HOME=$(/usr/libexec/java_home -v 11)

source ~/.zshrc
echo $JAVA_HOME
```
* `Java 11` 버전을 사용 해야 한다.
* 설치 `InteliiJ` > 오른쪽 상단 톱니바퀴 > Project Structure... > SDKs > + > Download JDK...
* 설정 `Android Studio` > 오른쪽 상단 톱니바퀴 > Project Structure... > Modules > Sourece Compatibillity, Target Compatibillity
* [java 버전 변경](https://ifuwanna.tistory.com/247)

#### macOS에 내장된 JRE 삭제
* https://www.java.com/ko/download/help/mac_uninstall_java.html
```sh
sudo rm -fr /Library/Internet\ Plug-Ins/JavaAppletPlugin.plugin
sudo rm -fr /Library/PreferencesPanes/JavaControlPanel.prefPane
sudo rm -fr ~/Library/Application\ Support/Oracle/Java
```
* JDK 삭제는 `/usr/libexec/java_home -V` 해당하는 폴더 삭제

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
npx react-native init react-native-study --version=0.69
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
command + m: Android Debug (Android Studio 안에서 실행한 에뮬레이터라면 Android Studio가 최소한 된다.)
# command + m = shake (adb 명령으로 shake 이벤트 보내기)
adb shell input keyevent 82
```
package.json
```json
{
  "scripts": {
    "shake": "adb shell input keyevent 82"
  }
}
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

## React Native 70버전 이상부터 디버깅
https://github.com/facebook/react-native/issues/34615#issuecomment-1445142480
* 70버전 이상부터는 `Chrome Debugger`를 안쓰고 `hermes` 사용

ios/Podfile
```diff
- :hermes_enabled => flags[:hermes_enabled],
:hermes_enabled => false,
```
```sh
cd ios && rm -rf Pods Podfile.lock
pod install --repo-update
cd ..
npx react-native run-ios

# iOS 에뮬레이터
control + comman + d > Debug with Chrome
```

## localhost 외의 URL 접속시 오류 나오는 문제
* https://stackoverflow.com/questions/70712090/react-native-axios-request-on-ios-returns-network-error

ios/{프로젝트 명}/Info.plist
```xml
<key>localhost</key>
<dict>
    <key>NSExceptionAllowsInsecureHTTPLoads</key>
    <true/>
</dict>
<key>도메인.com</key>
<dict>
    <key>NSExceptionAllowsInsecureHTTPLoads</key>
    <true/>
</dict>
```
