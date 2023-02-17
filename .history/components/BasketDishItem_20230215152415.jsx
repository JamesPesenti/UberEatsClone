import { StyleSheet, Text, View } from 'react-native'

const BasketDishItem = ({ basketDishes }) => {
  return (
    <>
        <View style={{flexDirection: "row", paddingHorizontal: 5}}>
        <View>
            <Text>{basketDishes.quantity}</Text>
        </View>
            <Text style={{marginRightt: "auto"}}>{basketDishes.name}</Text>
            <Text style={{marginLeft: "auto"}}>{basketDishes.price}</Text>
        </View>
    </>
  )
}

export default BasketDishItem

const styles = StyleSheet.create({})