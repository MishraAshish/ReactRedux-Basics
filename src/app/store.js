import {createStore, combineReducers, applyMiddleware} from "redux";

import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

const myLogger = () => (next) => (action) => {
    console.log("Logged Action", action);
    next(action);
};

export default createStore(
    combineReducers({
        user,
        math        
    }), 
    {}, 
    applyMiddleware(myLogger, thunk, promise())
);