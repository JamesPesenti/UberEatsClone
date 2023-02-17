import { useNavigation } from '@react-navigation/core'
import { useRef, useEffect, useState } from "react"
import { 
    Pressable, 
    Animated, 
    FlatList, 
    ScrollView, 
    View, 
    Text, 
    Dimensions, Image, 
    ImageBackground, 
    StyleSheet, 
    TouchableOpacity
}
from 'react-native'

import HomeTitle from "../components/HomeTitle"
import FavoriteItem from "../components/FavoriteItem"
import favorites from "../assets/data/favorites"
import AboutFadeInView from "../components/AboutFadeInView"
import AboutUsModal from "../components/AboutUsModal"
import ChristmasFeature from '../components/ChristmasFeature'
import ChristmasHeader from '../components/ChristmasHeader'
import { auth } from '../firebase'

const HomeScreen = () => {

  const [headerShown, setHeaderShown] = useState(false);

  const translation = useRef(new Animated.Value(-100)).current;
  const width = Dimensions.get("window").width

  // Header Animation
  useEffect(() => {
    Animated.timing(translation, {
      toValue: headerShown ? -100 : 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [headerShown]);



  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
<>
  <ImageBackground
      imageStyle={{opacity: .7}}
      resizeMode="cover"
      style={styles.imageBackground}  
  >

      {/* Animated Header */}
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 100,
            backgroundColor: 'pink',
            transform: [
              { translateY: translation },
            ],
          }}
        >
            <HomeTitle />
        </Animated.View>
          <ScrollView
                onScroll={(event) => {
                  const scrolling = event.nativeEvent.contentOffset.y;
            
                if (scrolling > 100) {
                  setHeaderShown(true);
                } else {
                  setHeaderShown(false);
                }
              }}
              // onScroll will be fired every 16ms
              scrollEventThrottle={1}
              style={{ flex: 1 }}
            >
              
            {/* News, or Seasonal Flavors */}
             <View style={styles.container}>
                    {/* Halloween */}
                    {/* <ThanksgivingHeader /> */}
                      <ChristmasHeader />
                    <ScrollView style={{overflow: "hidden", marginTop: 100, paddingBottom: 0}}>
                      <View>
                        <ImageBackground
                          imageStyle={{opacity: 1}}
                          style={{ opacity: 1,
                          height: "100%",
                          width: "100%",
                          backgroundColor: "pink",
                          borderWidth: 4,
                          borderColor: "transparent",
                          paddingTop: 0,
                          overflow: "hidden",
                          justifyContent: "center"
                          }}
                          source={{uri: ("") }}
                        >
                        <ScrollView style={{marginVertical: 50, paddingBottom: 0}} horizontal={true} showsHorizontalScrollIndicator={false}>
                          {/* Halloween Feature Scroll */}
                                {/* <HalloweenFeature /> */}
                          {/* Christmas/Holiday Feature Scroll */}
                                    <ChristmasFeature />
                        </ScrollView>
                    </ImageBackground>
                      </View>
                   </ScrollView>
               </View>
               <Text style={styles.favoritesText}>Your Favorites!</Text>
                        <FlatList 
                              data={favorites}
                              horizontal
                              snapToInterval={width + -100}
                              decelerationRate={"fast"}
                              showsHorizontalScrollIndicator={false}
                              renderItem={({item}) => <FavoriteItem item={item} />}
                        />
  
               {/* About Us */}
               <AboutFadeInView>
                  <View style={styles.container}>
                      <Text style={styles.aboutUsText}>About us!</Text>
                  </View>
                  <View style={{overflow: "hidden", marginTop: 100}}>
                      <View style={{marginBottom: 50}}>
                        <AboutUsModal />
                      </View>
                   </View>
               </AboutFadeInView>
        </ScrollView>
  
      </ImageBackground>
      <Text>{auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
      </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: "column", 
    justifyContent: "center", 
    alignItems: "center", 
    marginTop: 190,
    padding: 0,
    overflow: "hidden"
},
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  imageBackground: {
    opacity: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    overflow: "hidden"
  },
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
  marginTop: 0 
},
favoritesText: {
 color: "#ED91AD",
 fontSize: 25,
 textAlign: "center",
 marginTop: 50,
 marginVertical: 20
}
})
