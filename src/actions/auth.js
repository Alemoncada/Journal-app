import {types} from '../types/types';

export const startLoginEmailPassword = (email, password) =>{
    return (dispatch)=>{
        setTimeout(() => {

          dispatch(login(12345 , 'Alexis'))  
        
        }, 3500);
        
    }
};

export const login = (uid, displayName)=>({
        type: types.login,
        payload:{
            uid,
            displayName
        }
})