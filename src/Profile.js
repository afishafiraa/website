import React, { Component } from 'react';
import './App.css';

class Profile extends Component {
  constructor(props){
    super(props);

    this.state = {
      color: 'merah',
      img   : 'apple.jpg',
      title : 'Apel',
      angka1 : 0,
      angka2 : 0
    };
  }

  
  render() {
    return (
        <img src="koala.jpg"></img>
    );
  }
}

export default Profile;
