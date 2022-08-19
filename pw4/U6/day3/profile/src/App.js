import profile from './profile.JPG';
import './App.css';
import React from "react";
import {v4 as uuid} from "uuid";







function App() {
  const [agehike, getValue] = React.useState(18);

  const ageInc = (value) => {
    getValue(agehike + value);
  }

  const ageDec = (value) => {
    getValue(agehike - value);
  }
  const eventChange=()=>{
    return true;
  }
  
const [details,setdetails] = React.useState([]);
  const moreDetails=({value})=>{
    
    if({eventChange}){
      setdetails(value);
    }
  
  }
  

  const [query,setQuery]= React.useState("");
  const [tasks,setTasks]= React.useState([]);
  const [showAll, setShowAll] = React.useState(true);
  const handleChange= (e)=>{
    const {value}=e.target;

    setQuery(value);
  }
  const handleAdd=(query)=>{
    
    const payload={
      title:query,
      status:false,
      id:uuid()
    };
  
    
  
    setTasks([...tasks,payload ]);
    
   
  }

  const handleToggle = (id) => {
    const updatedData = tasks.map((todo) =>
      todo.id === id ? { ...todo, status: !todo.status } : todo
    );
  
    // [{ id:1, title:"code", status: false }, { id:2, title:"sleep", status: false }]
  
    // updated data - [{ id:1, title:"code", status: false }, { id:2, title:"sleep", status: true  } ]
  
    setTasks(updatedData);
  };
  console.log(tasks);
  return (
    <div className="App">
      <div className="left_part">
        <img src={profile} className="profile" alt="profile"></img>
        <h3>NAME:VENKY</h3>
        <h4>AGE:{agehike}</h4>
        <div className="functionality">
          <div className="buttons">
            <button onClick={() => ageInc(1)}>Increase</button>
            <button onClick={() => ageDec(1)}>Decrease</button>
          </div>
          <div>
          <button onClick={() => moreDetails(["fsdfsf","fsfdsf"])}>
        {se ? "SHOW DETAILS" : "HIDE DETAILS"}
      </button>
          </div>
          <div>{details.map(value=><p>{value}</p>)}</div>
        </div>
      </div>
      {/* Todo input lits */}
      <div style={{}}>
        
        <h1>TODO LIST</h1>
        
        <input type="text"  onChange={handleChange} placeholder="EnterText..." className='inputValue' value={query}></input>
        <button onClick={() => {handleAdd(query)}}>ADD</button>
        {

          tasks.map((elem) => {
            if (elem.status === true) {
              return (
              <div style={{display:"flex"}}>
              <h1 style={{ color: "green" }}>{elem.title}</h1>
              <button style={{float:"right",height:"20px" ,marginTop:"40px"}}onClick={() => handleToggle(elem.id)}>TOGGLE TODO</button>
              </div>
              )
            } else {
              return (
              <div style={{display:"flex"}}>
              <h1 style={{ color: "red" }}>{elem.title}</h1>
              <button style={{float:"right",height:"20px" ,marginTop:"40px"}}onClick={() => handleToggle(elem.id)}>TOGGLE TODO</button>
              </div>
              )
            }
          })
          
        }


      </div>
    </div>

  );
}

export default App;
