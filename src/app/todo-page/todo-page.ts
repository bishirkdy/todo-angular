import { Component } from '@angular/core';
import { Todo } from '../todo';
import { TodoForm } from "../todo-form/todo-form";
import { TodoList } from '../todo-list/todo-list';

@Component({
  selector: 'app-todo-page',
  imports: [TodoList, TodoForm],
  templateUrl: './todo-page.html',
  styleUrl: './todo-page.css',
})
export class TodoPage {
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

  addTodo(title : string) {
    if(!title.trim()){
      return;
    }
    const newTodo : Todo = {
      id : Date.now(),
      title : title.trim(),
      completed : false,
    }
    this.todos.push(newTodo)
  }

  deleteTodo(id : number){
    this.todos = this.todos.filter(todo => todo.id != id)
  }

  toggleTodo(id : number){
    const todo = this.todos.find(todo => todo.id === id);
    if(todo){
      todo.completed = !todo.completed;
    }
  }
}