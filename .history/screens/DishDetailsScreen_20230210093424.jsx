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
      <ImageBackground
        style={{width: width, height: height}}
        source={{uri: "https://media0.giphy.com/media/MJkPUQgZZHZ5jYHwlF/giphy.gif"}}
      >
      <View>
        {backButton()}
      </View>
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
      <Pressable style={styles.buttonStyles} onPress={onAddToBasket}>
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
    color: "#ED91AD",
    fontSize: 12,
    fontWeight: "700",
    marginTop: 0
  }
})