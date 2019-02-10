import React, { Component } from 'react';
import './TodoItem.css';

class ToDoItem extends Component {
  render() {
    return (
      <article>
        <p>{this.props.todo.item}</p>
        <button onClick={this.props.delete}>-</button>
      </article>
    );
  }
}

export default ToDoItem;
