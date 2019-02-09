import React, { Component } from 'react';
import './TodoItem.css';

class ToDoItem extends Component {
  render() {
    return (
      <article>
        <p>{this.props.item}</p>
        <button onClick={this.props.deleteItem}>-</button>
      </article>
    );
  }
}

export default ToDoItem;
