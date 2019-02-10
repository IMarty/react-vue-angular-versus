import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {
  @Input() todoAttribut: Todo;
  @Output() delete: EventEmitter<any> = new EventEmitter();
  constructor() {}
  deleteItem() {
    this.delete.emit();
  }
  ngOnInit() {}
}
