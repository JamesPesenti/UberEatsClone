import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ImageItem = ({ item }) => {
  return (
    <>
        <Image 
            style={{height: 100, width: 100}}
            source={{ uri: item.image }}
        />
    </>
  )
}

export default ImageItem

const styles = StyleSheet.create({})