import { Pressable, Animated, ImageBackground, Image, ScrollView, FlatList, StyleSheet, Text, View, Dimensions } from 'react-native'
import { useRef, useEffect, useState } from "react"
import {useNavigation, useRoute} from '@react-navigation/native';

import products from "../assets/data/products"

import ProductItem from "../components/ProductItem"
import AddToCartButton from "../components/AddToCartButton"
import MenuFadeInView from "../components/MenuFadeInView"
// import firebase from "firebase"
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const MenuScreen = () => {

   // Firestore fetch images
   const [images, setImages] = useState([])
   const imageRef = firebase.firestore().collection("menuImages")
 
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


  //  Firestore cartItems price for totalPrice
 const [cartItems, setCartItems] = useState([])
 const cartItemRef = firebase.firestore().collection("cartImages")

     const totalPrice = () => {
      return cartItems.price * quantity
    }
   
         
    
    // const totalPrice = cartItems.reduce(
    //   (summedPrice, cartItems) => 
    //     summedPrice + (cartItems?.cartItems?.price || 0) * cartItems.quantity, 0)

 useEffect(() => {
     cartItemRef
     .onSnapshot(
         (querySnapshot) => {
             const cartItems = []
             querySnapshot.forEach((doc) => {
                 const { image, rating, calories, price, quantity } = doc.data()
                 cartItems.push({
                     id: doc.id,
                     image,
                     rating,
                     calories,
                     price,
                     quantity,
                 })
             })
             setCartItems(cartItems)
         })
 }, [])

 

    const width = Dimensions.get("window").width
    const height = Dimensions.get("window").height

    const navigation = useNavigation()
    const route = useRoute();

    const [quantity, setQuantity] = useState(1)
    const [product, setProduct] = useState("")


    // Animated Donut
    const translation = useRef(new Animated.Value(0)).current

    useEffect( () => {
        Animated.timing(translation, {
          fromValue: 0,
          toValue: 135,
          duration: 1000,
          useNativeDriver: false,
        }).start()
      }, [])


  return (
    <>
     


{/* Product List */}
      <View>
        <FlatList 
            horizontal={true}
            data={images}
            snapToInterval={width + -80}
            decelerationRate={"fast"}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, id}) => <ProductItem key={id} item={item}/>}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.addToCart}>Add {totalPrice} To Cart ${totalPrice()}</Text>
        <AddToCartButton onPress={() => {}}/>
      </View>

    </>
  )
}

export default MenuScreen

const styles = StyleSheet.create({
  menuTitleContainer: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginRight: 0,
    marginTop: 50,
  },
  menuTitle: {
    fontSize: 30,
    letterSpacing: 3,
    color: "#ED91AD",
    marginBottom: 20
  },
  container: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  addToCart: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    marginTop: 20
  }
})