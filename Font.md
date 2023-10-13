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
