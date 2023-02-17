import { Pressable, Animated, ImageBackground, Image, ScrollView, FlatList, StyleSheet, Text, View, Dimensions } from 'react-native'
import { useRef, useEffect, useState } from "react"
import {useNavigation, useRoute} from '@react-navigation/native';
import MenuFadeInView from "../components/MenuFadeInView"
import {AntDesign} from "@expo/vector-icons"


import products from "../assets/data/products"
const dish = products[0]

const TestDonutsScreen = () => {

  const [quantity, setQuantity] = useState(1)

     const totalPrice = () => {
      return products.price * quantity
    }
    // const totalPrice = cartItems.reduce(
    //   (summedPrice, cartItems) => 
    //     summedPrice + (cartItems?.cartItems?.price || 0) * cartItems.quantity, 0)


    const width = Dimensions.get("window").width
    const height = Dimensions.get("window").height

    const navigation = useNavigation()
    const route = useRoute();

    const [product, setProduct] = useState("")


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



{/* Product List */}
      <View>
        {/* <FlatList 
            horizontal={true}
            data={images}
            snapToInterval={width + -80}
            decelerationRate={"fast"}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, id}) => <ProductItem key={id} item={item}/>}
        /> */}
        <View>
          <Text>{dish.flavor}</Text>
          <Text>{dish.price}</Text>
          <Text>{dish.quantity}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.addToCart}>Add {quantity} To Cart ${totalPrice()}</Text>
      </View>
    </ScrollView>
    </ImageBackground>
    </>
  )
}

export default TestDonutsScreen

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