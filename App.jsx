import React, { useState } from 'react';

import {Button, Text, View} from 'react-native';
import User from './components/User'
const App = () => {
  const [name,setName] = useState("Test");
  return (
    <View>
      <Text style={{fontSize: 30}}>Text Components</Text>
      <Button title='Update Props' onPress={()=>setName('Test1')}></Button>
      <User name={name} age={29}/>
    </View>
  );
};

export default App;
