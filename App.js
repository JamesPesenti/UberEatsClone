import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
// import BottomTabs from "./navigators/BottomTabNavigator"
import RootNavigator from './navigators/StackNavigator';
import AuthContextProvider from './src/context/AuthContext';
import BasketContextProvider from './src/context/BasketContext';
import OrderContextProvider from './src/context/OrderContext';


import Amplify from 'aws-amplify'
import config from "./src/aws-exports"

Amplify.configure({...config, Analytics: {disabled: true}})

import { withAuthenticator } from "aws-amplify-react-native"

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar type="light"/>
      <AuthContextProvider>
        <BasketContextProvider>
         <OrderContextProvider>
          <RootNavigator />
         </OrderContextProvider>
        </BasketContextProvider>
      </AuthContextProvider>
    </NavigationContainer>
  );
}

export default withAuthenticator(App)

