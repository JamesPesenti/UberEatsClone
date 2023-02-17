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

const RestaurantDetailsScreen = () => {
  const [restaurant, setRestaurant] = useState()
  const [dishes, setDishes] = useState([])

  useEffect(() => {
    DataStore.query(Restaurant, id).then(setRestaurant)
    DataStore.query(Dish, (dish) => dish.restaurantID("eq", id)).then(setDishes)
  }, [])

  if (!restaurant) {
    return(
        <ActivityIndicator size={"large"} color="pink" />
    )
  }

  const route = useRoute();
  const navigation = useNavigation();

  const id = route.params?.id;

  return (
    <>
    <ScrollView>
        <FlatList
            ListHeaderComponent={() => <RestaurantHeader restaurant={item}/>}
            data={dishes}
            renderItem={({ item }) => <DishListItem dish={item} />}
            keyExtractor={(item) => item.name}
        />
    </ScrollView>
    </>
  );
};

export default RestaurantDetailsScreen;