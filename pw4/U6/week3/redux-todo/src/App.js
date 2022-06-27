import React from "react";
import {Routes,Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/Todo/navbar";
import { Home  } from "./components/Todo/Home";
import { ListPage } from "./components/Todo/ListPage";

function App() {
  return (
    <>
    <Navbar />
    
    <Routes>
      <Route path="/" element={<Home />}></Route>
      
      <Route path="/ListPage" element={<ListPage />}></Route>
    </Routes>
  
    </>
  );

}

export default App;
