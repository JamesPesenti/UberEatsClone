import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import orders from "../assets/data/orders.json"
import OrderListItem from "../components/OrderListItem"

const OrdersScreen = () => {
  return (
    <View style={{flex: 1, width: '100%', marginTop: 50, overflow: 'hidden'}}>  
        <Text style={{textAlign: "center", fontSize: 20, fontWeight: "700"}}>Your Past Orders</Text>
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

export default OrdersScreen

const styles = StyleSheet.create({})