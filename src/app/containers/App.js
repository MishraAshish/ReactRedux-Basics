import React from "react";
import {connect} from "react-redux";
import {Router, Route,  IndexRoute, IndexLink, Link, browserHistory} from "react-router";

import { Root } from "../components/Root";
import { User } from "../components/User";
import { Main } from "../components/Main";
import {setName} from "../actions/userAction";

class App extends React.Component {
    // render(){
    //     return(
    //         <Router history={browserHistory}> 
    //             <Route path={"/"} component={Root}>
    //                 <IndexRoute component={Main} changeUsername={() => this.props.setName("TrueValue")}/>                    
    //                 <Route path={"user/:name"} component={User} props={{name : this.props.user.name}}/>
    //                 <Route path={"main"} component={Main} changeUsername={() => this.props.setName("TrueValue")}/>
    //             </Route>                
    //         </Router>
    //     )
    // }
    render() {
        return (
            <div className="container">
                <Main changeUsername={() => this.props.setName("TrueValue")}/>
                <User name={this.props.user.name}/>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        user: state.user,
        math: state.math
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName : (name) =>{
            dispatch(setName(name))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);