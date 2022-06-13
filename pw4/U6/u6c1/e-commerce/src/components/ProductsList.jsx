import React from "react";


const ProductList = ({data})=>{
    // console.log(data);
    return (<>
    {
        data.map((item)=>(
           <div className="list">
                <h1 key={item.id}>{item.title}</h1>
                {/* <button onClick={() => HandleDelete(item.id)}>DELETE</button> */}
           </div>
        ))
    }
    
    </>
)
}
export default ProductList;