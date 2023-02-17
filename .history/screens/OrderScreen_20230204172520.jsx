import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import orders from "../assets/data/orders.json"
import OrderListItem from "../components/OrderListItem"

const OrderScreen = () => {
  return (
    <View style={{flex: 1, width: '100%',}}>  
        <Text style={{fontSize: 30, fontWeight: "700"}}>Your Past Orders</Text>
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