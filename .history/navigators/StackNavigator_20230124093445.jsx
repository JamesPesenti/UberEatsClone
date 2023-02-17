import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RewardsScreen from './screens/RewardsScreen';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from "../Screens/MenuScreen"
import SignInScreen from "../Screens/SignInScreen"
import TestHomeScreen from "../Screens/TestHomeScreen"
import CartScreen from "../Screens/CartScreen"

const Stack = createNativeStackNavigator()

const ScreenNavigator = () => {
   return (
     <>
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Rewards" component={RewardsScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        </Stack.Navigator>
     </>
  )
}

export default ScreenNavigator
