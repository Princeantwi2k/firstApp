
import React from 'react';
import { StyleSheet, Text, View, Image ,TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.pic}>
        <Image source={require("./assets/ceo.jpg")}  style={{height:300,width: 300,borderRadius:50}}/>
        
        </View>
    
<View style={styles.input} >
  <TextInput placeholder="Name" keyboardType="default" style={styles.name} />
  <TextInput placeholder="email" keyboardType="email-address" style={styles.name} />
  <TextInput placeholder="password" keyboardType="visible-password" style={styles.name} />
</View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop:90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pic:{
flex:0.3,
alignItems:"center",
justifyContent:'center'
  },
  

  input:{
    flex:1,
   justifyContent:'center',
  
  },

  name:{
padding:30,
margin:2,
borderBottomWidth:2,
borderBottomColor:'black',


width:300
  }
});
