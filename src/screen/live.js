import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Axios from 'axios';
import {DataTable} from 'react-native-paper';
import HeaderComp from '../component/headerComp';

const Live = ({navigation}) => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    Axios.get('https://api.jsonbin.io/b/603deef49342196a6a6b6e4d', {
      headers: {
        'secret-key':
          '$2b$10$XVA6uIeILpiXpxqgFYx8n.IklrVk1TdSlHLc8EaCP9AI89VcehrCS',
      },
    })
      .then((res) => {
        setData(res.data.Countries);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View style={{height: '80%'}}>
      <HeaderComp title="Live Update" navigation={navigation} />
      <View style={{padding: 10}}>

      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Region</DataTable.Title>
          <DataTable.Title numeric>New Cases</DataTable.Title>
          <DataTable.Title numeric>Total Cases</DataTable.Title>
          <DataTable.Title numeric>Recovered</DataTable.Title>
          <DataTable.Title numeric>Deaths</DataTable.Title>
        </DataTable.Header>
        <ScrollView >
          {data.map((item, index) => {
            return (
              <DataTable.Row key={index}>
                <DataTable.Cell>{item.Country}</DataTable.Cell>
                <DataTable.Cell numeric>{item.NewConfirmed}</DataTable.Cell>
                <DataTable.Cell numeric>{item.TotalConfirmed}</DataTable.Cell>
                <DataTable.Cell numeric>{item.TotalRecovered}</DataTable.Cell>
                <DataTable.Cell numeric>{item.TotalDeaths}</DataTable.Cell>
              </DataTable.Row>
            );
          })}
        </ScrollView>
      </DataTable>
      </View>
    </View>
  );
};

export default Live;
