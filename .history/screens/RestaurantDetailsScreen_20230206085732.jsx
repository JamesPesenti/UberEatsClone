import { useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  ActivityIndicator,
  Pressable,
  Text,
} from "react-native";

import DishListItem from "../components/DishLIstItem";


const RestaurantDetailsScreen = () => {
  const [dishes, setDishes] = useState([]);

  const route = useRoute();
  const navigation = useNavigation();

  const id = route.params?.id;

    const backButton = () => {
        return (
            <View style={{flexDirection: "row"}}>
                <Pressable
                    onPress={() => navigation.goBack()}
                >
                <Image 
                    style={{width: 20, height: 20}}
                    resizeMode="contain"
                    source={{ uri: "https://t4.ftcdn.net/jpg/02/93/94/41/240_F_293944111_uTDy3HJcStHMbPTgC6GDSFGWudBiQZ5A.jpg"}}
                />
                </Pressable>
            </View>
        )
    }


  return (
    <>
    <View>
        {backButton()}
        <FlatList
            data={dishes}
            renderItem={({ item }) => <DishListItem dish={item} />}
            keyExtractor={(item) => item.name}
        />
    </View>
    </>
  );
};

export default RestaurantDetailsScreen;