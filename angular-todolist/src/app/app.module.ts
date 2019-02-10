import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TodolistComponent } from './components/todolist/todolist.component';
import { TodoitemComponent } from './components/todoitem/todoitem.component';

// Module required for the two way databinding
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodolistComponent, TodoitemComponent], // Components goes there
  imports: [BrowserModule, FormsModule], // Modules goes there
  providers: [], // services goes here for data managment
  bootstrap: [TodolistComponent] // first component to load
})
export class AppModule {}
