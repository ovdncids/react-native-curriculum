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
      <Pressable onPress={() => {}}>
        <FontAwesome
          name="edit"
          size={24}
        />
      </Pressable>
      <Pressable onPress={() => {}}>
        <FontAwesome
          name="trash"
          size={24}
        />
      </Pressable>
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

## MobX
* https://github.com/ovdncids/react-curriculum#members-store-%EB%A7%8C%EB%93%A4%EA%B8%B0

## onChangeText
```js
<TextInput
  onChangeText={text => console.log(text)}
/>
```
