import React from 'react';

const TableContent = (props)=>{

   let tabledata=null;
   tabledata= props.tableValue.map((element)=>{
    return(<tr>
    <td>{element.empno}</td>
    <td>{element.ename}</td>
    <td>{element.job}</td>
    <td>{element.sal}</td>
    <td>{element.mgr}</td>
    <td>{element.hiredate}</td>
    <td>{element.deptno}</td>
    <td>{element.comm}</td>
    
    
     </tr>);
     
   });
     


    return(
        <div>
            <table border = "1">
         <tr>
            <th>empno</th>
            <th>ename</th>
            <th>job</th>
            <th>sal</th>
            <th>mgr</th>
            <th>hiredate</th>
            <th>deptno</th>
            <th>comm</th>

         </tr>
            {tabledata}
            </table>
        </div>   

    )


} 


export default TableContent;