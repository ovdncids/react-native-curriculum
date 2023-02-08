# RED

* [Home](https://ovdncids.github.io/react-native-curriculum/red/home.png)

* [Items](https://ovdncids.github.io/react-native-curriculum/red/items.png)

* [Groceries](https://ovdncids.github.io/react-native-curriculum/red/groceries.png)

* [GroceryModal](https://ovdncids.github.io/react-native-curriculum/red/groceryModal.png)

* [Login](https://ovdncids.github.io/react-native-curriculum/red/login.png)

## Markup
```sh
npm install @react-navigation/native @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context
npm install @react-navigation/bottom-tabs
npm install react-native-bouncy-checkbox
```

app.js
```js
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import Home from './screens/Home'
import Items from './screens/Items'
import Groceries, { ModalGroceryUpdate } from './screens/Groceries'

const BottomTab = createBottomTabNavigator();
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Home">
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: 'center',
          tabBarIcon: () => <Ionicons
            name="home-outline"
            size={30} style={{ marginBottom: -3 }}
          />
        }}
      />
      <BottomTab.Screen
        name="Items"
        component={Items}
        options={{
          headerTitleAlign: 'center',
          tabBarIcon: () => <MaterialIcons
            name="add-shopping-cart"
            size={30} style={{ marginBottom: -3 }}
          />
        }}
      />
      <BottomTab.Screen
        name="Groceries"
        component={Groceries}
        options={{
          headerTitleAlign: 'center',
          tabBarIcon: () => <MaterialIcons
            name="kitchen"
            size={30} style={{ marginBottom: -3 }}
          />,
          tabBarBadge: 1
        }}
      />
      <BottomTab.Screen
        name="Login"
        component={Groceries}
        options={{
          headerTitleAlign: 'center',
          tabBarIcon: () => <Ionicons
            name="person-outline"
            size={30} style={{ marginBottom: -3 }}
          />
        }}
        listeners={{
          tabPress: (event) => {
            event.preventDefault();
            Alert.alert('Login', 'Hello 홍길동!', [
              { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
              { text: 'Geust', onPress: () => console.log('Guest') },
              { text: 'Login', onPress: () => console.log('Login') },
              { text: 'Logout', onPress: () => console.log('Logout') }
            ]);
          }
        }}
      />
    </BottomTab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen name="ModalGroceryUpdate" component={ModalGroceryUpdate}
              options={({ navigation }) => ({
                title: "Grocery update",
                headerTitleAlign: 'center',
                headerLeft: () => (<></>),
                headerRight: () => (
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FontAwesome
                      name="close"
                      size={25}
                    />
                  </TouchableOpacity>
                )
              })}
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
```

styles/styles.js
```js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  form: {
    margin: 16,
    flexDirection: 'row'
  },
  thead: {
    marginVertical: 0,
    marginHorizontal: 16,
    paddingVertical: 16,
    borderTopColor: 'lightgray',
    borderTopWidth: 1,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1
  },
  tbody: {
    margin: 16
  },
  rows: {
    margin: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderStyle: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    padding: 8,
    marginHorizontal: 4
  },
  textAlignCenter: {
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  flex1: {
    flex: 1
  },
  flex2: {
    flex: 2
  },
  flex3: {
    flex: 3
  }
});
```

screens/Home.js
```js
import React from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrap: {
    flex: 1
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'rgb(206, 0, 0)',
    fontSize: 32,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 16
  },
  footer: {
    backgroundColor: 'black',
    padding: 8
  },
  footerText: {
    color: "white",
  }
});

function Home() {
  return (
    <View style={styles.wrap}>
      <View style={styles.main}>
        <Text style={styles.title}>RED</Text>
        <Text style={styles.description}>Welcome to Refrigerator Expiry Date</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2022. RED Co. all rights reserved.</Text>
      </View>
    </View>
  );
}

export default Home;
```

screens/Items.js
```js
import React from 'react';
import { Text, TextInput, View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { styles } from '../styles/styles'

function Items() {
  return (
    <>
      <View name="form" style={styles.form}>
        <TextInput
          style={[styles.borderStyle, styles.flex1]}
          type="number"
          placeholder="Create"
        />
        <TouchableOpacity onPress={() => {}}
          style={styles.flexCenter}>
          <FontAwesome
            name="pencil"
            size={24}
            style={{ marginHorizontal: 16, color: '#4285F4' }}
          />
        </TouchableOpacity>
      </View>
      <View name="thead" style={styles.thead}>
        <View name="tr" style={styles.rows}>
          <Text style={[styles.flex1, styles.textAlignCenter]}>Mov</Text>
          <View style={[styles.flex2, styles.flexCenter, { flexDirection: 'row' }]}>
            <Text>Name</Text>
            <View>
              <TouchableOpacity onPress={() => {}} style={{ position: 'absolute', top: -16, right: -24 }}>
                <AntDesign
                  name="caretup"
                  size={20}
                  style={[{ color: 'black' }]}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}} style={{ position: 'absolute', bottom: -16, right: -24 }}>
                <AntDesign
                  name="caretdown"
                  size={20}
                  style={{ color: '#EA4335' }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.flex3, styles.flexCenter, { flexDirection: 'row' }]}>
            <Text>Enter</Text>
            <View>
              <TouchableOpacity onPress={() => {}} style={{ position: 'absolute', top: -16, right: -24 }}>
                <AntDesign
                  name="caretup"
                  size={20}
                  style={[{ color: 'black' }]}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}} style={{ position: 'absolute', bottom: -16, right: -24 }}>
                <AntDesign
                  name="caretdown"
                  size={20}
                  style={[{ color: 'black' }]}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.flex3, styles.flexCenter, { flexDirection: 'row' }]}>
            <Text>Expire</Text>
            <View>
              <TouchableOpacity onPress={() => {}} style={{ position: 'absolute', top: -16, right: -24 }}>
                <AntDesign
                  name="caretup"
                  size={20}
                  style={[{ color: 'black' }]}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}} style={{ position: 'absolute', bottom: -16, right: -24 }}>
                <AntDesign
                  name="caretdown"
                  size={20}
                  style={[{ color: 'black' }]}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={[styles.flex1, styles.textAlignCenter]}>Del</Text>
        </View>
      </View>
      <ScrollView name="tbody" style={styles.tbody}>
        <View name="tr" style={styles.rows}>
          <BouncyCheckbox style={[styles.flex1]} fillColor="#4285F4" onPress={() => {}} />
          <Text style={[styles.flex2, styles.textAlignCenter]}>사과</Text>
          <Text style={[styles.flex3, styles.textAlignCenter]}>2022-01-01</Text>
          <TextInput
            style={[styles.flex3, styles.textAlignCenter, styles.borderStyle]}
            placeholder="Expire"
            value="2022-01-15"
          />
          <TouchableOpacity onPress={() => {
            Alert.alert('Delete user', '삭제 하시겠습니까?', [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
              },
              { text: 'OK', onPress: () => console.log('OK Pressed') }
            ]);
          }} style={[styles.flex1, styles.flexCenter]}>
            <FontAwesome
              name="trash"
              size={24}
              style={{ color: '#EA4335' }}
            />
          </TouchableOpacity>
        </View>
        <View name="tr" style={styles.rows}>
          <BouncyCheckbox style={[styles.flex1, styles.textAlignCenter]} fillColor="#4285F4" onPress={() => {}} />
          <Text style={[styles.flex2, styles.textAlignCenter]}>바나나</Text>
          <Text style={[styles.flex3, styles.textAlignCenter]}>2022-01-01</Text>
          <TextInput
            style={[styles.flex3, styles.textAlignCenter, styles.borderStyle]}
            placeholder="Expire"
            value="2022-01-15"
          />
          <TouchableOpacity onPress={() => {
            Alert.alert('Delete user', '삭제 하시겠습니까?', [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
              },
              { text: 'OK', onPress: () => console.log('OK Pressed') }
            ]);
          }} style={[styles.flex1, styles.flexCenter]}>
            <FontAwesome
              name="trash"
              size={24}
              style={{ color: '#EA4335' }}
            />
          </TouchableOpacity>
        </View>
        <View name="tr" style={styles.rows}>
          <BouncyCheckbox style={[styles.flex1]} fillColor="#4285F4" onPress={() => {}} />
          <Text style={[styles.flex2, styles.textAlignCenter]}>딸기</Text>
          <Text style={[styles.flex3, styles.textAlignCenter]}>2022-01-01</Text>
          <TextInput
            style={[styles.flex3, styles.textAlignCenter, styles.borderStyle]}
            placeholder="Expire"
            value="2022-01-15"
          />
          <TouchableOpacity onPress={() => {
            Alert.alert('Delete user', '삭제 하시겠습니까?', [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
              },
              { text: 'OK', onPress: () => console.log('OK Pressed') }
            ]);
          }} style={[styles.flex1, styles.flexCenter]}>
            <FontAwesome
              name="trash"
              size={24}
              style={{ color: '#EA4335' }}
            />
          </TouchableOpacity>
        </View>
        <View name="tr" style={styles.rows}>
          <BouncyCheckbox style={[styles.flex1]} fillColor="#4285F4" onPress={() => {}} />
          <Text style={[styles.flex2, styles.textAlignCenter]}>키위</Text>
          <Text style={[styles.flex3, styles.textAlignCenter]}>2022-01-01</Text>
          <TextInput
            style={[styles.flex3, styles.textAlignCenter, styles.borderStyle]}
            placeholder="Expire"
            value="2022-01-15"
          />
          <TouchableOpacity onPress={() => {
            Alert.alert('Delete user', '삭제 하시겠습니까?', [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
              },
              { text: 'OK', onPress: () => console.log('OK Pressed') }
            ]);
          }} style={[styles.flex1, styles.flexCenter]}>
            <FontAwesome
              name="trash"
              size={24}
              style={{ color: '#EA4335' }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

export default Items;
```

screens/Groceries.js
```js
import React from 'react';
import { Text, TextInput, View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { styles } from '../styles/styles'

function Items({ navigation }) {
  return (
    <>
      <View name="form" style={styles.form}>
        <TextInput
          style={[styles.borderStyle, styles.flex1]}
          type="number"
          placeholder="Search"
        />
        <TouchableOpacity onPress={() => {}}
          style={styles.flexCenter}>
          <FontAwesome
            name="pencil"
            size={24}
            style={{ marginHorizontal: 16, color: '#34A853' }}
          />
        </TouchableOpacity>
      </View>
      <View name="thead" style={styles.thead}>
        <View name="tr" style={styles.rows}>
          <Text style={[styles.flex1, styles.textAlignCenter]}>No</Text>
          <View style={[styles.flex2, styles.flexCenter, { flexDirection: 'row' }]}>
            <Text>Name</Text>
            <View>
              <TouchableOpacity onPress={() => {}} style={{ position: 'absolute', top: -16, right: -24 }}>
                <AntDesign
                  name="caretup"
                  size={20}
                  style={[{ color: 'black' }]}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}} style={{ position: 'absolute', bottom: -16, right: -24 }}>
                <AntDesign
                  name="caretdown"
                  size={20}
                  style={{ color: '#EA4335' }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.flex3, styles.flexCenter, { flexDirection: 'row' }]}>
            <Text>Enter</Text>
            <View>
              <TouchableOpacity onPress={() => {}} style={{ position: 'absolute', top: -16, right: -24 }}>
                <AntDesign
                  name="caretup"
                  size={20}
                  style={[{ color: 'black' }]}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}} style={{ position: 'absolute', bottom: -16, right: -24 }}>
                <AntDesign
                  name="caretdown"
                  size={20}
                  style={[{ color: 'black' }]}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.flex3, styles.flexCenter, { flexDirection: 'row' }]}>
            <Text>Expire</Text>
            <View>
              <TouchableOpacity onPress={() => {}} style={{ position: 'absolute', top: -16, right: -24 }}>
                <AntDesign
                  name="caretup"
                  size={20}
                  style={[{ color: 'black' }]}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}} style={{ position: 'absolute', bottom: -16, right: -24 }}>
                <AntDesign
                  name="caretdown"
                  size={20}
                  style={[{ color: 'black' }]}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={[styles.flex1, styles.textAlignCenter]}>Edit</Text>
          <Text style={[styles.flex1, styles.textAlignCenter]}>Del</Text>
        </View>
      </View>
      <ScrollView name="tbody" style={styles.tbody}>
        <View name="tr" style={[styles.rows, { height: 35 }]}>
          <Text style={[styles.flex1, styles.textAlignCenter]}>1</Text>
          <Text style={[styles.flex2, styles.textAlignCenter]}>사과</Text>
          <Text style={[styles.flex3, styles.textAlignCenter]}>2022-01-01</Text>
          <Text style={[styles.flex3, styles.textAlignCenter]}>2022-01-15</Text>
          <TouchableOpacity onPress={() => {
            navigation.navigate('ModalGroceryUpdate')
          }} style={[styles.flex1, styles.flexCenter]}>
            <FontAwesome
              name="edit"
              size={24}
              style={{ color: '#FBBC05' }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            Alert.alert('Delete user', '삭제 하시겠습니까?', [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
              },
              { text: 'OK', onPress: () => console.log('OK Pressed') }
            ]);
          }} style={[styles.flex1, styles.flexCenter]}>
            <FontAwesome
              name="trash"
              size={24}
              style={{ color: '#EA4335' }}
            />
          </TouchableOpacity>
        </View>
        <View name="tr" style={[styles.rows, { height: 35 }]}>
          <Text style={[styles.flex1, styles.textAlignCenter]}>2</Text>
          <Text style={[styles.flex2, styles.textAlignCenter]}>바나나</Text>
          <Text style={[styles.flex3, styles.textAlignCenter]}>2022-01-01</Text>
          <Text style={[styles.flex3, styles.textAlignCenter]}>2022-01-15</Text>
          <TouchableOpacity onPress={() => {
            navigation.navigate('ModalGroceryUpdate')
          }} style={[styles.flex1, styles.flexCenter]}>
            <FontAwesome
              name="edit"
              size={24}
              style={{ color: '#FBBC05' }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            Alert.alert('Delete user', '삭제 하시겠습니까?', [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
              },
              { text: 'OK', onPress: () => console.log('OK Pressed') }
            ]);
          }} style={[styles.flex1, styles.flexCenter]}>
            <FontAwesome
              name="trash"
              size={24}
              style={{ color: '#EA4335' }}
            />
          </TouchableOpacity>
        </View>
        <View name="tr" style={[styles.rows, { height: 35 }]}>
          <Text style={[styles.flex1, styles.textAlignCenter]}>3</Text>
          <Text style={[styles.flex2, styles.textAlignCenter]}>딸기</Text>
          <Text style={[styles.flex3, styles.textAlignCenter]}>2022-01-01</Text>
          <Text style={[styles.flex3, styles.textAlignCenter]}>2022-01-15</Text>
          <TouchableOpacity onPress={() => {
            navigation.navigate('ModalGroceryUpdate')
          }} style={[styles.flex1, styles.flexCenter]}>
            <FontAwesome
              name="edit"
              size={24}
              style={{ color: '#FBBC05' }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            Alert.alert('Delete user', '삭제 하시겠습니까?', [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
              },
              { text: 'OK', onPress: () => console.log('OK Pressed') }
            ]);
          }} style={[styles.flex1, styles.flexCenter]}>
            <FontAwesome
              name="trash"
              size={24}
              style={{ color: '#EA4335' }}
            />
          </TouchableOpacity>
        </View>
        <View name="tr" style={[styles.rows, { height: 35 }]}>
          <Text style={[styles.flex1, styles.textAlignCenter]}>4</Text>
          <Text style={[styles.flex2, styles.textAlignCenter]}>키위</Text>
          <Text style={[styles.flex3, styles.textAlignCenter]}>2022-01-01</Text>
          <Text style={[styles.flex3, styles.textAlignCenter]}>2022-01-15</Text>
          <TouchableOpacity onPress={() => {
            navigation.navigate('ModalGroceryUpdate')
          }} style={[styles.flex1, styles.flexCenter]}>
            <FontAwesome
              name="edit"
              size={24}
              style={{ color: '#FBBC05' }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            Alert.alert('Delete user', '삭제 하시겠습니까?', [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
              },
              { text: 'OK', onPress: () => console.log('OK Pressed') }
            ]);
          }} style={[styles.flex1, styles.flexCenter]}>
            <FontAwesome
              name="trash"
              size={24}
              style={{ color: '#EA4335' }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

export function ModalGroceryUpdate(props) {
  console.log(props.route.name);
  return (
    <>
      <View name="thead" style={styles.thead}>
        <View name="user" style={styles.rows}>
          <Text style={[styles.flex2, styles.textAlignCenter]}>Name</Text>
          <Text style={[styles.flex3, styles.textAlignCenter]}>Enter</Text>
          <Text style={[styles.flex3, styles.textAlignCenter]}>Expire</Text>
          <Text style={[styles.flex2, styles.textAlignCenter]}>Edit</Text>
        </View>
      </View>
      <ScrollView name="tbody" style={styles.tbody}>
        <View name="user" style={styles.rows}>
          <TextInput
            style={[styles.flex2, styles.textAlignCenter, styles.borderStyle]}
            placeholder="Name"
            value="사과"
          />
          <TextInput
            style={[styles.flex3, styles.textAlignCenter, styles.borderStyle]}
            placeholder="Enter"
            value="2022-01-01"
          />
          <TextInput
            style={[styles.flex3, styles.textAlignCenter, styles.borderStyle]}
            placeholder="Expire"
            value="2022-01-15"
          />
          <TouchableOpacity onPress={() => {}}
            style={[styles.flex2, styles.flexCenter]}>
            <FontAwesome
              name="edit"
              size={24}
              style={{ color: '#FBBC05' }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

export default Items;
```

## MobX
* https://github.com/ovdncids/react-curriculum#users-store-%EB%A7%8C%EB%93%A4%EA%B8%B0

## onChangeText
```js
<TextInput
  onChangeText={text => console.log(text)}
/>
```
