import React,{useState} from 'react'
import "../css/Register.css"

import {useDispatch,useSelector} from "react-redux";
import { useNavigate } from "react-router-dom"
import { register } from "../../actions/auth"

export default function Register() {
  const [formData, setformData] = useState({email:"",password:"",name:""});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let loading = false;
  loading = useSelector(state=>state.auth?.loading);
  let errors = "";
  errors = useSelector(state=>state.auth?.errors?.err);

  function verify(e){
      e.preventDefault();
      dispatch(register(formData,navigate));
      formData.name="";
      formData.email="";
      formData.password = "";
  }

  function handleData(e){
    e.preventDefault();
    setformData({...formData,[e.target.name]:e.target.value})
  }

  function goTo(){
    navigate('/login');
  }
  return (
    loading ? (<div>Loading</div>) : 
    (<form className = "form">
      <div className="errors">{errors}</div>
      <label className="register_text">Register</label>
      <input className="input" name="name" value = {formData.name} onChange = {handleData} type="text" placeholder='Enter Your Name'  required/>
      <input className="input" name="email" value = {formData.email} onChange = {handleData} type="email" placeholder='Enter Your Email'  required/>
      <input className='input' name="password" value = {formData.password} onChange = {handleData} type="password" placeholder='Enter Your Password'  required/>
      <button className="btn" type='submit' onClick={verify}>sign in</button>
      <div className="register_footer">Already have an account <button className="link" onClick={goTo}>create account</button></div>
    </form>)
  )
}
