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
      <div>Main component..stateless function ...shorter from</div>
      {props.children}
    </div>

module.exports = Main;
