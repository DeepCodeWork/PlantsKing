import React, { useState } from 'react';
import Classes from './Form.module.css';

const SigninForm = () => {

    const [userState, setUserState] = useState('');

    const emailChangeHandler = (event) => {
        
    }   


    return(
        <div className={"card text-center card-form h-100 "+Classes.form}>
                <div className="card-body">
                    <div className="card-title py-4"><h3 className="display-4">Login</h3></div>
                    <div className="pt-4">
                        <form>
                            <div className="form-group">
                                <input className="form-control form-control-lg" type="email" placeholder="Email" onChange={emailChangeHandler}/>
                            </div>

                            <div className="form-group">
                                <input className="form-control form-control-lg" type="password" name="" id="" placeholder="password"/>
                            </div>
                            
                            <div className="form-group">
                                <button className="btn btn-outline-light btn-block">Login!</button>
                            </div> 
                        </form>

                        <div className="mt-5 pt-5">
                            <p>Not Registered? SignUp</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default SigninForm;

