import React,{useState} from 'react'
import '../css/Login.css'

import {useDispatch,useSelector} from "react-redux";
import { useNavigate } from "react-router-dom"
import { login } from "../../actions/auth"

export default function Login() {
  const [formData, setformData] = useState({email:"",password:""});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function verify(e){
      e.preventDefault();
      // console.log(formData.email,formData.password);
      dispatch(login(formData,navigate));
  }

  function handleData(e){
    e.preventDefault();
    setformData({...formData,[e.target.name]:e.target.value})
  }

  return (
    <form >

      <input name="email" value = {formData.email} onChange = {handleData} type="email" placeholder='Enter Your Email'  required/>
      <input name="password" value = {formData.password} onChange = {handleData} type="password" placeholder='Enter Your Password'  required/>
      <button type='submit' onClick={verify}>sign in</button>
    </form>
  )
}
