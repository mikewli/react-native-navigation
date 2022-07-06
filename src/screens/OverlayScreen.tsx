import React from 'react';
import Navigation from '../services/Navigation';
import Screens from './Screens';
import {Button, View} from 'react-native';

export default class OverlayScreen extends React.Component {
  render() {
    return (
      <View>
        <Button title="Show banner overlay" onPress={() => this.showBanner()} />
        <Button title="Log layout message" onPress={() => this.logLayout()} />
      </View>
    );
  }

  showBanner = () =>
    Navigation.showOverlay(Screens.OverlayBanner, {
      layout: {componentBackgroundColor: 'transparent'},
      overlay: {
        interceptTouchOutside: false,
      },
    });

  logLayout = () => console.log('layout button tapped');
}
