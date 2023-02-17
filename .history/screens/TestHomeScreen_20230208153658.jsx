import { useState, useEffect } from "react";
import { StyleSheet, FlatList, Image, View } from "react-native";
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
    <Image 
                source={{ uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg"}}
                style={{flex: 1, justifyContent: "center", alignItems: "center", width: "auto", height: 200}}
            />
    <View style={styles.page}>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
    </>
  );
}

export default TestHomeScreen

const styles = StyleSheet.create({
  page: {
    flex: 1,
    marginTop: 40,
    padding: 10
  },
});