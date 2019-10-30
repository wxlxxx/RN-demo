/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import AppNavigators from './js/navigator/AppNavigators';
import App from './js/App'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
