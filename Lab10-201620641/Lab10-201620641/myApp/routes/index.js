const Movie = require('../models/movie');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  //기존 Promise
  // Movie.find({}).then((movies)=>{

  //   console.log(movies);
    
  //   const trendingMovies = movies.filter((movie)=>{
  //     if(movie.trending === true){
  //       return true;
  //     }
  //   });

  //   res.render('index', { 
  //     trendingMovies: trendingMovies,
  //     movies: movies 
  //   });
  
    
  // }).catch((err)=>{
  //   console.log(err);
  // });

  //callback 활용
  Movie.find({},(err,movies)=>{
    
    if(err) throw err;
    else{
      console.log(movies);

      const trendingMovies = movies.filter((movie)=>{
        if(movie.trending === true){
          return true;
        }
      });

      res.render('index', { 
        trendingMovies: trendingMovies,
        movies: movies 
      });
    }

  });
});

router.get('/newmovie',function(req, res, next) {
  res.render('newmovie',{});

});

module.exports = router;
