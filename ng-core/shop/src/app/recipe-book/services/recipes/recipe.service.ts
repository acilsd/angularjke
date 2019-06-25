import { IRecipe, Recipe } from '../../models/recipe';
import { EventEmitter, Injectable } from '@angular/core';
import { IIngredient } from 'src/app/shopping-list/models/ingredient';
import { ShoppingListService } from 'src/app/shopping-list/services/shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private shoplist: ShoppingListService) {
    const recipe = new Recipe(
      'Test Name',
      'Test Description',
      'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg',
      [{ name: 'avokado', amount: 12 }]
    );
    this.recipes.push(recipe);
  }

  public selected = new EventEmitter<IRecipe>();

  private recipes: IRecipe[] = [];

  get getRecipes() {
    return [...this.recipes];
  }

  public addToShopList(data: IIngredient[]) {
    this.shoplist.recieveIngridientsFromRecipe(data);
  }
}
