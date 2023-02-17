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

const Stack = createNativeStackNavigator()

const RootNavigator = () => {
   return (
     <>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="MenuScreen" component={MenuScreen} /> 
            <Stack.Screen name="CartScreen" component={CartScreen} />
            <Stack.Screen name="RewardsScreen" component={RewardsScreen} /> */}
            <Stack.Screen name="Home" component={TestHomeScreen} />
            <Stack.Screen name="Cart" component={TestCartScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantDetailsScreen} />
            <Stack.Screen name="DishDishDetailsScreen" component={DishDetailsScreen} />
        </Stack.Navigator>
     </>
  )
}

export default RootNavigator
