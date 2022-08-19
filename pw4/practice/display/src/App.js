import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useEffect } from 'react';
function App() {
  const [data,setData] = React.useState([]);
  useEffect(()=>{
    try {
      fetch(`https://jsonplaceholder.typicode.com/photos`)
    .then((res)=>res.json())
    .then((res)=>setData(res))
    } catch (error) {
      console.log(error);
    }
    

  },[]);
  console.log(data);

  return (
    <div className="App">
      <div>
        <h1>display Data from API</h1>
        <div className='mainDiv'>
        {
          
          data?.map((item)=>(
            <div id="card">
            
            <img src={item.url}></img>
            <h1>{item.title}</h1>
            </div>
          ))
         
        }
        </div>
      </div>
    </div>
  );
}

export default App;
