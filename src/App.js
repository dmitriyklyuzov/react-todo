import React, { Component } from "react";
import Todos from "./components/Todos";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Go for a run",
        completed: false,
      },
      {
        id: 2,
        title: "Have dinner with wife",
        completed: true,
      },
      {
        id: 3,
        title: "Practice coding",
        completed: false,
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
