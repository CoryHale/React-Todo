import React from 'react';

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const list = [];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: list,
      task: "",
      id: "",
      completed: false,
    }
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value})
    console.log(this.state)
  }

  addTodoHandler = event => {
    event.preventDefault();
    let newTodo = {
      task: this.state.task,
      id: Date.now(),
      completed: false,
    }
    this.setState({
      todoList: [...this.state.todoList, newTodo],
      task: "",
    })
  }

  render() {
    return (
      <div>
        <h1>Your Todo List!</h1>
        <TodoList todoList={this.state.todoList}/>
        <TodoForm task={this.state.task} changeHandler={this.changeHandler} addTodoHandler={this.addTodoHandler} />
      </div>
    );
  }
}

export default App;
