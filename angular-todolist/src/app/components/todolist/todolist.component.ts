// Semantic imports
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

// Component decorator
@Component({
  selector: 'app-todolist', // html tag of the component
  templateUrl: './todolist.component.html', // html content in a separated file
  styleUrls: ['./todolist.component.css'] // css rules in a separated file
})

// the class is where the datas and functions goes
export class TodolistComponent implements OnInit {
  // Datas goes there
  list: Todo[] = [
    {
      id: 1,
      item: 'clean the house'
    },
    {
      id: 2,
      item: 'buy milk'
    }
  ];
  todo: Todo = { id: 0, item: '' };

  // And also the functions
  // to ADD
  createNewToDoItem() {
    // not empty check
    if (this.todo.item === '') {
      alert('Please enter a todo!');
      return;
    }
    // Mutate list data
    this.list = [
      ...this.list,
      {
        id: Math.max.apply(null, this.list.map(t => t.id)) + 1,
        item: this.todo.item
      }
    ];
    // reset input variable
    this.todo.item = '';
  }
  // and REMOVE
  onDeleteItem(todo) {
    // Mutate list data
    this.list = this.list.filter(el => el !== todo);
  }
  // constuctor
  constructor() {}
  // function executed right after component is created
  ngOnInit() {}
}
