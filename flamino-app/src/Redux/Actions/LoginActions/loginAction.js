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
            const response = await fetch("https://f917-2401-4900-1c2b-900f-18bf-8416-2cb3-780d.ngrok-free.app/auth/login",{
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
            console.log(response)
            const data = await response.json();
            dispatch(loginSuccess(data))
            console.log(data, "loginSuccess")
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
 