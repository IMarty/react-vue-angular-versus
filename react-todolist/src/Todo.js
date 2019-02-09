import React, { Component } from 'react';
import './Todo.css';
import TodoItem from './components/TodoItem';
import Logo from './assets/logo.svg';

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // this is where the data goes
      list: [
        {
          todo: 'clean the house'
        },
        {
          todo: 'buy milk'
        }
      ],
      todo: ''
    };
  }

  createNewToDoItem = () => {
    this.setState(({ list, todo }) => ({
      list: [
        ...list,
        {
          todo
        }
      ],
      todo: ''
    }));
  };

  handleKeyPress = e => {
    if (e.target.value !== '') {
      if (e.key === 'Enter') {
        this.createNewToDoItem();
      }
    }
  };

  handleInput = e => {
    this.setState({
      todo: e.target.value
    });
  };

  // this is now being emitted back to the parent from the child component
  deleteItem = indexToDelete => {
    this.setState(({ list }) => ({
      list: list.filter((toDo, index) => index !== indexToDelete)
    }));
  };

  render() {
    return (
      <main>
        <img src={Logo} alt="React logo" />
        <h1>React TodoList</h1>
        <section>
          {this.state.list.map((item, key) => {
            return (
              <TodoItem key={key} item={item.todo} deleteItem={this.deleteItem.bind(this, key)} />
            );
          })}
        </section>
        <section>
          <input
            type="text"
            value={this.state.todo}
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
