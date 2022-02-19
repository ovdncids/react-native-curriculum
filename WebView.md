# WebView

## 설치
```sh
npm install react-native-webview
```
```js
import { Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

<View style={{flex: 1}}>
  <WebView
    source={{ uri: 'https://naver.com' }}
    style={{
      width: Dimensions.get('window').width
    }}
  ></WebView>
</View>
```

## html 파일 부르기1
assets/index.html
```html
<h1 style="color: red;">Hello world</h1>
```
component 파일
```diff
- source={{ uri: 'https://naver.com' }}
+ source={require('../assets/index.html')}
```
* ❕ `Android`에서 `html` 적용이 안되고, `text`처럼 보여진다.

## html 파일 부르기2
assets/index.js
```js
export default `
<h1 style="color: red;">Hello world</h1>
`;
```
component 파일
```js
import indexHTML from '../assets/index.js';
```
```diff
- source={{ uri: 'https://naver.com' }}
+ source={{ html: indexHTML }}
```

## 유용한 기능들
### injectedJavaScript
* https://github.com/react-native-webview/react-native-webview/blob/b1c48ce76d9f61f7dc855b86a79b5094ce9717eb/docs/Guide.md#the-injectedjavascript-prop
* `WebView` 로드전에 `script` 먼저 실행

### Platform
```js
import { Platform } from 'react-native';
console.log(Platform.OS);  // 'ios', 'android'
```
