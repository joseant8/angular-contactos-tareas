import { Location } from '@angular/common'
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo/todo.model';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss']
})
export class TodosPageComponent implements OnInit {

  todoCreatedAtForm: any = new Todo('', '', 0, '', new Date)

  constructor(private location: Location) { }

  ngOnInit(): void {
    if(this.location.getState()){
      this.todoCreatedAtForm = this.location.getState();
    }
  }

}
