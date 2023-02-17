import { StyleSheet, View, Text, Image, Pressable } from "react-native";

const DEFAULT_IMAGE =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg";


const backButton = () => {
  return (
      <View style={{flexDirection: "row", position: "absolute"}}>
          <Pressable
              onPress={() => navigation.goBack()}
          >
          <Image 
              style={{width: 50, height: 50, borderRadius: 50, marginTop: 0, marginLeft: 10}}
              resizeMode="contain"
              source={{ uri: "https://t4.ftcdn.net/jpg/02/93/94/41/240_F_293944111_uTDy3HJcStHMbPTgC6GDSFGWudBiQZ5A.jpg"}}
          />
          </Pressable>
      </View>
  )
}


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
  },
  iconContainer: {
    position: "absolute",
    top: 40,
    left: 10,
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