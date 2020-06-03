import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import FormComponent from './Components/FormComponent/FormComponent.js'
import TableContent from './Components/TableContent/TableContent.js'
class App extends Component {


 employee=null;
  state={
    data:[],
    showtable:false

  }


  componentDidUpdate()
  {
    if(this.state.showtable)
    {
     // console.log("entered show table");
    axios.get('http://localhost:9005/getEmployeeAll').then(res=>{

        this.setState({
          data:res.data

        })

     
        
        this.employee=  (<TableContent  tableValue={res.data}/>);
      

    });
  }

    
  else{
    this.employee=null;
  }
  }

  showTableHandler= ()=>{
 
    const flag = this.state.showtable;

   
    
    this.setState({
     showtable:!flag

    })

    //making rest call to service

  
   

  }

componentDidMount()
{
  /*axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{

  this.setState({
    data:res.data
  });
  
     
  }); */
}


  render()
  {
   /* const post= this.state.data.map(x=>{
      return(<p> <h1>"title="</h1> {x.title}</p>);
    })
    */
   //console.log("value of flag="+this.state.showtable)
  // console.log("state="+JSON.stringify(this.state.data));

  return (
    <div className="App">
     <FormComponent  />
      <button onClick={this.showTableHandler}>Click here to see the table </button>
      {this.employee}
    </div>
  );
  }
}

export default App;
