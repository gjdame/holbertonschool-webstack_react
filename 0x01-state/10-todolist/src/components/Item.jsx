import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({ done: !this.state.done }));
  }

  render() {
    console.log(this.state.done);
    return (
      <li
        className={this.state.done ? "done" : null}
        onClick={this.handleClick}
        data-id={this.props.value}
      >
        {this.props.value}
      </li>
    );
  }
}

Item.PropTypes = {
  value: PropTypes.string
};

ReactDOM.render(<Item />, document.getElementById("root"));
