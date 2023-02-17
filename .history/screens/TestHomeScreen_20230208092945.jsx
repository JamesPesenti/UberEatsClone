import { useState, useEffect } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import RestaurantItem from "../components/RestaurantItem";
import restaurants from "../assets/data/restaurants.json"

const TestHomeScreen = () => {

  return (
    <View style={styles.page}>
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
    marginTop: -10,
  },
});