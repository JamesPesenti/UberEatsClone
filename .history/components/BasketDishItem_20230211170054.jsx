import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BasketDishItem = ({ basketDish }) => {
  console.log(basketDish)
  return (
    <>
        <View style={{flexDirection: "row", paddingHorizontal: 5}}>
        <View>
            <Text>{basketDish.quantity}</Text>
        </View>
            <Text style={{marginRightt: "auto"}}>{basketDish.Dish.name}</Text>
            <Text style={{marginLeft: "auto"}}>{basketDish.Dish.price}</Text>
        </View>
    </>
  )
}

export default BasketDishItem

const styles = StyleSheet.create({})