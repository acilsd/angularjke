import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../models/recipe';
import { RecipeService } from '../services/recipes/recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book-list.component.html',
  styleUrls: ['./recipe-book-list.component.scss'],
  providers: [RecipeService]
})
export class RecipeBookListComponent implements OnInit {
  selectedRecipe: IRecipe;

  constructor(private service: RecipeService) {}

  ngOnInit() {
    this.service.selected.subscribe((recipe: IRecipe) => {
      this.selectedRecipe = recipe;
    });
  }
}