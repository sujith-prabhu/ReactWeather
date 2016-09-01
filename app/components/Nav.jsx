var React = require('react');
var {Link, IndexLink} = require('react-router')

// var Nav = React.createClass({
//   render: function(){
//     return(
//       <div>
//         <h2>
//           Nav Component
//         </h2>
//           <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Get Weather</IndexLink>
//           <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
//           <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
//       </div>
//     );
//   }
// });

var Nav = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    alert('not yet wired up !!');
  },
  render: function(){
    return(<div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-item">React weather app</li>
            <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Get Weather</IndexLink></li>
            <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
            <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.handleSubmit}>
          <ul className="menu">
            <li className="menu-item">
              <input type="text" placeholder="search weather"></input>
            </li>
            <li className="menu-item">
              <input type="submit" className="button" value="Get weather"></input>
            </li>
          </ul>
          </form>
        </div>
      </div>);}
});

module.exports = Nav;
