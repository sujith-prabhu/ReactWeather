//SpMisake: var react = require('react');

var React = require('react');
var {Link} = require('react-router')
// var Examples = React.createClass({
//   render: function(){
//     return(<h2>This is Examples</h2>);
//   }
// });

var Examples = (props) => {
  return(
    <div>
      <h1 className="text-center">Examples</h1>
      <p> Here are a few examples to try out:</p>
      <ol>
        <li>
          <Link to="/?city=Philadelphia">Philadelphia, CA</Link>
        </li>
        <li>
          <Link to="/?city=Rio">Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Examples;
