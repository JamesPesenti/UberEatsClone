import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from "../Screens/MenuScreen"
import CartScreen from "../Screens/CartScreen"
import RewardsScreen from './screens/RewardsScreen';

const Stack = createNativeStackNavigator()

const MenuScreenNavigator = () => {
   return (
     <>
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
            <Stack.Screen name="MenuScreen" component={MenuScreen} />
            {/* <Stack.Screen name="SignInScreen" component={SignInScreen} /> */}
            <Stack.Screen name="CartScreen" component={CartScreen} />
            <Stack.Screen name="RewardsScreen" component={RewardsScreen} />
        </Stack.Navigator>
     </>
  )
}

export default MenuScreenNavigator
