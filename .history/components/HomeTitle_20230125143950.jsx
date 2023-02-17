import { Animated, ScrollView, View, Text, Image, ImageBackground, StyleSheet} from 'react-native'
import { useRef, useEffect, useState } from "react"

const HomeTitle = () => {
  return (
    <>
    <ImageBackground
       imageStyle={{opacity: .6, borderRadius: 12, }}
       style={{
        opacity: 1,
        height: "100%",
        width: "100%",
        backgroundColor: "#ED91AD",
        overflow: "hidden"
        }}
       source={{uri: "https://media1.giphy.com/media/MJkPUQgZZHZ5jYHwlF/200w.webp?cid=ecf05e47fp8wzgamr75bcjny6od3ysrnv650sdf5mi2sps88&rid=200w.webp&ct=g"}}
    >
     <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
         style={{opacity: 1, fontSize: 24, fontWeight: "600", letterSpacing: 3, textAlign: "center", alignItems: "center", color: "white", marginTop: 17, marginHorizontal: 0}}>
            Donut Shop
        </Text>
            <Image
                resizeMode="cover"
                style={{ opacity: 1, marginTop: 1, width: 50, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: "transparent", borderColor: "#ED91AD", borderWidth: 2, borderRadius: 100  }}
                source={{ uri: "https://t3.ftcdn.net/jpg/01/57/18/70/240_F_157187029_BdCDv0nLbgcPY2Oibj8GsWVhbDRJyEW0.jpg" }}
            />
     </View>
       
    </ImageBackground>

    </>
  )
}

export default HomeTitle

const styles = StyleSheet.create({
    imageBackground: {
      opacity: 1,
      height: "100%",
      width: "100%",
      backgroundColor: "transparent",
      overflow: "hidden"
    },
})