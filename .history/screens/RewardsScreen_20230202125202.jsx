import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { ScrollView, KeyboardAvoidingView, StyleSheet, Text, TextInput, Pressable, View, Dimensions } from 'react-native'
import Svg, { Image, Ellipse, ClipPath } from "react-native-svg"
import Animated, { useSharedValue, useAnimatedStyle, interpolate, withTiming, withDelay } from "react-native-reanimated"
import Star from "../components/Star"
import DonutX from "../components/DonutX"
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { auth } from '../firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";


const RewardsScreen = () => {
  

  const [isRegistering, setIsRegistering] = useState(false)

  // Animation
  const {width, height} = Dimensions.get("window") 
  const imagePosition = useSharedValue(1)

  const imageAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [-height / 1, 0])
    return {
      transform: [{translateY: withTiming(interpolation, {duration: 800})}]
    }
  })


  // Open Animation Button
  const openAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0])
    return {
      opacity: withTiming(imagePosition.value, {duration: 500})
    }
  })

  // const buttonAnimatedStyle = useAnimatedStyle(() => {
  //   const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0])
  //   return {
  //     opacity: withTiming(imagePosition.value, {duration: 500}),
  //     transform: [{translateY: withTiming(interpolation, {duration: 1000})}]
  //   }
  // })

  const closeButtonContainerStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [180, 360])
    return {
      opacity: withTiming(imagePosition.value === 1 ? 0 : 1, {duration: 1000}),
      transform: [{rotate: withTiming(interpolation + "deg", {duration: 1000})}]
    }
  })
  
  const formAnimatedStyle = useAnimatedStyle(()=> {
    return {
      opacity: imagePosition.value === 0 ? withDelay(400, withTiming(1, {duration: 800})) : withTiming(0, {duration: 300}),
    }
  })

  const handleOpenAnimation = () => {
    imagePosition.value = 0
  }

  const handleClose = () => {
    imagePosition.value = 1
  }
  // 


  // Firebase Authentication
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(auth, (user) => {
      if(user) {
        navigation.navigate("Home")
      }
    })
    return unsubscribe
  }, [])


  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        navigation.navigate("Home")
      })
      .catch(error => alert(error.message))
  }




return (
<>
  <Text> jdjdjdjdjdjdj dj dj</Text>
  </>
  )
}

export default RewardsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white"
  },
  closeButtonContainer: {
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignSelf: "center",
    textAlign: "center",
    shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5
      },
    shadowOpacity: 0.34,
    shadwoRadius: 6.26,
    borderRadius: 50,
    elevation: 1,
    backgroundColor: "white",
    top: -28
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: "center",
    textAlign: "center",
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 30,
    shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5
      },
    shadowOpacity: 0.34,
    shadwoRadius: 6.26,
    marginVertical: 20
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  animationButton: {
    backgroundColor: 'transparent',
    width: '100%',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    textAlign: "center",
    marginVertical: 50
  },
  logInButton: {
    backgroundColor: 'pink',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5
  },
  signUpButton: {
    backgroundColor: 'white',
    borderColor: 'pink',
    borderWidth: 2,
  },
  animationText: {
    color: 'pink',
    fontWeight: '700',
    fontSize: 20,
    justifyContent: "center",
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: 'pink',
    fontWeight: '700',
    fontSize: 16,
  },
})


