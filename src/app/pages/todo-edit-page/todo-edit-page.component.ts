import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Todo } from 'src/app/models/todo/todo.model';

@Component({
  selector: 'app-todo-edit-page',
  templateUrl: './todo-edit-page.component.html',
  styleUrls: ['./todo-edit-page.component.scss']
})
export class TodoEditPageComponent implements OnInit {

  @Input() todo: any = new Todo('','',0,'', new Date())

  constructor(private location: Location) { }

  ngOnInit(): void {
    if(this.location.getState()){
      this.todo = this.location.getState();
    }
  }

}
