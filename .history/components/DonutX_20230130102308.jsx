import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DonutX = () => {
  return (
    <>
        <Image
            source={{ uri: "https://t3.ftcdn.net/jpg/01/99/15/04/240_F_199150463_mdYRXvPzRZui5WQ4dzZvnaUht93bOzw1.jpg"}}
            style={{width: 30, height: 30, top:0, borderRadius: 50}} />
    </>
  )
}

export default DonutX

const styles = StyleSheet.create({})