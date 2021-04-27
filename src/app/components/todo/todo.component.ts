import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo = new Todo('','',0,'', new Date())

  constructor() { }

  ngOnInit(): void {
  }

}
