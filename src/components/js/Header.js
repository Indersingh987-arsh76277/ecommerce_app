import React from 'react'
import "../css/Header.css"
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
  function goToLogin(){
    navigate('/login');
  }
  return (
    <div className='header'>
        <div id='brand' className='header_left' onClick={()=>{navigate('/')}}>OnlineShop</div>
        <div className="header_search"><input className="input search" type="search" placeholder='search' /><i className="fa fa-search"></i></div>
        <div className="header_right">
            <button className='link btn2' onClick={goToLogin}>login <i className="fa fa-sign-in"></i></button>
            <button className="link btn2">cart <i className="fa fa-shopping-cart"></i></button>
        </div>
    </div>
  )
}

export default Header