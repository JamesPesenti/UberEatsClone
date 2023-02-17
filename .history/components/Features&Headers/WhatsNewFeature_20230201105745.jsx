import { StyleSheet, Text, View, Image } from 'react-native'

const WhatsNewFeature = () => {

  return (
    <>
         <View style={{textAlign:"center", alignItems: "center"}}>
            <Text style={{marginRight: 30, color: "red", fontSize: 20, fontWeight: "bold", borderColor: "orange"}}>Santa Donut</Text>
            <Image style={{flexDirection: "row", width: 180, height: 180, borderRadius: 100, borderColor: "white", borderWidth: 2, marginTop: 5, marginRight: 30}} source={{uri: ("https://t3.ftcdn.net/jpg/02/88/36/44/240_F_288364429_XrXC6BBtukbbCUpyrclXkPA9VtjUN1xl.jpg")}} />
         </View>
                        
        <View style={{textAlign:"center", alignItems: "center"}}>
            <Text style={{marginRight: 30, color: "green", fontSize: 20, borderColor: "orange"}}>
              <View style={{marginTop: 50}}>
                 <Image style={{flexDirection: "row", width: 30, height: 30, borderRadius: 100, borderColor: "black", borderWidth: 2, marginTop: 0, marginRight: 5}} source={{uri: ("https://as2.ftcdn.net/v2/jpg/01/25/00/35/1000_F_125003525_aZcbmi59E2p6Pi9jJ1mTgW0gyMpnLUSm.jpg")}}/>
              </View>
                Christmas
            </Text>
                <Image style={{resizeMode: "contain", flexDirection: "row", width: 180, height: 180, borderRadius: 20, borderColor: "white", borderWidth: 2, marginTop: 5, marginRight: 30}} source={{uri:("https://t4.ftcdn.net/jpg/00/94/44/77/240_F_94447751_1IVygoAAYvHTQByUdiEkz1vpA11B4Tnv.jpg")}} />
        </View>

        <View style={{textAlign:"center", alignItems: "center"}}>
            <Text style={{marginRight: 30, color: "gray", fontSize: 20, borderColor: "black", fontWeight: "200"}}>Happy <Text style={{marginRight: 30, color: "blue", fontSize: 20, fontWeight: "bold", borderColor: "black"}}> 
                   Hannukkah!
            </Text>
            </Text>
                <Image style={{resizeMode: "stretch",flexDirection: "row", width: 180, height: 180, borderRadius: 100, borderColor: "white", borderWidth: 2, marginTop: 5, marginRight: 30}} source={{uri:("https://t3.ftcdn.net/jpg/01/78/96/62/240_F_178966211_Pz5tgZ80nyCY4my4CkPpM3RmFLyDuXE9.jpg")}} />
            </View>

        <View style={{textAlign:"center", alignItems: "center"}}>
            <Text style={{marginRight: 30, color: "orange", fontSize: 20, borderColor: "orange"}}>
                              
              <View style={{marginTop: 50}}>
                <Text style={{marginRight: 30, color: "red", fontSize: 20, fontWeight: "bold", borderColor: "orange"}}>Candy Cane</Text>
              </View>
                </Text>
                <Image style={{flexDirection: "row", width: 180, height: 180, borderRadius: 20, borderColor: "white", borderWidth: 2, marginTop: 5, marginRight: 30}} source={{uri:("https://as1.ftcdn.net/v2/jpg/04/76/14/82/1000_F_476148225_5a9uPNZpJQKAqcliFeWcand2OtIvdmth.jpg")}} />
        </View>
    </>
  )
}

export default WhatsNewFeature

const styles = StyleSheet.create({})