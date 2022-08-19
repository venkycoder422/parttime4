import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// function App() {
//   return (
//     <div className="App">
      
//       <h1>HELLO REACT</h1>
//     </div>
//   );
// }

const Elem=()=>React.createElement('button',{onClick:()=>alert("BUTTUN CLICKED WITHOUT JSX")},"CLICK ME!")

const Elem2=()=>(
  <button onClick={()=>alert("ANOTHER CLICK")}>CLICK ME!

  </button>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Elem2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
