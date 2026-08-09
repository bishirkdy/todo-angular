import { Component, output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  imports: [],
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.css',
})
export class TodoForm {
  todoAdded = output<string>();
  addTodo(title : string){
    if(!title.trim()){
      return
    }
  this.todoAdded.emit(title.trim());
  }
}
