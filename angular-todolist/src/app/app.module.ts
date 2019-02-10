import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoitemComponent } from './todoitem/todoitem.component';

// Module required for the two way databinding
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TodolistComponent, TodoitemComponent],
  imports: [BrowserModule, FormsModule], // Modules goes there
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
