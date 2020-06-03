import React,{Component} from 'react';
import './App.css';
import UserInput from '../uselessComponent/UserInput/UserInput.js';
import UserOutput from '../uselessComponent/UserOutput/UserOutput.js';
class App2 extends Component{

    state={
    userName:"kevin durant"

    }

  stateHandler=(event)=>{
this.setState({

    userName:event.target.value
});

  }

    render() {
        return (
          <div className="App2">
           
             <UserInput  handler={this.stateHandler}  userName={this.state.userName}/>
             <UserOutput  userName={this.state.userName}  />
             <UserInput  handler={this.stateHandler}/>
             <UserOutput  userName={this.state.userName}/>
             <UserInput handler={this.stateHandler} />
             <UserOutput  userName={this.state.userName}/>
    
          </div>
        );
      }

}

export default App2;
