const express = require("express");

const app = express();

var morgan = require('morgan')


// Method
// status
// content-length
// time taken
// date
// http version
// url accesed
// newline at the end
//Logger by using Morgan
app.use(morgan(':method :url :response-time :status :http-version :res[content-length] :date : '))

let count=0;
function countreq(req,res,next){
    count++;
    console.log("#",count);
    next();
}

app.use(express.json());


var data=[];

app.get(`/users`,(req,res,next)=>{
    res.send({
        data
    })
   
})

app.use(countreq);


app.get(`/users/demo`,(req,res,next)=>{
    res.send({
        data
    })
    next();
})


app.listen(3001,(req,res)=>{
    console.log("Server connected")
})