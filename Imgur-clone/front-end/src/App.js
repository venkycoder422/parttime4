
import './App.css';
import { Navbar } from './components/Navbar';
import {Route,Routes} from 'react-router'
import { HomePage } from './components/HomePage';
import { useState,useEffect } from 'react';
function App() {
  const [pins,setPins] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/pin`)
    .then(res => res.json())
    .then(res => setPins(res.pins));
  }, []);

  return (
    <>
    <Navbar />
    <Routes>
    <Route path='/' element={<HomePage pins={pins}/>}></Route>
    </Routes>
    </>
  );
}

export default App;
