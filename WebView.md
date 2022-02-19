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

## React Native와 WebView 통신
* https://github.com/react-native-webview/react-native-webview/blob/b1c48ce76d9f61f7dc855b86a79b5094ce9717eb/docs/Guide.md#communicating-between-js-and-native

### WebView 로드전에 `script` 실행 (injectedJavaScript)
* https://github.com/react-native-webview/react-native-webview/blob/b1c48ce76d9f61f7dc855b86a79b5094ce9717eb/docs/Guide.md#the-injectedjavascript-prop

### React Native에서 WebView의 함수 호출
```js
const html = `
<script>
const webFunction = function(parameter) {
  alert(parameter);
};
</script>
`;
```
```js
<WebView
  ref={webView => this.webView = webView}
  source={{ html }}
  style={{
    width: Dimensions.get('window').width
  }}
></WebView>
<Button
  title="WebView 함수 호출"
  onPress={() => {this.webView.injectJavaScript(`webFunction('abc'); true;`)}}
></Button>
```
* ❕ `injectJavaScript` 마지막에 `true`는 꼭 들어가야 한다.
* ❕ `ref` 부분을 `useRef` 사용해도 상관 없다.
```js
import React, { useRef } from 'react';
const webView = useRef();
ref={webView}
webView.current.injectJavaScript(`webFunction('abc'); true;`);
```

### WebView에서 React Native의 함수 호출

## 유용한 기능들
### Platform
```js
import { Platform } from 'react-native';
console.log(Platform.OS);  // 'ios', 'android'
```
