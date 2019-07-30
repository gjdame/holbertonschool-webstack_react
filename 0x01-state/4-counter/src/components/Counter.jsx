import React from "react";
import PropTypes from "prop-types";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.initValue };
    this.handleclick = this.handleclick.bind(this);
  }

  // handles click to set value to 1000 from initValue or null
  handleclick() {
    this.setState(state => ({
      value: 1000
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
