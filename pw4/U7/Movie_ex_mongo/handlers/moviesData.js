const Movie = require("../database/moviesData");

async function fetchAllMovies(req, res, next) {
    const movies = await Movie.find();

    return res.send({
        data: movies
    });
}
 //fecthing one movie;
async function searchMovies(req ,res, next){
console.log(req.query.title)
    let searches = await Movie.find({title:{$regex:`^${req.query.title.trim()}`,$options: 'i'}});

    return res.send({
        data:searches
    })
   
}

async function fetchSingleMovie(req, res, next) {
            const {id}= req.params;

            const movie = await Movie.findById(id);

            if(movie){
                return res.send({
                    data:movie
                });
            }else{
               return res.status(404).send({
                    error: "Movie by given  ID not exxist"
                });
            }
}



async function postMovieData(req,res,next){
    const {movie:Data} = req.body;

    let movie = new Movie(Data)

    await movie.save();

    return res.send({
        message: "Movie has been added"
    })
}




async function updateMovie(req, res, next) {
    const { movie: movieData } = req.body;
    const { id: movieId } = req.params;

    let movie = await Movie.findById(movieId)

    for(const [key, value] of Object.entries(movieData)){
        movie[key] = value;
    }

    await movie.save();

    return res.send({
        message: "movie has been updated",
        data: movie,
    });
};

async function deleteMovie(req, res, next) {
    const { id: movieId } = req.params;

    await Movie.findByIdAndDelete(movieId);

    return res.send({
        message: "Product has been deleted."
    })
}

async function sortByField(req,res,next){
    let value = req.query;
    // console.log(value);
    let sorted = await Movie.find().sort(value);
    // find().sort({family_members:1}).sort({age:-1});
    return res.send({
        data:sorted
    })
}

async function pagination(req,res,next){
    
}
module.exports = {
    fetchAllMovies,
    fetchSingleMovie,
    searchMovies,
    postMovieData,
    updateMovie,
    deleteMovie,
    sortByField,
    pagination
    
}