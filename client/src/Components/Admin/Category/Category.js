import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { API } from '../../../Config/Config';
import AddCategory from './AddCategory/AddCategory';

const Category = () => {

    const [categoryList, setCategory] = useState([]);

    const fetchCategories = async () => {

        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }

        const res = await Axios.get(`${API}/category`, config)
        setCategory(categoryList.push([...res.data.data.categories]));
        console.log(categoryList)
    
    }



    useEffect(fetchCategories,[]);



    return(
        <div className="row">
            <div className="col-lg-4">
                <AddCategory />
            </div>
        </div>
    )
}

export default Category;