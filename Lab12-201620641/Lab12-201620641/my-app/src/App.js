import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      show: false,
      name: ""
    }
  }
  
  
  change = () =>{
    this.setState(
      {
        name: document.querySelector('#input').value,
        show: true
      }
    )
  }

  render(){
    
    const inputStyle = {
      margin: '0px',
      padding: '0px',
      width: '80%',
      height: '20%'
    }

    return (
      <div className="App" >
        <header className="App-header">
          {
            !this.state.show ? 
            <div id="before">
              <h2>Who are you?</h2>
              <input type="text" id="input" style={inputStyle} ></input><br style={{margin:"0px", padding:"0px"}}/>
              <button type="button" onClick={this.change} >OK</button>
            </div> 
          :
            <div id="after" >
              <img src={logo} className="App-logo" alt="logo" id ="logo"/>
              <p>
                Hello, {this.state.name}!
              </p>
            </div>
          }  
        </header>
      </div>
    );
  }
}

export default App;
