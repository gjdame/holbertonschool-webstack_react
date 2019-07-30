import React from "react";
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.initValue || 0 };
    this.handleclick = this.handleclick.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // increases value by 1
  tick() {
    this.setState({
      value: (this.state.value + 1)
    });
  }

  // handles click to reset value to props or 0
  handleclick() {
    this.setState(state => ({
      value: this.props.initValue || 0
    }));
  }
  render() {
    return (
      <span>
        <div>{this.state.value}</div>
        <button onClick={this.handleclick}>New value</button>
      </span>
    );
  }
}

Counter.PropTypes = {
  value: PropTypes.number
};

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);