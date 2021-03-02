import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Button} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const Header = ({title, navigation, isHome}) => {
  return (
    <View
      style={{flexDirection: 'row', height: 50, backgroundColor: 'lightblue'}}>
      <View style={styles.leftHeader}>
        <View style={{marginLeft: 10}}>
          <Button title="Drawer" onPress={() => navigation.openDrawer()} />
        </View>
      </View>
      <View style={{flex: 1.5, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
      </View>
      <View style={styles.rightHeader}>
        <Text>
          <FontAwesome name="bell" size={30}  />
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  rightHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 10
  },
  leftHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
export default Header;
