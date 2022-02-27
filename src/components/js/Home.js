import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  function goToLogin(){
    navigate('/login');
  }
  return (
    <div>
        <button onClick={goToLogin}>sign in</button>
    </div>
  )
}
