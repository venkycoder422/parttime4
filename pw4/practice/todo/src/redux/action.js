import { add } from "./actionType"

export const addTodo = (payload)=>{
    return {
        type:add,
        payload
    }
}

