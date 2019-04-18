const ReactDOM = require('react-dom');
const React = require('react');

class TestClass extends React.Component {
  render() {
    return React.createElement('h1', {}, 'stuff')
  }
}

ReactDOM.render(
    React.createElement(TestClass), document.querySelector('#root')
  );
  