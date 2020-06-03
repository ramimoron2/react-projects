import React from 'react';
import Person from './Person/Person.js'

const Persons = (props)=>{


console.log("persons rendering")

    return(
        <div>
           
            
            <button onClick={props.nameChange}>click me</button>
    
    
            {
    
              //making persons dynamically
              props.persons_array.map((person, index) => {
                return <Person name={person.name} age={person.age} click={()=>{props.clicked(index)}} />
    
              })
            }
    
          </div>

    );

}

export default Persons;