import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from "./loginactionType";
import Cookies from 'js-cookie'
export const loginRequest =() =>({
    type: LOGIN_REQUEST
})
 
export const loginSuccess =(userData) =>({
    type: LOGIN_SUCCESS,
    payload: userData
})
 
export const loginFail =(error) =>({
    type: LOGIN_FAIL,
    payload: error
})
 
export const LoginUser =(values) =>{ 
    return async(dispatch)=>{
        dispatch(loginRequest())
        try {
            const response = await fetch("localhost:3100/auth/login",{
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify({
                    email: values.email,
                    password: values.password
                }),
            });
            if(!response.ok){
                throw new Error('Login Failed')
            }
            const data = await response.json();
            dispatch(loginSuccess(data))
            if(data){
                Cookies.set('token',data.token)
                Cookies.set('Role', data.roleId)
            }
            return true
        } catch (error) {
            dispatch(loginFail());
            console.log(error, "errors");
            return false;
        }
    }
}
 