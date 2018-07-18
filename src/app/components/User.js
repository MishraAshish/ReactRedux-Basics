 import React from "react";
// import {render} from "react-dom";
 import {connect} from "react-redux";
 import {setName} from "../actions/userAction";

class User extends React.Component {
    constructor(props){        
        super();
        // this.state = {
        //     user : props.user
        // }
    }

    render() {    
        return (
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h1>The User Page</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <p>User Name: {this.props.user.name}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <button
                                className="btn btn-primary"
                                onClick={() => this.props.setName("TrueValue")}>Change the Username</button>
                        </div>
                    </div>
                </div>
            );
        }
    } 
    User.propTypes = {

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

export default connect(mapStateToProps,mapDispatchToProps)(User);