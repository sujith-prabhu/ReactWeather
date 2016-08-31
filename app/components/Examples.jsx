//SpMisake: var react = require('react');

var React = require('react');

// var Examples = React.createClass({
//   render: function(){
//     return(<h2>This is Examples</h2>);
//   }
// });

var Examples = (props) => {
  return(
    <div>
      <h2>Examples</h2>
      <h2>Welcome to weather app !</h2>
    </div>
  );
}

module.exports = Examples;
