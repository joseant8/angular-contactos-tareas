import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo/todo.model';
import { TodoService } from 'src/app/services/todo/todo.service'

@Component({
  selector: 'app-edit-todo-form',
  templateUrl: './edit-todo-form.component.html',
  styleUrls: ['./edit-todo-form.component.scss']
})
export class EditTodoFormComponent implements OnInit {

  @Input() todo: Todo = new Todo('','',0,'', new Date())

  updateForm: FormGroup = new FormGroup({});

  constructor(private router: Router, private formBuilder: FormBuilder, private todoService: TodoService) { }

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      title: this.todo.title,
      description: this.todo.description,
      urgency: this.todo.urgency,
      responsable: this.todo.responsable,
      end_date: this.todo.end_date
    });
  }

  update(): void {
    let todo: Todo = this.todo
    if(this.updateForm.valid){
      if(this.updateForm.value.title){
        todo.title = this.updateForm.value.title
      }
      if(this.updateForm.value.description){
        todo.description = this.updateForm.value.description
      }
      if(this.updateForm.value.urgency){
        todo.urgency = this.updateForm.value.urgency
      }
      if(this.updateForm.value.responsable){
        todo.responsable = this.updateForm.value.responsable
      }
      if(this.updateForm.value.end_date){
        todo.end_date = this.updateForm.value.end_date
      }
    }
    this.todoService.updateListTodos(todo)
    this.router.navigate(['/todos/' + todo.id], { state: todo });
  }

}
