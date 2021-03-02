import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../action';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const Login = ({navigation}) => {
  const [text, setText] = React.useState('');

  const dispatch = useDispatch();

  const {username} = useSelector((state) => {
    return {
      username: state.user.username,
    };
  });

  const handleLogin = () => {
    dispatch(login(text));
  };

  React.useEffect(() => {
    if (username) return navigation.navigate('home');
  }, [username]);

  return (
    <View style={{flex: 1, padding: 20, justifyContent: 'center'}}>
      <View style={{marginVertical: 10}}>
        <Text>Username</Text>
        <View style={{flexDirection: 'row', borderBottomColor: 'gray', borderBottomWidth: 1, marginVertical: 10}}>
        <FontAwesome name="user" size={20}/>
        <TextInput
          style={{ height: 40}}
          placeholder="ex.username"
          onChangeText={(text) => setText(text)}
        />

        </View>
      </View>
      <View style={{marginVertical: 10}}>
        <Text>Password</Text>
        <View style={{flexDirection: 'row', borderBottomColor: 'gray', borderBottomWidth: 1, marginVertical: 10}}>
        <FontAwesome name="eye-slash" size={20}/>
        <TextInput
          secureTextEntry={true}
          placeholder="ex. *****"
          style={{ height: 40}}
        />
        </View>
      </View>
      <View>
        <Button title="login" onPress={handleLogin} />
      </View>
    </View>
  );
};

export default Login;
