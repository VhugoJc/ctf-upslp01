import {basePath} from './config';

export function signUpApi(id, password){
    const url=`${basePath}/add-new-student`;
    const params ={
        method: "POST",
        headers:{
            "content-Type":"application/json"
        },
        body: JSON.stringify({id:id, password:password})
    };

    return fetch(url, params).then(response=>{
        return response.json();
    }).then(result=>{
        return result
    })
}