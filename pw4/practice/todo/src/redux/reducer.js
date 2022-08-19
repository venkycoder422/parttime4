import { add } from "./actionType";

const initState = {
    todo:[]
}

export const reducer = (state=initState,action)=>{
    switch (action.type) {
        case add:
            return {
                ...state,todo:action.payload
            }
            
    
        default:
            return {
                ...state
            }
    }
}