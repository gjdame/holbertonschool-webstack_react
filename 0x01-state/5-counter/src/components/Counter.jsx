import React from "react";
import PropTypes from "prop-types";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.initValue || 0};
    this.handleclick = this.handleclick.bind(this);
  }

  // handles click to increase value by 1
  handleclick() {
    this.setState(state => ({
      value: (state.value + 1)
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
