var express = require('express');
const { route } = require('.');
var router = express.Router();
const qs = require('querystring');
var Movie = require('../models/movie')

/* create */
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

});

/* read */
router.get(`/routes/movie/read/:id`, function(req, res, next) {
  let id = req.params.id;

  Movie.findById({_id: id}, function (err,movie){
    console.log(movie);
    if(!movie) 
      res.end('<script type="text/javascript">alert("Not Valid Movie ID");location.href="http://localhost:3000/admin";</script>');
    else{
      res.render('editmovie',{
        movie: movie
      });
    }
  }).catch((err) =>{
    console.log(err);
    res.end('<script type="text/javascript">alert("Movie Lookup Failed!");location.href="http://localhost:3000/admin";</script>');
  });
  
});

router.get('/router/movie/update/:id',function(req,res,next){
  res.end('<script type="text/javascript">alert("Not Valid Movie ID");location.href="http://localhost:3000/admin";</script>');
});

/* update */
router.post('/routes/movie/update/:id',function(req, res, next){
  
  let id= req.params.id;

  if (req.body.isTrending){
    let trending = req.body.Trending;  

    Movie.findByIdAndUpdate(id,{
        trending: trending
      },(err,movie)=>{
        if(!movie) 
          res.end('<script type="text/javascript">alert("Not Valid Movie ID");location.href="http://localhost:3000/admin";</script>');
        else{
          res.end('<script type="text/javascript">location.href="http://localhost:3000/admin";</script>');
        } 
      }).catch((err)=>{
        console.log(err);
        res.end('<script type="text/javascript">alert("Movie Lookup Failed!");location.href="http://localhost:3000/admin";</script>');
      });    

  }
  else{
    let title = req.body.title;
    let year = req.body.year;
    let url = req.body.imagePath;
  
    Movie.findByIdAndUpdate(id,{
      title: title,
      year: year,
      url: url,
    },(err,movie)=>{
      if(!movie) 
        res.end('<script type="text/javascript">alert("Not Valid Movie ID");location.href="http://localhost:3000/admin";</script>');
      else{
        res.end('<script type="text/javascript">alert("Movie Update Success!!");location.href="http://localhost:3000/admin";</script>');
      }
    }).catch((err)=>{
      console.log(err);
      res.end('<script type="text/javascript">alert("Movie Lookup Failed!");location.href="http://localhost:3000/admin";</script>');
    });
  }    
});

/* delete */
router.post('/routes/movie/delete/:id', function(req, res, next){

  Movie.findByIdAndRemove(req.params.id).then(()=>{
    res.end('<script type="text/javascript">alert("Movie deletion success!");location.href="http://localhost:3000/admin";</script>');
  }).catch((err)=>{
    console.log(err);
    res.end('<script type="text/javascript">alert("Movie Lookup Failed!");location.href="http://localhost:3000/admin";</script>');  
  })

});

/* ajax Trending Update */
router.post('/routes/movie/ajaxTrendingUpdate/', function(req, res, next){

  let id = req.body.id;
  let trending = req.body.trending;

  Movie.findByIdAndUpdate(id,{
    $set: {
      trending: trending
    }
  })
  .then(() => {
    let data = {
      success : true,
    }
    res.status(200).json(data); //json type으로 데이터 전송
  })
  .catch((err) => {
    console.log(err)
    let data = {
      success : false
    }
    res.status(500).json(data);
  });

});
module.exports = router;
