import { StyleSheet, Text, View, Pressable } from 'react-native'
import {AntDesign} from "@expo/vector-icons"
// To navigate
// import { useNavigation } from '@react-navigation/native';
// const navigation = useNavigation()


const QuantityButtons = ({ quantity, setQuantity, cartItems }) => {


  const onMinus = () => {
    setQuantity(Math.max(0, quantity - 1))
  }
  const onPlus = () => {
    setQuantity(Math.min(12, quantity + 1))
  }


  return (
    <>
      <View style={styles.container}>
          <Pressable>
              <AntDesign 
                name={'minuscircleo'}
                size={35}
                color="pink"
                onPress={onMinus}
              />
          </Pressable>
                <Text>{quantity}</Text>
          <Pressable>
              <AntDesign 
                name={'pluscircleo'}
                size={35}
                color="pink"
                onPress={onPlus}
              />
          </Pressable>
      </View>
    </>
  )
}

export default QuantityButtons


const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
      borderColor: "pink",
      borderWidth: 2,
      borderRadius: 5,
      padding: 10,
      marginVertical: 15,
      width: 80,
      height: 60,
    },
    buttonText: {
      color: "pink",
      fontSize: 20
    },
    quantity: {
      color: "pink",
      fontSize: 18,
      fontWeight: "bold",
    },
})