/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import IndexApp from './indexApp';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => IndexApp);
