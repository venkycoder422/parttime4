import Navbar from './components/Navbar';
import './App.css';
import {Routes , Route} from "react-router-dom";
import Home from "./components/Home";

import Login from "./components/Login";

import Products  from './components/Products';


function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Routes>
      <Route path="/" element={<Home />}></Route>
     
      
      <Route path="/login" element={<Login />}></Route>
      <Route path="/products" element={<Products />}></Route>
  
      {/* <Route path="*" element={<PageNot />}></Route> */}
      </Routes>
    </div>
  );
}

//Routes is a container 
// Route is takes two atribute
// Path is which path
// ELemet which element
export default App;
