import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation.js'
import Char from './Char/Char.js'


class App extends Component{

Char_list=null;  
state={
   inputText:""

}

nameChangeHandler = (event)=>{

  let val = event.target.value;
  this.setState({
    inputText : val

  }) 

    this.charDisplayHandler(val);


}


deleteNameHandler = (index)=>{
let value_array= this.state.inputText.split('');
value_array.splice(index,1);
//console.log("value="+value_array)
let value= value_array.join('');
console.log("value="+value)
 this.setState({
  inputText:value  

});

this.charDisplayHandler(value)

}

charDisplayHandler = (val)=>{

  let value_array= val.split('');
  console.log("display handler="+ value_array );
  this.Char_list= value_array.map((x,index)=>{
     return (<Char displayValue={x} key={index} clicked={()=> this.deleteNameHandler(index) }/>)
      
  });
 



}


 render() {
  return (
    <div className="App">
     <input  type="text"  onChange={this.nameChangeHandler}  value={this.state.inputText}/>
     <p>value={this.state.inputText.length}</p>
     <Validation inputValue={this.state.inputText} />
     {this.Char_list}
    </div>
  );
}


}
export default App;
