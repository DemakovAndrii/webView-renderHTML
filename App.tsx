import React from 'react';
import {StyleSheet, View} from 'react-native';
import {WebView} from 'react-native-webview';

import {useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';

const source = {
  html: `
<h1 style='text-align:center;'>
  html text
</h1>`,
};

const LINK = 'https://www.google.com/';

const App = () => {
  const {width} = useWindowDimensions();
  return (
    <View>
      <RenderHtml contentWidth={width} source={source} />
      <View style={styles.link}>
        <WebView source={{uri: LINK}} onLoad={() => console.log('loaded')} />
      </View>
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
