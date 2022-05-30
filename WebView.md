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

## html 파일이 `cache` 되어서 변경 내역이 반영 되지 않을 경우
* https://github.com/react-native-webview/react-native-webview/issues/880
```js
<WebView
  cacheEnabled={false}
  cacheMode={'LOAD_NO_CACHE'}
  incognito={true}
```

## React Native와 WebView 통신
* https://github.com/react-native-webview/react-native-webview/blob/b1c48ce76d9f61f7dc855b86a79b5094ce9717eb/docs/Guide.md#communicating-between-js-and-native

### WebView 로드 후 바로 `script` 실행
* https://github.com/react-native-webview/react-native-webview/blob/b1c48ce76d9f61f7dc855b86a79b5094ce9717eb/docs/Guide.md#the-injectedjavascript-prop
```js
<WebView
  injectedJavaScript={`alert('injectedJavaScript'); true;`}
```
* ❕ `injectedJavaScript`는 `iOS`에서 동작 안 할 수 있다. 동작하지 않으면 아래의 `injectJavaScript`를 사용 해야 한다.

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
// setTimeout 또는 useEffect를 사용 해서 webView.current.injectJavaScript 함수를 호출 한다.
setTimeout(() => {
  webView.current.injectJavaScript(`webFunction('abc'); true;`);
}, 1000);
```
```js
<WebView
  ref={webView}
```

### WebView에서 React Native의 함수 호출
```js
const html = `
<button onclick="rnFunction()">React Native 함수 호출</button>
<script>
const rnFunction = function() {
  window.ReactNativeWebView.postMessage('def');
};
</script>
`;
```
```js
<WebView
  source={{ html }}
  onMessage={event => alert(event.nativeEvent.data)}
  style={{
    width: Dimensions.get('window').width
  }}
></WebView>
```
### WebView에서 React Native의 함수 다중 호출
```js
const html = `
<button onclick="rnFunction()">React Native 함수 호출</button>
<script>
const rnFunction1 = function() {
  window.ReactNativeWebView.postMessage(JSON.stringify({ key:'key1', value: 'value1' }));
};
const rnFunction2 = function() {
  window.ReactNativeWebView.postMessage(JSON.stringify({ key:'key2', value: 'value2' }));
};
</script>
`;
```
```js
<WebView
  source={{ html }}
  onMessage={event => {
    const { key, value } = JSON.parse(event.nativeEvent.data)
    switch (key) {
      case 'key1':
        alert(value);
        break;
      case 'key2':
        alert(value);
        break;
    }
  }}
  style={{
    width: Dimensions.get('window').width
  }}
></WebView>
```

## 유용한 기능들
### Platform
```js
import { Platform } from 'react-native';
console.log(Platform.OS);  // 'ios', 'android'
```

## KakaoPay
* https://github.com/ovdncids/java-curriculum/blob/master/pay/KakaoPay.md
* https://velog.io/@760kry/react-native-webview%EC%97%90%EC%84%9C-%EC%99%B8%EB%B6%80-%EC%95%B1-%EC%8B%A4%ED%96%89-pg
```js
import { Platform, Linking } from 'react-native';
import { WebView } from 'react-native-webview';

<WebView
  originWhitelist={['*']}
  source={{ html: `<button onclick="window.open('next_redirect_mobile_url')">카카오 페이</button>` }}
  onShouldStartLoadWithRequest={event => {
    if (event.url.startsWith('http://') || event.url.startsWith('https://') || event.url.startsWith('about:blank')) return true;
    if (Platform.OS === 'ios') {
      Linking.openURL(event.url).catch(() => {
        Linking.openURL('https://apps.apple.com/kr/app/%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%86%A1-kakaotalk/id362057947');
      });
    }
  }}
></WebView>
```

### LSApplicationQueriesSchemes 설정
* 설정 안해도 `Linking.openURL` 동작 잘 되는듯 하다.

app.json
```json
"ios": {
  "infoPlist": {
    "LSApplicationQueriesSchemes": ["kakaotalk"]
  }
}
```
