import { ITodo } from "./itodo.interface";

export class Todo implements ITodo{
  static id_next:number = 0;

  id: number;
  title: string;
  description: string;
  urgency: number;
  responsable: string;
  init_date: Date;
  end_date: Date;

  constructor(title: string, description: string, urgency: number, responsable: string, end_date: Date){
    this.id = Todo.id_next;
    Todo.id_next++;

    this.title = title;
    this.description = description;
    this.urgency = urgency;
    this.responsable = responsable;
    this.init_date = new Date();
    this.end_date = end_date;
  }
}
