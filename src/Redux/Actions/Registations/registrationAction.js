import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL } from "./registrationactionType";

export const RegisterRequest = () => ({
  type: REGISTER_REQUEST
});

export const RegisterSuccess = (registeredUser) => ({
  type: REGISTER_SUCCESS,
  payload: { registeredUser }
});

export const RegisterFail = (error) => ({
  type: REGISTER_FAIL,
  payload: error
});

export const registerUser = (value) => {
  return async (dispatch) => {
    dispatch(RegisterRequest());
    try {
      const res = await fetch("http://localhost:3100/auth/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: value.name,
          phNo: value.phNo,
          email: value.email,
          password: value.password
        }),
      });
      
      console.log({
        name: value.name,
        phNo: value.phNo,
        email: value.email,
        password: value.password
      });
      
      console.log(res);
      const data = await res.json();
      
      if (res.status === 204) {
        console.log('Registration Successful');
        dispatch(RegisterSuccess(data));  
        return true;
      }
      
      dispatch(RegisterSuccess(data));  
      console.log(data, "Registration Successful");
      return true;
      
    } catch (error) {
      dispatch(RegisterFail(error)); 
      console.log(error, "errors");
      return false;
    }
  };
};
