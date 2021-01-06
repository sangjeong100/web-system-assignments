var express = require('express');
var router = express.Router();

var Movie = require('../models/movie')

/* GET users listing. */
router.post('/routes/movie/create', function(req, res, next) {

  const movie = new Movie({
    title : req.body.title,
    year : req.body.year,
    url : req.body.imagePath
  });

  console.log(movie)
  
  //callback 활용
  movie.save((err)=>{
    if(err){
      console.log(err)
      res.end('<script type="text/javascript">alert("movie save Fail!");location.href="http://localhost:3000/";</script>');
    }
    else{
      res.redirect('http://localhost:3000/');
    }
  });

  //Promise 활용
  // function saveFunc(movie){
  //   return new Promise((resolve,reject)=> {
  //     movie.save((err)=>{
  //       if(err) return reject(err);
  //       else return resolve('movie success');
  //     });
  //   });
  // }
 
  // const p = saveFunc(movie);
  // p.then(function(){
  //   res.redirect('http://localhost:3000/');
  // });
  // p.catch(function(err){
  //   console.log(err)
  //   res.end('<script type="text/javascript">alert("movie save Fail!");location.href="http://localhost:3000/";</script>');
  // });
});

module.exports = router;
