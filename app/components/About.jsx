//SpMisake: var react = require('react');

var React = require('react');

// var About = React.createClass({
//   render: function(){
//     return(<h2>This is About</h2>);
//   }
// });

// var About = (props) => {
//   return(<h2>This is About</h2>);
// }

var About = (props) => <div>
    <h1 className="text-center">About page</h1>
    <p> Welcome to the about page. I have developed this for the Complete React course</p>
    <p>Here are some of the tools used:</p>
    <ul>
      <li>
        <a href="facebook.com/react">React JS</a><p>This is the JS framework used</p>
      </li>
      <li>
        <a href="openweathermap.com">Open weather map</a><p>This is the weather API</p>
      </li>
    </ul>
</div>

module.exports = About;
