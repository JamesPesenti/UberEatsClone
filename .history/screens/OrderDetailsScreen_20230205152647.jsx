import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import OrderListItem from "../components/OrderListItem"
import orders from "../assets/data/orders.json"
import restaurants from "../assets/data/restaurants.json"
import BasketDishItem from '../components/BasketDishItem'

const order = orders[0]


const OrderDetailsScreen = () => {
    return (
        <FlatList 
          
            data={restaurants[0].dishes}
            renderItem={({item}) => (
                <BasketDishItem
                    dish={item}
                />
            )}
        />
    )
}

export default OrderDetailsScreen

const styles = StyleSheet.create({})