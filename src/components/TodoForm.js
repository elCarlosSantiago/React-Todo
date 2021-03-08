import React, { Component } from 'react';

export default class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: '',
    };
  }

  handleChange = (evt) => {
    const valToUse = evt.target.value;
    this.setState({
      newTodo: valToUse,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({
      newTodo: '',
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add ToDo!"
            value={this.state.newTodo}
            onChange={this.handleChange}
          />
          <button>+</button>
          <button onClick={this.props.clearComplete}>Clear Completed</button>
        </form>
      </div>
    );
  }
}
