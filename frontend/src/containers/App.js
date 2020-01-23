import React, { Component } from 'react';
import '../components/containers_css/App.css';
import Header from '../components/Header';


class Index extends Component {
  render(){
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
