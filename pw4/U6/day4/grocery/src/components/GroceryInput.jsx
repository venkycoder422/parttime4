
import React from "react"
const GroceryInput =({handleAdd})=>{
    const [title,setTitle]=React.useState("")
    
    
    
    return <>
    <input  type="text" placeholder="Add Grocery" value={title} onChange={(event)=>setTitle(event.target.value)}/>
    <button onClick={()=>handleAdd(title)}>ADDTO</button>
    
    </>

}

export default GroceryInput