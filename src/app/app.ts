import { Component, signal } from '@angular/core';
import { Todo } from './todo';
import { TodoPage } from './todo-page/todo-page';

@Component({
  selector: 'app-root',
  imports: [TodoPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
