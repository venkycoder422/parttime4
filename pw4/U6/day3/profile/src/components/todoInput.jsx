import React from "react";
import App from "./App.js"
<div>
        
        <h1>TODO LIST</h1>
        
        <input type="text"  onChange={handleChange} placeholder="EnterText..." className='inputValue' value={query}></input>
        <button onClick={() => {handleAdd(query)}}>ADD</button>
      

        {

          tasks.map((elem) => {
            if (elem.status === true) {
              return <h1 style={{ color: "green" }}>{elem.title}</h1>
            } else {
              return <h1 style={{ color: "red" }}>{elem.title}</h1>
            }


          })
        }


      </div>

