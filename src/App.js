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
        completed: false,
      },
      {
        id: 3,
        title: "Practice coding",
        completed: false,
      },
    ],
  };

  // Toggle complete state
  toggleComplete = (id) => {
    // loop through todos, find matching id
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id == id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  // Delete Todo item
  deleteTodo = (id) => {
    // return a new array of ids that don't match
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  render() {
    return (
      <div className="App">
        <Todos
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
