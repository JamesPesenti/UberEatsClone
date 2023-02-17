import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import firestore from 'firebase/firestore';


const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const subscriber = firestore().collection('cartImages').onSnapshot(querySnapshot => {
        const items = [];
        querySnapshot.forEach(doc => {
          items.push({
            id: doc.id,
            ...doc.data()
          });
        });
        setCart(items);
      });

    return () => subscriber();
  }, []);

  const addToCart = item => {
    firestore().collection('cartImages')
      .add(item)
      .then(() => {
        console.log('Item added to cart!');
      });
  };

  const removeFromCart = id => {
    firestore().collection('cartImages')
      .doc(id)
      .delete()
      .then(() => {
        console.log('Item removed from cart!');
      });
  };

  return (
    <View>
      <Text>Shopping Cart</Text>
      {cart.map(item => (
        <View key={item.id}>
          <Text>{item.name}</Text>
          <Text>{item.price}</Text>
          <Button onPress={() => removeFromCart(item.id)} title="Remove" />
        </View>
      ))}
      <Button onPress={() => addToCart({ name: 'Item 1', price: 9.99 })} title="Add to Cart" />
    </View>
  );
};

export default ShoppingCart;
