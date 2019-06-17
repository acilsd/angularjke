import { Component, OnInit } from '@angular/core';
import { IIngredient } from '../models/ingredient';
import { ShoppingListService } from '../services/shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IIngredient[] = [];

  constructor(private service: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.service.getIngredients;
    this.service.emitDataChange.subscribe(
      (newList: IIngredient[]) => (this.ingredients = newList)
    );
  }
}
