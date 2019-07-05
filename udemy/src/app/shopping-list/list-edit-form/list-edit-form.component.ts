import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Ingredient } from '../models/ingredient';
import { ShoppingListService } from '../services/shopping-list/shopping-list.service';

@Component({
  selector: 'app-list-edit-form',
  templateUrl: './list-edit-form.component.html',
  styleUrls: ['./list-edit-form.component.scss']
})
export class ListEditFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private slService: ShoppingListService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      amount: [
        '',
        [
          Validators.required,
          Validators.pattern('^[1-9]+[0-9]*$'),
          Validators.min(1)
        ]
      ]
    });
  }

  get name() {
    return this.form.get('name');
  }

  get amount() {
    return this.form.get('amount');
  }

  onSubmitAdd(e: Event) {
    e.preventDefault();
    const fields = this.form.value as Ingredient;

    this.slService.onAddIngredient(new Ingredient(fields.name, fields.amount));
  }
}
