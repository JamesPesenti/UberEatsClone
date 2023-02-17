import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const OrderListItem = ({ order }) => {
  return (
    <View>
        <Image 
            style={{width: 200, height: 150}} 
            source={{ uri: order.Restaurant.image[0]}}
        />
    </View>
  )
}

export default OrderListItem

const styles = StyleSheet.create({})