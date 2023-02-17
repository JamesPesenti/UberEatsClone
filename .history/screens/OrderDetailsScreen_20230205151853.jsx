import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import OrderListItem from "../components/OrderListItem"
import orders from "../assets/data/orders.json"
import restaurants from "../assets/data/restaurants.json"
import BasketDishItem from '../components/BasketDishItem'

const order = orders[0]

const OrderDetailsHeader = () => {

  return (
    <View>
    <View>
      <Image 
            style={{ width: 100%, height: 200}} 
            source={{ uri: order.Restaurant.image}}
        />
        <View style={{justifyContent: 'center', alignItems: 'center', }}>
            <Text style={{fontWeight: "600", fontSize: 16}}>{order.Restaurant.name}</Text>
            <Text style={{marginVertical: 5, fontWeight: "600", fontSize: 16}}>3 items &#8226; $38.45</Text>
            <Text>2 days ago &#8226; {order.status}</Text>

            <Text>Your Orders</Text>

        </View>
    </View>
</View>
  )
}

const OrderDetailsScreen = () => {
    return (
        <FlatList 
            listHeaderComponent={OrderDetailsHeader}
            data={restaurants[0].dishes}
            renderItem={({item}) => (
                <BasketDishItem
                    basketDish={item}
                />
            )}
        />
    )
}

export default OrderDetailsScreen

const styles = StyleSheet.create({})