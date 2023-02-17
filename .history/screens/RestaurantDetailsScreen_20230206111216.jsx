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

const restaurant = restaurants[0]

const RestaurantDetailsScreen = () => {

  const route = useRoute();
//   const navigation = useNavigation();

  const id = route.params?.id;
 
    // const backButton = () => {
    //     return (
    //         <View style={{flexDirection: "row"}}>
    //             <Pressable
    //                 onPress={() => navigation.goBack()}
    //             >
    //             <Image 
    //                 style={{width: 50, height: 50}}
    //                 resizeMode="contain"
    //                 source={{ uri: "https://t4.ftcdn.net/jpg/02/93/94/41/240_F_293944111_uTDy3HJcStHMbPTgC6GDSFGWudBiQZ5A.jpg"}}
    //             />
    //             </Pressable>
    //         </View>
    //     )
    // }


  return (
    <>
    <ScrollView>
        {/* <View style={{marginVertical: 20}}>
          {backButton()}
        </View> */}
        <FlatList
            restaurant={restaurant}
            data={restaurant.dishes}
            renderItem={({ item }) => <DishListItem dish={item} />}
            keyExtractor={(item) => item.name}
        />
        <Ionicons 
            name="arrow-back-circle"
            size={85}
            color="white"
            style={{width: 20, height: 20}}
        />
    </ScrollView>
    </>
  );
};

export default RestaurantDetailsScreen;