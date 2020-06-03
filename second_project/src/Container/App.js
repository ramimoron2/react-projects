import React, { Component } from 'react';

import './App.css';
import Person from '../Components/Persons/Person/Person.js';
import Persons from '../Components/Persons/Persons.js';
//import Faltu from './Faltu/Faltu.js'
class App extends Component {


  constructor(props){
    super(props);
    console.log('contructor called');
  }


 


  state = {

    persons: [
      { name: "himanshu", age: 25 },
      { name: "ghapu", age: 25 },
      { name: "boni", age: 29 }

    ],

    toggle: false

  };


  static getDerivedStateFromProps(props,state)
  {
    console.log('[App.js] getDerivedStateFromProps',props);

    return state;
  }

 componentDidMount(){
   console.log('[App.js] componentDidMount called');
 }

  togglehandler = () => {

    const toogleVariable = this.state.toggle;

    console.log("value is=" + !toogleVariable)
    //toogleVariable = !toogleVariable;

    // this.setState({toggle : !toogleVariable});

    this.setState({
      toggle: !toogleVariable

    })


  }


  deleteNameHandler = (nameindex) => {

   // let personsObjects = this.state.persons;  changes the original lists
  let  personsObjects= [...this.state.persons];
    personsObjects.splice(nameindex, 1);
    this.setState({
      persons: personsObjects

    });
  }

  nameChangeHandler = (newName) => {
    // console.log("clicked");

    let personsArray = this.state.persons;

    if (personsArray.length != 0) {
      personsArray[0].name=newName;

      this.setState({
       persons:personsArray

      })
    }

  }


  textBoxChangeHandler = (event) => {

    this.setState({
      persons: [
        { name: "himu", age: 30 },
        { name: event.target.value, age: 25 },
        { name: "boni", age: 87 }

      ]


    })


  }


  render() {

    console.log("render method called");

    let Person_dev = null;



    if (this.state.toggle) {
     /* Person_dev = (<div>
        <h1> yoooooooo </h1>
        
        <button onClick={this.nameChangeHandler.bind(this, "himuuu")}>click me</button>


        {

          //making persons dynamically
          this.state.persons.map((person, index) => {
            return <Person name={person.name} age={person.age} click={() => this.deleteNameHandler(index)} />

          })
        }

      </div>) */;



      Person_dev=<Persons    persons_array={this.state.persons}  nameChange= {()=>{  this.nameChangeHandler("himuuu") }}   clicked={this.deleteNameHandler}  />

    }


    // if this part beacomes large we shoud put it into cockpit component
    return (
      <div className="App">
       
        <button onClick={this.togglehandler}>click to toogle</button>
        {Person_dev}
      </div>
    );
  }
}

export default App;
