import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { Provider } from 'mobx-react';
import { inject, observer } from 'mobx-react';
import { commonStore } from './stores/CommonStore.js';

let App = function(props) {
  const { commonStore } = props;
  console.log('App: commonStore.common', commonStore.common);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title={String(commonStore.common)}
        onPress={() => commonStore.commonSet(!commonStore.common)}
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

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

export default observer(MobXProvider);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
