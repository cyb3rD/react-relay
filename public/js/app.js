var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({
  render: function() {
    return React.createElement("h3", null, "Hi React!");
  }
});

ReactDOM.render(React.createElement(Hello), document.getElementById('react-app'));