//SpMisake: var react = require('react');

var React = require('react');
// var WeatherMessage = React.createClass({
//   render: function(){
//     var city = this.props.city;
//     var temp = this.props.temp;
//     return(<h3>It is {temp} in {city}</h3>);
//   }
// });

// var WeatherMessage = (props) =>{
//   var city = props.city;
//   var temp = props.temp;
//   return(<h3>It is {temp} in {city}</h3>);
// }

var WeatherMessage = ({city, temp}) =>{
  var city = city;
  var temp = temp;
  return(<h3  className="text-center">It is {temp} in {city}... </h3>);
}


module.exports = WeatherMessage;
