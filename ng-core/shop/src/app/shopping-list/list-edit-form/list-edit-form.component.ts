import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Ingredient } from '../models/ingredient';
import { ShoppingListService } from '../services/shopping-list/shopping-list.service';
import { createAddForm } from './form';

@Component({
  selector: 'app-list-edit-form',
  templateUrl: './list-edit-form.component.html',
  styleUrls: ['./list-edit-form.component.scss']
})
export class ListEditFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private service: ShoppingListService,
    private formBuilder: FormBuilder
  ) {
    this.form = createAddForm(formBuilder);
  }

  ngOnInit() {}

  onSubmitAdd(e: Event) {
    e.preventDefault();
    const fields = this.form.value as Ingredient;

    this.service.onAddIngredient(new Ingredient(fields.name, fields.amount));
  }
}
