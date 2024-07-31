import React from 'react';

import {Button, Text, View} from 'react-native';

const App = () => {

  const fruit=(val)=>{
      console.warn(val);
  }

  return (
    <View>
      <Text style={{fontSize: 30}}>Button and onPress Event</Text>
     
      <Button title='On Press' onPress={()=>fruit("Hello")} color={'green'}></Button>

      <Button title='On Press2' onPress={fruit} color={'red'}></Button>

    </View>
  );
};

export default App;
