import React from 'react';
import Aux from '../../Core/Auxi/Aux';
import Classes from './Signup.module.css';
import SignupForm from '../Signup/Form/Form';


const Signup = () => {
    return(
        <Aux>
            <div className="row mt-5 pt-3 no-gutters">   
                <div className="col-lg-8 d-none d-lg-block justify-content">
                    <div className={Classes.homeSection}></div>
                </div>
                <div className="col-lg-4">
                    <SignupForm />
                </div>
            </div>
        </Aux>
    )
}

export default Signup;
