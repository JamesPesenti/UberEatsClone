import { StyleSheet, Text, View } from 'react-native'

const BasketDishItem = ({ basketDish }) => {
  return (
    <>
        <View style={{flexDirection: "row", paddingHorizontal: 5}}>
        <View>
            <Text>{basketDish.quantity}</Text>
        </View>
            <Text style={{marginRightt: "auto"}}>{basketDish.name}</Text>
            <Text style={{marginLeft: "auto"}}>{basketDish.price}</Text>
        </View>
    </>
  )
}

export default BasketDishItem

const styles = StyleSheet.create({})