import React from 'react'
import { Link } from 'react-router-dom';


export const Home = () => {

  const [todos, settodos] = React.useState([]);

  React.useEffect(()=>{
        fetch(`http://localhost:3001/todos/all`)
        .then((res)=>res.json())
        .then((res)=>settodos(res))
        .then((err)=>console.log(err));
    },[]);
    console.log(todos);
  return (
    <div>
      <h1>HOME PAGE</h1>
      {/* {
        todos?.forEach((data) => (

          <div>
              <h3>{data.taskname}</h3>
            <p >{data.status}</p>
            <p >{data.tag}</p>

          </div>
          
        ))
      } */}

    </div>
  )
}

