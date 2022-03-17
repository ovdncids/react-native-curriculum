# Navigation
* https://reactnative.dev/docs/navigation#installation-and-setup
```sh
npm install @react-navigation/native @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context
```

## Floating menu와 Screen 연결
* https://reactnavigation.org/docs/bottom-tab-navigator
```sh
npm install @react-navigation/bottom-tabs
```

App.js
```js
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function Tab1Screen() {
  return (
    <View>
      <Text>스크린1</Text>
    </View>
  );
}

function Tab2Screen() {
  return (
    <View>
      <Text>스크린2</Text>
    </View>
  );
}

const BottomTab = createBottomTabNavigator();
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Tab1">
      <BottomTab.Screen
        name="Tab1"
        component={Tab1Screen}
      />
      <BottomTab.Screen
        name="Tab2"
        component={Tab2Screen}
        options={{
          title: 'Title2',
          tabBarLabel: 'TabBarLabel2',
          headerTitleAlign: 'center'
        }}
      />
    </BottomTab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```
* https://reactnavigation.org/docs/native-stack-navigator#headertitlealign
* ❕ 기본 `headerTitleAlign`는 iOS는 `center`이고 Android는 `left`이다.
* ❔ `스크린3`, `스크린4`, `스크린5`를 만들고 `Floating menu`와 연결하기
* ❔ 스크린 마다 파일로 나누기

## 다른 Screen으로 Navigator 이동
### 새로운 Screen 추가
```js
function Tab1Detail() {
  return (
    <View>
      <Text>Tab1Detail</Text>
    </View>
  );
}
```

### Navigator에 화면 추가
```js
<Stack.Screen name="Tab1Detail" component={Tab1Detail} />
```

### Tab1에서 Tab1Detail으로 Navigator이동
```diff
- function Tab1Screen() {
```
```js
function Tab1Screen({ navigation }) {
  return (
    <View>
      <Text>
        <Button
          title="Tab1Detail"
          onPress={() => navigation.navigate('Tab1Detail')}
        />
      </Text>
    </View>
  );
}
```

## Font Awesome
* https://icons.expo.fyi
```js
import { FontAwesome } from '@expo/vector-icons';
```
```js
<BottomTab.Screen
  name="Tab1"
  component={Tab1Screen}
  options={{
    tabBarIcon: () => <FontAwesome
      name="code"
      size={30}
    />
  }}
/>
```

## Modal창 띄우기
### 새로운 Screen 추가
```js
function Modal1Screen({ navigation }) {
  return (
    <View>
      <Button
        title="Close Modal1"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
```

### Navigator에 화면 추가
```js
<Stack.Group screenOptions={{ presentation: 'modal' }}>
  <Stack.Screen name="Modal1" component={Modal1Screen} />
</Stack.Group>
```

### Tab2에서 Modal창
```diff
- function Tab2Screen() {
```
```js
function Tab2Screen({ navigation }) {
  return (
    <View>
      <Text>
        <Button
          title="Open Modal1"
          onPress={() => navigation.navigate('Modal1')}
        />
      </Text>
    </View>
  );
}
```
* ❔ `Modal창` 헤더 이름 변경과 가운데 정렬

### 헤더 좌측 뒤로가기 빼고, 헤더 우측에 X버튼 만들기
```diff
+ import { Pressable } from 'react-native';
- <Stack.Screen name="Modal1" component={Modal1Screen} />
```
```js
<Stack.Screen name="Modal1" component={Modal1Screen}
  options={({ navigation }) => ({
    headerLeft: () => (<></>),
    headerRight: () => (
      <Pressable onPress={() => navigation.goBack()}>
        <FontAwesome
          name="close"
          size={25}
        />
      </Pressable>
    )
  })}
/>
```

# StatusBar
* https://reactnative.dev/docs/statusbar
* 상단의 메뉴(뒤로가기, 시계, 베터리 ...)를 사라지게 한다.
```js
import { StatusBar } from 'expo-status-bar';

<View>
  <StatusBar hidden={true} />
</View>
```

# SafeAreaView
* https://reactnative.dev/docs/safeareaview
* StatusBar은 빼고 영역을 잡는다. (iOSX 노치(Notch Design) 부분)
```js
import { SafeAreaView } from 'react-native';

<SafeAreaView>
  <View></View>
</SafeAreaView>

/* or */

import { SafeAreaProvider } from 'react-native-safe-area-context';

<SafeAreaProvider>
  <View></View>
</SafeAreaProvider>
```
* ❕ `Navigation`을 사용하는 경우 이미 적용 되어 있다.
