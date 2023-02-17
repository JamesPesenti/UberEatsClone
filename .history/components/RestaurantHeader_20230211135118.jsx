import { StyleSheet, View, Text, Image, Pressable } from "react-native";

const DEFAULT_IMAGE =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg";



const RestaurantHeader = ({ restaurant }) => {
  return (
    <View style={styles.page}>
    <Image
      source={{
        uri: restaurant.image.startsWith("http")
          ? restaurant.image
          : DEFAULT_IMAGE,
      }}
      style={styles.image}
    />

    <View style={styles.container}>
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.subtitle}>
        $ {restaurant.deliveryFee.toFixed(1)} &#8226; {restaurant.minDeliveryTime}-
        {restaurant.maxDeliveryTime} minutes
      </Text>

      <Text style={styles.menuTitle}>Menu</Text>
    </View>
  </View>
  );
};

export default RestaurantHeader;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    marginTop: 0
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },
  title: {
    fontSize: 35,
    fontWeight: "600",
    marginVertical: 10,
  },
  menuTitle: {
    marginTop: 20,
    fontSize: 18,
    letterSpacing: 0.7,
  },
  subtitle: {
    fontSize: 15,
    color: "#525252",
  },
  container: {
    margin: 10,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
    margin: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },
});