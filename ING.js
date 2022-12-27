import React, { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer, useRoute, useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function Tab1Screen({navigation}) {
  const isFocused = useIsFocused();
  const route = useRoute();
  console.log(route.name + ', ' + isFocused);
  console.log('Tab1Screen');
  useEffect(() => {
    console.log('Tab1Screen - effect');
  }, []);
  useEffect(() => {
    if (isFocused) console.log('Tab1Screen - Focused!!');
  }, [isFocused]);
  return (
    <View>
      <Text>
        <Button
          title="텝 스크린1"
          onPress={() => navigation.navigate('Screen1')}
          // onPress={() => navigation.goBack()}
        />
      </Text>
    </View>
  );
}

function Tab2Screen() {
  return (
    <View>
      <Text>텝 스크린2</Text>
    </View>
  );
}

function Tab3Screen() {
  return (
    <View>
      <Text>텝 스크린3</Text>
    </View>
  );
}

function Tab4Screen() {
  return (
    <View>
      <Text>텝 스크린4</Text>
    </View>
  );
}

function Tab5Screen() {
  return (
    <View>
      <Text>텝 스크린5</Text>
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
      <BottomTab.Screen
        name="Tab3"
        component={Tab3Screen}
      />
      <BottomTab.Screen
        name="Tab4"
        component={Tab4Screen}
      />
      <BottomTab.Screen
        name="Tab5"
        component={Tab5Screen}
      />
    </BottomTab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
export default function App() {
  console.log('App');
  useEffect(() => {
    console.log('App - effect');
  }, []);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Screen1">
          <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="Screen1" component={Screen1} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

function Screen1({navigation}) {
  const isFocused = useIsFocused();
  const route = useRoute();
  console.log(route.name + ', ' + isFocused);
  console.log('Screen1');
  const insets = useSafeAreaInsets();
  useEffect(() => {
    console.log('Screen1 - effect');
  }, []);
  useEffect(() => {
    if (isFocused) console.log('Screen1 - Focused!!');
  }, [isFocused]);
  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Text>
        <Button
          title="메인 스크린1"
          onPress={() => navigation.navigate('Root')}
        />
      </Text>
      <Text>
        <Button
          title="메인 스크린1"
          onPress={() => navigation.navigate('Root')}
        />
      </Text>
    </View>
  );
}
