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
* 별도의 `Route 설정` 없이 `Expo Router` 규칙을 지키서 `파일을 생성`하면 자동으로 `Route`가 생성됨

app/index.js
```js
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View>
      <Text>Index</Text>
      <Text></Text>
      <Link href="/screen2/flex">Screen2 Flex 이동</Link>
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
      <Link href="/screen3/crud">Screen3 CRUD 이동</Link>
    </View>
  );
}
```
* `Screen3 CRUD` 만들고 `index`로 이동 시키기

### app/_layout.js 파일 만들기
```js
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Layout() {
  return (
    <View>
      <Text>Layout</Text>
      <Text></Text>
      <Link href="/screen2/flex">Screen2 Flex 이동</Link>
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
* 앱을 `Reload`하면 이전 디버깅 창은 `연결이 끊겨서` 쓸모가 없어진다. (다시 열어야 함)

### Group 생성
* `(tabs)` 폴더 생성 후 `app` 안에 모든 파일을 이동 시킴

app/_layout.js
```js
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
```
* 폴더 및 파일 구조가 변경되어서 다양한 오류가 발생한다. `Reload`만으로 해결 할 수 없고 `npm start` 재시작 해야한다.

#### Group 헤더 삭제
```diff
- <Stack.Screen name="(tabs)" />
+ <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
```

### Tab navigator
app/(tabs)/_layout.js
```diff
- export default function RootLayout() {
+ export default function TabLayout() {
```
* `Stack`을 `Tabs`로 변경
* `Commit` 후 `app/_layout.js` 삭제해 보기

### Font Awesome
* https://fontawesome.com/v4/icons

app/(tabs)/index.js
```js
import FontAwesome from '@expo/vector-icons/FontAwesome';

<FontAwesome.Button
  name="code"
  onPress={() => console.log('FontAwesome.Button')}
>FontAwesome.Button</FontAwesome.Button>
```

#### Tab 아이콘 수정
app/(tabs)/_layout.js
```js
import FontAwesome from '@expo/vector-icons/FontAwesome';
```
```diff
- <Tabs.Screen name="index" />
```
```js
<Tabs.Screen
  name="index"
  options={{
    title: 'Home',
    tabBarIcon: () => <FontAwesome name="home" size={24} />
  }}
/>
```
* 나머지 Tab들도 수정해 보기

#### Header Title 가운데로 수정
```diff
title: 'Home',
+ headerTitleAlign: 'center',
```
* ❕ 기본 `headerTitleAlign`는 `iOS`는 center이고 `Android`는 left이다.
