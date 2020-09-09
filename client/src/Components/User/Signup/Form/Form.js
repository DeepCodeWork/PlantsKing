import React, { useState } from 'react';
import Classes from './Form.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../../../Store/actions/alert';
import { register } from '../../../../Store/actions/auth';

const SignupForm = (props) => {

    const [values, setValues] = useState({
        name:'',
        email:'',
        mobile:'',
        password:'',
        confirmPassword:'',
        error:'',
        success:false, 
        myStyle:{}
    });

    const handleChange = (attribute) => event => {
        setValues({ ...values, error: false, [attribute]: event.target.value})
    }

    const { name, email, password, mobile, confirmPassword } = values;

    const clickSubmit = event => {
        
        event.preventDefault();
        if( password !== confirmPassword )
            props.setAlert( 'The passwords do not match', 'danger' );
        else   
            props.register({name, email, mobile, password})
           
    }


    return(
        <div className={"card text-center card-form h-100 "+Classes.form}>
                <div className="card-body">
                    <div className="card-title"><h4 className="display-4">Sign Up</h4></div>
                        <div className="pt-1">
                        <form>
                            <div className="form-group">
                                <input className="form-control form-control-md" type="text" 
                                    onChange={handleChange('name')}  placeholder="Name" value={name}/>
                            </div>

                            <div className="form-group">
                                <input className="form-control form-control-md" type="email" 
                                    onChange={handleChange('email')} placeholder="Email" value={email}/>
                            </div>

                            <div className="form-group">
                                <input className="form-control form-control-md" type="text"
                                    onChange={handleChange('mobile')} placeholder="Mobile" value={mobile}/>
                            </div>

                            <div className="form-group">
                                <input className="form-control form-control-md" type="password" 
                                    onChange={handleChange('password')} placeholder="Password" value={password}/>
                            </div>

                            <div className="form-group">
                                <input className="form-control form-control-md" type="password" onChange={handleChange('confirmPassword')} 
                                style={values.myStyle} placeholder="Confirm Password" value={confirmPassword}/>
                            </div>

                            <div className="form-group">
                                <button className="btn btn-outline-light btn-block" onClick={clickSubmit}>Sign Up!</button>
                            </div> 
                        </form>

                        <div className="pt-2">
                            <p>Already Registered? <Link to='/signin' style={{color:'#1f5673'}}>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default connect( null, {setAlert, register} )(SignupForm);