/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);


// need to fit the redux here

// import { AppRegistry } from 'react-native';
// import { Provider } from 'react-redux';
// import App from './App';
// import { name as appName } from './app.json';
// import store from './src/redux/Store';

// const AppRedux = () => (
//     <Provider store={store}>
//         <App />
//     </Provider>
// )

// AppRegistry.registerComponent(appName, () => AppRedux);