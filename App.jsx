import React, {useState} from 'react';

import {Button, Text, View} from 'react-native';

const App = () => {
  const [name, setName] = useState('Test');

  function testName() {
    setName('Test2');
  }

  return (
    <View>
      <Text style={{fontSize: 30}}>{name}</Text>

      <Button title="Update Name" onPress={testName} color={'red'}></Button>
    </View>
  );
};

export default App;
