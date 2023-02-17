import { useState, useRef, useEffect } from 'react';
import {Animated, Image, View, Text, Pressable, ScrollView, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../assets/styles';
import QuantityButtons from "./QuantityButtons"
import HomeScreen from "../screens/HomeScreen"

import Icon from 'react-native-vector-icons/Ionicons'


const ImageItem = ({item}) => {

  const [quantity, setQuantity] = useState(1)
  const navigation = useNavigation();

  const height = Dimensions.get("window").height
  const width = Dimensions.get("window").width

  const onPress = () => {
    navigation.navigate("Cart", {id: item.id});
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
                source={{uri: item.image }} 
            />
        <View>
            <Text style={styles.itemText}>Glazed</Text>
            <Text style={styles.ratingText}>Your Rating {item.avgRating}/5</Text>

         {/* Ratings */}
         <View style={styles.ratingsContainer}>
          {[0, 0, 0, 0, 0].map((el, i) => (
            <Image
              key={`${item.id}-${i}`}
              style={{margin: 3, justifyContent: "center", alignItems: "center", textAlign: "center", width: 25, height: 25}}
              source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjZX0cQJnAwjJLV1G34uHrC1QzDcQ6na52dQ&usqp=CAU"}}
            />
          ))}
          {/* <Text>{item.avgRating}</Text> */}
        </View>
            <Text style={styles.caloriesText}>{item.calories} Cal</Text>
        </View>
    </View>
    </View>
    </Pressable>
    </>
  );
};

export default ImageItem;
