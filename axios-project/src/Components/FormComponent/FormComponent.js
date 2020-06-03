import React,{useRef} from 'react';
import axios from 'axios';


const FormComponent = (props)=>{

   let empnoref= useRef();
   let enameref= useRef();
   let jobref= useRef();
   let salref= useRef();
   let mgrref= useRef();
   let hiredateref= useRef();
   let deptref= useRef();
   let commref= useRef();

    return(
    <div>
       <p> empno: <input type="text"  ref={empnoref}/> </p>
       <p> ename: <input type="text" ref={enameref}/> </p>
       <p> job:   <input type="text" ref={jobref} /> </p>
       <p> sal:   <input type="text" ref={salref} /> </p>
       <p> mgr:   <input type="text" ref={mgrref} /> </p>
       <p> hiredate: <input type="text" ref={hiredateref} /> </p>
       <p> deptno:  <input type="text" ref={deptref}/> </p>
       <p> comm :<input type="text" ref={commref}/> </p>
       <button  onClick={()=>{
           if(empnoref!= null && enameref!=null )
          {
              let employeeObj={
                empno: Number(empnoref.current.value),
                ename: enameref.current.value,
                job: jobref.current.value,
                sal: Number(salref.current.value),
                mgr: Number(mgrref.current.value),
                hiredate: hiredateref.current.value,
                deptno: Number(deptref.current.value),
                comm: Number(commref.current.value)

               }



               axios.post('http://localhost:9005/saveEmployee',employeeObj).then((response)=>{
                   
               console.log("sucess="+ JSON.stringify(response) );
                         
               }).catch((error)=>{
                    console.log("error="+error) ;

               });
               
               
               console.log("value inside is="+ JSON.stringify(employeeObj));

          }


       }}>submit the Data the db</button>
    </div>
    );
}


export default FormComponent;