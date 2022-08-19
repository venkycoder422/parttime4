

// import sum from './sum.js';
// import mul from './mul.js';

// import("./index.css")

// console.log(sum(50,50));

// console.log(mul(50,50));
// console.log(mul(4,22));

import React from "react";
import  ReactDOM from "react-dom/client";

import("./index.css");

// let h1=React.createElement('h1',{'className':"red_font"},"HELLO REACT")

// ReactDOM.render(
    
//     <h1 class="red_font">HELLO</h1>,
//     document.getElementById('root')
    
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>Hello, world!</h1>);