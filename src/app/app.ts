import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  todos : Todo[] = [
    {
      id: 1,
      title: 'Learn Angular',
      completed: false
    },
    {
      id: 2,
      title: 'Learn TypeScript',
      completed: true
    },
    {
      id: 3,
      title: 'Build Todo App',
      completed: false
    }
  ];
}
