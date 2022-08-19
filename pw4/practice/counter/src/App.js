import React from 'react';
import './App.css';

function App() {

  const [count, setcount] = React.useState(0);

  function IncHandler(value) {
    return setcount(count + value);
  }

  function DecHandler(value) {
    return setcount(count - value);
  }
  const doubleHandler = (value) => {
    return setcount(count * value);
  }

  const clearAllHandler = () => {
    return setcount(count - count);
  }
  return (
    <div className="App">
      <h1>Counter</h1>
      <h1>{count}</h1>
      <button onClick={() => IncHandler(1)} >INC</button>
      <button onClick={() => DecHandler(1)}>DEC</button>
      <button onClick={() => doubleHandler(2)}>DOUBLE</button>
      <button onClick={() => clearAllHandler()}>Clear</button>

    </div>
  );
}

export default App;
