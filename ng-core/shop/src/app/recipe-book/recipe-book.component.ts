import { Component, OnInit } from '@angular/core';
import { IRecipe } from './models/recipe';
import { RecipeService } from './services/recipes/recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.scss'],
  providers: [RecipeService]
})
export class RecipeBookComponent implements OnInit {
  selectedRecipe: IRecipe;

  constructor() {}

  ngOnInit() {}
}
