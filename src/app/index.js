import React from "react";
import {render} from "react-dom";
import {createStore, combineReducers, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import App from "./components/App";

const initialState = {
    result: 1,
    lastValues:[],
    username:"Ashish"
};

const mathReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };              
            break;
        case "MULTIPLY":
            state = {
                ...state,
                result: state.result * action.payload,
                lastValues: [...state.lastValues, action.payload]
            };            
            break;
    
        default:
            break;
    }
    return state;
}

const userReducer = (state = {
    name:"Ashish",
    age:29
}, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload
            };              
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            };            
            break;
    
        default:
            break;
    }
    return state;
}

const myLogger = (store) => (next) => (action) => {
    console.log("Logged Action", action);
    next(action);
};

const store = createStore(combineReducers(
    {mathReducer, userReducer}), 
    {}, applyMiddleware(myLogger)
);

store.subscribe(() => {
    console.log("store updated!" + JSON.stringify(store.getState()));
});

render(
        <Provider store={store}>
            <App />
        </Provider>, 
    window.document.getElementById('app')
);