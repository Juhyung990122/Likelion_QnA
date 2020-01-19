import React from 'react';
import './App.css';
import logo from './logo.png'

function App() {
  return (
    <div className="header">
      <img src = {logo} align ="left"></img>
      <h3 align = "left">SMU LIKELION_QNA</h3>
      <ul>
        <li>Notice</li>
        <li>QnA</li>
        <li>Login</li>
        <li>Signup</li>
      </ul>
    </div>
   
  );
}

export default App;
