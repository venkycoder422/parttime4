import React from "react";
import "./App.css"
// import ProductList from "./ProductsList";
// async function get(){
    
//     let res= await fetch(`http://localhost:3001/Products`);
//     let data= await res.json();
//     console.log(data)
//   }
// let data=get();\
function App() {
  const [data,setData]= React.useState({
    title:"",
    gender:"",
    price:"",
    category:"",
    image:"",
    
  })
  const [getdate,getData]= React.useState([])
  React.useEffect(()=>{
    fetch(`http://localhost:3001/products`)
    .then((res)=>res.json())
    .then((res)=>getData(res))
    .catch((err)=>console.log(err))
},[])
  
  const HandleChange=(e)=>{
    const {name,value}=e.target
    setData({...data,[name]:value})
    React.useEffect(()=>{
      fetch(`http://localhost:3001/Products`)
      .then((res)=> res.json())
      .then((res)=>setData(res)).catch((error)=>console.log(error))
  },[]);
  }


  
  console.log("getting ROy",data)
  const HandleSubmit=(event)=>{
    event.preventDefault();
    fetch(`http://localhost:3001/Products`,{
      method:"POST",
      body:JSON.stringify(data),
      headers:{
        "Content-type":"application/json"
      }

  }).then((res)=>res.json())

    
  }
  const {title,gender,price,category,image}=data;
  return (
    <div className="App">
      <div>
        <h1>PRODUCT DATA</h1>
      </div>
      <form className="inputForm" onSubmit={HandleSubmit}>
       
        <input type="text" placeholder="title" name="title" onChange={HandleChange} value={title}></input>
        <select name="gender" onChange={HandleChange} value={gender}>
          <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Femlae</option>
            <option value="other">Other</option>
            
        </select>
        <input type="text" placeholder="price" name="price" onChange={HandleChange} value={price}></input>
        <input type="text" placeholder="category" name="category" onChange={HandleChange} value={category}></input>
        
        <input type="url" placeholder="image" name="image" onChange={HandleChange} value={image}></input>
        
        <input type="submit" value="Submit" ></input>
      </form>
      <br></br>
      <br></br>
      <div className="cards">
      {
        getdate.map((item)=>(
            <div className="list">
                <img src={item.image}></img>
                 <h3 key={item.id}>TITLE:{item.title}</h3>
                 <h4>PRICE:{item.price}</h4>
            </div>
         ))
      }
     
      </div>
    </div>
   
  );
  
}

export default App;