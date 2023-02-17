import { View, Text, Image, Pressable } from "react-native";

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
    <View>
      <Image
        source={{ uri: restaurant.image }}
        style={{flex: 1, justifyContent: "center", alignItems: "center", width: "auto", height: 200}}
      />

      <View style={{justifyContent: "center", alignItems: "center"}}>
        <Text>{restaurant.name}</Text>
        <Text>
          $ {restaurant.deliveryFee.toFixed(2)} &#8226; {restaurant.minDeliveryTime}- 
          { restaurant.maxDeliveryTime} minutes
        </Text>

        <Text style={{fontSize: 16, fontWeight: "700"}}>Menu</Text>
      </View>
    </View>
  );
};

export default RestaurantHeader;