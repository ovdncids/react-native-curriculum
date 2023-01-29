# AsyncStorage
* https://react-native-async-storage.github.io/async-storage/docs/install

```js
import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Tab1Screen({navigation}) {
  return (
    <View>
      <Button
        title="메인 스크린1"
        onPress={() => navigation.navigate('Screen1')}
      />
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
    </BottomTab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
export default function App() {
  const [screen, setScreen] = useState(undefined);
  useEffect(() => {
    const init = async () => {
      const screen = await AsyncStorage.getItem("screen");
      setScreen(screen);
      console.log(screen);
    };
    init();
  }, []);
  return (
    <>
      {screen === undefined ? (
        <SafeAreaProvider>
          <Loading />
        </SafeAreaProvider>
      ) : (
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName={screen}>
              <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
              <Stack.Screen name="Screen1" component={Screen1} options={{ headerShown: false }} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      )}
    </>
  );
}

function Screen1({navigation}) {
  const insets = useSafeAreaInsets();
  const setItem = async (value) => {
    await AsyncStorage.setItem("screen", value);
  }
  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button
        title="텝 스크린1"
        onPress={() => navigation.navigate('Root')}
      />
      <Button
        title="setItem - Root"
        onPress={() => setItem("Root")}
      />
      <Button
        title="setItem - Screen1"
        onPress={() => setItem("Screen1")}
      />
      <Button
        title="removeItem"
        onPress={() => AsyncStorage.removeItem("screen")}
      />
    </View>
  );
}

function Loading() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >Loading</View>
  );
}
```
