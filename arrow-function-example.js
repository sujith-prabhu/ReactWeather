var names=['John', 'Robert', 'Sophia'];

function printNames(){
  names.forEach(function(name){
    console.log('Name is : ', name);
  });
}

function arrowLong(){
  names.forEach((name) => {
    console.log('Name from arrow function is :', name);
  })
}

function arrowShort(){
  //SpMistake: (name)= instead of (name)=>
  //SpMistake: No semicolon like this: 'Name is :', name););
  names.forEach((name)=> console.log('Name is :', name));
}

//short hand arrow function returns implicitly.
var returnMe = (name) => name + ' changed';

var person =  {
  name: 'Andrew',
  greet1: function(){
    names.forEach(function(anotherName){
        console.log(this.name  + ' says hi to ' + anotherName)
    });
  },
  greet2: function(){
    //same as above but with arrow function
    names.forEach((anotherName)=> console.log(this.name  + ' says hi to ' + anotherName));
  }
}


printNames();
arrowLong();
arrowShort();
console.log('returnMe("Roger") :', returnMe('Roger')) ;
person.greet1();
person.greet2();

/*
Output is:
$ node arrow-function-example.js
Name is :  John
Name is :  Robert
Name is :  Sophia
Name from arrow function is : John
Name from arrow function is : Robert
Name from arrow function is : Sophia
Name is : John
Name is : Robert
Name is : Sophia
returnMe("Roger") : Roger changed
undefined says hi to John
undefined says hi to Robert
undefined says hi to Sophia
Andrew says hi to John
Andrew says hi to Robert
Andrew says hi to Sophia
*/

//Challenge:
function add(a,b){
  return (a+b);
}

console.log('3 + 4 = ', add(3,4));
console.log('3 + 0 = ', add(3,0));

//Arrow function version of statement type:
// var addStatement = ((a,b) => {
//   return a+b;
// })

//SpMistake: above has redundant ()
var addStatement = (a,b) => {
  return a+b;
}

console.log('3 + 4 = ', addStatement(3,4));
console.log('3 + 0 = ', addStatement(3,0));

//Arrow function version of expression type:
//var addExpression = ((a,b) => a+b);
//SpMistake: above has redundant ()
var addExpression = (a,b) => a+b;
console.log('3 + 4 = ', addExpression(3,4));
console.log('3 + 0 = ', addExpression(3,0));
