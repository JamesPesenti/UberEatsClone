import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import NewFadeInView from "./NewFadeInView"
 
const WhatsNewHeader = () => {
  return (
    <>
            {/* Christmas  */}
                 <NewFadeInView>
                     <Text
                        style={styles.newHeader}>Christmas
                            <Text style={styles.andHeader}> {"&"}
                                <Text style={styles.holidayHeader}> Holiday</Text>
                            </Text>
                     </Text>
                        <Text style={styles.donutHeader}>Donuts!</Text>
                 </NewFadeInView>
    </>
  )
}

export default WhatsNewHeader

const styles = StyleSheet.create({
    newHeader: {
          textAlign: "center",
          color: "red",
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
        holidayHeader: {
          textAlign: "center",
          color: "#BBC2CC",
          flexDirection: "row",
          fontSize: 26,
          fontWeight: "900",
          letterSpacing: 4,
          marginTop: 100
        },
        donutHeader: {
            color: "#d4af37",
            marginTop: 26,
            textAlign: "center",
            fontSize: 25,
            fontWeight: "900",
            letterSpacing: 3,
        },
        aboutUsText: {
          textAlign: "center",
          color: "#ED91AD",
          flexDirection: "row",
          fontSize: 25,
          fontWeight: "900",
          letterSpacing: 4,
          marginTop: 100
        },
})