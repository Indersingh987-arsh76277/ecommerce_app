import React from 'react';
import Header from "./Header"
import Products from "./Products"
import '../css/Home.css'

export default function Home() {
  
  return (
    <div className= "home">
        <Header />
        <Products />
    </div>
  )
}
