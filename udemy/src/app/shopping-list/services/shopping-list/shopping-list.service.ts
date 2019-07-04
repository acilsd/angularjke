import { IIngredient } from '../../models/ingredient';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  public emitDataChange = new Subject<IIngredient[]>();

  private ingredients: IIngredient[] = [{ name: 'Avokado', amount: 5 }];

  get getIngredients() {
    return [...this.ingredients];
  }

  public onAddIngredient(val: IIngredient) {
    if (val.name && val.amount) {
      this.ingredients.push(val);
      this.emitDataChange.next([...this.ingredients]);
    }
  }

  public recieveIngridientsFromRecipe(data: IIngredient[]) {
    this.ingredients = [...this.ingredients, ...data];
    this.emitDataChange.next([...this.ingredients]);
  }
}
