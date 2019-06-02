import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  @Output() add: EventEmitter<any> = new EventEmitter();

  title: string;

  constructor() { }

  ngOnInit() {
  }

  handleSubmit = () => {
    this.add.emit({ title: this.title, completed: false });
  }
}
