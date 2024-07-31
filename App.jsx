import React, { useState } from 'react';

import {Button, Text, View,StyleSheet} from 'react-native';
import Exstyles from './style'
const App = () => {
  
  return (
    <View>
      <Text style={{fontSize: 30,color:'red',backgroundColor:'green'}}>Text Components</Text>
      <Text style={styles.textBox}>Text Components</Text>
      <Text style={styles.textBox}>Text Components</Text>
      <Text style={styles.textBox}>Text Components</Text>   
      <Text style={Exstyles.textBox}>Text Components</Text>      
      <Text style={[styles.textBox,Exstyles.textBox,{marginTop:20}]}>Text Components</Text>     
    </View>
  );
};

const styles=StyleSheet.create({
  textBox:{
    color:'#fff',
    fontSize:25,
    backgroundColor:'blue',
    marginBottom:10,
    padding:10,
    borderRadius:10,
    height:100,
    textAlignVertical:'center',
    textAlign:'center',
    borderColor:'red',
    borderWidth:2,

  }
})

export default App;
