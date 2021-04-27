import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo/todo.model';

@Component({
  selector: 'app-todo-detail-page',
  templateUrl: './todo-detail-page.component.html',
  styleUrls: ['./todo-detail-page.component.scss']
})
export class TodoDetailPageComponent implements OnInit {

  todo: any = new Todo('','',0,'', new Date())

  constructor(private location: Location) { }

  ngOnInit(): void {
    if(this.location.getState()){
      this.todo = this.location.getState();
    }
  }

}
