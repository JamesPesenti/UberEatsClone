import { View, Text, TextInput, StyleSheet, Pressable, Alert } from "react-native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Auth, DataStore } from "aws-amplify"
import { User } from "../src/models/index"
import { useAuthContext } from "../src/context/AuthContext"
import { useNavigation } from "@react-navigation/native"
  


const Profile = () => {
  const {dbUser} = useAuthContext()

  const [name, setName] = useState(dbUser?.name || "");
  const [address, setAddress] = useState(dbUser?.address || "");
  const [lat, setLat] = useState(dbUser?.lat + "" || "");
  const [lng, setLng] = useState(dbUser?.lng + "" || "");

  const { sub, setDbUser } = useAuthContext()

  const navigation = useNavigation()


  
  const onSave = async () => {
    if (dbUser) {
      await updateUser()
    } else {
       await createUser()
    }
    navigation.goBack()
  }


  const updateUser = async () => {
    const user = await DataStore.save(User.copyOf(dbUser, (updated) => {
      updated.name = name
      updated.address = address
      updated.lng = parseFloat(lng)
      updated.lat = parseFloat(lat)
    })
  );
    setDbUser(user)
  }


  const createUser = async () => {
    try {
      const user = await DataStore.save(new User({name, address, lat: parseFloat(lat), lng: parseFloat(lng), sub})
      );
      setDbUser(user)
     } catch (e) {
      Alert.alert("Error", e.message)
     }
    };
  



return (
 <>
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        style={styles.input}
      />
      <TextInput
        value={address}
        onChangeText={setAddress}
        placeholder="Address"
        style={styles.input}
      />
      <TextInput
        value={lat}
        onChangeText={setLat}
        placeholder="Latitude"
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        value={lng}
        onChangeText={setLng}
        placeholder="Longitude"
        style={styles.input}
      />
      <Text style={styles.saveButton} onPress={onSave}>Save</Text>
      <Text
        onPress={() => Auth.signOut()}
        style={styles.signOut}
      >
        Sign out
      </Text>
    </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black"
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
    color: "white"
  },
  input: {
    margin: 10,
    backgroundColor: "#06C167",
    padding: 15,
    borderRadius: 5,
  },
  saveButton: {
    backgroundColor: "white", 
    color: "#06C167", 
    borderRadius: 5, 
    padding: 5, 
    marginHorizontal: 140, 
    marginVertical: 20, 
    justifyContent: "center", 
    alignItems: "center", 
    textAlign: "center"
  },
  singOut: {
    textAlign: "center", 
    color: "#06C167", 
    margin: 10 
  }
});

export default Profile;