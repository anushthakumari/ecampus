import {AppRegistry} from 'react-native';

import MainApp from './MainApp';
import {name as appName} from './app.json';

import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => MainApp);
