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
import { Restaurant } from "../src/models/index"

const RestaurantDetailsScreen = () => {
  const [restaurant, setRestaurant] = useState(null)
  

  useEffect(() => {
    DataStore.query(Restaurant, id).then(setRestaurant)
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
            data={restaurant.dishes}
            renderItem={({ item }) => <DishListItem dish={item} />}
            keyExtractor={(item) => item.name}
        />
    </ScrollView>
    </>
  );
};

export default RestaurantDetailsScreen;