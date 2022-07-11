const express = require('express');

const handler = require('./books');

const app = express();
app.use(express.json());
app.get('/books',handler.getAllBooks);

app.get('/books/:name',handler.booksThrones);

// app.all('/*',(req,res) =>{
//     res.send("WELCOME TO BOOK STORE");
// })


app.listen(3001,()=>{
    console.log("SERVER started listining");
})