//import { resolve } from "dns";
//import { rejects } from "assert";
import { setTimeout } from "timers";

export function setName(name){
    // return dispatch =>{
    //     setTimeout( () => {
    //         dispatch({
    //             type:"SET_NAME",
    //             payload:name
    //         })
    //     }
    //     ,3000);
    // }
    return{
        type : "SET_NAME",
        payload: new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(name);
            },3000)
        })        
    }; 
}

export function setAge(number){
    return{
        type:"SET_AGE",
        payload:number
    }
}