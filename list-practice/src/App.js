import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation.js'
import Char from './CharComponent/CharComponent.js'

class App extends Component {

  // ****** all member variable
  char_list = null; 
  state = {
    inputValue: '',
    isValueEntered: false

  }

// ****** all member variable ends

  //input changed handler starts
  inputChangedHandler = (event) => {


    if (event.target.value.length > 0) {
      let length_arr = event.target.value.split('');

      this.char_list = length_arr.map((x) => {
        return (<Char val={x} />);

      });

    }
    else {
      this.char_list = null;
    }

    console.log("value=" + event.target.value);
    let val = this.state.inputValue;
    this.setState({
      inputValue: event.target.value

    });

  }

  // ** end **

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.inputChangedHandler} value={this.state.inputValue} />
        <p>{this.state.inputValue}</p>
        <Validation inputValueLength={this.state.inputValue.length} />
        {this.char_list}
      </div>
    );


  }


}

export default App;
