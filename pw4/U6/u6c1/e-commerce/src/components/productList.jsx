import React from "react"

const GetData=()=>{
    const [getdate,getData]= React.useState([])
    React.useEffect(()=>{
      fetch(`http://localhost:3001/products`)
      .then((res)=>res.json())
      .then((res)=>getData(res))
      .catch((err)=>console.log(err))
  },[])
  
  {
      getdate.map((item)=>(
          <div className="list">
               <h1 key={item.id}>{item.title}</h1>
               
          </div>
       ))
    }
}

export default GetData;

