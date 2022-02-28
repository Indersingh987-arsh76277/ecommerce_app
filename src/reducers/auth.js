import {
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    LOGIN_LOADING
} from "../actions/types"

const reducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_LOADING:
            return action.payload;
        case LOGIN_SUCCESS:
            return action.payload;
        case LOGIN_FAILED:
            return action.payload;
        default:
            return state;
    }
}

export default reducer;