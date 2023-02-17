import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OrderListItem = ({ order }) => {
  return (
    <View>
        <Image source={{ uri: order.Restaurant.image}}/>
    </View>
  )
}

export default OrderListItem

const styles = StyleSheet.create({})