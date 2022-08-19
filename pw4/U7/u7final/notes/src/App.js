import React from 'react'
import './App.css';

function App() {
  const [query,setQuery] = React.useState('');
  const [data,setData] = React.useState([]);

  const handleChange=(e)=>{
    const {value}= e.target;

    setQuery(value);
  }
  console.log(query);

  const addDataHandler=(query)=>{
        const payload ={
          title:query,
          id:data.length
        }

        setData([...data,payload]);
  }
  console.log(data);

  const HandleDelete=(id)=>{
   
    const updatedData = data.filter((todo) => todo.id !== id); // filter --> false
    console.log(updatedData);
    setData(updatedData);
}
  return (
    <div className="App">
        <form>
        <input type = "text" placeholder='Enter list' onChange={handleChange} value={query}></input>
      <button onClick={()=>addDataHandler(query)}>ADD</button>
        {
      
            data?.map((item)=>(
              <div style={{display:"flex",marginLeft:"45%"}}>
                <h3>{item.title}</h3>
                <button onClick={()=>HandleDelete(item.id)}>DELETE</button>
              </div>
            ))          
        }

        </form>
    </div>
  );
}

export default App;
