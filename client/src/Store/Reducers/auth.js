import * as Types from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated : null,
    loading : true,
    user : null
};

export default function(state = initialState, action){

    const { type, payload } = action;
    console.log(payload);

    switch(type){

        case Types.REGISTER_SUCCESS:
            localStorage.setItem('token', payload.data.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading : false,
                user : payload.data.user
            }    

        case Types.REGISTER_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                ...payload,
                isAuthenticated: false,
                loading : false
            }
        
        case Types.LOGIN_SUCCESS:
            console.log("checke loog sussess")
            localStorage.setItem('token', payload.data.token);
            return{
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }

        case Types.LOGIN_FAILURE:
            localStorage.removeItem('token');
            return{
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
            
        default:
            return state
    }
}