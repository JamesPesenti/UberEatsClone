import { useState } from "react";
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

import restaurants from "../assets/data/restaurants.json"
import DishListItem from "../components/DishLIstItem";
import RestaurantHeader from "../components/RestaurantHeader";

const restaurant = restaurants[0]

const RestaurantDetailsScreen = () => {

  const route = useRoute();
  const navigation = useNavigation();

  const id = route.params?.id;


  return (
    <>
    <ScrollView>
    <VIew style={{marginTop: 20}}>

    </VIew>
        <FlatList
            ListHeaderComponent={() => <RestaurantHeader restaurant={restaurant}/>}
            data={restaurant.dishes}
            renderItem={({ item }) => <DishListItem dish={item} />}
            keyExtractor={(item) => item.name}
        />
    </ScrollView>
    </>
  );
};

export default RestaurantDetailsScreen;