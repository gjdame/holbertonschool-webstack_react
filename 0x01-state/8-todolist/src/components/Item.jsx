import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <li>{this.props.value}</li>;
  }
}

Item.PropTypes = {
  value: PropTypes.string
};

ReactDOM.render(<Item />, document.getElementById("root"));
