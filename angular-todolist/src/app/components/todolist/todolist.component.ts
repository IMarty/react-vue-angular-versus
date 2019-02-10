// Semantic imports
import { Component, OnInit } from '@angular/core';
import { TodoControllerService } from 'src/app/controllers/todo-controller.service';
import { Todo } from '../../models/todo';

// Component decorator
@Component({
  selector: 'app-todolist', // html tag of the component
  templateUrl: './todolist.component.html', // html content in a separated file
  styleUrls: ['./todolist.component.css'] // css rules in a separated file
})

// the class is where the datas and functions goes
export class TodolistComponent implements OnInit {
  todo: Todo = new Todo();
  list: Todo[];
  // constuctor
  constructor(private todoService: TodoControllerService) {}

  // And also the functions
  // to ADD
  createNewToDoItem() {
    // not empty check
    if (this.todo.item === '') {
      alert('Please enter a todo!');
      return;
    }
    // Call the controller & refresh the view
    this.list = this.todoService.addTodo(this.todo);
    // reset input variable
    this.todo = new Todo();
  }
  // and REMOVE
  onDeleteItem(todo) {
    // Call the controller & refresh the view
    this.list = this.todoService.deleteTodo(todo);
  }
  // function executed right after component is created
  ngOnInit() {
    this.list = this.todoService.getAllTodos();
  }
}
