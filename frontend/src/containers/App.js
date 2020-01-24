import React, { Component } from 'react';
import '../components/containers_css/App.css';
import Header from '../components/Header';
import Content from '../components/Content';


class Index extends Component {
  render(){
    if(!this.props.children) {
      return (
        <div className="index">
      <div>
        <Header/>
        <Content>
                <div className='background'>
                </div>
                
                <div className="scroll-downs">
                    <div className="mousey">
                    <div className="scroller">
                    </div>
                    </div>
                </div>
                
                <div className='Notice_content'>
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
           </Content>
      </div>
      </div>
      )
    }
  return (
    <div className="index">
      <div>
        <Header/>
        {this.props.children}
      </div>
      
    </div>
    );
  }
}

export default Index;
