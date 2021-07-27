/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
  View,

} from 'react-native';
import { Onboarding } from './screens';


const App = () => {
  return (
    <SafeAreaView style={{
      flex: 1,
    }}>
      <Onboarding />
    </SafeAreaView>
  );
};

export default App;
