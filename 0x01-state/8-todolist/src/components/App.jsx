import React from "react";
import Item from "./Item.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["Read documentation", "Do the tutorial", "Add comment"]
    };
  }

  render() {
    const listItems = this.state.items.map(item => <Item value={item} />);
    return (
      <div>
        <ul>{listItems}</ul>
      </div>
    );
  }
}
