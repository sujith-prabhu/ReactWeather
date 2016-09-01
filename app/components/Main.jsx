var React = require('react');
var Nav = require('Nav');

// var Main = React.createClass({
//   render: function(){
//     return(
//     <div>
//         <div><Nav /></div>
//         <div>Main component</div>
//         {this.props.children}
//       </div>
//     )
//   }
// });

// var Main = (props) => {
//   return(
//   <div>
//       <div><Nav /></div>
//       <div>Main component..stateless function</div>
//       {props.children}
//     </div>
//   );
// }

var Main = (props) =>   <div>
      <div><Nav /></div>
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          {props.children}
        </div>
      </div>
    </div>

module.exports = Main;
