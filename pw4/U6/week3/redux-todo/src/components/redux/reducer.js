import { addTodos } from "../redux/action";

export const addReducer =(store,action) => {
    switch(action.type){
        case addTodos:
            return {
                ...store,
                todos:[...store.todos,action.payload]
            };
            case "Toggle_Todo":
            return {
                ...store,
                todos: store.todos.map((todo)=>(
                todo.id===action.payload?{ ...todo,status:!todo.status }:todo
                ))
            };
            case "Delete_Todo":
            return {
                ...store,
                todos:store.todos.filter((todo)=> todo.id !== action.payload)
                
            };
            default:
            return store
    }
}