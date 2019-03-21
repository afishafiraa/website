import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      color: 'Merah',
      img   : 'apple.jpg',
      title : 'Apel',
    };
  }

  clicked(menu){
    //untuk memperbarui state sesuai dengan menu yang dipilih
    
    this.setState({
      color : menu.color,
      img   : menu.img,
      title : menu.title,
    });
  }
  /* gambarku(){
    var gambar;
    if (this.state.active.toLocaleLowerCase()==='merah'){
      gambar = "apel";
    } else if (this.state.active.toLocaleLowerCase()=== 'kuning' ){
      gambar ="nanas";
    } else if (this.state.active.toLocaleLowerCase() === 'hijau'){
      gambar ="alpukat";
    } else if (this.state.active.toLocaleLowerCase() === 'biru'){
      gambar ="berry";
    }

    return <img src={gambar+".jpg"} width="200"></img>
  }
*/
  render() {
    return (

      <div className="App">
      {/*map akan loop sebanyak menu yang di definisikan*/}
      {/* kemudian mengembalikan elemen </a> */}
      
      <nav className="nav">
      { this.props.items.map ((menu, index) => {
        var style = 'menu';
        
        if (this.state.color === menu.color){
          style = `${style} is-active`;
        }

        return <a 
          className={style+" "+menu.color}

          //bind untuk membuat 'menu' bisa dikirim ke fungsi 'clicked'
          onClick={this.clicked.bind(this,menu)}
          key={index}
          >
          {menu.title}   
          </a>;
          //judul pada menu
      })  }
      
      </nav>

        <div className="info">
          ini adalah <span className={"selected " + this.state.color}> {this.state.title}</span>
          <br/> 
          <br/>

          <img src={this.state.img} width="200"></img>
          {/*this.gambarku()}
          */}

        </div>
        
      </div>
    );
  }
}

export default App;
