# ESLint
* https://docs.expo.dev/guides/using-eslint
```sh
npm install eslint prettier eslint-config-universe --save-dev
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
