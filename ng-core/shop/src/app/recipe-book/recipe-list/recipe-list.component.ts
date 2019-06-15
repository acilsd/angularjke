import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { IRecipe, Recipe } from '../models/recipe';
import { RecipeService } from '../services/recipes/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() selectCurrentRecipe = new EventEmitter<IRecipe>();

  recipes: IRecipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = [...this.recipes, ...this.recipeService.getRecipes];
  }

  onSelect(el: IRecipe) {
    this.selectCurrentRecipe.emit(el);
  }
}
