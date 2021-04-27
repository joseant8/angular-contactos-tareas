import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo/todo.model';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  todoForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private router: Router, private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      title: ['título', Validators.required],
      description: ['descripción', Validators.required],
      urgency: ['urgencia', Validators.compose([Validators.min(1), Validators.max(5)])],
      responsable: ['responsable', Validators.required],
      end_date: ['fecha fin', Validators.required]
    })
  }

  submitTodoForm(): void{
    if(true){
        let todo: Todo = new Todo(this.todoForm.value.title, this.todoForm.value.description, this.todoForm.value.urgency, this.todoForm.value.responsable, this.todoForm.value.end_date);

        this.router.navigate(['/todos'], { state: todo });
    }

  }

}
