import { useNavigation } from '@react-navigation/core'
import { FlatList, Keyboard, ScrollView, KeyboardAvoidingView, StyleSheet, Text, TextInput, Pressable, View, Dimensions  } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase';
import firebase from "firebase"
import { getFirestore,  createUserWithEmailAndPassword } from "firebase/firestore"
import ImageItem from "../components/ImageItem"



const TestRewardsScreen = () => {


// Firestore fetch images
    const [images, setImages] = useState([])
    const imageRef = firebase.firestore().collection("images")

    useEffect(() => {
        imageRef
        .onSnapshot(
            querySnapshot => {
                const images = []
                querySnapshot.forEach((doc) => {
                    const { image } = doc.data()
                    images.push({
                        id: doc.id,
                        image
                    })
                })
                setImages(images)
            }
        )
    }, [])


// Firestore fetch text
    const textRef = firebase.firestore().collection("AddText")
    const [addText, setAddText] = useState("")

    const addField = () => {
        if (addText && addText.length > 0) {
            const text = {
                title: addText
            };
            textRef
                .add(text)
                .then(() => {
                    setAddText("")
                    Keyboard.dismiss()
                })
                .catch((error) => {
                    alert(error)
                })
        }
    }

    const [isRegistering, setIsRegistering] = useState(false)

// Firebase Authentication
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user) {
        // navigation.navigate("Home")
        console.log(user.email);
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
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }



  return (
    <>
        <View style={styles.buttonContainer}>
        {/* <View >
          <Pressable
            onPress={handleOpenAnimation}
            style={styles.animationButton}
          >
           <Text style={{textAlign: "center", fontSize: 18, color: "#d6839c" }}>Sign Up To Earn Rewards!</Text>
           <Star />
          </Pressable>
        </View> */}

        <View style={{marginVertical: 50}}>
            <View>
                <TextInput 
                    placeholder="add text"
                    onChangeText={(title) => setAddText(title)}
                    value={addText}
                />
                <Pressable
                    style={{marginVertical: 50}}
                    onPress={addField}
                >
                <Text>Add</Text>
                </Pressable>
            </View>
        </View>

        <View style={{justifyContent: 'center', alignItems: "center"}}>
            <FlatList 
                data={images}
                horizontal
                renderItem={({item}) => (
                    <>
                        <ImageItem
                            item={item}
                        />
                    </>
                )}
            />
        </View>

        <View style={styles.inputContainer}>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={text => setEmail(text)}
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={text => setPassword(text)}
              style={styles.input}
              secureTextEntry
            />
          <View style={{flexDirection: 'row'}}>
            <Pressable
              onPress={handleLogin}
              // onPress={() => {}}
              style={styles.logInButton}
            >
              <Text style={styles.buttonText}>{isRegistering ? "Sign Up" : "Log In"}</Text>
            </Pressable>
            <Pressable
              onPress={handleSignUp}
              // onPress={() => {}}
              style={[styles.logInButton, styles.signUpButton]}
            >
              <Text style={styles.buttonOutlineText}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  )
}

export default TestRewardsScreen


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
  
  
  