import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoControllerService {
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
  constructor() {}
  // ADD
  addTodo(todo: Todo): Todo[] {
    // Mutate list data
    this.list = [
      ...this.list,
      {
        id: Math.max.apply(null, this.list.map(t => t.id)) + 1,
        item: todo.item
      }
    ];

    return this.list;
  }
  // REMOVE
  deleteTodo(todo: Todo): Todo[] {
    this.list = this.list.filter(el => el !== todo);
    return this.list;
  }
  // GET
  getAllTodos(): Todo[] {
    return this.list;
  }
}
