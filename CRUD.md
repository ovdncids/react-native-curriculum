# CRUD

* [Create](https://ovdncids.github.io/react-native-curriculum/crud/create.png)

* [Read](https://ovdncids.github.io/react-native-curriculum/crud/read.png)

* [Update](https://ovdncids.github.io/react-native-curriculum/crud/update.png)

* [Delete](https://ovdncids.github.io/react-native-curriculum/crud/delete.png)

<!--
## Markup
```js
<>
  <View name="thead">
    <View>
      <Text>이름</Text>
      <Text>나이</Text>
      <Text>수정</Text>
      <Text>삭제</Text>
    </View>
  </View>
  <ScrollView name="tbody">
    <View>
      <Text>홍길동</Text>
      <Text>39</Text>
      <TouchableOpacity onPress={() => {}}>
        <FontAwesome
          name="edit"
          size={24}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <FontAwesome
          name="trash"
          size={24}
        />
      </TouchableOpacity>
    </View>
  </ScrollView>
</>
```

## 구글 색상
```sh
파란색: #4285F4
빨간색: #EA4335
노란색: #FBBC05
녹색: #34A853
```
-->

## Alert
* https://reactnative.dev/docs/alert#example

## onChangeText
```js
<TextInput
  onChangeText={text => console.log(text)}
/>
```

## TextInput 숫자키만 받기
```js
<TextInput
  keyboardType="number-pad"
></TextInput>
```

## RefreshControl
* https://reactnative.dev/docs/refreshcontrol
* `ScrollView`에서 `스크롤 업` 하면 새로고침(스피너 로딩) 할 수 있다.
```js
import { RefreshControl } from 'react-native';
```
```js
<ScrollView
  refreshControl={
    <RefreshControl
      refreshing={false}
      onRefresh={() => {console.log('스크롤 업 이벤트 발생')}}
    />
  }
>
</ScrollView>
```

## useFocusEffect
```js
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

useFocusEffect(
  useCallback(() => {
    console.log('Screen in');
    return () => {
      console.log('Screen out');
    };
  }, [])
);
```
* `useFocusEffect`는 `React.useCallback`에 의존되어 있다.
* `useFocusEffect`가 받은 함수가 `익명 함수`이면 랜더링이 될때마다 `새로운 익명 함수`를 생성 하므로 `useCallback`을 사용해야 한다.

```log
 LOG  Screen in  (첫 테스트 실행)
 LOG  Screen out (첫 테스트 cleanup)
 LOG  Screen in  (진짜 실행)
```
* 다시 들어올때 `LOG  Screen in`이 2번 실행되는건 `React.StrictMode` 때문이다. `build` 후에서는 1번만 호출 된다.

## Markup CRUD
CRUD.js
```js
import React from 'react';
import { Text, TextInput, View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  thead: {
    margin: 16,
    marginBottom: 0,
    paddingBottom: 16,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1
  },
  tbody: {
    margin: 16
  },
  user: {
    margin: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  userName: {
    flex: 1,
    textAlign: 'center'
  },
  userAge: {
    flex: 1,
    textAlign: 'center'
  },
  userUpdate: {
    flex: 1,
    textAlign: 'center'
  },
  userDelete: {
    flex: 1,
    textAlign: 'center'
  },
  borderStyle: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    padding: 8,
    marginHorizontal: 4
  },
  textAlignCenter: {
    textAlign: 'center'
  },
  flex1: {
    flex: 1
  }
});

function CRUD({ navigation }) {
  return (
    <>
      <View name="thead" style={styles.thead}>
        <View name="user" style={styles.user}>
          <Text style={[styles.flex1, styles.textAlignCenter]}>이름</Text>
          <Text style={[styles.flex1, styles.textAlignCenter]}>나이</Text>
          <Text style={[styles.flex1, styles.textAlignCenter]}>수정</Text>
          <Text style={[styles.flex1, styles.textAlignCenter]}>삭제</Text>
        </View>
      </View>
      <ScrollView name="tbody" style={styles.tbody}>
        <View name="user" style={styles.user}>
          <Text style={styles.userName}>홍길동</Text>
          <Text style={styles.userAge}>39</Text>
          <TouchableOpacity onPress={() => {
            navigation.navigate('ModalUpdate', 0)
          }} style={styles.userUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.userUpdate, { color: '#FBBC05' }]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            Alert.alert(
              "Delete user",
              "삭제 하시겠습니까?",
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
              ]
            );
          }} style={styles.userDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.userDelete, { color: '#EA4335' }]}
            />
          </TouchableOpacity>
        </View>
        <View name="user" style={styles.user}>
          <Text style={styles.userName}>김삼순</Text>
          <Text style={styles.userAge}>33</Text>
          <TouchableOpacity onPress={() => {}} style={styles.userUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.userUpdate, { color: '#FBBC05' }]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.userDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.userDelete, { color: '#EA4335' }]}
            />
          </TouchableOpacity>
        </View>
        <View name="user" style={styles.user}>
          <Text style={styles.userName}>홍명보</Text>
          <Text style={styles.userAge}>44</Text>
          <TouchableOpacity onPress={() => {}} style={styles.userUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.userUpdate, { color: '#FBBC05' }]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.userDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.userDelete, { color: '#EA4335' }]}
            />
          </TouchableOpacity>
        </View>
        <View name="user" style={styles.user}>
          <Text style={styles.userName}>박지삼</Text>
          <Text style={styles.userAge}>22</Text>
          <TouchableOpacity onPress={() => {}} style={styles.userUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.userUpdate, { color: '#FBBC05' }]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.userDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.userDelete, { color: '#EA4335' }]}
            />
          </TouchableOpacity>
        </View>
        <View name="user" style={styles.user}>
          <Text style={styles.userName}>권명순</Text>
          <Text style={styles.userAge}>10</Text>
          <TouchableOpacity onPress={() => {}} style={styles.userUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.userUpdate, { color: '#FBBC05' }]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.userDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.userDelete, { color: '#EA4335' }]}
            />
          </TouchableOpacity>
        </View>
        <View name="user" style={styles.user}>
          <Text style={styles.userName}>홍길동</Text>
          <Text style={styles.userAge}>39</Text>
          <TouchableOpacity onPress={() => {}} style={styles.userUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.userUpdate, { color: '#FBBC05' }]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.userDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.userDelete, { color: '#EA4335' }]}
            />
          </TouchableOpacity>
        </View>
        <View name="user" style={styles.user}>
          <Text style={styles.userName}>김삼순</Text>
          <Text style={styles.userAge}>33</Text>
          <TouchableOpacity onPress={() => {}} style={styles.userUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.userUpdate, { color: '#FBBC05' }]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.userDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.userDelete, { color: '#EA4335' }]}
            />
          </TouchableOpacity>
        </View>
        <View name="user" style={styles.user}>
          <Text style={styles.userName}>홍명보</Text>
          <Text style={styles.userAge}>44</Text>
          <TouchableOpacity onPress={() => {}} style={styles.userUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.userUpdate, { color: '#FBBC05' }]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.userDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.userDelete, { color: '#EA4335' }]}
            />
          </TouchableOpacity>
        </View>
        <View name="user" style={styles.user}>
          <Text style={styles.userName}>박지삼</Text>
          <Text style={styles.userAge}>22</Text>
          <TouchableOpacity onPress={() => {}} style={styles.userUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.userUpdate, { color: '#FBBC05' }]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.userDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.userDelete, { color: '#EA4335' }]}
            />
          </TouchableOpacity>
        </View>
        <View name="user" style={styles.user}>
          <Text style={styles.userName}>권명순</Text>
          <Text style={styles.userAge}>10</Text>
          <TouchableOpacity onPress={() => {}} style={styles.userUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.userUpdate, { color: '#FBBC05' }]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.userDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.userDelete, { color: '#EA4335' }]}
            />
          </TouchableOpacity>
        </View>
        <View name="user" style={styles.user}>
          <Text style={styles.userName}>홍길동</Text>
          <Text style={styles.userAge}>39</Text>
          <TouchableOpacity onPress={() => {}} style={styles.userUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.userUpdate, { color: '#FBBC05' }]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.userDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.userDelete, { color: '#EA4335' }]}
            />
          </TouchableOpacity>
        </View>
        <View name="user" style={styles.user}>
          <Text style={styles.userName}>김삼순</Text>
          <Text style={styles.userAge}>33</Text>
          <TouchableOpacity onPress={() => {}} style={styles.userUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.userUpdate, { color: '#FBBC05' }]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.userDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.userDelete, { color: '#EA4335' }]}
            />
          </TouchableOpacity>
        </View>
        <View name="user" style={styles.user}>
          <Text style={styles.userName}>홍명보</Text>
          <Text style={styles.userAge}>44</Text>
          <TouchableOpacity onPress={() => {}} style={styles.userUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.userUpdate, { color: '#FBBC05' }]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.userDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.userDelete, { color: '#EA4335' }]}
            />
          </TouchableOpacity>
        </View>
        <View name="user" style={styles.user}>
          <Text style={styles.userName}>박지삼</Text>
          <Text style={styles.userAge}>22</Text>
          <TouchableOpacity onPress={() => {}} style={styles.userUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.userUpdate, { color: '#FBBC05' }]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.userDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.userDelete, { color: '#EA4335' }]}
            />
          </TouchableOpacity>
        </View>
        <View name="user" style={styles.user}>
          <Text style={styles.userName}>권명순</Text>
          <Text style={styles.userAge}>10</Text>
          <TouchableOpacity onPress={() => {}} style={styles.userUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.userUpdate, { color: '#FBBC05' }]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.userDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.userDelete, { color: '#EA4335' }]}
            />
          </TouchableOpacity>
        </View>
        <View name="user" style={styles.user}>
          <Text style={styles.userName}>홍길동</Text>
          <Text style={styles.userAge}>39</Text>
          <TouchableOpacity onPress={() => {}} style={styles.userUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.userUpdate, { color: '#FBBC05' }]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.userDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.userDelete, { color: '#EA4335' }]}
            />
          </TouchableOpacity>
        </View>
        <View name="user" style={styles.user}>
          <Text style={styles.userName}>김삼순</Text>
          <Text style={styles.userAge}>33</Text>
          <TouchableOpacity onPress={() => {}} style={styles.userUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.userUpdate, { color: '#FBBC05' }]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.userDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.userDelete, { color: '#EA4335' }]}
            />
          </TouchableOpacity>
        </View>
        <View name="user" style={styles.user}>
          <Text style={styles.userName}>홍명보</Text>
          <Text style={styles.userAge}>44</Text>
          <TouchableOpacity onPress={() => {}} style={styles.userUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.userUpdate, { color: '#FBBC05' }]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.userDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.userDelete, { color: '#EA4335' }]}
            />
          </TouchableOpacity>
        </View>
        <View name="user" style={styles.user}>
          <Text style={styles.userName}>박지삼</Text>
          <Text style={styles.userAge}>22</Text>
          <TouchableOpacity onPress={() => {}} style={styles.userUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.userUpdate, { color: '#FBBC05' }]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.userDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.userDelete, { color: '#EA4335' }]}
            />
          </TouchableOpacity>
        </View>
        <View name="user" style={styles.user}>
          <Text style={styles.userName}>권명순</Text>
          <Text style={styles.userAge}>10</Text>
          <TouchableOpacity onPress={() => {}} style={styles.userUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.userUpdate, { color: '#FBBC05' }]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.userDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.userDelete, { color: '#EA4335' }]}
            />
          </TouchableOpacity>
        </View>
        <View name="user" style={styles.user}>
          <Text style={styles.userName}>홍길동</Text>
          <Text style={styles.userAge}>39</Text>
          <TouchableOpacity onPress={() => {}} style={styles.userUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.userUpdate, { color: '#FBBC05' }]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.userDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.userDelete, { color: '#EA4335' }]}
            />
          </TouchableOpacity>
        </View>
        <View name="user" style={styles.user}>
          <Text style={styles.userName}>김삼순</Text>
          <Text style={styles.userAge}>33</Text>
          <TouchableOpacity onPress={() => {}} style={styles.userUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.userUpdate, { color: '#FBBC05' }]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.userDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.userDelete, { color: '#EA4335' }]}
            />
          </TouchableOpacity>
        </View>
        <View name="user" style={styles.user}>
          <Text style={styles.userName}>홍명보</Text>
          <Text style={styles.userAge}>44</Text>
          <TouchableOpacity onPress={() => {}} style={styles.userUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.userUpdate, { color: '#FBBC05' }]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.userDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.userDelete, { color: '#EA4335' }]}
            />
          </TouchableOpacity>
        </View>
        <View name="user" style={styles.user}>
          <Text style={styles.userName}>박지삼</Text>
          <Text style={styles.userAge}>22</Text>
          <TouchableOpacity onPress={() => {}} style={styles.userUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.userUpdate, { color: '#FBBC05' }]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.userDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.userDelete, { color: '#EA4335' }]}
            />
          </TouchableOpacity>
        </View>
        <View name="user" style={styles.user}>
          <Text style={styles.userName}>권명순</Text>
          <Text style={styles.userAge}>10</Text>
          <TouchableOpacity onPress={() => {}} style={styles.userUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.userUpdate, { color: '#FBBC05' }]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.userDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.userDelete, { color: '#EA4335' }]}
            />
          </TouchableOpacity>
        </View>
        <View name="user" style={styles.user}>
          <Text style={styles.userName}>홍길동</Text>
          <Text style={styles.userAge}>39</Text>
          <TouchableOpacity onPress={() => {}} style={styles.userUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.userUpdate, { color: '#FBBC05' }]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.userDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.userDelete, { color: '#EA4335' }]}
            />
          </TouchableOpacity>
        </View>
        <View name="user" style={styles.user}>
          <Text style={styles.userName}>김삼순</Text>
          <Text style={styles.userAge}>33</Text>
          <TouchableOpacity onPress={() => {}} style={styles.userUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.userUpdate, { color: '#FBBC05' }]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.userDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.userDelete, { color: '#EA4335' }]}
            />
          </TouchableOpacity>
        </View>
        <View name="user" style={styles.user}>
          <Text style={styles.userName}>홍명보</Text>
          <Text style={styles.userAge}>44</Text>
          <TouchableOpacity onPress={() => {}} style={styles.userUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.userUpdate, { color: '#FBBC05' }]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.userDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.userDelete, { color: '#EA4335' }]}
            />
          </TouchableOpacity>
        </View>
        <View name="user" style={styles.user}>
          <Text style={styles.userName}>박지삼</Text>
          <Text style={styles.userAge}>22</Text>
          <TouchableOpacity onPress={() => {}} style={styles.userUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.userUpdate, { color: '#FBBC05' }]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.userDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.userDelete, { color: '#EA4335' }]}
            />
          </TouchableOpacity>
        </View>
        <View name="user" style={styles.user}>
          <Text style={styles.userName}>권명순</Text>
          <Text style={styles.userAge}>10</Text>
          <TouchableOpacity onPress={() => {}} style={styles.userUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.userUpdate, { color: '#FBBC05' }]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.userDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.userDelete, { color: '#EA4335' }]}
            />
          </TouchableOpacity>
        </View>
        <View name="user" style={styles.user}>
          <Text style={styles.userName}>홍길동</Text>
          <Text style={styles.userAge}>39</Text>
          <TouchableOpacity onPress={() => {}} style={styles.userUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.userUpdate, { color: '#FBBC05' }]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.userDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.userDelete, { color: '#EA4335' }]}
            />
          </TouchableOpacity>
        </View>
        <View name="user" style={styles.user}>
          <Text style={styles.userName}>김삼순</Text>
          <Text style={styles.userAge}>33</Text>
          <TouchableOpacity onPress={() => {}} style={styles.userUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.userUpdate, { color: '#FBBC05' }]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.userDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.userDelete, { color: '#EA4335' }]}
            />
          </TouchableOpacity>
        </View>
        <View name="user" style={styles.user}>
          <Text style={styles.userName}>홍명보</Text>
          <Text style={styles.userAge}>44</Text>
          <TouchableOpacity onPress={() => {}} style={styles.userUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.userUpdate, { color: '#FBBC05' }]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.userDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.userDelete, { color: '#EA4335' }]}
            />
          </TouchableOpacity>
        </View>
        <View name="user" style={styles.user}>
          <Text style={styles.userName}>박지삼</Text>
          <Text style={styles.userAge}>22</Text>
          <TouchableOpacity onPress={() => {}} style={styles.userUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.userUpdate, { color: '#FBBC05' }]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.userDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.userDelete, { color: '#EA4335' }]}
            />
          </TouchableOpacity>
        </View>
        <View name="user" style={styles.user}>
          <Text style={styles.userName}>권명순</Text>
          <Text style={styles.userAge}>10</Text>
          <TouchableOpacity onPress={() => {}} style={styles.userUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.userUpdate, { color: '#FBBC05' }]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.userDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.userDelete, { color: '#EA4335' }]}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

export function ModalCreate(props) {
  console.log(props.route.name);
  return (
    <>
      <View name="thead" style={styles.thead}>
        <View name="user" style={styles.user}>
          <Text style={[styles.flex1, styles.textAlignCenter]}>이름</Text>
          <Text style={[styles.flex1, styles.textAlignCenter]}>나이</Text>
          <Text style={[styles.flex1, styles.textAlignCenter]}>생성</Text>
        </View>
      </View>
      <ScrollView name="tbody" style={styles.tbody}>
        <View name="user" style={styles.user}>
          <TextInput
            style={[styles.userName, styles.borderStyle]}
            placeholder="Name"
          />
          <TextInput
            style={[styles.userAge, styles.borderStyle]}
            placeholder="Age"
          />
          <TouchableOpacity onPress={() => {}} style={styles.userUpdate}>
            <FontAwesome
              name="pencil"
              size={24}
              style={[styles.userUpdate, { color: '#4285F4', padding: 8 }]}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

export function ModalUpdate(props) {
  console.log(props.route.name, props.route.params);
  return (
    <>
      <View name="thead" style={styles.thead}>
        <View name="user" style={styles.user}>
          <Text style={[styles.flex1, styles.textAlignCenter]}>이름</Text>
          <Text style={[styles.flex1, styles.textAlignCenter]}>나이</Text>
          <Text style={[styles.flex1, styles.textAlignCenter]}>수정</Text>
        </View>
      </View>
      <ScrollView name="tbody" style={styles.tbody}>
        <View name="user" style={styles.user}>
          <TextInput
            style={[styles.userName, styles.borderStyle]}
            placeholder="Name"
          />
          <TextInput
            style={[styles.userAge, styles.borderStyle]}
            placeholder="Age"
          />
          <TouchableOpacity onPress={() => {}} style={[styles.userUpdate, { alignItems: 'center', justifyContent: 'center' }]}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.userUpdate, { color: '#FBBC05', padding: 8 }]}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

export default CRUD;
```

App.js
```js
import { TouchableOpacity } from 'react-native';
```
```diff
- import CRUD from './screens/CRUD'
+ import CRUD, { ModalCreate, ModalUpdate } from './screens/CRUD'
```
```js
<BottomTab.Screen
  name="Tab5"
  component={CRUD}
  options={({ navigation }) => ({
    headerTitleAlign: 'center',
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('ModalCreate')}>
        <FontAwesome
          name="pencil"
          size={24}
          style={{ marginRight: 24, color: '#4285F4' }}
        />
      </TouchableOpacity>
    ),
    tabBarIcon: () => <FontAwesome
      name="home"
      size={30}
      style={{ marginBottom: -3 }}
    />
  })}
/>
```
```js
<Stack.Group screenOptions={{ presentation: 'modal' }}>
  <Stack.Screen name="ModalCreate" component={ModalCreate}
    options={({ navigation }) => ({
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
  <Stack.Screen name="ModalUpdate" component={ModalUpdate}
    options={({ navigation }) => ({
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
```
