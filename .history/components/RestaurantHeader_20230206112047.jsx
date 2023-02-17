import { View, Text, Image } from "react-native";

const DEFAULT_IMAGE =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg";

const RestaurantHeader = ({ restaurant }) => {
  return (
    <View >
      <Image
        source={{
          uri: restaurant.image.startsWith("http")
            ? restaurant.image
            : DEFAULT_IMAGE,
        }}
        style={{flex: 1, justifyContent: "center", alignItems: "center", width: "auto", height: 100}}
      />

      <View style={{justifyContent: "center", alignItems: "center"}}>
        <Text>{restaurant.name}</Text>
        <Text>
          $ {restaurant.deliveryFee.toFixed(1)} &#8226; {restaurant.minDeliveryTime}-
          {restaurant.maxDeliveryTime} minutes
        </Text>

        <Text style={{fontSize: 16, fontWeight: "700"}}>Menu</Text>
      </View>
    </View>
  );
};

export default RestaurantHeader;