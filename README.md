# React Native

## MobX 설치
https://github.com/mobxjs/mobx

```sh
npm install mobx mobx-react
```

### Common Store 만들기
stores/CommonStore.js
```js
import { configure, makeAutoObservable } from 'mobx';

// configure: 가장 처음에 호출 되는 스토어에서 한번만 설정하면 된다.
configure({
  // enforceActions: 'never',
  // useProxies: "never"
});

export default class CommonStore {
  constructor() {
    makeAutoObservable(this);
  }

  common = false;

  commonSet(common) {
    this.common = common;
  }
}

export const commonStore = new CommonStore();
```

### App.js에 CommonStore 주입
App.js
```js
import { Provider } from 'mobx-react';
import { inject, observer } from 'mobx-react';
import { commonStore } from './stores/CommonStore.js';
```
```diff
- export default function App() {
```
```js
let App = function(props) {
  const { commonStore } = props;
  console.log('App: commonStore.common', commonStore.common);
```
```js
App = inject('commonStore')(observer(App));

const MobXProvider = () => {
  console.log('Provider: commonStore.common', commonStore.common);
  return (
    <Provider
      commonStore={commonStore}
    >
      <App></App>
    </Provider>
  );
};
```

### Store 활용
App.js
```js
import { Button } from 'react-native';

<Button
  title={String(commonStore.common)}
  onPress={() => commonStore.commonSet(!commonStore.common)}
></Button>
```
