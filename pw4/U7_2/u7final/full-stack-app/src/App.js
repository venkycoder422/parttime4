import ButtonAppBar from './client/client-js/navbar';
import {Loginform} from "./client/client-js/login"
import {Home} from './client/client-js/home'
import {Routes, Route} from "react-router-dom"
function App() {
  return (
    <>
    <ButtonAppBar />
    <Routes>

    <Route path="/" element={ <Loginform />}></Route>
    <Route path="/home" element={<Home />}></Route>

    </Routes>
    </>
  );
}

export default App;
