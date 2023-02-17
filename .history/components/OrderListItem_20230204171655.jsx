import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const OrderListItem = ({ order }) => {
  return (
    <View>
        <Image 
            style={{width: 200, height: 150}} 
            source={{ uri: order.Restaurant.image}}
        />
        <View>
            <Text>{order.Restaurant.name}</Text>
            <Text>{order.Restaurant.name}</Text>
        </View>
    </View>
  )
}

export default OrderListItem

const styles = StyleSheet.create({})