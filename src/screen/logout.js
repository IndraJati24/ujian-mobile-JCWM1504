import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {logout} from '../action';

const Logout = () => {
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{width: 300, bottom: 15, position: 'absolute'}}>
        <Button title="logout" onPress={() => dispatch(logout())} />
      </View>
    </View>
  );
};

export default Logout;
