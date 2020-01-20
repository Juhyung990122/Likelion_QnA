import React from 'react';
import './App.css';
import logo from './images/logo.png'
import background from './images/background.png'

function App() {
  return (
    <div className="index">
      <div className="Header">
        <img id='logo' src = {logo}></img>
        <h3 id ='smu_likelion_qna'>SMU LIKELION_QNA</h3>
        <ul id = 'menu'>
          <li>Notice</li>
          <li>QnA</li>
          <li>Login</li>
          <li>Signup</li>
        </ul>
      </div>
      <div className='background'>
      </div>
      <div class="scroll-downs">
  <div class="mousey">
    <div class="scroller"></div>
  </div>
</div>
    </div>
  );
}

export default App;
