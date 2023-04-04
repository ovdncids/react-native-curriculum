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

## .env 파일 변경 후에 적용이 안 될 경우
```sh
앱을 삭제하고 에뮬레이터를 끄고 > metro 종료 > 다른 에뮬레이터 실행 > .env 파일 변경 되는지 확인
```
