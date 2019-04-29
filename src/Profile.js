import React, { Component } from 'react';
import './App.css';
import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';

class Profile extends Component {
  constructor(props){
    super(props);

    this.state = {
      color: 'orange',
      img   : '',
      title : 'Profile'
    };
  }

  myButton(){
    toast.notify('HATI HATI, KOALANYA GIGIT LOH !')  
  }

  
  render() {
    return (
        <div className ="info">
          ini adalah <span className={"selected " + this.state.color}> {this.state.title}</span>
          <br/> 
          <br/>

          <p>{this.props.nama}</p>
          <br/>
          <button onClick={this.myButton}>alert</button>
          <br/>
          <br/>
          <img src="koala.jpg" width="40%"></img>
          
      </div>
    );
  }
}

export default Profile;
