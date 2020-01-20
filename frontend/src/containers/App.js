import React, { Component } from 'react';
import '../components/App.css';
import Header from '../components/Header';


class Index extends Component {
  render(){
  return (
    <div className="index">
      <div>
        <Header/>
        {this.props.children}
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
}

export default Index;
