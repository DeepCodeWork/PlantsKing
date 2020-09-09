import Axios from "axios"
import { API } from "../../../Config/Config"

export const createCategory = async (userId, token, category) => {

    const body = {
        name:category
    }

    const config = {
        headers: {
            'Content-Type':'application/json',
            Authorization : `Bearer ${token}`
        }
    }

    Axios.post(`${API}/category`, body, config)
        .then(data => {
            console.log('data: ', data.data)
            return data.data;
        })
        .catch(err => {
            console.log(err)
        })
}

export const getCategories = async () => {

    const config = {
        headers: {
            'Content-Type':'application/json'
        }
    }

    Axios.get(`${API}/category`, config)
        .then(data => {
            console.log('data: ', data.data)
            return data.data;
        })
        .catch(err => {
            console.log(err)
        })
}