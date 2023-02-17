import { StyleSheet, Text, ScrollView, View, Image, FlatList } from 'react-native'
import React from 'react'
import OrderListItem from "../components/OrderListItem"
import orders from "../assets/data/orders.json"
import restaurants from "../assets/data/restaurants.json"
import BasketDishItem from '../components/BasketDishItem'

const order = orders[0]



const OrderDetailsScreen = () => {
    return (
        <>
        <ScrollView>
            <Image 
                style={{ width: "auto", height: 200 }} 
                source={{ uri: order.Restaurant.image }}
            />
                <View style={{justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={{fontWeight: "600", fontSize: 16}}>{order.Restaurant.name}</Text>
                    <Text style={{marginVertical: 5, fontWeight: "600", fontSize: 16}}>3 items &#8226; $38.45</Text>
                    <Text>2 days ago &#8226; {order.status}</Text>

                    <Text style={{marginTop: 50, fontSize: 18, fontWeight: "700"}}>Your Orders</Text>
                </View>
                <View style={{marginTop: 50}}>
                    <FlatList 
                        data={restaurants[0].dishes}
                        renderItem={({item}) => (
                            <BasketDishItem
                                dish={item}
                            />
                        )}
                    />
                </View>
            </ScrollView>
        </>
    )
}

export default OrderDetailsScreen

const styles = StyleSheet.create({})