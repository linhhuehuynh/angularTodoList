import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();
  title:string;
  id:number;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    const todo = {
      id: this.id,
      title: this.title,
      completed: false
    }

    this.addTodo.emit(todo);
  }

}
