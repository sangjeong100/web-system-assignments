var express = require('express');
var router = express.Router();
const fs = require('fs');

router.post('/', function(req, res, next) {
  
  let title = req.body.title;
  let actors = req.body.actors;
  let genre = req.body.genre;
  let rating = req.body.rating;
  let poster_url = req.body.poster_url;

  function imgStatCheck(poster_url){
    return new Promise((resolve, reject) =>{
      fs.stat(`./public/${poster_url}`,(err,stats)=>{
        if(err){
          reject(new Error(`Error: not exist img on ${poster_url}`));
        }
        else{
          if(stats.isFile())
            resolve(stats);
          else
            reject(new Error(`Error:  ${poster_url} is not file`));
        }
        
      });
    });
  }
    
  async function myAsync(){
    try{
      const imgChecker = await imgStatCheck(poster_url);
      console.log(imgChecker);
      res.render('result',{
        title: title,
        actors: actors,
        genre: genre,
        rating: rating,
        poster_url: poster_url
      });
    }catch(err){
      console.log(err.message);
      res.end('<script type="text/javascript">alert("You have entered a url that is missing or incorrect.");location.href="http://localhost:3000/";</script>');

    }
  }
  myAsync();

});

module.exports = router;
