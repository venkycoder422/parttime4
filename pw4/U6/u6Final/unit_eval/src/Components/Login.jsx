import React from 'react'
// import "./styles/Login.css";
import {useDispatch} from "react-redux"
import { Link } from 'react-router-dom';


export function Login() {
const [mail,setmail] = React.useState("");
const [password,setpassword] = React.useState("");
const dispatch = useDispatch();


const login = ()=>{
    dispatch({
        type:"LOGIN",
        payload:{
            mail,
            password
        }
    })

}

  return (
    <div>
        <div className='signMain'>
            <h2>Sign In</h2>

        <form>
            <label>Email*</label>
            <input type="email" value={mail} onChange = {(e)=>setmail(e.target.value)}></input>
            <br/>
            <label>Password</label>
            <input type="password" value = {password} onChange = {(e)=>setpassword(e.target.value)}></input>
            <br/>
           <Link to = "/"><input type="button" value="Login" onClick={login}></input></Link> 



        </form>

        </div>


    </div>
  )
}