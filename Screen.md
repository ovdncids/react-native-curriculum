# Screen

## ScrollView
```js
<Text>스크린3</Text>
```
* 50줄 정도 복사한다. (스크롤이 되는지 확인)
```js
import { ScrollView } from 'react-native';
```
```diff
- <View></View>
+ <ScrollView></ScrollView>
```
* ❕ 스크린의 높이가 일정하지 않을때 사용한다.

## Flex 사용하여 레이아웃 잡기
* [데모](https://ovdncids.github.io/html-css-curriculum/flex)

### 기본 구조
```js
export default function Tab1Screen() {
  return (
    <View name="wrap">
      <View name="nav">
        <Text>⛪</Text>
        <Text>🎡</Text>
        <Text>🎠</Text>
        <Text>🎮</Text>
        <Text>📷</Text>
        <Text>📼</Text>
      </View>
      <View name="section">
        <View name="header">
          <Text>⛪</Text>
          <Text>🤖</Text>
        </View>
        <View name="contents">
          <Text>Home</Text>
        </View>
      </View>
    </View>
  );
}
```
**이모지**
https://www.emojiengine.com/ko

### nav와 section을 가로정렬 하기
```diff
- <View name="wrap">
+ <View name="wrap" style={{flexDirection: 'row'}}>
```
```diff
- <View name="nav">
+ <View name="nav" style={{flex: 1}}>
```
```diff
- <View name="section">
+ <View name="section" style={{flex: 1}}>
```
* `flexDirection`, `flex: 1` 설명 하기

### header 좌우 정렬 하기
```diff
- <View name="header">
-   <Text>⛪</Text>
-   <Text>🤖</Text>
- </View>
```
```js
<View name="header" style={{flexDirection: 'row'}}>
  <Text style={{flex: 1}}>⛪</Text>
  <Text>🤖</Text>
</View>
```
* `header의 2번째 자식`에게 `style={{flex: 1}}` 넣어 보기

### contents 가운데 정렬 하기
```diff
- <View name="contents">
+ <View name="contents" style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
```

### StyleSheet 열결 하기
```js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row'
  },
  section: {
    flex: 1
  }
});
```
```diff
- <View name="wrap" style={{flexDirection: 'row'}}>
+ <View name="wrap" style={styles.wrap}>
```
```diff
- <View name="section" style={{flex: 1}}>
+  style={styles.section}
```
* ❔ 나머지 부분도 `StyleSheet`으로 수정 하기

<!--
## SplashScreen
* 앱이 켜지기 전에 나오는 로고 화면
-->
