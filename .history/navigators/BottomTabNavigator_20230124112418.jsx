import { StyleSheet, Text, View, Image } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../screens/HomeScreen"
// import MenuScreen from "../screens/MenuScreen"
import CartScreen from "../screens/CartScreen"
import RewardsScreen from "../screens/RewardsScreen"

import { MenuScreenNavigator } from "./StackNavigator"


const BottomTab = createBottomTabNavigator()

const BottomTabs = () => {
  return (
    <>
      <BottomTab.Navigator
            screenOptions={{
                tabBarStyle: {
                    position: "absolute",
                    backgroundColor: "white",
                    borderColor: "white",
                    borderWidth: 3,
                    borderTopWidth: 0,
                    borderRadius: 15,
                    padding: 0,
                    margin: -5,
                    elevation: .5
                },
                headerShown: false,
                headerStyle: {
                    backgroundColor: "pink", 
                    height: 160,
                    },
                headerTitleAlign: "center",
                headerTintColor: "black",
                TabActiveTintColor: "white",
                tabBarInactiveTintColor: "#de92bc",
                tabBarActiveTintColor: "transparent",
                tabBarBadgeStyle: {backgroundColor: "pink", color: "white"},
                sceneContainerStyle: {backgroundColor: "#bae6a1"},
            }}
        > 
            <BottomTab.Screen 
                name="Home"
                component={HomeScreen}
                options={{
                    headerTitle: (props) => (
                      <>
                      <Text>jsjsjsjsjs</Text>
                        <HomeTitle {...props} />
                      </>
                    ),
                    tabBarIcon: ({color, size}) => {
                        return (
                        <Image 
                            source={{uri: "https://t4.ftcdn.net/jpg/04/77/42/35/240_F_477423533_GmIRozHmmPe3jCQJztkB7CANJhj0eixP.jpg"}}
                            style={{
                                width: 55,
                                height: 55,
                                borderRadius: 100,
                                borderBottomLeftRadius: 100,
                                marginBottom: 10
                            }}
                            resizeMode="contain"
                            color={color}
                        />
                    )
                  },    
                }}
            />
            {/* <BottomTab.Screen 
                name="Menu"
                component={MenuScreenNavigator}
                options={({navigation}) => ({
                    tabBarIcon: ({color}) => {
                    return (
                        <Image 
                            source={{uri: "https://t3.ftcdn.net/jpg/01/23/09/82/240_F_123098246_0qMP1CGp6FR4bUULJ1UCRdpFZLfUrPZi.jpg"}}
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 100,
                                marginBottom: 10

                            }}
                            resizeMode="contain"
                            color={color}
                        />
                    )
                    },
                     headerShown: false,
                })}
            /> */}
            <BottomTab.Screen 
                name="Order"
                component={CartScreen}
                options={{
                    tabBarIcon: ({color}) => {
                    return (
                        <Image 
                            source={{uri: "https://t3.ftcdn.net/jpg/05/37/78/28/240_F_537782803_OCvrhHvJUfNSnmCJpYJ6mLjwzqw18I3k.jpg"}}
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 100,
                                marginLeft: 5,
                                marginBottom: 10,
                            }}
                            resizeMode="contain"
                            color={color}
                        />
                    )
                    },
                }}
            />
            <BottomTab.Screen 
                name="Rewards"
                component={RewardsScreen}
                options={{
                tabBarIcon: ({color}) => {
                    return (
                        <Image 
                            source={{uri: "https://t4.ftcdn.net/jpg/04/41/08/11/240_F_441081116_uTBbG1NccxcdGPDFvlOWQQg3lwZQWA3I.jpg"}}
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 50,
                                marginBottom: 10
                            }}
                            resizeMode="contain"
                            color={color}
                        />
                    )
                    },
                }}
            />
        </BottomTab.Navigator>
    </>
  )
}

export default BottomTabs

const styles = StyleSheet.create({})