# Markup

## StatusBar
* https://reactnative.dev/docs/statusbar
* 상단의 메뉴(뒤로가기, 시계, 베터리 ...)를 사라지게 한다.
```js
import { StatusBar } from 'expo-status-bar';

<View>
  <StatusBar hidden={true} />
</View>
```

## SafeAreaView
* https://reactnative.dev/docs/safeareaview
* StatusBar은 빼고 영역을 잡는다.
<!-- * iOSX 노치(Notch Design) 부분 -->
```js
import { SafeAreaView } from 'react-native';

<SafeAreaView>
  <View></View>
</SafeAreaView>
```

## SplashScreen
* 앱이 켜지기 전에 나오는 화면

## Navigation
* https://reactnative.dev/docs/navigation#installation-and-setup
```sh
npm install @react-navigation/native @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context
```

### Floating 메뉴 만들기
```sh
npm install @react-navigation/bottom-tabs
```
