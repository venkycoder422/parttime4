import React from "react";
import GroceryInput from "./GroceryInput";
import GroceryList from "./GroceryList"
import {v4 as uuid} from "uuid";

const Grocery = () => {
    const [data,setData] = React.useState([]);
    const handleAdd=(title)=>{
        const todoItem={
            id:uuid(),
            item:title
            
        };

        setData([...data,todoItem]);
    }

const HandleDelete=(id)=>{
   
    const updatedData = data.filter((todo) => todo.id !== id); // filter --> false
    console.log(updatedData);
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