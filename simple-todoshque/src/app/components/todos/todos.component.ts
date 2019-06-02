import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ITodo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: ITodo[];

  constructor(private service: TodoService) {

  }

  ngOnInit() {
    this.service.getData().subscribe(todos => {
      this.todos = todos;
    });
  }

  delete = (el: ITodo) => {
    const newState = this.todos.filter((t) => t.id !== el.id);
    const prevState = [...this.todos];
    try {
      this.todos = newState;
      this.service.delete(el).subscribe();
    } catch (error) {
      this.todos = prevState;
    }
  }

  add = (el: ITodo) => {
    this.service.add(el).subscribe((todo: ITodo) => {
      this.todos.push(todo);
    });
  }
}
