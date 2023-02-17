import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useState, useEffect} from 'react'
// import orders from "../assets/data/orders.json"
import OrderListItem from "../components/OrderListItem"

import { DataStore } from "aws-amplify"
import { Dish } from "../src/models/index"

const OrdersScreen = () => {
  const [dish, setDish] = useState([])

  useEffect(() => {
    DataStore.query(Dish).then(setDish)
  })

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