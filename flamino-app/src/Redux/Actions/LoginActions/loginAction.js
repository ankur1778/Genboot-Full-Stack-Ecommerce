import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from "./loginactionType";
 
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
 
export const loginUser =(values) =>{   
    return async(dispatch)=>{
        dispatch(loginRequest())
        try {
            const response = await fetch("https://cd5c-2405-201-5023-4855-988f-9067-2c7b-c77d.ngrok-free.app/auth/login",{
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
                localStorage.setItem('token', data.token)
            }
            return true
        } catch (error) {
            dispatch(loginFail());
            console.log(error, "errors");
            return false;
        }
    }
}
 