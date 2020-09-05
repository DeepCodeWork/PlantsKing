import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signin from './Components/User/Signin/Signin';
import Signup from './Components/User/Signup/Signup';
import Home from './Components/Core/Home/Home';
import Navbar from './Components/Core/Navbar/Navbar';

const Routes = () => {
    return(
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/signin" exact component={Signin}/>
                <Route path="/signup" exact component={Signup}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;