# Expo Router (expo-router@5.1.5)

## 설치
* https://docs.expo.dev/router/installation
```sh
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```
package.json
```diff
- "main": "index.js",
+ "main": "expo-router/entry",
```

app.json
```json
{
  "expo": {
    "plugins": [
      "expo-router"
    ],
    "scheme": "expoblankstudy"
  }
}
```
* `scheme`은 딥링크, 푸시 알림, 앱 호출 등에 사용되는 `앱의 Router 주소`이다. (예: `expoblankstudy://mypage/password`)
* `Expo Go`에서는 바로 확인 할 수 없고 `빌드 후` 가능하다.

이제 불필요한 파일 삭제
```diff
- App.js
- index.js
```

`assets` 모든 파일을 `assets/images`로 이동 후 `app.json`에서 모든 경로 수정
```diff
- "icon": "./assets/icon.png",
+ "icon": "./assets/images/icon.png",
```

```sh
npm start
```

## Route 생성
* [File-based routing](https://docs.expo.dev/develop/file-based-routing)
* 별도의 `Route 설정` 없이 `Expo Router` 규칙을 지키면 자동으로 `Route`가 생성됨

app/index.js
```js
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View>
      <Text>Index</Text>
      <Text></Text>
      <Link href="/screen2/flex">이동 Screen2 Flex</Link>
    </View>
  );
}
```
* `npm start` 후 `이동 Screen3 CRUD`

app/screen2/flex.js
```js
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Flex() {
  return (
    <View>
      <Text>Screen2 Flex</Text>
      <Text></Text>
      <Link href="/screen3/crud">이동 Screen3 CRUD</Link>
    </View>
  );
}
```
* `Screen3 CRUD` 만들기

### app/_layout.js 파일 만들기
```js
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Layout() {
  return (
    <View>
      <Text>Layout</Text>
      <Text></Text>
      <Link href="/screen2/flex">이동 Screen2 Flex</Link>
    </View>
  );
}
```
* ❕ `_layout.js` 파일은 `Route 설정 파일`이므로 다른 스크린으로 이동이 불가하다.

app/_layout.js
```js
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="screen2/flex" />
      <Stack.Screen name="screen3/crud" />
    </Stack>
  );
}
```
* `Stack` 라이브러리는 `헤더`와 스크린 이동시 `뒤로가기 버튼`을 제공한다.

### 디버깅
app/screen2/flex.js
```js
export default function Flex() {
  debugger;
  console.log('디버깅');
```
* `npm start` > `?` 메뉴 확인 > `j` 키로 크롬 디버깅 창을 바로 열거나 `m` 키로 `제어창`에서 열 수 있다.
* 스크린 이동 하기
* 앱을 `Reload`하면 이전 디버깅 창은 연결이 끊겨서 쓸모가 없어진다.
