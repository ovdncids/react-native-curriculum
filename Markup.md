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
* iOSX 노치(Notch Design) 부분은 빼고 영역을 잡는다.
```js
import { SafeAreaView } from 'react-native';

<SafeAreaView>
  <View></View>
</SafeAreaView>
```
