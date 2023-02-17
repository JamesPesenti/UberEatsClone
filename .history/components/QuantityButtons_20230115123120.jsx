import { StyleSheet, Text, View, Pressable } from 'react-native'
// To navigate
// import { useNavigation } from '@react-navigation/native';
// const navigation = useNavigation()


const QuantityButtons = ({ quantity, setQuantity }) => {

  const onDecrement = () => {
    setQuantity(Math.max(0, quantity - 1))
  }

  const onIncrement = () => {
    setQuantity(Math.min(12, quantity + 1))
  }


  return (

    <>
      <View style={styles.container}>
            <Pressable
                style={styles.buttons}
                onPress={onDecrement}
            >
                <Text style={styles.buttonText}>--</Text>
            </Pressable>

            <Text style={styles.quantity}>{quantity}</Text>

            <Pressable
                style={styles.buttons}
                onPress={onIncrement}
            >
                <Text style={styles.buttonText}>+</Text>
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
      height: 60,
    },
    buttons: {
      width: 40,
      height: 40,
      backgroundColor: "white",
      borderRadius: 100,
      borderColor: "pink",
      borderWidth: .8,
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 15,
      marginVertical: 0
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