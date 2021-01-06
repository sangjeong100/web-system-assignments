const Movie = require('../models/movie');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  //Promise
  Movie.find({}).then((movies)=>{
    
    const trendingMovies = movies.filter((movie)=>{
      if(movie.trending === true){
        return true;
      }
    });

    res.render('index', { 
      trendingMovies: trendingMovies,
      movies: movies 
    });
    
  }).catch((err)=>{
    console.log(err);
  });

});

router.get('/newmovie',function(req, res, next) {
  res.render('newmovie',{});

});

router.get('/admin',function(req,res,next){
    Movie.find({}).then((movies)=>{
  
    res.render('admin', { 
      movies: movies 
    });
    
  }).catch((err)=>{
    console.log(err);
  });
  
});

module.exports = router;
