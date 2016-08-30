//SpMisake: var react = require('react');

var React = require('react');

var WeatherForm = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var city = this.refs.city.value;

    if (city.length > 0) {
      this.refs.city.value = '';
      this.props.onCityChange(city);
    }
  },
  render: function(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Enter the city" ref='city'></input>
        <button>Get Weather</button>
      </form>
    );
  }
});

module.exports = WeatherForm;
