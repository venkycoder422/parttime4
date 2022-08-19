
const mongoose= require('mongoose');
async function connectDataBase(){
    const dburi = "mongodb://localhost:27017/Users_relations";
    try{
        await mongoose.connect(dburi);
        console.log("connected DataBase");
    }catch(err){
        console.log("errorr while connect Database");
        throw err;
    }
}

module.exports = connectDataBase;

