import { useState, useEffect } from "react";
import { StyleSheet, FlatList, Image, ScrollView, View } from "react-native";
import RestaurantItem from "../components/RestaurantItem";
// import restaurants from "../assets/data/restaurants.json"
import { DataStore } from "aws-amplify"
import { Restaurant } from "../src/models/index"


const TestHomeScreen = () => {

    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        DataStore.query(Restaurant).then(setRestaurants)
    }, [])

    // useEffect(() => async {
    //     const results = await DataStore.query(Restaurant)
    //     setRestaurants(results)
    // }, [])

  return (
    <>
    <View>
        <Image 
            source={{ uri: "data:image/png;base64,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"}}
            style={{flex: 1, resizeMode: "contain", margin: 0, width: 362, height: 300}}
        />
        <View style={styles.page}>
        <FlatList
            data={restaurants}
            renderItem={({ item }) => <RestaurantItem restaurant={item} />}
            showsVerticalScrollIndicator={false}
        />
        </View>
    </View>
    </>
  );
}

export default TestHomeScreen

const styles = StyleSheet.create({
  page: {
    marginTop: 0,
    padding: 10
  },
});