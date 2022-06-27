import React from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux"
import { addTodo } from "../redux/action";
import {v4 as uuid} from "uuid";


const FormData=styled.div`
    display:flex;
    flex-direction:column;
    background-color:aqua;
    width:400px;
    margin:auto;
    margin-top:50px;
    gap:20px;
    padding:40px;
`;

export const TodoInput=()=>{
    const [ inputValue, setInputValue]= React.useState("");
    const dispatch= useDispatch();
    const handleAdd=() => {
        //dispatch add to do action to store a certain payload;
        const payload={
            title:inputValue,
            status:false,
            id:uuid()
        }
        console.log(payload);
        dispatch(addTodo(payload));
        
    }
    
    

    return (
        <>
            <FormData>
            <input type="text" placeholder="Enter Here" onChange={(e)=> setInputValue(e.target.value)}></input>
            <button  onClick={handleAdd}>ADD</button>
            </FormData>
            <div>
                {/* {
                    AddTodos?.map((todo)=>(
                        <p key={todo.id}>{todo.title}</p>
                    ))
                } */}
            </div>
        
        </>
    )
}
