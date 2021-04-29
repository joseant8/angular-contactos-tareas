import { Injectable } from '@angular/core';
import { Todo } from 'src/app/models/todo/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // algunos ejemplos de todos inicializados
  lista_tareas = [
    new Todo('Tarea 1', 'Esto es la tarea 1', 1, 'Jose Antonio', new Date()),
    new Todo('Tarea 2', 'Esto es la tarea 2', 2, 'Juan', new Date()),
    new Todo('Tarea 3', 'Esto es la tarea 3', 5, 'Marta', new Date()),
    new Todo('Tarea 3', 'Esto es la tarea 3', 3, 'Pablo', new Date()),
    new Todo('Tarea 3', 'Esto es la tarea 3', 4, 'Sandra', new Date()),
    new Todo('Tarea 3', 'Esto es la tarea 3', 3, 'Marta', new Date()),
  ]

  constructor() { }

  addTodo(todo: any){
    this.lista_tareas.push(todo)
  }

  updateListTodos(todoUpdated: Todo){
    this.lista_tareas.map((todo, i) => {
      if (todo.id == todoUpdated.id){
         this.lista_tareas[i] = todoUpdated;
       }
     });
  }

  getTodoList(): Todo[]{
    return this.lista_tareas
  }
}
