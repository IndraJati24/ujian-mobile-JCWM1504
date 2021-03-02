import asyncStorage from '@react-native-async-storage/async-storage'
import Axios from 'axios'

export const login =(data) => {
    return async(dispatch) => {
        try{
            await asyncStorage.setItem('username' , data)
            dispatch({type: 'LOGIN', payload: data})
        }
        catch(err){
            console.log(err)
        }
    }
}

export const logout =() => {
    return async(dispatch) => {
        try{
            await asyncStorage.removeItem('username')
            dispatch({type: 'LOGOUT'})
        }
        catch(err){
            console.log(err)
        }
    } 
}

export const keepLogin =()=>{
    return async(dispatch)=>{
        try{
            const data = await asyncStorage.getItem('username')
            dispatch({type: 'LOGIN', payload: data})
        }
        catch(err){
            console.log(err)
        }
    }
}