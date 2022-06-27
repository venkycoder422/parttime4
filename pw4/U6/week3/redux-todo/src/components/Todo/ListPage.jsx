
import React from "react";
import {useSelector,useDispatch} from "react-redux";
import { ToggleTodo,DeleteTodo } from "../redux/action";
import todos  from "../redux/store";

export const ListPage=()=>{
    const {todos} = useSelector((state)=>state);
    console.log("fsdfs",todos)
    const dispatch= useDispatch();
    return (
        <div>
            <h1>Lists</h1>
            {
                todos?.map((todo)=>(
                    <div style={{display:"flex"}}>
                    <h3 key={todo.id}>{todo.title}{"---->"}{todo.status?"COMPLETES":"NOT COMPLETED"}</h3>
                    <button style={{height:"20px",width:"100px",margin:"20px"}} onClick={()=>dispatch(ToggleTodo(todo.id))}>Toggle Ttod</button>
                   <button onClick={()=> dispatch(DeleteTodo(todo.id))}>DELETE</button>
                   </div>
                    ))


            }
             
        </div>
    )
}