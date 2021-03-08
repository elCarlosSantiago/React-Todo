import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: JSON.parse(window.localStorage.getItem('todos')) || [],
    };
  }

  componentDidMount() {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    }
  }

  componentDidUpdate() {
    window.localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  addTodo = (todoTask) => {
    if (todoTask !== '') {
      const newTodo = {
        task: todoTask,
        id: new Date(),
        completed: false,
      };
      this.setState({
        todos: [...this.state.todos, newTodo],
      });
    }
  };

  toggleTodo = (todoId) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        return todo.id === todoId
          ? { ...todo, completed: !todo.completed }
          : todo;
      }),
    });
  };

  clearComplete = () => {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.completed === false;
      }),
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} clearComplete={this.clearComplete} />
        <TodoList toggleTodo={this.toggleTodo} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
