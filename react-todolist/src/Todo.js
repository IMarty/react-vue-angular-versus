//semantic imports
import React, { Component } from 'react';
import TodoItem from './components/TodoItem';

// Access exernal images
import Logo from './assets/logo.svg';

// css rules in a separated file
import './Todo.css';

//Data, function and HTML content goes here
class ToDo extends Component {
  //Contructor's State store the data
  constructor(props) {
    super(props);
    this.state = {
      // this is where the data goes
      list: [
        {
          id: 1,
          item: 'clean the house'
        },
        {
          id: 2,
          item: 'buy milk'
        }
      ],
      todo: {
        id: 0,
        item: ''
      }
    };
  }
  // Functions goes here
  // to ADD
  createNewToDoItem = () => {
    // not empty
    if (this.state.todo.item === '') {
      alert('Please enter a todo!');
      return;
    }
    // We take the old state to set the new one
    // new ID & Add to the list & reset input
    this.setState(({ list, todo }) => ({
      list: [
        ...list,
        {
          id: Math.max.apply(null, this.state.list.map(t => t.id)) + 1,
          item: todo.item
        }
      ],
      todo: {
        id: 0,
        item: ''
      }
    }));
  };

  // and to DELETE
  onDeleteItem = todo => {
    this.setState(({ list }) => ({
      list: list.filter(el => el !== todo)
    }));
  };

  // BUT ALSO
  // handle key press enter specifically
  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.createNewToDoItem();
    }
  };

  // and two way data binding
  handleInput = e => {
    const newTodo = {
      id: 0,
      item: e.target.value //updating value
    };
    this.setState({ todo: newTodo });
    console.log(e.target.value, this.state.todo);
  };

  //HTML/JSX Content goes there
  render() {
    return (
      <main>
        <img src={Logo} alt="React logo" />
        <h1>React TodoList</h1>
        <section>
          {this.state.list.map(todo => {
            return (
              <TodoItem key={todo.id} todo={todo} delete={this.onDeleteItem.bind(this, todo)} />
            );
          })}
        </section>
        <section>
          <input
            type="text"
            value={this.state.todo.item}
            onChange={this.handleInput}
            onKeyPress={this.handleKeyPress}
          />
          <button onClick={this.createNewToDoItem}>+</button>
        </section>
      </main>
    );
  }
}

export default ToDo;
