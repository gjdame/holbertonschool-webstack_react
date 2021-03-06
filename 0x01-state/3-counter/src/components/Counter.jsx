import React from 'react';
import PropTypes from "prop-types";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.initValue};
  }
  render() {
    return <div>{this.state.value}</div>;
  }
}

Counter.PropTypes = {
  value: PropTypes.number
};
