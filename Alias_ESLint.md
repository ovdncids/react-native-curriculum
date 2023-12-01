# Alias
* https://github.com/tleunen/babel-plugin-module-resolver

babel.config.js
```js
{
  presets: ['babel-preset-expo'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@': '.'
          // '@/components': './components'
        }
      }
    ]
  ]
}
```
```sh
npm start -- --reset-cache
```
* ❕ `babel.config.js` 설정은 `디바이스`에 캐시되어 수정되지 않는다. 이를 리셋시킴
* `npm install --save-dev babel-plugin-module-resolver`는 필요 없는 듯

# ESLint
* https://docs.expo.dev/guides/using-eslint
```sh
npm install -D eslint prettier eslint-config-universe
```

.eslintrc.js
```js
module.exports = {
  root: true,
  extends: ['universe/native']
}
```

.prettierrc.js
```js
module.exports = {
  semi: false,
  singleQuote: false,
  trailingComma: "none",
  bracketSpacing: false,
  arrowParens: "always"
}
```

package.json
```json
"lint": "eslint .",
"fix": "eslint . --fix"
```
