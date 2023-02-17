import { useState, useEffect } from "react";
import { StyleSheet, FlatList, Image, ScrollView, View } from "react-native";
import RestaurantItem from "../components/RestaurantItem";
// import restaurants from "../assets/data/restaurants.json"
import { DataStore } from "aws-amplify"
import { Restaurant } from "../src/models/index"


const TestHomeScreen = () => {

    const [restaurants, setRestaurants] = useState([])

    const fetchRestaurants = async () => {
        const results = await DataStore.query(Restaurant)
        setRestaurants(results)
    }

    useEffect(() => {
        fetchRestaurants()
    }, [])

  return (
    <>
    <ScrollView>
        <Image 
            source={{ uri: "https://1000logos.net/wp-content/uploads/2023/01/Uber-Eats-Logo-2016.png"}}
            style={{flex: 1, resizeMode: "contain", margin: 0, width: 362, height: 300}}
        />
        <View style={styles.page}>
        <FlatList
            data={restaurants}
            renderItem={({ item }) => <RestaurantItem restaurant={item} />}
            showsVerticalScrollIndicator={false}
        />
        </View>
    </ScrollView>
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