function getWeatherCallback(location, callback) {
  callback('Location not found');
  callback(null, 55);
}

getWeatherCallback('London', function(err, temp){
  if(err){
    console.log(err);
  }else{
    console.log('Temprature is :', temp);
  }
});


function getWeatherPromise(location){
  /*
  SpMistake: I tried as : return new Promise(){
  Got error :
      c:\sp\prep2016\react\L31\ReactWeather\promiseexample.js:16
      return new Promise(){
    SyntaxError: Unexpected token {
        at exports.runInThisContext (vm.js:53:16)
    */
  return new Promise(function(resolve, reject){
    //SpMistake: in this case, whichever is defined first will be called.
    setTimeout(function(){
      resolve(88);
      reject('Temp not found');
    }, 10000);
  });
}
/*
SpMistake: Tried with :getWeatherPromise.then(
Got error:
  c:\sp\prep2016\react\L31\ReactWeather\promiseexample.js:29
  getWeatherPromise.then(
                  ^
  TypeError: getWeatherPromise.then is not a function
*/
getWeatherPromise().then(
  function(temp){
    console.log('Temp from promise example is :', temp);
  },
  function(err){
    console.log('Error from promise example is :', err);
  }
)

function onResolve(sum){
  console.log('Sum is :', sum)
}


function onReject(err){
  console.log('Err is :', err);
}

//------Challenge:
function addNumbersPromise1(a, b){
  if(typeof(a) === 'number' && typeof(b) === 'number'){
    return new Promise(function(resolve, reject){
      resolve(a+b);
    });
  }else{
    return new Promise(function(resolve, reject){
      reject('Invalid input');
    });
  }
}

function addNumbersPromise2(a, b){
  return new Promise(function(resolve, reject){
    if(typeof(a) === 'number' && typeof(b) === 'number'){
      resolve(a+b);
    }else{
      reject('Invalid input');
    }
  });
}

addNumbersPromise1(2,4).then(onResolve, onReject);
addNumbersPromise1(2).then(onResolve, onReject);

addNumbersPromise2(3,4).then(onResolve, onReject);
addNumbersPromise2(2).then(onResolve, onReject);
