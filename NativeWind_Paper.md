# NativeWind - v4
* https://www.nativewind.dev/getting-started/expo-router
### babel.config.js 파일이 없을 경우
* https://docs.expo.dev/versions/latest/config/babel
```sh
npx expo customize
```

# NativeWind - v2
* https://www.nativewind.dev/v2/quick-starts/expo
```sh
npm install nativewind
npm install -D tailwindcss@3.3.2
```

package.json
```diff
- "tailwindcss": "^3.3.2"
+ "tailwindcss": "3.3.2"
```

tailwind.config.js
```diff
- content: [],
content: [
  "./App.{js,jsx,ts,tsx}",
  "./screens/**/*.{js,jsx,ts,tsx}",
  "./components/**/*.{js,jsx,ts,tsx}"
],
```

babel.config.js
```js
plugins: ["nativewind/babel"]
```

App.js
```js
<View className='mx-4 flex-row'></View>
```

* TS: `className` 오류
nativewind-env.d.ts
```ts
///<reference types="nativewind/types" />
```

webpack.config.js (옵션)
```js
const createExpoWebpackConfigAsync = require("@expo/webpack-config");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: ["nativewind"],
      },
    },
    argv,
  );

  config.module.rules.push({
    test: /\.css$/i,
    use: ["postcss-loader"],
  });

  return config;
};
```

## Use process(css).then(cb) 오류
* https://stackoverflow.com/questions/76688256/getting-error-use-processcss-thencb-to-work-with-async-plugins
```sh
npm install -D tailwindcss@3.3.2
```

## 가변값 오류
```jsx
<View className={`w-[${Dimensions.get('window').width}px]`}
```
* ❕ 이런식으로 넓이가 기기마다 가변 된다면 `NativeWind`에서 적용되지 않을 수 있다. 이때는 `style`을 사용한다.

# Paper
* https://reactnativepaper.com
