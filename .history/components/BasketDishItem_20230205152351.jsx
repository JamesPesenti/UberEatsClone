import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BasketDishItem = ({ dish }) => {
  return (
    <>
        <View style={{flexDirection: "row", paddingHorizontal: 5}}>
        <View>
            <Text>1</Text>
        </View>
            <Text style={{marginRightt: "auto"}}>{dish.name}</Text>
            <Text style={{marginLeft: "auto"}}>{dish.price}</Text>
        </View>
    </>
  )
}

export default BasketDishItem

const styles = StyleSheet.create({})