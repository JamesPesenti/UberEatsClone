import { useState } from "react"
import { ScrollView, TouchableOpacity, View, Text, Modal, StyleSheet, Pressable, Image, ImageBackground, Dimensions} from 'react-native'

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height


const AboutUsModal = ({ item, id }) => {
    const [modalVisible, setModalVisible] = useState(false)
  return (
    <>
    <ScrollView>
       <View style={styles.centeredView}>
        <Modal 
            key={id}
            animationType="fade"
            statusBarTranslucent={true}
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
            }} 
        >
            <ScrollView>
              <View style={styles.openView}>
                {/* <ImageBackground
                    imageStyle={{opacity: .6}}
                    style={styles.imageBackground}
                    resizeMode="cover"
                    source={{ uri: "https://t4.ftcdn.net/jpg/01/42/58/11/240_F_142581134_pTnn55ikj0lNuB1WwtLsPQf0RSpnpUQV.jpg"}}
                > */}
                    <View style={styles.modalView}>
                    <ScrollView style={{marginTop: 100, paddingBottom: 0}} horizontal={true} showsHorizontalScrollIndicator={false}>
                      {/* <Image style={{flexDirection: "row", width: 200, height: 200, borderRadius: 100, marginTop: 5, margin: 5}} source={{uri: ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRf1Q9d-VGIkABobO8H19Yuh_6i0C3ORq3Vw&usqp=CAU")}} />
                      <Image style={{flexDirection: "row", width: 200, height: 200, borderRadius: 100, marginTop: 5, margin: 5}} source={{uri:("https://feastio.com/wp-content/uploads/2021/09/Yam-malasada.jpg")}} />
                      <Image style={{flexDirection: "row", width: 200, height: 200, borderRadius: 100, marginTop: 5, margin: 5}} source={{uri:("http://cdn1.clickthecity.com/images/articles/content/5c8897a91754b8.89275880.jpg")}} /> */}
                    </ScrollView>
                    <View style={{margin: -5, paddingBottom: 0}}>
                        <Text style={styles.modalTitleText}>Donut Shop</Text>
                        <Text style={styles.modalText}></Text>
                        <Text style={styles.modalText}></Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </Pressable>
                    </View>
                  </View>
                  {/* </ImageBackground> */}
                </View>
            </ScrollView>
         
        </Modal>

        <TouchableOpacity
            style={styles.gaudi}
            onPress={() => setModalVisible(true)}>
          <View>
          <Image 
            imageStyle={{opacity: 1}}
            style={{ 
                opacity: 1,
                height: 300,
                width: 380,
                marginLeft: 8,
                paddingTop: 10,
                borderWidth: 5,
                borderColor: "pink",
                overflow: "hidden"
            }}
                source={{uri: "https://t4.ftcdn.net/jpg/05/55/29/13/360_F_555291384_Nei0LAgroqUgZEbfsin84FYK8msFHDmQ.jpg"}}
            />
          </View>
        </TouchableOpacity>
    </View>
    </ScrollView>
    </>
  )
}

export default AboutUsModal


const styles = StyleSheet.create({
    imageBackground: {
        opacity: 1,
        height: "100%",
        width: "100%",
        backgroundColor: "white",
        borderTopRightRadius: 100,
        borderTopLeftRadius: 100,
        overflow: "hidden"
    },
    // modal display position on screen
    centeredView: {
     flexDirection: "row",
     justifyContent: "center",
     alignItems: "center",
     marginRight: 10,
     marginLeft: 0,
     marginTop: 0,
   },
   // view when you open modal
   modalView: {
     justifyContent: "center",
     backgroundColor: "transparent",
     width: width,
     height: height,
     paddingTop: 0,
     marginBottom: 0,
     elevation: 3.3,
     overflow: "visible"
   },
   openView: {
     backgroundColor: "transparent",
   },
    //   gaudi card
   gaudi: {
     opacity: 1, 
     borderRadius: 10,
     padding: 2,
     marginBottom: 60,
     marginLeft: 0,
     marginVertical: 20,

   },
   button: {
     borderRadius: 5,
     padding: 10,
     elevation: 2,
     marginVertical: 50,
     marginHorizontal: 120, 
   },
   buttonClose: {
     backgroundColor: "white",
     margin: 0
   },
   textStyle: {
     color: "black",
     textAlign: "center",
   },
   modalTitleText: {
     fontSize: 20,
     textAlign: "center",
   },
   modalText: {
     justifyContent: "center",
     textAlign: "center",
     alignItems: "center",
     marginBottom: 10,
     marginTop: 15
   },
   })








   