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
import {createStore} from "redux";

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            state = state + action.payload;            
            break;
    
        default:
            break;
    }
}

const store = createStore(reducer,1);

store.subscribe(() => {
    console.log("store updated!" + store.getState());
})

store.dispatch({
    type:"ADD",
    payload:10
});