import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const OrderListItem = ({ order }) => {
  return (
    <View style={{flexDirection: "row", margin: 10}}>
        <Image 
            style={{width: 150, height: 100, marginRight: 10}} 
            source={{ uri: order.Restaurant.image}}
        />
        <View>
            <Text>{order.Restaurant.name}</Text>
            <Text>3 items $38.45</Text>
            <Text>2 days ago &#8226; {order.status}</Text>
        </View>
    </View>
  )
}

export default OrderListItem

const styles = StyleSheet.create({})