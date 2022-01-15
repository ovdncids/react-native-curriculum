import { configure, makeAutoObservable } from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';

configure({
  enforceActions: 'never',
  useProxies: "never"
});

export default class CommonStore {
  constructor() {
    makeAutoObservable(this);
    this.commonGet();
  }

  common = false;

  commonSet(common) {
    this.common = common;
    AsyncStorage.setItem('common', JSON.stringify(this.common)).then(() => {
      console.log('AsyncStorage set: common', this.common);
    });
  }

  commonGet() {
    AsyncStorage.getItem('common').then(common => {
      this.common = JSON.parse(common || 'false');
      console.log('AsyncStorage get: common', this.common);
    });
  }
}

export const commonStore = new CommonStore();
