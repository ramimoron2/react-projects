import React from 'react';

const person = (props) => {

    return (
        <div>
            <p onClick={props.click}> I am {props.name} , i am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}></input>
            
        </div>
    )
}


export default person;