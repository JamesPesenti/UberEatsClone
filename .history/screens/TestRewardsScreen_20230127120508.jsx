// import { useNavigation } from '@react-navigation/core'
// import { ScrollView, KeyboardAvoidingView, StyleSheet, Text, TextInput, Pressable, View, Dimensions  } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { auth } from 'firebase';
// import { getFirestore,  createUserWithEmailAndPassword } from "firebase/firestore"



// const TestRewardsScreen = () => {

//   const [isRegistering, setIsRegistering] = useState(false)

//       // Firebase Authentication
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const navigation = useNavigation()

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(user => {
//       if(user) {
//         // navigation.navigate("Home")
//         console.log(user.email);
//       }
//     })
//     return unsubscribe
//   }, [])


//   const handleSignUp = () => {
//     auth
//       .createUserWithEmailAndPassword(email, password)
//       .then(userCredentials => {
//         const user = userCredentials.user;
//         console.log('Registered with:', user.email);
//       })
//       .catch(error => alert(error.message))
//   }

//   const handleLogin = () => {
//     auth
//       .signInWithEmailAndPassword(email, password)
//       .then(userCredentials => {
//         const user = userCredentials.user;
//         console.log('Logged in with:', user.email);
//       })
//       .catch(error => alert(error.message))
//   }



//   return (
//     <>
//         <View style={styles.buttonContainer}>
//         {/* <View >
//           <Pressable
//             onPress={handleOpenAnimation}
//             style={styles.animationButton}
//           >
//            <Text style={{textAlign: "center", fontSize: 18, color: "#d6839c" }}>Sign Up To Earn Rewards!</Text>
//            <Star />
//           </Pressable>
//         </View> */}

//         <View style={styles.inputContainer}>
//             <TextInput
//               placeholder="Email"
//               value={email}
//               onChangeText={text => setEmail(text)}
//               style={styles.input}
//             />
//             <TextInput
//               placeholder="Password"
//               value={password}
//               onChangeText={text => setPassword(text)}
//               style={styles.input}
//               secureTextEntry
//             />
//           <View style={{flexDirection: 'row'}}>
//             <Pressable
//               onPress={handleLogin}
//               // onPress={() => {}}
//               style={styles.logInButton}
//             >
//               <Text style={styles.buttonText}>{isRegistering ? "Sign Up" : "Log In"}</Text>
//             </Pressable>
//             <Pressable
//               onPress={handleSignUp}
//               // onPress={() => {}}
//               style={[styles.logInButton, styles.signUpButton]}
//             >
//               <Text style={styles.buttonOutlineText}>Sign Up</Text>
//             </Pressable>
//           </View>
//         </View>
//       </View>
//     </>
//   )
// }

// export default TestRewardsScreen


// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: "white"
//     },
//     closeButtonContainer: {
//       height: 45,
//       width: 45,
//       justifyContent: 'center',
//       alignSelf: "center",
//       textAlign: "center",
//       shadowColor: "#000",
//         shadowOffset: {
//           width: 0,
//           height: 5
//         },
//       shadowOpacity: 0.34,
//       shadwoRadius: 6.26,
//       borderRadius: 50,
//       elevation: 1,
//       backgroundColor: "white",
//       top: -28
//     },
//     inputContainer: {
//       justifyContent: 'center',
//       alignItems: "center",
//       textAlign: "center",
//       width: '80%'
//     },
//     input: {
//       backgroundColor: 'white',
//       paddingHorizontal: 30,
//       shadowColor: "#000",
//         shadowOffset: {
//           width: 0,
//           height: 5
//         },
//       shadowOpacity: 0.34,
//       shadwoRadius: 6.26,
//       marginVertical: 20
//     },
//     buttonContainer: {
//       width: '60%',
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginTop: 40,
//     },
//     animationButton: {
//       backgroundColor: 'transparent',
//       width: '100%',
//       padding: 5,
//       borderRadius: 5,
//       alignItems: 'center',
//       textAlign: "center",
//       marginVertical: 50
//     },
//     logInButton: {
//       backgroundColor: 'pink',
//       width: '60%',
//       padding: 15,
//       borderRadius: 10,
//       alignItems: 'center',
//       marginHorizontal: 5
//     },
//     signUpButton: {
//       backgroundColor: 'white',
//       borderColor: 'pink',
//       borderWidth: 2,
//     },
//     animationText: {
//       color: 'pink',
//       fontWeight: '700',
//       fontSize: 20,
//       justifyContent: "center",
//       textAlign: 'center',
//     },
//     buttonText: {
//       color: 'white',
//       fontWeight: '700',
//       fontSize: 16,
//     },
//     buttonOutlineText: {
//       color: 'pink',
//       fontWeight: '700',
//       fontSize: 16,
//     },
//   })
  
  
  