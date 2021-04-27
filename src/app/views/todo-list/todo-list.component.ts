import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() newTodo = new Todo('','',0,'', new Date())

  todoList: Todo[] = [];

  constructor() { }

  ngOnInit(): void {
    if(this.newTodo.urgency != 0){
      this.addTodo(this.newTodo)
    }
  }

  addTodo(todo: Todo){
    this.todoList.push(todo)
  }

}
