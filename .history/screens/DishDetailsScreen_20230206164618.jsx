import { Pressable, Animated, ImageBackground, Image, ScrollView, FlatList, StyleSheet, Text, View, Dimensions } from 'react-native'
import { useRef, useEffect, useState } from "react"
import {useNavigation, useRoute} from '@react-navigation/native';
import MenuFadeInView from "../components/MenuFadeInView"
import {AntDesign} from "@expo/vector-icons"


import restaurants from "../assets/data/restaurants.json"
const dish = restaurants[0].dishes[0]

const DishDetailsScreen = () => {

  const [quantity, setQuantity] = useState(1)

    //  const totalPrice = () => {
    //   return products.price * quantity
    // }

    
  const onMinus = () => {
    setQuantity(Math.max(0, quantity - 1))
  }
  const onPlus = () => {
    setQuantity(Math.min(12, quantity + 1))
  }

  const totalPrice = () => {
    return (dish.price * quantity).toFixed(2)
  }

    // const totalPrice = products.reduce(
    //   (summedPrice, products) => 
    //     summedPrice + (products?.products?.price || 0) * products.quantity, 0)


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
                <Text style={styles.menuTitle}>Dish Details</Text>
            </MenuFadeInView>
        </View>



{/* Product List */}
      <View style={{justifyContent: 'center', textAlign: 'center', alignItems: 'center'}}>
        {/* <FlatList 
            horizontal={true}
            data={images}
            snapToInterval={width + -80}
            decelerationRate={"fast"}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, id}) => <ProductItem key={id} item={item}/>}
        /> */}
          <Text>{dish.name}</Text>
          <Text>{dish.price}</Text>
          <Text>{dish.rating}</Text>
          <Text>{dish.quantity}</Text>
      <View style={styles.buttonStyles}>
              <AntDesign 
                name={'minuscircleo'}
                size={35}
                color="pink"
                onPress={onMinus}
              />
                <Text style={styles.buttonText}>{quantity}</Text>
              <AntDesign 
                name={'pluscircleo'}
                size={35}
                color="pink"
                onPress={onPlus}
              />
      </View>
      <Pressable style={{backgroundColor:'black', borderRadius: 10}} onPress={() => navigation.navigate("Basket")}>
        <Text style={styles.addToCart}>Add {quantity} To Cart &#8226; ${totalPrice()}</Text>
      </Pressable>
      </View>
      <View>
      </View>
    </ScrollView>
    </ImageBackground>
    </>
  )
}

export default DishDetailsScreen

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
  buttonStyles: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderColor: "pink",
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    marginVertical: 15,
    width: 120,
    height: 60,
  },
  addToCart: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    marginTop: 20
  }
})