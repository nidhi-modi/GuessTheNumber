/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MainStackNavigator from './navigation/MainStackNavigator';

const App = () => {
  return <MainStackNavigator />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddb52f',
  },
});

export default App;
