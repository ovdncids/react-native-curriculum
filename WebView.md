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

### Platform
```js
import { Platform } from 'react-native';
console.log(Platform.OS);  // 'ios', 'android'
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
