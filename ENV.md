# ENV
* https://github.com/luggit/react-native-config
* [더 자세한 설정](https://velog.io/@reum107/React-Native-react-native-config-%ED%99%98%EA%B2%BD%EB%B3%80%EC%88%98-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0)
```sh
npm install react-native-config
```

.env
```env
APP_API_URL=http://localhost:3100
```

## React Native CLI (RN 0.68) - iOS
```sh
cd ios
pod install
```

```js
import Config from 'react-native-config';
console.log(Config);
```

## React Native CLI (RN 0.68) - Android
android/app/build.gradle
```gradle
project.ext.envConfigFiles = [
    anothercustombuild: ".env",
]
```
```gradle
apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle"
```
