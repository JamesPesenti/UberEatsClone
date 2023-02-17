import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NewFadeInView from "../NewFadeInView"

const ValentinesHeader = () => {
  return (
    <View>
      <NewFadeInView>
          <Text style={styles.newHeader}>Valentines
            <Text style={styles.andHeader}>{"&"}
              <Text style={styles.holidayHeader}> Day
              </Text>
            </Text>
          </Text>
          <Text style={styles.donutHeader}>Donuts!</Text>
      </NewFadeInView>
    </View>
  )
}

export default ValentinesHeader

const styles = StyleSheet.create({})