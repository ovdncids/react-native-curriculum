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
