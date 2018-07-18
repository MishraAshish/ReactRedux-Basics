import React from "react";
import {connect} from "react-redux";
import {Router, Route,  IndexRoute, IndexLink, Link, browserHistory} from "react-router";

import { Root } from "../components/Root";
import User from "../components/User";
import { Home } from "../components/Home";
import { Contact } from "../components/Contact";

export default class App extends React.Component {
    render(){
        return(
            <Router history={browserHistory}> 
                <Route path={"/"} component={Root}>
                    <IndexRoute component={Home} />                    
                    <Route path={"user"} component={User} title={"User Page"}/>
                    <Route path={"home"} component={Home} title={"Home Page"}/>
                    <Route path={"contact"} component={Contact} title={"Contact Page"}/>                    
                </Route>                
            </Router>
        )
    }
}