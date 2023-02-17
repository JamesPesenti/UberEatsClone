import { useState, useEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import {
  View,
  FlatList,
  ActivityIndicator,
  Pressable,
  Text,
} from "react-native";

import DishListItem from "";


const RestaurantDetailsPage = () => {
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

            </Pressable>
        </View>
    )
 }


  return (
    <>
    <View >
        <FlatList
            data={dishes}
            renderItem={({ item }) => <DishListItem dish={item} />}
            keyExtractor={(item) => item.name}
        />

            <Text>
                Open basket ({basketDishes.length})
            </Text>
            </Pressable>
    </View>
    </>
  );
};

export default RestaurantDetailsPage;