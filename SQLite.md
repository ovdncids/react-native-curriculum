# SQLite
* https://github.com/andpor/react-native-sqlite-storage
```sh
npm install --save react-native-sqlite-storage
```

# React Native CLI - iOS
```sh
cd ios
pod install
```

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
  // 1회성 접속
  const sql = 'select 456;';
  const [results] = await db.executeSql(sql, []);
  console.log(results.rows.item(0));
};
init();
```
