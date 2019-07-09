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

  constructor(private shoplist: ShoppingListService) {
    const recipe = new Recipe(
      uuid(),
      'Test Name',
      'Test Description',
      'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg',
      [{ name: 'avokado', amount: 12 }, { name: 'something', amount: 1 }]
    );

    const recipe2 = new Recipe(
      uuid(),
      'Test Name2',
      'Test Description2',
      'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg',
      [{ name: 'volk', amount: 1 }]
    );
    this.recipes.push(recipe);
    this.recipes.push(recipe2);
  }

  get getRecipes() {
    return [...this.recipes];
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

  public getSelectedRecipe(id: string): IRecipe {
    return this.recipes.find(r => r.id === id);
  }

  public addToShopList(data: IIngredient[]) {
    this.shoplist.recieveIngridientsFromRecipe(data);
  }
}
