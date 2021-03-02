/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text} from 'react-native';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import ReduxThunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import allReducers from './src/reducer'
import {NavigationContainer} from  '@react-navigation/native'
import MainNav from './src/navigation/mainNav'

const globalStore = createStore(
  allReducers,
  {},
  composeWithDevTools(applyMiddleware(ReduxThunk)),
);

// globalStore.subscribe(() =>
//   console.log("Global State: ", globalStore.getState())
// );


const App = () => {
  return (
    <Provider store={globalStore}>
    <NavigationContainer>
      <MainNav/>
    </NavigationContainer>
  </Provider>
  )
};



export default App;
