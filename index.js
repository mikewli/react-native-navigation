import Navigation from './src/services/Navigation';
import {registerScreens} from './src/screens';

function start() {
  registerScreens();
  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.dismissAllModals();
    setRoot();
  });
}

function setRoot() {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Overlay',
            },
          },
        ],
      },
    },
  });
}

start();
