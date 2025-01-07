// import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL } from "./registrationactionType";

// export const RegisterRequest = () => ({
//     type: REGISTER_REQUEST
// })

// export const RegisterSuccess = (registeredUser) => ({
//     type: REGISTER_SUCCESS,
//     payload: { registeredUser }
// })

// export const RegisterFail = (error) => ({
//     type: REGISTER_FAIL,
//     payload: error
// })

// export const registerUser = (value) => {
//     return async (dispatch) => {
//         dispatch(RegisterRequest())
//         try {
//             const res = await fetch("https://cd5c-2405-201-5023-4855-988f-9067-2c7b-c77d.ngrok-free.app/auth/register", {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     name: value.name,
//                     phNo: value.phNo,
//                     email: value.email,
//                     password: value.password
//                 }),
//             })
//             console.log({
//                 name: value.name,
//                 phNo: value.phNo,
//                 email: value.email,
//                 password: value.password
//               });
              
//             console.log(res)
//             const data = await res.json();
//             if (res.status === 204) {
//                 console.log('Registration Successful');
//                 dispatch(RegisterSuccess(data));  // or dispatch success without data
//               }
//             // dispatch(RegisterSuccess(data))
//             console.log(data, "Registration Successful");
//             return true
//         } catch (error) {
//             dispatch(RegisterFail());
//             console.log(error, "errors");
//             return false;
//         }
//     }

// }


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
    dispatch(RegisterRequest());  // Corrected dispatch
    try {
      const res = await fetch("https://cd5c-2405-201-5023-4855-988f-9067-2c7b-c77d.ngrok-free.app/auth/register", {
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
      const data = await res.json();  // Corrected async handling of JSON
      
      if (res.status === 204) {
        console.log('Registration Successful');
        dispatch(RegisterSuccess(data));  // Handle the successful registration
        return true;
      }
      
      dispatch(RegisterSuccess(data));  // handle response data if needed
      console.log(data, "Registration Successful");
      return true;
      
    } catch (error) {
      dispatch(RegisterFail(error));  // Corrected dispatch with error
      console.log(error, "errors");
      return false;
    }
  };
};
