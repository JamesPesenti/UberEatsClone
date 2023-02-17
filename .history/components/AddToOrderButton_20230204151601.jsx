import { Text, View, Pressable, Image, StyleSheet } from 'react-native'


const AddToOrderButton = ({ onPress }) => {
  return (
    <>
        <View style={{marginTop: -20}}>
              {/* <Image 
                onPress={onPress} 
                style={[styles.image, styles.orderButton]} 
                source={{ uri: "https://t3.ftcdn.net/jpg/01/30/92/42/240_F_130924267_xlR2iR5IABN7f5qOdqr9sH4MzncRMJh9.jpg"}} 
              /> */}
              <Text 
                style={styles.orderButton}
                onPress={onPress}>
                Place Order
              </Text>
        </View>
    </>
  )
}

export default AddToOrderButton


const styles = StyleSheet.create({
  orderButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 5,
    borderColor: "pink",
    backgroundColor: "pink",
    padding: 40,
    width: 150,
    height: 100,
    elevation: 3.3,
    marginTop: 50,
    marginBottom: 80,
  
  },
  image: {
    width: 120, 
    height: 50,
    borderRadius: 10,
  },
  
})
