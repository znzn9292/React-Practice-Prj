/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native'
import TabStackScreen from './src/routers/TabStackScreen';
import DrawerStackScreen from './src/routers/DrawerStackScreen';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerStackScreen />
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

})