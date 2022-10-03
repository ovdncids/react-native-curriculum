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
