# NativeWind
* https://www.nativewind.dev/quick-starts/expo
```sh
npm install nativewind
npm install -D tailwindcss@3.3.2
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

# Paper
* https://reactnativepaper.com
