const books=["GameOfThrones","HarryPotter"];
function getAllBooks(req,res){
    return res.send("Fetching All Books");
}

function booksThrones(req,res){

  req.name=req.params.name;

  return res.send({bookName: req.name});


}


module.exports ={
    getAllBooks,
    booksThrones
}