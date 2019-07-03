import { IRecipe, Recipe } from '../../models/recipe';
import { EventEmitter, Injectable } from '@angular/core';
import { IIngredient } from 'src/app/shopping-list/models/ingredient';
import { ShoppingListService } from 'src/app/shopping-list/services/shopping-list/shopping-list.service';

const uuid = () =>
  'recipe_' +
  Math.random()
    .toString(36)
    .substr(2, 9);

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private shoplist: ShoppingListService) {
    const recipe = new Recipe(
      uuid(),
      'Test Name',
      'Test Description',
      'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg',
      [{ name: 'avokado', amount: 12 }]
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

  public selected = new EventEmitter<IRecipe>();

  private recipes: IRecipe[] = [];

  get getRecipes() {
    return [...this.recipes];
  }

  public getSelectedRecipe(id: string): IRecipe {
    return this.recipes.find(r => r.id === id);
  }

  public addToShopList(data: IIngredient[]) {
    this.shoplist.recieveIngridientsFromRecipe(data);
  }
}
