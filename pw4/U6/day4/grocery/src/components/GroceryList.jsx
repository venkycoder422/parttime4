
import React from "react";


const GroceryList = ({data,HandleDelete})=>{
    // console.log(data);
    return (<>
    {
        data.map((item)=>(
           <div className="list">
                <h1 key={item.id}>{item.item}</h1>
                <button onClick={() => HandleDelete(item.id)}>DELETE</button>
           </div>
        ))
    }
    
    </>
)
}
export default GroceryList;