import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import "./styles.css";

class App extends Component {
  state = {
    todos: [{ id: 1, content: "Make bed" }, { id: 2, content: "HackerRank" }]
  };

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos });
  };

  addTodo = todo => {
    todo.id = Math.random;
    const todos = [...this.state.todos, todo];
    this.setState({ todos });
  };

  render() {
    return (
      <div className="app-header container">
        <h1 className="center blue-text"> Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
