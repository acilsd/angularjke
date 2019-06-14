import { Component, OnInit } from '@angular/core';
import { IIngredient, Ingredient } from '../models/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IIngredient[] = [];

  constructor() {
    const ingredient = new Ingredient('Avokado', 5);
    this.ingredients.push(ingredient);
  }

  ngOnInit() {
  }

}
