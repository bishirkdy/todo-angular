import { Component, input } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
    todos = input<Todo[]>([]);

}
