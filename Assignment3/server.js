const express = require('express')
const fs = require('fs')
const app = express()

const html = fs.readFileSync('highscore.html');
var highscores = [];

//highscores.push(js);
//console.log(highscores)

app.get('/', (req, res) => {

    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    res.end(html);
 })

 app.get('/highscores', (req, res) => {
   highscores.sort(function(a, b){return  b.score-a.score}); 
   console.log('status' ,highscores)
   res.writeHead(200, { "Content-Type": "application/json" });
   res.end(JSON.stringify(highscores.slice(0,10)));
 })
 
 app.post('/highscore',express.json(), (req, res) => {
   highscores.sort(function(a, b){return  b.score-a.score});
   console.log('Value to insert:', req.body)
   console.log('POST: status' ,highscores)
   if (req.body.score <= 0){
      console.log(req.body)
      console.log('rejected due to 0 or less score')
      res.statusCode = 400;
      res.end();
   } else {
            if (highscores.length >= 10 && highscores[9].score > req.body.score){
               console.log('rejected due to too low value')
               res.statusCode = 400;
               res.end();
            }
   console.log('inserted')
   var js = req.body;
   highscores.push(js);
   res.writeHead(201, { "Content-Type": "application/json" });
   res.end(JSON.stringify(highscores));
   }
 })

 app.delete('/highscores', (req, res) => {
    // tøm array
    highscores.length = 0;
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    res.end();
 })

app.listen(8080, () => console.log(' '))
