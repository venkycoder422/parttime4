
import React from "react";


const Retrive = ({data})=>{
    // console.log(data);
    return (
        <div>
    {
        data.map((item)=>(
           <div className="list">
                <h1 key={item.id}>{item.name}</h1>
                {/* <button onClick={() => HandleDelete(item.id)}>DELETE</button> */}
           </div>
        ))
    }
    
    </div>
)
}
export default Retrive;