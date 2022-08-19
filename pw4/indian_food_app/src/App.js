import {Routes,Route} from 'react-router-dom'
import './App.css';
import ResponsiveAppBar from './components/NavBar';
import {Home} from "./components/Home";
import {Recipes} from "./components/Recipes";
import { Aboutus } from './components/Aboutus';
import { SingleRecipe } from './components/SingleRecipe';

function App() {
  return (
    <>
     <ResponsiveAppBar />
    <Routes>
   
      <Route path="/" element={<Home />}></Route>
      <Route path="/recipes" element={<Recipes />}></Route>
      <Route path="/aboutus" element={<Aboutus />}></Route>
      <Route path="/recipes/:id" element={<SingleRecipe />}></Route>
    </Routes>
      
    
    </>
  );
}

export default App;
