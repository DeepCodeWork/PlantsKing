import React, { useState, useEffect } from 'react';
import {isAuthenticated} from '../../../../Auth/Auth';
import Axios from "axios"
import { API } from '../../../../Config/Config';

const AddProduct = () => {

    const { token, user } = isAuthenticated();

    const [ values, setValues] = useState({
        name: '',
        description:'',
        price: '',
        categories: [],
        category: '',
        shipping: '',
        quantity: '',
        image : '',
        loading: false,
        error: '',
        createdProduct: '',
        redirectToProfile: false,
        formData: ''

    })

    const {
        name,
        description,
        price,
        categories,
        category,
        shipping,
        quantity,
        image,
        loading,
        error,
        createdProduct,
        redirectToProfile,
        formData
    } = values;

    const createProduct = async ( userId ,token, product ) => {

        const body = product
    
        const config = {
            headers: {
                Accept :'application/json',
                Authorization : `Bearer ${token}`
            }
        }
    
        Axios.post(`${API}/product/create/${userId}`, body, config)
            .then(res => {
                if(res.data.status==0){
                    console.log(res.data.message)
                }else{
                    console.log(res.data.data)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const showSuccess = () => {
        if(0){return <div className="alert alert-success" role="alert">{name} category is created.</div> }
    }

    const showError = () => {
        if(0){ return <div className="alert alert-danger" role="alert">{name} category is already registered.</div> }
    }


    //Fetch category*/*/*/*/*/*/

    const getCategories = async () => {

        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
    
        Axios.get(`${API}/category`, config)
            .then(res => {
                setValues({
                    ...values,
                    categories:res.data.data.categories,
                    formData: new FormData()
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    // const init = () => {
    //     getCategories()
    //         .then(data=> console.log("CATEGORY: "+data))
    // }

    useEffect(()=>{
        getCategories();
    },[])


    const handleChange = (name) => event => {
        const value = name ==='image' ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value})
    }

    const clickSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, error: "", loading: true})
        createProduct(user._id, token, formData);

    }

    const newProductForm = () => (
        <div>
            <div>
                {showSuccess()}
                {showError()}
            </div>
             <form>
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="Product Name" 
                        onChange={handleChange('name')} value={name} required autoFocus/>
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="price" 
                        onChange={handleChange('price')} value={price} required />
                </div>
                <div className="form-group">
                    <input className="form-control" type="name" placeholder="shipping" 
                        onChange={handleChange('shipping')} value={shipping} required />
                </div>
                <div className="form-group">
                    <input className="form-control" type="name" placeholder="quantity" 
                        onChange={handleChange('quantity')} value={quantity} required />
                </div>
                <div className="form-group">
                    <input className="form-control" type="file" name="image" accept="image/*" 
                    placeholder="Image" onChange={handleChange('image')} required />
                </div>
                <div className="form-group">
                    <textarea className="form-control" type="name" placeholder="Description" 
                        onChange={handleChange('description')} value={description} required />
                </div>
                <div className="form-group">
                    <label className="text-muted">Category</label>
                    <select onChange={handleChange('category')} className="form-control">
                    <option>Please Select</option>
                    { categories && categories.map((item, index)=>(<option id={index} value={item._id}>{item.name}</option>))}

                    </select>
                </div>
                <div className="form-group">
                    <button className="btn btn-outline-primary" onClick={clickSubmit}>Add Category</button>
                </div> 

            </form>
        </div>
    )

    return(
        <div>
            {newProductForm()}
        </div>
    )
}

export default AddProduct;