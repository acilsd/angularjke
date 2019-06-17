import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { ShoppingListService } from '../services/shopping-list/shopping-list.service';

@Component({
  selector: 'app-list-edit-form',
  templateUrl: './list-edit-form.component.html',
  styleUrls: ['./list-edit-form.component.scss']
})
export class ListEditFormComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameInput: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInput: ElementRef;

  constructor(private service: ShoppingListService) {}

  ngOnInit() {}

  onSubmitAdd(e: Event) {
    e.preventDefault();
    const ingredientToAdd = new Ingredient(
      this.nameInput.nativeElement.value,
      this.amountInput.nativeElement.value
    );

    this.service.onAddIngredient(ingredientToAdd);
  }
}
