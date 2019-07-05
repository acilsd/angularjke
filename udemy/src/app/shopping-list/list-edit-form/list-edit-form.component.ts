import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Ingredient, IIngredient } from '../models/ingredient';
import { ShoppingListService } from '../services/shopping-list/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-edit-form',
  templateUrl: './list-edit-form.component.html',
  styleUrls: ['./list-edit-form.component.scss']
})
export class ListEditFormComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private editingIngr: IIngredient;

  public edit = false;
  public form: FormGroup;

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

    this.subscription = this.slService.selectedIdx.subscribe((idx: number) => {
      this.editingIngr = this.slService.getIngredients[idx];

      if (this.editingIngr) {
        this.edit = true;
        this.form.setValue({
          name: this.editingIngr.name,
          amount: this.editingIngr.amount
        });
      }
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

    !this.edit
      ? this.slService.onAddIngredient(
          new Ingredient(fields.name, fields.amount)
        )
      : this.slService.onEditIngredient(fields, 1);

    this.edit = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
