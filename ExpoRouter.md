# Expo Router (expo-router@5.1.5)

## 설치
* https://docs.expo.dev/router/installation
```sh
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```
package.json
```diff
- "main": "index.js",
+ "main": "expo-router/entry",
```

app.json
```json
{
  "expo": {
    "plugins": [
      "expo-router"
    ]
  }
}
```

* 이제 불필요한 파일 삭제
```diff
- App.js
- index.js
```

* `assets` 모든 파일을 `assets/images`로 이동 후 `app.json`에서 모든 경로 수정
```diff
- "icon": "./assets/icon.png",
+ "icon": "./assets/images/icon.png",
```

```sh
npm start
```
