import React, { Component } from "react";
import UserInput from "./components/UserInput/UserInput";
import UserOutput from "./components/UserOutput/UserOutput";

class App extends Component {
  state = {
    usernames: [
      { username: "iDevBrandon" },
      { username: "Elizabeth" },
      { username: "Erin" },
    ],
  };

  usernameChangedHandler = (event) => {
    this.setState({
      usernames: [
        { username: event.target.value },
        { username: "Elizabeth" },
        { username: "Erin" },
      ],
    });
  };

  render() {
    return (
      <div>
        <UserInput
          changed={this.usernameChangedHandler}
          value={this.state.usernames[0].username}
        />
        <UserOutput username={this.state.usernames[0].username} />
        <UserOutput username={this.state.usernames[1].username} />
        <UserOutput username={this.state.usernames[2].username} />
      </div>
    );
  }
}

export default App;
