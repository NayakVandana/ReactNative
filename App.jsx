import React from 'react';

import {Button, Text, View} from 'react-native';
import CompanyData from './components/CompanyData'
const App = () => {
  return (
    <View>
      <Text style={{fontSize: 30}}>Text Components</Text>
      <Button title='Press Here'></Button>
      <Text style={{fontSize: 20}}>Text Components</Text>
      <Button title='Press Me To'></Button>
      <CompanyData/>
    </View>
  );
};

export default App;
