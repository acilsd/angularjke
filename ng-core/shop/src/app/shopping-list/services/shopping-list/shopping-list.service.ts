import { IIngredient } from '../../models/ingredient';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  public emitDataChange = new EventEmitter<IIngredient[]>();

  private ingredients: IIngredient[] = [{ name: 'Avokado', amount: 5 }];

  get getIngredients() {
    return [...this.ingredients];
  }

  public onAddIngredient(val: IIngredient) {
    if (val.name && val.amount) {
      this.ingredients.push(val);
      this.emitDataChange.emit([...this.ingredients]);
    }
  }
}
