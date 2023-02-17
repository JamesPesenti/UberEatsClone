import { Text, View, Pressable, Image, StyleSheet } from 'react-native'


const AddToCartButton = ({ onPress }) => {
  return (
    <>
        <View style={{marginTop: -20}}>
            <Pressable
                onPress={onPress}
                style={styles.orderButton}
            >
              <Image style={styles.image} source={{ uri: "https://t3.ftcdn.net/jpg/01/30/92/42/240_F_130924267_xlR2iR5IABN7f5qOdqr9sH4MzncRMJh9.jpg"}} />
            </Pressable>
        </View>
    </>
  )
}

export default AddToCartButton


const styles = StyleSheet.create({
  orderButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 5,
    borderColor: "pink",
    backgroundColor: "pink",
    padding: 38,
    width: 0,
    height: 0,
    elevation: 3.3,
    marginTop: 50,
    marginBottom: 80,
  
  },
  image: {
    width: 70, 
    height: 50,
    borderRadius: 10,
  },
  
})
