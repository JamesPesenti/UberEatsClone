import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Star = () => {
  return (
    <View>
        <Image 
          style={{width: 100, height: 100, borderRadius: 50}}
          source={{ uri: "https://t4.ftcdn.net/jpg/04/41/08/11/240_F_441081116_uTBbG1NccxcdGPDFvlOWQQg3lwZQWA3I.jpg"}} />
    </View>
  )
}

export default Star

const styles = StyleSheet.create({})