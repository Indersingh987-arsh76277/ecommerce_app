import api from "../api/index";
import { 
    GET_ALL_PRODUCTS_FAILED,
    GET_ALL_PRODUCTS_LOADING,
    GET_ALL_PRODUCTS_SUCCESS
} from "./types";

export const getAllProducts=()=>async (dispatch)=>{
    // console.log("here");
    try{
        dispatch({type:GET_ALL_PRODUCTS_LOADING,payload:{loading:true}});
        api.get('/api/db/getAllProducts').then((response)=>{
            dispatch({type:GET_ALL_PRODUCTS_SUCCESS,payload:{products:response.data,loading:false}});
        }).catch(err=>{
            dispatch({type:GET_ALL_PRODUCTS_FAILED,payload:{errors:err.response.data,loading:false}});
        })
    }
    catch(err){
        console.log(err);
    }
}