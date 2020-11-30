import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 24 },
      { name: "Manu", age: 20 },
      { name: "emily", age: 23 },
    ],
    otherState: "some other value",
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 24 },
        { name: "Manu", age: 20 },
        { name: "emily", age: 27 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, im react</h1>
        <button onClick={() => this.switchNameHandler("Maximillan!!")}>
          Switch name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Maxi")}
        >
          Some hobby : Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
