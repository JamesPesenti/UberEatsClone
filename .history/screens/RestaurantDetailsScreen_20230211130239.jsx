import { useEffect, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"
import {
  StyleSheet,
  ScrollView,
  View,
  FlatList,
  Image,
  ActivityIndicator,
  Pressable,
  Text,
} from "react-native";

import DishListItem from "../components/DishLIstItem";
import RestaurantHeader from "../components/RestaurantHeader";

import { DataStore } from "aws-amplify"
import { Restaurant, Dish } from "../src/models/index"
import { useBasketContext } from "../src/context/BasketContext";

const RestaurantDetailsScreen = () => {
  const [restaurant, setRestaurant] = useState(null)
  const [dishes, setDishes] = useState([])
  
  const route = useRoute();
  const navigation = useNavigation();

  const id = route.params?.id;

  const {setRestaurant: setBasketRestaurant} = useBasketContext()


  useEffect(() => {
    if(!id) {
      return;
    }
    setBasketRestaurant(null)

    DataStore.query(Restaurant, id).then(setRestaurant)
    DataStore.query(Dish, (dish) => dish.restaurantID('eq', id)).then(setDishes)
  }, [id])

  useEffect(() => {
    setBasketRestaurant(restaurant)
  }, [restaurant])

  if (!restaurant) {
    return(
        <ActivityIndicator size={"large"} color="pink" />
    )
  }


  return (
    <>
    {/* <ScrollView> */}
        <FlatList
            ListHeaderComponent={() => <RestaurantHeader restaurant={restaurant}/>}
            data={dishes}
            renderItem={({ item }) => <DishListItem dish={item} />}
            keyExtractor={(item) => item.name}
        />
        <Pressable style={styles.addToCart} onPress={() => navigation.navigate("Basket")}>
            <Text style={styles.addToCartText}>Open Cart</Text>
        </Pressable>
    {/* </ScrollView> */}
    </>
  );
};

export default RestaurantDetailsScreen;

const styles = StyleSheet.create({
    addToCart: {
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
       
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