import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from "../screens/MenuScreen"
import CartScreen from "../screens/CartScreen"
import RewardsScreen from '../screens/RewardsScreen';

const Stack = createNativeStackNavigator()

const ScreenNavigator = () => {
   return (
     <>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="MenuScreen" component={MenuScreen} />
            {/* <Stack.Screen name="SignInScreen" component={SignInScreen} /> */}
            <Stack.Screen name="CartScreen" component={CartScreen} />
            <Stack.Screen name="RewardsScreen" component={RewardsScreen} />
        </Stack.Navigator>
     </>
  )
}

export default ScreenNavigator
