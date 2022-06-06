import logo from './logo.svg';
import './App.css';


function Todo({todo,i}){
  
    //console.log(i);

  return (
    <div class="App">
      <ul>
      <li>{todo}</li>
      </ul>
    </div>

    
  );
}


function Todo2({todo,i}){
  
  if(i==3){
    return (
      <div class="App">
        <ul>
        <li style={{listStyleType:"circle"}}>{todo}</li>
        </ul>
      </div>
    )
  }

return (
  <div class="App">
    <ul>
    <li>{todo}</li>
    </ul>
  </div>

  
);
}



function App() {
  return (
   <div>
    <h1>Mobile Operating system</h1>
    {['Android',"blackberry","iPhone","Windows Phone"]
    .map((elem,index)=> {
      return <Todo todo={elem} i={index}/>
    })
    }
    <h1>Mobile Manufacturers</h1>
    {["Samsung","HTC","Micromax","Apple"]
    .map((elem,index)=> {
      return <Todo2  todo={elem} i={index} />
    })
    }
   </div>
      
  );
}

export default App;
