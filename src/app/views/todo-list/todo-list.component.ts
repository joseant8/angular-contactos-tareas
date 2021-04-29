import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo/todo.model';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoList: Todo[] = [];
  displayedColumns: string[] = ['title', 'description', 'urgency', 'responsable', 'init_date', 'end_date', 'detail'];


  constructor(private serviceTodo: TodoService) {}

  ngOnInit(): void {
    this.todoList = this.serviceTodo.getTodoList();
  }

  addTodo(todo: Todo){
    this.serviceTodo.addTodo(todo);
    this.todoList = this.serviceTodo.getTodoList();
  }

}
