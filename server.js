var express = require('express');

var app = express();

var PORT = process.env.PORT || 3000;
//applies to every request
//SpMistake: app.use(req, res, next){ //missing function

/*without the below fix, we would get this error in console in the app:
xhr.js?14ed:129XMLHttpRequest cannot load
http://api.openweathermap.org/data/2.5/weather?appid=c4e735ea8bd7e7b6dc8368c752517b2d&units=imperial&q=London.
Failed to start loading.xhrAdapter @ xhr.js?14ed:129
*/
app.use(function(req, res, next){
  /* OpenWeatherMap free version only supports, http but heroku works only https.
  So, use the middleware to convert all the https to http.
  */

  // if(req.headers["x-forwarded-proto"] ==='http' ){
  //   next();
  // }else {
  //   res.redirect('http://' + req.hostname + req.url);
  // }

  if(req.headers["x-forwarded-proto"] ==='https' ){
    res.redirect('http://' + req.hostname + req.url);
  }else {
    next();
  }


});

app.use(express.static('public'));

// app.listen(3000, function(){
//   console.log('Express server started on port 3000');
// });
app.listen(PORT, function(){
  console.log('Express server started on port :', PORT);
});
