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
    <View style={styles.page}>
        <View>
            <Image 
                source={{ uri: "https://t3.ftcdn.net/jpg/04/58/20/98/240_F_458209896_gFWma5cdYgQBHK3K8nSPhFOJxRkNHTHV.jpg"}}
                style={{flex: 1, width: 200, height: 200}}
            />
        </View>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default TestHomeScreen

const styles = StyleSheet.create({
  page: {
    marginTop: 40,
    padding: 10
  },
});