import { IRecipe, Recipe } from '../../models/recipe';

export class RecipeService {
  private recipes: IRecipe[] = [];

  get getRecipes() {
    return [...this.recipes];
  }

  constructor() {
    const recipe = new Recipe(
      'Test Name',
      'Test Description',
      'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg'
    );
    this.recipes.push(recipe);
  }
}
