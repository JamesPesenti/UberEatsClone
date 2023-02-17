import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import orders from "../assets/data/orders.json"

const order = orders[0]

const OrderDetails = () => {
  return (
    <View>
    <View>
      <Image 
            style={{position: "absolute", width: "auto", height: "auto"}} 
            source={{ uri: order.Restaurant.image}}
        />
        <View style={{justifyContent: 'center', alignItems: 'center', }}>
            <Text style={{fontWeight: "600", fontSize: 16}}>{order.Restaurant.name}</Text>
            <Text style={{marginVertical: 5, fontWeight: "600", fontSize: 16}}>3 items &#8226; $38.45</Text>
            <Text>2 days ago &#8226; {order.status}</Text>
        </View>
    </View>
</View>
  )
}

export default OrderDetails

const styles = StyleSheet.create({})