import axios from 'axios';
import * as Types from '../actions/types'
import { setAlert } from './alert';
import { API } from '../../Config/Config';

export const register = (user) => async dispatch => {

    const config = {
        headers:{
            'Content-Type' : 'application/json'
        }
    }

    const body = JSON.stringify(user);

    try {
        const res = await axios.post(`${API}/user`, body, config);

        dispatch({
            type: Types.REGISTER_SUCCESS,
            payload : res.data
        })

    } catch (error) {
       console.log(error)
;
        dispatch({
            type : Types.REGISTER_FAIL
        })
    }

}

export const LoginUser = (user) => async dispatch => {

    const config = {
        headers:{
            'Content-Type' : 'application/json'
        }
    }

    const body = JSON.stringify(user);

    try {
        const res = await axios.post(`${API}/user/login`, body, config);

        dispatch({
            type: Types.LOGIN_SUCCESS,
            payload : res.data
        })

    } catch (error) {
       console.log(error)
;
        dispatch({
            type : Types.LOGIN_FAILURE
        })
    }
}
