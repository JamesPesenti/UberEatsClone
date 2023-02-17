import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { useNavigation } from "@react-navigation/native"

const OrderListItem = ({ order }) => {

  const navigation = useNavigation()

  return (
    <Pressable onPress={() => navigation.navigate("Order", {id: order.id})} style={{flexDirection: "row", margin: 10, marginTop: 50, alignItems: "center"}}>
        <Image 
            style={{width: 150, height: 100, marginRight: 10}} 
            source={{ uri: order.Restaurant.image}}
        />
        <View>
            <Text style={{fontWeight: "600", fontSize: 16}}>{order.Restaurant.name}</Text>
            <Text style={{marginVertical: 5, fontWeight: "600", fontSize: 16}}>3 items &#8226; $38.45</Text>
            <Text>2 days ago &#8226; {order.status}</Text>
        </View>
    </Pressable>
  )
}

export default OrderListItem

const styles = StyleSheet.create({})