import React, { useState, useEffect } from 'react';
import AddProduct from './AddProduct/AddProduct';

const Product = () => {

    return(
        <div className="row">
            <div className="col-lg-4">
                <AddProduct />
            </div>
        </div>
    )
}

export default Product;