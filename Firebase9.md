# Firebase9

## Unable to resolve "idb" from "node_modules/@firebase/app/dist/esm/index.esm2017.js"
* https://issuehint.com/issue/jakearchibald/idb/267

metro.config.js
```js
const { getDefaultConfig } = require("@expo/metro-config");
const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.assetExts.push("cjs");
module.exports = defaultConfig;
```

## AsyncStorage has been extracted from react-native core and will be removed in a future release.
* https://stackoverflow.com/questions/55311228/how-to-remove-warning-async-storage-has-been-extracted-from-react-native-core

```sh
npm install @react-native-async-storage/async-storage
```

```js
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth/react-native';
import { initializeApp } from 'firebase/app';

const firebaseInitializeApp = initializeApp({
  apiKey: '...',
  ...
});
const auth = initializeAuth(firebaseInitializeApp, {
  persistence: getReactNativePersistence(AsyncStorage)
});
```
