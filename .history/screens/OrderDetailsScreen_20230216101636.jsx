import { StyleSheet, Text, ScrollView, View, Image, FlatList, ActivityIndicator } from 'react-native'
import { useEffect, useState } from 'react'
import OrderListItem from "../components/OrderListItem"
import orders from "../assets/data/orders.json"
import restaurants from "../assets/data/restaurants.json"
import BasketDishItem from '../components/BasketDishItem'
import { useRoute } from '@react-navigation/native'


const order = orders[0]
   
const OrderDetailsScreen = ({ order }) => {
    const [order, setOrder] = useState()
    const { getOrder } = useOrderContext()
    const route = useRoute()
    const id = route.params?.id
}

useEffect(() => {
  getOrder(id).then(setOrder)
}, [])

if (!order) {
    return <ActivityIndicator size={"large"} color="black" />
}

    return (
        <>
        <ScrollView>
            <Image 
                style={{ width: "auto", height: 200 }} 
                source={{ uri: order.Restaurant.image }}
            />
                <View style={{justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={{marginVertical: 5, fontWeight: "700", fontSize: 16}}>{order.Restaurant.name}</Text>
                    <Text style={{marginVertical: 5, fontWeight: "600", fontSize: 16}}>3 items &#8226; $38.45</Text>
                    <Text>2 days ago &#8226; {order.status}</Text>

                    <Text style={{marginTop: 30, fontSize: 18, fontWeight: "700"}}>Your Orders</Text>
                </View>
                <View style={{marginTop: 40}}>
                    <FlatList 
                        data={order}
                        renderItem={({item, id}) => (
                            <BasketDishItem
                                key={id}
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