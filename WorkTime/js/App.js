import React from 'react';
import {Provider} from 'react-redux';
import AppNavigators from './navigator/AppNavigators';
import store from './store';

export default class App extends React.Component {
  render() {
    // 3.store 传给App框架
    return (
      <Provider store={store}>
        <AppNavigators />
      </Provider>
    );
  }
}
