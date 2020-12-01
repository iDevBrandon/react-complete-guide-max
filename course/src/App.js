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
    showPersons: false,
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

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "max", age: 24 },
        { name: event.target.value, age: 20 },
        { name: "emily", age: 27 },
      ],
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Maxi")}
            changed={this.nameChangedHandler}
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
    return (
      <div className="App">
        <h1>Hi, im react</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
