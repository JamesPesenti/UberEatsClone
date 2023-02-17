import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NewFadeInView from "../NewFadeInView"
 
const WhatsNewHeader = () => {
  return (
    <>
            {/* Christmas  */}
                 <NewFadeInView>
                     <Text style={styles.newHeader}>New
                        <Text style={styles.flavors}> Flavors</Text>
                     </Text>
                 </NewFadeInView>
    </>
  )
}

export default WhatsNewHeader

const styles = StyleSheet.create({
    newHeader: {
          textAlign: "center",
          color: "#ED91AD",
          flexDirection: "row",
          fontSize: 25,
          fontWeight: "900",
          letterSpacing: 4,
          marginTop: 100
        },
        flavors: {
              textAlign: "center",
              color: "#ffdae0",
              flexDirection: "row",
              fontSize: 25,
              fontWeight: "900",
              letterSpacing: 4,
              marginTop: 100
            },
})