import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {useDispatch, useSelector} from 'react-redux'
import Login from '../screen/login'
import DrawerScreen from './drawer'
import {keepLogin} from '../action'


const MainNavigation =()=>{
const dispatch = useDispatch()
const {username} = useSelector((state)=>{
    return{
        username: state.user.username
    }
}) 

React.useEffect(()=>{
    dispatch(keepLogin())
},[])

    const Stack = createStackNavigator()
    return(
        <Stack.Navigator>
            {username ? (
                <Stack.Screen name='home' component={DrawerScreen} options={{headerShown: false}}/>
            ) : (
                <Stack.Screen name="login" component={Login}/>
            )}
           
        </Stack.Navigator>
    )
}

export default MainNavigation