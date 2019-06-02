import { Component, OnInit, Input } from '@angular/core';
import { ITodo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: ITodo;

  constructor() { }

  ngOnInit() {
  }

  setClasses = () => ({
    todoItem: true,
    isCompleted: this.todo.completed
  })

  handleToggle(e) {
    console.log(e);
  }

  handleDelete(e) {
    console.log(e);
  }
}
