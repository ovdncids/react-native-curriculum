# SQLite
## Expo (49.0.13)
* https://docs.expo.dev/versions/latest/sdk/sqlite
* https://docs.expo.dev/versions/latest/sdk/filesystem
* https://docs.expo.dev/versions/latest/sdk/asset
```sh
npx expo install expo-sqlite
```
```js
import * as SQLite from 'expo-sqlite';

// users.db 파일이 없으면 자동으로 `${FileSystem.documentDirectory}SQLite/users.db` 파일 생성함
const db = SQLite.openDatabase('users.db');
const results = await db.execAsync([{ sql: 'select 123;', args: [] }], false);
console.log(results[0]);
```

### 기존의 SQLite.db 파일 사용
* https://docs.expo.dev/versions/latest/sdk/sqlite/#importing-an-existing-database

```sh
npx expo install expo-file-system expo-asset
```

metro.config.js
```js
const { getDefaultConfig } = require('expo/metro-config');
const defaultConfig = getDefaultConfig(__dirname);

// Asset.fromModule 사용 가능
defaultConfig.resolver.assetExts.push('db');

module.exports = defaultConfig;
```

screens/Screen.js
```js
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import * as SQLite from 'expo-sqlite';

const deleteDbFile = async () => {
  const dbFile = await FileSystem.getInfoAsync(`${FileSystem.documentDirectory}SQLite/users.db`);
  if (dbFile.exists) {
    await FileSystem.deleteAsync(`${FileSystem.documentDirectory}SQLite/users.db`);
  }
};
const deleteDbFolder = async () => {
  const dbFolder = await FileSystem.getInfoAsync(`${FileSystem.documentDirectory}SQLite`);
  if (dbFolder.exists) {
    // `${FileSystem.documentDirectory}SQLite` 폴더와 하위 모든 파일 삭제
    await FileSystem.deleteAsync(`${FileSystem.documentDirectory}SQLite`);
  }
};
const openDatabase = async () => {
  const dbFolder = await FileSystem.getInfoAsync(`${FileSystem.documentDirectory}SQLite`);
  const dbFile = await FileSystem.getInfoAsync(`${FileSystem.documentDirectory}SQLite/users.db`);
  if (!dbFolder.exists) {
    await FileSystem.makeDirectoryAsync(`${FileSystem.documentDirectory}SQLite`);
    console.log(`${FileSystem.documentDirectory}SQLite 폴더 생성`);
  }
  if (!dbFile.exists) {
    await FileSystem.downloadAsync(
      // 기본 구조의 users.db 파일 Expo에 미리 준비
      Asset.fromModule(require('../SQLiteExpo/users.db')).uri,
      `${FileSystem.documentDirectory}SQLite/users.db`
    )
    console.log(`${FileSystem.documentDirectory}SQLite/users.db 경로에 SQLiteExpo/users.db 파일 복사`);
    // 이미 `${FileSystem.documentDirectory}SQLite/users.db`이 있는데 덮어 씌우는 경우
    // Error code 10: disk I/O error 또는 Error code 1: no such table: users 등을 만날 수 있다.
    // Reload 하면 해결됨
  }
  return SQLite.openDatabase('users.db');
};
const queries = async () => {
  const db = await openDatabase();
  const results = await db.execAsync([{ sql: 'select * from users;', args: [] }], false);
  console.warn(results[0]);
};
```

### 디바이스의 users.db 파일 가져오기
```js
const uploadFile = async () => {
  await FileSystem.uploadAsync(
    `http://192.168.0.2:3100/api/v1/files`,
    `${FileSystem.documentDirectory}SQLite/users.db`, {
      fieldName: 'file',
      fileName: 'users.db',
      httpMethod: 'POST',
      mimeType: 'multipart/form-data',
      uploadType: FileSystem.FileSystemUploadType.MULTIPART
    }
  );
};
```
* [Express File Upload](https://github.com/ovdncids/react-curriculum/blob/master/FileUpload.md#express)
* 결국 `FileSystem.uploadAsync`는 [File Upload 통신](https://github.com/ovdncids/react-native-curriculum/blob/master/FileUpload.md)과 같다.

## React Native CLI (RN 0.68) - iOS
* https://github.com/andpor/react-native-sqlite-storage
```sh
npm install --save react-native-sqlite-storage
```
```sh
cd ios
pod install
```

### iOS & Android
```js
import SQLite from 'react-native-sqlite-storage';
SQLite.enablePromise(true);

const init = async () => {
  // 해당 기기에 안의 users.db 파일을 읽는다. (없으면 users.db 파일을 생성한다.)
  const db = await SQLite.openDatabase({
    name: 'users.db'
  });
  // transaction이 필요한 경우
  await db.transaction(async (connection) => {
    const sql = 'select 123;';
    const [connection2, results] = await connection.executeSql(sql, []);
    console.log(results.rows.item(0));
  }
  // 일반 접속
  const sql = 'select 456;';
  const [results] = await db.executeSql(sql, []);
  console.log(results.rows.item(0));
};
init();
```

# 기본 데이터(pre-populated)를 만들고 싶을 경우
* https://dev-yakuza.posstree.com/ko/react-native/react-native-sqlite-storage
* https://stackoverflow.com/questions/54647109/react-native-sqlite-can-not-find-pre-populated-database-file

## DB Browser for SQLite
* https://sqlitebrowser.org/dl
* `users.db` DB 파일 생성

* 필요한 SQL문
```sql
create table users(
  userPk integer not null,
  name text not null,
  age integer not null,
  primary key("userPk" autoincrement)
);

insert into users(name, age) values("홍길동", 39);
insert into users(name, age) values("김삼순", 33);
insert into users(name, age) values('홍명보', 44);
insert into users(name, age) values('박지삼', 22);
insert into users(name, age) values('권명순', 10);

select * from users;
```

## React Native CLI - iOS DB 파일 설정
* 생성한 `users.db` 파일을 `ios/users.db` 복사
* Xcode > Open a project or file > `ios/{프로젝트.xcworkspace}`
* ❕ `ios/{프로젝트.xcodeproj}`을 선택할 경우 알 수 없는 오류를 만날 수 있다.
* {프로젝트명} > {프로젝트명} > Add files to "{프로젝트명}"... > `ios/users.db` 선택 (Copy items if needed, Create folder references 선택)
* {프로젝트명} > {프로젝트명} > users.db (생성되면 완료)

```js
const db = await SQLite.openDatabase({
  name: 'users.db',
  createFromLocation: '~users.db'
});
const sql = 'select * from users;';
const [results] = await db.executeSql(sql, []);
console.log(results);
```
* 기기에서 `프로젝트 앱`을 지우고 `npx react-native run-ios`
* `프로젝트 앱`을 지우면 기존 DB는 모두 지워진다.
* 기기에 `users.db` 없을 경우만 한번 복사하고 다음부터는 기기의 `users.db`를 읽는다.
* 이미 기기에 `users.db`가 생성된 경우라면 `ios/www/users.db`를 읽지 않는다.
* `(Possible Unhandled Promise Rejection (id: 0): "no such table: users")` 이렇게 경고 발생 할 수 있다.

## React Native CLI - Android DB 파일 설정
* 생성한 `users.db` 파일을 `android/app/src/main/assets/users.db` 복사
* 기본 동작은 `iOS`와 동일 `npx react-native run-android`
