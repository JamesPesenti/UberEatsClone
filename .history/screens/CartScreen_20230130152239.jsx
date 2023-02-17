import { ScrollView, FlatList, StyleSheet, Text, View, Dimensions, Image, Pressable } from 'react-native'
import {useNavigation} from '@react-navigation/native';
import { useState, useEffect } from 'react'
import AddToCartButton from "../components/AddToCartButton"
import CartProductItem from "../components/CartProductItem"
import cart from "../assets/data/cart"
import firebase from "firebase"
import ShoppingCart from "../components/ShoppingCart"

const CartScreen = () => {

 // Firestore fetch images
 const [images, setImages] = useState([])
 const imageRef = firebase.firestore().collection("cartImages")

 useEffect(() => {
     imageRef
     .onSnapshot(
         (querySnapshot) => {
             const images = []
             querySnapshot.forEach((doc) => {
                 const { image, rating, calories, price } = doc.data()
                 images.push({
                     id: doc.id,
                     image,
                     rating,
                     calories,
                     price,
                 })
             })
             setImages(images)
         })
 }, [])



    const [cartProducts, setCartProducts] = useState()
    const [quantity, setQuantity] = useState(1);
    const navigation = useNavigation()

    const width = Dimensions.get("window").width
    const height = Dimensions.get("window").height


      const totalPrice = images.reduce(
        (summedPrice, images) => 
          summedPrice + (images?.price || 0) * images.quantity, 0)


// Back Button
 function backButton() {
  return (
    <View style={{flexDirection: "row"}}>
      <Pressable
        style={{ width: 50, paddingLeft: 10, justifyContent: "center"}}
        onPress={() => navigation.goBack()}
      >
        <Image 
          style={styles.image}
          resizeMode="contain"
          source={{ uri: "https://t4.ftcdn.net/jpg/02/93/94/41/240_F_293944111_uTDy3HJcStHMbPTgC6GDSFGWudBiQZ5A.jpg"}}
        />
      </Pressable>
  </View>
  )
 }


  return (
    <ScrollView>
      <View>
        <View style={{marginVertical: 20}}>
          {backButton()}
        </View>
      <Text style={styles.titleText}>Shopping Cart</Text>
        <View style={{marginTop: 50}}>
          {/* Dollar amount of order */}
            <Text 
                style={{fontSize: 14, justifyContent: 'center', alignItems: 'center', textAlign: 'center', letterSpacing: .6}}>
                    Items in cart (<Text style={{color: '#ED91AD', letterSpacing: 2}}>{images.length}</Text>) :{" "} 
                    <Text style={{color: '#ED91AD', fontSize:16}}>${totalPrice.toFixed(2)}</Text>
            </Text>
        </View>
        <ScrollView style={{marginTop: 20}}>
          <FlatList
              horizontal
              data={images}
              snapToInterval={width + -80}
              decelerationRate={"fast"}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, id}) => (
                <CartProductItem
                  item={item}
                  key={id}
                />
              )}
          />
        </ScrollView>
      <View style={{marginBottom: 40, justifyContent: "center", alignItems: "center", textAlign: "center",}}>
        <AddToCartButton onPress={() => {}} />
      </View>
      </View>
    </ScrollView>
  )
}

export default CartScreen


const styles =  StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: "row", 
    justifyContent: "center", 
    alignItems: "center", 
    marginTop: 50,
    padding: 20
  },
  image: {
    marginRight: 0, 
    marginTop: 30,
    borderRadius: 100, 
    width: 50, 
    height: 50,
    resizeMode: "cover"
  },
  titleText: {
    textAlign: "center", 
    fontSize: 20,
    color: "#ED91AD",
  },
  })









 