import "./App.css";
import Person from "./Person/Person";

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <Person name="rachel" age="24" />
      <Person name="morgan" age="20">
        Some hobby : Racing
      </Person>
      <Person name="emily" age="23" />
    </div>
  );
}

export default App;
