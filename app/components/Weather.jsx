var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return({
      isLoading: false
    })
  },
  handleCityChange: function(city){
    debugger;
    var that = this;
    this.setState({
      isLoadingg: true
    })
    OpenWeatherMap.getTemp(city).then(
      function(temp){
        that.setState({
          isLoadingg: false,
          city:city,
          temp:temp
        });
      },
      function(errMsg){
        that.setState({
          isLoading: false,
          city: null,
          temp: null
        });
        alert(errMsg);
      }
  );
  },

  render: function(){
    var {isLoading, city, temp} = this.state;

     function displayMessage(){
      if (isLoading) {
        return <div>Loading ...</div>
      }else if (city && temp) {
        return <WeatherMessage city={city} temp={temp}/>
      }
    }

    return(
      <div>
        <h1>Get Weather</h1>
        <WeatherForm onCityChange={this.handleCityChange}/>
        {displayMessage()}
      </div>)}
});

module.exports = Weather;
