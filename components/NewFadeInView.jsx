import { useRef, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';

const NewFadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current 

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 6000,
        useNativeDriver: true,
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View               
      style={{
        ...props.style,
        opacity: fadeAnim,      
      }}
    >
      {props.children}
    </Animated.View>
  );
}

export default NewFadeInView