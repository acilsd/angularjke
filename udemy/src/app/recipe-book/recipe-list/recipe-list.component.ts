import { Component, OnInit } from '@angular/core';
import { IRecipe, Recipe } from '../models/recipe';
import { RecipeService } from '../services/recipes/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: IRecipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.dataChange.subscribe((recipes: IRecipe[]) => {
      this.recipes = recipes;
    });

    this.recipes = [...this.recipes, ...this.recipeService.getRecipes];
  }
}
