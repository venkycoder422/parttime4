const express = require('express');



const app = express();
app.use(express.json());
var todos = [];
app.get(`/`, (req, res) => {
    res.send({
        todos
    })
});

app.post(`/todo`, (req, res) => {
    const { todo } = req.body;
    let max = 0;
    todos.forEach((todo) => {
        max = Math.max(todo.id, max)
    })

    const data = {
        id: max + 1,
        todo
    }
    todos.push(data);

    res.send({
        message: "task has been posted",
        todos
    })
})
let index = 0;
app.delete(`/todo/:id`, (req, res) => {
    const { id } = req.params;
    todos.forEach((todo, i) => {
        if (todo.id == id) {
            index = i;
        }

    })
    todos.splice(index, 1);
    res.send({
        message: "task has been deleted",
        todos
    })
})

app.patch('/todo/:id',(req,res)=>{
    const { id } = req.params;
    const { taskData } = req.body;
    // console.log(id);
    
    var data = todos.map((t)=>{
        if(t.id==id){
            console.log(t)
            return t;
        }

    })
    
    for(const [key, value] of Object.entries(taskData)){
        data[key] = value;
    }

    return res.send({
        message: "task has been updated",
       data,
    });
    

})

app.listen(3220, () => {
    try {
        console.log("Server Connected 3220")
    } catch (error) {
        console.log("Server Not Connected 3220")
    }
});
