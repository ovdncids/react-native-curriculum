# Markup

## StatusBar
* https://reactnative.dev/docs/statusbar
* 상단의 메뉴(뒤로가기, 시계, 베터리 ...)를 사라지게 한다.
```js
import { StatusBar } from 'expo-status-bar';

<View>
  <StatusBar hidden={true} />
</View>
```

## SafeAreaView
* https://reactnative.dev/docs/safeareaview
* StatusBar은 빼고 영역을 잡는다.
<!-- * iOSX 노치(Notch Design) 부분 -->
```js
import { SafeAreaView } from 'react-native';

<SafeAreaView>
  <View></View>
</SafeAreaView>
```

## SplashScreen
* 앱이 켜지기 전에 나오는 화면

## Navigation
* https://reactnative.dev/docs/navigation#installation-and-setup
```sh
npm install @react-navigation/native @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context
```

### Floating menu와 Screen 연결
```sh
npm install @react-navigation/bottom-tabs
```

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
* ❔`스크린3`, `스크린4`, `스크린5`를 만들고 `Floating menu`와 연결하기
