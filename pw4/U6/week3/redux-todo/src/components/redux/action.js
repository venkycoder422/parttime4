
export const addTodos= "add_Todo";

export const addTodo=(payload) =>({
    type:addTodos,
    payload:payload
});

export const ToggleTodo=(payload)=>({
    type:"Toggle_Todo",
    payload

})

export const DeleteTodo=(payload)=>({
    type:"Delete_Todo",
    payload

})
