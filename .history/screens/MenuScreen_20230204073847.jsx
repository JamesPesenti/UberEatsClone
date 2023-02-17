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



    //  const totalPrice = () => {
    //   return products.price * quantity
    // }
   
         
    
    const totalPrice = products.reduce(
      (summedPrice, products) => 
        summedPrice + (products?.products?.price || 0) * products.quantity, 0)

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
      <ImageBackground
        style={{width: width, height: height}}
        source={{uri: "https://media0.giphy.com/media/MJkPUQgZZHZ5jYHwlF/giphy.gif"}}
      >
      <ScrollView>
          {/* Menu Fade In Title */}
        <View style={styles.menuTitleContainer}>
            <MenuFadeInView>
                <Text style={styles.menuTitle}>Menu</Text>
            </MenuFadeInView>
        </View>

      {/*Animated Donut  */}
      <Animated.View
        style={{
          borderRadius: 100,
          borderColor: "transparent",
          borderWidth: 0,
          marginTop: 0,
          width: 120,
          height: 120,
          opacity: translation.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
          }),
          backgroundColor: 'transparent',
          transform: [
            { translateX: translation },
            {
              rotate: translation.interpolate({
                inputRange: [0, 70],
                outputRange: ["0deg", "360deg"],
              }),
            }
          ],
        }}
      >
          <Image
            resizeMode="cover"
            style={{
            opacity: 1,
            width: 100,
            height: 100,    
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: "pink", borderWidth: .5, borderRadius: 100}}
            source={{ uri: "https://t4.ftcdn.net/jpg/01/07/00/69/240_F_107006927_2kvz3YtASQFZAwYm7Qqgwhn04vr9FE98.jpg" }}
          />
    </Animated.View>


{/* Product List */}
      <View>
        <FlatList 
            horizontal={true}
            data={products}
            snapToInterval={width + -80}
            decelerationRate={"fast"}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, id}) => <ProductItem key={id} item={item}/>}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.addToCart}>Add {quantity} To Cart ${totalPrice()}</Text>
        <AddToCartButton onPress={() => {}}/>
      </View>
    </ScrollView>
    </ImageBackground>
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