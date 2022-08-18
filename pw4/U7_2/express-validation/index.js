const express = require('express');
const status = require('statuses');
const { message } = require('statuses');


const app = express();



const logger = (req, res, next) => {
    console.log(new Date(), req.method, req.url);
    next();
}
app.use(logger);
let count=0;
const countreq = (req,res,next)=>{
    count++;
    console.log("#",count);
    next();
}

const middleware = express.json();
app.use(middleware);
let movies = [];
app.get(`/movies`, (req, res, next) => {
    try {
        res.send({
            movies
        })
        next();
    } catch (error) {
        console.log(error)
    }
    
})

function valid(data,next){
    // console.log(typeof(data.ID))
    if(typeof(data.ID)=="number" || typeof(data.ID)=="undefined"  && 
    typeof(data.Name)=="string" || typeof(data.Name)=="undefined"&&
    typeof(data.Rating)=="number"|| typeof(data.Rating)=="undefined" &&
    typeof(data.Description)=="string"|| typeof(data.Description)=="undefined" &&
    typeof(data.Genre)=="string" || typeof(data.Genre)=="undefined"&&
    typeof(data.Cast)=="string" || typeof(data.Cast)=="undefined"){
      next();
        return true;

    }else{
        return false
    }
   
}



app.post(`/movie`, (req,res,next) => {
let data = req.body;

    let max = 0;
    
        movies.forEach((d) => {
            max = Math.max(d.id, max);
        })
if(valid(data,next)){

    let movie = {
        id:max+1,
        data
    }

    movies.push(movie);
    res.send(
        {
            message: "Movie Posted",
            movies
        }
    )
}else{
    res.status(400).send("Bad Request 400");
    
}
    

})

app.use(countreq);
let PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server Cooneted ${PORT}`);
})