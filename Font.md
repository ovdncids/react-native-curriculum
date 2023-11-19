# Font

## Expo
* https://docs.expo.dev/versions/latest/sdk/font
```sh
npx expo install expo-font
```
* [NanumGothic.ttf](https://github.com/ovdncids/react-native-curriculum/blob/master/download/NanumGothic.ttf)

app.js
```js
import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'NanumGothic': require('./assets/fonts/NanumGothic.ttf')
  });
  console.log(fontsLoaded)
  return (
    <View>
      <Text>폰트1</Text>
      {fontsLoaded && (
        <>
          <Text style={{ fontFamily: 'NanumGothic', fontSize: 30 }}>폰트2</Text>
        </>
      )}
    </View>
  );
}
```

## 나눔고딕 폰트
* https://github.com/item4/kfonts/tree/main
* [웹폰트 로딩 순서](https://yceffort.kr/2021/06/ways-to-faster-web-fonts)
```css
@font-face {
  font-family: 'NanumGothic';
  font-display: block; /* 폰트 로딩전까지 폰트 적용된 text는 미출력. 폰트 로딩이 3초가 지나면 시스템 폰트 우선 적용 */
  src: local('NanumGothic'), url('/fonts/NanumGothic.woff2') format('woff2');
}
body {
  font-family: 'NanumGothic';
}
```
```js
<Text style={{ fontFamily: 'NanumGothic' }}>나눔고딕</Text>
```
