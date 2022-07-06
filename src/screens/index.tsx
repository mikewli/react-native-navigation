import {Navigation} from 'react-native-navigation';
import Screens from './Screens';

function registerScreens() {
  Navigation.registerComponent(
    Screens.Overlay,
    () => require('./OverlayScreen').default,
  );
  Navigation.registerComponent(
    Screens.OverlayBanner,
    () => require('./OverlayBanner').default,
  );
}

export {registerScreens};
