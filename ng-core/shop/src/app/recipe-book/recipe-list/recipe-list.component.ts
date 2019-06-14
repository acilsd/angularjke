import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { IRecipe, Recipe } from '../models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() selectCurrentRecipe = new EventEmitter<IRecipe>();

  recipes: IRecipe[] = [];

  constructor() {
    const recipe = new Recipe('Test Name', 'Test Description',
      'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg');
    this.recipes.push(recipe);
  }

  ngOnInit() {
  }

  onSelect(el: IRecipe) {
    this.selectCurrentRecipe.emit(el);
  }

}
