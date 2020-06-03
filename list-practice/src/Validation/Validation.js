import React from 'react'

 const Validation= (props)=>{
   
    let length= null;
    if(props.inputValueLength>5)
    {
        length=<p>too long</p>
    }
    else{
        length=<p>too short</p>
    }


   return(
   <div>
    <p>{length} and length={props.inputValueLength} </p>
    </div>);
 }

export default Validation;