import { IIngredient } from '../../models/ingredient';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  public emitDataChange = new Subject<IIngredient[]>();
  public selectedIdx = new Subject<number>();

  private ingredients: IIngredient[] = [{ name: 'Avokado', amount: 5 }];

  public get getIngredients() {
    return [...this.ingredients];
  }

  public onAddIngredient(val: IIngredient) {
    this.ingredients.push(val);
    this.emitDataChange.next([...this.ingredients]);
  }

  public onEditIngredient(data: IIngredient, idx: number) {
    console.log('edit');
  }

  public recieveIngridientsFromRecipe(data: IIngredient[]) {
    this.ingredients = [...this.ingredients, ...data];
    this.emitDataChange.next([...this.ingredients]);
  }
}
