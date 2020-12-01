import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "as2", name: "Max", age: 24 },
      { id: "fd2", name: "Manu", age: 20 },
      { id: "gd1", name: "emily", age: 23 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  deletePersonHandler = (PersonIndex) => {
    //const persons = this.state.persons.slice(); or
    const persons = [...this.state.persons];
    persons.splice(PersonIndex, 1);
    this.setState({ persons: persons });
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
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
              />
            );
          })}
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
