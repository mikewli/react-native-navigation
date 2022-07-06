import React from 'react';
import {SafeAreaView, StyleSheet, View, ViewStyle} from 'react-native';
import testIDs from '../testIDs';

const {BANNER_OVERLAY} = testIDs;
export default class OverlayBanner extends React.Component {
  render() {
    return (
      <SafeAreaView
        testID="just-a-test-ID"
        pointerEvents="box-none"
        style={styles.container}>
        <View testID={BANNER_OVERLAY} style={styles.banner} />
      </SafeAreaView>
    );
  }
}

type Style = {
  container: ViewStyle;
  banner: ViewStyle;
};

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  banner: {
    backgroundColor: 'black',
    height: 100,
    justifyContent: 'center',
  },
});
