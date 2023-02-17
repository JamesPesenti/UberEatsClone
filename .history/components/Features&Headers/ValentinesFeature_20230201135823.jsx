import { StyleSheet, Text, View, Image } from 'react-native'

const ValentinesFeature = () => {

  return (
    <>
         <View style={{textAlign:"center", alignItems: "center"}}>
            <Text style={{marginRight: 30, color: "red", fontSize: 20, fontWeight: "bold", borderColor: "orange"}}>Santa Donut</Text>
          
         </View>
                        
        <View style={{textAlign:"center", alignItems: "center"}}>
            <Text style={{marginRight: 30, color: "green", fontSize: 20, borderColor: "orange"}}>
              <View style={{marginTop: 50}}>
                 <Image style={{flexDirection: "row", width: 30, height: 30, borderRadius: 100, borderColor: "black", borderWidth: 2, marginTop: 0, marginRight: 5}} source={{uri: ("https://as2.ftcdn.net/v2/jpg/01/25/00/35/1000_F_125003525_aZcbmi59E2p6Pi9jJ1mTgW0gyMpnLUSm.jpg")}}/>
              </View>
                Christmas
            </Text>
              
        </View>

        <View style={{textAlign:"center", alignItems: "center"}}>
            <Text style={{marginRight: 30, color: "gray", fontSize: 20, borderColor: "black", fontWeight: "200"}}>Happy <Text style={{marginRight: 30, color: "blue", fontSize: 20, fontWeight: "bold", borderColor: "black"}}> 
                   Hannukkah!
            </Text>
            </Text>
              
            </View>

        <View style={{textAlign:"center", alignItems: "center"}}>
            <Text style={{marginRight: 30, color: "orange", fontSize: 20, borderColor: "orange"}}>
                              
              <View style={{marginTop: 50}}>
                <Text style={{marginRight: 30, color: "red", fontSize: 20, fontWeight: "bold", borderColor: "orange"}}>Candy Cane</Text>
              </View>
                </Text>
               
        </View>
    </>
  )
}

export default ValentinesFeature

const styles = StyleSheet.create({
  
})