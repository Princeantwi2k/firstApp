
import React from 'react';
import { StyleSheet, Text, View, Image ,TextInput, TouchableOpacity} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import IconMaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'



export default function App() {
  return (
  <View >
 
    <View style={styles.edith}>
      <IconAntDesign name="arrowleft"  style={styles.icon} />
      <Text style={styles.profiletext}> Eidth Profile</Text>
    </View>

    <View style={styles.Picture} >
      <Image source={require("./assets/ceo.jpg")} style={styles.Image} />
      <Image source={require("./assets/icons.png")} style={styles.Images} />
    </View>
    <View style={styles.text}>
      <Text style={styles.textName}>School</Text>
      <TextInput placeholder="CodeTrian"   style={styles.textInput}          />
      <Text style={styles.textName}>Email Address</Text>
      <TextInput placeholder="antwi@2k.gmail.com"    style={styles.textInput}         />
      <Text style={styles.textNames}>Name</Text>
      <TextInput placeholder="prince"     style={styles.textInput}         />
      <Text style={styles.textNames}>Nick Name</Text>
      <TextInput placeholder="Qwajo Monies"    style={styles.textInput}         />
      <Text style={styles.textNames}>Emergency Contact</Text>
      <TextInput placeholder="+1-983766378"    style={styles.textInput}         />
      <IconAntDesign name="contacts"  style={styles.icons} />
    </View>
    <View >
      <TouchableOpacity style={styles.touch} >
        <Text  style={styles.button}>UPDATE PROFILE</Text>
      </TouchableOpacity>
    </View>
    
  </View>
  );
}

const styles = StyleSheet.create({


edith:{
   marginTop:20,
   padding:20,
flexDirection:"row",
borderBottomWidth:2,
borderBottomColor:"gray"

},

profiletext:{
 fontSize:20,

flex: 6,
textAlign: "center",

},

icon:{
  
  fontSize:20,
  justifyContent:"flex-start",
  flex: 0.35,

},
Picture:{
  position:"relative",
  alignItems:"center",
  marginTop:30
},

Image:{

  height:150,
  width:150,
  borderRadius:70,
  
  
},
Images:{
  height:50,
  width:50,
  borderRadius:70,
  position:"absolute",
  top:80,
  right:120
  

},
text:{
marginLeft:30,
textAlign:"center"
},
textName:{
fontSize:15,
padding:5

},
textNames:{
  fontSize:15,
  padding:5,
  color:"red"
  },
textInput:{
  padding:10,
borderColor:"black",
  borderBottomWidth:0.2 ,
  position:"relative"
},
icons:{
  fontSize:25,
  position:"absolute",
  top:290,
  right:0

},

button:{
  textAlign:"center",
  padding:25,
  color:"white"
 
 },
 touch:{
   backgroundColor:"red",
   marginTop:70,
   borderWidth:0.1,
   borderRadius:50,
   marginLeft:20,
   marginRight:20
   
 }

})
