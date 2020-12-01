import React, { Component } from "react";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends Component {
  state = {
    userInput: "",
  };

  inputChangedHandler = (event) => {
    this.setState({ userInput: event.target.value });
  };

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    this.setState({ userInput: updatedText });
  };

  render() {
    const charList = this.state.userInput.split("").map((char, index) => {
      return (
        <Char
          key={index}
          character={char}
          clicked={() => this.deleteCharHandler(index)}
        />
      );
    });

    return (
      <div>
        <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInput}
        />
        {charList}
        <Validation length={this.state.userInput.length} />
      </div>
    );
  }
}

export default App;
