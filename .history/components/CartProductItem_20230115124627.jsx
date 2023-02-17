// import React, {useState} from 'react';
// import {StyleSheet, Image, View, Text} from 'react-native';
// // import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import QuantityButtons from '../Components/QuantityButtons';



// const CartProductItem = ({ item }) => {
//   const [quantity, setQuantity] = useState()


//   return (
//     <>
//     <View style={styles.container}>
//       <View style={{flex: 1, flexDirection: 'row', marginHorizontal: 10, marginVertical: -10}}>
//           <View style={{flex: 1, flexDirection: 'column', justifyContent: "center", alignItems: 'center', marginHorizontal: 20}}>
//               <Image 
//                   style={{flex: 1, borderRadius: 100, width: 150, height: 150, resizeMode: 'contain'}} 
//                   source={{uri: item.image.toString() }} 
//               />
//           <View>
//               <Text style={styles.itemText}>{item.flavor}</Text>
//               <Text style={styles.ratingText}>{item.avgRating} /5</Text>
//           {/* Ratings */}
//           <View style={styles.ratingsContainer}>
//             {[0, 0, 0, 0, 0].map((el, i) => (
//               <Image
//                 key={`${item.id}-${i}`}
//                 style={{margin: 3, justifyContent: "center", alignItems: "center", textAlign: "center", width: 25, height: 25}}
//                 source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjZX0cQJnAwjJLV1G34uHrC1QzDcQ6na52dQ&usqp=CAU"}}
//               />
//             ))}
//             {/* <Text>{item.avgRating}</Text> */}
//           </View>
//               <Text style={styles.caloriesText}>{item.calories} Cal</Text>
//               {/* conditional check if item is on sale or not */}
//               <Text style={styles.priceText}>sale ${item.price.toFixed(2)}! {item.price && (<Text style={{fontSize: 16, textDecorationLine: 'line-through', textDecorationLineColor: "red"}}>$2.99</Text>)}</Text>
//         </View>

//         <View style={{marginTop: -10}}>
//             <QuantityButtons
//                 quantity={quantity}
//                 setQuantity={setQuantity}
//             />
//         </View>
//       </View>
//       </View>
//     </View>
//     </>
//   );
// };

// export default CartProductItem;

// const styles = StyleSheet.create({

//  container: {
//       justifyContent: "center",
//       flexDirection: 'row',
//       borderWidth: 1,
//       borderColor: '#d1d1d1',
//       borderRadius: 10,
//       backgroundColor: '#fff',
//       marginVertical: 50,
//       marginLeft: 50,
//       marginHorizontal: 0,
//   },
//   row: {
//     flexDirection: 'column',
//     marginHorizontal: 40
//   },
//   image: {
//     height: 150,
//     width: 150,
//     resizeMode: 'contain',
//     borderRadius: 100
//   },
//   rightContainer: {
//     padding: 10,
//     flex: 3,
//   },
//   title: {
//     fontSize: 18,
//   },
//   price: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   oldPrice: {
//     fontSize: 12,
//     fontWeight: 'normal',
//     textDecorationLine: 'line-through',
//   },
//   ratingsContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 5,
//   },
//   star: {
//     margin: 2,
//   },
//   quantityContainer: {
//     margin: 5,
//   },
//   itemText: {
//     fontSize: 16,
//     letterSpacing: 1,
//     padding: 12,
//     color: "black",
//     borderRadius: 10,
//     marginVertical: -5,
//     alignItems: "center",
//     textAlign: "center"
//    },
//    ratingText: {
//     fontSize: 14,
//     letterSpacing: 1,
//     padding: 12,
//     color: "black",
//     borderRadius: 10,
//     marginVertical: -5,
//     alignItems: "center",
//     textAlign: "center"
//    },
//    caloriesText: {
//     fontSize: 14,
//     letterSpacing: 1,
//     padding: 12,
//     color: "black",
//     borderRadius: 10,
//     marginVertical: -5,
//     alignItems: "center",
//     textAlign: "center"
//    },
//    priceText: {
//     fontSize: 16,
//     fontWeight: "bold",
//     letterSpacing: 1,
//     padding: 12,
//     color: "black",
//     borderRadius: 10,
//     marginVertical: -10,
//     alignItems: "center",
//     textAlign: "center"
//    },

// });






import { useState, useRef, useEffect } from 'react';
import {Animated, Image, View, Text, Pressable, ScrollView, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../assets/styles';
import QuantityButtons from "../Components/QuantityButtons"
import HomeScreen from "../Screens/HomeScreen"

import Icon from 'react-native-vector-icons/Ionicons'

interface CartProductItemProps {
  item: {
    id: string;
    flavor: string;
    image: string;
    avgRating: number;
    price: number;
    oldPrice?: number;
    product: string;
    option: string;
    calories: string;
  };
}

const CartProductItem = ({item}: CartProductItemProps) => {

  const [quantity, setQuantity] = useState(1)
  const navigation = useNavigation();

  const height = Dimensions.get("window").height
  const width = Dimensions.get("window").width

  const onPress = () => {
    navigation.navigate("ProductDetails", {id: item.id});
  };

  const translation = useRef(new Animated.Value(0)).current

  useEffect( () => {
    Animated.timing(translation, {
      fromValue: 0,
      toValue: 135,
      duration: 1000,
      useNativeDriver: false,
    }).start()
  }, [])


  return (
   <>
   
   <Pressable onPress={onPress} style={styles.productDetails}>
        {/* Product Card Styles */}
      <View style={{flex: 1, flexDirection: 'row', marginHorizontal: 10, marginVertical: -10}}>
        <View style={{flex: 1, flexDirection: 'column', justifyContent: "center", alignItems: 'center', marginHorizontal: 20}}>
            <Image 
                style={{flex: 1, borderRadius: 100, width: 150, height: 150, resizeMode: 'contain'}} 
                source={{uri: item.image.toString() }} 
            />
        <View>
            <Text style={styles.itemText}>{item.flavor}</Text>
            <Text style={styles.ratingText}>{item.avgRating} /5</Text>

         {/* Ratings */}
         <View style={styles.ratingsContainer}>
          {[0, 0, 0, 0, 0].map((el, i) => (
            <Image
              key={`${item.id}-${i}`}
              style={{margin: 3, justifyContent: "center", alignItems: "center", textAlign: "center", width: 25, height: 25}}
              source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjZX0cQJnAwjJLV1G34uHrC1QzDcQ6na52dQ&usqp=CAU"}}
            />
          ))}
        </View>
            <Text style={styles.caloriesText}>{item.calories} Cal</Text>
            {/* conditional check if item is on sale or not */}
            <Text style={styles.priceText}>sale ${item.price.toFixed(2)}! {item.price && (<Text style={{fontSize: 16, textDecorationLine: 'line-through', textDecorationLineColor: "red"}}>$2.99</Text>)}</Text>
        </View>
        <View style={{marginTop: -10}}>
            <QuantityButtons
                quantity={quantity}
                setQuantity={setQuantity}
            />
        </View>
    </View>
    </View>
    </Pressable>
    </>
  );
};

export default CartProductItem;
