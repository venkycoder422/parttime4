import React from "react"; 
import {useNavigate } from "react-router-dom";
import styled from "styled-components";
 
 const Login=()=>{

    const Loginform=styled.div`
    `;
    
    const FORM=styled.form`
        width:400px;
        margin:auto;
        display:flex;
        flex-direction:column;
        gap:20px;
    `;

    const Submit=styled.input`
    background-color:black;
    color:white;
    &:hover{
        background-color:aqua;
        color:black;
    }
    `
    ;
    const navigate= useNavigate();
    const [Data,setData]=React.useState({
        name:"",
        email:"",
        password:"",
     });
    
     const HandleChange=(e)=>{
        const {name, value}=e.target;
        setData({...Data, [name]:value})
     }
     const {name,email,password}=Data;

     const [formData,setFormData]=React.useState([]);
     React.useEffect(() =>{
        fetch(`http://localhost:3001/users`)
        .then((res)=> res.json())
        .then((res)=>{
           // console.log(res.email,res.password);
            if(res.email.includes("@") && res.password===8){
                setFormData(res);
            }else{
                alert("ENTER ALL FIELDS");
            }
        })
        .catch((res)=>console.log(res));
        
     },[]);

    const HandleSubmit=(event)=>{
            event.preventDefault();
            
            fetch(`process.env.React_base_url/users`, {
                method:"POST",
                body:JSON.stringify(Data),
                headers:{
                    "Content-type":"application/json"
                }
            }).then((res) => res.json())
            .catch((err) => console.log(err))
            .then(()=>
                {
                navigate("/")
                }
        
                    
            );
    }
     
    console.log(Data);
    return (
        <>
        <Loginform>
            <h1>Login</h1>
            <FORM onSubmit={HandleSubmit} >
            <input type="text" placeholder="Name" name="name" onChange={HandleChange} value={name}/>
            <input type="text" placeholder="Email" name="email" onChange={HandleChange} value={email}/>
            <input type="password" placeholder="Password" name="password" onChange={HandleChange} value={password}/>
            <Submit type="submit" value="LOGIN" />
            </FORM>

        </Loginform>
        </>
    )
}
export default Login;