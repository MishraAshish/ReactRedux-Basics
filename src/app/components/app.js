import React from "react";
import {connect} from "react-redux";

import { User } from './User';
import { Main } from './Main';

class App extends React.Component {
    constructor() {
        super();        
    }

    changeUsername(newName) {
        // this.setState({
        //     username: newName
        // });
    }

    render() {
        return (
            <div className="container">
                <Main changeUsername={() => this.props.setname("TrueValue")}/>
                <User username={this.props.user.username}/>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        user:state.mathReducer,
        math:state.userReducer
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        setname : (name) =>{
            dispatch({
                type:"SET_NAME",
                payload:name
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);