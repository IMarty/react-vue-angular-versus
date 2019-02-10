import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TodolistComponent } from './components/todolist/todolist.component';
import { TodoitemComponent } from './components/todoitem/todoitem.component';
import { TodoControllerService } from './controllers/todo-controller.service';

// Module
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodolistComponent, TodoitemComponent], // Components goes there
  imports: [BrowserModule, FormsModule], // Modules : FormsModule is required for the two way databinding
  providers: [TodoControllerService], // services goes here for data managment
  bootstrap: [TodolistComponent] // first component to load
})
export class AppModule {}
