import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL } from "../Actions/Registations/registrationactionType";

const initialstate = {
    registeredUser: {},
    isLoading: false,
    isError: false
}

export const registerSlice = (state = initialstate, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return {
                ...state,
                registeredUser: {},
                isLoading: true,
                isError: false
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                registeredUser: action.payload.registeredUser,
                isLoading: false,
                isError: false
            }
        case REGISTER_FAIL:
            return {
                ...state,
                registeredUser: {},
                isLoading: false,
                isError: true
            }
        default:
            return state
    }
}

export default registerSlice;