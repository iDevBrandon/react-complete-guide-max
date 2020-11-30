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
  };

  switchNameHandler = () => {
    console.log(123);
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, im react</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
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
