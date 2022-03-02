import React,{useState} from 'react'
import '../css/Login.css'

import {useDispatch,useSelector} from "react-redux";
import { useNavigate } from "react-router-dom"
import { login } from "../../actions/auth"
import { Loading } from './Loading';

export default function Login() {
  const [formData, setformData] = useState({email:"",password:""});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let loading = false;
  loading = useSelector(state=>state.auth?.loading);
  let errors = "";
  errors = useSelector(state=>state.auth?.errors?.err);

  function verify(e){
      e.preventDefault();
      dispatch(login(formData,navigate));
      formData.password = "";
  }

  function handleData(e){
    e.preventDefault();
    setformData({...formData,[e.target.name]:e.target.value})
  }

  function goTo(){
    navigate('/register');
  }

  return (
    
      loading ? (<Loading />) : (<form className = "form">
      <div className="errors">{errors}</div>
      <label className="login_text">Login</label>
      <input className="input" name="email" value = {formData.email} onChange = {handleData} type="email" placeholder='Enter Your Email'  required/>
      <input className='input' name="password" value = {formData.password} onChange = {handleData} type="password" placeholder='Enter Your Password'  required/>
      <button className="btn" type='submit' onClick={verify}>sign in</button>
      <div className="login_footer">Don't have an account <button className="link" onClick={goTo}>create account</button></div>
    </form>)

  )
}
