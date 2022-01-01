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

## Alert
* https://reactnative.dev/docs/alert#example
