import React, { useState } from 'react';
import Classes from './Form.module.css';
import { API } from '../../../Config/Config';

const SignupForm = () => {

    const [values, setValues] = useState({
        name:'',
        email:'',
        mobile:'',
        password:'',
        confirmPassword:'',
        error:'',
        success:false
    });

    const handleChange = (attribute) => event => {
        setValues({ ...values, error: false, [attribute]: event.target.value})
    }

    const { name, email, password, mobile } = values;

    const registerUser = () => {
        fetch(`${API}/signup`,{
            method: postMessage,
            header: {
                Accept: 'application/'
            }
        })
    }

    const clickSubmit = event => {
        event.preventDefault();
        console.log(name, email, mobile, password)
    }


    return(
        <div className={"card text-center card-form h-100 "+Classes.form}>
                <div className="card-body">
                    <div className="card-title"><h4 className="display-4">Sign Up</h4></div>
                        <div className="pt-1">
                        <form>
                            <div className="form-group">
                                <input className="form-control form-control-md" type="text" 
                                    onChange={handleChange('name')} placeholder="Name"/>
                            </div>

                            <div className="form-group">
                                <input className="form-control form-control-md" type="email" 
                                    onChange={handleChange('email')} placeholder="Email"/>
                            </div>

                            <div className="form-group">
                                <input className="form-control form-control-md" type="text"
                                    onChange={handleChange('mobile')} placeholder="Mobile"/>
                            </div>

                            <div className="form-group">
                                <input className="form-control form-control-md" type="password" 
                                    onChange={handleChange('password')} placeholder="Password"/>
                            </div>

                            <div className="form-group">
                                <input className="form-control form-control-md" type="password"  
                                    onChange={handleChange('confirmPassword')} placeholder="Confirm Password"/>
                            </div>

                            <div className="form-group">
                                <button className="btn btn-outline-light btn-block" onClick={clickSubmit}>Sign Up!</button>
                            </div> 
                        </form>

                        <div className="pt-2">
                            <p>Already Registered? Login</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default SignupForm;