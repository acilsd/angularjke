import { Component, OnInit } from '@angular/core';
import { IRecipe, Recipe } from '../models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: IRecipe[] = [];

  constructor() {
    const recipe = new Recipe('Test', 'Descr', 'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg');
    this.recipes.push(recipe);

    console.log(this.recipes);
  }

  ngOnInit() {
  }

}
