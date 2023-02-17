import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const OrderListItem = ({ order }) => {
  return (
    <View>
        <Image style={{width: 100, height: 100}} source={{ uri: order.Restaurant.image}}/>
    </View>
  )
}

export default OrderListItem

const styles = StyleSheet.create({})