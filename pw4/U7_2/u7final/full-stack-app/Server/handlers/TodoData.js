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

//Searching todo;
async function searchTodos(req ,res, next){
    console.log(req.query.todo);
        let searches = await Todo.find({taskname:{$regex:`^${req.query.taskname.trim()}`,$options: 'i'}});
    
        return res.send({
            searches,
        })
       
    }


//post todo
async function postTodo(req,res,next){
    const {todo:Data} = req.body;

    let todo = new Todo(Data);

    await todo.save();

    return res.send({
        message: "Todo has been added",
        todo
    })
}


//update todo

async function updateTodo(req, res, next) {
    const {todos:todoData} = req.body;
    const { id:todoId } = req.params;

    let todos = await Todo.findById(todoId)
    console.log(todos);

    for(const [key, value] of Object.entries(todoData)){
        todos[key] = value;
    }

    await todos.save();

    return res.send({
        message: "Todo has been updated",
        todos,
    });
};


//delete todo
async function deleteTodo(req, res, next) {
    const { id: todoId } = req.params;
const data = await Todo.findById(todoId);
console.log(data)
    await Todo.findByIdAndDelete(todoId);

    return res.send({
        message: "todo has been deleted.",
        data

    })
}

// async function sortByField(req,res,next){
//     let value = req.query;
//     // console.log(value);
//     let sorted = await Todo.find(value);
//     // find().sort({family_members:1}).sort({age:-1});
//     return res.send({
//         data:sorted
//     })
// }

module.exports = {
    fetchAllTodos,
    fetchSingleTodo,
    postTodo,
    deleteTodo,
    updateTodo,
    searchTodos,
    
    
}