import React, { Component } from 'react';
import './App.css';

class Calculator extends Component {
  constructor(props){
    super(props);

    this.state = {
      color: 'grey',
      img   : '',
      title : 'Calculator',
      angka1 : 0,
      angka2 : 0
    };
  }

  calc(){
    switch(this.state.operation){
      case 'plus' : return parseInt(this.state.angka1) + parseInt(this.state.angka2);
      case 'minus' : return parseInt(this.state.angka1) - parseInt(this.state.angka2);
      case 'kali' : return parseInt(this.state.angka1) * parseInt(this.state.angka2);
      case 'div' : return parseInt(this.state.angka1) / parseInt(this.state.angka2);
    }
  }
  

  render() {
    return (
        <div className="info">
          <span className={"selected " + this.state.color}>{this.state.title}</span>
          <br/>
          <br/>
          <form>
            <input name ="angka1" type="number" value={this.state.angka1} onChange={this.changeHandler.bind(this)}></input>
            <select name="operation" onChange={this.changeHandler.bind(this)}>
              <option value="plus">+</option>
              <option value="minus">-</option>
              <option value="kali">x</option>
              <option value="div">:</option>
            </select>
            <input name ="angka2" type="number" value ={this.state.angka2} onChange={this.changeHandler.bind(this)}></input>
             =
            <span> {this.calc()}</span>
          </form>       
          <span></span>
          <br/>
        </div>
    );
  }
  changeHandler(event){
    this.setState({
      [event.target.name]:event.target.value,
    });
  }
}

export default Calculator;
