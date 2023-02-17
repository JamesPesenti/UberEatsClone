import { useNavigation } from '@react-navigation/core'
import { Image, FlatList, Keyboard, ScrollView, KeyboardAvoidingView, StyleSheet, Text, TextInput, Pressable, View, Dimensions  } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase';
import firebase from "firebase"
import { getFirestore,  createUserWithEmailAndPassword } from "firebase/firestore"
import ImageItem from "../components/ImageItem"



const TestDonutsScreen = () => {

    
  const width = Dimensions.get("window").width

// Firestore fetch images
    const [images, setImages] = useState([])
    const imageRef = firebase.firestore().collection("images")

    useEffect(() => {
        imageRef
        .onSnapshot(
            (querySnapshot) => {
                const images = []
                querySnapshot.forEach((doc) => {
                    const { image } = doc.data()
                    images.push({
                        id: doc.id,
                        image,
                    })
                })
                setImages(images)
            })
    }, [])


  return (
    <>
    <ScrollView>
     

        <View style={{justifyContent: 'center', alignItems: "center"}}>
            <FlatList 
                data={images}
                horizontal
                snapToInterval={width + -100}
                decelerationRate={"fast"}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => <ImageItem item={item} />
            }
            />
        </View>
      </ScrollView>
    </>
  )
}

export default TestDonutsScreen


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
  
  
  