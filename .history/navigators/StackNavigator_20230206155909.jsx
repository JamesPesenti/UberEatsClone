import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from '../screens/HomeScreen';
// import MenuScreen from "../screens/MenuScreen"
// import CartScreen from "../screens/CartScreen"
// import RewardsScreen from '../screens/RewardsScreen';
import TestHomeScreen from "../screens/TestHomeScreen"
import DishDetailsScreen from "../screens/DishDetailsScreen";
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen';
import TestCartScreen from "../screens/TestCartScreen"
import OrderDetailsScreen from "../screens/OrderDetailsScreen"
import OrderScreen from "../screens/OrderScreen"
import BottomTabs from './BottomTabNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator()

const RootNavigator = () => {
   return (
     <>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="MenuScreen" component={MenuScreen} /> 
            <Stack.Screen name="CartScreen" component={CartScreen} />
            <Stack.Screen name="RewardsScreen" component={RewardsScreen} /> */}
            <Stack.Screen name="Home" component={HomeTabs} />
            <Stack.Screen name="Cart" component={TestCartScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantDetailsScreen} />
            <Stack.Screen name="Dish" component={DishDetailsScreen} />
        </Stack.Navigator>
     </>
  )
};


const Tab = createBottomTabNavigator()

const HomeTabs = () => {
   return (
      <>
      <StatusBar style="auto" backgroundColor="transparent" />
      <Tab.Navigator
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
            <Tab.Screen 
                name="Home"
                component={HomeStackNavigator}
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
                                width: 50,
                                height: 50,
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
             <Tab.Screen 
                name="Orders"
                component={OrderScreen}
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
             <Tab.Screen 
                name="Profile"
                component={OrderScreen}
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
        </Tab.Navigator>
    </>
   )
};


const HomeStack = createNativeStackNavigator()

const HomeStackNavigator = () => {
   return (
      <HomeStack.Navigator>
         <HomeStack.Screen name="Restaurants" component={HomeScreen} />
         <HomeStack.Screen name="Restaurant" component={HomeScreen} />
      </HomeStack.Navigator>
   )
}

export default RootNavigator







