const express = require('express');
const connectDataBase = require('./database');

const app = express();

app.use(express.json());

function logger(){
    console.log(new Date(),method,url.path)
}

app.use(logger);



connectDataBase().then(
    app.listen(3001,()=>{
        console.log("Server connected http://localhost:3001")
    })
)