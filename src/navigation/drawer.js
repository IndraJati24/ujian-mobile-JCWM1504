import React from 'react'
import{createDrawerNavigator} from '@react-navigation/drawer'
import HomeTab from './homeTab'
import Logout from '../screen/logout'

const DrawerScreen =()=>{
    const Drawer = createDrawerNavigator()
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='Feed' component={HomeTab}/>
            <Drawer.Screen name='Account' component={Logout}/>
        </Drawer.Navigator>
    )
}

export default DrawerScreen