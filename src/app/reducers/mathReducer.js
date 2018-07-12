
const mathReducer = (state = {
    result: 1,
    lastValues:[],
    username:"Ashish"
}, action) => {
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

export default mathReducer;