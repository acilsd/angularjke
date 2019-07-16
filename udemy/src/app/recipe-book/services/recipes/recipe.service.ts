import { IRecipe, Recipe } from '../../models/recipe';
import { Injectable } from '@angular/core';
import { IIngredient } from 'src/app/shopping-list/models/ingredient';
import { ShoppingListService } from 'src/app/shopping-list/services/shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

const uuid = () =>
  'recipe_' +
  Math.random()
    .toString(36)
    .substr(2, 9);

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: IRecipe[] = [];
  public dataChange = new Subject<IRecipe[]>();

  constructor(private shoplist: ShoppingListService) {}

  get getRecipes() {
    return [...this.recipes];
  }

  public fetchRecipes(data: IRecipe[]) {
    this.recipes = data;
    this.dataChange.next([...this.recipes]);
  }

  public addRecipe(value: IRecipe) {
    this.recipes.push(value);
    this.dataChange.next([...this.recipes]);
  }

  public editRecipe(value: IRecipe) {
    const index = this.recipes.indexOf(this.getSelectedRecipe(value.id));
    this.recipes[index] = value;
    this.dataChange.next([...this.recipes]);
  }

  public deleteRecipe(idx: string) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== idx);
    this.dataChange.next([...this.recipes]);
  }

  public getSelectedRecipe(id: string): IRecipe {
    return this.recipes.find(r => r.id === id);
  }

  public addToShopList(data: IIngredient[]) {
    this.shoplist.recieveIngridientsFromRecipe(data);
  }
}
