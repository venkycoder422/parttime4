
const express = require('express');

const app = express();

app.get("/",(req,res) => {
    res.send("HELLO");
});

app.get("/books",(req,res) => {
    res.send(['Life is Ocean',"The Tale of two cities","The Little Prices","Harry Potter"]);
});

app.listen(3000);