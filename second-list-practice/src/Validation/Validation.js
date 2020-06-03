import React from 'react'


const Validation=(props)=>{

    let displayValue=null
    if(props.inputValue.length > 5)
    {
        displayValue=<p>too long</p>;
    }
     else{
         displayValue=<p>too short</p>
     }




  return(
      <div>
  
     {displayValue}
       
  </div>
  );  


}

export default Validation;