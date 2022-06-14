import React from "react";
import './App.css';
export const FormDate=({data})=>{
    return(
    
        <table>
             <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Salary</th>
                </tr>
                <tbody>
    {
        data.map((item)=>(
            
            
                
                
               
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.department}</td>
                    <td>{item.salary}</td>
                </tr>
                
            
            
        ))
        }
</tbody>
        </table>
    )

}


