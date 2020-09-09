import React from 'react';
import { Link } from 'react-router-dom';

const ButtonPanel = () => {
    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <Link pathname="/admin"><button type="button" className="btn btn-primary">Home</button></Link>
            <Link pathname="/admin/product"><button type="button" className="btn btn-primary">Products</button></Link>
            <Link pathname="/admin/category"><button type="button" className="btn btn-primary">Category</button></Link>
            <Link pathname="/admin/users"><button type="button" className="btn btn-primary">Users</button></Link>
        </div>
    )
}

export default ButtonPanel;