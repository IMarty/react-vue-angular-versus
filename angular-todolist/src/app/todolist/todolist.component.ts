import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
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
  constructor() {}

  ngOnInit() {}
  createNewToDoItem() {
    // validate todo
    if (!this.todo) {
      alert('Please enter a todo!');
      return;
    }
    // Add the todo to the list
    const newId = Math.max.apply(null, this.list.map(t => t.id)) + 1;
    this.list.push({ id: newId, item: this.todo.item });
    this.todo.item = '';
  }
  onDeleteItem(todo) {
    this.list = this.list.filter(el => el !== todo);
  }
}
