import { ScrollView, FlatList, StyleSheet, Text, View, Dimensions, Image, Pressable } from 'react-native'
import {useNavigation} from '@react-navigation/native';
import { useState, useEffect } from 'react'
import React from 'react'
import AddToOrderButton from '../components/AddToOrderButton';

import restaurants from "../assets/data/restaurants.json"
const dish = restaurants[0].dishes[0]



const TestCartScreen = () => {

 const [quantity, setQuantity] = useState(1)
 const navigation = useNavigation()

 const width = Dimensions.get("window").width
 const height = Dimensions.get("window").height


 const totalPrice = () => {
    return (dish.price * quantity).toFixed(2)
  }


 // Back Button
 const backButton = () => {
    return (
      <View style={{flexDirection: "row"}}>
        <Pressable
          style={{ width: 50, paddingLeft: 10, justifyContent: "center"}}
          onPress={() => navigation.goBack()}
        >
          <Image 
            style={styles.image}
            resizeMode="contain"
            source={{ uri: "https://t4.ftcdn.net/jpg/02/93/94/41/240_F_293944111_uTDy3HJcStHMbPTgC6GDSFGWudBiQZ5A.jpg"}}
          />
        </Pressable>
    </View>
    )
   }



  return (
    
    <>
     <ScrollView>
        <View>
            <View style={{marginVertical: 10}}>
            {backButton()}
            </View>
        <Text style={styles.titleText}>Shopping Cart</Text>
            <View style={styles.container}>
            {/* Dollar amount of order */}
            <Text style={styles.addToCart}>
                <Text style={styles.addToCartPink}>{quantity} </Text>
                    *DONUT* In Your Cart &#8226; 
                 <Text style={styles.addToCartPink}> ${totalPrice()}</Text>
            </Text>
            {/* <Text 
                style={{fontSize: 14, justifyContent: 'center', alignItems: 'center', textAlign: 'center', letterSpacing: .6}}>
                    Items in cart (<Text style={{color: '#ED91AD', letterSpacing: 2}}>{dish.length}</Text>) :{" "} 
                    <Text style={{color: '#ED91AD', fontSize:16}}>${totalPrice.toFixed(2)}</Text>
            </Text> */}
        </View>
        <View style={{marginTop: 0}}>
          <FlatList
             
              data={restaurants}
              snapToInterval={width + -80}
              decelerationRate={"fast"}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, id}) => (
                <View style={{flexDirection: "row"}}>
                    <Text>1</Text>
                </View>
              )}
          />
          {/* <ShoppingCart /> */}
        </View>
      <View style={{marginBottom: 0, justifyContent: "center", alignItems: "center", textAlign: "center",}}>
        <AddToOrderButton onPress={() => {}} />
      </View>
      </View>
    </ScrollView>
    </>
  )
}

export default TestCartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: "row", 
        justifyContent: "center", 
        alignItems: "center", 
        marginTop: 10,
        padding: 20
      },
      image: {
        marginRight: 0, 
        marginTop: 30,
        borderRadius: 100, 
        width: 50, 
        height: 50,
        resizeMode: "cover"
      },
      titleText: {
        textAlign: "center", 
        fontSize: 20,
        color: "#ED91AD",
      },
      addToCart: {
        fontSize: 14, 
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center', 
        letterSpacing: .6
      },
      addToCartPink: {
        color: "#ED91AD",
      }
})