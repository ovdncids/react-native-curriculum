# CRUD

* [Create](https://ovdncids.github.io/react-native-curriculum/crud/create.png)

* [Read](https://ovdncids.github.io/react-native-curriculum/crud/read.png)

* [Update](https://ovdncids.github.io/react-native-curriculum/crud/update.png)

* [Delete](https://ovdncids.github.io/react-native-curriculum/crud/delete.png)

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

## Alert
* https://reactnative.dev/docs/alert#example

## Markup
* <details><summary>Source</summary>

  screens/Tab5Screen.js
  ```js
  import React from 'react';
  import { Text, TextInput, View, ScrollView, Pressable, Alert } from 'react-native';
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
    member: {
      margin: 4,
      flexDirection: 'row',
      alignItems: 'center'
    },
    memberName: {
      flex: 1,
      textAlign: 'center'
    },
    memberAge: {
      flex: 1,
      textAlign: 'center'
    },
    memberUpdate: {
      flex: 1,
      textAlign: 'center'
    },
    memberDelete: {
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

  function Tab5Screen({ navigation }) {
    return (
      <>
        <View name="thead" style={styles.thead}>
          <View name="member" style={styles.member}>
            <Text style={[styles.flex1, styles.textAlignCenter]}>이름</Text>
            <Text style={[styles.flex1, styles.textAlignCenter]}>나이</Text>
            <Text style={[styles.flex1, styles.textAlignCenter]}>수정</Text>
            <Text style={[styles.flex1, styles.textAlignCenter]}>삭제</Text>
          </View>
        </View>
        <ScrollView name="tbody" style={styles.tbody}>
          <View name="member" style={styles.member}>
            <Text style={styles.memberName}>홍길동</Text>
            <Text style={styles.memberAge}>39</Text>
            <Pressable onPress={() => {
              navigation.navigate('ModalUpdate')
            }} style={styles.memberUpdate}>
              <FontAwesome
                name="edit"
                size={24}
                style={[styles.memberUpdate, { color: '#FBBC05' }]}
              />
            </Pressable>
            <Pressable onPress={() => {
              Alert.alert(
                "Delete member",
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
            }} style={styles.memberDelete}>
              <FontAwesome
                name="trash"
                size={24}
                style={[styles.memberDelete, { color: '#EA4335' }]}
              />
            </Pressable>
          </View>
          <View name="member" style={styles.member}>
            <Text style={styles.memberName}>김삼순</Text>
            <Text style={styles.memberAge}>33</Text>
            <Pressable onPress={() => {}} style={styles.memberUpdate}>
              <FontAwesome
                name="edit"
                size={24}
                style={[styles.memberUpdate, { color: '#FBBC05' }]}
              />
            </Pressable>
            <Pressable onPress={() => {}} style={styles.memberDelete}>
              <FontAwesome
                name="trash"
                size={24}
                style={[styles.memberDelete, { color: '#EA4335' }]}
              />
            </Pressable>
          </View>
          <View name="member" style={styles.member}>
            <Text style={styles.memberName}>홍명보</Text>
            <Text style={styles.memberAge}>44</Text>
            <Pressable onPress={() => {}} style={styles.memberUpdate}>
              <FontAwesome
                name="edit"
                size={24}
                style={[styles.memberUpdate, { color: '#FBBC05' }]}
              />
            </Pressable>
            <Pressable onPress={() => {}} style={styles.memberDelete}>
              <FontAwesome
                name="trash"
                size={24}
                style={[styles.memberDelete, { color: '#EA4335' }]}
              />
            </Pressable>
          </View>
          <View name="member" style={styles.member}>
            <Text style={styles.memberName}>박지삼</Text>
            <Text style={styles.memberAge}>22</Text>
            <Pressable onPress={() => {}} style={styles.memberUpdate}>
              <FontAwesome
                name="edit"
                size={24}
                style={[styles.memberUpdate, { color: '#FBBC05' }]}
              />
            </Pressable>
            <Pressable onPress={() => {}} style={styles.memberDelete}>
              <FontAwesome
                name="trash"
                size={24}
                style={[styles.memberDelete, { color: '#EA4335' }]}
              />
            </Pressable>
          </View>
          <View name="member" style={styles.member}>
            <Text style={styles.memberName}>권명순</Text>
            <Text style={styles.memberAge}>10</Text>
            <Pressable onPress={() => {}} style={styles.memberUpdate}>
              <FontAwesome
                name="edit"
                size={24}
                style={[styles.memberUpdate, { color: '#FBBC05' }]}
              />
            </Pressable>
            <Pressable onPress={() => {}} style={styles.memberDelete}>
              <FontAwesome
                name="trash"
                size={24}
                style={[styles.memberDelete, { color: '#EA4335' }]}
              />
            </Pressable>
          </View>
          <View name="member" style={styles.member}>
            <Text style={styles.memberName}>홍길동</Text>
            <Text style={styles.memberAge}>39</Text>
            <Pressable onPress={() => {}} style={styles.memberUpdate}>
              <FontAwesome
                name="edit"
                size={24}
                style={[styles.memberUpdate, { color: '#FBBC05' }]}
              />
            </Pressable>
            <Pressable onPress={() => {}} style={styles.memberDelete}>
              <FontAwesome
                name="trash"
                size={24}
                style={[styles.memberDelete, { color: '#EA4335' }]}
              />
            </Pressable>
          </View>
          <View name="member" style={styles.member}>
            <Text style={styles.memberName}>김삼순</Text>
            <Text style={styles.memberAge}>33</Text>
            <Pressable onPress={() => {}} style={styles.memberUpdate}>
              <FontAwesome
                name="edit"
                size={24}
                style={[styles.memberUpdate, { color: '#FBBC05' }]}
              />
            </Pressable>
            <Pressable onPress={() => {}} style={styles.memberDelete}>
              <FontAwesome
                name="trash"
                size={24}
                style={[styles.memberDelete, { color: '#EA4335' }]}
              />
            </Pressable>
          </View>
          <View name="member" style={styles.member}>
            <Text style={styles.memberName}>홍명보</Text>
            <Text style={styles.memberAge}>44</Text>
            <Pressable onPress={() => {}} style={styles.memberUpdate}>
              <FontAwesome
                name="edit"
                size={24}
                style={[styles.memberUpdate, { color: '#FBBC05' }]}
              />
            </Pressable>
            <Pressable onPress={() => {}} style={styles.memberDelete}>
              <FontAwesome
                name="trash"
                size={24}
                style={[styles.memberDelete, { color: '#EA4335' }]}
              />
            </Pressable>
          </View>
          <View name="member" style={styles.member}>
            <Text style={styles.memberName}>박지삼</Text>
            <Text style={styles.memberAge}>22</Text>
            <Pressable onPress={() => {}} style={styles.memberUpdate}>
              <FontAwesome
                name="edit"
                size={24}
                style={[styles.memberUpdate, { color: '#FBBC05' }]}
              />
            </Pressable>
            <Pressable onPress={() => {}} style={styles.memberDelete}>
              <FontAwesome
                name="trash"
                size={24}
                style={[styles.memberDelete, { color: '#EA4335' }]}
              />
            </Pressable>
          </View>
          <View name="member" style={styles.member}>
            <Text style={styles.memberName}>권명순</Text>
            <Text style={styles.memberAge}>10</Text>
            <Pressable onPress={() => {}} style={styles.memberUpdate}>
              <FontAwesome
                name="edit"
                size={24}
                style={[styles.memberUpdate, { color: '#FBBC05' }]}
              />
            </Pressable>
            <Pressable onPress={() => {}} style={styles.memberDelete}>
              <FontAwesome
                name="trash"
                size={24}
                style={[styles.memberDelete, { color: '#EA4335' }]}
              />
            </Pressable>
          </View>
          <View name="member" style={styles.member}>
            <Text style={styles.memberName}>홍길동</Text>
            <Text style={styles.memberAge}>39</Text>
            <Pressable onPress={() => {}} style={styles.memberUpdate}>
              <FontAwesome
                name="edit"
                size={24}
                style={[styles.memberUpdate, { color: '#FBBC05' }]}
              />
            </Pressable>
            <Pressable onPress={() => {}} style={styles.memberDelete}>
              <FontAwesome
                name="trash"
                size={24}
                style={[styles.memberDelete, { color: '#EA4335' }]}
              />
            </Pressable>
          </View>
          <View name="member" style={styles.member}>
            <Text style={styles.memberName}>김삼순</Text>
            <Text style={styles.memberAge}>33</Text>
            <Pressable onPress={() => {}} style={styles.memberUpdate}>
              <FontAwesome
                name="edit"
                size={24}
                style={[styles.memberUpdate, { color: '#FBBC05' }]}
              />
            </Pressable>
            <Pressable onPress={() => {}} style={styles.memberDelete}>
              <FontAwesome
                name="trash"
                size={24}
                style={[styles.memberDelete, { color: '#EA4335' }]}
              />
            </Pressable>
          </View>
          <View name="member" style={styles.member}>
            <Text style={styles.memberName}>홍명보</Text>
            <Text style={styles.memberAge}>44</Text>
            <Pressable onPress={() => {}} style={styles.memberUpdate}>
              <FontAwesome
                name="edit"
                size={24}
                style={[styles.memberUpdate, { color: '#FBBC05' }]}
              />
            </Pressable>
            <Pressable onPress={() => {}} style={styles.memberDelete}>
              <FontAwesome
                name="trash"
                size={24}
                style={[styles.memberDelete, { color: '#EA4335' }]}
              />
            </Pressable>
          </View>
          <View name="member" style={styles.member}>
            <Text style={styles.memberName}>박지삼</Text>
            <Text style={styles.memberAge}>22</Text>
            <Pressable onPress={() => {}} style={styles.memberUpdate}>
              <FontAwesome
                name="edit"
                size={24}
                style={[styles.memberUpdate, { color: '#FBBC05' }]}
              />
            </Pressable>
            <Pressable onPress={() => {}} style={styles.memberDelete}>
              <FontAwesome
                name="trash"
                size={24}
                style={[styles.memberDelete, { color: '#EA4335' }]}
              />
            </Pressable>
          </View>
          <View name="member" style={styles.member}>
            <Text style={styles.memberName}>권명순</Text>
            <Text style={styles.memberAge}>10</Text>
            <Pressable onPress={() => {}} style={styles.memberUpdate}>
              <FontAwesome
                name="edit"
                size={24}
                style={[styles.memberUpdate, { color: '#FBBC05' }]}
              />
            </Pressable>
            <Pressable onPress={() => {}} style={styles.memberDelete}>
              <FontAwesome
                name="trash"
                size={24}
                style={[styles.memberDelete, { color: '#EA4335' }]}
              />
            </Pressable>
          </View>
          <View name="member" style={styles.member}>
            <Text style={styles.memberName}>홍길동</Text>
            <Text style={styles.memberAge}>39</Text>
            <Pressable onPress={() => {}} style={styles.memberUpdate}>
              <FontAwesome
                name="edit"
                size={24}
                style={[styles.memberUpdate, { color: '#FBBC05' }]}
              />
            </Pressable>
            <Pressable onPress={() => {}} style={styles.memberDelete}>
              <FontAwesome
                name="trash"
                size={24}
                style={[styles.memberDelete, { color: '#EA4335' }]}
              />
            </Pressable>
          </View>
          <View name="member" style={styles.member}>
            <Text style={styles.memberName}>김삼순</Text>
            <Text style={styles.memberAge}>33</Text>
            <Pressable onPress={() => {}} style={styles.memberUpdate}>
              <FontAwesome
                name="edit"
                size={24}
                style={[styles.memberUpdate, { color: '#FBBC05' }]}
              />
            </Pressable>
            <Pressable onPress={() => {}} style={styles.memberDelete}>
              <FontAwesome
                name="trash"
                size={24}
                style={[styles.memberDelete, { color: '#EA4335' }]}
              />
            </Pressable>
          </View>
          <View name="member" style={styles.member}>
            <Text style={styles.memberName}>홍명보</Text>
            <Text style={styles.memberAge}>44</Text>
            <Pressable onPress={() => {}} style={styles.memberUpdate}>
              <FontAwesome
                name="edit"
                size={24}
                style={[styles.memberUpdate, { color: '#FBBC05' }]}
              />
            </Pressable>
            <Pressable onPress={() => {}} style={styles.memberDelete}>
              <FontAwesome
                name="trash"
                size={24}
                style={[styles.memberDelete, { color: '#EA4335' }]}
              />
            </Pressable>
          </View>
          <View name="member" style={styles.member}>
            <Text style={styles.memberName}>박지삼</Text>
            <Text style={styles.memberAge}>22</Text>
            <Pressable onPress={() => {}} style={styles.memberUpdate}>
              <FontAwesome
                name="edit"
                size={24}
                style={[styles.memberUpdate, { color: '#FBBC05' }]}
              />
            </Pressable>
            <Pressable onPress={() => {}} style={styles.memberDelete}>
              <FontAwesome
                name="trash"
                size={24}
                style={[styles.memberDelete, { color: '#EA4335' }]}
              />
            </Pressable>
          </View>
          <View name="member" style={styles.member}>
            <Text style={styles.memberName}>권명순</Text>
            <Text style={styles.memberAge}>10</Text>
            <Pressable onPress={() => {}} style={styles.memberUpdate}>
              <FontAwesome
                name="edit"
                size={24}
                style={[styles.memberUpdate, { color: '#FBBC05' }]}
              />
            </Pressable>
            <Pressable onPress={() => {}} style={styles.memberDelete}>
              <FontAwesome
                name="trash"
                size={24}
                style={[styles.memberDelete, { color: '#EA4335' }]}
              />
            </Pressable>
          </View>
          <View name="member" style={styles.member}>
            <Text style={styles.memberName}>홍길동</Text>
            <Text style={styles.memberAge}>39</Text>
            <Pressable onPress={() => {}} style={styles.memberUpdate}>
              <FontAwesome
                name="edit"
                size={24}
                style={[styles.memberUpdate, { color: '#FBBC05' }]}
              />
            </Pressable>
            <Pressable onPress={() => {}} style={styles.memberDelete}>
              <FontAwesome
                name="trash"
                size={24}
                style={[styles.memberDelete, { color: '#EA4335' }]}
              />
            </Pressable>
          </View>
          <View name="member" style={styles.member}>
            <Text style={styles.memberName}>김삼순</Text>
            <Text style={styles.memberAge}>33</Text>
            <Pressable onPress={() => {}} style={styles.memberUpdate}>
              <FontAwesome
                name="edit"
                size={24}
                style={[styles.memberUpdate, { color: '#FBBC05' }]}
              />
            </Pressable>
            <Pressable onPress={() => {}} style={styles.memberDelete}>
              <FontAwesome
                name="trash"
                size={24}
                style={[styles.memberDelete, { color: '#EA4335' }]}
              />
            </Pressable>
          </View>
          <View name="member" style={styles.member}>
            <Text style={styles.memberName}>홍명보</Text>
            <Text style={styles.memberAge}>44</Text>
            <Pressable onPress={() => {}} style={styles.memberUpdate}>
              <FontAwesome
                name="edit"
                size={24}
                style={[styles.memberUpdate, { color: '#FBBC05' }]}
              />
            </Pressable>
            <Pressable onPress={() => {}} style={styles.memberDelete}>
              <FontAwesome
                name="trash"
                size={24}
                style={[styles.memberDelete, { color: '#EA4335' }]}
              />
            </Pressable>
          </View>
          <View name="member" style={styles.member}>
            <Text style={styles.memberName}>박지삼</Text>
            <Text style={styles.memberAge}>22</Text>
            <Pressable onPress={() => {}} style={styles.memberUpdate}>
              <FontAwesome
                name="edit"
                size={24}
                style={[styles.memberUpdate, { color: '#FBBC05' }]}
              />
            </Pressable>
            <Pressable onPress={() => {}} style={styles.memberDelete}>
              <FontAwesome
                name="trash"
                size={24}
                style={[styles.memberDelete, { color: '#EA4335' }]}
              />
            </Pressable>
          </View>
          <View name="member" style={styles.member}>
            <Text style={styles.memberName}>권명순</Text>
            <Text style={styles.memberAge}>10</Text>
            <Pressable onPress={() => {}} style={styles.memberUpdate}>
              <FontAwesome
                name="edit"
                size={24}
                style={[styles.memberUpdate, { color: '#FBBC05' }]}
              />
            </Pressable>
            <Pressable onPress={() => {}} style={styles.memberDelete}>
              <FontAwesome
                name="trash"
                size={24}
                style={[styles.memberDelete, { color: '#EA4335' }]}
              />
            </Pressable>
          </View>
          <View name="member" style={styles.member}>
            <Text style={styles.memberName}>홍길동</Text>
            <Text style={styles.memberAge}>39</Text>
            <Pressable onPress={() => {}} style={styles.memberUpdate}>
              <FontAwesome
                name="edit"
                size={24}
                style={[styles.memberUpdate, { color: '#FBBC05' }]}
              />
            </Pressable>
            <Pressable onPress={() => {}} style={styles.memberDelete}>
              <FontAwesome
                name="trash"
                size={24}
                style={[styles.memberDelete, { color: '#EA4335' }]}
              />
            </Pressable>
          </View>
          <View name="member" style={styles.member}>
            <Text style={styles.memberName}>김삼순</Text>
            <Text style={styles.memberAge}>33</Text>
            <Pressable onPress={() => {}} style={styles.memberUpdate}>
              <FontAwesome
                name="edit"
                size={24}
                style={[styles.memberUpdate, { color: '#FBBC05' }]}
              />
            </Pressable>
            <Pressable onPress={() => {}} style={styles.memberDelete}>
              <FontAwesome
                name="trash"
                size={24}
                style={[styles.memberDelete, { color: '#EA4335' }]}
              />
            </Pressable>
          </View>
          <View name="member" style={styles.member}>
            <Text style={styles.memberName}>홍명보</Text>
            <Text style={styles.memberAge}>44</Text>
            <Pressable onPress={() => {}} style={styles.memberUpdate}>
              <FontAwesome
                name="edit"
                size={24}
                style={[styles.memberUpdate, { color: '#FBBC05' }]}
              />
            </Pressable>
            <Pressable onPress={() => {}} style={styles.memberDelete}>
              <FontAwesome
                name="trash"
                size={24}
                style={[styles.memberDelete, { color: '#EA4335' }]}
              />
            </Pressable>
          </View>
          <View name="member" style={styles.member}>
            <Text style={styles.memberName}>박지삼</Text>
            <Text style={styles.memberAge}>22</Text>
            <Pressable onPress={() => {}} style={styles.memberUpdate}>
              <FontAwesome
                name="edit"
                size={24}
                style={[styles.memberUpdate, { color: '#FBBC05' }]}
              />
            </Pressable>
            <Pressable onPress={() => {}} style={styles.memberDelete}>
              <FontAwesome
                name="trash"
                size={24}
                style={[styles.memberDelete, { color: '#EA4335' }]}
              />
            </Pressable>
          </View>
          <View name="member" style={styles.member}>
            <Text style={styles.memberName}>권명순</Text>
            <Text style={styles.memberAge}>10</Text>
            <Pressable onPress={() => {}} style={styles.memberUpdate}>
              <FontAwesome
                name="edit"
                size={24}
                style={[styles.memberUpdate, { color: '#FBBC05' }]}
              />
            </Pressable>
            <Pressable onPress={() => {}} style={styles.memberDelete}>
              <FontAwesome
                name="trash"
                size={24}
                style={[styles.memberDelete, { color: '#EA4335' }]}
              />
            </Pressable>
          </View>
          <View name="member" style={styles.member}>
            <Text style={styles.memberName}>홍길동</Text>
            <Text style={styles.memberAge}>39</Text>
            <Pressable onPress={() => {}} style={styles.memberUpdate}>
              <FontAwesome
                name="edit"
                size={24}
                style={[styles.memberUpdate, { color: '#FBBC05' }]}
              />
            </Pressable>
            <Pressable onPress={() => {}} style={styles.memberDelete}>
              <FontAwesome
                name="trash"
                size={24}
                style={[styles.memberDelete, { color: '#EA4335' }]}
              />
            </Pressable>
          </View>
          <View name="member" style={styles.member}>
            <Text style={styles.memberName}>김삼순</Text>
            <Text style={styles.memberAge}>33</Text>
            <Pressable onPress={() => {}} style={styles.memberUpdate}>
              <FontAwesome
                name="edit"
                size={24}
                style={[styles.memberUpdate, { color: '#FBBC05' }]}
              />
            </Pressable>
            <Pressable onPress={() => {}} style={styles.memberDelete}>
              <FontAwesome
                name="trash"
                size={24}
                style={[styles.memberDelete, { color: '#EA4335' }]}
              />
            </Pressable>
          </View>
          <View name="member" style={styles.member}>
            <Text style={styles.memberName}>홍명보</Text>
            <Text style={styles.memberAge}>44</Text>
            <Pressable onPress={() => {}} style={styles.memberUpdate}>
              <FontAwesome
                name="edit"
                size={24}
                style={[styles.memberUpdate, { color: '#FBBC05' }]}
              />
            </Pressable>
            <Pressable onPress={() => {}} style={styles.memberDelete}>
              <FontAwesome
                name="trash"
                size={24}
                style={[styles.memberDelete, { color: '#EA4335' }]}
              />
            </Pressable>
          </View>
          <View name="member" style={styles.member}>
            <Text style={styles.memberName}>박지삼</Text>
            <Text style={styles.memberAge}>22</Text>
            <Pressable onPress={() => {}} style={styles.memberUpdate}>
              <FontAwesome
                name="edit"
                size={24}
                style={[styles.memberUpdate, { color: '#FBBC05' }]}
              />
            </Pressable>
            <Pressable onPress={() => {}} style={styles.memberDelete}>
              <FontAwesome
                name="trash"
                size={24}
                style={[styles.memberDelete, { color: '#EA4335' }]}
              />
            </Pressable>
          </View>
          <View name="member" style={styles.member}>
            <Text style={styles.memberName}>권명순</Text>
            <Text style={styles.memberAge}>10</Text>
            <Pressable onPress={() => {}} style={styles.memberUpdate}>
              <FontAwesome
                name="edit"
                size={24}
                style={[styles.memberUpdate, { color: '#FBBC05' }]}
              />
            </Pressable>
            <Pressable onPress={() => {}} style={styles.memberDelete}>
              <FontAwesome
                name="trash"
                size={24}
                style={[styles.memberDelete, { color: '#EA4335' }]}
              />
            </Pressable>
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
          <View name="member" style={styles.member}>
            <Text style={[styles.flex1, styles.textAlignCenter]}>이름</Text>
            <Text style={[styles.flex1, styles.textAlignCenter]}>나이</Text>
            <Text style={[styles.flex1, styles.textAlignCenter]}>생성</Text>
          </View>
        </View>
        <ScrollView name="tbody" style={styles.tbody}>
          <View name="member" style={styles.member}>
            <TextInput
              style={[styles.memberName, styles.borderStyle]}
              placeholder="Name"
            />
            <TextInput
              style={[styles.memberAge, styles.borderStyle]}
              placeholder="Age"
            />
            <Pressable onPress={() => {}} style={styles.memberUpdate}>
              <FontAwesome
                name="pencil"
                size={24}
                style={[styles.memberUpdate, { color: '#4285F4', padding: 8 }]}
              />
            </Pressable>
          </View>
        </ScrollView>
      </>
    );
  }

  export function ModalUpdate(props) {
    console.log(props.route.name);
    return (
      <>
        <View name="thead" style={styles.thead}>
          <View name="member" style={styles.member}>
            <Text style={[styles.flex1, styles.textAlignCenter]}>이름</Text>
            <Text style={[styles.flex1, styles.textAlignCenter]}>나이</Text>
            <Text style={[styles.flex1, styles.textAlignCenter]}>수정</Text>
          </View>
        </View>
        <ScrollView name="tbody" style={styles.tbody}>
          <View name="member" style={styles.member}>
            <TextInput
              style={[styles.memberName, styles.borderStyle]}
              placeholder="Name"
            />
            <TextInput
              style={[styles.memberAge, styles.borderStyle]}
              placeholder="Age"
            />
            <Pressable onPress={() => {}} style={[styles.memberUpdate, { alignItems: 'center', justifyContent: 'center' }]}>
              <FontAwesome
                name="edit"
                size={24}
                style={[styles.memberUpdate, { color: '#FBBC05', padding: 8 }]}
              />
            </Pressable>
          </View>
        </ScrollView>
      </>
    );
  }

  export default Tab5Screen;
  ```

  App.js
  ```diff
  - import Tab5Screen from './screens/Tab5Screen'
  + import Tab5Screen, { ModalCreate, ModalUpdate } from './screens/Tab5Screen'
  ```
  ```js
  <BottomTab.Screen
    name="Tab5"
    component={Tab5Screen}
    options={({ navigation }) => ({
      headerTitleAlign: 'center',
      headerRight: () => (
        <Pressable onPress={() => navigation.navigate('ModalCreate')}>
          <FontAwesome
            name="pencil"
            size={24}
            style={{ marginRight: 24, color: '#4285F4' }}
          />
        </Pressable>
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
          <Pressable onPress={() => navigation.goBack()}>
            <FontAwesome
              name="close"
              size={25}
            />
          </Pressable>
        )
      })}
    />
    <Stack.Screen name="ModalUpdate" component={ModalUpdate}
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
  </Stack.Group>
  ```
</details>

## MobX
* https://github.com/ovdncids/react-curriculum#members-store-%EB%A7%8C%EB%93%A4%EA%B8%B0

## onChangeText
```js
<TextInput
  onChangeText={text => console.log(text)}
/>
```

## RefreshControl
* https://reactnative.dev/docs/refreshcontrol
* `ScrollView`에서 `스크롤 업` 하면 새로고침(스피너 로딩) 한다.
```js
import { RefreshControl } from 'react-native';
```
```js
<ScrollView
  refreshControl={
    <RefreshControl
      refreshing={true}
      onRefresh={() => {console.log('스크롤 업 이벤트 발생')}}
    />
  }
>
</ScrollView>
```

## TextInput 숫자키만 받기
```js
<TextInput
  keyboardType="number-pad"
></TextInput>
```
