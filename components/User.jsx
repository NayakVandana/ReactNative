import React from 'react';

import {Button, Text, View} from 'react-native';

const User = (props) => {
  return (
    <View style={{backgroundColor:'green',padding:5}}>

      <Text style={{fontSize: 30}}>Name : {props.name}</Text>
      
      <Text style={{fontSize: 20}}>Age : {props.age}</Text>
      
    </View>
  );
};

export default User;
