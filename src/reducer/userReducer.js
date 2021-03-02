const INITIALSTATE = {
    username: ''
}

export const userReducer = (state = INITIALSTATE, action) => {
    switch (action.type) {
        case 'LOGIN' :
            return {
                ...state,
                username: action.payload
            }
        case 'LOGOUT' : 
            return INITIALSTATE
            default :
            return state
        
    }
}