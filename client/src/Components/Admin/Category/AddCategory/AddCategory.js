import React, { useState } from 'react';
import {isAuthenticated} from '../../../../Auth/Auth';
import { createCategory } from '../../apiAdmin/apiAdmin';
import Axios from "axios"
import { API } from '../../../../Config/Config';

const AddCategory = () => {


    const [name, setName] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    //destructure user and token 
    const { user, token } = isAuthenticated();

    const handleChange = (e) => {
        setError('');
        setName(e.target.value)
    }

    const createCategory = async (token, category) => {

        const body = {
            name:category
        }
        console.log(token);
    
        const config = {
            headers: {
                'Content-Type':'application/json',
                Authorization : `Bearer ${token}`
            }
        }
    
        Axios.post(`${API}/category`, body, config)
            .then(res => {
                if(res.data.status==0){
                    setError(true)
                    setSuccess(false)
                }else{
                    setSuccess(true)
                    setError(false)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const clickSubmit = async(e) => {
        e.preventDefault();
        setError('')
        setSuccess(false)

        //Calling API
       createCategory(token, name)
            
            

    }

    const showSuccess = () => {
        if(success){return <div className="alert alert-success" role="alert">{name} category is created.</div> }
    }

    const showError = () => {
        if(error){ return <div className="alert alert-danger" role="alert">{name} category is already registered.</div> }
    }
    
    

    const newCategoryForm = () => (
        <div>
            <div>
                {showSuccess()}
                {showError()}
            </div>
             <form>
                <div className="form-group">
                    <input className="form-control form-control" type="name" placeholder="Category Name" onChange={handleChange} required autoFocus/>
                </div>
                <div className="form-group">
                    <button className="btn btn-outline-primary" onClick={clickSubmit}>Add Category</button>
                </div> 
            </form>
        </div>
    )

    return (
        <div>
            checke
            {newCategoryForm()}
        </div>
    )
}

export default AddCategory;