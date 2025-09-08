# Flex

## ScrollView
```js
<Text>Flex</Text>
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
export default function Flex() {
  return (
    <View nativeID="wrap">
      <View nativeID="nav">
        <Text>⛪</Text>
        <Text>🎡</Text>
        <Text>🎠</Text>
        <Text>🎮</Text>
        <Text>📷</Text>
        <Text>📼</Text>
      </View>
      <View nativeID="section">
        <View nativeID="header">
          <Text nativeID="home">⛪</Text>
          <Text>🤖</Text>
        </View>
        <View nativeID="contents">
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
- <View nativeID="wrap">
+ <View nativeID="wrap" style={{flexDirection: 'row'}}>
```
```diff
- <View nativeID="nav">
+ <View nativeID="nav" style={{flex: 0}}>
```
```diff
- <View nativeID="section">
+ <View nativeID="section" style={{flex: 1}}>
```
* `flexDirection`, `flex` 설명 하기

### header 좌우 정렬 하기
```diff
- <View nativeID="header">
-   <Text>⛪</Text>
-   <Text>🤖</Text>
- </View>
```
```js
<View nativeID="header" style={{flexDirection: 'row'}}>
  <Text nativeID="home" style={{flex: 1}}>⛪</Text>
  <Text>🤖</Text>
</View>
```
* `header의 2번째 자식`에게 `style={{flex: 1}}` 넣어 보기

### contents 가운데 정렬 하기
```diff
- <View nativeID="contents">
+ <View nativeID="contents" style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
```

### StyleSheet 열결 하기
* [다른 방법 - styled-components/native](https://www.google.com/search?q=styled-components%2Fnative&rlz=1C5CHFA_enKR953KR954&oq=styled-components%2Fnative&aqs=chrome..69i57j0i512l6j69i58.303j0j7&sourceid=chrome&ie=UTF-8)
```js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row'
  },
  nav: {
    // flex: 0,  // `flex: 0`은 web에서 영역이 할당 안 될 수 있으므로 주석 처리 한다.
  },
  section: {
    flex: 1
  }
});
```
```diff
- <View nativeID="wrap" style={{flexDirection: 'row'}}>
+ <View nativeID="wrap" style={styles.wrap}>
```
```diff
- <View nativeID="section" style={{flex: 1}}>
+ <View nativeID="section" style={styles.section}>
```
* ❔ 나머지 부분도 `StyleSheet`으로 수정 하기

### border를 이용한 경계선 만들기
```diff
nav: {
+ borderRightColor: 'lightgray',
+ borderRightWidth: 1
}
```
```diff
header: {
+ borderBottomColor: 'lightgray',
+ borderBottomWidth: 1
}
```

### 아이콘의 크기와 간격 조정 하기
```diff
- <Text>⛪</Text>
+ <Text style={styles.icon}>⛪</Text>
```
```js
icon: {
  margin: 16,
  fontSize: 16
}
```
#### 여러게의 style을 넣는 방법
```diff
- <Text nativeID="home" style={styles.home}>⛪</Text>
+ <Text nativeID="home" style={[styles.home, styles.icon]}>⛪</Text>
```

### 과제
* ❔ nav를 오른쪽으로, header를 아래로 정렬 시키기
* [결과 이미지](https://ovdncids.github.io/html-css-curriculum/flex/reverse-layout.png)

<!--
## SplashScreen
* 앱이 켜지기 전에 나오는 로고 화면
-->
