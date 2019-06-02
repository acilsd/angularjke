import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ITodo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: ITodo;
  @Output() delete: EventEmitter<ITodo> = new EventEmitter();

  constructor(private service: TodoService) { }

  ngOnInit() {
  }

  setClasses = () => ({
    todoItem: true,
    isCompleted: this.todo.completed
  })

  handleToggle(el: ITodo) {
    const isCompleted = el.completed;
    try {
      el.completed = !isCompleted;
      this.service.sendData(el).subscribe((todo) => {
        console.log(todo);
      });
    } catch (error) {
      console.error(error);
      el.completed = isCompleted;
    }
  }

  handleDelete(el: ITodo) {
    this.delete.emit(el);
  }
}
