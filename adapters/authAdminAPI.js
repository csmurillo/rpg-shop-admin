import { API } from '../config';

export const signup = userData =>{
    console.log(`${API} API API`); 
    return fetch(`http://localhost:3003/api/owner/signup/`, {
        method:'POST',
        headers: {
            Accept:'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(res=>{return res.json()})
    .catch(err=>{console.log(err);})
};  
