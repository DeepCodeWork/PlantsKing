import React from 'react';
import SigninForm from './Form/Form';
import Aux from '../../../Components/Core/Auxi/Aux';
import { API } from '../../../Config/Config';
import Classes from './Signin.module.css';

const Signin = () => {
    return(
        <Aux>
            <div className="row mt-5 pt-3 no-gutters">   
                <div className="col-lg-8 d-none d-lg-block justify-content">
                    <div className={Classes.homeSection}></div>
                </div>
                <div className="col-lg-4">
                    <SigninForm />
                </div>
            </div>
        </Aux>
    )
}

export default Signin;