import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signin from './Components/User/Signin/Signin';
import Signup from './Components/User/Signup/Signup';
import Home from './Components/Core/Home/Home';
import Navbar from './Components/Core/Navbar/Navbar';
import Dashboard from './Components/User/UserDashboard/UserDashboard';
import PrivateRoute from './Auth/PrivateRoute';
import AdminPanel from './Components/Admin/Dashboard/Dashboard';
import Category from './Components/Admin/Category/Category';
import Product from './Components/Admin/Product/Product';
import Navb from './Components/Core/Navbar/sample/Sample';

const Routes = () => {
    return(
        <BrowserRouter>
            <Navb/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/signin" exact component={Signin}/>
                <Route path="/signup" exact component={Signup}/>
                <PrivateRoute path="/dashboard" exact component={Dashboard}/>

                {/* ADMIN ROUTES */}
                <PrivateRoute path="/admin" exact component={AdminPanel}/>
                <PrivateRoute path="/admin/category" exact component={Category}/>
                <PrivateRoute path="/admin/product" exact component={Product}/>

            </Switch>
        </BrowserRouter>
    )
}

export default Routes;