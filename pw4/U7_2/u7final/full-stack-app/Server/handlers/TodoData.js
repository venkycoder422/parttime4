const Todo = require("../database/Schema");

async function fetchAllTodos(req, res, next) {
    try {
        const todos = await Todo.find();

    return res.send({
        todos
    })
    } catch (error) {
        console.log(error)
    }
    
}
 //fecthing one TOdo;


async function fetchSingleTodo(req, res, next) {
            const {id}= req.params;

            const todo = await Todo.findById(id);

            if(todo){
                return res.send({
                    data:todo
                });
            }else{
               return res.status(404).send({
                    error: "Todo by given  ID not exxist"
                });
            }
}



module.exports = {
    fetchAllTodos,
    fetchSingleTodo,
    postTodo,
    deleteTodo,
    updateTodo,
    searchTodos,
    
    
}