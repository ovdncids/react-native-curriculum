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

## Express
* [Express](https://github.com/ovdncids/react-curriculum/blob/master/FileUpload.md#express)
