import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from "../screens/MenuScreen"
import CartScreen from "../screens/CartScreen"
import RewardsScreen from '../screens/RewardsScreen';

const Stack = createNativeStackNavigator()

const MenuScreenNavigator = () => {
   return (
     <>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Menu" component={MenuScreen} />
            {/* <Stack.Screen name="SignInScreen" component={SignInScreen} /> */}
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="Rewards" component={RewardsScreen} />
        </Stack.Navigator>
     </>
  )
}

export default MenuScreenNavigator
