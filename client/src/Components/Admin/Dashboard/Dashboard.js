import React from 'react';
import { Link } from 'react-router-dom';
import ButtonPanel from '../ButtonPanel/ButtonPanel';

const AdminPanel = () => {
    return (
        <div className="row">
            <div className="mx-auto mt-5">
            <div className="btn-group" role="group" aria-label="Basic example">
                <Link pathname="/admin"><button type="button" className="btn btn-primary mx-2">Home</button></Link>
                <Link pathname="/admin/product"><button type="button" className="btn btn-primary mx-2">Products</button></Link>
                <Link pathname="/admin/category"><button type="button" className="btn btn-primary mx-2">Category</button></Link>
                <Link pathname="/admin/users"><button type="button" className="btn btn-primary mx-2">Users</button></Link>
            </div>
            </div>
        </div>
    )
}

export default AdminPanel;