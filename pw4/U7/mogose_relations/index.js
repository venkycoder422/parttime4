const express = require('express');
const cors = require('cors');
const connectDataBase  = require('./database/index');
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');

const app = express();


app.use(express.json());
app.use(cors()); 


//Loggers;
app.use(logger);

 app.use(userRouter);
 app.use(postRouter);

function logger(req, res, next) {
    console.info(new Date(), req.method, req.path);
    next();
}


connectDataBase().then(() => {
    app.listen(3001, () => {
        console.log("Server running at http://localhost:3001")
    })
});