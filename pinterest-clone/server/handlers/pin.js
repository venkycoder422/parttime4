const Pin = require('../database/Schema');

async function fetchAllPins(req, res, next) {
    try {
        const pins = await Pin.find();

    return res.send({
       pins
    })
    } catch (error) {
        console.log(error)
    }
    
}
 //fecthing one TOdo;


async function fetchSinglePin(req, res, next) {
            const {id}= req.params;

            const pin = await Pin.findOne({_id:id});

            if(pin){
                return res.send({
                    data:pin
                });
            }else{
               return res.status(404).send({
                    error: "Pin by given  ID not exxist"
                });
            }
}

//Searching todo;
async function searchPins(req ,res, next){
    // console.log(req.query.todo);
//$or:[{"car_color":"Red",car_color:"Pink"}]
        let searches = await Pin.find({title:{$regex:`^${req.query.title.trim()}`,$options: 'i'}});
    
        return res.send({
            searches,
        })
       
    }


//post todo
async function postPin(req,res,next){
    const {pin:Data} = req.body;

    let pin = new Pin(Data);

    await pin.save();

    return res.send({
        message: "pin has been added",
        pin
    })
}


//update todo

// async function updateTodo(req,res,next) {
//     // const {todos:todoData} = req.body;
//     // const {id:todoId} = req.params;

//     // let todos = await Todo.findById(todoId)
//     // console.log(todos);

//     // for(const [key, value] of Object.entries(todoData)){
//     //     todos[key] = value;
//     // }

//     // await todos.save();

//     // return res.send({
//     //     message: "Todo has been updated",
//     //     todos,
//     // });


//     const { id } = req.params;
//     const { product: Data } = req.body;
//     const products = await Todo.find();
//     let index = 0;
//     products.forEach((product, i) => {
//         if (product._id == id) {
//             index = i;
//         }

//     })
    
//     products[index] = Data;
    

//     return res.send({
//         message: "Product Updated",
//         products
//     })


// };


// //delete todo
// async function deleteTodo(req, res, next) {
//     const { id: todoId } = req.params;
// const data = await Todo.findById(todoId);
// console.log(data)
//     await Todo.findByIdAndDelete(todoId);

//     return res.send({
//         message: "todo has been deleted.",
//         data

//     })
// }

// // async function sortByField(req,res,next){
// //     let value = req.query;
// //     // console.log(value);
// //     let sorted = await Todo.find(value);
// //     // find().sort({family_members:1}).sort({age:-1});
// //     return res.send({
// //         data:sorted
// //     })
// // }

module.exports = {
    fetchAllPins,
    fetchSinglePin,
    postPin,

    searchPins,
    
    
}