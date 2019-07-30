import React from "react";
import Counter from "./Counter.jsx";
import PropTypes from "prop-types";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Counter initValue={9} />
        <Counter />
      </div>
    );
  }
}

App.PropTypes = {
  counterValue: PropTypes.number
}