import React, { useState } from 'react';
import Classes from './Form.module.css';
import axios from 'axios';
import { API } from '../../../../Config/Config';
import { Link, Redirect } from 'react-router-dom';

const SigninForm = (props) => {

    const [values, setValues] = useState({
        email:'',
        password:''
    });

    const {email, password} = values;

    const handleChange = (attribute) => event => {
        setValues({ ...values, error: false, [attribute]: event.target.value})
    }  

    const authenticate = (data, next) => {
        if( typeof window !== 'undefined'){
            localStorage.setItem('token', JSON.stringify(data));
        }

        next();
    }

    const userLogin = async (user) => {

        const url = `${API}/user/login`;
        const body = JSON.stringify(user);
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        };

        axios.post( url, body, config )
            .then(res =>{
                console.log(res.data.data.token);
                authenticate(res.data.data, ()=>(
                    <Redirect to={{ pathname: '/dashboard'}}  />

                ))
            }).catch(err=>{
                console.log(err);
            })

    }

    const clickSubmit = (event) => {
        
        event.preventDefault();
        
        userLogin({email, password});
    }


    return(
        <div className={"card text-center card-form h-100 "+Classes.form}>
                <div className="card-body">
                    <div className="card-title py-4"><h3 className="display-4">Login</h3></div>
                    <div className="pt-4">
                        <form>
                            <div className="form-group">
                                <input className="form-control form-control-lg" type="email" placeholder="Email" onChange={handleChange('email')}/>
                            </div>

                            <div className="form-group">
                                <input className="form-control form-control-lg" type="password" name="" id="" placeholder="password" onChange={handleChange('password')}/>
                            </div>
                            
                            <div className="form-group">
                                <button className="btn btn-outline-light btn-block" onClick={clickSubmit}>Login!</button>
                            </div> 
                        </form>

                        <div className="mt-5 pt-5">
                            <p>Not Registered? <Link to='/signup' style={{color:'#1f5673'}}>SignUp</Link></p>
                        </div>
                    </div>
                </div>
            </div>
    )
}


export default SigninForm ;

