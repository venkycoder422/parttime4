const express = require('express');
const cors = require('cors');
const { connectDataBase } = require('./database/index');
const pinsRouter = require('./routes/pin');
const app = express();
app.use(express.json());
app.use(cors()); //prevent eroor cross origin resource sharing while using with react app


//Loggers;
app.use(logger);

app.use(pinsRouter);

function logger(req, res, next) {
    console.info(new Date(), req.method, req.path);
    next();
}


connectDataBase().then(() => {
    app.listen(3000, () => {
        console.log("Server running at http://localhost:3000")
    })
});