import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
// import BottomTabs from "./navigators/BottomTabNavigator"
import RootNavigator from './navigators/StackNavigator';

import { Amplify } from "aws-amplify"
import config from "./src/aws-exports"

Amplify.configure(config)

export default App = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

