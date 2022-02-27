import api from "../api"
import {
    LOGIN_FAILED,
    LOGIN_LOADING,
    LOGIN_SUCCESS
} from "./types"


export const  login = (formData,navigate) => async (dispatch) => {
    try {
        dispatch({type:LOGIN_LOADING,payload:{loading:true}});
        api.post("/api/user/login",formData)
        .then((response)=>{
            dispatch({type:LOGIN_SUCCESS,payload:{userId:response.data?.userId,token:response.data?.token,loading:false}});
            navigate('/');
        })
        .catch((error)=>{
            dispatch({type:LOGIN_FAILED,payload:{errors:error.response?.data,loading:false}});
        })
    } catch (error) {
        console.log(error)
    }
    
}