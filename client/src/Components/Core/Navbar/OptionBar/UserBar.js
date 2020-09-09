import React from 'react';
import { Link } from 'react-router-dom';
//import {button, buttonGroup } from '@material-ui/core';

export const UserBar = () => (
    <div style={{background:"none"}}>
        <Link to='/'><button style={{background:"none", border:"none", color:'#fff', outline:'none'}}>Home</button></Link>
        <Link to='/signin'><button style={{background:"none", border:"none", color:'#fff', outline:'none'}}>Signin</button></Link>
        <Link to='/signup'><button style={{background:"none", border:"none", color:'#fff', outline:'none'}}>Signup</button></Link>
    </div>     
)

export const UserBarMobile = () => (
    <div className="btn-group-vertical" style={{background:"none"}}>
        <Link to='/'><button style={{background:"none", border:"none", color:'#red', outline:'none'}}>Home</button></Link>
        <Link to='/signin'><button style={{background:"none", border:"none", color:'#red', outline:'none'}}>Signin</button></Link>
        <Link to='/signup'><button style={{background:"none", border:"none", color:'#red', outline:'none'}}>Signup</button></Link>
    </div>  
)