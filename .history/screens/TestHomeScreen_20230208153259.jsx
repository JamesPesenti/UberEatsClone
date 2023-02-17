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
                source={{ uri: "https://t4.ftcdn.net/jpg/04/18/52/71/240_F_418527137_QKG4q6FKE6miiySlpmC0oxc4tcMCMFbc.jpg"}}
                style={{flex: 1, justifyContent: "center", alignItems: "center", width: "auto", height: 200}}
            />
        </View>
      {/* <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
        showsVerticalScrollIndicator={false}
      /> */}
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