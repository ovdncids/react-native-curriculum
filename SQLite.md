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

const db = SQLite.openDatabase('users.db');
const results = await db.execAsync([{ sql: 'select 123;', args: [] }]);
console.log(results);
```

* [기존의 SQLite.db 파일 사용](https://docs.expo.dev/versions/latest/sdk/sqlite/#importing-an-existing-database)
```js
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
```

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
