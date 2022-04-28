# File Upload

## React Native
* https://docs.expo.dev/versions/latest/sdk/document-picker

```sh
npm install expo-document-picker
```

App.js
* https://aboutreact.com/file-uploading-in-react-native
* https://nobrok.com/tag/file-upload
```js
import * as DocumentPicker from 'expo-document-picker';

function App() {
  const fileUpdate = async () => {
    const fileResult = await DocumentPicker.getDocumentAsync();
    const formData = new FormData();
    formData.append('file', {
      uri: fileResult.uri,
      type: fileResult.mimeType,
      name: fileResult.name
    });
    const response = await fetch('http://서버주소:3100/api/v1/files', {
      method: 'POST',
      body: formData,
      headers: {
        'content-type': 'multipart/form-data'
      }
    });
    const responseJson = await response.json();
    console.log({responseJson});
  };
  return (
    <View>
      <Button title="File Update" onPress={() => fileUpdate()} />
    </View>
  );
}
```

### FormData 값 넘기기
```js
formData.append('member', JSON.stringify({
  name: '홍길동',
  age: 39
}));
```
* ❕ `Object`를 넘길때는 `JSON.stringify`를 사용하여 문자형으로 넘겨야 `서버`에서 받을 수 있다.

## Simulator에서 Upload에 필요한 파일 생성
### iOS
```sh
# Simulator 이동 단축키
command + shift + h: Home
command + control + shift + h: App Switcher

# Screenshot 찍기
Simulator > Device > Trigger Screenshot > 생성될 이미지 더블 클릭 > 완료 > 사진 앱에 저장 또는 파일 앱에 저장

# Screenshot MacBook에 저장
Simulator 상단에 가운데에 Screenshot 버튼 누르기

# PDF 파일 만들기
Safari > 옵션(화상표 위 아이콘 버튼) > 마크업 또는 프린트 > 완료 > 다음 위치에 파일 저장

# 파일앱에서 파일 찾기
둘러보기 > 나의 iPhone > 생성된 파일 선택
```

### Android
```sh
# Screenshot 찍기
App Switcher(네모 아이콘 버튼) > Screenshot > 생성될 이미지 더블 클릭 > Done > Save

# Screenshot MacBook에 저장
Simulator 오른쪽 메뉴중에 Screenshot 버튼 누르기

# 파일앱에서 파일 찾기
메뉴 > Recent로 이동 > 생성된 파일 선택
```

## Express
* [Express](https://github.com/ovdncids/react-curriculum/blob/master/FileUpload.md#express)
