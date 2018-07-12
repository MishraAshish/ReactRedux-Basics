// import React from "react";
// import {render} from "react-dom";

// import { User } from './components/User';
// import { Main } from './components/Main';

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             username: "Max"
//         };
//     }

//     changeUsername(newName) {
//         this.setState({
//             username: newName
//         });
//     }

//     render() {
//         return (
//             <div className="container">
//                 <Main changeUsername={this.changeUsername.bind(this)}/>
//                 <User username={this.state.username}/>
//             </div>
//         );
//     }
// }

// render(<App />, window.document.getElementById('app'));

// https://www.youtube.com/watch?v=ZKCYqJu4n3s&list=PL55RiY5tL51rrC3sh8qLiYHqUV3twEYU_&index=3
import {createStore, combineReducers, applyMiddleware} from "redux";

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

const store = createStore(combineReducers({mathReducer, userReducer}), {}, applyMiddleware(myLogger));

store.subscribe(() => {
    console.log("store updated!" + JSON.stringify(store.getState()));
})

store.dispatch({
    type:"ADD",
    payload:10
});

store.dispatch({
    type:"ADD",
    payload:111
});

store.dispatch({
    type:"MULTIPLY",
    payload:10
});

store.dispatch({
    type:"SET_NAME",
    payload:"Ashish Mishra"
});

store.dispatch({
    type:"SET_AGE",
    payload:30
});