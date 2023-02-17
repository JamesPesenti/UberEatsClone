import { useEffect, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"
import {
  Scrollable,
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

  const backButton = () => {
    return (
        <View style={styles.iconContainer}>
            <Pressable
                onPress={() => navigation.goBack()}
            >
            <Image 
                style={{width: 50, height: 50, borderRadius: 50, marginTop: 0, marginLeft: 10}}
                resizeMode="contain"
                source={{ uri: "https://t4.ftcdn.net/jpg/02/93/94/41/240_F_293944111_uTDy3HJcStHMbPTgC6GDSFGWudBiQZ5A.jpg"}}
            />
            </Pressable>
        </View>
    )
  }
  


  return (
    <>
      <View style={{flex: 1}}>
        <FlatList
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => <RestaurantHeader restaurant={restaurant}/>}
            data={dishes}
            renderItem={({ item }) => <DishListItem dish={item} />}
            keyExtractor={(item) => item.name}
        />
        {backButton()}
        <View>
        <Pressable style={styles.button} onPress={() => navigation.navigate("Basket")}>
            <Text style={styles.buttonText}>Open Cart</Text>
        </Pressable>
        </View>
      </View>
    </>
  );
};

export default RestaurantDetailsScreen;

const styles = StyleSheet.create({
    iconContainer: {
        position: "absolute",
        top: 30,
        left: 0,
      },
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
      },
      button: {
        backgroundColor: "black",
        marginTop: "auto",
        marginBottom: 40,
        padding: 20,
        alignItems: "center",
        margin: 20,
        borderRadius: 3
      },
      buttonText: {
        color: "white",
        fontWeight: "600",
        fontSize: 18,
      },
})