import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import orders from "../assets/data/orders.json"

const order = orders[0]

const OrderDetails = () => {
  return (
    <View>
      <Image 
            style={{width: 150, height: 100, marginRight: 10}} 
            source={{ uri: order.Restaurant.image}}
        />
        <View>
            <Text style={{fontWeight: "600", fontSize: 16}}>{order.Restaurant.name}</Text>
            <Text style={{marginVertical: 5, fontWeight: "600", fontSize: 16}}>3 items &#8226; $38.45</Text>
            <Text>2 days ago &#8226; {order.status}</Text>
        </View>
    </View>
  )
}

export default OrderDetails

const styles = StyleSheet.create({})