const express = require('express');
const cors = require('cors');
const { connectDataBase } = require('./database');
const moviesRouter = require('./routes/moviesData');
const app = express();


app.use(express.json());
// app.use(cors()); //prevent eroor cross origin resource sharing while using with react app


//Loggers;
app.use(logger);

app.use(moviesRouter);

function logger(req, res, next) {
    console.info(new Date(), req.method, req.path);
    next();
}


connectDataBase().then(() => {
    app.listen(3001, () => {
        console.log("Server running at http://localhost:3001")
    })
});