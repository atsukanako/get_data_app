import React from "react";
import { render } from "react-dom";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = { member: [] };
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>Get data</button>
        {this.memberList(this.state.member)}
      </>
    );
  }

  memberList(list) {
    const memberList = list.map((member) => (
      <li>
        {member.name} {member.age}
      </li>
    ));
    return <ul>{memberList}</ul>;
  }

  handleClick = () => {
    const url = "https://api.jsonserve.com/OFFcaC";

    axios.get(url).then((res) => {
      this.setState(res.data);
    });
  };
}

render(<App />, document.getElementById("root"));
