import logo from './logo.svg';
import React from 'react'
import './App.css';

function App() {
  const [counter,setValue] = React.useState(0);
  
  const handleIncreament=(value)=>{
    setValue(counter+value);
  }

  const handleDecreament=(value)=>{
    setValue(counter-value);
  }

  const double=(value)=>{
    setValue(counter*value);
  }

    console.log(counter)
    if(counter%2===0){
      return (
        <div class="App">
          <h1>Counter</h1>
          <h2 style={{color:"green"}}>{counter}</h2>
          <button onClick={() =>handleIncreament(1)}>ADD</button>
          <button onClick={()=>handleDecreament(1)}>DECREASE</button>
          <button onClick={()=>double(2)}>Double</button>
        </div>
      )
    }
  return (
    <div className="App">
      
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={() =>handleIncreament(1)}>ADD</button>
      <button onClick={()=>handleDecreament(1)}>DECREASE</button>
      <button onClick={()=>double(2)}>Double</button>
    </div>
  );
}

export default App;
