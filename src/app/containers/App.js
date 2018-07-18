import React from "react";
import {connect} from "react-redux";
import {Router, Route,  IndexRoute, IndexLink, Link, browserHistory} from "react-router";

import { Root } from "../components/Root";
import User from "../components/User";
import { Home } from "../components/Home";


export default class App extends React.Component {
    render(){
        return(
            <Router history={browserHistory}> 
                <Route path={"/"} component={Root}>
                    <IndexRoute component={Home} />                    
                    <Route path={"user"} component={User} />
                    <Route path={"home"} component={Home} />
                </Route>                
            </Router>
        )
    }
}