import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NewFadeInView from "../NewFadeInView"
 
const WhatsNewHeader = () => {
  return (
    <>
            {/* Christmas  */}
                 <NewFadeInView>
                     <Text
                        style={styles.newHeader}>New
                                <Text style={styles.holidayHeader}> Flavors</Text>
                            </Text>
                 </NewFadeInView>
    </>
  )
}

export default WhatsNewHeader

const styles = StyleSheet.create({
    newHeader: {
          textAlign: "center",
          color: "pink",
          flexDirection: "row",
          fontSize: 25,
          fontWeight: "900",
          letterSpacing: 4,
          marginTop: 100
        },
        andHeader: {
              textAlign: "center",
              color: "green",
              flexDirection: "row",
              fontSize: 25,
              fontWeight: "900",
              letterSpacing: 4,
              marginTop: 100
            },
})