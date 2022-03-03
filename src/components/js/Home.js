import React from 'react';
import Header from "./Header"
import '../css/Home.css'
import {Outlet} from 'react-router-dom'

export default function Home() {
  
  return (
    <div className= "home">
        <Header />
        <Outlet />
    </div>
  )
}
