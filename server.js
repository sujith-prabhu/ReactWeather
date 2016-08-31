var express = require('express');

var app = express();

var PORT = process.env.PORT || 3000;
//applies to every request
//SpMistake: app.use(req, res, next){ //missing function
// app.use(function(req, res, next){
//   /* OpenWeatherMap free version only supports, http but heroku works only https.
//   So, use the middleware to convert all the https to http.
//   */
//   debugger;
//   if(req.headers["x-forwarded-proto"] ==='http' ){
//     next();
//   }else {
//     res.redirect('http://' + req.hostname + req.url);
//   }
// });

app.use(express.static('public'));

// app.listen(3000, function(){
//   console.log('Express server started on port 3000');
// });
app.listen(PORT, function(){
  console.log('Express server started on port :', PORT);
});
