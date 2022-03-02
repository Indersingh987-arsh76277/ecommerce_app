import api from "../api"
import {
    SEARCH_PRODUCT_FAILED,
    SEARCH_PRODUCT_LOADING,
    SEARCH_PRODUCT_SUCCESS
} from "./types"


export const search = (query,navigate) => async (dispatch) => {
    try {
        dispatch({type:SEARCH_PRODUCT_LOADING,payload:{loading:true}});
        
    } catch (error) {
        console.log(error);
    }
}