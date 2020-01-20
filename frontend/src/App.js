import React from 'react';
import './App.css';
import logo from './images/logo.png'


function Index() {
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
      <div className="scroll-downs">
        <div className="mousey">
          <div className="scroller">
          </div>
        </div>
       </div>
      <div className='Notice'>
        <h4 id = 'notice'>Notice</h4>
        <p>
          <br/>
          1.내용을 입력하세요
          <br/>
          2.내용을 입력하세요
          <br/>
          3.내용을 입력하세요
        </p>
      </div>

    </div>
  );
}

export default Index;
