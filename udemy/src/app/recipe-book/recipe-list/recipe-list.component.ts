import { Component, OnInit, OnDestroy } from '@angular/core';
import { IRecipe } from '../models/recipe';
import { RecipeService } from '../services/recipes/recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  constructor(private recipeService: RecipeService) {}
  recipes: IRecipe[] = [];
  private subscr: Subscription;

  ngOnDestroy(): void {
    this.subscr.unsubscribe();
  }

  ngOnInit() {
    this.subscr = this.recipeService.dataChange.subscribe(
      (recipes: IRecipe[]) => {
        this.recipes = recipes;
      }
    );

    this.recipes = [...this.recipes, ...this.recipeService.getRecipes];
  }
}
