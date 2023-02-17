import { View, Text, TextInput, StyleSheet, Pressable, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Auth, DataStore } from "aws-amplify"
import { User } from "../src/models/index"
import { useAuthContext } from "../src/context/AuthContext"



const Profile = () => {
  const {dbUser} = useAuthContext()

  const [name, setName] = useState(dbUser?.name || "");
  const [address, setAddress] = useState(dbUser?.address || "");
  const [lat, setLat] = useState(dbUser?.lat + "" || "");
  const [lng, setLng] = useState(dbUser?.lng + "" || "");

  const { sub, setDbUser } = useAuthContext()

  const onSave = async () => {
    if (dbUser) {
      await updateUser()
    } else {
       await createUser()
    }

  const createUser = async () => {
    try {
      const user = await DataStore.save(new User({name, address, lat: parseFloat(lat), lng: parseFloat(lng), sub})
      )
      console.log(user)
      setDbUser(user)
     } catch (e) {
      Alert.alert("Error", e.message)
     }
    };
  }

  const updateUser = async () => {

  }

  return (
    <SafeAreaView>
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
        style={{ textAlign: "center", color: "pink", margin: 10 }}
      >
        Sign out
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
    color: "pink"
  },
  input: {
    margin: 10,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
  },
  saveButton: {
    backgroundColor: "pink", 
    color: "white", 
    borderRadius: 5, 
    padding: 5, 
    marginHorizontal: 140, 
    marginVertical: 20, 
    justifyContent: "center", 
    alignItems: "center", 
    textAlign: "center"
  }
});

export default Profile;