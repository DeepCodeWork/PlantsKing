import React from 'react';
import { Link } from 'react-router-dom';
//import {button, buttonGroup } from '@material-ui/core';

export const AdminBar = () => (
    <div style={{background:"none"}}>
        <Link to='/'><button style={{background:"none", border:"none", color:'#fff', outline:'none'}}>Home</button></Link>
        <Link to='/admin/product'><button style={{background:"none", border:"none", color:'#fff', outline:'none'}}>Products</button></Link>
        <Link to='/admin/category'><button style={{background:"none", border:"none", color:'#fff', outline:'none'}}>Category</button></Link>
        <Link to='/admin/users'><button style={{background:"none", border:"none", color:'#fff', outline:'none'}}>Users</button></Link>
    </div>     
)

export const AdminBarMobile = () => (
    <div className="btn-group-vertical" style={{background:"none"}}>
        <Link to='/'><button style={{background:"none", border:"none", color:'red', outline:'none'}}>Home</button></Link>
        <Link to='/admin/product'><button style={{background:"none", border:"none", color:'#red', outline:'none'}}>Products</button></Link>
        <Link to='/admin/category'><button style={{background:"none", border:"none", color:'#red', outline:'none'}}>Category</button></Link>
        <Link to='/admin/users'><button style={{background:"none", border:"none", color:'#red', outline:'none'}}>Users</button></Link>
    </div>  
)