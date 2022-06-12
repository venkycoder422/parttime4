import React from "react";
import GroceryInput from "./GroceryInput";
import GroceryList from "./GroceryList"
import {v4 as uuid} from "uuid";





const Grocery = () => {
    const [data,setData] = React.useState([]);

    React.useEffect(()=>{
        fetch(`http://localhost:3001/Grocery`)
        .then((res)=> res.json())
            .then((res)=>setData(res)).catch((error)=>console.log(error))
        
    
    },[]);

    const handleAdd=(title)=>{
        const todoItem={
            id:uuid(),
            item:title
            
        };

        // setData([...data,todoItem]);
        fetch(`http://localhost:3001/Grocery`,{
            method:"POST",
            body:JSON.stringify(todoItem),
            headers:{
                "Content-type":"application/json"
            }
        }).then((res)=> res.json())
            .then((res)=>console.log(res))
            .catch((error)=>console.log(error))
        
   
}

const HandleDelete=(id)=>{
   
    const updatedData = data.filter((todo) => todo.id !== id); // filter --> false
    //console.log(updatedData);
    setData(updatedData);
}


    return (
<>
<div className="mainDiv">


        <h1>Grocery List </h1>
        <GroceryInput handleAdd={handleAdd}/>
        <GroceryList data={data}  HandleDelete={HandleDelete}/>
        
</div>
</>
    );
}

export default Grocery;