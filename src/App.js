import React from 'react';
import Navbar from "./Navbar/Navbar"
import Domicilian from "./Domiciliation/Domiciliation"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Home from "./Home/Home"
import SignUp from './User/SignUp'
import Login from './User/login'

let App=()=> {
    return (
        <>
            <Router>
            <Navbar/>
                <Switch>
                    <Route path="/domiciliation" component={Domicilian}/>
                    <Route path='/' component={Home}/>              
                    <Route exact path="/signup" component={SignUp}/>
                    <Route path="/signin" component={Login}/>
                </Switch>
            </Router> 
           
        </>
    )
}

export default App;