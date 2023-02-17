import { Pressable, Animated, ImageBackground, Image, ScrollView, FlatList, StyleSheet, Text, View, Dimensions, ActivityIndicator } from 'react-native'
import { useRef, useEffect, useState } from "react"
import {useNavigation, useRoute} from '@react-navigation/native';
import MenuFadeInView from "../components/MenuFadeInView"
import {AntDesign} from "@expo/vector-icons"
import { DataStore } from "aws-amplify"
import { Dish } from "../src/models/index"
import { useBasketContext } from "../src/context/BasketContext"

// import restaurants from "../assets/data/restaurants.json"
// const dish = restaurants[0].dishes[0]

const DishDetailsScreen = () => {
 
  const [quantity, setQuantity] = useState(1)
  const [dish, setDish] = useState(null)
  const width = Dimensions.get("window").width
  const height = Dimensions.get("window").height

  const navigation = useNavigation()
  const route = useRoute();
  const id = route.params.id

  const {addDishToBasket} = useBasketContext()


  useEffect(() => {
    DataStore.query(Dish, id).then(setDish)
  },[id])


  const onAddToBasket = async () => {
    await addDishToBasket(dish, quantity)
    navigation.goBack()
  }

  const backButton = () => {
    return (
        <View style={{flexDirection: "row"}}>
            <Pressable
                onPress={() => navigation.goBack()}
            >
            <Image 
                style={{width: 50, height: 50, borderRadius: 50, marginTop: 30, marginLeft: 10}}
                resizeMode="contain"
                source={{ uri: "https://t4.ftcdn.net/jpg/02/93/94/41/240_F_293944111_uTDy3HJcStHMbPTgC6GDSFGWudBiQZ5A.jpg"}}
            />
            </Pressable>
        </View>
    )
}
    
  const onMinus = () => {
    setQuantity(Math.max(0, quantity - 1))
  }
  const onPlus = () => {
    setQuantity(Math.min(12, quantity + 1))
  }

  const totalPrice = () => {
    return (dish.price * quantity).toFixed(2)
  }

  if (!dish) {
    return <ActivityIndicator size="large" color="pink"/>
  }


return (
    <>
      {/* <ImageBackground
        style={{width: width, height: height}}
        source={{uri: "https://media0.giphy.com/media/MJkPUQgZZHZ5jYHwlF/giphy.gif"}}
      > */}
      <View>
        {backButton()}
      </View>
      <ScrollView>
          {/* Menu Fade In Title */}
        <View style={styles.menuTitleContainer}>
            {/* <MenuFadeInView> */}
                <Text style={styles.menuTitle}>{dish.name}</Text>
            {/* </MenuFadeInView> */}
        </View>



{/* Product List */}
      <View style={styles.dishContainer}>
          <Text style={styles.textStyle}>{dish.name}</Text>
          <Text style={styles.textStyle}>{dish.price}</Text>
          <Text style={styles.textStyle}>{dish.rating}</Text>
          <Text style={styles.textStyle}>{dish.quantity}</Text>
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
      </View>
      <Pressable style={styles.addToCart} onPress={onAddToBasket}>
        <Text style={styles.addToCartText}>Add {quantity} To Cart &#8226; ${totalPrice()}</Text>
      </Pressable>
      <View>
      </View>
    </ScrollView>
    {/* </ImageBackground> */}
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
  dishContainer: {
    justifyContent: 'center', 
    textAlign: 'center', 
    alignItems: 'center', 
    backgroundColor: "gray", 
    marginHorizontal: 90,
    borderRadius: 5,
  },
  textStyle: {
    color: "white"
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
    marginVertical: 30,
    width: 100,
    height: 60,
  },
  addToCart: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 0,
    backgroundColor: "white",
    color: "#ED91AD",
    fontSize: 12,
    fontWeight: "700",
    marginTop: 20,
    width: 100,
    marginHorizontal: 0
  },
  addToCartText: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 0,
    backgroundColor: "white",
    color: "#ED91AD",
    fontSize: 12,
    fontWeight: "700",
    marginTop: 20,
    width: 100,
    marginHorizontal: 0
  }
})