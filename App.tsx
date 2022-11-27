import React from 'react';
import {StyleSheet, View} from 'react-native';
import {WebView} from 'react-native-webview';

const LINK = 'https://www.youtube.com/';

const App = () => {
  return (
    <View style={styles.link}>
      <WebView source={{uri: LINK}} onLoad={() => console.log('asdasd')} />
    </View>
  );
};

const styles = StyleSheet.create({
  link: {
    width: '100%',
    height: '100%',
  },
});

export default App;
