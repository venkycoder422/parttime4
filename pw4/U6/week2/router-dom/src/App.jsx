import Navbar from './components/Navbar';
import './App.css';
import {Routes , Route} from "react-router-dom";
import Home from "./components/Home";
import  Contact  from './components/Contact';
import Login from "./components/Login";
import About from "./components/About";
import Products  from './components/Products';
import ProductDetails from './components/Productdetails'
import PageNot from './components/PageNot';
function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/about"  element={<About />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/products/:id"  element={<ProductDetails />}> </Route>
      <Route path="*" element={<PageNot />}></Route>
      </Routes>
    </div>
  );
}

//Routes is a container 
// Route is takes two atribute
// Path is which path
// ELemet which element
export default App;
