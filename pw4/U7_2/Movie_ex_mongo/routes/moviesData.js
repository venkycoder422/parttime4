
const express = require('express');
const { fetchAllMovies, fetchSingleMovie, postMovieData, updateMovie, deleteMovie , searchMovies, sortByField ,pagination} = require('../handlers/moviesData');

const moviesRouter = express.Router();

// moviesRouter.get(`/movies/all`,(req,res) =>{
//     console.log("In Get fetch movies all");

//    return res.send({
//         data:[] //fetch movies from database
//     });
// });

moviesRouter.get(`/movies/all`, fetchAllMovies);
moviesRouter.get(`/movies/:id`, fetchSingleMovie);
moviesRouter.get(`/movies/all/search`, searchMovies);
// moviesRouter.get(`/movies/searches`, searchMovie);
moviesRouter.post(`/movies`, postMovieData);
moviesRouter.patch(`/movies/:id`, updateMovie);
moviesRouter.delete(`/movies/:id`, deleteMovie);
moviesRouter.get(`/movies/all/sort`,sortByField);
moviesRouter.get(`movies/all/pagin`,pagination)
// moviesRouter.get(`/movies`,async (req,res)=>{
//     const match = {};
//     if(req.query.rating){
//         match.rating = req.query.rating === "true"
//     }

//     if(req.query.sortBy){
//         const str = req.query.sortBy.split(':')
//         sort[str[0]] = str[1] === 'desc' ? -1:1
//     }

//     try {
//         await req.movie.populate({
//             path:'movies',
//             match,
//             options:{
//                 limit:parseInt(req.query.limit),
//                 skip:parseInt(req.query.skip),
//                 sort
//             }
//         }).execPopulate()
//         res.status(200).send(req.movie.movies);
//     } catch (e) {
//         res.status(400).send(e.message)
//     }
// })



module.exports = moviesRouter;