import Navbar from './components/Navbar';
import './App.css';
import {Routes , Route} from "react-router-dom";
import Home from "./components/Home";
import { Contact } from './components/Contact';
import { Login} from "./components/Login";
import {About} from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
      <Route path="/About"  element={<About />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

//Routes is a container 
// Route is takes two atribute
// Path is which path
// ELemet which element
export default App;
