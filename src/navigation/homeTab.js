import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Home from '../screen/home'
import Live from '../screen/live'

const HomeTab = ()=> {
    const Tab = createBottomTabNavigator()
    return(
        <Tab.Navigator 
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if (route.name === 'Home-tab') {
                iconName = 'home';
              } else if (route.name === 'Live-tab') {
                iconName = 'table';
              } 
              return <FontAwesome name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'black',
            style :{backgroundColor: 'lightblue'}
          }}
        >
            <Tab.Screen name='Home-tab' component={Home}/>
            <Tab.Screen name='Live-tab' component={Live}/>
        </Tab.Navigator>
    )
}

export default HomeTab