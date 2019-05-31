import { Component, OnInit } from '@angular/core';
import { ITodo } from '../../models/Todo';

import { from } from 'rxjs';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: ITodo[];

  constructor() { }

  ngOnInit() {
    this.todos = [
      { id: 1, title: 'hardcoded', completed: false },
      { id: 2, title: 'alse hardcoded', completed: false },
    ];
  }

}
