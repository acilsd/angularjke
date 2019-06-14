import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  EventEmitter,
  Output
} from '@angular/core';
import { IIngredient, Ingredient } from '../models/ingredient';

@Component({
  selector: 'app-list-edit-form',
  templateUrl: './list-edit-form.component.html',
  styleUrls: ['./list-edit-form.component.scss']
})
export class ListEditFormComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameInput: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInput: ElementRef;

  @Output() handleAdd = new EventEmitter<IIngredient>();

  constructor() {}

  ngOnInit() {}

  onSubmitAdd(e: Event) {
    e.preventDefault();
    const ingredientToAdd = new Ingredient(
      this.nameInput.nativeElement.value,
      this.amountInput.nativeElement.value
    );

    this.handleAdd.emit(ingredientToAdd);
  }
}
