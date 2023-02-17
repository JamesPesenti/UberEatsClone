import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabsNavigator } from "@react-navigation/bottom-tabs"

const BottomTabs = createBottomTabsNavigator()

const BottomTabNavigator = () => {
  return (
    <View>
      <Text>BottomTabNavigator</Text>
    </View>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({})