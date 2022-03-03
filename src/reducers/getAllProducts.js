import {
    GET_ALL_PRODUCTS_LOADING,
    GET_ALL_PRODUCTS_FAILED,
    GET_ALL_PRODUCTS_SUCCESS
} from '../actions/types';

const reducer = (state={},action)=>{
    switch (action.type){
        case GET_ALL_PRODUCTS_LOADING:
            return action.payload;
        case GET_ALL_PRODUCTS_FAILED:
            return action.payload;
        case GET_ALL_PRODUCTS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}

export default reducer;