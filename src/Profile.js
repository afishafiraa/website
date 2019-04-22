import React, { Component } from 'react';
import './App.css';

class Profile extends Component {
  constructor(props){
    super(props);

    this.state = {
      color: 'orange',
      img   : '',
      title : 'Profile'
    };
  }

  
  render() {
    return (
        <div className ="info">
        ini adalah <span className={"selected " + this.state.color}> {this.state.title}</span>
        <br/> 
        <br/>

        <img src="koala.jpg" width="40%"></img>
      </div>
    );
  }
}

export default Profile;
