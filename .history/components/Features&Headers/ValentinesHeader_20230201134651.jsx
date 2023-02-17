import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NewFadeInView from "../NewFadeInView"

const ValentinesHeader = () => {
  return (
    <View>
      <NewFadeInView>
          <Text style={styles.valentines}>Valentines<Text style={styles.day}> Day!</Text></Text>
      </NewFadeInView>
    </View>
  )
}

export default ValentinesHeader

const styles = StyleSheet.create({
  valentines: {
    textAlign: "center",
    color: "red",
    flexDirection: "row",
    fontSize: 25,
    fontWeight: "900",
    letterSpacing: 4,
    marginTop: 100
  },
  day: {
        textAlign: "center",
        color: "pink",
        flexDirection: "row",
        fontSize: 25,
        fontWeight: "900",
        letterSpacing: 4,
        marginTop: 100
      },
})