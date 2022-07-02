import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import { NavBar } from './Components/NavBar';
import {HomePage} from "./Components/HomePage";
import { Login } from './Components/Login';
import { MoreDetails } from './Components/Bookingsdetails';
import {Bookings} from "./Components/Bookings";

function App() {
  return (
    <>
    <NavBar />
    <Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/Bookings" element={<Bookings />}></Route>
    <Route path="/Login" element={<Login />}></Route>
    <Route path="/movies/:id" element={<MoreDetails />}> </Route>
  </Routes>

    </>
  );
}

export default App;
