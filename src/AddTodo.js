import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    content: ""
  };

  handleChange = e => {
    this.setState({ content: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({ content: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Add Todos</label>
        <input
          type="text"
          value={this.state.content}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default AddTodo;
