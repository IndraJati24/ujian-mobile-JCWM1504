import React from 'react';
import Axios from 'axios';
import {View, Text, StyleSheet} from 'react-native';
import HeaderComp from '../component/headerComp';

const Home = ({navigation}) => {
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    Axios.get('https://api.jsonbin.io/b/603deef49342196a6a6b6e4d', {
      headers: {
        'secret-key':
          '$2b$10$XVA6uIeILpiXpxqgFYx8n.IklrVk1TdSlHLc8EaCP9AI89VcehrCS',
      },
    })
      .then((res) => {
        setData(res.data.Global);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  Axios.get('https://api.jsonbin.io/b/603deef49342196a6a6b6e4d', {
    headers: {
      'secret-key':
        '$2b$10$XVA6uIeILpiXpxqgFYx8n.IklrVk1TdSlHLc8EaCP9AI89VcehrCS',
    },
  });

  return (
  <View style={{flex: 1}}>

      <HeaderComp title="covid-19" navigation={navigation} />
    <View style={{flex: 1, padding: 20}}>
      <Text style={{marginVertical: 10}}>Coronavirus Live Update</Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginVertical: 10,
        }}>
        <View style={styles.box}>
          <Text style={{textAlign: 'center'}}>Total</Text>
          <View style={{height: 1, backgroundColor:'gray', marginVertical: 5}}/>
          <Text  style={{textAlign: 'center'}}>{data.TotalConfirmed}</Text>
          <Text  style={{textAlign: 'center'}}>+ {data.NewConfirmed}</Text>
        </View>
        <View style={styles.box}>
          <Text style={{textAlign: 'center'}}>Recovered</Text>
          <View style={{height: 1, backgroundColor:'gray', marginVertical: 5}}/>
          <Text  style={{textAlign: 'center'}}>{data.TotalRecovered}</Text>
          <Text  style={{textAlign: 'center'}}>+ {data.NewRecovered}</Text>
        </View>
        <View style={styles.box}>
          <Text style={{textAlign: 'center'}}>Deaths</Text>
          <View style={{height: 1, backgroundColor:'gray', marginVertical: 5}}/>
          <Text  style={{textAlign: 'center'}}>{data.TotalDeaths}</Text>
          <Text  style={{textAlign: 'center'}}>+ {data.NewDeaths}</Text>
        </View>
      </View>
      <Text>Health Tips</Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginVertical: 10,
        }}>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginVertical: 10,
        }}>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </View>
    </View>
</View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default Home;
