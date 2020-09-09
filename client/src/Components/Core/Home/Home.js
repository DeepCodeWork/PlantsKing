import React, { useState, useEffect } from 'react';
import { getProducts } from '../Api/ApiCore';
import ProductCard from '../ProductCard/ProductCard';
import SideBar from '../Sidebar/SideBar';

const Home = () => {

    const [productBySell, setProductBySell] = useState([]);
    const [productByArrival, setProductByArrival] = useState([]);
    const [error, setError] = useState([]);

    const loadProductsBySell = () => {
        getProducts('sold').then(data => {
            if(data.status === 0)
                setError(data.message);
            else   
                setProductBySell(data.data.products)
        })
    }

    const loadProductsByArrival = () => {
        getProducts('createdAt').then(data => {
            if(data.status === 0)
                setError(data.message);
            else   
                setProductByArrival(data.data.products)
        })
    }

    useEffect(()=>{
        // loadProductsBySell();
        // loadProductsByArrival();
    },[])

    return(

    <div className="container-fluid">
        {/* <div className="row">
            <div className="d-flex flex-row">
                <div className="col-lg-4">
                    <button className="btn-primary">toggle</button>
                        
                    </div>
                <div className="col-lg-8">   
                    Check
                </div>
            </div>
        </div> */}
    </div>
    )
}
// {
//     productBySell.map((product, index)=>(<ProductCard product={product} key={index}/>))
// }
export default Home;