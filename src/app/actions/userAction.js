//import { resolve } from "dns";
//import { rejects } from "assert";
import { setTimeout } from "timers";
import { resolve } from "url";

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
    // return{
    //     type : "SET_NAME",
    //     payload: new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(name);
    //         },3000)
    //     })        
    // }; 
    return{
        type : "SET_NAME",
        payload: {
                promise: new Promise((resolve, reject) => { 
                    fetch("http://localhost:8082/api/getdoctor", {
                        method: 'GET',
                        headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json'
                        }
                        //,body: JSON.stringify({ email: email, password: password})
                    }
                    ).then(                
                        response => response.json(),
                        error => console.log('An error occurred.', error)
                    ).then(json => {
                        // want to updatePath for the route here:
                        //dispatch(updatePath('/'));
                        resolve(json[6]["Desc"]);
                    })
                    .catch(error => {
                        reject(error);
                        //dispatch(error);
                    })
                })
            }       
    }; 
}

export function setAge(number){
    return{
        type:"SET_AGE",
        payload:number
    }
}