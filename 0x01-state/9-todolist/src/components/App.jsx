import React from "react";
import Item from "./Item.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["Read documentation", "Do the tutorial", "Add comment"],
      inputValue: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.state.items.push(this.state.inputValue);
  }

  render() {
    const listItems = this.state.items.map(item => <Item value={item} />);
    return (
      <div>
      <h1>Todo List</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            {" "}
            New:
            <input
              type="text"
              value={this.state.inputValue}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Add" />
        </form>
        <ul>{listItems}</ul>
      </div>
    );
  }
}
