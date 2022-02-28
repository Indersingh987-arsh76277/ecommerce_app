import {
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    LOGIN_LOADING,
    REGISTER_LOADING,
    REGISTER_SUCCESS,
    REGISTER_FAILED
} from "../actions/types"

const reducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_LOADING:
            return action.payload;
        case LOGIN_SUCCESS:
            return action.payload;
        case LOGIN_FAILED:
            return action.payload;
        case REGISTER_LOADING:
            return action.payload;
        case REGISTER_SUCCESS:
            return action.payload;
        case REGISTER_FAILED:
            return action.payload;
        default:
            return state;
    }
}

export default reducer;