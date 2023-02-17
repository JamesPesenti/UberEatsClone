import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import orders from "../assets/data/orders.json"
import OrderListItem from "../components/OrderListItem"

const OrderScreen = () => {
  return (
    <View>
      <FlatList 
        data={orders}
        renderItem={({item}) => (
            <OrderListItem 
                order={item}
            />
        )}
      />
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({})